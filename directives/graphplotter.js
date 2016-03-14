/*!
 * angular-jsx-graph v0.2.1
 * https://github.com/tfoxy/angular-jsx-graph
 * Dependency :
 * btn-dropdown
 * array.map
 * Copyright 2015 Vernal Liu
 * Released under the MIT license
 */

/* global JXG */
/* jshint multistr:true*/

(function() {
    App.factory('graphplotter.ToolTemplates', function()
    {
        return {
            graph_controls_data: {
                'undo': {
                    'text': 'Undo',
                    'html': '<span><i class = "fa fa-reply"></i> Undo</span>'
                },
                'redo': {
                    'text': 'Redo',
                    'html': '<span><i class = "fa fa-share"></i> Redo</span>'
                },
                'delete': {
                    'text': 'Delete',
                    'html': '<span><i class = "fa fa-times"></i> Delete</span>'
                },
                'reset': {
                    'text': 'Reset',
                    'html': '<span><i class = "fa fa-times"></i> Reset</span>'
                }
            },
            plot_tools_data: {
                'point': '<span><i class = "fa fa-circle"></i> Point</span>',
                'move': '<span><i class = "fa fa-arrows"></i> Move</span>',
                'label': '<span>Label</span>',
                'line': 'Line',
                'ray': 'Ray',
                'segment': 'Segment',
                'vector': 'Vector',
                'circle': '<span><i class = "fa fa-circle-o"></i> Circle</span>',
                'parabola': 'Parabola',
                'sine': 'Sine',
                'polygon': 'Polygon'
            }
        };
    }),
    App.factory('graphplotter.draggingStrategies', [ 'JXGExtended', function(e)
    {
        var t = {};
        return t[e.OBJECT_TYPE_POINT] = function(e, t, n) {
            var r = e.obj,
                i = [e.targets[0].Xstart[0], e.targets[0].Ystart[0]],
                s = [r.X(), r.Y()];
            return t.movePoint({
                id: r.id,
                coordsOrigin: i,
                coordsDest: s
            })
        }, t[e.OBJECT_TYPE_LINE] = function(e, t, n) {
            var r = e.obj.point1,
                i = [r.X(), r.Y()],
                s = e.obj.point2,
                o = [s.X(), s.Y()];
            return n.snapPoints && n.snapSizeX > 0 && n.snapSizeY > 0 && (i[0] = Math.round(i[0] / n.snapSizeX) * n.snapSizeX, i[1] = Math.round(i[1] / n.snapSizeY) * n.snapSizeY, r.moveTo(i), o[0] = Math.round(o[0] / n.snapSizeX) * n.snapSizeX, o[1] = Math.round(o[1] / n.snapSizeY) * n.snapSizeY, s.moveTo(o)), t.moveLine({
                id: e.obj.id,
                startPoint: {
                    id: r.id,
                    coordsOrigin: [e.targets[0].Xstart[0], e.targets[0].Ystart[0]],
                    coordsDest: i
                },
                endPoint: {
                    id: s.id,
                    coordsOrigin: [e.targets[0].Xstart[1], e.targets[0].Ystart[1]],
                    coordsDest: o
                }
            })
        }, t[e.OBJECT_TYPE_CIRCLE] = function(e, t, n) {
            var r = e.obj.center,
                i = [r.X(), r.Y()],
                s = e.obj.point2,
                o = [s.X(), s.Y()];
            return n.snapPoints && n.snapSizeX > 0 && n.snapSizeY > 0 && (i[0] = Math.round(i[0] / n.snapSizeX) * n.snapSizeX, i[1] = Math.round(i[1] / n.snapSizeY) * n.snapSizeY, r.moveTo(i), o[0] = Math.round(o[0] / n.snapSizeX) * n.snapSizeX, o[1] = Math.round(o[1] / n.snapSizeY) * n.snapSizeY, s.moveTo(o)), t.moveCircle({
                id: e.obj.id,
                centrePoint: {
                    id: r.id,
                    coordsOrigin: [e.targets[0].Xstart[0], e.targets[0].Ystart[0]],
                    coordsDest: i
                },
                radiusPoint: {
                    id: s.id,
                    coordsOrigin: [e.targets[0].Xstart[1], e.targets[0].Ystart[1]],
                    coordsDest: o
                }
            })
        }, t[e.OBJECT_TYPE_CURVE] = function(e, t, n) {
            var r = e.obj.rootPoint,
                i = [r.X(), r.Y()],
                s = e.obj.edgePoint,
                o = [s.X(), s.Y()];
            n.snapPoints && n.snapSizeX > 0 && n.snapSizeY > 0 && (i[0] = Math.round(i[0] / n.snapSizeX) * n.snapSizeX, i[1] = Math.round(i[1] / n.snapSizeY) * n.snapSizeY, r.moveTo(i), o[0] = Math.round(o[0] / n.snapSizeX) * n.snapSizeX, o[1] = Math.round(o[1] / n.snapSizeY) * n.snapSizeY, s.moveTo(o));
            var u = e.targets[0].Xstart[0],
                a = e.targets[0].Ystart[0],
                f = u + o[0] - i[0],
                l = a + o[1] - i[1];
            return t.moveCurve({
                id: e.obj.id,
                rootPoint: {
                    id: r.id,
                    coordsOrigin: [u, a],
                    coordsDest: i
                },
                edgePoint: {
                    id: s.id,
                    coordsOrigin: [f, l],
                    coordsDest: o
                }
            })
        }, t[e.OBJECT_TYPE_POLYGON] = function(e, t, n) {
            var r, i, s = e.obj.vertices,
                o = e.targets[0],
                u, a;
            r = [];
            for (var f = 0; f < s.length; f++) u = s[f], a = u.coords.usrCoords, n.snapPoints && n.snapSizeX > 0 && n.snapSizeY > 0 && u.moveTo(a), r.push({
                id: u.id,
                coords: a
            });
            i = [];
            var l, c, h;
            for (var f = 0; f < o.Xstart.length; f++) u = s[f], l = o.Xstart[f], c = o.Ystart[f], h = o.Zstart[f], a = [h, l, c], i.push({
                id: u.id,
                coords: a
            });
            return t.movePolygon({
                id: e.obj.id,
                origVerts: i,
                destVerts: r
            })
        }, t
    }]),
    App.factory('graphplotter.tools.base', ['JXGExtended', function(t)
    {
        "use strict";
        var e = angular;
        var n = function(board, jessie, option) {
            this.board = board, this.jessieCodeHelper = jessie, this.toolOptions = option, this.name = this.toolOptions.name, this.setState(), this.initialise()
        };
        return n.STATES = {
            DEFAULT: "idle",
            IDLE: "idle",
            INPROGRESS: "in-progress"
        }, n.extend = function(t) {
            function i() {}
            var n = this,
                r = function() {
                    return n.apply(this, arguments)
                };
            return e.extend(r, n), i.prototype = n.prototype, r.prototype = new i, r.prototype.constructor = r, e.extend(r.prototype, t), r
        }, e.extend(n.prototype, {
            initialise: function() {},
            reset: function() {},
            processEvent: function(e, t) {
                throw "Unimplemented function processEvent"
            },
            setState: function(e) {
                if (!e || [n.STATES.IDLE, n.STATES.INPROGRESS].indexOf(e) === -1) e = n.STATES.DEFAULT;
                this.state = e
            },
            getState: function() {
                return this.state
            },
            isIdle: function() {
                return this.state === n.STATES.IDLE
            },
            snapIsOn: function() {
                return this.toolOptions.snapPoints && this.toolOptions.snapSizeX > 0 && this.toolOptions.snapSizeY > 0
            },
            getCoordinatesAndPoint: function(e, n) {
                var r = this.getCoordinatesFromEvent(e),
                    i, s;
                return this.snapIsOn() ? (i = this.getElementAtCoordinates(r), i && t.isPoint(i) && (s = i)) : n && t.isPoint(n.obj) && (s = n.obj), {
                    coords: [r.usrCoords[1], r.usrCoords[2]],
                    point: s
                }
            },
            getCoordinatesFromEvent: function(e) {
                var n, r, i, s = this.board.getCoordsTopLeftCorner();
                e.changedTouches && (e = e.changedTouches[0]);
                if (e.pageX || e.pageY) n = e.pageX - s[0], r = e.pageY - s[1];
                else if (e.clientX || e.clientY) n = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft - s[0], r = e.clientY + document.body.scrollTop + document.documentElement.scrollTop - s[1];
                return i = new t.Coords(t.COORDS_BY_SCREEN, [n, r], this.board), this.snapIsOn() && (i.usrCoords[1] = Math.round(i.usrCoords[1] / this.toolOptions.snapSizeX) * this.toolOptions.snapSizeX, i.usrCoords[2] = Math.round(i.usrCoords[2] / this.toolOptions.snapSizeY) * this.toolOptions.snapSizeY, i.usr2screen(!0)), i
            },
            getElementAtCoordinates: function(n) {
                var r = n.scrCoords,
                    i = {
                        visProp: {
                            layer: -1e4
                        }
                    },
                    s;
                return e.forEach(this.board.objectsList, function(e) {
                    e.isDraggable && e.visProp.visible && !e.visProp.fixed && !e.visProp.frozen && e.hasPoint && e.hasPoint(r[1], r[2]) && (e.visProp.layer > i.visProp.layer || e.visProp.layer === i.visProp.layer && e.lastDragTime.getTime() >= i.lastDragTime.getTime()) && (!t.exists(i.label) || e !== i.label) && (i = e, s = i)
                }, this), s
            },
            createAuxiliaryElement: function(e, t, n) {
                var r = this.board.create(e, t, n);
                return r.lrnAuxiliary = !0, r.dump = !1, r
            }
        }), n

    }]),
    App.factory('graphplotter.tools.move', ['graphplotter.tools.base', function(t)
    {
        "use strict";
        var e = angular;
        return t.extend({
            processEvent: function(e, t) {
                return !1
            }
        })
    }]),
    App.factory('graphplotter.tools.point', ['graphplotter.tools.base', function(t)
    {
        "use strict";
        var e = angular;
        return t.extend({
            processEvent: function(e, t) {
                var n = this.getCoordinatesAndPoint(e, t);
                return n.point ? null : this.jessieCodeHelper.createPoint({
                    coords: n.coords,
                    showInfobox: this.toolOptions.showInfobox,
                    snapToGrid: this.toolOptions.snapPoints,
                    snapSizeX: this.toolOptions.snapSizeX,
                    snapSizeY: this.toolOptions.snapSizeY
                })
            }
        })
    }]),
    App.factory('graphplotter.tools.line', ['graphplotter.tools.base','JXGExtended', function(t, n){
        "use strict";
        var e = angular;
        return t.extend({
            LINE_TYPE: {
                LINE: "line",
                RAY: "ray",
                SEGMENT: "segment",
                VECTOR: "vector"
            },
            initialise: function() {
                this.lineType = this.toolOptions.lineType, this.firstPoint = null, this.createdPoint = !1, this.firstPointOriginalColours = {}
            },
            processEvent: function(e, t) {
                var n = this.getCoordinatesAndPoint(e, t);
                return this.hasFirstPointBeenSelected() ? this.processEventFinal(n.coords, n.point) : this.processEventInitial(n.coords, n.point)
            },
            hasFirstPointBeenSelected: function() {
                return this.firstPoint !== null
            },
            processEventInitial: function(e, t) {
                if (t) this.firstPoint = t, this.createdPoint = !1, this.firstPointOriginalColours = {
                    strokeColor: this.firstPoint.getAttribute("strokeColor"),
                    fillColor: this.firstPoint.getAttribute("fillColor"),
                    strokeOpacity: this.firstPoint.getAttribute("strokeOpacity"),
                    fillOpacity: this.firstPoint.getAttribute("fillOpacity"),
                    strokeWidth: this.firstPoint.getAttribute("strokeWidth")
                };
                else {
                    var n = {
                        snaptogrid: this.toolOptions.snapPoints
                    };
                    this.toolOptions.snapPoints && (n.snapsizex = this.toolOptions.snapSizeX, n.snapsizey = this.toolOptions.snapSizeY), this.firstPoint = this.createAuxiliaryElement("point", e, n), this.createdPoint = !0
                }
                return this.firstPoint.setAttribute({
                    strokeColor: this.firstPoint.getAttribute("highlightStrokeColor"),
                    fillColor: this.firstPoint.getAttribute("highlightFillColor"),
                    strokeOpacity: this.firstPoint.getAttribute("highlightStrokeOpacity"),
                    fillOpacity: this.firstPoint.getAttribute("highlightFillOpacity"),
                    strokeWidth: this.firstPoint.getAttribute("highlightStrokeWidth")
                }), null
            },
            processEventFinal: function(e, t) {
                var n = this.firstPoint.id,
                    r, i, s;
                t ? r = t.id : (s = this.jessieCodeHelper.createPoint({
                    coords: e,
                    showInfobox: this.toolOptions.showInfobox,
                    snapToGrid: this.toolOptions.snapPoints,
                    snapSizeX: this.toolOptions.snapSizeX,
                    snapSizeY: this.toolOptions.snapSizeY
                }), r = s.objectId);
                if (n != r) {
                    this.createdPoint && (i = this.jessieCodeHelper.createPoint({
                        coords: [this.firstPoint.X(), this.firstPoint.Y()],
                        showInfobox: this.toolOptions.showInfobox,
                        snapToGrid: this.toolOptions.snapPoints,
                        snapSizeX: this.toolOptions.snapSizeX,
                        snapSizeY: this.toolOptions.snapSizeY
                    }), n = i.objectId);
                    var o = this.jessieCodeHelper.createLine({
                        startPointId: n,
                        endPointId: r,
                        type: this.lineType
                    });
                    return o = o.mergeActions(i, s, o), this.reset(), o
                }
                return null
            },
            reset: function() {
                this.firstPoint && (this.createdPoint ? this.board.removeObject(this.firstPoint) : this.firstPoint.setAttribute({
                    strokeColor: this.firstPointOriginalColours.strokeColor,
                    fillColor: this.firstPointOriginalColours.fillColor,
                    strokeOpacity: this.firstPointOriginalColours.strokeOpacity,
                    fillOpacity: this.firstPointOriginalColours.fillOpacity,
                    strokeWidth: this.firstPointOriginalColours.strokeWidth
                })), this.firstPoint = null, this.createdPoint = !1, this.firstPointOriginalColours = {}
            }
        })
    }]),
    App.factory('graphplotter.tools.circle', ['graphplotter.tools.base', 'JXGExtended', function (t, n) {
        "use strict";
        var e = angular;
        return t.extend({
            initialise: function() {
                this.firstPoint = null, this.createdPoint = !1, this.firstPointOriginalColours = {}
            },
            processEvent: function(e, t) {
                var n = this.getCoordinatesAndPoint(e, t);
                return this.hasFirstPointBeenSelected() ? this.processEventFinal(n.coords, n.point) : this.processEventInitial(n.coords, n.point)
            },
            hasFirstPointBeenSelected: function() {
                return this.firstPoint !== null
            },
            processEventInitial: function(e, t) {
                if (t) this.firstPoint = t, this.createdPoint = !1, this.firstPointOriginalColours = {
                    strokeColor: this.firstPoint.getAttribute("strokeColor"),
                    fillColor: this.firstPoint.getAttribute("fillColor"),
                    strokeOpacity: this.firstPoint.getAttribute("strokeOpacity"),
                    fillOpacity: this.firstPoint.getAttribute("fillOpacity"),
                    strokeWidth: this.firstPoint.getAttribute("strokeWidth")
                };
                else {
                    var n = {
                        snaptogrid: this.toolOptions.snapPoints
                    };
                    this.toolOptions.snapPoints && (n.snapsizex = this.toolOptions.snapSizeX, n.snapsizey = this.toolOptions.snapSizeY), this.firstPoint = this.createAuxiliaryElement("point", e, n), this.createdPoint = !0
                }
                return this.firstPoint.setAttribute({
                    strokeColor: this.firstPoint.getAttribute("highlightStrokeColor"),
                    fillColor: this.firstPoint.getAttribute("highlightFillColor"),
                    strokeOpacity: this.firstPoint.getAttribute("highlightStrokeOpacity"),
                    fillOpacity: this.firstPoint.getAttribute("highlightFillOpacity"),
                    strokeWidth: this.firstPoint.getAttribute("highlightStrokeWidth")
                }), null
            },
            processEventFinal: function(e, t) {
                var n = this.firstPoint.id,
                    r, i, s;
                t ? r = t.id : (s = this.jessieCodeHelper.createPoint({
                    coords: e,
                    showInfobox: this.toolOptions.showInfobox,
                    snapToGrid: this.toolOptions.snapPoints,
                    snapSizeX: this.toolOptions.snapSizeX,
                    snapSizeY: this.toolOptions.snapSizeY
                }), r = s.objectId);
                if (n != r) {
                    this.createdPoint && (i = this.jessieCodeHelper.createPoint({
                        coords: [this.firstPoint.X(), this.firstPoint.Y()],
                        showInfobox: this.toolOptions.showInfobox,
                        snapToGrid: this.toolOptions.snapPoints,
                        snapSizeX: this.toolOptions.snapSizeX,
                        snapSizeY: this.toolOptions.snapSizeY
                    }), n = i.objectId);
                    var o = this.jessieCodeHelper.createCircle({
                        centrePointId: n,
                        radiusPointId: r
                    });
                    return o = o.mergeActions(i, s, o), this.reset(), o
                }
                return null
            },
            reset: function() {
                this.firstPoint && (this.createdPoint ? this.board.removeObject(this.firstPoint) : this.firstPoint.setAttribute({
                    strokeColor: this.firstPointOriginalColours.strokeColor,
                    fillColor: this.firstPointOriginalColours.fillColor,
                    strokeOpacity: this.firstPointOriginalColours.strokeOpacity,
                    fillOpacity: this.firstPointOriginalColours.fillOpacity,
                    strokeWidth: this.firstPointOriginalColours.strokeWidth
                })), this.firstPoint = null, this.createdPoint = !1, this.firstPointOriginalColours = {}
            }
        })
    }]),
    App.factory('graphplotter.tools.parabola', ['graphplotter.tools.base', 'JXGExtended', function(t, n)
    {
        "use strict";
        var e = angular;
        return t.extend({
            initialise: function() {
                this.firstPoint = null, this.createdPoint = !1, this.firstPointOriginalColours = {}
            },
            processEvent: function(e, t) {
                var n = this.getCoordinatesAndPoint(e, t);
                return this.hasFirstPointBeenSelected() ? this.processEventFinal(n.coords, n.point) : this.processEventInitial(n.coords, n.point)
            },
            hasFirstPointBeenSelected: function() {
                return this.firstPoint !== null
            },
            processEventInitial: function(e, t) {
                if (t) this.firstPoint = t, this.createdPoint = !1, this.firstPointOriginalColours = {
                    strokeColor: this.firstPoint.getAttribute("strokeColor"),
                    fillColor: this.firstPoint.getAttribute("fillColor"),
                    strokeOpacity: this.firstPoint.getAttribute("strokeOpacity"),
                    fillOpacity: this.firstPoint.getAttribute("fillOpacity"),
                    strokeWidth: this.firstPoint.getAttribute("strokeWidth")
                };
                else {
                    var n = {
                        snaptogrid: this.toolOptions.snapPoints
                    };
                    this.toolOptions.snapPoints && (n.snapsizex = this.toolOptions.snapSizeX, n.snapsizey = this.toolOptions.snapSizeY), this.firstPoint = this.createAuxiliaryElement("point", e, n), this.createdPoint = !0
                }
                return this.firstPoint.setAttribute({
                    strokeColor: this.firstPoint.getAttribute("highlightStrokeColor"),
                    fillColor: this.firstPoint.getAttribute("highlightFillColor"),
                    strokeOpacity: this.firstPoint.getAttribute("highlightStrokeOpacity"),
                    fillOpacity: this.firstPoint.getAttribute("highlightFillOpacity"),
                    strokeWidth: this.firstPoint.getAttribute("highlightStrokeWidth")
                }), null
            },
            processEventFinal: function(e, t) {
                var n = this.firstPoint.id,
                    r, i, s;
                t ? r = t.id : (s = this.jessieCodeHelper.createPoint({
                    coords: e,
                    showInfobox: this.toolOptions.showInfobox,
                    snapToGrid: this.toolOptions.snapPoints,
                    snapSizeX: this.toolOptions.snapSizeX,
                    snapSizeY: this.toolOptions.snapSizeY
                }), r = s.objectId);
                if (n != r) {
                    this.createdPoint && (i = this.jessieCodeHelper.createPoint({
                        coords: [this.firstPoint.X(), this.firstPoint.Y()],
                        showInfobox: this.toolOptions.showInfobox,
                        snapToGrid: this.toolOptions.snapPoints,
                        snapSizeX: this.toolOptions.snapSizeX,
                        snapSizeY: this.toolOptions.snapSizeY
                    }), n = i.objectId);
                    var o = this.jessieCodeHelper.createParabola({
                        rootPointId: n,
                        edgePointId: r
                    });
                    return o = o.mergeActions(i, s, o), this.reset(), o
                }
                return null
            },
            reset: function() {
                this.firstPoint && (this.createdPoint ? this.board.removeObject(this.firstPoint) : this.firstPoint.setAttribute({
                    strokeColor: this.firstPointOriginalColours.strokeColor,
                    fillColor: this.firstPointOriginalColours.fillColor,
                    strokeOpacity: this.firstPointOriginalColours.strokeOpacity,
                    fillOpacity: this.firstPointOriginalColours.fillOpacity,
                    strokeWidth: this.firstPointOriginalColours.strokeWidth
                })), this.firstPoint = null, this.createdPoint = !1, this.firstPointOriginalColours = {}
            }
        })
    }]),
    App.factory('graphplotter.tools.sine', ['graphplotter.tools.base', 'JXGExtended', function (t, n) {
        "use strict";
        var e = angular;
        return t.extend({
            initialise: function() {
                this.firstPoint = null, this.createdPoint = !1, this.firstPointOriginalColours = {}
            },
            processEvent: function(e, t) {
                var n = this.getCoordinatesAndPoint(e, t);
                return this.hasFirstPointBeenSelected() ? this.processEventFinal(n.coords, n.point) : this.processEventInitial(n.coords, n.point)
            },
            hasFirstPointBeenSelected: function() {
                return this.firstPoint !== null
            },
            processEventInitial: function(e, t) {
                if (t) this.firstPoint = t, this.createdPoint = !1, this.firstPointOriginalColours = {
                    strokeColor: this.firstPoint.getAttribute("strokeColor"),
                    fillColor: this.firstPoint.getAttribute("fillColor"),
                    strokeOpacity: this.firstPoint.getAttribute("strokeOpacity"),
                    fillOpacity: this.firstPoint.getAttribute("fillOpacity"),
                    strokeWidth: this.firstPoint.getAttribute("strokeWidth")
                };
                else {
                    var n = {
                        snaptogrid: this.toolOptions.snapPoints
                    };
                    this.toolOptions.snapPoints && (n.snapsizex = this.toolOptions.snapSizeX, n.snapsizey = this.toolOptions.snapSizeY), this.firstPoint = this.createAuxiliaryElement("point", e, n), this.createdPoint = !0
                }
                return this.firstPoint.setAttribute({
                    strokeColor: this.firstPoint.getAttribute("highlightStrokeColor"),
                    fillColor: this.firstPoint.getAttribute("highlightFillColor"),
                    strokeOpacity: this.firstPoint.getAttribute("highlightStrokeOpacity"),
                    fillOpacity: this.firstPoint.getAttribute("highlightFillOpacity"),
                    strokeWidth: this.firstPoint.getAttribute("highlightStrokeWidth")
                }), null
            },
            processEventFinal: function(e, t) {
                var n = this.firstPoint.id,
                    r, i, s;
                t ? r = t.id : (s = this.jessieCodeHelper.createPoint({
                    coords: e,
                    showInfobox: this.toolOptions.showInfobox,
                    snapToGrid: this.toolOptions.snapPoints,
                    snapSizeX: this.toolOptions.snapSizeX,
                    snapSizeY: this.toolOptions.snapSizeY
                }), r = s.objectId);
                if (n != r) {
                    this.createdPoint && (i = this.jessieCodeHelper.createPoint({
                        coords: [this.firstPoint.X(), this.firstPoint.Y()],
                        showInfobox: this.toolOptions.showInfobox,
                        snapToGrid: this.toolOptions.snapPoints,
                        snapSizeX: this.toolOptions.snapSizeX,
                        snapSizeY: this.toolOptions.snapSizeY
                    }), n = i.objectId);
                    var o = this.jessieCodeHelper.createSine({
                        rootPointId: n,
                        edgePointId: r
                    });
                    return o = o.mergeActions(i, s, o), this.reset(), o
                }
                return null
            },
            reset: function() {
                this.firstPoint && (this.createdPoint ? this.board.removeObject(this.firstPoint) : this.firstPoint.setAttribute({
                    strokeColor: this.firstPointOriginalColours.strokeColor,
                    fillColor: this.firstPointOriginalColours.fillColor,
                    strokeOpacity: this.firstPointOriginalColours.strokeOpacity,
                    fillOpacity: this.firstPointOriginalColours.fillOpacity,
                    strokeWidth: this.firstPointOriginalColours.strokeWidth
                })), this.firstPoint = null, this.createdPoint = !1, this.firstPointOriginalColours = {}
            }
        })
    }]),
    App.factory('graphplotter.jxgAction', ['_', function(e) {
        "use strict";
        var t = function(e, t, n) {
            this.action = e, this.undo = t, this.objectId = n
        };
        return e.extend(t.prototype, {
            mergeActions: function() {
                var n = "",
                    r = "",
                    i = [];
                return e.each(arguments, function(e) {
                    e && (n += e.action, r += e.undo, i.push(e.objectId))
                }), i = e.flatten(i), new t(n, r, i)
            }
        }), t
    }])
    App.factory('graphplotter.tools.polygon', ['graphplotter.tools.base', 'JXGExtended', 'graphplotter.jxgAction', function (t, n, r) {
        "use strict";
        var i = 1e-6;
        var e = angular;
        return t.extend({
            initialise: function() {
                this.pointsOriginalColours = [], this.points = [], this.lines = []
            },
            processEvent: function(e, n, r) {
                var i = this.getCoordinatesAndPoint(e, n),
                    s = i.point,
                    o;
                if (s && (s.isSelectedByPolygon || s.isCreated) && this.points.length > 0 && s === this.points[this.points.length - 1]) return null;
                if (s) !s.isSelectedByPolygon && !s.isCreated && (o = {
                    strokeColor: s.getAttribute("strokeColor"),
                    fillColor: s.getAttribute("fillColor"),
                    strokeOpacity: s.getAttribute("strokeOpacity"),
                    fillOpacity: s.getAttribute("fillOpacity"),
                    strokeWidth: s.getAttribute("strokeWidth")
                }, s.isSelectedByPolygon = !0);
                else {
                    var u = {
                        snaptogrid: this.toolOptions.snapPoints
                    };
                    this.toolOptions.snapPoints && (u.snapsizex = this.toolOptions.snapSizeX, u.snapsizey = this.toolOptions.snapSizeY), s = this.createAuxiliaryElement("point", i.coords, u), s.isCreated = !0
                }
                return s === this.points[0] && this.points.length > 2 ? this.updatePolygon(r) : (this.points.length > 0 ? s.setAttribute({
                    strokeColor: s.getAttribute("highlightStrokeColor"),
                    fillColor: s.getAttribute("highlightFillColor"),
                    strokeOpacity: s.getAttribute("highlightStrokeOpacity"),
                    fillOpacity: s.getAttribute("highlightFillOpacity"),
                    strokeWidth: s.getAttribute("highlightStrokeWidth")
                }) : s.setAttribute({
                    strokeColor: s.getAttribute("highlightTargetColor"),
                    fillColor: s.getAttribute("highlightTargetColor"),
                    strokeOpacity: s.getAttribute("strokeOpacity"),
                    fillOpacity: s.getAttribute("fillOpacity"),
                    strokeWidth: s.getAttribute("highlightStrokeWidth")
                }), this.points.push(s), this.pointsOriginalColours.push(o), this.points.length >= 2 && this.lines.push(this.createAuxiliaryElement("segment", [this.points[this.points.length - 2], this.points[this.points.length - 1]])), this.setState(t.STATES.INPROGRESS), r.updateToolbox(), null)
            },
            updatePolygon: function(t) {
                var n = [],
                    r = [];
                e.forEach(this.points, function(e) {
                    var t, i;
                    e.isCreated ? (t = this.jessieCodeHelper.createPoint({
                        coords: [e.X(), e.Y()],
                        showInfobox: this.toolOptions.showInfobox,
                        snapToGrid: this.toolOptions.snapPoints,
                        snapSizeX: this.toolOptions.snapSizeX,
                        snapSizeY: this.toolOptions.snapSizeY
                    }), n.push(t), i = t.objectId) : i = e.id, r.push(i)
                }, this);
                var i = this.jessieCodeHelper.createPolygon({
                    pointIds: r
                });
                return this.reset(t), i.mergeActions.apply(i, n.concat(i))
            },
            reset: function(n) {
                e.forEach(this.lines, function(e) {
                    this.board.removeObject(e)
                }, this), e.forEach(this.points, function(e, t) {
                    e.isCreated ? this.board.removeObject(e) : e.isSelectedByPolygon && (e.setAttribute({
                        strokeColor: this.pointsOriginalColours[t].strokeColor,
                        fillColor: this.pointsOriginalColours[t].fillColor,
                        strokeOpacity: this.pointsOriginalColours[t].strokeOpacity,
                        fillOpacity: this.pointsOriginalColours[t].fillOpacity,
                        strokeWidth: this.pointsOriginalColours[t].strokeWidth
                    }), delete e.isSelectedByPolygon)
                }, this), this.points = [], this.pointsOriginalColours = [], this.setState(t.STATES.IDLE), n.updateToolbox()
            }
        })
    }])
    App.factory('graphplotter.jessieCodeHelper', ['graphplotter.jxgAction', function(t){
        "use strict";
        var e = angular;
        var n = function(e) {
            this.board = e, this.idCounter = 0
        };
        return e.extend(n.prototype, {
            ID_PREFIX: "lrn_",
            pointLetters: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
            createPoint: function(n, r) {
                var i = e.isString(n.id) ? n.id : this.generateId(),
                    s = "point(" + n.coords[0] + "," + n.coords[1] + ")";
                s += " << id: '" + i + "'", n.showInfobox && (s += ", showinfobox: true"), s += ", snaptogrid: " + n.snapToGrid, n.snapToGrid && (s += ", snapsizex: " + n.snapSizeX + ", snapsizey: " + n.snapSizeY), s += " >>;";
                var o = "remove(" + i + ");";
                return r === !0 ? new t(o, s, i) : new t(s, o, i)
            },
            createPointFromObject: function(e, t) {
                var n = {
                    id: e.id,
                    coords: [e.X(), e.Y()],
                    showInfobox: e.visProp.showinfobox,
                    snapToGrid: e.visProp.snaptogrid,
                    snapSizeX: e.visProp.snapsizex,
                    snapSizeY: e.visProp.snapsizey
                };
                return this.createPoint(n, t)
            },
            movePoint: function(e) {
                var n = e.id + ".move([" + e.coordsDest[0] + "," + e.coordsDest[1] + "]);",
                    r = e.id + ".move([" + e.coordsOrigin[0] + "," + e.coordsOrigin[1] + "]);";
                return new t(n, r, e.id)
            },
            createLine: function(n, r) {
                var i = e.isString(n.id) ? n.id : this.generateId(),
                    s = "remove(" + i + ");",
                    o = e.isString(n.type) ? n.type : "line",
                    u = o + "(" + n.startPointId + "," + n.endPointId + ")" + " << id: '" + i + "' >>;";
                return r === !0 ? new t(s, u, i) : new t(u, s, i)
            },
            createLineFromObject: function(e, t) {
                var n = {
                    id: e.id,
                    type: e.elType,
                    startPointId: e.point1.id,
                    endPointId: e.point2.id
                };
                return this.createLine(n, t)
            },
            moveLine: function(e) {
                var n = e.startPoint.id + ".move([" + e.startPoint.coordsDest[0] + "," + e.startPoint.coordsDest[1] + "]); " + e.endPoint.id + ".move([" + e.endPoint.coordsDest[0] + "," + e.endPoint.coordsDest[1] + "]);",
                    r = e.startPoint.id + ".move([" + e.startPoint.coordsOrigin[0] + "," + e.startPoint.coordsOrigin[1] + "]); " + e.endPoint.id + ".move([" + e.endPoint.coordsOrigin[0] + "," + e.endPoint.coordsOrigin[1] + "]);";
                return new t(n, r, e.id)
            },
            createCircle: function(n, r) {
                var i = e.isString(n.id) ? n.id : this.generateId(),
                    s = "remove(" + i + ");",
                    o = "circle(" + n.centrePointId + "," + n.radiusPointId + ")" + " << id: '" + i + "' >>;";
                return s = "remove(" + i + ");", r === !0 ? new t(s, o, i) : new t(o, s, i)
            },
            createCircleFromObject: function(e, t) {
                var n = {
                    id: e.id,
                    centrePointId: e.center.id,
                    radiusPointId: e.point2.id
                };
                return this.createCircle(n, t)
            },
            moveCircle: function(e) {
                var n = e.centrePoint.id + ".move([" + e.centrePoint.coordsDest[0] + "," + e.centrePoint.coordsDest[1] + "]); " + e.radiusPoint.id + ".move([" + e.radiusPoint.coordsDest[0] + "," + e.radiusPoint.coordsDest[1] + "]);",
                    r = e.centrePoint.id + ".move([" + e.centrePoint.coordsOrigin[0] + "," + e.centrePoint.coordsOrigin[1] + "]); " + e.radiusPoint.id + ".move([" + e.radiusPoint.coordsOrigin[0] + "," + e.radiusPoint.coordsOrigin[1] + "]);";
                return new t(n, r, e.id)
            },
            createParabola: function(n, r) {
                var i = e.isString(n.id) ? n.id : this.generateId(),
                    s = "remove(" + i + ");",
                    o = "parabola(" + n.rootPointId + "," + n.edgePointId + ")" + " << id: '" + i + "' >>;";
                return r === !0 ? new t(s, o, i) : new t(o, s, i)
            },
            createParabolaFromObject: function(e, t) {
                var n = {
                    id: e.id,
                    rootPointId: e.rootPoint.id,
                    edgePointId: e.edgePoint.id
                };
                return this.createParabola(n, t)
            },
            moveCurve: function(e) {
                var n = e.rootPoint.id + ".move([" + e.rootPoint.coordsDest[0] + "," + e.rootPoint.coordsDest[1] + "]); " + e.edgePoint.id + ".move([" + e.edgePoint.coordsDest[0] + "," + e.edgePoint.coordsDest[1] + "]);",
                    r = e.rootPoint.id + ".move([" + e.rootPoint.coordsOrigin[0] + "," + e.rootPoint.coordsOrigin[1] + "]); " + e.edgePoint.id + ".move([" + e.edgePoint.coordsOrigin[0] + "," + e.edgePoint.coordsOrigin[1] + "]);";
                return new t(n, r, e.id)
            },
            createSine: function(n, r) {
                var i = e.isString(n.id) ? n.id : this.generateId(),
                    s = "remove(" + i + ");",
                    o = "sine(" + n.rootPointId + "," + n.edgePointId + ")" + " << id: '" + i + "' >>;";
                return r === !0 ? new t(s, o, i) : new t(o, s, i)
            },
            createSineFromObject: function(e, t) {
                var n = {
                    id: e.id,
                    rootPointId: e.rootPoint.id,
                    edgePointId: e.edgePoint.id
                };
                return this.createSine(n, t)
            },
            createPolygon: function(n, r) {
                var i = e.isString(n.id) ? n.id : this.generateId(),
                    s = "remove(" + i + ");",
                    o, u = [];
                for (o in n.pointIds) n.pointIds.hasOwnProperty(o) && u.push(n.pointIds[o]);
                var a = "polygon(" + u.join(", ") + ")" + " << id: '" + i + "' >>;";
                return r === !0 ? new t(s, a, i) : new t(a, s, i)
            },
            createPolygonFromObject: function(t, n) {
                var r = [];
                e.forEach(t.ancestors, function(e) {
                    r.push(e.id)
                });
                var i = {
                    id: t.id,
                    pointIds: r
                };
                return this.createPolygon(i, n)
            },
            movePolygon: function(e) {
                var n, r, i, s, o, u;
                n = e.destVerts, s = "";
                for (u = 0; u < n.length; u++) i = n[u], s += i.id + ".move([" + i.coords[1] + "," + i.coords[2] + "]); ";
                r = e.origVerts, o = "";
                for (u = 0; u < r.length; u++) i = r[u], o += i.id + ".move([" + i.coords[1] + "," + i.coords[2] + "]); ";
                return new t(s, o, e.id)
            },
            createLrnLabel: function(n, r) {
                var i = e.isString(n.id) ? n.id : this.generateId(),
                    s = e.isString(n.text) ? n.text : "",
                    o = "remove(" + i + ");",
                    u = "lrnlabel('" + s + "')" + " << id: '" + i + "'";
                return e.isString(n.anchor) && (u += ", anchor: '" + n.anchor + "'"), u += " >>;", r ? new t(o, u, i) : new t(u, o, i)
            },
            createLrnLabelFromObject: function(e, t) {
                return e.getCreateAction(t)
            },
            editLrnLabel: function(n) {
                var r = e.isString(n.id) ? n.id : this.generateId(),
                    i = e.isString(n.text) ? n.text : "",
                    s = e.isString(n.oldText) ? n.oldText : "",
                    o = r + ".setText('" + s + "');",
                    u = r + ".setText('" + i + "');";
                return new t(u, o, r)
            },
            generateId: function() {
                this.idCounter++;
                while (this.board.objects[this.ID_PREFIX + this.idCounter]) this.idCounter++;
                return this.ID_PREFIX + this.idCounter
            },
            getJsxgActionsFromComposition: function(t, n) {
                var r = [],
                    i;
                return e.forEach(t, function(e) {
                    switch (e.type) {
                        case "point":
                            i = this.createPoint({
                                id: e.id,
                                coords: [e.coords.x, e.coords.y],
                                showInfobox: n.showInfobox,
                                snapToGrid: n.snapPoints,
                                snapSizeX: n.snapSizeX,
                                snapSizeY: n.snapSizeY
                            });
                            break;
                        case "line":
                        case "ray":
                        case "segment":
                        case "vector":
                            i = this.createLine({
                                id: e.id,
                                type: e.type,
                                startPointId: e.subElementsIds.startPoint,
                                endPointId: e.subElementsIds.endPoint
                            });
                            break;
                        case "circle":
                            i = this.createCircle({
                                id: e.id,
                                centrePointId: e.subElementsIds.centrePoint,
                                radiusPointId: e.subElementsIds.radiusPoint
                            });
                            break;
                        case "parabola":
                            i = this.createParabola({
                                id: e.id,
                                rootPointId: e.subElementsIds.rootPoint,
                                edgePointId: e.subElementsIds.edgePoint
                            });
                            break;
                        case "sine":
                            i = this.createSine({
                                id: e.id,
                                rootPointId: e.subElementsIds.rootPoint,
                                edgePointId: e.subElementsIds.edgePoint
                            });
                            break;
                        case "polygon":
                            i = this.createPolygon({
                                id: e.id,
                                pointIds: e.subElementsIds
                            });
                            break;
                        case "lrnlabel":
                            i = this.createLrnLabel({
                                id: e.id,
                                anchor: e.anchor,
                                text: e.text
                            });
                            break;
                        default:
                            i = null
                    }
                    i && r.push(i)
                }, this), r
            },
            updateActionsUndos: function(t, n) {
                var r = /^delete (lrn_\d+);$/;
                return n = n.map(function(e) {
                    var t = r.exec(e);
                    return t && t.length === 2 ? "remove(" + t[1] + ");" : e
                }), {
                    actions: t,
                    undos: n
                }
            }
        }), n
    }])
    App.factory('graphplotter.tools.delete', ['graphplotter.tools.base', 'graphplotter.jessieCodeHelper', 'JXGExtended', 'graphplotter.jxgAction', '_', function(t, n, r, i, e) {
        "use strict";
        return t.extend({
            processEvent: function(e, t, r) {
                console.log("delete tool selection");
                var i = [],
                    s, o, u, a, f;
                if (t && t.obj) {
                    s = t.obj, o = [], u = this.board, this.jessieCodeHelper = new n(u), a = s.childElements, (s.parentPolygon === undefined || s.parentPolygon === null) && o.push(s.id);
                    switch (s.elType) {
                        case "polygon":
                            i = this.processPolygonSelection(s, u, o);
                            break;
                        case "point":
                            i = this.processPointSelection(s, a, u, o);
                            break;
                        case "segment":
                            i = this.processSegmentSelection(s, u, o);
                            break;
                        case "lrnlabel":
                            return s.getCreateAction(!0);
                        default:
                            i = this.processDefaultSelection(s, u, o)
                    }
                }
                return this.processEventFinal(i)
            },
            processEventFinal: function(t) {
                var n = [],
                    r = new i;
                return e.forEach(t, function(e) {
                    switch (e.elType) {
                        case "point":
                            n.push(this.jessieCodeHelper.createPointFromObject(e, !0));
                            break;
                        case "line":
                        case "ray":
                        case "segment":
                        case "vector":
                            n.push(this.jessieCodeHelper.createLineFromObject(e, !0));
                            break;
                        case "circle":
                            n.push(this.jessieCodeHelper.createCircleFromObject(e, !0));
                            break;
                        case "parabola":
                            n.push(this.jessieCodeHelper.createParabolaFromObject(e, !0));
                            break;
                        case "sine":
                            n.push(this.jessieCodeHelper.createSineFromObject(e, !0));
                            break;
                        case "polygon":
                            n.push(this.jessieCodeHelper.createPolygonFromObject(e, !0))
                    }
                    e.hasLrnLabel && e.label && e.label.elType === "lrnlabel" && n.push(this.jessieCodeHelper.createLrnLabelFromObject(e.label, !0))
                }, this), r.mergeActions.apply(r, n)
            },
            processPolygonSelection: function(t, n, r) {
                var i, s, o;
                return e.forEach(t.ancestors, function(e) {
                    var n;
                    i = e, s = e.childElements, o = !0;
                    for (n in s)
                        if (s[n].id !== t.id && s[n].elType !== "segment") {
                            o = !1;
                            break
                        }
                    r = this.isDeletable(r, o, i)
                }, this), this.sortDeletionOrder(r)
            },
            processPointSelection: function(t, n, r, i) {
                var s, o, u, a, f;
                return e.forEach(n, function(l) {
                    s = l.getParents(), o = null, l.elType === "polygon" && (o = l.id), e.forEach(s, function(e) {
                        var s;
                        u = r.select(e), a = u.childElements, f = !0;
                        if (u.id !== t.id) {
                            for (s in a)
                                if (n[s] === undefined) {
                                    if (a[s].elType !== "segment" || a[s].parentPolygon === null) {
                                        f = !1;
                                        break
                                    }
                                    if (a[s].parentPolygon.id !== o) {
                                        f = !1;
                                        break
                                    }
                                }
                            i = this.isDeletable(i, f, u)
                        }
                    }, this)
                }, this), this.sortDeletionOrder(i)
            },
            processSegmentSelection: function(t, n, r) {
                var i = t.getParents(),
                    s, o, u, a;
                return t.parentPolygon !== null ? (s = n.select(t.parentPolygon.id), e.forEach(s.ancestors, function(e) {
                    var t;
                    o = e, u = o.childElements, a = !0;
                    for (t in u) {
                        if (u[t].elType !== "segment" && u[t].elType !== "polygon") {
                            a = !1;
                            break
                        }
                        if (u[t].parentPolygon === null && u[t].elType !== "polygon") {
                            a = !1;
                            break
                        }
                        if (u[t].elType !== "polygon" && u[t].parentPolygon.id !== s.id) {
                            a = !1;
                            break
                        }
                    }
                    r = this.isDeletable(r, a, o)
                }, this), this.sortDeletionOrder(r)) : this.processDefaultSelection(t, n, r)
            },
            processDefaultSelection: function(t, n, r) {
                var i = t.getParents(),
                    s, o, u;
                return e.forEach(i, function(e) {
                    var i;
                    s = n.select(e), o = s.childElements, u = !0;
                    if (s.id !== t.id) {
                        for (i in o)
                            if (o[i].id !== t.id) {
                                u = !1;
                                break
                            }
                        r = this.isDeletable(r, u, s)
                    }
                }, this), this.sortDeletionOrder(r)
            },
            isDeletable: function(t, n, r) {
                return n === !0 && e.indexOf(t, r.id) === -1 && t.push(r.id), t
            },
            sortDeletionOrder: function(t) {
                var n = [],
                    r = function(t) {
                        n.indexOf(arguments[0]) == -1 && (t.parentPolygon === undefined || t.parentPolygon === null) && n.push(t)
                    };
                for (var i = 0; i < t.length; i++) n.indexOf(this.board.select(t[i])) === -1 && n.push(this.board.select(t[i])), e.forEach(this.board.select(t[i]).childElements, r);
                return n.sort(function(e, t) {
                    return e.elType === "point" && t.elType !== "point" ? -1 : e.elType !== "point" && t.elType === "point" ? 1 : e.elType === "polygon" && t.elType !== "point" ? 1 : e.elType !== "polygon" && t.elType === "polygon" ? -1 : 0
                }), n
            }
        })
    }])
    App.factory('graphplotter.tools.label', ['graphplotter.tools.base', 'JXGExtended', function(t, n) {
        "use strict";
        return t.extend({
            counter: 1,
            processEvent: function(e, t, r) {
                var i, s;
                if (t && t.obj) {
                    i = t.obj;
                    if (i.elType === "lrnlabel") return;
                    i.elType === "segment" && i.parentPolygon && (i = i.parentPolygon), i.hasLrnLabel || (s = n.createLrnLabel(this.board, [""], {
                        anchor: i.id,
                        id: this.jessieCodeHelper.generateId()
                    }), s.graphplotterInit(r))
                }
            }
        })
    }])
    App.factory('graphplotter.toolFactory', ['graphplotter.tools.move',
        'graphplotter.tools.point',
        'graphplotter.tools.line',
        'graphplotter.tools.circle',
        'graphplotter.tools.parabola',
        'graphplotter.tools.sine',
        'graphplotter.tools.polygon',
        'graphplotter.tools.delete',
        'graphplotter.tools.label',
        '_',
        function(move_tool, point_tool, line_tool, circle_tool, parabola_tool, sine_tool, polygon_tool, delete_tool, label_tool, _ ) {
            var tool_list = {
                MOVE: "move",
                POINT: "point",
                LINE: "line",
                RAY: "ray",
                SEGMENT: "segment",
                VECTOR: "vector",
                CIRCLE: "circle",
                DELETE: "delete",
                PARABOLA: "parabola",
                SINE: "sine",
                POLYGON: "polygon",
                LABEL: "label"
            };
            return function() {
                return {
                    TOOL: tool_list,
                    MODE: {
                        all: {
                            tools: [tool_list.POINT, tool_list.LINE],
                            defaultTool: tool_list.POINT
                        },
                        point: {
                            tools: [tool_list.POINT],
                            defaultTool: tool_list.POINT
                        },
                        line: {
                            tools: [tool_list.LINE],
                            defaultTool: tool_list.LINE
                        }
                    },
                    defaultToolbar: {
                        tools: [tool_list.MOVE, tool_list.POINT, [tool_list.LINE, tool_list.RAY, tool_list.SEGMENT, tool_list.VECTOR], tool_list.CIRCLE, tool_list.PARABOLA, tool_list.SINE, tool_list.POLYGON],
                        defaultTool: tool_list.POINT
                    },
                    tools: {},
                    getToolbar: function(e, t) {
                        var n = {},
                            r = _.values(this.TOOL);

                        this.MODE[t] && !e && (n = this.MODE[t]), e && (n = {
                            tools: []
                        }, _.each(e.tools, function(e) {
                            _.isArray(e) ? n.tools.push(_.intersection(e, r)) : _.contains(r, e) && n.tools.push(e)
                        }), n.defaultTool = e.default_tool ? e.default_tool : _.flatten(n.tools)[0]);
                        if (!n || !n.tools || _.isEmpty(n.tools)) n.tools = this.defaultToolbar.tools, n.defaultTool = n.defaultTool || this.defaultToolbar.defaultTool;
                        return n
                    },
                    getTool: function(type, board, jessie, options) {
                        if (this.tools[type]) return this.tools[type];
                        options.name = type;
                        var v;
                        switch (type) {
                            case tool_list.MOVE:
                                v = new move_tool(board, jessie, options);
                                break;
                            case tool_list.POINT:
                                v = new point_tool(board, jessie, options);
                                break;
                            case tool_list.CIRCLE:
                                v = new circle_tool(board, jessie, options);
                                break;
                            case tool_list.PARABOLA:
                                v = new parabola_tool(board, jessie, options);
                                break;
                            case tool_list.SINE:
                                v = new sine_tool(board, jessie, options);
                                break;
                            case tool_list.POLYGON:
                                v = new polygon_tool(board, jessie, options);
                                break;
                            case tool_list.DELETE:
                                v = new delete_tool(board, jessie, options);
                                break;
                            case tool_list.LABEL:
                                v = new label_tool(board, jessie, options);
                                break;
                            default:
                                _.contains(line_tool.prototype.LINE_TYPE, this.TOOL.LINE) && (v = new line_tool(board, jessie, _.extend({
                                    lineType: type
                                }, options)))
                        }
                        return this.tools[type] = v, v
                    },
                    reset: function() {
                        this.tools = {}
                    }
                }
            }
        }
    ])
    App.factory('graphplotter.compositionHelper', function()
    {
        "use strict";
        var t = function(e) {
            this.board = e
        };
        return angular.extend(t.prototype, {
            extractComposition: function() {
                var t = [],
                    n = {};
                return angular.forEach(this.board.objectsList, function(e) {
                    var r;
                    if (e.dump) {
                        r = {
                            id: e.id,
                            type: e.elType
                        };
                        switch (e.elType) {
                            case "point":
                                this.extractPoint(e, r, n);
                                break;
                            case "line":
                            case "ray":
                            case "segment":
                            case "vector":
                                this.extractLine(e, r, n);
                                break;
                            case "circle":
                                this.extractCircle(e, r, n);
                                break;
                            case "parabola":
                                this.extractParabola(e, r, n);
                                break;
                            case "sine":
                                this.extractSine(e, r, n);
                                break;
                            case "polygon":
                                this.extractPolygon(e, r, n);
                                break;
                            case "lrnlabel":
                                this.extractLrnLabel(e, r, n)
                        }
                        n[r.id] = r, t.push(r)
                    }
                }, this), t
            },
            extractPoint: function(e, t, n) {
                t.coords = {
                    x: e.X(),
                    y: e.Y()
                }
            },
            extractLine: function(e, t, n) {
                t.subElementsIds = {
                    startPoint: e.point1.id,
                    endPoint: e.point2.id
                }, n[t.subElementsIds.startPoint].subElement = !0, n[t.subElementsIds.endPoint].subElement = !0
            },
            extractCircle: function(e, t, n) {
                t.subElementsIds = {
                    centrePoint: e.center.id,
                    radiusPoint: e.point2.id
                }, n[t.subElementsIds.centrePoint].subElement = !0, n[t.subElementsIds.radiusPoint].subElement = !0
            },
            extractParabola: function(e, t, n) {
                t.subElementsIds = {
                    rootPoint: e.rootPoint.id,
                    edgePoint: e.edgePoint.id
                }, n[t.subElementsIds.rootPoint].subElement = !0, n[t.subElementsIds.edgePoint].subElement = !0
            },
            extractSine: function(e, t, n) {
                t.subElementsIds = {
                    rootPoint: e.rootPoint.id,
                    edgePoint: e.edgePoint.id
                }, n[t.subElementsIds.rootPoint].subElement = !0, n[t.subElementsIds.edgePoint].subElement = !0
            },
            extractPolygon: function(e, t, n) {
                var r;
                t.subElementsIds = {};
                var i = e.vertices;
                for (r = 0; r < i.length; r++) t.subElementsIds[r] = e.vertices[r].id, n[t.subElementsIds[r]].subElement = !0
            },
            extractLrnLabel: function(e, t, n) {
                t.text = e.getText(), t.anchor = e.element.id
            }
        }), t
    })
    App.factory('browserCheck', function()
    {
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
    })
    App.factory('hiddenElementHelper', ['browserCheck', function(t) {
        "use strict";
        var e = jQuery;
        var n = function(t) {
            this.elementsDefaultStyles = [], this.$target = t, this.$target && (this.$hiddenElements = t.parents().addBack().filter(":hidden"))
        };
        return n.prototype.makeVisible = function() {
            if (this.$hiddenElements && this.$hiddenElements.length) {
                var n = this,
                    r = "; visibility: hidden !important; display: block !important; ";
                t.browser === "ie" && t.version === 8 && (r = "; visibility: collapse !important; display: block !important; "), this.$hiddenElements.each(function() {
                    var t = e(this),
                        i = t.attr("style"),
                        s = r;
                    i && (s = i + r), n.elementsDefaultStyles.push(i), t.attr("style", s)
                })
            }
        }, n.prototype.restore = function() {
            if (this.$hiddenElements && this.$hiddenElements.length) {
                var t = this;
                this.$hiddenElements.each(function(n) {
                    var r = e(this),
                        i = t.elementsDefaultStyles[n];
                    i ? r.attr("style", i) : r.removeAttr("style")
                })
            }
        }, n.prototype.makeVisibleAndDispatch = function(e, t) {
            var n = this;
            typeof e == "function" && (this.$target.is(":visible") ? e.apply() : (this.makeVisible(), e.apply(), t && t > 0 ? setTimeout(function() {
                n.restore()
            }, t) : this.restore()))
        }, n
    }])
    App.directive('plotBoard', plotBoardDirective)
    App.directive('plotCallback', plotCallbackDirective)
    App.directive('plotCreate', plotCreateDirective)
    App.directive('plotResponsive', plotResponsiveDirective);

    plotBoardController.$inject = ['JXGExtended', 'graphplotter.ToolTemplates', 'graphplotter.draggingStrategies', 'graphplotter.toolFactory', 'graphplotter.jessieCodeHelper', 'graphplotter.jxgAction',  'graphplotter.compositionHelper', 'hiddenElementHelper', '$attrs', '$scope', '$element', '$timeout', '_'];

    function plotBoardController(JXG, ToolTemplates, DraggingStrategies, ToolFactory, JessieCodeHelper, JXGAction, CompositionHelper, HiddenElementHelper, $attrs, $scope, $element, $timeout, _) {
        /* jshint validthis: true */
        angular.extend(this, {
            UI_MODE: {
                CREATE: "create",
                READ_ONLY: "readonly",
                REVIEW: "review"
            },
            SNAP_TYPE: {
                GRID: "grid",
                TICKS: "ticks"
            },
            MAX_LABEL_LENGTH: 5,
            EVENT: {
                CHANGE: "change"
            }
        });

        var p = {
            STANDARD: {
                colour: "#52a8ec",
                highlight: "#c2e0f8"
            },
            CORRECT: {
                colour: "#b0d6a0",
                highlight: "#62ae41"
            },
            CORRECT_LABEL: {
                colour: "#ebf6e7"
            },
            INCORRECT: {
                colour: "#ec8c8c",
                highlight: "#da1919"
            },
            INCORRECT_LABEL: {
                colour: "#fbe3e3"
            },
            SUGGESTED: {
                colour: "#e9e99a",
                highlight: "#e9e99a"
            },
            HIDDEN: {
                fillOpacity: 0,
                strokeOpacity: 0
            },
            TARGET: {
                colour: "#e8b323",
                highlight: "#e8b323"
            },
            PREDRAWN: {
                colour: "#aaaaaa",
                highlight: "#aaaaaa"
            }
        };

        JXG.Options = JXG.merge(JXG.Options, {
            board: {
                showCopyright: !1
            },
            point: {
                withLabel: !1,
                showInfobox: !1,
                infoboxDigits: "gridbased",
                size: 3,
                fillColor: p.STANDARD.colour,
                highlightFillColor: p.STANDARD.highlight,
                strokeWidth: 2,
                strokeColor: p.STANDARD.colour,
                highlightStrokeColor: p.STANDARD.highlight,
                highlightTargetColor: p.TARGET.colour,
                minimalProximity: 10
            },
            line: {
                firstArrow: !0,
                lastArrow: !0,
                straightFirst: !0,
                straightLast: !0,
                fillColor: "none",
                highlightFillColor: "none",
                strokeColor: p.STANDARD.colour,
                highlightStrokeColor: p.STANDARD.highlight,
                withTicks: !1
            },
            segment: {
                firstArrow: !1,
                lastArrow: !1
            },
            circle: {
                fillColor: "none",
                highlightFillColor: "none",
                strokeColor: p.STANDARD.colour,
                highlightStrokeColor: p.STANDARD.highlight
            },
            parabola: {
                fixed: !1,
                fillColor: "none",
                highlightFillColor: "none",
                strokeColor: p.STANDARD.colour,
                highlightStrokeColor: p.STANDARD.highlight,
                strokeWidth: 2
            },
            sine: {
                fixed: !1,
                fillColor: "none",
                highlightFillColor: "none",
                strokeColor: p.STANDARD.colour,
                highlightStrokeColor: p.STANDARD.highlight,
                strokeWidth: 2
            },
            polygon: {
                fixed: !1,
                fillColor: p.STANDARD.colour,
                highlightFillColor: p.STANDARD.highlight,
                fillOpacity: .3,
                highlightFillOpacity: .3,
                hasInnerPoints: !0,
                borders: {
                    strokeColor: p.STANDARD.colour,
                    highlightStrokeColor: p.STANDARD.highlight,
                    strokeWidth: 2
                }
            }
        });

        var self = this;
        //Board variables
        this.boardId = _.uniqueId('osgp_');
        this.boardOptionExp = $attrs.plotBoard;
        this.delayTimeout = null;

        $scope.isArray = angular.isArray;
        $scope.ctrlScope = $scope;

        this.removeEmptyAnnotation = function(annotation)
        {
            var annot = _.clone(annotation);
            _.each(annot, function(val, key){
                if(val == "")
                    delete annot[key];
            });
            return annot;
        };

        this.removeEmptyTools = function(tools)
        {
            var arrNewTools = [];
            _.each(tools, function(val, idx)
            {
                if(_.isArray(val))
                {
                    this.push(self.removeEmptyTools(val));
                }
                else
                {
                    if(val != "") this.push(val);
                }
            }, arrNewTools);
            return arrNewTools;
        };

        this.initialize = function() {
            this.freeBoard();

            this.defaultConfig = {
                canvas: {
                    x_min: -10,
                    x_max: 10,
                    y_min: -10,
                    y_max: 10,
                    show_hover_position: !1
                },
                show_navigation: !1,
                toolbar: {
                    controls: ["undo", "redo", "reset"]
                },
                ui_style: {
                    margin: "0",
                    width: "600px",
                    height: "600px",
                    graph_controls: "reset"
                },
                annotation: {},
                draw_zero: !1,
                display_points: !0,
                background_image: {
                    width: 100,
                    height: 100,
                    x: 0,
                    y: 0,
                    opacity: 100
                }
            };
            $scope.annotation = this.removeEmptyAnnotation(this.options.annotation);
            _.keys(_.omit($scope.annotation, "title")).length > 0 && (this.defaultConfig = $.extend(true, {}, this.defaultConfig, {
                ui_style: {
                    margin: "20px"
                }
            }));

            var e = this.options.toolbar,
                n = this.options.ui_style;

            if (e && !_.isUndefined(e.controls) || n && !_.isUndefined(n.graph_controls)) this.defaultConfig.toolbar.controls = e.controls;
            this.toolFactory = new ToolFactory;

            var opt = $.extend(true, {}, this.defaultConfig, this.options);
            this.config = opt = this.normalizeConfig(opt), this.i18n = this.options.i18n, this.uiMode = this.options.uiMode, this.graphData = this.options.graph_data;

            var i = this.getLabelOptions(opt.canvas, "x"),
                o = this.getLabelOptions(opt.canvas, "y"),
                u = this.getMaxLabelLength("x"),
                a = this.getMaxLabelLength("y");

            this.boardOptions = {
                showNavigation: opt.show_navigation,
                boundingbox: [opt.canvas.x_min, opt.canvas.y_max, opt.canvas.x_max, opt.canvas.y_min]
            };
            _.isObject(opt.grid) && (this.boardOptions.grid = {
                gridX: opt.grid.x_distance > 0 ? opt.grid.x_distance : 1,
                gridY: opt.grid.y_distance > 0 ? opt.grid.y_distance : 1
            });

            this.axis = {
                x: !1,
                y: !1
            };
            _.isObject(opt.axis_x) && (this.axis.x = {
                firstArrow: opt.axis_x.show_first_arrow,
                lastArrow: opt.axis_x.show_last_arrow,
                ticks: {
                    label: i,
                    drawZero: !_.isObject(opt.axis_y) && (opt.axis_x.draw_labels || opt.draw_zero),
                    insertTicks: !1,
                    ticksDistance: opt.axis_x.ticks_distance,
                    drawLabels: opt.axis_x.draw_labels,
                    strokeWidth: 2,
                    majorHeight: opt.axis_x.hide_ticks ? 0 : 8,
                    minorHeight: 0,
                    maxLabelLength: u,
                    precision: u
                }
            }, opt.axis_x.show_axis_label === !0 && !_.isEmpty(opt.axis_x.axis_label) && (this.axis.x.label = {
                strokeColor: "black",
                highlightStrokeColor: "black",
                position: "rt",
                offset: [7, 7],
                anchorY: "bottom",
                anchorX: "right"
            }, this.axis.x.name = opt.axis_x.axis_label, this.axis.x.withLabel = !0)), _.isObject(opt.axis_y) && (this.axis.y = {
                firstArrow: opt.axis_y.show_first_arrow,
                lastArrow: opt.axis_y.show_last_arrow,
                ticks: {
                    label: o,
                    drawZero: !_.isObject(opt.axis_x) && (opt.axis_y.draw_labels || opt.draw_zero),
                    insertTicks: !1,
                    ticksDistance: opt.axis_y.ticks_distance,
                    drawLabels: opt.axis_y.draw_labels,
                    strokeWidth: 2,
                    majorHeight: opt.axis_y.hide_ticks ? 0 : 8,
                    minorHeight: 0,
                    maxLabelLength: a,
                    precision: a
                }
            }, opt.axis_y.show_axis_label === !0 && !_.isEmpty(opt.axis_y.axis_label) && (this.axis.y.label = {
                strokeColor: "black",
                highlightStrokeColor: "black",
                position: "rt",
                offset: [10, 10],
                anchorY: "top",
                anchorX: "left"
            }, this.axis.y.name = opt.axis_y.axis_label, this.axis.y.withLabel = !0)),
                this.actions = [],
                this.actionIndex = -1,
                this.toolOptions = {},
                _.isUndefined(opt.canvas.snap_to) ? this.toolOptions.snapPoints = !1 : (this.toolOptions.snapPoints = !0,
                _.isNumber(opt.canvas.snap_to) ? (this.toolOptions.snapSizeX = opt.canvas.snap_to,
                this.toolOptions.snapSizeY = opt.canvas.snap_to) : opt.canvas.snap_to === this.SNAP_TYPE.GRID && _.isObject(opt.grid) ? (this.toolOptions.snapSizeX = opt.grid.x_distance,
                this.toolOptions.snapSizeY = opt.grid.y_distance) : (this.toolOptions.snapSizeX = _.isObject(opt.axis_x) && _.isNumber(opt.axis_x.ticks_distance) ? opt.axis_x.ticks_distance : 1,
                this.toolOptions.snapSizeY = _.isObject(opt.axis_y) && _.isNumber(opt.axis_y.ticks_distance) ? opt.axis_y.ticks_distance : 1)),
                this.toolOptions.showInfobox = opt.canvas && opt.canvas.show_hover_position;

            var toolbar = self.toolFactory.getToolbar(opt.toolbar, opt.mode);
            this.defaultTool = toolbar.defaultTool;

            $scope.tools = this.removeEmptyTools(toolbar.tools);
            $scope.currentTool = "";
            $scope.controls = [];

            var l = opt.toolbar.controls,
                c = opt.ui_style.graph_controls;
            _.isArray(l) ? $scope.controls = l : c == "reset" ? $scope.controls = ["undo", "redo", "reset"] : $scope.controls = ["undo", "delete"];

            this.mouseDownPosition = null;
            this.mouseUpPosition = null;
            this.mouseDownEvents = 0;
            //this.hiddenElementHelper = new HiddenElementHelper(this.$el),
            //this.hiddenElementHelper.makeVisibleAndDispatch(_.bind(this.render, this)),
            //this.initialBoardObjectsListLastIndex = _.size(this.board.objectsList) - 1
        };
        this.getHeight = function() {
            return parseInt(this.config.ui_style.height)
        };

        this.getWidth = function() {
            return parseInt(this.config.ui_style.width)
        };
        this.normalizeConfig = function(cfg) {
            return _.isObject(cfg) && (_.isUndefined(cfg.grid) || (_.isNumber(cfg.grid.x_distance) || (cfg.grid.x_distance = parseFloat(cfg.grid.x_distance)), _.isNumber(cfg.grid.y_distance) || (cfg.grid.y_distance = parseFloat(cfg.grid.y_distance)))), cfg
        };

        this.getMaxLabelLength = function(e) {
            var n = [],
                r = 0,
                i = "" + this.config.canvas.x_max,
                s = "" + this.config.canvas.x_min,
                o = "" + this.config.canvas.y_max,
                u = "" + this.config.canvas.y_min;
            return e === "y" ? n = [o.length, u.length] : e === "x" && (n = [i.length, s.length]), r = _.max(n), r > this.MAX_LABEL_LENGTH ? r : this.MAX_LABEL_LENGTH
        };

        this.render = function() {
            var elGraph = $element.find('.os-graph');
            elGraph.attr('id', self.boardId);
            elGraph.width(this.config.ui_style.width);
            elGraph.height(this.config.ui_style.height);

            this.template();
            this.createBoard();
            this.jessieCodeHelper = new JessieCodeHelper(this.board);
            this.compositionHelper = new CompositionHelper(this.board);
            this.renderBackgroundShapes();
            JXG.Dump.addMarkers(this.board, "dump", !1);
            $scope.currentTool = this.defaultTool;

            !_.isUndefined($scope.ngModel) && this.renderGraphData($scope.ngModel);
        };

        this.getNumberWithComma = function(e) {
            var t = e.toString().split(".");
            return t[0] = t[0].replace(/\B(?=(\d{3})+(?!\d))/g, ","), t.join(".")
        };

        this.insertLabelsComma = function(){
            var callback = function(tick) {
                angular.forEach(tick.labels, function(label) {
                    label && label.setText(this.getNumberWithComma(label.plaintext))
                }, this)
            };
            angular.isObject(this.config.axis_x) && this.config.axis_x.comma_in_label && angular.forEach(this.board.defaultAxes.x.ticks, callback, this), angular.isObject(this.config.axis_y) && this.config.axis_y.comma_in_label && angular.forEach(this.board.defaultAxes.y.ticks, callback, this);
        };

        this.createBoard = function(){
            this.board = JXG.JSXGraph.initBoard(this.boardId, this.boardOptions);
            this.drawBackgroundImage();
            this.board.defaultAxes = {};
            if(this.axis.x) {
                this.board.defaultAxes.x = this.board.create("axis", [
                    [0, 0],
                    [1, 0]
                ], this.axis.x);
            }
            if(this.axis.y) {
                this.board.defaultAxes.y = this.board.create("axis", [
                    [0, 0],
                    [0, 1]
                ], this.axis.y);
            }
            this.insertLabelsComma();
            this.drawZero();
            if(this.uiMode === this.UI_MODE.CREATE)
            {
                this.bindBoardEvents();
            }
            else
            {
                this.board.removeEventHandlers();
                if(this.uiMode === this.UI_MODE.READ_ONLY)
                {
                    $scope.disable_toolbar = true;
                }
            }
        };
        this.drawBackgroundImage = function() {
            if (!_.isObject(this.config.background_image) || !_.isString(this.config.background_image.src) || this.config.background_image.src.length === 0) return;
            var e = this.board.getBoundingBox(),
                n = e[2] - e[0],
                r = e[1] - e[3],
                i = 0,
                s = 0,
                o = 1;
            _.isNumber(this.config.background_image.width) && this.config.background_image.width > 0 && (n = n * this.config.background_image.width / 100);
            _.isNumber(this.config.background_image.height) && this.config.background_image.height > 0 && (r = r * this.config.background_image.height / 100);
            _.isNumber(this.config.background_image.x) && (i = this.config.background_image.x - n / 2);
            _.isNumber(this.config.background_image.y) && (s = this.config.background_image.y - r / 2);
            _.isNumber(this.config.background_image.opacity) && (o = this.config.background_image.opacity / 100);
            var u = this.board.create("image", [this.config.background_image.src, [i, s],
                [n, r]
            ], {
                opacity: o
            });
            u.setAttribute({
                fixed: !0
            })
        };

        this.drawZero = function() {
            var e = null,
                n = 40,
                r = 200,
                i = this.config.canvas.x_max - this.config.canvas.x_min,
                s = this.config.canvas.y_max - this.config.canvas.y_min;
            angular.isObject(this.config.axis_y) && angular.isObject(this.config.axis_x) && (this.config.axis_x.draw_labels || this.config.axis_y.draw_labels || this.config.draw_zero) ? e = {
                x: -(i / n),
                y: -(s / n)
            } : this.config.draw_zero && (t.isObject(this.config.axis_y) && !this.config.axis_y.draw_labels ? e = {
                x: -(i / n),
                y: -(s / r)
            } : t.isObject(this.config.axis_x) && !this.config.axis_x.draw_labels && (e = {
                x: -(i / r),
                y: -(s / n)
            }));
            if (e) {
                var elText = this.board.create("text", [e.x, e.y, "0"], {
                    anchorX: "left",
                    anchorY: "middle",
                    strokeColor: "black",
                    highlightStrokeColor: "black"
                });
                elText.isDraggable = !1
            }
        };

        this.renderBackgroundShapes = function() {
            if (!_.isArray(this.config.background_shapes) || this.config.background_shapes.length === 0) return;
            this.board.suspendUpdate(), JXG.Dump.addMarkers(this.board, "ignoreColouring", !0);
            var e = this.jessieCodeHelper.getJsxgActionsFromComposition(this.config.background_shapes, this.toolOptions);
            _.each(e, function(val) {
                this.board.jc.parse(val.action)
            }, this);
            var board = this.board;
            this.config.display_points || _.each(this.config.background_shapes, function(val) {
                val.subElement && val.type == "point" && board.select({
                    id: val.id
                }).setAttribute({
                    visible: !1
                })
            }), _.each(this.board.objects, function(val) {
                if (val.elType === "lrnlabel") val.enableBackgroundShape();
                else {
                    if (val.ignoreColouring) return;
                    val.setAttribute({
                        fixed: !0
                    }), val.getAttribute("strokeColor") !== "none" && val.setAttribute({
                        strokeColor: p.PREDRAWN.colour,
                        highlightStrokeColor: p.PREDRAWN.highlight
                    }), val.getAttribute("fillColor") !== "none" && val.setAttribute({
                        fillColor: p.PREDRAWN.colour,
                        highlightFillColor: p.PREDRAWN.highlight
                    })
                }
            }), JXG.Dump.deleteMarkers(this.board, "ignoreColouring"), this.board.unsuspendUpdate()
        };

        this.getLabelOptions = function(opt, key) {
            var n = null,
                r = function(e) {
                    return Math.log(e) / Math.LN10
                },
                i = {
                    strokeColor: "black",
                    highlightStrokeColor: "black",
                    anchorX: "right"
                };
            return key === "x" ? (i.offset = [3, -15], n = Math.floor(r(opt.x_max)), n > 0 && (i.offset[0] = 5 + (n - 1) * 4), opt.y_min === 0 && (i.offset[1] = 10)) : key === "y" && (i.offset = [-8, -2], opt.x_min === 0 && (i.offset[0] = 20)), i
        };
        this.getTool = function(e) {
            return !_.isUndefined(this.toolFactory) && this.toolFactory.getTool(e, this.board, this.jessieCodeHelper, this.toolOptions);
        };
        this.resetActiveTool = function() {
            this.currentTool && this.currentTool.reset(this.getGraphPlotterInterface())
        };

        this.changeTool = function(e) {
            this.resetActiveTool();

            $scope.currentTool = e;
            this.currentTool = this.getTool(e);
        };
        this.undo = function() {
            this.currentTool && !this.currentTool.isIdle() ? this.currentTool.reset(this.getGraphPlotterInterface()) : (this.resetActiveTool(), this.board.jc.parse(this.actions[this.actionIndex].undo), this.passGraphplotterInterface(this.actions[this.actionIndex]), this.decrementActionIndex(), this.uiMode == this.UI_MODE.CREATE);
            this.updateToolbox();

        };
        this.redo = function() {
            this.resetActiveTool(), this.incrementActionIndex(), this.board.jc.parse(this.actions[this.actionIndex].action), this.uiMode == this.UI_MODE.CREATE , this.passGraphplotterInterface(this.actions[this.actionIndex])
            this.updateToolbox();
        };
        this.passGraphplotterInterface = function(e) {
            var t, n = this.getLabels();
            for (t in n) n[t].graphplotterInit(this.getGraphPlotterInterface());
        };

        this.getLabels = function() {
            var e = this.board.select({
                elType: "lrnlabel"
            });
            return _.isObject(e.elements) ? e.elements : {}
        };

        this.blockLabels = function(e) {
            var n, r = this.getLabels();
            _.each(r, function(t, n) {
                if (e && n.indexOf(e) === -1) return;
                t.blockInteractions()
            })
        };

        this.unblockLabels = function() {
            var e, t = this.getLabels();
            for (e in t) t[e].unblockInteractions();
        };

        this.reset = function() {
            if (this.currentTool && !this.currentTool.isIdle()) this.currentTool.reset(this.getGraphPlotterInterface());
            else {
                while (this.actionIndex > -1) this.undo();
                this.changeTool(this.defaultTool), this.uiMode == this.UI_MODE.CREATE && (this.updateToolbox())
            }
        };

        this.replay = function(e) {
            this.replayTimeoutId && (clearTimeout(this.replayTimeoutId),
                this.replayTimeoutId = null),
            this.replayIntervalId && (clearInterval(this.replayIntervalId),
                this.replayIntervalId = null),
                this.reset(),
                this.replayTimeoutId = setTimeout(function() {
                    self.redo(), t.replayIntervalId = setInterval(function() {
                        t.actionIndex < t.actions.length - 1 ? t.redo() : (clearInterval(t.replayIntervalId), t.replayIntervalId = null)
                    }, 500)
                });
        };
        this.clearBoardEvents = function() {
            this.board.off("up")
        };

        this.bindBoardEvents = function() {
            console.log('Bind board events');
            this.board.on("down", this.boardDownEvent, this), this.board.on("up", this.boardUpEvent, this), this.board.on("move", this.boardMoveEvent, this)
        };
        this.isDraggingElement = function(element) {
            if (this.board.mode == this.board.BOARD_MODE_DRAG) {
                var point = this.getCurrentPointer(element);
                return point;
                //Xprev works for only primitives, and NaN for vertices.
                //return point && !isNaN(point.targets[0].Xprev)
            }
            return !1
        };

        this.isMouseClick = function(event) {
            var t = this.getCoordinatesFromEvent(event);
            return this.mouseDownPosition && Math.abs(t.x - this.mouseDownPosition.x) < 5 && Math.abs(t.y - this.mouseDownPosition.y) < 5
        };

        this.getCurrentPointer = function(event) {
            return this.board.touches.length > 0 ? this.board.touches[0] : this.board.mouse
        };

        this.shouldDisablePointMovement = function(event) {
            var arrElement = this.getBoardElementsProximity(event.coords, JXG.OBJECT_TYPE_POINT),
                fIdx = _.find(arrElement, function(val, idx) {
                    if (idx !== event.id && val < JXG.Options.point.minimalProximity) return !0
                });
            return !_.isUndefined(fIdx)
        };
        this.getBoardElementsProximity = function(e, n) {
            var result = {},
                objList = this.board.objectsList;
            return angular.forEach(objList, function(val, idx) {
                if (idx <= this.initialBoardObjectsListLastIndex || n && n !== val.type) return !1;
                result[val.id] = this.getCoordsDistance(e, {
                    x: val.coords.scrCoords[1],
                    y: val.coords.scrCoords[2]
                })
            }, this), result
        };

        this.getCoordsDistance = function(e, n) {
            if (_.has(e, "x") && _.has(e, "y") && _.has(n, "x") && _.has(n, "y")) return Math.sqrt(Math.pow(e.x - n.x, 2) + Math.pow(e.y - n.y, 2))
        };

        this.getScrCoordsByObject = function(e) {
            if (e && _.has(e, "coords") && _.has(e.coords, "scrCoords") && _.size(e.coords.scrCoords) === 3) return {
                x: e.coords.scrCoords[1],
                y: e.coords.scrCoords[2]
            }
        };

        this.boardMoveEvent = function(event) {
            var pointer = this.getCurrentPointer(event);
            if (this.currentTool && !this.currentTool.isIdle() && pointer && pointer.obj && pointer.obj.type === r.OBJECT_TYPE_POINT) {
                var n = {
                    id: pointer.obj.id,
                    coords: this.getScrCoordsByObject(pointer.obj)
                };
                this.lastValidObjectCoord && this.shouldDisablePointMovement(n) ? this.board.moveObject(this.lastValidObjectCoord[0], this.lastValidObjectCoord[1], pointer, event, "mouse") : this.lastValidObjectCoord = this.board.getMousePosition(event)
            }
        };

        this.boardDownEvent = function(event) {
            this.mouseDownEvents++;
            var coord = this.getCoordinatesFromEvent(event);
            this.mouseDownPosition === null ? this.mouseDownPosition = coord : coord.y < this.mouseDownPosition.y && (this.mouseDownPosition = coord)
        };

        this.boardUpEvent = function(event) {
            if (this.mouseDownEvents > 1) {
                if (this.mouseUpPosition === null) this.mouseUpPosition = this.getCoordinatesFromEvent(event);
                else {
                    var n = this.getCoordinatesFromEvent(event);
                    n.y < this.mouseUpPosition.y && (this.mouseUpPosition = n, this.mouseUpEvent = event)
                }
                this.mouseDownEvents--
            } else {
                event = this.mouseUpEvent || event;
                var pointer = this.getCurrentPointer(event);
                if (this.isDraggingElement(event)) {
                    if (!pointer.obj.lrnAuxiliary) {
                        console.log("Dragging element");
                        var strategy = DraggingStrategies[pointer.obj.type];
                        _.isFunction(strategy) && this.newAction(strategy(pointer, this.jessieCodeHelper, this.toolOptions), !0)
                    }
                    if(this.currentTool.name == "delete")
                    {
                        var o = this.currentTool.processEvent(event, pointer, this.getGraphPlotterInterface());
                        o && this.newAction(o);
                    }
                } else if (this.isMouseClick(event)) {
                    console.log("Clicked mouse");
                    var o = this.currentTool.processEvent(event, pointer, this.getGraphPlotterInterface());
                    o && this.newAction(o);
                }
                this.mouseDownPosition = null, this.mouseUpPosition = null, this.mouseDownEvents = 0
            }
        };

        this.getGraphPlotterInterface = function() {
            return this.graphPlotterInterface || (this.graphPlotterInterface = {
                newActionHandler: _.bind(this.newAction, this),
                jessieCodeHelper: this.jessieCodeHelper,
                processEvent: _.bind(function(e, t) {
                    var n;
                    this.currentTool && (n = this.currentTool.processEvent(e, t, this.getGraphPlotterInterface()), n && this.newAction(n))
                }, this),
                getCurrentTool: _.bind(function() {
                    if (this.currentTool && this.currentTool.name) return this.currentTool.name
                }, this),
                updateToolbox: _.bind(this.updateToolbox, this)
            }), this.graphPlotterInterface;
        };

        this.getCoordinatesFromEvent = function(event) {
            var result = {
                x: 0,
                y: 0
            };
            event.changedTouches && (event = event.changedTouches[0]);
            if (event.pageX || event.pageY) result.x = event.pageX, result.y = event.pageY;
            else if (event.clientX || event.clientY) result.x = event.clientX, result.y = event.clientY;
            return result;
        };

        this.getBoardElements = function() {
            return this.compositionHelper.extractComposition();
        };

        this.setBoardElementsAndCreateActions = function(e) {
            var n = this.jessieCodeHelper.getJsxgActionsFromComposition(e, this.toolOptions);
            t.each(n, function(e) {
                this.newAction(e, !1, !0)
            }, this)
        };
        this.setBoardElementsWithColours = function(e, n, r) {
            var i = this.jessieCodeHelper.getJsxgActionsFromComposition(e, this.toolOptions);
            _.each(i, function(e) {
                this.board.jc.parse(e.action)
            }, this), _.each(e, function(e) {
                this.colourBoardElement(e.id, n);
                if (!r) {
                    var t = this.board.select(e.id);
                    t.dump = !1, t.isDraggable = !1
                }
            }, this)
        };

        this.setLabelIndex = function(e, t) {
            var n = this.board.select(e);
            n && n.elType === "lrnlabel" && n.setIndex(t)
        };

        this.removeLabelIndex = function(e) {
            var t = this.board.select(e);
            t && t.elType === "lrnlabel" && t.removeIndex()
        };

        this.colourBoardElement = function(e, t) {
            var n = this.board.select(e);
            switch (n.elType) {
                case "point":
                    n.setAttribute({
                        fillColor: t.colour,
                        strokeColor: t.colour,
                        highlightFillColor: t.highlight,
                        highlightStrokeColor: t.highlight
                    });
                    break;
                case "line":
                case "ray":
                case "segment":
                case "vector":
                case "circle":
                case "parabola":
                case "sine":
                    n.setAttribute({
                        strokeColor: t.colour,
                        highlightStrokeColor: t.highlight
                    });
                    break;
                case "polygon":
                    var r, i;
                    n.setAttribute({
                        fillColor: t.colour,
                        highlightFillColor: t.highlight
                    });
                    for (r in n.borders) n.borders.hasOwnProperty(r) && (i = n.borders[r], i.setAttribute({
                        strokeColor: t.colour,
                        highlightStrokeColor: t.highlight
                    }));
                    break;
                case "lrnlabel":
                    t === this.COLOURS.STANDARD ? (n.setBackgroundColor(), n.setCorrectnessIcon()) : t === this.COLOURS.CORRECT ? (n.setCorrectnessIcon(!0), n.setBackgroundColor(this.COLOURS.CORRECT_LABEL.colour)) : t === this.COLOURS.INCORRECT ? (n.setCorrectnessIcon(!1), n.setBackgroundColor(this.COLOURS.INCORRECT_LABEL.colour)) : n.setBackgroundColor(t.colour)
            }
            t === this.COLOURS.HIDDEN && n.setAttribute(t)
        };

        this.removeBoardElement = function(e) {
            this.board.removeObject(e)
        };


        this.template = function ()
        {
            $scope.toolsTemplate = [];
            angular.forEach($scope.tools, function(val, idx) {
                if(!angular.isArray(val))
                    $scope.toolsTemplate.push(ToolTemplates.plot_tools_data[val]);
                else
                {
                    var obj = {};
                    angular.forEach(val, function(val, idx){
                        this[val] = ToolTemplates.plot_tools_data[val];
                    }, obj);
                    console.log(obj);
                    $scope.toolsTemplate.push(obj);
                }

            });
            $scope.controlTemplate = ToolTemplates.graph_controls_data;
            $scope.controlStatus = {
                'redo' : false,
                'undo' : false,
                'reset' : false,
                'delete' : false
            };
            $scope.displayLogic = {
                showTitle: !_.isUndefined($scope.annotation.title),
                showLabelTop: !_.isUndefined($scope.annotation.label_top),
                showLabelLeft: !_.isUndefined($scope.annotation.label_left),
                showLabelRight: !_.isUndefined($scope.annotation.label_right),
                showLabelBottom: !_.isUndefined($scope.annotation.label_bottom)
            };
            $scope.config = this.config;
        };

        this.getActions = function(){
            return this.actions.slice(0, this.actionIndex + 1)
        };

        this.setActionsAndUndos = function(e, t) {
            var n = this.jessieCodeHelper.updateActionsUndos(e, t);
            for (var r = 0; r < e.length; r++) this.newAction(new u(n.actions[r], n.undos[r]), !1, !0)
        };

        this.newAction = function(e, t, n) {
            var r;
            this.actionIndex !== this.actions.length - 1 && (this.actions = this.actions.slice(0, this.actionIndex + 1)),
                this.actions.push(e),
            t || this.board.jc.parse(e.action),
                this.incrementActionIndex(),
                this.passGraphplotterInterface(e);
            !_.isUndefined($scope.ngModel) && this.updateGraphData();
        };

        this.incrementActionIndex = function() {
            this.actionIndex += 1, this.updateToolbox();
        },
        this.decrementActionIndex = function() {
            this.actionIndex -= 1, this.updateToolbox();
        };

        this.updateToolbox = function() {
            console.log('update tool box');
            setTimeout(function() {
                $scope.$apply(
                    function () {
                        if (self.actionIndex >= 0)
                            _.each($scope.controlStatus, function (val, key) {
                                this[key] = true
                            }, $scope.controlStatus);
                        else
                            _.each($scope.controlStatus, function (val, key) {
                                this[key] = false
                            }, $scope.controlStatus);

                        self.actionIndex < self.actions.length - 1 ? $scope.controlStatus['redo'] = true : $scope.controlStatus['redo'] = false;
                        self.currentTool && !self.currentTool.isIdle() && ($scope.controlStatus['undo'] = true, $scope.controlStatus['reset'] = true);
                        console.log($scope.controlStatus);
                    }
                );
            }, 1);
        };
        this.setDisabled = function(e) {
            e ? this.board.removeEventHandlers() : this.board.addEventHandlers();
        };

        this.renderGraphData = function(data)
        {
            if(_.isUndefined(data.actions) || data.actions.length == 0)
                return;

            for(var i = 0; i <= data.actionIndex; i++) {
                this.board.jc.parse(data.actions[i].action);
            }
            this.actions = data.actions;
            this.actionIndex = data.actionIndex;
            this.updateToolbox();
        };

        this.freeBoard = function() {
            if( this.board )
            {
                JXG.JSXGraph.freeBoard(this.board);
                this.board = null;
            }
        };

        this.updateGraphData = function()
        {
            var self = this;
            setTimeout(function()
            {
                $scope.$apply(
                    function()
                    {
                        $scope.ngModel.composition = self.getBoardElements();
                        $scope.ngModel.actions = self.actions;
                        $scope.ngModel.actionIndex = self.actionIndex;
                    }
                )
            }, 1);
        };

        $scope.runGraphAction = function (action) {
            if(action == "undo")
            {
                self.undo();
            }
            else if(action == "redo")
            {
                self.redo();
            }
            else if(action == "reset")
            {
                self.reset();
            }
            else if(action == "replay")
            {
                self.replay();
            }
        };


        // Watch board options from directive expression
        $scope.$parent.$watch(this.boardOptionExp, function(newVal, oldVal)
        {
            self.options = newVal;
            self.initialize();
            if(self.delayTimeout == null)
                self.delayTimeout = $timeout(function() {
                    self.render();
                    self.delayTimeout = null;
                }, 1000);
        }, true);

        //Watch changes on current active tool
        $scope.$watch('currentTool', function(newVal, oldVal)
        {
            self.currentTool = self.getTool(newVal);
        });

    }

    plotBoardDirective.$inject = [];

    function plotBoardDirective() {

        var directive = {
            restrict: 'A',
            controller: plotBoardController,
            template: '<div class = "os-graph-title" ng-if="displayLogic.showTitle">{{annotation.title}}</div>' +
                    '<div class = "os-graph-toolbar">' +
                        '<div class = "btn-group os-btn-group-break"> ' +
                            '<span ng-repeat-start = "obj in tools track by $index"> ' +
                            '</span> ' +
                            '<button class = "btn btn-default" ng-if = "!isArray(obj)" btn-radio = "\'{{obj}}\'" ng-model = "ctrlScope.currentTool" ng-bind-html = "toolsTemplate[$index]"></button> ' +
                            '<div class = "btn-group" ng-if = "isArray(obj)" btn-dropdown = "toolsTemplate[$index]" ng-model = "ctrlScope.currentTool"></div> ' +
                            '<span ng-repeat-end> ' +
                            '</span> ' +
                        '</div> ' +
                        '<div class = "btn-group os-btn-group-break os-fieldset-right"> ' +
                            '<span ng-repeat-start = "obj in controls track by $index"> ' +
                            '</span> ' +
                            '<button class = "btn btn-default" ng-if="obj != \'delete\'" ng-bind-html = "controlTemplate[obj].html" ng-click="runGraphAction(obj)" ng-disabled = "!ctrlScope.controlStatus[obj]"></button> ' +
                            '<button class = "btn btn-default" ng-if="obj == \'delete\'" ng-bind-html = "controlTemplate[obj].html" ng-disabled = "!ctrlScope.controlStatus[obj]" btn-radio="\'delete\'" ng-model = "ctrlScope.currentTool"></button>' +
                            '<span ng-repeat-end> ' +
                            '</span> ' +
                        '</div> ' +
                    '</div>' +
                    '<div class = "os-graph-wrapper">' +
                        '<div class = "os-graph-label os-graph-label-top" ng-if="displayLogic.showLabelTop" ng-style = "{height: config.ui_style.margin, \'line-height\': config.ui_style.margin}">' +
                            '{{annotation.label_top}}' +
                        '</div>' +
                        '<div class = "os-graph-label os-graph-label-left" ng-if="displayLogic.showLabelLeft" ng-style = "{height: config.ui_style.margin, \'line-height\': config.ui_style.margin}">' +
                            '{{annotation.label_left}}' +
                        '</div>' +
                        '<div class = "os-graph-label os-graph-label-right" ng-if="displayLogic.showLabelRight" ng-style = "{height: config.ui_style.margin, \'line-height\': config.ui_style.margin}">' +
                            '{{annotation.label_right}}' +
                        '</div>' +
                        '<div class = "os-graph-label os-graph-label-bottom" ng-if="displayLogic.showLabelBottom" ng-style = "{height: config.ui_style.margin, \'line-height\': config.ui_style.margin}">' +
                            '{{annotation.label_bottom}}' +
                        '</div>' +
                        '<div class = "os-graph" ng-style = "{margin: config.ui_style.margin}">' +
                        '</div>' +
                    '</div>',
            transclude: true,
            scope: {
                'ngModel' : '='
            }
        };

        return directive;

    /////////////
    }

    function plotCallbackDirective() {
        var directive = {
          restrict: 'A',
          require: 'plotBoard',
          link: link
        };

        return directive;

        ////////////

        function link(scope, element, attrs, ctrl) {
          var board = ctrl.board;
          var callback = scope.$eval(attrs.plotCallback);
          callback(board);
        }
    }

    function plotCreateDirective() {
        var directive = {
            restrict: 'A',
            require: 'plotBoard',
            link: link
        };

        return directive;

        ////////////

        function link(scope, element, attrs, ctrl) {
          var board = ctrl.board;
          var elements = scope.$eval(attrs.plotCreate);

          for (var i = 0; i < elements.length; ++i) {
            board.create.apply(board, elements[i]);
          }
        }
    }

    // plot-responsive directive based on:
    // jsxgraph.uni-bayreuth.de/~michael/jsxgui/Examples/groups/responsive-Sf2Q63-w9Y4.html

    plotResponsiveDirective.$inject = ['$window'];

    function plotResponsiveDirective($window) {
        var window = angular.element($window);

        var directive = {
            restrict: 'A',
            require: 'plotBoard',
            link: link
        };

        return directive;

        ////////////////

        function link(scope, element, attrs, ctrl) {
            var board = ctrl.board;
            var resize = function() {
                var container = board.containerObj;
                board.resizeContainer(container.clientWidth, container.clientHeight, true);
                board.fullUpdate();
            };

            window.on('resize', resize);

            scope.$on('$destroy', function() {
                window.off('resize', resize);
            });
        }
    }
})();
