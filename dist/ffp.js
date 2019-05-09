/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./base/log.js
const { log } = console;

/* harmony default export */ var base_log = (log);
// CONCATENATED MODULE: ./base/isIterable.js
function isIterable(a) {
    return a != null && !!a[Symbol.iterator];
}
// CONCATENATED MODULE: ./base/isPromise.js
function isPromise(a) {
    return a instanceof Promise;
}
// CONCATENATED MODULE: ./base/isArray.js
const { isArray } = Array;

/* harmony default export */ var base_isArray = (isArray);
// CONCATENATED MODULE: ./base/isFunction.js
function isFunction(a) {
    return typeof a == 'function';
}
// CONCATENATED MODULE: ./base/isString.js
function isString(a) {
    return typeof a == 'string';
}
// CONCATENATED MODULE: ./base/isEmpty.js
function isEmpty(arr) {
    return (arr.length === 0) ? true : false;
}
// CONCATENATED MODULE: ./base/isUndefined.js
/* harmony default export */ var isUndefined = (a => a === undefined);
// CONCATENATED MODULE: ./base/curry.js
function curry(f) {
    return (a, ..._) => _.length < 1 ? (..._) => f(a, ..._) : f(a, ..._);
}
// CONCATENATED MODULE: ./base/goFirst.js


function goFirst(a, f) {
    return isPromise(a) ? a.then(f) : f(a);
}
// CONCATENATED MODULE: ./lazy/filterL.js



/* harmony default export */ var lazy_filterL = (curry(function *filterL(f, iter) {
    for (const a of iter) if(goFirst(a, f)) yield a;
}));
// CONCATENATED MODULE: ./base/not.js
function not(a) {
    return !a;
}
// CONCATENATED MODULE: ./lazy/rejectL.js





/* harmony default export */ var lazy_rejectL = (curry(function rejectL(f, iter) {
    return lazy_filterL(a => goFirst(f(a), not), iter);
}));

// CONCATENATED MODULE: ./base/none.js
/* harmony default export */ var none = (function *() {} ());
// CONCATENATED MODULE: ./base/toIter.js



function toIter(a) {
    return isIterable(a) ? a[Symbol.iterator]() : none;
}
// CONCATENATED MODULE: ./base/nop.js
const nop = Symbol.for('nop');

/* harmony default export */ var base_nop = (nop);
// CONCATENATED MODULE: ./base/take.js




/* harmony default export */ var base_take = (curry(function take(l, iter) {
    if (l === 0) return [];
    let res = [];
    iter = toIter(iter);
    return function recur() {
        let cur;
        while (!(cur = iter.next()).done) {
            const a = cur.value;
            if (a instanceof Promise) {
                return a
                .then(a => (res.push(a), res).length == l ? res : recur())
                .catch(e => e == base_nop ? recur() : Promise.reject(e));
            }
            res.push(a);
            if (res.length == l) return res;
        }
        return res;
    } ();
}));
// CONCATENATED MODULE: ./base/takeFirst.js


const takeFirst = base_take(1);
/* harmony default export */ var base_takeFirst = (takeFirst);
// CONCATENATED MODULE: ./base/every.js





/* harmony default export */ var base_every = (curry(function every(f, iter) {
    return goFirst(base_takeFirst(lazy_rejectL(f, iter)), ({length}) => length == 0);
}));
// CONCATENATED MODULE: ./lazy/entriesL.js
function *entriesL(obj) {
    for (const k in obj) yield [k, obj[k]];
}
// CONCATENATED MODULE: ./base/isMatch.js





/* harmony default export */ var base_isMatch = (curry(function isMatch(a, b) {
    return (
        typeof a == 'function' ? !!a(b)
            :
        base_isArray(a) && base_isArray(b) ? base_every(v => b.includes(v), a)
            :
        typeof b == 'object' ? base_every(([k, v]) => b[k] == v, entriesL(a))
            :
        a instanceof RegExp ? b.match(a)
            :
        a == b
    );
}));
// CONCATENATED MODULE: ./lazy/mapL.js



/* harmony default export */ var lazy_mapL = (curry(function *mapL(f, iter) {
    for (const a of iter) yield goFirst(a, f);
}));
// CONCATENATED MODULE: ./base/takeAll.js


function takeAll(iter) {
    return base_take(Infinity, iter);
}
// CONCATENATED MODULE: ./base/map.js




/* harmony default export */ var base_map = (curry(function map(f, iter) {
    return takeAll(lazy_mapL(f, iter));
}));
// CONCATENATED MODULE: ./base/filter.js




/* harmony default export */ var base_filter = (curry(function filter(f, iter) {
    return takeAll(lazy_filterL(f, iter));
}));
// CONCATENATED MODULE: ./base/head.js



function head(iter) {
    return goFirst(base_take(1, iter), ([h]) => h);
}
// CONCATENATED MODULE: ./base/reduce.js





const call2 = (acc, a, f) =>
    a instanceof Promise ?
    a.then(a => f(acc, a), e => e == base_nop ? acc : Promise.reject(e)) :
    f(acc, a);

function reduce(f, acc, iter) {
    if (arguments.length == 1) return (..._) => reduce(f, ..._);
    if (arguments.length == 2) return reduce(f, head(iter = toIter(acc)), iter);

    iter = toIter(iter);
    return goFirst(acc, function recur(acc) {
    let cur;
    while (!(cur = iter.next()).done) {
        acc = call2(acc, cur.value, f);
        if (acc instanceof Promise) return acc.then(recur);
    }
    return acc;
    });
}
// CONCATENATED MODULE: ./base/call.js
function call(a, f) {
    return f(a);
}
// CONCATENATED MODULE: ./base/go.js



function go(..._) {
    return reduce(call, _);
}

// CONCATENATED MODULE: ./base/pipe.js



function pipe(f, ...fs) {
    return (...as) => reduce(call, f(...as), fs);
}
// CONCATENATED MODULE: ./base/tap.js




function tap(f, ...fs) {
    return (a, ...as) => goFirst(reduce(call, f(a, ...as), fs), _ => a);
}
// CONCATENATED MODULE: ./lazy/valuesL.js
function *valuesL(obj) {
    for (const k in obj) yield obj[k];
}
// CONCATENATED MODULE: ./base/values.js



function values(a) {
    return takeAll(valuesL(a));
}
// CONCATENATED MODULE: ./base/find.js




/* harmony default export */ var base_find = (curry(function find(f, iter) {
    return head(lazy_filterL(f, iter));
}));
// CONCATENATED MODULE: ./base/match.js






function baseMatch(targets) {
    let cbs = [];

    function evl() {
        return go(
            targets,
            values,
            targets => go(cbs, base_find(pb => { return pb._case(...targets); }), pb => pb._body(...targets)));
    }

    function _case(f) {
        cbs.push({ _case: typeof f == 'function' ? pipe(...arguments) : base_isMatch(f) });
        return _body;
    }
    _case.case = _case;

    function _body() {
        cbs[cbs.length-1]._body = pipe(...arguments);
        return _case;
    }

    _case.else = function() {
        _case(_=> true) (...arguments);
        // log(targets);
        return targets ? evl() : (...targets2) => ((targets = targets2), evl());
    };

    return _case;
}

function match(..._) {
    return baseMatch(_);
}

match.case = (..._) => baseMatch(null).case(..._);

/* harmony default export */ var base_match = (match);
// CONCATENATED MODULE: ./base/delay.js


/* harmony default export */ var delay = (curry(function delay(time, a) {
    return new Promise(resolve => setTimeout(() => resolve(a), time));
}));
// CONCATENATED MODULE: ./base/first.js
function first(arr) {
    return arr[0];
}
// CONCATENATED MODULE: ./base/last.js
function last(arr) {
    return arr[arr.length - 1];
}
// CONCATENATED MODULE: ./base/toString.js
function toString_toString(a) {
    return a.toString();
}
// CONCATENATED MODULE: ./base/join.js



/* harmony default export */ var base_join = (curry(function join(sep = ',', iter) {
    return reduce((a, b) => `${a}${sep}${b}`, iter);
}));
// CONCATENATED MODULE: ./lazy/keysL.js
function *keysL(obj) {
    for (const k in obj) yield k;
};
// CONCATENATED MODULE: ./lazy/flatL.js





function flatL(iter, depth = 1) {
    const iterStack = [toIter(iter)];
    return {
    next: function recur() {
        const iter = last(iterStack);
        if (!iter) return { done: true };
        const cur = iter.next();
        if (cur.done) {
            iterStack.pop();
            return recur();
        } else if (iterStack.length <= depth && isIterable(cur.value) && typeof cur.value != 'string') {
            iterStack.push(cur.value[Symbol.iterator]());
            return recur();
        } else if (cur.value instanceof Promise) {
        return {
            value: cur.value.then(value => {
                if (iterStack.length > depth || !isIterable(value) || typeof value == 'string') return value;
                const iter = value[Symbol.iterator](), cur = iter.next();
                return cur.done ? Promise.reject(base_nop) : (iterStack.push(iter), cur.value);
            }),
            done: false
        };
        } else {
            return cur;
        }
    },
    [Symbol.iterator]() { return this; }
    };
}
// CONCATENATED MODULE: ./lazy/flatMapL.js




/* harmony default export */ var lazy_flatMapL = (curry(function flatMapL(f, iter) {
    return flatL(lazy_mapL(f, iter));
}));
// CONCATENATED MODULE: ./lazy/takeL.js


/* harmony default export */ var takeL = (curry(function *takeL(l, iter) {
    for (const a of iter) {
        if (a instanceof Promise) yield a.then(a => (--l, a));
        else yield (--l, a);
        if (!l) break;
    }
}));
// CONCATENATED MODULE: ./concurrency/catchNoop.js
function catchNoop(arr) {
  arr.forEach(a => a instanceof Promise ? a.catch(function() {}) : a);
  return arr;
}

/* harmony default export */ var concurrency_catchNoop = (catchNoop);
// CONCATENATED MODULE: ./concurrency/takeC.js




/* harmony default export */ var concurrency_takeC = (curry(function takeC(l, iter) {
    return base_take(l, concurrency_catchNoop([...iter]));
}));
// CONCATENATED MODULE: ./concurrency/takeAllC.js


/* harmony default export */ var takeAllC = (concurrency_takeC(Infinity));
// CONCATENATED MODULE: ./concurrency/mapC.js




/* harmony default export */ var concurrency_mapC = (curry(function mapC(f, iter) {
    return takeAllC(lazy_mapL(f, iter));
}));
// CONCATENATED MODULE: ./concurrency/filterC.js




/* harmony default export */ var concurrency_filterC = (curry(function filterC(f, iter) {
    return takeAllC(lazy_filterL(f, iter));
}));
// CONCATENATED MODULE: ./concurrency/reduceC.js




/* harmony default export */ var concurrency_reduceC = (curry(function reduceC(f, acc, iter) {
    return arguments.length == 2 ?
        reduce(f, concurrency_catchNoop([...acc])) :
        reduce(f, acc, concurrency_catchNoop([...iter]));
}));
// CONCATENATED MODULE: ./ffp-browser.js




















































window.ffp = window._ = {};

_.log = base_log;

_.isIterable = isIterable;
_.isPromise = isPromise;
_.isArray = base_isArray;
_.isFunction = isFunction;
_.isString = isString;
_.isEmpty = isEmpty;
_.isUndefined = isUndefined;
_.isMatch = base_isMatch;
_.map = base_map;
_.filter = base_filter;
_.reduce = reduce;
_.go = go;
_.goFirst = goFirst;
_.pipe = pipe;
_.take = base_take;
_.takeFirst = base_takeFirst;
_.takeAll = takeAll;
_.tap = tap;
_.none = none;
_.nop = base_nop;
_.not = not;
_.toIter = toIter;
_.values = values;
_.match = base_match;
_.every = base_every;
_.find = base_find;
_.delay = delay;
_.first = first;
_.last = last;
_.call = call;
_.toString = toString_toString;
_.join = base_join;

_.mapL = lazy_mapL;
_.filterL = lazy_filterL;
_.keysL = keysL;
_.valuesL = valuesL;
_.entriesL = entriesL;
_.flatL = flatL;
_.flatMapL = lazy_flatMapL;
_.rejectL = lazy_rejectL;
_.takeL = takeL;

_.mapC = concurrency_mapC;
_.filterC = concurrency_filterC;
_.reduceC = concurrency_reduceC;
_.takeC = concurrency_takeC;
_.takeAllC = takeAllC;
_.catchNoop = concurrency_catchNoop;

/***/ })
/******/ ]);
//# sourceMappingURL=ffp.js.map