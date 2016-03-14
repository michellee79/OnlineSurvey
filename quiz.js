//Edit Quiz Controller


App.controller("QuizEditController",function($scope, $log, $timeout, QuestionTemplates, $modal, restFactory, $state, $rootScope, $http, $window)
{
    if($scope.get_instance)
        $scope.get_instance();

    $scope.CANVAS_MAX_WIDTH = 600;
    $scope.CANVAS_MAX_HEIGHT = 550;

    if (!$rootScope.objectives) {
        $http({method: 'GET', url: 'app/data/cc_standards.json'}).
            success(function (data, status, headers, config) {
                $rootScope.objectives = data;
            }).error(function (data, status, headers, config) {
            });
    }

    $scope.tagTransform = function (newTag) {
        var item = {
            "ID": newTag,
            "Category": "unknown",
            "SubCategory": "unknown",
            "StateStandard": "unknown"
        };

        return item;
    };

    //Load constants from template provider
    $scope.grade_levels = QuestionTemplates.grade_levels;
    $scope.subject_areas = QuestionTemplates.subject_areas;

    $scope.diff_levels = QuestionTemplates.diff_levels;
    $scope.quest_types = QuestionTemplates.quest_types;
    $scope.graphic_organizers = QuestionTemplates.graphic_organizers;
    $scope.scoring_types = QuestionTemplates.scoring_types;
    $scope.edit_template = '';
    $scope.status_info = {
    };
    //CKEDITOR options.
    $scope.ckEditorOptions = {
        disableAutoInline : true,
        allowedContent: true,
        enterMode : CKEDITOR.ENTER_BR,
        shiftEnterMode: CKEDITOR.ENTER_P,
        extraPlugins: 'mathjax,audio,oembed,widget,sourcedialog,widget,dialog,image2,video',
        oembed_maxWidth: '560',
        oembed_maxHeight: '315',
        toolbar : [
            { name: 'clipboard', groups: [ 'undo', 'clipboard' ], items: [ 'Undo', 'Redo', '-', 'PasteText' ] },
            { name: 'editing', groups: [ 'find', 'selection', 'spellchecker' ] },
            { name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ], items: [ 'Bold', 'Italic', 'Underline', 'Subscript', 'Superscript', '-', 'RemoveFormat'] },
            '/',
            { name: 'paragraph', groups: [ 'list', 'align', 'bidi' ], items: [ 'NumberedList', 'BulletedList', 'Outdent', 'Indent', '-','JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock'] },
            '/',
            { name: 'insert', items: [ 'SimpleLink', '-', 'Image', 'Audio', 'oembed', 'Video', 'Mathjax', 'Table', 'HorizontalRule', 'SpecialChar', '-', 'Sourcedialog'] },
            '/',
            { name: 'styles', items: [ 'Styles', 'Format'] }
            //{ name: 'document',  items: [ 'Sourcedialog' ] }

        ]};

    // COPIED TO PREVIEW BASE CONTROLLER
    $scope.ckEditorOptions1 = {
        disableAutoInline : false,
        enterMode : CKEDITOR.ENTER_BR,
        shiftEnterMode: CKEDITOR.ENTER_P,
        extraPlugins: 'wordcount,scayt',
        scayt_autoStartup: true,
        maxWords : 10000,
        showCharCount:true,
        toolbar : [

            { name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ], items: [ 'Bold', 'Italic', 'Underline', 'BulletedList', 'SpecialChar' ] }

        ]};
    // COPIED TO PREVIEW BASE CONTROLLER
    $scope.ckEditorOptions1.wordcount = {

        // Whether or not you want to show the Word Count
        maxWordCount: 10000

    };


    $scope.initQuizData = function()
    {
        //Set initial type;
        $scope.quiz_data = QuestionTemplates.cloneQuizTemplate();
        $scope.cur_state = "initial"; // State indicator : initial - initial state. add - add question, change - change question, edit - edit question.
        $scope.sel_cat = "multiple_choice";
        $scope.cur_question_idx = -1; //Question index in editing at current.
        $scope.cur_question = null;
        $scope.cur_part_idx = -1;        //Part index in editing at current.

        $scope.learn_objective = QuestionTemplates.learn_objectives;
        $scope.quiz_data.is_editing = true;

        $log.debug("initQuizData");
    };

    $scope.$on('onLoadInitialData', function(e, data)
    {
        //TODO : Check validity of data.
        $scope.quiz_data = data;
        if ($scope.quiz_data) {
            $scope.quiz_data.is_editing = true;
            $log.debug($scope.quiz_data);
        }
        $scope.selectQuestion(0, true);

    });
    //restFactory.send_data($scope.quiz_data, "quiz_data");

    /**=========================================================
     * Save new quiz
     =========================================================*/

    $scope.saveQuiz = function(close) {
        var ret = $scope.validateQuiz();
        if (ret.errorCode !== 0) {
            toastr.error(ret.msg);
        }
        else {
            if (!close) {
                // Select the first question after a save.
                // This is a hack to workaround this bug: If a new question part is added and the user clicks "Save", any newly
                // added part does not get saved. By forcing the question to change it somehow resets the question
                var currentQuestion = $scope.cur_question_idx;
                var currentPart = $scope.cur_part_idx;
                $scope.selectQuestion(0, true);
                $scope.selectQuestion(currentQuestion, true);
                $scope.selectPart(currentPart);
            }

            // Remove all selected elements by user when quiz was created
            $scope.removeAllAnswers();

            $log.debug($scope.quiz_data);

            if ($scope.quiz_data.id) {
                restFactory.putService("api/quiz", $scope.quiz_data)
                    .success(function (data) {
                        if (data.err) {
                            $log.debug("add new quiz error!");
                            $log.debug(data.msg);
                            toastr.error(data.msg);
                        }
                        else {
                            $log.debug("update quiz success");
                            $log.debug(data);
                            toastr.success("Quiz saved!");
                            if (close)
                                $state.go("quizzes");
                        }
                    })
                    .error(function (error) {
                        $log.debug("update quiz error!");
                        $log.debug(error);
                        toastr.error("Error updating quiz! Please try again");
                    });
            }
            else {
                restFactory.postService("api/quiz", $scope.quiz_data)
                    .success(function (data) {
                        if (data.err) {
                            $log.debug("add new quiz error!");
                            $log.debug(data.msg);
                            toastr.error(data.msg);
                        }
                        else {
                            $log.debug("add new quiz success");
                            $scope.quiz_data = data.data;
                            $log.debug(data);
                            toastr.success("Quiz saved!");
                            $window.Intercom('trackEvent', 'quiz-added');
                            if (close)
                                $state.go("quizzes");
                        }
                    })
                    .error(function (error) {
                        $log.debug("add new quiz error!");
                        $log.debug(error);
                        toastr.error("Error adding quiz! Please try again");
                    });
            }
        }
    };

    $scope.discardQuizAndClose = function() {
        $state.go("quizzes");
    };

    /**
     * Discard changes dialog
     */

    $scope.openDiscardChanges = function() {
        var modalInstance = $modal.open({
            templateUrl: 'discard_dlg',
            controller: ModalDiscardChangesCtrl
        });

        modalInstance.result.then(function () {
            $state.go("quizzes");
        });
    };

    var ModalDiscardChangesCtrl = function ($scope, $modalInstance) {

        $scope.discardQuizAndClose = function () {
            $modalInstance.close();
        };

        $scope.okCancel = function () {
            $modalInstance.dismiss('cancel');
        };
    };


    $scope.onClickValidate = function() {
        var ret = $scope.validateQuiz();
        if (ret.errorCode !== 0) {
            toastr.error(ret.msg);
        }
        else {
            toastr.success("No warnings/errors");
        }
    };

    $scope.validateQuiz = function() {
        var ret = { errorCode: 0, msg: ""};
        var quiz = $scope.quiz_data;
        $log.debug($scope.quiz_data);

        var isIntro = quiz.name.toLowerCase().indexOf("intro") != -1;
        var isDuring = quiz.name.toLowerCase().indexOf("during") != -1;
        var isVocab = quiz.name.toLowerCase().indexOf("vocab") != -1;
        var isPost = quiz.name.toLowerCase().indexOf("post") != -1;

        if (quiz.name.trim().length === 0 || quiz.name.trim() == ("[Quiz Name]")) {
            ret.msg += "<li>Invalid quiz name.";
        }
        if (!quiz.grade_level) {
            ret.msg += "<li>Missing grade level.";
        }
        if (!quiz.subject_area) {
            ret.msg += "<li>Missing subject area.";
        }
        if (quiz.training_activity && quiz.stimulus.trim().length === 0) {
            ret.msg += "<li>Missing intro for quiz.";
        }

        // Go through all UUID and fix anything that is out of order.
        // This ensures that every question and question part has a unique identifier.
        // This sometimes can get out of sync if questions are removed/added/reordered.
        $log.debug(quiz.question);
        for (var i=0; i < quiz.questions.length; i++) {
            var question = quiz.questions[i];

            if (quiz.training_activity) {
                if (!isIntro && !isVocab && question.stimulus.length === 0) {
                    ret.msg += "<li>Missing stimulus for Question " + i + 1 + ".";
                }
                if (isIntro && question.stimulus.length !== 0) {
                    ret.msg += "<li>Stimulus not required in Intro for Question " + i + 1 + ".";
                }
                if (!isIntro && !isVocab && question.stimulus.length !== 0) {
                    for (var stimIndx = 0; stimIndx < question.stimulus.length; stimIndx++) {
                        var title = question.stimulus[stimIndx].title.trim();
                        var content = question.stimulus[stimIndx].content.trim();

                        if (title === "") {
                            ret.msg += "<li>Missing stimulus title for Question " + i + 1 + ".";
                        }
                        if (content === "") {
                            ret.msg += "<li>Missing stimulus content for Question " + i + 1 + ".";
                        }
                        if (isPost && content.indexOf("<img ") == -1) {
                            ret.msg += "<li>Stimulus missing image for Question " + i + 1 + ".";
                        }
                    }
                }
            }

            if (question.parts.length === 0) {
                ret.msg += "<li>Missing part for Question " + i+1 + ".";
            }

            question.uuid = "sq" + i;
            for (var j = 0; j < question.parts.length; j++) {
                var part = question.parts[j];
                part.uuid = "q" + i + "_" + j;

                if (quiz.training_activity) {
                    // Check for incorrect tag specs
                    if (part.tags) {
                        for (var k = 0; k < part.tags.length; k++) {
                            if (part.tags[k].StateStandard == "unknown") {
                                ret.msg += "<li>Unknown Tag for Question " + (i+1).toString() + " Part " + (j+1).toString() + ": " + part.tags[k].ID;
                            }
                        }
                    }

                    if (!part.instant_feedback && part.type != "longtext") {
                         ret.msg += "<li>Feedback missing for Question " + (i+1).toString() + " Part " + (j+1).toString() + ".";
                    }

                    // Check style for vocabulary defintions. This is important since sounds are replaced based on
                    // specific tags. First line of part stimulus should look like this
                    // <big><u><strong>bird-&shy;free</strong></u></big><br />
                    if (isVocab) {
                        var stimulus = part.stimulus;
                        // Stimulus contains a defintion
                        if (stimulus.toLowerCase().indexOf("definition:") != -1) {
                            var containsSpecialStyle = false;
                            if (stimulus.indexOf("<big><u><strong>") != -1)
                                containsSpecialStyle = true;
                            else if (stimulus.indexOf("<big><strong><u>") != -1)
                                containsSpecialStyle = true;
                            else if (stimulus.indexOf("<strong><big><u>") != -1)
                                containsSpecialStyle = true;
                            else if (stimulus.indexOf("<strong><u><big>") != -1)
                                containsSpecialStyle = true;
                            else if (stimulus.indexOf("<u><strong><big>") != -1)
                                containsSpecialStyle = true;
                            else if (stimulus.indexOf("<u><big><strong>") != -1)
                                containsSpecialStyle = true;

                            if (!containsSpecialStyle) {
                                ret.msg += "<li>Definition style incorrrect for Question " + (i+1).toString() + " Part " + (j+1).toString() + ".";
                            }
                        }
                    }
                }
            }
        }

        if (ret.msg.length !== 0) {
            ret.errorCode = 1;
            ret.msg = "<ol>" + ret.msg + "</ol>";
        }

        $log.debug(ret);
        return ret;
    };

    $scope.removeAllAnswers = function()
    {
        $scope.quiz_data.questionResults = [];

        // Remove answers
        for (var i=0; i < $scope.quiz_data.questions.length; i++) {
            for (var j=0; j < $scope.quiz_data.questions[i].parts.length; j++) {
                var qdata = $scope.quiz_data.questions[i].parts[j];
                qdata.response = {};
                // Remove feedback
                // Keep track of number of times the feedback button has been clicked.
                if (qdata.num_feedback_clicked) {
                    qdata.num_feedback_clicked = 0;
                }
                if (qdata.displayedFeedback) {
                    qdata.displayedFeedback = {
                        'incorrectFeedback': "",
                        'correctFeedback': "",
                        'specificFeedback': ""
                    };
                }
                qdata.feedbackShown = false;
                qdata.correctAnswerSelected = false;

                /**
                 * ToDo: Remvoe this copoed code
                 */
                if (qdata.droppedInfo) {
                    var astr = "";
                    //if ($scope.qdata.markup.split("##response##"); // need fix
                    if (qdata.markup) {
                        astr = qdata.markup.split("##response##");
                    }
                    var newstr = '';
                    var newitm = '';
                    var checkobj = '';
                    var cnt = 0;

                    qdata.droppedInfo.droparea = [];
                    qdata.droppedInfo.lastTxt = "";

                    for (var k = 0; k < astr.length; k++) {

                        newstr = astr[k];
                        if(newstr && k < (astr.length - 1)) {

                            var txtPlacholder = "";
                            if ($scope.quiz_data.is_editing)
                                txtPlacholder += "[" + (cnt+1) + "]";
                            newitm = {
                                "paraTxt" : newstr,
                                "value" : cnt,
                                "txt": txtPlacholder
                            };
                            qdata.droppedInfo.droparea.push(newitm);
                            cnt++;
                        }

                    }
                    qdata.droppedInfo.lastTxt = newstr;

                    //reset the choice obj and dropped array
                    qdata.droppedInfo.dragableEle = [];

                    for (var index = 0; index < qdata.options.length; index++) {

                        var item = qdata.options[index];
                        qdata.droppedInfo.dragableEle.push(item);
                    }
                }
            }
        }
    };

    $scope.addQuestion = function()
    {
        var new_question = QuestionTemplates.cloneSubQuizTemplate();
        new_question.uuid = 'sq' + $scope.quiz_data.questions.length;

        $scope.quiz_data.questions.push(new_question);
        $scope.selectQuestion($scope.quiz_data.questions.length - 1, true);
    };

    $scope.selectQuestion = function(idx, bforce)
    {
        if($scope.quiz_data.questions.length <= idx)
            return;

        if(!bforce && $scope.cur_question_idx == idx)
        {
            return;
        }
        $scope.cur_question_idx = idx;
        $scope.cur_question = $scope.quiz_data.questions[idx];

        $scope.sel_cat = "multiple_choice";

        if($scope.cur_question.parts.length === 0)
        {
            $scope.cur_state = "add";
        }
        else
        {
            $scope.cur_state = "edit";
            $scope.selectPart(0);
        }
    };

    $scope.deleteQuestion = function(idx)
    {
        var questions = $scope.quiz_data.questions;
        if(idx >= 0 && idx < questions.length)
        {
            var modalInstance = $modal.open({
                templateUrl: $scope.basepath('templates/confirm_dialog.html'),
                controller : 'ConfirmDialog',
                resolve:{
                    title : function(){return "Please confirm on this message";},
                    message : function(){return "Do you want to delete this Question?";}
                }
            });
            modalInstance.result.then(function(){
                //Confirmed
                questions.splice(idx, 1);
                if(idx == $scope.cur_question_idx)
                {
                    if(questions.length === 0)
                    {
                        $scope.cur_state = "initial";
                    }
                    else
                    {
                        if(idx == questions.length)
                            idx--;
                        $log.debug(idx);
                        $scope.selectQuestion(idx, true);
                    }
                }
                else if(idx < $scope.cur_question_idx)
                    $scope.selectQuestion($scope.cur_question_idx - 1, true);
            });

        }

    };

    $scope.changeQuizName = function()
    {
        //TODO : display dialog
    };

    $scope.basepath = function(uri)
    {
        if ($rootScope.$isProduction){
            return 'quiz/app/views/' + uri;
        }else{
            return 'app/views/' + uri;
        }
    };

    $scope.selectQuestCategory = function(cat)
    {
        $scope.sel_cat = cat;
    };

    $scope.selectQuestType = function(idx)
    {
        var sel_type = $scope.quest_types[$scope.sel_cat][idx];
        //Add or change data in array.
        if($scope.cur_state == "add")
        {
            var new_part = QuestionTemplates.cloneQuestionTemplate(sel_type.typeid);
            new_part.uuid = 'q' + $scope.cur_question_idx + '_' + $scope.cur_question.parts.length;

            if (new_part.options){
                for (var i in new_part.options){
                    new_part.options[i].uuid = new_part.uuid + 'p' + i;
                }
            }
            $scope.cur_question.parts.push(new_part);
            $scope.cur_part_idx = $scope.cur_question.parts.length - 1;
        }
        else if($scope.cur_state == "change")
        {
            $scope.cur_question.parts[$scope.cur_part_idx] = QuestionTemplates.cloneQuestionTemplate(sel_type.typeid);
        }

        //Change state to edit
        $scope.cur_state = 'edit';
        console.log($scope.cur_question.parts);
        // set title of question.
        var part = $scope.cur_question.parts[$scope.cur_part_idx];
        part.name = sel_type.name;

        console.log(part);
        //set current editing data for share.
        $scope.qdata = part;
        $scope.edit_template = $scope.basepath('templates/' + part.type + '_template.html');
        $scope.$broadcast("onSelectPart");
    };

    $scope.addPart = function(idx)
    {
        $scope.cur_state = "add";
    };

    $scope.deletePart = function(idx)
    {
        var parts = $scope.cur_question.parts;
        if(idx >= 0 && parts.length)
        {
            var modalInstance = $modal.open({
                templateUrl: $scope.basepath('templates/confirm_dialog.html'),
                controller : 'ConfirmDialog',
                resolve:{
                    title : function(){ return "Please confirm on this message";},
                    message : function(){return "Do you want to delete this Question?";}
                }
            });
            modalInstance.result.then(function(){
                parts.splice(idx, 1);
                //After deletion, select new quiz.
                if(idx == $scope.cur_part_idx)
                {
                    if(parts.length === 0)
                    {
                        $scope.addPart(0);
                    }
                    else
                    {
                        if(idx == parts.length)
                            idx--;
                        $scope.selectPart(idx);
                    }
                }
                else if(idx < $scope.cur_part_idx)
                    $scope.selectPart($scope.cur_part_idx - 1);
            });
        }
    };

    $scope.changeQuestionType = function()
    {
        $scope.cur_state = "change";
    };

    $scope.selectPart = function(idx)
    {
        console.log(idx);
        var qdata = $scope.cur_question.parts[idx];
        $scope.cur_part_idx = idx,
        $scope.qdata = qdata,
        $scope.edit_template = $scope.basepath('templates/' + qdata.type + '_template.html'),
        $scope.$broadcast("onSelectPart");
    };


    // Before creating the modal dialog, invalidate the older canvas to prevent clashing.
    $scope.createDummyCanvas = function() {

        var canvasName = "canvasParent-" + $scope.cur_question.parts[$scope.cur_part_idx].uuid;
        var canvasElement = document.getElementById(canvasName);
        if (!canvasElement)
            return;
        canvasElement.setAttribute('id', "destroyed");
        var column_size = document.getElementById("preview_column").clientWidth;
        if ($scope.cur_question.fullscreenPreview)
            column_size = $scope.CANVAS_MAX_WIDTH;

        var dummyStage = new Konva.Stage({
            container: "destroyed",
            width: column_size,
            height: $scope.CANVAS_MAX_HEIGHT
        });

        // label with left pointer
        var labelLeft = new Konva.Label({
            x: 20,
            y: 120,
            opacity: 0.75
        });

        labelLeft.add(new Konva.Tag({
            fill: 'green',
            pointerDirection: 'left',
            pointerWidth: 20,
            pointerHeight: 28,
            lineJoin: 'round'
        }));

        labelLeft.add(new Konva.Text({
            text: 'Click on Refresh',
            fontFamily: 'Calibri',
            fontSize: 18,
            padding: 5,
            fill: 'white'
        }));

        var dummylayer = new Konva.Layer();
        dummylayer.name("MainLayer");
        dummylayer.add(labelLeft);
        dummyStage.add(dummylayer);
        dummyStage.draw();
    };

    $scope.getCanvasId = function () {
        return "canvasParent-" + $scope.cur_question.parts[$scope.cur_part_idx].uuid;
    };

    $scope.previewQuiz = function()
    {
        $log.debug($scope.quiz_data);
        if($scope.quiz_data && $scope.quiz_data.questions.length > 0)
        {
            var current_question = $scope.cur_question.parts[$scope.cur_part_idx];
            $log.debug(current_question);

            if (current_question.type == "imagedd") {
                // Before creating the modal dialog, invalidate the older canvas to prevent clashing.
                $scope.createDummyCanvas();
            }

            var modalInstance = $modal.open({
                templateUrl : "preview_dlg",
                windowClass : '',
                size : 'lg',
                scope : $scope,
                backdrop : 'static',
                controller : 'PreviewModal'
            });


        }
        else
        {
            toastr.error("Please create quiz first.");
        }
    };

    // COPIED TO PREVIEW BASE CONTROLLER
    $scope.changeWordlimit = function()
    {

        if($scope.qdata.max_length)
        {
            $scope.ckEditorOptions1.wordcount = {
                // Whether or not you want to show the Word Count
                maxWordCount: $scope.qdata.max_length
            };
        }
        else
        {
            toastr.error("Please set Word limit first");
        }
    };

    //////////////////////////////////////////////// set word counter and limit the user
    // COPIED TO PREVIEW BASE CONTROLLER
    $scope.wordCounter = function()
    {
        var text = $scope.qdata.response.value;
        var limit = $scope.qdata.max_length;
        var words = text ? text.split(/\s+/) : 0; // it splits the text on space/tab/enter
        var totwords = words ? words.length : '';
        if(totwords>limit)
        {
            //$scope.qdata.placeholder = text.substring(0, text.length - 1);
            //toastr.error("Word limit exceeded");
            $scope.myStyle={color:'red'};

        }else
        {
            //alert($scope.ckEditorOptions1.wordcount.maxWordCount);
            $scope.myStyle={color:'black'};
            //$scope.myStyle={border-color:'grey'};
            // RCR: Problem here: sometimes the document may not be loaded by the time this is called.
            // getElementById returns null.
            //document.getElementById('cke_wordcount_editor3').innerHTML='Words: '+totwords+' / '+ limit;
        }
    };

    ////////////////////////// to change text class


    /*
    Not used and causes Closure compiler error
    $scope.changeClass = function(){
        $scope.class = $scope.style;
    };
    */

    $scope.applyChange = function()
    {
        $log.debug("applyChange");
        $scope.$apply();
    };
    $scope.openQuestionReorderDlg = function()
    {
        var modalInstance = $modal.open({
            templateUrl : "reorder_modal",
            windowClass : '',
            scope : $scope,
            resolve : {
                'quiz' : function(){
                    return $scope.quiz_data;
                }
            },
            backdrop : 'static',
            controller : 'QuizReorderDlg'
        });

        modalInstance.result.then(function(selectedItem){
            $log.debug(selectedItem.stimulus);
            $scope.quiz_data.stimulus = selectedItem.stimulus;
            $scope.quiz_data.end_text = selectedItem.end_text;
            $scope.quiz_data.training_activity = selectedItem.training_activity;
        }, function()
        {

        });

    };

    $scope.openQuizSetting = function()
    {
        var self = $scope;

        var modalInstance = $modal.open({
            templateUrl : "quiz_setting",
            windowClass : '',
            resolve : {
                'quiz' : function(){
                    return $scope.quiz_data;
                }
            },
            backdrop : 'static',
            controller : 'QuizSettingDlg'
        });

        modalInstance.result.then(function(selectedItem){
            $log.debug(selectedItem.stimulus);
            $scope.quiz_data.stimulus = selectedItem.stimulus;
            $scope.quiz_data.end_text = selectedItem.end_text;
            $scope.quiz_data.training_activity = selectedItem.training_activity;
            $scope.quiz_data.forceCleanInProgress = selectedItem.forceCleanInProgress;
        }, function()
        {

        });

        $scope.saveSetting = function()
        {
            $modalInstance.close({
                stimulus : this.stimulus,
                end_text : this.end_text,
                training_activity : this.training_activity
            });
        };
        $scope.closeDialog = function()
        {
            $modalInstance.dismiss("canceled");
        };
    };

    $scope.openSubQuizSetting = function()
    {
        var modalInstance = $modal.open({
            templateUrl : "sub_quiz_setting",
            windowClass : '',
            scope : $scope,
            resolve : {
                CurQuestion : function(){
                    return $scope.cur_question;
                }
            },
            backdrop : 'static',
            controller : 'QuestionSettingDlg'
        });

        modalInstance.result.then(function (result) {
            $scope.cur_question.stimulus = result.stimulus;
            $scope.cur_question.layout = result.layout;
            $scope.cur_question.show_calculator = result.show_calculator;
        }, function () {
        });
    };

    $scope.selectGradeLevel = function(level)
    {
        $scope.quiz_data.grade_level = level;
    };

    $scope.selectSubjectArea = function(area)
    {
        $scope.quiz_data.subject_area = area;
    };

    $scope.showPreview = true;

    /* Zoom preview function to be overrided in all child controllers */
    $scope.zoomView = function()
    {
        var current_question = $scope.cur_question.parts[$scope.cur_part_idx];
        $log.debug(current_question);
        if (current_question.type == "imagedd") {
            // Before creating the modal dialog, invalidate the older canvas to prevent clashing.
            $scope.createDummyCanvas();
        }

        $scope.showPreview = false;
        var modalInstance = $modal.open({
            templateUrl : "zoom.html",
            size : 'lg',
            windowClass : 'fullscreen_modal',
            scope : this,
            backdrop : 'static',
            controller : 'PreviewModal'
        });
        modalInstance.result.then(
            function (selectedItem) {
                $scope.showPreview = true;
            },
            function () {
            }
        );
    };

    // Manage File uploads
    $scope.openFileManagerDlg = function()
    {
        var modalInstance = $modal.open({
            templateUrl : "file_dialog",
            windowClass : '',
            backdrop : 'static',
            controller : 'FileManagerDlg'
        });

        modalInstance.result.then(function (result) {
            $scope.lastfileUploaded = result.lastfileUploaded;
        }, function () {
        });
    };

    // Manage learning objectives.
    $scope.showObjectiveDlg = function()
    {
        var modalInstance = $modal.open({
            templateUrl : "lrn_obj_dlg",
            scope : $scope,
            windowClass : '',
            backdrop : 'static',
            controller : 'ObjectiveDialog'
        });
        modalInstance.result.then(function (selectedItem) {
            var qdata = $scope.cur_question;
            if(!qdata.learn_objective)
            {
                qdata.learn_objective = [];
            }
            qdata.learn_objective.push(selectedItem);

        }, function () {
        });

    };

    $scope.showWebFeedbackDlg = function()
    {
        var modalInstance = $modal.open({
            templateUrl : "feedback_dlg",
            windowClass : '',
            backdrop : 'static',
            controller : 'FeedbackDlg'
        });
        modalInstance.result.then(function (item) {
            $scope.cur_question.parts[$scope.cur_part_idx].feedback.web_feedback.push(item);
        }, function () {
        });
    };

    $scope.deleteWebFeedback = function(idx)
    {
        $scope.cur_question.parts[$scope.cur_part_idx].feedback.web_feedback.splice(idx, 1);
    };

    $scope.showVideoFeedbackDlg = function()
    {
        var modalInstance = $modal.open({
            templateUrl : "feedback_dlg",
            windowClass : '',
            backdrop : 'static',
            controller : 'FeedbackDlg'
        });
        modalInstance.result.then(function (item) {

            $scope.cur_question.parts[$scope.cur_part_idx].feedback.video_feedback.push(item);
        }, function () {
        });
    };

    $scope.deleteVideoFeedback = function(idx)
    {
        $scope.cur_question.parts[$scope.cur_part_idx].feedback.video_feedback.splice(idx, 1);
    };

    $scope.deleteObjective = function(idx)
    {
        var qdata = $scope.cur_question;
        if(!qdata.learn_objective)
        {
            return;
        }
        qdata.learn_objective.splice(idx, 1);
    };

    $scope.addFeedback = function  () {
        // body...
        var qdata = $scope.cur_question.parts[$scope.cur_part_idx];
        if (!qdata.feedback) {
            qdata.feedback = [];
        }
        qdata.feedback.push(
            {
                'option' : '0',
                'valid_response' : {
                    'value' : [0]
                },
                'text_feedback' : 'Incorrect! Try again.'
            }
        );
        $log.debug(qdata);
    };
    $scope.deleteFeedback = function(idx){
        var qdata = $scope.cur_question.parts[$scope.cur_part_idx];
        qdata.feedback.splice(idx, 1);
    };
    $scope.addFeedbackResponseValue = function(response)
    {
        response.value.push(0);
    };
    $scope.deleteFeedbackResponseValue = function(response, idx)
    {
        response.value.splice(idx, 1);
    };

});

App.controller('QuizPreviewController', function($scope, $log, $controller)
{
    $log.debug("QuizPreviewController");

    $scope.ctrlScope = $scope;

    $controller('PreviewBaseController', {$scope: $scope});

    if (!$scope.quiz_data.teacherReview)   // cur_question_idx set when teacher clicks on specific question in report
        $scope.cur_question_idx = 0;

    $scope.prevQuestion = function()
    {
        if($scope.cur_question_idx > 0)
            $scope.cur_question_idx --;
        $scope.setCurQuestion($scope.cur_question_idx);
    };

    $scope.nextQuestion = function()
    {
        if($scope.cur_question_idx < $scope.quiz_data.questions.length - 1)
            $scope.cur_question_idx ++;
        $scope.setCurQuestion($scope.cur_question_idx);
    };

    $scope.setCurQuestion = function(idx)
    {
        if($scope.quiz_data.questions) {
            $scope.cur_question = $scope.quiz_data.questions[idx];
            $scope.cur_question_idx = idx;
        }
    };

    /**
     * Get the max score for the question part and save it in the part itself.
     * This is for easy retrival in the view (quiz_preview_template.html)
     */
    $scope.populateMaxScores = function() {
        var i, maxScores = {};
        if (!$scope.quiz_data.questionResults)
            $scope.quiz_data.questionResults = [];

        for (i=0; i<$scope.quiz_data.questionResults.length; i++) {
            if (!$scope.quiz_data.questionResults[i].max_score) {
                maxScores[$scope.quiz_data.questionResults[i].uuid] = 1;
            }
            else {
                maxScores[$scope.quiz_data.questionResults[i].uuid] = $scope.quiz_data.questionResults[i].max_score;
            }

        }

        for (i=0; i<$scope.quiz_data.questions.length; i++) {
            for (var j=0; j<$scope.quiz_data.questions[i].parts.length; j++) {
                $scope.quiz_data.questions[i].parts[j].max_score = maxScores[$scope.quiz_data.questions[i].parts[j].uuid];
            }
        }
        $log.debug($scope.quiz_data);
    };

});

App.controller('QuizReorderDlg', function($scope, $log, $modalInstance, quiz, $window)
{
    var self = $scope;
    //Question setting controller. Read parent's question data.
    $log.debug(quiz);

    $scope.saveSetting = function()
    {
        $scope.saveQuiz(false);
        $log.debug("saved");
        $modalInstance.dismiss("saved");
    };

    $scope.closeDialog = function()
    {
        // A little hack to force redraw of qestion order
        $scope.selectQuestion(0);
        $scope.selectQuestion($scope.quiz_data.questions.length-1);
        $scope.selectQuestion(0);
        //$window.location.reload();

        $log.debug("closed");
        $modalInstance.dismiss("closed");
    };

    $scope.onQuestionsDrag = {
        accept: function (sourceItemHandleScope, destSortableScope) {return true;},//override to determine drag is allowed or not. default is true.
        orderChanged: function(event) {$log.debug("changed");}
    };
});
App.controller('QuizSettingDlg', function($scope, $log, $modalInstance, quiz)
{
    var self = $scope;
    //Question setting controller. Read parent's question data.
    $log.debug(quiz);
    $scope.stimulus = quiz.stimulus;
    $scope.end_text = quiz.end_text;
    $scope.training_activity = quiz.training_activity;

    $scope.saveSetting = function()
    {
        $modalInstance.close({
            stimulus : this.stimulus,
            end_text : this.end_text,
            training_activity : this.training_activity
        });
    };
    $scope.closeDialog = function()
    {
        $modalInstance.dismiss("canceled");
    };
});
App.controller('QuestionSettingDlg', function($scope, $log, $modalInstance, CurQuestion, QuestionTemplates)
{
    var self = $scope;
    //Question setting controller. Read parent's question data.

    $scope.stimulus = CurQuestion.stimulus;
    $scope.layout = CurQuestion.layout;
    $scope.show_calculator = CurQuestion.show_calculator;

    $scope.saveSetting = function()
    {
        $modalInstance.close(
            {
                stimulus: this.stimulus,
                layout: this.layout,
                show_calculator : this.show_calculator
            });
    };

    $scope.closeDialog = function()
    {
        $modalInstance.dismiss("canceled");
    };

    $scope.addStimulusItem = function()
    {
        $scope.stimulus.push(QuestionTemplates.cloneStimulusTemplate());
    };

    $scope.deleteStimulusItem = function(idx)
    {
        $scope.stimulus.splice(idx, 1);
    };

});

App.controller('ObjectiveDialog', function($scope, $log, $rootScope, $modalInstance, $http)
{
    var self = $scope;
    $scope.tagLookup.found = false;
    $log.debug($scope.tagLookup);

    $scope.initVars = function() {
        var lookup = $scope.tagLookup.search.replace("(", "").replace(")", "");    // Remove brackets
        $log.debug(lookup);
        if (lookup.lastIndexOf(".") == lookup.length-1) {
            lookup = lookup.substring(0, lookup.length-1);      // Remove trailing "."
        }
        lookup = lookup.trim().toUpperCase();
        for (i=0; i<$rootScope.objectives.length; i++) {
            if ($rootScope.objectives[i].ID == lookup) {
                $scope.tagLookup.id = $rootScope.objectives[i].ID;
                $scope.tagLookup.category = $rootScope.objectives[i].Category;
                $scope.tagLookup.subcategory = $rootScope.objectives[i].SubCategory;
                $scope.tagLookup.description = $rootScope.objectives[i].StateStandard;
                $scope.tagLookup.found = true;
                break;
            }
        }
    };

    if (!$rootScope.objectives) {
        $http({method: 'GET', url: 'app/data/cc_standards.json'}).
            success(function (data, status, headers, config) {
                $rootScope.objectives = data;
                $scope.initVars();
            }).error(function (data, status, headers, config) {
            });
    }
    else
        $scope.initVars();

    $scope.closeDialog = function () {
        $modalInstance.dismiss("canceled");
    };

});

App.controller('FeedbackDlg', function($scope, $modalInstance)
{
    $scope.self = $scope;
    $scope.closeDialog = function () {
        $modalInstance.dismiss("canceled");
    };
    $scope.saveResult = function()
    {
        $modalInstance.close({
            'name' : $scope.title,
            'url' : $scope.url,
            'thumbnail' : $scope.thumbnail,
            'mark' : 1
        });
    };

});

App.controller('FileManagerDlg', function($http, $scope, $log, $window, $sce, $modalInstance, $timeout, Upload)
{
    //$scope.basePath = "http://dev1.brightfishlearning.com:8090"; // Should only be used for testing
    $scope.basePath = "";
    $scope.self = $scope;
    $scope.fileUrl = $scope.basePath + "/api/resource/upload";
    $scope.fileHeaders = {'Content-Type': 'multipart/form-data' };
    $scope.fileFields = "";

    $scope.initVars = function() {
        $scope.progressUploadValue = 0;
        $scope.lastUploadedFileUrl = "";
        $scope.errorOnUpload = true;
        $scope.lastUploadedFileType = "unknown";    // image, audio, video
    };

    $scope.getFileType = function(fileName) {
        var fileExtension = fileName.toLowerCase().replace(/^.*\./, '');
        var type = "unknown";
        switch (fileExtension) {
            case "jpg":
            case "jpeg":
            case "png":
            case "gif":
            case "tiff":
            case "bmp":
                type = "image";
                break;
            case "avi":
            case "mov":
            case "mpg":
            case "mpeg":
            case "mp4":
                type = "video";
                break;
            case "wav":
            case "mp3":
                type = "audio";
                break;
        }
        $log.debug(type);
        return type;
    };

    $scope.saveSetting = function()
    {
        $modalInstance.close(
            {
                lastfileUploaded: this.lastfileUploaded
            });
    };

    $scope.closeDialog = function()
    {
        if ($scope.lastUploadedFileUrl)
            toastr.success("Copied to clipboard: " + $scope.lastUploadedFileUrl);
        $modalInstance.dismiss("canceled");
    };

    $scope.$watch('files', function () {
        $scope.upload($scope.files);
    });

    $scope.log = '';

    $scope.upload = function (files) {
        if (files && files.length) {
            $log.debug("*** Uploading ***");
            $scope.initVars();
            $log.debug($scope);

            var onSuccessUpload = function (data, status, headers, config) {
                    $scope.errorOnUpload = data.err;
                    $scope.lastUploadedFileUrl = "/api/resource/" + data.data.resourceId;
                    //$scope.lastUploadedFileType = $scope.getFileType(file);
                    $scope.log = 'file ' + config.file.name + 'uploaded. URL: ' + $scope.lastUploadedFileUrl + '\n' + $scope.log;
                    if (config.file.name === undefined) {
                        $scope.files[0].name = "Recorded media";
                        $scope.controller.config.sources = [
                            {src: $sce.trustAsResourceUrl($scope.basePath + $scope.lastUploadedFileUrl), type: "audio/mpeg"}
                        ];
                        $timeout($scope.controller.API.play.bind($scope.controller.API), 100);
                    }
                    $log.debug(JSON.stringify(data));
                    //$scope.$apply();  // Throws error

            };
            var onErrorUpload = function (data, status, headers, config) {
                $scope.errorOnUpload = data.err;
                toastr.error("Error uploading! " + status);
                $log.debug(JSON.stringify(data));
            };
            var onProgress = function(evt) {
                    var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                    $scope.progressUploadValue = progressPercentage;
                    $scope.log = 'progress: ' + progressPercentage + '% ' +
                        evt.config.file.name + '\n' + $scope.log;
                    $log.debug($scope.progressUploadValue);
            };

            for (var i = 0; i < files.length; i++) {
                var file = files[i];
                Upload.upload({
                    url: $scope.fileUrl,
                    fields: $scope.fileFields,
                    headers: $scope.fileHeaders,
                    file: file
                }).progress(onProgress).success(onSuccessUpload).error(onErrorUpload);
            }
        }
    };

    $scope.copyFallback = function() {
        window.prompt('Press CTRL+c (Windows) or COMMAND+c (Mac) to copy the text below.', $scope.lastUploadedFileUrl);
    };

    // Player

    // Vars for playback/record
    $scope.controller = this;
    $scope.controller.state = null;
    $scope.controller.API = null;
    $scope.controller.currentSound = 0;

    $scope.controller.config = {
        preload: "none",
        autoHide: false,
        autoHideTime: 3000,
        autoPlay: true,
        sources: [
            {src: $sce.trustAsResourceUrl("/app/data/ding-sample.mp3"), type: "audio/mpeg"}
        ],
        theme: {
            url: "/vendor/videogular-themes-default/videogular.css"
        }
    };

    $scope.controller.configVideo = {
        preload: "none",
        autoHide: false,
        autoHideTime: 3000,
        autoPlay: false,
        sources: [
            {src: $sce.trustAsResourceUrl("/app/data/big_buck_bunny.ogv"), type: "video/ogg"}
        ],
        theme: {
            url: "/vendor/videogular-themes-default/videogular.css"
        }
    };

    $window.handlerStartUserMedia = function (stream) {

        $log.debug('handlerStartUserMedia');
        $log.debug('sampleRate:'+ $scope.audioContext.sampleRate);

        // MEDIA STREAM SOURCE -> ZERO GAIN >
        $scope._realAudioInput = $scope.audioContext.createMediaStreamSource(stream);

        $scope.audioRecorder = new Recorder($scope._realAudioInput);


    };

    $window.handlerErrorUserMedia = function(e) {
        $log.debug('No live audio input: ' + e);
    };

    $scope.vgaConstraints = {
        video: {
            mandatory: {
                maxWidth: 640,
                maxHeight: 360
            }
        },
        audio: {}
    };

    $scope.initRecorder = function () {

        $window.AudioContext = $window.AudioContext || $window.webkitAudioContext || $window.mozAudioContext;

        navigator.getUserMedia = (navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia);

        $window.URL = $window.URL || $window.webkitURL;

        $scope.audioContext = new AudioContext();

        $log.debug('Audio context set up.');
        $log.debug('navigator.getUserMedia ' + (navigator.getUserMedia ? 'available.' : 'not present!'));

        // For sound
        navigator.getUserMedia({video:false, audio: true}, handlerStartUserMedia, handlerErrorUserMedia);
        // For video
        $scope.video = document.getElementById("vidPlayer");
    };

    $window.fallback = function(e) {
        $scope.video.src = '/app/data/big_buck_bunny.ogv';
    };

    $window.success = function(stream) {
        $scope.localMediaStream = stream;
        $scope.video.src = window.URL.createObjectURL($scope.localMediaStream);
        $scope.videoRecorder = $scope.localMediaStream.record();
    };

    $window.errorCallback = function(e) {
        $log.debug('Reeeejected!', e);
    };

    $scope.onPlayerReady = function(API) {
        $log.debug(API);
        $scope.controller.API = API;
    };

    $scope.onCompleteAudio = function() {
        $scope.controller.isCompleted = true;
    };

    $scope.onCompleteVideo = function() {
        $scope.controller.isVideoCompleted = true;
    };

    $scope.startVideoRecording = function() {
        navigator.getUserMedia($scope.vgaConstraints, success, fallback);
    };

    $scope.stopVideoRecording = function() {
        $scope.video.pause();
        $scope.localMediaStream.stop();
        $log.debug($scope.localMediaStream);

        $scope.videoRecorder.getRecordedData($scope.uploadVideo);
        //$scope.uploadVideo($scope.localMediaStream);
        //$scope.video.src = "";
    };

    $scope.uploadVideo = function (streamData) {
        var fd = new FormData();
        var name = encodeURIComponent('vid.webm');
        $log.debug("mp4name = " + name);
        var blob = new Blob([streamData]);

        fd.append('filename', name);
        fd.append("data", blob, name);

        $scope.files = [];
        $scope.files.push(blob);
        $scope.upload($scope.files);
    };

    $scope.recordWavWorker = new Worker('vendor/recorder/enc/wav/recorderWorker.js');
    $scope.encoderMp3Worker = new Worker('vendor/recorder/enc/mp3/mp3Worker.js');

    $scope.Recorder = function(source) {

        var bufferLen = 4096;
        var recording = false;

        this.context = source.context;

        /*
         ScriptProcessorNode createScriptProcessor (optional unsigned long bufferSize = 0,
         optional unsigned long numberOfInputChannels = 2, optional unsigned long numberOfOutputChannels = 2 );
         */

        this.node = (this.context.createScriptProcessor || this.context.createJavaScriptNode).call(this.context, bufferLen, 1, 1);
        this.node.connect(this.context.destination); //this should not be necessary

        this.node.onaudioprocess = function(e) {

            if (!recording)
                return;

            var channelLeft = e.inputBuffer.getChannelData(0);

            $log.debug('onAudioProcess' + channelLeft.length);

            $scope.encoderMp3Worker.postMessage({
                command: 'encode',
                buf: channelLeft
            });
            /*
             recordWavWorker.postMessage({
             command: 'record',
             buffer: channelLeft
             });
             */

        };

        source.connect(this.node);

        this.record = function() {

            if (recording)
                return false;

            recording = true;

            var sampleRate = this.context.sampleRate;
            /*
             $log.debug("Initializing WAV");
             log.innerHTML += "\n" + "Creating Empty WAV";

             recordWavWorker.postMessage({
             command: 'init',
             config: {
             sampleRate: sampleRate
             }
             });
             */
            $log.debug("Initializing to Mp3");
            $log.debug("Creating Empty Mp3:" + sampleRate);

            //sleep(250); // Sleep for a bit before recording to remove any background button clicks
            $scope.encoderMp3Worker.postMessage({
                command: 'init',
                config: {
                    channels: 1,
                    mode: 3 /* means MONO*/ ,
                    samplerate: 22050,
                    bitrate: 64,
                    insamplerate: sampleRate
                }
            });

        };

        this.stop = function() {

            if (!recording)
                return;

            /*
             recordWavWorker.postMessage({
             command: 'finish'
             });
             */

            $scope.encoderMp3Worker.postMessage({
                command: 'finish'
            });

            recording = false;

        };

        $scope.encoderMp3Worker.onmessage = function(e) {

            var command = e.data.command;

            $log.debug('encoderMp3Worker - onmessage: ' + command);

            switch (command) {
                case 'data':
                {
                    var buf = e.data.buf;
                    $log.debug('Receiving data from mp3-Encoder');

                    //maybe you want to send to websocket channel, as:
                    //https://github.com/akrennmair/speech-to-server
                }
                    break;
                case 'mp3':
                {
                    var buffer = e.data.buf;
                    endFile(buffer, 'mp3');
                    // Removed the terminate of the worker - terminate does not allow multiple recordings
                    //encoderMp3Worker.terminate();
                    //encoderMp3Worker = null;
                }
                    break;
            }

        };

        $scope.recordWavWorker.onmessage = function(e) {

            var command = e.data.command;

            $log.debug('recordWavWorker - onmessage: ' + command);

            switch (command) {
                case 'wav':
                    endFile(e.data.buf, 'wav');
                    break;
            }

        };

        function endFile(blob, extension) {

            /*
             $log.debug("Done converting to " + extension);

             $log.debug("the blob " + blob + " " + blob.size + " " + blob.type);

             var url = URL.createObjectURL(blob);
             var li = document.createElement('li');
             var hf = document.createElement('a');
             hf.href = url;
             hf.download = new Date().toISOString() + '.' + extension;
             hf.innerHTML = hf.download;
             li.appendChild(hf);

             var au = document.createElement('audio');
             au.controls = true;
             au.src = url;
             li.appendChild(au);

             recordingslist.appendChild(li);
             */
            // Upload file to server
            $scope.uploadAudio(blob);
        }

    };

    $window.Recorder = $scope.Recorder;

    // Handle start/stop
    $scope.startRecording = function(button) {

        $log.debug('recording');
        if(!$scope.audioRecorder)
            return;


        if($scope.audioRecorder)
            $scope.audioRecorder.record();

        //GUI
        //button.disabled = true;
        //button.nextElementSibling.disabled = false;

        $log.debug('Recording...');
    };

    $scope.stopRecording = function() {

        if(!$scope.audioRecorder)
            return;

        if($scope.audioRecorder)
            $scope.audioRecorder.stop();

        //GUI
        //button.disabled = true;
        //button.previousElementSibling.disabled = false;

        $log.debug('Stopped recording.');
    };

    $scope.uploadAudio = function (mp3Data) {
        $log.debug(mp3Data);
        var fd = new FormData();
        var mp3Name = encodeURIComponent('rectest.mp3');
        $log.debug("mp3name = " + mp3Name);
        var blob = new Blob([mp3Data]);

        fd.append('filename', mp3Name);
        fd.append("data",blob,mp3Name);

        $scope.files = [];
        $scope.files.push(blob);
        $scope.upload($scope.files);
        /*
         Upload.upload({
         url: $scope.fileUrl,
         fields: $scope.fileFields,
         headers: $scope.fileHeaders,
         file: fd
         }).progress(function (evt) {
         var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
         $scope.log = 'progress: ' + progressPercentage + '% ' +
         evt.config.file.name + '\n' + $scope.log;
         }).success(function (data, status, headers, config) {
         $scope.log = 'file ' + config.file.name + 'uploaded. Response: ' + JSON.stringify(data) + '\n' + $scope.log;
         //                    $scope.$apply();
         });
         */

        /*
         $.ajax({
         type: 'POST',
         url: '/api/upload',
         data: fd,
         processData: false,
         contentType: false
         }).done(function(data) {
         $log.debug('uploaded Audio');
         });
         */

    };
});


App.controller('PreviewModal', function($scope, $log, $modalInstance)
{
    $scope.close = function()
    {
        var current_question = $scope.cur_question.parts[$scope.cur_part_idx];
        if (!current_question)
            current_question = $scope.qdata;    // May be null if called from with the student player (not editor)
        $log.debug(current_question);
        if (current_question.type == "imagedd") {
            // Get modal dialog canvas and destroy it
            var canvasElement = document.getElementById(current_question.canvasParentId);
            if (canvasElement) {
                canvasElement.setAttribute('id', "destroyed");

                // Now set the older canvas to the right id. Since the inital canvas was first in the DOM, this
                // getElementById will return the first object found and not the one we just changed above
                canvasElement = document.getElementById("destroyed");
                if (canvasElement) {
                    canvasElement.setAttribute('id', current_question.canvasParentIdCached);
                }
            }
            current_question.fullscreenPreview = false;
        }
        $modalInstance.close();
    };
});

App.controller('QuizPlayController', function($scope, $log, $modal, $rootScope, $stateParams, restFactory, $http,
                                              $controller, Preloader, $state, $timeout)
{
    $scope.isQuizLoading = true;

    $controller('PreviewBaseController', {$scope: $scope});
    $controller('AppController', {$scope: $scope});     // to get user object in rootScope
    $scope.get_instance();

    $scope.feedback_audio = {};
    $http({method: 'GET', url: 'app/data/feedback_audio.json'}).
        success(function(data, status, headers, config) {
            $scope.feedback_audio = data;
        }).error(function(data, status, headers, config) {
        });

    $scope.hide_icons = false;
    //Quiz play controller. Will be parent to all child controllers.
    $scope.basepath = function(uri)
    {
        if ($rootScope.$isProduction){
            return 'quiz/app/views/' + uri;
        }else{
            return 'app/views/' + uri;
        }
    };

    $scope.$on("onLoadInitialData", function(e, data)
    {
        $log.debug("onLoadInitialData");
        $log.debug(data);
        $scope.isQuizLoading = true;

        $scope.setQuizData(data);
        $scope.containsAudioTags = false;

        if (!$scope.quiz_data.hasBeenLoaded) {
            var quiz_string = JSON.stringify(data);
            var audio1 = quiz_string.indexOf("<audio") != -1;
            var audio2 = false;
            if ($scope.quiz_data.training_activity) {
                $scope.replaceAudioFeedbackTags(data);
                var gr = parseInt(data.grade_level);
                if (gr > 3) {       // For Grades 1 to 3 we include all vocab words audio as part of quiz
                    $scope.replaceAudioVocabTags(data);
                }
                audio2 = true;
            }

            $scope.initializeQuestionResults(data);

            // Set flag so if this quiz is saved and reloaded we don't do the replacement again
            $scope.quiz_data.hasBeenLoaded = true;
        }

        if ($scope.quiz_data.training_activity) {
            $scope.containsAudioTags = true;
        }

        $scope.cur_question_idx = 0;
        //Cur Selected Tool
        $scope.curSelTool = 0; // 0 : Pointer, 1 : Answer Eliminator, 2 : inch ruler, 3 : centi ruler, 4 : Protractor, 5 : calculator
        $scope.quiz_review_info = [];
        if($scope.quiz_data)
        {
            $scope.setCurQuestion($scope.cur_question_idx);

            if ($scope.quiz_data.questions) {
                //Initialize quiz review info.
                for (var i = 0; i < $scope.quiz_data.questions.length; i++) {
                    $scope.quiz_review_info.push({
                        flagged: false,
                        status: 0
                    });

                }
            }
        }

        // Turn off caching for now; elements from S3 are not being cached
        //$scope.cacheQuizData(data);
        $scope.$broadcast("onFilesCached", null);

    });

    $scope.cacheQuizData = function(data) {
        $scope.isCacheLoaded = false;
        $scope.cacheLoadProgress = 0;
        var quizStr = JSON.stringify($scope.quiz_data);
        //$log.debug(quizStr);

        function printProgressBar() {
            var percent = Math.floor((rl.numResourcesLoaded * 100) / rl.resources.length);
            $log.debug(percent);
            $scope.$broadcast("onCacheProgress", percent);
        }

        var rl = Preloader;
        rl.initialize(printProgressBar, function() {
            $log.debug('Preloading complete!');
            $scope.$broadcast("onFilesCached", data);
        });

        /**
         * Here is what we are looking for
         * src=\"/api/resource/content-commonResource-tryagain.mp3\"
         * src=\"/app/data/graphicorganizers/synonym-antonym.png\"
         */
        var urls = [],
            str = quizStr,
            rex = /src=\\"([^">]*\/([^">]*?))\\".*?>/g,
            m = rex.exec( str );

        if(m !== null) {
            urls.push( m[1] );
            rl.addResource(m[1], "JPEG", "Quiz data");
        }
        $log.debug(urls);

        if (urls.length !== 0)
            rl.startPreloading();
        else
            $scope.$broadcast("onFilesCached", data);
    };

    $scope.$on("onCacheProgress", function(e, data)
    {
        $log.debug("onCacheProgress: " + data);
        $scope.cacheLoadProgress = data;
        $scope.$apply();
    });

    $scope.$on("onFilesCached", function(e, data)
    {
        $log.debug("All quiz data cached");
        $scope.quiz_data.is_editing = false;
        $scope.isQuizLoading = false;
        $scope.isCacheLoaded = true;
        if (data)
            $scope.$apply();
    });

    $scope.initializeQuestionResults = function(data)
    {
        if (!data.questionResults) {
            $log.debug("Creating question results obj");
            data.questionResults = [];
        }

        for(i = 0; i < data.questions.length; i++)
        {
            for(j = 0; j < data.questions[i].parts.length; j++) {
                var questionResult = {
                    'timestamp' : 0,
                    'uuid' : data.questions[i].parts[j].uuid,
                    'score' : 0,
                    'max_score' : 1,
                    'response' : 0,
                    'retries': 0,
                    'accuracy': 0,
                    'speed' : 0,
                    'points' : 0,
                    'trophies' : 0,
                    'answered' : false
                };
                data.questionResults.push(questionResult);
            }
        }
    };

    $scope.setQuizData = function(quiz_data, additionalInformation)
    {
        var i;
        var additionalIds = {"studentId": $rootScope.user.login.studentId,"quizId": $stateParams.id,"courseId": $rootScope.courseId};
        additionalInformation = additionalInformation || additionalIds;
        for (i in additionalInformation){
            quiz_data[i] = additionalInformation[i];
        }


        $scope.quiz_data = $scope.localStorageAddQuiz(quiz_data);
        $scope.quiz_review_info = [];

        restFactory.send_data($scope.quiz_data, "quiz_data");
        $log.debug("Data sent");
        $log.debug($scope.quiz_data);

        for(i = 0; i < quiz_data.questions.length; i++)
        {
            $scope.quiz_review_info.push({
                flagged : false,
                status : 0,
                title : "Question" + (i + 1)
            });
        }
        $scope.setCurQuestion(0);
        $scope.flag_visited_question();
    };

    $scope.playTestSound = function() {
        $scope.test_audio = document.getElementById('test_audio');
        if ($scope.test_audio)
            $scope.test_audio.play();
    };

    $scope.exitQuiz = function () {
        if ($scope.clicked) {
            $scope.localStorageDeleteAll(); // Backdoor to clean cache
            $rootScope.backdoorReset = true;
            toastr.info("Cancelled");
            $scope.cancelClick = true;
            return;
        }

        $scope.clicked = true;

        $timeout(function () {
            if ($scope.cancelClick) {
                $scope.cancelClick = false;
                $scope.clicked = false;
                return;
            }

            $state.go('studentDashboard');

            //clean up
            $scope.cancelClick = false;
            $scope.clicked = false;
        }, 500);
    };


    $scope.replaceAudioFeedbackTags = function(quiz_data) {
        var audio_replaced = false;
        var template = "<span><audio autoplay id=\"{random}\"><source src=\"{location}\" type=\"audio/mp3\" /></audio></span>";
        for(i = 0; i < quiz_data.questions.length; i++)
        {
            for (j = 0; j < quiz_data.questions[i].parts.length; j++) {
                for (k = 0; k < quiz_data.questions[i].parts[j].feedback.length; k++) {
                    if (quiz_data.questions[i].parts[j].instant_feedback) {
                        var text_feedback = quiz_data.questions[i].parts[j].feedback[k].text_feedback;
                        text_feedback = text_feedback.replace(/&#39;/g, '\'');
                        if (text_feedback.indexOf("</audio>") == -1) {      // If an audio tag was set, don't replace
                            // Now go through all the feedbacks and see if we have them
                            for (var key in $scope.feedback_audio) {
                                var attrName = key;
                                var attrValue = $scope.feedback_audio[key];
                                if (text_feedback.indexOf(attrName) != -1) {
                                    var rnd = Math.floor(10000000000 + Math.random() * 90000000000);
                                    var audio_tag = template.replace("{random}", rnd).replace("{location}", attrValue);
                                    var replaced_feedback = text_feedback + audio_tag;
                                    quiz_data.questions[i].parts[j].feedback[k].text_feedback = replaced_feedback;
                                    audio_replaced = true;
                                    break;  // Only do 1st replacement
                                }
                            }
                        }
                        else {
                            // We have an audio tag already set. However, we want feedback to be played automatically
                            audio_replaced = true;
                            quiz_data.questions[i].parts[j].feedback[k].text_feedback = text_feedback.replace(/<audio/g, '<audio autoplay');
                        }
                    }
                }
            }
        }
        return audio_replaced;
    };

    /**
     * Replace audio tags for vocabulary words.
     * Only do so for quizzes with the word "vocab" in it. This is only for BrightFish use.
     * @param quiz_data
     */
    $scope.replaceAudioVocabTags = function(quiz_data) {
        audio_replaced = false;
        if (quiz_data.name.toLowerCase().indexOf("vocab") != -1) {
            $log.debug(quiz_data.name);
            var template = "<div><audio controls=\"controls\" id=\"{random}\"><source src=\"{location}\" type=\"audio/mp3\" /></audio></div>";
            for (i = 0; i < quiz_data.questions.length; i++) {
                var stimulus = quiz_data.questions[i].parts[0].stimulus;
                // First line of Vocabulary stimulus looks like this
                // <big><u><strong>famous</strong></u></big><br />
                // <u><big><strong>famous</strong></big></u><br />
                // <strong><big><u>famous</u></big></strong><br />
                // We need to extract the word, find the audio tag, and replace the stimulus
                if (stimulus.indexOf("<big>") != -1) {
                    var a = stimulus.indexOf(">", 15);
                    var b = stimulus.indexOf("<", 15);
                    var vocabWord = stimulus.substring(a + 1, b).toLowerCase().trim();
                    var re = new RegExp("&nbsp;", "g");
                    vocabWord = vocabWord.replace(re, '');
                    vocabWord = vocabWord.replace(/-/g, "");
                    vocabWord = vocabWord.replace(/["'()]/g,"");
                    var rnd = Math.floor(10000000000 + Math.random() * 90000000000);
                    var audio_tag = "/api/resource/content-commonResource-" + vocabWord + ".mp3";
                    audio_tag = template.replace("{random}", rnd).replace("{location}", audio_tag);
                    quiz_data.questions[i].parts[0].stimulus = audio_tag + stimulus;
                    audio_replaced = true;
                }
            }
        }
        return audio_replaced;
    };

    $scope.subQuizFlag = function()
    {
        return $scope.quiz_review_info[$scope.cur_question_idx].flagged;
    };

    /*
     *** flag the question as visited ***
     */

    $scope.view_review_info = [];

    $scope.flag_visited_question = function(qqid)
    {
        if (qqid == 1) {
            if ($scope.quiz_data.questions[$scope.cur_question_idx + 1])
                $scope.quiz_data.questions[$scope.cur_question_idx + 1].visited=true;
        } else {
            if ($scope.quiz_data.questions[$scope.cur_question_idx])
                $scope.quiz_data.questions[$scope.cur_question_idx].visited=true;
        }
    };
    $scope.prevQuestion = function()
    {
        if ($scope.isCurrentQuestionAnswered() || $rootScope.user.login.demo) {
            $scope.flag_visited_question("1");

            if ($scope.quiz_data.isDirty) {
                console.log("Dirty");
                $scope.initUnfinishedQuizPlayer();
                $scope.submitAnswer("in_progress");
                $scope.quiz_data.isDirty = false;
            }

            if($scope.cur_question_idx > 0)
                $scope.cur_question_idx --;
            $scope.setCurQuestion($scope.cur_question_idx);
        }
        else {
            toastr.info("You must review and answer all parts of this question!");
        }

        if ($scope.quiz_data.isDirty) {
            $scope.quiz_data.isDirty = false;
        }
    };
    $scope.checkLastQuestion = function (win) {
        if (!$scope.isCurrentQuestionAnswered() && !$rootScope.user.login.demo) {
            toastr.info("Please answer and review this question before saving.");
        }
        else {
            win.openCompleteQuiz('sm', $scope.quiz_data);
        }
    };
    $scope.isCurrentQuestionAnswered = function() {
        var allowNextQuestion = true;
        if ($scope.quiz_data.training_activity) {
            // Check to see if all parts have been answered
            for (var i = 0; i < $scope.cur_question.parts.length; i++) {
                var resultFound = false;
                if ($scope.cur_question.parts[i].type == "longtext")
                    resultFound = true;
                else {
                    for (var j = 0; j < $scope.quiz_data.questionResults.length; j++) {
                        if ($scope.cur_question.parts[i].uuid == $scope.quiz_data.questionResults[j].uuid
                            && $scope.quiz_data.questionResults[j].correctAnswerSelected) {
                            resultFound = true;
                            break;
                        }
                    }
                    if (!resultFound) {  // Assume each activity is score 0 or more than 0
                        allowNextQuestion = false;
                        break;
                    }
                }
            }
        }
        return allowNextQuestion;
    };
    $scope.nextQuestion = function()
    {
        if ($scope.isCurrentQuestionAnswered() || $rootScope.user.login.demo) {
            $scope.flag_visited_question("1");

            if ($scope.quiz_data.isDirty) {
                console.log("Dirty");
                $scope.initUnfinishedQuizPlayer();
                $scope.submitAnswer("in_progress");
                $scope.quiz_data.isDirty = false;
            }

            if ($scope.cur_question_idx < $scope.quiz_data.questions.length - 1)
                $scope.cur_question_idx++;
            $scope.setCurQuestion($scope.cur_question_idx);
        }
        else {
            toastr.info("You must review and answer all parts of this question!");
        }

        if ($scope.quiz_data.isDirty) {
            $scope.quiz_data.isDirty = false;
        }
    };

    $scope.endTest = function()
    {
        if ($scope.quiz_data.training_activity)
            $rootScope.$state.go('studentPlayQuiz.activity_end');
        else
            $rootScope.$state.go('studentPlayQuiz.end');
    };

    $scope.setCurQuestion = function(idx)
    {
        $log.debug("setCurQuestion " + idx);
        if($scope.quiz_data.questions) {
            $scope.cur_question = $scope.quiz_data.questions[idx];
            $scope.cur_question_idx = idx;
            $scope.saveQuestionResult();
        }
    };

    /**=========================================================
     * Save question result
     * This function saves any changes to the question by
     * by the student in this session
     * RCR: Unsupported.
     =========================================================*/
    $scope.saveQuestionResult = function() {
        /*
        if ($rootScope.user.login.demo) {
            $log.debug("DEMO MODE. NOTHING SAVED.");
            return;
        }
        if ($scope.isQuizLoading) {
            // Gets called on initial load of the quiz since the first page is navigated to by default.
            // No need to save anything
            $log.debug("Still loading. Nothing saved at this moment.");
            return;
        }
        if ($scope.quiz_data.questionResults) {
            $scope.isProcessing = true;
            $log.debug('save question result');

            var results = {
                'training': 'true',
                'questions': $scope.quiz_data.questionResults
            };
            $log.debug(JSON.stringify(results));
            var url = "api/activity/" + $rootScope.$stateParams.id + "/course/" + $rootScope.$stateParams.courseId + "/questionResult";
            $log.debug(url);

            restFactory.postService(url, results)
                .success(function (data) {
                    $log.debug("question result save success");
                })
                .error(function (error) {
                    $log.debug("question result error: " + error);
                });
        }
        */
    };

    $scope.reviewQuiz = function()
    {
        $rootScope.$state.go('studentPlayQuiz.review');
    };
    $scope.flagQuestion = function () {
        // body...
        $scope.quiz_review_info[$scope.cur_question_idx].flagged = !$scope.quiz_review_info[$scope.cur_question_idx].flagged;
    };


    $scope.selectTool = function(tool_code)
    {
        $scope.curSelTool = tool_code;
        //Init ruler position.
        $scope.rulerLeft = 0;
        $scope.rulerTop = 150;

        $scope.tool_posx = 150 + tool_code * 10;
        $scope.tool_posy = 150;
    };

    $scope.closeCalculator = function()
    {
        $scope.curSelTool = 0;
    };

    //Initialize Controller
    {
        /*
        $scope.cur_question_idx = 0;
        //Cur Selected Tool
        $scope.curSelTool = 0; // 0 : Pointer, 1 : Answer Eliminator, 2 : inch ruler, 3 : centi ruler, 4 : Protractor, 5 : calculator
        $scope.quiz_review_info = [];
        if($scope.quiz_data)
        {
            $scope.setCurQuestion($scope.cur_question_idx);

            if ($scope.quiz_data.questions) {
                //Initialize quiz review info.
                for (var i = 0; i < $scope.quiz_data.questions.length; i++) {
                    $scope.quiz_review_info.push({
                        flagged: false,
                        status: 0
                    });

                }
            }
        }
        */
        $log.debug('** init player **');

        var rootState = 'studentPlayQuiz';
        $scope.cur_child_state = rootState;

        $rootScope.$on('$stateChangeSuccess',
            function(event, toState, toParams, fromState, fromParams)
            {

                if(toState.name == rootState && $scope.cur_nav_state != rootState)
                {
                    //TODO : this should be done according to internal state.
                    $rootScope.$state.go($scope.cur_child_state);
                }
                else
                {
                    if(toState.name.indexOf('studentPlayQuiz') === 0)
                        $scope.cur_child_state = toState.name;
                }
            }
        );
        $rootScope.$state.go('studentPlayQuiz.intro');
    }

    /**
     * Tutorial functions
     */

    $scope.resetTutorialPlayedQuiz = function() {
        $rootScope.user.user.preferences.tutorialPlayedQuiz = false;
    };

    $scope.onQuizIntroStart = function() {
        if ($rootScope.loadingInstance) {
            if (!$scope.retryIntro)
                $scope.retryInfo = 0;
            $scope.retryInfo++;

            if ($scope.retryInfo <= 10) {
                setTimeout(function () {
                    $scope.onQuizIntroStart();
                }, 1000);
                return;
            }
        }
        else
            $scope.retryInfo = 0;

        if ($rootScope.user.user.preferences.tutorialPlayedQuiz ||
            !$scope.quiz_data.training_activity) {
            $scope.onQuizIntroExit();
            return;   // Only play tutorial once per session
        }

        $scope.intro = introJs();
        $scope.setQuizIntroOptions();

        $scope.introAudioPlayer = document.getElementById('introQuizPlayer');
        $scope.intro.start();
        $scope.introAudioPlayer.src = $scope.intro._options.steps[0].sound;
        $scope.introAudioPlayer.play();

        $scope.intro.oncomplete(function() {
            $scope.onQuizIntroExit();
        });

        $scope.intro.onexit(function() {
            $scope.onQuizIntroExit();
        });

        $scope.intro.onafterchange(function(targetElement) {
            console.log(targetElement.id);
            if (targetElement.id.indexOf("TUT") == -1) {
                setTimeout(function () {
                    $('.introjs-tooltip').css({'max-width': '600px'});
                    $('.introjs-tooltip').css({'margin-top': '-351px'});
                    $('.introjs-tooltip').css({'margin-left': '-300px'});
                    $('.introjs-helperNumberLayer').css({'left': '-15px'});
                    $('.introjs-helperNumberLayer').css({'top': '-364px'});
                    $('.introjs-helperNumberLayer').css({'margin-left': '-298px'});
                }, 400);
            }
        });

        $scope.intro.onchange(function(targetElement) {
            var elementId = targetElement.getAttribute("id");
            if (elementId) {
                elementId = "#" + elementId;
                for (var i = 0; i < $scope.intro._options.steps.length; i++) {
                    var step = $scope.intro._options.steps[i];
                    if (step.element == elementId) {
                        console.log("Playing " + step.sound);
                        $scope.introAudioPlayer.src = step.sound;
                        $scope.introAudioPlayer.play();
                        break;
                    }
                }
            }
            else {
                var step = $scope.intro._options.steps[$scope.intro._currentStep];
                console.log("Playing " + step.sound);
                $scope.introAudioPlayer.src = step.sound;
                $scope.introAudioPlayer.play();
            }
        });
    };


    $scope.setQuizIntroOptions = function() {
        $scope.intro.setOptions({
            steps: [
                {
                    id: "#TUT-empty",
                    intro: "Let's get ready to start this first activity.",
                    sound: "/app/data/sounds/tutorial/quiz/0.mp3"
                },
                {
                    element: '#TUT-QuestionNum',
                    intro: "Here are the number of questions you have to complete.",
                    sound: "/app/data/sounds/tutorial/quiz/1.mp3"
                },
                {
                    element: '#TUT-PrevNext',
                    intro: "Use these arrows to move between questions.",
                    sound: "/app/data/sounds/tutorial/quiz/2.mp3"
                },
                {
                    element: '#TUT-SaveExit',
                    intro: "When you have answered all the questions, click this button to Save and Exit.",
                    position: "left",
                    sound: "/app/data/sounds/tutorial/quiz/3.mp3"
                },
                {
                    element: '#TUT-empty',
                    intro: "You will have to answer many different types of questions...",
                    sound: "/app/data/sounds/tutorial/quiz/4.mp3"
                },
                {
                    intro: "In this question you have to make one choice<br><br><img src='/images/tutorial/quiz/mc-single.gif'>",
                    sound: "/app/data/sounds/tutorial/quiz/5.mp3"
                },
                {
                    intro: "This question has multiple answers<br><br><img src='/images/tutorial/quiz/mc-multi.gif'>",
                    sound: "/app/data/sounds/tutorial/quiz/6.mp3"
                },
                {
                    intro: "Some questions you will need to choose an answer from a drop-down...<br><br><img src='/images/tutorial/quiz/dropdown.gif'>",
                    sound: "/app/data/sounds/tutorial/quiz/7.mp3"
                },
                {
                    intro: "Some questions will ask you to drag and drop your answer into boxes...<br><br><img src='/images/tutorial/quiz/imagedd.gif'>",
                    sound: "/app/data/sounds/tutorial/quiz/8.mp3"
                },
                {
                    intro: "And here is another type of drag and drop...<br><br><img src='/images/tutorial/quiz/draganddrop.gif'>",
                    sound: "/app/data/sounds/tutorial/quiz/9.mp3"
                },
                {
                    element: '#TUT-empty',
                    intro: "Try your best! Remember, the better you do the more points you get! Ready?",
                    sound: "/app/data/sounds/tutorial/quiz/10.mp3"
                }
            ]
        })
    };

    $scope.onQuizIntroExit = function() {
        console.log("onQuizIntroExit");
        var update = false;
        if (!$rootScope.user.user.preferences.tutorialPlayedQuiz)
            update = true;
        $rootScope.user.user.preferences.tutorialPlayedQuiz = true;

        if (update && !$rootScope.user.login.demo)
            $scope.updateUser();
    }
});
App.controller('QuizPlayStartController', function($scope, $rootScope, $state)
{
    $scope.startTest = function()
    {
        $rootScope.activityStartTime = Date.now();
        //TODO : save status; status is saved when page is switched.
        $rootScope.$state.go('studentPlayQuiz.overview');
    };
});
App.controller('QuizPlayEndController' , function($scope, $log, $rootScope, restFactory, $state, $controller)
{
    $scope.ACTIVITY_POINTS = 1000;
    $scope.ACTIVITY_TROPHIES = 3;

    $controller('PreviewBaseController', {$scope: $scope});
    $controller('AppController', {$scope: $scope});     // to get user object in rootScope
    $scope.get_instance();

    $scope.isProcessing = false;
    $scope.reviewAnswer = function()
    {
        $rootScope.$state.go('studentPlayQuiz.review');
    };

    $scope.submitUnfinishedQuizPlayer = function () {
        if (!$rootScope.loadingInstance) {
            if ($scope.quiz_data.status != "finished" || $rootScope.user.login.demo) {
                $scope.quiz_data.status = "unfinished";
                $scope.addSessionInfo();
                $scope.initFinishedQuizPlayer();       // Just empty objects; required on server
                $scope.submitAnswer("in_progress");
            }
            $scope.closeUnfinishedQuizPlayer();
            return true;
        }
        return false;
    };

    $scope.submitFinishedQuizPlayer = function () {
        if (!$rootScope.loadingInstance) {
            $log.debug("Marking as Finished");
            $scope.quiz_data.status = "finished";
            $scope.addSessionInfo();
            $scope.initFinishedQuizPlayer();
            //restFactory.send_data($scope.quiz_data.questionResults, "questionResults");
            $scope.submitAnswer("finished");
            $log.debug($scope.quiz_data); // Trophies and points here
            return true;
        }
        return false;
    };

    $scope.addSessionInfo = function () {
        if (!$scope.quiz_data.sessions)
            $scope.quiz_data.sessions = [];
        $scope.quiz_data.sessions.push({
            startTime: $rootScope.activityStartTime,
            endTime: Date.now()
        });
    };

    $scope.initFinishedQuizPlayer = function () {
        $scope.initUnfinishedQuizPlayer();

        if ($scope.quiz_data.sessions) {
            var totalTimeSpent = 0;
            for (i = 0;i<$scope.quiz_data.sessions.length; i++) {
                totalTimeSpent += $scope.quiz_data.sessions[i].endTime - $scope.quiz_data.sessions[i].startTime;
            }
            $scope.quiz_data.activityResult.totalAnswerTime = totalTimeSpent;
        }
    };

    $scope.closeFinishedQuizPlayer = function () {
        if ($scope.quiz_data.training_activity) {
            var activityId = $rootScope.activityIdNew;
            if (!activityId)
                activityId = $rootScope.activityId;
            $scope.quiz_data = "";
            $state.go("studentActivity",{id: activityId});
        }
        else {
            $scope.quiz_data = "";
            $state.go("studentDashboard");
        }
    };

    $scope.playSound = function(quiz_data) {
        $log.debug("playSound");
        $log.debug(quiz_data);

        if (quiz_data.activityResult) {
            if (quiz_data.activityResult.points >= 1000) {
                $scope.end_audio = document.getElementById('activity_perfect_audio');
            }
            else {
                $scope.end_audio = document.getElementById('activity_master_audio');
            }
            $scope.end_audio.play();
        }

        if (quiz_data.status == "finished")      // Only play if not done before
            return;
    };
});

App.controller('QuizPlayReviewController', function($scope, $log, $rootScope, $controller)
{
    $controller('PreviewBaseController', {$scope: $scope});

    /* Review Category indicator
     * 0 : All
     * 1 : Not Answered
     * 2 : Flagged
     */

    /* Review status
     * Status :
     * -1 Unknown
     * 0 Not Answered
     * 1 Not Viewed
     * 2 Answered
     */

    function filterReview()
    {
        var i;
        if($scope.review_category === 0)
        {
            $scope.sel_review_info = $scope.quiz_review_info;
        }
        else if($scope.review_category == 1)
        {
            $scope.sel_review_info = [];
            for(i = 0; i < $scope.quiz_review_info.length; i++)
            {
                if($scope.quiz_review_info[i].status === 0 || $scope.quiz_review_info[i].status == 1)
                    $scope.sel_review_info.push($scope.quiz_review_info[i]);
            }
        }
        else if($scope.review_category == 2)
        {
            $scope.sel_review_info = [];
            for(i = 0; i < $scope.quiz_review_info.length; i++)
            {
                if($scope.quiz_review_info[i].flagged)
                    $scope.sel_review_info.push($scope.quiz_review_info[i]);
            }
        }
    }

    $scope.init = function()
    {
        $log.debug("init");
        var bComplete = true;
        var not_answered;
        var flagged;
        flagged = 0;
        not_answered = 0;
        for(var i = 0; i < $scope.quiz_review_info.length; i++)
        {
            if($scope.quiz_review_info[i].status != 2)
            {
                not_answered ++;
                bComplete = false;
            }
            if($scope.quiz_review_info[i].flagged)
            {
                flagged ++;
            }
        }
        $scope.flagged = flagged;
        $scope.not_answered = not_answered;
        $scope.review_category = 0;
        $scope.completed = bComplete;
        filterReview(0);
    };

    $scope.viewQuiz = function(idx)
    {
        $scope.setCurQuestion(idx);
        $rootScope.$state.go('studentPlayQuiz.overview');
    };
    $scope.backToQuiz = function()
    {
        $rootScope.$state.go('studentPlayQuiz.overview');
    };
    $scope.selectCategory = function(category)
    {
        $scope.review_category = category;
    };
});

App.controller('PreviewBaseController', ['$scope', '$rootScope', 'restFactory', '$log', '$modal', 'scoring.commonScoring', '$localStorage',
function($scope, $rootScope, restFactory, $log, $modal, commonScoring, $localStorage)
{
    $scope.USE_LOCAL_STORAGE = true;

    $scope.CANVAS_MAX_WIDTH = 600;
    $scope.CANVAS_MAX_HEIGHT = 550;

    $scope.ACTIVITY_POINTS = 1000;
    $scope.ACTIVITY_TROPHIES = 3;

    $scope.incorrectResponses = [];

    $scope.ckEditorOptions1 = {
        disableAutoInline : false,
        enterMode : CKEDITOR.ENTER_BR,
        shiftEnterMode: CKEDITOR.ENTER_P,
        extraPlugins: 'wordcount,scayt',
        scayt_autoStartup: true,
        maxWords : 10000,
        showCharCount:true,
        toolbar : [

            { name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ], items: [ 'Bold', 'Italic', 'Underline', 'BulletedList', 'SpecialChar' ] }

        ]};

    $scope.ckEditorOptions1.wordcount = {

        // Whether or not you want to show the Word Count
        maxWordCount: 10000

    };

    $scope.validateQuizData = function(quiz_data) {
        // Run some checks. Noticed some bad data, due to old bugs.

        if ($rootScope.quiz_data && $rootScope.quiz_data.training_activity) {
            if (!quiz_data.feedbackShown && quiz_data.correctAnswerSelected && quiz_data.type != "longtext") {
                quiz_data.correctAnswerSelected = false;
                $log.debug("Fixing correctAnswerSelected");
            }
        }
    };

    $scope.localStorageUpdateQuiz = function(data) {
        if ($scope.USE_LOCAL_STORAGE) {
            if (!$rootScope.user.login.demo && $localStorage && $localStorage.quizzes) {
                for (var i = 0; i < $localStorage.quizzes.length; i++) {
                    if ($localStorage.quizzes[i].quizId === data.quizId &&
                        $localStorage.quizzes[i].studentId === data.studentId &&
                        $localStorage.quizzes[i].zoneId === data.zoneId) {
                        // Found quiz in local storage. Use quiz data
                        $log.debug("Quiz found in local storage. Replacing.")
                        $localStorage.quizzes[i] = data;
                        break;
                    }
                }
            }
        }
    }

    $scope.localStorageAddQuiz = function (data) {
        if ($scope.USE_LOCAL_STORAGE) {
            if ($rootScope.user.login.demo || !$localStorage)
                return data;

            if (!$scope.storage) {
                $scope.storage = $localStorage;
            }

            var found = false;
            if ($localStorage && $localStorage.quizzes) {

                for (var i = 0; i < $localStorage.quizzes.length; i++) {
                    if ($localStorage.quizzes[i].quizId === data.quizId &&
                        $localStorage.quizzes[i].studentId === data.studentId &&
                        $localStorage.quizzes[i].zoneId === data.zoneId) {
                        // Found quiz in local storage. Use quiz data
                        if ($rootScope.user.login.demo) {
                            $scope.localStorageDeleteQuiz(data);
                        }
                        else {
                            $log.debug("Quiz found in local storage. Loading.")
                            data = $localStorage.quizzes[i];
                            found = true;
                            break;
                        }
                    }
                }
            }

            if (!found) {
                if (!$localStorage.quizzes)
                    $localStorage.quizzes = [];
                $log.debug("Quiz not found in local storage. Adding.")
                $localStorage.quizzes.push(data);
            }
        }

        return data;
    };

    $scope.localStorageDeleteQuiz = function (data) {
        if ($scope.USE_LOCAL_STORAGE) {
            if ($localStorage && $localStorage.quizzes) {
                for (var i = 0; i < $localStorage.quizzes.length; i++) {
                    if ($localStorage.quizzes[i].quizId === data.quizId &&
                        $localStorage.quizzes[i].studentId === data.studentId &&
                        $localStorage.quizzes[i].zoneId === data.zoneId) {
                        // Found quiz in local storage. Use quiz data
                        $log.debug("Quiz found in local storage. Deleting.")
                        $localStorage.quizzes.splice(i, 1);
                    }
                }
            }
        }
    };

    $scope.localStorageDeleteAll = function() {
        if ($localStorage) {
            $localStorage.quizzes = [];
            $log.debug("Local cache deleted");
        }
    };

    /**
     * If this controller is called in the context of a teacher reviewing the quiz and scoring it,
     * we need to update the scores for each part based on the new scores from the db
     */
    $scope.intializeDataForPreview = function() {
        if ($scope.quiz_data && $scope.quiz_data.teacherReview) {
            $log.debug("In teacher review...updating scores");

            // First build scores from db based on part id
            var i, db_scores = {};
            for (i = 0; i < $scope.quiz_data.questionResults.length; i++) {
                db_scores[$scope.quiz_data.questionResults[i].uuid] = $scope.quiz_data.questionResults[i].score;
            }

            for (i = 0; i < $scope.quiz_data.questions.length; i++) {
                for (var j = 0; j < $scope.quiz_data.questions[i].parts.length; j++) {
                    var part = $scope.quiz_data.questions[i].parts[j];
                    part.db_score = db_scores[part.uuid];
                }
            }

            // Remove autoplayback of audio in teacher review
            if ($scope.quiz_data.teacherReview) {
                $log.debug("Replacing audio autoplay string");
                var quiz_string = JSON.stringify($scope.quiz_data);
                quiz_string = quiz_string.replace(/autoplay/g, "");
                $scope.quiz_data = JSON.parse(quiz_string);
            }

            $log.debug($scope.quiz_data);
        }
    };

    $scope.intializeDataForPreview();

    $scope.wordCounter = function()
    {
        $log.debug("word counter");
        var text = $scope.qdata.response.value;
        var limit = $scope.qdata.max_length;
        var words = text ? text.split(/\s+/) : 0; // it splits the text on space/tab/enter
        var totwords = words ? words.length : '';
        if(totwords>limit)
        {
            //$scope.qdata.placeholder = text.substring(0, text.length - 1);
            //toastr.error("Word limit exceeded");
            $scope.myStyle={color:'red'};

        }else
        {
            //alert($scope.ckEditorOptions1.wordcount.maxWordCount);
            $scope.myStyle={color:'black'};
            //$scope.myStyle={border-color:'grey'};
            // RCR: Problem here: sometimes the document may not be loaded by the time this is called.
            // getElementById returns null.
            //document.getElementById('cke_wordcount_editor3').innerHTML='Words: '+totwords+' / '+ limit;
        }
    };

    /**
     * Points and trophies for tests are calculated by the number of times the student clicks on their
     * "Check answer" button (retries). The GUI forces the students to select the correct answer.
     * @param questionResult
     */
    $scope.calculatePoints = function(questionResult) {
        if (questionResult.accuracy === 0) {
            questionResult.points = 0;
            questionResult.trophies = 0;
        }
        else {
            // First count the total number of question parts
            var totalParts = 0;
            for (var i = 0; i < $scope.quiz_data.questions.length; i++) {
                totalParts += $scope.quiz_data.questions[i].parts.length;
            }

            // Count number of parts for this question
            var curQuestionParts = $scope.cur_question.parts.length;

            // Calculate points for this question and each part
            var numPointsPerPart = $scope.ACTIVITY_POINTS / totalParts;

            // Now we have all data; calculate points
            // Reduce by 40% for each retry
            if (!questionResult.retries)
                questionResult.retries = 0;
            questionResult.points = Math.max(numPointsPerPart - (Math.max(questionResult.retries - 1, 0) * 0.40 * numPointsPerPart), 0);

            // Calculate trophies for this question part
            var pointsPerTrophy = numPointsPerPart / $scope.ACTIVITY_TROPHIES;
            questionResult.trophies = questionResult.points / pointsPerTrophy;
        }
    };

    $scope.updateQuestionResult = function() {
        if ($scope.qdata.correctAnswerSelected) {
            return;
        }

        $log.debug($scope.qdata);
        // Save question result for db

        if (!$scope.quiz_data.questionResults) {
            $log.debug("Creating question results obj");
            $scope.quiz_data.questionResults = [];
        }
        var questionResult = {
            'timestamp' : new Date().getTime(),
            'uuid' : $scope.qdata.uuid,
            'score' : $scope.qdata.response.score,
            'max_score' : $scope.qdata.response.max_score,
            'response' : $scope.qdata.response.value,
            'retries': $scope.qdata.num_feedback_clicked,
            'accuracy': $scope.qdata.response.score / $scope.qdata.response.max_score,
            'speed' : 0,
            'points' : 0,
            'trophies' : 0,
            'feedbackShown' : $scope.qdata.feedbackShown,
            'answered' : $scope.qdata.answered,
            'tags' : $scope.qdata.tags,
            'type' : $scope.qdata.type
        };

        $scope.calculatePoints(questionResult);
        questionResult.answered = true;
        if (questionResult.type === "longtext")
        {
            if (questionResult.score == 0)
                questionResult.answered = false;
            else {
                questionResult.feedbackShown = true;
                questionResult.correctAnswerSelected = true;
            }
        }

        for (var i = 0; i < $scope.quiz_data.questionResults.length; i++) {
            if ($scope.quiz_data.questionResults[i].uuid == $scope.qdata.uuid) {
                $scope.quiz_data.questionResults.splice(i, 1);
            }
        }

        $scope.quiz_data.questionResults.push(questionResult);
        $scope.qdata.questionResult = questionResult;
        $scope.quiz_data.isDirty = true;

        $log.debug("updateQuestionResult");
        $log.debug($scope.quiz_data);

        $scope.build_review_statistics();
        $scope.localStorageUpdateQuiz($scope.quiz_data);
    };

    $scope.checkAnswerClicked = function() {
        $log.debug("checkAnswerClicked");
        $scope.check_answer = $scope.quiz_data.is_editing || $scope.qdata.instant_feedback || $scope.quiz_data.teacherReview;

        $scope.checkAnswer();

        // Take snapshot of questions object. This will allow us to see the responses first entered by the student
        if ($scope.qdata.num_feedback_clicked === 1) {
            if (!$scope.quiz_data.questionsHistory) {
                // For now we only story history from 1st feedback; however the structure can support history
                // for multiple feedbacks in the future.
                $scope.quiz_data.questionsHistory = {1: []};
            }
            // Angular copy causes illegal invocation exception. Underlying elements containing jQuery elements (imagedd)
            // seem not to be supported. Using clone from underscore.js as an alternative.
            //var qCopy = angular.copy($scope.qdata);
            var quiz_string = JSON.stringify($scope.qdata);
            var qCopy = JSON.parse(quiz_string);
            qCopy.timestamp = new Date().getTime();
            $scope.quiz_data.questionsHistory[1].push(qCopy);
        }
    };

    $scope.displayFeedback = function(qdata) {
        $log.debug("Base DisplayFeedback");

        // Keep track of number of times the feedback button has been clicked.
        if (!qdata.num_feedback_clicked) {
            qdata.num_feedback_clicked = 0;
        }
        qdata.num_feedback_clicked++;

        try {
            $scope.checkAnswerClicked();
        }
        catch(err) {
            // Inovation error thrown on angular.copy($scope.qdata);
            $log.debug(err)
        }

        var cur_score = qdata.response.score;
        var max_score = qdata.response.max_score;
        $log.debug("Current Score: " + cur_score);
        $log.debug("Max Score: " + max_score);

        if (!qdata.displayedFeedback) {
            qdata.displayedFeedback = {
                'incorrectFeedback': "",
                'correctFeedback': "",
                'specificFeedback': ""
            };
        }
        var i, found_index;
        var feedback = {
            'incorrectFeedback': [],
            'correctFeedback': [],
            'specificFeedback': []
        };

        if (cur_score != max_score) {
            // First, let's get all feedback
            for (i = 0; i < qdata.feedback.length; i++) {
                if (qdata.feedback[i].option == 0) {
                    feedback.incorrectFeedback.push(qdata.feedback[i].text_feedback);
                }
            }
            // Now, check to see if the feedback is already being shown
            found_index = -1;
            for (i = 0; i < feedback.incorrectFeedback.length; i++) {
                if (feedback.incorrectFeedback[i] == qdata.displayedFeedback.incorrectFeedback) {
                    found_index = i;
                }
            }
            if (found_index == -1) {
                qdata.displayedFeedback.incorrectFeedback = feedback.incorrectFeedback[0];
            }
            else {
                // If feedback is already shown and we are at the end of all feedbacks, display the first one
                if (found_index == feedback.incorrectFeedback.length - 1) {
                    qdata.displayedFeedback.incorrectFeedback = feedback.incorrectFeedback[0];
                }
                else {
                    // If feedback is already shown, then display the next feedback in sequence
                    qdata.displayedFeedback.incorrectFeedback = feedback.incorrectFeedback[found_index+1];
                }
            }
        }
        else {
            qdata.displayedFeedback.incorrectFeedback = "";
        }

        if (cur_score == max_score) {
            // First, let's get all feedback
            for (i = 0; i < qdata.feedback.length; i++) {
                if (qdata.feedback[i].option == 1) {
                    feedback.correctFeedback.push(qdata.feedback[i].text_feedback);
                }
            }
            // Now, check to see if the feedback is already being shown
            found_index = -1;
            for (i = 0; i < feedback.correctFeedback.length; i++) {
                if (feedback.correctFeedback[i] == qdata.displayedFeedback.correctFeedback) {
                    found_index = i;
                }
            }
            if (found_index == -1) {
                qdata.displayedFeedback.correctFeedback = feedback.correctFeedback[0];
            }
            else {
                // If feedback is already shown and we are at the end of all feedbacks, display the first one
                if (found_index == feedback.correctFeedback.length - 1) {
                    qdata.displayedFeedback.correctFeedback = feedback.correctFeedback[0];
                }
                else {
                    // If feedback is already shown, then dislpay the next feedback in sequence
                    qdata.displayedFeedback.correctFeedback = feedback.correctFeedback[found_index+1];
                }
            }
        }
        else {
            qdata.displayedFeedback.correctFeedback = "";
        }


        for (i = 0; i < qdata.feedback.length; i++) {
            if (qdata.feedback[i].option == 2) {
                var allOptionsMatched = true;
                if (qdata.feedback[i].valid_response.value.length == qdata.response.value.length) {
                    for (var j = 0; j < qdata.response.value.length; j++) {
                        if (qdata.feedback[i].valid_response.value[j] != qdata.response.value[j]) {
                            allOptionsMatched = false;
                        }
                    }
                    if (allOptionsMatched) {
                        feedback.specificFeedback.push(qdata.feedback[i].text_feedback);
                    }
                }
            }
        }
        // Now, check to see if the feedback is already being shown
        found_index = -1;
        for (i = 0; i < feedback.specificFeedback.length; i++) {
            if (feedback.specificFeedback[i] == qdata.displayedFeedback.specificFeedback) {
                found_index = i;
            }
        }
        if (found_index == -1) {
            qdata.displayedFeedback.specificFeedback = feedback.specificFeedback[0];
        }
        else {
            // If feedback is already shown and we are at the end of all feedbacks, display the first one
            if (found_index == feedback.specificFeedback.length - 1) {
                qdata.displayedFeedback.specificFeedback = feedback.specificFeedback[0];
            }
            else {
                // If feedback is already shown, then dislpay the next feedback in sequence
                qdata.displayedFeedback.specificFeedback = feedback.specificFeedback[found_index+1];
            }
        }

        if (!qdata.displayedFeedback.incorrectFeedback)
            qdata.displayedFeedback.incorrectFeedback = "";
        else {
            if ($scope.qdata.autoFeedback != undefined)
                qdata.displayedFeedback.incorrectFeedback += "<div>" + $scope.qdata.autoFeedback + "</div";
        }
        if (!qdata.displayedFeedback.correctFeedback)
            qdata.displayedFeedback.correctFeedback = "";
        if (!qdata.displayedFeedback.specificFeedback)
            qdata.displayedFeedback.specificFeedback = "";
        $log.debug(qdata.displayedFeedback);

        $scope.qdata.feedbackShown = true;
        $scope.onFeedbackShown();
        $scope.highlightIncorrectOptions();

        var modalInstance = $modal.open({
            templateUrl: $scope.basepath('templates/feedback_dialog.html'),
            controller : 'FeedbackDialog',
            scope: $scope,
            backdrop : 'static',
            resolve:{
                title : function(){return "Check answer";}
            }
        });
    };

    $scope.onFeedbackShown = function() {
        if ($scope.qdata && $scope.qdata.response
            && $scope.qdata.feedbackShown && $scope.qdata.response.score &&
            $scope.qdata.response.score == $scope.qdata.response.max_score) {
            $scope.qdata.correctAnswerSelected = true;

            // Save to db
            for (var i = 0; i < $scope.quiz_data.questionResults.length; i++) {
                if ($scope.quiz_data.questionResults[i].uuid == $scope.qdata.uuid) {
                    $scope.quiz_data.questionResults[i].correctAnswerSelected = true;
                    $scope.quiz_data.questionResults[i].response = true;
                    break;
                }
            }

            $scope.build_review_statistics();
        }
    };

    $scope.$watch('qdata.feedbackShown', function () {
        // Hide check answer button if the student answered correctly and saw the feedback
        $scope.onFeedbackShown();
    });

    $scope.highlightIncorrectOptions = function() {
        $log.debug("Base highlightIncorrectOptions");
    };

    $scope.calculateMaxScore = function (question) {
        return commonScoring.maxScore(question);
    };

    $scope.initResponse = function ()
    {
        console.log("init response");
        if ($scope.qdata.response === undefined || ($scope.qdata.response === undefined && !$scope.qdata.response.score)) {
            $scope.qdata.response = {
                "score" : 0,
                "max_score" : 0
            }
        }
    }
    /**
     * Only called by ImageDD for now
     */
    $scope.calculateTotalScore = function()
    {
        $log.debug("calculateTotalScore");
        var response = $scope.qdata.response;
        response.max_score = 0;
        response.score = 0;

        //Necessary for shuffling.
        $scope.check_answer = false;

        try{
            response.max_score = $scope.qdata.validation.valid_response.score;
        }
        catch(err)
        {

        }
        try{
            var alt_response = $scope.qdata.validation.alt_response;
            for(var idx in alt_response)
            {
                response.max_score += alt_response[idx].score;
            }
        }
        catch(err)
        {

        }
    };

    $scope.build_review_statistics = function() {
        $scope.view_review_info = [];
        var stat_map = {};
        $scope.quiz_data.all_questions_answered = true;

        for (var i = 0; i < $scope.quiz_data.questionResults.length; i++) {
            var result = $scope.quiz_data.questionResults[i];
            var result_answered = true;

            if (($scope.quiz_data.training_activity && !result.correctAnswerSelected) ||
                (!$scope.quiz_data.training_activity && !result.answered)) {
                $scope.quiz_data.all_questions_answered = false;
                result_answered = false;
            }

            var partIndex = result.uuid.indexOf("_");
            var partId = parseInt(result.uuid.substring(partIndex + 1, result.uuid.length))
            var questionId = parseInt(result.uuid.substring(1, partIndex));
            var questionTitle = "Question " + (questionId + 1);
            if (questionId in stat_map) {
                if (stat_map[questionId] && !result_answered) {
                    // One part is answered but this part was not answered
                    stat_map[questionId] = false;
                }
                else if (!stat_map[questionId] && result_answered) {
                    // One part is not answered and this part is answered
                    result_answered = false;
                    stat_map[questionId] = false;
                }

                for (var j = 0; j < $scope.view_review_info.length; j++) {
                    if ($scope.view_review_info[j].title === questionTitle) {
                        $scope.view_review_info.splice(j, 1)
                        break;
                    }
                }
            }
            else {
                stat_map[questionId] = result_answered;
            }

            $scope.view_review_info.push({
                "questionId" : questionId,
                "title": questionTitle,
                "answered": result_answered
            });
        }

        function compare(a,b) {
            if (a.questionId < b.questionId)
                return -1;
            else if (a.questionId > b.questionId)
                return 1;
            else
                return 0;
        }

        $scope.view_review_info.sort(compare);
    };

    $scope.initUnfinishedQuizPlayer = function() {
        $scope.quiz_data.activityInfo = {
            "studentId" : $rootScope.user.user.id,
            "courseId" : $rootScope.courseId,
            "activityId" : $scope.quiz_data.quizId,
            "rootId" : $scope.quiz_data.root_id,
            "gradeLevel" : $scope.quiz_data.grade_level,
            "subjectArea" : $scope.quiz_data.subject_area
        };

        $scope.quiz_data.activityResult = {
            "totalPoints" : $scope.ACTIVITY_POINTS,
            "totalTrophies" : $scope.ACTIVITY_TROPHIES,
            "points" : 0,
            "trophies" : 0,
            "averageSpeed" : 0,
            "totalAnswerTime" : 0
        };

        // Copy the first entry made and scored by the student. These scores will be used by server for calculations
        if ($scope.quiz_data.questionsHistory && $scope.quiz_data.questionResults) {
            for (var i = 0; i < $scope.quiz_data.questionsHistory[1].length; i++) {
                for (var j = 0; j < $scope.quiz_data.questionResults.length; j++) {
                    if ($scope.quiz_data.questionResults[j].uuid == $scope.quiz_data.questionsHistory[1][i].uuid) {
                        $scope.quiz_data.questionResults[j].score = $scope.quiz_data.questionsHistory[1][i].questionResult.score;
                        $scope.quiz_data.questionResults[j].accuracy = $scope.quiz_data.questionsHistory[1][i].questionResult.accuracy;

                        // Update history object with the real points and trophies
                        $scope.quiz_data.questionsHistory[1][i].questionResult.points = $scope.quiz_data.questionResults[j].points;
                        $scope.quiz_data.questionsHistory[1][i].questionResult.trophies = $scope.quiz_data.questionResults[j].trophies;
                    }
                }
            }
        }

        if ($scope.quiz_data.questionResults) {
            for (i = 0; i<$scope.quiz_data.questionResults.length; i++) {
                $scope.quiz_data.activityResult.points += $scope.quiz_data.questionResults[i].points;
                $scope.quiz_data.activityResult.trophies += $scope.quiz_data.questionResults[i].trophies;
            }
            $scope.quiz_data.activityResult.trophies = Math.round($scope.quiz_data.activityResult.trophies / $scope.quiz_data.questionResults.length);  // Average
        }

        // For GUI to show trophies
        $scope.quiz_data.trophyList = [];
        for (var i = 0; i < $scope.quiz_data.activityResult.trophies; i++) {
            $scope.quiz_data.trophyList.push(i);
        }
    };

    $scope.endQuiz = function() {
        if ($scope.quiz_data.training_activity)
            $rootScope.$state.go('studentPlayQuiz.activity_end');
        else
            $scope.closeFinishedQuizPlayer();
    };

    $scope.submitAnswer = function(status)
    {
        if ($rootScope.user.login.demo) {
            $log.debug("DEMO MODE. NOTHING SAVED.");
            if (status && status == 'finished') {
                $scope.localStorageDeleteQuiz($scope.quiz_data);
                $scope.endQuiz();
            }
            else
                $scope.localStorageUpdateQuiz($scope.quiz_data);

            return;
        }

        /**=========================================================
         * Save quiz result
         =========================================================*/
        $scope.isProcessing = true;

        if (status && status == 'in_progress') {
            $log.debug('saving...');
            $scope.quiz_data.status = "in_progress";
        }
        else {
            $log.debug('end test');
            if (!$scope.quiz_data.status) {
                $scope.quiz_data.status = "finished";
            }
        }

        prepareData($scope.quiz_data, $scope.quiz_additionalInformation);

        $log.debug($scope.quiz_data);

        if ($scope.quiz_data.id) {
            restFactory.putService("api/quizResult",$scope.quiz_data)
                .success(function (data) {
                    $scope.isProcessing = false;
                    $log.debug("update quiz result success");

                    if (status && status == 'finished') {
                        $scope.localStorageDeleteQuiz($scope.quiz_data);
                        $scope.endQuiz();
                    }
                    else
                        $scope.localStorageUpdateQuiz($scope.quiz_data);
                    //toastr.success("Saved!");
                })
                .error(function (error) {
                    $scope.isProcessing = false;
                    $log.debug("update quiz result error!");
                    //toastr.error("Update quiz result error! Please try again");
                });
        } else {
            // here I must add the result
            restFactory.postService("api/quizResult",$scope.quiz_data)
                .success(function (data) {
                    if (data.err) {
                        $log.debug("save quiz result error!");
                        $log.debug(data.msg);
                        toastr.error(data.msg);
                    }
                    else {
                        $scope.quiz_data = data;
                        $log.debug("save quiz result success");
                        $log.debug(data);
                        $scope.isProcessing = false;
                        //toastr.success("Quiz saved!");

                        if (status && status == 'finished') {
                            $scope.localStorageDeleteQuiz($scope.quiz_data);
                            $scope.endQuiz();
                        }
                        else
                            $scope.localStorageUpdateQuiz($scope.quiz_data);
                    }
                })
                .error(function (error) {
                    $scope.isProcessing = false;
                    $log.debug("save quiz result error!");
                    //toastr.error("Save quiz result error! Please try again");
                });
        }

        function prepareData(quiz_data, additionalInformation){
            // These may be set in the quiz definition. Undo so the server can update the results if rescored
            quiz_data.lock_update = false;
            quiz_data.lock_delete = false;

            // Remove quiz definition history info
            quiz_data.hist = [];

            /**
             * // Remove this code - it's deleting all questions
             */
            // clean all data
            /*
             var firstLvlKeys = [
             "name",
             "questions",
             "type",
             "status",
             "id" ,
             "studentId",
             "quizId",
             "courseId",
             "quizResultId"
             ];
             var secondLvlKeys = [
             "parts",
             "uuid",
             "visited"
             ];
             var thirdLvlKeys = [
             "answer",
             "uuid",
             "visited"
             ];
             var i, j;
             for (i in quiz_data){
             if (firstLvlKeys.indexOf(i) === -1){
             delete quiz_data[i];
             }
             }
             if (quiz_data.questions){
             for (i in quiz_data.questions){
             for (j in quiz_data.questions[i]){
             if (secondLvlKeys.indexOf(j) === -1){
             delete quiz_data.questions[i][j];
             }
             if ('parts' === j){
             for (var k in quiz_data.questions[i][j]){
             for (var l in quiz_data.questions[i][j][k]){
             if (thirdLvlKeys.indexOf(l) === -1){
             delete quiz_data.questions[i][j][k][l];
             }
             }
             }
             }
             }
             }
             }
             */
        }
    };
}]);

App.controller('FeedbackDialog', function($scope, $log, $modalInstance, title)
{
    $log.debug(title);
    $scope = $scope;
    $scope.title = title;
    $scope.close = function()
    {
        $modalInstance.close();
    };
});
App.controller('ConfirmDialog', function($scope, $log, $modalInstance, title, message)
{
    $log.debug(title);
    $log.debug(message);
    $scope.title = title;
    $scope.message = message;
    $scope.confirmYes = function()
    {
        $modalInstance.close();
    };
    $scope.confirmNo = function()
    {
        $modalInstance.dismiss();
    };
});
