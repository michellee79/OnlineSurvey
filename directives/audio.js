/*jshint multistr:true*/

App.directive('audio', function($log)
{
    return {
        restrict: 'E',
        scope: {},
        controller: function($log, $scope, $element, $attrs, $compile){
            /////
            var onPlayAudio = function(elAudio)
            {
                $scope.objAudioWrapper.addClass('active');
            }
            var onPauseAudio = function(elAudio)
            {
                $scope.objAudioWrapper.removeClass('active');
            }
            /////

            $log.debug('audio');
            $scope.elAudio = $element[0];
            $scope.objAudioWrapper = $("<div></div>").addClass("os_audio");
            $element.css("display", "none")
            $element.before($scope.objAudioWrapper);
            $scope.objAudioWrapper.append($element);

            $($scope.elAudio).on('playing', onPlayAudio);
            $($scope.elAudio).on('pause', onPauseAudio);

            $scope.objAudioWrapper.click(function () {
                if($scope.elAudio.paused)
                {
                    $scope.play();
                }
                else
                {
                    $scope.pause();
                }
            })

            //If audio is not wrapped
            $scope.play = function()
            {
                $log.debug('play');
                if($scope.elAudio.paused)
                {
                    $scope.elAudio.play();
                }
            }
                
            $scope.pause = function()
            {
                $log.debug('pause');
                if($scope.elAudio.paused)
                    return;
                $scope.elAudio.pause();
            }
            
            if ($scope.elAudio.outerHTML.indexOf("autoplay") != -1) {
                $scope.play()
            }
        },

        link: function(scope, element, attrs)
        {
        }
    };
});