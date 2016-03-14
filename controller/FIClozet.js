/*jshint multistr: true*/
/* Content of FIClozet.js */
App.controller('FIClozet', function($scope, $log, QuestionTemplates, $controller, $timeout)
{
    //Same in all quiz controllers.
    //Get shared data from QuizEditController.
    var initializing;
    $scope.typeId = 'ficlozet';
    $scope.template = "";

    $controller('PreviewBaseController', {$scope: $scope});

    $scope.generateTemplate = function ()
    {
        var template = "";
        var arrStr;
        if ($scope.qdata.markup && $scope.qdata.markup !== '') {
            arrStr = $scope.qdata.markup.split("##response##");
            for(i = 0; i < arrStr.length - 1; i++)
            {
                template += arrStr[i];
                template += "<div class = 'os-el-check' ng-class = '{os_correct: check_answer && response.score_result[" + i + "] == 1, os_incorrect: check_answer && response.score_result[" + i + "] == 0}'> " +
                    "<input type='text' maxlength='{{qdata.max_length}}' class='form-control os-inline-nofloat' " +
                    "size='{{qdata.max_length}}' ng-model='response.value[" + i + "]'> " +
                    "</div>";
            }
            //Add last text
            template += arrStr[arrStr.length - 1];
            template = '<div>' + template + '</div>';
        }
        $scope.template = template;
        $scope.check_answer = false;
    };


    $scope.initWithData = function(data)
    {
        console.log("** FIClozet **");
        $scope.validateQuizData(data);
        $scope.qdata = data;
        initializing = true; //This flag is used to skip first digest cycle on watch function.
        if ($scope.quiz_data.is_editing)
            $scope.initResponse($scope.qdata);
        $scope.response = $scope.qdata.response;
        $scope.generateTemplate();
    };

    $scope.addAltResponse = function()
    {
        if (!$scope.qdata.validation.alt_response) {
            $scope.qdata.validation.alt_response = [];
        }
        //Initiate value array
        var objTemplate = {
                score: 1,
                value: []
            };

        $scope.qdata.validation.alt_response.push(objTemplate);
    };

    $scope.deleteAltResponse = function(idx)
    {
        $scope.qdata.validation.alt_response.splice(idx, 1);
    };

    /** Quiz Preview part **/
    $scope.checkAnswer = function()
    {
        console.log("** FIClozet CheckAnswer **");
        function scorePoint(arrAnswer, valid_response, strScoringType) {

            var score = 0;
            var arrCheckResult = [];
            for (var idx=0; idx < valid_response.value.length; idx++)
            {
                if (!arrAnswer[idx]) {
                    arrCheckResult.push(0);
                }
                else if (strScoringType == "exactMatch")
                {
                    if (arrAnswer[idx].toLowerCase() !== valid_response.value[idx].toLowerCase()) {
                        arrCheckResult.push(0);
                    }
                    else
                    {
                        arrCheckResult.push(1);
                        score++;
                    }
                }
                else
                {
                    var words = valid_response.value[idx].toLowerCase().split(" ");
                    var answer = arrAnswer[idx].toLowerCase();
                    var numMatches = 0, wordIdx = 0;
                    for (wordIdx in words) {
                        if (answer.indexOf(words[wordIdx]) != -1)
                            numMatches++;
                    }

                    if ((strScoringType == "matchAnyWord" && numMatches > 0) ||
                        (strScoringType == "matchAllWords" && numMatches == words.length)) {
                        arrCheckResult.push(1);
                        score++;
                    }
                    else
                    {
                        arrCheckResult.push(0);    
                    }
                }
            }

            if (valid_response.score == 0) {
                valid_response.score = 1;
            }

            if (valid_response.score == 1 && score/arrCheckResult.length != 1)
                score = 0;
            else
                score = Math.round((score/arrCheckResult.length)*valid_response.score);
            return { 'score' : score, 'arrCheckResult' : arrCheckResult };
        }


        /** Initialize score result. **/
        /* Get score for valid response*/
        var objMaxResult = null, objScoreResult = null;
        var strScoringType = $scope.qdata.validation.scoring_type;

        try{
            objScoreResult = scorePoint($scope.response.value, $scope.qdata.validation.valid_response, strScoringType);
            objMaxResult = objScoreResult;
        }
        catch(err)
        {
            console.log(err);

        }
        /* Get score for alternate response */
        try{
            for (i = 0; i < $scope.qdata.validation.alt_response.length; i++)
            {
                objScoreResult = scorePoint($scope.response.value, $scope.qdata.validation.alt_response[i], strScoringType);
                if(objScoreResult.score > objMaxResult.score)
                    objMaxResult = objScoreResult;
            }
        }
        catch(err)
        {
            console.log(err);
        }

        if (!objMaxResult) {
            objMaxResult = { 'score' : 0, 'arrCheckResult' : [] };
        }
        $scope.qdata.response.score = objMaxResult.score;
        $scope.qdata.response.max_score = $scope.calculateMaxScore($scope.qdata);
        $scope.qdata.response.score_result = objMaxResult.arrCheckResult;

        $scope.updateQuestionResult();
    };

    $scope.onChangeAnswer = function()
    {
        $scope.qdata.feedbackShown = false; // Reset feedback
        $scope.check_answer = false;
        $scope.checkAnswer();
    };

    $scope.addResponseValue = function () {
        $scope.qdata.validation.valid_response.value.push('');
        $scope.qdata.validation.valid_response.score++;
        $scope.calculateMaxScore($scope.qdata);
    };

    $scope.deleteResponseValue = function (idx) {
        $scope.qdata.validation.valid_response.value.splice(idx, 1);
        $scope.qdata.validation.valid_response.score--;
        $scope.calculateMaxScore($scope.qdata);
    };

    $scope.addAltResponseValue = function (altResponse) {
        altResponse.value.push('');
    };

    $scope.deleteAltResponseValue = function (altResponse, idx) {
        altResponse.value.splice(idx, 1);
    };

    $scope.addFeedbackResponseValue = function(response)
    {
        response.value.push('');
    };
    $scope.deleteFeedbackResponseValue = function(response, idx)
    {
        response.value.splice(idx, 1);
    };

    if($scope.$parent.qdata != "" && $scope.$parent.qdata != null)
        $scope.initWithData($scope.$parent.qdata);
    $scope.$on("onSelectPart", function(e) {
        var data = $scope.$parent.qdata;
        if(data.type == "ficlozet")
        {
            $scope.initWithData(data);
        }
    });
});