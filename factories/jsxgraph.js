/**
 * Created by Vernal Liu on 2/14/2016.
 */
angular.module("JXG", ['underscore'])
    .constant('JXG', JXG)
    .factory('JXGExtended', ['JXG', '_', function(e, t)
    {
        e.createRay = function (e, t, n) {
            var r;
            return n.straightFirst = !1, n.firstArrow = !1, n.straightLast = !0, n.lastArrow = !0, r = e.create("line", t, n), r.elType = "ray", r
        }, e.registerElement("ray", e.createRay);
        e.createVector = function (t, n, r) {
            var i;
            return r.straightFirst = !1, r.firstArrow = !1, r.straightLast = !1, r.lastArrow = !0, i = t.create("line", n, r), i.type = e.OBJECT_TYPE_VECTOR, i.elType = "vector", i
        }, e.registerElement("vector", e.createVector);

        e.createParabola = function (t, n, r) {
            r = e.merge(r, e.Options.parabola);
            var i = n[0],
                s = n[1],
                o = t.create("curve", [function (e) {
                    return e
                }, function (e) {
                    var t = i.coords.usrCoords,
                        n = s.coords.usrCoords,
                        r = t[1],
                        o = t[2],
                        u = n[1],
                        a = n[2],
                        f = (a - o) / Math.pow(u - r, 2);
                    return f * Math.pow(e - r, 2) + o
                }], r);
            return i.addChild(o), s.addChild(o), o.parents = [i.id, s.id], o.rootPoint = i, o.edgePoint = s, o.type = e.OBJECT_TYPE_CURVE, o.elType = "parabola", o
        }, e.registerElement("parabola", e.createParabola);
        e.createSine = function(t, n, r) {
            r = e.merge(r, e.Options.sine);
            var i = n[0],
                s = n[1],
                o = t.create("curve", [function(e) {
                    return e
                }, function(e) {
                    var t = i.coords.usrCoords,
                        n = s.coords.usrCoords,
                        r = t[1],
                        o = t[2],
                        u = n[1],
                        a = n[2],
                        f = a - o,
                        l = 1 / (4 * (u - r));
                    return f * Math.sin(2 * Math.PI * l * (e - r)) + o
                }], r);
            return i.addChild(o), s.addChild(o), o.parents = [i.id, s.id], o.rootPoint = i, o.edgePoint = s, o.type = e.OBJECT_TYPE_CURVE, o.elType = "sine", o
        }, e.registerElement("sine", e.createSine);

        var graphPlotterLabel = function()
        {
            return function(obj) {
                obj || (obj = {});
                var __t, __p = "";
                with(obj) __p += '<div class="lrnLabel lrnLabelEditing" contentEditable="true"></div>';
                return __p;
            }
        };

        var graphPlotterLabelWithIndex = function() {
            return function(obj) {
                obj || (obj = {});
                var __t, __p = "";
                with(obj) __p += '<div><span class="lrn_responseIndex">' + ((__t = index) == null ? "" : __t) + '</span><span class="lrn_responseText">' + ((__t = text) == null ? "" : __t) + "</span></div>";
                return __p;
            }
        };

        (function (jxg, n, r, i) {
            "use strict";
            var s = {
                offset: 10,
                labelText: "",
                interactionsBlocked: !1,
                $labelEdit: null,
                $rendNode: null,
                newActionHandler: null,
                jessieCodeHelper: null,
                getAnchorCoords: function() {
                    var t, n, r, i, s, o, u, a, f, l, c, h = this.getSize(),
                        p = h[1] / 2,
                        d = h[0] / 2,
                        v = this.board.canvasWidth / 2,
                        m = this.board.canvasHeight / 2;
                    this.element.elType === "point" ? (l = Math.ceil(this.element.coords.scrCoords[1]) + this.offset, c = Math.ceil(this.element.coords.scrCoords[2]) + this.offset + p) : this.element.elType === "circle" ? (r = this.board.select(this.element.parents[0]), i = this.board.select(this.element.parents[1]), s = r.coords.scrCoords[1], o = r.coords.scrCoords[2], u = i.coords.scrCoords[1], a = i.coords.scrCoords[2], u = s - (u - s), a = o - (a - o), u > s && a <= o ? (l = u + this.offset, c = a - this.offset - p) : u > s && a > o ? (l = u + this.offset, c = a + this.offset + p) : u <= s && a > o ? (l = u - this.offset - h[0], c = a + this.offset + p) : (l = u - this.offset - h[0], c = a - this.offset - p)) : (this.element.elType === "sine" || this.element.elType === "parabola" ? (r = this.board.select(this.element.parents[0]), i = this.board.select(this.element.parents[1]), ~~r.coords.scrCoords[1] !== ~~i.coords.scrCoords[1] && ~~r.coords.scrCoords[2] !== ~~i.coords.scrCoords[2] ? this.setAttribute({
                        visible: !0
                    }) : this.setAttribute({
                        visible: !1
                    }), l = (r.coords.scrCoords[1] + i.coords.scrCoords[1]) / 2, c = (r.coords.scrCoords[2] + i.coords.scrCoords[2]) / 2) : (f = this.element.getTextAnchor(), l = f.scrCoords[1], c = f.scrCoords[2]), l -= d);
                    if (this.element.elType === "sine" || this.element.elType === "parabola" || this.element.elType === "line" || this.element.elType === "ray" || this.element.elType === "segment" || this.element.elType === "vector") {
                        r = this.board.select(this.element.parents[0]), i = this.board.select(this.element.parents[1]), s = r.coords.scrCoords[1], o = r.coords.scrCoords[2], u = i.coords.scrCoords[1], a = i.coords.scrCoords[2];
                        if (this.belongsToRectangle(s, o, l - this.offset, c - this.offset, l + h[0] + this.offset, c + h[1] + this.offset) || this.belongsToRectangle(u, a, l - this.offset, c - this.offset, l + h[0] + this.offset, c + h[1] + this.offset)) l = (r.coords.scrCoords[1] + i.coords.scrCoords[1]) / 2, c = (r.coords.scrCoords[2] + i.coords.scrCoords[2]) / 2, s === u ? l < v ? l += this.offset : l -= this.offset + h[0] : o === a ? (l -= h[0] / 2, c < m ? c += this.offset + h[1] / 2 : c -= this.offset + h[1] / 2) : s >= u && o >= a || u >= s && a >= o ? l < v ? (l += this.offset, c -= this.offset + h[1] / 2) : (l -= this.offset + h[0], c += this.offset + h[1] / 2) : l < v ? (l += this.offset, c += this.offset + h[1] / 2) : (l -= this.offset + h[0], c -= this.offset + h[1] / 2)
                    } else if (this.element.elType === "polygon" && this.element.vertices.length > 0) {
                        f = !1;
                        for (t = 0; t < this.element.vertices.length; t++)
                            if (this.belongsToRectangle(this.element.vertices[t].coords.scrCoords[1], this.element.vertices[t].coords.scrCoords[2], l - this.offset, c - this.offset, l + h[0] + this.offset, c + h[1] + this.offset)) {
                                f = !0;
                                break
                            }
                        f && (l < v ? c < m ? (f = this.getVertexByPosition(this.element.vertices, "bottom-right"), l = f.coords.scrCoords[1] + this.offset, c = f.coords.scrCoords[2] + this.offset + h[1] / 2) : (f = this.getVertexByPosition(this.element.vertices, "top-right"), l = f.coords.scrCoords[1] + this.offset, c = f.coords.scrCoords[2] - this.offset - h[1] / 2) : c < m ? (f = this.getVertexByPosition(this.element.vertices, "bottom-left"), l = f.coords.scrCoords[1] - this.offset - h[0], c = f.coords.scrCoords[2] + this.offset + h[1] / 2) : (f = this.getVertexByPosition(this.element.vertices, "top-left"), l = f.coords.scrCoords[1] - this.offset - h[0], c = f.coords.scrCoords[2] - this.offset - h[1] / 2))
                    }
                    return l < 0 ? l = 0 : l + h[0] > this.board.canvasWidth && (l = this.board.canvasWidth - h[0]), c < 0 ? c = 0 : c + h[1] > this.board.canvasHeight && (c = this.board.canvasHeight - h[1]), n = new jxg.Coords(jxg.COORDS_BY_SCREEN, [l, c], this.board), n
                },
                getVertexByPosition: function(e, n) {
                    var r, i, s = e.slice();
                    if(n === undefined)
                        n = "top-left";
                    switch (n) {
                        case "top-left":
                            r = function(e, t) {
                                var n = ~~t.coords.scrCoords[1] - ~~e.coords.scrCoords[1],
                                    r = ~~t.coords.scrCoords[2] - ~~e.coords.scrCoords[2],
                                    i = n + r;
                                return i > 0 ? -1 : 1
                            };
                            break;
                        case "top":
                            r = function(e, t) {
                                var n = ~~t.coords.scrCoords[2] - ~~e.coords.scrCoords[2];
                                return n > 0 ? -1 : 1
                            };
                            break;
                        case "top-right":
                            r = function(e, t) {
                                var n = ~~e.coords.scrCoords[1] - ~~t.coords.scrCoords[1],
                                    r = ~~t.coords.scrCoords[2] - ~~e.coords.scrCoords[2],
                                    i = n + r;
                                return i > 0 ? -1 : 1
                            };
                            break;
                        case "right":
                            r = function(e, t) {
                                var n = ~~e.coords.scrCoords[1] - ~~t.coords.scrCoords[1];
                                return n > 0 ? -1 : 1
                            };
                            break;
                        case "bottom-right":
                            r = function(e, t) {
                                var n = ~~e.coords.scrCoords[1] - ~~t.coords.scrCoords[1],
                                    r = ~~e.coords.scrCoords[2] - ~~t.coords.scrCoords[2],
                                    i = n + r;
                                return i > 0 ? -1 : 1
                            };
                            break;
                        case "bottom":
                            r = function(e, t) {
                                var n = ~~e.coords.scrCoords[2] - ~~t.coords.scrCoords[2];
                                return n > 0 ? -1 : 1
                            };
                            break;
                        case "bottom-left":
                            r = function(e, t) {
                                var n = ~~t.coords.scrCoords[1] - ~~e.coords.scrCoords[1],
                                    r = ~~e.coords.scrCoords[2] - ~~t.coords.scrCoords[2],
                                    i = n + r;
                                return i > 0 ? -1 : 1
                            };
                            break;
                        case "left":
                            r = function(e, t) {
                                var n = ~~t.coords.scrCoords[1] - ~~e.coords.scrCoords[1];
                                return n > 0 ? -1 : 1
                            }
                    }
                    return s.sort(r), s[0]
                },
                belongsToRectangle: function(e, t, n, r, i, s) {
                    var o;
                    return n > i && (o = n, n = i, i = o), r > s && (o = r, r = s, s = o), e >= n && t >= r && e <= i && t <= s ? !0 : !1
                },
                prepare: function() {
                    this.X = function() {
                        var e = this.getAnchorCoords();
                        return this.relativeCoords.usrCoords[1] + e.usrCoords[1]
                    },
                        this.Y = function() {
                            var e = this.getAnchorCoords();
                            return this.relativeCoords.usrCoords[2] + e.usrCoords[2]
                        },
                        this.element.label = this,
                        this.element.hasLabel = !0,
                        this.element.hasLrnLabel = !0,
                        this.element.visProp.withlabel = !0,
                        this.needsRegularUpdate = !0,
                        this.updatePosition(),
                        this.isDraggable = !1,
                        this.$rendNode = n(this.rendNode),
                        this.$rendNode.on("click", t.bind(this.mouseup, this)),
                        this.$rendNode.on("mousedown", this.blockEvent),
                        this.$rendNode.on("mouseover", t.bind(this.mouseover, this)),
                        this.$rendNode.on("mouseout", t.bind(this.mouseout, this)),
                        this.$rendNode.on("mousemove", this.blockEvent),
                        t.extend(this.methodMap, {
                            setText: "setText"
                        }),
                    this.getText() === "" && t.defer(t.bind(function() {
                        this.$rendNode.trigger("click");
                    }, this))
                },
                clear: function() {
                    this.board.removeObject(this.id)
                },
                remove: function() {
                    this.element.label = null, this.element.hasLabel = !1, this.element.hasLrnLabel = !1, this.element.visProp.withlabel = !1, jxg.GeometryElement.prototype.remove.call(this)
                },
                mouseover: function(e) {
                    this.interactionsBlocked || this.$rendNode.addClass("lrnLabelHighlighted")
                },
                mouseout: function(e) {
                    this.interactionsBlocked || this.$rendNode.removeClass("lrnLabelHighlighted")
                },
                mouseup: function(e) {
                    var t, i, s, o = this;
                    if (this.interactionsBlocked) return;
                    this.getCurrentTool() === "delete" ? this.processEvent(e, {
                        obj: this
                    }) : this.$labelEdit || (this.$labelEdit = n(r()), this.$rendNode.parent().append(this.$labelEdit), this.$rendNode.text(""), this.$labelEdit.css({
                        top: this.$rendNode.css("top"),
                        left: this.$rendNode.css("left")
                    }), this.$labelEdit.on("mousemove", function(e) {
                        o.blockEvent(e)
                    }).on("click", function(e) {
                        o.$labelEdit.focus()
                    }).on("focus", function(e) {
                        t = n(this).text(), "" === t && (t = o.getText(), n(this).text(t)), document.createRange && window.getSelection && this.firstChild && (i = document.createRange(), i.setStart(this.firstChild, 0), i.setEnd(this.firstChild, t.length), s = window.getSelection(), s.removeAllRanges(), s.addRange(i))
                    }).on("blur", function(e) {
                        o.stopEditing()
                    }).on("keydown", function(e) {
                        var t = e.keyCode || e.which;
                        if (t === 13) e.preventDefault(), o.stopEditing();
                        else if (t === 222) return !1
                    }), this.$labelEdit.focus())
                },
                blockEvent: function(e) {
                    this.interactionsBlocked || (e.preventDefault(), e.stopPropagation && e.stopPropagation())
                },
                enableBackgroundShape: function() {
                    this.$rendNode.addClass("lrnLabelDisabled"), this.blockInteractions()
                },
                blockInteractions: function() {
                    this.interactionsBlocked = !0
                },
                unblockInteractions: function() {
                    this.interactionsBlocked = !1
                },
                stopEditing: function() {
                    var e, t, n = this;
                    this.$labelEdit && (e = this.$labelEdit.text(), t = this.getText(), this.$labelEdit.remove(), this.$labelEdit = null, this.editing = !1, e === "" ? t === "" ? this.clear() : this.newActionHandler(this.getCreateAction(!0, t)) : t !== e ? (this.setText(e), t === "" ? this.newActionHandler(this.getCreateAction(), !0) : this.newActionHandler(this.jessieCodeHelper.editLrnLabel({
                        id: this.id,
                        text: e,
                        oldText: t
                    })), this.updatePosition()) : this.$rendNode.text(this.getText()))
                },
                getCreateAction: function(e, t) {
                    if (this.interactionsBlocked) return;
                    return t || (t = this.getText()), this.jessieCodeHelper.createLrnLabel({
                        id: this.id,
                        anchor: this.element.id,
                        text: t
                    }, !!e)
                },
                updatePosition: function() {
                    this.needsUpdate = !0, this.update(), this.updateCoords(), this.updateRenderer()
                },
                graphplotterInit: function(e) {
                    this.newActionHandler = e.newActionHandler, this.jessieCodeHelper = e.jessieCodeHelper, this.getCurrentTool = e.getCurrentTool, this.processEvent = e.processEvent
                },
                setText: function(e) {
                    var t = this._setText(e);
                    return this.labelText = e, this.updatePosition(), t;
                },
                getText: function() {
                    return this.labelText;
                },
                setBackgroundColor: function(e) {
                    e ? this.$rendNode.css("background-color", e) : this.$rendNode.css("background-color", "")
                },
                setCorrectnessIcon: function(e) {
                    e === undefined ? (this.$rendNode.removeClass("lrn_incorrect"), this.$rendNode.removeClass("lrn_correct")) : e ? this.$rendNode.addClass("lrn_correct") : this.$rendNode.addClass("lrn_incorrect")
                },
                setIndex: function(e) {
                    e !== "" && (this.labelIndex = e, this.rendNode.innerHTML = i({
                        index: e,
                        text: this.labelText
                    }))
                },
                removeIndex: function() {
                    this.labelIndex !== undefined && (this.rendNode.innerHTML = this.labelText, this.labelIndex = undefined)
                }
            };
            jxg.createLrnLabel = function(n, r, i) {
                var objBoardText, u, attrs = jxg.copyAttributes(i, n.options, "text");
                return u = r[0], attrs.anchor = attrs.parent || attrs.anchor, attrs.fixed = !1, attrs.opacity = 1, attrs.cssClass = "lrnLabel", attrs.highlight = !1, t.isObject(u) && t.isString(u.name) && (u = u.getName()), objBoardText = new jxg.Text(n, [0, 0], attrs, u), objBoardText.elType = "lrnlabel", t.extend(objBoardText, s), objBoardText.labelText = u, objBoardText.prepare(), objBoardText
            }, jxg.registerElement("lrnlabel", jxg.createLrnLabel);
        })(e, jQuery, graphPlotterLabel(), graphPlotterLabelWithIndex());
        return e;
    }]);