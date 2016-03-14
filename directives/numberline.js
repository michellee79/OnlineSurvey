App.factory("templates.utils.mixedFraction", ["_", function(_) {
    return function(obj) {
        function print() {
            __p += __j.call(arguments, "")
        }
        obj || (obj = {});
        var __t, __p = "",
            __e = _.escape,
            __j = Array.prototype.join;
        with(obj) proper ? (__p += '<div class="' + ((__t = fractionClass) == null ? "" : __t) + '">', integer && (__p += '<span class="' + ((__t = fractionClass) == null ? "" : __t) + '-integer">' + ((__t = integer) == null ? "" : __t) + "</span>"), __p += '<span class="' + ((__t = fractionClass) == null ? "" : __t) + '-proper-fraction">' + ((__t = proper) == null ? "" : __t) + "</span></div>") : __p += "" + ((__t = integer) == null ? "" : __t) + "", __p += "";
        return __p
    }
}]);
App.factory('utils.browserCheck', function() {
    "use strict";
    var e = navigator.userAgent.toLowerCase(),
        t = e.match(/(opera|ie|edge|firefox|chrome|version)[\s\/:]([\w\d\.]+)?.*?(safari|version[\s\/:]([\w\d\.]+)|$)/) || [null, "unknown", 0],
        n = t[1],
        r = parseInt(t[2], 10),
        i = n === "ie" && r < 8 && /trident/i.test(e),
        s = !!e.match(/android|webos|iphone|ipad|ipod|blackBerry|windows phone|opera mini|iemobile/i),
        o = !!e.match(/applewebkit/),
        u = !!(window.chrome && window.chrome.runtime && window.chrome.runtime.id);
    return !e.match(/trident.*rv[ :]*11\./) || (n = "ie", r = 11), !e.match(/edge/) || (n = "edge"), n === "version" && (n = t[3]), {
        browser: n,
        version: r,
        compatibilityMode: i,
        isMobile: s,
        isChromeApp: u,
        isAppleWebKit: o,
        isMicrosoft: n === "ie" || n === "edge"
    }
});
App.factory('utils.featureDetection', function() {
    "use strict";

    function r(e) {
        return function() {
            return t[e] ? t[e] : n[e] ? (t[e] = n[e].apply(this, arguments), t[e]) : !1
        }
    }
    var e = {
            svg: "http://www.w3.org/2000/svg"
        },
        t = {},
        n = {
            isCanvasSupported: function() {
                var e = document.createElement("canvas");
                return !!e.getContext && !!e.getContext("2d")
            },
            isHtml5AudioSupported: function() {
                return !!document.createElement("audio").canPlayType
            },
            isTouchDevice: function() {
                return "ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch
            },
            isTouchScalable: function() {
                var e = document.querySelector('meta[name="viewport"]'),
                    t = !1,
                    n = "user-scalable=no",
                    r;
                return e && (r = e.getAttribute("content"), t = typeof r == "string" && r.indexOf(n) >= 0), this.isTouchDevice() && !t
            },
            isSvgSupported: function() {
                return !!document.createElementNS && !!document.createElementNS(e.svg, "svg").createSVGRect
            },
            isJsonStringifyBroken: function() {
                return window.JSON ? window.JSON.stringify({
                    u: "�"
                }) !== '{"u":"�"}' : !0
            },
            isPlaceholderSupported: function() {
                return "placeholder" in document.createElement("input")
            },
            getOs: function() {
                var e = navigator.appVersion,
                    t = "unknown";
                return e.indexOf("Win") !== -1 && (t = "windows"), e.indexOf("Mac") !== -1 && (t = "osx"), e.indexOf("X11") !== -1 && (t = "unix"), e.indexOf("Linux") !== -1 && (t = "linux"), t
            },
            isTextareaMaxlengthSupported: function() {
                var e = document.createElement("textarea");
                return typeof e.maxLength == "undefined"
            },
            isDropzoneSupported: function() {
                var e = document.createElement("span");
                return "webkitdropzone" in e || "mozdropzone" in e || "msdropzone" in e || "odropzone" in e
            },
            hasLayout: function() {
                return (document.body.currentStyle && document.body.currentStyle.hasLayout) === !0
            }
        };
    return {
        isCanvasSupported: r("isCanvasSupported"),
        isHtml5AudioSupported: r("isHtml5AudioSupported"),
        isTouchDevice: r("isTouchDevice"),
        isTouchScalable: r("isTouchScalable"),
        isJsonStringifyBroken: r("isJsonStringifyBroken"),
        isSvgSupported: r("isSvgSupported"),
        isPlaceholderSupported: r("isPlaceholderSupported"),
        getOs: r("getOs"),
        isTextareaMaxlengthSupported: r("isTextareaMaxlengthSupported"),
        isDropzoneSupported: r("isDropzoneSupported"),
        hasLayout: r("hasLayout")
    }
});
App.factory('utils.fraction', ['_', 'templates.utils.mixedFraction', function (e, t) {
    "use strict";
    var n = function (t, n, r) {
        this.integer = isNaN(parseFloat(r)) ? 0 : parseFloat(r), this.numerator = 0, this.denominator = null, (t || n) && this.set(t, n)
    };
    return e.extend(n.prototype, {
        normalize: function (e) {
            var t, r, i, s, o = this.denominator ? this.denominator : 1;
            e === !0 ? (r = 1, i = this.numerator, s = o) : (r = n.gcd(this.numerator, o), i = this.numerator / r, s = o / r);
            if (Math.abs(i) >= Math.abs(s)) {
                if (s === 1) return this.integer += i, this.numerator = 0, this.denominator = null, this;
                i < 0 ? t = -Math.floor(-i / s) : t = Math.floor(i / s), this.integer < 0 ? this.integer -= t : this.integer += t, i -= t * s
            }
            return this.set(i, s)
        },
        clone: function () {
            return new n(this)
        },
        set: function (t, r) {
            if (t instanceof n) this.integer = t.integer, this.numerator = t.numerator, this.denominator = t.denominator;
            else if (!e.isUndefined(t) && !e.isNull(t) && !e.isUndefined(r) && !e.isNull(r)) {
                if (e.isNumber(t) || e.isString(t)) this.numerator = parseInt(t, 10);
                if (e.isNumber(r) || e.isString(r)) this.denominator = parseInt(r, 10);
                this.denominator || (this.denominator = null)
            } else if (e.isUndefined(r) || e.isNull(r))
                if (e.isString(t)) {
                    var i = n.IMPROPER_REG_EXP.exec(t),
                        s = n.MIXED_REG_EXP.exec(t);
                    s && s.length === 4 ? (this.integer = parseInt(s[1], 10), this.numerator = parseInt(s[2], 10), this.denominator = parseInt(s[3], 10)) : i && i.length === 3 ? (this.numerator = parseInt(i[1], 10), this.denominator = parseInt(i[2], 10)) : (this.integer = parseFloat(t), this.numerator = 0, this.denominator = null)
                } else e.isNumber(t) ? (this.integer = t, this.numerator = 0, this.denominator = null) : (this.integer = 0, this.numerator = 0, this.denominator = null);
            else if (!e.isUndefined(r) && !e.isNull(r)) {
                this.integer = 0, this.numerator = 0;
                if (e.isNumber(r) || e.isString(r)) this.denominator = parseInt(r, 10), this.denominator || (this.denominator = null)
            } else this.integer = 0, this.numerator = 0, this.denominator = null;
            return this.setCorrectSign(), this
        },
        convertToDenominator: function (t) {
            var r, i, s = this.denominator ? this.denominator : 1,
                o = this.numerator,
                u = this.integer;
            return e.isNumber(t) || (i = new n(t), t = i.denominator ? i.denominator : 1), e.isNumber(t) && s !== t && (r = t / s, o = this.numerator * r, o === 0 && (o = u * t, u = 0)), new n(o, t, u)
        },
        add: function (e) {
            var t, r, i, s, o, u, a;
            return e = new n(e), t = this.getImproperFraction(), r = e.getImproperFraction(), u = n.lcm(t.denominator ? t.denominator : 1, r.denominator ? r.denominator : 1), s = u / (t.denominator ? t.denominator : 1) * t.numerator + u / (r.denominator ? r.denominator : 1) * r.numerator, o = u, a = new n(s, o), a.normalize(!0), a
        },
        subtract: function (e) {
            return e = new n(e), this.add(e.multiply(-1))
        },
        inverse: function () {
            var e = this.getImproperFraction();
            return new n(e.denominator, e.numerator)
        },
        multiply: function (e) {
            var t, r, i, s;
            return e = new n(e), t = this.getImproperFraction(), r = e.getImproperFraction(), i = t.numerator * r.numerator, s = (t.denominator ? t.denominator : 0) * (r.denominator ? r.denominator : 0), new n(i, s)
        },
        divide: function (e) {
            return e = new n(e), this.multiply(e.inverse())
        },
        getProperFraction: function () {
            var e, t = new n(this);
            return t.normalize(!0), t.integer < 0 && t.numerator > 0 ? e = -t.numerator : e = t.numerator, new n(e, this.denominator)
        },
        getImproperFraction: function () {
            var e, t;
            return this.numerator && this.denominator ? (this.integer < 0 ? e = this.integer * this.denominator - this.numerator : e = this.integer * this.denominator + this.numerator, t = this.denominator) : this.denominator ? (t = this.denominator, this.integer && (e = this.integer * this.denominator)) : this.integer && (e = this.integer, t = 1), new n(e, t)
        },
        getSimpleFraction: function () {
            var e = this.integer < 0 ? -this.numerator : this.numerator;
            return new n(e, this.denominator)
        },
        toInteger: function () {
            return ~~this.toDecimal()
        },
        toDecimal: function () {
            return !this.denominator || this.denominator === 0 ? this.integer : this.integer && this.integer < 0 ? this.integer - this.numerator / this.denominator : this.numerator / this.denominator + this.integer
        },
        setCorrectSign: function () {
            this.integer && this.integer < 0 && this.numerator && this.numerator < 0 && this.denominator && this.denominator < 0 ? (this.numerator = -this.numerator, this.denominator = -this.denominator) : this.integer && this.integer < 0 && this.numerator && this.numerator < 0 ? this.numerator = -this.numerator : this.integer && this.integer < 0 && this.denominator && this.denominator < 0 ? this.denominator = -this.denominator : this.numerator && this.numerator < 0 && this.denominator && this.denominator < 0 ? (this.numerator = -this.numerator, this.denominator = -this.denominator) : this.numerator && this.numerator < 0 ? this.integer && (this.integer = -this.integer, this.numerator = -this.numerator) : this.denominator && this.denominator < 0 && (this.integer ? (this.integer = -this.integer, this.denominator = -this.denominator) : (this.numerator = -this.numerator, this.denominator = -this.denominator))
        },
        toSimpleString: function () {
            var e = 0;
            return this.integer === 0 && this.numerator === 0 && this.denominator === null ? "0" : this.integer && !this.numerator && !this.denominator ? "" + this.integer : (this.integer && this.denominator && (this.integer < 0 ? e = -this.integer * this.denominator : e = this.integer * this.denominator), this.numerator && (e += this.numerator), this.denominator ? (this.integer < 0 ? "-" : "") + e + "/" + this.denominator : "")
        },
        toSimpleHtml: function (e, t) {
            var n = {
                integer: "",
                simpleFraction: this.getImproperFraction(),
                allowZeroNumerator: !0
            };
            return this.toMixedHtml(e, n, t)
        },
        toMixedParams: function () {
            var e = this.getSimpleFraction();
            return e.toDecimal() === 0 ? e = null : this.integer < 0 && (e = e.multiply(-1)), {
                integer: this.integer,
                simpleFraction: e,
                allowZeroNumerator: !1
            }
        },
        toMixedString: function () {
            var e, t = this.toMixedParams();
            return e = (t.integer ? t.integer : "") + (t.simpleFraction ? " " + t.simpleFraction.toSimpleString() : ""), e ? e.trim() : "0"
        },
        toMixedHtml: function (e, t, r) {
            var i, s, o, u = "",
                a = "";
            return t = t || this.toMixedParams(), a = t.integer, t.simpleFraction ? (s = t.simpleFraction.numerator, o = t.simpleFraction.denominator) : (s = 0, o = 0), s < 0 && (s = -s, a === "" || a === 0 ? a = "-" : a > 0 && (a = -a)), s !== 0 ? (u += s, o && (u += "<hr/>" + o)) : t.allowZeroNumerator && o && (u += "0<hr/>" + o), e && (a = e + " " + a), u === "" && a === "" && (a = 0), i = {
                fractionClass: n.fractionClass,
                proper: u,
                integer: a === 0 && u !== "" ? "" : "" + a
            }, r === !0 ? i : n.mixedFractionTemplate(i)
        }
    }), n.IMPROPER_REG_EXP = /(\-?\d+)\s*\/\s*([1-9]\d*)/, n.MIXED_REG_EXP = /(\-?\d+)\s+(\d+)\s*\/\s*([1-9]\d*)/, n.fractionClass = "os-numberline-fraction", n.mixedFractionTemplate = t, n.gcd = function (e, t) {
        return t ? n.gcd(t, e % t) : e
    }, n.lcm = function (e, t) {
        var r = n.gcd(e, t);
        return Math.abs(e) / r * Math.abs(t)
    }, n.isNumber = function (e) {
        return !isNaN(parseFloat(e)) && isFinite(e)
    }, n.isFraction = function (e) {
        var t = n.IMPROPER_REG_EXP.exec(e),
            r = n.MIXED_REG_EXP.exec(e);
        return r && r.length === 4 || t && t.length === 3 ? !0 : !1
    }, n.isMixedFraction = function (e) {
        var t = n.MIXED_REG_EXP.exec(e);
        return t && t.length === 4 ? !0 : !1
    }, n.isParsable = function (e) {
        return n.isNumber(e) || n.isFraction(e)
    }, n.areEqual = function (e, t) {
        return e.toDecimal() === t.toDecimal()
    }, n.areIdentical = function (e, t) {
        return e.numerator === t.numerator && e.denominator === t.denominator && e.integer === t.integer
    }, n
}]);
App.factory('utils.jsxgraph.textPoint', ['JXG', '_', 'underscoreExtended', function(JXG, _) {
    "use strict";
    var r = {
        moveTo: function(t, n, r) {
            r = r || {}, t = new JXG.Coords(JXG.COORDS_BY_USER, t, this.board);
            var i, s = this.board.attr.animationdelay,
                o = Math.ceil(n / s),
                u = [],
                a = this.coords.usrCoords[1],
                f = this.coords.usrCoords[2],
                l = t.usrCoords[1] - a,
                c = t.usrCoords[2] - f,
                h = function(e) {
                    return r.effect && r.effect === "<>" ? Math.pow(Math.sin(e / o * Math.PI / 2), 2) : e / o
                };
            if (!JXG.exists(n) || n === 0 || Math.abs(t.usrCoords[0] - this.coords.usrCoords[0]) > JXG.Math.eps) return this.setCoords(t.usrCoords[1], t.usrCoords[2]), this.board.update(this);
            if (Math.abs(l) < JXG.Math.eps && Math.abs(c) < JXG.Math.eps) return this;
            for (i = o; i >= 0; i--) u[o - i] = [t.usrCoords[0], a + l * h(i), f + c * h(i)];
            return this.animationPath = u, this.animationCallback = r.callback, this.board.addAnimation(this), this
        },
        setCoords: function(t, n) {
            return JXG.isArray(t) && t.length > 1 && (n = t[1], t = t[0]), this.coords.setCoordinates(JXG.COORDS_BY_USER, [t, n], !0), this.prepareUpdate().updateRenderer(), this
        },
        setScrCoords: function(t, n) {
            return JXG.isArray(t) && t.length > 1 && (n = t[1], t = t[0]), this.X = function() {
                return this.coords.usrCoords[1]
            }, this.Y = function() {
                return this.coords.usrCoords[2]
            }, this.coords.setCoordinates(JXG.COORDS_BY_SCREEN, [t, n]), this.prepareUpdate().update().updateRenderer(), this
        },
        updateCoords: function() {
            this.coords.setCoordinates(JXG.COORDS_BY_USER, [this.X(), this.Y()], !0)
        },
        resetCoords: function() {
            this.getSize(), this.setCoords(this.coords.usrCoords[1], this.coords.usrCoords[2])
        },
        getSize: function() {
            var e = $(this.rendNode),
                t = e.outerWidth(),
                r = e.outerHeight();
            return this.size = [t, r], this.size
        }
    };
    JXG.createTextPoint = function(n, i, s) {
        var content = i.pop();
        var o, u = JXG.copyAttributes(s, n.options, "text");
        return u.anchor = u.parent || u.anchor, o = new JXG.Text(n, i, u, content), _.extend(o, r), typeof i[i.length - 1] != "function" && (o.parents = i), JXG.evaluate(u.rotate) !== 0 && u.display === "internal" && o.addRotation(JXG.evaluate(u.rotate)), o
    }, JXG.registerElement("textPoint", JXG.createTextPoint);
    return JXG;
}]);
App.directive('numberLine', function() {
    var directive =
    {
        restrict: 'A',
        controller: numberlineController,
        template: '<div class = "os-graph-wrapper"><div class = "os-graph"></div></div>',
        scope: {
            'ngModel' : '='
        }
    };
    numberlineController.$inject = ['_', 'JXG', 'utils.fraction', 'utils.featureDetection', 'utils.browserCheck', 'utils.jsxgraph.textPoint', 'hiddenElementHelper', '$scope', '$element', '$attrs', '$timeout', 'underscoreExtended'];
    function numberlineController(_, JXG, fraction, featureDetection, browserCheck, textPoint, hiddenElementHelper, $scope, $element, $attrs, $timeout) {

        function widthToDecimal(str) {
            return str.indexOf("px") !== -1 && str.length > 2 && (str = parseFloat(str.substr(0, str.length - 2))), str
        }
        var BASIC_CONFIG = {
                labels: {
                    show_min: !1,
                    show_max: !1
                },
                line: {
                    min: -10,
                    max: 10,
                    left_arrow: !1,
                    right_arrow: !1
                },
                points: [],
                snap_to_ticks: !1,
                snap_vertically: !0,
                ticks: {
                    distance: 1,
                    fractions: "not-normalized-fractions",
                    show: !1,
                    base: "min-value-based"
                },
                ui_style: {
                    height: "auto",
                    width: "550px",
                    number_line_margin: "5px",
                    points_distance_x: "10px",
                    points_distance_y: "20px",
                    line_position: 35,
                    title_position: 50,
                    points_box_position: 60
                }
            },
            HEIGHT_DEFAULT = {
                large: {
                    ui_style: {
                        height: "320px"
                    }
                },
                xlarge: {
                    ui_style: {
                        height: "400px"
                    }
                },
                xxlarge: {
                    ui_style: {
                        height: "520px"
                    }
                }
            },
            FORMAT_DEFAULT = {
                straightFirst: !1,
                straightLast: !1,
                name: "",
                needsRegularUpdate: !1,
                strokeWidth: 2,
                strokeColor: "#666666",
                highlightStrokeWidth: 2,
                highlightStrokeColor: "#666666",
                scalable: !1,
                withLabel: !1,
                withTicks: !1,
                point1: {
                    needsRegularUpdate: !1
                },
                point2: {
                    needsRegularUpdate: !1
                },
                title: {
                    cssClass: "os_jxg_titletext",
                    strokeColor: "#666666",
                    anchorX: "left",
                    anchorY: "top",
                    fixed: !0,
                    highlight: !1
                }
            },
            d = {
                drawLabels: !0,
                includeBoundaries: !0,
                insertTicks: !1,
                label: {
                    offset: [0, -6],
                    anchorX: "middle",
                    anchorY: "top",
                    strokeColor: "black",
                    highlightStrokeColor: "black",
                    cssClass: "os_jxg_labeltext",
                    highlightCssClass: "os_jxg_labeltext"
                },
                minorTicks: 0,
                majorHeight: 10,
                needsRegularUpdate: !1,
                tickEndings: [1, 1]
            },
            v = {
                withLabel: !1,
                visible: !1,
                fixed: !0,
                name: ""
            },
            m = {
                fillColor: "#F0F0F0",
                highlightFillColor: "#F0F0F0",
                fillOpacity: .5,
                highlightFillOpacity: 1,
                withLines: !1
            },
            g = {
                offset: [0, 0],
                parse: !1,
                anchorX: "middle",
                anchorY: "bottom",
                isLabel: !1,
                cssClass: "os_btn_arrow",
                highlightCssClass: "os_btn_arrow"
            },
            y = 30,
            b = "250px";
        var validate = {};
        _.extend(validate, {
            VERTICAL_SNAP_POSITION: 7,
            SUGGESTED_ANSWER_VERTICAL_GAP: 20,
            maskable: !0,
            initialize: function(r) {
                this.freeBoard(), this.defaultBoundingBoxConstraint = null;

                this.boardId = _.uniqueId("numberLine_"),this.config = _.deepExtend({}, BASIC_CONFIG, r), this.config.ui_style && (this.config.ui_style.height === "auto" || !this.config.ui_style.height) && (this.useAutoHeight = !0, this.config.ui_style.height = b), this.styleConfig = {
                    ticksOptions: $.extend(!0, {}, d),
                    pointsBoxOptions: $.extend(!0, {}, m),
                    pointsOptions: $.extend(!0, {}, g)
                }, _.isEmpty(this.config.ui_style) && (this.config.ui_style = _.clone(BASIC_CONFIG.ui_style)), this.processUiStyleUnits();
                this.model = r;
                this.showingValidationUI = !1, this.showingCorrectAnswer = !1, this.isClearBound = !1, this.previousResponseValue = {}, this.displayLogic = {}, this.displayLogic.isMath = !!this.model.is_math, (this.hiddenElementHelper = new hiddenElementHelper($element), this.hiddenElementHelper.makeVisible()), this.render()
                //, this.initialisationCompleted()
            },
            freeBoard :function() {
                if( this.board )
                {
                    JXG.JSXGraph.freeBoard(this.board);
                    this.board = null;
                }
            },
            render: function() {
                var elGraph = $element.find('.os-graph');
                elGraph.attr('id', this.boardId);
                elGraph.width(this.config.ui_style.width);
                elGraph.height(this.config.ui_style.height);
                //this.renderViewContent(e),
                this.lineLimits = this.calculateLineLimits(), this.board = this.createBoard(), this.line = this.createLine(); JXG.Dump.addMarkers(this.board, "isDraggable", !1); this.createPoints(_.bind(function(e, t) {
                    this.useAutoHeight && (this.shortComingSize = this.getShortComingSize(t), this.shortComingSize > 0 && this.adjustAutoBoardSize()), this.ticks = this.createTicks(), this.titleBox = this.createTitleBox(), this.pointsBoxBounds = this.createPointsBox(), this.yThreshold = new JXG.Coords(JXG.COORDS_BY_USER, [0, this.pointsBoxBounds.yUsrCoords / 2], this.board), this.positionPoints(e, t), this.completeInitialisation(), this.hiddenElementHelper && (this.hiddenElementHelper.restore(), delete this.hiddenElementHelper)
                }, this));
            },
            getShortComingSize: function(e) {
                var t = e - parseInt($element.find(".JXGinfobox").css("top"), 10);
                return t
            },
            createTitleBox: function() {
                if (!this.config.line.title) return null;
                var e = -1 * (this.config.ui_style.title_position - this.config.ui_style.line_position),
                    t = this.board.getBoundingBox(),
                    r = this.board.create("text", [t[0], e, this.config.line.title], _.deepExtend({}, FORMAT_DEFAULT.title));
                return r
            },
            createBoard: function() {
                return JXG.JSXGraph.initBoard(this.boardId, {
                    boundingbox: this.getDefaultBoundingBoxConstraint(),
                    showNavigation: !1,
                    showCopyright: !1
                })
            },
            getDefaultBoundingBoxConstraint: function() {
                if (!this.defaultBoundingBoxConstraint) {
                    var e = this.config.ui_style.number_line_margin * (this.lineLimits.max - this.lineLimits.min) / 100,
                        t = this.config.ui_style.line_position,
                        n = t,
                        r = t - 100;
                    this.defaultBoundingBoxConstraint = [this.lineLimits.min - e, n, this.lineLimits.max + e, r]
                }
                return this.defaultBoundingBoxConstraint;
            },
            createLine: function() {
                var e = this.board.create("line", [
                    [this.lineLimits.min, 0],
                    [this.lineLimits.max, 0]
                ], _.deepExtend({}, FORMAT_DEFAULT, {
                    firstArrow: this.config.line.left_arrow,
                    lastArrow: this.config.line.right_arrow
                }));
                return e.type = JXG.OBJECT_TYPE_AXIS, e
            },
            setLongestLabelHeight: function(e) {
                var r, i;
                _.each(e, function(e) {
                    i = $("#" + e.rendNode.id).height(), r ? r < i && (r = i) : r = i
                }), this.maxTextLabelHeightInPixels = r
            },
            createTicks: function() {
                var e = [],
                    t = [],
                    r = [],
                    s, o, u, a, f;
                return fraction.IMPROPER_REG_EXP.test(this.config.ticks.distance) || fraction.MIXED_REG_EXP.test(this.config.ticks.distance) ? s = this.createTicksFractionDistance() : s = this.createTicksNumericDistance(), o = _.filter(s, function(e) {
                    return !!e.label
                }), u = _.filter(s, function(e) {
                    return !e.label
                }), f = this.board.create("ticks", [this.line, _.pluck(o, "value")], _.deepExtend({}, this.styleConfig.ticksOptions, {
                    labels: _.pluck(o, "label"),
                    majorHeight: this.config.ticks.show ? 10 : 0,
                    drawLabels: _.isNumber(this.config.labels.frequency) && this.config.labels.frequency > 0
                })), _.isArray(f.labels) && (e = f.labels), this.board.create("ticks", [this.line, _.pluck(u, "value")], _.deepExtend({}, this.styleConfig.ticksOptions, {
                    labels: _.pluck(u, "label"),
                    majorHeight: this.config.ticks.show ? 5 : 0,
                    drawLabels: _.isNumber(this.config.labels.frequency) && this.config.labels.frequency > 0
                })), a = this.createTicksFromLabelsConfig(), a.length > 0 && (f = this.board.create("ticks", [this.line, _.pluck(a, "value")], _.deepExtend({}, this.styleConfig.ticksOptions, {
                    labels: _.pluck(a, "label")
                }))), _.isArray(f.labels) && (t = f.labels), r = e.concat(t), this.setLongestLabelHeight(r), _.sortBy(s.concat(a), function(e) {
                    return e.value
                })
            },
            createTicksFractionDistance: function() {
                var e, t, n, r, s, o, u = [],
                    a = this.config.line,
                    f = this.config.ticks.distance,
                    l = this.config.labels.frequency ? this.config.labels.frequency : 0;
                f = new fraction(f), n = f.add(a.min);
                if (this.config.ticks.base === "zero-based") {
                    s = l - 1;
                    if (0 > a.min) {
                        s = 0, n = new fraction(0);
                        while (n.subtract(f).toDecimal() > a.min) n = n.subtract(f), s++
                    }
                }
                if (f.toDecimal() > 0) {
                    for (t = n; t.toDecimal() < a.max; t = f.add(t)) this.config.ticks.fractions === "normalized-fractions" ? (t.normalize(), o = t.toMixedHtml()) : this.config.ticks.fractions === "improper-fractions" ? (t = t.convertToDenominator(f), o = t.toSimpleHtml()) : o = t.toMixedHtml(), u.push({
                        value: t.toDecimal(),
                        label: o
                    });
                    this.config.ticks.base === "zero-based" ? r = s % l : r = l - 1;
                    for (e = 0; e < u.length; e++) u[e].value === 0 && (u[e].value = 1e-6), e % l !== r && (u[e].label = null)
                }
                return u
            },
            createTicksNumericDistance: function() {
                var e, t, r, i, s, o = [],
                    u = this.config.line,
                    a = this.config.ticks.distance,
                    f = this.config.labels.frequency ? this.config.labels.frequency : 0;
                _.isString(a) && (a = parseFloat(a)), r = u.min + a;
                if (this.config.ticks.base === "zero-based") {
                    s = f - 1;
                    if (0 > u.min) {
                        s = 0, r = 0;
                        while (r - a > u.min) r -= a, s++
                    }
                }
                if (a > 0) {
                    for (t = r; t < u.max; t += a) o.push({
                        value: t,
                        label: t
                    });
                    this.config.ticks.base === "zero-based" ? i = s % f : i = f - 1;
                    for (e = 0; e < o.length; e++) e % f !== i && (o[e].label = null)
                }
                return o
            },
            createTicksFromLabelsConfig: function() {
                var e, t = [];
                return this.config.ticks.fractions === "improper-fractions" && !_.isUndefined(this.config.ticks.distance) ? (this.config.labels.show_min && (e = new fraction(this.config.line.min), e = e.convertToDenominator(this.config.ticks.distance), t.push({
                    value: e.toDecimal(),
                    label: e.toSimpleHtml()
                })), this.config.labels.show_max && (e = new fraction(this.config.line.max), e = e.convertToDenominator(this.config.ticks.distance), t.push({
                    value: e.toDecimal(),
                    label: e.toSimpleHtml()
                }))) : (this.config.labels.show_min && t.push({
                    value: this.config.line.min,
                    label: this.config.line.min.toString()
                }), this.config.labels.show_max && t.push({
                    value: this.config.line.max,
                    label: this.config.line.max.toString()
                })), _.isString(this.config.labels.points) && _.each(this.config.labels.points.split(","), function(e) {
                    if (fraction.isFraction(e)) {
                        var n = new fraction(e);
                        t.push({
                            value: n.toDecimal(),
                            label: n.toMixedHtml()
                        })
                    } else t.push({
                        value: parseFloat(e),
                        label: e
                    })
                }, this), t
            },
            createPointsBox: function() {
                console.log(this.config.ui_style.line_position);
                var boundingBox = this.board.getBoundingBox(),
                    t = -1 * (this.config.ui_style.points_box_position - this.config.ui_style.line_position),
                    n = {
                        x: 0,
                        y: 0,
                        width: 0,
                        height: 0
                    },
                    r = this.board.create("point", [boundingBox[0], t], v),
                    i = this.board.create("point", [boundingBox[2], t], v),
                    s = this.board.create("point", [boundingBox[0], boundingBox[3]], v),
                    o = this.board.create("point", [boundingBox[2], boundingBox[3]], v);
                return n.x = r.coords.scrCoords[1], n.y = r.coords.scrCoords[2], n.width = o.coords.scrCoords[1], n.height = o.coords.scrCoords[2], n.yUsrCoords = t, this.pointsBox = this.board.create("polygon", [r, i, o, s], m), n
            },
            createPoints: function(postProcess) {
                var arrPt = {},
                    maxHeight = -1,
                    calcHeight = function() {
                        _.each(arrPt, function(point) {
                            maxHeight < point.getSize()[1] && (maxHeight = point.getSize()[1])
                        }, this)
                    },
                    callPostProcess = function() {
                        calcHeight(), postProcess(arrPt, maxHeight)
                    };
                _.each(this.config.points, function(ptText) {
                    var objPt = this.board.create("textPoint", [0, -200, this.formatLabel(ptText)], this.styleConfig.pointsOptions);
                    arrPt[ptText] = objPt
                }, this),
                callPostProcess();
                //this.displayLogic.isMath ? this.mathquillRendering() ? (this.renderMathquill(), callPostProcess()) : mathjaxLoader.once(mathjaxLoader.EVENT.RENDERED, callPostProcess) : callPostProcess()
            },
            positionPoints: function(points, maxHeight) {
                console.log(JSON.stringify(this.pointsBoxBounds));
                var distX = this.config.ui_style.points_distance_x,
                    distY = this.config.ui_style.points_distance_y,
                    s = this.pointsBoxBounds.x + distX,
                    o = this.pointsBoxBounds.y + distY,
                    u = [],
                    a = function() {
                        var e = u[u.length - 1],
                            t = e.h + e.y,
                            n = this.config.ui_style.height;
                        t > n && this.adjustAutoHeight(t)
                    },
                    f = function() {
                        _.each(this.config.points, function(t, n) {
                            var r = points[t];
                            r.setScrCoords(u[n].x, u[n].y)
                        })
                    };
                _.each(this.config.points, function(n) {
                    var point = points[n],
                        ptSizeX = point.getSize()[0],
                        ptSizeY = point.getSize()[1],
                        scrCoordX, scrCoordY;
                    console.log(s + ptSizeX + distX);
                    s + ptSizeX + distX > this.pointsBoxBounds.width && (s = this.pointsBoxBounds.x + distX, o += maxHeight + distY), scrCoordX = s + ptSizeX / 2, scrCoordY = o + ptSizeY, this.useAutoHeight ? u.push({
                        x: scrCoordX,
                        y: scrCoordY,
                        h: ptSizeY
                    }) : point.setScrCoords(scrCoordX, scrCoordY), s += ptSizeX + distX
                }, this), this.useAutoHeight && u.length && (a.call(this), f.call(this)), this.points = points
            },
            adjustAutoBoardSize: function() {
                function t(t) {
                    return e.config.ui_style[t] + e.config.autoGapBetweenComponents
                }
                var e = this;
                this.defaultBoundingBoxConstraint[1] += this.shortComingSize, this.board.setBoundingBox(this.defaultBoundingBoxConstraint), this.config.line.title ? (this.config.ui_style.title_position = t("line_position"), this.config.ui_style.points_box_position = t("title_position")) : this.config.ui_style.points_box_position = t("line_position")
            },
            adjustAutoHeight: function(h) {
                this.heightBeforeAdjusting = this.config.ui_style.height, this.config.ui_style.height = h, $element.find(".jxgbox").height(h), this.board.resizeContainer(this.board.canvasWidth, h), this.pointsBox.remove(), this.pointsBoxBounds = this.createPointsBox()
            },
            completeInitialisation: function() {
                this.board.on("up", this.boardUpEvent, this), this.registerPointsHandlers();
            },
            calculateLineLimits: function() {
                var e = 0,
                    t = {
                        min: this.config.line.min,
                        max: this.config.line.max
                    };
                if (this.config.line.left_arrow || this.config.line.right_arrow) e = 20 * (t.max - t.min) / this.config.ui_style.width;
                return this.config.line.left_arrow && (t.min = t.min - e), this.config.line.right_arrow && (t.max = t.max + e), t
            },
            processUiStyleUnits: function() {
                var fontSize = 18,
                    normalSize = 18,
                    r, i;
                this.config.autoGapBetweenComponents = y, fontSize > normalSize && (this.styleConfig.ticksOptions.label.fontSize = fontSize, this.styleConfig.pointsOptions.fontSize = fontSize, r = this.config.ui_style.fontsize, r && this.config.ui_style.height === "auto" && (i = _.deepClone(HEIGHT_DEFAULT[r]), this.config = _.deepExtend(this.config, i), this.config.ui_style.height = i), this.config.autoGapBetweenComponents += fontSize - normalSize), this.config.ui_style.height = widthToDecimal(this.config.ui_style.height), this.config.ui_style.width = widthToDecimal(this.config.ui_style.width), this.config.ui_style.number_line_margin = widthToDecimal(this.config.ui_style.number_line_margin), this.config.ui_style.points_distance_x = widthToDecimal(this.config.ui_style.points_distance_x), this.config.ui_style.points_distance_y = widthToDecimal(this.config.ui_style.points_distance_y), this.config.ui_style.possible_list_height = Math.ceil(this.config.ui_style.height * (1 - this.config.ui_style.points_box_position / 100))
                console.log('---processUiStyleUnits---');
                console.log(this.config.ui_style.height);
            },
            formatLabel: function(e) {
                return fraction.isParsable(e) ? fraction.isNumber(e) ? e : fraction.isMixedFraction(e) ? (new fraction(e)).toMixedHtml() : (new fraction(e)).toSimpleHtml() : e
            },
            setPointsPositions: function(e) {
                _.each(e, function(e, t) {
                    this.points[t] && this.points[t].setCoords(e.x, e.y)
                }, this)
            },
            boardUpEvent: function(e) {
                var t = this.board.touches.length > 0 ? this.board.touches[0] : this.board.mouse,
                    r = _.isObject(t) && t.hasOwnProperty("obj") ? t.obj : null;
                if (this.board.mode === this.board.BOARD_MODE_DRAG) {
                    var t = this.board.touches.length > 0 ? this.board.touches[0] : this.board.mouse,
                        r = _.isObject(t) && t.hasOwnProperty("obj") ? t.obj : null,
                        i = _.isObject(r) && _.isObject(t) && r.elType === "text";
                    if (i) {
                        this.dragRestrictionCheck(r);
                        var s = r.Y(),
                            o = r.X();
                        s < 0 ? s > this.yThreshold.usrCoords[2] ? s = this.VERTICAL_SNAP_POSITION : r.coords.scrCoords[2] - r.getSize()[1] < this.pointsBoxBounds.y && (s = this.pointsBoxBounds.y + this.config.ui_style.points_distance_y + r.getSize()[1], s = (this.board.origin.scrCoords[2] - s) / this.board.unitY) : this.config.snap_vertically && (s = this.VERTICAL_SNAP_POSITION);
                        if (s > 0 && this.config.snap_to_ticks && this.ticks.length > 0) {
                            var u = _.sortedIndex(this.ticks, {
                                value: o
                            }, "value");
                            if (u === 0) o = this.ticks[0].value;
                            else if (u === this.ticks.length) o = this.ticks[this.ticks.length - 1].value;
                            else {
                                var a = this.ticks[u].value - o,
                                    f = o - this.ticks[u - 1].value;
                                a <= f ? o = this.ticks[u].value : o = this.ticks[u - 1].value
                            }
                        }(o !== r.X() || s !== r.Y()) && r.moveTo([o, s]), this.updateModel()
                    }
                }
            },
            dragRestrictionCheck: function(e) {
                var t = e.Y(),
                    n = e.X();
                e.coords.scrCoords[1] < 1 && (n = 1, n = (n - this.board.origin.scrCoords[1]) / this.board.unitX), e.coords.scrCoords[1] > this.pointsBoxBounds.width && (n = this.pointsBoxBounds.width - 1, n = (n - this.board.origin.scrCoords[1]) / this.board.unitX), e.coords.scrCoords[2] < e.getSize()[1] && (t = e.getSize()[1], t = (this.board.origin.scrCoords[2] - t) / this.board.unitY), e.coords.scrCoords[2] > this.pointsBoxBounds.height && (t = this.pointsBoxBounds.height - 10, t = (this.board.origin.scrCoords[2] - t) / this.board.unitY), (n !== e.X() || t !== e.Y()) && e.moveTo([n, t])
            },
            updateModel: function() {
                var e = {};
                _.each(this.points, function(t, n) {
                    t.Y() > 0 && (e[n] = {
                        x: t.X(),
                        y: t.Y()
                    })
                }, this);
                $timeout(function() {
                    $scope.ngModel = e;
                });
            },
            registerPointsHandlers: function() {
                this.pointMoved = !1, _.each(this.points, function(e) {
                    var n = $(e.rendNode),
                        r = n.css("z-index"),
                        i = this;
                    e.on("down", function() {
                        n.addClass("active"), i.activePoint = e
                    }), e.on("up", function() {
                        n.removeClass("active").css("z-index", r), i.pointMoved || i.toggleMasking(n), i.pointMoved = !1
                    }), e.on("drag", function() {
                        i.pointMoved = !0, n.css("z-index", r + 1)
                    })
                }, this)
            },
            clearValidationUI: function() {
                !this.reviewMode && this.showingValidationUI && (_.each(this.points, function(e) {
                    e.setAttribute({
                        cssClass: this.styleConfig.pointsOptions.cssClass,
                        highlightCssClass: this.styleConfig.pointsOptions.highlightCssClass
                    })
                }, this), this.$(".os-response-validate-wrapper").removeClass("os_correct os_incorrect"), this.showingValidationUI = !1)
            },
            showValidationUI: function() {
                var t = {};
                t && (_.each(this.config.points, function(e) {
                    var r = t[e];
                    if (_.isBoolean(r)) {
                        var i = " os_correct";
                        r || (i = " os_incorrect"), this.points[e].setAttribute({
                            cssClass: this.styleConfig.pointsOptions.cssClass + i,
                            highlightCssClass: this.styleConfig.pointsOptions.highlightCssClass + i
                        }), this.points[e].prepareUpdate()
                    }
                }, this), this.board.update()), this.isClearBound || (this.board.on("move", this.clearHandler, this), this.isClearBound = !0)
            },
            getValidResponse: function() {
              return this.model.validation.valid_response;
            },
            showCorrectAnswer: function() {
                var e;
                if (this.showingCorrectAnswer) return;
                this.showingCorrectAnswer = !0;
                var t = this.getValidResponse();
                t && _.isArray(t.value) && (e = [], _.each(t.value, function(t) {
                    var n = this.points[t.point];
                    n && n.getAttribute("cssClass").indexOf("os_correct") === -1 && (n.osValidResponse = {
                        point: this.formatLabel(t.point),
                        positionX: t.position,
                        positionY: this.VERTICAL_SNAP_POSITION
                    }, !JXG.supportsPointerEvents() && featureDetection.isTouchDevice() && n.on("touchdown", this.pointTouchDownHandler, n), e.push(n))
                }, this), (JXG.supportsPointerEvents() || !featureDetection.isTouchDevice()) && this.createSuggestedAnswerFromPointList(e)), e = [], _.each(this.points, function(t, i) {
                    t.getAttribute("cssClass").indexOf("os_incorrect") !== -1 && !_.isObject(t.osValidResponse) && (t.osValidResponse = {
                        point: this.formatLabel(i),
                        positionX: t.X(),
                        positionY: (this.board.origin.scrCoords[2] - this.pointsBoxBounds.y - this.config.ui_style.points_distance_y - t.getSize()[1]) / this.board.unitY
                    }, !JXG.supportsPointerEvents() && !featureDetection.isTouchDevice() && t.on("touchdown", this.pointTouchDownHandler, t), e.push(t))
                }, this), this.createSuggestedAnswerFromPointList(e), this.isClearBound || (this.board.on("move", this.clearHandler, this), this.isClearBound = !0)
            },
            hideCorrectAnswer: function() {
                !this.reviewMode && this.showingCorrectAnswer && (_.each(this.points, function(e) {
                    !JXG.supportsPointerEvents() && featureDetection.isTouchDevice() && (e.off("touchdown", this.pointTouchDownHandler), e.removeSuggestedAnswerHandler && (this.board.off("touchstart", e.removeSuggestedAnswerHandler), e.removeSuggestedAnswerHandler = null)), e.osSuggestedAnswer && (e.osSuggestedAnswer.remove(), e.osSuggestedAnswer = null)
                }, this), this.showingCorrectAnswer = !1)
            },
            clearHandler: function() {
                this.board.mode == this.board.BOARD_MODE_DRAG && (this.clearValidationUI(), this.hideCorrectAnswer(), this.board.off("move"), this.isClearBound = !1)
            },
            createSuggestedAnswerFromPointList: function(e) {
                var t = this,
                    r = [],
                    i = 20,
                    s = -this.pixelsToUnits(t.maxTextLabelHeightInPixels + i),
                    o = function(e) {
                        var i = _.extend({}, t.styleConfig.pointsOptions);
                        i.cssClass += " os_suggested", i.highlightCssClass += " os_suggested", i.anchory = "top", e.osSuggestedAnswer = e.board.create("textPoint", [e.osValidResponse.positionX, s, e.osValidResponse.point], i), e.osSuggestedAnswer.isDraggable = !1, r.push(e.osSuggestedAnswer)
                    };
                _.each(e, o);
                var u = function() {
                    _.each(r, function(e) {
                        e.resetCoords()
                    })
                };
                //this.displayLogic.isMath && (this.mathquillRendering() ? (this.renderMathquill(), u()) : (mathjaxLoader.once(mathjaxLoader.EVENT.RENDERED, u), mathjaxLoader.render()))
            },
            pixelsToUnits: function(e) {
                var t = this.board.getBoundingBox(),
                    n = t[1] - t[3],
                    r = this.config.ui_style.height;
                return e * n / r
            },
            pointTouchDownHandler: function() {
                var e = this,
                    t = _.extend({}, this.styleConfig.pointsOptions);
                t.cssClass += " os_suggested", t.highlightCssClass += " os_suggested";
                var r = this.board.create("textPoint", [this.osValidResponse.positionX, this.osValidResponse.positionY, this.osValidResponse.point], t);
                this.osSuggestedAnswer = r, setTimeout(function() {
                    var t = function() {
                        r.remove(), e.osSuggestedAnswer === r && (e.osSuggestedAnswer = null), setTimeout(function() {
                            e.board.off("touchstart", t), e.removeSuggestedAnswerHandler = null
                        }, 1)
                    };
                    e.removeSuggestedAnswerHandler = t, e.board.on("touchstart", t, e)
                }, 1)
            },
            toggleMasking: function(e) {
                if (this.showMasking && this.activePoint) {
                    var n = e.find(".os-mask");
                    n.length ? (n.remove(), this.activePoint.isDraggable = !0) : this.config.ui_style.possible_list_height > widthToDecimal(e.css("bottom")) && (e.append($(this.maskingSVG)), this.activePoint.isDraggable = !1, this.questionFacade.trigger(this.model.EVENT.MASKED, this.model.get("response_id"))), this.activePoint = null
                }
            },
            setDisabled: function(e) {
                JXG.Dump.addMarkers(this.board, "isDraggable", !e)
            }
        });

        this.numberLineExp = $attrs.numberLine;

        $scope.$parent.$watch(this.numberLineExp, function(newVal, oldVal) {
            console.log("change");
            validate.initialize(newVal);
        }, true);
    }
    return directive;
});
