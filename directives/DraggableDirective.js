var Draggable = function () {

    return {
        restrict: "A",
        link: function(scope, element, attributes, ctlr) {
			//alert('narendra');
            element.attr("draggable", true);

            element.bind("dragstart", function(eventObject) {
                eventObject.originalEvent.dataTransfer.setData("text", attributes.itemid);
				eventObject.originalEvent.dataTransfer.setData("ashu", attributes.pos);
            });
        }
    };
}

