/**
 * Created by Vernal Liu on 1/9/2016.
 */
App.factory("scoring.graphplottingScoring", ["_", "scoring.commonScoring", function(_, commonScoring) {
    "use strict";

    function scoreEngine(e) {
        var n, r;
        this.isValid = function() {
            return r.isValid
        }, this.score = function() {
            return r.score
        }, this.maxScore = function() {
            return r.maxScore
        }, this.validateIndividualResponses = function() {
            return r.responsesValid
        }, this.error = function() {
            return r.error
        }, this.suggestedResponses = function() {
            return r.suggestedResponses
        }, this.responseToValidResponseMapping = function() {
            return r.responseToValidResponseMapping
        }, this.correctSuggestedResponseItem = function() {
            return r.correctSuggestedResponseItem
        }, this.reset = function(e) {
            //var i = JSON.stringify(e);
            //if (n !== i) {
            //    try {
            //        r = a(JSON.parse(JSON.stringify(e))), t.normalizeScores(r, e);
            //    } catch (s) {
            //        r = {
            //            error: s
            //        };
            //    }
            //    n = i;
            //}
            //return this;
            try {
                r = prepareScores(e), commonScoring.normalizeScores(r, e)
            } catch (s) {
                r = {
                    error: s
                }
            }
            return this;
        }, this.reset(e);
    };
    function prepareScores(r) {
        var validation = r.validation,
            valid_responses = [],
            graph_data = {
                composition: []
            };
        r.response || (r.response = {
            value: graph_data
        }), r.response.value || (r.response.value = graph_data);
        if (!r.validation) return {};
        if (validation && validation.scoring_type) {
            if (!_.contains(scoring_types, validation.scoring_type)) throw new commonScoring.InvalidScoringTypeException(r.type, validation.scoring_type);
            return validation.valid_response && valid_responses.push(validation.valid_response), validation.alt_response && (valid_responses = valid_responses.concat(validation.alt_response)), calcTotalScore(r, valid_responses)
        }
        return r = commonScoring.normalizeParameters(r), calcMainScore(r)
    };
    function calcTotalScore(t, n) {
        var s = t.response.value.composition,
            o = t.validation,
            u = Math.abs(_.isNumber(o.penalty) ? o.penalty : r),
            a = {}, f = {
                validCount: -1,
                allCorrect: !1,
                validatedResponses: {},
                suggestedResponses: []
            }, l = {}, d = {}, v, m, g, y, b;
        return _.each(s, function(e) {
            a[e.id] = e
        }), _.each(n, function(t, n) {
            var r = Math.abs(_.isNumber(t.score) ? t.score : i),
                o = t.value.composition,
                u = {}, g = {
                    allCorrect: !0,
                    validCount: 0,
                    validatedResponses: {},
                    suggestedResponses: []
                };
            _.each(o, function(e) {
                u[e.id] = e
            }), _.each(o, function(t) {
                if (t.subElement) return;
                var n = !1,
                    r;
                for (var i = 0; i < s.length && !n; i++) r = s[i], !r.subElement && !g.validatedResponses[r.id] && compareElement(t, r, u, a) && (n = r, l[r.id] = t.id);
                n === !1 ? (g.allCorrect = !1, h(g.suggestedResponses, t, u)) : (g.validCount += 1, _.each(p(n, a), function(e) {
                    g.validatedResponses[e] = !0
                }), _.each(p(t, u), function(e) {
                    d[e] = u[e]
                }))
            });
            if (_.size(l)) {
                var w = !1,
                    E;
                _.each(o, function(e) {
                    for (var t = 0; t < s.length && !w; t++) E = s[t], E.subElement && compareElement(e, E, u, a) && (l[E.id] = e.id)
                })
            }
            _.each(s, function(t) {
                t.subElement || g.validatedResponses[t.id] || (g.allCorrect = !1, _.each(p(t, a), function(e) {
                    g.validatedResponses[e] = !1
                }))
            });
            if (_.isUndefined(m) || g.validCount * r > m.validCount * r) v = g;
            g.allCorrect && (_.isUndefined(b) || r > b) && (f = g, b = r);
            if (_.isUndefined(y) || r > y) y = r;
            m = g
        }), _.isUndefined(b) && v && (f = v), s.length && (g = f.allCorrect, _.isUndefined(b) && (b = -u)), {
            isValid: g,
            score: b,
            maxScore: y,
            responsesValid: f.validatedResponses,
            suggestedResponses: f.suggestedResponses,
            responseToValidResponseMapping: l,
            correctSuggestedResponseItem: d
        }
    };
    function calcMainScore(t) {
        console.log(t);
        var n = t.response.value.composition || [],
            s = t.validation,
            o = Math.abs(_.isNumber(s.penalty_score) ? s.penalty_score : r),
            u = Math.abs(_.isNumber(s.valid_score) ? s.valid_score : i),
            a = s.valid_response || [],
            f = {}, l = {
                validCount: -1,
                numResponses: 0,
                allCorrect: !1,
                validatedResponses: {},
                suggestedResponses: []
            }, d, v;
        return _.each(n, function(e) {
            f[e.id] = e
        }), _.each(a, function(t) {
            var r = {}, i = {
                allCorrect: !0,
                validCount: 0,
                numResponses: _.size(t),
                validatedResponses: {},
                suggestedResponses: []
            };
            _.each(t, function(e) {
                r[e.id] = e
            }), _.each(t, function(t) {
                if (t.subElement) return;
                var s = !1,
                    o;
                for (var u = 0; u < n.length && !s; u++) o = n[u], !o.subElement && compareElement(t, o, r, f) && (s = o);
                s === !1 ? (i.allCorrect = !1, h(i.suggestedResponses, t, r)) : (i.validCount += 1, _.each(p(s, f), function(e) {
                    i.validatedResponses[e] = !0
                }))
            }), _.each(n, function(t) {
                t.subElement || i.validatedResponses[t.id] || (i.allCorrect = !1, _.each(p(t, f), function(e) {
                    i.validatedResponses[e] = !1
                }))
            }), i.validCount / i.numResponses > l.validCount / l.numResponses && (l = i, i.allCorrect && (v = u))
        }), n.length && (v = _.isNumber(v) ? v : -o), {
            isValid: l.allCorrect,
            score: v,
            maxScore: u,
            responsesValid: l.validatedResponses,
            suggestedResponses: l.suggestedResponses
        }
    };
    function compareElement(elA, elB, r, i) {
        console.log("compare element");
        return elA.type !== elB.type ? !1 : _.isFunction(compareFuncs[elA.type]) ? compareFuncs[elA.type](elA, elB, r, i) : !1
    };
    function h(t, n, r) {
        _.isObject(n.subElementsIds) && _.each(n.subElementsIds, function(e) {
            h(t, r[e], r)
        }), _.some(t, function(e) {
            return e.id === n.id
        }) || (n.anchor && r[n.anchor] && h(t, r[n.anchor], r), t.push(n))
    };
    function p(t, n) {
        var r = [t.id];
        return _.isObject(t.subElementsIds) && _.each(t.subElementsIds, function(e) {
            r = r.concat(p(n[e], n))
        }), r
    };
    function dist(e, t) {
        return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2))
    };
    function v(e, t) {
        var n, r;
        return Math.abs(t.x - e.x) <= o ? n = Infinity : (n = (t.y - e.y) / (t.x - e.x), r = e.y - n * e.x), {
            slope: n,
            yIntercept: r
        }
    };
    function m(e, t, n, r) {
        var i = v(e, t),
            s = v(n, r);
        return i.slope === Infinity || s.slope === Infinity ? i.slope === s.slope && Math.abs(n.x - e.x) <= o : Math.abs(i.slope - s.slope) <= o && Math.abs(i.yIntercept - s.yIntercept) <= o
    };
    function g(e, t) {
        var n = t.x - e.x,
            r = t.y - e.y,
            i;
        return n > 0 && r > 0 ? i = "topLeft" : n > 0 && r === 0 ? i = "left" : n > 0 && r < 0 ? i = "bottomLeft" : n === 0 && r > 0 ? i = "top" : n === 0 && r === 0 ? i = "none" : n === 0 && r < 0 ? i = "bottom" : n < 0 && r > 0 ? i = "topRight" : n < 0 && r === 0 ? i = "right" : n < 0 && r < 0 && (i = "bottomRight"), i
    };
    var scoring_types = ["exactMatch"],
        r = 0,
        i = 1,
        compareFuncs, o = 1e-6;
    return compareFuncs = {
        point: function(e, t, n, r) {
            return Math.abs(e.coords.x - t.coords.x) <= o && Math.abs(e.coords.y - t.coords.y) <= o
        },
        line: function(e, t, n, r) {
            var i = n[e.subElementsIds.startPoint],
                s = n[e.subElementsIds.endPoint],
                o = r[t.subElementsIds.startPoint],
                u = r[t.subElementsIds.endPoint];
            return m(i.coords, s.coords, o.coords, u.coords)
        },
        lrnlabel: function(e, t, n, r) {
            if (e.text === t.text) {
                var i = r[t.anchor],
                    s = n[e.anchor];
                return compareElement(s, i, n, r)
            }
            return !1
        },
        ray: function(e, t, n, r) {
            var i = n[e.subElementsIds.startPoint],
                s = n[e.subElementsIds.endPoint],
                o = r[t.subElementsIds.startPoint],
                u = r[t.subElementsIds.endPoint],
                a, f;
            return this.point(i, o) ? m(i.coords, s.coords, o.coords, u.coords) ? (a = g(i.coords, s.coords), f = g(o.coords, u.coords), a === f) : !1 : !1
        },
        segment: function(e, t, n, r) {
            var i = n[e.subElementsIds.startPoint],
                s = n[e.subElementsIds.endPoint],
                o = r[t.subElementsIds.startPoint],
                u = r[t.subElementsIds.endPoint];
            return this.point(i, o) && this.point(s, u) || this.point(i, u) && this.point(s, o)
        },
        vector: function(e, t, n, r) {
            var i = n[e.subElementsIds.startPoint],
                s = n[e.subElementsIds.endPoint],
                o = r[t.subElementsIds.startPoint],
                u = r[t.subElementsIds.endPoint];
            return this.point(i, o) && this.point(s, u)
        },
        circle: function(e, t, n, r) {
            var i = n[e.subElementsIds.centrePoint],
                s = r[t.subElementsIds.centrePoint];
            if (!this.point(i, s)) return !1;
            var u = n[e.subElementsIds.radiusPoint],
                a = dist(i.coords, u.coords),
                f = r[t.subElementsIds.radiusPoint],
                l = dist(s.coords, f.coords);
            return Math.abs(l - a) <= o
        },
        parabola: function(e, t, n, r) {
            var i = n[e.subElementsIds.rootPoint],
                s = r[t.subElementsIds.rootPoint];
            if (!this.point(i, s)) return !1;
            var u = n[e.subElementsIds.edgePoint],
                a = r[t.subElementsIds.edgePoint],
                f = i.coords.x,
                l = i.coords.y,
                c = u.coords.x,
                h = u.coords.y,
                p = (h - l) / Math.pow(c - f, 2),
                d = s.coords.x,
                v = s.coords.y,
                m = a.coords.x,
                g = a.coords.y,
                y = (g - v) / Math.pow(m - d, 2);
            return Math.abs(y - p) <= o
        },
        sine: function(e, t, n, r) {
            var i = n[e.subElementsIds.rootPoint],
                s = r[t.subElementsIds.rootPoint],
                o = n[e.subElementsIds.edgePoint],
                u = r[t.subElementsIds.edgePoint],
                a = i.coords.x,
                f = i.coords.y,
                l = o.coords.x,
                c = o.coords.y,
                h = s.coords.x,
                p = s.coords.y,
                d = u.coords.x,
                v = u.coords.y;
            if (f !== p) return !1;
            var m = 4 * Math.abs(l - a),
                g = 4 * Math.abs(d - h);
            if (m !== g) return !1;
            var y = c - f,
                b = v - p;
            if (Math.abs(y) !== Math.abs(b)) return !1;
            var w = (c - f) / (l - a),
                E = (v - p) / (d - h);
            return (a - h) % m === 0 ? w === E : (a - h) % (m / 2) === 0 ? w === -E : !1
        },
        polygon: function(e, t, n, r) {
            function h(e, t, n) {
                var r = e.length,
                    i = e[t].n,
                    s = e[n].n,
                    o, u;
                return s - i < 0 ? o = s + r - i : o = s - i, i - s < 0 ? u = i + r - s : u = i - s, o > r / 2 ? u : o
            }
            function p(e, t) {
                return e.x < t.x ? -1 : e.x > t.x ? 1 : e.y < t.y ? -1 : e.y > t.y ? 1 : 0
            }
            function d(e, t) {
                var n, r = [],
                    i, s = 0;
                for (n in e.subElementsIds) e.subElementsIds.hasOwnProperty(n) && (i = t[e.subElementsIds[n]].coords, i.n = s++, r.push(i));
                return r.pop(), r
            }
            var i, s, u, a, f, l, c;
            if (e.type !== t.type) return !1;
            i = d(e, n), s = d(t, r);
            if (i.length !== s.length) return !1;
            i.sort(p), s.sort(p);
            for (u = 0; u < i.length; u++) {
                a = i[u], f = s[u], c = u - 1 >= 0 ? u - 1 : i.length - 1, l = u + 1 < i.length ? u + 1 : 0;
                if (Math.abs(a.x - f.x) > o || Math.abs(a.y - f.y) > o) return !1;
                if (Math.abs(h(i, u, l) - h(s, u, l)) > o || Math.abs(h(i, u, c) - h(s, u, c)) > o) return !1
            }
            return !0
        }
    }, scoreEngine;
}]);