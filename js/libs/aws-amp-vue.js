module.exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "1c25");
/******/ })
/************************************************************************/
/******/ ({

/***/ "03d8":
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__("e385");
module.exports = function (target, src, safe) {
  for (var key in src) redefine(target, key, src[key], safe);
  return target;
};


/***/ }),

/***/ "054c":
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__("f455")('meta');
var isObject = __webpack_require__("194e");
var has = __webpack_require__("25a6");
var setDesc = __webpack_require__("6f0d").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__("a124")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "0b04":
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__("aec0");
var defined = __webpack_require__("c8ae");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "0c1f":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__("79c1");
var $keys = __webpack_require__("8996");

__webpack_require__("5642")('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ "0d9c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.7 String.prototype.includes(searchString, position = 0)

var $export = __webpack_require__("ef37");
var context = __webpack_require__("dafe");
var INCLUDES = 'includes';

$export($export.P + $export.F * __webpack_require__("8222")(INCLUDES), 'String', {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~context(this, searchString, INCLUDES)
      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "0e30":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
var $export = __webpack_require__("ef37");
var $find = __webpack_require__("418d")(6);
var KEY = 'findIndex';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  findIndex: function findIndex(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__("96ba")(KEY);


/***/ }),

/***/ "0e85":
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__("6f0d").f;
var has = __webpack_require__("25a6");
var TAG = __webpack_require__("d951")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "0e8c":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "0ed3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: /root/app/node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: /root/app/node_modules/vue-style-loader/lib/addStylesClient.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addStylesClient; });
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "124c":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("d3d5");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "130b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("0e8c");
var DESCRIPTORS = __webpack_require__("3d85");
var LIBRARY = __webpack_require__("742f");
var $typed = __webpack_require__("fa48");
var hide = __webpack_require__("bafe");
var redefineAll = __webpack_require__("03d8");
var fails = __webpack_require__("a124");
var anInstance = __webpack_require__("faee");
var toInteger = __webpack_require__("9e61");
var toLength = __webpack_require__("bb64");
var toIndex = __webpack_require__("c570");
var gOPN = __webpack_require__("c74b").f;
var dP = __webpack_require__("6f0d").f;
var arrayFill = __webpack_require__("b9c7");
var setToStringTag = __webpack_require__("0e85");
var ARRAY_BUFFER = 'ArrayBuffer';
var DATA_VIEW = 'DataView';
var PROTOTYPE = 'prototype';
var WRONG_LENGTH = 'Wrong length!';
var WRONG_INDEX = 'Wrong index!';
var $ArrayBuffer = global[ARRAY_BUFFER];
var $DataView = global[DATA_VIEW];
var Math = global.Math;
var RangeError = global.RangeError;
// eslint-disable-next-line no-shadow-restricted-names
var Infinity = global.Infinity;
var BaseBuffer = $ArrayBuffer;
var abs = Math.abs;
var pow = Math.pow;
var floor = Math.floor;
var log = Math.log;
var LN2 = Math.LN2;
var BUFFER = 'buffer';
var BYTE_LENGTH = 'byteLength';
var BYTE_OFFSET = 'byteOffset';
var $BUFFER = DESCRIPTORS ? '_b' : BUFFER;
var $LENGTH = DESCRIPTORS ? '_l' : BYTE_LENGTH;
var $OFFSET = DESCRIPTORS ? '_o' : BYTE_OFFSET;

// IEEE754 conversions based on https://github.com/feross/ieee754
function packIEEE754(value, mLen, nBytes) {
  var buffer = new Array(nBytes);
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var rt = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0;
  var i = 0;
  var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
  var e, m, c;
  value = abs(value);
  // eslint-disable-next-line no-self-compare
  if (value != value || value === Infinity) {
    // eslint-disable-next-line no-self-compare
    m = value != value ? 1 : 0;
    e = eMax;
  } else {
    e = floor(log(value) / LN2);
    if (value * (c = pow(2, -e)) < 1) {
      e--;
      c *= 2;
    }
    if (e + eBias >= 1) {
      value += rt / c;
    } else {
      value += rt * pow(2, 1 - eBias);
    }
    if (value * c >= 2) {
      e++;
      c /= 2;
    }
    if (e + eBias >= eMax) {
      m = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * pow(2, eBias - 1) * pow(2, mLen);
      e = 0;
    }
  }
  for (; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8);
  e = e << mLen | m;
  eLen += mLen;
  for (; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8);
  buffer[--i] |= s * 128;
  return buffer;
}
function unpackIEEE754(buffer, mLen, nBytes) {
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var nBits = eLen - 7;
  var i = nBytes - 1;
  var s = buffer[i--];
  var e = s & 127;
  var m;
  s >>= 7;
  for (; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8);
  m = e & (1 << -nBits) - 1;
  e >>= -nBits;
  nBits += mLen;
  for (; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8);
  if (e === 0) {
    e = 1 - eBias;
  } else if (e === eMax) {
    return m ? NaN : s ? -Infinity : Infinity;
  } else {
    m = m + pow(2, mLen);
    e = e - eBias;
  } return (s ? -1 : 1) * m * pow(2, e - mLen);
}

function unpackI32(bytes) {
  return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];
}
function packI8(it) {
  return [it & 0xff];
}
function packI16(it) {
  return [it & 0xff, it >> 8 & 0xff];
}
function packI32(it) {
  return [it & 0xff, it >> 8 & 0xff, it >> 16 & 0xff, it >> 24 & 0xff];
}
function packF64(it) {
  return packIEEE754(it, 52, 8);
}
function packF32(it) {
  return packIEEE754(it, 23, 4);
}

function addGetter(C, key, internal) {
  dP(C[PROTOTYPE], key, { get: function () { return this[internal]; } });
}

function get(view, bytes, index, isLittleEndian) {
  var numIndex = +index;
  var intIndex = toIndex(numIndex);
  if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
  var store = view[$BUFFER]._b;
  var start = intIndex + view[$OFFSET];
  var pack = store.slice(start, start + bytes);
  return isLittleEndian ? pack : pack.reverse();
}
function set(view, bytes, index, conversion, value, isLittleEndian) {
  var numIndex = +index;
  var intIndex = toIndex(numIndex);
  if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
  var store = view[$BUFFER]._b;
  var start = intIndex + view[$OFFSET];
  var pack = conversion(+value);
  for (var i = 0; i < bytes; i++) store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];
}

if (!$typed.ABV) {
  $ArrayBuffer = function ArrayBuffer(length) {
    anInstance(this, $ArrayBuffer, ARRAY_BUFFER);
    var byteLength = toIndex(length);
    this._b = arrayFill.call(new Array(byteLength), 0);
    this[$LENGTH] = byteLength;
  };

  $DataView = function DataView(buffer, byteOffset, byteLength) {
    anInstance(this, $DataView, DATA_VIEW);
    anInstance(buffer, $ArrayBuffer, DATA_VIEW);
    var bufferLength = buffer[$LENGTH];
    var offset = toInteger(byteOffset);
    if (offset < 0 || offset > bufferLength) throw RangeError('Wrong offset!');
    byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
    if (offset + byteLength > bufferLength) throw RangeError(WRONG_LENGTH);
    this[$BUFFER] = buffer;
    this[$OFFSET] = offset;
    this[$LENGTH] = byteLength;
  };

  if (DESCRIPTORS) {
    addGetter($ArrayBuffer, BYTE_LENGTH, '_l');
    addGetter($DataView, BUFFER, '_b');
    addGetter($DataView, BYTE_LENGTH, '_l');
    addGetter($DataView, BYTE_OFFSET, '_o');
  }

  redefineAll($DataView[PROTOTYPE], {
    getInt8: function getInt8(byteOffset) {
      return get(this, 1, byteOffset)[0] << 24 >> 24;
    },
    getUint8: function getUint8(byteOffset) {
      return get(this, 1, byteOffset)[0];
    },
    getInt16: function getInt16(byteOffset /* , littleEndian */) {
      var bytes = get(this, 2, byteOffset, arguments[1]);
      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
    },
    getUint16: function getUint16(byteOffset /* , littleEndian */) {
      var bytes = get(this, 2, byteOffset, arguments[1]);
      return bytes[1] << 8 | bytes[0];
    },
    getInt32: function getInt32(byteOffset /* , littleEndian */) {
      return unpackI32(get(this, 4, byteOffset, arguments[1]));
    },
    getUint32: function getUint32(byteOffset /* , littleEndian */) {
      return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;
    },
    getFloat32: function getFloat32(byteOffset /* , littleEndian */) {
      return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);
    },
    getFloat64: function getFloat64(byteOffset /* , littleEndian */) {
      return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);
    },
    setInt8: function setInt8(byteOffset, value) {
      set(this, 1, byteOffset, packI8, value);
    },
    setUint8: function setUint8(byteOffset, value) {
      set(this, 1, byteOffset, packI8, value);
    },
    setInt16: function setInt16(byteOffset, value /* , littleEndian */) {
      set(this, 2, byteOffset, packI16, value, arguments[2]);
    },
    setUint16: function setUint16(byteOffset, value /* , littleEndian */) {
      set(this, 2, byteOffset, packI16, value, arguments[2]);
    },
    setInt32: function setInt32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packI32, value, arguments[2]);
    },
    setUint32: function setUint32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packI32, value, arguments[2]);
    },
    setFloat32: function setFloat32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packF32, value, arguments[2]);
    },
    setFloat64: function setFloat64(byteOffset, value /* , littleEndian */) {
      set(this, 8, byteOffset, packF64, value, arguments[2]);
    }
  });
} else {
  if (!fails(function () {
    $ArrayBuffer(1);
  }) || !fails(function () {
    new $ArrayBuffer(-1); // eslint-disable-line no-new
  }) || fails(function () {
    new $ArrayBuffer(); // eslint-disable-line no-new
    new $ArrayBuffer(1.5); // eslint-disable-line no-new
    new $ArrayBuffer(NaN); // eslint-disable-line no-new
    return $ArrayBuffer.name != ARRAY_BUFFER;
  })) {
    $ArrayBuffer = function ArrayBuffer(length) {
      anInstance(this, $ArrayBuffer);
      return new BaseBuffer(toIndex(length));
    };
    var ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];
    for (var keys = gOPN(BaseBuffer), j = 0, key; keys.length > j;) {
      if (!((key = keys[j++]) in $ArrayBuffer)) hide($ArrayBuffer, key, BaseBuffer[key]);
    }
    if (!LIBRARY) ArrayBufferProto.constructor = $ArrayBuffer;
  }
  // iOS Safari 7.x bug
  var view = new $DataView(new $ArrayBuffer(2));
  var $setInt8 = $DataView[PROTOTYPE].setInt8;
  view.setInt8(0, 2147483648);
  view.setInt8(1, 2147483649);
  if (view.getInt8(0) || !view.getInt8(1)) redefineAll($DataView[PROTOTYPE], {
    setInt8: function setInt8(byteOffset, value) {
      $setInt8.call(this, byteOffset, value << 24 >> 24);
    },
    setUint8: function setUint8(byteOffset, value) {
      $setInt8.call(this, byteOffset, value << 24 >> 24);
    }
  }, true);
}
setToStringTag($ArrayBuffer, ARRAY_BUFFER);
setToStringTag($DataView, DATA_VIEW);
hide($DataView[PROTOTYPE], $typed.VIEW, true);
exports[ARRAY_BUFFER] = $ArrayBuffer;
exports[DATA_VIEW] = $DataView;


/***/ }),

/***/ "194e":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "1c25":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: /root/app/node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: /root/app/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0f87e5ee-vue-loader-template"}!/root/app/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/root/app/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!/root/app/node_modules/vue-loader/lib??vue-loader-options!./src/Amplify.vue?vue&type=template&id=20c8fc6b&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div')}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/Amplify.vue?vue&type=template&id=20c8fc6b&

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");
var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_);

// CONCATENATED MODULE: /root/app/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0f87e5ee-vue-loader-template"}!/root/app/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/root/app/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!/root/app/node_modules/vue-loader/lib??vue-loader-options!./src/components/api/graphql/Connect.vue?vue&type=template&id=3096abc6&
var Connectvue_type_template_id_3096abc6_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(_vm.isMutation)?[_vm._t("default",null,{loading:_vm.loading,mutate:_vm.mutate,errors:_vm.errors})]:[_vm._t("default",null,{loading:_vm.loading,data:_vm.data,errors:_vm.errors})]],2)}
var Connectvue_type_template_id_3096abc6_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/api/graphql/Connect.vue?vue&type=template&id=3096abc6&

// EXTERNAL MODULE: /root/app/node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__("df26");

// EXTERNAL MODULE: /root/app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("42c2");

// CONCATENATED MODULE: /root/app/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--12-0!/root/app/node_modules/@vue/cli-service/node_modules/thread-loader/dist/cjs.js!/root/app/node_modules/@vue/cli-plugin-babel/node_modules/babel-loader/lib!/root/app/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!/root/app/node_modules/vue-loader/lib??vue-loader-options!./src/components/api/graphql/Connect.vue?vue&type=script&lang=js&


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Connectvue_type_script_lang_js_ = ({
  name: 'Connect',
  props: ['query', 'mutation', 'subscription', 'onSubscriptionMsg'],
  data: function data() {
    return {
      logger: {},
      loading: false,
      data: {},
      errors: [],
      watchedSubscription: null,
      isMutation: false,
      internalMutation: null
    };
  },
  watch: {
    query: function query(val) {
      if (!this.loading) {
        this._fetchData();
      }
    },
    mutation: function mutation(val) {
      if (!this.loading) {
        this._fetchData();
      }
    }
  },
  beforeMount: function beforeMount() {
    this.logger = new this.$Amplify.Logger('Connect');

    this._fetchData();
  },
  beforeDestroy: function beforeDestroy() {
    this._unsubscribe();
  },
  methods: {
    mutate: function () {
      var _mutate = Object(asyncToGenerator["a" /* default */])(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (this.isMutation) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return");

              case 2:
                this.loading = true;
                _context.next = 5;
                return this.internalMutation();

              case 5:
                this.loading = false;

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function mutate() {
        return _mutate.apply(this, arguments);
      };
    }(),
    _setDefaultState: function _setDefaultState() {
      this.loading = false;
      this.data = {};
      this.errors = [];
      this.isMutation = false;

      this.internalMutation = function () {
        return null;
      };
    },
    _fetchData: function () {
      var _fetchData2 = Object(asyncToGenerator["a" /* default */])(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3() {
        var _this = this;

        var _this$$props, _this$$props$query, _this$$props$query$qu, query, _this$$props$query$va, variables, _this$$props$mutation, _this$$props$mutation2, mutation, _this$$props$mutation3, mutationVariables, subscription, _this$$props$onSubscr, onSubscriptionMsg, hasValidQuery, hasValidMutation, hasValidSubscription, response, subscriptionQuery, subscriptionVariables, observable;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _this$$props = this.$props, _this$$props$query = _this$$props.query;
                _this$$props$query = _this$$props$query === void 0 ? {} : _this$$props$query;
                _this$$props$query$qu = _this$$props$query.query, query = _this$$props$query$qu === void 0 ? null : _this$$props$query$qu, _this$$props$query$va = _this$$props$query.variables, variables = _this$$props$query$va === void 0 ? {} : _this$$props$query$va, _this$$props$mutation = _this$$props.mutation;
                _this$$props$mutation = _this$$props$mutation === void 0 ? {} : _this$$props$mutation;
                _this$$props$mutation2 = _this$$props$mutation.query, mutation = _this$$props$mutation2 === void 0 ? null : _this$$props$mutation2, _this$$props$mutation3 = _this$$props$mutation.variables, mutationVariables = _this$$props$mutation3 === void 0 ? {} : _this$$props$mutation3, subscription = _this$$props.subscription, _this$$props$onSubscr = _this$$props.onSubscriptionMsg, onSubscriptionMsg = _this$$props$onSubscr === void 0 ? function (prevData) {
                  return prevData;
                } : _this$$props$onSubscr;

                this._setDefaultState();

                if (!(!this.$Amplify.API || typeof this.$Amplify.API.graphql !== 'function' || typeof this.$Amplify.API.getGraphqlOperationType !== 'function')) {
                  _context3.next = 8;
                  break;
                }

                throw new Error('No API module found, please ensure @aws-amplify/api is imported');

              case 8:
                hasValidQuery = query && this.$Amplify.API.getGraphqlOperationType(query) === 'query';
                hasValidMutation = mutation && this.$Amplify.API.getGraphqlOperationType(mutation) === 'mutation';
                hasValidSubscription = subscription && subscription.query && this.$Amplify.API.getGraphqlOperationType(subscription.query) === 'subscription';

                if (!hasValidQuery && !hasValidMutation && !hasValidSubscription) {
                  this.logger.warn('No query, mutation, or subscription was specified');
                }

                if (!hasValidQuery) {
                  _context3.next = 27;
                  break;
                }

                _context3.prev = 13;
                this.data = {};
                this.loading = true;
                _context3.next = 18;
                return this.$Amplify.API.graphql({
                  query: query,
                  variables: variables
                });

              case 18:
                response = _context3.sent;
                this.data = response.data;
                _context3.next = 27;
                break;

              case 22:
                _context3.prev = 22;
                _context3.t0 = _context3["catch"](13);
                this.logger.warn(_context3.t0);
                this.errors = _context3.t0.errors;
                this.$emit('error', _context3.t0);

              case 27:
                if (hasValidMutation) {
                  this.isMutation = true;
                  this.internalMutation =
                  /*#__PURE__*/
                  Object(asyncToGenerator["a" /* default */])(
                  /*#__PURE__*/
                  regeneratorRuntime.mark(function _callee2() {
                    var result;
                    return regeneratorRuntime.wrap(function _callee2$(_context2) {
                      while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            _context2.next = 2;
                            return _this.$Amplify.API.graphql({
                              query: mutation,
                              variables: mutationVariables
                            });

                          case 2:
                            result = _context2.sent;

                            _this.$emit('done', result);

                            return _context2.abrupt("return", result);

                          case 5:
                          case "end":
                            return _context2.stop();
                        }
                      }
                    }, _callee2, this);
                  }));
                }

                if (hasValidSubscription) {
                  subscriptionQuery = subscription.query, subscriptionVariables = subscription.variables;

                  try {
                    observable = this.$Amplify.API.graphql({
                      query: subscriptionQuery,
                      variables: subscriptionVariables
                    });
                    this.watchedSubscription = observable.subscribe({
                      next: function next(_ref2) {
                        var data = _ref2.value.data;
                        var prevData = {
                          data: _this.data,
                          errors: _this.errors,
                          loading: _this.loading
                        };
                        _this.data = onSubscriptionMsg(prevData, data);
                      },
                      error: function error(_error) {
                        return _this.logger.warn(_error);
                      }
                    });
                  } catch (error) {
                    this.errors = error.errors;
                  }
                }

                this.loading = false;

              case 30:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[13, 22]]);
      }));

      return function _fetchData() {
        return _fetchData2.apply(this, arguments);
      };
    }(),
    _unsubscribe: function _unsubscribe() {
      if (this.watchedSubscription) {
        this.watchedSubscription.unsubscribe();
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/api/graphql/Connect.vue?vue&type=script&lang=js&
 /* harmony default export */ var graphql_Connectvue_type_script_lang_js_ = (Connectvue_type_script_lang_js_); 
// CONCATENATED MODULE: /root/app/node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/components/api/graphql/Connect.vue





/* normalize component */

var component = normalizeComponent(
  graphql_Connectvue_type_script_lang_js_,
  Connectvue_type_template_id_3096abc6_render,
  Connectvue_type_template_id_3096abc6_staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "Connect.vue"
/* harmony default export */ var Connect = (component.exports);
// CONCATENATED MODULE: ./src/components/api/index.js


external_commonjs_vue_commonjs2_vue_root_Vue_default.a.component('amplify-connect', Connect);

// CONCATENATED MODULE: /root/app/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0f87e5ee-vue-loader-template"}!/root/app/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/root/app/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!/root/app/node_modules/vue-loader/lib??vue-loader-options!./src/components/authenticator/SignIn.vue?vue&type=template&id=0097760f&
var SignInvue_type_template_id_0097760f_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.amplifyUI.formSection},[_c('div',{class:_vm.amplifyUI.sectionHeader},[_vm._v(_vm._s(_vm.options.header))]),_c('div',{class:_vm.amplifyUI.sectionBody},[_c('div',{class:_vm.amplifyUI.formField},[_c('div',{class:_vm.amplifyUI.inputLabel},[_vm._v(_vm._s(_vm.$Amplify.I18n.get('Username'))+" *")]),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.options.username),expression:"options.username"}],class:_vm.amplifyUI.input,attrs:{"placeholder":_vm.$Amplify.I18n.get('Enter your username'),"autofocus":""},domProps:{"value":(_vm.options.username)},on:{"keyup":function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.signIn($event)},"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.options, "username", $event.target.value)}}})]),_c('div',{class:_vm.amplifyUI.formField},[_c('div',{class:_vm.amplifyUI.inputLabel},[_vm._v(_vm._s(_vm.$Amplify.I18n.get('Password'))+" *")]),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.password),expression:"password"}],class:_vm.amplifyUI.input,attrs:{"type":"password","placeholder":_vm.$Amplify.I18n.get('Enter your password')},domProps:{"value":(_vm.password)},on:{"keyup":function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.signIn($event)},"input":function($event){if($event.target.composing){ return; }_vm.password=$event.target.value}}}),_c('div',{class:_vm.amplifyUI.hint},[_vm._v("\n        "+_vm._s(_vm.$Amplify.I18n.get('Forget your password? '))+"\n        "),_c('a',{class:_vm.amplifyUI.a,on:{"click":_vm.forgot}},[_vm._v(_vm._s(_vm.$Amplify.I18n.get('Reset password')))])])])]),_c('div',{class:_vm.amplifyUI.sectionFooter},[_c('span',{class:_vm.amplifyUI.sectionFooterPrimaryContent},[_c('button',{class:_vm.amplifyUI.button,on:{"click":_vm.signIn}},[_vm._v(_vm._s(_vm.$Amplify.I18n.get('Sign In')))])]),(_vm.options.isSignUpDisplayed)?_c('span',{class:_vm.amplifyUI.sectionFooterSecondaryContent},[_vm._v("\n      "+_vm._s(_vm.$Amplify.I18n.get('No account? '))+"\n      "),_c('a',{class:_vm.amplifyUI.a,on:{"click":_vm.signUp}},[_vm._v(_vm._s(_vm.$Amplify.I18n.get('Create account')))])]):_vm._e()]),(_vm.error)?_c('div',{staticClass:"error"},[_vm._v("\n    "+_vm._s(_vm.error)+"\n  ")]):_vm._e()])}
var SignInvue_type_template_id_0097760f_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/authenticator/SignIn.vue?vue&type=template&id=0097760f&

// EXTERNAL MODULE: /root/app/node_modules/core-js/modules/es6.function.name.js
var es6_function_name = __webpack_require__("c880");

// EXTERNAL MODULE: /root/app/node_modules/core-js/modules/es6.object.assign.js
var es6_object_assign = __webpack_require__("3cdf");

// EXTERNAL MODULE: ./src/events/AmplifyEventBus.js
var AmplifyEventBus = __webpack_require__("b600");

// EXTERNAL MODULE: ./node_modules/@aws-amplify/ui/dist/aws-amplify-ui.js
var aws_amplify_ui = __webpack_require__("bd89");

// CONCATENATED MODULE: /root/app/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--12-0!/root/app/node_modules/@vue/cli-service/node_modules/thread-loader/dist/cjs.js!/root/app/node_modules/@vue/cli-plugin-babel/node_modules/babel-loader/lib!/root/app/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!/root/app/node_modules/vue-loader/lib??vue-loader-options!./src/components/authenticator/SignIn.vue?vue&type=script&lang=js&


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// import Auth from '@aws-amplify/auth';


/* harmony default export */ var SignInvue_type_script_lang_js_ = ({
  name: 'SignIn',
  props: ['signInConfig'],
  data: function data() {
    return {
      password: '',
      error: '',
      amplifyUI: aws_amplify_ui,
      logger: {}
    };
  },
  computed: {
    options: function options() {
      var defaults = {
        header: this.$Amplify.I18n.get('Sign In Account'),
        username: '',
        isSignUpDisplayed: true
      };
      return Object.assign(defaults, this.signInConfig || {});
    }
  },
  mounted: function mounted() {
    this.logger = new this.$Amplify.Logger(this.$options.name);
  },
  methods: {
    signIn: function signIn(event) {
      var _this = this;

      var that = this;
      this.$Amplify.Auth.signIn(this.options.username, this.password).then(function (data) {
        _this.logger.info('sign in success');

        if (data.challengeName === 'SMS_MFA' || data.challengeName === 'SOFTWARE_TOKEN_MFA') {
          AmplifyEventBus["a" /* default */].$emit('localUser', data);
          return AmplifyEventBus["a" /* default */].$emit('authState', 'confirmSignIn');
        } else if (data.challengeName === 'NEW_PASSWORD_REQUIRED') {
          AmplifyEventBus["a" /* default */].$emit('localUser', data);
          return AmplifyEventBus["a" /* default */].$emit('authState', 'requireNewPassword');
        } else if (data.challengeName === 'MFA_SETUP') {
          AmplifyEventBus["a" /* default */].$emit('localUser', data);
          return AmplifyEventBus["a" /* default */].$emit('authState', 'setMfa');
        } else {
          return AmplifyEventBus["a" /* default */].$emit('authState', 'signedIn');
        }
      }).catch(function (e) {
        return _this.setError(e);
      });
    },
    forgot: function forgot() {
      AmplifyEventBus["a" /* default */].$emit('authState', 'forgotPassword');
    },
    signUp: function signUp() {
      AmplifyEventBus["a" /* default */].$emit('authState', 'signUp');
    },
    setError: function setError(e) {
      this.error = this.$Amplify.I18n.get(e.message || e);
      this.logger.error(this.error);
    }
  }
});
// CONCATENATED MODULE: ./src/components/authenticator/SignIn.vue?vue&type=script&lang=js&
 /* harmony default export */ var authenticator_SignInvue_type_script_lang_js_ = (SignInvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/authenticator/SignIn.vue





/* normalize component */

var SignIn_component = normalizeComponent(
  authenticator_SignInvue_type_script_lang_js_,
  SignInvue_type_template_id_0097760f_render,
  SignInvue_type_template_id_0097760f_staticRenderFns,
  false,
  null,
  null,
  null
  
)

SignIn_component.options.__file = "SignIn.vue"
/* harmony default export */ var SignIn = (SignIn_component.exports);
// CONCATENATED MODULE: /root/app/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0f87e5ee-vue-loader-template"}!/root/app/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/root/app/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!/root/app/node_modules/vue-loader/lib??vue-loader-options!./src/components/authenticator/SignUp.vue?vue&type=template&id=538a4d8e&
var SignUpvue_type_template_id_538a4d8e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.amplifyUI.formSection},[_c('div',{class:_vm.amplifyUI.sectionHeader},[_vm._v(_vm._s(this.options.header))]),_c('div',{class:_vm.amplifyUI.sectionBody},_vm._l((_vm.orderBy(this.options.signUpFields, 'displayOrder')),function(signUpField){return _c('div',{key:signUpField.key,class:_vm.amplifyUI.formField,attrs:{"signUpField":signUpField}},[_c('div',{class:_vm.amplifyUI.inputLabel},[_vm._v(_vm._s(signUpField.label)+" "+_vm._s(signUpField.required ? '*': ''))]),((signUpField.type)==='checkbox'&&(signUpField.key !== 'phone_number'))?_c('input',{directives:[{name:"model",rawName:"v-model",value:(signUpField.value),expression:"signUpField.value"}],class:[_vm.amplifyUI.input, signUpField.invalid ? 'invalid': ''],attrs:{"placeholder":signUpField.label,"type":"checkbox"},domProps:{"checked":Array.isArray(signUpField.value)?_vm._i(signUpField.value,null)>-1:(signUpField.value)},on:{"change":[function($event){var $$a=signUpField.value,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.$set(signUpField, "value", $$a.concat([$$v])))}else{$$i>-1&&(_vm.$set(signUpField, "value", $$a.slice(0,$$i).concat($$a.slice($$i+1))))}}else{_vm.$set(signUpField, "value", $$c)}},function($event){_vm.clear(signUpField)}]}}):((signUpField.type)==='radio'&&(signUpField.key !== 'phone_number'))?_c('input',{directives:[{name:"model",rawName:"v-model",value:(signUpField.value),expression:"signUpField.value"}],class:[_vm.amplifyUI.input, signUpField.invalid ? 'invalid': ''],attrs:{"placeholder":signUpField.label,"type":"radio"},domProps:{"checked":_vm._q(signUpField.value,null)},on:{"change":[function($event){_vm.$set(signUpField, "value", null)},function($event){_vm.clear(signUpField)}]}}):(signUpField.key !== 'phone_number')?_c('input',{directives:[{name:"model",rawName:"v-model",value:(signUpField.value),expression:"signUpField.value"}],class:[_vm.amplifyUI.input, signUpField.invalid ? 'invalid': ''],attrs:{"placeholder":signUpField.label,"type":signUpField.type},domProps:{"value":(signUpField.value)},on:{"change":function($event){_vm.clear(signUpField)},"input":function($event){if($event.target.composing){ return; }_vm.$set(signUpField, "value", $event.target.value)}}}):_vm._e(),(signUpField.key === 'phone_number')?_c('div',{class:_vm.amplifyUI.selectInput},[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.country),expression:"country"}],on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.country=$event.target.multiple ? $$selectedVal : $$selectedVal[0]}}},_vm._l((_vm.countries),function(country){return _c('option',{key:country.label},[_vm._v(_vm._s(country.label))])})),_c('input',{directives:[{name:"model",rawName:"v-model",value:(signUpField.value),expression:"signUpField.value"}],class:[_vm.amplifyUI.input, signUpField.invalid ? 'invalid': ''],attrs:{"type":"number","placeholder":signUpField.label},domProps:{"value":(signUpField.value)},on:{"change":function($event){_vm.clear(signUpField)},"input":function($event){if($event.target.composing){ return; }_vm.$set(signUpField, "value", $event.target.value)}}})]):_vm._e()])})),_c('div',{class:_vm.amplifyUI.sectionFooter},[_c('span',{class:_vm.amplifyUI.sectionFooterPrimaryContent},[_c('button',{class:_vm.amplifyUI.button,on:{"click":_vm.signUp}},[_vm._v(_vm._s(_vm.$Amplify.I18n.get('Create account')))])]),_c('span',{class:_vm.amplifyUI.sectionFooterSecondaryContent},[_vm._v("\n      "+_vm._s(_vm.$Amplify.I18n.get('Have an account? '))+"\n      "),_c('a',{class:_vm.amplifyUI.a,on:{"click":_vm.signIn}},[_vm._v(_vm._s(_vm.$Amplify.I18n.get('Sign In')))])])]),(_vm.error)?_c('div',{staticClass:"error"},[_vm._v("\n    "+_vm._s(_vm.error)+"\n  ")]):_vm._e()])}
var SignUpvue_type_template_id_538a4d8e_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/authenticator/SignUp.vue?vue&type=template&id=538a4d8e&

// EXTERNAL MODULE: /root/app/node_modules/core-js/modules/es6.array.sort.js
var es6_array_sort = __webpack_require__("632c");

// EXTERNAL MODULE: /root/app/node_modules/core-js/modules/es6.array.find-index.js
var es6_array_find_index = __webpack_require__("0e30");

// EXTERNAL MODULE: /root/app/node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__("2e73");

// EXTERNAL MODULE: /root/app/node_modules/core-js/modules/es7.array.includes.js
var es7_array_includes = __webpack_require__("4f72");

// EXTERNAL MODULE: /root/app/node_modules/core-js/modules/es6.string.includes.js
var es6_string_includes = __webpack_require__("0d9c");

// EXTERNAL MODULE: /root/app/node_modules/core-js/modules/es6.array.find.js
var es6_array_find = __webpack_require__("288e");

// EXTERNAL MODULE: /root/app/node_modules/vue2-filters/dist/vue2-filters.js
var vue2_filters = __webpack_require__("3f83");
var vue2_filters_default = /*#__PURE__*/__webpack_require__.n(vue2_filters);

// CONCATENATED MODULE: ./src/assets/countries.js
var countries = [{
  countryCode: 'US',
  value: '1',
  label: 'USA (+1)'
}, {
  countryCode: 'GB',
  value: '44',
  label: 'UK (+44)'
}, {
  countryCode: 'DZ',
  value: '213',
  label: 'Algeria (+213)'
}, {
  countryCode: 'AD',
  value: '376',
  label: 'Andorra (+376)'
}, {
  countryCode: 'AO',
  value: '244',
  label: 'Angola (+244)'
}, {
  countryCode: 'AI',
  value: '1264',
  label: 'Anguilla (+1264)'
}, {
  countryCode: 'AG',
  value: '1268',
  label: 'Antigua & Barbuda (+1268)'
}, {
  countryCode: 'AR',
  value: '54',
  label: 'Argentina (+54)'
}, {
  countryCode: 'AM',
  value: '374',
  label: 'Armenia (+374)'
}, {
  countryCode: 'AW',
  value: '297',
  label: 'Aruba (+297)'
}, {
  countryCode: 'AU',
  value: '61',
  label: 'Australia (+61)'
}, {
  countryCode: 'AT',
  value: '43',
  label: 'Austria (+43)'
}, {
  countryCode: 'AZ',
  value: '994',
  label: 'Azerbaijan (+994)'
}, {
  countryCode: 'BS',
  value: '1242',
  label: 'Bahamas (+1242)'
}, {
  countryCode: 'BH',
  value: '973',
  label: 'Bahrain (+973)'
}, {
  countryCode: 'BD',
  value: '880',
  label: 'Bangladesh (+880)'
}, {
  countryCode: 'BB',
  value: '1246',
  label: 'Barbados (+1246)'
}, {
  countryCode: 'BY',
  value: '375',
  label: 'Belarus (+375)'
}, {
  countryCode: 'BE',
  value: '32',
  label: 'Belgium (+32)'
}, {
  countryCode: 'BZ',
  value: '501',
  label: 'Belize (+501)'
}, {
  countryCode: 'BJ',
  value: '229',
  label: 'Benin (+229)'
}, {
  countryCode: 'BM',
  value: '1441',
  label: 'Bermuda (+1441)'
}, {
  countryCode: 'BT',
  value: '975',
  label: 'Bhutan (+975)'
}, {
  countryCode: 'BO',
  value: '591',
  label: 'Bolivia (+591)'
}, {
  countryCode: 'BA',
  value: '387',
  label: 'Bosnia Herzegovina (+387)'
}, {
  countryCode: 'BW',
  value: '267',
  label: 'Botswana (+267)'
}, {
  countryCode: 'BR',
  value: '55',
  label: 'Brazil (+55)'
}, {
  countryCode: 'BN',
  value: '673',
  label: 'Brunei (+673)'
}, {
  countryCode: 'BG',
  value: '359',
  label: 'Bulgaria (+359)'
}, {
  countryCode: 'BF',
  value: '226',
  label: 'Burkina Faso (+226)'
}, {
  countryCode: 'BI',
  value: '257',
  label: 'Burundi (+257)'
}, {
  countryCode: 'KH',
  value: '855',
  label: 'Cambodia (+855)'
}, {
  countryCode: 'CM',
  value: '237',
  label: 'Cameroon (+237)'
}, {
  countryCode: 'CA',
  value: '1',
  label: 'Canada (+1)'
}, {
  countryCode: 'CV',
  value: '238',
  label: 'Cape Verde Islands (+238)'
}, {
  countryCode: 'KY',
  value: '1345',
  label: 'Cayman Islands (+1345)'
}, {
  countryCode: 'CF',
  value: '236',
  label: 'Central African Republic (+236)'
}, {
  countryCode: 'CL',
  value: '56',
  label: 'Chile (+56)'
}, {
  countryCode: 'CN',
  value: '86',
  label: 'China (+86)'
}, {
  countryCode: 'CO',
  value: '57',
  label: 'Colombia (+57)'
}, {
  countryCode: 'KM',
  value: '269',
  label: 'Comoros (+269)'
}, {
  countryCode: 'CG',
  value: '242',
  label: 'Congo (+242)'
}, {
  countryCode: 'CK',
  value: '682',
  label: 'Cook Islands (+682)'
}, {
  countryCode: 'CR',
  value: '506',
  label: 'Costa Rica (+506)'
}, {
  countryCode: 'HR',
  value: '385',
  label: 'Croatia (+385)'
}, {
  countryCode: 'CU',
  value: '53',
  label: 'Cuba (+53)'
}, {
  countryCode: 'CW',
  value: '599',
  label: 'Curacao (+599)'
}, {
  countryCode: 'CY',
  value: '90392',
  label: 'Cyprus North (+90392)'
}, {
  countryCode: 'CY',
  value: '357',
  label: 'Cyprus South (+357)'
}, {
  countryCode: 'CZ',
  value: '42',
  label: 'Czech Republic (+42)'
}, {
  countryCode: 'DK',
  value: '45',
  label: 'Denmark (+45)'
}, {
  countryCode: 'DJ',
  value: '253',
  label: 'Djibouti (+253)'
}, {
  countryCode: 'DM',
  value: '1809',
  label: 'Dominica (+1809)'
}, {
  countryCode: 'DO',
  value: '1809',
  label: 'Dominican Republic (+1809)'
}, {
  countryCode: 'EC',
  value: '593',
  label: 'Ecuador (+593)'
}, {
  countryCode: 'EG',
  value: '20',
  label: 'Egypt (+20)'
}, {
  countryCode: 'SV',
  value: '503',
  label: 'El Salvador (+503)'
}, {
  countryCode: 'GQ',
  value: '240',
  label: 'Equatorial Guinea (+240)'
}, {
  countryCode: 'ER',
  value: '291',
  label: 'Eritrea (+291)'
}, {
  countryCode: 'EE',
  value: '372',
  label: 'Estonia (+372)'
}, {
  countryCode: 'ET',
  value: '251',
  label: 'Ethiopia (+251)'
}, {
  countryCode: 'FK',
  value: '500',
  label: 'Falkland Islands (+500)'
}, {
  countryCode: 'FO',
  value: '298',
  label: 'Faroe Islands (+298)'
}, {
  countryCode: 'FJ',
  value: '679',
  label: 'Fiji (+679)'
}, {
  countryCode: 'FI',
  value: '358',
  label: 'Finland (+358)'
}, {
  countryCode: 'FR',
  value: '33',
  label: 'France (+33)'
}, {
  countryCode: 'GF',
  value: '594',
  label: 'French Guiana (+594)'
}, {
  countryCode: 'PF',
  value: '689',
  label: 'French Polynesia (+689)'
}, {
  countryCode: 'GA',
  value: '241',
  label: 'Gabon (+241)'
}, {
  countryCode: 'GM',
  value: '220',
  label: 'Gambia (+220)'
}, {
  countryCode: 'GE',
  value: '7880',
  label: 'Georgia (+7880)'
}, {
  countryCode: 'DE',
  value: '49',
  label: 'Germany (+49)'
}, {
  countryCode: 'GH',
  value: '233',
  label: 'Ghana (+233)'
}, {
  countryCode: 'GI',
  value: '350',
  label: 'Gibraltar (+350)'
}, {
  countryCode: 'GR',
  value: '30',
  label: 'Greece (+30)'
}, {
  countryCode: 'GL',
  value: '299',
  label: 'Greenland (+299)'
}, {
  countryCode: 'GD',
  value: '1473',
  label: 'Grenada (+1473)'
}, {
  countryCode: 'GP',
  value: '590',
  label: 'Guadeloupe (+590)'
}, {
  countryCode: 'GU',
  value: '671',
  label: 'Guam (+671)'
}, {
  countryCode: 'GT',
  value: '502',
  label: 'Guatemala (+502)'
}, {
  countryCode: 'GN',
  value: '224',
  label: 'Guinea (+224)'
}, {
  countryCode: 'GW',
  value: '245',
  label: 'Guinea - Bissau (+245)'
}, {
  countryCode: 'GY',
  value: '592',
  label: 'Guyana (+592)'
}, {
  countryCode: 'HT',
  value: '509',
  label: 'Haiti (+509)'
}, {
  countryCode: 'HN',
  value: '504',
  label: 'Honduras (+504)'
}, {
  countryCode: 'HK',
  value: '852',
  label: 'Hong Kong (+852)'
}, {
  countryCode: 'HU',
  value: '36',
  label: 'Hungary (+36)'
}, {
  countryCode: 'IS',
  value: '354',
  label: 'Iceland (+354)'
}, {
  countryCode: 'IN',
  value: '91',
  label: 'India (+91)'
}, {
  countryCode: 'ID',
  value: '62',
  label: 'Indonesia (+62)'
}, {
  countryCode: 'IR',
  value: '98',
  label: 'Iran (+98)'
}, {
  countryCode: 'IQ',
  value: '964',
  label: 'Iraq (+964)'
}, {
  countryCode: 'IE',
  value: '353',
  label: 'Ireland (+353)'
}, {
  countryCode: 'IL',
  value: '972',
  label: 'Israel (+972)'
}, {
  countryCode: 'IT',
  value: '39',
  label: 'Italy (+39)'
}, {
  countryCode: 'JM',
  value: '1876',
  label: 'Jamaica (+1876)'
}, {
  countryCode: 'JP',
  value: '81',
  label: 'Japan (+81)'
}, {
  countryCode: 'JO',
  value: '962',
  label: 'Jordan (+962)'
}, {
  countryCode: 'KZ',
  value: '7',
  label: 'Kazakhstan (+7)'
}, {
  countryCode: 'KE',
  value: '254',
  label: 'Kenya (+254)'
}, {
  countryCode: 'KI',
  value: '686',
  label: 'Kiribati (+686)'
}, {
  countryCode: 'KP',
  value: '850',
  label: 'Korea North (+850)'
}, {
  countryCode: 'KR',
  value: '82',
  label: 'Korea South (+82)'
}, {
  countryCode: 'KW',
  value: '965',
  label: 'Kuwait (+965)'
}, {
  countryCode: 'KG',
  value: '996',
  label: 'Kyrgyzstan (+996)'
}, {
  countryCode: 'LA',
  value: '856',
  label: 'Laos (+856)'
}, {
  countryCode: 'LV',
  value: '371',
  label: 'Latvia (+371)'
}, {
  countryCode: 'LB',
  value: '961',
  label: 'Lebanon (+961)'
}, {
  countryCode: 'LS',
  value: '266',
  label: 'Lesotho (+266)'
}, {
  countryCode: 'LR',
  value: '231',
  label: 'Liberia (+231)'
}, {
  countryCode: 'LY',
  value: '218',
  label: 'Libya (+218)'
}, {
  countryCode: 'LI',
  value: '417',
  label: 'Liechtenstein (+417)'
}, {
  countryCode: 'LT',
  value: '370',
  label: 'Lithuania (+370)'
}, {
  countryCode: 'LU',
  value: '352',
  label: 'Luxembourg (+352)'
}, {
  countryCode: 'MO',
  value: '853',
  label: 'Macao (+853)'
}, {
  countryCode: 'MK',
  value: '389',
  label: 'Macedonia (+389)'
}, {
  countryCode: 'MG',
  value: '261',
  label: 'Madagascar (+261)'
}, {
  countryCode: 'MW',
  value: '265',
  label: 'Malawi (+265)'
}, {
  countryCode: 'MY',
  value: '60',
  label: 'Malaysia (+60)'
}, {
  countryCode: 'MV',
  value: '960',
  label: 'Maldives (+960)'
}, {
  countryCode: 'ML',
  value: '223',
  label: 'Mali (+223)'
}, {
  countryCode: 'MT',
  value: '356',
  label: 'Malta (+356)'
}, {
  countryCode: 'MH',
  value: '692',
  label: 'Marshall Islands (+692)'
}, {
  countryCode: 'MQ',
  value: '596',
  label: 'Martinique (+596)'
}, {
  countryCode: 'MR',
  value: '222',
  label: 'Mauritania (+222)'
}, {
  countryCode: 'YT',
  value: '269',
  label: 'Mayotte (+269)'
}, {
  countryCode: 'MX',
  value: '52',
  label: 'Mexico (+52)'
}, {
  countryCode: 'FM',
  value: '691',
  label: 'Micronesia (+691)'
}, {
  countryCode: 'MD',
  value: '373',
  label: 'Moldova (+373)'
}, {
  countryCode: 'MC',
  value: '377',
  label: 'Monaco (+377)'
}, {
  countryCode: 'MN',
  value: '976',
  label: 'Mongolia (+976)'
}, {
  countryCode: 'MS',
  value: '1664',
  label: 'Montserrat (+1664)'
}, {
  countryCode: 'MA',
  value: '212',
  label: 'Morocco (+212)'
}, {
  countryCode: 'MZ',
  value: '258',
  label: 'Mozambique (+258)'
}, {
  countryCode: 'MN',
  value: '95',
  label: 'Myanmar (+95)'
}, {
  countryCode: 'NA',
  value: '264',
  label: 'Namibia (+264)'
}, {
  countryCode: 'NR',
  value: '674',
  label: 'Nauru (+674)'
}, {
  countryCode: 'NP',
  value: '977',
  label: 'Nepal (+977)'
}, {
  countryCode: 'NL',
  value: '31',
  label: 'Netherlands (+31)'
}, {
  countryCode: 'NC',
  value: '687',
  label: 'New Caledonia (+687)'
}, {
  countryCode: 'NZ',
  value: '64',
  label: 'New Zealand (+64)'
}, {
  countryCode: 'NI',
  value: '505',
  label: 'Nicaragua (+505)'
}, {
  countryCode: 'NE',
  value: '227',
  label: 'Niger (+227)'
}, {
  countryCode: 'NG',
  value: '234',
  label: 'Nigeria (+234)'
}, {
  countryCode: 'NU',
  value: '683',
  label: 'Niue (+683)'
}, {
  countryCode: 'NF',
  value: '672',
  label: 'Norfolk Islands (+672)'
}, {
  countryCode: 'NP',
  value: '670',
  label: 'Northern Marianas (+670)'
}, {
  countryCode: 'NO',
  value: '47',
  label: 'Norway (+47)'
}, {
  countryCode: 'OM',
  value: '968',
  label: 'Oman (+968)'
}, {
  countryCode: 'PW',
  value: '680',
  label: 'Palau (+680)'
}, {
  countryCode: 'PA',
  value: '507',
  label: 'Panama (+507)'
}, {
  countryCode: 'PG',
  value: '675',
  label: 'Papua New Guinea (+675)'
}, {
  countryCode: 'PY',
  value: '595',
  label: 'Paraguay (+595)'
}, {
  countryCode: 'PE',
  value: '51',
  label: 'Peru (+51)'
}, {
  countryCode: 'PH',
  value: '63',
  label: 'Philippines (+63)'
}, {
  countryCode: 'PL',
  value: '48',
  label: 'Poland (+48)'
}, {
  countryCode: 'PT',
  value: '351',
  label: 'Portugal (+351)'
}, {
  countryCode: 'PR',
  value: '1787',
  label: 'Puerto Rico (+1787)'
}, {
  countryCode: 'QA',
  value: '974',
  label: 'Qatar (+974)'
}, {
  countryCode: 'RE',
  value: '262',
  label: 'Reunion (+262)'
}, {
  countryCode: 'RO',
  value: '40',
  label: 'Romania (+40)'
}, {
  countryCode: 'RU',
  value: '7',
  label: 'Russia (+7)'
}, {
  countryCode: 'RW',
  value: '250',
  label: 'Rwanda (+250)'
}, {
  countryCode: 'SM',
  value: '378',
  label: 'San Marino (+378)'
}, {
  countryCode: 'ST',
  value: '239',
  label: 'Sao Tome & Principe (+239)'
}, {
  countryCode: 'SA',
  value: '966',
  label: 'Saudi Arabia (+966)'
}, {
  countryCode: 'SN',
  value: '221',
  label: 'Senegal (+221)'
}, {
  countryCode: 'CS',
  value: '381',
  label: 'Serbia (+381)'
}, {
  countryCode: 'SC',
  value: '248',
  label: 'Seychelles (+248)'
}, {
  countryCode: 'SL',
  value: '232',
  label: 'Sierra Leone (+232)'
}, {
  countryCode: 'SG',
  value: '65',
  label: 'Singapore (+65)'
}, {
  countryCode: 'SX',
  value: '1',
  label: 'Sint Maarten (+1)'
}, {
  countryCode: 'SK',
  value: '421',
  label: 'Slovak Republic (+421)'
}, {
  countryCode: 'SI',
  value: '386',
  label: 'Slovenia (+386)'
}, {
  countryCode: 'SB',
  value: '677',
  label: 'Solomon Islands (+677)'
}, {
  countryCode: 'SO',
  value: '252',
  label: 'Somalia (+252)'
}, {
  countryCode: 'ZA',
  value: '27',
  label: 'South Africa (+27)'
}, {
  countryCode: 'ES',
  value: '34',
  label: 'Spain (+34)'
}, {
  countryCode: 'LK',
  value: '94',
  label: 'Sri Lanka (+94)'
}, {
  countryCode: 'SH',
  value: '290',
  label: 'St. Helena (+290)'
}, {
  countryCode: 'KN',
  value: '1869',
  label: 'St. Kitts (+1869)'
}, {
  countryCode: 'SC',
  value: '1758',
  label: 'St. Lucia (+1758)'
}, {
  countryCode: 'SD',
  value: '249',
  label: 'Sudan (+249)'
}, {
  countryCode: 'SR',
  value: '597',
  label: 'Suriname (+597)'
}, {
  countryCode: 'SZ',
  value: '268',
  label: 'Swaziland (+268)'
}, {
  countryCode: 'SE',
  value: '46',
  label: 'Sweden (+46)'
}, {
  countryCode: 'CH',
  value: '41',
  label: 'Switzerland (+41)'
}, {
  countryCode: 'SI',
  value: '963',
  label: 'Syria (+963)'
}, {
  countryCode: 'TW',
  value: '886',
  label: 'Taiwan (+886)'
}, {
  countryCode: 'TJ',
  value: '7',
  label: 'Tajikstan (+7)'
}, {
  countryCode: 'TH',
  value: '66',
  label: 'Thailand (+66)'
}, {
  countryCode: 'TG',
  value: '228',
  label: 'Togo (+228)'
}, {
  countryCode: 'TO',
  value: '676',
  label: 'Tonga (+676)'
}, {
  countryCode: 'TT',
  value: '1868',
  label: 'Trinidad & Tobago (+1868)'
}, {
  countryCode: 'TN',
  value: '216',
  label: 'Tunisia (+216)'
}, {
  countryCode: 'TR',
  value: '90',
  label: 'Turkey (+90)'
}, {
  countryCode: 'TM',
  value: '7',
  label: 'Turkmenistan (+7)'
}, {
  countryCode: 'TM',
  value: '993',
  label: 'Turkmenistan (+993)'
}, {
  countryCode: 'TC',
  value: '1649',
  label: 'Turks & Caicos Islands (+1649)'
}, {
  countryCode: 'TV',
  value: '688',
  label: 'Tuvalu (+688)'
}, {
  countryCode: 'UG',
  value: '256',
  label: 'Uganda (+256)'
}, {
  countryCode: 'UA',
  value: '380',
  label: 'Ukraine (+380)'
}, {
  countryCode: 'AE',
  value: '971',
  label: 'United Arab Emirates (+971)'
}, {
  countryCode: 'UY',
  value: '598',
  label: 'Uruguay (+598)'
}, {
  countryCode: 'UZ',
  value: '7',
  label: 'Uzbekistan (+7)'
}, {
  countryCode: 'VU',
  value: '678',
  label: 'Vanuatu (+678)'
}, {
  countryCode: 'VA',
  value: '379',
  label: 'Vatican City (+379)'
}, {
  countryCode: 'VE',
  value: '58',
  label: 'Venezuela (+58)'
}, {
  countryCode: 'VN',
  value: '84',
  label: 'Vietnam (+84)'
}, {
  countryCode: 'VG',
  value: '84',
  label: 'Virgin Islands - British (+1284)'
}, {
  countryCode: 'VI',
  value: '84',
  label: 'Virgin Islands - US (+1340)'
}, {
  countryCode: 'WF',
  value: '681',
  label: 'Wallis and Futuna (+681)'
}, {
  countryCode: 'YE',
  value: '969',
  label: 'Yemen (North) (+969)'
}, {
  countryCode: 'YE',
  value: '967',
  label: 'Yemen (South) (+967)'
}, {
  countryCode: 'ZM',
  value: '260',
  label: 'Zambia (+260)'
}, {
  countryCode: 'ZW',
  value: '263',
  label: 'Zimbabwe (+263)'
}];
/* harmony default export */ var assets_countries = (countries);
// CONCATENATED MODULE: /root/app/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--12-0!/root/app/node_modules/@vue/cli-service/node_modules/thread-loader/dist/cjs.js!/root/app/node_modules/@vue/cli-plugin-babel/node_modules/babel-loader/lib!/root/app/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!/root/app/node_modules/vue-loader/lib??vue-loader-options!./src/components/authenticator/SignUp.vue?vue&type=script&lang=js&








//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





external_commonjs_vue_commonjs2_vue_root_Vue_default.a.use(vue2_filters_default.a);
/* harmony default export */ var SignUpvue_type_script_lang_js_ = ({
  name: 'SignUp',
  props: ['signUpConfig'],
  data: function data() {
    return {
      country: 'USA (+1)',
      countryCode: '1',
      countries: assets_countries,
      amplifyUI: aws_amplify_ui,
      error: '',
      logger: {}
    };
  },
  computed: {
    options: function options() {
      var _this = this;

      var defaults = {
        header: this.$Amplify.I18n.get('Sign Up Account'),
        signUpFields: [{
          label: this.$Amplify.I18n.get('Username'),
          key: 'username',
          required: true,
          type: 'string',
          displayOrder: 1
        }, {
          label: this.$Amplify.I18n.get('Password'),
          key: 'password',
          required: true,
          type: 'password',
          displayOrder: 2
        }, {
          label: this.$Amplify.I18n.get('Email'),
          key: 'email',
          required: true,
          type: 'string',
          displayOrder: 3
        }, {
          label: this.$Amplify.I18n.get('Phone Number'),
          key: 'phone_number',
          required: true,
          displayOrder: 4
        }] // sets value in country code dropdown if defaultCountryCode value is present in props 

      };

      if (this.signUpConfig && this.signUpConfig.defaultCountryCode) {
        this.country = this.countries.find(function (c) {
          return c.value === _this.signUpConfig.defaultCountryCode;
        }).label;
      }

      ;

      if (this.signUpConfig && this.signUpConfig.hiddenDefaults && this.signUpConfig.hiddenDefaults.length > 0) {
        defaults.signUpFields = defaults.signUpFields.filter(function (d) {
          return !_this.signUpConfig.hiddenDefaults.includes(d.key);
        });
      } // begin looping through signUpFields


      if (this.signUpConfig && this.signUpConfig.signUpFields && this.signUpConfig.signUpFields.length > 0) {
        // if hideDefaults is not present on props...
        if (!this.signUpConfig.hideDefaults) {
          // ...add default fields to signUpField array unless user has passed in custom field with matching key
          defaults.signUpFields.forEach(function (f, i) {
            var matchKey = _this.signUpConfig.signUpFields.findIndex(function (d) {
              return d.key === f.key;
            });

            if (matchKey === -1) {
              _this.signUpConfig.signUpFields.push(f);
            }
          });
        }
        /* 
          sort fields based on following rules:
          1. Fields with displayOrder are sorted before those without displayOrder
          2. Fields with conflicting displayOrder are sorted alphabetically by key
          3. Fields without displayOrder are sorted alphabetically by key
        */


        this.signUpConfig.signUpFields.sort(function (a, b) {
          if (a.displayOrder && b.displayOrder) {
            if (a.displayOrder < b.displayOrder) {
              return -1;
            } else if (a.displayOrder > b.displayOrder) {
              return 1;
            } else {
              if (a.key < b.key) {
                return -1;
              } else {
                return 1;
              }
            }
          } else if (!a.displayOrder && b.displayOrder) {
            return -1;
          } else if (a.displayOrder && !b.displayOrder) {
            return 1;
          } else if (!a.displayOrder && !b.displayOrder) {
            if (a.key < b.key) {
              return 1;
            } else {
              return -1;
            }
          }
        });
      }

      return Object.assign(defaults, this.signUpConfig || {});
    }
  },
  mounted: function mounted() {
    this.logger = new this.$Amplify.Logger(this.$options.name);
  },
  watch: {
    /* 
    this operation is in place to avoid making country.value the select box 
    bound key, which results in a duplicate key error in console
    */
    country: function country() {
      var _this2 = this;

      this.countryCode = this.countries.find(function (c) {
        return c.label === _this2.country;
      }).value;
    }
  },
  methods: {
    signUp: function signUp() {
      var _this3 = this;

      if (!this.validate()) {
        return null;
      }

      var user = {
        attributes: {}
      }; // puts field data into 'Auth.signUp' parameter structure

      this.options.signUpFields.forEach(function (e) {
        if (e.key === 'username') {
          user.username = e.value;
        } else if (e.key === 'password') {
          user.password = e.value;
        } else if (e.key === 'phone_number' && e.value) {
          user.attributes.phone_number = "+".concat(_this3.countryCode).concat(e.value);
        } else {
          var newKey = "".concat(_this3.needPrefix(e.key) ? 'custom:' : '').concat(e.key);
          user.attributes[newKey] = e.value;
        }

        ;
      });
      this.$Amplify.Auth.signUp(user).then(function (data) {
        _this3.logger.info('sign up success');

        AmplifyEventBus["a" /* default */].$emit('localUser', data.user);

        if (data.userConfirmed === false) {
          return AmplifyEventBus["a" /* default */].$emit('authState', 'confirmSignUp');
        }

        return AmplifyEventBus["a" /* default */].$emit('authState', 'signedOut');
      }).catch(function (e) {
        return _this3.setError(e);
      });
    },
    validate: function validate() {
      var invalids = [];
      this.options.signUpFields.map(function (el) {
        if (el.required && !el.value) {
          invalids.push(el.label);
          external_commonjs_vue_commonjs2_vue_root_Vue_default.a.set(el, 'invalid', true);
        }

        return el;
      });

      if (invalids.length > 0) {
        this.setError("The following fields must be completed: ".concat(invalids.join(', ')));
      }

      return invalids.length < 1;
    },
    signIn: function signIn() {
      AmplifyEventBus["a" /* default */].$emit('authState', 'signedOut');
    },
    clear: function clear(field) {
      if (field && field.invalid && field.value) {
        external_commonjs_vue_commonjs2_vue_root_Vue_default.a.set(field, 'invalid', false);
      }
    },
    setError: function setError(e) {
      this.error = this.$Amplify.I18n.get(e.message || e);
      this.logger.error(this.error);
    },
    // determines whether or not key needs to be prepended with 'custom:' for Cognito User Pool custom attributes.
    needPrefix: function needPrefix(key) {
      var field = this.options.signUpFields.find(function (e) {
        return e.key === key;
      });

      if (key.indexOf('custom:') !== 0) {
        return field.custom;
      } else if (key.indexOf('custom:') === 0 && field.custom === false) {
        this.logger.warn('Custom prefix prepended to key but custom field flag is set to false');
      }

      return null;
    }
  }
});
// CONCATENATED MODULE: ./src/components/authenticator/SignUp.vue?vue&type=script&lang=js&
 /* harmony default export */ var authenticator_SignUpvue_type_script_lang_js_ = (SignUpvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/authenticator/SignUp.vue





/* normalize component */

var SignUp_component = normalizeComponent(
  authenticator_SignUpvue_type_script_lang_js_,
  SignUpvue_type_template_id_538a4d8e_render,
  SignUpvue_type_template_id_538a4d8e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

SignUp_component.options.__file = "SignUp.vue"
/* harmony default export */ var SignUp = (SignUp_component.exports);
// CONCATENATED MODULE: /root/app/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0f87e5ee-vue-loader-template"}!/root/app/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/root/app/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!/root/app/node_modules/vue-loader/lib??vue-loader-options!./src/components/authenticator/SignOut.vue?vue&type=template&id=5f43034c&
var SignOutvue_type_template_id_5f43034c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{class:_vm.amplifyUI.formField},[_c('div',{class:_vm.amplifyUI.inputLabel},[_vm._v(_vm._s(_vm.options.msg))]),_c('button',{class:_vm.amplifyUI.button,on:{"click":_vm.signOut}},[_vm._v(_vm._s(_vm.options.signOutButton))])]),(_vm.error)?_c('div',{staticClass:"error"},[_vm._v("\n    "+_vm._s(_vm.error)+"\n  ")]):_vm._e()])}
var SignOutvue_type_template_id_5f43034c_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/authenticator/SignOut.vue?vue&type=template&id=5f43034c&

// EXTERNAL MODULE: /root/app/node_modules/node-libs-browser/mock/empty.js
var empty = __webpack_require__("b90c");

// CONCATENATED MODULE: /root/app/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--12-0!/root/app/node_modules/@vue/cli-service/node_modules/thread-loader/dist/cjs.js!/root/app/node_modules/@vue/cli-plugin-babel/node_modules/babel-loader/lib!/root/app/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!/root/app/node_modules/vue-loader/lib??vue-loader-options!./src/components/authenticator/SignOut.vue?vue&type=script&lang=js&




//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var SignOutvue_type_script_lang_js_ = ({
  name: 'SignOut',
  props: ['signOutConfig'],
  data: function data() {
    return {
      error: '',
      show: false,
      amplifyUI: aws_amplify_ui,
      logger: {}
    };
  },
  computed: {
    options: function options() {
      var defaults = {
        msg: null,
        signOutButton: this.$Amplify.I18n.get('Sign Out')
      };
      return Object.assign(defaults, this.signOutConfig || {});
    }
  },
  mounted: function () {
    var _mounted = Object(asyncToGenerator["a" /* default */])(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              this.logger = new this.$Amplify.Logger(this.$options.name);

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    return function mounted() {
      return _mounted.apply(this, arguments);
    };
  }(),
  methods: {
    signOut: function signOut(event) {
      var _this = this;

      this.$Amplify.Auth.signOut().then(function () {
        _this.logger.info('signout success');

        return AmplifyEventBus["a" /* default */].$emit('authState', 'signedOut');
      }).catch(function (e) {
        return _this.setError(e);
      });
    },
    setError: function setError(e) {
      this.error = this.$Amplify.I18n.get(e.message || e);
      this.logger.error(this.error);
    }
  }
});
// CONCATENATED MODULE: ./src/components/authenticator/SignOut.vue?vue&type=script&lang=js&
 /* harmony default export */ var authenticator_SignOutvue_type_script_lang_js_ = (SignOutvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/authenticator/SignOut.vue





/* normalize component */

var SignOut_component = normalizeComponent(
  authenticator_SignOutvue_type_script_lang_js_,
  SignOutvue_type_template_id_5f43034c_render,
  SignOutvue_type_template_id_5f43034c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

SignOut_component.options.__file = "SignOut.vue"
/* harmony default export */ var SignOut = (SignOut_component.exports);
// CONCATENATED MODULE: /root/app/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0f87e5ee-vue-loader-template"}!/root/app/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/root/app/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!/root/app/node_modules/vue-loader/lib??vue-loader-options!./src/components/authenticator/ConfirmSignUp.vue?vue&type=template&id=fb3a677e&
var ConfirmSignUpvue_type_template_id_fb3a677e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.amplifyUI.formSection},[_c('div',{class:_vm.amplifyUI.sectionHeader},[_vm._v(_vm._s(_vm.options.header))]),_c('div',{class:_vm.amplifyUI.sectionBody},[_c('div',{class:_vm.amplifyUI.formField},[_c('div',{class:_vm.amplifyUI.inputLabel},[_vm._v(_vm._s(_vm.$Amplify.I18n.get('Username'))+" *")]),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.options.username),expression:"options.username"}],class:_vm.amplifyUI.input,attrs:{"name":"username","placeholder":_vm.$Amplify.I18n.get('Username'),"autofocus":""},domProps:{"value":(_vm.options.username)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.options, "username", $event.target.value)}}})]),_c('div',{class:_vm.amplifyUI.formField},[_c('div',{class:_vm.amplifyUI.inputLabel},[_vm._v(_vm._s(_vm.$Amplify.I18n.get('Confirmation Code'))+" *")]),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.code),expression:"code"}],class:_vm.amplifyUI.input,attrs:{"name":"code","placeholder":_vm.$Amplify.I18n.get('Confirmation Code')},domProps:{"value":(_vm.code)},on:{"input":function($event){if($event.target.composing){ return; }_vm.code=$event.target.value}}}),_c('div',{class:_vm.amplifyUI.hint},[_vm._v("\n        "+_vm._s(_vm.$Amplify.I18n.get('Lost your code? '))+"\n        "),_c('a',{class:_vm.amplifyUI.a,on:{"click":_vm.resend}},[_vm._v(_vm._s(_vm.$Amplify.I18n.get('Resend Code')))])])])]),_c('div',{class:_vm.amplifyUI.sectionFooter},[_c('span',{class:_vm.amplifyUI.sectionFooterPrimaryContent},[_c('button',{class:_vm.amplifyUI.button,on:{"click":_vm.confirm}},[_vm._v(_vm._s(_vm.$Amplify.I18n.get('Confirm')))])]),_c('span',{class:_vm.amplifyUI.sectionFooterSecondaryContent},[_vm._v("\n      "+_vm._s(_vm.$Amplify.I18n.get('Have an account? '))+"\n      "),_c('a',{class:_vm.amplifyUI.a,on:{"click":_vm.signIn}},[_vm._v(_vm._s(_vm.$Amplify.I18n.get('Back to Sign In')))])])]),(_vm.error)?_c('div',{staticClass:"error"},[_vm._v("\n    "+_vm._s(_vm.error)+"\n  ")]):_vm._e()])}
var ConfirmSignUpvue_type_template_id_fb3a677e_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/authenticator/ConfirmSignUp.vue?vue&type=template&id=fb3a677e&

// CONCATENATED MODULE: /root/app/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--12-0!/root/app/node_modules/@vue/cli-service/node_modules/thread-loader/dist/cjs.js!/root/app/node_modules/@vue/cli-plugin-babel/node_modules/babel-loader/lib!/root/app/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!/root/app/node_modules/vue-loader/lib??vue-loader-options!./src/components/authenticator/ConfirmSignUp.vue?vue&type=script&lang=js&


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var ConfirmSignUpvue_type_script_lang_js_ = ({
  name: 'ConfirmSignUp',
  props: ['confirmSignUpConfig'],
  data: function data() {
    return {
      code: '',
      error: '',
      logger: {},
      amplifyUI: aws_amplify_ui
    };
  },
  computed: {
    options: function options() {
      var defaults = {
        username: '',
        header: this.$Amplify.I18n.get('Confirm Sign Up')
      };
      return Object.assign(defaults, this.confirmSignUpConfig || {});
    }
  },
  mounted: function mounted() {
    this.logger = new this.$Amplify.Logger(this.$options.name);

    if (!this.options.username) {
      return this.setError('Valid username not received.');
    }

    ;
  },
  methods: {
    confirm: function confirm() {
      var _this = this;

      this.$Amplify.Auth.confirmSignUp(this.options.username, this.code).then(function () {
        _this.logger.info('confirmSignUp success');

        AmplifyEventBus["a" /* default */].$emit('authState', 'signedOut');
      }).catch(function (e) {
        return _this.setError(e);
      });
    },
    resend: function resend() {
      var _this2 = this;

      this.$Amplify.Auth.resendSignUp(this.options.username).then(function () {
        _this2.logger.info('resendSignUp success');
      }).catch(function (e) {
        return _this2.setError(e);
      });
    },
    signIn: function signIn() {
      AmplifyEventBus["a" /* default */].$emit('authState', 'signedOut');
    },
    setError: function setError(e) {
      this.error = this.$Amplify.I18n.get(e.message || e);
      this.logger.error(this.error);
    }
  }
});
// CONCATENATED MODULE: ./src/components/authenticator/ConfirmSignUp.vue?vue&type=script&lang=js&
 /* harmony default export */ var authenticator_ConfirmSignUpvue_type_script_lang_js_ = (ConfirmSignUpvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/authenticator/ConfirmSignUp.vue





/* normalize component */

var ConfirmSignUp_component = normalizeComponent(
  authenticator_ConfirmSignUpvue_type_script_lang_js_,
  ConfirmSignUpvue_type_template_id_fb3a677e_render,
  ConfirmSignUpvue_type_template_id_fb3a677e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

ConfirmSignUp_component.options.__file = "ConfirmSignUp.vue"
/* harmony default export */ var ConfirmSignUp = (ConfirmSignUp_component.exports);
// CONCATENATED MODULE: /root/app/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0f87e5ee-vue-loader-template"}!/root/app/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/root/app/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!/root/app/node_modules/vue-loader/lib??vue-loader-options!./src/components/authenticator/ConfirmSignIn.vue?vue&type=template&id=74269f25&
var ConfirmSignInvue_type_template_id_74269f25_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.amplifyUI.formSection},[_c('div',{class:_vm.amplifyUI.sectionHeader},[_vm._v(_vm._s(_vm.options.header))]),_c('div',{class:_vm.amplifyUI.sectionBody},[_c('div',{class:_vm.amplifyUI.formField},[_c('div',{class:_vm.amplifyUI.inputLabel},[_vm._v(_vm._s(_vm.$Amplify.I18n.get('Code'))+" *")]),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.code),expression:"code"}],class:_vm.amplifyUI.input,attrs:{"placeholder":_vm.$Amplify.I18n.get('Code')},domProps:{"value":(_vm.code)},on:{"input":function($event){if($event.target.composing){ return; }_vm.code=$event.target.value}}})])]),_c('div',{class:_vm.amplifyUI.sectionFooter},[_c('span',{class:_vm.amplifyUI.sectionFooterPrimaryContent},[_c('button',{class:_vm.amplifyUI.button,attrs:{"disabled":!_vm.code},on:{"click":_vm.submit}},[_vm._v(_vm._s(_vm.$Amplify.I18n.get('Confirm')))])]),_c('span',{class:_vm.amplifyUI.sectionFooterSecondaryContent},[_c('a',{class:_vm.amplifyUI.a,on:{"click":_vm.signIn}},[_vm._v(_vm._s(_vm.$Amplify.I18n.get('Back to Sign In')))])])]),(_vm.error)?_c('div',{staticClass:"error"},[_vm._v("\n    "+_vm._s(_vm.error)+"\n  ")]):_vm._e()])}
var ConfirmSignInvue_type_template_id_74269f25_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/authenticator/ConfirmSignIn.vue?vue&type=template&id=74269f25&

// EXTERNAL MODULE: /root/app/node_modules/core-js/modules/es6.array.iterator.js
var es6_array_iterator = __webpack_require__("dde3");

// EXTERNAL MODULE: /root/app/node_modules/core-js/modules/es6.object.keys.js
var es6_object_keys = __webpack_require__("0c1f");

// CONCATENATED MODULE: /root/app/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--12-0!/root/app/node_modules/@vue/cli-service/node_modules/thread-loader/dist/cjs.js!/root/app/node_modules/@vue/cli-plugin-babel/node_modules/babel-loader/lib!/root/app/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!/root/app/node_modules/vue-loader/lib??vue-loader-options!./src/components/authenticator/ConfirmSignIn.vue?vue&type=script&lang=js&





//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var ConfirmSignInvue_type_script_lang_js_ = ({
  name: 'ConfirmSignIn',
  props: ['confirmSignInConfig'],
  data: function data() {
    return {
      verifyAttr: '',
      code: '',
      error: '',
      logger: {},
      amplifyUI: aws_amplify_ui
    };
  },
  computed: {
    options: function options() {
      var defaults = {
        header: this.$Amplify.I18n.get('Confirm Sign In'),
        user: {}
      };
      return Object.assign(defaults, this.confirmSignInConfig || {});
    }
  },
  mounted: function mounted() {
    this.logger = new this.$Amplify.Logger(this.$options.name);

    if (Object.keys(this.options.user).length === 0) {
      this.setError('Valid user not received.');
    }

    ;
  },
  methods: {
    submit: function submit() {
      var _this = this;

      this.$Amplify.Auth.confirmSignIn(this.options.user, this.code, this.options.user.challengeName).then(function () {
        _this.logger.info('confirmSignIn successs');

        AmplifyEventBus["a" /* default */].$emit('authState', 'signedIn');
      }).catch(function (e) {
        return _this.setError(e);
      });
    },
    signIn: function signIn() {
      AmplifyEventBus["a" /* default */].$emit('authState', 'signedOut');
    },
    setError: function setError(e) {
      this.error = this.$Amplify.I18n.get(e.message || e);
      this.logger.error(this.error);
    }
  }
});
// CONCATENATED MODULE: ./src/components/authenticator/ConfirmSignIn.vue?vue&type=script&lang=js&
 /* harmony default export */ var authenticator_ConfirmSignInvue_type_script_lang_js_ = (ConfirmSignInvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/authenticator/ConfirmSignIn.vue





/* normalize component */

var ConfirmSignIn_component = normalizeComponent(
  authenticator_ConfirmSignInvue_type_script_lang_js_,
  ConfirmSignInvue_type_template_id_74269f25_render,
  ConfirmSignInvue_type_template_id_74269f25_staticRenderFns,
  false,
  null,
  null,
  null
  
)

ConfirmSignIn_component.options.__file = "ConfirmSignIn.vue"
/* harmony default export */ var ConfirmSignIn = (ConfirmSignIn_component.exports);
// CONCATENATED MODULE: /root/app/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0f87e5ee-vue-loader-template"}!/root/app/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/root/app/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!/root/app/node_modules/vue-loader/lib??vue-loader-options!./src/components/authenticator/ForgotPassword.vue?vue&type=template&id=7e23c191&
var ForgotPasswordvue_type_template_id_7e23c191_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.amplifyUI.formSection},[_c('div',{class:_vm.amplifyUI.sectionHeader},[_vm._v(_vm._s(_vm.options.header))]),_c('div',{class:_vm.amplifyUI.sectionBody},[_c('div',{class:_vm.amplifyUI.formField},[_c('div',{class:_vm.amplifyUI.inputLabel},[_vm._v(_vm._s(_vm.$Amplify.I18n.get('Username'))+" *")]),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.username),expression:"username"}],class:_vm.amplifyUI.input,attrs:{"placeholder":_vm.$Amplify.I18n.get('Enter your username'),"autofocus":""},domProps:{"value":(_vm.username)},on:{"input":function($event){if($event.target.composing){ return; }_vm.username=$event.target.value}}})]),(_vm.sent)?_c('div',{class:_vm.amplifyUI.formField},[_c('div',{class:_vm.amplifyUI.inputLabel},[_vm._v(_vm._s(_vm.$Amplify.I18n.get('Code'))+" *")]),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.code),expression:"code"}],class:_vm.amplifyUI.input,attrs:{"placeholder":_vm.$Amplify.I18n.get('Code'),"autofocus":""},domProps:{"value":(_vm.code)},on:{"input":function($event){if($event.target.composing){ return; }_vm.code=$event.target.value}}})]):_vm._e(),(_vm.sent)?_c('div',{class:_vm.amplifyUI.formField},[_c('div',{class:_vm.amplifyUI.inputLabel},[_vm._v(_vm._s(_vm.$Amplify.I18n.get('New Password'))+" *")]),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.password),expression:"password"}],class:_vm.amplifyUI.input,attrs:{"type":"password","placeholder":_vm.$Amplify.I18n.get('New Password'),"autofocus":""},domProps:{"value":(_vm.password)},on:{"input":function($event){if($event.target.composing){ return; }_vm.password=$event.target.value}}})]):_vm._e()]),_c('div',{class:_vm.amplifyUI.sectionFooter},[_c('span',{class:_vm.amplifyUI.sectionFooterPrimaryContent},[(!_vm.sent)?_c('button',{class:_vm.amplifyUI.button,attrs:{"disabled":!_vm.username},on:{"click":_vm.submit}},[_vm._v(_vm._s(_vm.$Amplify.I18n.get('Send Code')))]):_vm._e(),(_vm.sent)?_c('button',{class:_vm.amplifyUI.button,attrs:{"disabled":!_vm.username},on:{"click":_vm.verify}},[_vm._v(_vm._s(_vm.$Amplify.I18n.get('Submit')))]):_vm._e()]),_c('span',{class:_vm.amplifyUI.sectionFooterSecondaryContent},[(!_vm.sent)?_c('a',{class:_vm.amplifyUI.a,on:{"click":_vm.signIn}},[_vm._v(_vm._s(_vm.$Amplify.I18n.get('Back to Sign In')))]):_vm._e(),(_vm.sent)?_c('a',{class:_vm.amplifyUI.a,on:{"click":_vm.submit}},[_vm._v(_vm._s(_vm.$Amplify.I18n.get('Resend Code')))]):_vm._e()])]),(_vm.error)?_c('div',{staticClass:"error"},[_vm._v("\n    "+_vm._s(_vm.error)+"\n  ")]):_vm._e()])}
var ForgotPasswordvue_type_template_id_7e23c191_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/authenticator/ForgotPassword.vue?vue&type=template&id=7e23c191&

// CONCATENATED MODULE: /root/app/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--12-0!/root/app/node_modules/@vue/cli-service/node_modules/thread-loader/dist/cjs.js!/root/app/node_modules/@vue/cli-plugin-babel/node_modules/babel-loader/lib!/root/app/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!/root/app/node_modules/vue-loader/lib??vue-loader-options!./src/components/authenticator/ForgotPassword.vue?vue&type=script&lang=js&


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var ForgotPasswordvue_type_script_lang_js_ = ({
  name: 'ForgotPassword',
  props: ['forgotPasswordConfig'],
  data: function data() {
    return {
      username: '',
      code: '',
      password: '',
      error: '',
      sent: false,
      logger: {},
      amplifyUI: aws_amplify_ui
    };
  },
  computed: {
    options: function options() {
      var defaults = {
        header: this.$Amplify.I18n.get('Reset your password')
      };
      return Object.assign(defaults, this.forgotPasswordConfig || {});
    }
  },
  mounted: function mounted() {
    this.logger = new this.$Amplify.Logger(this.$options.name);
  },
  methods: {
    submit: function submit() {
      var _this = this;

      this.$Amplify.Auth.forgotPassword(this.username).then(function () {
        _this.sent = true;

        _this.logger.info('forgotPassword success');
      }).catch(function (e) {
        return _this.setError(e);
      });
    },
    verify: function verify() {
      var _this2 = this;

      this.$Amplify.Auth.forgotPasswordSubmit(this.username, this.code, this.password).then(function () {
        _this2.logger.info('forgotPasswordSubmit success');

        AmplifyEventBus["a" /* default */].$emit('authState', 'signedOut');
      }).catch(function (e) {
        return _this2.setError(e);
      });
    },
    signIn: function signIn() {
      AmplifyEventBus["a" /* default */].$emit('authState', 'signedOut');
    },
    setError: function setError(e) {
      this.error = this.$Amplify.I18n.get(e.message || e);
      this.logger.error(this.error);
    }
  }
});
// CONCATENATED MODULE: ./src/components/authenticator/ForgotPassword.vue?vue&type=script&lang=js&
 /* harmony default export */ var authenticator_ForgotPasswordvue_type_script_lang_js_ = (ForgotPasswordvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/authenticator/ForgotPassword.vue





/* normalize component */

var ForgotPassword_component = normalizeComponent(
  authenticator_ForgotPasswordvue_type_script_lang_js_,
  ForgotPasswordvue_type_template_id_7e23c191_render,
  ForgotPasswordvue_type_template_id_7e23c191_staticRenderFns,
  false,
  null,
  null,
  null
  
)

ForgotPassword_component.options.__file = "ForgotPassword.vue"
/* harmony default export */ var ForgotPassword = (ForgotPassword_component.exports);
// CONCATENATED MODULE: /root/app/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0f87e5ee-vue-loader-template"}!/root/app/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/root/app/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!/root/app/node_modules/vue-loader/lib??vue-loader-options!./src/components/authenticator/Authenticator.vue?vue&type=template&id=4939df7a&
var Authenticatorvue_type_template_id_4939df7a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(_vm.displayMap.showSignIn)?_c('amplify-sign-in',{attrs:{"signInConfig":_vm.options.signInConfig}}):_vm._e(),(_vm.displayMap.showSignUp)?_c('amplify-sign-up',{attrs:{"signUpConfig":_vm.options.signUpConfig}}):_vm._e(),(_vm.displayMap.showConfirmSignUp)?_c('amplify-confirm-sign-up',{attrs:{"confirmSignUpConfig":_vm.options.confirmSignUpConfig}}):_vm._e(),(_vm.displayMap.showConfirmSignIn)?_c('amplify-confirm-sign-in',{attrs:{"confirmSignInConfig":_vm.options.confirmSignInConfig}}):_vm._e(),(_vm.displayMap.showForgotPassword)?_c('amplify-forgot-password',{attrs:{"forgotPasswordConfig":_vm.options.forgotPasswordConfig}}):_vm._e(),(_vm.displayMap.requireNewPassword)?_c('amplify-require-new-password',{attrs:{"requireNewPasswordConfig":_vm.options.requireNewPasswordConfig}}):_vm._e(),(_vm.displayMap.showMfa)?_c('amplify-set-mfa',{attrs:{"mfaConfig":_vm.options.mfaConfig}}):_vm._e()],1)}
var Authenticatorvue_type_template_id_4939df7a_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/authenticator/Authenticator.vue?vue&type=template&id=4939df7a&

// CONCATENATED MODULE: ./src/services/getUser.js
/*
 * Copyright 2017-2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with
 * the License. A copy of the License is located at
 *
 *     http://aws.amazon.com/apache2.0/
 *
 * or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions
 * and limitations under the License.
 */
function GetUser(amplify) {
  return amplify.Auth.currentAuthenticatedUser().then(function (user) {
    if (!user) {
      return null;
    }

    return user;
  }).catch(function (e) {
    return new Error(e);
  });
}

/* harmony default export */ var getUser = (GetUser);
// CONCATENATED MODULE: /root/app/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--12-0!/root/app/node_modules/@vue/cli-service/node_modules/thread-loader/dist/cjs.js!/root/app/node_modules/@vue/cli-plugin-babel/node_modules/babel-loader/lib!/root/app/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!/root/app/node_modules/vue-loader/lib??vue-loader-options!./src/components/authenticator/Authenticator.vue?vue&type=script&lang=js&




//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var Authenticatorvue_type_script_lang_js_ = ({
  name: 'Authenticator',
  props: ['authConfig'],
  data: function data() {
    return {
      user: {
        username: null
      },
      displayMap: {},
      error: '',
      logger: {}
    };
  },
  computed: {
    options: function options() {
      var defaults = {
        signInConfig: {},
        signUpConfig: {},
        confirmSignUpConfig: {},
        confirmSignInConfig: {},
        forgotPasswordConfig: {},
        mfaConfig: {},
        requireNewPasswordConfig: {}
      };
      return Object.assign(defaults, this.authConfig || {});
    }
  },
  mounted: function () {
    var _mounted = Object(asyncToGenerator["a" /* default */])(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee() {
      var _this = this;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              this.logger = new this.$Amplify.Logger(this.$options.name);
              AmplifyEventBus["a" /* default */].$on('localUser', function (user) {
                _this.user = user;
                _this.options.signInConfig.username = _this.user.username;
                _this.options.confirmSignInConfig.user = _this.user;
                _this.options.confirmSignUpConfig.username = _this.user.username;
                _this.options.requireNewPasswordConfig.user = _this.user;
              });
              AmplifyEventBus["a" /* default */].$on('authState', function (data) {
                _this.displayMap = _this.updateDisplayMap(data);
              });
              getUser(this.$Amplify).then(function (val) {
                if (val instanceof Error) {
                  return _this.displayMap = _this.updateDisplayMap('signedOut');
                }

                _this.user = val;
                return _this.displayMap = _this.updateDisplayMap('signedIn');
              }).catch(function (e) {
                return _this.setError(e);
              });

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    return function mounted() {
      return _mounted.apply(this, arguments);
    };
  }(),
  methods: {
    updateDisplayMap: function updateDisplayMap(state) {
      return {
        showSignIn: state === 'signedOut',
        showSignUp: state === 'signUp',
        showConfirmSignUp: state === 'confirmSignUp',
        showConfirmSignIn: state === 'confirmSignIn',
        showForgotPassword: state === 'forgotPassword',
        showSignOut: state === 'signedIn',
        showMfa: state === 'setMfa',
        requireNewPassword: state === 'requireNewPassword'
      };
    },
    setError: function setError(e) {
      this.error = this.$Amplify.I18n.get(e.message || e);
      this.logger.error(this.error);
    }
  }
});
// CONCATENATED MODULE: ./src/components/authenticator/Authenticator.vue?vue&type=script&lang=js&
 /* harmony default export */ var authenticator_Authenticatorvue_type_script_lang_js_ = (Authenticatorvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/authenticator/Authenticator.vue





/* normalize component */

var Authenticator_component = normalizeComponent(
  authenticator_Authenticatorvue_type_script_lang_js_,
  Authenticatorvue_type_template_id_4939df7a_render,
  Authenticatorvue_type_template_id_4939df7a_staticRenderFns,
  false,
  null,
  null,
  null
  
)

Authenticator_component.options.__file = "Authenticator.vue"
/* harmony default export */ var Authenticator = (Authenticator_component.exports);
// CONCATENATED MODULE: /root/app/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0f87e5ee-vue-loader-template"}!/root/app/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/root/app/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!/root/app/node_modules/vue-loader/lib??vue-loader-options!./src/components/authenticator/SetMFA.vue?vue&type=template&id=3af9f71a&
var SetMFAvue_type_template_id_3af9f71a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.amplifyUI.formSection},[(!_vm.displayTotpSetup)?_c('div',{class:_vm.amplifyUI.sectionHeader},[_vm._v(_vm._s(_vm.options.header)+"\n    "),_c('div',{staticStyle:{"font-size":"16px","color":"#828282","margin-top":"10px"}},[_vm._v("\n      "+_vm._s(_vm.options.mfaDescription)+"\n    ")])]):_vm._e(),(_vm.displayTotpSetup)?_c('div',{class:_vm.amplifyUI.sectionHeader},[_vm._v(_vm._s(_vm.$Amplify.I18n.get('Verify Authentication Token'))+"\n    "),_c('div',{staticStyle:{"font-size":"16px","color":"#828282","margin-top":"10px"}},[_vm._v("\n      "+_vm._s(_vm.options.tokenInstructions)+"\n    ")])]):_vm._e(),(!_vm.displayTotpSetup)?_c('div',{class:_vm.amplifyUI.sectionBody},[(_vm.options.mfaTypes.includes('SMS'))?_c('div',{class:_vm.amplifyUI.formField},[_c('div',{class:_vm.amplifyUI.inputLabel},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.mfaPreference),expression:"mfaPreference"}],class:_vm.amplifyUI.radio,attrs:{"type":"radio","name":"mfaPreference","value":"SMS"},domProps:{"checked":_vm._q(_vm.mfaPreference,"SMS")},on:{"change":function($event){_vm.mfaPreference="SMS"}}}),_vm._v("\n          "+_vm._s(_vm.options.smsDescription)+"\n      ")])]):_vm._e(),(_vm.options.mfaTypes.includes('TOTP'))?_c('div',{class:_vm.amplifyUI.formField},[_c('div',{class:_vm.amplifyUI.inputLabel},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.mfaPreference),expression:"mfaPreference"}],class:_vm.amplifyUI.radio,attrs:{"type":"radio","name":"mfaPreference","value":"TOTP"},domProps:{"checked":_vm._q(_vm.mfaPreference,"TOTP")},on:{"change":function($event){_vm.mfaPreference="TOTP"}}}),_vm._v("  \n          "+_vm._s(_vm.options.totpDescription)+"\n      ")])]):_vm._e(),(_vm.options.mfaTypes.includes('None'))?_c('div',{class:_vm.amplifyUI.formField},[_c('div',{class:_vm.amplifyUI.inputLabel},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.mfaPreference),expression:"mfaPreference"}],class:_vm.amplifyUI.radio,attrs:{"type":"radio","name":"mfaPreference","value":"NOMFA"},domProps:{"checked":_vm._q(_vm.mfaPreference,"NOMFA")},on:{"change":function($event){_vm.mfaPreference="NOMFA"}}}),_vm._v("  \n          "+_vm._s(_vm.options.noMfaDescription)+"\n      ")])]):_vm._e()]):_vm._e(),(_vm.displayTotpSetup)?_c('div',{class:_vm.amplifyUI.sectionBody},[_c('qrcode-vue',{class:_vm.amplifyUI.totpQrcode,attrs:{"value":_vm.token,"size":300,"level":"H"}}),_c('div',{class:_vm.amplifyUI.formField},[_c('div',{class:_vm.amplifyUI.inputLabel},[_vm._v(_vm._s(_vm.$Amplify.I18n.get('Verification Code'))+" *")]),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.code),expression:"code"}],class:_vm.amplifyUI.input,attrs:{"placeholder":_vm.$Amplify.I18n.get('Verification Code'),"autofocus":""},domProps:{"value":(_vm.code)},on:{"input":function($event){if($event.target.composing){ return; }_vm.code=$event.target.value}}})])],1):_vm._e(),_c('div',{class:_vm.amplifyUI.sectionFooter},[_c('span',{class:_vm.amplifyUI.sectionFooterPrimaryContent},[(!_vm.displayTotpSetup)?_c('button',{class:_vm.amplifyUI.button,attrs:{"id":"setMfa"},on:{"click":_vm.setMFA}},[_vm._v(_vm._s(_vm.$Amplify.I18n.get('Set MFA')))]):_vm._e(),(_vm.displayTotpSetup)?_c('button',{class:_vm.amplifyUI.button,attrs:{"id":"verify"},on:{"click":_vm.verifyTotpToken}},[_vm._v(_vm._s(_vm.$Amplify.I18n.get('Verify Token')))]):_vm._e()]),_c('span',{class:_vm.amplifyUI.sectionFooterSecondaryContent},[_c('a',{class:_vm.amplifyUI.a,on:{"click":_vm.cancel}},[_vm._v(_vm._s(_vm.$Amplify.I18n.get('Cancel')))])])]),(_vm.error)?_c('div',{staticClass:"error"},[_vm._v("\n    "+_vm._s(_vm.error)+"\n  ")]):_vm._e()])}
var SetMFAvue_type_template_id_3af9f71a_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/authenticator/SetMFA.vue?vue&type=template&id=3af9f71a&

// CONCATENATED MODULE: /root/app/node_modules/qrcode.vue/dist/qrcode.vue.esm.js
/*!
 * qrcode.vue v1.6.1
 * A Vue component for QRCode.
 * © 2017-2018 @scopewu
 * MIT License.
 */
var mode = {
  MODE_NUMBER: 1 << 0,
  MODE_ALPHA_NUM: 1 << 1,
  MODE_8BIT_BYTE: 1 << 2,
  MODE_KANJI: 1 << 3
};

function QR8bitByte(data) {
  this.mode = mode.MODE_8BIT_BYTE;
  this.data = data;
}

QR8bitByte.prototype = {
  getLength: function (buffer) {
    return this.data.length;
  },
  write: function (buffer) {
    for (var i = 0; i < this.data.length; i++) {
      // not JIS ...
      buffer.put(this.data.charCodeAt(i), 8);
    }
  }
};
var _8BitByte = QR8bitByte;

var ErrorCorrectLevel = {
  L: 1,
  M: 0,
  Q: 3,
  H: 2
};

function QRRSBlock(totalCount, dataCount) {
  this.totalCount = totalCount;
  this.dataCount = dataCount;
}

QRRSBlock.RS_BLOCK_TABLE = [// L
// M
// Q
// H
// 1
[1, 26, 19], [1, 26, 16], [1, 26, 13], [1, 26, 9], // 2
[1, 44, 34], [1, 44, 28], [1, 44, 22], [1, 44, 16], // 3
[1, 70, 55], [1, 70, 44], [2, 35, 17], [2, 35, 13], // 4		
[1, 100, 80], [2, 50, 32], [2, 50, 24], [4, 25, 9], // 5
[1, 134, 108], [2, 67, 43], [2, 33, 15, 2, 34, 16], [2, 33, 11, 2, 34, 12], // 6
[2, 86, 68], [4, 43, 27], [4, 43, 19], [4, 43, 15], // 7		
[2, 98, 78], [4, 49, 31], [2, 32, 14, 4, 33, 15], [4, 39, 13, 1, 40, 14], // 8
[2, 121, 97], [2, 60, 38, 2, 61, 39], [4, 40, 18, 2, 41, 19], [4, 40, 14, 2, 41, 15], // 9
[2, 146, 116], [3, 58, 36, 2, 59, 37], [4, 36, 16, 4, 37, 17], [4, 36, 12, 4, 37, 13], // 10		
[2, 86, 68, 2, 87, 69], [4, 69, 43, 1, 70, 44], [6, 43, 19, 2, 44, 20], [6, 43, 15, 2, 44, 16], // 11
[4, 101, 81], [1, 80, 50, 4, 81, 51], [4, 50, 22, 4, 51, 23], [3, 36, 12, 8, 37, 13], // 12
[2, 116, 92, 2, 117, 93], [6, 58, 36, 2, 59, 37], [4, 46, 20, 6, 47, 21], [7, 42, 14, 4, 43, 15], // 13
[4, 133, 107], [8, 59, 37, 1, 60, 38], [8, 44, 20, 4, 45, 21], [12, 33, 11, 4, 34, 12], // 14
[3, 145, 115, 1, 146, 116], [4, 64, 40, 5, 65, 41], [11, 36, 16, 5, 37, 17], [11, 36, 12, 5, 37, 13], // 15
[5, 109, 87, 1, 110, 88], [5, 65, 41, 5, 66, 42], [5, 54, 24, 7, 55, 25], [11, 36, 12], // 16
[5, 122, 98, 1, 123, 99], [7, 73, 45, 3, 74, 46], [15, 43, 19, 2, 44, 20], [3, 45, 15, 13, 46, 16], // 17
[1, 135, 107, 5, 136, 108], [10, 74, 46, 1, 75, 47], [1, 50, 22, 15, 51, 23], [2, 42, 14, 17, 43, 15], // 18
[5, 150, 120, 1, 151, 121], [9, 69, 43, 4, 70, 44], [17, 50, 22, 1, 51, 23], [2, 42, 14, 19, 43, 15], // 19
[3, 141, 113, 4, 142, 114], [3, 70, 44, 11, 71, 45], [17, 47, 21, 4, 48, 22], [9, 39, 13, 16, 40, 14], // 20
[3, 135, 107, 5, 136, 108], [3, 67, 41, 13, 68, 42], [15, 54, 24, 5, 55, 25], [15, 43, 15, 10, 44, 16], // 21
[4, 144, 116, 4, 145, 117], [17, 68, 42], [17, 50, 22, 6, 51, 23], [19, 46, 16, 6, 47, 17], // 22
[2, 139, 111, 7, 140, 112], [17, 74, 46], [7, 54, 24, 16, 55, 25], [34, 37, 13], // 23
[4, 151, 121, 5, 152, 122], [4, 75, 47, 14, 76, 48], [11, 54, 24, 14, 55, 25], [16, 45, 15, 14, 46, 16], // 24
[6, 147, 117, 4, 148, 118], [6, 73, 45, 14, 74, 46], [11, 54, 24, 16, 55, 25], [30, 46, 16, 2, 47, 17], // 25
[8, 132, 106, 4, 133, 107], [8, 75, 47, 13, 76, 48], [7, 54, 24, 22, 55, 25], [22, 45, 15, 13, 46, 16], // 26
[10, 142, 114, 2, 143, 115], [19, 74, 46, 4, 75, 47], [28, 50, 22, 6, 51, 23], [33, 46, 16, 4, 47, 17], // 27
[8, 152, 122, 4, 153, 123], [22, 73, 45, 3, 74, 46], [8, 53, 23, 26, 54, 24], [12, 45, 15, 28, 46, 16], // 28
[3, 147, 117, 10, 148, 118], [3, 73, 45, 23, 74, 46], [4, 54, 24, 31, 55, 25], [11, 45, 15, 31, 46, 16], // 29
[7, 146, 116, 7, 147, 117], [21, 73, 45, 7, 74, 46], [1, 53, 23, 37, 54, 24], [19, 45, 15, 26, 46, 16], // 30
[5, 145, 115, 10, 146, 116], [19, 75, 47, 10, 76, 48], [15, 54, 24, 25, 55, 25], [23, 45, 15, 25, 46, 16], // 31
[13, 145, 115, 3, 146, 116], [2, 74, 46, 29, 75, 47], [42, 54, 24, 1, 55, 25], [23, 45, 15, 28, 46, 16], // 32
[17, 145, 115], [10, 74, 46, 23, 75, 47], [10, 54, 24, 35, 55, 25], [19, 45, 15, 35, 46, 16], // 33
[17, 145, 115, 1, 146, 116], [14, 74, 46, 21, 75, 47], [29, 54, 24, 19, 55, 25], [11, 45, 15, 46, 46, 16], // 34
[13, 145, 115, 6, 146, 116], [14, 74, 46, 23, 75, 47], [44, 54, 24, 7, 55, 25], [59, 46, 16, 1, 47, 17], // 35
[12, 151, 121, 7, 152, 122], [12, 75, 47, 26, 76, 48], [39, 54, 24, 14, 55, 25], [22, 45, 15, 41, 46, 16], // 36
[6, 151, 121, 14, 152, 122], [6, 75, 47, 34, 76, 48], [46, 54, 24, 10, 55, 25], [2, 45, 15, 64, 46, 16], // 37
[17, 152, 122, 4, 153, 123], [29, 74, 46, 14, 75, 47], [49, 54, 24, 10, 55, 25], [24, 45, 15, 46, 46, 16], // 38
[4, 152, 122, 18, 153, 123], [13, 74, 46, 32, 75, 47], [48, 54, 24, 14, 55, 25], [42, 45, 15, 32, 46, 16], // 39
[20, 147, 117, 4, 148, 118], [40, 75, 47, 7, 76, 48], [43, 54, 24, 22, 55, 25], [10, 45, 15, 67, 46, 16], // 40
[19, 148, 118, 6, 149, 119], [18, 75, 47, 31, 76, 48], [34, 54, 24, 34, 55, 25], [20, 45, 15, 61, 46, 16]];

QRRSBlock.getRSBlocks = function (typeNumber, errorCorrectLevel) {
  var rsBlock = QRRSBlock.getRsBlockTable(typeNumber, errorCorrectLevel);

  if (rsBlock == undefined) {
    throw new Error("bad rs block @ typeNumber:" + typeNumber + "/errorCorrectLevel:" + errorCorrectLevel);
  }

  var length = rsBlock.length / 3;
  var list = new Array();

  for (var i = 0; i < length; i++) {
    var count = rsBlock[i * 3 + 0];
    var totalCount = rsBlock[i * 3 + 1];
    var dataCount = rsBlock[i * 3 + 2];

    for (var j = 0; j < count; j++) {
      list.push(new QRRSBlock(totalCount, dataCount));
    }
  }

  return list;
};

QRRSBlock.getRsBlockTable = function (typeNumber, errorCorrectLevel) {
  switch (errorCorrectLevel) {
    case ErrorCorrectLevel.L:
      return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 0];

    case ErrorCorrectLevel.M:
      return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 1];

    case ErrorCorrectLevel.Q:
      return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 2];

    case ErrorCorrectLevel.H:
      return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 3];

    default:
      return undefined;
  }
};

var RSBlock = QRRSBlock;

function QRBitBuffer() {
  this.buffer = new Array();
  this.length = 0;
}

QRBitBuffer.prototype = {
  get: function (index) {
    var bufIndex = Math.floor(index / 8);
    return (this.buffer[bufIndex] >>> 7 - index % 8 & 1) == 1;
  },
  put: function (num, length) {
    for (var i = 0; i < length; i++) {
      this.putBit((num >>> length - i - 1 & 1) == 1);
    }
  },
  getLengthInBits: function () {
    return this.length;
  },
  putBit: function (bit) {
    var bufIndex = Math.floor(this.length / 8);

    if (this.buffer.length <= bufIndex) {
      this.buffer.push(0);
    }

    if (bit) {
      this.buffer[bufIndex] |= 0x80 >>> this.length % 8;
    }

    this.length++;
  }
};
var BitBuffer = QRBitBuffer;

var QRMath = {
  glog: function (n) {
    if (n < 1) {
      throw new Error("glog(" + n + ")");
    }

    return QRMath.LOG_TABLE[n];
  },
  gexp: function (n) {
    while (n < 0) {
      n += 255;
    }

    while (n >= 256) {
      n -= 255;
    }

    return QRMath.EXP_TABLE[n];
  },
  EXP_TABLE: new Array(256),
  LOG_TABLE: new Array(256)
};

for (var qrcode_vue_esm_i = 0; qrcode_vue_esm_i < 8; qrcode_vue_esm_i++) {
  QRMath.EXP_TABLE[qrcode_vue_esm_i] = 1 << qrcode_vue_esm_i;
}

for (var qrcode_vue_esm_i = 8; qrcode_vue_esm_i < 256; qrcode_vue_esm_i++) {
  QRMath.EXP_TABLE[qrcode_vue_esm_i] = QRMath.EXP_TABLE[qrcode_vue_esm_i - 4] ^ QRMath.EXP_TABLE[qrcode_vue_esm_i - 5] ^ QRMath.EXP_TABLE[qrcode_vue_esm_i - 6] ^ QRMath.EXP_TABLE[qrcode_vue_esm_i - 8];
}

for (var qrcode_vue_esm_i = 0; qrcode_vue_esm_i < 255; qrcode_vue_esm_i++) {
  QRMath.LOG_TABLE[QRMath.EXP_TABLE[qrcode_vue_esm_i]] = qrcode_vue_esm_i;
}

var math = QRMath;

function QRPolynomial(num, shift) {
  if (num.length == undefined) {
    throw new Error(num.length + "/" + shift);
  }

  var offset = 0;

  while (offset < num.length && num[offset] == 0) {
    offset++;
  }

  this.num = new Array(num.length - offset + shift);

  for (var i = 0; i < num.length - offset; i++) {
    this.num[i] = num[i + offset];
  }
}

QRPolynomial.prototype = {
  get: function (index) {
    return this.num[index];
  },
  getLength: function () {
    return this.num.length;
  },
  multiply: function (e) {
    var num = new Array(this.getLength() + e.getLength() - 1);

    for (var i = 0; i < this.getLength(); i++) {
      for (var j = 0; j < e.getLength(); j++) {
        num[i + j] ^= math.gexp(math.glog(this.get(i)) + math.glog(e.get(j)));
      }
    }

    return new QRPolynomial(num, 0);
  },
  mod: function (e) {
    if (this.getLength() - e.getLength() < 0) {
      return this;
    }

    var ratio = math.glog(this.get(0)) - math.glog(e.get(0));
    var num = new Array(this.getLength());

    for (var i = 0; i < this.getLength(); i++) {
      num[i] = this.get(i);
    }

    for (var i = 0; i < e.getLength(); i++) {
      num[i] ^= math.gexp(math.glog(e.get(i)) + ratio);
    } // recursive call


    return new QRPolynomial(num, 0).mod(e);
  }
};
var Polynomial = QRPolynomial;

var QRMaskPattern = {
  PATTERN000: 0,
  PATTERN001: 1,
  PATTERN010: 2,
  PATTERN011: 3,
  PATTERN100: 4,
  PATTERN101: 5,
  PATTERN110: 6,
  PATTERN111: 7
};
var QRUtil = {
  PATTERN_POSITION_TABLE: [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]],
  G15: 1 << 10 | 1 << 8 | 1 << 5 | 1 << 4 | 1 << 2 | 1 << 1 | 1 << 0,
  G18: 1 << 12 | 1 << 11 | 1 << 10 | 1 << 9 | 1 << 8 | 1 << 5 | 1 << 2 | 1 << 0,
  G15_MASK: 1 << 14 | 1 << 12 | 1 << 10 | 1 << 4 | 1 << 1,
  getBCHTypeInfo: function (data) {
    var d = data << 10;

    while (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G15) >= 0) {
      d ^= QRUtil.G15 << QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G15);
    }

    return (data << 10 | d) ^ QRUtil.G15_MASK;
  },
  getBCHTypeNumber: function (data) {
    var d = data << 12;

    while (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G18) >= 0) {
      d ^= QRUtil.G18 << QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G18);
    }

    return data << 12 | d;
  },
  getBCHDigit: function (data) {
    var digit = 0;

    while (data != 0) {
      digit++;
      data >>>= 1;
    }

    return digit;
  },
  getPatternPosition: function (typeNumber) {
    return QRUtil.PATTERN_POSITION_TABLE[typeNumber - 1];
  },
  getMask: function (maskPattern, i, j) {
    switch (maskPattern) {
      case QRMaskPattern.PATTERN000:
        return (i + j) % 2 == 0;

      case QRMaskPattern.PATTERN001:
        return i % 2 == 0;

      case QRMaskPattern.PATTERN010:
        return j % 3 == 0;

      case QRMaskPattern.PATTERN011:
        return (i + j) % 3 == 0;

      case QRMaskPattern.PATTERN100:
        return (Math.floor(i / 2) + Math.floor(j / 3)) % 2 == 0;

      case QRMaskPattern.PATTERN101:
        return i * j % 2 + i * j % 3 == 0;

      case QRMaskPattern.PATTERN110:
        return (i * j % 2 + i * j % 3) % 2 == 0;

      case QRMaskPattern.PATTERN111:
        return (i * j % 3 + (i + j) % 2) % 2 == 0;

      default:
        throw new Error("bad maskPattern:" + maskPattern);
    }
  },
  getErrorCorrectPolynomial: function (errorCorrectLength) {
    var a = new Polynomial([1], 0);

    for (var i = 0; i < errorCorrectLength; i++) {
      a = a.multiply(new Polynomial([1, math.gexp(i)], 0));
    }

    return a;
  },
  getLengthInBits: function (mode$$1, type) {
    if (1 <= type && type < 10) {
      // 1 - 9
      switch (mode$$1) {
        case mode.MODE_NUMBER:
          return 10;

        case mode.MODE_ALPHA_NUM:
          return 9;

        case mode.MODE_8BIT_BYTE:
          return 8;

        case mode.MODE_KANJI:
          return 8;

        default:
          throw new Error("mode:" + mode$$1);
      }
    } else if (type < 27) {
      // 10 - 26
      switch (mode$$1) {
        case mode.MODE_NUMBER:
          return 12;

        case mode.MODE_ALPHA_NUM:
          return 11;

        case mode.MODE_8BIT_BYTE:
          return 16;

        case mode.MODE_KANJI:
          return 10;

        default:
          throw new Error("mode:" + mode$$1);
      }
    } else if (type < 41) {
      // 27 - 40
      switch (mode$$1) {
        case mode.MODE_NUMBER:
          return 14;

        case mode.MODE_ALPHA_NUM:
          return 13;

        case mode.MODE_8BIT_BYTE:
          return 16;

        case mode.MODE_KANJI:
          return 12;

        default:
          throw new Error("mode:" + mode$$1);
      }
    } else {
      throw new Error("type:" + type);
    }
  },
  getLostPoint: function (qrCode) {
    var moduleCount = qrCode.getModuleCount();
    var lostPoint = 0; // LEVEL1

    for (var row = 0; row < moduleCount; row++) {
      for (var col = 0; col < moduleCount; col++) {
        var sameCount = 0;
        var dark = qrCode.isDark(row, col);

        for (var r = -1; r <= 1; r++) {
          if (row + r < 0 || moduleCount <= row + r) {
            continue;
          }

          for (var c = -1; c <= 1; c++) {
            if (col + c < 0 || moduleCount <= col + c) {
              continue;
            }

            if (r == 0 && c == 0) {
              continue;
            }

            if (dark == qrCode.isDark(row + r, col + c)) {
              sameCount++;
            }
          }
        }

        if (sameCount > 5) {
          lostPoint += 3 + sameCount - 5;
        }
      }
    } // LEVEL2


    for (var row = 0; row < moduleCount - 1; row++) {
      for (var col = 0; col < moduleCount - 1; col++) {
        var count = 0;
        if (qrCode.isDark(row, col)) count++;
        if (qrCode.isDark(row + 1, col)) count++;
        if (qrCode.isDark(row, col + 1)) count++;
        if (qrCode.isDark(row + 1, col + 1)) count++;

        if (count == 0 || count == 4) {
          lostPoint += 3;
        }
      }
    } // LEVEL3


    for (var row = 0; row < moduleCount; row++) {
      for (var col = 0; col < moduleCount - 6; col++) {
        if (qrCode.isDark(row, col) && !qrCode.isDark(row, col + 1) && qrCode.isDark(row, col + 2) && qrCode.isDark(row, col + 3) && qrCode.isDark(row, col + 4) && !qrCode.isDark(row, col + 5) && qrCode.isDark(row, col + 6)) {
          lostPoint += 40;
        }
      }
    }

    for (var col = 0; col < moduleCount; col++) {
      for (var row = 0; row < moduleCount - 6; row++) {
        if (qrCode.isDark(row, col) && !qrCode.isDark(row + 1, col) && qrCode.isDark(row + 2, col) && qrCode.isDark(row + 3, col) && qrCode.isDark(row + 4, col) && !qrCode.isDark(row + 5, col) && qrCode.isDark(row + 6, col)) {
          lostPoint += 40;
        }
      }
    } // LEVEL4


    var darkCount = 0;

    for (var col = 0; col < moduleCount; col++) {
      for (var row = 0; row < moduleCount; row++) {
        if (qrCode.isDark(row, col)) {
          darkCount++;
        }
      }
    }

    var ratio = Math.abs(100 * darkCount / moduleCount / moduleCount - 50) / 5;
    lostPoint += ratio * 10;
    return lostPoint;
  }
};
var util = QRUtil;

function QRCode(typeNumber, errorCorrectLevel) {
  this.typeNumber = typeNumber;
  this.errorCorrectLevel = errorCorrectLevel;
  this.modules = null;
  this.moduleCount = 0;
  this.dataCache = null;
  this.dataList = [];
} // for client side minification


var proto = QRCode.prototype;

proto.addData = function (data) {
  var newData = new _8BitByte(data);
  this.dataList.push(newData);
  this.dataCache = null;
};

proto.isDark = function (row, col) {
  if (row < 0 || this.moduleCount <= row || col < 0 || this.moduleCount <= col) {
    throw new Error(row + "," + col);
  }

  return this.modules[row][col];
};

proto.getModuleCount = function () {
  return this.moduleCount;
};

proto.make = function () {
  // Calculate automatically typeNumber if provided is < 1
  if (this.typeNumber < 1) {
    var typeNumber = 1;

    for (typeNumber = 1; typeNumber < 40; typeNumber++) {
      var rsBlocks = RSBlock.getRSBlocks(typeNumber, this.errorCorrectLevel);
      var buffer = new BitBuffer();
      var totalDataCount = 0;

      for (var i = 0; i < rsBlocks.length; i++) {
        totalDataCount += rsBlocks[i].dataCount;
      }

      for (var i = 0; i < this.dataList.length; i++) {
        var data = this.dataList[i];
        buffer.put(data.mode, 4);
        buffer.put(data.getLength(), util.getLengthInBits(data.mode, typeNumber));
        data.write(buffer);
      }

      if (buffer.getLengthInBits() <= totalDataCount * 8) break;
    }

    this.typeNumber = typeNumber;
  }

  this.makeImpl(false, this.getBestMaskPattern());
};

proto.makeImpl = function (test, maskPattern) {
  this.moduleCount = this.typeNumber * 4 + 17;
  this.modules = new Array(this.moduleCount);

  for (var row = 0; row < this.moduleCount; row++) {
    this.modules[row] = new Array(this.moduleCount);

    for (var col = 0; col < this.moduleCount; col++) {
      this.modules[row][col] = null; //(col + row) % 3;
    }
  }

  this.setupPositionProbePattern(0, 0);
  this.setupPositionProbePattern(this.moduleCount - 7, 0);
  this.setupPositionProbePattern(0, this.moduleCount - 7);
  this.setupPositionAdjustPattern();
  this.setupTimingPattern();
  this.setupTypeInfo(test, maskPattern);

  if (this.typeNumber >= 7) {
    this.setupTypeNumber(test);
  }

  if (this.dataCache == null) {
    this.dataCache = QRCode.createData(this.typeNumber, this.errorCorrectLevel, this.dataList);
  }

  this.mapData(this.dataCache, maskPattern);
};

proto.setupPositionProbePattern = function (row, col) {
  for (var r = -1; r <= 7; r++) {
    if (row + r <= -1 || this.moduleCount <= row + r) continue;

    for (var c = -1; c <= 7; c++) {
      if (col + c <= -1 || this.moduleCount <= col + c) continue;

      if (0 <= r && r <= 6 && (c == 0 || c == 6) || 0 <= c && c <= 6 && (r == 0 || r == 6) || 2 <= r && r <= 4 && 2 <= c && c <= 4) {
        this.modules[row + r][col + c] = true;
      } else {
        this.modules[row + r][col + c] = false;
      }
    }
  }
};

proto.getBestMaskPattern = function () {
  var minLostPoint = 0;
  var pattern = 0;

  for (var i = 0; i < 8; i++) {
    this.makeImpl(true, i);
    var lostPoint = util.getLostPoint(this);

    if (i == 0 || minLostPoint > lostPoint) {
      minLostPoint = lostPoint;
      pattern = i;
    }
  }

  return pattern;
};

proto.createMovieClip = function (target_mc, instance_name, depth) {
  var qr_mc = target_mc.createEmptyMovieClip(instance_name, depth);
  var cs = 1;
  this.make();

  for (var row = 0; row < this.modules.length; row++) {
    var y = row * cs;

    for (var col = 0; col < this.modules[row].length; col++) {
      var x = col * cs;
      var dark = this.modules[row][col];

      if (dark) {
        qr_mc.beginFill(0, 100);
        qr_mc.moveTo(x, y);
        qr_mc.lineTo(x + cs, y);
        qr_mc.lineTo(x + cs, y + cs);
        qr_mc.lineTo(x, y + cs);
        qr_mc.endFill();
      }
    }
  }

  return qr_mc;
};

proto.setupTimingPattern = function () {
  for (var r = 8; r < this.moduleCount - 8; r++) {
    if (this.modules[r][6] != null) {
      continue;
    }

    this.modules[r][6] = r % 2 == 0;
  }

  for (var c = 8; c < this.moduleCount - 8; c++) {
    if (this.modules[6][c] != null) {
      continue;
    }

    this.modules[6][c] = c % 2 == 0;
  }
};

proto.setupPositionAdjustPattern = function () {
  var pos = util.getPatternPosition(this.typeNumber);

  for (var i = 0; i < pos.length; i++) {
    for (var j = 0; j < pos.length; j++) {
      var row = pos[i];
      var col = pos[j];

      if (this.modules[row][col] != null) {
        continue;
      }

      for (var r = -2; r <= 2; r++) {
        for (var c = -2; c <= 2; c++) {
          if (r == -2 || r == 2 || c == -2 || c == 2 || r == 0 && c == 0) {
            this.modules[row + r][col + c] = true;
          } else {
            this.modules[row + r][col + c] = false;
          }
        }
      }
    }
  }
};

proto.setupTypeNumber = function (test) {
  var bits = util.getBCHTypeNumber(this.typeNumber);

  for (var i = 0; i < 18; i++) {
    var mod = !test && (bits >> i & 1) == 1;
    this.modules[Math.floor(i / 3)][i % 3 + this.moduleCount - 8 - 3] = mod;
  }

  for (var i = 0; i < 18; i++) {
    var mod = !test && (bits >> i & 1) == 1;
    this.modules[i % 3 + this.moduleCount - 8 - 3][Math.floor(i / 3)] = mod;
  }
};

proto.setupTypeInfo = function (test, maskPattern) {
  var data = this.errorCorrectLevel << 3 | maskPattern;
  var bits = util.getBCHTypeInfo(data); // vertical		

  for (var i = 0; i < 15; i++) {
    var mod = !test && (bits >> i & 1) == 1;

    if (i < 6) {
      this.modules[i][8] = mod;
    } else if (i < 8) {
      this.modules[i + 1][8] = mod;
    } else {
      this.modules[this.moduleCount - 15 + i][8] = mod;
    }
  } // horizontal


  for (var i = 0; i < 15; i++) {
    var mod = !test && (bits >> i & 1) == 1;

    if (i < 8) {
      this.modules[8][this.moduleCount - i - 1] = mod;
    } else if (i < 9) {
      this.modules[8][15 - i - 1 + 1] = mod;
    } else {
      this.modules[8][15 - i - 1] = mod;
    }
  } // fixed module


  this.modules[this.moduleCount - 8][8] = !test;
};

proto.mapData = function (data, maskPattern) {
  var inc = -1;
  var row = this.moduleCount - 1;
  var bitIndex = 7;
  var byteIndex = 0;

  for (var col = this.moduleCount - 1; col > 0; col -= 2) {
    if (col == 6) col--;

    while (true) {
      for (var c = 0; c < 2; c++) {
        if (this.modules[row][col - c] == null) {
          var dark = false;

          if (byteIndex < data.length) {
            dark = (data[byteIndex] >>> bitIndex & 1) == 1;
          }

          var mask = util.getMask(maskPattern, row, col - c);

          if (mask) {
            dark = !dark;
          }

          this.modules[row][col - c] = dark;
          bitIndex--;

          if (bitIndex == -1) {
            byteIndex++;
            bitIndex = 7;
          }
        }
      }

      row += inc;

      if (row < 0 || this.moduleCount <= row) {
        row -= inc;
        inc = -inc;
        break;
      }
    }
  }
};

QRCode.PAD0 = 0xEC;
QRCode.PAD1 = 0x11;

QRCode.createData = function (typeNumber, errorCorrectLevel, dataList) {
  var rsBlocks = RSBlock.getRSBlocks(typeNumber, errorCorrectLevel);
  var buffer = new BitBuffer();

  for (var i = 0; i < dataList.length; i++) {
    var data = dataList[i];
    buffer.put(data.mode, 4);
    buffer.put(data.getLength(), util.getLengthInBits(data.mode, typeNumber));
    data.write(buffer);
  } // calc num max data.


  var totalDataCount = 0;

  for (var i = 0; i < rsBlocks.length; i++) {
    totalDataCount += rsBlocks[i].dataCount;
  }

  if (buffer.getLengthInBits() > totalDataCount * 8) {
    throw new Error("code length overflow. (" + buffer.getLengthInBits() + ">" + totalDataCount * 8 + ")");
  } // end code


  if (buffer.getLengthInBits() + 4 <= totalDataCount * 8) {
    buffer.put(0, 4);
  } // padding


  while (buffer.getLengthInBits() % 8 != 0) {
    buffer.putBit(false);
  } // padding


  while (true) {
    if (buffer.getLengthInBits() >= totalDataCount * 8) {
      break;
    }

    buffer.put(QRCode.PAD0, 8);

    if (buffer.getLengthInBits() >= totalDataCount * 8) {
      break;
    }

    buffer.put(QRCode.PAD1, 8);
  }

  return QRCode.createBytes(buffer, rsBlocks);
};

QRCode.createBytes = function (buffer, rsBlocks) {
  var offset = 0;
  var maxDcCount = 0;
  var maxEcCount = 0;
  var dcdata = new Array(rsBlocks.length);
  var ecdata = new Array(rsBlocks.length);

  for (var r = 0; r < rsBlocks.length; r++) {
    var dcCount = rsBlocks[r].dataCount;
    var ecCount = rsBlocks[r].totalCount - dcCount;
    maxDcCount = Math.max(maxDcCount, dcCount);
    maxEcCount = Math.max(maxEcCount, ecCount);
    dcdata[r] = new Array(dcCount);

    for (var i = 0; i < dcdata[r].length; i++) {
      dcdata[r][i] = 0xff & buffer.buffer[i + offset];
    }

    offset += dcCount;
    var rsPoly = util.getErrorCorrectPolynomial(ecCount);
    var rawPoly = new Polynomial(dcdata[r], rsPoly.getLength() - 1);
    var modPoly = rawPoly.mod(rsPoly);
    ecdata[r] = new Array(rsPoly.getLength() - 1);

    for (var i = 0; i < ecdata[r].length; i++) {
      var modIndex = i + modPoly.getLength() - ecdata[r].length;
      ecdata[r][i] = modIndex >= 0 ? modPoly.get(modIndex) : 0;
    }
  }

  var totalCodeCount = 0;

  for (var i = 0; i < rsBlocks.length; i++) {
    totalCodeCount += rsBlocks[i].totalCount;
  }

  var data = new Array(totalCodeCount);
  var index = 0;

  for (var i = 0; i < maxDcCount; i++) {
    for (var r = 0; r < rsBlocks.length; r++) {
      if (i < dcdata[r].length) {
        data[index++] = dcdata[r][i];
      }
    }
  }

  for (var i = 0; i < maxEcCount; i++) {
    for (var r = 0; r < rsBlocks.length; r++) {
      if (i < ecdata[r].length) {
        data[index++] = ecdata[r][i];
      }
    }
  }

  return data;
};

var QRCode_1 = QRCode;

function getBackingStorePixelRatio(ctx) {
  return ctx.webkitBackingStorePixelRatio || ctx.mozBackingStorePixelRatio || ctx.msBackingStorePixelRatio || ctx.oBackingStorePixelRatio || ctx.backingStorePixelRatio || 1;
}
/**
 * Encode UTF16 to UTF8.
 * See: http://jonisalonen.com/2012/from-utf-16-to-utf-8-in-javascript/
 * @param str {string}
 * @returns {string}
 */


function toUTF8String(str) {
  var utf8Str = '';

  for (var i = 0; i < str.length; i++) {
    var charCode = str.charCodeAt(i);

    if (charCode < 0x0080) {
      utf8Str += String.fromCharCode(charCode);
    } else if (charCode < 0x0800) {
      utf8Str += String.fromCharCode(0xc0 | charCode >> 6);
      utf8Str += String.fromCharCode(0x80 | charCode & 0x3f);
    } else if (charCode < 0xd800 || charCode >= 0xe000) {
      utf8Str += String.fromCharCode(0xe0 | charCode >> 12);
      utf8Str += String.fromCharCode(0x80 | charCode >> 6 & 0x3f);
      utf8Str += String.fromCharCode(0x80 | charCode & 0x3f);
    } else {
      // surrogate pair
      i++; // UTF-16 encodes 0x10000-0x10FFFF by
      // subtracting 0x10000 and splitting the
      // 20 bits of 0x0-0xFFFFF into two halves

      charCode = 0x10000 + ((charCode & 0x3ff) << 10 | str.charCodeAt(i) & 0x3ff);
      utf8Str += String.fromCharCode(0xf0 | charCode >> 18);
      utf8Str += String.fromCharCode(0x80 | charCode >> 12 & 0x3f);
      utf8Str += String.fromCharCode(0x80 | charCode >> 6 & 0x3f);
      utf8Str += String.fromCharCode(0x80 | charCode & 0x3f);
    }
  }

  return utf8Str;
}

var QrcodeVue = {
  render: function render(createElement) {
    var className = this.className,
        value = this.value,
        level = this.level,
        background = this.background,
        foreground = this.foreground,
        size = this.size;
    return createElement('div', {
      'class': className,
      attrs: {
        value: value,
        level: level,
        background: background,
        foreground: foreground
      }
    }, [createElement('canvas', {
      attrs: {
        height: size,
        width: size
      },
      style: {
        width: size + 'px',
        height: size + 'px'
      },
      ref: 'qrcode-vue'
    }, [])]);
  },
  props: {
    value: {
      type: String,
      required: true,
      default: ''
    },
    className: {
      type: String,
      default: ''
    },
    size: {
      type: [Number, String],
      default: 100,
      validator: function validator(s) {
        return isNaN(Number(s)) !== true;
      }
    },
    level: {
      type: String,
      default: 'L',
      validator: function validator(l) {
        return ['L', 'Q', 'M', 'H'].indexOf(l) > -1;
      }
    },
    background: {
      type: String,
      default: '#fff'
    },
    foreground: {
      type: String,
      default: '#000'
    }
  },
  methods: {
    render: function render() {
      var value = this.value,
          size = this.size,
          level = this.level,
          background = this.background,
          foreground = this.foreground;

      var _size = size >>> 0; // size to number
      // We'll use type===-1 to force QRCode to automatically pick the best type


      var qrCode = new QRCode_1(-1, ErrorCorrectLevel[level]);
      qrCode.addData(toUTF8String(value));
      qrCode.make();
      var canvas = this.$refs['qrcode-vue'];
      var ctx = canvas.getContext('2d');
      var cells = qrCode.modules;
      var tileW = _size / cells.length;
      var tileH = _size / cells.length;
      var scale = (window.devicePixelRatio || 1) / getBackingStorePixelRatio(ctx);
      canvas.height = canvas.width = _size * scale;
      ctx.scale(scale, scale);
      cells.forEach(function (row, rdx) {
        row.forEach(function (cell, cdx) {
          ctx.fillStyle = cell ? foreground : background;
          var w = Math.ceil((cdx + 1) * tileW) - Math.floor(cdx * tileW);
          var h = Math.ceil((rdx + 1) * tileH) - Math.floor(rdx * tileH);
          ctx.fillRect(Math.round(cdx * tileW), Math.round(rdx * tileH), w, h);
        });
      });
    }
  },
  updated: function updated() {
    this.render();
  },
  mounted: function mounted() {
    this.render();
  }
};

/* harmony default export */ var qrcode_vue_esm = (QrcodeVue);

// CONCATENATED MODULE: /root/app/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--12-0!/root/app/node_modules/@vue/cli-service/node_modules/thread-loader/dist/cjs.js!/root/app/node_modules/@vue/cli-plugin-babel/node_modules/babel-loader/lib!/root/app/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!/root/app/node_modules/vue-loader/lib??vue-loader-options!./src/components/authenticator/SetMFA.vue?vue&type=script&lang=js&




//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// import Auth from '@aws-amplify/auth';



/* harmony default export */ var SetMFAvue_type_script_lang_js_ = ({
  name: 'SetMfa',
  props: ['mfaConfig'],
  data: function data() {
    return {
      user: null,
      mfaPreference: null,
      code: null,
      token: null,
      error: '',
      displayTotpSetup: false,
      amplifyUI: aws_amplify_ui,
      logger: {}
    };
  },
  components: {
    QrcodeVue: qrcode_vue_esm
  },
  mounted: function mounted() {
    this.logger = new this.$Amplify.Logger(this.$options.name);
    this.setUser();
  },
  computed: {
    options: function options() {
      var defaults = {
        header: 'Multifactor Authentication Preference',
        mfaDescription: 'AWS Multi-Factor Authentication (MFA) adds an extra layer of protection on top of your user name and password.',
        tokenInstructions: 'Scan the QR Code with your phone camera or authentication app to get the MFA code.',
        smsDescription: 'SMS text messaging (receive a code on your mobile device)',
        totpDescription: 'One-time password (use a QR code and MFA app to save a token on your mobile device)',
        noMfaDescription: 'Do not enable MFA',
        mfaTypes: []
      };
      return Object.assign(defaults, this.mfaConfig || {});
    }
  },
  watch: {
    mfaPreference: function mfaPreference(value) {
      if (value === 'TOTP') {
        this.setup();
      }
    }
  },
  methods: {
    setup: function setup() {
      var _this = this;

      this.$Amplify.Auth.setupTOTP(this.user).then(function (data) {
        _this.logger.info('setTOTP success');

        _this.token = "otpauth://totp/AWSCognito:" + _this.user.username + "?secret=" + data + "&issuer=AWSCognito";
      }).catch(function (e) {
        return _this.setError(e);
      });
    },
    setUser: function () {
      var _setUser = Object(asyncToGenerator["a" /* default */])(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var _this2 = this;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.$Amplify.Auth.currentAuthenticatedUser().then(function (user) {
                  _this2.logger.info('currentAuthenticatedUser success');

                  if (user) {
                    _this2.user = user;
                  } else {
                    _this2.user = null;
                  }

                  return _this2.user;
                }).catch(function (e) {
                  _this2.user = null;

                  _this2.setError(e);

                  return _this2.user;
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function setUser() {
        return _setUser.apply(this, arguments);
      };
    }(),
    setMFA: function setMFA() {
      var _this3 = this;

      this.$Amplify.Auth.setPreferredMFA(this.user, this.mfaPreference).then(function (data) {
        AmplifyEventBus["a" /* default */].$emit('authState', 'signedIn');

        _this3.$destroy();
      }).catch(function (e) {
        if (e.message = 'User has not verified software token mfa') {
          return _this3.displayTotpSetup = true;
        }

        ;

        _this3.setError(e);
      });
    },
    verifyTotpToken: function verifyTotpToken() {
      var _this4 = this;

      this.$Amplify.Auth.verifyTotpToken(this.user, this.code).then(function () {
        _this4.logger.info('verifyTotpToken success');

        _this4.setMFA();
      }).catch(function (e) {
        return _this4.setError(e);
      });
    },
    setError: function setError(e) {
      this.error = this.$Amplify.I18n.get(e.message || e);
      this.logger.error(this.error);
    },
    cancel: function cancel() {
      return this.options.cancelHandler ? this.options.cancelHandler() : null;
    }
  }
});
// CONCATENATED MODULE: ./src/components/authenticator/SetMFA.vue?vue&type=script&lang=js&
 /* harmony default export */ var authenticator_SetMFAvue_type_script_lang_js_ = (SetMFAvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/authenticator/SetMFA.vue





/* normalize component */

var SetMFA_component = normalizeComponent(
  authenticator_SetMFAvue_type_script_lang_js_,
  SetMFAvue_type_template_id_3af9f71a_render,
  SetMFAvue_type_template_id_3af9f71a_staticRenderFns,
  false,
  null,
  null,
  null
  
)

SetMFA_component.options.__file = "SetMFA.vue"
/* harmony default export */ var SetMFA = (SetMFA_component.exports);
// CONCATENATED MODULE: /root/app/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0f87e5ee-vue-loader-template"}!/root/app/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/root/app/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!/root/app/node_modules/vue-loader/lib??vue-loader-options!./src/components/authenticator/RequireNewPassword.vue?vue&type=template&id=4e5cf15a&
var RequireNewPasswordvue_type_template_id_4e5cf15a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.amplifyUI.formSection},[_c('div',{class:_vm.amplifyUI.sectionHeader},[_vm._v(_vm._s(_vm.options.header))]),_c('div',{class:_vm.amplifyUI.sectionBody},[_c('div',{class:_vm.amplifyUI.formField},[_c('div',{class:_vm.amplifyUI.inputLabel},[_vm._v(_vm._s(_vm.$Amplify.I18n.get('New Password'))+" *")]),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.password),expression:"password"}],class:_vm.amplifyUI.input,attrs:{"type":"password","placeholder":_vm.$Amplify.I18n.get('New Password'),"autofocus":""},domProps:{"value":(_vm.password)},on:{"input":function($event){if($event.target.composing){ return; }_vm.password=$event.target.value}}})])]),_vm._l((_vm.options.user.challengeParam.requiredAttributes),function(attribute){return _c('div',{key:attribute,class:_vm.amplifyUI.formField,attrs:{"attribute":attribute}},[_c('div',{class:_vm.amplifyUI.inputLabel},[_vm._v(_vm._s(attribute.charAt(0).toUpperCase() + attribute.slice(1)))]),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.requiredAttributes[attribute]),expression:"requiredAttributes[attribute]"}],class:_vm.amplifyUI.input,attrs:{"placeholder":attribute.charAt(0).toUpperCase() + attribute.slice(1)},domProps:{"value":(_vm.requiredAttributes[attribute])},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.requiredAttributes, attribute, $event.target.value)}}})])}),_c('div',{class:_vm.amplifyUI.sectionFooter},[_c('span',{class:_vm.amplifyUI.sectionFooterPrimaryContent},[(!_vm.sent)?_c('button',{class:_vm.amplifyUI.button,attrs:{"disabled":!_vm.password},on:{"click":_vm.change}},[_vm._v(_vm._s(_vm.$Amplify.I18n.get('Submit')))]):_vm._e()]),_c('span',{class:_vm.amplifyUI.sectionFooterSecondaryContent},[(!_vm.sent)?_c('a',{class:_vm.amplifyUI.a,on:{"click":_vm.signIn}},[_vm._v(_vm._s(_vm.$Amplify.I18n.get('Back to Sign In')))]):_vm._e()])]),(_vm.error)?_c('div',{staticClass:"error"},[_vm._v("\n    "+_vm._s(_vm.error)+"\n  ")]):_vm._e()],2)}
var RequireNewPasswordvue_type_template_id_4e5cf15a_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/authenticator/RequireNewPassword.vue?vue&type=template&id=4e5cf15a&

// CONCATENATED MODULE: /root/app/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--12-0!/root/app/node_modules/@vue/cli-service/node_modules/thread-loader/dist/cjs.js!/root/app/node_modules/@vue/cli-plugin-babel/node_modules/babel-loader/lib!/root/app/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!/root/app/node_modules/vue-loader/lib??vue-loader-options!./src/components/authenticator/RequireNewPassword.vue?vue&type=script&lang=js&


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var RequireNewPasswordvue_type_script_lang_js_ = ({
  name: 'RequireNewPassword',
  props: ['requireNewPasswordConfig'],
  data: function data() {
    return {
      user: '',
      error: '',
      password: '',
      logger: {},
      requiredAttributes: {},
      amplifyUI: aws_amplify_ui
    };
  },
  computed: {
    options: function options() {
      var defaults = {
        header: this.$Amplify.I18n.get('Enter new password'),
        user: {
          challengeParam: {
            requiredAttributes: []
          }
        }
      };
      return Object.assign(defaults, this.requireNewPasswordConfig || {});
    }
  },
  mounted: function mounted() {
    this.logger = new this.$Amplify.Logger(this.$options.name);
  },
  methods: {
    setError: function setError(e) {
      this.error = this.$Amplify.I18n.get(e.message || e);
      this.logger.error(this.error);
    },
    checkContact: function checkContact(user) {
      var _this = this;

      this.$Amplify.Auth.verifiedContact(user).then(function (data) {
        if (!JS.isEmpty(data.verified)) {
          _this.changeState('signedIn', user);
        } else {
          user = Object.assign(user, data);

          _this.changeState('verifyContact', user);
        }
      }).catch(function (e) {
        return _this.setError(e);
      });
    },
    change: function change() {
      var _this2 = this;

      this.$Amplify.Auth.completeNewPassword(this.options.user, this.password, this.requiredAttributes).then(function (user) {
        if (_this2.options.user.challengeName === 'SMS_MFA') {
          AmplifyEventBus["a" /* default */].$emit('localUser', _this2.options.user);
          AmplifyEventBus["a" /* default */].$emit('authState', 'confirmSignIn');
        } else if (_this2.options.user.challengeName === 'MFA_SETUP') {
          AmplifyEventBus["a" /* default */].$emit('localUser', _this2.options.user);
          AmplifyEventBus["a" /* default */].$emit('authState', 'setMfa');
        } else {
          _this2.checkContact(_this2.options.user);
        }
      }).catch(function (err) {
        return _this2.setError(err);
      });
    },
    signIn: function signIn() {
      AmplifyEventBus["a" /* default */].$emit('authState', 'signedOut');
    }
  }
});
// CONCATENATED MODULE: ./src/components/authenticator/RequireNewPassword.vue?vue&type=script&lang=js&
 /* harmony default export */ var authenticator_RequireNewPasswordvue_type_script_lang_js_ = (RequireNewPasswordvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/authenticator/RequireNewPassword.vue





/* normalize component */

var RequireNewPassword_component = normalizeComponent(
  authenticator_RequireNewPasswordvue_type_script_lang_js_,
  RequireNewPasswordvue_type_template_id_4e5cf15a_render,
  RequireNewPasswordvue_type_template_id_4e5cf15a_staticRenderFns,
  false,
  null,
  null,
  null
  
)

RequireNewPassword_component.options.__file = "RequireNewPassword.vue"
/* harmony default export */ var RequireNewPassword = (RequireNewPassword_component.exports);
// CONCATENATED MODULE: ./src/components/authenticator/index.js
/* eslint-disable */

/*
 * Copyright 2017-2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with
 * the License. A copy of the License is located at
 *
 *     http://aws.amazon.com/apache2.0/
 *
 * or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions
 * and limitations under the License.
 */

/* eslint-enable */










external_commonjs_vue_commonjs2_vue_root_Vue_default.a.component('amplify-authenticator', Authenticator);
external_commonjs_vue_commonjs2_vue_root_Vue_default.a.component('amplify-sign-in', SignIn);
external_commonjs_vue_commonjs2_vue_root_Vue_default.a.component('amplify-sign-up', SignUp);
external_commonjs_vue_commonjs2_vue_root_Vue_default.a.component('amplify-sign-out', SignOut);
external_commonjs_vue_commonjs2_vue_root_Vue_default.a.component('amplify-confirm-sign-up', ConfirmSignUp);
external_commonjs_vue_commonjs2_vue_root_Vue_default.a.component('amplify-confirm-sign-in', ConfirmSignIn);
external_commonjs_vue_commonjs2_vue_root_Vue_default.a.component('amplify-forgot-password', ForgotPassword);
external_commonjs_vue_commonjs2_vue_root_Vue_default.a.component('amplify-set-mfa', SetMFA);
external_commonjs_vue_commonjs2_vue_root_Vue_default.a.component('amplify-require-new-password', RequireNewPassword);

// CONCATENATED MODULE: /root/app/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0f87e5ee-vue-loader-template"}!/root/app/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/root/app/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!/root/app/node_modules/vue-loader/lib??vue-loader-options!./src/components/storage/PhotoPicker.vue?vue&type=template&id=88ec5aa6&
var PhotoPickervue_type_template_id_88ec5aa6_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.amplifyUI.formSection,staticStyle:{"width":"380px"}},[_c('div',{class:_vm.amplifyUI.sectionHeader},[_vm._v(_vm._s(_vm.options.header))]),_c('div',{class:_vm.amplifyUI.sectionBody},[(_vm.file)?_c('img',{staticStyle:{"max-width":"100%"},attrs:{"src":_vm.photoUrl}}):_vm._e(),(!_vm.file)?_c('div',{class:_vm.amplifyUI.photoPlaceholder},[(!_vm.file)?_c('div',{class:_vm.amplifyUI.photoPlaceholderIcon},[_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","width":"64","height":"64","viewBox":"0 0 24 24"}},[_c('circle',{attrs:{"cx":"12","cy":"12","r":"3.2"}}),_c('path',{attrs:{"d":"M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"}}),_c('path',{attrs:{"d":"M0 0h24v24H0z","fill":"none"}})])]):_vm._e()]):_vm._e(),_c('input',{ref:"file_input",attrs:{"type":"file","accept":"options.accept"},on:{"change":_vm.pick}})]),(_vm.file)?_c('button',{class:[_vm.amplifyUI.photoPickerButton, _vm.amplifyUI.button],attrs:{"disabled":!_vm.file},on:{"click":_vm.upload}},[_vm._v(_vm._s(_vm.options.title))]):_vm._e(),(_vm.error)?_c('div',{staticClass:"error"},[_vm._v("\n    "+_vm._s(_vm.error)+"\n  ")]):_vm._e()])}
var PhotoPickervue_type_template_id_88ec5aa6_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/storage/PhotoPicker.vue?vue&type=template&id=88ec5aa6&

// CONCATENATED MODULE: /root/app/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--12-0!/root/app/node_modules/@vue/cli-service/node_modules/thread-loader/dist/cjs.js!/root/app/node_modules/@vue/cli-plugin-babel/node_modules/babel-loader/lib!/root/app/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!/root/app/node_modules/vue-loader/lib??vue-loader-options!./src/components/storage/PhotoPicker.vue?vue&type=script&lang=js&


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var PhotoPickervue_type_script_lang_js_ = ({
  name: 'PhotoPicker',
  props: ['photoPickerConfig'],
  data: function data() {
    return {
      logger: {},
      file: null,
      s3ImagePath: '',
      photoUrl: '',
      error: '',
      amplifyUI: aws_amplify_ui
    };
  },
  computed: {
    options: function options() {
      var defaults = {
        header: this.$Amplify.I18n.get('File Upload'),
        title: this.$Amplify.I18n.get('Upload'),
        accept: '*/*',
        storageOptions: {}
      };
      return Object.assign(defaults, this.photoPickerConfig || {});
    }
  },
  mounted: function mounted() {
    this.logger = new this.$Amplify.Logger(this.$options.name);

    if (!this.options.path) {
      return this.setError('File path not provided.');
    }

    if (this.options.path.substr(this.options.path.length - 1) !== '/') {
      this.options.path = this.options.path + '/';
    }
  },
  methods: {
    upload: function upload() {
      var _this = this;

      this.$Amplify.Storage.put(this.s3ImagePath, this.file, this.options.storageOptions).then(function (result) {
        _this.completeFileUpload(result.key);
      }).catch(function (e) {
        return _this.setError(e);
      });
    },
    pick: function pick(evt) {
      this.file = evt.target.files[0];

      if (!this.file) {
        return;
      }

      ;

      if (!this.options.storageOptions.contentType) {
        this.options.storageOptions.contentType = this.file.type;
      }

      ;
      var name = this.options.defaultName ? this.options.defaultName : this.file.name;
      this.s3ImagePath = "".concat(this.options.path).concat(name);
      var that = this;
      var reader = new FileReader();

      reader.onload = function (e) {
        var target = e.target;
        var url = target.result;
        that.photoUrl = url;
      };

      reader.readAsDataURL(this.file);
    },
    completeFileUpload: function completeFileUpload(img) {
      this.file = null;
      this.s3ImageFile = null;
      this.$refs.file_input.value = null;
      AmplifyEventBus["a" /* default */].$emit('fileUpload', img);
    },
    setError: function setError(e) {
      this.error = this.$Amplify.I18n.get(e.message || e);
      this.logger.error(this.error);
    }
  }
});
// CONCATENATED MODULE: ./src/components/storage/PhotoPicker.vue?vue&type=script&lang=js&
 /* harmony default export */ var storage_PhotoPickervue_type_script_lang_js_ = (PhotoPickervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/storage/PhotoPicker.vue





/* normalize component */

var PhotoPicker_component = normalizeComponent(
  storage_PhotoPickervue_type_script_lang_js_,
  PhotoPickervue_type_template_id_88ec5aa6_render,
  PhotoPickervue_type_template_id_88ec5aa6_staticRenderFns,
  false,
  null,
  null,
  null
  
)

PhotoPicker_component.options.__file = "PhotoPicker.vue"
/* harmony default export */ var PhotoPicker = (PhotoPicker_component.exports);
// CONCATENATED MODULE: /root/app/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0f87e5ee-vue-loader-template"}!/root/app/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/root/app/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!/root/app/node_modules/vue-loader/lib??vue-loader-options!./src/components/storage/S3Album.vue?vue&type=template&id=77a314c9&scoped=true&
var S3Albumvue_type_template_id_77a314c9_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:"amplify-album"},[_c('div',{staticClass:"amplify-album-container"},_vm._l((_vm.items),function(item){return _c('amplify-s3-image',{key:item.key,staticClass:"amplify-image-container",attrs:{"imagePath":item.path,"s3ImageConfig":_vm.s3AlbumConfig}})}))]),(_vm.error)?_c('div',{staticClass:"error"},[_vm._v("\n    "+_vm._s(_vm.error)+"\n  ")]):_vm._e()])}
var S3Albumvue_type_template_id_77a314c9_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/storage/S3Album.vue?vue&type=template&id=77a314c9&scoped=true&

// CONCATENATED MODULE: /root/app/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--12-0!/root/app/node_modules/@vue/cli-service/node_modules/thread-loader/dist/cjs.js!/root/app/node_modules/@vue/cli-plugin-babel/node_modules/babel-loader/lib!/root/app/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!/root/app/node_modules/vue-loader/lib??vue-loader-options!./src/components/storage/S3Album.vue?vue&type=script&lang=js&


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var S3Albumvue_type_script_lang_js_ = ({
  name: 'S3Album',
  props: ['s3AlbumConfig', 'path'],
  data: function data() {
    return {
      logger: {},
      error: '',
      items: []
    };
  },
  computed: {
    options: function options() {
      //retain for future use
      var defaults = {};
      return Object.assign(defaults, this.s3AlbumConfig || {});
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.logger = new this.$Amplify.Logger(this.$options.name);
    this.getImages();
    AmplifyEventBus["a" /* default */].$on('fileUpload', function (img) {
      _this.pushImage(img);
    });
  },
  methods: {
    getImages: function getImages() {
      var _this2 = this;

      if (!this.path) {
        this.setError('Album path not provided');
        return;
      }

      var that = this;
      this.$Amplify.Storage.list(this.path, this.options).then(function (res) {
        that.items = res.map(function (item) {
          return {
            path: item.key
          };
        });
      }).catch(function (e) {
        return _this2.setError(e);
      });
    },
    pushImage: function pushImage(img) {
      if (!img) {
        this.setError('Image path not provided');
        return;
      }

      this.items.push({
        key: 123,
        path: img
      });
    },
    setError: function setError(e) {
      this.error = this.$Amplify.I18n.get(e.message || e);
      this.logger.error(this.error);
    }
  }
});
// CONCATENATED MODULE: ./src/components/storage/S3Album.vue?vue&type=script&lang=js&
 /* harmony default export */ var storage_S3Albumvue_type_script_lang_js_ = (S3Albumvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/storage/S3Album.vue?vue&type=style&index=0&id=77a314c9&scoped=true&lang=css&
var S3Albumvue_type_style_index_0_id_77a314c9_scoped_true_lang_css_ = __webpack_require__("f68e");

// CONCATENATED MODULE: ./src/components/storage/S3Album.vue






/* normalize component */

var S3Album_component = normalizeComponent(
  storage_S3Albumvue_type_script_lang_js_,
  S3Albumvue_type_template_id_77a314c9_scoped_true_render,
  S3Albumvue_type_template_id_77a314c9_scoped_true_staticRenderFns,
  false,
  null,
  "77a314c9",
  null
  
)

S3Album_component.options.__file = "S3Album.vue"
/* harmony default export */ var S3Album = (S3Album_component.exports);
// CONCATENATED MODULE: /root/app/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0f87e5ee-vue-loader-template"}!/root/app/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/root/app/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!/root/app/node_modules/vue-loader/lib??vue-loader-options!./src/components/storage/S3Image.vue?vue&type=template&id=bd7c1ee0&scoped=true&
var S3Imagevue_type_template_id_bd7c1ee0_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('img',{staticClass:"amplify-image",attrs:{"src":_vm.url},on:{"click":function($event){_vm.blowUp(_vm.url)}}})])}
var S3Imagevue_type_template_id_bd7c1ee0_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/storage/S3Image.vue?vue&type=template&id=bd7c1ee0&scoped=true&

// CONCATENATED MODULE: /root/app/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--12-0!/root/app/node_modules/@vue/cli-service/node_modules/thread-loader/dist/cjs.js!/root/app/node_modules/@vue/cli-plugin-babel/node_modules/babel-loader/lib!/root/app/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!/root/app/node_modules/vue-loader/lib??vue-loader-options!./src/components/storage/S3Image.vue?vue&type=script&lang=js&


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var S3Imagevue_type_script_lang_js_ = ({
  name: 'S3Image',
  props: ['imagePath', 's3ImageConfig'],
  data: function data() {
    return {
      url: null,
      error: '',
      logger: {}
    };
  },
  computed: {
    options: function options() {
      //retain for future use
      var defaults = {};
      return Object.assign(defaults, this.s3ImageConfig || {});
    }
  },
  mounted: function mounted() {
    this.logger = new this.$Amplify.Logger(this.$options.name);
    this.getImage();
  },
  methods: {
    getImage: function getImage() {
      var _this = this;

      if (!this.imagePath) {
        return this.setError('Image path not provided.');
      }

      this.$Amplify.Storage.get(this.imagePath, this.options).then(function (url) {
        _this.url = url;
      }).catch(function (e) {
        return _this.setError(e);
      });
    },
    blowUp: function blowUp(url) {
      window.open(url);
    },
    setError: function setError(e) {
      this.error = this.$Amplify.I18n.get(e.message || e);
      this.logger.error(this.error);
    }
  }
});
// CONCATENATED MODULE: ./src/components/storage/S3Image.vue?vue&type=script&lang=js&
 /* harmony default export */ var storage_S3Imagevue_type_script_lang_js_ = (S3Imagevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/storage/S3Image.vue?vue&type=style&index=0&id=bd7c1ee0&scoped=true&lang=css&
var S3Imagevue_type_style_index_0_id_bd7c1ee0_scoped_true_lang_css_ = __webpack_require__("cc58");

// CONCATENATED MODULE: ./src/components/storage/S3Image.vue






/* normalize component */

var S3Image_component = normalizeComponent(
  storage_S3Imagevue_type_script_lang_js_,
  S3Imagevue_type_template_id_bd7c1ee0_scoped_true_render,
  S3Imagevue_type_template_id_bd7c1ee0_scoped_true_staticRenderFns,
  false,
  null,
  "bd7c1ee0",
  null
  
)

S3Image_component.options.__file = "S3Image.vue"
/* harmony default export */ var S3Image = (S3Image_component.exports);
// CONCATENATED MODULE: ./src/components/storage/index.js
/* eslint-disable */

/*
 * Copyright 2017-2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with
 * the License. A copy of the License is located at
 *
 *     http://aws.amazon.com/apache2.0/
 *
 * or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions
 * and limitations under the License.
 */

/* eslint-enable */




external_commonjs_vue_commonjs2_vue_root_Vue_default.a.component('amplify-photo-picker', PhotoPicker);
external_commonjs_vue_commonjs2_vue_root_Vue_default.a.component('amplify-s3-album', S3Album);
external_commonjs_vue_commonjs2_vue_root_Vue_default.a.component('amplify-s3-image', S3Image);

// CONCATENATED MODULE: /root/app/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0f87e5ee-vue-loader-template"}!/root/app/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/root/app/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!/root/app/node_modules/vue-loader/lib??vue-loader-options!./src/components/interactions/Chatbot.vue?vue&type=template&id=37eb263c&scoped=true&
var Chatbotvue_type_template_id_37eb263c_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"amplify-interactions"},[_c('div',{staticClass:"amplify-interactions-container"},[_c('div',{staticClass:"amplify-form-container"},[_c('div',{staticClass:"amplify-form-row"},[_c('div',{staticClass:"amplify-interactions-conversation"},_vm._l((_vm.messages),function(message){return _c('div',{key:message.meSentTime},[_c('div',{staticClass:"amplify-interactions-input"},[_vm._v(_vm._s(message.me))]),_c('div',{staticClass:"amplify-interactions-input-timestamp"},[_vm._v(_vm._s(message.meSentTime))]),_c('div',{staticClass:"amplify-interactions-response"},[_vm._v(_vm._s(message.bot))]),_c('div',{staticClass:"amplify-interactions-response-timestamp"},[_vm._v(_vm._s(message.botSentTime))])])}))]),_c('div',{staticClass:"amplify-interactions-actions"},[(_vm.options.textEnabled)?_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.inputText),expression:"inputText"}],staticClass:"amplify-form-input",attrs:{"type":"text","placeholder":_vm.currentVoiceState,"disabled":_vm.inputDisabled},domProps:{"value":(_vm.inputText)},on:{"keyup":_vm.keymonitor,"input":function($event){if($event.target.composing){ return; }_vm.inputText=$event.target.value}}}):_vm._e(),(!_vm.options.textEnabled)?_c('input',{staticClass:"amplify-form-input",attrs:{"type":"text","placeholder":_vm.currentVoiceState,"disabled":!_vm.options.textEnabled}}):_vm._e(),(_vm.options.voiceEnabled)?_c('button',{staticClass:"amplify-mic-button",attrs:{"disabled":_vm.micButtonDisabled},on:{"click":function($event){_vm.micButtonHandler()}}},[_vm._v(_vm._s(this.micText))]):_vm._e(),(_vm.options.textEnabled)?_c('button',{staticClass:"amplify-interactions-button",attrs:{"id":"interactions-submit-button","disabled":_vm.inputDisabled},on:{"click":function($event){_vm.onSubmit(_vm.inputText)}}}):_vm._e()])])]),(_vm.error)?_c('div',{staticClass:"error"},[_vm._v(_vm._s(_vm.error))]):_vm._e()])}
var Chatbotvue_type_template_id_37eb263c_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/interactions/Chatbot.vue?vue&type=template&id=37eb263c&scoped=true&

// EXTERNAL MODULE: /root/app/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--12-0!/root/app/node_modules/@vue/cli-service/node_modules/thread-loader/dist/cjs.js!/root/app/node_modules/@vue/cli-plugin-babel/node_modules/babel-loader/lib!/root/app/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!/root/app/node_modules/vue-loader/lib??vue-loader-options!./src/components/interactions/Chatbot.vue?vue&type=script&lang=js&
var Chatbotvue_type_script_lang_js_ = __webpack_require__("6d95");

// CONCATENATED MODULE: ./src/components/interactions/Chatbot.vue?vue&type=script&lang=js&
 /* harmony default export */ var interactions_Chatbotvue_type_script_lang_js_ = (Chatbotvue_type_script_lang_js_["a" /* default */]); 
// EXTERNAL MODULE: ./src/components/interactions/Chatbot.vue?vue&type=style&index=0&id=37eb263c&scoped=true&lang=css&
var Chatbotvue_type_style_index_0_id_37eb263c_scoped_true_lang_css_ = __webpack_require__("38bc");

// CONCATENATED MODULE: ./src/components/interactions/Chatbot.vue






/* normalize component */

var Chatbot_component = normalizeComponent(
  interactions_Chatbotvue_type_script_lang_js_,
  Chatbotvue_type_template_id_37eb263c_scoped_true_render,
  Chatbotvue_type_template_id_37eb263c_scoped_true_staticRenderFns,
  false,
  null,
  "37eb263c",
  null
  
)

Chatbot_component.options.__file = "Chatbot.vue"
/* harmony default export */ var Chatbot = (Chatbot_component.exports);
// CONCATENATED MODULE: ./src/components/interactions/index.js
/* eslint-disable */

/*
 * Copyright 2017-2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with
 * the License. A copy of the License is located at
 *
 *     http://aws.amazon.com/apache2.0/
 *
 * or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions
 * and limitations under the License.
 */

/* eslint-enable */


external_commonjs_vue_commonjs2_vue_root_Vue_default.a.component('amplify-chatbot', Chatbot);

// CONCATENATED MODULE: /root/app/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0f87e5ee-vue-loader-template"}!/root/app/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/root/app/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!/root/app/node_modules/vue-loader/lib??vue-loader-options!./src/components/xr/SumerianScene.vue?vue&type=template&id=61b3c05e&
var SumerianScenevue_type_template_id_61b3c05e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.amplifyUI.sumerianSceneContainer,attrs:{"id":_vm.SCENE_CONTAINER_DOM_ID}},[_c('div',{class:_vm.amplifyUI.sumerianScene,attrs:{"id":_vm.SCENE_DOM_ID}},[(_vm.loading)?_c('div',{class:_vm.amplifyUI.loadingOverlay},[_c('div',{class:_vm.amplifyUI.loadingContainer},[_c('div',{class:_vm.amplifyUI.loadingLogo},[_c('svg',{staticStyle:{"enable-background":"new 0 0 2000 1195"},attrs:{"version":"1.1","id":"Layer_1","xmlns":"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","x":"0px","y":"0px","viewBox":"0 0 2000 1195","xml:space":"preserve"}},[_c('g',[_c('path',{staticClass:"st0",attrs:{"d":"M1026.8,146.2c-0.7,2.3-1.2,3.7-1.6,5.1C991.8,291,958.5,430.6,925,570.3c-1.6,6.7-3.8,13.3-6.2,19.7\n                c-3.9,10.4-12,16.3-22.8,16.5c-26.3,0.5-52.6,0.5-78.9,0c-9.5-0.2-17.3-5.3-21.2-14.2c-4.1-9.2-7.6-18.7-10.6-28.3\n                c-51-167.3-101.9-334.6-152.7-502c-2.5-8.4-4.7-16.9-6.2-25.5c-2-11.7,3.8-18.9,15.5-19c24.6-0.2,49.2,0.1,73.8,0.4\n                c12,0.2,21.1,5.9,24.8,17.3c5.4,16.3,10.1,32.8,14.4,49.4c33.9,133.3,67.7,266.6,101.5,399.9c0.3,1.3,0.8,2.6,1.5,5\n                c0.7-2,1.3-3,1.5-4.1c19.9-84.2,39.7-168.4,59.6-252.7c14.5-61.3,28.9-122.6,43.4-183.8c0.9-3.6,2.1-7.1,3.2-10.6\n                c4-13.2,13.5-19.8,26.6-20.1c24.1-0.6,48.2-0.5,72.3,0c12.6,0.2,21.5,7.2,25.1,19.2c3.9,12.9,7.1,26,10.1,39.1\n                c32.5,137.8,65,275.6,97.5,413.4c0.3,1.4,0.8,2.8,1.7,5.7c1.7-6.1,3-10.7,4.2-15.3c36.8-142.6,73.6-285.2,110.5-427.8\n                c1.4-5.5,3.7-10.8,5.7-16.2c4.5-12,13.8-17.8,26.1-18.1c21.7-0.6,43.5-0.5,65.2-0.7c2.2,0,4.4,0,6.6,0.3c9.9,1,14.9,5.9,14.3,15.9\n                c-0.4,7.5-1.8,15.1-4.1,22.3c-33.5,107.9-67.2,215.6-100.9,323.5c-20.5,65.7-41,131.4-61.6,197.1c-1.3,4-2.8,7.9-4.3,11.9\n                c-4.9,12.9-14.9,19.1-28.1,19.4c-23.9,0.5-47.9,0.4-71.8,0c-13.6-0.2-23.3-7.1-27.2-20.2c-4.5-15.5-8.3-31.2-12.1-46.9\n                c-31.2-129.6-62.3-259.3-93.4-388.9C1028,150.1,1027.5,148.7,1026.8,146.2z"}}),_c('path',{staticClass:"st0",attrs:{"d":"M995.7,1194.2c-23.1,0-46.2,0.8-69.3-0.2c-25.4-1.1-50.7-3.5-76-5.7c-77.9-7-154.6-20.9-230.3-40.5\n                c-68.1-17.6-134.6-40.1-199.4-67.3C330.7,1042.5,245.3,996,164.5,941c-53.7-36.6-104.7-76.7-153-120.1c-3.5-3.1-6.6-6.8-9-10.8\n                c-3.5-5.8-3.4-12.1,0.8-17.5c4.3-5.6,10.5-7.4,17.2-5.7c4.5,1.2,8.8,3.3,12.9,5.5c42.2,22.1,83.9,45.3,126.7,66.4\n                c63.2,31.2,128.6,57.4,195.1,80.8c68.4,24,137.7,44.8,208.4,60.6c48.4,10.8,97.2,19.9,146,28.7c29.8,5.3,59.9,8.8,89.9,12.3\n                c23.4,2.7,46.9,4.6,70.3,6.3c22.8,1.7,45.7,3.3,68.5,4c39.8,1.1,79.5,2.1,119.3,1.8c29.9-0.2,59.9-2,89.8-4\n                c26.2-1.7,52.4-3.7,78.4-7.1c46.8-6.2,93.6-12.7,140.1-20.9c99-17.3,196-42.9,290.8-76.1c40.7-14.3,80.6-30.6,120.8-46.1\n                c12-4.6,23.6-5.4,34.7,2c11.5,7.7,15.3,22.7,7.6,34.2c-4,6-9.6,11.4-15.4,15.7c-81,59.3-169.6,104.7-262.8,141.3\n                c-77,30.2-156,53.6-237,70.3c-37.9,7.8-76.1,13.8-114.3,19.6c-24.7,3.7-49.7,6-74.7,8.2c-22.1,1.9-44.3,3.3-66.5,4.1\n                c-17.8,0.7-35.7,0.1-53.6,0.1C995.7,1194.3,995.7,1194.2,995.7,1194.2z"}}),_c('path',{staticClass:"st0",attrs:{"d":"M1714.8,0c39.2,0.9,85.7,8.5,130.2,26.1c9.3,3.7,17.9,9.3,26.1,15.1c9,6.4,13.3,15.9,13.4,27.1\n                c0,12,0.1,23.9,0,35.9c0,2.5-0.4,5.1-1,7.5c-2.1,8.7-7.4,12.7-16.2,11.4c-5.7-0.9-11.6-2.6-16.8-5c-46.6-21.8-95.9-30.1-147-28.3\n                c-21.5,0.8-42.6,3.5-62.7,11.9c-37.6,15.6-54.4,54.2-39.7,91c7.1,17.8,21.1,28.8,37.3,37.7c21.4,11.8,44.5,19.1,67.6,26.5\n                c31.6,10,63.3,19.7,94.6,30.6c28.5,9.9,55.1,24,76.4,46.1c23.3,24.1,36.4,53.2,39.9,86.5c9.1,86.7-40.5,150.8-109.3,180.7\n                c-38.9,16.8-79.7,24.4-122,24.6c-56.9,0.2-112-9.7-164.9-30.7c-9.4-3.8-18.3-9.3-26.9-14.8c-9.7-6.2-13.6-16.1-13.9-27.3\n                c-0.4-13-0.3-26-0.1-38.9c0.3-14.9,8.1-21.1,22.5-17.3c8.2,2.2,16.2,5.6,24.1,9c52.7,22.5,107.7,31.7,164.8,29.6\n                c24.9-0.9,49.4-4.7,72-16c29.7-14.9,45.7-38.5,44.5-72.4c-0.9-23.7-11.9-41.7-31.7-54.4c-17.2-10.9-36.1-18-55.4-24.1\n                c-36.4-11.5-73.1-22.4-109.3-34.6c-30.8-10.4-58.7-26.2-81.4-50.2c-43.4-45.8-56.3-116.8-30.6-172.5c18.1-39.3,48.5-66.6,86.9-85.5\n                C1624,6.4,1664.5,0,1714.8,0z"}}),_c('path',{staticClass:"st0",attrs:{"d":"M1860.6,746.5c33.3,0.4,66.3,2.8,98.5,11.6c8.4,2.3,16.5,5.8,24.6,9.1c7.5,3.1,11.9,9.2,13.5,17.2\n                c2.5,12.2,3.1,24.5,2.5,37.1c-1.2,24-5,47.5-10.5,70.8c-12.3,51.3-31.6,99.8-60.1,144.4c-16.5,25.9-36,49.3-59.4,69.2\n                c-5.2,4.4-10.7,8.3-17.9,8.4c-6.8,0-10.7-3.5-10.3-10.2c0.2-4.1,1.3-8.3,2.9-12.1c17-42.7,33.7-85.6,47-129.7\n                c7.6-25.2,14.3-50.6,16.5-76.9c0.7-8.8,0.1-17.9-1.1-26.7c-1.6-12-9.3-19.8-20.2-24.6c-12.5-5.4-25.8-8.2-39.2-9.1\n                c-18.6-1.3-37.4-2.3-56-2c-20.7,0.4-41.3,2.1-62,3.7c-18.8,1.4-37.5,3.3-56.3,5.2c-9.9,1-19.7,2.4-29.5,3.6c-1,0.1-2,0.4-3,0.3\n                c-4.8-0.2-9.7-0.8-12.4-5.4c-2.7-4.6-1.8-9.7,1.5-13.2c5.1-5.5,10.6-10.8,16.9-14.9c36.4-24,76.8-38.4,119.4-46.2\n                c22.1-4,44.6-5.9,67-8.3C1842.1,746.9,1851.4,746.9,1860.6,746.5z"}}),_c('path',{staticClass:"st0",attrs:{"d":"M591.6,541.4c-21.4-36.5-29.7-76.2-29.7-117.9c-0.1-70.3,0.1-140.6-0.1-211c-0.1-29.6-3.8-58.8-13-87.1\n                c-15.6-48-45.4-83.2-92.4-102.9C424.8,9.3,391.7,3.9,357.9,2c-63.7-3.6-125.3,6.4-184.7,29.3c-11.7,4.5-23,10.3-34.3,16\n                c-11.6,5.8-17.3,15.4-17.1,28.6c0.2,12.6-0.1,25.3,0,37.9c0,2.9,0.1,5.8,0.7,8.5c2,9.5,7.9,13.7,17.3,11.2c8.4-2.2,16.8-5,24.9-8.2\n                c40.4-15.9,81.7-28.9,125.3-32.1c29.7-2.2,59.3-1.4,88.3,6.5c24.2,6.6,44.8,18.5,57.2,41.5c10.1,18.6,15.1,38.7,16.1,59.5\n                c1.3,24.7,1,49.5,1.4,74.3c0,0.8-0.2,1.6-0.3,2.8c-16.1-3.3-31.5-6.6-47.1-9.5c-46.9-8.6-94.1-13.2-141.8-7.7\n                c-33.5,3.9-65.4,12.9-94.4,30.5c-37.4,22.6-64.8,53.5-78.2,95.7c-10.9,34.3-11.9,69.4-4.4,104.4c12,56.1,44.4,96,97.9,117.4\n                c41.8,16.6,85.2,17.2,128.9,9.5c57.4-10.1,104-39.3,142.3-82.5c1.3-1.5,2.7-2.9,4.3-4.8c1.7,3.4,3.1,6.2,4.5,9\n                c10.4,21.4,22.2,42,38.5,59.7c11.2,12.1,24,14.5,37.5,5.8c14.5-9.3,28.8-18.8,42.9-28.6C597.7,567,600.3,556.1,591.6,541.4z\n                  M448.3,436.2c-7.1,29.5-25.4,50.8-49.1,68.2c-22,16.2-47.4,23.8-73.8,28.5c-20.7,3.6-41.6,4.4-62.3-0.2\n                c-35.6-8-59.6-35.5-63.5-72.3c-2.3-21.9-1.9-43.5,7-64.1c11.9-27.6,34-43.2,61.9-51.5c21.4-6.4,43.4-7.9,63.7-7.5\n                c41.1,0.2,79.8,5.3,117.9,14.4c1.6,0.4,4.1,2.4,4.1,3.7C454.7,382.5,454.7,409.6,448.3,436.2z"}})])])]),_c('div',{class:_vm.amplifyUI.loadingSceneName},[_vm._v(_vm._s(_vm.sceneName))]),(_vm.sceneError)?_c('div',{class:_vm.amplifyUI.sceneErrorText},[_vm._v(_vm._s(_vm.sceneError))]):_vm._e(),(!_vm.sceneError)?_c('div',{class:_vm.amplifyUI.loadingBar},[_c('div',{class:_vm.amplifyUI.loadingBarFill,style:({ width: _vm.loadPercentage + '%'})})]):_vm._e()])]):_vm._e()]),(!_vm.loading)?_c('div',{class:_vm.amplifyUI.sceneBar},[_c('span',{class:_vm.amplifyUI.sceneActions},[_c('div',{class:[_vm.amplifyUI.tooltip, _vm.showEnableAudio ? _vm.amplifyUI.autoShowTooltip : ''],attrs:{"data-text":_vm.showEnableAudio ? 'The scene is muted. Click to unmute.' : (_vm.muted ? 'Unmute' : 'Mute')},on:{"click":function($event){_vm.muted ? _vm.setMuted(false) : _vm.setMuted(true)}}},[_c('button',{class:_vm.amplifyUI.actionButton},[(_vm.muted)?_c('svg',{attrs:{"width":"19px","height":"19px","viewBox":"0 0 19 19","version":"1.1","xmlns":"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[_c('g',{attrs:{"id":"icons/minis/volumeOff","stroke":"none","stroke-width":"1","fill":"none","fill-rule":"evenodd"}},[_c('path',{attrs:{"d":"M3.48026899,12.9630494 C3.63825091,12.9630494 3.79237961,13.0108921 3.92264322,13.1003479 L8.77467683,16.8113609 C9.29423971,17.1679383 10,16.7950396 10,16.1637406 L10,3.78619489 C10,3.15489596 9.29423971,2.78199725 8.77467683,3.13857463 L3.92264322,6.84545211 C3.79237961,6.93490793 3.63825091,6.9827506 3.48026899,6.9827506 L1.78294894,6.9827506 C1.3505185,6.9827506 1,7.33409518 1,7.76754476 L1,12.1781306 C1,12.6117048 1.3505185,12.9630494 1.78294894,12.9630494 L3.48026899,12.9630494 Z M17.2118156,7 L15.0918385,9.11997713 L12.9718614,7 L12,7.97174685 L14.1200917,10.091724 L12,12.2118156 L12.9718614,13.1835625 L15.0918385,11.0635854 L17.2118156,13.1835625 L18.1835625,12.2118156 L16.0635854,10.091724 L18.1835625,7.97174685 L17.2118156,7 Z","id":"Fill-2","fill":"#FFFFFF"}})])]):_vm._e(),(!_vm.muted)?_c('svg',{attrs:{"width":"19px","height":"19px","viewBox":"0 0 19 19","version":"1.1","xmlns":"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[_c('g',{attrs:{"id":"icons/minis/volumeOn","stroke":"none","stroke-width":"1","fill":"none","fill-rule":"evenodd"}},[_c('path',{attrs:{"d":"M3.48026899,12.9630494 L1.78294894,12.9630494 C1.3505185,12.9630494 1,12.6117048 1,12.1781306 L1,7.76754476 C1,7.33409518 1.3505185,6.9827506 1.78294894,6.9827506 L3.48026899,6.9827506 C3.63825091,6.9827506 3.79237961,6.93490793 3.92264322,6.84545211 L8.77467683,3.13857463 C9.29423971,2.78199725 10,3.15489596 10,3.78619489 L10,16.1637406 C10,16.7950396 9.29423971,17.1679383 8.77467683,16.8113609 L3.92264322,13.1003479 C3.79237961,13.0108921 3.63825091,12.9630494 3.48026899,12.9630494 Z M14.9270376,3.03232286 C15.1729267,3.03232286 15.4040399,3.12815658 15.5777627,3.3022351 C17.3699891,5.09889099 18.3570052,7.48235058 18.3570052,10.0135053 C18.3570052,12.54466 17.3699891,14.9281196 15.5777627,16.7247755 C15.4041045,16.898854 15.1729914,16.9947524 14.9270052,16.9947524 C14.6820861,16.9947524 14.4515549,16.899436 14.2777674,16.7263598 C13.9192316,16.3684383 13.9185203,15.7852882 14.2762477,15.4264291 C15.7222893,13.9769926 16.5186727,12.0545954 16.5186727,10.0135053 C16.5186727,7.97241524 15.7222893,6.05001801 14.2762154,4.60058152 C13.9184879,4.24175473 13.9191992,3.65857229 14.277832,3.30065081 C14.4514256,3.1275746 14.6819567,3.03232286 14.9270376,3.03232286 Z M13.5730665,6.11570485 C14.6133991,7.15574642 15.1862998,8.54003279 15.1862998,10.0134924 C15.1862998,11.4892799 14.6113945,12.8741159 13.5675376,13.9128965 C13.3942351,14.0855848 13.1639626,14.1806425 12.9191727,14.1806425 C12.6727016,14.1806425 12.4412975,14.0844531 12.2677039,13.9097926 C12.0944984,13.7358111 11.9994406,13.5047303 11.9999903,13.2592291 C12.0005723,13.0136956 12.096794,12.7831644 12.2708079,12.6100882 C12.9654406,11.9185917 13.3479995,10.996467 13.3479995,10.0134924 C13.3479995,9.03119677 12.966346,8.1086194 12.2733298,7.4157649 C11.9150203,7.05745543 11.9149233,6.47436998 12.2731358,6.11589885 C12.4467617,5.94224065 12.6775838,5.84666559 12.923085,5.84666559 C13.1685538,5.84666559 13.3993436,5.94220831 13.5730665,6.11570485 Z","id":"Fill-2","fill":"#FFFFFF"}})])]):_vm._e()])]),(_vm.isVRCapable)?_c('div',{class:_vm.amplifyUI.tooltip,attrs:{"data-text":"Enter VR"},on:{"click":function($event){_vm.enterVR()}}},[_c('button',{class:_vm.amplifyUI.actionButton},[_c('svg',{attrs:{"width":"19px","height":"19px","viewBox":"0 0 19 19","version":"1.1","xmlns":"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[_c('g',{attrs:{"id":"icons/minis/VRon-Copy","stroke":"none","stroke-width":"1","fill":"none","fill-rule":"evenodd"}},[_c('g',{attrs:{"id":"Group-7-Copy","transform":"translate(1.000000, 3.000000)","fill":"#FFFFFF"}},[_c('path',{attrs:{"d":"M15.7856977,3.02395184 L17,3.02395184 L17,4.13237842 L17,4.54663675 L17,11.8915038 C17,12.5034193 16.4560011,13 15.7856977,13 L12.0095825,13 C9.98324439,10.1593807 8.80676009,8.741338 8.48012959,8.74587199 C8.16206045,8.75028714 7.01003321,10.1683298 5.02404785,13 L1.21426911,13 C0.543965735,13 3.32031236e-05,12.5034193 3.32031236e-05,11.8915038 L3.32031236e-05,4.54663675 L3.32031236e-05,4.13237842 L3.32031236e-05,3.02395184 L1.21426911,3.02395184 L15.7856977,3.02395184 Z M4.5,9 C5.32842712,9 6,8.32842712 6,7.5 C6,6.67157288 5.32842712,6 4.5,6 C3.67157288,6 3,6.67157288 3,7.5 C3,8.32842712 3.67157288,9 4.5,9 Z M12.5,9 C13.3284271,9 14,8.32842712 14,7.5 C14,6.67157288 13.3284271,6 12.5,6 C11.6715729,6 11,6.67157288 11,7.5 C11,8.32842712 11.6715729,9 12.5,9 Z M2.5486669,0 L14.420089,0 C14.7977406,0 15.1613805,0.149260956 15.4374308,0.417695511 L16.9999668,2.00634766 L0,2.00634766 L1.58537972,0.395493117 C1.84682061,0.141306827 2.19106994,0 2.5486669,0 Z","id":"Fill-1"}})])])])])]):_vm._e(),(!_vm.isFullscreen)?_c('div',{class:_vm.amplifyUI.tooltip,attrs:{"data-text":"Fullscreen"}},[_c('button',{class:_vm.amplifyUI.actionButton,on:{"click":function($event){_vm.maximize()}}},[_c('svg',{attrs:{"width":"19px","height":"19px","viewBox":"0 0 19 19","version":"1.1","xmlns":"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[_c('g',{attrs:{"id":"icons/minis/screenfull","stroke":"none","stroke-width":"1","fill":"none","fill-rule":"evenodd"}},[_c('path',{attrs:{"d":"M2.04162598,3 L2.04162598,16 L17.0147705,16 L17.0147705,3 L2.04162598,3 Z M1,2 L18,2 L18,17 L1,17 L1,2 Z M3,4 L16,4 L16,15 L3,15 L3,4 Z","id":"Rectangle-Copy","fill":"#FFFFFF","fill-rule":"nonzero"}})])])])]):_vm._e(),(_vm.isFullscreen)?_c('div',{class:_vm.amplifyUI.tooltip,attrs:{"data-text":"Exit Fullscreen"}},[_c('button',{class:_vm.amplifyUI.actionButton,on:{"click":function($event){_vm.minimize()}}},[_c('svg',{attrs:{"width":"19px","height":"19px","viewBox":"0 0 19 19","version":"1.1","xmlns":"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[_c('g',{attrs:{"id":"icons/minis/screensmall","stroke":"none","stroke-width":"1","fill":"none","fill-rule":"evenodd"}},[_c('path',{attrs:{"d":"M11,16 L17.0147705,16 L17.0147705,3 L2.04162598,3 L2.04162598,10 L11,10 L11,16 Z M1,2 L18,2 L18,17 L1,17 L1,2 Z","id":"Rectangle","fill":"#FFFFFF","fill-rule":"nonzero"}})])])])]):_vm._e()])]):_vm._e()])}
var SumerianScenevue_type_template_id_61b3c05e_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/xr/SumerianScene.vue?vue&type=template&id=61b3c05e&

// CONCATENATED MODULE: /root/app/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--12-0!/root/app/node_modules/@vue/cli-service/node_modules/thread-loader/dist/cjs.js!/root/app/node_modules/@vue/cli-plugin-babel/node_modules/babel-loader/lib!/root/app/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!/root/app/node_modules/vue-loader/lib??vue-loader-options!./src/components/xr/SumerianScene.vue?vue&type=script&lang=js&


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var SumerianScenevue_type_script_lang_js_ = ({
  name: 'SumerianScene',
  props: ['sceneName'],
  data: function data() {
    return {
      loading: false,
      loadPercentage: 0,
      isFullscreen: false,
      muted: false,
      showEnableAudio: false,
      isVRCapable: false,
      amplifyUI: aws_amplify_ui,
      sceneError: null
    };
  },
  created: function created() {
    this.SCENE_CONTAINER_DOM_ID = "scene-container-dom-id";
    this.SCENE_DOM_ID = "scene-dom-id";
  },
  mounted: function mounted() {
    document.addEventListener('fullscreenchange', this.onFullscreenChange.bind(this));
    document.addEventListener('webkitfullscreenchange', this.onFullscreenChange.bind(this));
    document.addEventListener('mozfullscreenchange', this.onFullscreenChange.bind(this));
    document.addEventListener('MSFullscreenChange', this.onFullscreenChange.bind(this));
    this.loadAndStartScene();
  },
  destroyed: function destroyed() {
    document.removeEventListener('fullscreenchange', this.onFullscreenChange.bind(this));
    document.removeEventListener('webkitfullscreenchange', this.onFullscreenChange.bind(this));
    document.removeEventListener('mozfullscreenchange', this.onFullscreenChange.bind(this));
    document.removeEventListener('MSFullscreenChange', this.onFullscreenChange.bind(this));
  },
  methods: {
    progressCallback: function progressCallback(progress) {
      var percentage = progress * 100;
      this.loadPercentage = percentage;
    },
    loadAndStartScene: function () {
      var _loadAndStartScene = Object(asyncToGenerator["a" /* default */])(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var _this = this;

        var sceneOptions;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.loading = true;
                sceneOptions = {
                  progressCallback: this.progressCallback
                };
                _context.prev = 2;
                _context.next = 5;
                return this.$Amplify.XR.loadScene(this.sceneName, this.SCENE_DOM_ID, sceneOptions);

              case 5:
                _context.next = 11;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](2);
                this.sceneError = 'Failed to load scene';
                return _context.abrupt("return");

              case 11:
                this.$Amplify.XR.start(this.sceneName);
                this.loading = false;
                this.muted = this.$Amplify.XR.isMuted(this.sceneName);
                this.isVRCapable = this.$Amplify.XR.isVRCapable(this.sceneName);
                this.$Amplify.XR.onSceneEvent(this.sceneName, 'AudioEnabled', function () {
                  return _this.showEnableAudio = false;
                });
                this.$Amplify.XR.onSceneEvent(this.sceneName, 'AudioDisabled', function () {
                  return _this.showEnableAudio = true;
                });

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[2, 7]]);
      }));

      return function loadAndStartScene() {
        return _loadAndStartScene.apply(this, arguments);
      };
    }(),
    setMuted: function setMuted(muted) {
      this.muted = muted;
      this.$Amplify.XR.setMuted(this.sceneName, muted);

      if (this.showEnableAudio) {
        this.$Amplify.XR.enableAudio(this.sceneName);
        this.showEnableAudio = false;
      }
    },
    enterVR: function enterVR() {
      this.$Amplify.XR.enterVR(this.sceneName);
    },
    onFullscreenChange: function onFullscreenChange() {
      var doc = document;
      this.isFullscreen = doc.fullscreenElement !== null;
    },
    maximize: function () {
      var _maximize = Object(asyncToGenerator["a" /* default */])(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2() {
        var sceneDomElement, requestFullScreen;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                sceneDomElement = document.getElementById(this.SCENE_CONTAINER_DOM_ID);
                requestFullScreen = sceneDomElement.requestFullscreen || sceneDomElement.msRequestFullscreen || sceneDomElement.mozRequestFullScreen || sceneDomElement.webkitRequestFullscreen;
                requestFullScreen.call(sceneDomElement);

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function maximize() {
        return _maximize.apply(this, arguments);
      };
    }(),
    minimize: function () {
      var _minimize = Object(asyncToGenerator["a" /* default */])(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3() {
        var doc;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                doc = document;

                if (doc.exitFullscreen) {
                  doc.exitFullscreen();
                } else if (doc.mozCancelFullScreen) {
                  doc.mozCancelFullScreen();
                } else if (doc.webkitExitFullscreen) {
                  doc.webkitExitFullscreen();
                }

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function minimize() {
        return _minimize.apply(this, arguments);
      };
    }()
  }
});
// CONCATENATED MODULE: ./src/components/xr/SumerianScene.vue?vue&type=script&lang=js&
 /* harmony default export */ var xr_SumerianScenevue_type_script_lang_js_ = (SumerianScenevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/xr/SumerianScene.vue





/* normalize component */

var SumerianScene_component = normalizeComponent(
  xr_SumerianScenevue_type_script_lang_js_,
  SumerianScenevue_type_template_id_61b3c05e_render,
  SumerianScenevue_type_template_id_61b3c05e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

SumerianScene_component.options.__file = "SumerianScene.vue"
/* harmony default export */ var SumerianScene = (SumerianScene_component.exports);
// CONCATENATED MODULE: ./src/components/xr/index.js
/*
 * Copyright 2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with
 * the License. A copy of the License is located at
 *
 *     http://aws.amazon.com/apache2.0/
 *
 * or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions
 * and limitations under the License.
 */


external_commonjs_vue_commonjs2_vue_root_Vue_default.a.component('amplify-sumerian-scene', SumerianScene);

// CONCATENATED MODULE: ./src/components/index.js





// CONCATENATED MODULE: ./src/plugins/AmplifyPlugin.js






/*
 * Copyright 2017-2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with
 * the License. A copy of the License is located at
 *
 *     http://aws.amazon.com/apache2.0/
 *
 * or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions
 * and limitations under the License.
 */

/*
  This plugin is a mechanism for avoiding the importation of Amplify into Amplify-Vue,
  while also making Amplify available to the entire host application.
*/
var requiredModules = ['Auth', 'AuthClass', 'I18n', 'Logger'];
var AmplifyPlugin = {
  install: function install(Vue, AmplifyModules) {
    var missingModules = [];
    requiredModules.forEach(function (r) {
      if (!Object.keys(AmplifyModules).includes(r)) {
        missingModules.push(r);
      }
    });

    if (missingModules.length > 0) {
      return new Error("AmplifyPlugin installation method did not receive required modules: ".concat(missingModules.join(', '), ".")); //eslint-disable-line
    }

    Vue.prototype.$Amplify = AmplifyModules;
  }
};
/* harmony default export */ var plugins_AmplifyPlugin = (AmplifyPlugin); //eslint-disable-line
// CONCATENATED MODULE: /root/app/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--12-0!/root/app/node_modules/@vue/cli-service/node_modules/thread-loader/dist/cjs.js!/root/app/node_modules/@vue/cli-plugin-babel/node_modules/babel-loader/lib!/root/app/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!/root/app/node_modules/vue-loader/lib??vue-loader-options!./src/Amplify.vue?vue&type=script&lang=js&
//
//
//
//
// TODO: FIX SPREAD OPERATOR ERROR IN CIRCLECI TO ELIMINATE EXPLICIT IMPORTS AND USE BARRELS



/* harmony default export */ var Amplifyvue_type_script_lang_js_ = ({
  name: 'amplify',
  components: {
    Authenticator: Authenticator,
    SignIn: SignIn,
    SignUp: SignUp,
    SignOut: SignOut,
    ConfirmSignUp: ConfirmSignUp,
    ConfirmSignIn: ConfirmSignIn,
    ForgotPassword: ForgotPassword,
    SetMfa: SetMFA,
    Chatbot: Chatbot,
    PhotoPicker: PhotoPicker,
    S3Album: S3Album,
    S3Image: S3Image,
    SumerianScene: SumerianScene,
    RequireNewPassword: RequireNewPassword
  },
  AmplifyPlugin: plugins_AmplifyPlugin,
  AmplifyEventBus: AmplifyEventBus["a" /* default */]
});
// CONCATENATED MODULE: ./src/Amplify.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_Amplifyvue_type_script_lang_js_ = (Amplifyvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@aws-amplify/ui/dist/style.css?vue&type=style&index=0&lang=css&
var stylevue_type_style_index_0_lang_css_ = __webpack_require__("8e85");

// EXTERNAL MODULE: ./src/Amplify.vue?vue&type=style&index=1&lang=css&
var Amplifyvue_type_style_index_1_lang_css_ = __webpack_require__("9745");

// CONCATENATED MODULE: ./src/Amplify.vue







/* normalize component */

var Amplify_component = normalizeComponent(
  src_Amplifyvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

Amplify_component.options.__file = "Amplify.vue"
/* harmony default export */ var Amplify = (Amplify_component.exports);
// CONCATENATED MODULE: /root/app/node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (Amplify);



/***/ }),

/***/ "23e2":
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__("d951")('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),

/***/ "247b":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("46bb");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("0ed3").default
var update = add("ccf821c0", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "25a6":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "274e":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("950e");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("0ed3").default
var update = add("c99f2af0", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "288e":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
var $export = __webpack_require__("ef37");
var $find = __webpack_require__("418d")(5);
var KEY = 'find';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__("96ba")(KEY);


/***/ }),

/***/ "2989":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.5 Object.freeze(O)
var isObject = __webpack_require__("194e");
var meta = __webpack_require__("054c").onFreeze;

__webpack_require__("5642")('freeze', function ($freeze) {
  return function freeze(it) {
    return $freeze && isObject(it) ? $freeze(meta(it)) : it;
  };
});


/***/ }),

/***/ "2c53":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "2d2d":
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "2e73":
/***/ (function(module, exports, __webpack_require__) {

var $iterators = __webpack_require__("dde3");
var getKeys = __webpack_require__("8996");
var redefine = __webpack_require__("e385");
var global = __webpack_require__("0e8c");
var hide = __webpack_require__("bafe");
var Iterators = __webpack_require__("9dd3");
var wks = __webpack_require__("d951");
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}


/***/ }),

/***/ "3460":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("5c50");
var global = __webpack_require__("0e8c");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__("742f") ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "38bc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_3_node_modules_vue_cli_service_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Chatbot_vue_vue_type_style_index_0_id_37eb263c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("5345");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_3_node_modules_vue_cli_service_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Chatbot_vue_vue_type_style_index_0_id_37eb263c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_3_node_modules_vue_cli_service_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Chatbot_vue_vue_type_style_index_0_id_37eb263c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_3_node_modules_vue_cli_service_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Chatbot_vue_vue_type_style_index_0_id_37eb263c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "3bd0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__("bec8");
var descriptor = __webpack_require__("ad8d");
var setToStringTag = __webpack_require__("0e85");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__("bafe")(IteratorPrototype, __webpack_require__("d951")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "3c4f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 21.2.5.3 get RegExp.prototype.flags
var anObject = __webpack_require__("8c7e");
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "3cdf":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__("ef37");

$export($export.S + $export.F, 'Object', { assign: __webpack_require__("ab23") });


/***/ }),

/***/ "3d85":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("a124")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "3f83":
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else { var i, a; }
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var
    ArrayProto = Array.prototype,
    ObjProto = Object.prototype;

var
    slice = ArrayProto.slice,
    toString = ObjProto.toString;

var util = {};

util.isArray = function(obj) {
    return Array.isArray(obj);
};

var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
util.isArrayLike = function(obj) {
    if(typeof obj !== 'object' || !obj){
        return false;
    }
    var length = obj.length;
    return typeof length === 'number'
        && length % 1 === 0 && length >= 0 && length <= MAX_ARRAY_INDEX;
};

util.isObject = function(obj) {
    var type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
};


util.each = function(obj, callback) {
    var i,
        len;
    if (util.isArray(obj)) {
        for (i = 0, len = obj.length; i < len; i++) {
            if (callback(obj[i], i, obj) === false) {
                break;
            }
        }
    } else {
        for (i in obj) {
            if (callback(obj[i], i, obj) === false) {
                break;
            }
        }
    }
    return obj;
};

util.each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp', 'Error'], function(name) {
    util['is' + name] = function(obj) {
        return toString.call(obj) === '[object ' + name + ']';
    };
});

util.toArray = function(list, start) {
  start = start || 0
  var i = list.length - start
  var ret = new Array(i)
  while (i--) {
    ret[i] = list[i + start]
  }
  return ret
}

util.toNumber = function(value) {
  if (typeof value !== 'string') {
    return value
  } else {
    var parsed = Number(value)
    return isNaN(parsed)
      ? value
      : parsed
  }
};

util.convertArray = function (value) {
    if (util.isArray(value)) {
      return value
    } else if (util.isPlainObject(value)) {
      // convert plain object to array.
      var keys = Object.keys(value)
      var i = keys.length
      var res = new Array(i)
      var key
      while (i--) {
        key = keys[i]
        res[i] = {
          $key: key,
          $value: value[key]
        }
      }
      return res
    } else {
      return value || []
    }
}

function multiIndex(obj,is) {  // obj,['1','2','3'] -> ((obj['1'])['2'])['3']
    return is.length ? multiIndex(obj[is[0]],is.slice(1)) : obj
}

util.getPath = function(obj,is) {   // obj,'1.2.3' -> multiIndex(obj,['1','2','3'])
    return multiIndex(obj,is.split('.'))
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 *
 * @param {*} obj
 * @return {Boolean}
 */

var toString = Object.prototype.toString
var OBJECT_STRING = '[object Object]'
util.isPlainObject = function (obj) {
  return toString.call(obj) === OBJECT_STRING
}

/* harmony default export */ __webpack_exports__["a"] = (util);

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_index__ = __webpack_require__(0);


/**
 * Filter filter for arrays
 *
 * @param {Array} arr
 * @param {String} prop
 * @param {String|Number} search
 */

function filterBy (arr, search) {
  var arr = __WEBPACK_IMPORTED_MODULE_0__util_index__["a" /* default */].convertArray(arr)
  if (search == null) {
    return arr
  }
  if (typeof search === 'function') {
    return arr.filter(search)
  }
  // cast to lowercase string
  search = ('' + search).toLowerCase()
  var n = 2
  // extract and flatten keys
  var keys = Array.prototype.concat.apply([], __WEBPACK_IMPORTED_MODULE_0__util_index__["a" /* default */].toArray(arguments, n))
  var res = []
  var item, key, val, j
  for (var i = 0, l = arr.length; i < l; i++) {
    item = arr[i]
    val = (item && item.$value) || item
    j = keys.length
    if (j) {
      while (j--) {
        key = keys[j]
        if ((key === '$key' && contains(item.$key, search)) ||
            contains(__WEBPACK_IMPORTED_MODULE_0__util_index__["a" /* default */].getPath(val, key), search)) {
          res.push(item)
          break
        }
      }
    } else if (contains(item, search)) {
      res.push(item)
    }
  }
  return res
}

function contains (val, search) {
  var i
  if (__WEBPACK_IMPORTED_MODULE_0__util_index__["a" /* default */].isPlainObject(val)) {
    var keys = Object.keys(val)
    i = keys.length
    while (i--) {
      if (contains(val[keys[i]], search)) {
        return true
      }
    }
  } else if (__WEBPACK_IMPORTED_MODULE_0__util_index__["a" /* default */].isArray(val)) {
    i = val.length
    while (i--) {
      if (contains(val[i], search)) {
        return true
      }
    }
  } else if (val != null) {
    return val.toString().toLowerCase().indexOf(search) > -1
  }
}

/* harmony default export */ __webpack_exports__["a"] = (filterBy);

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_index__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__string_index__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__array_index__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__other_index__ = __webpack_require__(13);





var Vue2Filters = {
  install: function(Vue) {
    __WEBPACK_IMPORTED_MODULE_0__util_index__["a" /* default */].each(__WEBPACK_IMPORTED_MODULE_1__string_index__, function(value, key) {
        Vue.filter(key, value)
    })

    __WEBPACK_IMPORTED_MODULE_0__util_index__["a" /* default */].each(__WEBPACK_IMPORTED_MODULE_3__other_index__, function(value, key) {
        Vue.filter(key, value)
    })

    Vue.mixin({
      methods: {
        limitBy: __WEBPACK_IMPORTED_MODULE_2__array_index__["c" /* limitBy */],
        filterBy: __WEBPACK_IMPORTED_MODULE_2__array_index__["a" /* filterBy */],
        orderBy: __WEBPACK_IMPORTED_MODULE_2__array_index__["d" /* orderBy */],
        find: __WEBPACK_IMPORTED_MODULE_2__array_index__["b" /* find */]
      }
    })
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Vue2Filters);

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Vue2Filters);
}


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__capitalize__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__uppercase__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lowercase__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__placeholder__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__truncate__ = __webpack_require__(8);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "capitalize", function() { return __WEBPACK_IMPORTED_MODULE_0__capitalize__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "uppercase", function() { return __WEBPACK_IMPORTED_MODULE_1__uppercase__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "lowercase", function() { return __WEBPACK_IMPORTED_MODULE_2__lowercase__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "placeholder", function() { return __WEBPACK_IMPORTED_MODULE_3__placeholder__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "truncate", function() { return __WEBPACK_IMPORTED_MODULE_4__truncate__["a"]; });








/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 *  Converts a string into Capitalize
 * 
 * 'abc' => 'Abc'
 */

function capitalize (value) {
  if (!value && value !== 0) return ''
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1)
}

/* harmony default export */ __webpack_exports__["a"] = (capitalize);


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Converts a string to UPPERCASE
 * 
 * 'abc' => 'ABC'
 */

function uppercase (value) {
  return (value || value === 0)
    ? value.toString().toUpperCase()
    : ''
}

/* harmony default export */ __webpack_exports__["a"] = (uppercase);

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Converts a string to lowercase
 * 
 * 'AbC' => 'abc'
 */

function lowercase (value) {
  return (value || value === 0)
    ? value.toString().toLowerCase()
    : ''
}

/* harmony default export */ __webpack_exports__["a"] = (lowercase);

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 *  If the value is missing outputs the placeholder text
 * 
 * '' => {placeholder}
 * 'foo' => 'foo'
 */

function placeholder (input, property) {
  return ( input === undefined || input === '' || input === null ) ? property : input;
}

/* harmony default export */ __webpack_exports__["a"] = (placeholder);


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 *  Truncate at the given || default length
 *
 * 'lorem ipsum dolor' => 'lorem ipsum dol...'
 */

function truncate (value, length) {
  length = length || 15
  if( !value || typeof value !== 'string' ) return ''
  if( value.length <= length) return value
  return value.substring(0, length) + '...'
}

/* harmony default export */ __webpack_exports__["a"] = (truncate);


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__limitBy__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__filterBy__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__orderBy__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__find__ = __webpack_require__(12);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__limitBy__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__filterBy__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__orderBy__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_3__find__["a"]; });








/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_index__ = __webpack_require__(0);


/**
 * Limit filter for arrays
 *
 * @param {Number} n
 * @param {Number} offset (Decimal expected)
 */

function limitBy (arr, n, offset) {
  offset = offset ? parseInt(offset, 10) : 0
  n = __WEBPACK_IMPORTED_MODULE_0__util_index__["a" /* default */].toNumber(n)
  return typeof n === 'number'
    ? arr.slice(offset, offset + n)
    : arr
}

/* harmony default export */ __webpack_exports__["a"] = (limitBy);

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_index__ = __webpack_require__(0);


/**
 * Filter filter for arrays
 *
 * @param {String|Array<String>|Function} ...sortKeys
 * @param {Number} [order]
 */

function orderBy (arr) {
  var comparator = null
  var sortKeys
  arr = __WEBPACK_IMPORTED_MODULE_0__util_index__["a" /* default */].convertArray(arr)

  // determine order (last argument)
  var args = __WEBPACK_IMPORTED_MODULE_0__util_index__["a" /* default */].toArray(arguments, 1)
  var order = args[args.length - 1]
  if (typeof order === 'number') {
    order = order < 0 ? -1 : 1
    args = args.length > 1 ? args.slice(0, -1) : args
  } else {
    order = 1
  }

  // determine sortKeys & comparator
  var firstArg = args[0]
  if (!firstArg) {
    return arr
  } else if (typeof firstArg === 'function') {
    // custom comparator
    comparator = function (a, b) {
      return firstArg(a, b) * order
    }
  } else {
    // string keys. flatten first
    sortKeys = Array.prototype.concat.apply([], args)
    comparator = function (a, b, i) {
      i = i || 0
      return i >= sortKeys.length - 1
        ? baseCompare(a, b, i)
        : baseCompare(a, b, i) || comparator(a, b, i + 1)
    }
  }

  function baseCompare (a, b, sortKeyIndex) {
    var sortKey = sortKeys[sortKeyIndex]
    if (sortKey) {
      if (sortKey !== '$key') {
        if (__WEBPACK_IMPORTED_MODULE_0__util_index__["a" /* default */].isObject(a) && '$value' in a) a = a.$value
        if (__WEBPACK_IMPORTED_MODULE_0__util_index__["a" /* default */].isObject(b) && '$value' in b) b = b.$value
      }
      a = __WEBPACK_IMPORTED_MODULE_0__util_index__["a" /* default */].isObject(a) ? __WEBPACK_IMPORTED_MODULE_0__util_index__["a" /* default */].getPath(a, sortKey) : a
      b = __WEBPACK_IMPORTED_MODULE_0__util_index__["a" /* default */].isObject(b) ? __WEBPACK_IMPORTED_MODULE_0__util_index__["a" /* default */].getPath(b, sortKey) : b
    }
    return a === b ? 0 : a > b ? order : -order
  }

  // sort on a copy to avoid mutating original array
  return arr.slice().sort(comparator)
}

/* harmony default export */ __webpack_exports__["a"] = (orderBy);

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__filterBy__ = __webpack_require__(1);


/**
 * Get first matching element from a filtered array
 *
 * @param {Array} arr
 * @param {String|Number} search
 * @returns {mixed}
 */
function find(arr, search) 
{
  var array = __WEBPACK_IMPORTED_MODULE_0__filterBy__["a" /* default */].apply(this, arguments);
  array.splice(1);
  return array;
}

/* harmony default export */ __webpack_exports__["a"] = (find);


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__currency__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pluralize__ = __webpack_require__(15);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "currency", function() { return __WEBPACK_IMPORTED_MODULE_0__currency__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "pluralize", function() { return __WEBPACK_IMPORTED_MODULE_1__pluralize__["a"]; });






/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * 
 * 12345 => $12,345.00
 *
 * @param {String} symbol
 * @param {Number} decimals Decimal places
 * @param {Object} options
 */

function currency (value, symbol, decimals, options) {
  var thousandsSeparator, symbolOnLeft, spaceBetweenAmountAndSymbol
  var digitsRE = /(\d{3})(?=\d)/g
  options = options || {}
  value = parseFloat(value)
  if (!isFinite(value) || (!value && value !== 0)) return ''
  symbol = symbol != null ? symbol : '$'
  decimals = decimals != null ? decimals : 2
  thousandsSeparator = options.thousandsSeparator != null ? options.thousandsSeparator : ','
  symbolOnLeft = options.symbolOnLeft != null ? options.symbolOnLeft : true
  spaceBetweenAmountAndSymbol = options.spaceBetweenAmountAndSymbol != null ? options.spaceBetweenAmountAndSymbol : false
  var stringified = Math.abs(value).toFixed(decimals)
  stringified = options.decimalSeparator
    ? stringified.replace('.', options.decimalSeparator)
    : stringified
  var _int = decimals
    ? stringified.slice(0, -1 - decimals)
    : stringified
  var i = _int.length % 3
  var head = i > 0
    ? (_int.slice(0, i) + (_int.length > 3 ? thousandsSeparator : ''))
    : ''
  var _float = decimals
    ? stringified.slice(-1 - decimals)
    : ''
  symbol = spaceBetweenAmountAndSymbol
    ? (symbolOnLeft ? symbol + ' ' : ' ' + symbol)
    : symbol
  symbol = symbolOnLeft
    ? symbol + head +
      _int.slice(i).replace(digitsRE, '$1' + thousandsSeparator) + _float
    : head +
      _int.slice(i).replace(digitsRE, '$1' + thousandsSeparator) + _float + symbol
  var sign = value < 0 ? '-' : ''
  return sign + symbol
}

/* harmony default export */ __webpack_exports__["a"] = (currency);

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_index__ = __webpack_require__(0);


/**
 * 'item' => 'items'
 *
 * @params
 *  an array of strings corresponding to
 *  the single, double, triple ... forms of the word to
 *  be pluralized. When the number to be pluralized
 *  exceeds the length of the args, it will use the last
 *  entry in the array.
 *
 *  e.g. ['single', 'double', 'triple', 'multiple']
 */

function pluralize (value) {
  var args = __WEBPACK_IMPORTED_MODULE_0__util_index__["a" /* default */].toArray(arguments, 1)
  return args.length > 1
    ? (args[value % 10 - 1] || args[args.length - 1])
    : (args[0] + (value === 1 ? '' : 's'))
}

/* harmony default export */ __webpack_exports__["a"] = (pluralize);

/***/ })
/******/ ]);
});

/***/ }),

/***/ "402c":
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__("d0e9");
var createDesc = __webpack_require__("ad8d");
var toIObject = __webpack_require__("0b04");
var toPrimitive = __webpack_require__("78d3");
var has = __webpack_require__("25a6");
var IE8_DOM_DEFINE = __webpack_require__("cd30");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__("3d85") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "418d":
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__("124c");
var IObject = __webpack_require__("aec0");
var toObject = __webpack_require__("79c1");
var toLength = __webpack_require__("bb64");
var asc = __webpack_require__("6a8f");
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),

/***/ "42c2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _asyncToGenerator; });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "443a":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "450e":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)

var toObject = __webpack_require__("79c1");
var toAbsoluteIndex = __webpack_require__("adb3");
var toLength = __webpack_require__("bb64");

module.exports = [].copyWithin || function copyWithin(target /* = 0 */, start /* = 0, end = @length */) {
  var O = toObject(this);
  var len = toLength(O.length);
  var to = toAbsoluteIndex(target, len);
  var from = toAbsoluteIndex(start, len);
  var end = arguments.length > 2 ? arguments[2] : undefined;
  var count = Math.min((end === undefined ? len : toAbsoluteIndex(end, len)) - from, len - to);
  var inc = 1;
  if (from < to && to < from + count) {
    inc = -1;
    from += count - 1;
    to += count - 1;
  }
  while (count-- > 0) {
    if (from in O) O[to] = O[from];
    else delete O[to];
    to += inc;
    from += inc;
  } return O;
};


/***/ }),

/***/ "46bb":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("443a")(false);
// imports


// module
exports.push([module.i, "\n.invalid{border-color:red\n}", ""]);

// exports


/***/ }),

/***/ "4cb0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__("a124");

module.exports = function (method, arg) {
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call
    arg ? method.call(null, function () { /* empty */ }, 1) : method.call(null);
  });
};


/***/ }),

/***/ "4cf2":
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__("b735");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "4e88":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

if (__webpack_require__("3d85")) {
  var LIBRARY = __webpack_require__("742f");
  var global = __webpack_require__("0e8c");
  var fails = __webpack_require__("a124");
  var $export = __webpack_require__("ef37");
  var $typed = __webpack_require__("fa48");
  var $buffer = __webpack_require__("130b");
  var ctx = __webpack_require__("124c");
  var anInstance = __webpack_require__("faee");
  var propertyDesc = __webpack_require__("ad8d");
  var hide = __webpack_require__("bafe");
  var redefineAll = __webpack_require__("03d8");
  var toInteger = __webpack_require__("9e61");
  var toLength = __webpack_require__("bb64");
  var toIndex = __webpack_require__("c570");
  var toAbsoluteIndex = __webpack_require__("adb3");
  var toPrimitive = __webpack_require__("78d3");
  var has = __webpack_require__("25a6");
  var classof = __webpack_require__("be45");
  var isObject = __webpack_require__("194e");
  var toObject = __webpack_require__("79c1");
  var isArrayIter = __webpack_require__("c3ea");
  var create = __webpack_require__("bec8");
  var getPrototypeOf = __webpack_require__("904a");
  var gOPN = __webpack_require__("c74b").f;
  var getIterFn = __webpack_require__("fd6d");
  var uid = __webpack_require__("f455");
  var wks = __webpack_require__("d951");
  var createArrayMethod = __webpack_require__("418d");
  var createArrayIncludes = __webpack_require__("af6b");
  var speciesConstructor = __webpack_require__("c1d1");
  var ArrayIterators = __webpack_require__("dde3");
  var Iterators = __webpack_require__("9dd3");
  var $iterDetect = __webpack_require__("23e2");
  var setSpecies = __webpack_require__("d7a2");
  var arrayFill = __webpack_require__("b9c7");
  var arrayCopyWithin = __webpack_require__("450e");
  var $DP = __webpack_require__("6f0d");
  var $GOPD = __webpack_require__("402c");
  var dP = $DP.f;
  var gOPD = $GOPD.f;
  var RangeError = global.RangeError;
  var TypeError = global.TypeError;
  var Uint8Array = global.Uint8Array;
  var ARRAY_BUFFER = 'ArrayBuffer';
  var SHARED_BUFFER = 'Shared' + ARRAY_BUFFER;
  var BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT';
  var PROTOTYPE = 'prototype';
  var ArrayProto = Array[PROTOTYPE];
  var $ArrayBuffer = $buffer.ArrayBuffer;
  var $DataView = $buffer.DataView;
  var arrayForEach = createArrayMethod(0);
  var arrayFilter = createArrayMethod(2);
  var arraySome = createArrayMethod(3);
  var arrayEvery = createArrayMethod(4);
  var arrayFind = createArrayMethod(5);
  var arrayFindIndex = createArrayMethod(6);
  var arrayIncludes = createArrayIncludes(true);
  var arrayIndexOf = createArrayIncludes(false);
  var arrayValues = ArrayIterators.values;
  var arrayKeys = ArrayIterators.keys;
  var arrayEntries = ArrayIterators.entries;
  var arrayLastIndexOf = ArrayProto.lastIndexOf;
  var arrayReduce = ArrayProto.reduce;
  var arrayReduceRight = ArrayProto.reduceRight;
  var arrayJoin = ArrayProto.join;
  var arraySort = ArrayProto.sort;
  var arraySlice = ArrayProto.slice;
  var arrayToString = ArrayProto.toString;
  var arrayToLocaleString = ArrayProto.toLocaleString;
  var ITERATOR = wks('iterator');
  var TAG = wks('toStringTag');
  var TYPED_CONSTRUCTOR = uid('typed_constructor');
  var DEF_CONSTRUCTOR = uid('def_constructor');
  var ALL_CONSTRUCTORS = $typed.CONSTR;
  var TYPED_ARRAY = $typed.TYPED;
  var VIEW = $typed.VIEW;
  var WRONG_LENGTH = 'Wrong length!';

  var $map = createArrayMethod(1, function (O, length) {
    return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);
  });

  var LITTLE_ENDIAN = fails(function () {
    // eslint-disable-next-line no-undef
    return new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;
  });

  var FORCED_SET = !!Uint8Array && !!Uint8Array[PROTOTYPE].set && fails(function () {
    new Uint8Array(1).set({});
  });

  var toOffset = function (it, BYTES) {
    var offset = toInteger(it);
    if (offset < 0 || offset % BYTES) throw RangeError('Wrong offset!');
    return offset;
  };

  var validate = function (it) {
    if (isObject(it) && TYPED_ARRAY in it) return it;
    throw TypeError(it + ' is not a typed array!');
  };

  var allocate = function (C, length) {
    if (!(isObject(C) && TYPED_CONSTRUCTOR in C)) {
      throw TypeError('It is not a typed array constructor!');
    } return new C(length);
  };

  var speciesFromList = function (O, list) {
    return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);
  };

  var fromList = function (C, list) {
    var index = 0;
    var length = list.length;
    var result = allocate(C, length);
    while (length > index) result[index] = list[index++];
    return result;
  };

  var addGetter = function (it, key, internal) {
    dP(it, key, { get: function () { return this._d[internal]; } });
  };

  var $from = function from(source /* , mapfn, thisArg */) {
    var O = toObject(source);
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var iterFn = getIterFn(O);
    var i, length, values, result, step, iterator;
    if (iterFn != undefined && !isArrayIter(iterFn)) {
      for (iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++) {
        values.push(step.value);
      } O = values;
    }
    if (mapping && aLen > 2) mapfn = ctx(mapfn, arguments[2], 2);
    for (i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++) {
      result[i] = mapping ? mapfn(O[i], i) : O[i];
    }
    return result;
  };

  var $of = function of(/* ...items */) {
    var index = 0;
    var length = arguments.length;
    var result = allocate(this, length);
    while (length > index) result[index] = arguments[index++];
    return result;
  };

  // iOS Safari 6.x fails here
  var TO_LOCALE_BUG = !!Uint8Array && fails(function () { arrayToLocaleString.call(new Uint8Array(1)); });

  var $toLocaleString = function toLocaleString() {
    return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);
  };

  var proto = {
    copyWithin: function copyWithin(target, start /* , end */) {
      return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
    },
    every: function every(callbackfn /* , thisArg */) {
      return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    fill: function fill(value /* , start, end */) { // eslint-disable-line no-unused-vars
      return arrayFill.apply(validate(this), arguments);
    },
    filter: function filter(callbackfn /* , thisArg */) {
      return speciesFromList(this, arrayFilter(validate(this), callbackfn,
        arguments.length > 1 ? arguments[1] : undefined));
    },
    find: function find(predicate /* , thisArg */) {
      return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
    },
    findIndex: function findIndex(predicate /* , thisArg */) {
      return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
    },
    forEach: function forEach(callbackfn /* , thisArg */) {
      arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    indexOf: function indexOf(searchElement /* , fromIndex */) {
      return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
    },
    includes: function includes(searchElement /* , fromIndex */) {
      return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
    },
    join: function join(separator) { // eslint-disable-line no-unused-vars
      return arrayJoin.apply(validate(this), arguments);
    },
    lastIndexOf: function lastIndexOf(searchElement /* , fromIndex */) { // eslint-disable-line no-unused-vars
      return arrayLastIndexOf.apply(validate(this), arguments);
    },
    map: function map(mapfn /* , thisArg */) {
      return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    reduce: function reduce(callbackfn /* , initialValue */) { // eslint-disable-line no-unused-vars
      return arrayReduce.apply(validate(this), arguments);
    },
    reduceRight: function reduceRight(callbackfn /* , initialValue */) { // eslint-disable-line no-unused-vars
      return arrayReduceRight.apply(validate(this), arguments);
    },
    reverse: function reverse() {
      var that = this;
      var length = validate(that).length;
      var middle = Math.floor(length / 2);
      var index = 0;
      var value;
      while (index < middle) {
        value = that[index];
        that[index++] = that[--length];
        that[length] = value;
      } return that;
    },
    some: function some(callbackfn /* , thisArg */) {
      return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    sort: function sort(comparefn) {
      return arraySort.call(validate(this), comparefn);
    },
    subarray: function subarray(begin, end) {
      var O = validate(this);
      var length = O.length;
      var $begin = toAbsoluteIndex(begin, length);
      return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(
        O.buffer,
        O.byteOffset + $begin * O.BYTES_PER_ELEMENT,
        toLength((end === undefined ? length : toAbsoluteIndex(end, length)) - $begin)
      );
    }
  };

  var $slice = function slice(start, end) {
    return speciesFromList(this, arraySlice.call(validate(this), start, end));
  };

  var $set = function set(arrayLike /* , offset */) {
    validate(this);
    var offset = toOffset(arguments[1], 1);
    var length = this.length;
    var src = toObject(arrayLike);
    var len = toLength(src.length);
    var index = 0;
    if (len + offset > length) throw RangeError(WRONG_LENGTH);
    while (index < len) this[offset + index] = src[index++];
  };

  var $iterators = {
    entries: function entries() {
      return arrayEntries.call(validate(this));
    },
    keys: function keys() {
      return arrayKeys.call(validate(this));
    },
    values: function values() {
      return arrayValues.call(validate(this));
    }
  };

  var isTAIndex = function (target, key) {
    return isObject(target)
      && target[TYPED_ARRAY]
      && typeof key != 'symbol'
      && key in target
      && String(+key) == String(key);
  };
  var $getDesc = function getOwnPropertyDescriptor(target, key) {
    return isTAIndex(target, key = toPrimitive(key, true))
      ? propertyDesc(2, target[key])
      : gOPD(target, key);
  };
  var $setDesc = function defineProperty(target, key, desc) {
    if (isTAIndex(target, key = toPrimitive(key, true))
      && isObject(desc)
      && has(desc, 'value')
      && !has(desc, 'get')
      && !has(desc, 'set')
      // TODO: add validation descriptor w/o calling accessors
      && !desc.configurable
      && (!has(desc, 'writable') || desc.writable)
      && (!has(desc, 'enumerable') || desc.enumerable)
    ) {
      target[key] = desc.value;
      return target;
    } return dP(target, key, desc);
  };

  if (!ALL_CONSTRUCTORS) {
    $GOPD.f = $getDesc;
    $DP.f = $setDesc;
  }

  $export($export.S + $export.F * !ALL_CONSTRUCTORS, 'Object', {
    getOwnPropertyDescriptor: $getDesc,
    defineProperty: $setDesc
  });

  if (fails(function () { arrayToString.call({}); })) {
    arrayToString = arrayToLocaleString = function toString() {
      return arrayJoin.call(this);
    };
  }

  var $TypedArrayPrototype$ = redefineAll({}, proto);
  redefineAll($TypedArrayPrototype$, $iterators);
  hide($TypedArrayPrototype$, ITERATOR, $iterators.values);
  redefineAll($TypedArrayPrototype$, {
    slice: $slice,
    set: $set,
    constructor: function () { /* noop */ },
    toString: arrayToString,
    toLocaleString: $toLocaleString
  });
  addGetter($TypedArrayPrototype$, 'buffer', 'b');
  addGetter($TypedArrayPrototype$, 'byteOffset', 'o');
  addGetter($TypedArrayPrototype$, 'byteLength', 'l');
  addGetter($TypedArrayPrototype$, 'length', 'e');
  dP($TypedArrayPrototype$, TAG, {
    get: function () { return this[TYPED_ARRAY]; }
  });

  // eslint-disable-next-line max-statements
  module.exports = function (KEY, BYTES, wrapper, CLAMPED) {
    CLAMPED = !!CLAMPED;
    var NAME = KEY + (CLAMPED ? 'Clamped' : '') + 'Array';
    var GETTER = 'get' + KEY;
    var SETTER = 'set' + KEY;
    var TypedArray = global[NAME];
    var Base = TypedArray || {};
    var TAC = TypedArray && getPrototypeOf(TypedArray);
    var FORCED = !TypedArray || !$typed.ABV;
    var O = {};
    var TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];
    var getter = function (that, index) {
      var data = that._d;
      return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);
    };
    var setter = function (that, index, value) {
      var data = that._d;
      if (CLAMPED) value = (value = Math.round(value)) < 0 ? 0 : value > 0xff ? 0xff : value & 0xff;
      data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);
    };
    var addElement = function (that, index) {
      dP(that, index, {
        get: function () {
          return getter(this, index);
        },
        set: function (value) {
          return setter(this, index, value);
        },
        enumerable: true
      });
    };
    if (FORCED) {
      TypedArray = wrapper(function (that, data, $offset, $length) {
        anInstance(that, TypedArray, NAME, '_d');
        var index = 0;
        var offset = 0;
        var buffer, byteLength, length, klass;
        if (!isObject(data)) {
          length = toIndex(data);
          byteLength = length * BYTES;
          buffer = new $ArrayBuffer(byteLength);
        } else if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
          buffer = data;
          offset = toOffset($offset, BYTES);
          var $len = data.byteLength;
          if ($length === undefined) {
            if ($len % BYTES) throw RangeError(WRONG_LENGTH);
            byteLength = $len - offset;
            if (byteLength < 0) throw RangeError(WRONG_LENGTH);
          } else {
            byteLength = toLength($length) * BYTES;
            if (byteLength + offset > $len) throw RangeError(WRONG_LENGTH);
          }
          length = byteLength / BYTES;
        } else if (TYPED_ARRAY in data) {
          return fromList(TypedArray, data);
        } else {
          return $from.call(TypedArray, data);
        }
        hide(that, '_d', {
          b: buffer,
          o: offset,
          l: byteLength,
          e: length,
          v: new $DataView(buffer)
        });
        while (index < length) addElement(that, index++);
      });
      TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);
      hide(TypedArrayPrototype, 'constructor', TypedArray);
    } else if (!fails(function () {
      TypedArray(1);
    }) || !fails(function () {
      new TypedArray(-1); // eslint-disable-line no-new
    }) || !$iterDetect(function (iter) {
      new TypedArray(); // eslint-disable-line no-new
      new TypedArray(null); // eslint-disable-line no-new
      new TypedArray(1.5); // eslint-disable-line no-new
      new TypedArray(iter); // eslint-disable-line no-new
    }, true)) {
      TypedArray = wrapper(function (that, data, $offset, $length) {
        anInstance(that, TypedArray, NAME);
        var klass;
        // `ws` module bug, temporarily remove validation length for Uint8Array
        // https://github.com/websockets/ws/pull/645
        if (!isObject(data)) return new Base(toIndex(data));
        if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
          return $length !== undefined
            ? new Base(data, toOffset($offset, BYTES), $length)
            : $offset !== undefined
              ? new Base(data, toOffset($offset, BYTES))
              : new Base(data);
        }
        if (TYPED_ARRAY in data) return fromList(TypedArray, data);
        return $from.call(TypedArray, data);
      });
      arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function (key) {
        if (!(key in TypedArray)) hide(TypedArray, key, Base[key]);
      });
      TypedArray[PROTOTYPE] = TypedArrayPrototype;
      if (!LIBRARY) TypedArrayPrototype.constructor = TypedArray;
    }
    var $nativeIterator = TypedArrayPrototype[ITERATOR];
    var CORRECT_ITER_NAME = !!$nativeIterator
      && ($nativeIterator.name == 'values' || $nativeIterator.name == undefined);
    var $iterator = $iterators.values;
    hide(TypedArray, TYPED_CONSTRUCTOR, true);
    hide(TypedArrayPrototype, TYPED_ARRAY, NAME);
    hide(TypedArrayPrototype, VIEW, true);
    hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);

    if (CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)) {
      dP(TypedArrayPrototype, TAG, {
        get: function () { return NAME; }
      });
    }

    O[NAME] = TypedArray;

    $export($export.G + $export.W + $export.F * (TypedArray != Base), O);

    $export($export.S, NAME, {
      BYTES_PER_ELEMENT: BYTES
    });

    $export($export.S + $export.F * fails(function () { Base.of.call(TypedArray, 1); }), NAME, {
      from: $from,
      of: $of
    });

    if (!(BYTES_PER_ELEMENT in TypedArrayPrototype)) hide(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);

    $export($export.P, NAME, proto);

    setSpecies(NAME);

    $export($export.P + $export.F * FORCED_SET, NAME, { set: $set });

    $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators);

    if (!LIBRARY && TypedArrayPrototype.toString != arrayToString) TypedArrayPrototype.toString = arrayToString;

    $export($export.P + $export.F * fails(function () {
      new TypedArray(1).slice();
    }), NAME, { slice: $slice });

    $export($export.P + $export.F * (fails(function () {
      return [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString();
    }) || !fails(function () {
      TypedArrayPrototype.toLocaleString.call([1, 2]);
    })), NAME, { toLocaleString: $toLocaleString });

    Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;
    if (!LIBRARY && !CORRECT_ITER_NAME) hide(TypedArrayPrototype, ITERATOR, $iterator);
  };
} else module.exports = function () { /* empty */ };


/***/ }),

/***/ "4f72":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/Array.prototype.includes
var $export = __webpack_require__("ef37");
var $includes = __webpack_require__("af6b")(true);

$export($export.P, 'Array', {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

__webpack_require__("96ba")('includes');


/***/ }),

/***/ "50cc":
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__("0e8c").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "5345":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("bf9e");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("0ed3").default
var update = add("795ae1c8", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "5642":
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__("ef37");
var core = __webpack_require__("5c50");
var fails = __webpack_require__("a124");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "5c50":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "6218":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("c7bf");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("0ed3").default
var update = add("356d59e6", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "632c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__("ef37");
var aFunction = __webpack_require__("d3d5");
var toObject = __webpack_require__("79c1");
var fails = __webpack_require__("a124");
var $sort = [].sort;
var test = [1, 2, 3];

$export($export.P + $export.F * (fails(function () {
  // IE8-
  test.sort(undefined);
}) || !fails(function () {
  // V8 bug
  test.sort(null);
  // Old WebKit
}) || !__webpack_require__("4cb0")($sort)), 'Array', {
  // 22.1.3.25 Array.prototype.sort(comparefn)
  sort: function sort(comparefn) {
    return comparefn === undefined
      ? $sort.call(toObject(this))
      : $sort.call(toObject(this), aFunction(comparefn));
  }
});


/***/ }),

/***/ "6a8f":
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__("f8aa");

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),

/***/ "6ccd":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("6f0d");
var anObject = __webpack_require__("8c7e");
var getKeys = __webpack_require__("8996");

module.exports = __webpack_require__("3d85") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "6d95":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("df26");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _root_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("42c2");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("c880");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("3cdf");
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _events_AmplifyEventBus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("b600");




//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var audioControl;
var STATES = {
  INITIAL: {
    MESSAGE: "Type your message or click  🎤",
    ICON: "🎤"
  },
  LISTENING: {
    MESSAGE: "Listening... click 🔴 again to cancel",
    ICON: "🔴"
  },
  SENDING: {
    MESSAGE: "Please wait...",
    ICON: "🔊"
  },
  SPEAKING: {
    MESSAGE: "Speaking...",
    ICON: "..."
  }
};
var defaultVoiceConfig = {
  silenceDetectionConfig: {
    time: 2000,
    amplitude: 0.2
  }
};
/* harmony default export */ __webpack_exports__["a"] = ({
  name: "Chatbot",
  props: ["chatbotConfig"],
  STATES: STATES,
  defaultVoiceConfig: defaultVoiceConfig,
  audioControl: audioControl,
  data: function data() {
    return {
      inputText: "",
      error: "",
      messages: [],
      logger: {},
      currentVoiceState: STATES.INITIAL.MESSAGE,
      inputDisabled: false,
      micText: STATES.INITIAL.ICON,
      continueConversation: false,
      micButtonDisabled: false
    };
  },
  computed: {
    options: function options() {
      var defaults = {
        clearComplete: true,
        botTitle: "Chatbot",
        conversationModeOn: false,
        voiceConfig: defaultVoiceConfig,
        voiceEnabled: false,
        textEnabled: true
      };
      return Object.assign(defaults, this.chatbotConfig || {});
    }
  },
  mounted: function mounted() {
    this.logger = new this.$Amplify.Logger(this.$options.name);

    if (!this.options.bot) {
      this.setError("Bot not provided.");
    }

    if (this.options.voiceEnabled) {
      __webpack_require__("f39c");

      audioControl = new global.LexAudio.audioControl();
    }

    if (!this.options.textEnabled && this.options.voiceEnabled) {
      STATES.INITIAL.MESSAGE = "Click the mic button";
      this.currentVoiceState = STATES.INITIAL.MESSAGE;
    }

    if (this.options.textEnabled && !this.options.voiceEnabled) {
      STATES.INITIAL.MESSAGE = "Type a message";
      this.currentVoiceState = STATES.INITIAL.MESSAGE;
    }

    this.$Amplify.Interactions.onComplete(this.options.bot, this.performOnComplete);
  },
  methods: {
    performOnComplete: function performOnComplete(evt) {
      _events_AmplifyEventBus__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].$emit("chatComplete", this.options.botTitle);

      if (this.options.clearComplete) {
        this.messages = [];
      }
    },
    keymonitor: function keymonitor(event) {
      if (event.key.toLowerCase() == "enter") {
        this.onSubmit(this.inputText);
      }
    },
    onSubmit: function onSubmit(e) {
      var _this = this;

      if (!this.inputText) {
        return;
      }

      var message = {
        me: this.inputText,
        meSentTime: new Date().toLocaleTimeString(),
        bot: "",
        botSentTime: ""
      };
      this.$Amplify.Interactions.send(this.options.bot, this.inputText).then(function (response) {
        _this.inputText = "";

        if (response.message) {
          message.bot = response.message;
          message.botSentTime = new Date().toLocaleTimeString();

          _this.messages.push(message);
        }
      }).catch(function (e) {
        return _this.setError(e);
      });
    },
    setError: function setError(e) {
      this.error = this.$Amplify.I18n.get(e.message || e);
      this.logger.error(this.error);
    },
    micButtonHandler: function () {
      var _micButtonHandler = Object(_root_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (this.continueConversation) {
                  this.reset();
                } else {
                  this.inputDisabled = true;
                  this.continueConversation = true;
                  this.currentVoiceState = STATES.LISTENING.MESSAGE;
                  this.micText = STATES.LISTENING.ICON;
                  this.micButtonDisabled = false;
                  audioControl.startRecording(this.onSilenceHandler, null, this.options.voiceConfig.silenceDetectionConfig);
                }

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function micButtonHandler() {
        return _micButtonHandler.apply(this, arguments);
      };
    }(),
    onSilenceHandler: function onSilenceHandler() {
      var _this2 = this;

      audioControl.stopRecording();

      if (!this.continueConversation) {
        return;
      }

      audioControl.exportWAV(function (blob) {
        _this2.currentVoiceState = STATES.SENDING.MESSAGE;
        _this2.audioInput = blob;
        _this2.micText = STATES.SENDING.ICON;
        _this2.micButtonDisabled = true;

        _this2.lexResponseHandler();
      });
    },
    lexResponseHandler: function () {
      var _lexResponseHandler = Object(_root_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2() {
        var interactionsMessage, response, message;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (this.continueConversation) {
                  _context2.next = 2;
                  break;
                }

                return _context2.abrupt("return");

              case 2:
                interactionsMessage = {
                  content: this.audioInput,
                  options: {
                    messageType: "voice"
                  }
                };
                _context2.next = 5;
                return this.$Amplify.Interactions.send(this.options.bot, interactionsMessage);

              case 5:
                response = _context2.sent;
                this.lexResponse = response;
                this.currentVoiceState = STATES.SPEAKING.MESSAGE;
                this.micText = STATES.SPEAKING.ICON;
                this.micButtonDisabled = true;
                message = {
                  me: this.lexResponse.inputTranscript,
                  meSentTime: new Date().toLocaleTimeString(),
                  bot: "",
                  botSentTime: ""
                };
                this.inputText = "";

                if (response.message) {
                  message.bot = response.message;
                  message.botSentTime = new Date().toLocaleTimeString();
                  this.messages.push(message);
                }

                this.inputText = "";
                this.doneSpeakingHandler();

              case 15:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function lexResponseHandler() {
        return _lexResponseHandler.apply(this, arguments);
      };
    }(),
    doneSpeakingHandler: function doneSpeakingHandler() {
      var _this3 = this;

      if (!this.continueConversation) {
        return;
      }

      if (this.lexResponse.contentType === "audio/mpeg") {
        audioControl.play(this.lexResponse.audioStream, function () {
          if (_this3.lexResponse.dialogState === "ReadyForFulfillment" || _this3.lexResponse.dialogState === "Fulfilled" || _this3.lexResponse.dialogState === "Failed" || !_this3.options.conversationModeOn) {
            _this3.inputDisabled = false;
            _this3.currentVoiceState = STATES.INITIAL.MESSAGE;
            _this3.micText = STATES.INITIAL.ICON;
            _this3.micButtonDisabled = false;
            _this3.continueConversation = false;
          } else {
            _this3.currentVoiceState = STATES.LISTENING.MESSAGE;
            _this3.micText = STATES.LISTENING.ICON;
            _this3.micButtonDisabled = false;
            audioControl.startRecording(_this3.onSilenceHandler, null, _this3.options.voiceConfig.silenceDetectionConfig);
          }
        });
      } else {
        this.inputDisabled = false;
        this.currentVoiceState = STATES.INITIAL.MESSAGE;
        this.micText = STATES.INITIAL.ICON;
        this.micButtonDisabled = false;
        this.continueConversation = false;
      }
    },
    reset: function reset() {
      audioControl.clear();
      this.inputText = "";
      this.currentVoiceState = STATES.INITIAL.MESSAGE;
      this.inputDisabled = false;
      this.micText = STATES.INITIAL.ICON;
      this.continueConversation = false;
      this.micButtonDisabled = false;
    }
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("2c53")))

/***/ }),

/***/ "6f0d":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("8c7e");
var IE8_DOM_DEFINE = __webpack_require__("cd30");
var toPrimitive = __webpack_require__("78d3");
var dP = Object.defineProperty;

exports.f = __webpack_require__("3d85") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "742f":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "7441":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("443a")(false);
// imports


// module
exports.push([module.i, "\n:root{--amazonOrange:#f90;--lightAmazonOrange:#ffac31;--darkAmazonOrange:#e88b01;--squidInk:#232f3e;--lightSquidInk:#31465f;--deepSquidInk:#152939;--grey:#828282;--lightGrey:#c4c4c4;--silver:#e1e4ea;--darkBlue:#31465f;--red:#dd3f5b;--white:#fff;--light-blue:#00a1c9;--button-color:var(--white);--button-background-color:var(--amazonOrange);--button-click:var(--darkAmazonOrange);--link-color:var(--amazonOrange);--form-color:var(--white);--input-color:var(--deepSquidInk);--input-background-color:var(--white);--font-family:\"Amazon Ember\",\"Helvetica Neue Light\",\"Helvetica Neue\",\"Helvetica\",\"Arial\",\"sans-serif\";--body-background:#f8f4f4;--component-width-desktop:460px;--component-width-mobile:100%;--color-primary:#f90;--color-primary-accent:#232f3e;--color-primary-highlight:#ffc46d;--color-background:#232f3e;--color-secondary:#152939;--color-secondary-accent:#31465f;--color-danger:#dd3f5b;--color-error:#d0021b;--color-accent-brown:#828282;--color-accent-blue:#e1e4ea;--gradient-blaze:linear-gradient(270deg,#ffc300,#ff9000);--color-blue:#007eb9;--color-purple:#527fff;--color-gray:#828282;--color-white:#fff;--input-border:1px solid #c4c4c4;--input-padding:0.5em 0.5em 0.3em 1em;--box-shadow:1px 1px 4px 0 rgba(0,0,0,0.15);--button-height:42px;--interactions-conversation-height:250px;--ion-color-primary:#f90;--ion-color-primary-rgb:255,153,0;--ion-color-primary-contrast:#fff;--ion-color-primary-contrast-rgb:255,255,255;--ion-color-primary-shade:#232f3e;--ion-color-primary-tint:#ffc46d;--ion-color-secondary:#32db64;--ion-color-secondary-rgb:50,219,100;--ion-color-secondary-contrast:#fff;--ion-color-secondary-contrast-rgb:255,255,255;--ion-color-secondary-shade:#2cc158;--ion-color-secondary-tint:#47df74;--ion-color-tertiary:#f4a942;--ion-color-tertiary-rgb:244,169,66;--ion-color-tertiary-contrast:#fff;--ion-color-tertiary-contrast-rgb:255,255,255;--ion-color-tertiary-shade:#d7953a;--ion-color-tertiary-tint:#f5b255;--ion-color-success:#10dc60;--ion-color-success-rgb:16,220,96;--ion-color-success-contrast:#fff;--ion-color-success-contrast-rgb:255,255,255;--ion-color-success-shade:#0ec254;--ion-color-success-tint:#28e070;--ion-color-warning:#ffce00;--ion-color-warning-rgb:255,206,0;--ion-color-warning-contrast:#000;--ion-color-warning-contrast-rgb:0,0,0;--ion-color-warning-shade:#e0b500;--ion-color-warning-tint:#ffd31a;--ion-color-danger:#f53d3d;--ion-color-danger-rgb:245,61,61;--ion-color-danger-contrast:#fff;--ion-color-danger-contrast-rgb:255,255,255;--ion-color-danger-shade:#d83636;--ion-color-danger-tint:#f65050;--ion-color-light:#f4f4f4;--ion-color-light-rgb:244,244,244;--ion-color-light-contrast:#000;--ion-color-light-contrast-rgb:0,0,0;--ion-color-light-shade:#d7d7d7;--ion-color-light-tint:#f5f5f5;--ion-color-medium:#989aa2;--ion-color-medium-rgb:152,154,162;--ion-color-medium-contrast:#000;--ion-color-medium-contrast-rgb:0,0,0;--ion-color-medium-shade:#86888f;--ion-color-medium-tint:#a2a4ab;--ion-color-dark:#222;--ion-color-dark-rgb:34,34,34;--ion-color-dark-contrast:#fff;--ion-color-dark-contrast-rgb:255,255,255;--ion-color-dark-shade:#1e1e1e;--ion-color-dark-tint:#383838\n}\n.Anchor__a___3JUCG{color:var(--link-color);cursor:pointer\n}\n.Anchor__a___3JUCG:hover{text-decoration:underline\n}\n.Button__button___1FrBC{min-width:153px;display:inline-block;margin-bottom:0;font-size:12px;font-weight:400;line-height:1.42857143;text-align:center;white-space:nowrap;vertical-align:middle;-ms-touch-action:manipulation;touch-action:manipulation;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-image:none;color:var(--button-color);background-color:var(--button-background-color);border-color:#ccc;text-transform:uppercase;padding:14px 0;letter-spacing:1.1px;border:none\n}\n.Button__button___1FrBC:active{opacity:1;background-color:var(--button-click)\n}\n.Button__button___1FrBC:hover,.Button__signInButton___2nUbs:hover{opacity:.8\n}\n.Button__signInButton___2nUbs{position:relative;width:100%;border-radius:4px;margin-bottom:10px;cursor:pointer;padding:0;color:var(--deepSquidInk);font-size:14px;-webkit-box-sizing:content-box;box-sizing:content-box\n}\n#Button__googleSignInButton___12y9G{background-color:#4285f4;font-family:Roboto;border:1px solid #4285f4;color:var(--white)\n}\n#Button__googleSignInButton___12y9G>.Button__signInButtonIcon___341B9{background-color:var(--white);border-radius:4px 0 0 4px;height:28px;width:28px;padding:12px\n}\n#Button__auth0SignInButton___n_PKO{background-color:#eb5424;font-family:Roboto;border:1px solid #e14615;color:#fff\n}\n#Button__auth0SignInButton___n_PKO>.Button__signInButtonIcon___341B9{border-radius:4px 0 0 4px;height:28px;width:28px;padding:12px;fill:#fff\n}\n#Button__facebookSignInButton___1-zMC{background-color:#4267b2;border-color:#4267b2;font-family:Helvetica Neue;color:var(--white)\n}\n#Button__facebookSignInButton___1-zMC>.Button__signInButtonIcon___341B9{height:33px;width:18px;padding:10px 14px\n}\n#Button__amazonSignInButton___TmhOE{background-color:var(--amazonOrange);border:none;color:var(--white);font-family:Amazon Ember\n}\n#Button__amazonSignInButton___TmhOE>.Button__signInButtonIcon___341B9{padding:10px;height:32px;width:32px\n}\n#Button__oAuthSignInButton___hREZG{background-color:var(--white);color:var(--deepSquidInk)\n}\n.Button__signInButtonIcon___341B9{position:absolute;left:0\n}\n.Button__signInButtonContent___2GM4s{display:block;padding:18px 0;text-align:left;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-align:center\n}\n.Form__formContainer___cu04J{text-align:center;margin-top:20px;margin:5% auto 50px\n}\n.Form__formSection___3tqxz{position:relative;margin-bottom:20px;background-color:var(--form-color);padding:35px 40px;text-align:left;display:inline-block;min-width:460px;border-radius:6px;-webkit-box-shadow:1px 1px 4px 0 rgba(0,0,0,.15);box-shadow:1px 1px 4px 0 rgba(0,0,0,.15);-webkit-box-sizing:border-box;box-sizing:border-box\n}\n.Form__formField___2DWhT{margin-bottom:22px\n}\n.Form__formRow___23vw6{margin-bottom:12px\n}\n@media only screen and (max-width:599px){\n.Form__formContainer___cu04J{margin:0\n}\n.Form__formSection___3tqxz{width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;padding:35px 25px;-webkit-box-shadow:none;box-shadow:none;border-radius:0\n}\n}\n.Hint__hint___3Hrww{color:var(--grey);font-size:12px\n}\n.Input__input___2Sh1s{display:block;width:100%;padding:16px;font-size:14px;color:var(--input-color);background-color:var(--input-background-color);background-image:none;border:1px solid var(--lightGrey);border-radius:3px;-webkit-box-sizing:border-box;box-sizing:border-box;margin-bottom:10px\n}\n.Input__input___2Sh1s:disabled{color:#545454;background-color:var(--silver)\n}\n.Input__inputLabel___nQolz{color:var(--input-color);font-size:14px;margin-bottom:8px\n}\n.Input__radio___1oPWf{margin-right:18px;vertical-align:bottom\n}\n.Nav__navBar___3UdSD{position:relative;border:1px solid transparent;border-color:#e7e7e7;background-color:#fff\n}\n.Nav__navRight___2cUrh{text-align:right\n}\n.Nav__nav___17Pxn{padding:10px\n}\n.Nav__navItem___VnHJi{display:inline-block;padding:10px 5px;line-height:20px;margin-right:12px\n}\n.PhotoPicker__photoPickerButton___A0pJW{width:100%\n}\n.PhotoPicker__photoPlaceholder___1YUHz{border:2px dotted var(--grey);padding:64px 0 64px\n}\n.PhotoPicker__photoPlaceholderIcon___1eBTV{text-align:center;opacity:.2\n}\n.Section__container___1Gue_{font-weight:400\n}\n.Section__actionRow___1hCHZ{margin-bottom:15px\n}\n.Section__sectionHeader___13iO4{color:var(--deepSquidInk);margin-bottom:24px;font-size:18px;font-weight:500\n}\n.Section__sectionHeaderHint___16N_e{color:var(--grey);font-size:16px;font-weight:400;margin-top:4px\n}\n.Section__sectionBody___3DCrX{margin-bottom:30px\n}\n.Section__sectionFooter___1QlDn{font-size:14px;color:var(--grey);display:-ms-flexbox;display:-webkit-box;display:flex;-ms-flex-direction:row-reverse;-webkit-box-orient:horizontal;-webkit-box-direction:reverse;flex-direction:row-reverse;-ms-flex-align:start;-webkit-box-align:start;align-items:flex-start\n}\n.Section__sectionFooterPrimaryContent___36Gb1{margin-left:auto\n}\n.Section__sectionFooterSecondaryContent___3cjOa{margin-right:auto;-ms-flex-item-align:center;align-self:center\n}\n@media only screen and (max-width:599px){\n.Section__sectionFooter___1QlDn{-ms-flex-wrap:wrap;flex-wrap:wrap\n}\n.Section__sectionFooterPrimaryContent___36Gb1{width:100%;margin-bottom:32px\n}\n.Section__sectionFooterPrimaryContent___36Gb1>button{width:100%\n}\n.Section__sectionFooterSecondaryContent___3cjOa{text-align:center;-ms-flex:0 0 100%;-webkit-box-flex:0;flex:0 0 100%\n}\n}\n.SelectInput__selectInput___1I_W8{display:-ms-flexbox;display:-webkit-box;display:flex\n}\n.SelectInput__selectInput___1I_W8>input{-ms-flex:1;-webkit-box-flex:1;flex:1;border-radius:0 3px 3px 0!important\n}\n.SelectInput__selectInput___1I_W8>select{padding:16px;font-size:14px;color:var(--deepSquidInk);background-color:#fff;background-image:none;border:1px solid var(--lightGrey);border-right:none;border-radius:3px 0 0 3px;-webkit-box-sizing:border-box;box-sizing:border-box;margin-bottom:10px;-webkit-appearance:none;-moz-appearance:none;appearance:none;-ms-flex-preferred-size:22%;flex-basis:22%;width:1%;background-image:linear-gradient(45deg,transparent 50%,grey 0),linear-gradient(135deg,grey 50%,transparent 0),linear-gradient(90deg,#ccc,#ccc);background-position:calc(100% - 20px) calc(1em + 8px),calc(100% - 15px) calc(1em + 8px),calc(100% - 2.5em) .5em;background-size:6px 5px,6px 5px,0 1.5em;background-repeat:no-repeat\n}\n.Strike__strike___28OW3{width:100%;text-align:center;border-bottom:1px solid var(--lightGrey);line-height:.1em;margin:32px 0;color:var(--grey)\n}\n.Strike__strikeContent___1hd4F{background:var(--form-color);padding:0 25px;font-size:14px;font-weight:500\n}\n.Toast__toast___2YWKB{display:-ms-flexbox;display:-webkit-box;display:flex;-ms-flex-pack:justify;-webkit-box-pack:justify;justify-content:space-between;position:absolute;top:0;left:0;width:100%;z-index:99;-webkit-box-shadow:0 0 5px 0 rgba(0,0,0,.3);box-shadow:0 0 5px 0 rgba(0,0,0,.3);padding:16px;background-color:var(--lightSquidInk);font-size:14px;color:#fff;-webkit-box-sizing:border-box;box-sizing:border-box\n}\n.Toast__toast___2YWKB>span{margin-right:10px\n}\n.Toast__toastClose___2DQXs{margin-left:auto;-ms-flex-item-align:center;align-self:center;position:relative;width:18px;height:18px;overflow:hidden;cursor:pointer\n}\n.Toast__toastClose___2DQXs:after,.Toast__toastClose___2DQXs:before{content:\"\";position:absolute;height:2px;width:100%;top:50%;left:0;margin-top:-1px;background:var(--lightGrey)\n}\n.Toast__toastClose___2DQXs:hover:after,.Toast__toastClose___2DQXs:hover:before{background:var(--red)\n}\n.Toast__toastClose___2DQXs:before{-webkit-transform:rotate(45deg);transform:rotate(45deg)\n}\n.Toast__toastClose___2DQXs:after{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)\n}\n.Totp__totpQrcode___3OH-m{text-align:center;margin-bottom:30px\n}\n.XR__sumerianSceneContainer___11I4t{width:100%;height:100%;position:relative\n}\n.XR__sumerianScene___3n6Vz{width:100%;height:100%\n}\n.XR__loadingOverlay___1c9lj{width:100%;height:100%;background-color:var(--lightSquidInk)\n}\n.XR__loadingContainer___3C0lC,.XR__loadingOverlay___1c9lj{display:-ms-flexbox;display:-webkit-box;display:flex;-ms-flex-align:center;-webkit-box-align:center;align-items:center;-ms-flex-pack:center;-webkit-box-pack:center;justify-content:center\n}\n.XR__loadingContainer___3C0lC{-ms-flex-direction:column;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column\n}\n.XR__loadingLogo___3mETr{margin-bottom:20px;width:80px;fill:var(--white)\n}\n.XR__loadingSceneName___3JbEs{color:var(--white);margin:0 2px 20px 2px;font-size:18px;font-family:Amazon Ember\n}\n.XR__loadingBar___QeOtl{height:2px;width:100%;border-radius:2px;background-color:var(--deepSquidInk)\n}\n.XR__loadingBarFill___2Ej9-{background-color:var(--light-blue);height:100%;border-radius:2px\n}\n.XR__sceneErrorText___2PGJM{color:var(--red);font-size:14px;font-family:Amazon Ember\n}\n.XR__sceneBar___2jB64{display:-ms-flexbox;display:-webkit-box;display:flex;-ms-flex-align:center;-webkit-box-align:center;align-items:center;font-size:100%;position:absolute;bottom:0;width:100%\n}\n.XR__sceneName___3J8bY{color:var(--white);margin:0 1.5em;font-size:1em\n}\n.XR__sceneActions___2a04n{margin-left:auto;margin-right:16px;margin-bottom:16px\n}\n.XR__actionButton___7icN8{position:relative;padding:0;background:none;height:54px;width:54px;cursor:pointer;outline:none;text-decoration:none;border:none;border-radius:30px;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out;color:var(--white);fill:currentColor\n}\n.XR__actionButton___7icN8:hover{background-color:var(--deepSquidInk);-webkit-box-shadow:.3px .3px .3px rgba(0,0,0,.3);box-shadow:.3px .3px .3px rgba(0,0,0,.3)\n}\n.XR__actionButton___7icN8:hover>.XR__tooltip___3wuzm{display:block\n}\n.XR__actionButton___7icN8:hover>svg{-webkit-filter:none;filter:none\n}\n.XR__actionButton___7icN8:focus{outline:none\n}\n.XR__actionButton___7icN8>svg{width:1.8em;height:1.8em;-webkit-filter:drop-shadow(1px 1px 1px var(--grey));filter:drop-shadow(1px 1px 1px var(--grey))\n}\n.XR__actionIcon___RjOmI{fill:var(--white)\n}\n.XR__tooltip___3wuzm{display:inline;position:relative;font-size:12px;font-family:Amazon Ember;margin:0 0 0 16px\n}\n.XR__autoShowTooltip___3QI-_ .XR__actionButton___7icN8{background-color:var(--deepSquidInk)\n}\n.XR__tooltip___3wuzm:after{background-color:var(--deepSquidInk);border-radius:2px;bottom:46px;color:var(--white);content:attr(data-text);text-decoration:none;padding:10px;white-space:nowrap\n}\n.XR__tooltip___3wuzm:after,.XR__tooltip___3wuzm:before{left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);position:absolute;opacity:0;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out\n}\n.XR__tooltip___3wuzm:before{border:solid;border-color:var(--deepSquidInk) transparent transparent transparent;border-width:5px;bottom:36px;content:\"\";font-size:14px\n}\n.XR__autoShowTooltip___3QI-_:after,.XR__autoShowTooltip___3QI-_:before,.XR__tooltip___3wuzm:hover:after,.XR__tooltip___3wuzm:hover:before{opacity:1;-webkit-transition-delay:1s;transition-delay:1s\n}", ""]);

// exports


/***/ }),

/***/ "78d3":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("194e");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "79c1":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__("c8ae");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "8109":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "8222":
/***/ (function(module, exports, __webpack_require__) {

var MATCH = __webpack_require__("d951")('match');
module.exports = function (KEY) {
  var re = /./;
  try {
    '/./'[KEY](re);
  } catch (e) {
    try {
      re[MATCH] = false;
      return !'/./'[KEY](re);
    } catch (f) { /* empty */ }
  } return true;
};


/***/ }),

/***/ "8996":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__("dd61");
var enumBugKeys = __webpack_require__("eaa3");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),

/***/ "8c7e":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("194e");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "8df9":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("4e88")('Uint8', 1, function (init) {
  return function Uint8Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "8e85":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_lib_index_js_ref_6_oneOf_1_2_postcss_loader_lib_index_js_ref_6_oneOf_1_3_style_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("d8ca");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_lib_index_js_ref_6_oneOf_1_2_postcss_loader_lib_index_js_ref_6_oneOf_1_3_style_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_lib_index_js_ref_6_oneOf_1_2_postcss_loader_lib_index_js_ref_6_oneOf_1_3_style_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_lib_index_js_ref_6_oneOf_1_2_postcss_loader_lib_index_js_ref_6_oneOf_1_3_style_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "904a":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__("25a6");
var toObject = __webpack_require__("79c1");
var IE_PROTO = __webpack_require__("f962")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "950e":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("443a")(false);
// imports


// module
exports.push([module.i, "\n.amplify-image[data-v-bd7c1ee0]{width:30%;margin:.2em;border-radius:6px;border:2px solid var(--color-white);cursor:pointer\n}", ""]);

// exports


/***/ }),

/***/ "96ba":
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__("d951")('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__("bafe")(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "9745":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_3_node_modules_vue_cli_service_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Amplify_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("247b");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_3_node_modules_vue_cli_service_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Amplify_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_3_node_modules_vue_cli_service_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Amplify_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_3_node_modules_vue_cli_service_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Amplify_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "9b86":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("194e");
var document = __webpack_require__("0e8c").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "9dd3":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "9e61":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "a124":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "a7e1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__("bc66");
var anObject = __webpack_require__("8c7e");
var $flags = __webpack_require__("3c4f");
var DESCRIPTORS = __webpack_require__("3d85");
var TO_STRING = 'toString';
var $toString = /./[TO_STRING];

var define = function (fn) {
  __webpack_require__("e385")(RegExp.prototype, TO_STRING, fn, true);
};

// 21.2.5.14 RegExp.prototype.toString()
if (__webpack_require__("a124")(function () { return $toString.call({ source: 'a', flags: 'b' }) != '/a/b'; })) {
  define(function toString() {
    var R = anObject(this);
    return '/'.concat(R.source, '/',
      'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
  });
// FF44- RegExp#toString has a wrong name
} else if ($toString.name != TO_STRING) {
  define(function toString() {
    return $toString.call(this);
  });
}


/***/ }),

/***/ "ab23":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__("8996");
var gOPS = __webpack_require__("8109");
var pIE = __webpack_require__("d0e9");
var toObject = __webpack_require__("79c1");
var IObject = __webpack_require__("aec0");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__("a124")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),

/***/ "ad8d":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "adb3":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("9e61");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "aec0":
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__("b735");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "af6b":
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__("0b04");
var toLength = __webpack_require__("bb64");
var toAbsoluteIndex = __webpack_require__("adb3");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "b600":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8bbf");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

var AmplifyEventBus = new vue__WEBPACK_IMPORTED_MODULE_0___default.a();
/* harmony default export */ __webpack_exports__["a"] = (AmplifyEventBus);

/***/ }),

/***/ "b735":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "b90c":
/***/ (function(module, exports) {



/***/ }),

/***/ "b9c7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)

var toObject = __webpack_require__("79c1");
var toAbsoluteIndex = __webpack_require__("adb3");
var toLength = __webpack_require__("bb64");
module.exports = function fill(value /* , start = 0, end = @length */) {
  var O = toObject(this);
  var length = toLength(O.length);
  var aLen = arguments.length;
  var index = toAbsoluteIndex(aLen > 1 ? arguments[1] : undefined, length);
  var end = aLen > 2 ? arguments[2] : undefined;
  var endPos = end === undefined ? length : toAbsoluteIndex(end, length);
  while (endPos > index) O[index++] = value;
  return O;
};


/***/ }),

/***/ "bafe":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("6f0d");
var createDesc = __webpack_require__("ad8d");
module.exports = __webpack_require__("3d85") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "bb64":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__("9e61");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "bc66":
/***/ (function(module, exports, __webpack_require__) {

// 21.2.5.3 get RegExp.prototype.flags()
if (__webpack_require__("3d85") && /./g.flags != 'g') __webpack_require__("6f0d").f(RegExp.prototype, 'flags', {
  configurable: true,
  get: __webpack_require__("3c4f")
});


/***/ }),

/***/ "bd89":
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	
	/*
	 * Copyright 2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with
	 * the License. A copy of the License is located at
	 *
	 *     http://aws.amazon.com/apache2.0/
	 *
	 * or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
	 * CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions
	 * and limitations under the License.
	 */
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopExportWildcard(obj, defaults) { var newObj = defaults({}, obj); delete newObj['default']; return newObj; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	var _AnchorCss = __webpack_require__(1);
	
	_defaults(exports, _interopExportWildcard(_AnchorCss, _defaults));
	
	var _ButtonCss = __webpack_require__(2);
	
	_defaults(exports, _interopExportWildcard(_ButtonCss, _defaults));
	
	var _FormCss = __webpack_require__(3);
	
	_defaults(exports, _interopExportWildcard(_FormCss, _defaults));
	
	var _HintCss = __webpack_require__(4);
	
	_defaults(exports, _interopExportWildcard(_HintCss, _defaults));
	
	var _InputCss = __webpack_require__(5);
	
	_defaults(exports, _interopExportWildcard(_InputCss, _defaults));
	
	var _NavCss = __webpack_require__(6);
	
	_defaults(exports, _interopExportWildcard(_NavCss, _defaults));
	
	var _PhotoPickerCss = __webpack_require__(7);
	
	_defaults(exports, _interopExportWildcard(_PhotoPickerCss, _defaults));
	
	var _SectionCss = __webpack_require__(8);
	
	_defaults(exports, _interopExportWildcard(_SectionCss, _defaults));
	
	var _SelectInputCss = __webpack_require__(9);
	
	_defaults(exports, _interopExportWildcard(_SelectInputCss, _defaults));
	
	var _StrikeCss = __webpack_require__(10);
	
	_defaults(exports, _interopExportWildcard(_StrikeCss, _defaults));
	
	var _ToastCss = __webpack_require__(11);
	
	_defaults(exports, _interopExportWildcard(_ToastCss, _defaults));
	
	var _TotpCss = __webpack_require__(12);
	
	_defaults(exports, _interopExportWildcard(_TotpCss, _defaults));
	
	var _XRCss = __webpack_require__(13);
	
	_defaults(exports, _interopExportWildcard(_XRCss, _defaults));

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"a":"Anchor__a___3JUCG"};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"button":"Button__button___1FrBC","signInButton":"Button__signInButton___2nUbs","googleSignInButton":"Button__googleSignInButton___12y9G","signInButtonIcon":"Button__signInButtonIcon___341B9","auth0SignInButton":"Button__auth0SignInButton___n_PKO","facebookSignInButton":"Button__facebookSignInButton___1-zMC","amazonSignInButton":"Button__amazonSignInButton___TmhOE","oAuthSignInButton":"Button__oAuthSignInButton___hREZG","signInButtonContent":"Button__signInButtonContent___2GM4s"};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"formContainer":"Form__formContainer___cu04J","formSection":"Form__formSection___3tqxz","formField":"Form__formField___2DWhT","formRow":"Form__formRow___23vw6"};

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"hint":"Hint__hint___3Hrww"};

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"input":"Input__input___2Sh1s","inputLabel":"Input__inputLabel___nQolz","radio":"Input__radio___1oPWf"};

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"navBar":"Nav__navBar___3UdSD","navRight":"Nav__navRight___2cUrh","nav":"Nav__nav___17Pxn","navItem":"Nav__navItem___VnHJi"};

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"photoPickerButton":"PhotoPicker__photoPickerButton___A0pJW","photoPlaceholder":"PhotoPicker__photoPlaceholder___1YUHz","photoPlaceholderIcon":"PhotoPicker__photoPlaceholderIcon___1eBTV"};

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"container":"Section__container___1Gue_","actionRow":"Section__actionRow___1hCHZ","sectionHeader":"Section__sectionHeader___13iO4","sectionHeaderHint":"Section__sectionHeaderHint___16N_e","sectionBody":"Section__sectionBody___3DCrX","sectionFooter":"Section__sectionFooter___1QlDn","sectionFooterPrimaryContent":"Section__sectionFooterPrimaryContent___36Gb1","sectionFooterSecondaryContent":"Section__sectionFooterSecondaryContent___3cjOa"};

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"selectInput":"SelectInput__selectInput___1I_W8"};

/***/ }),
/* 10 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"strike":"Strike__strike___28OW3","strikeContent":"Strike__strikeContent___1hd4F"};

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"toast":"Toast__toast___2YWKB","toastClose":"Toast__toastClose___2DQXs"};

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"totpQrcode":"Totp__totpQrcode___3OH-m"};

/***/ }),
/* 13 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"sumerianSceneContainer":"XR__sumerianSceneContainer___11I4t","sumerianScene":"XR__sumerianScene___3n6Vz","loadingOverlay":"XR__loadingOverlay___1c9lj","loadingContainer":"XR__loadingContainer___3C0lC","loadingLogo":"XR__loadingLogo___3mETr","loadingSceneName":"XR__loadingSceneName___3JbEs","loadingBar":"XR__loadingBar___QeOtl","loadingBarFill":"XR__loadingBarFill___2Ej9-","sceneErrorText":"XR__sceneErrorText___2PGJM","sceneBar":"XR__sceneBar___2jB64","sceneName":"XR__sceneName___3J8bY","sceneActions":"XR__sceneActions___2a04n","actionButton":"XR__actionButton___7icN8","tooltip":"XR__tooltip___3wuzm","actionIcon":"XR__actionIcon___RjOmI","autoShowTooltip":"XR__autoShowTooltip___3QI-_"};

/***/ })
/******/ ])
});
;
//# sourceMappingURL=aws-amplify-ui.js.map

/***/ }),

/***/ "be45":
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__("b735");
var TAG = __webpack_require__("d951")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "bec8":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__("8c7e");
var dPs = __webpack_require__("6ccd");
var enumBugKeys = __webpack_require__("eaa3");
var IE_PROTO = __webpack_require__("f962")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__("9b86")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__("50cc").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "bf9e":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("443a")(false);
// imports


// module
exports.push([module.i, "\n.amplify-interactions[data-v-37eb263c]{width:var(--component-width-desktop);margin:1em auto;border-radius:6px;background-color:var(--color-white);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow)\n}\n.amplify-interactions-container[data-v-37eb263c]{width:400px;margin:0 auto;padding:1em\n}\n.amplify-interactions-button[data-v-37eb263c]{background:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAApCAYAAABHomvIAAAABHNCSVQICAgIfAhkiAAAABl0RVh0U29mdHdhcmUAZ25vbWUtc2NyZWVuc2hvdO8Dvz4AAAG2SURBVFiF7dfPKwRhHMfx9+xqhaItIg5KikgOlER2TzhQ4i+QwtndQe4O4uhCSQ57sC6SkotfR1uK2nWgrGJr8yvsjsO2bWtb+8w+88zOYT6nmWfmeebV95lfj6bruo6N4yo1oFAcoGwcoGwcoGwcoGxsDyyz5CqxawhtwPsTNA1C5wxobqGumvJv8d0+HM5B4jvT1jICw1tC3dVO8ds9VNaD25PdHj6A6LnQEOqAkSBs90HsBsZ2wVOVfTweFhpGDTAShMPZ1LQeL+QiNQ1qu0sETOOSidS+ruciu6bB2yE0nLkPyV9c1pU08K9AQx9Ut4AmVhvzKvgfDlKVfDyFmlZhHJgFLIQDaJ+CoVXDQ8sDRXG+dUOVS0cOqBgHMkARXJscDooFiuL8cjgoBmghDoy+B+MR2BmA5I8lODBSQT0JiU/oX8x/jsk4MAJ8CcHeBDQNwcCSJTgwAoxewkcMgpO5SEU4MHIPHs3DbSC1XeGF8QA8nMDzFfjWlODAyC9/9Cyz/fUKF8swvAkuT/4+JkQc2DwKVY3Q0At1PeAuV8jKRP2aRDK2X3Y6QNk4QNk4QNnYHvgLzPueuQw6nCEAAAAASUVORK5CYII=\") 50% no-repeat var(--color-white)\n}\n.amplify-interactions-button[data-v-37eb263c],.amplify-mic-button[data-v-37eb263c]{border:none;cursor:pointer;width:32px\n}\n.amplify-form-input[data-v-37eb263c]{width:100%\n}\n.amplify-interactions-actions[data-v-37eb263c]{display:-webkit-box;display:-ms-flexbox;display:flex;border-top:var(--input-border);margin-bottom:-1em;margin-left:-1.9em;margin-right:-1.9em\n}\n.amplify-interactions-actions>input[type=text][data-v-37eb263c]{border:none;margin-top:0;margin-bottom:0;margin-left:0\n}\n.amplify-interactions-actions>input[type=text][data-v-37eb263c]:focus{border:0 solid var(--color-white)!important\n}\n.amplify-interactions-conversation[data-v-37eb263c]{margin:1em\n}\n.amplify-interactions-input[data-v-37eb263c]{padding:1em;margin:1em;width:75%;margin-left:5em;border-radius:20px 20px 0 20px;background-color:#009ecf;-webkit-box-shadow:1px 2px 4px 0 rgba(0,0,0,.1);box-shadow:1px 2px 4px 0 rgba(0,0,0,.1);color:var(--color-white);font-size:13px;line-height:16px\n}\n.amplify-interactions-input-timestamp[data-v-37eb263c]{color:#828282;font-size:10px;letter-spacing:.5px;line-height:16px;text-align:right\n}\n.amplify-interactions-response-timestamp[data-v-37eb263c]{color:#828282;font-size:10px;letter-spacing:.5px;line-height:16px;margin-left:1.5em\n}\n.amplify-interactions-response[data-v-37eb263c]{padding:1em;margin:1em;width:75%;border-radius:20px 20px 20px 0;background-color:#dbdbdb;-webkit-box-shadow:1px 2px 4px 0 rgba(0,0,0,.1);box-shadow:1px 2px 4px 0 rgba(0,0,0,.1);font-size:13px;line-height:16px;color:#4a4a4a\n}\n@media (min-width:320px) and (max-width:480px){\n.amplify-interactions[data-v-37eb263c]{width:var(--component-width-mobile)\n}\n.amplify-interactions-container[data-v-37eb263c]{width:85%\n}\n}", ""]);

// exports


/***/ }),

/***/ "c1d1":
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__("8c7e");
var aFunction = __webpack_require__("d3d5");
var SPECIES = __webpack_require__("d951")('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),

/***/ "c3ea":
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__("9dd3");
var ITERATOR = __webpack_require__("d951")('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ "c570":
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/ecma262/#sec-toindex
var toInteger = __webpack_require__("9e61");
var toLength = __webpack_require__("bb64");
module.exports = function (it) {
  if (it === undefined) return 0;
  var number = toInteger(it);
  var length = toLength(number);
  if (number !== length) throw RangeError('Wrong length!');
  return length;
};


/***/ }),

/***/ "c74b":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__("dd61");
var hiddenKeys = __webpack_require__("eaa3").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "c7bf":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("443a")(false);
// imports


// module
exports.push([module.i, "\n.amplify-album[data-v-77a314c9]{width:var(--component-width-desktop);margin:1em auto;border-radius:6px;background-color:var(--color-white);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow)\n}\n.amplify-album-container[data-v-77a314c9]{width:400px;margin:0 auto;padding:1em\n}\n.amplify-image-container[data-v-77a314c9]{display:inline\n}", ""]);

// exports


/***/ }),

/***/ "c880":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("6f0d").f;
var FProto = Function.prototype;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// 19.2.4.2 name
NAME in FProto || __webpack_require__("3d85") && dP(FProto, NAME, {
  configurable: true,
  get: function () {
    try {
      return ('' + this).match(nameRE)[1];
    } catch (e) {
      return '';
    }
  }
});


/***/ }),

/***/ "c8ae":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "cc58":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_3_node_modules_vue_cli_service_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_S3Image_vue_vue_type_style_index_0_id_bd7c1ee0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("274e");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_3_node_modules_vue_cli_service_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_S3Image_vue_vue_type_style_index_0_id_bd7c1ee0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_3_node_modules_vue_cli_service_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_S3Image_vue_vue_type_style_index_0_id_bd7c1ee0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_3_node_modules_vue_cli_service_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_S3Image_vue_vue_type_style_index_0_id_bd7c1ee0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "cd30":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("3d85") && !__webpack_require__("a124")(function () {
  return Object.defineProperty(__webpack_require__("9b86")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "d0e9":
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "d3d5":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "d7a2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("0e8c");
var dP = __webpack_require__("6f0d");
var DESCRIPTORS = __webpack_require__("3d85");
var SPECIES = __webpack_require__("d951")('species');

module.exports = function (KEY) {
  var C = global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),

/***/ "d8ca":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("7441");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("0ed3").default
var update = add("23bbab51", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "d951":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("3460")('wks');
var uid = __webpack_require__("f455");
var Symbol = __webpack_require__("0e8c").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "dafe":
/***/ (function(module, exports, __webpack_require__) {

// helper for String#{startsWith, endsWith, includes}
var isRegExp = __webpack_require__("eb58");
var defined = __webpack_require__("c8ae");

module.exports = function (that, searchString, NAME) {
  if (isRegExp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
  return String(defined(that));
};


/***/ }),

/***/ "dc23":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("4e88")('Float32', 4, function (init) {
  return function Float32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "dcce":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__("742f");
var $export = __webpack_require__("ef37");
var redefine = __webpack_require__("e385");
var hide = __webpack_require__("bafe");
var Iterators = __webpack_require__("9dd3");
var $iterCreate = __webpack_require__("3bd0");
var setToStringTag = __webpack_require__("0e85");
var getPrototypeOf = __webpack_require__("904a");
var ITERATOR = __webpack_require__("d951")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "dd61":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("25a6");
var toIObject = __webpack_require__("0b04");
var arrayIndexOf = __webpack_require__("af6b")(false);
var IE_PROTO = __webpack_require__("f962")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "dde3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__("96ba");
var step = __webpack_require__("2d2d");
var Iterators = __webpack_require__("9dd3");
var toIObject = __webpack_require__("0b04");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__("dcce")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "df26":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
 * additional grant of patent rights can be found in the PATENTS file in
 * the same directory.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    if (typeof global.process === "object" && global.process.domain) {
      invoke = global.process.domain.bind(invoke);
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // Among the various tricks for obtaining a reference to the global
  // object, this seems to be the most reliable technique that does not
  // use indirect eval (which violates Content Security Policy).
  typeof global === "object" ? global :
  typeof window === "object" ? window :
  typeof self === "object" ? self : this
);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("2c53")))

/***/ }),

/***/ "e385":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("0e8c");
var hide = __webpack_require__("bafe");
var has = __webpack_require__("25a6");
var SRC = __webpack_require__("f455")('src');
var TO_STRING = 'toString';
var $toString = Function[TO_STRING];
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__("5c50").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "eaa3":
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "eb58":
/***/ (function(module, exports, __webpack_require__) {

// 7.2.8 IsRegExp(argument)
var isObject = __webpack_require__("194e");
var cof = __webpack_require__("b735");
var MATCH = __webpack_require__("d951")('match');
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};


/***/ }),

/***/ "ef37":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("0e8c");
var core = __webpack_require__("5c50");
var hide = __webpack_require__("bafe");
var redefine = __webpack_require__("e385");
var ctx = __webpack_require__("124c");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "f39c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var core_js_modules_es6_typed_float32_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("dc23");
/* harmony import */ var core_js_modules_es6_typed_float32_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_typed_float32_array__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_typed_uint8_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("8df9");
/* harmony import */ var core_js_modules_es6_typed_uint8_array__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_typed_uint8_array__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("a7e1");
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("2e73");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("dde3");
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("0c1f");
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es6_object_freeze__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("2989");
/* harmony import */ var core_js_modules_es6_object_freeze__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_freeze__WEBPACK_IMPORTED_MODULE_6__);
var require;var require;







// Copyright 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// Permission is hereby granted, free of charge, to any person obtaining a copy of this
// software and associated documentation files (the "Software"), to deal in the Software
// without restriction, including without limitation the rights to use, copy, modify,
// merge, publish, distribute, sublicense, and/or sell copies of the Software, and to
// permit persons to whom the Software is furnished to do so.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
// INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
// PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
// HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
// OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
// SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
(function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var a = typeof require == "function" && require;
        if (!u && a) return require(o, !0);
        if (i) return i(o, !0);
        var f = new Error("Cannot find module '" + o + "'");
        throw f.code = "MODULE_NOT_FOUND", f;
      }

      var l = n[o] = {
        exports: {}
      };
      t[o][0].call(l.exports, function (e) {
        var n = t[o][1][e];
        return s(n ? n : e);
      }, l, l.exports, e, t, n, r);
    }

    return n[o].exports;
  }

  var i = typeof require == "function" && require;

  for (var o = 0; o < r.length; o++) {
    s(r[o]);
  }

  return s;
})({
  1: [function (require, module, exports) {
    (function () {
      'use strict';

      var rec = require('./recorder.js');

      var recorder,
          audioRecorder,
          checkAudioSupport,
          audioSupported,
          playbackSource,
          UNSUPPORTED = 'Audio is not supported.';
      /**
       * Represents an audio control that can start and stop recording,
       * export captured audio, play an audio buffer, and check if audio
       * is supported.
       */

      exports.audioControl = function (options) {
        options = options || {};
        this.checkAudioSupport = options.checkAudioSupport !== false;
        /**
         * This callback type is called `onSilenceCallback`.
         *
         * @callback onSilenceCallback
         */

        /**
         * Visualize callback: `visualizerCallback`.
         *
         * @callback visualizerCallback
         * @param {Uint8Array} dataArray
         * @param {number} bufferLength
         */

        /**
         * Clears the previous buffer and starts buffering audio.
         *
         * @param {?onSilenceCallback} onSilence - Called when silence is detected.
         * @param {?visualizerCallback} visualizer - Can be used to visualize the captured buffer.
         * @param {silenceDetectionConfig} - Specify custom silence detection values.
         * @throws {Error} If audio is not supported.
         */

        var startRecording = function startRecording(onSilence, visualizer, silenceDetectionConfig) {
          onSilence = onSilence || function () {
            /* no op */
          };

          visualizer = visualizer || function () {
            /* no op */
          };

          audioSupported = audioSupported !== false;

          if (!audioSupported) {
            throw new Error(UNSUPPORTED);
          }

          recorder = audioRecorder.createRecorder(silenceDetectionConfig);
          recorder.record(onSilence, visualizer);
        };
        /**
         * Stops buffering audio.
         *
         * @throws {Error} If audio is not supported.
         */


        var stopRecording = function stopRecording() {
          audioSupported = audioSupported !== false;

          if (!audioSupported) {
            throw new Error(UNSUPPORTED);
          }

          recorder.stop();
        };
        /**
         * On export complete callback: `onExportComplete`.
         *
         * @callback onExportComplete
         * @param {Blob} blob The exported audio as a Blob.
         */

        /**
         * Exports the captured audio buffer.
         *
         * @param {onExportComplete} callback - Called when the export is complete.
         * @param {sampleRate} The sample rate to use in the export.
         * @throws {Error} If audio is not supported.
         */


        var exportWAV = function exportWAV(callback, sampleRate) {
          audioSupported = audioSupported !== false;

          if (!audioSupported) {
            throw new Error(UNSUPPORTED);
          }

          if (!(callback && typeof callback === 'function')) {
            throw new Error('You must pass a callback function to export.');
          }

          sampleRate = typeof sampleRate !== 'undefined' ? sampleRate : 16000;
          recorder.exportWAV(callback, sampleRate);
          recorder.clear();
        };
        /**
         * On playback complete callback: `onPlaybackComplete`.
         *
         * @callback onPlaybackComplete
         */

        /**
         * Plays the audio buffer with an HTML5 audio tag.
         * @param {Uint8Array} buffer - The audio buffer to play.
         * @param {?onPlaybackComplete} callback - Called when audio playback is complete.
         */


        var playHtmlAudioElement = function playHtmlAudioElement(buffer, callback) {
          if (typeof buffer === 'undefined') {
            return;
          }

          var myBlob = new Blob([buffer]);
          var audio = document.createElement('audio');
          var objectUrl = window.URL.createObjectURL(myBlob);
          audio.src = objectUrl;
          audio.addEventListener('ended', function () {
            audio.currentTime = 0;

            if (typeof callback === 'function') {
              callback();
            }
          });
          audio.play();
        };
        /**
         * On playback complete callback: `onPlaybackComplete`.
         *
         * @callback onPlaybackComplete
         */

        /**
         * Plays the audio buffer with a WebAudio AudioBufferSourceNode.
         * @param {Uint8Array} buffer - The audio buffer to play.
         * @param {?onPlaybackComplete} callback - Called when audio playback is complete.
         */


        var play = function play(buffer, callback) {
          if (typeof buffer === 'undefined') {
            return;
          }

          var myBlob = new Blob([buffer]); // We'll use a FileReader to create and ArrayBuffer out of the audio response.

          var fileReader = new FileReader();

          fileReader.onload = function () {
            // Once we have an ArrayBuffer we can create our BufferSource and decode the result as an AudioBuffer.
            playbackSource = audioRecorder.audioContext().createBufferSource();
            audioRecorder.audioContext().decodeAudioData(this.result, function (buf) {
              // Set the source buffer as our new AudioBuffer.
              playbackSource.buffer = buf; // Set the destination (the actual audio-rendering device--your device's speakers).

              playbackSource.connect(audioRecorder.audioContext().destination); // Add an "on ended" callback.

              playbackSource.onended = function (event) {
                if (typeof callback === 'function') {
                  callback();
                }
              }; // Start the playback.


              playbackSource.start(0);
            });
          };

          fileReader.readAsArrayBuffer(myBlob);
        };
        /**
         * Stops the playback source (created by the play method) if it exists. The `onPlaybackComplete`
         * callback will be called.
         */


        var stop = function stop() {
          if (typeof playbackSource === 'undefined') {
            return;
          }

          playbackSource.stop();
        };
        /**
         * Clear the recording buffer.
         */


        var clear = function clear() {
          recorder.clear();
        };
        /**
         * On audio supported callback: `onAudioSupported`.
         *
         * @callback onAudioSupported
         * @param {boolean}
         */

        /**
         * Checks that getUserMedia is supported and the user has given us access to the mic.
         * @param {onAudioSupported} callback - Called with the result.
         */


        var supportsAudio = function supportsAudio(callback) {
          callback = callback || function () {
            /* no op */
          };

          if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            audioRecorder = rec.audioRecorder();
            audioRecorder.requestDevice().then(function (stream) {
              audioSupported = true;
              callback(audioSupported);
            }).catch(function (error) {
              audioSupported = false;
              callback(audioSupported);
            });
          } else {
            audioSupported = false;
            callback(audioSupported);
          }
        };

        if (this.checkAudioSupport) {
          supportsAudio();
        }

        return {
          startRecording: startRecording,
          stopRecording: stopRecording,
          exportWAV: exportWAV,
          play: play,
          stop: stop,
          clear: clear,
          playHtmlAudioElement: playHtmlAudioElement,
          supportsAudio: supportsAudio
        };
      };
    })();
  }, {
    "./recorder.js": 5
  }],
  2: [function (require, module, exports) {
    (function () {
      'use strict';

      var AudioControl = require('./control.js').audioControl;

      var DEFAULT_LATEST = '$LATEST';
      var DEFAULT_CONTENT_TYPE = 'audio/x-l16; sample-rate=16000';
      var DEFAULT_USER_ID = 'userId';
      var DEFAULT_ACCEPT_HEADER_VALUE = 'audio/mpeg';
      var MESSAGES = Object.freeze({
        PASSIVE: 'Passive',
        LISTENING: 'Listening',
        SENDING: 'Sending',
        SPEAKING: 'Speaking'
      });
      var lexruntime,
          audioControl = new AudioControl({
        checkAudioSupport: false
      });

      exports.conversation = function (config, onStateChange, onSuccess, onError, onAudioData) {
        var currentState; // Apply default values.

        this.config = applyDefaults(config);
        this.lexConfig = this.config.lexConfig;
        this.messages = MESSAGES;

        onStateChange = onStateChange || function () {
          /* no op */
        };

        this.onSuccess = onSuccess || function () {
          /* no op */
        };

        this.onError = onError || function () {
          /* no op */
        };

        this.onAudioData = onAudioData || function () {
          /* no op */
        }; // Validate input.


        if (!this.config.lexConfig.botName) {
          this.onError('A Bot name must be provided.');
          return;
        }

        if (!AWS.config.credentials) {
          this.onError('AWS Credentials must be provided.');
          return;
        }

        if (!AWS.config.region) {
          this.onError('A Region value must be provided.');
          return;
        }

        lexruntime = new AWS.LexRuntime();

        this.onSilence = function () {
          if (config.silenceDetection) {
            audioControl.stopRecording();
            currentState.advanceConversation();
          }
        };

        this.transition = function (conversation) {
          currentState = conversation;
          var state = currentState.state;
          onStateChange(state.message); // If we are transitioning into SENDING or SPEAKING we want to immediately advance the conversation state
          // to start the service call or playback.

          if (state.message === state.messages.SENDING || state.message === state.messages.SPEAKING) {
            currentState.advanceConversation();
          } // If we are transitioning in to sending and we are not detecting silence (this was a manual state change)
          // we need to do some cleanup: stop recording, and stop rendering.


          if (state.message === state.messages.SENDING && !this.config.silenceDetection) {
            audioControl.stopRecording();
          }
        };

        this.advanceConversation = function () {
          audioControl.supportsAudio(function (supported) {
            if (supported) {
              currentState.advanceConversation();
            } else {
              onError('Audio is not supported.');
            }
          });
        };

        this.updateConfig = function (newValue) {
          this.config = applyDefaults(newValue);
          this.lexConfig = this.config.lexConfig;
        };

        this.reset = function () {
          audioControl.clear();
          currentState = new Initial(currentState.state);
        };

        currentState = new Initial(this);
        return {
          advanceConversation: this.advanceConversation,
          updateConfig: this.updateConfig,
          reset: this.reset
        };
      };

      var Initial = function Initial(state) {
        this.state = state;
        state.message = state.messages.PASSIVE;

        this.advanceConversation = function () {
          audioControl.startRecording(state.onSilence, state.onAudioData, state.config.silenceDetectionConfig);
          state.transition(new Listening(state));
        };
      };

      var Listening = function Listening(state) {
        this.state = state;
        state.message = state.messages.LISTENING;

        this.advanceConversation = function () {
          audioControl.exportWAV(function (blob) {
            state.audioInput = blob;
            state.transition(new Sending(state));
          });
        };
      };

      var Sending = function Sending(state) {
        this.state = state;
        state.message = state.messages.SENDING;

        this.advanceConversation = function () {
          state.lexConfig.inputStream = state.audioInput;
          lexruntime.postContent(state.lexConfig, function (err, data) {
            if (err) {
              state.onError(err);
              state.transition(new Initial(state));
            } else {
              state.audioOutput = data;
              state.transition(new Speaking(state));
              state.onSuccess(data);
            }
          });
        };
      };

      var Speaking = function Speaking(state) {
        this.state = state;
        state.message = state.messages.SPEAKING;

        this.advanceConversation = function () {
          if (state.audioOutput.contentType === 'audio/mpeg') {
            audioControl.play(state.audioOutput.audioStream, function () {
              if (state.audioOutput.dialogState === 'ReadyForFulfillment' || state.audioOutput.dialogState === 'Fulfilled' || state.audioOutput.dialogState === 'Failed' || !state.config.silenceDetection) {
                state.transition(new Initial(state));
              } else {
                audioControl.startRecording(state.onSilence, state.onAudioData, state.config.silenceDetectionConfig);
                state.transition(new Listening(state));
              }
            });
          } else {
            state.transition(new Initial(state));
          }
        };
      };

      var applyDefaults = function applyDefaults(config) {
        config = config || {};
        config.silenceDetection = config.hasOwnProperty('silenceDetection') ? config.silenceDetection : true;
        var lexConfig = config.lexConfig || {};
        lexConfig.botAlias = lexConfig.hasOwnProperty('botAlias') ? lexConfig.botAlias : DEFAULT_LATEST;
        lexConfig.botName = lexConfig.hasOwnProperty('botName') ? lexConfig.botName : '';
        lexConfig.contentType = lexConfig.hasOwnProperty('contentType') ? lexConfig.contentType : DEFAULT_CONTENT_TYPE;
        lexConfig.userId = lexConfig.hasOwnProperty('userId') ? lexConfig.userId : DEFAULT_USER_ID;
        lexConfig.accept = lexConfig.hasOwnProperty('accept') ? lexConfig.accept : DEFAULT_ACCEPT_HEADER_VALUE;
        config.lexConfig = lexConfig;
        return config;
      };
    })();
  }, {
    "./control.js": 1
  }],
  3: [function (require, module, exports) {
    (function (global) {
      /**
       * @module LexAudio
       * @description The global namespace for Amazon Lex Audio
       */
      global.LexAudio = global.LexAudio || {};
      global.LexAudio.audioControl = require('./control.js').audioControl;
      global.LexAudio.conversation = require('./conversation.js').conversation;
      module.exports = global.LexAudio;
    }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
  }, {
    "./control.js": 1,
    "./conversation.js": 2
  }],
  4: [function (require, module, exports) {
    var bundleFn = arguments[3];
    var sources = arguments[4];
    var cache = arguments[5];
    var stringify = JSON.stringify;

    module.exports = function (fn, options) {
      var wkey;
      var cacheKeys = Object.keys(cache);

      for (var i = 0, l = cacheKeys.length; i < l; i++) {
        var key = cacheKeys[i];
        var exp = cache[key].exports; // Using babel as a transpiler to use esmodule, the export will always
        // be an object with the default export as a property of it. To ensure
        // the existing api and babel esmodule exports are both supported we
        // check for both

        if (exp === fn || exp && exp.default === fn) {
          wkey = key;
          break;
        }
      }

      if (!wkey) {
        wkey = Math.floor(Math.pow(16, 8) * Math.random()).toString(16);
        var wcache = {};

        for (var i = 0, l = cacheKeys.length; i < l; i++) {
          var key = cacheKeys[i];
          wcache[key] = key;
        }

        sources[wkey] = [Function(['require', 'module', 'exports'], '(' + fn + ')(self)'), wcache];
      }

      var skey = Math.floor(Math.pow(16, 8) * Math.random()).toString(16);
      var scache = {};
      scache[wkey] = wkey;
      sources[skey] = [Function(['require'], // try to call default if defined to also support babel esmodule
      // exports
      'var f = require(' + stringify(wkey) + ');' + '(f.default ? f.default : f)(self);'), scache];
      var workerSources = {};
      resolveSources(skey);

      function resolveSources(key) {
        workerSources[key] = true;

        for (var depPath in sources[key][1]) {
          var depKey = sources[key][1][depPath];

          if (!workerSources[depKey]) {
            resolveSources(depKey);
          }
        }
      }

      var src = '(' + bundleFn + ')({' + Object.keys(workerSources).map(function (key) {
        return stringify(key) + ':[' + sources[key][0] + ',' + stringify(sources[key][1]) + ']';
      }).join(',') + '},{},[' + stringify(skey) + '])';
      var URL = window.URL || window.webkitURL || window.mozURL || window.msURL;
      var blob = new Blob([src], {
        type: 'text/javascript'
      });

      if (options && options.bare) {
        return blob;
      }

      var workerUrl = URL.createObjectURL(blob);
      var worker = new Worker(workerUrl);
      worker.objectURL = workerUrl;
      return worker;
    };
  }, {}],
  5: [function (require, module, exports) {
    (function () {
      'use strict';

      var work = require('webworkify');

      var worker = work(require('./worker.js'));
      var audio_context, audio_stream;
      /**
       * The Recorder object. Sets up the onaudioprocess callback and communicates
       * with the web worker to perform audio actions.
       */

      var recorder = function recorder(source, silenceDetectionConfig) {
        silenceDetectionConfig = silenceDetectionConfig || {};
        silenceDetectionConfig.time = silenceDetectionConfig.hasOwnProperty('time') ? silenceDetectionConfig.time : 1500;
        silenceDetectionConfig.amplitude = silenceDetectionConfig.hasOwnProperty('amplitude') ? silenceDetectionConfig.amplitude : 0.2;
        var recording = false,
            currCallback,
            start,
            silenceCallback,
            visualizationCallback; // Create a ScriptProcessorNode with a bufferSize of 4096 and a single input and output channel

        var node = source.context.createScriptProcessor(4096, 1, 1);

        worker.onmessage = function (message) {
          var blob = message.data;
          currCallback(blob);
        };

        worker.postMessage({
          command: 'init',
          config: {
            sampleRate: source.context.sampleRate
          }
        });
        /**
         * Sets the silence and viz callbacks, resets the silence start time, and sets recording to true.
         * @param {?onSilenceCallback} onSilence - Called when silence is detected.
         * @param {?visualizerCallback} visualizer - Can be used to visualize the captured buffer.
         */

        var record = function record(onSilence, visualizer) {
          silenceCallback = onSilence;
          visualizationCallback = visualizer;
          start = Date.now();
          recording = true;
        };
        /**
         * Sets recording to false.
         */


        var stop = function stop() {
          recording = false;
        };
        /**
         * Posts "clear" message to the worker.
         */


        var clear = function clear() {
          stop();
          worker.postMessage({
            command: 'clear'
          });
        };
        /**
         * Sets the export callback and posts an "export" message to the worker.
         * @param {onExportComplete} callback - Called when the export is complete.
         * @param {sampleRate} The sample rate to use in the export.
         */


        var exportWAV = function exportWAV(callback, sampleRate) {
          currCallback = callback;
          worker.postMessage({
            command: 'export',
            sampleRate: sampleRate
          });
        };
        /**
         * Checks the time domain data to see if the amplitude of the audio waveform is more than
         * the silence threshold. If it is, "noise" has been detected and it resets the start time.
         * If the elapsed time reaches the time threshold the silence callback is called. If there is a 
         * visualizationCallback it invokes the visualization callback with the time domain data.
         */


        var analyse = function analyse() {
          analyser.fftSize = 2048;
          var bufferLength = analyser.fftSize;
          var dataArray = new Uint8Array(bufferLength);
          var amplitude = silenceDetectionConfig.amplitude;
          var time = silenceDetectionConfig.time;
          analyser.getByteTimeDomainData(dataArray);

          if (typeof visualizationCallback === 'function') {
            visualizationCallback(dataArray, bufferLength);
          }

          for (var i = 0; i < bufferLength; i++) {
            // Normalize between -1 and 1.
            var curr_value_time = dataArray[i] / 128 - 1.0;

            if (curr_value_time > amplitude || curr_value_time < -1 * amplitude) {
              start = Date.now();
            }
          }

          var newtime = Date.now();
          var elapsedTime = newtime - start;

          if (elapsedTime > time) {
            silenceCallback();
          }
        };
        /**
         * The onaudioprocess event handler of the ScriptProcessorNode interface. It is the EventHandler to be
         * called for the audioprocess event that is dispatched to ScriptProcessorNode node types.
         * @param {AudioProcessingEvent} audioProcessingEvent - The audio processing event.
         */


        node.onaudioprocess = function (audioProcessingEvent) {
          if (!recording) {
            return;
          }

          worker.postMessage({
            command: 'record',
            buffer: [audioProcessingEvent.inputBuffer.getChannelData(0)]
          });
          analyse();
        };

        var analyser = source.context.createAnalyser();
        analyser.minDecibels = -90;
        analyser.maxDecibels = -10;
        analyser.smoothingTimeConstant = 0.85;
        source.connect(analyser);
        analyser.connect(node);
        node.connect(source.context.destination);
        return {
          record: record,
          stop: stop,
          clear: clear,
          exportWAV: exportWAV
        };
      };
      /**
       * Audio recorder object. Handles setting up the audio context,
       * accessing the mike, and creating the Recorder object.
       */


      exports.audioRecorder = function () {
        /**
         * Creates an audio context and calls getUserMedia to request the mic (audio).
         */
        var requestDevice = function requestDevice() {
          if (typeof audio_context === 'undefined') {
            window.AudioContext = window.AudioContext || window.webkitAudioContext;
            audio_context = new AudioContext();
          }

          return navigator.mediaDevices.getUserMedia({
            audio: true
          }).then(function (stream) {
            audio_stream = stream;
          });
        };

        var createRecorder = function createRecorder(silenceDetectionConfig) {
          return recorder(audio_context.createMediaStreamSource(audio_stream), silenceDetectionConfig);
        };

        var audioContext = function audioContext() {
          return audio_context;
        };

        return {
          requestDevice: requestDevice,
          createRecorder: createRecorder,
          audioContext: audioContext
        };
      };
    })();
  }, {
    "./worker.js": 6,
    "webworkify": 4
  }],
  6: [function (require, module, exports) {
    module.exports = function (self) {
      'use strict';

      var recLength = 0,
          recBuffer = [],
          recordSampleRate;
      self.addEventListener('message', function (e) {
        switch (e.data.command) {
          case 'init':
            init(e.data.config);
            break;

          case 'record':
            record(e.data.buffer);
            break;

          case 'export':
            exportBuffer(e.data.sampleRate);
            break;

          case 'clear':
            clear();
            break;
        }
      });

      function init(config) {
        recordSampleRate = config.sampleRate;
      }

      function record(inputBuffer) {
        recBuffer.push(inputBuffer[0]);
        recLength += inputBuffer[0].length;
      }

      function exportBuffer(exportSampleRate) {
        var mergedBuffers = mergeBuffers(recBuffer, recLength);
        var downsampledBuffer = downsampleBuffer(mergedBuffers, exportSampleRate);
        var encodedWav = encodeWAV(downsampledBuffer);
        var audioBlob = new Blob([encodedWav], {
          type: 'application/octet-stream'
        });
        postMessage(audioBlob);
      }

      function clear() {
        recLength = 0;
        recBuffer = [];
      }

      function downsampleBuffer(buffer, exportSampleRate) {
        if (exportSampleRate === recordSampleRate) {
          return buffer;
        }

        var sampleRateRatio = recordSampleRate / exportSampleRate;
        var newLength = Math.round(buffer.length / sampleRateRatio);
        var result = new Float32Array(newLength);
        var offsetResult = 0;
        var offsetBuffer = 0;

        while (offsetResult < result.length) {
          var nextOffsetBuffer = Math.round((offsetResult + 1) * sampleRateRatio);
          var accum = 0,
              count = 0;

          for (var i = offsetBuffer; i < nextOffsetBuffer && i < buffer.length; i++) {
            accum += buffer[i];
            count++;
          }

          result[offsetResult] = accum / count;
          offsetResult++;
          offsetBuffer = nextOffsetBuffer;
        }

        return result;
      }

      function mergeBuffers(bufferArray, recLength) {
        var result = new Float32Array(recLength);
        var offset = 0;

        for (var i = 0; i < bufferArray.length; i++) {
          result.set(bufferArray[i], offset);
          offset += bufferArray[i].length;
        }

        return result;
      }

      function floatTo16BitPCM(output, offset, input) {
        for (var i = 0; i < input.length; i++, offset += 2) {
          var s = Math.max(-1, Math.min(1, input[i]));
          output.setInt16(offset, s < 0 ? s * 0x8000 : s * 0x7FFF, true);
        }
      }

      function writeString(view, offset, string) {
        for (var i = 0; i < string.length; i++) {
          view.setUint8(offset + i, string.charCodeAt(i));
        }
      }

      function encodeWAV(samples) {
        var buffer = new ArrayBuffer(44 + samples.length * 2);
        var view = new DataView(buffer);
        writeString(view, 0, 'RIFF');
        view.setUint32(4, 32 + samples.length * 2, true);
        writeString(view, 8, 'WAVE');
        writeString(view, 12, 'fmt ');
        view.setUint32(16, 16, true);
        view.setUint16(20, 1, true);
        view.setUint16(22, 1, true);
        view.setUint32(24, recordSampleRate, true);
        view.setUint32(28, recordSampleRate * 2, true);
        view.setUint16(32, 2, true);
        view.setUint16(34, 16, true);
        writeString(view, 36, 'data');
        view.setUint32(40, samples.length * 2, true);
        floatTo16BitPCM(view, 44, samples);
        return view;
      }
    };
  }, {}]
}, {}, [3]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("2c53")))

/***/ }),

/***/ "f455":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "f68e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_3_node_modules_vue_cli_service_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_S3Album_vue_vue_type_style_index_0_id_77a314c9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6218");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_3_node_modules_vue_cli_service_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_S3Album_vue_vue_type_style_index_0_id_77a314c9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_3_node_modules_vue_cli_service_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_S3Album_vue_vue_type_style_index_0_id_77a314c9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_3_node_modules_vue_cli_service_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_S3Album_vue_vue_type_style_index_0_id_77a314c9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "f8aa":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("194e");
var isArray = __webpack_require__("4cf2");
var SPECIES = __webpack_require__("d951")('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),

/***/ "f962":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("3460")('keys');
var uid = __webpack_require__("f455");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "fa48":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("0e8c");
var hide = __webpack_require__("bafe");
var uid = __webpack_require__("f455");
var TYPED = uid('typed_array');
var VIEW = uid('view');
var ABV = !!(global.ArrayBuffer && global.DataView);
var CONSTR = ABV;
var i = 0;
var l = 9;
var Typed;

var TypedArrayConstructors = (
  'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'
).split(',');

while (i < l) {
  if (Typed = global[TypedArrayConstructors[i++]]) {
    hide(Typed.prototype, TYPED, true);
    hide(Typed.prototype, VIEW, true);
  } else CONSTR = false;
}

module.exports = {
  ABV: ABV,
  CONSTR: CONSTR,
  TYPED: TYPED,
  VIEW: VIEW
};


/***/ }),

/***/ "faee":
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),

/***/ "fd6d":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("be45");
var ITERATOR = __webpack_require__("d951")('iterator');
var Iterators = __webpack_require__("9dd3");
module.exports = __webpack_require__("5c50").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ })

/******/ })["default"];
//# sourceMappingURL=aws-amplify-vue.common.js.map