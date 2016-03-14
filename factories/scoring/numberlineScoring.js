/**
 * Created by Vernal Liu on 3/4/2016.
 */
App.factory('scoring.numberlineScoring', ['_', 'scoring.commonScoring', function(_, commonScoring)
{
    "use strict";

    function scoreEngine(e) {
        //Evaluate response - e is response.
        var n, scoreResult;
        this.isValid = function() {
            return scoreResult.isValid
        }, this.score = function() {
            return scoreResult.score
        }, this.maxScore = function() {
            return scoreResult.maxScore
        }, this.validateIndividualResponses = function() {
            return scoreResult.responsesValid
        }, this.suggestedResponse = function() {
            return scoreResult.suggestedResponse
        }, this.error = function() {
            return scoreResult.error
        }, this.reset = function(e) {
            var i = JSON.stringify(e);
            if (n !== i) {
                try {
                    scoreResult = prepareScores(JSON.parse(JSON.stringify(e))), commonScoring.normalizeScores(scoreResult, e)
                } catch (s) {
                    scoreResult = {
                        error: s
                    }
                }
                n = i
            }
            return this
        }, this.reset(e)
    }

    function prepareScores(model) {
        var i = model.validation,
            s = [];
        if (!model.validation && !model.valid_response) return {};
        model.response || (model.response = {
            value: []
        }), model.response.value || (model.response.value = []);
        if (i && i.scoring_type) {
            if (!_.contains(defaultScoringType, i.scoring_type)) throw new commonScoring.InvalidScoringTypeException(model.type, i.scoring_type);
            return i.valid_response && s.push(i.valid_response), i.alt_response && (s = s.concat(i.alt_response)), calcTotalScore(model, s)
        }
        return model = commonScoring.normalizeParameters(model), calcMainScore(model)
    }

    function calcTotalScore(model, vresponses) {
        var o = model.validation,
            u = model.response.value,
            a = Math.abs(_.isNumber(o.penalty) ? o.penalty : defaultPenalty),
            f = model.points || [],
            c = o.threshold && o.threshold !== "0" ? o.threshold : s,
            h = [],
            p = 0,
            d, v, m, g, y;
        return _.each(vresponses, function(t) {
            var n = normalizeValidResponses(t.value),
                r = _.isNumber(t.score) ? t.score : defaultScore,
                s = 0,
                o = {},
                f = 0,
                d = 0,
                b;
            _.each(n, function(e) {
                u[e.point] && (Math.abs(u[e.point].x - e.position) <= c ? o[e.point] = !0 : o[e.point] = !1)
            }), _.each(u, function(t, r) {
                _.findWhere(n, {
                    point: r
                }) || (o[r] = !1)
            }), _.each(n, function(t) {
                _.isUndefined(u[t.point]) && d++
            });
            if (_.isUndefined(y) || r > y) y = r, v = t;
            _.each(o, function(e) {
                e && s++
            });
            if (_.isUndefined(m) || r > g || r === g && s > m) m = s, v = t, g = r, p = h.length;
            _.size(u) && (_.all(o) && d === 0 ? (b = !0, f = r) : (b = !1, f = -1 * a), h.push({
                score: f,
                isValid: b,
                responsesValid: o
            }))
        }), d = h.length ? _.max(h, function(e) {
            return e.score
        }) : {}, !d.isValid && v && h[p] && (d = h[p]), {
            score: d.score,
            responsesValid: d.responsesValid,
            isValid: d.isValid,
            maxScore: y,
            suggestedResponse: v
        }
    }

    function calcMainScore(model) {
        var validation = model.validation,
            validRes = validation.valid_response,
            resVal = model.response.value,
            validScore = _.isNumber(validation.valid_score) ? validation.valid_score : defaultScore,
            penaltyScore = Math.abs(_.isNumber(validation.penalty_score) ? validation.penalty_score : defaultPenalty),
            points = model.points || [],
            feedback = {},
            isValid = !1,
            d, v, scoreResult, maxScoreResult;
        return validRes && (validRes = normalizeValidResponses(validRes), d = validation.threshold && validation.threshold !== "0" ? validation.threshold : s, maxScoreResult = validScore * validRes.length, _.size(resVal) && (scoreResult = 0, v = 0, _.each(validRes, function(t) {
            var n;
            resVal[t.point] && (Math.abs(resVal[t.point].x - t.position) <= d ? (n = validScore, feedback[t.point] = !0) : feedback[t.point] = !1), _.isUndefined(n) ? (scoreResult -= penaltyScore, v++) : (scoreResult += n, isValid = !0)
        }), _.each(resVal, function(t, n) {
            _.findWhere(validRes, {
                point: n
            }) || (scoreResult -= penaltyScore, v++, feedback[n] = !1)
        }), validation.partial_scoring === !1 && (scoreResult !== maxScoreResult || v !== 0) && (scoreResult = 0, isValid = !1))), {
            score: scoreResult,
            maxScore: maxScoreResult,
            responsesValid: feedback,
            isValid: isValid
        }
    }

    function normalizeValidResponses(t) {
        var n = /(\-?\d+)\s*\/\s*([1-9]\d*)/,
            r = /(\-?\d+)\s+(\d+)\s*\/\s*([1-9]\d*)/,
            i = [];
        return _.each(t, function(t) {
            var s = Number.POSITIVE_INFINITY;
            if (_.isString(t.position)) {
                var o = n.exec(t.position),
                    u = r.exec(t.position);
                u && u.length === 4 ? s = parseInt(u[1], 10) + parseInt(u[2], 10) / parseInt(u[3], 10) : o && o.length === 3 ? s = parseInt(o[1], 10) / parseInt(o[2], 10) : s = parseFloat(t.position)
            } else _.isNumber(t.position) && (s = t.position);
            i.push({
                point: t.point,
                position: s
            })
        }), i
    }
    var defaultScoringType = ["exactMatch"],
        defaultPenalty = 0,
        defaultScore = 1,
        s = 1e-6;
    return scoreEngine
}]);