var DropTarget= function () {

    return {
        restrict: "A",
        
        link: function (scope, element, attributes, ctlr) {

            element.bind("dragover", function(eventObject){
											
                eventObject.preventDefault();
            });

            element.bind("drop", function(eventObject) {
				
			    var tg = 0;
                tg = attributes.dropid;
                scope.moveToBox(parseInt(eventObject.originalEvent.dataTransfer.getData("text")),eventObject.originalEvent.dataTransfer.getData("ashu"),parseInt(tg));

                // cancel actual UI element from dropping, since the angular will recreate a the UI element
                eventObject.preventDefault();
            });
        }
    };
}

