/**
 * Created by Vernal Liu on 2/4/2016.
 */

App.directive('imageTool', function()
{
    return{
        restrict : 'A',
        scope:{
            xpos : '=',
            ypos : '='
        },
        link : function(scope, element, attrs)
        {
            var image = $(element).attr('data-image');
            $(element).ruler({image : image});

        }
    }
});