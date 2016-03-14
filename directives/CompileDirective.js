MathJax.Hub.Config({
    skipStartupTypeset: true,
    messageStyle: "none",
    "HTML-CSS": {
        showMathMenu: false,
        scale: 160
    }
});
MathJax.Hub.Configured();

App.directive('compile', function($compile, $window) {
    // directive factory creates a link function
    function placeMathJax(element, value)
    {
        // Only replace if contains math-tex
        if(value != undefined && value.indexOf('math-tex') >= 0) {

            var valCopy = value;
            var mathTexStartIndex = valCopy.indexOf("<span class=\"math-tex\">");
            var mathTexEndIndex = valCopy.indexOf("</span>", mathTexStartIndex);
            var subStr, elSub;
            while (mathTexStartIndex != -1) {

                // Replace span tag with script tag and re-render the MathJax equation
                subStr = valCopy.substring(0, mathTexStartIndex);
                $(element).append(subStr);

                subStr = "<script type=\"math/tex\">" + valCopy.substring(mathTexStartIndex + 25, mathTexEndIndex - 2) + "</script>", elSub = $(subStr);
                $(element).append(elSub);
                // Delete the text that we just added and go through the search process again
                valCopy = valCopy.slice(mathTexEndIndex + 7);
                mathTexStartIndex = valCopy.indexOf("<span class=\"math-tex\">");
                mathTexEndIndex = valCopy.indexOf("</span>", mathTexStartIndex);
            }
            // Append whatever text comes after the math equations
            $(element).append(valCopy);
            MathJax.Hub.Queue(["Reprocess", MathJax.Hub, element[0]]);
        }
        else {
            // Clear HTML if no math-tex found
            $(element).html(value);
        }
    }

    /**
     * In our training we sometimes place a table header over an ImageDD question type
     * The table header width is the size of the image = 600px. On small screen sizes (iPad)
     * the width takes the table out of the screen. Change to 100% width.
     */
    function replaceTableSizeForTraining(element, value)
    {
        if(value != undefined && $window.innerWidth <= 1024 && value.indexOf('table') >= 0) {
            var valCopy = value;
            valCopy = valCopy.replace('600px', '100%');
            $(element).append(valCopy);
        }
        else {
            // Clear HTML if no math-tex found
            $(element).html(value);
        }
    }

    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            scope.$watch(
                function (scope) {
                    // watch the 'compile' expression for changes

                    return scope.$eval(attrs.compile);
                },
                function (value) {
                    // when the 'compile' expression changes
                    // assign it into the current DOM
                    element.html("");
                    placeMathJax(element, value);
                    value = element.html();
                    element.html("");
                    replaceTableSizeForTraining(element, value);
                    // compile the new DOM and link it to the current scope.
                    // NOTE: we only compile .childNodes so that
                    // we don't get into infinite loop compiling ourselves
                    $compile(element.contents())(scope);
                }
            );
        }
    };
});