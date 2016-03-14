MathJax.Hub.Config({
    skipStartupTypeset: true,
    messageStyle: "none",
    "HTML-CSS": {
        showMathMenu: false,
        scale: 160
    }
});
MathJax.Hub.Configured();

App.directive("mathjaxBind", function() {
    return {
        restrict: "A",
        scope:{
            text: "@mathjaxBind"
        },
        controller: ["$scope", "$element", "$attrs", function($scope, $element, $attrs) {

            $scope.$watch('text', function(value) {
                // Only replace if contains math-tex
                if(value != undefined && value.indexOf('math-tex') >= 0) {
                    $element.html("");
                    var valCopy = value;
                    var mathTexStartIndex = valCopy.indexOf("<span class=\"math-tex\">");
                    var mathTexEndIndex = valCopy.indexOf("</span>", mathTexStartIndex);
                    var subStr;
                    var elementIndex = 0;
                    while (mathTexStartIndex != -1) {

                        // Replace span tag with script tag and re-render the MathJax equation
                        subStr = valCopy.substring(0, mathTexStartIndex);
                        $element.append(subStr);
                        subStr = "<script type=\"math/tex\">" + valCopy.substring(mathTexStartIndex + 25, mathTexEndIndex - 2) + "</script>";
                        $element.append(subStr);
                        MathJax.Hub.Queue(["Reprocess", MathJax.Hub, $element[elementIndex]]);
                        elementIndex++;

                        // Delete the text that we just added and go through the search process again
                        valCopy = valCopy.slice(mathTexEndIndex + 7);
                        mathTexStartIndex = valCopy.indexOf("<span class=\"math-tex\">");
                        mathTexEndIndex = valCopy.indexOf("</span>", mathTexStartIndex);
                    }
                    // Append whatever text comes after the math equations
                    $element.append(valCopy);
                }
                else {
                    // Clear HTML if no math-tex found
                    $element.html("");
                    $element.append("");
                    MathJax.Hub.Queue(["Reprocess", MathJax.Hub, $element[0]]);
                }
            });
        }]
    };
});