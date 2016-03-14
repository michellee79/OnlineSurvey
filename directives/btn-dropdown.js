/*jshint multistr:true*/

App.directive('btnDropdown', function($log)
{
    return {
        restrict: 'A',
        require: '^ngModel',
        template: '<div class = "btn-group" dropdown>\
                    <button class = "btn btn-default dropdown-toggle" dropdown-toggle>\
                        <span class="dropdown-selected"></span>\
                        <span class="caret"></span>\
                    </button>\
                    <ul role = "menu" class = "dropdown-menu animated fadeIn">\
                    </ul>\
                </div>',
        transclude: true,
        scope: {
            ngModel: '=',
            btnDropdown: '='
        },

        controller: function($scope, $element, $attrs, $compile){
            function isEmpty(obj)
            {
                var hasOwnProperty = Object.prototype.hasOwnProperty;
                // null and undefined are "empty"
                if (obj == null) return true;

                // Assume if it has a length property with a non-zero value
                // that that property is correct.
                if (obj.length > 0)    return false;
                if (obj.length === 0)  return true;

                // Otherwise, does it have any properties of its own?
                // Note that this doesn't handle
                // toString and valueOf enumeration bugs in IE < 9
                for (var key in obj) {
                    if (hasOwnProperty.call(obj, key)) return false;
                }

                return true;
            }

            $scope.selectItem = function(option, default_html)
            {
                if($scope.btnDropdown === undefined)
                    return;

                if(option in $scope.btnDropdown)
                {

                    $element.find('.dropdown-selected')
                            .html($scope.btnDropdown[option]);
                    $element.find('.dropdown-toggle').addClass('active');
                }
                else
                {
                    $element.find('.dropdown-toggle').removeClass('active');
                    if(default_html !== undefined)
                    {
                        $element.find('.dropdown-selected')
                            .html(default_html);
                    }
                }
            };

            $scope.generateListItem = function(val, content)
            {   var template;
                val.replace(/\'/g,"\\'");
                val.replace(/\"/g,'\\"');
                template = "<button class = 'dropdown-item-btn btn btn-default' btn-radio=\"'" + val + "'\" ng-model = \"ngModel\">" + content + "</button>";
                return template;
            };

            $scope.prepareMenu = function()
            {
                var strVal, strTemplate, elListItem, strFirstVal = null;
                $element.find('ul.dropdown-menu').empty();

                for(strVal in $scope.btnDropdown)
                {
                    if(strFirstVal === null)
                        strFirstVal = strVal;

                    strTemplate = $scope.btnDropdown[strVal];
                    elListItem = $("<li></li>").prop('data-val', strVal).html($scope.generateListItem(strVal, strTemplate));
                    elListItem.click(onClickListItem);
                    $element.find('ul.dropdown-menu').append(elListItem);
                }
                $compile($element.find('ul.dropdown-menu').contents())($scope);

                //Select default item
                if(isEmpty($scope.btnDropdown))
                {
                    $element.hide();
                }
                else
                {
                    $element.show();
                    $scope.selectItem($scope.ngModel, $scope.btnDropdown[strFirstVal]);
                }

                /////
                function onClickListItem()
                {
                    var strVal = $(this).prop('data-val');
                    $scope.selectItem(strVal);
                }
            };
        },

        link: function(scope, element, attrs)
        {
            scope.$watch('btnDropdown', function()
            {
                scope.prepareMenu();
            });

            scope.$watch('ngModel', function()
            {
                scope.selectItem(scope.ngModel);
            });
        }
    };
});