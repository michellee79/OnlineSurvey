/**
 * Created by Vernal Liu on 1/9/2016.
 */

App.factory("scoring.commonScoring", ["_", function(e) {
    "use strict";

    function calcMaxScore(qdata)
    {
        var question = qdata;
        var question = normalizeParameters(question);
        var mscore = question.validation.valid_response.score;
        e.each(question.validation.alt_response, function(r){
            if(mscore < r.score)
            {
                mscore = r.score;
            }
        });
        if (mscore === 0)
            mscore = 1;     // Cannot have a score of 0 so set a default value. Could happen if error made on content creation.
        return mscore;
    };

    function t(e, t) {
        switch (t) {
            case "none":
                return e;
            case "ceiling":
                return Math.ceil(e);
            default:
                return Math.floor(e)
        }
    };
    function n(e, t) {
        this.message = e + " does not support scoring type " + t, this.name = "InvalidScoringTypeException", this.toString = function() {
            return this.name + ": " + this.message
        }
    };
    function r(t, n) {
        return e.isNumber(n) && (e.isUndefined(t) && (t = 0), t += n), t
    };
    function i(t, n, r) {
        var i = e.isString(t) && e.isString(n);
        return i && !r.caseSensitive && (t = t.toLowerCase(), n = n.toLowerCase()), i && r.removeWhitespace && (t = t.replace(/ | /g, ""), n = n.replace(/ | /g, "")), t === n
    };
    function s(n, s, a, f) {
        function H(t, n, r, s) {
            return e.isEmpty(t) && e.isEmpty(n[r]) || i(t, n[r], s)
        }
        function B(t, n, r) {
            return e.isEqual(t, n[r])
        }
        function j(t, n, r, i, s) {
            return P = e.indexOf(s, t), P > -1
        }
        function F(e, t, n, r) {
            var i = t[n] && [t[n]] || [],
                s = u(e, i, r.validateSingleSpec, 1);
            return s.isValid
        }
        var l = n.question,
            c = n.response || {};
        l.validation = l.validation || {};
        var h = c.value || [],
            p = Math.abs(e.isNumber(l.validation.penalty) ? l.validation.penalty : a.penaltyScore),
            d = l.validation.scoring_type,
            v = l.validation.rounding || a.rounding,
            m = [],
            g, y, b, w, E, S, x, T = null,
            N, C, k, L, A, O, M, D, P;
        O = 0, g = 0, y = 0;
        for (var I = 0; I < s.length; I++) {
            N = s[I], C = N.value;
            if (!C) break;
            k = e.clone(C), L = e.isNumber(N.score) ? N.score : a.score, A = L * C.length, D = [], M = undefined, e.each(h, function(e, t) {
                var n = f ? f.ignoreOrder ? j : H : B,
                    i;
                n = f && f.validateSingleSpec ? F : n, n(e, C, t, f, k) ? (M = r(M, L), i = !0, P > -1 && delete k[P]) : (M = r(M, -1 * p), i = !1), D.push(i)
            });
            if (d === "exactMatch" && h.length) if (o(M, A) && e.all(D)) {
                if (e.isNull(T) || L > T || L === 0) w = D, T = L, S = !0
            } else S || (S = !1, T = -1 * p);
            if (d === "partialMatch" || d === "partialMatchV2") e.isUndefined(S) && !e.any(D) && (S = !1), e.any(D) && (S = !0), d === "partialMatchV2" && (M = M / A * L, A = L), e.isUndefined(x) && (x = 0), A > x && (x = A);
            A >= O && (y = e.filter(D, function(e) {
                return e === !0
            }).length, y > g && (g = y, b = N), O = A), m.push({
                localScore: M,
                localResponsesValid: D
            })
        }
        if (d === "exactMatch") for (I = 0; I < s.length; I++) N = s[I], L = e.isNumber(N.score) ? N.score : a.score, e.isUndefined(L) || (e.isUndefined(x) && (x = 0), L > x && (x = L));
        if (d === "partialMatch" || d === "partialMatchV2" || d === "exactMatch" && !w) x === 0 ? E = e.max(m, function(t) {
            return e(t.localResponsesValid).without(!1).length
        }) : E = e.max(m, function(e) {
            return e.localScore
        }), w = E.localResponsesValid, d === "partialMatch" && (T = E.localScore), d === "partialMatchV2" && E.localScore && (T = t(E.localScore, v));
        return (!h.length || !b) && s.length && (b = s[0]), {
            score: T,
            responsesValid: w,
            suggestedResponse: b,
            maxScore: x,
            isValid: S
        }
    };
    function u(t, n, r, i, s) {
        function v(e) {
            this.message = e, this.name = "MathQuestionException", this.toString = function() {
                return this.name + ": " + e
            }
        }
        function m(e, t, n) {
            var r = e + " Failed validating user input '" + t + "' against validation object: " + n;
            throw new v(r)
        }
        var o = {}, u, a, f, l, c, h = [],
            p, d;
        for (var g = 0; g < n.length; g++) {
            delete o.intern, f = n[g], e.isArray(f) ? c = i : (c = e.isNumber(n[g].score) ? n[g].score : i, h.push(c), f = n[g].value), f = f || [];
            for (var y = 0; y < f.length; y++) {
                l = f[y];
                var b = ["method: " + l.method];
                l.value && b.push("value: '" + l.value + "'"), l.options && b.push("options: " + JSON.stringify(l.options)), typeof l.options == "string" && (l.options = JSON.parse(l.options));
                if (e.isString(t)) {
                    u = r(l, t), typeof o.intern == "undefined" && u.result === !0 && (o.intern = !0), u.result || (o.intern = !1);
                    if (u.result !== !0 && u.result !== !1 && u.location === "spec") {
                        m(u.message, t, b.join(", "));
                        return
                    }
                }
            }
            typeof o.extern == "undefined" && o.intern === !1 && (o.extern = !1, e.isUndefined(s) || (p = -1 * s)), o.intern === !0 && (o.extern = !0, p = c)
        }
        return h.length ? d = e.max(h) : d = i, {
            isValid: o.extern,
            score: p,
            maxScore: d
        }
    };
    function a(t, n) {
        var r = t.question.validation,
            i = r.valid_response,
            s = e.isNumber(r.valid_score) ? r.valid_score : n.score,
            o = t.response.value || [],
            u = s * i.length,
            a = t.question.type === "orderlist" && r.pairwise === !0,
            f, l = [],
            c, h = 0,
            p = 0,
            d, v, m, g;
        if (o.length) {
            d = 0;
            if (a) {
                f = e.map(o, function(t) {
                    return e.indexOf(i, t)
                });
                for (m = 0; m < f.length; m++) for (g = m + 1; g < f.length; g++) p++, f[m] < f[g] && h++;
                d = parseFloat((i.length * h / p).toPrecision(2)), p && (!e.isUndefined(r.partial_scoring) && !r.partial_scoring ? v = p === h : v = h > 0)
            }
            for (m = 0; m < o.length; m++) c = undefined, i[m] == o[m] ? (c = s, l.push(!0)) : l.push(!1), !a && !e.isUndefined(c) ? d += c : !a && e.isNumber(r.penalty_score) && (d -= Math.abs(r.penalty_score));
            !a && l.length && (!e.isUndefined(r.partial_scoring) && !r.partial_scoring ? v = e.all(l) : v = e.any(l)), !e.isUndefined(r.partial_scoring) && !r.partial_scoring && d !== u && (d = 0)
        }
        return {
            maxScore: u,
            score: d,
            isValid: v,
            responsesValid: l
        }
    };
    function f(e) {
        return e && typeof e == "object" && e.constructor && e.constructor == Object
    };
    function _normalizeParameters(t) {
        return f(t) ? (e.each(t, function(n, r) {
            if (f(n)) t[r] = _normalizeParameters(n);
            else if (e.isArray(n)) t[r] = e.map(n, _normalizeParameters);
            else if (e.isString(n)) switch (r) {
                case "score":
                case "valid_score":
                case "penalty_score":
                    t[r] = parseFloat(n);
                    break;
                case "pairwise":
                case "case_sensitive":
                case "is_math":
                    t[r] = n.toLowerCase() === "true" ? !0 : n.toLowerCase() === "false" ? !1 : null, e.isNull(t[r]) && delete t[r]
            }
        }), t) : t
    };
    function normalizeParameters(t) {
        return t = e.clone(t), _normalizeParameters(t)
    };
    function h(t, n) {
        var r = t.isAttempted;
        e.isUndefined(r) && (r = n.response && f(n.response) && !! n.response.value), e.isBoolean(t.isValid) || (t.isValid = null), e.isNumber(t.score) ? t.score = parseFloat(t.score.toFixed(4)) : t.score = null, e.isNumber(t.maxScore) ? (t.maxScore = parseFloat(t.maxScore.toFixed(4)), r && e.isNull(t.score) && t.maxScore > 0 && (t.score = 0)) : t.maxScore = null
    };
    function p(t) {
        return e.reduce(t, function(t, n) {
            return n = e.isNumber(n) ? n : null, e.isNumber(n) || e.isNumber(t) ? n + t : null
        }, null)
    };
    var o = function() {
        var e = 1e-6;
        return function(n, r) {
            return Math.abs(n - r) < e
        }
    }();
    return {
        round: t,
        normalizeScores: h,
        scoreArray: s,
        addIfDefined: r,
        stringCompare: i,
        scoreList: a,
        normalizeParameters: normalizeParameters,
        validateMathLists: u,
        sumNullableNumbers: p,
        InvalidScoringTypeException: n,
        epsEquals: o,
        maxScore: calcMaxScore,
        gradeLevel: calcGradeLevel
    };

    /**
     *  Get the grade level of a given value according to the Flesch-Kincaid
     *  Grade Level. More information is available at WikiPedia:
     *
     *   https://en.wikipedia.org/wiki/Flesch%E2%80%93Kincaid_readability_tests
     */

    function calcGradeLevel(text){
        var all = text.replace(/&nbsp;/g, '').replace(/<br ?\/?>/g, '');
        console.log(all);
        var sentenceSplit = all.split(".");
        var sentencesLength = sentenceSplit.length;
        if (sentenceSplit[sentenceSplit.length-1].trim().length == 0) {
            sentencesLength--;    // Sentence ended with a period.
        }
        var words = all.split(" ");
        var characters = 0;
        var complexPolysillabicWords = 0;
        for (var i = 0; i< words.length; i++) {
            if (syllable(words[i]) >= 3)
                complexPolysillabicWords++;
            characters += words[i].length;
        }
        var syllables = syllable(all);
        /**
         * Don't take gunningFog into account as we have to remove proper nouns, compound words
         */
        /*
        gunningFogInit();
        var gunning = gunningFog({
            'sentence' : sentences.length,
            'word' : words.length,
            'complexPolysillabicWord' : complexPolysillabicWords
        });
        */
        automatedReadabilityInit();
        var readability = automatedReadability({
            'sentence' : sentencesLength,
            'word' : words.length,
            'character' : characters
        });
        fleschKincaidInit();
        var fleschk = fleschKincaid({
            'sentence' : sentencesLength,
            'word' : words.length,
            'syllable' : syllables
        });
        /**
         * Smog Index requires a minimum of 30 sentences
         */
        /*
        smogInit();
        var smogFormula = smog({
            'sentence' : sentences.length,
            'polysillabicWord' : complexPolysillabicWords
        });
        */
        colemanLiauInit();
        var coleman = colemanLiau({
            'sentence' : sentencesLength,
            'word' : words.length,
            'letter' : characters
        });
        console.log("Sentence length : " + sentencesLength);
        console.log("Word length : " + words.length);
        console.log("Letters length : " + characters);
        console.log("complexPolysillabicWords : " + complexPolysillabicWords);
        console.log("readability : " + readability);
        console.log("fleschk : " + fleschk);
        console.log("coleman : " + coleman);
        console.log("average : " + (readability + fleschk + coleman) / 3);

        var averageGradeLevel = (readability + fleschk + coleman) / 3;
        averageGradeLevel = Math.max(averageGradeLevel, fleschk);
        averageGradeLevel = averageGradeLevel < 0 ? 0 : averageGradeLevel;

        return averageGradeLevel;
    }
}]);