import {
  Fragment,
  computed2 as computed,
  createBaseVNode,
  createBlock,
  createCommentVNode,
  createElementBlock,
  createTextVNode,
  createVNode,
  defineComponent,
  inject,
  normalizeClass,
  normalizeStyle,
  onBeforeUnmount,
  onMounted,
  onUpdated,
  openBlock,
  provide,
  reactive,
  ref,
  renderList,
  renderSlot,
  toDisplayString,
  unref,
  vShow,
  withCtx,
  withDirectives,
  withModifiers
} from "./chunk-XKSR56VD.js";
import {
  __commonJS,
  __export,
  __toESM
} from "./chunk-5WWUZCGV.js";

// node_modules/.pnpm/screenfull@5.2.0/node_modules/screenfull/dist/screenfull.js
var require_screenfull = __commonJS({
  "node_modules/.pnpm/screenfull@5.2.0/node_modules/screenfull/dist/screenfull.js"(exports, module) {
    (function() {
      "use strict";
      var document2 = typeof window !== "undefined" && typeof window.document !== "undefined" ? window.document : {};
      var isCommonjs = typeof module !== "undefined" && module.exports;
      var fn2 = function() {
        var val;
        var fnMap = [
          [
            "requestFullscreen",
            "exitFullscreen",
            "fullscreenElement",
            "fullscreenEnabled",
            "fullscreenchange",
            "fullscreenerror"
          ],
          // New WebKit
          [
            "webkitRequestFullscreen",
            "webkitExitFullscreen",
            "webkitFullscreenElement",
            "webkitFullscreenEnabled",
            "webkitfullscreenchange",
            "webkitfullscreenerror"
          ],
          // Old WebKit
          [
            "webkitRequestFullScreen",
            "webkitCancelFullScreen",
            "webkitCurrentFullScreenElement",
            "webkitCancelFullScreen",
            "webkitfullscreenchange",
            "webkitfullscreenerror"
          ],
          [
            "mozRequestFullScreen",
            "mozCancelFullScreen",
            "mozFullScreenElement",
            "mozFullScreenEnabled",
            "mozfullscreenchange",
            "mozfullscreenerror"
          ],
          [
            "msRequestFullscreen",
            "msExitFullscreen",
            "msFullscreenElement",
            "msFullscreenEnabled",
            "MSFullscreenChange",
            "MSFullscreenError"
          ]
        ];
        var i = 0;
        var l = fnMap.length;
        var ret = {};
        for (; i < l; i++) {
          val = fnMap[i];
          if (val && val[1] in document2) {
            for (i = 0; i < val.length; i++) {
              ret[fnMap[0][i]] = val[i];
            }
            return ret;
          }
        }
        return false;
      }();
      var eventNameMap = {
        change: fn2.fullscreenchange,
        error: fn2.fullscreenerror
      };
      var screenfull = {
        request: function(element, options) {
          return new Promise((function(resolve, reject) {
            var onFullScreenEntered = (function() {
              this.off("change", onFullScreenEntered);
              resolve();
            }).bind(this);
            this.on("change", onFullScreenEntered);
            element = element || document2.documentElement;
            var returnPromise = element[fn2.requestFullscreen](options);
            if (returnPromise instanceof Promise) {
              returnPromise.then(onFullScreenEntered).catch(reject);
            }
          }).bind(this));
        },
        exit: function() {
          return new Promise((function(resolve, reject) {
            if (!this.isFullscreen) {
              resolve();
              return;
            }
            var onFullScreenExit = (function() {
              this.off("change", onFullScreenExit);
              resolve();
            }).bind(this);
            this.on("change", onFullScreenExit);
            var returnPromise = document2[fn2.exitFullscreen]();
            if (returnPromise instanceof Promise) {
              returnPromise.then(onFullScreenExit).catch(reject);
            }
          }).bind(this));
        },
        toggle: function(element, options) {
          return this.isFullscreen ? this.exit() : this.request(element, options);
        },
        onchange: function(callback) {
          this.on("change", callback);
        },
        onerror: function(callback) {
          this.on("error", callback);
        },
        on: function(event, callback) {
          var eventName = eventNameMap[event];
          if (eventName) {
            document2.addEventListener(eventName, callback, false);
          }
        },
        off: function(event, callback) {
          var eventName = eventNameMap[event];
          if (eventName) {
            document2.removeEventListener(eventName, callback, false);
          }
        },
        raw: fn2
      };
      if (!fn2) {
        if (isCommonjs) {
          module.exports = { isEnabled: false };
        } else {
          window.screenfull = { isEnabled: false };
        }
        return;
      }
      Object.defineProperties(screenfull, {
        isFullscreen: {
          get: function() {
            return Boolean(document2[fn2.fullscreenElement]);
          }
        },
        element: {
          enumerable: true,
          get: function() {
            return document2[fn2.fullscreenElement];
          }
        },
        isEnabled: {
          enumerable: true,
          get: function() {
            return Boolean(document2[fn2.fullscreenEnabled]);
          }
        }
      });
      if (isCommonjs) {
        module.exports = screenfull;
      } else {
        window.screenfull = screenfull;
      }
    })();
  }
});

// node_modules/.pnpm/relation-graph@2.1.15/node_modules/relation-graph/lib/vue3/relation-graph.mjs
var nt = __toESM(require_screenfull(), 1);
var import_screenfull = __toESM(require_screenfull(), 1);

// node_modules/.pnpm/html2canvas@1.4.1/node_modules/html2canvas/dist/html2canvas.esm.js
var html2canvas_esm_exports = {};
__export(html2canvas_esm_exports, {
  default: () => html2canvas_esm_default
});
var extendStatics = function(d, b) {
  extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
    d2.__proto__ = b2;
  } || function(d2, b2) {
    for (var p in b2)
      if (Object.prototype.hasOwnProperty.call(b2, p))
        d2[p] = b2[p];
  };
  return extendStatics(d, b);
};
function __extends(d, b) {
  if (typeof b !== "function" && b !== null)
    throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);
  function __() {
    this.constructor = d;
  }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function() {
  __assign = Object.assign || function __assign2(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e2) {
        reject(e2);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e2) {
        reject(e2);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator(thisArg, body) {
  var _2 = { label: 0, sent: function() {
    if (t[0] & 1)
      throw t[1];
    return t[1];
  }, trys: [], ops: [] }, f2, y, t, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function verb(n) {
    return function(v2) {
      return step([n, v2]);
    };
  }
  function step(op) {
    if (f2)
      throw new TypeError("Generator is already executing.");
    while (_2)
      try {
        if (f2 = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
          return t;
        if (y = 0, t)
          op = [op[0] & 2, t.value];
        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;
          case 4:
            _2.label++;
            return { value: op[1], done: false };
          case 5:
            _2.label++;
            y = op[1];
            op = [0];
            continue;
          case 7:
            op = _2.ops.pop();
            _2.trys.pop();
            continue;
          default:
            if (!(t = _2.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _2 = 0;
              continue;
            }
            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _2.label = op[1];
              break;
            }
            if (op[0] === 6 && _2.label < t[1]) {
              _2.label = t[1];
              t = op;
              break;
            }
            if (t && _2.label < t[2]) {
              _2.label = t[2];
              _2.ops.push(op);
              break;
            }
            if (t[2])
              _2.ops.pop();
            _2.trys.pop();
            continue;
        }
        op = body.call(thisArg, _2);
      } catch (e2) {
        op = [6, e2];
        y = 0;
      } finally {
        f2 = t = 0;
      }
    if (op[0] & 5)
      throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
}
function __spreadArray(to2, from, pack2) {
  if (pack2 || arguments.length === 2)
    for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
        if (!ar)
          ar = Array.prototype.slice.call(from, 0, i);
        ar[i] = from[i];
      }
    }
  return to2.concat(ar || from);
}
var Bounds = (
  /** @class */
  function() {
    function Bounds2(left, top, width, height) {
      this.left = left;
      this.top = top;
      this.width = width;
      this.height = height;
    }
    Bounds2.prototype.add = function(x, y, w, h) {
      return new Bounds2(this.left + x, this.top + y, this.width + w, this.height + h);
    };
    Bounds2.fromClientRect = function(context, clientRect) {
      return new Bounds2(clientRect.left + context.windowBounds.left, clientRect.top + context.windowBounds.top, clientRect.width, clientRect.height);
    };
    Bounds2.fromDOMRectList = function(context, domRectList) {
      var domRect = Array.from(domRectList).find(function(rect) {
        return rect.width !== 0;
      });
      return domRect ? new Bounds2(domRect.left + context.windowBounds.left, domRect.top + context.windowBounds.top, domRect.width, domRect.height) : Bounds2.EMPTY;
    };
    Bounds2.EMPTY = new Bounds2(0, 0, 0, 0);
    return Bounds2;
  }()
);
var parseBounds = function(context, node) {
  return Bounds.fromClientRect(context, node.getBoundingClientRect());
};
var parseDocumentSize = function(document2) {
  var body = document2.body;
  var documentElement = document2.documentElement;
  if (!body || !documentElement) {
    throw new Error("Unable to get document size");
  }
  var width = Math.max(Math.max(body.scrollWidth, documentElement.scrollWidth), Math.max(body.offsetWidth, documentElement.offsetWidth), Math.max(body.clientWidth, documentElement.clientWidth));
  var height = Math.max(Math.max(body.scrollHeight, documentElement.scrollHeight), Math.max(body.offsetHeight, documentElement.offsetHeight), Math.max(body.clientHeight, documentElement.clientHeight));
  return new Bounds(0, 0, width, height);
};
var toCodePoints$1 = function(str) {
  var codePoints = [];
  var i = 0;
  var length = str.length;
  while (i < length) {
    var value = str.charCodeAt(i++);
    if (value >= 55296 && value <= 56319 && i < length) {
      var extra = str.charCodeAt(i++);
      if ((extra & 64512) === 56320) {
        codePoints.push(((value & 1023) << 10) + (extra & 1023) + 65536);
      } else {
        codePoints.push(value);
        i--;
      }
    } else {
      codePoints.push(value);
    }
  }
  return codePoints;
};
var fromCodePoint$1 = function() {
  var codePoints = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    codePoints[_i] = arguments[_i];
  }
  if (String.fromCodePoint) {
    return String.fromCodePoint.apply(String, codePoints);
  }
  var length = codePoints.length;
  if (!length) {
    return "";
  }
  var codeUnits = [];
  var index = -1;
  var result = "";
  while (++index < length) {
    var codePoint = codePoints[index];
    if (codePoint <= 65535) {
      codeUnits.push(codePoint);
    } else {
      codePoint -= 65536;
      codeUnits.push((codePoint >> 10) + 55296, codePoint % 1024 + 56320);
    }
    if (index + 1 === length || codeUnits.length > 16384) {
      result += String.fromCharCode.apply(String, codeUnits);
      codeUnits.length = 0;
    }
  }
  return result;
};
var chars$2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var lookup$2 = typeof Uint8Array === "undefined" ? [] : new Uint8Array(256);
for (i$2 = 0; i$2 < chars$2.length; i$2++) {
  lookup$2[chars$2.charCodeAt(i$2)] = i$2;
}
var i$2;
var chars$1$1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var lookup$1$1 = typeof Uint8Array === "undefined" ? [] : new Uint8Array(256);
for (i$1$1 = 0; i$1$1 < chars$1$1.length; i$1$1++) {
  lookup$1$1[chars$1$1.charCodeAt(i$1$1)] = i$1$1;
}
var i$1$1;
var decode$1 = function(base642) {
  var bufferLength = base642.length * 0.75, len = base642.length, i, p = 0, encoded1, encoded2, encoded3, encoded4;
  if (base642[base642.length - 1] === "=") {
    bufferLength--;
    if (base642[base642.length - 2] === "=") {
      bufferLength--;
    }
  }
  var buffer = typeof ArrayBuffer !== "undefined" && typeof Uint8Array !== "undefined" && typeof Uint8Array.prototype.slice !== "undefined" ? new ArrayBuffer(bufferLength) : new Array(bufferLength);
  var bytes = Array.isArray(buffer) ? buffer : new Uint8Array(buffer);
  for (i = 0; i < len; i += 4) {
    encoded1 = lookup$1$1[base642.charCodeAt(i)];
    encoded2 = lookup$1$1[base642.charCodeAt(i + 1)];
    encoded3 = lookup$1$1[base642.charCodeAt(i + 2)];
    encoded4 = lookup$1$1[base642.charCodeAt(i + 3)];
    bytes[p++] = encoded1 << 2 | encoded2 >> 4;
    bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
    bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
  }
  return buffer;
};
var polyUint16Array$1 = function(buffer) {
  var length = buffer.length;
  var bytes = [];
  for (var i = 0; i < length; i += 2) {
    bytes.push(buffer[i + 1] << 8 | buffer[i]);
  }
  return bytes;
};
var polyUint32Array$1 = function(buffer) {
  var length = buffer.length;
  var bytes = [];
  for (var i = 0; i < length; i += 4) {
    bytes.push(buffer[i + 3] << 24 | buffer[i + 2] << 16 | buffer[i + 1] << 8 | buffer[i]);
  }
  return bytes;
};
var UTRIE2_SHIFT_2$1 = 5;
var UTRIE2_SHIFT_1$1 = 6 + 5;
var UTRIE2_INDEX_SHIFT$1 = 2;
var UTRIE2_SHIFT_1_2$1 = UTRIE2_SHIFT_1$1 - UTRIE2_SHIFT_2$1;
var UTRIE2_LSCP_INDEX_2_OFFSET$1 = 65536 >> UTRIE2_SHIFT_2$1;
var UTRIE2_DATA_BLOCK_LENGTH$1 = 1 << UTRIE2_SHIFT_2$1;
var UTRIE2_DATA_MASK$1 = UTRIE2_DATA_BLOCK_LENGTH$1 - 1;
var UTRIE2_LSCP_INDEX_2_LENGTH$1 = 1024 >> UTRIE2_SHIFT_2$1;
var UTRIE2_INDEX_2_BMP_LENGTH$1 = UTRIE2_LSCP_INDEX_2_OFFSET$1 + UTRIE2_LSCP_INDEX_2_LENGTH$1;
var UTRIE2_UTF8_2B_INDEX_2_OFFSET$1 = UTRIE2_INDEX_2_BMP_LENGTH$1;
var UTRIE2_UTF8_2B_INDEX_2_LENGTH$1 = 2048 >> 6;
var UTRIE2_INDEX_1_OFFSET$1 = UTRIE2_UTF8_2B_INDEX_2_OFFSET$1 + UTRIE2_UTF8_2B_INDEX_2_LENGTH$1;
var UTRIE2_OMITTED_BMP_INDEX_1_LENGTH$1 = 65536 >> UTRIE2_SHIFT_1$1;
var UTRIE2_INDEX_2_BLOCK_LENGTH$1 = 1 << UTRIE2_SHIFT_1_2$1;
var UTRIE2_INDEX_2_MASK$1 = UTRIE2_INDEX_2_BLOCK_LENGTH$1 - 1;
var slice16$1 = function(view, start, end) {
  if (view.slice) {
    return view.slice(start, end);
  }
  return new Uint16Array(Array.prototype.slice.call(view, start, end));
};
var slice32$1 = function(view, start, end) {
  if (view.slice) {
    return view.slice(start, end);
  }
  return new Uint32Array(Array.prototype.slice.call(view, start, end));
};
var createTrieFromBase64$1 = function(base642, _byteLength) {
  var buffer = decode$1(base642);
  var view32 = Array.isArray(buffer) ? polyUint32Array$1(buffer) : new Uint32Array(buffer);
  var view16 = Array.isArray(buffer) ? polyUint16Array$1(buffer) : new Uint16Array(buffer);
  var headerLength = 24;
  var index = slice16$1(view16, headerLength / 2, view32[4] / 2);
  var data = view32[5] === 2 ? slice16$1(view16, (headerLength + view32[4]) / 2) : slice32$1(view32, Math.ceil((headerLength + view32[4]) / 4));
  return new Trie$1(view32[0], view32[1], view32[2], view32[3], index, data);
};
var Trie$1 = (
  /** @class */
  function() {
    function Trie2(initialValue, errorValue, highStart, highValueIndex, index, data) {
      this.initialValue = initialValue;
      this.errorValue = errorValue;
      this.highStart = highStart;
      this.highValueIndex = highValueIndex;
      this.index = index;
      this.data = data;
    }
    Trie2.prototype.get = function(codePoint) {
      var ix;
      if (codePoint >= 0) {
        if (codePoint < 55296 || codePoint > 56319 && codePoint <= 65535) {
          ix = this.index[codePoint >> UTRIE2_SHIFT_2$1];
          ix = (ix << UTRIE2_INDEX_SHIFT$1) + (codePoint & UTRIE2_DATA_MASK$1);
          return this.data[ix];
        }
        if (codePoint <= 65535) {
          ix = this.index[UTRIE2_LSCP_INDEX_2_OFFSET$1 + (codePoint - 55296 >> UTRIE2_SHIFT_2$1)];
          ix = (ix << UTRIE2_INDEX_SHIFT$1) + (codePoint & UTRIE2_DATA_MASK$1);
          return this.data[ix];
        }
        if (codePoint < this.highStart) {
          ix = UTRIE2_INDEX_1_OFFSET$1 - UTRIE2_OMITTED_BMP_INDEX_1_LENGTH$1 + (codePoint >> UTRIE2_SHIFT_1$1);
          ix = this.index[ix];
          ix += codePoint >> UTRIE2_SHIFT_2$1 & UTRIE2_INDEX_2_MASK$1;
          ix = this.index[ix];
          ix = (ix << UTRIE2_INDEX_SHIFT$1) + (codePoint & UTRIE2_DATA_MASK$1);
          return this.data[ix];
        }
        if (codePoint <= 1114111) {
          return this.data[this.highValueIndex];
        }
      }
      return this.errorValue;
    };
    return Trie2;
  }()
);
var chars$3 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var lookup$3 = typeof Uint8Array === "undefined" ? [] : new Uint8Array(256);
for (i$3 = 0; i$3 < chars$3.length; i$3++) {
  lookup$3[chars$3.charCodeAt(i$3)] = i$3;
}
var i$3;
var base64$1 = "KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA==";
var LETTER_NUMBER_MODIFIER = 50;
var BK = 1;
var CR$1 = 2;
var LF$1 = 3;
var CM = 4;
var NL = 5;
var WJ = 7;
var ZW = 8;
var GL = 9;
var SP = 10;
var ZWJ$1 = 11;
var B2 = 12;
var BA = 13;
var BB = 14;
var HY = 15;
var CB = 16;
var CL = 17;
var CP = 18;
var EX = 19;
var IN = 20;
var NS = 21;
var OP = 22;
var QU = 23;
var IS = 24;
var NU = 25;
var PO = 26;
var PR = 27;
var SY = 28;
var AI = 29;
var AL = 30;
var CJ = 31;
var EB = 32;
var EM = 33;
var H2 = 34;
var H3 = 35;
var HL = 36;
var ID = 37;
var JL = 38;
var JV = 39;
var JT = 40;
var RI$1 = 41;
var SA = 42;
var XX = 43;
var ea_OP = [9001, 65288];
var BREAK_MANDATORY = "!";
var BREAK_NOT_ALLOWED$1 = "×";
var BREAK_ALLOWED$1 = "÷";
var UnicodeTrie$1 = createTrieFromBase64$1(base64$1);
var ALPHABETICS = [AL, HL];
var HARD_LINE_BREAKS = [BK, CR$1, LF$1, NL];
var SPACE$1 = [SP, ZW];
var PREFIX_POSTFIX = [PR, PO];
var LINE_BREAKS = HARD_LINE_BREAKS.concat(SPACE$1);
var KOREAN_SYLLABLE_BLOCK = [JL, JV, JT, H2, H3];
var HYPHEN = [HY, BA];
var codePointsToCharacterClasses = function(codePoints, lineBreak2) {
  if (lineBreak2 === void 0) {
    lineBreak2 = "strict";
  }
  var types = [];
  var indices = [];
  var categories = [];
  codePoints.forEach(function(codePoint, index) {
    var classType = UnicodeTrie$1.get(codePoint);
    if (classType > LETTER_NUMBER_MODIFIER) {
      categories.push(true);
      classType -= LETTER_NUMBER_MODIFIER;
    } else {
      categories.push(false);
    }
    if (["normal", "auto", "loose"].indexOf(lineBreak2) !== -1) {
      if ([8208, 8211, 12316, 12448].indexOf(codePoint) !== -1) {
        indices.push(index);
        return types.push(CB);
      }
    }
    if (classType === CM || classType === ZWJ$1) {
      if (index === 0) {
        indices.push(index);
        return types.push(AL);
      }
      var prev = types[index - 1];
      if (LINE_BREAKS.indexOf(prev) === -1) {
        indices.push(indices[index - 1]);
        return types.push(prev);
      }
      indices.push(index);
      return types.push(AL);
    }
    indices.push(index);
    if (classType === CJ) {
      return types.push(lineBreak2 === "strict" ? NS : ID);
    }
    if (classType === SA) {
      return types.push(AL);
    }
    if (classType === AI) {
      return types.push(AL);
    }
    if (classType === XX) {
      if (codePoint >= 131072 && codePoint <= 196605 || codePoint >= 196608 && codePoint <= 262141) {
        return types.push(ID);
      } else {
        return types.push(AL);
      }
    }
    types.push(classType);
  });
  return [indices, types, categories];
};
var isAdjacentWithSpaceIgnored = function(a2, b, currentIndex, classTypes) {
  var current = classTypes[currentIndex];
  if (Array.isArray(a2) ? a2.indexOf(current) !== -1 : a2 === current) {
    var i = currentIndex;
    while (i <= classTypes.length) {
      i++;
      var next = classTypes[i];
      if (next === b) {
        return true;
      }
      if (next !== SP) {
        break;
      }
    }
  }
  if (current === SP) {
    var i = currentIndex;
    while (i > 0) {
      i--;
      var prev = classTypes[i];
      if (Array.isArray(a2) ? a2.indexOf(prev) !== -1 : a2 === prev) {
        var n = currentIndex;
        while (n <= classTypes.length) {
          n++;
          var next = classTypes[n];
          if (next === b) {
            return true;
          }
          if (next !== SP) {
            break;
          }
        }
      }
      if (prev !== SP) {
        break;
      }
    }
  }
  return false;
};
var previousNonSpaceClassType = function(currentIndex, classTypes) {
  var i = currentIndex;
  while (i >= 0) {
    var type = classTypes[i];
    if (type === SP) {
      i--;
    } else {
      return type;
    }
  }
  return 0;
};
var _lineBreakAtIndex = function(codePoints, classTypes, indicies, index, forbiddenBreaks) {
  if (indicies[index] === 0) {
    return BREAK_NOT_ALLOWED$1;
  }
  var currentIndex = index - 1;
  if (Array.isArray(forbiddenBreaks) && forbiddenBreaks[currentIndex] === true) {
    return BREAK_NOT_ALLOWED$1;
  }
  var beforeIndex = currentIndex - 1;
  var afterIndex = currentIndex + 1;
  var current = classTypes[currentIndex];
  var before = beforeIndex >= 0 ? classTypes[beforeIndex] : 0;
  var next = classTypes[afterIndex];
  if (current === CR$1 && next === LF$1) {
    return BREAK_NOT_ALLOWED$1;
  }
  if (HARD_LINE_BREAKS.indexOf(current) !== -1) {
    return BREAK_MANDATORY;
  }
  if (HARD_LINE_BREAKS.indexOf(next) !== -1) {
    return BREAK_NOT_ALLOWED$1;
  }
  if (SPACE$1.indexOf(next) !== -1) {
    return BREAK_NOT_ALLOWED$1;
  }
  if (previousNonSpaceClassType(currentIndex, classTypes) === ZW) {
    return BREAK_ALLOWED$1;
  }
  if (UnicodeTrie$1.get(codePoints[currentIndex]) === ZWJ$1) {
    return BREAK_NOT_ALLOWED$1;
  }
  if ((current === EB || current === EM) && UnicodeTrie$1.get(codePoints[afterIndex]) === ZWJ$1) {
    return BREAK_NOT_ALLOWED$1;
  }
  if (current === WJ || next === WJ) {
    return BREAK_NOT_ALLOWED$1;
  }
  if (current === GL) {
    return BREAK_NOT_ALLOWED$1;
  }
  if ([SP, BA, HY].indexOf(current) === -1 && next === GL) {
    return BREAK_NOT_ALLOWED$1;
  }
  if ([CL, CP, EX, IS, SY].indexOf(next) !== -1) {
    return BREAK_NOT_ALLOWED$1;
  }
  if (previousNonSpaceClassType(currentIndex, classTypes) === OP) {
    return BREAK_NOT_ALLOWED$1;
  }
  if (isAdjacentWithSpaceIgnored(QU, OP, currentIndex, classTypes)) {
    return BREAK_NOT_ALLOWED$1;
  }
  if (isAdjacentWithSpaceIgnored([CL, CP], NS, currentIndex, classTypes)) {
    return BREAK_NOT_ALLOWED$1;
  }
  if (isAdjacentWithSpaceIgnored(B2, B2, currentIndex, classTypes)) {
    return BREAK_NOT_ALLOWED$1;
  }
  if (current === SP) {
    return BREAK_ALLOWED$1;
  }
  if (current === QU || next === QU) {
    return BREAK_NOT_ALLOWED$1;
  }
  if (next === CB || current === CB) {
    return BREAK_ALLOWED$1;
  }
  if ([BA, HY, NS].indexOf(next) !== -1 || current === BB) {
    return BREAK_NOT_ALLOWED$1;
  }
  if (before === HL && HYPHEN.indexOf(current) !== -1) {
    return BREAK_NOT_ALLOWED$1;
  }
  if (current === SY && next === HL) {
    return BREAK_NOT_ALLOWED$1;
  }
  if (next === IN) {
    return BREAK_NOT_ALLOWED$1;
  }
  if (ALPHABETICS.indexOf(next) !== -1 && current === NU || ALPHABETICS.indexOf(current) !== -1 && next === NU) {
    return BREAK_NOT_ALLOWED$1;
  }
  if (current === PR && [ID, EB, EM].indexOf(next) !== -1 || [ID, EB, EM].indexOf(current) !== -1 && next === PO) {
    return BREAK_NOT_ALLOWED$1;
  }
  if (ALPHABETICS.indexOf(current) !== -1 && PREFIX_POSTFIX.indexOf(next) !== -1 || PREFIX_POSTFIX.indexOf(current) !== -1 && ALPHABETICS.indexOf(next) !== -1) {
    return BREAK_NOT_ALLOWED$1;
  }
  if (
    // (PR | PO) × ( OP | HY )? NU
    [PR, PO].indexOf(current) !== -1 && (next === NU || [OP, HY].indexOf(next) !== -1 && classTypes[afterIndex + 1] === NU) || // ( OP | HY ) × NU
    [OP, HY].indexOf(current) !== -1 && next === NU || // NU ×	(NU | SY | IS)
    current === NU && [NU, SY, IS].indexOf(next) !== -1
  ) {
    return BREAK_NOT_ALLOWED$1;
  }
  if ([NU, SY, IS, CL, CP].indexOf(next) !== -1) {
    var prevIndex = currentIndex;
    while (prevIndex >= 0) {
      var type = classTypes[prevIndex];
      if (type === NU) {
        return BREAK_NOT_ALLOWED$1;
      } else if ([SY, IS].indexOf(type) !== -1) {
        prevIndex--;
      } else {
        break;
      }
    }
  }
  if ([PR, PO].indexOf(next) !== -1) {
    var prevIndex = [CL, CP].indexOf(current) !== -1 ? beforeIndex : currentIndex;
    while (prevIndex >= 0) {
      var type = classTypes[prevIndex];
      if (type === NU) {
        return BREAK_NOT_ALLOWED$1;
      } else if ([SY, IS].indexOf(type) !== -1) {
        prevIndex--;
      } else {
        break;
      }
    }
  }
  if (JL === current && [JL, JV, H2, H3].indexOf(next) !== -1 || [JV, H2].indexOf(current) !== -1 && [JV, JT].indexOf(next) !== -1 || [JT, H3].indexOf(current) !== -1 && next === JT) {
    return BREAK_NOT_ALLOWED$1;
  }
  if (KOREAN_SYLLABLE_BLOCK.indexOf(current) !== -1 && [IN, PO].indexOf(next) !== -1 || KOREAN_SYLLABLE_BLOCK.indexOf(next) !== -1 && current === PR) {
    return BREAK_NOT_ALLOWED$1;
  }
  if (ALPHABETICS.indexOf(current) !== -1 && ALPHABETICS.indexOf(next) !== -1) {
    return BREAK_NOT_ALLOWED$1;
  }
  if (current === IS && ALPHABETICS.indexOf(next) !== -1) {
    return BREAK_NOT_ALLOWED$1;
  }
  if (ALPHABETICS.concat(NU).indexOf(current) !== -1 && next === OP && ea_OP.indexOf(codePoints[afterIndex]) === -1 || ALPHABETICS.concat(NU).indexOf(next) !== -1 && current === CP) {
    return BREAK_NOT_ALLOWED$1;
  }
  if (current === RI$1 && next === RI$1) {
    var i = indicies[currentIndex];
    var count = 1;
    while (i > 0) {
      i--;
      if (classTypes[i] === RI$1) {
        count++;
      } else {
        break;
      }
    }
    if (count % 2 !== 0) {
      return BREAK_NOT_ALLOWED$1;
    }
  }
  if (current === EB && next === EM) {
    return BREAK_NOT_ALLOWED$1;
  }
  return BREAK_ALLOWED$1;
};
var cssFormattedClasses = function(codePoints, options) {
  if (!options) {
    options = { lineBreak: "normal", wordBreak: "normal" };
  }
  var _a = codePointsToCharacterClasses(codePoints, options.lineBreak), indicies = _a[0], classTypes = _a[1], isLetterNumber = _a[2];
  if (options.wordBreak === "break-all" || options.wordBreak === "break-word") {
    classTypes = classTypes.map(function(type) {
      return [NU, AL, SA].indexOf(type) !== -1 ? ID : type;
    });
  }
  var forbiddenBreakpoints = options.wordBreak === "keep-all" ? isLetterNumber.map(function(letterNumber, i) {
    return letterNumber && codePoints[i] >= 19968 && codePoints[i] <= 40959;
  }) : void 0;
  return [indicies, classTypes, forbiddenBreakpoints];
};
var Break = (
  /** @class */
  function() {
    function Break2(codePoints, lineBreak2, start, end) {
      this.codePoints = codePoints;
      this.required = lineBreak2 === BREAK_MANDATORY;
      this.start = start;
      this.end = end;
    }
    Break2.prototype.slice = function() {
      return fromCodePoint$1.apply(void 0, this.codePoints.slice(this.start, this.end));
    };
    return Break2;
  }()
);
var LineBreaker = function(str, options) {
  var codePoints = toCodePoints$1(str);
  var _a = cssFormattedClasses(codePoints, options), indicies = _a[0], classTypes = _a[1], forbiddenBreakpoints = _a[2];
  var length = codePoints.length;
  var lastEnd = 0;
  var nextIndex = 0;
  return {
    next: function() {
      if (nextIndex >= length) {
        return { done: true, value: null };
      }
      var lineBreak2 = BREAK_NOT_ALLOWED$1;
      while (nextIndex < length && (lineBreak2 = _lineBreakAtIndex(codePoints, classTypes, indicies, ++nextIndex, forbiddenBreakpoints)) === BREAK_NOT_ALLOWED$1) {
      }
      if (lineBreak2 !== BREAK_NOT_ALLOWED$1 || nextIndex === length) {
        var value = new Break(codePoints, lineBreak2, lastEnd, nextIndex);
        lastEnd = nextIndex;
        return { value, done: false };
      }
      return { done: true, value: null };
    }
  };
};
var FLAG_UNRESTRICTED = 1 << 0;
var FLAG_ID = 1 << 1;
var FLAG_INTEGER = 1 << 2;
var FLAG_NUMBER = 1 << 3;
var LINE_FEED = 10;
var SOLIDUS = 47;
var REVERSE_SOLIDUS = 92;
var CHARACTER_TABULATION = 9;
var SPACE = 32;
var QUOTATION_MARK = 34;
var EQUALS_SIGN = 61;
var NUMBER_SIGN = 35;
var DOLLAR_SIGN = 36;
var PERCENTAGE_SIGN = 37;
var APOSTROPHE = 39;
var LEFT_PARENTHESIS = 40;
var RIGHT_PARENTHESIS = 41;
var LOW_LINE = 95;
var HYPHEN_MINUS = 45;
var EXCLAMATION_MARK = 33;
var LESS_THAN_SIGN = 60;
var GREATER_THAN_SIGN = 62;
var COMMERCIAL_AT = 64;
var LEFT_SQUARE_BRACKET = 91;
var RIGHT_SQUARE_BRACKET = 93;
var CIRCUMFLEX_ACCENT = 61;
var LEFT_CURLY_BRACKET = 123;
var QUESTION_MARK = 63;
var RIGHT_CURLY_BRACKET = 125;
var VERTICAL_LINE = 124;
var TILDE = 126;
var CONTROL = 128;
var REPLACEMENT_CHARACTER = 65533;
var ASTERISK = 42;
var PLUS_SIGN = 43;
var COMMA = 44;
var COLON = 58;
var SEMICOLON = 59;
var FULL_STOP = 46;
var NULL = 0;
var BACKSPACE = 8;
var LINE_TABULATION = 11;
var SHIFT_OUT = 14;
var INFORMATION_SEPARATOR_ONE = 31;
var DELETE = 127;
var EOF = -1;
var ZERO = 48;
var a = 97;
var e = 101;
var f = 102;
var u = 117;
var z = 122;
var A = 65;
var E = 69;
var F = 70;
var U = 85;
var Z = 90;
var isDigit = function(codePoint) {
  return codePoint >= ZERO && codePoint <= 57;
};
var isSurrogateCodePoint = function(codePoint) {
  return codePoint >= 55296 && codePoint <= 57343;
};
var isHex = function(codePoint) {
  return isDigit(codePoint) || codePoint >= A && codePoint <= F || codePoint >= a && codePoint <= f;
};
var isLowerCaseLetter = function(codePoint) {
  return codePoint >= a && codePoint <= z;
};
var isUpperCaseLetter = function(codePoint) {
  return codePoint >= A && codePoint <= Z;
};
var isLetter = function(codePoint) {
  return isLowerCaseLetter(codePoint) || isUpperCaseLetter(codePoint);
};
var isNonASCIICodePoint = function(codePoint) {
  return codePoint >= CONTROL;
};
var isWhiteSpace = function(codePoint) {
  return codePoint === LINE_FEED || codePoint === CHARACTER_TABULATION || codePoint === SPACE;
};
var isNameStartCodePoint = function(codePoint) {
  return isLetter(codePoint) || isNonASCIICodePoint(codePoint) || codePoint === LOW_LINE;
};
var isNameCodePoint = function(codePoint) {
  return isNameStartCodePoint(codePoint) || isDigit(codePoint) || codePoint === HYPHEN_MINUS;
};
var isNonPrintableCodePoint = function(codePoint) {
  return codePoint >= NULL && codePoint <= BACKSPACE || codePoint === LINE_TABULATION || codePoint >= SHIFT_OUT && codePoint <= INFORMATION_SEPARATOR_ONE || codePoint === DELETE;
};
var isValidEscape = function(c1, c2) {
  if (c1 !== REVERSE_SOLIDUS) {
    return false;
  }
  return c2 !== LINE_FEED;
};
var isIdentifierStart = function(c1, c2, c3) {
  if (c1 === HYPHEN_MINUS) {
    return isNameStartCodePoint(c2) || isValidEscape(c2, c3);
  } else if (isNameStartCodePoint(c1)) {
    return true;
  } else if (c1 === REVERSE_SOLIDUS && isValidEscape(c1, c2)) {
    return true;
  }
  return false;
};
var isNumberStart = function(c1, c2, c3) {
  if (c1 === PLUS_SIGN || c1 === HYPHEN_MINUS) {
    if (isDigit(c2)) {
      return true;
    }
    return c2 === FULL_STOP && isDigit(c3);
  }
  if (c1 === FULL_STOP) {
    return isDigit(c2);
  }
  return isDigit(c1);
};
var stringToNumber = function(codePoints) {
  var c = 0;
  var sign = 1;
  if (codePoints[c] === PLUS_SIGN || codePoints[c] === HYPHEN_MINUS) {
    if (codePoints[c] === HYPHEN_MINUS) {
      sign = -1;
    }
    c++;
  }
  var integers = [];
  while (isDigit(codePoints[c])) {
    integers.push(codePoints[c++]);
  }
  var int = integers.length ? parseInt(fromCodePoint$1.apply(void 0, integers), 10) : 0;
  if (codePoints[c] === FULL_STOP) {
    c++;
  }
  var fraction = [];
  while (isDigit(codePoints[c])) {
    fraction.push(codePoints[c++]);
  }
  var fracd = fraction.length;
  var frac = fracd ? parseInt(fromCodePoint$1.apply(void 0, fraction), 10) : 0;
  if (codePoints[c] === E || codePoints[c] === e) {
    c++;
  }
  var expsign = 1;
  if (codePoints[c] === PLUS_SIGN || codePoints[c] === HYPHEN_MINUS) {
    if (codePoints[c] === HYPHEN_MINUS) {
      expsign = -1;
    }
    c++;
  }
  var exponent = [];
  while (isDigit(codePoints[c])) {
    exponent.push(codePoints[c++]);
  }
  var exp = exponent.length ? parseInt(fromCodePoint$1.apply(void 0, exponent), 10) : 0;
  return sign * (int + frac * Math.pow(10, -fracd)) * Math.pow(10, expsign * exp);
};
var LEFT_PARENTHESIS_TOKEN = {
  type: 2
  /* LEFT_PARENTHESIS_TOKEN */
};
var RIGHT_PARENTHESIS_TOKEN = {
  type: 3
  /* RIGHT_PARENTHESIS_TOKEN */
};
var COMMA_TOKEN = {
  type: 4
  /* COMMA_TOKEN */
};
var SUFFIX_MATCH_TOKEN = {
  type: 13
  /* SUFFIX_MATCH_TOKEN */
};
var PREFIX_MATCH_TOKEN = {
  type: 8
  /* PREFIX_MATCH_TOKEN */
};
var COLUMN_TOKEN = {
  type: 21
  /* COLUMN_TOKEN */
};
var DASH_MATCH_TOKEN = {
  type: 9
  /* DASH_MATCH_TOKEN */
};
var INCLUDE_MATCH_TOKEN = {
  type: 10
  /* INCLUDE_MATCH_TOKEN */
};
var LEFT_CURLY_BRACKET_TOKEN = {
  type: 11
  /* LEFT_CURLY_BRACKET_TOKEN */
};
var RIGHT_CURLY_BRACKET_TOKEN = {
  type: 12
  /* RIGHT_CURLY_BRACKET_TOKEN */
};
var SUBSTRING_MATCH_TOKEN = {
  type: 14
  /* SUBSTRING_MATCH_TOKEN */
};
var BAD_URL_TOKEN = {
  type: 23
  /* BAD_URL_TOKEN */
};
var BAD_STRING_TOKEN = {
  type: 1
  /* BAD_STRING_TOKEN */
};
var CDO_TOKEN = {
  type: 25
  /* CDO_TOKEN */
};
var CDC_TOKEN = {
  type: 24
  /* CDC_TOKEN */
};
var COLON_TOKEN = {
  type: 26
  /* COLON_TOKEN */
};
var SEMICOLON_TOKEN = {
  type: 27
  /* SEMICOLON_TOKEN */
};
var LEFT_SQUARE_BRACKET_TOKEN = {
  type: 28
  /* LEFT_SQUARE_BRACKET_TOKEN */
};
var RIGHT_SQUARE_BRACKET_TOKEN = {
  type: 29
  /* RIGHT_SQUARE_BRACKET_TOKEN */
};
var WHITESPACE_TOKEN = {
  type: 31
  /* WHITESPACE_TOKEN */
};
var EOF_TOKEN = {
  type: 32
  /* EOF_TOKEN */
};
var Tokenizer = (
  /** @class */
  function() {
    function Tokenizer2() {
      this._value = [];
    }
    Tokenizer2.prototype.write = function(chunk) {
      this._value = this._value.concat(toCodePoints$1(chunk));
    };
    Tokenizer2.prototype.read = function() {
      var tokens = [];
      var token = this.consumeToken();
      while (token !== EOF_TOKEN) {
        tokens.push(token);
        token = this.consumeToken();
      }
      return tokens;
    };
    Tokenizer2.prototype.consumeToken = function() {
      var codePoint = this.consumeCodePoint();
      switch (codePoint) {
        case QUOTATION_MARK:
          return this.consumeStringToken(QUOTATION_MARK);
        case NUMBER_SIGN:
          var c1 = this.peekCodePoint(0);
          var c2 = this.peekCodePoint(1);
          var c3 = this.peekCodePoint(2);
          if (isNameCodePoint(c1) || isValidEscape(c2, c3)) {
            var flags = isIdentifierStart(c1, c2, c3) ? FLAG_ID : FLAG_UNRESTRICTED;
            var value = this.consumeName();
            return { type: 5, value, flags };
          }
          break;
        case DOLLAR_SIGN:
          if (this.peekCodePoint(0) === EQUALS_SIGN) {
            this.consumeCodePoint();
            return SUFFIX_MATCH_TOKEN;
          }
          break;
        case APOSTROPHE:
          return this.consumeStringToken(APOSTROPHE);
        case LEFT_PARENTHESIS:
          return LEFT_PARENTHESIS_TOKEN;
        case RIGHT_PARENTHESIS:
          return RIGHT_PARENTHESIS_TOKEN;
        case ASTERISK:
          if (this.peekCodePoint(0) === EQUALS_SIGN) {
            this.consumeCodePoint();
            return SUBSTRING_MATCH_TOKEN;
          }
          break;
        case PLUS_SIGN:
          if (isNumberStart(codePoint, this.peekCodePoint(0), this.peekCodePoint(1))) {
            this.reconsumeCodePoint(codePoint);
            return this.consumeNumericToken();
          }
          break;
        case COMMA:
          return COMMA_TOKEN;
        case HYPHEN_MINUS:
          var e1 = codePoint;
          var e2 = this.peekCodePoint(0);
          var e3 = this.peekCodePoint(1);
          if (isNumberStart(e1, e2, e3)) {
            this.reconsumeCodePoint(codePoint);
            return this.consumeNumericToken();
          }
          if (isIdentifierStart(e1, e2, e3)) {
            this.reconsumeCodePoint(codePoint);
            return this.consumeIdentLikeToken();
          }
          if (e2 === HYPHEN_MINUS && e3 === GREATER_THAN_SIGN) {
            this.consumeCodePoint();
            this.consumeCodePoint();
            return CDC_TOKEN;
          }
          break;
        case FULL_STOP:
          if (isNumberStart(codePoint, this.peekCodePoint(0), this.peekCodePoint(1))) {
            this.reconsumeCodePoint(codePoint);
            return this.consumeNumericToken();
          }
          break;
        case SOLIDUS:
          if (this.peekCodePoint(0) === ASTERISK) {
            this.consumeCodePoint();
            while (true) {
              var c = this.consumeCodePoint();
              if (c === ASTERISK) {
                c = this.consumeCodePoint();
                if (c === SOLIDUS) {
                  return this.consumeToken();
                }
              }
              if (c === EOF) {
                return this.consumeToken();
              }
            }
          }
          break;
        case COLON:
          return COLON_TOKEN;
        case SEMICOLON:
          return SEMICOLON_TOKEN;
        case LESS_THAN_SIGN:
          if (this.peekCodePoint(0) === EXCLAMATION_MARK && this.peekCodePoint(1) === HYPHEN_MINUS && this.peekCodePoint(2) === HYPHEN_MINUS) {
            this.consumeCodePoint();
            this.consumeCodePoint();
            return CDO_TOKEN;
          }
          break;
        case COMMERCIAL_AT:
          var a1 = this.peekCodePoint(0);
          var a2 = this.peekCodePoint(1);
          var a3 = this.peekCodePoint(2);
          if (isIdentifierStart(a1, a2, a3)) {
            var value = this.consumeName();
            return { type: 7, value };
          }
          break;
        case LEFT_SQUARE_BRACKET:
          return LEFT_SQUARE_BRACKET_TOKEN;
        case REVERSE_SOLIDUS:
          if (isValidEscape(codePoint, this.peekCodePoint(0))) {
            this.reconsumeCodePoint(codePoint);
            return this.consumeIdentLikeToken();
          }
          break;
        case RIGHT_SQUARE_BRACKET:
          return RIGHT_SQUARE_BRACKET_TOKEN;
        case CIRCUMFLEX_ACCENT:
          if (this.peekCodePoint(0) === EQUALS_SIGN) {
            this.consumeCodePoint();
            return PREFIX_MATCH_TOKEN;
          }
          break;
        case LEFT_CURLY_BRACKET:
          return LEFT_CURLY_BRACKET_TOKEN;
        case RIGHT_CURLY_BRACKET:
          return RIGHT_CURLY_BRACKET_TOKEN;
        case u:
        case U:
          var u1 = this.peekCodePoint(0);
          var u22 = this.peekCodePoint(1);
          if (u1 === PLUS_SIGN && (isHex(u22) || u22 === QUESTION_MARK)) {
            this.consumeCodePoint();
            this.consumeUnicodeRangeToken();
          }
          this.reconsumeCodePoint(codePoint);
          return this.consumeIdentLikeToken();
        case VERTICAL_LINE:
          if (this.peekCodePoint(0) === EQUALS_SIGN) {
            this.consumeCodePoint();
            return DASH_MATCH_TOKEN;
          }
          if (this.peekCodePoint(0) === VERTICAL_LINE) {
            this.consumeCodePoint();
            return COLUMN_TOKEN;
          }
          break;
        case TILDE:
          if (this.peekCodePoint(0) === EQUALS_SIGN) {
            this.consumeCodePoint();
            return INCLUDE_MATCH_TOKEN;
          }
          break;
        case EOF:
          return EOF_TOKEN;
      }
      if (isWhiteSpace(codePoint)) {
        this.consumeWhiteSpace();
        return WHITESPACE_TOKEN;
      }
      if (isDigit(codePoint)) {
        this.reconsumeCodePoint(codePoint);
        return this.consumeNumericToken();
      }
      if (isNameStartCodePoint(codePoint)) {
        this.reconsumeCodePoint(codePoint);
        return this.consumeIdentLikeToken();
      }
      return { type: 6, value: fromCodePoint$1(codePoint) };
    };
    Tokenizer2.prototype.consumeCodePoint = function() {
      var value = this._value.shift();
      return typeof value === "undefined" ? -1 : value;
    };
    Tokenizer2.prototype.reconsumeCodePoint = function(codePoint) {
      this._value.unshift(codePoint);
    };
    Tokenizer2.prototype.peekCodePoint = function(delta) {
      if (delta >= this._value.length) {
        return -1;
      }
      return this._value[delta];
    };
    Tokenizer2.prototype.consumeUnicodeRangeToken = function() {
      var digits = [];
      var codePoint = this.consumeCodePoint();
      while (isHex(codePoint) && digits.length < 6) {
        digits.push(codePoint);
        codePoint = this.consumeCodePoint();
      }
      var questionMarks = false;
      while (codePoint === QUESTION_MARK && digits.length < 6) {
        digits.push(codePoint);
        codePoint = this.consumeCodePoint();
        questionMarks = true;
      }
      if (questionMarks) {
        var start_1 = parseInt(fromCodePoint$1.apply(void 0, digits.map(function(digit) {
          return digit === QUESTION_MARK ? ZERO : digit;
        })), 16);
        var end = parseInt(fromCodePoint$1.apply(void 0, digits.map(function(digit) {
          return digit === QUESTION_MARK ? F : digit;
        })), 16);
        return { type: 30, start: start_1, end };
      }
      var start = parseInt(fromCodePoint$1.apply(void 0, digits), 16);
      if (this.peekCodePoint(0) === HYPHEN_MINUS && isHex(this.peekCodePoint(1))) {
        this.consumeCodePoint();
        codePoint = this.consumeCodePoint();
        var endDigits = [];
        while (isHex(codePoint) && endDigits.length < 6) {
          endDigits.push(codePoint);
          codePoint = this.consumeCodePoint();
        }
        var end = parseInt(fromCodePoint$1.apply(void 0, endDigits), 16);
        return { type: 30, start, end };
      } else {
        return { type: 30, start, end: start };
      }
    };
    Tokenizer2.prototype.consumeIdentLikeToken = function() {
      var value = this.consumeName();
      if (value.toLowerCase() === "url" && this.peekCodePoint(0) === LEFT_PARENTHESIS) {
        this.consumeCodePoint();
        return this.consumeUrlToken();
      } else if (this.peekCodePoint(0) === LEFT_PARENTHESIS) {
        this.consumeCodePoint();
        return { type: 19, value };
      }
      return { type: 20, value };
    };
    Tokenizer2.prototype.consumeUrlToken = function() {
      var value = [];
      this.consumeWhiteSpace();
      if (this.peekCodePoint(0) === EOF) {
        return { type: 22, value: "" };
      }
      var next = this.peekCodePoint(0);
      if (next === APOSTROPHE || next === QUOTATION_MARK) {
        var stringToken = this.consumeStringToken(this.consumeCodePoint());
        if (stringToken.type === 0) {
          this.consumeWhiteSpace();
          if (this.peekCodePoint(0) === EOF || this.peekCodePoint(0) === RIGHT_PARENTHESIS) {
            this.consumeCodePoint();
            return { type: 22, value: stringToken.value };
          }
        }
        this.consumeBadUrlRemnants();
        return BAD_URL_TOKEN;
      }
      while (true) {
        var codePoint = this.consumeCodePoint();
        if (codePoint === EOF || codePoint === RIGHT_PARENTHESIS) {
          return { type: 22, value: fromCodePoint$1.apply(void 0, value) };
        } else if (isWhiteSpace(codePoint)) {
          this.consumeWhiteSpace();
          if (this.peekCodePoint(0) === EOF || this.peekCodePoint(0) === RIGHT_PARENTHESIS) {
            this.consumeCodePoint();
            return { type: 22, value: fromCodePoint$1.apply(void 0, value) };
          }
          this.consumeBadUrlRemnants();
          return BAD_URL_TOKEN;
        } else if (codePoint === QUOTATION_MARK || codePoint === APOSTROPHE || codePoint === LEFT_PARENTHESIS || isNonPrintableCodePoint(codePoint)) {
          this.consumeBadUrlRemnants();
          return BAD_URL_TOKEN;
        } else if (codePoint === REVERSE_SOLIDUS) {
          if (isValidEscape(codePoint, this.peekCodePoint(0))) {
            value.push(this.consumeEscapedCodePoint());
          } else {
            this.consumeBadUrlRemnants();
            return BAD_URL_TOKEN;
          }
        } else {
          value.push(codePoint);
        }
      }
    };
    Tokenizer2.prototype.consumeWhiteSpace = function() {
      while (isWhiteSpace(this.peekCodePoint(0))) {
        this.consumeCodePoint();
      }
    };
    Tokenizer2.prototype.consumeBadUrlRemnants = function() {
      while (true) {
        var codePoint = this.consumeCodePoint();
        if (codePoint === RIGHT_PARENTHESIS || codePoint === EOF) {
          return;
        }
        if (isValidEscape(codePoint, this.peekCodePoint(0))) {
          this.consumeEscapedCodePoint();
        }
      }
    };
    Tokenizer2.prototype.consumeStringSlice = function(count) {
      var SLICE_STACK_SIZE = 5e4;
      var value = "";
      while (count > 0) {
        var amount = Math.min(SLICE_STACK_SIZE, count);
        value += fromCodePoint$1.apply(void 0, this._value.splice(0, amount));
        count -= amount;
      }
      this._value.shift();
      return value;
    };
    Tokenizer2.prototype.consumeStringToken = function(endingCodePoint) {
      var value = "";
      var i = 0;
      do {
        var codePoint = this._value[i];
        if (codePoint === EOF || codePoint === void 0 || codePoint === endingCodePoint) {
          value += this.consumeStringSlice(i);
          return { type: 0, value };
        }
        if (codePoint === LINE_FEED) {
          this._value.splice(0, i);
          return BAD_STRING_TOKEN;
        }
        if (codePoint === REVERSE_SOLIDUS) {
          var next = this._value[i + 1];
          if (next !== EOF && next !== void 0) {
            if (next === LINE_FEED) {
              value += this.consumeStringSlice(i);
              i = -1;
              this._value.shift();
            } else if (isValidEscape(codePoint, next)) {
              value += this.consumeStringSlice(i);
              value += fromCodePoint$1(this.consumeEscapedCodePoint());
              i = -1;
            }
          }
        }
        i++;
      } while (true);
    };
    Tokenizer2.prototype.consumeNumber = function() {
      var repr = [];
      var type = FLAG_INTEGER;
      var c1 = this.peekCodePoint(0);
      if (c1 === PLUS_SIGN || c1 === HYPHEN_MINUS) {
        repr.push(this.consumeCodePoint());
      }
      while (isDigit(this.peekCodePoint(0))) {
        repr.push(this.consumeCodePoint());
      }
      c1 = this.peekCodePoint(0);
      var c2 = this.peekCodePoint(1);
      if (c1 === FULL_STOP && isDigit(c2)) {
        repr.push(this.consumeCodePoint(), this.consumeCodePoint());
        type = FLAG_NUMBER;
        while (isDigit(this.peekCodePoint(0))) {
          repr.push(this.consumeCodePoint());
        }
      }
      c1 = this.peekCodePoint(0);
      c2 = this.peekCodePoint(1);
      var c3 = this.peekCodePoint(2);
      if ((c1 === E || c1 === e) && ((c2 === PLUS_SIGN || c2 === HYPHEN_MINUS) && isDigit(c3) || isDigit(c2))) {
        repr.push(this.consumeCodePoint(), this.consumeCodePoint());
        type = FLAG_NUMBER;
        while (isDigit(this.peekCodePoint(0))) {
          repr.push(this.consumeCodePoint());
        }
      }
      return [stringToNumber(repr), type];
    };
    Tokenizer2.prototype.consumeNumericToken = function() {
      var _a = this.consumeNumber(), number = _a[0], flags = _a[1];
      var c1 = this.peekCodePoint(0);
      var c2 = this.peekCodePoint(1);
      var c3 = this.peekCodePoint(2);
      if (isIdentifierStart(c1, c2, c3)) {
        var unit = this.consumeName();
        return { type: 15, number, flags, unit };
      }
      if (c1 === PERCENTAGE_SIGN) {
        this.consumeCodePoint();
        return { type: 16, number, flags };
      }
      return { type: 17, number, flags };
    };
    Tokenizer2.prototype.consumeEscapedCodePoint = function() {
      var codePoint = this.consumeCodePoint();
      if (isHex(codePoint)) {
        var hex = fromCodePoint$1(codePoint);
        while (isHex(this.peekCodePoint(0)) && hex.length < 6) {
          hex += fromCodePoint$1(this.consumeCodePoint());
        }
        if (isWhiteSpace(this.peekCodePoint(0))) {
          this.consumeCodePoint();
        }
        var hexCodePoint = parseInt(hex, 16);
        if (hexCodePoint === 0 || isSurrogateCodePoint(hexCodePoint) || hexCodePoint > 1114111) {
          return REPLACEMENT_CHARACTER;
        }
        return hexCodePoint;
      }
      if (codePoint === EOF) {
        return REPLACEMENT_CHARACTER;
      }
      return codePoint;
    };
    Tokenizer2.prototype.consumeName = function() {
      var result = "";
      while (true) {
        var codePoint = this.consumeCodePoint();
        if (isNameCodePoint(codePoint)) {
          result += fromCodePoint$1(codePoint);
        } else if (isValidEscape(codePoint, this.peekCodePoint(0))) {
          result += fromCodePoint$1(this.consumeEscapedCodePoint());
        } else {
          this.reconsumeCodePoint(codePoint);
          return result;
        }
      }
    };
    return Tokenizer2;
  }()
);
var Parser = (
  /** @class */
  function() {
    function Parser2(tokens) {
      this._tokens = tokens;
    }
    Parser2.create = function(value) {
      var tokenizer = new Tokenizer();
      tokenizer.write(value);
      return new Parser2(tokenizer.read());
    };
    Parser2.parseValue = function(value) {
      return Parser2.create(value).parseComponentValue();
    };
    Parser2.parseValues = function(value) {
      return Parser2.create(value).parseComponentValues();
    };
    Parser2.prototype.parseComponentValue = function() {
      var token = this.consumeToken();
      while (token.type === 31) {
        token = this.consumeToken();
      }
      if (token.type === 32) {
        throw new SyntaxError("Error parsing CSS component value, unexpected EOF");
      }
      this.reconsumeToken(token);
      var value = this.consumeComponentValue();
      do {
        token = this.consumeToken();
      } while (token.type === 31);
      if (token.type === 32) {
        return value;
      }
      throw new SyntaxError("Error parsing CSS component value, multiple values found when expecting only one");
    };
    Parser2.prototype.parseComponentValues = function() {
      var values = [];
      while (true) {
        var value = this.consumeComponentValue();
        if (value.type === 32) {
          return values;
        }
        values.push(value);
        values.push();
      }
    };
    Parser2.prototype.consumeComponentValue = function() {
      var token = this.consumeToken();
      switch (token.type) {
        case 11:
        case 28:
        case 2:
          return this.consumeSimpleBlock(token.type);
        case 19:
          return this.consumeFunction(token);
      }
      return token;
    };
    Parser2.prototype.consumeSimpleBlock = function(type) {
      var block = { type, values: [] };
      var token = this.consumeToken();
      while (true) {
        if (token.type === 32 || isEndingTokenFor(token, type)) {
          return block;
        }
        this.reconsumeToken(token);
        block.values.push(this.consumeComponentValue());
        token = this.consumeToken();
      }
    };
    Parser2.prototype.consumeFunction = function(functionToken) {
      var cssFunction = {
        name: functionToken.value,
        values: [],
        type: 18
        /* FUNCTION */
      };
      while (true) {
        var token = this.consumeToken();
        if (token.type === 32 || token.type === 3) {
          return cssFunction;
        }
        this.reconsumeToken(token);
        cssFunction.values.push(this.consumeComponentValue());
      }
    };
    Parser2.prototype.consumeToken = function() {
      var token = this._tokens.shift();
      return typeof token === "undefined" ? EOF_TOKEN : token;
    };
    Parser2.prototype.reconsumeToken = function(token) {
      this._tokens.unshift(token);
    };
    return Parser2;
  }()
);
var isDimensionToken = function(token) {
  return token.type === 15;
};
var isNumberToken = function(token) {
  return token.type === 17;
};
var isIdentToken = function(token) {
  return token.type === 20;
};
var isStringToken = function(token) {
  return token.type === 0;
};
var isIdentWithValue = function(token, value) {
  return isIdentToken(token) && token.value === value;
};
var nonWhiteSpace = function(token) {
  return token.type !== 31;
};
var nonFunctionArgSeparator = function(token) {
  return token.type !== 31 && token.type !== 4;
};
var parseFunctionArgs = function(tokens) {
  var args = [];
  var arg = [];
  tokens.forEach(function(token) {
    if (token.type === 4) {
      if (arg.length === 0) {
        throw new Error("Error parsing function args, zero tokens for arg");
      }
      args.push(arg);
      arg = [];
      return;
    }
    if (token.type !== 31) {
      arg.push(token);
    }
  });
  if (arg.length) {
    args.push(arg);
  }
  return args;
};
var isEndingTokenFor = function(token, type) {
  if (type === 11 && token.type === 12) {
    return true;
  }
  if (type === 28 && token.type === 29) {
    return true;
  }
  return type === 2 && token.type === 3;
};
var isLength = function(token) {
  return token.type === 17 || token.type === 15;
};
var isLengthPercentage = function(token) {
  return token.type === 16 || isLength(token);
};
var parseLengthPercentageTuple = function(tokens) {
  return tokens.length > 1 ? [tokens[0], tokens[1]] : [tokens[0]];
};
var ZERO_LENGTH = {
  type: 17,
  number: 0,
  flags: FLAG_INTEGER
};
var FIFTY_PERCENT = {
  type: 16,
  number: 50,
  flags: FLAG_INTEGER
};
var HUNDRED_PERCENT = {
  type: 16,
  number: 100,
  flags: FLAG_INTEGER
};
var getAbsoluteValueForTuple = function(tuple, width, height) {
  var x = tuple[0], y = tuple[1];
  return [getAbsoluteValue(x, width), getAbsoluteValue(typeof y !== "undefined" ? y : x, height)];
};
var getAbsoluteValue = function(token, parent) {
  if (token.type === 16) {
    return token.number / 100 * parent;
  }
  if (isDimensionToken(token)) {
    switch (token.unit) {
      case "rem":
      case "em":
        return 16 * token.number;
      case "px":
      default:
        return token.number;
    }
  }
  return token.number;
};
var DEG = "deg";
var GRAD = "grad";
var RAD = "rad";
var TURN = "turn";
var angle = {
  name: "angle",
  parse: function(_context, value) {
    if (value.type === 15) {
      switch (value.unit) {
        case DEG:
          return Math.PI * value.number / 180;
        case GRAD:
          return Math.PI / 200 * value.number;
        case RAD:
          return value.number;
        case TURN:
          return Math.PI * 2 * value.number;
      }
    }
    throw new Error("Unsupported angle type");
  }
};
var isAngle = function(value) {
  if (value.type === 15) {
    if (value.unit === DEG || value.unit === GRAD || value.unit === RAD || value.unit === TURN) {
      return true;
    }
  }
  return false;
};
var parseNamedSide = function(tokens) {
  var sideOrCorner = tokens.filter(isIdentToken).map(function(ident) {
    return ident.value;
  }).join(" ");
  switch (sideOrCorner) {
    case "to bottom right":
    case "to right bottom":
    case "left top":
    case "top left":
      return [ZERO_LENGTH, ZERO_LENGTH];
    case "to top":
    case "bottom":
      return deg(0);
    case "to bottom left":
    case "to left bottom":
    case "right top":
    case "top right":
      return [ZERO_LENGTH, HUNDRED_PERCENT];
    case "to right":
    case "left":
      return deg(90);
    case "to top left":
    case "to left top":
    case "right bottom":
    case "bottom right":
      return [HUNDRED_PERCENT, HUNDRED_PERCENT];
    case "to bottom":
    case "top":
      return deg(180);
    case "to top right":
    case "to right top":
    case "left bottom":
    case "bottom left":
      return [HUNDRED_PERCENT, ZERO_LENGTH];
    case "to left":
    case "right":
      return deg(270);
  }
  return 0;
};
var deg = function(deg2) {
  return Math.PI * deg2 / 180;
};
var color$1 = {
  name: "color",
  parse: function(context, value) {
    if (value.type === 18) {
      var colorFunction = SUPPORTED_COLOR_FUNCTIONS[value.name];
      if (typeof colorFunction === "undefined") {
        throw new Error('Attempting to parse an unsupported color function "' + value.name + '"');
      }
      return colorFunction(context, value.values);
    }
    if (value.type === 5) {
      if (value.value.length === 3) {
        var r = value.value.substring(0, 1);
        var g = value.value.substring(1, 2);
        var b = value.value.substring(2, 3);
        return pack(parseInt(r + r, 16), parseInt(g + g, 16), parseInt(b + b, 16), 1);
      }
      if (value.value.length === 4) {
        var r = value.value.substring(0, 1);
        var g = value.value.substring(1, 2);
        var b = value.value.substring(2, 3);
        var a2 = value.value.substring(3, 4);
        return pack(parseInt(r + r, 16), parseInt(g + g, 16), parseInt(b + b, 16), parseInt(a2 + a2, 16) / 255);
      }
      if (value.value.length === 6) {
        var r = value.value.substring(0, 2);
        var g = value.value.substring(2, 4);
        var b = value.value.substring(4, 6);
        return pack(parseInt(r, 16), parseInt(g, 16), parseInt(b, 16), 1);
      }
      if (value.value.length === 8) {
        var r = value.value.substring(0, 2);
        var g = value.value.substring(2, 4);
        var b = value.value.substring(4, 6);
        var a2 = value.value.substring(6, 8);
        return pack(parseInt(r, 16), parseInt(g, 16), parseInt(b, 16), parseInt(a2, 16) / 255);
      }
    }
    if (value.type === 20) {
      var namedColor = COLORS[value.value.toUpperCase()];
      if (typeof namedColor !== "undefined") {
        return namedColor;
      }
    }
    return COLORS.TRANSPARENT;
  }
};
var isTransparent = function(color2) {
  return (255 & color2) === 0;
};
var asString = function(color2) {
  var alpha = 255 & color2;
  var blue = 255 & color2 >> 8;
  var green = 255 & color2 >> 16;
  var red = 255 & color2 >> 24;
  return alpha < 255 ? "rgba(" + red + "," + green + "," + blue + "," + alpha / 255 + ")" : "rgb(" + red + "," + green + "," + blue + ")";
};
var pack = function(r, g, b, a2) {
  return (r << 24 | g << 16 | b << 8 | Math.round(a2 * 255) << 0) >>> 0;
};
var getTokenColorValue = function(token, i) {
  if (token.type === 17) {
    return token.number;
  }
  if (token.type === 16) {
    var max = i === 3 ? 1 : 255;
    return i === 3 ? token.number / 100 * max : Math.round(token.number / 100 * max);
  }
  return 0;
};
var rgb = function(_context, args) {
  var tokens = args.filter(nonFunctionArgSeparator);
  if (tokens.length === 3) {
    var _a = tokens.map(getTokenColorValue), r = _a[0], g = _a[1], b = _a[2];
    return pack(r, g, b, 1);
  }
  if (tokens.length === 4) {
    var _b = tokens.map(getTokenColorValue), r = _b[0], g = _b[1], b = _b[2], a2 = _b[3];
    return pack(r, g, b, a2);
  }
  return 0;
};
function hue2rgb(t1, t2, hue) {
  if (hue < 0) {
    hue += 1;
  }
  if (hue >= 1) {
    hue -= 1;
  }
  if (hue < 1 / 6) {
    return (t2 - t1) * hue * 6 + t1;
  } else if (hue < 1 / 2) {
    return t2;
  } else if (hue < 2 / 3) {
    return (t2 - t1) * 6 * (2 / 3 - hue) + t1;
  } else {
    return t1;
  }
}
var hsl = function(context, args) {
  var tokens = args.filter(nonFunctionArgSeparator);
  var hue = tokens[0], saturation = tokens[1], lightness = tokens[2], alpha = tokens[3];
  var h = (hue.type === 17 ? deg(hue.number) : angle.parse(context, hue)) / (Math.PI * 2);
  var s = isLengthPercentage(saturation) ? saturation.number / 100 : 0;
  var l = isLengthPercentage(lightness) ? lightness.number / 100 : 0;
  var a2 = typeof alpha !== "undefined" && isLengthPercentage(alpha) ? getAbsoluteValue(alpha, 1) : 1;
  if (s === 0) {
    return pack(l * 255, l * 255, l * 255, 1);
  }
  var t2 = l <= 0.5 ? l * (s + 1) : l + s - l * s;
  var t1 = l * 2 - t2;
  var r = hue2rgb(t1, t2, h + 1 / 3);
  var g = hue2rgb(t1, t2, h);
  var b = hue2rgb(t1, t2, h - 1 / 3);
  return pack(r * 255, g * 255, b * 255, a2);
};
var SUPPORTED_COLOR_FUNCTIONS = {
  hsl,
  hsla: hsl,
  rgb,
  rgba: rgb
};
var parseColor = function(context, value) {
  return color$1.parse(context, Parser.create(value).parseComponentValue());
};
var COLORS = {
  ALICEBLUE: 4042850303,
  ANTIQUEWHITE: 4209760255,
  AQUA: 16777215,
  AQUAMARINE: 2147472639,
  AZURE: 4043309055,
  BEIGE: 4126530815,
  BISQUE: 4293182719,
  BLACK: 255,
  BLANCHEDALMOND: 4293643775,
  BLUE: 65535,
  BLUEVIOLET: 2318131967,
  BROWN: 2771004159,
  BURLYWOOD: 3736635391,
  CADETBLUE: 1604231423,
  CHARTREUSE: 2147418367,
  CHOCOLATE: 3530104575,
  CORAL: 4286533887,
  CORNFLOWERBLUE: 1687547391,
  CORNSILK: 4294499583,
  CRIMSON: 3692313855,
  CYAN: 16777215,
  DARKBLUE: 35839,
  DARKCYAN: 9145343,
  DARKGOLDENROD: 3095837695,
  DARKGRAY: 2846468607,
  DARKGREEN: 6553855,
  DARKGREY: 2846468607,
  DARKKHAKI: 3182914559,
  DARKMAGENTA: 2332068863,
  DARKOLIVEGREEN: 1433087999,
  DARKORANGE: 4287365375,
  DARKORCHID: 2570243327,
  DARKRED: 2332033279,
  DARKSALMON: 3918953215,
  DARKSEAGREEN: 2411499519,
  DARKSLATEBLUE: 1211993087,
  DARKSLATEGRAY: 793726975,
  DARKSLATEGREY: 793726975,
  DARKTURQUOISE: 13554175,
  DARKVIOLET: 2483082239,
  DEEPPINK: 4279538687,
  DEEPSKYBLUE: 12582911,
  DIMGRAY: 1768516095,
  DIMGREY: 1768516095,
  DODGERBLUE: 512819199,
  FIREBRICK: 2988581631,
  FLORALWHITE: 4294635775,
  FORESTGREEN: 579543807,
  FUCHSIA: 4278255615,
  GAINSBORO: 3705462015,
  GHOSTWHITE: 4177068031,
  GOLD: 4292280575,
  GOLDENROD: 3668254975,
  GRAY: 2155905279,
  GREEN: 8388863,
  GREENYELLOW: 2919182335,
  GREY: 2155905279,
  HONEYDEW: 4043305215,
  HOTPINK: 4285117695,
  INDIANRED: 3445382399,
  INDIGO: 1258324735,
  IVORY: 4294963455,
  KHAKI: 4041641215,
  LAVENDER: 3873897215,
  LAVENDERBLUSH: 4293981695,
  LAWNGREEN: 2096890111,
  LEMONCHIFFON: 4294626815,
  LIGHTBLUE: 2916673279,
  LIGHTCORAL: 4034953471,
  LIGHTCYAN: 3774873599,
  LIGHTGOLDENRODYELLOW: 4210742015,
  LIGHTGRAY: 3553874943,
  LIGHTGREEN: 2431553791,
  LIGHTGREY: 3553874943,
  LIGHTPINK: 4290167295,
  LIGHTSALMON: 4288707327,
  LIGHTSEAGREEN: 548580095,
  LIGHTSKYBLUE: 2278488831,
  LIGHTSLATEGRAY: 2005441023,
  LIGHTSLATEGREY: 2005441023,
  LIGHTSTEELBLUE: 2965692159,
  LIGHTYELLOW: 4294959359,
  LIME: 16711935,
  LIMEGREEN: 852308735,
  LINEN: 4210091775,
  MAGENTA: 4278255615,
  MAROON: 2147483903,
  MEDIUMAQUAMARINE: 1724754687,
  MEDIUMBLUE: 52735,
  MEDIUMORCHID: 3126187007,
  MEDIUMPURPLE: 2473647103,
  MEDIUMSEAGREEN: 1018393087,
  MEDIUMSLATEBLUE: 2070474495,
  MEDIUMSPRINGGREEN: 16423679,
  MEDIUMTURQUOISE: 1221709055,
  MEDIUMVIOLETRED: 3340076543,
  MIDNIGHTBLUE: 421097727,
  MINTCREAM: 4127193855,
  MISTYROSE: 4293190143,
  MOCCASIN: 4293178879,
  NAVAJOWHITE: 4292783615,
  NAVY: 33023,
  OLDLACE: 4260751103,
  OLIVE: 2155872511,
  OLIVEDRAB: 1804477439,
  ORANGE: 4289003775,
  ORANGERED: 4282712319,
  ORCHID: 3664828159,
  PALEGOLDENROD: 4008225535,
  PALEGREEN: 2566625535,
  PALETURQUOISE: 2951671551,
  PALEVIOLETRED: 3681588223,
  PAPAYAWHIP: 4293907967,
  PEACHPUFF: 4292524543,
  PERU: 3448061951,
  PINK: 4290825215,
  PLUM: 3718307327,
  POWDERBLUE: 2967529215,
  PURPLE: 2147516671,
  REBECCAPURPLE: 1714657791,
  RED: 4278190335,
  ROSYBROWN: 3163525119,
  ROYALBLUE: 1097458175,
  SADDLEBROWN: 2336560127,
  SALMON: 4202722047,
  SANDYBROWN: 4104413439,
  SEAGREEN: 780883967,
  SEASHELL: 4294307583,
  SIENNA: 2689740287,
  SILVER: 3233857791,
  SKYBLUE: 2278484991,
  SLATEBLUE: 1784335871,
  SLATEGRAY: 1887473919,
  SLATEGREY: 1887473919,
  SNOW: 4294638335,
  SPRINGGREEN: 16744447,
  STEELBLUE: 1182971135,
  TAN: 3535047935,
  TEAL: 8421631,
  THISTLE: 3636451583,
  TOMATO: 4284696575,
  TRANSPARENT: 0,
  TURQUOISE: 1088475391,
  VIOLET: 4001558271,
  WHEAT: 4125012991,
  WHITE: 4294967295,
  WHITESMOKE: 4126537215,
  YELLOW: 4294902015,
  YELLOWGREEN: 2597139199
};
var backgroundClip = {
  name: "background-clip",
  initialValue: "border-box",
  prefix: false,
  type: 1,
  parse: function(_context, tokens) {
    return tokens.map(function(token) {
      if (isIdentToken(token)) {
        switch (token.value) {
          case "padding-box":
            return 1;
          case "content-box":
            return 2;
        }
      }
      return 0;
    });
  }
};
var backgroundColor = {
  name: "background-color",
  initialValue: "transparent",
  prefix: false,
  type: 3,
  format: "color"
};
var parseColorStop = function(context, args) {
  var color2 = color$1.parse(context, args[0]);
  var stop = args[1];
  return stop && isLengthPercentage(stop) ? { color: color2, stop } : { color: color2, stop: null };
};
var processColorStops = function(stops, lineLength) {
  var first = stops[0];
  var last = stops[stops.length - 1];
  if (first.stop === null) {
    first.stop = ZERO_LENGTH;
  }
  if (last.stop === null) {
    last.stop = HUNDRED_PERCENT;
  }
  var processStops = [];
  var previous = 0;
  for (var i = 0; i < stops.length; i++) {
    var stop_1 = stops[i].stop;
    if (stop_1 !== null) {
      var absoluteValue = getAbsoluteValue(stop_1, lineLength);
      if (absoluteValue > previous) {
        processStops.push(absoluteValue);
      } else {
        processStops.push(previous);
      }
      previous = absoluteValue;
    } else {
      processStops.push(null);
    }
  }
  var gapBegin = null;
  for (var i = 0; i < processStops.length; i++) {
    var stop_2 = processStops[i];
    if (stop_2 === null) {
      if (gapBegin === null) {
        gapBegin = i;
      }
    } else if (gapBegin !== null) {
      var gapLength = i - gapBegin;
      var beforeGap = processStops[gapBegin - 1];
      var gapValue = (stop_2 - beforeGap) / (gapLength + 1);
      for (var g = 1; g <= gapLength; g++) {
        processStops[gapBegin + g - 1] = gapValue * g;
      }
      gapBegin = null;
    }
  }
  return stops.map(function(_a, i2) {
    var color2 = _a.color;
    return { color: color2, stop: Math.max(Math.min(1, processStops[i2] / lineLength), 0) };
  });
};
var getAngleFromCorner = function(corner, width, height) {
  var centerX = width / 2;
  var centerY = height / 2;
  var x = getAbsoluteValue(corner[0], width) - centerX;
  var y = centerY - getAbsoluteValue(corner[1], height);
  return (Math.atan2(y, x) + Math.PI * 2) % (Math.PI * 2);
};
var calculateGradientDirection = function(angle2, width, height) {
  var radian = typeof angle2 === "number" ? angle2 : getAngleFromCorner(angle2, width, height);
  var lineLength = Math.abs(width * Math.sin(radian)) + Math.abs(height * Math.cos(radian));
  var halfWidth = width / 2;
  var halfHeight = height / 2;
  var halfLineLength = lineLength / 2;
  var yDiff = Math.sin(radian - Math.PI / 2) * halfLineLength;
  var xDiff = Math.cos(radian - Math.PI / 2) * halfLineLength;
  return [lineLength, halfWidth - xDiff, halfWidth + xDiff, halfHeight - yDiff, halfHeight + yDiff];
};
var distance = function(a2, b) {
  return Math.sqrt(a2 * a2 + b * b);
};
var findCorner = function(width, height, x, y, closest) {
  var corners = [
    [0, 0],
    [0, height],
    [width, 0],
    [width, height]
  ];
  return corners.reduce(function(stat, corner) {
    var cx = corner[0], cy = corner[1];
    var d = distance(x - cx, y - cy);
    if (closest ? d < stat.optimumDistance : d > stat.optimumDistance) {
      return {
        optimumCorner: corner,
        optimumDistance: d
      };
    }
    return stat;
  }, {
    optimumDistance: closest ? Infinity : -Infinity,
    optimumCorner: null
  }).optimumCorner;
};
var calculateRadius = function(gradient, x, y, width, height) {
  var rx = 0;
  var ry = 0;
  switch (gradient.size) {
    case 0:
      if (gradient.shape === 0) {
        rx = ry = Math.min(Math.abs(x), Math.abs(x - width), Math.abs(y), Math.abs(y - height));
      } else if (gradient.shape === 1) {
        rx = Math.min(Math.abs(x), Math.abs(x - width));
        ry = Math.min(Math.abs(y), Math.abs(y - height));
      }
      break;
    case 2:
      if (gradient.shape === 0) {
        rx = ry = Math.min(distance(x, y), distance(x, y - height), distance(x - width, y), distance(x - width, y - height));
      } else if (gradient.shape === 1) {
        var c = Math.min(Math.abs(y), Math.abs(y - height)) / Math.min(Math.abs(x), Math.abs(x - width));
        var _a = findCorner(width, height, x, y, true), cx = _a[0], cy = _a[1];
        rx = distance(cx - x, (cy - y) / c);
        ry = c * rx;
      }
      break;
    case 1:
      if (gradient.shape === 0) {
        rx = ry = Math.max(Math.abs(x), Math.abs(x - width), Math.abs(y), Math.abs(y - height));
      } else if (gradient.shape === 1) {
        rx = Math.max(Math.abs(x), Math.abs(x - width));
        ry = Math.max(Math.abs(y), Math.abs(y - height));
      }
      break;
    case 3:
      if (gradient.shape === 0) {
        rx = ry = Math.max(distance(x, y), distance(x, y - height), distance(x - width, y), distance(x - width, y - height));
      } else if (gradient.shape === 1) {
        var c = Math.max(Math.abs(y), Math.abs(y - height)) / Math.max(Math.abs(x), Math.abs(x - width));
        var _b = findCorner(width, height, x, y, false), cx = _b[0], cy = _b[1];
        rx = distance(cx - x, (cy - y) / c);
        ry = c * rx;
      }
      break;
  }
  if (Array.isArray(gradient.size)) {
    rx = getAbsoluteValue(gradient.size[0], width);
    ry = gradient.size.length === 2 ? getAbsoluteValue(gradient.size[1], height) : rx;
  }
  return [rx, ry];
};
var linearGradient = function(context, tokens) {
  var angle$1 = deg(180);
  var stops = [];
  parseFunctionArgs(tokens).forEach(function(arg, i) {
    if (i === 0) {
      var firstToken = arg[0];
      if (firstToken.type === 20 && firstToken.value === "to") {
        angle$1 = parseNamedSide(arg);
        return;
      } else if (isAngle(firstToken)) {
        angle$1 = angle.parse(context, firstToken);
        return;
      }
    }
    var colorStop = parseColorStop(context, arg);
    stops.push(colorStop);
  });
  return {
    angle: angle$1,
    stops,
    type: 1
    /* LINEAR_GRADIENT */
  };
};
var prefixLinearGradient = function(context, tokens) {
  var angle$1 = deg(180);
  var stops = [];
  parseFunctionArgs(tokens).forEach(function(arg, i) {
    if (i === 0) {
      var firstToken = arg[0];
      if (firstToken.type === 20 && ["top", "left", "right", "bottom"].indexOf(firstToken.value) !== -1) {
        angle$1 = parseNamedSide(arg);
        return;
      } else if (isAngle(firstToken)) {
        angle$1 = (angle.parse(context, firstToken) + deg(270)) % deg(360);
        return;
      }
    }
    var colorStop = parseColorStop(context, arg);
    stops.push(colorStop);
  });
  return {
    angle: angle$1,
    stops,
    type: 1
    /* LINEAR_GRADIENT */
  };
};
var webkitGradient = function(context, tokens) {
  var angle2 = deg(180);
  var stops = [];
  var type = 1;
  var shape = 0;
  var size = 3;
  var position2 = [];
  parseFunctionArgs(tokens).forEach(function(arg, i) {
    var firstToken = arg[0];
    if (i === 0) {
      if (isIdentToken(firstToken) && firstToken.value === "linear") {
        type = 1;
        return;
      } else if (isIdentToken(firstToken) && firstToken.value === "radial") {
        type = 2;
        return;
      }
    }
    if (firstToken.type === 18) {
      if (firstToken.name === "from") {
        var color2 = color$1.parse(context, firstToken.values[0]);
        stops.push({ stop: ZERO_LENGTH, color: color2 });
      } else if (firstToken.name === "to") {
        var color2 = color$1.parse(context, firstToken.values[0]);
        stops.push({ stop: HUNDRED_PERCENT, color: color2 });
      } else if (firstToken.name === "color-stop") {
        var values = firstToken.values.filter(nonFunctionArgSeparator);
        if (values.length === 2) {
          var color2 = color$1.parse(context, values[1]);
          var stop_1 = values[0];
          if (isNumberToken(stop_1)) {
            stops.push({
              stop: { type: 16, number: stop_1.number * 100, flags: stop_1.flags },
              color: color2
            });
          }
        }
      }
    }
  });
  return type === 1 ? {
    angle: (angle2 + deg(180)) % deg(360),
    stops,
    type
  } : { size, shape, stops, position: position2, type };
};
var CLOSEST_SIDE = "closest-side";
var FARTHEST_SIDE = "farthest-side";
var CLOSEST_CORNER = "closest-corner";
var FARTHEST_CORNER = "farthest-corner";
var CIRCLE = "circle";
var ELLIPSE = "ellipse";
var COVER = "cover";
var CONTAIN = "contain";
var radialGradient = function(context, tokens) {
  var shape = 0;
  var size = 3;
  var stops = [];
  var position2 = [];
  parseFunctionArgs(tokens).forEach(function(arg, i) {
    var isColorStop = true;
    if (i === 0) {
      var isAtPosition_1 = false;
      isColorStop = arg.reduce(function(acc, token) {
        if (isAtPosition_1) {
          if (isIdentToken(token)) {
            switch (token.value) {
              case "center":
                position2.push(FIFTY_PERCENT);
                return acc;
              case "top":
              case "left":
                position2.push(ZERO_LENGTH);
                return acc;
              case "right":
              case "bottom":
                position2.push(HUNDRED_PERCENT);
                return acc;
            }
          } else if (isLengthPercentage(token) || isLength(token)) {
            position2.push(token);
          }
        } else if (isIdentToken(token)) {
          switch (token.value) {
            case CIRCLE:
              shape = 0;
              return false;
            case ELLIPSE:
              shape = 1;
              return false;
            case "at":
              isAtPosition_1 = true;
              return false;
            case CLOSEST_SIDE:
              size = 0;
              return false;
            case COVER:
            case FARTHEST_SIDE:
              size = 1;
              return false;
            case CONTAIN:
            case CLOSEST_CORNER:
              size = 2;
              return false;
            case FARTHEST_CORNER:
              size = 3;
              return false;
          }
        } else if (isLength(token) || isLengthPercentage(token)) {
          if (!Array.isArray(size)) {
            size = [];
          }
          size.push(token);
          return false;
        }
        return acc;
      }, isColorStop);
    }
    if (isColorStop) {
      var colorStop = parseColorStop(context, arg);
      stops.push(colorStop);
    }
  });
  return {
    size,
    shape,
    stops,
    position: position2,
    type: 2
    /* RADIAL_GRADIENT */
  };
};
var prefixRadialGradient = function(context, tokens) {
  var shape = 0;
  var size = 3;
  var stops = [];
  var position2 = [];
  parseFunctionArgs(tokens).forEach(function(arg, i) {
    var isColorStop = true;
    if (i === 0) {
      isColorStop = arg.reduce(function(acc, token) {
        if (isIdentToken(token)) {
          switch (token.value) {
            case "center":
              position2.push(FIFTY_PERCENT);
              return false;
            case "top":
            case "left":
              position2.push(ZERO_LENGTH);
              return false;
            case "right":
            case "bottom":
              position2.push(HUNDRED_PERCENT);
              return false;
          }
        } else if (isLengthPercentage(token) || isLength(token)) {
          position2.push(token);
          return false;
        }
        return acc;
      }, isColorStop);
    } else if (i === 1) {
      isColorStop = arg.reduce(function(acc, token) {
        if (isIdentToken(token)) {
          switch (token.value) {
            case CIRCLE:
              shape = 0;
              return false;
            case ELLIPSE:
              shape = 1;
              return false;
            case CONTAIN:
            case CLOSEST_SIDE:
              size = 0;
              return false;
            case FARTHEST_SIDE:
              size = 1;
              return false;
            case CLOSEST_CORNER:
              size = 2;
              return false;
            case COVER:
            case FARTHEST_CORNER:
              size = 3;
              return false;
          }
        } else if (isLength(token) || isLengthPercentage(token)) {
          if (!Array.isArray(size)) {
            size = [];
          }
          size.push(token);
          return false;
        }
        return acc;
      }, isColorStop);
    }
    if (isColorStop) {
      var colorStop = parseColorStop(context, arg);
      stops.push(colorStop);
    }
  });
  return {
    size,
    shape,
    stops,
    position: position2,
    type: 2
    /* RADIAL_GRADIENT */
  };
};
var isLinearGradient = function(background) {
  return background.type === 1;
};
var isRadialGradient = function(background) {
  return background.type === 2;
};
var image = {
  name: "image",
  parse: function(context, value) {
    if (value.type === 22) {
      var image_1 = {
        url: value.value,
        type: 0
        /* URL */
      };
      context.cache.addImage(value.value);
      return image_1;
    }
    if (value.type === 18) {
      var imageFunction = SUPPORTED_IMAGE_FUNCTIONS[value.name];
      if (typeof imageFunction === "undefined") {
        throw new Error('Attempting to parse an unsupported image function "' + value.name + '"');
      }
      return imageFunction(context, value.values);
    }
    throw new Error("Unsupported image type " + value.type);
  }
};
function isSupportedImage(value) {
  return !(value.type === 20 && value.value === "none") && (value.type !== 18 || !!SUPPORTED_IMAGE_FUNCTIONS[value.name]);
}
var SUPPORTED_IMAGE_FUNCTIONS = {
  "linear-gradient": linearGradient,
  "-moz-linear-gradient": prefixLinearGradient,
  "-ms-linear-gradient": prefixLinearGradient,
  "-o-linear-gradient": prefixLinearGradient,
  "-webkit-linear-gradient": prefixLinearGradient,
  "radial-gradient": radialGradient,
  "-moz-radial-gradient": prefixRadialGradient,
  "-ms-radial-gradient": prefixRadialGradient,
  "-o-radial-gradient": prefixRadialGradient,
  "-webkit-radial-gradient": prefixRadialGradient,
  "-webkit-gradient": webkitGradient
};
var backgroundImage = {
  name: "background-image",
  initialValue: "none",
  type: 1,
  prefix: false,
  parse: function(context, tokens) {
    if (tokens.length === 0) {
      return [];
    }
    var first = tokens[0];
    if (first.type === 20 && first.value === "none") {
      return [];
    }
    return tokens.filter(function(value) {
      return nonFunctionArgSeparator(value) && isSupportedImage(value);
    }).map(function(value) {
      return image.parse(context, value);
    });
  }
};
var backgroundOrigin = {
  name: "background-origin",
  initialValue: "border-box",
  prefix: false,
  type: 1,
  parse: function(_context, tokens) {
    return tokens.map(function(token) {
      if (isIdentToken(token)) {
        switch (token.value) {
          case "padding-box":
            return 1;
          case "content-box":
            return 2;
        }
      }
      return 0;
    });
  }
};
var backgroundPosition = {
  name: "background-position",
  initialValue: "0% 0%",
  type: 1,
  prefix: false,
  parse: function(_context, tokens) {
    return parseFunctionArgs(tokens).map(function(values) {
      return values.filter(isLengthPercentage);
    }).map(parseLengthPercentageTuple);
  }
};
var backgroundRepeat = {
  name: "background-repeat",
  initialValue: "repeat",
  prefix: false,
  type: 1,
  parse: function(_context, tokens) {
    return parseFunctionArgs(tokens).map(function(values) {
      return values.filter(isIdentToken).map(function(token) {
        return token.value;
      }).join(" ");
    }).map(parseBackgroundRepeat);
  }
};
var parseBackgroundRepeat = function(value) {
  switch (value) {
    case "no-repeat":
      return 1;
    case "repeat-x":
    case "repeat no-repeat":
      return 2;
    case "repeat-y":
    case "no-repeat repeat":
      return 3;
    case "repeat":
    default:
      return 0;
  }
};
var BACKGROUND_SIZE;
(function(BACKGROUND_SIZE2) {
  BACKGROUND_SIZE2["AUTO"] = "auto";
  BACKGROUND_SIZE2["CONTAIN"] = "contain";
  BACKGROUND_SIZE2["COVER"] = "cover";
})(BACKGROUND_SIZE || (BACKGROUND_SIZE = {}));
var backgroundSize = {
  name: "background-size",
  initialValue: "0",
  prefix: false,
  type: 1,
  parse: function(_context, tokens) {
    return parseFunctionArgs(tokens).map(function(values) {
      return values.filter(isBackgroundSizeInfoToken);
    });
  }
};
var isBackgroundSizeInfoToken = function(value) {
  return isIdentToken(value) || isLengthPercentage(value);
};
var borderColorForSide = function(side) {
  return {
    name: "border-" + side + "-color",
    initialValue: "transparent",
    prefix: false,
    type: 3,
    format: "color"
  };
};
var borderTopColor = borderColorForSide("top");
var borderRightColor = borderColorForSide("right");
var borderBottomColor = borderColorForSide("bottom");
var borderLeftColor = borderColorForSide("left");
var borderRadiusForSide = function(side) {
  return {
    name: "border-radius-" + side,
    initialValue: "0 0",
    prefix: false,
    type: 1,
    parse: function(_context, tokens) {
      return parseLengthPercentageTuple(tokens.filter(isLengthPercentage));
    }
  };
};
var borderTopLeftRadius = borderRadiusForSide("top-left");
var borderTopRightRadius = borderRadiusForSide("top-right");
var borderBottomRightRadius = borderRadiusForSide("bottom-right");
var borderBottomLeftRadius = borderRadiusForSide("bottom-left");
var borderStyleForSide = function(side) {
  return {
    name: "border-" + side + "-style",
    initialValue: "solid",
    prefix: false,
    type: 2,
    parse: function(_context, style) {
      switch (style) {
        case "none":
          return 0;
        case "dashed":
          return 2;
        case "dotted":
          return 3;
        case "double":
          return 4;
      }
      return 1;
    }
  };
};
var borderTopStyle = borderStyleForSide("top");
var borderRightStyle = borderStyleForSide("right");
var borderBottomStyle = borderStyleForSide("bottom");
var borderLeftStyle = borderStyleForSide("left");
var borderWidthForSide = function(side) {
  return {
    name: "border-" + side + "-width",
    initialValue: "0",
    type: 0,
    prefix: false,
    parse: function(_context, token) {
      if (isDimensionToken(token)) {
        return token.number;
      }
      return 0;
    }
  };
};
var borderTopWidth = borderWidthForSide("top");
var borderRightWidth = borderWidthForSide("right");
var borderBottomWidth = borderWidthForSide("bottom");
var borderLeftWidth = borderWidthForSide("left");
var color = {
  name: "color",
  initialValue: "transparent",
  prefix: false,
  type: 3,
  format: "color"
};
var direction = {
  name: "direction",
  initialValue: "ltr",
  prefix: false,
  type: 2,
  parse: function(_context, direction2) {
    switch (direction2) {
      case "rtl":
        return 1;
      case "ltr":
      default:
        return 0;
    }
  }
};
var display = {
  name: "display",
  initialValue: "inline-block",
  prefix: false,
  type: 1,
  parse: function(_context, tokens) {
    return tokens.filter(isIdentToken).reduce(
      function(bit, token) {
        return bit | parseDisplayValue(token.value);
      },
      0
      /* NONE */
    );
  }
};
var parseDisplayValue = function(display2) {
  switch (display2) {
    case "block":
    case "-webkit-box":
      return 2;
    case "inline":
      return 4;
    case "run-in":
      return 8;
    case "flow":
      return 16;
    case "flow-root":
      return 32;
    case "table":
      return 64;
    case "flex":
    case "-webkit-flex":
      return 128;
    case "grid":
    case "-ms-grid":
      return 256;
    case "ruby":
      return 512;
    case "subgrid":
      return 1024;
    case "list-item":
      return 2048;
    case "table-row-group":
      return 4096;
    case "table-header-group":
      return 8192;
    case "table-footer-group":
      return 16384;
    case "table-row":
      return 32768;
    case "table-cell":
      return 65536;
    case "table-column-group":
      return 131072;
    case "table-column":
      return 262144;
    case "table-caption":
      return 524288;
    case "ruby-base":
      return 1048576;
    case "ruby-text":
      return 2097152;
    case "ruby-base-container":
      return 4194304;
    case "ruby-text-container":
      return 8388608;
    case "contents":
      return 16777216;
    case "inline-block":
      return 33554432;
    case "inline-list-item":
      return 67108864;
    case "inline-table":
      return 134217728;
    case "inline-flex":
      return 268435456;
    case "inline-grid":
      return 536870912;
  }
  return 0;
};
var float = {
  name: "float",
  initialValue: "none",
  prefix: false,
  type: 2,
  parse: function(_context, float2) {
    switch (float2) {
      case "left":
        return 1;
      case "right":
        return 2;
      case "inline-start":
        return 3;
      case "inline-end":
        return 4;
    }
    return 0;
  }
};
var letterSpacing = {
  name: "letter-spacing",
  initialValue: "0",
  prefix: false,
  type: 0,
  parse: function(_context, token) {
    if (token.type === 20 && token.value === "normal") {
      return 0;
    }
    if (token.type === 17) {
      return token.number;
    }
    if (token.type === 15) {
      return token.number;
    }
    return 0;
  }
};
var LINE_BREAK;
(function(LINE_BREAK2) {
  LINE_BREAK2["NORMAL"] = "normal";
  LINE_BREAK2["STRICT"] = "strict";
})(LINE_BREAK || (LINE_BREAK = {}));
var lineBreak = {
  name: "line-break",
  initialValue: "normal",
  prefix: false,
  type: 2,
  parse: function(_context, lineBreak2) {
    switch (lineBreak2) {
      case "strict":
        return LINE_BREAK.STRICT;
      case "normal":
      default:
        return LINE_BREAK.NORMAL;
    }
  }
};
var lineHeight = {
  name: "line-height",
  initialValue: "normal",
  prefix: false,
  type: 4
  /* TOKEN_VALUE */
};
var computeLineHeight = function(token, fontSize2) {
  if (isIdentToken(token) && token.value === "normal") {
    return 1.2 * fontSize2;
  } else if (token.type === 17) {
    return fontSize2 * token.number;
  } else if (isLengthPercentage(token)) {
    return getAbsoluteValue(token, fontSize2);
  }
  return fontSize2;
};
var listStyleImage = {
  name: "list-style-image",
  initialValue: "none",
  type: 0,
  prefix: false,
  parse: function(context, token) {
    if (token.type === 20 && token.value === "none") {
      return null;
    }
    return image.parse(context, token);
  }
};
var listStylePosition = {
  name: "list-style-position",
  initialValue: "outside",
  prefix: false,
  type: 2,
  parse: function(_context, position2) {
    switch (position2) {
      case "inside":
        return 0;
      case "outside":
      default:
        return 1;
    }
  }
};
var listStyleType = {
  name: "list-style-type",
  initialValue: "none",
  prefix: false,
  type: 2,
  parse: function(_context, type) {
    switch (type) {
      case "disc":
        return 0;
      case "circle":
        return 1;
      case "square":
        return 2;
      case "decimal":
        return 3;
      case "cjk-decimal":
        return 4;
      case "decimal-leading-zero":
        return 5;
      case "lower-roman":
        return 6;
      case "upper-roman":
        return 7;
      case "lower-greek":
        return 8;
      case "lower-alpha":
        return 9;
      case "upper-alpha":
        return 10;
      case "arabic-indic":
        return 11;
      case "armenian":
        return 12;
      case "bengali":
        return 13;
      case "cambodian":
        return 14;
      case "cjk-earthly-branch":
        return 15;
      case "cjk-heavenly-stem":
        return 16;
      case "cjk-ideographic":
        return 17;
      case "devanagari":
        return 18;
      case "ethiopic-numeric":
        return 19;
      case "georgian":
        return 20;
      case "gujarati":
        return 21;
      case "gurmukhi":
        return 22;
      case "hebrew":
        return 22;
      case "hiragana":
        return 23;
      case "hiragana-iroha":
        return 24;
      case "japanese-formal":
        return 25;
      case "japanese-informal":
        return 26;
      case "kannada":
        return 27;
      case "katakana":
        return 28;
      case "katakana-iroha":
        return 29;
      case "khmer":
        return 30;
      case "korean-hangul-formal":
        return 31;
      case "korean-hanja-formal":
        return 32;
      case "korean-hanja-informal":
        return 33;
      case "lao":
        return 34;
      case "lower-armenian":
        return 35;
      case "malayalam":
        return 36;
      case "mongolian":
        return 37;
      case "myanmar":
        return 38;
      case "oriya":
        return 39;
      case "persian":
        return 40;
      case "simp-chinese-formal":
        return 41;
      case "simp-chinese-informal":
        return 42;
      case "tamil":
        return 43;
      case "telugu":
        return 44;
      case "thai":
        return 45;
      case "tibetan":
        return 46;
      case "trad-chinese-formal":
        return 47;
      case "trad-chinese-informal":
        return 48;
      case "upper-armenian":
        return 49;
      case "disclosure-open":
        return 50;
      case "disclosure-closed":
        return 51;
      case "none":
      default:
        return -1;
    }
  }
};
var marginForSide = function(side) {
  return {
    name: "margin-" + side,
    initialValue: "0",
    prefix: false,
    type: 4
    /* TOKEN_VALUE */
  };
};
var marginTop = marginForSide("top");
var marginRight = marginForSide("right");
var marginBottom = marginForSide("bottom");
var marginLeft = marginForSide("left");
var overflow = {
  name: "overflow",
  initialValue: "visible",
  prefix: false,
  type: 1,
  parse: function(_context, tokens) {
    return tokens.filter(isIdentToken).map(function(overflow2) {
      switch (overflow2.value) {
        case "hidden":
          return 1;
        case "scroll":
          return 2;
        case "clip":
          return 3;
        case "auto":
          return 4;
        case "visible":
        default:
          return 0;
      }
    });
  }
};
var overflowWrap = {
  name: "overflow-wrap",
  initialValue: "normal",
  prefix: false,
  type: 2,
  parse: function(_context, overflow2) {
    switch (overflow2) {
      case "break-word":
        return "break-word";
      case "normal":
      default:
        return "normal";
    }
  }
};
var paddingForSide = function(side) {
  return {
    name: "padding-" + side,
    initialValue: "0",
    prefix: false,
    type: 3,
    format: "length-percentage"
  };
};
var paddingTop = paddingForSide("top");
var paddingRight = paddingForSide("right");
var paddingBottom = paddingForSide("bottom");
var paddingLeft = paddingForSide("left");
var textAlign = {
  name: "text-align",
  initialValue: "left",
  prefix: false,
  type: 2,
  parse: function(_context, textAlign2) {
    switch (textAlign2) {
      case "right":
        return 2;
      case "center":
      case "justify":
        return 1;
      case "left":
      default:
        return 0;
    }
  }
};
var position = {
  name: "position",
  initialValue: "static",
  prefix: false,
  type: 2,
  parse: function(_context, position2) {
    switch (position2) {
      case "relative":
        return 1;
      case "absolute":
        return 2;
      case "fixed":
        return 3;
      case "sticky":
        return 4;
    }
    return 0;
  }
};
var textShadow = {
  name: "text-shadow",
  initialValue: "none",
  type: 1,
  prefix: false,
  parse: function(context, tokens) {
    if (tokens.length === 1 && isIdentWithValue(tokens[0], "none")) {
      return [];
    }
    return parseFunctionArgs(tokens).map(function(values) {
      var shadow = {
        color: COLORS.TRANSPARENT,
        offsetX: ZERO_LENGTH,
        offsetY: ZERO_LENGTH,
        blur: ZERO_LENGTH
      };
      var c = 0;
      for (var i = 0; i < values.length; i++) {
        var token = values[i];
        if (isLength(token)) {
          if (c === 0) {
            shadow.offsetX = token;
          } else if (c === 1) {
            shadow.offsetY = token;
          } else {
            shadow.blur = token;
          }
          c++;
        } else {
          shadow.color = color$1.parse(context, token);
        }
      }
      return shadow;
    });
  }
};
var textTransform = {
  name: "text-transform",
  initialValue: "none",
  prefix: false,
  type: 2,
  parse: function(_context, textTransform2) {
    switch (textTransform2) {
      case "uppercase":
        return 2;
      case "lowercase":
        return 1;
      case "capitalize":
        return 3;
    }
    return 0;
  }
};
var transform$1 = {
  name: "transform",
  initialValue: "none",
  prefix: true,
  type: 0,
  parse: function(_context, token) {
    if (token.type === 20 && token.value === "none") {
      return null;
    }
    if (token.type === 18) {
      var transformFunction = SUPPORTED_TRANSFORM_FUNCTIONS[token.name];
      if (typeof transformFunction === "undefined") {
        throw new Error('Attempting to parse an unsupported transform function "' + token.name + '"');
      }
      return transformFunction(token.values);
    }
    return null;
  }
};
var matrix = function(args) {
  var values = args.filter(function(arg) {
    return arg.type === 17;
  }).map(function(arg) {
    return arg.number;
  });
  return values.length === 6 ? values : null;
};
var matrix3d = function(args) {
  var values = args.filter(function(arg) {
    return arg.type === 17;
  }).map(function(arg) {
    return arg.number;
  });
  var a1 = values[0], b1 = values[1];
  values[2];
  values[3];
  var a2 = values[4], b2 = values[5];
  values[6];
  values[7];
  values[8];
  values[9];
  values[10];
  values[11];
  var a4 = values[12], b4 = values[13];
  values[14];
  values[15];
  return values.length === 16 ? [a1, b1, a2, b2, a4, b4] : null;
};
var SUPPORTED_TRANSFORM_FUNCTIONS = {
  matrix,
  matrix3d
};
var DEFAULT_VALUE = {
  type: 16,
  number: 50,
  flags: FLAG_INTEGER
};
var DEFAULT = [DEFAULT_VALUE, DEFAULT_VALUE];
var transformOrigin = {
  name: "transform-origin",
  initialValue: "50% 50%",
  prefix: true,
  type: 1,
  parse: function(_context, tokens) {
    var origins = tokens.filter(isLengthPercentage);
    if (origins.length !== 2) {
      return DEFAULT;
    }
    return [origins[0], origins[1]];
  }
};
var visibility = {
  name: "visible",
  initialValue: "none",
  prefix: false,
  type: 2,
  parse: function(_context, visibility2) {
    switch (visibility2) {
      case "hidden":
        return 1;
      case "collapse":
        return 2;
      case "visible":
      default:
        return 0;
    }
  }
};
var WORD_BREAK;
(function(WORD_BREAK2) {
  WORD_BREAK2["NORMAL"] = "normal";
  WORD_BREAK2["BREAK_ALL"] = "break-all";
  WORD_BREAK2["KEEP_ALL"] = "keep-all";
})(WORD_BREAK || (WORD_BREAK = {}));
var wordBreak = {
  name: "word-break",
  initialValue: "normal",
  prefix: false,
  type: 2,
  parse: function(_context, wordBreak2) {
    switch (wordBreak2) {
      case "break-all":
        return WORD_BREAK.BREAK_ALL;
      case "keep-all":
        return WORD_BREAK.KEEP_ALL;
      case "normal":
      default:
        return WORD_BREAK.NORMAL;
    }
  }
};
var zIndex = {
  name: "z-index",
  initialValue: "auto",
  prefix: false,
  type: 0,
  parse: function(_context, token) {
    if (token.type === 20) {
      return { auto: true, order: 0 };
    }
    if (isNumberToken(token)) {
      return { auto: false, order: token.number };
    }
    throw new Error("Invalid z-index number parsed");
  }
};
var time = {
  name: "time",
  parse: function(_context, value) {
    if (value.type === 15) {
      switch (value.unit.toLowerCase()) {
        case "s":
          return 1e3 * value.number;
        case "ms":
          return value.number;
      }
    }
    throw new Error("Unsupported time type");
  }
};
var opacity = {
  name: "opacity",
  initialValue: "1",
  type: 0,
  prefix: false,
  parse: function(_context, token) {
    if (isNumberToken(token)) {
      return token.number;
    }
    return 1;
  }
};
var textDecorationColor = {
  name: "text-decoration-color",
  initialValue: "transparent",
  prefix: false,
  type: 3,
  format: "color"
};
var textDecorationLine = {
  name: "text-decoration-line",
  initialValue: "none",
  prefix: false,
  type: 1,
  parse: function(_context, tokens) {
    return tokens.filter(isIdentToken).map(function(token) {
      switch (token.value) {
        case "underline":
          return 1;
        case "overline":
          return 2;
        case "line-through":
          return 3;
        case "none":
          return 4;
      }
      return 0;
    }).filter(function(line) {
      return line !== 0;
    });
  }
};
var fontFamily = {
  name: "font-family",
  initialValue: "",
  prefix: false,
  type: 1,
  parse: function(_context, tokens) {
    var accumulator = [];
    var results = [];
    tokens.forEach(function(token) {
      switch (token.type) {
        case 20:
        case 0:
          accumulator.push(token.value);
          break;
        case 17:
          accumulator.push(token.number.toString());
          break;
        case 4:
          results.push(accumulator.join(" "));
          accumulator.length = 0;
          break;
      }
    });
    if (accumulator.length) {
      results.push(accumulator.join(" "));
    }
    return results.map(function(result) {
      return result.indexOf(" ") === -1 ? result : "'" + result + "'";
    });
  }
};
var fontSize = {
  name: "font-size",
  initialValue: "0",
  prefix: false,
  type: 3,
  format: "length"
};
var fontWeight = {
  name: "font-weight",
  initialValue: "normal",
  type: 0,
  prefix: false,
  parse: function(_context, token) {
    if (isNumberToken(token)) {
      return token.number;
    }
    if (isIdentToken(token)) {
      switch (token.value) {
        case "bold":
          return 700;
        case "normal":
        default:
          return 400;
      }
    }
    return 400;
  }
};
var fontVariant = {
  name: "font-variant",
  initialValue: "none",
  type: 1,
  prefix: false,
  parse: function(_context, tokens) {
    return tokens.filter(isIdentToken).map(function(token) {
      return token.value;
    });
  }
};
var fontStyle = {
  name: "font-style",
  initialValue: "normal",
  prefix: false,
  type: 2,
  parse: function(_context, overflow2) {
    switch (overflow2) {
      case "oblique":
        return "oblique";
      case "italic":
        return "italic";
      case "normal":
      default:
        return "normal";
    }
  }
};
var contains = function(bit, value) {
  return (bit & value) !== 0;
};
var content = {
  name: "content",
  initialValue: "none",
  type: 1,
  prefix: false,
  parse: function(_context, tokens) {
    if (tokens.length === 0) {
      return [];
    }
    var first = tokens[0];
    if (first.type === 20 && first.value === "none") {
      return [];
    }
    return tokens;
  }
};
var counterIncrement = {
  name: "counter-increment",
  initialValue: "none",
  prefix: true,
  type: 1,
  parse: function(_context, tokens) {
    if (tokens.length === 0) {
      return null;
    }
    var first = tokens[0];
    if (first.type === 20 && first.value === "none") {
      return null;
    }
    var increments = [];
    var filtered = tokens.filter(nonWhiteSpace);
    for (var i = 0; i < filtered.length; i++) {
      var counter = filtered[i];
      var next = filtered[i + 1];
      if (counter.type === 20) {
        var increment = next && isNumberToken(next) ? next.number : 1;
        increments.push({ counter: counter.value, increment });
      }
    }
    return increments;
  }
};
var counterReset = {
  name: "counter-reset",
  initialValue: "none",
  prefix: true,
  type: 1,
  parse: function(_context, tokens) {
    if (tokens.length === 0) {
      return [];
    }
    var resets = [];
    var filtered = tokens.filter(nonWhiteSpace);
    for (var i = 0; i < filtered.length; i++) {
      var counter = filtered[i];
      var next = filtered[i + 1];
      if (isIdentToken(counter) && counter.value !== "none") {
        var reset = next && isNumberToken(next) ? next.number : 0;
        resets.push({ counter: counter.value, reset });
      }
    }
    return resets;
  }
};
var duration = {
  name: "duration",
  initialValue: "0s",
  prefix: false,
  type: 1,
  parse: function(context, tokens) {
    return tokens.filter(isDimensionToken).map(function(token) {
      return time.parse(context, token);
    });
  }
};
var quotes = {
  name: "quotes",
  initialValue: "none",
  prefix: true,
  type: 1,
  parse: function(_context, tokens) {
    if (tokens.length === 0) {
      return null;
    }
    var first = tokens[0];
    if (first.type === 20 && first.value === "none") {
      return null;
    }
    var quotes2 = [];
    var filtered = tokens.filter(isStringToken);
    if (filtered.length % 2 !== 0) {
      return null;
    }
    for (var i = 0; i < filtered.length; i += 2) {
      var open_1 = filtered[i].value;
      var close_1 = filtered[i + 1].value;
      quotes2.push({ open: open_1, close: close_1 });
    }
    return quotes2;
  }
};
var getQuote = function(quotes2, depth, open) {
  if (!quotes2) {
    return "";
  }
  var quote = quotes2[Math.min(depth, quotes2.length - 1)];
  if (!quote) {
    return "";
  }
  return open ? quote.open : quote.close;
};
var boxShadow = {
  name: "box-shadow",
  initialValue: "none",
  type: 1,
  prefix: false,
  parse: function(context, tokens) {
    if (tokens.length === 1 && isIdentWithValue(tokens[0], "none")) {
      return [];
    }
    return parseFunctionArgs(tokens).map(function(values) {
      var shadow = {
        color: 255,
        offsetX: ZERO_LENGTH,
        offsetY: ZERO_LENGTH,
        blur: ZERO_LENGTH,
        spread: ZERO_LENGTH,
        inset: false
      };
      var c = 0;
      for (var i = 0; i < values.length; i++) {
        var token = values[i];
        if (isIdentWithValue(token, "inset")) {
          shadow.inset = true;
        } else if (isLength(token)) {
          if (c === 0) {
            shadow.offsetX = token;
          } else if (c === 1) {
            shadow.offsetY = token;
          } else if (c === 2) {
            shadow.blur = token;
          } else {
            shadow.spread = token;
          }
          c++;
        } else {
          shadow.color = color$1.parse(context, token);
        }
      }
      return shadow;
    });
  }
};
var paintOrder = {
  name: "paint-order",
  initialValue: "normal",
  prefix: false,
  type: 1,
  parse: function(_context, tokens) {
    var DEFAULT_VALUE2 = [
      0,
      1,
      2
      /* MARKERS */
    ];
    var layers = [];
    tokens.filter(isIdentToken).forEach(function(token) {
      switch (token.value) {
        case "stroke":
          layers.push(
            1
            /* STROKE */
          );
          break;
        case "fill":
          layers.push(
            0
            /* FILL */
          );
          break;
        case "markers":
          layers.push(
            2
            /* MARKERS */
          );
          break;
      }
    });
    DEFAULT_VALUE2.forEach(function(value) {
      if (layers.indexOf(value) === -1) {
        layers.push(value);
      }
    });
    return layers;
  }
};
var webkitTextStrokeColor = {
  name: "-webkit-text-stroke-color",
  initialValue: "currentcolor",
  prefix: false,
  type: 3,
  format: "color"
};
var webkitTextStrokeWidth = {
  name: "-webkit-text-stroke-width",
  initialValue: "0",
  type: 0,
  prefix: false,
  parse: function(_context, token) {
    if (isDimensionToken(token)) {
      return token.number;
    }
    return 0;
  }
};
var CSSParsedDeclaration = (
  /** @class */
  function() {
    function CSSParsedDeclaration2(context, declaration) {
      var _a, _b;
      this.animationDuration = parse(context, duration, declaration.animationDuration);
      this.backgroundClip = parse(context, backgroundClip, declaration.backgroundClip);
      this.backgroundColor = parse(context, backgroundColor, declaration.backgroundColor);
      this.backgroundImage = parse(context, backgroundImage, declaration.backgroundImage);
      this.backgroundOrigin = parse(context, backgroundOrigin, declaration.backgroundOrigin);
      this.backgroundPosition = parse(context, backgroundPosition, declaration.backgroundPosition);
      this.backgroundRepeat = parse(context, backgroundRepeat, declaration.backgroundRepeat);
      this.backgroundSize = parse(context, backgroundSize, declaration.backgroundSize);
      this.borderTopColor = parse(context, borderTopColor, declaration.borderTopColor);
      this.borderRightColor = parse(context, borderRightColor, declaration.borderRightColor);
      this.borderBottomColor = parse(context, borderBottomColor, declaration.borderBottomColor);
      this.borderLeftColor = parse(context, borderLeftColor, declaration.borderLeftColor);
      this.borderTopLeftRadius = parse(context, borderTopLeftRadius, declaration.borderTopLeftRadius);
      this.borderTopRightRadius = parse(context, borderTopRightRadius, declaration.borderTopRightRadius);
      this.borderBottomRightRadius = parse(context, borderBottomRightRadius, declaration.borderBottomRightRadius);
      this.borderBottomLeftRadius = parse(context, borderBottomLeftRadius, declaration.borderBottomLeftRadius);
      this.borderTopStyle = parse(context, borderTopStyle, declaration.borderTopStyle);
      this.borderRightStyle = parse(context, borderRightStyle, declaration.borderRightStyle);
      this.borderBottomStyle = parse(context, borderBottomStyle, declaration.borderBottomStyle);
      this.borderLeftStyle = parse(context, borderLeftStyle, declaration.borderLeftStyle);
      this.borderTopWidth = parse(context, borderTopWidth, declaration.borderTopWidth);
      this.borderRightWidth = parse(context, borderRightWidth, declaration.borderRightWidth);
      this.borderBottomWidth = parse(context, borderBottomWidth, declaration.borderBottomWidth);
      this.borderLeftWidth = parse(context, borderLeftWidth, declaration.borderLeftWidth);
      this.boxShadow = parse(context, boxShadow, declaration.boxShadow);
      this.color = parse(context, color, declaration.color);
      this.direction = parse(context, direction, declaration.direction);
      this.display = parse(context, display, declaration.display);
      this.float = parse(context, float, declaration.cssFloat);
      this.fontFamily = parse(context, fontFamily, declaration.fontFamily);
      this.fontSize = parse(context, fontSize, declaration.fontSize);
      this.fontStyle = parse(context, fontStyle, declaration.fontStyle);
      this.fontVariant = parse(context, fontVariant, declaration.fontVariant);
      this.fontWeight = parse(context, fontWeight, declaration.fontWeight);
      this.letterSpacing = parse(context, letterSpacing, declaration.letterSpacing);
      this.lineBreak = parse(context, lineBreak, declaration.lineBreak);
      this.lineHeight = parse(context, lineHeight, declaration.lineHeight);
      this.listStyleImage = parse(context, listStyleImage, declaration.listStyleImage);
      this.listStylePosition = parse(context, listStylePosition, declaration.listStylePosition);
      this.listStyleType = parse(context, listStyleType, declaration.listStyleType);
      this.marginTop = parse(context, marginTop, declaration.marginTop);
      this.marginRight = parse(context, marginRight, declaration.marginRight);
      this.marginBottom = parse(context, marginBottom, declaration.marginBottom);
      this.marginLeft = parse(context, marginLeft, declaration.marginLeft);
      this.opacity = parse(context, opacity, declaration.opacity);
      var overflowTuple = parse(context, overflow, declaration.overflow);
      this.overflowX = overflowTuple[0];
      this.overflowY = overflowTuple[overflowTuple.length > 1 ? 1 : 0];
      this.overflowWrap = parse(context, overflowWrap, declaration.overflowWrap);
      this.paddingTop = parse(context, paddingTop, declaration.paddingTop);
      this.paddingRight = parse(context, paddingRight, declaration.paddingRight);
      this.paddingBottom = parse(context, paddingBottom, declaration.paddingBottom);
      this.paddingLeft = parse(context, paddingLeft, declaration.paddingLeft);
      this.paintOrder = parse(context, paintOrder, declaration.paintOrder);
      this.position = parse(context, position, declaration.position);
      this.textAlign = parse(context, textAlign, declaration.textAlign);
      this.textDecorationColor = parse(context, textDecorationColor, (_a = declaration.textDecorationColor) !== null && _a !== void 0 ? _a : declaration.color);
      this.textDecorationLine = parse(context, textDecorationLine, (_b = declaration.textDecorationLine) !== null && _b !== void 0 ? _b : declaration.textDecoration);
      this.textShadow = parse(context, textShadow, declaration.textShadow);
      this.textTransform = parse(context, textTransform, declaration.textTransform);
      this.transform = parse(context, transform$1, declaration.transform);
      this.transformOrigin = parse(context, transformOrigin, declaration.transformOrigin);
      this.visibility = parse(context, visibility, declaration.visibility);
      this.webkitTextStrokeColor = parse(context, webkitTextStrokeColor, declaration.webkitTextStrokeColor);
      this.webkitTextStrokeWidth = parse(context, webkitTextStrokeWidth, declaration.webkitTextStrokeWidth);
      this.wordBreak = parse(context, wordBreak, declaration.wordBreak);
      this.zIndex = parse(context, zIndex, declaration.zIndex);
    }
    CSSParsedDeclaration2.prototype.isVisible = function() {
      return this.display > 0 && this.opacity > 0 && this.visibility === 0;
    };
    CSSParsedDeclaration2.prototype.isTransparent = function() {
      return isTransparent(this.backgroundColor);
    };
    CSSParsedDeclaration2.prototype.isTransformed = function() {
      return this.transform !== null;
    };
    CSSParsedDeclaration2.prototype.isPositioned = function() {
      return this.position !== 0;
    };
    CSSParsedDeclaration2.prototype.isPositionedWithZIndex = function() {
      return this.isPositioned() && !this.zIndex.auto;
    };
    CSSParsedDeclaration2.prototype.isFloating = function() {
      return this.float !== 0;
    };
    CSSParsedDeclaration2.prototype.isInlineLevel = function() {
      return contains(
        this.display,
        4
        /* INLINE */
      ) || contains(
        this.display,
        33554432
        /* INLINE_BLOCK */
      ) || contains(
        this.display,
        268435456
        /* INLINE_FLEX */
      ) || contains(
        this.display,
        536870912
        /* INLINE_GRID */
      ) || contains(
        this.display,
        67108864
        /* INLINE_LIST_ITEM */
      ) || contains(
        this.display,
        134217728
        /* INLINE_TABLE */
      );
    };
    return CSSParsedDeclaration2;
  }()
);
var CSSParsedPseudoDeclaration = (
  /** @class */
  function() {
    function CSSParsedPseudoDeclaration2(context, declaration) {
      this.content = parse(context, content, declaration.content);
      this.quotes = parse(context, quotes, declaration.quotes);
    }
    return CSSParsedPseudoDeclaration2;
  }()
);
var CSSParsedCounterDeclaration = (
  /** @class */
  function() {
    function CSSParsedCounterDeclaration2(context, declaration) {
      this.counterIncrement = parse(context, counterIncrement, declaration.counterIncrement);
      this.counterReset = parse(context, counterReset, declaration.counterReset);
    }
    return CSSParsedCounterDeclaration2;
  }()
);
var parse = function(context, descriptor, style) {
  var tokenizer = new Tokenizer();
  var value = style !== null && typeof style !== "undefined" ? style.toString() : descriptor.initialValue;
  tokenizer.write(value);
  var parser = new Parser(tokenizer.read());
  switch (descriptor.type) {
    case 2:
      var token = parser.parseComponentValue();
      return descriptor.parse(context, isIdentToken(token) ? token.value : descriptor.initialValue);
    case 0:
      return descriptor.parse(context, parser.parseComponentValue());
    case 1:
      return descriptor.parse(context, parser.parseComponentValues());
    case 4:
      return parser.parseComponentValue();
    case 3:
      switch (descriptor.format) {
        case "angle":
          return angle.parse(context, parser.parseComponentValue());
        case "color":
          return color$1.parse(context, parser.parseComponentValue());
        case "image":
          return image.parse(context, parser.parseComponentValue());
        case "length":
          var length_1 = parser.parseComponentValue();
          return isLength(length_1) ? length_1 : ZERO_LENGTH;
        case "length-percentage":
          var value_1 = parser.parseComponentValue();
          return isLengthPercentage(value_1) ? value_1 : ZERO_LENGTH;
        case "time":
          return time.parse(context, parser.parseComponentValue());
      }
      break;
  }
};
var elementDebuggerAttribute = "data-html2canvas-debug";
var getElementDebugType = function(element) {
  var attribute = element.getAttribute(elementDebuggerAttribute);
  switch (attribute) {
    case "all":
      return 1;
    case "clone":
      return 2;
    case "parse":
      return 3;
    case "render":
      return 4;
    default:
      return 0;
  }
};
var isDebugging = function(element, type) {
  var elementType = getElementDebugType(element);
  return elementType === 1 || type === elementType;
};
var ElementContainer = (
  /** @class */
  function() {
    function ElementContainer2(context, element) {
      this.context = context;
      this.textNodes = [];
      this.elements = [];
      this.flags = 0;
      if (isDebugging(
        element,
        3
        /* PARSE */
      )) {
        debugger;
      }
      this.styles = new CSSParsedDeclaration(context, window.getComputedStyle(element, null));
      if (isHTMLElementNode(element)) {
        if (this.styles.animationDuration.some(function(duration2) {
          return duration2 > 0;
        })) {
          element.style.animationDuration = "0s";
        }
        if (this.styles.transform !== null) {
          element.style.transform = "none";
        }
      }
      this.bounds = parseBounds(this.context, element);
      if (isDebugging(
        element,
        4
        /* RENDER */
      )) {
        this.flags |= 16;
      }
    }
    return ElementContainer2;
  }()
);
var base64 = "AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA=";
var chars$1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var lookup$1 = typeof Uint8Array === "undefined" ? [] : new Uint8Array(256);
for (i$1 = 0; i$1 < chars$1.length; i$1++) {
  lookup$1[chars$1.charCodeAt(i$1)] = i$1;
}
var i$1;
var decode = function(base642) {
  var bufferLength = base642.length * 0.75, len = base642.length, i, p = 0, encoded1, encoded2, encoded3, encoded4;
  if (base642[base642.length - 1] === "=") {
    bufferLength--;
    if (base642[base642.length - 2] === "=") {
      bufferLength--;
    }
  }
  var buffer = typeof ArrayBuffer !== "undefined" && typeof Uint8Array !== "undefined" && typeof Uint8Array.prototype.slice !== "undefined" ? new ArrayBuffer(bufferLength) : new Array(bufferLength);
  var bytes = Array.isArray(buffer) ? buffer : new Uint8Array(buffer);
  for (i = 0; i < len; i += 4) {
    encoded1 = lookup$1[base642.charCodeAt(i)];
    encoded2 = lookup$1[base642.charCodeAt(i + 1)];
    encoded3 = lookup$1[base642.charCodeAt(i + 2)];
    encoded4 = lookup$1[base642.charCodeAt(i + 3)];
    bytes[p++] = encoded1 << 2 | encoded2 >> 4;
    bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
    bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
  }
  return buffer;
};
var polyUint16Array = function(buffer) {
  var length = buffer.length;
  var bytes = [];
  for (var i = 0; i < length; i += 2) {
    bytes.push(buffer[i + 1] << 8 | buffer[i]);
  }
  return bytes;
};
var polyUint32Array = function(buffer) {
  var length = buffer.length;
  var bytes = [];
  for (var i = 0; i < length; i += 4) {
    bytes.push(buffer[i + 3] << 24 | buffer[i + 2] << 16 | buffer[i + 1] << 8 | buffer[i]);
  }
  return bytes;
};
var UTRIE2_SHIFT_2 = 5;
var UTRIE2_SHIFT_1 = 6 + 5;
var UTRIE2_INDEX_SHIFT = 2;
var UTRIE2_SHIFT_1_2 = UTRIE2_SHIFT_1 - UTRIE2_SHIFT_2;
var UTRIE2_LSCP_INDEX_2_OFFSET = 65536 >> UTRIE2_SHIFT_2;
var UTRIE2_DATA_BLOCK_LENGTH = 1 << UTRIE2_SHIFT_2;
var UTRIE2_DATA_MASK = UTRIE2_DATA_BLOCK_LENGTH - 1;
var UTRIE2_LSCP_INDEX_2_LENGTH = 1024 >> UTRIE2_SHIFT_2;
var UTRIE2_INDEX_2_BMP_LENGTH = UTRIE2_LSCP_INDEX_2_OFFSET + UTRIE2_LSCP_INDEX_2_LENGTH;
var UTRIE2_UTF8_2B_INDEX_2_OFFSET = UTRIE2_INDEX_2_BMP_LENGTH;
var UTRIE2_UTF8_2B_INDEX_2_LENGTH = 2048 >> 6;
var UTRIE2_INDEX_1_OFFSET = UTRIE2_UTF8_2B_INDEX_2_OFFSET + UTRIE2_UTF8_2B_INDEX_2_LENGTH;
var UTRIE2_OMITTED_BMP_INDEX_1_LENGTH = 65536 >> UTRIE2_SHIFT_1;
var UTRIE2_INDEX_2_BLOCK_LENGTH = 1 << UTRIE2_SHIFT_1_2;
var UTRIE2_INDEX_2_MASK = UTRIE2_INDEX_2_BLOCK_LENGTH - 1;
var slice16 = function(view, start, end) {
  if (view.slice) {
    return view.slice(start, end);
  }
  return new Uint16Array(Array.prototype.slice.call(view, start, end));
};
var slice32 = function(view, start, end) {
  if (view.slice) {
    return view.slice(start, end);
  }
  return new Uint32Array(Array.prototype.slice.call(view, start, end));
};
var createTrieFromBase64 = function(base642, _byteLength) {
  var buffer = decode(base642);
  var view32 = Array.isArray(buffer) ? polyUint32Array(buffer) : new Uint32Array(buffer);
  var view16 = Array.isArray(buffer) ? polyUint16Array(buffer) : new Uint16Array(buffer);
  var headerLength = 24;
  var index = slice16(view16, headerLength / 2, view32[4] / 2);
  var data = view32[5] === 2 ? slice16(view16, (headerLength + view32[4]) / 2) : slice32(view32, Math.ceil((headerLength + view32[4]) / 4));
  return new Trie(view32[0], view32[1], view32[2], view32[3], index, data);
};
var Trie = (
  /** @class */
  function() {
    function Trie2(initialValue, errorValue, highStart, highValueIndex, index, data) {
      this.initialValue = initialValue;
      this.errorValue = errorValue;
      this.highStart = highStart;
      this.highValueIndex = highValueIndex;
      this.index = index;
      this.data = data;
    }
    Trie2.prototype.get = function(codePoint) {
      var ix;
      if (codePoint >= 0) {
        if (codePoint < 55296 || codePoint > 56319 && codePoint <= 65535) {
          ix = this.index[codePoint >> UTRIE2_SHIFT_2];
          ix = (ix << UTRIE2_INDEX_SHIFT) + (codePoint & UTRIE2_DATA_MASK);
          return this.data[ix];
        }
        if (codePoint <= 65535) {
          ix = this.index[UTRIE2_LSCP_INDEX_2_OFFSET + (codePoint - 55296 >> UTRIE2_SHIFT_2)];
          ix = (ix << UTRIE2_INDEX_SHIFT) + (codePoint & UTRIE2_DATA_MASK);
          return this.data[ix];
        }
        if (codePoint < this.highStart) {
          ix = UTRIE2_INDEX_1_OFFSET - UTRIE2_OMITTED_BMP_INDEX_1_LENGTH + (codePoint >> UTRIE2_SHIFT_1);
          ix = this.index[ix];
          ix += codePoint >> UTRIE2_SHIFT_2 & UTRIE2_INDEX_2_MASK;
          ix = this.index[ix];
          ix = (ix << UTRIE2_INDEX_SHIFT) + (codePoint & UTRIE2_DATA_MASK);
          return this.data[ix];
        }
        if (codePoint <= 1114111) {
          return this.data[this.highValueIndex];
        }
      }
      return this.errorValue;
    };
    return Trie2;
  }()
);
var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var lookup = typeof Uint8Array === "undefined" ? [] : new Uint8Array(256);
for (i = 0; i < chars.length; i++) {
  lookup[chars.charCodeAt(i)] = i;
}
var i;
var Prepend = 1;
var CR = 2;
var LF = 3;
var Control = 4;
var Extend = 5;
var SpacingMark = 7;
var L = 8;
var V = 9;
var T = 10;
var LV = 11;
var LVT = 12;
var ZWJ = 13;
var Extended_Pictographic = 14;
var RI = 15;
var toCodePoints = function(str) {
  var codePoints = [];
  var i = 0;
  var length = str.length;
  while (i < length) {
    var value = str.charCodeAt(i++);
    if (value >= 55296 && value <= 56319 && i < length) {
      var extra = str.charCodeAt(i++);
      if ((extra & 64512) === 56320) {
        codePoints.push(((value & 1023) << 10) + (extra & 1023) + 65536);
      } else {
        codePoints.push(value);
        i--;
      }
    } else {
      codePoints.push(value);
    }
  }
  return codePoints;
};
var fromCodePoint = function() {
  var codePoints = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    codePoints[_i] = arguments[_i];
  }
  if (String.fromCodePoint) {
    return String.fromCodePoint.apply(String, codePoints);
  }
  var length = codePoints.length;
  if (!length) {
    return "";
  }
  var codeUnits = [];
  var index = -1;
  var result = "";
  while (++index < length) {
    var codePoint = codePoints[index];
    if (codePoint <= 65535) {
      codeUnits.push(codePoint);
    } else {
      codePoint -= 65536;
      codeUnits.push((codePoint >> 10) + 55296, codePoint % 1024 + 56320);
    }
    if (index + 1 === length || codeUnits.length > 16384) {
      result += String.fromCharCode.apply(String, codeUnits);
      codeUnits.length = 0;
    }
  }
  return result;
};
var UnicodeTrie = createTrieFromBase64(base64);
var BREAK_NOT_ALLOWED = "×";
var BREAK_ALLOWED = "÷";
var codePointToClass = function(codePoint) {
  return UnicodeTrie.get(codePoint);
};
var _graphemeBreakAtIndex = function(_codePoints, classTypes, index) {
  var prevIndex = index - 2;
  var prev = classTypes[prevIndex];
  var current = classTypes[index - 1];
  var next = classTypes[index];
  if (current === CR && next === LF) {
    return BREAK_NOT_ALLOWED;
  }
  if (current === CR || current === LF || current === Control) {
    return BREAK_ALLOWED;
  }
  if (next === CR || next === LF || next === Control) {
    return BREAK_ALLOWED;
  }
  if (current === L && [L, V, LV, LVT].indexOf(next) !== -1) {
    return BREAK_NOT_ALLOWED;
  }
  if ((current === LV || current === V) && (next === V || next === T)) {
    return BREAK_NOT_ALLOWED;
  }
  if ((current === LVT || current === T) && next === T) {
    return BREAK_NOT_ALLOWED;
  }
  if (next === ZWJ || next === Extend) {
    return BREAK_NOT_ALLOWED;
  }
  if (next === SpacingMark) {
    return BREAK_NOT_ALLOWED;
  }
  if (current === Prepend) {
    return BREAK_NOT_ALLOWED;
  }
  if (current === ZWJ && next === Extended_Pictographic) {
    while (prev === Extend) {
      prev = classTypes[--prevIndex];
    }
    if (prev === Extended_Pictographic) {
      return BREAK_NOT_ALLOWED;
    }
  }
  if (current === RI && next === RI) {
    var countRI = 0;
    while (prev === RI) {
      countRI++;
      prev = classTypes[--prevIndex];
    }
    if (countRI % 2 === 0) {
      return BREAK_NOT_ALLOWED;
    }
  }
  return BREAK_ALLOWED;
};
var GraphemeBreaker = function(str) {
  var codePoints = toCodePoints(str);
  var length = codePoints.length;
  var index = 0;
  var lastEnd = 0;
  var classTypes = codePoints.map(codePointToClass);
  return {
    next: function() {
      if (index >= length) {
        return { done: true, value: null };
      }
      var graphemeBreak = BREAK_NOT_ALLOWED;
      while (index < length && (graphemeBreak = _graphemeBreakAtIndex(codePoints, classTypes, ++index)) === BREAK_NOT_ALLOWED) {
      }
      if (graphemeBreak !== BREAK_NOT_ALLOWED || index === length) {
        var value = fromCodePoint.apply(null, codePoints.slice(lastEnd, index));
        lastEnd = index;
        return { value, done: false };
      }
      return { done: true, value: null };
    }
  };
};
var splitGraphemes = function(str) {
  var breaker = GraphemeBreaker(str);
  var graphemes = [];
  var bk;
  while (!(bk = breaker.next()).done) {
    if (bk.value) {
      graphemes.push(bk.value.slice());
    }
  }
  return graphemes;
};
var testRangeBounds = function(document2) {
  var TEST_HEIGHT = 123;
  if (document2.createRange) {
    var range = document2.createRange();
    if (range.getBoundingClientRect) {
      var testElement = document2.createElement("boundtest");
      testElement.style.height = TEST_HEIGHT + "px";
      testElement.style.display = "block";
      document2.body.appendChild(testElement);
      range.selectNode(testElement);
      var rangeBounds = range.getBoundingClientRect();
      var rangeHeight = Math.round(rangeBounds.height);
      document2.body.removeChild(testElement);
      if (rangeHeight === TEST_HEIGHT) {
        return true;
      }
    }
  }
  return false;
};
var testIOSLineBreak = function(document2) {
  var testElement = document2.createElement("boundtest");
  testElement.style.width = "50px";
  testElement.style.display = "block";
  testElement.style.fontSize = "12px";
  testElement.style.letterSpacing = "0px";
  testElement.style.wordSpacing = "0px";
  document2.body.appendChild(testElement);
  var range = document2.createRange();
  testElement.innerHTML = typeof "".repeat === "function" ? "&#128104;".repeat(10) : "";
  var node = testElement.firstChild;
  var textList = toCodePoints$1(node.data).map(function(i) {
    return fromCodePoint$1(i);
  });
  var offset = 0;
  var prev = {};
  var supports = textList.every(function(text, i) {
    range.setStart(node, offset);
    range.setEnd(node, offset + text.length);
    var rect = range.getBoundingClientRect();
    offset += text.length;
    var boundAhead = rect.x > prev.x || rect.y > prev.y;
    prev = rect;
    if (i === 0) {
      return true;
    }
    return boundAhead;
  });
  document2.body.removeChild(testElement);
  return supports;
};
var testCORS = function() {
  return typeof new Image().crossOrigin !== "undefined";
};
var testResponseType = function() {
  return typeof new XMLHttpRequest().responseType === "string";
};
var testSVG = function(document2) {
  var img = new Image();
  var canvas = document2.createElement("canvas");
  var ctx = canvas.getContext("2d");
  if (!ctx) {
    return false;
  }
  img.src = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";
  try {
    ctx.drawImage(img, 0, 0);
    canvas.toDataURL();
  } catch (e2) {
    return false;
  }
  return true;
};
var isGreenPixel = function(data) {
  return data[0] === 0 && data[1] === 255 && data[2] === 0 && data[3] === 255;
};
var testForeignObject = function(document2) {
  var canvas = document2.createElement("canvas");
  var size = 100;
  canvas.width = size;
  canvas.height = size;
  var ctx = canvas.getContext("2d");
  if (!ctx) {
    return Promise.reject(false);
  }
  ctx.fillStyle = "rgb(0, 255, 0)";
  ctx.fillRect(0, 0, size, size);
  var img = new Image();
  var greenImageSrc = canvas.toDataURL();
  img.src = greenImageSrc;
  var svg = createForeignObjectSVG(size, size, 0, 0, img);
  ctx.fillStyle = "red";
  ctx.fillRect(0, 0, size, size);
  return loadSerializedSVG$1(svg).then(function(img2) {
    ctx.drawImage(img2, 0, 0);
    var data = ctx.getImageData(0, 0, size, size).data;
    ctx.fillStyle = "red";
    ctx.fillRect(0, 0, size, size);
    var node = document2.createElement("div");
    node.style.backgroundImage = "url(" + greenImageSrc + ")";
    node.style.height = size + "px";
    return isGreenPixel(data) ? loadSerializedSVG$1(createForeignObjectSVG(size, size, 0, 0, node)) : Promise.reject(false);
  }).then(function(img2) {
    ctx.drawImage(img2, 0, 0);
    return isGreenPixel(ctx.getImageData(0, 0, size, size).data);
  }).catch(function() {
    return false;
  });
};
var createForeignObjectSVG = function(width, height, x, y, node) {
  var xmlns = "http://www.w3.org/2000/svg";
  var svg = document.createElementNS(xmlns, "svg");
  var foreignObject = document.createElementNS(xmlns, "foreignObject");
  svg.setAttributeNS(null, "width", width.toString());
  svg.setAttributeNS(null, "height", height.toString());
  foreignObject.setAttributeNS(null, "width", "100%");
  foreignObject.setAttributeNS(null, "height", "100%");
  foreignObject.setAttributeNS(null, "x", x.toString());
  foreignObject.setAttributeNS(null, "y", y.toString());
  foreignObject.setAttributeNS(null, "externalResourcesRequired", "true");
  svg.appendChild(foreignObject);
  foreignObject.appendChild(node);
  return svg;
};
var loadSerializedSVG$1 = function(svg) {
  return new Promise(function(resolve, reject) {
    var img = new Image();
    img.onload = function() {
      return resolve(img);
    };
    img.onerror = reject;
    img.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(svg));
  });
};
var FEATURES = {
  get SUPPORT_RANGE_BOUNDS() {
    var value = testRangeBounds(document);
    Object.defineProperty(FEATURES, "SUPPORT_RANGE_BOUNDS", { value });
    return value;
  },
  get SUPPORT_WORD_BREAKING() {
    var value = FEATURES.SUPPORT_RANGE_BOUNDS && testIOSLineBreak(document);
    Object.defineProperty(FEATURES, "SUPPORT_WORD_BREAKING", { value });
    return value;
  },
  get SUPPORT_SVG_DRAWING() {
    var value = testSVG(document);
    Object.defineProperty(FEATURES, "SUPPORT_SVG_DRAWING", { value });
    return value;
  },
  get SUPPORT_FOREIGNOBJECT_DRAWING() {
    var value = typeof Array.from === "function" && typeof window.fetch === "function" ? testForeignObject(document) : Promise.resolve(false);
    Object.defineProperty(FEATURES, "SUPPORT_FOREIGNOBJECT_DRAWING", { value });
    return value;
  },
  get SUPPORT_CORS_IMAGES() {
    var value = testCORS();
    Object.defineProperty(FEATURES, "SUPPORT_CORS_IMAGES", { value });
    return value;
  },
  get SUPPORT_RESPONSE_TYPE() {
    var value = testResponseType();
    Object.defineProperty(FEATURES, "SUPPORT_RESPONSE_TYPE", { value });
    return value;
  },
  get SUPPORT_CORS_XHR() {
    var value = "withCredentials" in new XMLHttpRequest();
    Object.defineProperty(FEATURES, "SUPPORT_CORS_XHR", { value });
    return value;
  },
  get SUPPORT_NATIVE_TEXT_SEGMENTATION() {
    var value = !!(typeof Intl !== "undefined" && Intl.Segmenter);
    Object.defineProperty(FEATURES, "SUPPORT_NATIVE_TEXT_SEGMENTATION", { value });
    return value;
  }
};
var TextBounds = (
  /** @class */
  function() {
    function TextBounds2(text, bounds) {
      this.text = text;
      this.bounds = bounds;
    }
    return TextBounds2;
  }()
);
var parseTextBounds = function(context, value, styles, node) {
  var textList = breakText(value, styles);
  var textBounds = [];
  var offset = 0;
  textList.forEach(function(text) {
    if (styles.textDecorationLine.length || text.trim().length > 0) {
      if (FEATURES.SUPPORT_RANGE_BOUNDS) {
        var clientRects = createRange(node, offset, text.length).getClientRects();
        if (clientRects.length > 1) {
          var subSegments = segmentGraphemes(text);
          var subOffset_1 = 0;
          subSegments.forEach(function(subSegment) {
            textBounds.push(new TextBounds(subSegment, Bounds.fromDOMRectList(context, createRange(node, subOffset_1 + offset, subSegment.length).getClientRects())));
            subOffset_1 += subSegment.length;
          });
        } else {
          textBounds.push(new TextBounds(text, Bounds.fromDOMRectList(context, clientRects)));
        }
      } else {
        var replacementNode = node.splitText(text.length);
        textBounds.push(new TextBounds(text, getWrapperBounds(context, node)));
        node = replacementNode;
      }
    } else if (!FEATURES.SUPPORT_RANGE_BOUNDS) {
      node = node.splitText(text.length);
    }
    offset += text.length;
  });
  return textBounds;
};
var getWrapperBounds = function(context, node) {
  var ownerDocument = node.ownerDocument;
  if (ownerDocument) {
    var wrapper = ownerDocument.createElement("html2canvaswrapper");
    wrapper.appendChild(node.cloneNode(true));
    var parentNode = node.parentNode;
    if (parentNode) {
      parentNode.replaceChild(wrapper, node);
      var bounds = parseBounds(context, wrapper);
      if (wrapper.firstChild) {
        parentNode.replaceChild(wrapper.firstChild, wrapper);
      }
      return bounds;
    }
  }
  return Bounds.EMPTY;
};
var createRange = function(node, offset, length) {
  var ownerDocument = node.ownerDocument;
  if (!ownerDocument) {
    throw new Error("Node has no owner document");
  }
  var range = ownerDocument.createRange();
  range.setStart(node, offset);
  range.setEnd(node, offset + length);
  return range;
};
var segmentGraphemes = function(value) {
  if (FEATURES.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
    var segmenter = new Intl.Segmenter(void 0, { granularity: "grapheme" });
    return Array.from(segmenter.segment(value)).map(function(segment) {
      return segment.segment;
    });
  }
  return splitGraphemes(value);
};
var segmentWords = function(value, styles) {
  if (FEATURES.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
    var segmenter = new Intl.Segmenter(void 0, {
      granularity: "word"
    });
    return Array.from(segmenter.segment(value)).map(function(segment) {
      return segment.segment;
    });
  }
  return breakWords(value, styles);
};
var breakText = function(value, styles) {
  return styles.letterSpacing !== 0 ? segmentGraphemes(value) : segmentWords(value, styles);
};
var wordSeparators = [32, 160, 4961, 65792, 65793, 4153, 4241];
var breakWords = function(str, styles) {
  var breaker = LineBreaker(str, {
    lineBreak: styles.lineBreak,
    wordBreak: styles.overflowWrap === "break-word" ? "break-word" : styles.wordBreak
  });
  var words = [];
  var bk;
  var _loop_1 = function() {
    if (bk.value) {
      var value = bk.value.slice();
      var codePoints = toCodePoints$1(value);
      var word_1 = "";
      codePoints.forEach(function(codePoint) {
        if (wordSeparators.indexOf(codePoint) === -1) {
          word_1 += fromCodePoint$1(codePoint);
        } else {
          if (word_1.length) {
            words.push(word_1);
          }
          words.push(fromCodePoint$1(codePoint));
          word_1 = "";
        }
      });
      if (word_1.length) {
        words.push(word_1);
      }
    }
  };
  while (!(bk = breaker.next()).done) {
    _loop_1();
  }
  return words;
};
var TextContainer = (
  /** @class */
  function() {
    function TextContainer2(context, node, styles) {
      this.text = transform(node.data, styles.textTransform);
      this.textBounds = parseTextBounds(context, this.text, styles, node);
    }
    return TextContainer2;
  }()
);
var transform = function(text, transform2) {
  switch (transform2) {
    case 1:
      return text.toLowerCase();
    case 3:
      return text.replace(CAPITALIZE, capitalize);
    case 2:
      return text.toUpperCase();
    default:
      return text;
  }
};
var CAPITALIZE = /(^|\s|:|-|\(|\))([a-z])/g;
var capitalize = function(m, p1, p2) {
  if (m.length > 0) {
    return p1 + p2.toUpperCase();
  }
  return m;
};
var ImageElementContainer = (
  /** @class */
  function(_super) {
    __extends(ImageElementContainer2, _super);
    function ImageElementContainer2(context, img) {
      var _this = _super.call(this, context, img) || this;
      _this.src = img.currentSrc || img.src;
      _this.intrinsicWidth = img.naturalWidth;
      _this.intrinsicHeight = img.naturalHeight;
      _this.context.cache.addImage(_this.src);
      return _this;
    }
    return ImageElementContainer2;
  }(ElementContainer)
);
var CanvasElementContainer = (
  /** @class */
  function(_super) {
    __extends(CanvasElementContainer2, _super);
    function CanvasElementContainer2(context, canvas) {
      var _this = _super.call(this, context, canvas) || this;
      _this.canvas = canvas;
      _this.intrinsicWidth = canvas.width;
      _this.intrinsicHeight = canvas.height;
      return _this;
    }
    return CanvasElementContainer2;
  }(ElementContainer)
);
var SVGElementContainer = (
  /** @class */
  function(_super) {
    __extends(SVGElementContainer2, _super);
    function SVGElementContainer2(context, img) {
      var _this = _super.call(this, context, img) || this;
      var s = new XMLSerializer();
      var bounds = parseBounds(context, img);
      img.setAttribute("width", bounds.width + "px");
      img.setAttribute("height", bounds.height + "px");
      _this.svg = "data:image/svg+xml," + encodeURIComponent(s.serializeToString(img));
      _this.intrinsicWidth = img.width.baseVal.value;
      _this.intrinsicHeight = img.height.baseVal.value;
      _this.context.cache.addImage(_this.svg);
      return _this;
    }
    return SVGElementContainer2;
  }(ElementContainer)
);
var LIElementContainer = (
  /** @class */
  function(_super) {
    __extends(LIElementContainer2, _super);
    function LIElementContainer2(context, element) {
      var _this = _super.call(this, context, element) || this;
      _this.value = element.value;
      return _this;
    }
    return LIElementContainer2;
  }(ElementContainer)
);
var OLElementContainer = (
  /** @class */
  function(_super) {
    __extends(OLElementContainer2, _super);
    function OLElementContainer2(context, element) {
      var _this = _super.call(this, context, element) || this;
      _this.start = element.start;
      _this.reversed = typeof element.reversed === "boolean" && element.reversed === true;
      return _this;
    }
    return OLElementContainer2;
  }(ElementContainer)
);
var CHECKBOX_BORDER_RADIUS = [
  {
    type: 15,
    flags: 0,
    unit: "px",
    number: 3
  }
];
var RADIO_BORDER_RADIUS = [
  {
    type: 16,
    flags: 0,
    number: 50
  }
];
var reformatInputBounds = function(bounds) {
  if (bounds.width > bounds.height) {
    return new Bounds(bounds.left + (bounds.width - bounds.height) / 2, bounds.top, bounds.height, bounds.height);
  } else if (bounds.width < bounds.height) {
    return new Bounds(bounds.left, bounds.top + (bounds.height - bounds.width) / 2, bounds.width, bounds.width);
  }
  return bounds;
};
var getInputValue = function(node) {
  var value = node.type === PASSWORD ? new Array(node.value.length + 1).join("•") : node.value;
  return value.length === 0 ? node.placeholder || "" : value;
};
var CHECKBOX = "checkbox";
var RADIO = "radio";
var PASSWORD = "password";
var INPUT_COLOR = 707406591;
var InputElementContainer = (
  /** @class */
  function(_super) {
    __extends(InputElementContainer2, _super);
    function InputElementContainer2(context, input) {
      var _this = _super.call(this, context, input) || this;
      _this.type = input.type.toLowerCase();
      _this.checked = input.checked;
      _this.value = getInputValue(input);
      if (_this.type === CHECKBOX || _this.type === RADIO) {
        _this.styles.backgroundColor = 3739148031;
        _this.styles.borderTopColor = _this.styles.borderRightColor = _this.styles.borderBottomColor = _this.styles.borderLeftColor = 2779096575;
        _this.styles.borderTopWidth = _this.styles.borderRightWidth = _this.styles.borderBottomWidth = _this.styles.borderLeftWidth = 1;
        _this.styles.borderTopStyle = _this.styles.borderRightStyle = _this.styles.borderBottomStyle = _this.styles.borderLeftStyle = 1;
        _this.styles.backgroundClip = [
          0
          /* BORDER_BOX */
        ];
        _this.styles.backgroundOrigin = [
          0
          /* BORDER_BOX */
        ];
        _this.bounds = reformatInputBounds(_this.bounds);
      }
      switch (_this.type) {
        case CHECKBOX:
          _this.styles.borderTopRightRadius = _this.styles.borderTopLeftRadius = _this.styles.borderBottomRightRadius = _this.styles.borderBottomLeftRadius = CHECKBOX_BORDER_RADIUS;
          break;
        case RADIO:
          _this.styles.borderTopRightRadius = _this.styles.borderTopLeftRadius = _this.styles.borderBottomRightRadius = _this.styles.borderBottomLeftRadius = RADIO_BORDER_RADIUS;
          break;
      }
      return _this;
    }
    return InputElementContainer2;
  }(ElementContainer)
);
var SelectElementContainer = (
  /** @class */
  function(_super) {
    __extends(SelectElementContainer2, _super);
    function SelectElementContainer2(context, element) {
      var _this = _super.call(this, context, element) || this;
      var option = element.options[element.selectedIndex || 0];
      _this.value = option ? option.text || "" : "";
      return _this;
    }
    return SelectElementContainer2;
  }(ElementContainer)
);
var TextareaElementContainer = (
  /** @class */
  function(_super) {
    __extends(TextareaElementContainer2, _super);
    function TextareaElementContainer2(context, element) {
      var _this = _super.call(this, context, element) || this;
      _this.value = element.value;
      return _this;
    }
    return TextareaElementContainer2;
  }(ElementContainer)
);
var IFrameElementContainer = (
  /** @class */
  function(_super) {
    __extends(IFrameElementContainer2, _super);
    function IFrameElementContainer2(context, iframe) {
      var _this = _super.call(this, context, iframe) || this;
      _this.src = iframe.src;
      _this.width = parseInt(iframe.width, 10) || 0;
      _this.height = parseInt(iframe.height, 10) || 0;
      _this.backgroundColor = _this.styles.backgroundColor;
      try {
        if (iframe.contentWindow && iframe.contentWindow.document && iframe.contentWindow.document.documentElement) {
          _this.tree = parseTree(context, iframe.contentWindow.document.documentElement);
          var documentBackgroundColor = iframe.contentWindow.document.documentElement ? parseColor(context, getComputedStyle(iframe.contentWindow.document.documentElement).backgroundColor) : COLORS.TRANSPARENT;
          var bodyBackgroundColor = iframe.contentWindow.document.body ? parseColor(context, getComputedStyle(iframe.contentWindow.document.body).backgroundColor) : COLORS.TRANSPARENT;
          _this.backgroundColor = isTransparent(documentBackgroundColor) ? isTransparent(bodyBackgroundColor) ? _this.styles.backgroundColor : bodyBackgroundColor : documentBackgroundColor;
        }
      } catch (e2) {
      }
      return _this;
    }
    return IFrameElementContainer2;
  }(ElementContainer)
);
var LIST_OWNERS = ["OL", "UL", "MENU"];
var parseNodeTree = function(context, node, parent, root) {
  for (var childNode = node.firstChild, nextNode = void 0; childNode; childNode = nextNode) {
    nextNode = childNode.nextSibling;
    if (isTextNode(childNode) && childNode.data.trim().length > 0) {
      parent.textNodes.push(new TextContainer(context, childNode, parent.styles));
    } else if (isElementNode(childNode)) {
      if (isSlotElement(childNode) && childNode.assignedNodes) {
        childNode.assignedNodes().forEach(function(childNode2) {
          return parseNodeTree(context, childNode2, parent, root);
        });
      } else {
        var container = createContainer(context, childNode);
        if (container.styles.isVisible()) {
          if (createsRealStackingContext(childNode, container, root)) {
            container.flags |= 4;
          } else if (createsStackingContext(container.styles)) {
            container.flags |= 2;
          }
          if (LIST_OWNERS.indexOf(childNode.tagName) !== -1) {
            container.flags |= 8;
          }
          parent.elements.push(container);
          childNode.slot;
          if (childNode.shadowRoot) {
            parseNodeTree(context, childNode.shadowRoot, container, root);
          } else if (!isTextareaElement(childNode) && !isSVGElement(childNode) && !isSelectElement(childNode)) {
            parseNodeTree(context, childNode, container, root);
          }
        }
      }
    }
  }
};
var createContainer = function(context, element) {
  if (isImageElement(element)) {
    return new ImageElementContainer(context, element);
  }
  if (isCanvasElement(element)) {
    return new CanvasElementContainer(context, element);
  }
  if (isSVGElement(element)) {
    return new SVGElementContainer(context, element);
  }
  if (isLIElement(element)) {
    return new LIElementContainer(context, element);
  }
  if (isOLElement(element)) {
    return new OLElementContainer(context, element);
  }
  if (isInputElement(element)) {
    return new InputElementContainer(context, element);
  }
  if (isSelectElement(element)) {
    return new SelectElementContainer(context, element);
  }
  if (isTextareaElement(element)) {
    return new TextareaElementContainer(context, element);
  }
  if (isIFrameElement(element)) {
    return new IFrameElementContainer(context, element);
  }
  return new ElementContainer(context, element);
};
var parseTree = function(context, element) {
  var container = createContainer(context, element);
  container.flags |= 4;
  parseNodeTree(context, element, container, container);
  return container;
};
var createsRealStackingContext = function(node, container, root) {
  return container.styles.isPositionedWithZIndex() || container.styles.opacity < 1 || container.styles.isTransformed() || isBodyElement(node) && root.styles.isTransparent();
};
var createsStackingContext = function(styles) {
  return styles.isPositioned() || styles.isFloating();
};
var isTextNode = function(node) {
  return node.nodeType === Node.TEXT_NODE;
};
var isElementNode = function(node) {
  return node.nodeType === Node.ELEMENT_NODE;
};
var isHTMLElementNode = function(node) {
  return isElementNode(node) && typeof node.style !== "undefined" && !isSVGElementNode(node);
};
var isSVGElementNode = function(element) {
  return typeof element.className === "object";
};
var isLIElement = function(node) {
  return node.tagName === "LI";
};
var isOLElement = function(node) {
  return node.tagName === "OL";
};
var isInputElement = function(node) {
  return node.tagName === "INPUT";
};
var isHTMLElement = function(node) {
  return node.tagName === "HTML";
};
var isSVGElement = function(node) {
  return node.tagName === "svg";
};
var isBodyElement = function(node) {
  return node.tagName === "BODY";
};
var isCanvasElement = function(node) {
  return node.tagName === "CANVAS";
};
var isVideoElement = function(node) {
  return node.tagName === "VIDEO";
};
var isImageElement = function(node) {
  return node.tagName === "IMG";
};
var isIFrameElement = function(node) {
  return node.tagName === "IFRAME";
};
var isStyleElement = function(node) {
  return node.tagName === "STYLE";
};
var isScriptElement = function(node) {
  return node.tagName === "SCRIPT";
};
var isTextareaElement = function(node) {
  return node.tagName === "TEXTAREA";
};
var isSelectElement = function(node) {
  return node.tagName === "SELECT";
};
var isSlotElement = function(node) {
  return node.tagName === "SLOT";
};
var isCustomElement = function(node) {
  return node.tagName.indexOf("-") > 0;
};
var CounterState = (
  /** @class */
  function() {
    function CounterState2() {
      this.counters = {};
    }
    CounterState2.prototype.getCounterValue = function(name) {
      var counter = this.counters[name];
      if (counter && counter.length) {
        return counter[counter.length - 1];
      }
      return 1;
    };
    CounterState2.prototype.getCounterValues = function(name) {
      var counter = this.counters[name];
      return counter ? counter : [];
    };
    CounterState2.prototype.pop = function(counters) {
      var _this = this;
      counters.forEach(function(counter) {
        return _this.counters[counter].pop();
      });
    };
    CounterState2.prototype.parse = function(style) {
      var _this = this;
      var counterIncrement2 = style.counterIncrement;
      var counterReset2 = style.counterReset;
      var canReset = true;
      if (counterIncrement2 !== null) {
        counterIncrement2.forEach(function(entry) {
          var counter = _this.counters[entry.counter];
          if (counter && entry.increment !== 0) {
            canReset = false;
            if (!counter.length) {
              counter.push(1);
            }
            counter[Math.max(0, counter.length - 1)] += entry.increment;
          }
        });
      }
      var counterNames = [];
      if (canReset) {
        counterReset2.forEach(function(entry) {
          var counter = _this.counters[entry.counter];
          counterNames.push(entry.counter);
          if (!counter) {
            counter = _this.counters[entry.counter] = [];
          }
          counter.push(entry.reset);
        });
      }
      return counterNames;
    };
    return CounterState2;
  }()
);
var ROMAN_UPPER = {
  integers: [1e3, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
  values: ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
};
var ARMENIAN = {
  integers: [
    9e3,
    8e3,
    7e3,
    6e3,
    5e3,
    4e3,
    3e3,
    2e3,
    1e3,
    900,
    800,
    700,
    600,
    500,
    400,
    300,
    200,
    100,
    90,
    80,
    70,
    60,
    50,
    40,
    30,
    20,
    10,
    9,
    8,
    7,
    6,
    5,
    4,
    3,
    2,
    1
  ],
  values: [
    "Ք",
    "Փ",
    "Ւ",
    "Ց",
    "Ր",
    "Տ",
    "Վ",
    "Ս",
    "Ռ",
    "Ջ",
    "Պ",
    "Չ",
    "Ո",
    "Շ",
    "Ն",
    "Յ",
    "Մ",
    "Ճ",
    "Ղ",
    "Ձ",
    "Հ",
    "Կ",
    "Ծ",
    "Խ",
    "Լ",
    "Ի",
    "Ժ",
    "Թ",
    "Ը",
    "Է",
    "Զ",
    "Ե",
    "Դ",
    "Գ",
    "Բ",
    "Ա"
  ]
};
var HEBREW = {
  integers: [
    1e4,
    9e3,
    8e3,
    7e3,
    6e3,
    5e3,
    4e3,
    3e3,
    2e3,
    1e3,
    400,
    300,
    200,
    100,
    90,
    80,
    70,
    60,
    50,
    40,
    30,
    20,
    19,
    18,
    17,
    16,
    15,
    10,
    9,
    8,
    7,
    6,
    5,
    4,
    3,
    2,
    1
  ],
  values: [
    "י׳",
    "ט׳",
    "ח׳",
    "ז׳",
    "ו׳",
    "ה׳",
    "ד׳",
    "ג׳",
    "ב׳",
    "א׳",
    "ת",
    "ש",
    "ר",
    "ק",
    "צ",
    "פ",
    "ע",
    "ס",
    "נ",
    "מ",
    "ל",
    "כ",
    "יט",
    "יח",
    "יז",
    "טז",
    "טו",
    "י",
    "ט",
    "ח",
    "ז",
    "ו",
    "ה",
    "ד",
    "ג",
    "ב",
    "א"
  ]
};
var GEORGIAN = {
  integers: [
    1e4,
    9e3,
    8e3,
    7e3,
    6e3,
    5e3,
    4e3,
    3e3,
    2e3,
    1e3,
    900,
    800,
    700,
    600,
    500,
    400,
    300,
    200,
    100,
    90,
    80,
    70,
    60,
    50,
    40,
    30,
    20,
    10,
    9,
    8,
    7,
    6,
    5,
    4,
    3,
    2,
    1
  ],
  values: [
    "ჵ",
    "ჰ",
    "ჯ",
    "ჴ",
    "ხ",
    "ჭ",
    "წ",
    "ძ",
    "ც",
    "ჩ",
    "შ",
    "ყ",
    "ღ",
    "ქ",
    "ფ",
    "ჳ",
    "ტ",
    "ს",
    "რ",
    "ჟ",
    "პ",
    "ო",
    "ჲ",
    "ნ",
    "მ",
    "ლ",
    "კ",
    "ი",
    "თ",
    "ჱ",
    "ზ",
    "ვ",
    "ე",
    "დ",
    "გ",
    "ბ",
    "ა"
  ]
};
var createAdditiveCounter = function(value, min, max, symbols, fallback, suffix) {
  if (value < min || value > max) {
    return createCounterText(value, fallback, suffix.length > 0);
  }
  return symbols.integers.reduce(function(string, integer, index) {
    while (value >= integer) {
      value -= integer;
      string += symbols.values[index];
    }
    return string;
  }, "") + suffix;
};
var createCounterStyleWithSymbolResolver = function(value, codePointRangeLength, isNumeric, resolver) {
  var string = "";
  do {
    if (!isNumeric) {
      value--;
    }
    string = resolver(value) + string;
    value /= codePointRangeLength;
  } while (value * codePointRangeLength >= codePointRangeLength);
  return string;
};
var createCounterStyleFromRange = function(value, codePointRangeStart, codePointRangeEnd, isNumeric, suffix) {
  var codePointRangeLength = codePointRangeEnd - codePointRangeStart + 1;
  return (value < 0 ? "-" : "") + (createCounterStyleWithSymbolResolver(Math.abs(value), codePointRangeLength, isNumeric, function(codePoint) {
    return fromCodePoint$1(Math.floor(codePoint % codePointRangeLength) + codePointRangeStart);
  }) + suffix);
};
var createCounterStyleFromSymbols = function(value, symbols, suffix) {
  if (suffix === void 0) {
    suffix = ". ";
  }
  var codePointRangeLength = symbols.length;
  return createCounterStyleWithSymbolResolver(Math.abs(value), codePointRangeLength, false, function(codePoint) {
    return symbols[Math.floor(codePoint % codePointRangeLength)];
  }) + suffix;
};
var CJK_ZEROS = 1 << 0;
var CJK_TEN_COEFFICIENTS = 1 << 1;
var CJK_TEN_HIGH_COEFFICIENTS = 1 << 2;
var CJK_HUNDRED_COEFFICIENTS = 1 << 3;
var createCJKCounter = function(value, numbers, multipliers, negativeSign, suffix, flags) {
  if (value < -9999 || value > 9999) {
    return createCounterText(value, 4, suffix.length > 0);
  }
  var tmp = Math.abs(value);
  var string = suffix;
  if (tmp === 0) {
    return numbers[0] + string;
  }
  for (var digit = 0; tmp > 0 && digit <= 4; digit++) {
    var coefficient = tmp % 10;
    if (coefficient === 0 && contains(flags, CJK_ZEROS) && string !== "") {
      string = numbers[coefficient] + string;
    } else if (coefficient > 1 || coefficient === 1 && digit === 0 || coefficient === 1 && digit === 1 && contains(flags, CJK_TEN_COEFFICIENTS) || coefficient === 1 && digit === 1 && contains(flags, CJK_TEN_HIGH_COEFFICIENTS) && value > 100 || coefficient === 1 && digit > 1 && contains(flags, CJK_HUNDRED_COEFFICIENTS)) {
      string = numbers[coefficient] + (digit > 0 ? multipliers[digit - 1] : "") + string;
    } else if (coefficient === 1 && digit > 0) {
      string = multipliers[digit - 1] + string;
    }
    tmp = Math.floor(tmp / 10);
  }
  return (value < 0 ? negativeSign : "") + string;
};
var CHINESE_INFORMAL_MULTIPLIERS = "十百千萬";
var CHINESE_FORMAL_MULTIPLIERS = "拾佰仟萬";
var JAPANESE_NEGATIVE = "マイナス";
var KOREAN_NEGATIVE = "마이너스";
var createCounterText = function(value, type, appendSuffix) {
  var defaultSuffix = appendSuffix ? ". " : "";
  var cjkSuffix = appendSuffix ? "、" : "";
  var koreanSuffix = appendSuffix ? ", " : "";
  var spaceSuffix = appendSuffix ? " " : "";
  switch (type) {
    case 0:
      return "•" + spaceSuffix;
    case 1:
      return "◦" + spaceSuffix;
    case 2:
      return "◾" + spaceSuffix;
    case 5:
      var string = createCounterStyleFromRange(value, 48, 57, true, defaultSuffix);
      return string.length < 4 ? "0" + string : string;
    case 4:
      return createCounterStyleFromSymbols(value, "〇一二三四五六七八九", cjkSuffix);
    case 6:
      return createAdditiveCounter(value, 1, 3999, ROMAN_UPPER, 3, defaultSuffix).toLowerCase();
    case 7:
      return createAdditiveCounter(value, 1, 3999, ROMAN_UPPER, 3, defaultSuffix);
    case 8:
      return createCounterStyleFromRange(value, 945, 969, false, defaultSuffix);
    case 9:
      return createCounterStyleFromRange(value, 97, 122, false, defaultSuffix);
    case 10:
      return createCounterStyleFromRange(value, 65, 90, false, defaultSuffix);
    case 11:
      return createCounterStyleFromRange(value, 1632, 1641, true, defaultSuffix);
    case 12:
    case 49:
      return createAdditiveCounter(value, 1, 9999, ARMENIAN, 3, defaultSuffix);
    case 35:
      return createAdditiveCounter(value, 1, 9999, ARMENIAN, 3, defaultSuffix).toLowerCase();
    case 13:
      return createCounterStyleFromRange(value, 2534, 2543, true, defaultSuffix);
    case 14:
    case 30:
      return createCounterStyleFromRange(value, 6112, 6121, true, defaultSuffix);
    case 15:
      return createCounterStyleFromSymbols(value, "子丑寅卯辰巳午未申酉戌亥", cjkSuffix);
    case 16:
      return createCounterStyleFromSymbols(value, "甲乙丙丁戊己庚辛壬癸", cjkSuffix);
    case 17:
    case 48:
      return createCJKCounter(value, "零一二三四五六七八九", CHINESE_INFORMAL_MULTIPLIERS, "負", cjkSuffix, CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS | CJK_HUNDRED_COEFFICIENTS);
    case 47:
      return createCJKCounter(value, "零壹貳參肆伍陸柒捌玖", CHINESE_FORMAL_MULTIPLIERS, "負", cjkSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS | CJK_HUNDRED_COEFFICIENTS);
    case 42:
      return createCJKCounter(value, "零一二三四五六七八九", CHINESE_INFORMAL_MULTIPLIERS, "负", cjkSuffix, CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS | CJK_HUNDRED_COEFFICIENTS);
    case 41:
      return createCJKCounter(value, "零壹贰叁肆伍陆柒捌玖", CHINESE_FORMAL_MULTIPLIERS, "负", cjkSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS | CJK_HUNDRED_COEFFICIENTS);
    case 26:
      return createCJKCounter(value, "〇一二三四五六七八九", "十百千万", JAPANESE_NEGATIVE, cjkSuffix, 0);
    case 25:
      return createCJKCounter(value, "零壱弐参四伍六七八九", "拾百千万", JAPANESE_NEGATIVE, cjkSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS);
    case 31:
      return createCJKCounter(value, "영일이삼사오육칠팔구", "십백천만", KOREAN_NEGATIVE, koreanSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS);
    case 33:
      return createCJKCounter(value, "零一二三四五六七八九", "十百千萬", KOREAN_NEGATIVE, koreanSuffix, 0);
    case 32:
      return createCJKCounter(value, "零壹貳參四五六七八九", "拾百千", KOREAN_NEGATIVE, koreanSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS);
    case 18:
      return createCounterStyleFromRange(value, 2406, 2415, true, defaultSuffix);
    case 20:
      return createAdditiveCounter(value, 1, 19999, GEORGIAN, 3, defaultSuffix);
    case 21:
      return createCounterStyleFromRange(value, 2790, 2799, true, defaultSuffix);
    case 22:
      return createCounterStyleFromRange(value, 2662, 2671, true, defaultSuffix);
    case 22:
      return createAdditiveCounter(value, 1, 10999, HEBREW, 3, defaultSuffix);
    case 23:
      return createCounterStyleFromSymbols(value, "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん");
    case 24:
      return createCounterStyleFromSymbols(value, "いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす");
    case 27:
      return createCounterStyleFromRange(value, 3302, 3311, true, defaultSuffix);
    case 28:
      return createCounterStyleFromSymbols(value, "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン", cjkSuffix);
    case 29:
      return createCounterStyleFromSymbols(value, "イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス", cjkSuffix);
    case 34:
      return createCounterStyleFromRange(value, 3792, 3801, true, defaultSuffix);
    case 37:
      return createCounterStyleFromRange(value, 6160, 6169, true, defaultSuffix);
    case 38:
      return createCounterStyleFromRange(value, 4160, 4169, true, defaultSuffix);
    case 39:
      return createCounterStyleFromRange(value, 2918, 2927, true, defaultSuffix);
    case 40:
      return createCounterStyleFromRange(value, 1776, 1785, true, defaultSuffix);
    case 43:
      return createCounterStyleFromRange(value, 3046, 3055, true, defaultSuffix);
    case 44:
      return createCounterStyleFromRange(value, 3174, 3183, true, defaultSuffix);
    case 45:
      return createCounterStyleFromRange(value, 3664, 3673, true, defaultSuffix);
    case 46:
      return createCounterStyleFromRange(value, 3872, 3881, true, defaultSuffix);
    case 3:
    default:
      return createCounterStyleFromRange(value, 48, 57, true, defaultSuffix);
  }
};
var IGNORE_ATTRIBUTE = "data-html2canvas-ignore";
var DocumentCloner = (
  /** @class */
  function() {
    function DocumentCloner2(context, element, options) {
      this.context = context;
      this.options = options;
      this.scrolledElements = [];
      this.referenceElement = element;
      this.counters = new CounterState();
      this.quoteDepth = 0;
      if (!element.ownerDocument) {
        throw new Error("Cloned element does not have an owner document");
      }
      this.documentElement = this.cloneNode(element.ownerDocument.documentElement, false);
    }
    DocumentCloner2.prototype.toIFrame = function(ownerDocument, windowSize) {
      var _this = this;
      var iframe = createIFrameContainer(ownerDocument, windowSize);
      if (!iframe.contentWindow) {
        return Promise.reject("Unable to find iframe window");
      }
      var scrollX = ownerDocument.defaultView.pageXOffset;
      var scrollY = ownerDocument.defaultView.pageYOffset;
      var cloneWindow = iframe.contentWindow;
      var documentClone = cloneWindow.document;
      var iframeLoad = iframeLoader(iframe).then(function() {
        return __awaiter(_this, void 0, void 0, function() {
          var onclone, referenceElement;
          return __generator(this, function(_a) {
            switch (_a.label) {
              case 0:
                this.scrolledElements.forEach(restoreNodeScroll);
                if (cloneWindow) {
                  cloneWindow.scrollTo(windowSize.left, windowSize.top);
                  if (/(iPad|iPhone|iPod)/g.test(navigator.userAgent) && (cloneWindow.scrollY !== windowSize.top || cloneWindow.scrollX !== windowSize.left)) {
                    this.context.logger.warn("Unable to restore scroll position for cloned document");
                    this.context.windowBounds = this.context.windowBounds.add(cloneWindow.scrollX - windowSize.left, cloneWindow.scrollY - windowSize.top, 0, 0);
                  }
                }
                onclone = this.options.onclone;
                referenceElement = this.clonedReferenceElement;
                if (typeof referenceElement === "undefined") {
                  return [2, Promise.reject("Error finding the " + this.referenceElement.nodeName + " in the cloned document")];
                }
                if (!(documentClone.fonts && documentClone.fonts.ready))
                  return [3, 2];
                return [4, documentClone.fonts.ready];
              case 1:
                _a.sent();
                _a.label = 2;
              case 2:
                if (!/(AppleWebKit)/g.test(navigator.userAgent))
                  return [3, 4];
                return [4, imagesReady(documentClone)];
              case 3:
                _a.sent();
                _a.label = 4;
              case 4:
                if (typeof onclone === "function") {
                  return [2, Promise.resolve().then(function() {
                    return onclone(documentClone, referenceElement);
                  }).then(function() {
                    return iframe;
                  })];
                }
                return [2, iframe];
            }
          });
        });
      });
      documentClone.open();
      documentClone.write(serializeDoctype(document.doctype) + "<html></html>");
      restoreOwnerScroll(this.referenceElement.ownerDocument, scrollX, scrollY);
      documentClone.replaceChild(documentClone.adoptNode(this.documentElement), documentClone.documentElement);
      documentClone.close();
      return iframeLoad;
    };
    DocumentCloner2.prototype.createElementClone = function(node) {
      if (isDebugging(
        node,
        2
        /* CLONE */
      )) {
        debugger;
      }
      if (isCanvasElement(node)) {
        return this.createCanvasClone(node);
      }
      if (isVideoElement(node)) {
        return this.createVideoClone(node);
      }
      if (isStyleElement(node)) {
        return this.createStyleClone(node);
      }
      var clone = node.cloneNode(false);
      if (isImageElement(clone)) {
        if (isImageElement(node) && node.currentSrc && node.currentSrc !== node.src) {
          clone.src = node.currentSrc;
          clone.srcset = "";
        }
        if (clone.loading === "lazy") {
          clone.loading = "eager";
        }
      }
      if (isCustomElement(clone)) {
        return this.createCustomElementClone(clone);
      }
      return clone;
    };
    DocumentCloner2.prototype.createCustomElementClone = function(node) {
      var clone = document.createElement("html2canvascustomelement");
      copyCSSStyles(node.style, clone);
      return clone;
    };
    DocumentCloner2.prototype.createStyleClone = function(node) {
      try {
        var sheet = node.sheet;
        if (sheet && sheet.cssRules) {
          var css = [].slice.call(sheet.cssRules, 0).reduce(function(css2, rule) {
            if (rule && typeof rule.cssText === "string") {
              return css2 + rule.cssText;
            }
            return css2;
          }, "");
          var style = node.cloneNode(false);
          style.textContent = css;
          return style;
        }
      } catch (e2) {
        this.context.logger.error("Unable to access cssRules property", e2);
        if (e2.name !== "SecurityError") {
          throw e2;
        }
      }
      return node.cloneNode(false);
    };
    DocumentCloner2.prototype.createCanvasClone = function(canvas) {
      var _a;
      if (this.options.inlineImages && canvas.ownerDocument) {
        var img = canvas.ownerDocument.createElement("img");
        try {
          img.src = canvas.toDataURL();
          return img;
        } catch (e2) {
          this.context.logger.info("Unable to inline canvas contents, canvas is tainted", canvas);
        }
      }
      var clonedCanvas = canvas.cloneNode(false);
      try {
        clonedCanvas.width = canvas.width;
        clonedCanvas.height = canvas.height;
        var ctx = canvas.getContext("2d");
        var clonedCtx = clonedCanvas.getContext("2d");
        if (clonedCtx) {
          if (!this.options.allowTaint && ctx) {
            clonedCtx.putImageData(ctx.getImageData(0, 0, canvas.width, canvas.height), 0, 0);
          } else {
            var gl = (_a = canvas.getContext("webgl2")) !== null && _a !== void 0 ? _a : canvas.getContext("webgl");
            if (gl) {
              var attribs = gl.getContextAttributes();
              if ((attribs === null || attribs === void 0 ? void 0 : attribs.preserveDrawingBuffer) === false) {
                this.context.logger.warn("Unable to clone WebGL context as it has preserveDrawingBuffer=false", canvas);
              }
            }
            clonedCtx.drawImage(canvas, 0, 0);
          }
        }
        return clonedCanvas;
      } catch (e2) {
        this.context.logger.info("Unable to clone canvas as it is tainted", canvas);
      }
      return clonedCanvas;
    };
    DocumentCloner2.prototype.createVideoClone = function(video) {
      var canvas = video.ownerDocument.createElement("canvas");
      canvas.width = video.offsetWidth;
      canvas.height = video.offsetHeight;
      var ctx = canvas.getContext("2d");
      try {
        if (ctx) {
          ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
          if (!this.options.allowTaint) {
            ctx.getImageData(0, 0, canvas.width, canvas.height);
          }
        }
        return canvas;
      } catch (e2) {
        this.context.logger.info("Unable to clone video as it is tainted", video);
      }
      var blankCanvas = video.ownerDocument.createElement("canvas");
      blankCanvas.width = video.offsetWidth;
      blankCanvas.height = video.offsetHeight;
      return blankCanvas;
    };
    DocumentCloner2.prototype.appendChildNode = function(clone, child, copyStyles) {
      if (!isElementNode(child) || !isScriptElement(child) && !child.hasAttribute(IGNORE_ATTRIBUTE) && (typeof this.options.ignoreElements !== "function" || !this.options.ignoreElements(child))) {
        if (!this.options.copyStyles || !isElementNode(child) || !isStyleElement(child)) {
          clone.appendChild(this.cloneNode(child, copyStyles));
        }
      }
    };
    DocumentCloner2.prototype.cloneChildNodes = function(node, clone, copyStyles) {
      var _this = this;
      for (var child = node.shadowRoot ? node.shadowRoot.firstChild : node.firstChild; child; child = child.nextSibling) {
        if (isElementNode(child) && isSlotElement(child) && typeof child.assignedNodes === "function") {
          var assignedNodes = child.assignedNodes();
          if (assignedNodes.length) {
            assignedNodes.forEach(function(assignedNode) {
              return _this.appendChildNode(clone, assignedNode, copyStyles);
            });
          }
        } else {
          this.appendChildNode(clone, child, copyStyles);
        }
      }
    };
    DocumentCloner2.prototype.cloneNode = function(node, copyStyles) {
      if (isTextNode(node)) {
        return document.createTextNode(node.data);
      }
      if (!node.ownerDocument) {
        return node.cloneNode(false);
      }
      var window2 = node.ownerDocument.defaultView;
      if (window2 && isElementNode(node) && (isHTMLElementNode(node) || isSVGElementNode(node))) {
        var clone = this.createElementClone(node);
        clone.style.transitionProperty = "none";
        var style = window2.getComputedStyle(node);
        var styleBefore = window2.getComputedStyle(node, ":before");
        var styleAfter = window2.getComputedStyle(node, ":after");
        if (this.referenceElement === node && isHTMLElementNode(clone)) {
          this.clonedReferenceElement = clone;
        }
        if (isBodyElement(clone)) {
          createPseudoHideStyles(clone);
        }
        var counters = this.counters.parse(new CSSParsedCounterDeclaration(this.context, style));
        var before = this.resolvePseudoContent(node, clone, styleBefore, PseudoElementType.BEFORE);
        if (isCustomElement(node)) {
          copyStyles = true;
        }
        if (!isVideoElement(node)) {
          this.cloneChildNodes(node, clone, copyStyles);
        }
        if (before) {
          clone.insertBefore(before, clone.firstChild);
        }
        var after = this.resolvePseudoContent(node, clone, styleAfter, PseudoElementType.AFTER);
        if (after) {
          clone.appendChild(after);
        }
        this.counters.pop(counters);
        if (style && (this.options.copyStyles || isSVGElementNode(node)) && !isIFrameElement(node) || copyStyles) {
          copyCSSStyles(style, clone);
        }
        if (node.scrollTop !== 0 || node.scrollLeft !== 0) {
          this.scrolledElements.push([clone, node.scrollLeft, node.scrollTop]);
        }
        if ((isTextareaElement(node) || isSelectElement(node)) && (isTextareaElement(clone) || isSelectElement(clone))) {
          clone.value = node.value;
        }
        return clone;
      }
      return node.cloneNode(false);
    };
    DocumentCloner2.prototype.resolvePseudoContent = function(node, clone, style, pseudoElt) {
      var _this = this;
      if (!style) {
        return;
      }
      var value = style.content;
      var document2 = clone.ownerDocument;
      if (!document2 || !value || value === "none" || value === "-moz-alt-content" || style.display === "none") {
        return;
      }
      this.counters.parse(new CSSParsedCounterDeclaration(this.context, style));
      var declaration = new CSSParsedPseudoDeclaration(this.context, style);
      var anonymousReplacedElement = document2.createElement("html2canvaspseudoelement");
      copyCSSStyles(style, anonymousReplacedElement);
      declaration.content.forEach(function(token) {
        if (token.type === 0) {
          anonymousReplacedElement.appendChild(document2.createTextNode(token.value));
        } else if (token.type === 22) {
          var img = document2.createElement("img");
          img.src = token.value;
          img.style.opacity = "1";
          anonymousReplacedElement.appendChild(img);
        } else if (token.type === 18) {
          if (token.name === "attr") {
            var attr = token.values.filter(isIdentToken);
            if (attr.length) {
              anonymousReplacedElement.appendChild(document2.createTextNode(node.getAttribute(attr[0].value) || ""));
            }
          } else if (token.name === "counter") {
            var _a = token.values.filter(nonFunctionArgSeparator), counter = _a[0], counterStyle = _a[1];
            if (counter && isIdentToken(counter)) {
              var counterState = _this.counters.getCounterValue(counter.value);
              var counterType = counterStyle && isIdentToken(counterStyle) ? listStyleType.parse(_this.context, counterStyle.value) : 3;
              anonymousReplacedElement.appendChild(document2.createTextNode(createCounterText(counterState, counterType, false)));
            }
          } else if (token.name === "counters") {
            var _b = token.values.filter(nonFunctionArgSeparator), counter = _b[0], delim = _b[1], counterStyle = _b[2];
            if (counter && isIdentToken(counter)) {
              var counterStates = _this.counters.getCounterValues(counter.value);
              var counterType_1 = counterStyle && isIdentToken(counterStyle) ? listStyleType.parse(_this.context, counterStyle.value) : 3;
              var separator = delim && delim.type === 0 ? delim.value : "";
              var text = counterStates.map(function(value2) {
                return createCounterText(value2, counterType_1, false);
              }).join(separator);
              anonymousReplacedElement.appendChild(document2.createTextNode(text));
            }
          } else
            ;
        } else if (token.type === 20) {
          switch (token.value) {
            case "open-quote":
              anonymousReplacedElement.appendChild(document2.createTextNode(getQuote(declaration.quotes, _this.quoteDepth++, true)));
              break;
            case "close-quote":
              anonymousReplacedElement.appendChild(document2.createTextNode(getQuote(declaration.quotes, --_this.quoteDepth, false)));
              break;
            default:
              anonymousReplacedElement.appendChild(document2.createTextNode(token.value));
          }
        }
      });
      anonymousReplacedElement.className = PSEUDO_HIDE_ELEMENT_CLASS_BEFORE + " " + PSEUDO_HIDE_ELEMENT_CLASS_AFTER;
      var newClassName = pseudoElt === PseudoElementType.BEFORE ? " " + PSEUDO_HIDE_ELEMENT_CLASS_BEFORE : " " + PSEUDO_HIDE_ELEMENT_CLASS_AFTER;
      if (isSVGElementNode(clone)) {
        clone.className.baseValue += newClassName;
      } else {
        clone.className += newClassName;
      }
      return anonymousReplacedElement;
    };
    DocumentCloner2.destroy = function(container) {
      if (container.parentNode) {
        container.parentNode.removeChild(container);
        return true;
      }
      return false;
    };
    return DocumentCloner2;
  }()
);
var PseudoElementType;
(function(PseudoElementType2) {
  PseudoElementType2[PseudoElementType2["BEFORE"] = 0] = "BEFORE";
  PseudoElementType2[PseudoElementType2["AFTER"] = 1] = "AFTER";
})(PseudoElementType || (PseudoElementType = {}));
var createIFrameContainer = function(ownerDocument, bounds) {
  var cloneIframeContainer = ownerDocument.createElement("iframe");
  cloneIframeContainer.className = "html2canvas-container";
  cloneIframeContainer.style.visibility = "hidden";
  cloneIframeContainer.style.position = "fixed";
  cloneIframeContainer.style.left = "-10000px";
  cloneIframeContainer.style.top = "0px";
  cloneIframeContainer.style.border = "0";
  cloneIframeContainer.width = bounds.width.toString();
  cloneIframeContainer.height = bounds.height.toString();
  cloneIframeContainer.scrolling = "no";
  cloneIframeContainer.setAttribute(IGNORE_ATTRIBUTE, "true");
  ownerDocument.body.appendChild(cloneIframeContainer);
  return cloneIframeContainer;
};
var imageReady = function(img) {
  return new Promise(function(resolve) {
    if (img.complete) {
      resolve();
      return;
    }
    if (!img.src) {
      resolve();
      return;
    }
    img.onload = resolve;
    img.onerror = resolve;
  });
};
var imagesReady = function(document2) {
  return Promise.all([].slice.call(document2.images, 0).map(imageReady));
};
var iframeLoader = function(iframe) {
  return new Promise(function(resolve, reject) {
    var cloneWindow = iframe.contentWindow;
    if (!cloneWindow) {
      return reject("No window assigned for iframe");
    }
    var documentClone = cloneWindow.document;
    cloneWindow.onload = iframe.onload = function() {
      cloneWindow.onload = iframe.onload = null;
      var interval = setInterval(function() {
        if (documentClone.body.childNodes.length > 0 && documentClone.readyState === "complete") {
          clearInterval(interval);
          resolve(iframe);
        }
      }, 50);
    };
  });
};
var ignoredStyleProperties = [
  "all",
  "d",
  "content"
  // Safari shows pseudoelements if content is set
];
var copyCSSStyles = function(style, target) {
  for (var i = style.length - 1; i >= 0; i--) {
    var property = style.item(i);
    if (ignoredStyleProperties.indexOf(property) === -1) {
      target.style.setProperty(property, style.getPropertyValue(property));
    }
  }
  return target;
};
var serializeDoctype = function(doctype) {
  var str = "";
  if (doctype) {
    str += "<!DOCTYPE ";
    if (doctype.name) {
      str += doctype.name;
    }
    if (doctype.internalSubset) {
      str += doctype.internalSubset;
    }
    if (doctype.publicId) {
      str += '"' + doctype.publicId + '"';
    }
    if (doctype.systemId) {
      str += '"' + doctype.systemId + '"';
    }
    str += ">";
  }
  return str;
};
var restoreOwnerScroll = function(ownerDocument, x, y) {
  if (ownerDocument && ownerDocument.defaultView && (x !== ownerDocument.defaultView.pageXOffset || y !== ownerDocument.defaultView.pageYOffset)) {
    ownerDocument.defaultView.scrollTo(x, y);
  }
};
var restoreNodeScroll = function(_a) {
  var element = _a[0], x = _a[1], y = _a[2];
  element.scrollLeft = x;
  element.scrollTop = y;
};
var PSEUDO_BEFORE = ":before";
var PSEUDO_AFTER = ":after";
var PSEUDO_HIDE_ELEMENT_CLASS_BEFORE = "___html2canvas___pseudoelement_before";
var PSEUDO_HIDE_ELEMENT_CLASS_AFTER = "___html2canvas___pseudoelement_after";
var PSEUDO_HIDE_ELEMENT_STYLE = '{\n    content: "" !important;\n    display: none !important;\n}';
var createPseudoHideStyles = function(body) {
  createStyles(body, "." + PSEUDO_HIDE_ELEMENT_CLASS_BEFORE + PSEUDO_BEFORE + PSEUDO_HIDE_ELEMENT_STYLE + "\n         ." + PSEUDO_HIDE_ELEMENT_CLASS_AFTER + PSEUDO_AFTER + PSEUDO_HIDE_ELEMENT_STYLE);
};
var createStyles = function(body, styles) {
  var document2 = body.ownerDocument;
  if (document2) {
    var style = document2.createElement("style");
    style.textContent = styles;
    body.appendChild(style);
  }
};
var CacheStorage = (
  /** @class */
  function() {
    function CacheStorage2() {
    }
    CacheStorage2.getOrigin = function(url) {
      var link = CacheStorage2._link;
      if (!link) {
        return "about:blank";
      }
      link.href = url;
      link.href = link.href;
      return link.protocol + link.hostname + link.port;
    };
    CacheStorage2.isSameOrigin = function(src) {
      return CacheStorage2.getOrigin(src) === CacheStorage2._origin;
    };
    CacheStorage2.setContext = function(window2) {
      CacheStorage2._link = window2.document.createElement("a");
      CacheStorage2._origin = CacheStorage2.getOrigin(window2.location.href);
    };
    CacheStorage2._origin = "about:blank";
    return CacheStorage2;
  }()
);
var Cache = (
  /** @class */
  function() {
    function Cache2(context, _options) {
      this.context = context;
      this._options = _options;
      this._cache = {};
    }
    Cache2.prototype.addImage = function(src) {
      var result = Promise.resolve();
      if (this.has(src)) {
        return result;
      }
      if (isBlobImage(src) || isRenderable(src)) {
        (this._cache[src] = this.loadImage(src)).catch(function() {
        });
        return result;
      }
      return result;
    };
    Cache2.prototype.match = function(src) {
      return this._cache[src];
    };
    Cache2.prototype.loadImage = function(key) {
      return __awaiter(this, void 0, void 0, function() {
        var isSameOrigin, useCORS, useProxy, src;
        var _this = this;
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              isSameOrigin = CacheStorage.isSameOrigin(key);
              useCORS = !isInlineImage(key) && this._options.useCORS === true && FEATURES.SUPPORT_CORS_IMAGES && !isSameOrigin;
              useProxy = !isInlineImage(key) && !isSameOrigin && !isBlobImage(key) && typeof this._options.proxy === "string" && FEATURES.SUPPORT_CORS_XHR && !useCORS;
              if (!isSameOrigin && this._options.allowTaint === false && !isInlineImage(key) && !isBlobImage(key) && !useProxy && !useCORS) {
                return [
                  2
                  /*return*/
                ];
              }
              src = key;
              if (!useProxy)
                return [3, 2];
              return [4, this.proxy(src)];
            case 1:
              src = _a.sent();
              _a.label = 2;
            case 2:
              this.context.logger.debug("Added image " + key.substring(0, 256));
              return [4, new Promise(function(resolve, reject) {
                var img = new Image();
                img.onload = function() {
                  return resolve(img);
                };
                img.onerror = reject;
                if (isInlineBase64Image(src) || useCORS) {
                  img.crossOrigin = "anonymous";
                }
                img.src = src;
                if (img.complete === true) {
                  setTimeout(function() {
                    return resolve(img);
                  }, 500);
                }
                if (_this._options.imageTimeout > 0) {
                  setTimeout(function() {
                    return reject("Timed out (" + _this._options.imageTimeout + "ms) loading image");
                  }, _this._options.imageTimeout);
                }
              })];
            case 3:
              return [2, _a.sent()];
          }
        });
      });
    };
    Cache2.prototype.has = function(key) {
      return typeof this._cache[key] !== "undefined";
    };
    Cache2.prototype.keys = function() {
      return Promise.resolve(Object.keys(this._cache));
    };
    Cache2.prototype.proxy = function(src) {
      var _this = this;
      var proxy = this._options.proxy;
      if (!proxy) {
        throw new Error("No proxy defined");
      }
      var key = src.substring(0, 256);
      return new Promise(function(resolve, reject) {
        var responseType = FEATURES.SUPPORT_RESPONSE_TYPE ? "blob" : "text";
        var xhr = new XMLHttpRequest();
        xhr.onload = function() {
          if (xhr.status === 200) {
            if (responseType === "text") {
              resolve(xhr.response);
            } else {
              var reader_1 = new FileReader();
              reader_1.addEventListener("load", function() {
                return resolve(reader_1.result);
              }, false);
              reader_1.addEventListener("error", function(e2) {
                return reject(e2);
              }, false);
              reader_1.readAsDataURL(xhr.response);
            }
          } else {
            reject("Failed to proxy resource " + key + " with status code " + xhr.status);
          }
        };
        xhr.onerror = reject;
        var queryString = proxy.indexOf("?") > -1 ? "&" : "?";
        xhr.open("GET", "" + proxy + queryString + "url=" + encodeURIComponent(src) + "&responseType=" + responseType);
        if (responseType !== "text" && xhr instanceof XMLHttpRequest) {
          xhr.responseType = responseType;
        }
        if (_this._options.imageTimeout) {
          var timeout_1 = _this._options.imageTimeout;
          xhr.timeout = timeout_1;
          xhr.ontimeout = function() {
            return reject("Timed out (" + timeout_1 + "ms) proxying " + key);
          };
        }
        xhr.send();
      });
    };
    return Cache2;
  }()
);
var INLINE_SVG = /^data:image\/svg\+xml/i;
var INLINE_BASE64 = /^data:image\/.*;base64,/i;
var INLINE_IMG = /^data:image\/.*/i;
var isRenderable = function(src) {
  return FEATURES.SUPPORT_SVG_DRAWING || !isSVG(src);
};
var isInlineImage = function(src) {
  return INLINE_IMG.test(src);
};
var isInlineBase64Image = function(src) {
  return INLINE_BASE64.test(src);
};
var isBlobImage = function(src) {
  return src.substr(0, 4) === "blob";
};
var isSVG = function(src) {
  return src.substr(-3).toLowerCase() === "svg" || INLINE_SVG.test(src);
};
var Vector = (
  /** @class */
  function() {
    function Vector2(x, y) {
      this.type = 0;
      this.x = x;
      this.y = y;
    }
    Vector2.prototype.add = function(deltaX, deltaY) {
      return new Vector2(this.x + deltaX, this.y + deltaY);
    };
    return Vector2;
  }()
);
var lerp = function(a2, b, t) {
  return new Vector(a2.x + (b.x - a2.x) * t, a2.y + (b.y - a2.y) * t);
};
var BezierCurve = (
  /** @class */
  function() {
    function BezierCurve2(start, startControl, endControl, end) {
      this.type = 1;
      this.start = start;
      this.startControl = startControl;
      this.endControl = endControl;
      this.end = end;
    }
    BezierCurve2.prototype.subdivide = function(t, firstHalf) {
      var ab = lerp(this.start, this.startControl, t);
      var bc = lerp(this.startControl, this.endControl, t);
      var cd = lerp(this.endControl, this.end, t);
      var abbc = lerp(ab, bc, t);
      var bccd = lerp(bc, cd, t);
      var dest = lerp(abbc, bccd, t);
      return firstHalf ? new BezierCurve2(this.start, ab, abbc, dest) : new BezierCurve2(dest, bccd, cd, this.end);
    };
    BezierCurve2.prototype.add = function(deltaX, deltaY) {
      return new BezierCurve2(this.start.add(deltaX, deltaY), this.startControl.add(deltaX, deltaY), this.endControl.add(deltaX, deltaY), this.end.add(deltaX, deltaY));
    };
    BezierCurve2.prototype.reverse = function() {
      return new BezierCurve2(this.end, this.endControl, this.startControl, this.start);
    };
    return BezierCurve2;
  }()
);
var isBezierCurve = function(path) {
  return path.type === 1;
};
var BoundCurves = (
  /** @class */
  function() {
    function BoundCurves2(element) {
      var styles = element.styles;
      var bounds = element.bounds;
      var _a = getAbsoluteValueForTuple(styles.borderTopLeftRadius, bounds.width, bounds.height), tlh = _a[0], tlv = _a[1];
      var _b = getAbsoluteValueForTuple(styles.borderTopRightRadius, bounds.width, bounds.height), trh = _b[0], trv = _b[1];
      var _c = getAbsoluteValueForTuple(styles.borderBottomRightRadius, bounds.width, bounds.height), brh = _c[0], brv = _c[1];
      var _d = getAbsoluteValueForTuple(styles.borderBottomLeftRadius, bounds.width, bounds.height), blh = _d[0], blv = _d[1];
      var factors = [];
      factors.push((tlh + trh) / bounds.width);
      factors.push((blh + brh) / bounds.width);
      factors.push((tlv + blv) / bounds.height);
      factors.push((trv + brv) / bounds.height);
      var maxFactor = Math.max.apply(Math, factors);
      if (maxFactor > 1) {
        tlh /= maxFactor;
        tlv /= maxFactor;
        trh /= maxFactor;
        trv /= maxFactor;
        brh /= maxFactor;
        brv /= maxFactor;
        blh /= maxFactor;
        blv /= maxFactor;
      }
      var topWidth = bounds.width - trh;
      var rightHeight = bounds.height - brv;
      var bottomWidth = bounds.width - brh;
      var leftHeight = bounds.height - blv;
      var borderTopWidth2 = styles.borderTopWidth;
      var borderRightWidth2 = styles.borderRightWidth;
      var borderBottomWidth2 = styles.borderBottomWidth;
      var borderLeftWidth2 = styles.borderLeftWidth;
      var paddingTop2 = getAbsoluteValue(styles.paddingTop, element.bounds.width);
      var paddingRight2 = getAbsoluteValue(styles.paddingRight, element.bounds.width);
      var paddingBottom2 = getAbsoluteValue(styles.paddingBottom, element.bounds.width);
      var paddingLeft2 = getAbsoluteValue(styles.paddingLeft, element.bounds.width);
      this.topLeftBorderDoubleOuterBox = tlh > 0 || tlv > 0 ? getCurvePoints(bounds.left + borderLeftWidth2 / 3, bounds.top + borderTopWidth2 / 3, tlh - borderLeftWidth2 / 3, tlv - borderTopWidth2 / 3, CORNER.TOP_LEFT) : new Vector(bounds.left + borderLeftWidth2 / 3, bounds.top + borderTopWidth2 / 3);
      this.topRightBorderDoubleOuterBox = tlh > 0 || tlv > 0 ? getCurvePoints(bounds.left + topWidth, bounds.top + borderTopWidth2 / 3, trh - borderRightWidth2 / 3, trv - borderTopWidth2 / 3, CORNER.TOP_RIGHT) : new Vector(bounds.left + bounds.width - borderRightWidth2 / 3, bounds.top + borderTopWidth2 / 3);
      this.bottomRightBorderDoubleOuterBox = brh > 0 || brv > 0 ? getCurvePoints(bounds.left + bottomWidth, bounds.top + rightHeight, brh - borderRightWidth2 / 3, brv - borderBottomWidth2 / 3, CORNER.BOTTOM_RIGHT) : new Vector(bounds.left + bounds.width - borderRightWidth2 / 3, bounds.top + bounds.height - borderBottomWidth2 / 3);
      this.bottomLeftBorderDoubleOuterBox = blh > 0 || blv > 0 ? getCurvePoints(bounds.left + borderLeftWidth2 / 3, bounds.top + leftHeight, blh - borderLeftWidth2 / 3, blv - borderBottomWidth2 / 3, CORNER.BOTTOM_LEFT) : new Vector(bounds.left + borderLeftWidth2 / 3, bounds.top + bounds.height - borderBottomWidth2 / 3);
      this.topLeftBorderDoubleInnerBox = tlh > 0 || tlv > 0 ? getCurvePoints(bounds.left + borderLeftWidth2 * 2 / 3, bounds.top + borderTopWidth2 * 2 / 3, tlh - borderLeftWidth2 * 2 / 3, tlv - borderTopWidth2 * 2 / 3, CORNER.TOP_LEFT) : new Vector(bounds.left + borderLeftWidth2 * 2 / 3, bounds.top + borderTopWidth2 * 2 / 3);
      this.topRightBorderDoubleInnerBox = tlh > 0 || tlv > 0 ? getCurvePoints(bounds.left + topWidth, bounds.top + borderTopWidth2 * 2 / 3, trh - borderRightWidth2 * 2 / 3, trv - borderTopWidth2 * 2 / 3, CORNER.TOP_RIGHT) : new Vector(bounds.left + bounds.width - borderRightWidth2 * 2 / 3, bounds.top + borderTopWidth2 * 2 / 3);
      this.bottomRightBorderDoubleInnerBox = brh > 0 || brv > 0 ? getCurvePoints(bounds.left + bottomWidth, bounds.top + rightHeight, brh - borderRightWidth2 * 2 / 3, brv - borderBottomWidth2 * 2 / 3, CORNER.BOTTOM_RIGHT) : new Vector(bounds.left + bounds.width - borderRightWidth2 * 2 / 3, bounds.top + bounds.height - borderBottomWidth2 * 2 / 3);
      this.bottomLeftBorderDoubleInnerBox = blh > 0 || blv > 0 ? getCurvePoints(bounds.left + borderLeftWidth2 * 2 / 3, bounds.top + leftHeight, blh - borderLeftWidth2 * 2 / 3, blv - borderBottomWidth2 * 2 / 3, CORNER.BOTTOM_LEFT) : new Vector(bounds.left + borderLeftWidth2 * 2 / 3, bounds.top + bounds.height - borderBottomWidth2 * 2 / 3);
      this.topLeftBorderStroke = tlh > 0 || tlv > 0 ? getCurvePoints(bounds.left + borderLeftWidth2 / 2, bounds.top + borderTopWidth2 / 2, tlh - borderLeftWidth2 / 2, tlv - borderTopWidth2 / 2, CORNER.TOP_LEFT) : new Vector(bounds.left + borderLeftWidth2 / 2, bounds.top + borderTopWidth2 / 2);
      this.topRightBorderStroke = tlh > 0 || tlv > 0 ? getCurvePoints(bounds.left + topWidth, bounds.top + borderTopWidth2 / 2, trh - borderRightWidth2 / 2, trv - borderTopWidth2 / 2, CORNER.TOP_RIGHT) : new Vector(bounds.left + bounds.width - borderRightWidth2 / 2, bounds.top + borderTopWidth2 / 2);
      this.bottomRightBorderStroke = brh > 0 || brv > 0 ? getCurvePoints(bounds.left + bottomWidth, bounds.top + rightHeight, brh - borderRightWidth2 / 2, brv - borderBottomWidth2 / 2, CORNER.BOTTOM_RIGHT) : new Vector(bounds.left + bounds.width - borderRightWidth2 / 2, bounds.top + bounds.height - borderBottomWidth2 / 2);
      this.bottomLeftBorderStroke = blh > 0 || blv > 0 ? getCurvePoints(bounds.left + borderLeftWidth2 / 2, bounds.top + leftHeight, blh - borderLeftWidth2 / 2, blv - borderBottomWidth2 / 2, CORNER.BOTTOM_LEFT) : new Vector(bounds.left + borderLeftWidth2 / 2, bounds.top + bounds.height - borderBottomWidth2 / 2);
      this.topLeftBorderBox = tlh > 0 || tlv > 0 ? getCurvePoints(bounds.left, bounds.top, tlh, tlv, CORNER.TOP_LEFT) : new Vector(bounds.left, bounds.top);
      this.topRightBorderBox = trh > 0 || trv > 0 ? getCurvePoints(bounds.left + topWidth, bounds.top, trh, trv, CORNER.TOP_RIGHT) : new Vector(bounds.left + bounds.width, bounds.top);
      this.bottomRightBorderBox = brh > 0 || brv > 0 ? getCurvePoints(bounds.left + bottomWidth, bounds.top + rightHeight, brh, brv, CORNER.BOTTOM_RIGHT) : new Vector(bounds.left + bounds.width, bounds.top + bounds.height);
      this.bottomLeftBorderBox = blh > 0 || blv > 0 ? getCurvePoints(bounds.left, bounds.top + leftHeight, blh, blv, CORNER.BOTTOM_LEFT) : new Vector(bounds.left, bounds.top + bounds.height);
      this.topLeftPaddingBox = tlh > 0 || tlv > 0 ? getCurvePoints(bounds.left + borderLeftWidth2, bounds.top + borderTopWidth2, Math.max(0, tlh - borderLeftWidth2), Math.max(0, tlv - borderTopWidth2), CORNER.TOP_LEFT) : new Vector(bounds.left + borderLeftWidth2, bounds.top + borderTopWidth2);
      this.topRightPaddingBox = trh > 0 || trv > 0 ? getCurvePoints(bounds.left + Math.min(topWidth, bounds.width - borderRightWidth2), bounds.top + borderTopWidth2, topWidth > bounds.width + borderRightWidth2 ? 0 : Math.max(0, trh - borderRightWidth2), Math.max(0, trv - borderTopWidth2), CORNER.TOP_RIGHT) : new Vector(bounds.left + bounds.width - borderRightWidth2, bounds.top + borderTopWidth2);
      this.bottomRightPaddingBox = brh > 0 || brv > 0 ? getCurvePoints(bounds.left + Math.min(bottomWidth, bounds.width - borderLeftWidth2), bounds.top + Math.min(rightHeight, bounds.height - borderBottomWidth2), Math.max(0, brh - borderRightWidth2), Math.max(0, brv - borderBottomWidth2), CORNER.BOTTOM_RIGHT) : new Vector(bounds.left + bounds.width - borderRightWidth2, bounds.top + bounds.height - borderBottomWidth2);
      this.bottomLeftPaddingBox = blh > 0 || blv > 0 ? getCurvePoints(bounds.left + borderLeftWidth2, bounds.top + Math.min(leftHeight, bounds.height - borderBottomWidth2), Math.max(0, blh - borderLeftWidth2), Math.max(0, blv - borderBottomWidth2), CORNER.BOTTOM_LEFT) : new Vector(bounds.left + borderLeftWidth2, bounds.top + bounds.height - borderBottomWidth2);
      this.topLeftContentBox = tlh > 0 || tlv > 0 ? getCurvePoints(bounds.left + borderLeftWidth2 + paddingLeft2, bounds.top + borderTopWidth2 + paddingTop2, Math.max(0, tlh - (borderLeftWidth2 + paddingLeft2)), Math.max(0, tlv - (borderTopWidth2 + paddingTop2)), CORNER.TOP_LEFT) : new Vector(bounds.left + borderLeftWidth2 + paddingLeft2, bounds.top + borderTopWidth2 + paddingTop2);
      this.topRightContentBox = trh > 0 || trv > 0 ? getCurvePoints(bounds.left + Math.min(topWidth, bounds.width + borderLeftWidth2 + paddingLeft2), bounds.top + borderTopWidth2 + paddingTop2, topWidth > bounds.width + borderLeftWidth2 + paddingLeft2 ? 0 : trh - borderLeftWidth2 + paddingLeft2, trv - (borderTopWidth2 + paddingTop2), CORNER.TOP_RIGHT) : new Vector(bounds.left + bounds.width - (borderRightWidth2 + paddingRight2), bounds.top + borderTopWidth2 + paddingTop2);
      this.bottomRightContentBox = brh > 0 || brv > 0 ? getCurvePoints(bounds.left + Math.min(bottomWidth, bounds.width - (borderLeftWidth2 + paddingLeft2)), bounds.top + Math.min(rightHeight, bounds.height + borderTopWidth2 + paddingTop2), Math.max(0, brh - (borderRightWidth2 + paddingRight2)), brv - (borderBottomWidth2 + paddingBottom2), CORNER.BOTTOM_RIGHT) : new Vector(bounds.left + bounds.width - (borderRightWidth2 + paddingRight2), bounds.top + bounds.height - (borderBottomWidth2 + paddingBottom2));
      this.bottomLeftContentBox = blh > 0 || blv > 0 ? getCurvePoints(bounds.left + borderLeftWidth2 + paddingLeft2, bounds.top + leftHeight, Math.max(0, blh - (borderLeftWidth2 + paddingLeft2)), blv - (borderBottomWidth2 + paddingBottom2), CORNER.BOTTOM_LEFT) : new Vector(bounds.left + borderLeftWidth2 + paddingLeft2, bounds.top + bounds.height - (borderBottomWidth2 + paddingBottom2));
    }
    return BoundCurves2;
  }()
);
var CORNER;
(function(CORNER2) {
  CORNER2[CORNER2["TOP_LEFT"] = 0] = "TOP_LEFT";
  CORNER2[CORNER2["TOP_RIGHT"] = 1] = "TOP_RIGHT";
  CORNER2[CORNER2["BOTTOM_RIGHT"] = 2] = "BOTTOM_RIGHT";
  CORNER2[CORNER2["BOTTOM_LEFT"] = 3] = "BOTTOM_LEFT";
})(CORNER || (CORNER = {}));
var getCurvePoints = function(x, y, r1, r2, position2) {
  var kappa = 4 * ((Math.sqrt(2) - 1) / 3);
  var ox = r1 * kappa;
  var oy = r2 * kappa;
  var xm = x + r1;
  var ym = y + r2;
  switch (position2) {
    case CORNER.TOP_LEFT:
      return new BezierCurve(new Vector(x, ym), new Vector(x, ym - oy), new Vector(xm - ox, y), new Vector(xm, y));
    case CORNER.TOP_RIGHT:
      return new BezierCurve(new Vector(x, y), new Vector(x + ox, y), new Vector(xm, ym - oy), new Vector(xm, ym));
    case CORNER.BOTTOM_RIGHT:
      return new BezierCurve(new Vector(xm, y), new Vector(xm, y + oy), new Vector(x + ox, ym), new Vector(x, ym));
    case CORNER.BOTTOM_LEFT:
    default:
      return new BezierCurve(new Vector(xm, ym), new Vector(xm - ox, ym), new Vector(x, y + oy), new Vector(x, y));
  }
};
var calculateBorderBoxPath = function(curves) {
  return [curves.topLeftBorderBox, curves.topRightBorderBox, curves.bottomRightBorderBox, curves.bottomLeftBorderBox];
};
var calculateContentBoxPath = function(curves) {
  return [
    curves.topLeftContentBox,
    curves.topRightContentBox,
    curves.bottomRightContentBox,
    curves.bottomLeftContentBox
  ];
};
var calculatePaddingBoxPath = function(curves) {
  return [
    curves.topLeftPaddingBox,
    curves.topRightPaddingBox,
    curves.bottomRightPaddingBox,
    curves.bottomLeftPaddingBox
  ];
};
var TransformEffect = (
  /** @class */
  function() {
    function TransformEffect2(offsetX, offsetY, matrix2) {
      this.offsetX = offsetX;
      this.offsetY = offsetY;
      this.matrix = matrix2;
      this.type = 0;
      this.target = 2 | 4;
    }
    return TransformEffect2;
  }()
);
var ClipEffect = (
  /** @class */
  function() {
    function ClipEffect2(path, target) {
      this.path = path;
      this.target = target;
      this.type = 1;
    }
    return ClipEffect2;
  }()
);
var OpacityEffect = (
  /** @class */
  function() {
    function OpacityEffect2(opacity2) {
      this.opacity = opacity2;
      this.type = 2;
      this.target = 2 | 4;
    }
    return OpacityEffect2;
  }()
);
var isTransformEffect = function(effect) {
  return effect.type === 0;
};
var isClipEffect = function(effect) {
  return effect.type === 1;
};
var isOpacityEffect = function(effect) {
  return effect.type === 2;
};
var equalPath = function(a2, b) {
  if (a2.length === b.length) {
    return a2.some(function(v2, i) {
      return v2 === b[i];
    });
  }
  return false;
};
var transformPath = function(path, deltaX, deltaY, deltaW, deltaH) {
  return path.map(function(point, index) {
    switch (index) {
      case 0:
        return point.add(deltaX, deltaY);
      case 1:
        return point.add(deltaX + deltaW, deltaY);
      case 2:
        return point.add(deltaX + deltaW, deltaY + deltaH);
      case 3:
        return point.add(deltaX, deltaY + deltaH);
    }
    return point;
  });
};
var StackingContext = (
  /** @class */
  function() {
    function StackingContext2(container) {
      this.element = container;
      this.inlineLevel = [];
      this.nonInlineLevel = [];
      this.negativeZIndex = [];
      this.zeroOrAutoZIndexOrTransformedOrOpacity = [];
      this.positiveZIndex = [];
      this.nonPositionedFloats = [];
      this.nonPositionedInlineLevel = [];
    }
    return StackingContext2;
  }()
);
var ElementPaint = (
  /** @class */
  function() {
    function ElementPaint2(container, parent) {
      this.container = container;
      this.parent = parent;
      this.effects = [];
      this.curves = new BoundCurves(this.container);
      if (this.container.styles.opacity < 1) {
        this.effects.push(new OpacityEffect(this.container.styles.opacity));
      }
      if (this.container.styles.transform !== null) {
        var offsetX = this.container.bounds.left + this.container.styles.transformOrigin[0].number;
        var offsetY = this.container.bounds.top + this.container.styles.transformOrigin[1].number;
        var matrix2 = this.container.styles.transform;
        this.effects.push(new TransformEffect(offsetX, offsetY, matrix2));
      }
      if (this.container.styles.overflowX !== 0) {
        var borderBox = calculateBorderBoxPath(this.curves);
        var paddingBox2 = calculatePaddingBoxPath(this.curves);
        if (equalPath(borderBox, paddingBox2)) {
          this.effects.push(new ClipEffect(
            borderBox,
            2 | 4
            /* CONTENT */
          ));
        } else {
          this.effects.push(new ClipEffect(
            borderBox,
            2
            /* BACKGROUND_BORDERS */
          ));
          this.effects.push(new ClipEffect(
            paddingBox2,
            4
            /* CONTENT */
          ));
        }
      }
    }
    ElementPaint2.prototype.getEffects = function(target) {
      var inFlow = [
        2,
        3
        /* FIXED */
      ].indexOf(this.container.styles.position) === -1;
      var parent = this.parent;
      var effects = this.effects.slice(0);
      while (parent) {
        var croplessEffects = parent.effects.filter(function(effect) {
          return !isClipEffect(effect);
        });
        if (inFlow || parent.container.styles.position !== 0 || !parent.parent) {
          effects.unshift.apply(effects, croplessEffects);
          inFlow = [
            2,
            3
            /* FIXED */
          ].indexOf(parent.container.styles.position) === -1;
          if (parent.container.styles.overflowX !== 0) {
            var borderBox = calculateBorderBoxPath(parent.curves);
            var paddingBox2 = calculatePaddingBoxPath(parent.curves);
            if (!equalPath(borderBox, paddingBox2)) {
              effects.unshift(new ClipEffect(
                paddingBox2,
                2 | 4
                /* CONTENT */
              ));
            }
          }
        } else {
          effects.unshift.apply(effects, croplessEffects);
        }
        parent = parent.parent;
      }
      return effects.filter(function(effect) {
        return contains(effect.target, target);
      });
    };
    return ElementPaint2;
  }()
);
var parseStackTree = function(parent, stackingContext, realStackingContext, listItems) {
  parent.container.elements.forEach(function(child) {
    var treatAsRealStackingContext = contains(
      child.flags,
      4
      /* CREATES_REAL_STACKING_CONTEXT */
    );
    var createsStackingContext2 = contains(
      child.flags,
      2
      /* CREATES_STACKING_CONTEXT */
    );
    var paintContainer = new ElementPaint(child, parent);
    if (contains(
      child.styles.display,
      2048
      /* LIST_ITEM */
    )) {
      listItems.push(paintContainer);
    }
    var listOwnerItems = contains(
      child.flags,
      8
      /* IS_LIST_OWNER */
    ) ? [] : listItems;
    if (treatAsRealStackingContext || createsStackingContext2) {
      var parentStack = treatAsRealStackingContext || child.styles.isPositioned() ? realStackingContext : stackingContext;
      var stack = new StackingContext(paintContainer);
      if (child.styles.isPositioned() || child.styles.opacity < 1 || child.styles.isTransformed()) {
        var order_1 = child.styles.zIndex.order;
        if (order_1 < 0) {
          var index_1 = 0;
          parentStack.negativeZIndex.some(function(current, i) {
            if (order_1 > current.element.container.styles.zIndex.order) {
              index_1 = i;
              return false;
            } else if (index_1 > 0) {
              return true;
            }
            return false;
          });
          parentStack.negativeZIndex.splice(index_1, 0, stack);
        } else if (order_1 > 0) {
          var index_2 = 0;
          parentStack.positiveZIndex.some(function(current, i) {
            if (order_1 >= current.element.container.styles.zIndex.order) {
              index_2 = i + 1;
              return false;
            } else if (index_2 > 0) {
              return true;
            }
            return false;
          });
          parentStack.positiveZIndex.splice(index_2, 0, stack);
        } else {
          parentStack.zeroOrAutoZIndexOrTransformedOrOpacity.push(stack);
        }
      } else {
        if (child.styles.isFloating()) {
          parentStack.nonPositionedFloats.push(stack);
        } else {
          parentStack.nonPositionedInlineLevel.push(stack);
        }
      }
      parseStackTree(paintContainer, stack, treatAsRealStackingContext ? stack : realStackingContext, listOwnerItems);
    } else {
      if (child.styles.isInlineLevel()) {
        stackingContext.inlineLevel.push(paintContainer);
      } else {
        stackingContext.nonInlineLevel.push(paintContainer);
      }
      parseStackTree(paintContainer, stackingContext, realStackingContext, listOwnerItems);
    }
    if (contains(
      child.flags,
      8
      /* IS_LIST_OWNER */
    )) {
      processListItems(child, listOwnerItems);
    }
  });
};
var processListItems = function(owner, elements) {
  var numbering = owner instanceof OLElementContainer ? owner.start : 1;
  var reversed = owner instanceof OLElementContainer ? owner.reversed : false;
  for (var i = 0; i < elements.length; i++) {
    var item = elements[i];
    if (item.container instanceof LIElementContainer && typeof item.container.value === "number" && item.container.value !== 0) {
      numbering = item.container.value;
    }
    item.listValue = createCounterText(numbering, item.container.styles.listStyleType, true);
    numbering += reversed ? -1 : 1;
  }
};
var parseStackingContexts = function(container) {
  var paintContainer = new ElementPaint(container, null);
  var root = new StackingContext(paintContainer);
  var listItems = [];
  parseStackTree(paintContainer, root, root, listItems);
  processListItems(paintContainer.container, listItems);
  return root;
};
var parsePathForBorder = function(curves, borderSide) {
  switch (borderSide) {
    case 0:
      return createPathFromCurves(curves.topLeftBorderBox, curves.topLeftPaddingBox, curves.topRightBorderBox, curves.topRightPaddingBox);
    case 1:
      return createPathFromCurves(curves.topRightBorderBox, curves.topRightPaddingBox, curves.bottomRightBorderBox, curves.bottomRightPaddingBox);
    case 2:
      return createPathFromCurves(curves.bottomRightBorderBox, curves.bottomRightPaddingBox, curves.bottomLeftBorderBox, curves.bottomLeftPaddingBox);
    case 3:
    default:
      return createPathFromCurves(curves.bottomLeftBorderBox, curves.bottomLeftPaddingBox, curves.topLeftBorderBox, curves.topLeftPaddingBox);
  }
};
var parsePathForBorderDoubleOuter = function(curves, borderSide) {
  switch (borderSide) {
    case 0:
      return createPathFromCurves(curves.topLeftBorderBox, curves.topLeftBorderDoubleOuterBox, curves.topRightBorderBox, curves.topRightBorderDoubleOuterBox);
    case 1:
      return createPathFromCurves(curves.topRightBorderBox, curves.topRightBorderDoubleOuterBox, curves.bottomRightBorderBox, curves.bottomRightBorderDoubleOuterBox);
    case 2:
      return createPathFromCurves(curves.bottomRightBorderBox, curves.bottomRightBorderDoubleOuterBox, curves.bottomLeftBorderBox, curves.bottomLeftBorderDoubleOuterBox);
    case 3:
    default:
      return createPathFromCurves(curves.bottomLeftBorderBox, curves.bottomLeftBorderDoubleOuterBox, curves.topLeftBorderBox, curves.topLeftBorderDoubleOuterBox);
  }
};
var parsePathForBorderDoubleInner = function(curves, borderSide) {
  switch (borderSide) {
    case 0:
      return createPathFromCurves(curves.topLeftBorderDoubleInnerBox, curves.topLeftPaddingBox, curves.topRightBorderDoubleInnerBox, curves.topRightPaddingBox);
    case 1:
      return createPathFromCurves(curves.topRightBorderDoubleInnerBox, curves.topRightPaddingBox, curves.bottomRightBorderDoubleInnerBox, curves.bottomRightPaddingBox);
    case 2:
      return createPathFromCurves(curves.bottomRightBorderDoubleInnerBox, curves.bottomRightPaddingBox, curves.bottomLeftBorderDoubleInnerBox, curves.bottomLeftPaddingBox);
    case 3:
    default:
      return createPathFromCurves(curves.bottomLeftBorderDoubleInnerBox, curves.bottomLeftPaddingBox, curves.topLeftBorderDoubleInnerBox, curves.topLeftPaddingBox);
  }
};
var parsePathForBorderStroke = function(curves, borderSide) {
  switch (borderSide) {
    case 0:
      return createStrokePathFromCurves(curves.topLeftBorderStroke, curves.topRightBorderStroke);
    case 1:
      return createStrokePathFromCurves(curves.topRightBorderStroke, curves.bottomRightBorderStroke);
    case 2:
      return createStrokePathFromCurves(curves.bottomRightBorderStroke, curves.bottomLeftBorderStroke);
    case 3:
    default:
      return createStrokePathFromCurves(curves.bottomLeftBorderStroke, curves.topLeftBorderStroke);
  }
};
var createStrokePathFromCurves = function(outer1, outer2) {
  var path = [];
  if (isBezierCurve(outer1)) {
    path.push(outer1.subdivide(0.5, false));
  } else {
    path.push(outer1);
  }
  if (isBezierCurve(outer2)) {
    path.push(outer2.subdivide(0.5, true));
  } else {
    path.push(outer2);
  }
  return path;
};
var createPathFromCurves = function(outer1, inner1, outer2, inner2) {
  var path = [];
  if (isBezierCurve(outer1)) {
    path.push(outer1.subdivide(0.5, false));
  } else {
    path.push(outer1);
  }
  if (isBezierCurve(outer2)) {
    path.push(outer2.subdivide(0.5, true));
  } else {
    path.push(outer2);
  }
  if (isBezierCurve(inner2)) {
    path.push(inner2.subdivide(0.5, true).reverse());
  } else {
    path.push(inner2);
  }
  if (isBezierCurve(inner1)) {
    path.push(inner1.subdivide(0.5, false).reverse());
  } else {
    path.push(inner1);
  }
  return path;
};
var paddingBox = function(element) {
  var bounds = element.bounds;
  var styles = element.styles;
  return bounds.add(styles.borderLeftWidth, styles.borderTopWidth, -(styles.borderRightWidth + styles.borderLeftWidth), -(styles.borderTopWidth + styles.borderBottomWidth));
};
var contentBox = function(element) {
  var styles = element.styles;
  var bounds = element.bounds;
  var paddingLeft2 = getAbsoluteValue(styles.paddingLeft, bounds.width);
  var paddingRight2 = getAbsoluteValue(styles.paddingRight, bounds.width);
  var paddingTop2 = getAbsoluteValue(styles.paddingTop, bounds.width);
  var paddingBottom2 = getAbsoluteValue(styles.paddingBottom, bounds.width);
  return bounds.add(paddingLeft2 + styles.borderLeftWidth, paddingTop2 + styles.borderTopWidth, -(styles.borderRightWidth + styles.borderLeftWidth + paddingLeft2 + paddingRight2), -(styles.borderTopWidth + styles.borderBottomWidth + paddingTop2 + paddingBottom2));
};
var calculateBackgroundPositioningArea = function(backgroundOrigin2, element) {
  if (backgroundOrigin2 === 0) {
    return element.bounds;
  }
  if (backgroundOrigin2 === 2) {
    return contentBox(element);
  }
  return paddingBox(element);
};
var calculateBackgroundPaintingArea = function(backgroundClip2, element) {
  if (backgroundClip2 === 0) {
    return element.bounds;
  }
  if (backgroundClip2 === 2) {
    return contentBox(element);
  }
  return paddingBox(element);
};
var calculateBackgroundRendering = function(container, index, intrinsicSize) {
  var backgroundPositioningArea = calculateBackgroundPositioningArea(getBackgroundValueForIndex(container.styles.backgroundOrigin, index), container);
  var backgroundPaintingArea = calculateBackgroundPaintingArea(getBackgroundValueForIndex(container.styles.backgroundClip, index), container);
  var backgroundImageSize = calculateBackgroundSize(getBackgroundValueForIndex(container.styles.backgroundSize, index), intrinsicSize, backgroundPositioningArea);
  var sizeWidth = backgroundImageSize[0], sizeHeight = backgroundImageSize[1];
  var position2 = getAbsoluteValueForTuple(getBackgroundValueForIndex(container.styles.backgroundPosition, index), backgroundPositioningArea.width - sizeWidth, backgroundPositioningArea.height - sizeHeight);
  var path = calculateBackgroundRepeatPath(getBackgroundValueForIndex(container.styles.backgroundRepeat, index), position2, backgroundImageSize, backgroundPositioningArea, backgroundPaintingArea);
  var offsetX = Math.round(backgroundPositioningArea.left + position2[0]);
  var offsetY = Math.round(backgroundPositioningArea.top + position2[1]);
  return [path, offsetX, offsetY, sizeWidth, sizeHeight];
};
var isAuto = function(token) {
  return isIdentToken(token) && token.value === BACKGROUND_SIZE.AUTO;
};
var hasIntrinsicValue = function(value) {
  return typeof value === "number";
};
var calculateBackgroundSize = function(size, _a, bounds) {
  var intrinsicWidth = _a[0], intrinsicHeight = _a[1], intrinsicProportion = _a[2];
  var first = size[0], second = size[1];
  if (!first) {
    return [0, 0];
  }
  if (isLengthPercentage(first) && second && isLengthPercentage(second)) {
    return [getAbsoluteValue(first, bounds.width), getAbsoluteValue(second, bounds.height)];
  }
  var hasIntrinsicProportion = hasIntrinsicValue(intrinsicProportion);
  if (isIdentToken(first) && (first.value === BACKGROUND_SIZE.CONTAIN || first.value === BACKGROUND_SIZE.COVER)) {
    if (hasIntrinsicValue(intrinsicProportion)) {
      var targetRatio = bounds.width / bounds.height;
      return targetRatio < intrinsicProportion !== (first.value === BACKGROUND_SIZE.COVER) ? [bounds.width, bounds.width / intrinsicProportion] : [bounds.height * intrinsicProportion, bounds.height];
    }
    return [bounds.width, bounds.height];
  }
  var hasIntrinsicWidth = hasIntrinsicValue(intrinsicWidth);
  var hasIntrinsicHeight = hasIntrinsicValue(intrinsicHeight);
  var hasIntrinsicDimensions = hasIntrinsicWidth || hasIntrinsicHeight;
  if (isAuto(first) && (!second || isAuto(second))) {
    if (hasIntrinsicWidth && hasIntrinsicHeight) {
      return [intrinsicWidth, intrinsicHeight];
    }
    if (!hasIntrinsicProportion && !hasIntrinsicDimensions) {
      return [bounds.width, bounds.height];
    }
    if (hasIntrinsicDimensions && hasIntrinsicProportion) {
      var width_1 = hasIntrinsicWidth ? intrinsicWidth : intrinsicHeight * intrinsicProportion;
      var height_1 = hasIntrinsicHeight ? intrinsicHeight : intrinsicWidth / intrinsicProportion;
      return [width_1, height_1];
    }
    var width_2 = hasIntrinsicWidth ? intrinsicWidth : bounds.width;
    var height_2 = hasIntrinsicHeight ? intrinsicHeight : bounds.height;
    return [width_2, height_2];
  }
  if (hasIntrinsicProportion) {
    var width_3 = 0;
    var height_3 = 0;
    if (isLengthPercentage(first)) {
      width_3 = getAbsoluteValue(first, bounds.width);
    } else if (isLengthPercentage(second)) {
      height_3 = getAbsoluteValue(second, bounds.height);
    }
    if (isAuto(first)) {
      width_3 = height_3 * intrinsicProportion;
    } else if (!second || isAuto(second)) {
      height_3 = width_3 / intrinsicProportion;
    }
    return [width_3, height_3];
  }
  var width = null;
  var height = null;
  if (isLengthPercentage(first)) {
    width = getAbsoluteValue(first, bounds.width);
  } else if (second && isLengthPercentage(second)) {
    height = getAbsoluteValue(second, bounds.height);
  }
  if (width !== null && (!second || isAuto(second))) {
    height = hasIntrinsicWidth && hasIntrinsicHeight ? width / intrinsicWidth * intrinsicHeight : bounds.height;
  }
  if (height !== null && isAuto(first)) {
    width = hasIntrinsicWidth && hasIntrinsicHeight ? height / intrinsicHeight * intrinsicWidth : bounds.width;
  }
  if (width !== null && height !== null) {
    return [width, height];
  }
  throw new Error("Unable to calculate background-size for element");
};
var getBackgroundValueForIndex = function(values, index) {
  var value = values[index];
  if (typeof value === "undefined") {
    return values[0];
  }
  return value;
};
var calculateBackgroundRepeatPath = function(repeat, _a, _b, backgroundPositioningArea, backgroundPaintingArea) {
  var x = _a[0], y = _a[1];
  var width = _b[0], height = _b[1];
  switch (repeat) {
    case 2:
      return [
        new Vector(Math.round(backgroundPositioningArea.left), Math.round(backgroundPositioningArea.top + y)),
        new Vector(Math.round(backgroundPositioningArea.left + backgroundPositioningArea.width), Math.round(backgroundPositioningArea.top + y)),
        new Vector(Math.round(backgroundPositioningArea.left + backgroundPositioningArea.width), Math.round(height + backgroundPositioningArea.top + y)),
        new Vector(Math.round(backgroundPositioningArea.left), Math.round(height + backgroundPositioningArea.top + y))
      ];
    case 3:
      return [
        new Vector(Math.round(backgroundPositioningArea.left + x), Math.round(backgroundPositioningArea.top)),
        new Vector(Math.round(backgroundPositioningArea.left + x + width), Math.round(backgroundPositioningArea.top)),
        new Vector(Math.round(backgroundPositioningArea.left + x + width), Math.round(backgroundPositioningArea.height + backgroundPositioningArea.top)),
        new Vector(Math.round(backgroundPositioningArea.left + x), Math.round(backgroundPositioningArea.height + backgroundPositioningArea.top))
      ];
    case 1:
      return [
        new Vector(Math.round(backgroundPositioningArea.left + x), Math.round(backgroundPositioningArea.top + y)),
        new Vector(Math.round(backgroundPositioningArea.left + x + width), Math.round(backgroundPositioningArea.top + y)),
        new Vector(Math.round(backgroundPositioningArea.left + x + width), Math.round(backgroundPositioningArea.top + y + height)),
        new Vector(Math.round(backgroundPositioningArea.left + x), Math.round(backgroundPositioningArea.top + y + height))
      ];
    default:
      return [
        new Vector(Math.round(backgroundPaintingArea.left), Math.round(backgroundPaintingArea.top)),
        new Vector(Math.round(backgroundPaintingArea.left + backgroundPaintingArea.width), Math.round(backgroundPaintingArea.top)),
        new Vector(Math.round(backgroundPaintingArea.left + backgroundPaintingArea.width), Math.round(backgroundPaintingArea.height + backgroundPaintingArea.top)),
        new Vector(Math.round(backgroundPaintingArea.left), Math.round(backgroundPaintingArea.height + backgroundPaintingArea.top))
      ];
  }
};
var SMALL_IMAGE = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
var SAMPLE_TEXT = "Hidden Text";
var FontMetrics = (
  /** @class */
  function() {
    function FontMetrics2(document2) {
      this._data = {};
      this._document = document2;
    }
    FontMetrics2.prototype.parseMetrics = function(fontFamily2, fontSize2) {
      var container = this._document.createElement("div");
      var img = this._document.createElement("img");
      var span = this._document.createElement("span");
      var body = this._document.body;
      container.style.visibility = "hidden";
      container.style.fontFamily = fontFamily2;
      container.style.fontSize = fontSize2;
      container.style.margin = "0";
      container.style.padding = "0";
      container.style.whiteSpace = "nowrap";
      body.appendChild(container);
      img.src = SMALL_IMAGE;
      img.width = 1;
      img.height = 1;
      img.style.margin = "0";
      img.style.padding = "0";
      img.style.verticalAlign = "baseline";
      span.style.fontFamily = fontFamily2;
      span.style.fontSize = fontSize2;
      span.style.margin = "0";
      span.style.padding = "0";
      span.appendChild(this._document.createTextNode(SAMPLE_TEXT));
      container.appendChild(span);
      container.appendChild(img);
      var baseline = img.offsetTop - span.offsetTop + 2;
      container.removeChild(span);
      container.appendChild(this._document.createTextNode(SAMPLE_TEXT));
      container.style.lineHeight = "normal";
      img.style.verticalAlign = "super";
      var middle = img.offsetTop - container.offsetTop + 2;
      body.removeChild(container);
      return { baseline, middle };
    };
    FontMetrics2.prototype.getMetrics = function(fontFamily2, fontSize2) {
      var key = fontFamily2 + " " + fontSize2;
      if (typeof this._data[key] === "undefined") {
        this._data[key] = this.parseMetrics(fontFamily2, fontSize2);
      }
      return this._data[key];
    };
    return FontMetrics2;
  }()
);
var Renderer = (
  /** @class */
  function() {
    function Renderer2(context, options) {
      this.context = context;
      this.options = options;
    }
    return Renderer2;
  }()
);
var MASK_OFFSET = 1e4;
var CanvasRenderer = (
  /** @class */
  function(_super) {
    __extends(CanvasRenderer2, _super);
    function CanvasRenderer2(context, options) {
      var _this = _super.call(this, context, options) || this;
      _this._activeEffects = [];
      _this.canvas = options.canvas ? options.canvas : document.createElement("canvas");
      _this.ctx = _this.canvas.getContext("2d");
      if (!options.canvas) {
        _this.canvas.width = Math.floor(options.width * options.scale);
        _this.canvas.height = Math.floor(options.height * options.scale);
        _this.canvas.style.width = options.width + "px";
        _this.canvas.style.height = options.height + "px";
      }
      _this.fontMetrics = new FontMetrics(document);
      _this.ctx.scale(_this.options.scale, _this.options.scale);
      _this.ctx.translate(-options.x, -options.y);
      _this.ctx.textBaseline = "bottom";
      _this._activeEffects = [];
      _this.context.logger.debug("Canvas renderer initialized (" + options.width + "x" + options.height + ") with scale " + options.scale);
      return _this;
    }
    CanvasRenderer2.prototype.applyEffects = function(effects) {
      var _this = this;
      while (this._activeEffects.length) {
        this.popEffect();
      }
      effects.forEach(function(effect) {
        return _this.applyEffect(effect);
      });
    };
    CanvasRenderer2.prototype.applyEffect = function(effect) {
      this.ctx.save();
      if (isOpacityEffect(effect)) {
        this.ctx.globalAlpha = effect.opacity;
      }
      if (isTransformEffect(effect)) {
        this.ctx.translate(effect.offsetX, effect.offsetY);
        this.ctx.transform(effect.matrix[0], effect.matrix[1], effect.matrix[2], effect.matrix[3], effect.matrix[4], effect.matrix[5]);
        this.ctx.translate(-effect.offsetX, -effect.offsetY);
      }
      if (isClipEffect(effect)) {
        this.path(effect.path);
        this.ctx.clip();
      }
      this._activeEffects.push(effect);
    };
    CanvasRenderer2.prototype.popEffect = function() {
      this._activeEffects.pop();
      this.ctx.restore();
    };
    CanvasRenderer2.prototype.renderStack = function(stack) {
      return __awaiter(this, void 0, void 0, function() {
        var styles;
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              styles = stack.element.container.styles;
              if (!styles.isVisible())
                return [3, 2];
              return [4, this.renderStackContent(stack)];
            case 1:
              _a.sent();
              _a.label = 2;
            case 2:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    CanvasRenderer2.prototype.renderNode = function(paint) {
      return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              if (contains(
                paint.container.flags,
                16
                /* DEBUG_RENDER */
              )) {
                debugger;
              }
              if (!paint.container.styles.isVisible())
                return [3, 3];
              return [4, this.renderNodeBackgroundAndBorders(paint)];
            case 1:
              _a.sent();
              return [4, this.renderNodeContent(paint)];
            case 2:
              _a.sent();
              _a.label = 3;
            case 3:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    CanvasRenderer2.prototype.renderTextWithLetterSpacing = function(text, letterSpacing2, baseline) {
      var _this = this;
      if (letterSpacing2 === 0) {
        this.ctx.fillText(text.text, text.bounds.left, text.bounds.top + baseline);
      } else {
        var letters = segmentGraphemes(text.text);
        letters.reduce(function(left, letter) {
          _this.ctx.fillText(letter, left, text.bounds.top + baseline);
          return left + _this.ctx.measureText(letter).width;
        }, text.bounds.left);
      }
    };
    CanvasRenderer2.prototype.createFontStyle = function(styles) {
      var fontVariant2 = styles.fontVariant.filter(function(variant) {
        return variant === "normal" || variant === "small-caps";
      }).join("");
      var fontFamily2 = fixIOSSystemFonts(styles.fontFamily).join(", ");
      var fontSize2 = isDimensionToken(styles.fontSize) ? "" + styles.fontSize.number + styles.fontSize.unit : styles.fontSize.number + "px";
      return [
        [styles.fontStyle, fontVariant2, styles.fontWeight, fontSize2, fontFamily2].join(" "),
        fontFamily2,
        fontSize2
      ];
    };
    CanvasRenderer2.prototype.renderTextNode = function(text, styles) {
      return __awaiter(this, void 0, void 0, function() {
        var _a, font, fontFamily2, fontSize2, _b, baseline, middle, paintOrder2;
        var _this = this;
        return __generator(this, function(_c) {
          _a = this.createFontStyle(styles), font = _a[0], fontFamily2 = _a[1], fontSize2 = _a[2];
          this.ctx.font = font;
          this.ctx.direction = styles.direction === 1 ? "rtl" : "ltr";
          this.ctx.textAlign = "left";
          this.ctx.textBaseline = "alphabetic";
          _b = this.fontMetrics.getMetrics(fontFamily2, fontSize2), baseline = _b.baseline, middle = _b.middle;
          paintOrder2 = styles.paintOrder;
          text.textBounds.forEach(function(text2) {
            paintOrder2.forEach(function(paintOrderLayer) {
              switch (paintOrderLayer) {
                case 0:
                  _this.ctx.fillStyle = asString(styles.color);
                  _this.renderTextWithLetterSpacing(text2, styles.letterSpacing, baseline);
                  var textShadows = styles.textShadow;
                  if (textShadows.length && text2.text.trim().length) {
                    textShadows.slice(0).reverse().forEach(function(textShadow2) {
                      _this.ctx.shadowColor = asString(textShadow2.color);
                      _this.ctx.shadowOffsetX = textShadow2.offsetX.number * _this.options.scale;
                      _this.ctx.shadowOffsetY = textShadow2.offsetY.number * _this.options.scale;
                      _this.ctx.shadowBlur = textShadow2.blur.number;
                      _this.renderTextWithLetterSpacing(text2, styles.letterSpacing, baseline);
                    });
                    _this.ctx.shadowColor = "";
                    _this.ctx.shadowOffsetX = 0;
                    _this.ctx.shadowOffsetY = 0;
                    _this.ctx.shadowBlur = 0;
                  }
                  if (styles.textDecorationLine.length) {
                    _this.ctx.fillStyle = asString(styles.textDecorationColor || styles.color);
                    styles.textDecorationLine.forEach(function(textDecorationLine2) {
                      switch (textDecorationLine2) {
                        case 1:
                          _this.ctx.fillRect(text2.bounds.left, Math.round(text2.bounds.top + baseline), text2.bounds.width, 1);
                          break;
                        case 2:
                          _this.ctx.fillRect(text2.bounds.left, Math.round(text2.bounds.top), text2.bounds.width, 1);
                          break;
                        case 3:
                          _this.ctx.fillRect(text2.bounds.left, Math.ceil(text2.bounds.top + middle), text2.bounds.width, 1);
                          break;
                      }
                    });
                  }
                  break;
                case 1:
                  if (styles.webkitTextStrokeWidth && text2.text.trim().length) {
                    _this.ctx.strokeStyle = asString(styles.webkitTextStrokeColor);
                    _this.ctx.lineWidth = styles.webkitTextStrokeWidth;
                    _this.ctx.lineJoin = !!window.chrome ? "miter" : "round";
                    _this.ctx.strokeText(text2.text, text2.bounds.left, text2.bounds.top + baseline);
                  }
                  _this.ctx.strokeStyle = "";
                  _this.ctx.lineWidth = 0;
                  _this.ctx.lineJoin = "miter";
                  break;
              }
            });
          });
          return [
            2
            /*return*/
          ];
        });
      });
    };
    CanvasRenderer2.prototype.renderReplacedElement = function(container, curves, image2) {
      if (image2 && container.intrinsicWidth > 0 && container.intrinsicHeight > 0) {
        var box = contentBox(container);
        var path = calculatePaddingBoxPath(curves);
        this.path(path);
        this.ctx.save();
        this.ctx.clip();
        this.ctx.drawImage(image2, 0, 0, container.intrinsicWidth, container.intrinsicHeight, box.left, box.top, box.width, box.height);
        this.ctx.restore();
      }
    };
    CanvasRenderer2.prototype.renderNodeContent = function(paint) {
      return __awaiter(this, void 0, void 0, function() {
        var container, curves, styles, _i, _a, child, image2, image2, iframeRenderer, canvas, size, _b, fontFamily2, fontSize2, baseline, bounds, x, textBounds, img, image2, url, fontFamily2, bounds;
        return __generator(this, function(_c) {
          switch (_c.label) {
            case 0:
              this.applyEffects(paint.getEffects(
                4
                /* CONTENT */
              ));
              container = paint.container;
              curves = paint.curves;
              styles = container.styles;
              _i = 0, _a = container.textNodes;
              _c.label = 1;
            case 1:
              if (!(_i < _a.length))
                return [3, 4];
              child = _a[_i];
              return [4, this.renderTextNode(child, styles)];
            case 2:
              _c.sent();
              _c.label = 3;
            case 3:
              _i++;
              return [3, 1];
            case 4:
              if (!(container instanceof ImageElementContainer))
                return [3, 8];
              _c.label = 5;
            case 5:
              _c.trys.push([5, 7, , 8]);
              return [4, this.context.cache.match(container.src)];
            case 6:
              image2 = _c.sent();
              this.renderReplacedElement(container, curves, image2);
              return [3, 8];
            case 7:
              _c.sent();
              this.context.logger.error("Error loading image " + container.src);
              return [3, 8];
            case 8:
              if (container instanceof CanvasElementContainer) {
                this.renderReplacedElement(container, curves, container.canvas);
              }
              if (!(container instanceof SVGElementContainer))
                return [3, 12];
              _c.label = 9;
            case 9:
              _c.trys.push([9, 11, , 12]);
              return [4, this.context.cache.match(container.svg)];
            case 10:
              image2 = _c.sent();
              this.renderReplacedElement(container, curves, image2);
              return [3, 12];
            case 11:
              _c.sent();
              this.context.logger.error("Error loading svg " + container.svg.substring(0, 255));
              return [3, 12];
            case 12:
              if (!(container instanceof IFrameElementContainer && container.tree))
                return [3, 14];
              iframeRenderer = new CanvasRenderer2(this.context, {
                scale: this.options.scale,
                backgroundColor: container.backgroundColor,
                x: 0,
                y: 0,
                width: container.width,
                height: container.height
              });
              return [4, iframeRenderer.render(container.tree)];
            case 13:
              canvas = _c.sent();
              if (container.width && container.height) {
                this.ctx.drawImage(canvas, 0, 0, container.width, container.height, container.bounds.left, container.bounds.top, container.bounds.width, container.bounds.height);
              }
              _c.label = 14;
            case 14:
              if (container instanceof InputElementContainer) {
                size = Math.min(container.bounds.width, container.bounds.height);
                if (container.type === CHECKBOX) {
                  if (container.checked) {
                    this.ctx.save();
                    this.path([
                      new Vector(container.bounds.left + size * 0.39363, container.bounds.top + size * 0.79),
                      new Vector(container.bounds.left + size * 0.16, container.bounds.top + size * 0.5549),
                      new Vector(container.bounds.left + size * 0.27347, container.bounds.top + size * 0.44071),
                      new Vector(container.bounds.left + size * 0.39694, container.bounds.top + size * 0.5649),
                      new Vector(container.bounds.left + size * 0.72983, container.bounds.top + size * 0.23),
                      new Vector(container.bounds.left + size * 0.84, container.bounds.top + size * 0.34085),
                      new Vector(container.bounds.left + size * 0.39363, container.bounds.top + size * 0.79)
                    ]);
                    this.ctx.fillStyle = asString(INPUT_COLOR);
                    this.ctx.fill();
                    this.ctx.restore();
                  }
                } else if (container.type === RADIO) {
                  if (container.checked) {
                    this.ctx.save();
                    this.ctx.beginPath();
                    this.ctx.arc(container.bounds.left + size / 2, container.bounds.top + size / 2, size / 4, 0, Math.PI * 2, true);
                    this.ctx.fillStyle = asString(INPUT_COLOR);
                    this.ctx.fill();
                    this.ctx.restore();
                  }
                }
              }
              if (isTextInputElement(container) && container.value.length) {
                _b = this.createFontStyle(styles), fontFamily2 = _b[0], fontSize2 = _b[1];
                baseline = this.fontMetrics.getMetrics(fontFamily2, fontSize2).baseline;
                this.ctx.font = fontFamily2;
                this.ctx.fillStyle = asString(styles.color);
                this.ctx.textBaseline = "alphabetic";
                this.ctx.textAlign = canvasTextAlign(container.styles.textAlign);
                bounds = contentBox(container);
                x = 0;
                switch (container.styles.textAlign) {
                  case 1:
                    x += bounds.width / 2;
                    break;
                  case 2:
                    x += bounds.width;
                    break;
                }
                textBounds = bounds.add(x, 0, 0, -bounds.height / 2 + 1);
                this.ctx.save();
                this.path([
                  new Vector(bounds.left, bounds.top),
                  new Vector(bounds.left + bounds.width, bounds.top),
                  new Vector(bounds.left + bounds.width, bounds.top + bounds.height),
                  new Vector(bounds.left, bounds.top + bounds.height)
                ]);
                this.ctx.clip();
                this.renderTextWithLetterSpacing(new TextBounds(container.value, textBounds), styles.letterSpacing, baseline);
                this.ctx.restore();
                this.ctx.textBaseline = "alphabetic";
                this.ctx.textAlign = "left";
              }
              if (!contains(
                container.styles.display,
                2048
                /* LIST_ITEM */
              ))
                return [3, 20];
              if (!(container.styles.listStyleImage !== null))
                return [3, 19];
              img = container.styles.listStyleImage;
              if (!(img.type === 0))
                return [3, 18];
              image2 = void 0;
              url = img.url;
              _c.label = 15;
            case 15:
              _c.trys.push([15, 17, , 18]);
              return [4, this.context.cache.match(url)];
            case 16:
              image2 = _c.sent();
              this.ctx.drawImage(image2, container.bounds.left - (image2.width + 10), container.bounds.top);
              return [3, 18];
            case 17:
              _c.sent();
              this.context.logger.error("Error loading list-style-image " + url);
              return [3, 18];
            case 18:
              return [3, 20];
            case 19:
              if (paint.listValue && container.styles.listStyleType !== -1) {
                fontFamily2 = this.createFontStyle(styles)[0];
                this.ctx.font = fontFamily2;
                this.ctx.fillStyle = asString(styles.color);
                this.ctx.textBaseline = "middle";
                this.ctx.textAlign = "right";
                bounds = new Bounds(container.bounds.left, container.bounds.top + getAbsoluteValue(container.styles.paddingTop, container.bounds.width), container.bounds.width, computeLineHeight(styles.lineHeight, styles.fontSize.number) / 2 + 1);
                this.renderTextWithLetterSpacing(new TextBounds(paint.listValue, bounds), styles.letterSpacing, computeLineHeight(styles.lineHeight, styles.fontSize.number) / 2 + 2);
                this.ctx.textBaseline = "bottom";
                this.ctx.textAlign = "left";
              }
              _c.label = 20;
            case 20:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    CanvasRenderer2.prototype.renderStackContent = function(stack) {
      return __awaiter(this, void 0, void 0, function() {
        var _i, _a, child, _b, _c, child, _d, _e2, child, _f, _g, child, _h, _j, child, _k, _l, child, _m, _o2, child;
        return __generator(this, function(_p) {
          switch (_p.label) {
            case 0:
              if (contains(
                stack.element.container.flags,
                16
                /* DEBUG_RENDER */
              )) {
                debugger;
              }
              return [4, this.renderNodeBackgroundAndBorders(stack.element)];
            case 1:
              _p.sent();
              _i = 0, _a = stack.negativeZIndex;
              _p.label = 2;
            case 2:
              if (!(_i < _a.length))
                return [3, 5];
              child = _a[_i];
              return [4, this.renderStack(child)];
            case 3:
              _p.sent();
              _p.label = 4;
            case 4:
              _i++;
              return [3, 2];
            case 5:
              return [4, this.renderNodeContent(stack.element)];
            case 6:
              _p.sent();
              _b = 0, _c = stack.nonInlineLevel;
              _p.label = 7;
            case 7:
              if (!(_b < _c.length))
                return [3, 10];
              child = _c[_b];
              return [4, this.renderNode(child)];
            case 8:
              _p.sent();
              _p.label = 9;
            case 9:
              _b++;
              return [3, 7];
            case 10:
              _d = 0, _e2 = stack.nonPositionedFloats;
              _p.label = 11;
            case 11:
              if (!(_d < _e2.length))
                return [3, 14];
              child = _e2[_d];
              return [4, this.renderStack(child)];
            case 12:
              _p.sent();
              _p.label = 13;
            case 13:
              _d++;
              return [3, 11];
            case 14:
              _f = 0, _g = stack.nonPositionedInlineLevel;
              _p.label = 15;
            case 15:
              if (!(_f < _g.length))
                return [3, 18];
              child = _g[_f];
              return [4, this.renderStack(child)];
            case 16:
              _p.sent();
              _p.label = 17;
            case 17:
              _f++;
              return [3, 15];
            case 18:
              _h = 0, _j = stack.inlineLevel;
              _p.label = 19;
            case 19:
              if (!(_h < _j.length))
                return [3, 22];
              child = _j[_h];
              return [4, this.renderNode(child)];
            case 20:
              _p.sent();
              _p.label = 21;
            case 21:
              _h++;
              return [3, 19];
            case 22:
              _k = 0, _l = stack.zeroOrAutoZIndexOrTransformedOrOpacity;
              _p.label = 23;
            case 23:
              if (!(_k < _l.length))
                return [3, 26];
              child = _l[_k];
              return [4, this.renderStack(child)];
            case 24:
              _p.sent();
              _p.label = 25;
            case 25:
              _k++;
              return [3, 23];
            case 26:
              _m = 0, _o2 = stack.positiveZIndex;
              _p.label = 27;
            case 27:
              if (!(_m < _o2.length))
                return [3, 30];
              child = _o2[_m];
              return [4, this.renderStack(child)];
            case 28:
              _p.sent();
              _p.label = 29;
            case 29:
              _m++;
              return [3, 27];
            case 30:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    CanvasRenderer2.prototype.mask = function(paths) {
      this.ctx.beginPath();
      this.ctx.moveTo(0, 0);
      this.ctx.lineTo(this.canvas.width, 0);
      this.ctx.lineTo(this.canvas.width, this.canvas.height);
      this.ctx.lineTo(0, this.canvas.height);
      this.ctx.lineTo(0, 0);
      this.formatPath(paths.slice(0).reverse());
      this.ctx.closePath();
    };
    CanvasRenderer2.prototype.path = function(paths) {
      this.ctx.beginPath();
      this.formatPath(paths);
      this.ctx.closePath();
    };
    CanvasRenderer2.prototype.formatPath = function(paths) {
      var _this = this;
      paths.forEach(function(point, index) {
        var start = isBezierCurve(point) ? point.start : point;
        if (index === 0) {
          _this.ctx.moveTo(start.x, start.y);
        } else {
          _this.ctx.lineTo(start.x, start.y);
        }
        if (isBezierCurve(point)) {
          _this.ctx.bezierCurveTo(point.startControl.x, point.startControl.y, point.endControl.x, point.endControl.y, point.end.x, point.end.y);
        }
      });
    };
    CanvasRenderer2.prototype.renderRepeat = function(path, pattern, offsetX, offsetY) {
      this.path(path);
      this.ctx.fillStyle = pattern;
      this.ctx.translate(offsetX, offsetY);
      this.ctx.fill();
      this.ctx.translate(-offsetX, -offsetY);
    };
    CanvasRenderer2.prototype.resizeImage = function(image2, width, height) {
      var _a;
      if (image2.width === width && image2.height === height) {
        return image2;
      }
      var ownerDocument = (_a = this.canvas.ownerDocument) !== null && _a !== void 0 ? _a : document;
      var canvas = ownerDocument.createElement("canvas");
      canvas.width = Math.max(1, width);
      canvas.height = Math.max(1, height);
      var ctx = canvas.getContext("2d");
      ctx.drawImage(image2, 0, 0, image2.width, image2.height, 0, 0, width, height);
      return canvas;
    };
    CanvasRenderer2.prototype.renderBackgroundImage = function(container) {
      return __awaiter(this, void 0, void 0, function() {
        var index, _loop_1, this_1, _i, _a, backgroundImage2;
        return __generator(this, function(_b) {
          switch (_b.label) {
            case 0:
              index = container.styles.backgroundImage.length - 1;
              _loop_1 = function(backgroundImage3) {
                var image2, url, _c, path, x, y, width, height, pattern, _d, path, x, y, width, height, _e2, lineLength, x0, x1, y0, y1, canvas, ctx, gradient_1, pattern, _f, path, left, top_1, width, height, position2, x, y, _g, rx, ry, radialGradient_1, midX, midY, f2, invF;
                return __generator(this, function(_h) {
                  switch (_h.label) {
                    case 0:
                      if (!(backgroundImage3.type === 0))
                        return [3, 5];
                      image2 = void 0;
                      url = backgroundImage3.url;
                      _h.label = 1;
                    case 1:
                      _h.trys.push([1, 3, , 4]);
                      return [4, this_1.context.cache.match(url)];
                    case 2:
                      image2 = _h.sent();
                      return [3, 4];
                    case 3:
                      _h.sent();
                      this_1.context.logger.error("Error loading background-image " + url);
                      return [3, 4];
                    case 4:
                      if (image2) {
                        _c = calculateBackgroundRendering(container, index, [
                          image2.width,
                          image2.height,
                          image2.width / image2.height
                        ]), path = _c[0], x = _c[1], y = _c[2], width = _c[3], height = _c[4];
                        pattern = this_1.ctx.createPattern(this_1.resizeImage(image2, width, height), "repeat");
                        this_1.renderRepeat(path, pattern, x, y);
                      }
                      return [3, 6];
                    case 5:
                      if (isLinearGradient(backgroundImage3)) {
                        _d = calculateBackgroundRendering(container, index, [null, null, null]), path = _d[0], x = _d[1], y = _d[2], width = _d[3], height = _d[4];
                        _e2 = calculateGradientDirection(backgroundImage3.angle, width, height), lineLength = _e2[0], x0 = _e2[1], x1 = _e2[2], y0 = _e2[3], y1 = _e2[4];
                        canvas = document.createElement("canvas");
                        canvas.width = width;
                        canvas.height = height;
                        ctx = canvas.getContext("2d");
                        gradient_1 = ctx.createLinearGradient(x0, y0, x1, y1);
                        processColorStops(backgroundImage3.stops, lineLength).forEach(function(colorStop) {
                          return gradient_1.addColorStop(colorStop.stop, asString(colorStop.color));
                        });
                        ctx.fillStyle = gradient_1;
                        ctx.fillRect(0, 0, width, height);
                        if (width > 0 && height > 0) {
                          pattern = this_1.ctx.createPattern(canvas, "repeat");
                          this_1.renderRepeat(path, pattern, x, y);
                        }
                      } else if (isRadialGradient(backgroundImage3)) {
                        _f = calculateBackgroundRendering(container, index, [
                          null,
                          null,
                          null
                        ]), path = _f[0], left = _f[1], top_1 = _f[2], width = _f[3], height = _f[4];
                        position2 = backgroundImage3.position.length === 0 ? [FIFTY_PERCENT] : backgroundImage3.position;
                        x = getAbsoluteValue(position2[0], width);
                        y = getAbsoluteValue(position2[position2.length - 1], height);
                        _g = calculateRadius(backgroundImage3, x, y, width, height), rx = _g[0], ry = _g[1];
                        if (rx > 0 && ry > 0) {
                          radialGradient_1 = this_1.ctx.createRadialGradient(left + x, top_1 + y, 0, left + x, top_1 + y, rx);
                          processColorStops(backgroundImage3.stops, rx * 2).forEach(function(colorStop) {
                            return radialGradient_1.addColorStop(colorStop.stop, asString(colorStop.color));
                          });
                          this_1.path(path);
                          this_1.ctx.fillStyle = radialGradient_1;
                          if (rx !== ry) {
                            midX = container.bounds.left + 0.5 * container.bounds.width;
                            midY = container.bounds.top + 0.5 * container.bounds.height;
                            f2 = ry / rx;
                            invF = 1 / f2;
                            this_1.ctx.save();
                            this_1.ctx.translate(midX, midY);
                            this_1.ctx.transform(1, 0, 0, f2, 0, 0);
                            this_1.ctx.translate(-midX, -midY);
                            this_1.ctx.fillRect(left, invF * (top_1 - midY) + midY, width, height * invF);
                            this_1.ctx.restore();
                          } else {
                            this_1.ctx.fill();
                          }
                        }
                      }
                      _h.label = 6;
                    case 6:
                      index--;
                      return [
                        2
                        /*return*/
                      ];
                  }
                });
              };
              this_1 = this;
              _i = 0, _a = container.styles.backgroundImage.slice(0).reverse();
              _b.label = 1;
            case 1:
              if (!(_i < _a.length))
                return [3, 4];
              backgroundImage2 = _a[_i];
              return [5, _loop_1(backgroundImage2)];
            case 2:
              _b.sent();
              _b.label = 3;
            case 3:
              _i++;
              return [3, 1];
            case 4:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    CanvasRenderer2.prototype.renderSolidBorder = function(color2, side, curvePoints) {
      return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(_a) {
          this.path(parsePathForBorder(curvePoints, side));
          this.ctx.fillStyle = asString(color2);
          this.ctx.fill();
          return [
            2
            /*return*/
          ];
        });
      });
    };
    CanvasRenderer2.prototype.renderDoubleBorder = function(color2, width, side, curvePoints) {
      return __awaiter(this, void 0, void 0, function() {
        var outerPaths, innerPaths;
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              if (!(width < 3))
                return [3, 2];
              return [4, this.renderSolidBorder(color2, side, curvePoints)];
            case 1:
              _a.sent();
              return [
                2
                /*return*/
              ];
            case 2:
              outerPaths = parsePathForBorderDoubleOuter(curvePoints, side);
              this.path(outerPaths);
              this.ctx.fillStyle = asString(color2);
              this.ctx.fill();
              innerPaths = parsePathForBorderDoubleInner(curvePoints, side);
              this.path(innerPaths);
              this.ctx.fill();
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    CanvasRenderer2.prototype.renderNodeBackgroundAndBorders = function(paint) {
      return __awaiter(this, void 0, void 0, function() {
        var styles, hasBackground, borders, backgroundPaintingArea, side, _i, borders_1, border;
        var _this = this;
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              this.applyEffects(paint.getEffects(
                2
                /* BACKGROUND_BORDERS */
              ));
              styles = paint.container.styles;
              hasBackground = !isTransparent(styles.backgroundColor) || styles.backgroundImage.length;
              borders = [
                { style: styles.borderTopStyle, color: styles.borderTopColor, width: styles.borderTopWidth },
                { style: styles.borderRightStyle, color: styles.borderRightColor, width: styles.borderRightWidth },
                { style: styles.borderBottomStyle, color: styles.borderBottomColor, width: styles.borderBottomWidth },
                { style: styles.borderLeftStyle, color: styles.borderLeftColor, width: styles.borderLeftWidth }
              ];
              backgroundPaintingArea = calculateBackgroundCurvedPaintingArea(getBackgroundValueForIndex(styles.backgroundClip, 0), paint.curves);
              if (!(hasBackground || styles.boxShadow.length))
                return [3, 2];
              this.ctx.save();
              this.path(backgroundPaintingArea);
              this.ctx.clip();
              if (!isTransparent(styles.backgroundColor)) {
                this.ctx.fillStyle = asString(styles.backgroundColor);
                this.ctx.fill();
              }
              return [4, this.renderBackgroundImage(paint.container)];
            case 1:
              _a.sent();
              this.ctx.restore();
              styles.boxShadow.slice(0).reverse().forEach(function(shadow) {
                _this.ctx.save();
                var borderBoxArea = calculateBorderBoxPath(paint.curves);
                var maskOffset = shadow.inset ? 0 : MASK_OFFSET;
                var shadowPaintingArea = transformPath(borderBoxArea, -maskOffset + (shadow.inset ? 1 : -1) * shadow.spread.number, (shadow.inset ? 1 : -1) * shadow.spread.number, shadow.spread.number * (shadow.inset ? -2 : 2), shadow.spread.number * (shadow.inset ? -2 : 2));
                if (shadow.inset) {
                  _this.path(borderBoxArea);
                  _this.ctx.clip();
                  _this.mask(shadowPaintingArea);
                } else {
                  _this.mask(borderBoxArea);
                  _this.ctx.clip();
                  _this.path(shadowPaintingArea);
                }
                _this.ctx.shadowOffsetX = shadow.offsetX.number + maskOffset;
                _this.ctx.shadowOffsetY = shadow.offsetY.number;
                _this.ctx.shadowColor = asString(shadow.color);
                _this.ctx.shadowBlur = shadow.blur.number;
                _this.ctx.fillStyle = shadow.inset ? asString(shadow.color) : "rgba(0,0,0,1)";
                _this.ctx.fill();
                _this.ctx.restore();
              });
              _a.label = 2;
            case 2:
              side = 0;
              _i = 0, borders_1 = borders;
              _a.label = 3;
            case 3:
              if (!(_i < borders_1.length))
                return [3, 13];
              border = borders_1[_i];
              if (!(border.style !== 0 && !isTransparent(border.color) && border.width > 0))
                return [3, 11];
              if (!(border.style === 2))
                return [3, 5];
              return [4, this.renderDashedDottedBorder(
                border.color,
                border.width,
                side,
                paint.curves,
                2
                /* DASHED */
              )];
            case 4:
              _a.sent();
              return [3, 11];
            case 5:
              if (!(border.style === 3))
                return [3, 7];
              return [4, this.renderDashedDottedBorder(
                border.color,
                border.width,
                side,
                paint.curves,
                3
                /* DOTTED */
              )];
            case 6:
              _a.sent();
              return [3, 11];
            case 7:
              if (!(border.style === 4))
                return [3, 9];
              return [4, this.renderDoubleBorder(border.color, border.width, side, paint.curves)];
            case 8:
              _a.sent();
              return [3, 11];
            case 9:
              return [4, this.renderSolidBorder(border.color, side, paint.curves)];
            case 10:
              _a.sent();
              _a.label = 11;
            case 11:
              side++;
              _a.label = 12;
            case 12:
              _i++;
              return [3, 3];
            case 13:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    CanvasRenderer2.prototype.renderDashedDottedBorder = function(color2, width, side, curvePoints, style) {
      return __awaiter(this, void 0, void 0, function() {
        var strokePaths, boxPaths, startX, startY, endX, endY, length, dashLength, spaceLength, useLineDash, multiplier, numberOfDashes, minSpace, maxSpace, path1, path2, path1, path2;
        return __generator(this, function(_a) {
          this.ctx.save();
          strokePaths = parsePathForBorderStroke(curvePoints, side);
          boxPaths = parsePathForBorder(curvePoints, side);
          if (style === 2) {
            this.path(boxPaths);
            this.ctx.clip();
          }
          if (isBezierCurve(boxPaths[0])) {
            startX = boxPaths[0].start.x;
            startY = boxPaths[0].start.y;
          } else {
            startX = boxPaths[0].x;
            startY = boxPaths[0].y;
          }
          if (isBezierCurve(boxPaths[1])) {
            endX = boxPaths[1].end.x;
            endY = boxPaths[1].end.y;
          } else {
            endX = boxPaths[1].x;
            endY = boxPaths[1].y;
          }
          if (side === 0 || side === 2) {
            length = Math.abs(startX - endX);
          } else {
            length = Math.abs(startY - endY);
          }
          this.ctx.beginPath();
          if (style === 3) {
            this.formatPath(strokePaths);
          } else {
            this.formatPath(boxPaths.slice(0, 2));
          }
          dashLength = width < 3 ? width * 3 : width * 2;
          spaceLength = width < 3 ? width * 2 : width;
          if (style === 3) {
            dashLength = width;
            spaceLength = width;
          }
          useLineDash = true;
          if (length <= dashLength * 2) {
            useLineDash = false;
          } else if (length <= dashLength * 2 + spaceLength) {
            multiplier = length / (2 * dashLength + spaceLength);
            dashLength *= multiplier;
            spaceLength *= multiplier;
          } else {
            numberOfDashes = Math.floor((length + spaceLength) / (dashLength + spaceLength));
            minSpace = (length - numberOfDashes * dashLength) / (numberOfDashes - 1);
            maxSpace = (length - (numberOfDashes + 1) * dashLength) / numberOfDashes;
            spaceLength = maxSpace <= 0 || Math.abs(spaceLength - minSpace) < Math.abs(spaceLength - maxSpace) ? minSpace : maxSpace;
          }
          if (useLineDash) {
            if (style === 3) {
              this.ctx.setLineDash([0, dashLength + spaceLength]);
            } else {
              this.ctx.setLineDash([dashLength, spaceLength]);
            }
          }
          if (style === 3) {
            this.ctx.lineCap = "round";
            this.ctx.lineWidth = width;
          } else {
            this.ctx.lineWidth = width * 2 + 1.1;
          }
          this.ctx.strokeStyle = asString(color2);
          this.ctx.stroke();
          this.ctx.setLineDash([]);
          if (style === 2) {
            if (isBezierCurve(boxPaths[0])) {
              path1 = boxPaths[3];
              path2 = boxPaths[0];
              this.ctx.beginPath();
              this.formatPath([new Vector(path1.end.x, path1.end.y), new Vector(path2.start.x, path2.start.y)]);
              this.ctx.stroke();
            }
            if (isBezierCurve(boxPaths[1])) {
              path1 = boxPaths[1];
              path2 = boxPaths[2];
              this.ctx.beginPath();
              this.formatPath([new Vector(path1.end.x, path1.end.y), new Vector(path2.start.x, path2.start.y)]);
              this.ctx.stroke();
            }
          }
          this.ctx.restore();
          return [
            2
            /*return*/
          ];
        });
      });
    };
    CanvasRenderer2.prototype.render = function(element) {
      return __awaiter(this, void 0, void 0, function() {
        var stack;
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              if (this.options.backgroundColor) {
                this.ctx.fillStyle = asString(this.options.backgroundColor);
                this.ctx.fillRect(this.options.x, this.options.y, this.options.width, this.options.height);
              }
              stack = parseStackingContexts(element);
              return [4, this.renderStack(stack)];
            case 1:
              _a.sent();
              this.applyEffects([]);
              return [2, this.canvas];
          }
        });
      });
    };
    return CanvasRenderer2;
  }(Renderer)
);
var isTextInputElement = function(container) {
  if (container instanceof TextareaElementContainer) {
    return true;
  } else if (container instanceof SelectElementContainer) {
    return true;
  } else if (container instanceof InputElementContainer && container.type !== RADIO && container.type !== CHECKBOX) {
    return true;
  }
  return false;
};
var calculateBackgroundCurvedPaintingArea = function(clip, curves) {
  switch (clip) {
    case 0:
      return calculateBorderBoxPath(curves);
    case 2:
      return calculateContentBoxPath(curves);
    case 1:
    default:
      return calculatePaddingBoxPath(curves);
  }
};
var canvasTextAlign = function(textAlign2) {
  switch (textAlign2) {
    case 1:
      return "center";
    case 2:
      return "right";
    case 0:
    default:
      return "left";
  }
};
var iOSBrokenFonts = ["-apple-system", "system-ui"];
var fixIOSSystemFonts = function(fontFamilies) {
  return /iPhone OS 15_(0|1)/.test(window.navigator.userAgent) ? fontFamilies.filter(function(fontFamily2) {
    return iOSBrokenFonts.indexOf(fontFamily2) === -1;
  }) : fontFamilies;
};
var ForeignObjectRenderer = (
  /** @class */
  function(_super) {
    __extends(ForeignObjectRenderer2, _super);
    function ForeignObjectRenderer2(context, options) {
      var _this = _super.call(this, context, options) || this;
      _this.canvas = options.canvas ? options.canvas : document.createElement("canvas");
      _this.ctx = _this.canvas.getContext("2d");
      _this.options = options;
      _this.canvas.width = Math.floor(options.width * options.scale);
      _this.canvas.height = Math.floor(options.height * options.scale);
      _this.canvas.style.width = options.width + "px";
      _this.canvas.style.height = options.height + "px";
      _this.ctx.scale(_this.options.scale, _this.options.scale);
      _this.ctx.translate(-options.x, -options.y);
      _this.context.logger.debug("EXPERIMENTAL ForeignObject renderer initialized (" + options.width + "x" + options.height + " at " + options.x + "," + options.y + ") with scale " + options.scale);
      return _this;
    }
    ForeignObjectRenderer2.prototype.render = function(element) {
      return __awaiter(this, void 0, void 0, function() {
        var svg, img;
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              svg = createForeignObjectSVG(this.options.width * this.options.scale, this.options.height * this.options.scale, this.options.scale, this.options.scale, element);
              return [4, loadSerializedSVG(svg)];
            case 1:
              img = _a.sent();
              if (this.options.backgroundColor) {
                this.ctx.fillStyle = asString(this.options.backgroundColor);
                this.ctx.fillRect(0, 0, this.options.width * this.options.scale, this.options.height * this.options.scale);
              }
              this.ctx.drawImage(img, -this.options.x * this.options.scale, -this.options.y * this.options.scale);
              return [2, this.canvas];
          }
        });
      });
    };
    return ForeignObjectRenderer2;
  }(Renderer)
);
var loadSerializedSVG = function(svg) {
  return new Promise(function(resolve, reject) {
    var img = new Image();
    img.onload = function() {
      resolve(img);
    };
    img.onerror = reject;
    img.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(svg));
  });
};
var Logger = (
  /** @class */
  function() {
    function Logger2(_a) {
      var id = _a.id, enabled = _a.enabled;
      this.id = id;
      this.enabled = enabled;
      this.start = Date.now();
    }
    Logger2.prototype.debug = function() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      if (this.enabled) {
        if (typeof window !== "undefined" && window.console && typeof console.debug === "function") {
          console.debug.apply(console, __spreadArray([this.id, this.getTime() + "ms"], args));
        } else {
          this.info.apply(this, args);
        }
      }
    };
    Logger2.prototype.getTime = function() {
      return Date.now() - this.start;
    };
    Logger2.prototype.info = function() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      if (this.enabled) {
        if (typeof window !== "undefined" && window.console && typeof console.info === "function") {
          console.info.apply(console, __spreadArray([this.id, this.getTime() + "ms"], args));
        }
      }
    };
    Logger2.prototype.warn = function() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      if (this.enabled) {
        if (typeof window !== "undefined" && window.console && typeof console.warn === "function") {
          console.warn.apply(console, __spreadArray([this.id, this.getTime() + "ms"], args));
        } else {
          this.info.apply(this, args);
        }
      }
    };
    Logger2.prototype.error = function() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      if (this.enabled) {
        if (typeof window !== "undefined" && window.console && typeof console.error === "function") {
          console.error.apply(console, __spreadArray([this.id, this.getTime() + "ms"], args));
        } else {
          this.info.apply(this, args);
        }
      }
    };
    Logger2.instances = {};
    return Logger2;
  }()
);
var Context = (
  /** @class */
  function() {
    function Context2(options, windowBounds) {
      var _a;
      this.windowBounds = windowBounds;
      this.instanceName = "#" + Context2.instanceCount++;
      this.logger = new Logger({ id: this.instanceName, enabled: options.logging });
      this.cache = (_a = options.cache) !== null && _a !== void 0 ? _a : new Cache(this, options);
    }
    Context2.instanceCount = 1;
    return Context2;
  }()
);
var html2canvas = function(element, options) {
  if (options === void 0) {
    options = {};
  }
  return renderElement(element, options);
};
if (typeof window !== "undefined") {
  CacheStorage.setContext(window);
}
var renderElement = function(element, opts) {
  return __awaiter(void 0, void 0, void 0, function() {
    var ownerDocument, defaultView, resourceOptions, contextOptions, windowOptions, windowBounds, context, foreignObjectRendering, cloneOptions, documentCloner, clonedElement, container, _a, width, height, left, top, backgroundColor2, renderOptions, canvas, renderer, root, renderer;
    var _b, _c, _d, _e2, _f, _g, _h, _j, _k, _l, _m, _o2, _p, _q, _r, _s, _t2;
    return __generator(this, function(_u) {
      switch (_u.label) {
        case 0:
          if (!element || typeof element !== "object") {
            return [2, Promise.reject("Invalid element provided as first argument")];
          }
          ownerDocument = element.ownerDocument;
          if (!ownerDocument) {
            throw new Error("Element is not attached to a Document");
          }
          defaultView = ownerDocument.defaultView;
          if (!defaultView) {
            throw new Error("Document is not attached to a Window");
          }
          resourceOptions = {
            allowTaint: (_b = opts.allowTaint) !== null && _b !== void 0 ? _b : false,
            imageTimeout: (_c = opts.imageTimeout) !== null && _c !== void 0 ? _c : 15e3,
            proxy: opts.proxy,
            useCORS: (_d = opts.useCORS) !== null && _d !== void 0 ? _d : false
          };
          contextOptions = __assign({ logging: (_e2 = opts.logging) !== null && _e2 !== void 0 ? _e2 : true, cache: opts.cache }, resourceOptions);
          windowOptions = {
            windowWidth: (_f = opts.windowWidth) !== null && _f !== void 0 ? _f : defaultView.innerWidth,
            windowHeight: (_g = opts.windowHeight) !== null && _g !== void 0 ? _g : defaultView.innerHeight,
            scrollX: (_h = opts.scrollX) !== null && _h !== void 0 ? _h : defaultView.pageXOffset,
            scrollY: (_j = opts.scrollY) !== null && _j !== void 0 ? _j : defaultView.pageYOffset
          };
          windowBounds = new Bounds(windowOptions.scrollX, windowOptions.scrollY, windowOptions.windowWidth, windowOptions.windowHeight);
          context = new Context(contextOptions, windowBounds);
          foreignObjectRendering = (_k = opts.foreignObjectRendering) !== null && _k !== void 0 ? _k : false;
          cloneOptions = {
            allowTaint: (_l = opts.allowTaint) !== null && _l !== void 0 ? _l : false,
            onclone: opts.onclone,
            ignoreElements: opts.ignoreElements,
            inlineImages: foreignObjectRendering,
            copyStyles: foreignObjectRendering
          };
          context.logger.debug("Starting document clone with size " + windowBounds.width + "x" + windowBounds.height + " scrolled to " + -windowBounds.left + "," + -windowBounds.top);
          documentCloner = new DocumentCloner(context, element, cloneOptions);
          clonedElement = documentCloner.clonedReferenceElement;
          if (!clonedElement) {
            return [2, Promise.reject("Unable to find element in cloned iframe")];
          }
          return [4, documentCloner.toIFrame(ownerDocument, windowBounds)];
        case 1:
          container = _u.sent();
          _a = isBodyElement(clonedElement) || isHTMLElement(clonedElement) ? parseDocumentSize(clonedElement.ownerDocument) : parseBounds(context, clonedElement), width = _a.width, height = _a.height, left = _a.left, top = _a.top;
          backgroundColor2 = parseBackgroundColor(context, clonedElement, opts.backgroundColor);
          renderOptions = {
            canvas: opts.canvas,
            backgroundColor: backgroundColor2,
            scale: (_o2 = (_m = opts.scale) !== null && _m !== void 0 ? _m : defaultView.devicePixelRatio) !== null && _o2 !== void 0 ? _o2 : 1,
            x: ((_p = opts.x) !== null && _p !== void 0 ? _p : 0) + left,
            y: ((_q = opts.y) !== null && _q !== void 0 ? _q : 0) + top,
            width: (_r = opts.width) !== null && _r !== void 0 ? _r : Math.ceil(width),
            height: (_s = opts.height) !== null && _s !== void 0 ? _s : Math.ceil(height)
          };
          if (!foreignObjectRendering)
            return [3, 3];
          context.logger.debug("Document cloned, using foreign object rendering");
          renderer = new ForeignObjectRenderer(context, renderOptions);
          return [4, renderer.render(clonedElement)];
        case 2:
          canvas = _u.sent();
          return [3, 5];
        case 3:
          context.logger.debug("Document cloned, element located at " + left + "," + top + " with size " + width + "x" + height + " using computed rendering");
          context.logger.debug("Starting DOM parsing");
          root = parseTree(context, clonedElement);
          if (backgroundColor2 === root.styles.backgroundColor) {
            root.styles.backgroundColor = COLORS.TRANSPARENT;
          }
          context.logger.debug("Starting renderer for element at " + renderOptions.x + "," + renderOptions.y + " with size " + renderOptions.width + "x" + renderOptions.height);
          renderer = new CanvasRenderer(context, renderOptions);
          return [4, renderer.render(root)];
        case 4:
          canvas = _u.sent();
          _u.label = 5;
        case 5:
          if ((_t2 = opts.removeContainer) !== null && _t2 !== void 0 ? _t2 : true) {
            if (!DocumentCloner.destroy(container)) {
              context.logger.error("Cannot detach cloned iframe as it is not in the DOM anymore");
            }
          }
          context.logger.debug("Finished rendering");
          return [2, canvas];
      }
    });
  });
};
var parseBackgroundColor = function(context, element, backgroundColorOverride) {
  var ownerDocument = element.ownerDocument;
  var documentBackgroundColor = ownerDocument.documentElement ? parseColor(context, getComputedStyle(ownerDocument.documentElement).backgroundColor) : COLORS.TRANSPARENT;
  var bodyBackgroundColor = ownerDocument.body ? parseColor(context, getComputedStyle(ownerDocument.body).backgroundColor) : COLORS.TRANSPARENT;
  var defaultBackgroundColor = typeof backgroundColorOverride === "string" ? parseColor(context, backgroundColorOverride) : backgroundColorOverride === null ? COLORS.TRANSPARENT : 4294967295;
  return element === ownerDocument.documentElement ? isTransparent(documentBackgroundColor) ? isTransparent(bodyBackgroundColor) ? defaultBackgroundColor : bodyBackgroundColor : documentBackgroundColor : defaultBackgroundColor;
};
var html2canvas_esm_default = html2canvas;

// node_modules/.pnpm/relation-graph@2.1.15/node_modules/relation-graph/lib/vue3/relation-graph.mjs
(function() {
  try {
    var elementStyle = document.createElement("style");
    elementStyle.appendChild(document.createTextNode('@charset "UTF-8";.relation-graph{position:relative}.relation-graph .rel-map svg{height:100%;width:100%}.relation-graph .rel-linediv{position:absolute;z-index:900;width:100%;top:0px;left:0px;--stroke: url(#lineStyle);--markerEnd: url(#arrow-default);--markerStart: url(#start-arrow-default);--markerEndChecked: url(#arrow-checked);--markerStartChecked: url(#start-arrow-checked)}.relation-graph .rel-linediv svg{overflow:visible}.relation-graph .rel-map{background-color:#fff;overflow:hidden;cursor:default;user-select:none}.relation-graph .rel-map-background-norepeat{background-repeat:no-repeat;background-position:right bottom}.relation-graph .rel-nodediv-for-webkit{position:absolute;width:100%;top:0px;left:0px;z-index:1000}.relation-graph .rel-map-canvas{position:relative;top:0px;left:0px;border:0px;z-index:3}.relation-graph .rel-map ::v-deep img{-webkit-user-drag:none;-webkit-user-select:none}.relation-graph .c-rg-line-text{fill:#888;font-size:12px}.relation-graph .c-rg-line-text-checked{stroke:#fd8b374d;stroke-width:2}.relation-graph .c-rg-line{z-index:1000;fill-rule:nonzero}.relation-graph .rg-line-dashtype-1{stroke-dasharray:2,2,2;stroke-dashoffset:3px;stroke-linecap:butt;stroke-linejoin:bevel}.relation-graph .rg-line-dashtype-2{stroke-dasharray:5,5,5;stroke-dashoffset:3px;stroke-linecap:butt;stroke-linejoin:bevel}.relation-graph .rg-line-dashtype-3{stroke-dasharray:9,9,9;stroke-dashoffset:3px;stroke-linecap:butt;stroke-linejoin:bevel}.relation-graph .rg-line-dashtype-4{stroke-dasharray:5,5,15;stroke-dashoffset:3px;stroke-linecap:butt;stroke-linejoin:bevel}@keyframes ACTRGLineChecked{0%{stroke-dashoffset:352px;stroke-dasharray:5,5,5}50%{stroke-dasharray:5,5,5;stroke-dashoffset:3px}to{stroke-dashoffset:352px;stroke-dasharray:5,5,5}}@keyframes rg-line-anm2{0%{stroke-dashoffset:0;stroke-dasharray:4,4,4}to{stroke-dashoffset:10px;stroke-dasharray:20,20,20}}@keyframes rg-line-anm3{0%{stroke-opacity:1}50%{stroke-opacity:.2}to{stroke-opacity:1}}@keyframes rg-line-anm4{0%{stroke-dasharray:0,100%}to{stroke-dasharray:100%,0}}.relation-graph .rg-line-anm-1{animation:ACTRGLineChecked 10s infinite}.relation-graph .rg-line-anm-2{animation:rg-line-anm2 3s infinite}.relation-graph .rg-line-anm-3{animation:rg-line-anm3 1s infinite}.relation-graph .rg-line-anm-4{animation:rg-line-anm4 3s infinite}.relation-graph .c-rg-line-checked-bg{stroke:#fd8b374d;stroke-width:10px;stroke-linecap:round}@keyframes deform1{0%{stroke-dashoffset:0}to{stroke-dashoffset:100%}}.relation-graph .rg-icon{width:19px;height:19px;vertical-align:0px;fill:currentColor;overflow:hidden}.relation-graph .el-icon-remove,.relation-graph .el-icon-circle-plus{cursor:pointer}.relation-graph .rel-node-peel{clear:both;padding:8px;position:absolute;font-size:14px}.relation-graph .rel-node{text-align:center}.relation-graph .rel-node-shape-0{width:80px;height:80px;border-radius:50%}.relation-graph .rel-node-shape-1{border-radius:5px}.relation-graph .c-node-text{height:100%;width:100%;display:flex;align-items:center;justify-content:center}.relation-graph .rel-node-shape-1 .c-node-text{padding-left:5px;padding-right:5px}.relation-graph .rel-node-type-button{border-radius:25px;color:#00f;cursor:pointer}.relation-graph .rel-node-checked{transition:background-color .2s ease,outline .2s ease,color .2s ease,-webkit-box-shadow .2s ease;box-shadow:0 0 0 8px #fd8b374d}.relation-graph .rel-node-selected{border:#025098 solid 2px;border-radius:5px}.relation-graph .rel-node-flashing{animation:ACTRGNodeFlashing 2s infinite}.relation-graph .rel-node-vtree-2{transform-origin:0 0;transform:rotate(30deg) translate(0)}.relation-graph .rel-node-vtree{width:130px;height:45px;text-align:left}.relation-graph .c-btn-open-close{position:absolute;height:100%;width:19px;display:flex;align-items:center;justify-content:center;user-select:none;pointer-events:none;cursor:pointer}.relation-graph .c-btn-open-close span{width:19px;height:19px;display:inline-block;text-align:center;border-radius:15px;color:#fff;cursor:pointer;font-size:19px;line-height:16px;background-size:100% 100%;pointer-events:all}.relation-graph .c-expanded{background-image:url(data:image/svg+xml;%20charset=utf8,%3Csvg%20t=%221606310217820%22%20viewBox=%220%200%201024%201024%22%20version=%221.1%22%20xmlns=%22http://www.w3.org/2000/svg%22%20p-id=%223373%22%20width=%2232%22%20height=%2232%22%3E%3Cpath%20d=%22M853.333333%20480H544V170.666667c0-17.066667-14.933333-32-32-32s-32%2014.933333-32%2032v309.333333H170.666667c-17.066667%200-32%2014.933333-32%2032s14.933333%2032%2032%2032h309.333333V853.333333c0%2017.066667%2014.933333%2032%2032%2032s32-14.933333%2032-32V544H853.333333c17.066667%200%2032-14.933333%2032-32s-14.933333-32-32-32z%22%20p-id=%223374%22%20fill=%22white%22%3E%3C/path%3E%3C/svg%3E)}.relation-graph .c-collapsed{background-image:url(data:image/svg+xml;%20charset=utf8,%3Csvg%20t=%221606310454619%22%20class=%22icon%22%20viewBox=%220%200%201024%201024%22%20version=%221.1%22%20xmlns=%22http://www.w3.org/2000/svg%22%20p-id=%223662%22%20width=%22128%22%20height=%22128%22%3E%3Cpath%20d=%22M853.333333%20554.666667H170.666667c-23.466667%200-42.666667-19.2-42.666667-42.666667s19.2-42.666667%2042.666667-42.666667h682.666666c23.466667%200%2042.666667%2019.2%2042.666667%2042.666667s-19.2%2042.666667-42.666667%2042.666667z%22%20p-id=%223663%22%20fill=%22white%22%3E%3C/path%3E%3C/svg%3E)}.relation-graph .c-expand-positon-left{margin-top:-8px;margin-left:-25px}.relation-graph .c-expand-positon-right{height:100%;width:100%;justify-content:center}.relation-graph .c-expand-positon-right span{margin-top:-18px;margin-right:-18px;margin-left:100%}.relation-graph .c-expand-positon-bottom{height:100%;width:100%;margin-top:7px;margin-left:-8px;align-items:flex-end;justify-content:center}.relation-graph .c-expand-positon-top{height:18px;width:100%;margin-top:-20px;margin-left:-6px;align-items:flex-end;justify-content:center}@keyframes ACTRGNodeInit{0%{box-shadow:0 0 15px #fd8b37}50%{box-shadow:0 0 1px #2e4e8f}to{box-shadow:0 0 15px #fd8b37}to{box-shadow:0 0 15px #fd8b37}}@keyframes ACTRGNodeFlashing{0%{box-shadow:0 0 15px #fd8b37}40%{box-shadow:0 0 1px #2e4e8f}70%{box-shadow:0 0 8px #fd8b37}to{box-shadow:0 0 #fd8b37}}.relation-graph .rel-diy-node{padding:0}.relation-graph .c-setting-panel{--height: 300px;--width: 200px;width:300px;height:200px;position:absolute;margin-left:10px;margin-top:5px;font-size:12px;color:#3a5bb2;padding:60px 10px 10px;overflow:hidden;box-shadow:0 0 5px #999;border-radius:5px;z-index:1000;background-color:#fff;border:#999999 solid 1px}.relation-graph .c-setting-panel-button{height:35px;width:35px;font-size:8px;line-height:35px;text-align:center;border-radius:50%;position:absolute;margin-left:25px;margin-top:20px;background-color:#3a5bb2;color:#fff;cursor:pointer;z-index:1001;box-shadow:0 0 8px #999}.relation-graph .c-setting-panel-button:hover{box-shadow:0 0 20px #ffa20a;border:#ffffff solid 1px;color:#ffa20a;-moz-transform:rotate(-89deg) translateX(-190px);animation-timing-function:linear;animation:flashButton 2s infinite}.relation-graph .c-fixedLayout{position:fixed;top:125px}@keyframes flashButton{0%{box-shadow:0 0 8px #2e4e8f}30%{box-shadow:0 0 20px #ffa20a}to{box-shadow:0 0 8px #2e4e8f}}.relation-graph .c-debug-tools-row{text-align:left}.relation-graph .rel-operate{position:absolute;top:0px;left:0px;width:100%;height:100%;z-index:999}.relation-graph .rel-selection{position:absolute;background-color:#0e7a7b4d;border:rgb(14,122,123) solid 1px}.relation-graph .rel-graph-loading{position:absolute;z-index:100;left:0px;top:0px;height:100%;width:100%;background-color:#fff}.relation-graph .rel-graph-loading .c-graph-loading-icon{width:16px;height:16px;vertical-align:-3px;fill:currentColor;overflow:hidden;animation:turn 1s linear infinite}.relation-graph .rel-graph-loading .rel-graph-loading-message{display:none;position:absolute;width:200px;height:30px;line-height:30px;text-align:center;left:calc((100% - 200px)/2);top:calc((100% - 30px)/2);border-radius:5px;background-color:#4444444d;color:#fff}.relation-graph .rel-graph-loading-hide{display:none}@keyframes slowHide{0%{opacity:1}to{opacity:0;display:none}}.relation-graph .rel-toolbar{position:absolute;z-index:99;background-color:#dcdcdc33;color:#999;box-shadow:0 0 2px #ccc;box-sizing:border-box;border-radius:5px;padding:3px}.relation-graph .rel-toolbar .rg-icon{width:16px;height:16px;vertical-align:-3px;fill:currentColor;overflow:hidden}.relation-graph .rel-toolbar .c-mb-button svg{margin:auto}.relation-graph .rel-toolbar .c-mb-button-on{color:#2e74b5}.relation-graph .rel-toolbar .c-mb-button:hover{background-color:#dcdcdc80}.relation-graph .rel-toolbar .c-loading-icon{animation:turn 1s linear infinite}@keyframes turn{0%{-webkit-transform:rotate(0deg)}25%{-webkit-transform:rotate(90deg)}50%{-webkit-transform:rotate(180deg)}75%{-webkit-transform:rotate(270deg)}to{-webkit-transform:rotate(360deg)}}.relation-graph .rel-toolbar .c-current-zoom{margin-top:0;height:20px;color:#262626;font-size:10px;text-align:center;line-height:20px;border-radius:3px}.relation-graph .rel-toolbar .c-mb-button{height:40px;margin-top:0;opacity:1;text-align:center;padding-top:3px;cursor:pointer;font-size:18px;box-sizing:border-box;line-height:21px;display:flex;align-items:center;border-radius:3px}.relation-graph .rel-toolbar-v{width:45px;max-height:260px}.relation-graph .rel-toolbar-h{height:45px;width:300px}.relation-graph .rel-toolbar-h .c-mb-button{width:40px;height:100%;float:left}.relation-graph .rel-toolbar-h .c-current-zoom{width:40px;height:100%;float:left;line-height:40px}.relation-graph .rel-toolbar-h-right{right:15px}.relation-graph .rel-toolbar-h-left{left:15px}.relation-graph .rel-toolbar-h-center{left:calc((100% - 260px)/2)}.relation-graph .rel-toolbar-v-top{top:15px}.relation-graph .rel-toolbar-v-bottom{bottom:15px}.relation-graph .rel-toolbar-v-center{top:calc((100% - 260px)/2)}'));
    document.head.appendChild(elementStyle);
  } catch (e2) {
    console.error("vite-plugin-css-injected-by-js", e2);
  }
})();
var Ke = Object.defineProperty;
var Qe = (n, i, e2) => i in n ? Ke(n, i, { enumerable: true, configurable: true, writable: true, value: e2 }) : n[i] = e2;
var _ = (n, i, e2) => (Qe(n, typeof i != "symbol" ? i + "" : i, e2), e2);
var Ve = "2.1.15";
var J = Symbol("graphInstance");
var Ie = Symbol("graphData");
var j = Symbol("graph");
var at = !function(n) {
  var i, e2, o, t, s, a2, d = '<svg><symbol id="icon-iconset0444" viewBox="0 0 1024 1024"><path d="M960 682.666667l-106.666667 0C844.8 569.6 763.733333 42.666667 64 42.666667 51.2 42.666667 42.666667 51.2 42.666667 64c0 12.8 8.533333 21.333333 21.333333 21.333333 219.733333 0 377.6 106.666667 465.066667 315.733333 51.2 123.733333 64 236.8 66.133333 281.6L490.666667 682.666667c-12.8 0-21.333333 8.533333-21.333333 21.333333 0 6.4 2.133333 10.666667 6.4 14.933333l234.666667 256c4.266667 4.266667 8.533333 6.4 14.933333 6.4 6.4 0 10.666667-2.133333 14.933333-6.4l234.666667-256c4.266667-4.266667 6.4-8.533333 6.4-14.933333C981.333333 691.2 972.8 682.666667 960 682.666667zM725.333333 928 539.733333 725.333333 618.666667 725.333333c12.8 0 21.333333-8.533333 21.333333-21.333333l0-21.333333c-4.266667-87.466667-38.4-396.8-273.066667-554.666667C755.2 251.733333 804.266667 588.8 810.666667 682.666667l0 21.333333c0 12.8 8.533333 21.333333 21.333333 21.333333l78.933333 0L725.333333 928z"  ></path></symbol><symbol id="icon-iconset0445" viewBox="0 0 1024 1024"><path d="M974.933333 305.066667l-234.666667-256C736 44.8 731.733333 42.666667 725.333333 42.666667c-6.4 0-10.666667 2.133333-14.933333 6.4l-234.666667 256C471.466667 309.333333 469.333333 313.6 469.333333 320c0 12.8 8.533333 21.333333 21.333333 21.333333l104.533333 0c-2.133333 44.8-14.933333 157.866667-66.133333 281.6C441.6 832 283.733333 938.666667 64 938.666667c-12.8 0-21.333333 8.533333-21.333333 21.333333 0 12.8 8.533333 21.333333 21.333333 21.333333 699.733333 0 780.8-526.933333 789.333333-640l106.666667 0c12.8 0 21.333333-8.533333 21.333333-21.333333C981.333333 313.6 979.2 309.333333 974.933333 305.066667zM832 298.666667c-12.8 0-21.333333 8.533333-21.333333 21.333333l0 21.333333c-6.4 93.866667-55.466667 430.933333-443.733333 554.666667 234.666667-157.866667 268.8-467.2 273.066667-554.666667l0-21.333333c0-12.8-8.533333-21.333333-21.333333-21.333333l-78.933333 0L725.333333 96l185.6 202.666667L832 298.666667z"  ></path></symbol><symbol id="icon-yuanquanfenxiang" viewBox="0 0 1024 1024"><path d="M751.148705 578.773799c-61.987796 0-117.066229 30.121018-151.388942 76.488045L398.287145 536.382317c1.991354-10.171664 3.046383-20.673855 3.046383-31.419594 0-18.776645-3.196809-36.817534-9.058306-53.621245l193.486736-107.492176c31.949666 58.566884 94.104261 98.391914 165.386748 98.391914 103.803157 0 188.254571-84.450391 188.254571-188.254571S854.951863 65.73105 751.148705 65.73105c-103.804181 0-188.255595 84.450391-188.255595 188.254571 0 14.246469 1.600451 28.125571 4.613064 41.4746L368.032074 406.279167c-29.841655-39.193651-76.976162-64.544015-129.927141-64.544015-90.004897 0-163.228595 73.223698-163.228595 163.228595 0 90.003873 73.223698 163.228595 163.228595 163.228595 60.882626 0 114.078175-33.510208 142.134161-83.049484L575.173808 700.16452c-7.925507 20.788465-12.280698 43.325761-12.280698 66.86385 0 103.803157 84.450391 188.254571 188.255595 188.254571 103.803157 0 188.254571-84.450391 188.254571-188.254571S854.951863 578.773799 751.148705 578.773799zM751.148705 116.89636c75.590606 0 137.089261 61.498656 137.089261 137.089261s-61.498656 137.089261-137.089261 137.089261c-75.591629 0-137.090285-61.498656-137.090285-137.089261S675.557076 116.89636 751.148705 116.89636zM238.105956 617.026008c-61.791321 0-112.063285-50.27094-112.063285-112.063285 0-61.791321 50.27094-112.063285 112.063285-112.063285s112.063285 50.27094 112.063285 112.063285C350.168218 566.755068 299.897278 617.026008 238.105956 617.026008zM751.148705 904.117632c-75.591629 0-137.090285-61.498656-137.090285-137.089261s61.498656-137.089261 137.090285-137.089261c75.590606 0 137.089261 61.498656 137.089261 137.089261S826.739311 904.117632 751.148705 904.117632z"  ></path></symbol><symbol id="icon-hj2" viewBox="0 0 1024 1024"><path d="M963.66 256.607c0-0.244 0-0.607-0.126-0.851 0-0.369 0-0.614-0.119-0.978 0-0.369-0.119-0.733-0.119-1.104 0-0.244 0-0.487-0.126-0.725 0-0.369-0.119-0.859-0.244-1.222 0-0.244-0.119-0.369-0.119-0.613-0.126-0.365-0.126-0.852-0.245-1.216 0-0.244-0.126-0.369-0.126-0.613-0.119-0.365-0.244-0.734-0.364-1.222-0.126-0.244-0.126-0.49-0.244-0.609l-0.369-1.095c-0.119-0.245-0.119-0.49-0.244-0.734-0.121-0.369-0.245-0.613-0.365-0.978-0.126-0.244-0.244-0.613-0.369-0.851-0.119-0.244-0.238-0.613-0.364-0.859-0.119-0.364-0.244-0.607-0.364-0.977l-0.371-0.734c-0.119-0.364-0.364-0.725-0.487-0.971-0.119-0.245-0.244-0.371-0.364-0.614-0.244-0.364-0.369-0.733-0.614-1.097-0.119-0.126-0.244-0.369-0.364-0.487l-0.733-1.097c-0.119-0.126-0.244-0.369-0.365-0.487-0.244-0.369-0.487-0.733-0.733-0.978-0.126-0.244-0.244-0.369-0.487-0.613-0.245-0.238-0.49-0.607-0.734-0.851-0.244-0.245-0.487-0.49-0.607-0.734-0.244-0.244-0.369-0.487-0.614-0.733-0.851-0.972-1.829-1.83-2.681-2.682-0.245-0.244-0.49-0.369-0.734-0.614-0.244-0.244-0.487-0.487-0.733-0.607-0.245-0.244-0.614-0.487-0.859-0.733-0.238-0.121-0.364-0.365-0.607-0.49-0.365-0.244-0.734-0.487-0.978-0.733-0.119-0.119-0.364-0.244-0.487-0.365l-1.097-0.733c-0.119-0.119-0.364-0.244-0.487-0.364-0.365-0.244-0.734-0.369-1.097-0.614-0.244-0.119-0.369-0.244-0.613-0.364-0.365-0.126-0.734-0.369-0.972-0.487l-0.734-0.369c-0.369-0.121-0.613-0.245-0.977-0.365-0.244-0.126-0.614-0.244-0.859-0.369-0.244-0.119-0.607-0.238-0.851-0.364-0.365-0.119-0.609-0.244-0.978-0.364-0.244-0.126-0.487-0.126-0.733-0.245l-1.097-0.369c-0.244-0.119-0.487-0.119-0.609-0.244-0.369-0.119-0.733-0.244-1.22-0.364-0.245 0-0.371-0.126-0.614-0.126-0.364-0.119-0.851-0.244-1.216-0.244-0.244 0-0.487-0.121-0.613-0.121-0.364-0.126-0.852-0.126-1.222-0.244-0.244 0-0.482-0.126-0.725-0.126-0.369 0-0.734-0.119-1.104-0.119-0.364 0-0.607 0-0.978-0.126-0.244 0-0.607 0-0.851-0.119h-242.407c-21.604 0-39.062 17.456-39.062 39.062 0 21.604 17.458 39.055 39.062 39.055h146.102l-3.171 3.177-217.27 217.265 0.369 0.369-49.676 49.676-155.87-155.87c-7.694-7.689-17.827-11.472-27.953-11.472-10.13-0.126-20.263 3.659-27.952 11.472l-282.446 282.322c-15.258 15.258-15.258 40.041 0 55.298 15.258 15.258 40.033 15.258 55.291 0l255.108-255.11 155.746 155.751c7.813 7.815 17.945 11.593 28.076 11.474 10.126 0.119 20.382-3.659 28.070-11.474l182.964-182.969c0.734-0.734 1.347-1.342 1.956-2.075l111.564-111.564v146.109c0 21.604 17.451 39.060 39.055 39.060s39.062-17.456 39.062-39.060v-235.085c0-0.244 0.126-0.49 0.126-0.614 0-0.244 0.119-0.487 0.119-0.733 0-0.364 0.119-0.734 0.119-1.097s0-0.607 0.126-0.977c0-0.245 0-0.609 0.119-0.852-0.122-1.466-0.122-2.807-0.122-4.030v0zM963.66 256.607z"  ></path></symbol><symbol id="icon-circleyuanquan" viewBox="0 0 1024 1024"><path d="M150.1184 150.1184C250.2656 50.0736 370.8928 0 512 0c141.1072 0 261.7344 50.0736 361.8816 150.1184C973.9264 250.2656 1024 370.8928 1024 512c0 141.2096-50.0736 261.8368-150.1184 361.8816C773.7344 973.9264 653.1072 1024 512 1024c-141.1072 0-261.7344-50.0736-361.8816-150.1184C50.0736 773.8368 0 653.2096 0 512 0 370.8928 50.0736 250.2656 150.1184 150.1184zM512 41.8816c-85.2992 0-164.1472 20.8896-236.3392 62.7712C203.4688 146.432 146.432 203.4688 104.6528 275.6608 62.7712 347.9552 41.8816 426.7008 41.8816 512c0 129.6384 45.9776 240.4352 137.8304 332.288C271.5648 936.2432 382.3616 982.1184 512 982.1184c129.6384 0 240.4352-45.8752 332.288-137.8304C936.2432 752.4352 982.1184 641.6384 982.1184 512c0-129.6384-45.9776-240.3328-137.8304-332.288C752.4352 87.7568 641.6384 41.8816 512 41.8816zM512 256c-36.1472 0-70.144 7.0656-102.1952 20.8896C377.856 290.9184 349.4912 309.3504 324.9152 332.288c-22.9376 24.576-41.472 52.9408-55.3984 84.8896S248.6272 483.328 248.6272 519.3728c0 36.1472 6.9632 70.144 20.8896 102.1952s32.4608 60.3136 55.3984 84.8896C349.4912 729.4976 377.856 747.9296 409.8048 761.856 441.856 775.7824 475.8528 782.7456 512 782.7456c36.1472 0 70.144-6.9632 102.1952-20.8896C646.144 747.9296 674.5088 729.4976 699.0848 706.4576c22.9376-24.576 41.472-52.9408 55.3984-84.8896s20.8896-66.048 20.8896-102.1952c0-36.0448-6.9632-70.144-20.8896-102.1952S722.0224 356.9664 699.0848 332.288C674.5088 309.3504 646.144 290.9184 614.1952 276.8896 582.144 263.0656 548.1472 256 512 256z"  ></path></symbol><symbol id="icon-bhjlink" viewBox="0 0 1024 1024"><path d="M901.920618 465.785468c-50.993571 0-94.522533 32.698367-110.688942 78.273953L702.244627 544.059421c1.764013-10.590222 2.890616-21.423121 2.890616-32.694527 0-72.177856-40.480145-134.923579-99.898281-166.857822l34.099901-112.776268c8.829281 2.126492 18.1347 3.327588 27.724265 3.327588 64.833817 0 117.472367-52.597848 117.472367-117.589097C784.532727 52.594008 731.894177 0 667.06036 0c-64.911381 0-117.509229 52.594008-117.509229 117.470063 0 49.305587 30.248562 91.349307 73.177745 108.842756l-33.419485 110.692013c-22.548956-9.588797-47.462473-14.807112-73.540224-14.807112-49.18732 0-93.841349 18.658451-127.540374 49.309426L213.348053 196.583401l-1.886119 2.008226c19.940183-21.103648 32.256788-49.588197 32.256788-81.003297 0-64.872983-52.517212-117.470063-117.470063-117.470063-64.913685 0-117.511533 52.59708-117.511533 117.470063 0 65.034255 52.59708 117.592169 117.511533 117.592169 31.412796 0 59.898881-12.358075 80.921125-32.335888l-6.179038 6.056931 174.960609 174.879973c-30.729308 33.66293-49.506025 78.47516-49.506025 127.661712 0 43.008283 14.401627 82.685138 38.593258 114.501114l-149.845117 120.999625c-21.503757-28.044506-55.285722-46.218372-93.357532-46.218372-64.874519 0-117.430897 52.719186-117.430897 117.592169 0 64.833049 52.556378 117.470063 117.430897 117.470063 64.872983 0 117.549163-52.637014 117.549163-117.470063 0-20.541499-5.335813-39.878062-14.602834-56.68956l151.369526-122.203792c34.584487 37.633303 84.29095 61.384123 139.618142 61.384123 28.082136 0 54.602234-6.057699 78.553492-17.091805l52.716114 119.514383c-35.585143 20.222026-59.497236 58.335306-59.497236 102.106945 0 64.912149 52.637014 117.549163 117.592169 117.549163 64.872983 0 117.388659-52.637014 117.388659-117.549163 0-64.833049-52.516444-117.513069-117.388659-117.513069-15.047485 0-29.248673 2.929782-42.446133 7.903885l-52.798286-120.034294c42.807844-24.554878 75.182898-65.518073 88.46253-114.221576l88.222926 0c-1.405374 7.018422-1.96522 14.241123-1.96522 21.743362 0 64.872983 52.557914 117.509997 117.387123 117.509997 64.995089 0 117.596009-52.637014 117.596009-117.509997C1019.508947 518.383316 966.994039 465.785468 901.920618 465.785468L901.920618 465.785468zM901.920618 465.785468"  ></path></symbol><symbol id="icon-lianjie_connecting5" viewBox="0 0 1024 1024"><path d="M801.25952 251.74016l-28.9792-28.99968-150.79424 150.8352-35.1232-35.10272-99.14368 99.16416 99.14368 99.16416 99.16416-99.16416-35.10272-35.1232zM487.19872 476.8768l-29.94176 29.94176-19.61984-19.61984-99.16416 99.16416 35.10272 35.1232-150.8352 150.79424 28.95872 28.95872 150.8352-150.79424 35.10272 35.10272 99.14368-99.14368-19.61984-19.64032 29.96224-29.96224-59.92448-59.92448z m-15.48288 44.4416l15.4624-15.4624 30.98624 30.98624-15.4624 15.44192-30.98624-30.96576z" fill="" ></path></symbol><symbol id="icon-xiazai" viewBox="0 0 1024 1024"><path d="M840.5 900.3h-657c-16.5 0-29.9 13.4-29.9 29.9s13.4 29.9 29.9 29.9h657.1c16.5 0 29.9-13.4 29.9-29.9-0.1-16.6-13.5-29.9-30-29.9zM631.5 123.7V541.8H763.1L512 769.9l-251.2-228h131.7V123.7h239m0-59.7h-239c-33 0-59.7 26.7-59.7 59.7v358.4H183.5c-26.6 0-39.9 32.2-21.1 51l328.5 298.2c5.8 5.8 13.5 8.7 21.1 8.7s15.3-2.9 21.1-8.7l328.5-298.2c18.8-18.8 5.5-51-21.1-51H691.2V123.7c0-33-26.7-59.7-59.7-59.7z"  ></path></symbol><symbol id="icon-ico_reset" viewBox="0 0 1024 1024"><path d="M925.97087933 277.33133334a479.997 479.997 0 1 0 54.33566 255.9984H916.05094133a415.9974 415.9974 0 1 1-64.191599-255.9984h74.047537z"  ></path><path d="M978.64255033 61.01268534L725.33213333 371.09074734h297.59814z"  ></path></symbol><symbol id="icon-fangda" viewBox="0 0 1024 1024"><path d="M768 448a320 320 0 1 0-320 320 320 320 0 0 0 320-320z m64 0A384 384 0 1 1 448 64a384 384 0 0 1 384 384z"  ></path><path d="M681.28 726.72a32 32 0 0 1 45.44-45.44l160 160a32 32 0 0 1-45.44 45.44zM320 480a32 32 0 0 1 0-64h256a32 32 0 0 1 0 64z"  ></path><path d="M480 576a32 32 0 0 1-64 0V320a32 32 0 0 1 64 0z"  ></path></symbol><symbol id="icon-zidong" viewBox="0 0 1024 1024"><path d="M131.3 363.3c-19.2 47.3-28.9 97.3-28.9 148.7 0 51.3 9.7 101.3 28.9 148.7 7 17.2 15.1 33.8 24.3 49.7l15.8-49.1 42.8 13.8-39.8 123.8-42.8-13.9-80.9-26 13.8-42.8 52.3 16.8c-98-168.4-74.8-387.9 69.4-532.1C342.4 44.7 586.9 30.5 759.1 158.3l-32.2 32.2c-25.1-18-52.1-32.9-80.9-44.6-47.3-19.2-97.3-28.9-148.7-28.9-51.3 0-101.3 9.7-148.7 28.9-49 19.9-92.9 49.1-130.6 86.8s-66.9 81.7-86.7 130.6z m828.3-60.2l13.8-42.8-80.9-26-42.8-13.8-39.8 123.8 42.8 13.8 15-46.7c9.8 16.6 18.4 34 25.8 52.1 19.2 47.3 28.9 97.3 28.9 148.7 0 51.3-9.7 101.3-28.9 148.7-19.9 49-49.1 92.9-86.8 130.6C768.9 829 725 858.2 676 878.1c-47.3 19.2-97.3 28.9-148.7 28.9-51.3 0-101.3-9.7-148.7-28.9-28.8-11.7-55.9-26.6-80.9-44.6l-32.2 32.2c126.3 93.7 382.6 147.7 572.9-42.6 145.8-145.8 167.9-368.6 66.1-537.7l55.1 17.7zM474 241.2L295 730.4h64.8l50.5-148.2h195.3l54 148.2h70.3L539.6 241.2H474z m-45.9 288.3L479.8 386c11-30.9 19.4-62.1 25.4-93.4 6.9 26 17.9 59.9 32.8 101.5l48.2 135.5H428.1z" fill="" ></path></symbol><symbol id="icon-quanping" viewBox="0 0 1024 1024"><path d="M795.5 192H581c-19.6 0-35.6 15.7-36 35.3-0.4 20.3 16.4 36.7 36.7 36.7h128.4L581 393.1c-14 14-14 36.9 0 50.9s36.9 14 50.9 0L760 315.9v129c0 19.6 15.8 35.6 35.3 36 20.2 0.4 36.7-16.4 36.7-36.7V228.5c0-20.1-16.3-36.5-36.5-36.5zM442.2 760H313.8L443 630.9c14-14 14-36.9 0-50.9s-36.9-14-50.9 0L264 708.1V579c0-19.6-15.8-35.6-35.3-36-20.2-0.4-36.7 16.4-36.7 36.7v215.6c0 20.3 16.4 36.7 36.7 36.7H443c19.6 0 35.6-15.7 36-35.3 0.3-20.3-16.5-36.7-36.8-36.7z"  ></path><path d="M838 136c27.6 0 50 22.4 50 50v652c0 27.6-22.4 50-50 50H186c-27.6 0-50-22.4-50-50V186c0-27.6 22.4-50 50-50h652m0-72H186c-16.4 0-32.4 3.2-47.5 9.6-14.5 6.1-27.6 14.9-38.8 26.1-11.2 11.2-20 24.2-26.1 38.8-6.4 15.1-9.6 31.1-9.6 47.5v652c0 16.4 3.2 32.4 9.6 47.5 6.1 14.5 14.9 27.6 26.1 38.8 11.2 11.2 24.2 20 38.8 26.1 15.1 6.4 31.1 9.6 47.5 9.6h652c16.4 0 32.4-3.2 47.5-9.6 14.5-6.1 27.6-14.9 38.8-26.1 11.2-11.2 20-24.2 26.1-38.8 6.4-15.1 9.6-31.1 9.6-47.5V186c0-16.4-3.2-32.4-9.6-47.5-6.1-14.5-14.9-27.6-26.1-38.8-11.2-11.2-24.2-20-38.8-26.1-15.1-6.4-31.1-9.6-47.5-9.6z"  ></path></symbol><symbol id="icon-lianjieliu" viewBox="0 0 1024 1024"><path d="M280.224 425.856h348.608a29.536 29.536 0 1 0 0-59.072H280.224c-52.448 0-93.152-34.304-93.152-73.856s40.704-73.856 93.152-73.856h140.128C432.096 258.816 468.448 288 512 288s79.904-29.184 91.648-68.928h178.08a29.536 29.536 0 1 0 0-59.072h-179.584C588.896 122.784 553.728 96 512 96s-76.896 26.784-90.112 64H280.224C197.184 160 128 218.272 128 292.928s69.184 132.928 152.224 132.928z"  ></path><path d="M895.936 415.2A96 96 0 1 0 800 512c30.656 0 57.632-14.624 75.2-36.992 10.56 12.064 16.832 26.56 16.832 41.92 0 39.552-40.704 73.856-93.152 73.856H306.016A95.584 95.584 0 0 0 224 544a95.68 95.68 0 0 0-95.232 88.352C89.888 656.224 64 695.424 64 740.928c0 74.656 69.184 132.928 152.224 132.928h241.728A95.808 95.808 0 0 0 544 928a96 96 0 1 0 0-192 95.904 95.904 0 0 0-94.272 78.752H216.224c-52.448 0-93.152-34.304-93.152-73.856 0-17.504 8.32-33.792 21.76-46.72A95.808 95.808 0 0 0 224 736a95.68 95.68 0 0 0 95.008-86.144h479.84c83.072 0 152.224-58.272 152.224-132.928 0.032-41.536-21.824-77.568-55.136-101.728z"  ></path></symbol><symbol id="icon-shuaxin" viewBox="0 0 1024 1024"><path d="M512 919.552c-224.768 0-407.552-182.784-407.552-407.552 0-8.704 0.512-17.408 1.024-26.112l71.68 4.608c-0.512 7.168-0.512 14.336-0.512 21.504 0 185.344 150.528 335.872 335.872 335.872 86.528 0 168.448-32.768 230.912-92.16l49.152 52.224C716.288 880.128 616.96 919.552 512 919.552zM919.552 512h-71.68c0-11.776-0.512-23.552-2.048-35.328-17.92-171.52-161.28-300.544-334.336-300.544-67.584 0-132.096 19.968-187.904 57.344L284.16 174.08c67.072-45.568 145.92-69.632 227.84-69.632 209.408 0 384 156.672 405.504 365.056 1.536 13.824 2.048 28.16 2.048 42.496z" fill="#707070" ></path><path d="M140.288 290.816L28.16 491.52c-3.072 5.12 1.024 11.776 6.656 11.776H258.56c6.144 0 9.728-6.144 6.656-11.776L153.6 290.816c-3.072-5.632-10.752-5.632-13.312 0zM870.4 675.84L758.272 475.136c-3.072-5.12 1.024-11.776 6.656-11.776h223.744c6.144 0 9.728 6.144 6.656 11.776L883.712 675.84c-2.56 5.12-10.24 5.12-13.312 0zM270.336 202.24a35.84 35.84 0 1 0 71.68 0 35.84 35.84 0 1 0-71.68 0zM728.576 784.896a35.84 35.84 0 1 0 71.68 0 35.84 35.84 0 1 0-71.68 0z" fill="#707070" ></path></symbol><symbol id="icon-resize-" viewBox="0 0 1024 1024"><path d="M410.816 673.514667L230.997333 853.333333H384v85.333334H85.333333V640h85.333334v153.002667l179.818666-179.84 60.330667 60.373333z m-53.632-256L170.666667 230.997333V384H85.333333V85.333333h298.666667v85.333334h-153.002667l186.517334 186.517333-60.330667 60.330667z m234.666667-45.696L793.002667 170.666667H640V85.333333h298.666667v298.666667h-85.333334v-153.002667l-201.152 201.173334-60.330666-60.373334z m67.029333 226.709333L853.333333 793.002667V640h85.333334v298.666667H640v-85.333334h153.002667l-194.474667-194.453333 60.352-60.352z"  ></path></symbol><symbol id="icon-guanxitu" viewBox="0 0 1024 1024"><path d="M209.003789 401.084632l29.749895-44.948211 107.843369 71.464421-29.749895 44.894316zM682.469053 546.600421l-14.551579-51.846737 124.496842-35.031579 14.551579 51.846737zM315.068632 812.840421l-40.367158-35.678316 85.692631-96.902737 40.421053 35.732211zM597.962105 390.251789l-46.672842-26.947368 43.11579-74.64421 46.672842 26.947368zM615.639579 728.764632l41.121684-34.816 83.536842 98.735157-41.121684 34.816z" fill="#444A5C" ></path><path d="M501.221053 765.305263c-118.568421 0-215.578947-97.010526-215.578948-215.578947s97.010526-215.578947 215.578948-215.578948 215.578947 97.010526 215.578947 215.578948-97.010526 215.578947-215.578947 215.578947z m0-377.263158c-91.621053 0-161.684211 70.063158-161.684211 161.684211s70.063158 161.684211 161.684211 161.68421 161.684211-70.063158 161.68421-161.68421-75.452632-161.684211-161.68421-161.684211zM167.073684 452.715789c-59.284211 0-107.789474-48.505263-107.789473-107.789473s48.505263-107.789474 107.789473-107.789474 107.789474 48.505263 107.789474 107.789474-48.505263 107.789474-107.789474 107.789473z m0-161.68421c-32.336842 0-53.894737 21.557895-53.894737 53.894737s21.557895 53.894737 53.894737 53.894737 53.894737-21.557895 53.894737-53.894737-26.947368-53.894737-53.894737-53.894737zM253.305263 948.547368c-59.284211 0-107.789474-48.505263-107.789474-107.789473s48.505263-107.789474 107.789474-107.789474 107.789474 48.505263 107.789474 107.789474-48.505263 107.789474-107.789474 107.789473z m0-161.68421c-32.336842 0-53.894737 21.557895-53.894737 53.894737s21.557895 53.894737 53.894737 53.894737 53.894737-21.557895 53.894737-53.894737-21.557895-53.894737-53.894737-53.894737zM856.926316 576.673684c-59.284211 0-107.789474-48.505263-107.789474-107.789473s48.505263-107.789474 107.789474-107.789474 107.789474 48.505263 107.789473 107.789474-48.505263 107.789474-107.789473 107.789473z m0-161.68421c-32.336842 0-53.894737 21.557895-53.894737 53.894737s21.557895 53.894737 53.894737 53.894736 53.894737-21.557895 53.894737-53.894736-21.557895-53.894737-53.894737-53.894737zM662.905263 350.315789C592.842105 350.315789 528.168421 291.031579 528.168421 215.578947s59.284211-134.736842 134.736842-134.736842 134.736842 59.284211 134.736842 134.736842-59.284211 134.736842-134.736842 134.736842z m0-215.578947c-43.115789 0-80.842105 37.726316-80.842105 80.842105s37.726316 80.842105 80.842105 80.842106 80.842105-37.726316 80.842105-80.842106-32.336842-80.842105-80.842105-80.842105zM749.136842 921.6c-43.115789 0-80.842105-37.726316-80.842105-80.842105s37.726316-80.842105 80.842105-80.842106 80.842105 37.726316 80.842105 80.842106-37.726316 80.842105-80.842105 80.842105z m0-107.789474c-16.168421 0-26.947368 10.778947-26.947368 26.947369s10.778947 26.947368 26.947368 26.947368 26.947368-10.778947 26.947369-26.947368-10.778947-26.947368-26.947369-26.947369z" fill="#444A5C" ></path></symbol><symbol id="icon-tupian" viewBox="0 0 1024 1024"><path d="M938.666667 553.92V768c0 64.8-52.533333 117.333333-117.333334 117.333333H202.666667c-64.8 0-117.333333-52.533333-117.333334-117.333333V256c0-64.8 52.533333-117.333333 117.333334-117.333333h618.666666c64.8 0 117.333333 52.533333 117.333334 117.333333v297.92z m-64-74.624V256a53.333333 53.333333 0 0 0-53.333334-53.333333H202.666667a53.333333 53.333333 0 0 0-53.333334 53.333333v344.48A290.090667 290.090667 0 0 1 192 597.333333a286.88 286.88 0 0 1 183.296 65.845334C427.029333 528.384 556.906667 437.333333 704 437.333333c65.706667 0 126.997333 16.778667 170.666667 41.962667z m0 82.24c-5.333333-8.32-21.130667-21.653333-43.648-32.917333C796.768 511.488 753.045333 501.333333 704 501.333333c-121.770667 0-229.130667 76.266667-270.432 188.693334-2.730667 7.445333-7.402667 20.32-13.994667 38.581333-7.68 21.301333-34.453333 28.106667-51.370666 13.056-16.437333-14.634667-28.554667-25.066667-36.138667-31.146667A222.890667 222.890667 0 0 0 192 661.333333c-14.464 0-28.725333 1.365333-42.666667 4.053334V768a53.333333 53.333333 0 0 0 53.333334 53.333333h618.666666a53.333333 53.333333 0 0 0 53.333334-53.333333V561.525333zM320 480a96 96 0 1 1 0-192 96 96 0 0 1 0 192z m0-64a32 32 0 1 0 0-64 32 32 0 0 0 0 64z"  ></path></symbol><symbol id="icon-juhejiedian" viewBox="0 0 1024 1024"><path d="M533.333333 725.333333a64 64 0 1 1-64 64 64 64 0 0 1 64-64m0-85.333333a149.333333 149.333333 0 1 0 149.333334 149.333333 149.333333 149.333333 0 0 0-149.333334-149.333333z" fill="#666666" ></path><path d="M533.333333 277.333333m-106.666666 0a106.666667 106.666667 0 1 0 213.333333 0 106.666667 106.666667 0 1 0-213.333333 0Z" fill="#666666" ></path><path d="M277.333333 320m-106.666666 0a106.666667 106.666667 0 1 0 213.333333 0 106.666667 106.666667 0 1 0-213.333333 0Z" fill="#666666" ></path><path d="M789.333333 320m-106.666666 0a106.666667 106.666667 0 1 0 213.333333 0 106.666667 106.666667 0 1 0-213.333333 0Z" fill="#666666" ></path><path d="M512 341.333333h42.666667v384h-42.666667z" fill="#666666" ></path><path d="M741.290667 357.504l30.165333 30.165333-225.066667 225.066667-30.165333-30.165333z" fill="#666666" ></path><path d="M558.08 582.016l-30.165333 30.165333-228.693334-228.693333 30.165334-30.165333z" fill="#666666" ></path></symbol><symbol id="icon-ziyuan" viewBox="0 0 1024 1024"><path d="M236.615854 752.86913h-0.484162A241.500139 241.500139 0 0 1 0.538332 527.733676a238.78883 238.78883 0 0 1 64.684079-180.011531 242.081134 242.081134 0 0 1 149.025146-74.367324 298.534454 298.534454 0 0 1 596.003751 25.951097V300.95207a221.262156 221.262156 0 0 1 213.031398 233.075715 222.714643 222.714643 0 0 1-221.262156 209.1581h-3.098639a27.500417 27.500417 0 0 1 0-54.904001h2.711309A167.520145 167.520145 0 0 0 968.378705 531.219644a166.261323 166.261323 0 0 0-166.16449-175.363573 151.058627 151.058627 0 0 0-18.204502 1.065157 27.500417 27.500417 0 0 1-30.211725-30.308558 240.822312 240.822312 0 0 0 1.549319-27.306752 243.727285 243.727285 0 0 0-487.357738 0 27.500417 27.500417 0 0 1-27.403584 27.500417 185.627813 185.627813 0 0 0-185.240484 197.538205A186.30564 186.30564 0 0 0 237.100016 697.965129a27.500417 27.500417 0 0 1-0.484162 54.904001z"  ></path><path d="M513.266174 1021.869686a27.500417 27.500417 0 0 1-27.500417-27.403584v-484.162268a27.500417 27.500417 0 1 1 54.904001 0v484.162268a27.403584 27.403584 0 0 1-27.403584 27.403584z"  ></path><path d="M513.266174 1024a27.500417 27.500417 0 0 1-19.366491-8.037094L342.260061 864.129619a27.500417 27.500417 0 1 1 38.732981-38.732981L513.266174 957.766602l130.530147-130.336483a27.500417 27.500417 0 0 1 38.732981 38.732982L532.632664 1015.962906a27.403584 27.403584 0 0 1-19.36649 8.037094z"  ></path></symbol><symbol id="icon-add-select" viewBox="0 0 1024 1024"><path d="M544 213.333333v266.666667H810.666667v64H544V810.666667h-64V544H213.333333v-64h266.666667V213.333333z"  ></path></symbol><symbol id="icon-sami-select" viewBox="0 0 1024 1024"><path d="M810.666667 480v64H213.333333v-64z"  ></path></symbol><symbol id="icon-icon_shuaxin" viewBox="0 0 1024 1024"><path d="M512 938.666667c-55.371852 0-109.226667-10.903704-159.857778-32.237037-48.924444-20.66963-92.823704-50.251852-130.465185-87.988149-37.736296-37.736296-67.318519-81.635556-87.988148-130.465185-21.428148-50.631111-32.237037-104.391111-32.237037-159.857777s10.903704-109.226667 32.237037-159.857778c20.66963-48.924444 50.251852-92.823704 87.988148-130.465185 37.736296-37.736296 81.635556-67.318519 130.465185-87.988149 50.631111-21.428148 104.391111-32.237037 159.857778-32.237037 63.81037 0 125.060741 14.222222 181.854815 42.382223 54.139259 26.832593 102.684444 66.085926 140.325926 113.682963 7.300741 9.197037 5.783704 22.660741-3.508148 29.961481-9.197037 7.300741-22.660741 5.783704-29.961482-3.508148-70.257778-88.936296-175.502222-139.946667-288.711111-139.946667-202.808889 0-367.881481 165.072593-367.881481 367.881482s165.072593 367.881481 367.881481 367.881481 367.881481-165.072593 367.881481-367.881481c0-11.757037 9.576296-21.333333 21.333334-21.333334S922.548148 516.361481 922.548148 528.118519c0 55.371852-10.903704 109.226667-32.237037 159.857777-20.66963 48.924444-50.251852 92.823704-87.988148 130.465185-37.736296 37.736296-81.635556 67.318519-130.465185 87.988149-50.631111 21.428148-104.485926 32.237037-159.857778 32.237037z"  ></path><path d="M817.398519 308.242963c-11.757037 0-21.333333-9.576296-21.333334-21.333333V106.666667c0-11.757037 9.576296-21.333333 21.333334-21.333334s21.333333 9.576296 21.333333 21.333334v180.242963c0 11.757037-9.481481 21.333333-21.333333 21.333333z"  ></path><path d="M817.398519 308.242963H637.155556c-11.757037 0-21.333333-9.576296-21.333334-21.333333s9.576296-21.333333 21.333334-21.333334h180.242963c11.757037 0 21.333333 9.576296 21.333333 21.333334s-9.481481 21.333333-21.333333 21.333333z"  ></path></symbol><symbol id="icon-lianjiezhong" viewBox="0 0 1024 1024"><path d="M883.396923 298.141538a99.721846 99.721846 0 0 1-142.414769 0 103.187692 103.187692 0 0 1 0-144.423384 99.721846 99.721846 0 0 1 142.414769 0 103.187692 103.187692 0 0 1 0 144.423384zM285.144615 760.438154a87.276308 87.276308 0 0 0-124.652307 0 90.269538 90.269538 0 0 0 0 126.385231c34.422154 34.894769 90.230154 34.894769 124.652307 0a90.269538 90.269538 0 0 0 0-126.424616z m482.579693 108.307692a64.472615 64.472615 0 0 1 0-90.269538 62.345846 62.345846 0 0 1 89.00923 0c24.576 24.930462 24.576 65.378462 0 90.269538a62.345846 62.345846 0 0 1-89.00923 0zM294.006154 298.141538a103.187692 103.187692 0 0 0 0-144.423384 99.721846 99.721846 0 0 0-142.454154 0 103.187692 103.187692 0 0 0 0 144.423384 99.721846 99.721846 0 0 0 142.454154 0z m324.214154-196.01723c0 56.438154-45.095385 102.163692-100.745846 102.163692-55.611077 0-100.706462-45.725538-100.706462-102.163692C416.768 45.725538 461.863385 0 517.474462 0c55.650462 0 100.745846 45.725538 100.745846 102.124308zM517.474462 870.793846c-41.747692 0-75.539692 34.264615-75.539693 76.603077 0 42.299077 33.831385 76.603077 75.539693 76.603077 41.747692 0 75.539692-34.264615 75.539692-76.603077 0-42.299077-33.792-76.603077-75.539692-76.603077z m416.768-294.990769c-27.805538 0-50.333538-22.843077-50.333539-51.042462 0-28.199385 22.528-51.042462 50.333539-51.042461 27.844923 0 50.412308 22.843077 50.372923 51.042461 0 28.199385-22.567385 51.081846-50.372923 51.081847zM201.452308 524.8c0-56.398769-45.095385-102.124308-100.745846-102.124308C45.095385 422.596923 0 468.283077 0 524.760615c0 56.398769 45.095385 102.124308 100.706462 102.124308 55.650462 0 100.745846-45.686154 100.745846-102.124308z"  ></path></symbol><symbol id="icon-loading" viewBox="0 0 1024 1024"><path d="M563.2 819.2a102.4 102.4 0 1 1 0 204.8 102.4 102.4 0 0 1 0-204.8z m-320.4608-153.6a128 128 0 1 1 0 256 128 128 0 0 1 0-256z m592.7936 25.6a102.4 102.4 0 1 1 0 204.8 102.4 102.4 0 0 1 0-204.8zM947.2 477.1328a76.8 76.8 0 1 1 0 153.6 76.8 76.8 0 0 1 0-153.6zM128 307.2a128 128 0 1 1 0 256 128 128 0 0 1 0-256z m782.6432-40.6016a51.2 51.2 0 1 1 0 102.4 51.2 51.2 0 0 1 0-102.4zM409.6 0a153.6 153.6 0 1 1 0 307.2 153.6 153.6 0 0 1 0-307.2z m384 153.6a25.6 25.6 0 1 1 0 51.2 25.6 25.6 0 0 1 0-51.2z" fill="#555555" ></path></symbol><symbol id="icon-tupushujuyuan" viewBox="0 0 1024 1024"><path d="M851.456 588.288c-13.312 0-25.6 2.048-37.888 5.12l-90.112-155.648 55.296-31.744c18.944 17.92 44.032 29.184 72.192 29.184 57.344 0 103.936-46.592 103.936-103.936s-46.592-103.936-103.936-103.936c-57.344 0-103.936 46.592-103.936 103.936 0 5.12 0.512 10.24 1.536 15.36l-58.368 33.792-82.944-143.872c26.112-25.088 41.984-59.904 41.984-98.816 0-75.776-61.44-137.216-137.216-137.216s-137.216 61.44-137.216 137.216c0 38.912 15.872 73.728 41.984 98.816l-84.992 146.944-56.832-32.768c1.024-6.144 2.048-12.8 2.048-19.456 0-57.344-46.592-103.936-103.936-103.936-57.344 0-103.936 46.592-103.936 103.936s46.592 103.936 103.936 103.936c26.624 0 51.2-10.24 69.12-26.624l56.32 32.768-88.064 152.576c-11.776-3.584-24.576-5.12-37.888-5.12-75.776 0-137.216 61.44-137.216 137.216s61.44 137.216 137.216 137.216c64.512 0 118.272-44.544 133.12-103.936h173.056v61.44c-40.96 13.824-70.656 52.736-70.656 98.816 0 57.344 46.592 103.936 103.936 103.936s103.936-46.592 103.936-103.936c0-46.08-29.696-84.48-70.656-98.816v-61.44h173.056c14.848 59.904 69.12 103.936 133.12 103.936 75.776 0 137.216-61.44 137.216-137.216s-61.44-137.728-137.216-137.728z m-410.112-450.048c0-38.912 31.744-70.656 70.656-70.656s70.656 31.744 70.656 70.656c0 13.824-4.096 26.624-10.752 37.376-12.288 19.456-33.28 32.256-57.856 33.28h-5.12c-24.576-1.024-45.568-13.824-57.856-33.28-6.144-10.752-9.728-24.064-9.728-37.376z m32.768 132.096c11.776 3.584 24.576 5.12 37.888 5.12s25.6-2.048 37.888-5.12l82.944 143.872-124.416 72.192-118.784-68.608 84.48-147.456z m-301.568 526.336c-38.912 0-70.656-31.744-70.656-70.656 0-38.912 31.744-70.656 70.656-70.656h2.56c24.576 1.024 45.568 13.824 57.856 33.28 1.024 1.536 1.536 2.56 2.56 4.096 5.12 9.728 8.192 20.992 8.192 33.28 0 11.776-3.072 23.552-8.192 33.28-12.288 22.016-35.84 37.376-62.976 37.376z m133.12-103.936c-6.144-25.6-19.456-48.128-37.888-65.536l88.064-152.576 122.88 70.656v146.944h-173.056z m239.616-151.552l120.832-69.632 90.112 155.648c-18.432 17.408-31.744 39.936-37.888 65.536h-173.056v-151.552z m306.176 255.488c-27.136 0-50.688-15.36-62.464-37.376-5.12-9.728-8.192-21.504-8.192-33.28 0-12.288 3.072-23.552 8.192-33.28 0.512-1.536 1.536-3.072 2.56-4.096 12.288-19.456 33.28-32.768 57.856-33.28h2.56c38.912 0 70.656 31.744 70.656 70.656-0.512 38.912-32.256 70.656-71.168 70.656z"  ></path></symbol><symbol id="icon-jiedian" viewBox="0 0 1024 1024"><path d="M882.1914 744.849921c-60.501005 0-112.097749 38.645092-131.425292 92.560342H244.912146c-80.468136 0-145.955927-62.61964-145.955926-139.570043 0-77.000371 65.487791-139.570043 145.955926-139.570043h136.312143c19.497433 53.585462 70.934281 91.950735 131.205434 91.950735 60.241173 0 111.688014-38.375266 131.205434-91.950735h136.452052C914.210763 558.280171 1023.340425 453.92743 1023.340425 325.660102S914.210763 93.040033 780.077216 93.040033H273.093982c-19.197627-54.165089-70.944274-93.040033-131.595182-93.040033C64.508422 0 1.928757 62.569672 1.928757 139.560049c0 76.950403 62.579665 139.570043 139.570043 139.570043 60.640915 0 112.377569-38.894931 131.585189-93.040033h506.993227c80.468136 0 145.955927 62.61964 145.955927 139.570043 0 77.000371-65.487791 139.570043-145.955927 139.570043H644.414655c-18.887826-54.734722-70.924287-94.139324-131.974938-94.139325-61.090625 0-113.097105 39.394609-131.974938 94.139325H244.912146c-134.133547 0-243.263209 104.352741-243.263209 232.620069 0 128.267328 109.129663 232.620069 243.263209 232.620069h505.524174c19.057717 54.394941 70.9043 93.529717 131.75508 93.529717 76.950403 0 139.570043-62.61964 139.570043-139.570043 0.009994-77.000371-62.61964-139.580036-139.570043-139.580036zM141.428845 207.036558c-37.166045 0-67.376574-30.230515-67.376574-67.376573 0-37.166045 30.210528-67.376574 67.376574-67.376574 37.146058 0 67.376574 30.210528 67.376573 67.376574 0 37.146058-30.230515 67.376574-67.376573 67.376573z m371.000878 236.257725c37.146058 0 67.376574 30.210528 67.376574 67.376574 0 37.146058-30.230515 67.376574-67.376574 67.376573-37.166045 0-67.376574-30.230515-67.376574-67.376573 0.009994-37.176039 30.210528-67.376574 67.376574-67.376574z m369.761677 508.502254c-37.166045 0-67.376574-30.230515-67.376574-67.376573 0-37.166045 30.210528-67.376574 67.376574-67.376574 37.146058 0 67.376574 30.210528 67.376574 67.376574 0 37.146058-30.230515 67.376574-67.376574 67.376573z"  ></path></symbol><symbol id="icon-shitujiedianxianshi" viewBox="0 0 1367 1024"><path d="M1235.403267 512.03593a130.596433 130.596433 0 0 0-42.68749 7.796802l-193.295715-290.430872A149.113837 149.113837 0 1 0 724.647767 149.48464a151.777744 151.777744 0 0 0 37.229729 97.849864l-194.920048 357.873209a220.519548 220.519548 0 0 0-55.162374-8.511508 207.914718 207.914718 0 0 0-114.807909 34.046035L240.401393 443.683967a126.763005 126.763005 0 0 0-75.564005-182.380192 127.737605 127.737605 0 1 0 12.99467 239.816633l157.625345 188.422713A213.307506 213.307506 0 1 0 643.23616 643.282096l190.956674-350.856087a164.187654 164.187654 0 0 0 39.56877 6.172468 143.591102 143.591102 0 0 0 60.555162-12.99467l192.516034 288.026859a121.760057 121.760057 0 0 0-18.582377 64.973349 128.127445 128.127445 0 1 0 127.152844-126.568085zM129.621832 448.362048a68.157044 68.157044 0 1 1 68.157044-68.092071A68.157044 68.157044 0 0 1 129.621832 448.362048z m528.948039 365.670011a145.86517 145.86517 0 1 1-145.86517-145.86517 145.86517 145.86517 0 0 1 145.86517 145.86517z m215.12676-577.937944a87.389155 87.389155 0 1 1 87.389155-87.389155 87.389155 87.389155 0 0 1-87.389155 87.389155z m365.085251 474.305451a68.157044 68.157044 0 1 1 68.222017-68.416937 68.157044 68.157044 0 0 1-68.222017 68.157044z"  ></path></symbol><symbol id="icon-shituxianshiquanbujiedian" viewBox="0 0 1367 1024"><path d="M1235.403267 512.03593a130.596433 130.596433 0 0 0-42.68749 7.796802l-193.295715-290.430872A149.113837 149.113837 0 1 0 724.647767 149.48464a151.777744 151.777744 0 0 0 37.229729 97.849864l-194.920048 357.873209a220.519548 220.519548 0 0 0-55.162374-8.511508 207.914718 207.914718 0 0 0-114.807909 34.046035L240.401393 443.683967a126.763005 126.763005 0 0 0-75.564005-182.380192 127.737605 127.737605 0 1 0 12.99467 239.816633l157.625345 188.422713A213.307506 213.307506 0 1 0 643.23616 643.282096l190.956674-350.856087a164.187654 164.187654 0 0 0 39.56877 6.172468 143.591102 143.591102 0 0 0 60.555162-12.99467l192.516034 288.026859a121.760057 121.760057 0 0 0-18.582377 64.973349 128.127445 128.127445 0 1 0 127.152844-126.568085zM129.621832 448.362048a68.157044 68.157044 0 1 1 68.157044-68.092071A68.157044 68.157044 0 0 1 129.621832 448.362048z m528.948039 365.670011a145.86517 145.86517 0 1 1-145.86517-145.86517 145.86517 145.86517 0 0 1 145.86517 145.86517z m215.12676-577.937944a87.389155 87.389155 0 1 1 87.389155-87.389155 87.389155 87.389155 0 0 1-87.389155 87.389155z m365.085251 474.305451a68.157044 68.157044 0 1 1 68.222017-68.416937 68.157044 68.157044 0 0 1-68.222017 68.157044z"  ></path></symbol><symbol id="icon-suoxiao" viewBox="0 0 1024 1024"><path d="M768 448a320 320 0 1 0-320 320 320 320 0 0 0 320-320z m64 0A384 384 0 1 1 448 64a384 384 0 0 1 384 384z"  ></path><path d="M681.28 726.72a32 32 0 0 1 45.44-45.44l160 160a32 32 0 0 1-45.44 45.44zM288 480a32 32 0 0 1 0-64h320a32 32 0 0 1 0 64z"  ></path></symbol><symbol id="icon-lianjie" viewBox="0 0 1024 1024"><path d="M922.243 97.755c11.49 11.489 11.673 30.002 0.547 41.713l-0.547 0.562-109.119 109.1c57.22 78.348 42.673 195.388-35.778 273.839l-92.83 92.585c-11.572 11.54-30.264 11.653-41.97 0.253l-45.746-44.55-18.089 18.086a29.891 29.891 0 0 1-7.171 5.3l48.764 47.489c11.947 11.638 12.06 30.804 0.248 42.585l-95.875 95.629c-77.416 77.417-192.412 92.603-270.72 38.004L144.04 928.245c-11.676 11.673-30.606 11.673-42.282 0-11.49-11.489-11.673-30.002-0.547-41.713l0.547-0.562 109.677-109.657c-55.981-78.335-41.131-194.413 36.833-272.377l92.831-92.585c11.571-11.54 30.263-11.653 41.969-0.254l42.587 41.474a29.935 29.935 0 0 1 3.678-4.741l0.548-0.562 19.54-19.538-44.11-42.957c-11.828-11.522-12.057-30.422-0.6-42.23l0.351-0.355 95.875-95.63c76.927-76.926 190.96-92.408 269.23-39.03L879.961 97.755c11.676-11.673 30.606-11.673 42.282 0zM362.451 474.49l-71.916 71.727-1.884 1.911c-61.822 63.545-67.916 156.289-16.185 208.02C324.72 808.4 418.82 801.655 482.43 738.044l74.422-74.234-194.401-189.32z m129.807-5.04l-20.096 20.094a30.035 30.035 0 0 1-4.643 3.8l63.25 61.595a29.82 29.82 0 0 1 5.113-7.308l0.547-0.561 17.532-17.531-61.703-60.089z m260.889-198.691c-52.254-52.254-146.353-45.509-209.964 18.102l-74.422 74.234 194.4 189.322 71.939-71.75 1.862-1.888c61.822-63.545 67.916-156.29 16.185-208.02z" fill="#333333" ></path></symbol><symbol id="icon-xiantiao" viewBox="0 0 1024 1024"><path d="M827.076923 157.538462a39.384615 39.384615 0 1 1-14.375385 76.051692L233.590154 812.701538a39.384615 39.384615 0 1 1-22.291692-22.291692L790.409846 211.298462A39.384615 39.384615 0 0 1 827.076923 157.538462z" fill="#333333" ></path></symbol></svg>', l = (l = document.getElementsByTagName("script"))[l.length - 1].getAttribute("data-injectcss");
  if (l && !n.__iconfont__svg__cssinject__) {
    n.__iconfont__svg__cssinject__ = true;
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (h) {
      console && console.log(h);
    }
  }
  function c() {
    s || (s = true, o());
  }
  i = function() {
    var h, f2, r, m;
    (m = document.createElement("div")).innerHTML = d, d = null, (r = m.getElementsByTagName("svg")[0]) && (r.setAttribute("aria-hidden", "true"), r.style.position = "absolute", r.style.width = 0, r.style.height = 0, r.style.overflow = "hidden", h = r, (f2 = document.body).firstChild ? (m = h, (r = f2.firstChild).parentNode.insertBefore(m, r)) : f2.appendChild(h));
  }, document.addEventListener ? ~["complete", "loaded", "interactive"].indexOf(document.readyState) ? setTimeout(i, 0) : (e2 = function() {
    document.removeEventListener("DOMContentLoaded", e2, false), i();
  }, document.addEventListener("DOMContentLoaded", e2, false)) : document.attachEvent && (o = i, t = n.document, s = false, (a2 = function() {
    try {
      t.documentElement.doScroll("left");
    } catch {
      return void setTimeout(a2, 50);
    }
    c();
  })(), t.onreadystatechange = function() {
    t.readyState == "complete" && (t.onreadystatechange = null, c());
  });
}(window);
var lt = at;
var rt = (n) => (n = n.replace("#", ""), n = n.replace("(", ""), n = n.replace(")", ""), n = n.replace(/,/, "-"), n);
var ie = (n) => {
  try {
    if ("touches" in n && n.touches || "targetTouches" in n && n.targetTouches)
      return true;
  } catch {
  }
  return false;
};
var ze = (n) => n instanceof TouchEvent ? {
  clientX: n.touches[0].clientX,
  clientY: n.touches[0].clientY
} : {
  clientX: n.clientX,
  clientY: n.clientY
};
var u2 = (...n) => {
  typeof window < "u" && window.relationGraphDebug && console.log("[relation-graph:debug]", ...n);
};
var Ne = (n, i, e2) => n ? n.classList.contains(i) ? n : n.classList.contains(e2) ? null : Ne(n.parentElement, i, e2) : null;
var ct = async (n) => new Promise((i, e2) => {
  setTimeout(() => {
    i();
  }, n);
});
var G = (n) => typeof n == "string" ? Number.parseInt(n) : n;
var ht = (n) => {
  console.log(
    `%c relation-graph${n ? "" : "/" + n} %c Version v${Ve} %c More info: https://github.com/seeksdream/relation-graph %c`,
    "background:#35495e ; padding: 1px; border-radius: 3px 0 0 3px;  color: #fff",
    "background:#41b883 ; padding: 1px; border-radius: 0 3px 3px 0;  color: #fff",
    "background:#fff ; padding: 1px; border-radius: 0 3px 3px 0;  color: #41b883",
    "background:transparent"
  ), nt || console.error(
    "[relation-graph]Please introduce component screenfull, for example:https://cdnjs.cloudflare.com/ajax/libs/screenfull.js/5.1.0/screenfull.min.js"
  ), html2canvas_esm_exports || console.error(
    "[relation-graph]Please introduce component html2canvas, for example:https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"
  );
};
var We = (n) => ({
  onNodeClick: n.onNodeClick,
  onNodeExpand: n.onNodeExpand,
  onNodeCollapse: n.onNodeCollapse,
  onLineClick: n.onLineClick,
  onImageDownload: n.onImageDownload,
  onNodeDragEnd: n.onNodeDragEnd,
  onCanvasDragEnd: n.onCanvasDragEnd,
  beforeChangeLayout: n.beforeChangeLayout,
  onContextmenu: n.onContextmenu,
  onCanvasClick: n.onCanvasClick,
  onCanvasSelectionEnd: n.onCanvasSelectionEnd,
  onImageSaveAsFile: n.onImageSaveAsFile
});
var ve = (n) => {
  if (n.id === void 0)
    throw console.log("node must has id:", n), new Error("node must has option[id]:");
  const i = {
    id: n.id,
    text: n.text !== void 0 ? n.text : "",
    type: n.type !== void 0 ? n.type : "node",
    isShow: true,
    isHide: n.isHide !== void 0 ? n.isHide : false,
    expanded: n.expanded !== void 0 ? n.expanded : true,
    junctionPoint: n.junctionPoint !== void 0 ? n.junctionPoint : void 0,
    alignItems: n.alignItems !== void 0 ? n.alignItems : void 0,
    selected: n.selected !== void 0 ? n.selected : false,
    flashing: void 0,
    styleClass: n.styleClass !== void 0 ? n.styleClass : "",
    targetNodes: [],
    targetFrom: [],
    targetTo: [],
    nodeShape: n.nodeShape !== void 0 ? n.nodeShape : void 0,
    borderWidth: n.borderWidth !== void 0 ? n.borderWidth : void 0,
    borderColor: n.borderColor !== void 0 ? n.borderColor : void 0,
    fontColor: n.fontColor !== void 0 ? n.fontColor : void 0,
    color: n.color !== void 0 ? n.color : void 0,
    opacity: n.opacity !== void 0 ? n.opacity : 1,
    fixed: n.fixed !== void 0 ? n.fixed : false,
    width: n.width !== void 0 ? n.width : void 0,
    height: n.height !== void 0 ? n.height : void 0,
    force_weight: n.force_weight,
    x: n.x !== void 0 ? n.x : 0,
    y: n.y !== void 0 ? n.y : 0,
    Fx: 0,
    Fy: 0,
    offset_x: n.offset_x !== void 0 ? n.offset_x : 0,
    offset_y: n.offset_y !== void 0 ? n.offset_y : 0,
    expandHolderPosition: n.expandHolderPosition !== void 0 ? n.expandHolderPosition : void 0,
    innerHTML: n.innerHTML !== void 0 ? n.innerHTML : void 0,
    html: n.html !== void 0 ? n.html : void 0,
    disableDefaultClickEffect: n.disableDefaultClickEffect !== void 0 ? n.disableDefaultClickEffect : void 0,
    disableDrag: n.disableDrag !== void 0 ? n.disableDrag : false,
    singleNode: false,
    data: n.data !== void 0 ? n.data : {}
  };
  return i.lot = {
    childs: [],
    parent: void 0,
    eached: false,
    strength: 0
  }, i.el === void 0 && (i.el = { offsetWidth: 50, offsetHeight: 50 }), i.width !== void 0 && (i.el.offsetWidth = i.width), i.height !== void 0 && (i.el.offsetHeight = i.height), i;
};
var dt = [
  "Fx",
  "Fy",
  "appended",
  "el",
  "targetFrom",
  "targetNodes",
  "targetTo",
  "type",
  "lot",
  "seeks_id"
];
var Be = (n) => {
  if (!n)
    return;
  const i = {};
  return Object.keys(n).forEach((e2) => {
    dt.includes(e2) || n[e2] !== void 0 && (i[e2] = n[e2]);
  }), i;
};
var ft = {
  json2Node: ve,
  transNodeToJson: Be
};
var ut = Object.freeze(Object.defineProperty({
  __proto__: null,
  json2Node: ve,
  transNodeToJson: Be,
  default: ft
}, Symbol.toStringTag, { value: "Module" }));
var we = (n) => {
  if (n.from === void 0)
    throw console.log("error,line must has option[from]:", n), new Error("error,line must has option[from]:");
  if (n.to === void 0)
    throw console.log("error,line must has option[to]:", n), new Error("error,line must has option[to]:");
  if (typeof n.from != "string")
    throw console.log("error line from, must be string:", n), new TypeError("error line from, must be string:");
  if (typeof n.to != "string")
    throw console.log("error line to, must be string:", n), new TypeError("error line to, must be string:");
  const i = {
    from: n.from,
    to: n.to,
    text: n.text !== void 0 ? n.text : "",
    textOffset_x: n.textOffset_x !== void 0 ? n.textOffset_x : void 0,
    textOffset_y: n.textOffset_y !== void 0 ? n.textOffset_y : void 0,
    color: n.color !== void 0 ? n.color : void 0,
    opacity: n.opacity !== void 0 ? n.opacity : 1,
    fontColor: n.fontColor !== void 0 ? n.fontColor : void 0,
    lineWidth: n.lineWidth !== void 0 ? n.lineWidth : void 0,
    lineShape: n.lineShape !== void 0 ? n.lineShape : void 0,
    styleClass: n.styleClass !== void 0 ? n.styleClass : void 0,
    isHide: n.isHide !== void 0 ? n.isHide : false,
    arrow: n.arrow !== void 0 ? n.arrow : void 0,
    animation: n.animation !== void 0 ? n.animation : 0,
    dashType: n.dashType !== void 0 ? n.dashType : 0,
    disableDefaultClickEffect: n.disableDefaultClickEffect !== void 0 ? n.disableDefaultClickEffect : false,
    showStartArrow: n.showStartArrow !== void 0 ? n.showStartArrow : false,
    showEndArrow: n.showEndArrow !== void 0 ? n.showEndArrow : true,
    useTextPath: n.useTextPath !== void 0 ? n.useTextPath : void 0,
    isHideArrow: n.isHideArrow !== void 0 ? n.isHideArrow : void 0,
    hidden: false,
    lineDirection: n.lineDirection !== void 0 ? n.lineDirection : void 0,
    reverseText: n.reverseText !== void 0 ? n.reverseText : void 0,
    data: n.data !== void 0 ? n.data : {}
  };
  return i.isHideArrow && (i.showEndArrow = false, i.isHideArrow = false), i;
};
var pt = ["arrow", "id", "reverseText", "isReverse"];
var Ae = (n, i) => {
  !n || n.relations.forEach((e2) => {
    const o = {};
    Object.keys(e2).forEach((t) => {
      pt.includes(t) || e2[t] !== void 0 && (o[t] = e2[t]);
    }), i.push(o);
  });
};
var pe = {
  border: "border",
  ltrb: "ltrb",
  tb: "tb",
  lr: "lr"
};
var yt = {
  json2Line: we,
  transLinkToJson: Ae
};
var mt = Object.freeze(Object.defineProperty({
  __proto__: null,
  json2Line: we,
  transLinkToJson: Ae,
  JUNCTION_POINT_STYLE: pe,
  default: yt
}, Symbol.toStringTag, { value: "Module" }));
var v = {
  analysisNodes(n, i, e2, o) {
    i.length > o.max_length && (o.max_length = i.length), e2 > o.max_deep && (o.max_deep = e2);
    const t = {
      level: e2,
      all_size: i.length,
      all_strength: 0
    };
    e2 === 0 && i.forEach((a2) => {
      a2.lot.parent = void 0;
    });
    const s = [];
    i.forEach((a2) => {
      n.push(a2), a2.targetNodes && a2.targetNodes.forEach((d) => {
        n.includes(d) || (n.push(d), d.lot.parent = a2, s.push(d));
      });
    }), t.all_strength > o.max_strength && (o.max_strength = t.all_strength), s.length > 0 && v.analysisNodes(n, s, e2 + 1, o);
  },
  analysisNodes4Didirectional(n, i, e2, o, t) {
    i.length > o.max_length && (o.max_length = i.length), e2 > o.max_deep && (o.max_deep = e2);
    const s = {
      level: e2,
      all_size: i.length,
      all_strength: 0
    }, a2 = [];
    i.forEach((l) => {
      l.lot || (l.lot = { childs: [] }), l.lot.eached = true, l.lot.subling = s, l.lot.level = e2, n.push(l);
    });
    let d = 0;
    i.forEach((l) => {
      let c = 0;
      if (t === 0) {
        let h = 0;
        l.targetNodes.forEach((f2) => {
          f2.lot || (f2.lot = { eached: false, childs: [] }), f2.lot.eached || (v.isAllowShowNode(f2) ? (f2.lot.eached = true, f2.lot.parent = l, f2.lot.index_of_parent = h++, l.lot.childs.push(f2), a2.push(f2), c++) : l.lot.childs.push(f2));
        });
      } else if (t === -1) {
        let h = 0;
        l.targetFrom.forEach((f2) => {
          f2.lot || (f2.lot = { eached: false, childs: [] }), f2.lot.eached || (v.isAllowShowNode(f2) ? (f2.lot.eached = true, f2.lot.parent = l, f2.lot.index_of_parent = h++, l.lot.childs.push(f2), a2.push(f2), c++) : l.lot.childs.push(f2));
        });
      } else {
        let h = 0;
        l.targetTo.forEach((f2) => {
          f2.lot || (f2.lot = { eached: false, childs: [] }), f2.lot.eached || (v.isAllowShowNode(f2) ? (f2.lot.eached = true, f2.lot.parent = l, f2.lot.index_of_parent = h++, l.lot.childs.push(f2), a2.push(f2), c++) : l.lot.childs.push(f2));
        });
      }
      l.lot.strength = c > 0 ? c : 1, s.all_strength += l.lot.strength, l.lot.strength_plus = s.all_strength, l.lot.index_of_level = d, l.lot.childs_size = c, d++;
    }), s.all_strength > o.max_strength && (o.max_strength = s.all_strength), a2.length > 0 ? v.analysisNodes4Didirectional(n, a2, e2 + (t === -1 ? -1 : 1), o, t) : (n.forEach((l) => {
      l.lot.childs_size > 0 && (l.lot.strengthWithChilds = 0);
    }), n.forEach((l) => {
      l.lot.childs_size === 0 && (l.lot.strengthWithChilds = 1, v.conductStrengthToParents(l));
    }), v.analysisDataTree([n[0]], 0, t));
  },
  conductStrengthToParents(n) {
    n.lot.parent && Math.abs(n.lot.level) - 1 === Math.abs(n.lot.parent.lot.level) && (n.lot.parent.lot.strengthWithChilds += 1, v.conductStrengthToParents(n.lot.parent));
  },
  analysisDataTree(n, i, e2) {
    e2 === void 0 && (e2 = 1);
    const o = [];
    let t = 0;
    n.forEach((s) => {
      (s.lot.level === 0 || e2 === (s.lot.level < 0 ? -1 : 1)) && (s.lot.childs_size > 0 && s.lot.childs.forEach((a2) => {
        o.push(a2);
      }), s.lot.parent && t < s.lot.parent.lot.strengthWithChilds_from && (t = s.lot.parent.lot.strengthWithChilds_from), s.lot.strengthWithChilds_from = t, t += s.lot.strengthWithChilds);
    }), o.length > 0 && v.analysisDataTree(o, i + e2, e2);
  },
  isAllowShowNode(n, i = 0) {
    return i > 15 ? true : (!n.lot.parent || v.isAllowShowNode(n.lot.parent, i + 1) && n.lot.parent.expanded !== false) && n.isShow && n.isHide !== true;
  },
  getNodeWidth(n, i) {
    return n.el.offsetWidth || n.width || i && i.defaultNodeWidth || 50;
  },
  getNodeHeight(n, i) {
    return n.el.offsetHeight || n.height || i && i.defaultNodeHeight || 50;
  },
  getNodeXByLotX(n, i) {
    return (i.offset_x || 0) + this.getNodeXByCenterX(n, i, i.lot.x || 0);
  },
  getNodeYByLotY(n, i) {
    return (i.offset_y || 0) + this.getNodeYByCenterY(n, i, i.lot.y || 0);
  },
  getNodeXByCenterX(n, i, e2) {
    return i.alignItems === "right" ? e2 - v.getNodeWidth(i, n) : i.alignItems === "left" ? e2 : e2 - v.getNodeWidth(i, n) / 2;
  },
  getNodeYByCenterY(n, i, e2) {
    return i.alignItems === "top" ? e2 : i.alignItems === "bottom" ? e2 - v.getNodeHeight(i, n) : e2 - v.getNodeHeight(i, n) / 2;
  },
  getCenterXByNodeX(n, i, e2) {
    return e2 + v.getNodeHeight(i, n) / 2;
  },
  getCenterYByNodeY(n, i, e2) {
    return e2 + v.getNodeHeight(i, n) / 2;
  },
  getLotXByNodeX(n, i) {
    const e2 = i.offset_x || 0;
    return this.getCenterXByNodeX(n, i, i.x || 0) - e2;
  },
  getLotYByNodeY(n, i) {
    const e2 = i.offset_y || 0;
    return this.getCenterYByNodeY(n, i, i.y || 0) - e2;
  }
};
var de = v;
var gt = Object.freeze(Object.defineProperty({
  __proto__: null,
  RGNodesAnalytic: v,
  default: de
}, Symbol.toStringTag, { value: "Module" }));
var vt = class {
  constructor(i, e2) {
    _(this, "graphOptions");
    _(this, "layoutOptions");
    _(this, "allNodes", []);
    _(this, "isMainLayouer", true);
    _(this, "requireLinks", false);
    _(this, "allLinks", []);
    _(this, "rootNode");
    _(this, "currentAnimationStep", 1);
    _(this, "allAnimationStep", 30);
    this.layoutOptions = i, this.graphOptions = e2;
  }
  setLinks(i) {
    u2("setLinks:", i.length), this.allLinks = i;
  }
  refresh() {
    this.placeNodes(this.allNodes, this.rootNode);
  }
  placeNodes(i, e2) {
    this.allNodes = i, this.rootNode = e2;
  }
  snapshotBeforeAnimation() {
    this.allNodes.forEach((i) => {
      !de.isAllowShowNode(i) || (i.lot.to_x = de.getNodeXByLotX(this.graphOptions, i), i.lot.to_y = de.getNodeYByLotY(this.graphOptions, i), i.lot.from_x = i.x || 0, i.lot.from_y = i.y || 0, i.lot.placed = true);
    });
  }
  async animationLayout(i = true) {
    i && this.snapshotBeforeAnimation();
    const e2 = this.rootNode;
    e2 && u2("debug0910:create rootNode coordinates:2.1", e2.x, e2.y), this.currentAnimationStep = 1, this.allAnimationStep = 10, u2("[LayoutAnimationEffect]start play...");
    let o = false;
    return new Promise((t, s) => {
      this.playAnimation(() => {
        o || (o = true, u2("[LayoutAnimationEffect]played!"), this.allNodes.forEach((a2) => {
          !de.isAllowShowNode(a2) || (a2.lot.from_x = a2.x, a2.lot.from_y = a2.y, a2.x = a2.lot.to_x, a2.y = a2.lot.to_y);
        }), t());
      });
    });
  }
  playAnimation(i) {
    if (u2("[LayoutAnimationEffect]", this.currentAnimationStep, this.allAnimationStep), this.currentAnimationStep > this.allAnimationStep) {
      i();
      return;
    }
    this.allNodes.forEach((e2) => {
      if (!e2.lot.placed)
        return;
      const { from_x: o, from_y: t, to_x: s, to_y: a2 } = e2.lot;
      if (o !== void 0 && t !== void 0 && s !== void 0 && a2 !== void 0) {
        const d = (s - o) / this.allAnimationStep, l = (a2 - t) / this.allAnimationStep, c = Math.floor(o + this.currentAnimationStep * d), h = Math.floor(t + this.currentAnimationStep * l);
        (e2.x !== c || e2.y !== h) && (e2.x = c, e2.y = h);
      }
    }), this.currentAnimationStep++, requestAnimationFrame(this.playAnimation.bind(this, i));
  }
};
var _e = vt;
var _t = class extends _e {
  constructor(e2, o) {
    super(e2, o);
    _(this, "enableGatherNodes", false);
    _(this, "layoutOptions");
    _(this, "levelDistanceArr", []);
    this.layoutOptions = e2, u2("new SeeksBidirectionalTreeLayouter:", this.layoutOptions), this.layoutOptions.from || (this.layoutOptions.from = "left"), this.layoutOptions.levelDistance && (typeof this.layoutOptions.levelDistance == "string" ? this.levelDistanceArr = this.layoutOptions.levelDistance.split(",").map((t) => Number.parseInt(t)) : Array.isArray(this.layoutOptions.levelDistance) && (this.levelDistanceArr = this.layoutOptions.levelDistance)), this.enableGatherNodes = this.layoutOptions.enableGatherNodes;
  }
  async refresh() {
    u2("SeeksBidirectionalTreeLayouter:refresh:nodes:", this.allNodes.length), await this.placeNodes(this.allNodes, this.rootNode);
  }
  analysisNodes4Didirectional(e2, o, t, s, a2) {
    u2(`${a2} level ${t} size: ${o.length}`), o.length > s.max_length && (s.max_length = o.length), t > s.max_deep && (s.max_deep = t);
    const d = {
      level: t,
      all_size: o.length,
      all_strength: 0
    }, l = [];
    o.forEach((h) => {
      h.lot || (h.lot = { childs: [] }), h.lot.eached = true, h.lot.subling = d, h.lot.level = t, e2.push(h);
    });
    let c = 0;
    o.forEach((h) => {
      let f2 = 0, r = a2 === -1 ? h.targetFrom : h.targetTo;
      t !== 0 && (r = h.targetNodes);
      let m = 0;
      r.forEach((y) => {
        y.lot || (y.lot = { eached: false, childs: [] }), y.lot.eached || (y.lot.parent = h, v.isAllowShowNode(y) ? (y.lot.eached = true, y.lot.index_of_parent = m++, h.lot.childs.push(y), l.push(y), f2++) : h.lot.childs.push(y));
      }), h.lot.strength = f2 > 0 ? f2 : 1, d.all_strength += h.lot.strength, h.lot.strength_plus = d.all_strength, h.lot.index_of_level = c, h.lot.childs_size = f2, c++;
    }), d.all_strength > s.max_strength && (s.max_strength = d.all_strength), l.length > 0 ? this.analysisNodes4Didirectional(e2, l, t + a2, s, a2) : (e2.forEach((h) => {
      h.lot.childs_size > 0 && (h.lot.strengthWithChilds = 0);
    }), e2.forEach((h) => {
      h.lot.childs_size === 0 && (h.lot.strengthWithChilds = 1, v.conductStrengthToParents(h));
    }), v.analysisDataTree([e2[0]], 0, a2));
  }
  async placeNodes(e2, o) {
    if (u2("SeeksBidirectionalTreeLayouter:placeNodes"), o)
      u2("layout by root:", o);
    else {
      console.error("root is null");
      return;
    }
    this.rootNode = o, this.allNodes = e2, u2("allNodes:", e2.length), e2.forEach((a2) => {
      a2.lot.eached = false, a2.lot.notLeafNode = false, a2.lot.childs = [], a2.lot.parent = void 0, a2.lot.index_of_parent = 0, a2.lot.strength = 0, a2.lot.strengthWithChilds_from = 0, a2.lot.strengthWithChilds = 0, a2.lot.placed = false;
    });
    let t = [], s = {
      max_deep: 1,
      max_length: 1,
      max_strength: 1
    };
    v.analysisNodes(t, [this.rootNode], 0, s), t = [], s = {
      max_deep: 1,
      max_length: 1,
      max_strength: 1
    }, this.analysisNodes4Didirectional(t, [this.rootNode], 0, s, -1), this.placeNodesPosition(this.rootNode, t, s), t = [], s = {
      max_deep: 1,
      max_length: 1,
      max_strength: 1
    }, this.analysisNodes4Didirectional(t, [this.rootNode], 0, s, 1), this.placeNodesPosition(this.rootNode, t, s), u2("allNodes:", t.length), this.graphOptions.useAnimationWhenExpanded ? (u2("Play layout animation....."), await this.animationLayout(), u2("create rootNode coordinates:3", o.x, o.y)) : (this.allNodes.forEach((a2) => {
      if (a2.fixed === true) {
        a2.lot.placed = true;
        return;
      }
      !v.isAllowShowNode(a2) || (Number.isNaN(a2.lot.x) && (u2("bad lot x:", a2.text, a2.lot.x), a2.lot.x = 0), Number.isNaN(a2.lot.y) && (u2("bad lot y:", a2.text, a2.lot.y), a2.lot.y = 0), a2.x = v.getNodeXByLotX(this.graphOptions, a2), a2.y = v.getNodeYByLotY(this.graphOptions, a2), a2.lot.placed = true);
    }), u2("create rootNode coordinates:1", o.x, o.y));
  }
  placeNodesPosition(e2, o, t) {
    if (e2.fixed !== true) {
      const s = this.layoutOptions.centerOffset_x || 0, a2 = this.layoutOptions.centerOffset_y || 0;
      e2.lot.x = s, e2.lot.y = a2, this.layoutOptions.fixedRootNode ? (e2.lot.x = v.getLotXByNodeX(this.graphOptions, e2), e2.lot.y = v.getLotYByNodeY(this.graphOptions, e2)) : this.layoutOptions.from === "top" ? e2.lot.y -= this.graphOptions.viewSize.height / 2 - 100 : this.layoutOptions.from === "bottom" ? e2.lot.y += this.graphOptions.viewSize.height / 2 - 200 : this.layoutOptions.from === "right" ? e2.lot.x += this.graphOptions.viewSize.width / 2 - 100 : e2.lot.x -= this.graphOptions.viewSize.width / 2 - 100, u2("debug0910:Graph center:", e2.lot.x, e2.lot.y, { _center_offset_x: s, _center_offset_y: a2 });
    } else
      e2.origin_x === void 0 && (e2.origin_x = e2.x, e2.origin_y = e2.y), e2.lot.x = e2.origin_x, e2.lot.y = e2.origin_y, u2("固定位置的rootNode:", e2.text, e2.x, e2.y);
    e2.lot.placed = true, this.placeRelativePosition(e2, o, t);
  }
  placeRelativePosition(e2, o, t) {
    const s = this.graphOptions.viewSize;
    if (this.layoutOptions.from === "left" || this.layoutOptions.from === "right") {
      const a2 = G(this.layoutOptions.min_per_height) || 80, d = G(this.layoutOptions.max_per_height) || 400, l = G(this.layoutOptions.min_per_width) || 430, c = G(this.layoutOptions.max_per_width) || 650;
      let h = Math.round((s.width - 10) / (t.max_deep + 2));
      h < l && (h = l), h > c && (h = c);
      let f2 = Math.round(s.height / (t.max_strength + 1));
      f2 < a2 && (f2 = a2), f2 > d && (f2 = d), o.forEach((r) => {
        r.fixed !== true && r.lot.placed !== true && r !== e2 && (this.layoutOptions.from === "right" ? r.lot.x = e2.lot.x - this.getLevelDistance(r, r.lot.subling.level, h) : r.lot.x = e2.lot.x + this.getLevelDistance(r, r.lot.subling.level, h));
      }), o.forEach((r) => {
        r.fixed !== true && r.lot.level !== 0 && (r.lot.y = e2.lot.y + f2 * (t.max_strength / -2 + r.lot.strengthWithChilds_from + r.lot.strengthWithChilds / 2));
      }), this.gatherNodes(o, "h", f2);
    } else {
      const a2 = G(this.layoutOptions.min_per_height) || 350, d = G(this.layoutOptions.max_per_height) || 400, l = G(this.layoutOptions.min_per_width) || 250, c = G(this.layoutOptions.max_per_width) || 500;
      let h = Math.round((s.width - 10) / (t.max_strength + 2));
      h < l && (h = l), h > c && (h = c);
      let f2 = Math.round((s.height - 10) / (t.max_deep + 2));
      f2 < a2 && (f2 = a2), f2 > d && (f2 = d), o.forEach((r) => {
        r.fixed !== true && r.lot.placed !== true && r !== e2 && (this.layoutOptions.from === "bottom" ? r.lot.y = e2.lot.y - this.getLevelDistance(r, r.lot.subling.level, f2) : r.lot.y = e2.lot.y + this.getLevelDistance(r, r.lot.subling.level, f2));
      }), o.forEach((r) => {
        r.fixed !== true && r.lot.level !== 0 && (r.lot.x = e2.lot.x + h * (t.max_strength / -2 + r.lot.strengthWithChilds_from + r.lot.strengthWithChilds / 2));
      }), this.gatherNodes(o, "v", h);
    }
  }
  gatherNodes(e2, o, t) {
    if (!this.enableGatherNodes)
      return;
    const s = {};
    e2.forEach((a2) => {
      const d = a2.lot.level + "";
      s[d] || (s[d] = []), s[d].push(a2), a2.lot.movedNodeSizeBefore = 1, a2.lot.movedNodeSizeAfter = 1;
    }), e2.forEach((a2) => {
      if (a2.fixed !== true && a2.lot.level !== 0) {
        const d = a2.lot.level + "", l = s[d];
        if (a2.lot.strengthWithChilds === 1 && a2.lot.childs_size <= 1) {
          const c = this.getBloomingNearByParent(a2, a2.lot.parent, l, o);
          c && (console.log(a2.text, "bloomingNode:", c.text, c.lot.y, t), o === "h" ? a2.lot.y - c.lot.y > 0 ? (a2.lot.y = c.lot.y + t * c.lot.movedNodeSizeAfter, c.lot.movedNodeSizeAfter++) : (a2.lot.y = c.lot.y - t * c.lot.movedNodeSizeBefore, c.lot.movedNodeSizeBefore++) : a2.lot.x - c.lot.x > 0 ? (a2.lot.x = c.lot.x + t * c.lot.movedNodeSizeAfter, c.lot.movedNodeSizeAfter++) : (a2.lot.x = c.lot.x - t * c.lot.movedNodeSizeBefore, c.lot.movedNodeSizeBefore++));
        }
      }
    });
  }
  getBloomingNearByParent(e2, o, t, s) {
    let a2 = 9999, d;
    for (const l of t)
      if (l.lot.childs_size > 1 && l.lot.parent === o) {
        const c = s === "h" ? l.lot.y - o.lot.y : l.lot.x - o.lot.x;
        Math.abs(c) < a2 && (a2 = Math.abs(c), d = l);
      }
    if (d && d !== e2)
      return d;
  }
  getLevelDistance(e2, o, t) {
    const s = Math.abs(o);
    if (this.levelDistanceArr && this.levelDistanceArr.length > 0) {
      let a2 = 0;
      for (let d = 0; d < s; d++) {
        const l = this.levelDistanceArr[d] || 100;
        a2 += l;
      }
      return o > 0 ? a2 : a2 * -1;
    } else
      return o * t;
  }
};
var Ye = _t;
var Fe = 0;
var H = {
  getRectPoint(n, i, e2, o, t, s, a2, d) {
    const l = n + t / 2, c = i + s / 2, h = e2 + a2 / 2, f2 = o + d / 2, r = l < h ? 1 : -1, m = c < f2 ? 1 : -1;
    if (f2 === c)
      return { x: l + r * t / 2, y: c };
    const y = Math.abs((h - l) / (f2 - c)), x = t / s;
    let g = 0, b = 0;
    return y < x ? (g = r * s / 2 * y, b = m * s / 2) : (g = r * t / 2, b = m * t / 2 / y), { x: l + g, y: c + b };
  },
  getRectPointBasic(n, i, e2, o, t, s, a2, d) {
    const l = n + t / 2, c = i + s / 2, h = e2 + a2 / 2, f2 = o + d / 2;
    let r = f2 === c ? 0 : (h - l) / (f2 - c);
    r === 0 && (r = (h - l) / (f2 - c + 1));
    const m = t / d;
    let y = 0, x = 0, g = "1";
    return -1 * m < r && r < m ? (g = "2", c < f2 ? (y = s / 2 * r, x = s / 2) : (y = -1 * s / 2 * r, x = -1 * s / 2)) : (l < h ? (y = 1 * t / 2, x = 1 * t / 2 / r) : (y = -1 * t / 2, x = -1 * t / 2 / r), g = "3"), { x: l + y, y: c + x, _case: g };
  },
  getRectJoinPoint(n, i, e2, o, t, s, a2, d) {
    const l = n + t / 2, c = i + s / 2, h = e2 + a2 / 2, f2 = o + d / 2, r = Math.round(Math.atan2(f2 - c, h - l) * 180 / 3.14) + 135;
    return r >= 0 && r < 90 ? { x: n + t / 2, y: i - 5 } : r >= 90 && r < 180 ? { x: n + t + 5, y: i + s / 2 } : r >= 180 && r < 270 ? { x: n + t / 2, y: i + s + 5 } : { x: n - 5, y: i + s / 2 };
  },
  getRectHJoinPoint(n, i, e2, o, t, s, a2) {
    const d = s / 2;
    return n + t < e2 ? { x: n + t + 5, y: i + d } : n + t < e2 + a2 ? { x: n - 5, y: i + d } : { x: n - 5, y: i + d };
  },
  getRectVJoinPoint(n, i, e2, o, t, s, a2, d) {
    const l = t / 2;
    return i + s < o ? { y: i + s + 5, x: n + l } : i + s < o + d ? { y: i - 5, x: n + l } : { y: i - 5, x: n + l };
  },
  getBorderPoint(n, i, e2, o, t, s, a2, d, l) {
    return l === 0 ? this.getCirclePoint(n, i, e2, o, t, s, a2, d) : this.getRectPoint(n, i, e2, o, t, s, a2, d);
  },
  getBorderPoint4MultiLine(n, i, e2, o, t, s, a2, d, l, c, h, f2) {
    return l === 0 ? this.getCirclePoint4MultiLine(n, i, e2, o, t, s, a2, d, c, h, f2) : this.getRectPoint(n, i, e2, o, t, s, a2, d);
  },
  getCirclePoint(n, i, e2, o, t, s, a2, d) {
    const l = e2 + a2 / 2, c = o + d / 2, h = n + t / 2, f2 = i + s / 2, r = l - h;
    if (r === 0)
      return { x: h, y: f2 - s / 2 * (c < f2 ? 1 : -1) };
    const y = (c - f2) / r, x = Math.sqrt(1 / (1 / (t / 2) ** 2 + y ** 2 / (s / 2) ** 2)) * (l < h ? 1 : -1), g = y * x;
    return { x: h - x, y: f2 - g };
  },
  getCirclePoint4MultiLine(n, i, e2, o, t, s, a2, d, l, c, h) {
    l && (h = c - h - 1);
    const f2 = e2 + a2 / 2, r = o + d / 2, m = n + t / 2, y = i + s / 2, x = f2 - m;
    if (x === 0)
      return { x: m, y: y - s / 2 * (r < y ? 1 : -1) };
    const g = 40 / (c + 1) * (h + 1) - 20, b = r - y, O = Math.sqrt(x ** 2 + b ** 2) * g / x, M = b / x, S = t / 2, Y = s / 2, k = f2 < m ? 1 : -1, P = (-1 * S ** 2 * M * O + S * Y * Math.sqrt(Y ** 2 + M ** 2 * S ** 2 - O ** 2) / k) / (Y ** 2 + S ** 2 * M ** 2), fe = M * P + O;
    return { x: m - P, y: y - fe };
  },
  getCirclePointBasic(n, i, e2, o, t, s, a2, d, l) {
    const c = n + t / 2, h = i + s / 2, f2 = e2 + a2 / 2, r = o + d / 2, m = f2 - c, y = r - h, x = Math.sqrt(m * m + y * y), g = x - l, b = g * m / x * -1, O = g * y / x * -1;
    return { x: f2 + b, y: r + O };
  },
  getCirclePointPlus(n, i, e2, o, t, s, a2, d) {
    const l = n + t / 2, c = i + s / 2, h = e2 + a2 / 2, f2 = o + d / 2, r = h - l, m = f2 - c, y = Math.sqrt(r * r + m * m), x = (y - t / 2) * r / y * -1, g = (y - s / 2) * m / y * -1;
    return { x: h + x, y: f2 + g };
  },
  getOvalPoint(n, i, e2, o, t) {
    return {
      x: n + e2 * Math.sin((Fe + o * (360 / t) + 0) * Math.PI / 180),
      y: i + e2 * Math.cos((Fe + o * (360 / t) + 0) * Math.PI / 180) * -1
    };
  },
  getAngleType(n, i) {
    if (n >= 0 && i >= 0)
      return 1;
    if (n < 0 && i >= 0)
      return 2;
    if (n < 0 && i < 0)
      return 3;
    if (n >= 0 && i < 0)
      return 4;
  },
  getTextAngle(n, i, e2, o) {
    let t = Math.atan2(o - i, e2 - n) * 180 / Math.PI;
    return t < 0 && (t += 360), t > 90 && t <= 270 && (t += 180), t >= 360 && (t -= 360), Math.round(t);
  },
  getTreePointFromTop(n, i, e2, o, t, s) {
    return n ? {
      x: n - 300 + Math.max(600 / ((t === 1 ? 2 : t) - 1), 80) * o,
      y: i + e2
    } : {
      x: (s.canvas_width - s.node_width) / 2,
      y: (s.canvas_height - s.node_height) / 2 - 200
    };
  },
  getTreePointFromRight(n, i, e2, o, t, s) {
    return n ? {
      x: n - e2,
      y: i - 200 + Math.max(400 / ((t === 1 ? 2 : t) - 1), 80) * o
    } : {
      x: (s.canvas_width - s.node_width) / 2 + 300,
      y: (s.canvas_height - s.node_height) / 2
    };
  },
  getTreePointFromBottom(n, i, e2, o, t, s) {
    return n ? {
      x: n - 300 + Math.max(600 / ((t === 1 ? 2 : t) - 1), 80) * o,
      y: i - e2
    } : {
      x: (s.canvas_width - s.node_width) / 2,
      y: (s.canvas_height - s.node_height) / 2 + 200
    };
  },
  getTreePointFromLeft(n, i, e2, o, t, s) {
    return n ? {
      x: n + e2,
      y: i - 200 + Math.max(400 / ((t === 1 ? 2 : t) - 1), 80) * o
    } : {
      x: (s.canvas_width - s.node_width) / 2 - 300,
      y: (s.canvas_height - s.node_height) / 2
    };
  }
};
var xt = class extends _e {
  constructor(e2, o) {
    super(e2, o);
    _(this, "layoutOptions");
    _(this, "fastStart", false);
    _(this, "maxLayoutTimes", 300);
    _(this, "byNode", true);
    _(this, "byLine", true);
    _(this, "lockX", false);
    _(this, "lockY", false);
    _(this, "force_node_repulsion", 1);
    _(this, "force_line_elastic", 1);
    _(this, "justLayoutSingleNode", false);
    _(this, "layoutTimes", 0);
    _(this, "prev10", []);
    _(this, "visibleNodes", []);
    _(this, "viewUpdate");
    _(this, "maxVaildLineLength", 400);
    _(this, "minVaildLineLength", 30);
    _(this, "zeroEffectNodeDistance", 400);
    _(this, "minNodeDistance", 30);
    _(this, "maxMoveSpeed", 50);
    this.layoutOptions = e2, this.layoutOptions.fastStart !== void 0 && (this.fastStart = this.layoutOptions.fastStart), this.layoutOptions.maxLayoutTimes !== void 0 && (this.maxLayoutTimes = this.layoutOptions.maxLayoutTimes), this.layoutOptions.byNode !== void 0 && (this.byNode = this.layoutOptions.byNode), this.layoutOptions.byLine !== void 0 && (this.byLine = this.layoutOptions.byLine), this.layoutOptions.force_node_repulsion !== void 0 && (this.force_node_repulsion = this.layoutOptions.force_node_repulsion), this.layoutOptions.force_line_elastic !== void 0 && (this.force_line_elastic = this.layoutOptions.force_line_elastic);
  }
  refresh() {
    this.placeNodes(this.allNodes, this.rootNode);
  }
  placeNodes(e2, o) {
    if (u2("!!!SeeksForceLayouter.placeNodes"), o)
      u2("layout by root:", o);
    else {
      u2("root is null:", o);
      return;
    }
    if (this.allNodes = e2, this.rootNode = o, this.layoutOptions.fixedRootNode) {
      if (!Number.isNaN(o.x) && o.x)
        o.lot.x = v.getLotXByNodeX(this.graphOptions, o), o.lot.y = v.getLotYByNodeY(this.graphOptions, o);
      else {
        const s = this.layoutOptions.centerOffset_x || 0, a2 = this.layoutOptions.centerOffset_y || 0;
        o.lot.x = 0 + s, o.lot.y = 0 + a2;
      }
      const t = this.easyAnalysisNodes(o);
      this.easyPlaceRelativePosition(o, t), t.forEach((s) => {
        if (s.fixed === true || !v.isAllowShowNode(s))
          return;
        const a2 = s.offset_x || 0, d = s.offset_y || 0;
        s.x = s.lot.x + a2 - v.getNodeWidth(s, this.graphOptions) / 2, s.y = s.lot.y + d - v.getNodeHeight(s, this.graphOptions) / 2, s.lot.placed = true;
      });
    } else
      this.fastStart ? (u2("!!!initNodesPosition fastStart"), this.allNodes.forEach((t) => {
        t.fixed !== true && (t.lot.placed || (t.x || (t.x = Math.floor(Math.random() * 200) - 100), t.x || (t.y = Math.floor(Math.random() * 200) - 100), t.lot.placed = true));
      })) : (u2("!!!initNodesPosition....."), this.easyPlaceGroupNodes(this.rootNode).forEach((s) => {
        if (s.fixed === true || !v.isAllowShowNode(s))
          return;
        const a2 = s.offset_x || 0, d = s.offset_y || 0;
        s.x = s.lot.x + a2 - v.getNodeWidth(s, this.graphOptions) / 2, s.y = s.lot.y + d - v.getNodeHeight(s, this.graphOptions) / 2, s.lot.placed = true;
      }));
    if (u2("Start Auto Layout....."), this.updateVisibleNodes(), this.isMainLayouer && this.graphOptions.autoLayouting) {
      u2("!!!autoLayouting.....");
      return;
    }
    this.autoLayout(true);
  }
  easyPlaceGroupNodes(e2) {
    if (u2("[layout canvasOffset]", this.graphOptions.viewSize, this.graphOptions.canvasSize), e2) {
      e2.fixed ? (e2.origin_x === void 0 && (e2.origin_x = e2.x, e2.origin_y = e2.y), e2.lot.x = e2.origin_x, e2.lot.y = e2.origin_y, u2("root fixed position:", e2.lot.x, e2.lot.y)) : this.layoutOptions.fixedRootNode ? (console.error("xxxxxxxx"), e2.lot.x = v.getLotXByNodeX(this.graphOptions, e2), e2.lot.y = v.getLotYByNodeY(this.graphOptions, e2)) : (e2.lot.x = 0, e2.lot.y = 0, u2("root position:", e2.lot.x, e2.lot.y));
      const o = this.easyAnalysisNodes(e2);
      return this.easyPlaceRelativePosition(e2, o), o;
    }
    return [];
  }
  easyAnalysisNodes(e2) {
    this.allNodes.forEach((s) => {
      s.lot.eached = false, s.lot.notLeafNode = false, s.lot.childs = [], s.lot.parent = void 0, s.lot.index_of_parent = 0, s.lot.strength = 0, s.lot.placed = false;
    });
    const o = [], t = {
      max_deep: 1,
      max_length: 1,
      max_strength: 1
    };
    return v.analysisNodes4Didirectional(o, [e2], 0, t, 0), o;
  }
  easyPlaceRelativePosition(e2, o) {
    o.forEach((s) => {
      if (s.lot.subling.level === 1) {
        const a2 = s.lot.subling;
        if (a2) {
          const d = H.getOvalPoint(e2.lot.x, e2.lot.y, a2.level * 50, s.lot.strength_plus - s.lot.strength / 2, a2.all_strength);
          s.lot.x = d.x, s.lot.y = d.y;
        }
      }
    }), o.forEach((s) => {
      const a2 = s.lot.subling;
      if (a2 && a2.level > 1) {
        const d = s.lot.parent.lot.strength_plus - s.lot.parent.lot.strength, c = (s.lot.parent.lot.strength_plus - d) / (s.lot.parent.lot.childs.length + 1) * (s.lot.index_of_parent + 1), h = H.getOvalPoint(e2.lot.x, e2.lot.y, (a2.level - 1) * 40 + 50, d + c, s.lot.parent.lot.subling.all_strength);
        s.lot.x = h.x, s.lot.y = h.y;
      }
    });
  }
  updateVisibleNodes(e2) {
    this.visibleNodes = [], e2 && (this.allNodes = e2), this.allNodes.forEach((o) => {
      v.isAllowShowNode(o) && (o.Fx = 0, o.Fy = 0, o.lot ? o.lot.placed = true : (u2("node miss lot:", o.text), o.lot = {
        placed: true,
        childs: []
      }), this.visibleNodes.push(o));
    }), u2("visibleNodes:", this.visibleNodes.length);
  }
  autoLayout(e2, o) {
    this.layoutTimes = 0, this.updateVisibleNodes(), this.viewUpdate = o, this.doForceLayout(0);
  }
  doForceLayout(e2) {
    if (this.graphOptions.instanceDestroyed) {
      u2("stop layout:instanceDestroyed");
      return;
    }
    let o = 0;
    if (e2 > 0) {
      if (this.prev10.length >= 10) {
        this.prev10.splice(0, 1);
        const t = this.prev10[this.prev10.length - 1] - this.prev10[0];
        o = Math.round(1e3 / (t / 10));
      }
      this.prev10.push(e2);
    }
    if (u2("this.layoutTimes:", this.layoutTimes, "of", this.maxLayoutTimes, "Current refresh rate:", o, "Hz", this.requireLinks, this.allLinks.length), this.layoutTimes > this.maxLayoutTimes) {
      this.isMainLayouer && (this.graphOptions.autoLayouting = false);
      return;
    }
    if (this.isMainLayouer && (this.graphOptions.autoLayouting = true), this.layoutTimes++, this.visibleNodes.forEach((t) => {
      t.Fx = 0, t.Fy = 0;
    }), this.byNode)
      for (const t in this.visibleNodes) {
        const s = this.visibleNodes[t];
        if (!(this.justLayoutSingleNode && !s.singleNode) && !s.fixed && s.lot.placed === true)
          for (const a2 in this.visibleNodes) {
            const d = this.visibleNodes[a2];
            d.lot.placed === true && t !== a2 && this.addGravityByNode(s, d);
          }
      }
    if (this.byLine)
      if (this.allLinks && this.allLinks.length > 0)
        for (const t of this.allLinks) {
          const s = t.relations.reduce((a2, d) => a2 + (d.force_elastic || 1), 0);
          (this.visibleNodes.includes(t.fromNode) || this.visibleNodes.includes(t.toNode)) && this.addElasticByLine(
            t.fromNode,
            t.toNode,
            s
          );
        }
      else
        for (const t of this.visibleNodes)
          t.lot.parent && this.addElasticByLine(
            t.lot.parent,
            t
          );
    for (const t in this.visibleNodes)
      this.applyToNodePosition(this.visibleNodes[t]);
    this.viewUpdate && this.viewUpdate(), requestAnimationFrame(this.doForceLayout.bind(this));
  }
  stop() {
    u2("[SeeksForceLayouter]stop:", this.graphOptions.autoLayouting), this.layoutTimes = 1e6;
  }
  getX(e2) {
    const o = (e2.width || e2.el.offsetWidth || 60) / 2;
    return e2.x + o;
  }
  getY(e2) {
    const o = (e2.height || e2.el.offsetHeight || 60) / 2;
    return e2.y + o;
  }
  addElasticByLine(e2, o, t = 1) {
    let s = Math.sqrt((this.getY(e2) - this.getY(o)) ** 2 + (this.getX(e2) - this.getX(o)) ** 2);
    s > this.maxVaildLineLength && (s = this.maxVaildLineLength);
    const a2 = s < this.minVaildLineLength ? 0 : (s - this.minVaildLineLength) * 0.1 * this.force_line_elastic * t, d = a2, l = a2, c = (this.getX(e2) - this.getX(o)) / s, h = (this.getY(e2) - this.getY(o)) / s;
    this.addFtoNode(e2, c * d * -1, h * d * -1), this.addFtoNode(o, c * l, h * l);
  }
  addGravityByNode(e2, o) {
    const t = Math.sqrt(
      (this.getY(e2) - this.getY(o)) ** 2 + (this.getX(e2) - this.getX(o)) ** 2
    );
    let s = t > this.zeroEffectNodeDistance ? 0 : (this.zeroEffectNodeDistance - t) * 0.05 * this.force_node_repulsion;
    t < this.minNodeDistance && (s = s * 2);
    const a2 = (this.getX(e2) - this.getX(o)) / t, d = (this.getY(e2) - this.getY(o)) / t;
    this.addFtoNode(e2, a2 * s, d * s), this.addFtoNode(o, a2 * s * -1, d * s * -1);
  }
  addFtoNode(e2, o, t) {
    if (this.justLayoutSingleNode && !e2.singleNode || Number.isNaN(o) || Number.isNaN(t))
      return;
    o = o / (e2.lot.strength || 1), t = t / (e2.lot.strength || 1), o > 50 && (o = 50), t > 50 && (t = 50), o < -50 && (o = -50), t < -50 && (t = -50);
    const s = e2.force_weight || 1;
    this.lockX || (e2.Fx += o * (1 / s)), this.lockY || (e2.Fy += t * (1 / s));
  }
  applyToNodePosition(e2) {
    if (e2.fixed)
      return;
    let o = Math.round(e2.Fx), t = Math.round(e2.Fy);
    o > this.maxMoveSpeed && (o = this.maxMoveSpeed), t > this.maxMoveSpeed && (t = this.maxMoveSpeed), o < -this.maxMoveSpeed && (o = -this.maxMoveSpeed), t < -this.maxMoveSpeed && (t = -this.maxMoveSpeed), e2.x = e2.x + o, e2.y = e2.y + t, e2.Fx = 0, e2.Fy = 0;
  }
};
var ye = xt;
var wt = class extends ye {
  constructor(e2, o) {
    super(e2, o);
    _(this, "layoutOptions");
    this.layoutOptions = e2;
  }
  async refresh() {
    u2("SeeksCenterLayouter:refresh"), await this.placeNodes(this.allNodes, this.rootNode);
  }
  async placeNodes(e2, o) {
    if (u2("SeeksCenterLayouter:placeNodes"), !o) {
      u2("root is null:", o);
      return;
    }
    u2("layout by root:", o), this.allNodes = e2, this.rootNode = o, e2.forEach((a2) => {
      a2.lot.eached = false, a2.lot.notLeafNode = false, a2.lot.childs = [], a2.lot.parent = void 0, a2.lot.index_of_parent = 0, a2.lot.strength = 0, a2.lot.placed = false;
    });
    let t = [], s = {
      max_deep: 1,
      max_length: 1,
      max_strength: 1
    };
    if (v.analysisNodes(t, [this.rootNode], 0, s), t = [], s = {
      max_deep: 1,
      max_length: 1,
      max_strength: 1
    }, v.analysisNodes4Didirectional(t, [this.rootNode], 0, s, 0), o.fixed)
      o.origin_x === void 0 && (o.origin_x = o.x, o.origin_y = o.y), o.lot.x = o.origin_x, o.lot.y = o.origin_y, u2("固定位置的rootNode:", o.text, o.x, o.y);
    else if (this.layoutOptions.fixedRootNode)
      o.lot.x = v.getLotXByNodeX(this.graphOptions, o), o.lot.y = v.getLotYByNodeY(this.graphOptions, o);
    else {
      const a2 = this.layoutOptions.centerOffset_x || 0, d = this.layoutOptions.centerOffset_y || 0;
      o.lot.x = 0 + a2, o.lot.y = 0 + d;
    }
    u2("root position:", o.lot.x, o.lot.y), this.placeRelativePosition(this.rootNode, t, s), this.graphOptions.useAnimationWhenExpanded ? (u2("Play layout animation....."), await this.animationLayout()) : t.forEach((a2) => {
      if (a2.fixed === true || !v.isAllowShowNode(a2))
        return;
      const d = a2.offset_x || 0, l = a2.offset_y || 0, c = -v.getNodeWidth(a2, this.graphOptions) / 2, h = -v.getNodeHeight(a2, this.graphOptions) / 2;
      a2.x = a2.lot.x + d + c, a2.y = a2.lot.y + l + h, a2.lot.placed = true;
    });
  }
  placeRelativePosition(e2, o, t) {
    const s = this.layoutOptions.distance_coefficient === void 0 ? 1 : this.layoutOptions.distance_coefficient;
    let a2 = Math.round((this.graphOptions.viewSize.height + this.graphOptions.viewSize.width) / t.max_deep * 0.2) * s;
    u2("analyticResult:", t, a2, this.layoutOptions.distance_coefficient), a2 < 150 * s && (a2 = 150 * s);
    let d = 0;
    o.forEach((c) => {
      const h = c.lot.subling;
      if (h && h.level === 1) {
        d = Math.round(h.all_size * 50 / Math.PI / 2), d < a2 && (d = a2);
        const f2 = H.getOvalPoint(e2.lot.x, e2.lot.y, h.level * d, c.lot.strength_plus - c.lot.strength / 2, h.all_strength);
        c.lot.x = f2.x, c.lot.y = f2.y;
      }
    });
    const l = Math.round(300 * s);
    o.forEach((c) => {
      const h = c.lot.subling;
      if (h && h.level > 1) {
        const f2 = c.lot.parent.lot.strength_plus - c.lot.parent.lot.strength, m = (c.lot.parent.lot.strength_plus - f2) / (c.lot.parent.lot.childs_size + 1) * (c.lot.index_of_parent + 1), y = H.getOvalPoint(e2.lot.x, e2.lot.y, (h.level - 1) * l + d, f2 + m, c.lot.parent.lot.subling.all_strength);
        c.lot.x = y.x, c.lot.y = y.y;
      }
    });
  }
};
var Xe = wt;
var Ct = class extends ye {
  constructor(i, e2) {
    super(i, e2);
  }
  async refresh() {
    await this.placeNodes(this.allNodes, this.rootNode);
  }
  async placeNodes(i, e2) {
    if (e2)
      u2("layout by root:", e2);
    else {
      u2("root is null:", e2);
      return;
    }
    this.allNodes = i, this.rootNode = e2, i.forEach((l) => {
      l.lot.eached = false, l.lot.notLeafNode = false, l.lot.childs = [], l.lot.parent = void 0, l.lot.index_of_p_childs = 0, l.lot.strength = 0;
    });
    const o = this.layoutOptions.centerOffset_x || 0, t = this.layoutOptions.centerOffset_y || 0, s = {
      x: o,
      y: t
    }, a2 = this.allNodes.length;
    let d = a2 * 90 / Math.PI / 2;
    d < 200 && (d = 200), d > 800 && (d = 800), this.allNodes.forEach((l, c) => {
      const h = H.getOvalPoint(s.x, s.y, d, c, a2);
      l.lot.x = h.x, l.lot.y = h.y;
    }), this.graphOptions.useAnimationWhenExpanded ? (u2("Play layout animation....."), await this.animationLayout()) : this.allNodes.forEach((l) => {
      if (l.fixed === true || !v.isAllowShowNode(l))
        return;
      const c = l.offset_x || 0, h = l.offset_y || 0, f2 = -v.getNodeWidth(l, this.graphOptions) / 2, r = -v.getNodeHeight(l, this.graphOptions) / 2;
      l.x = l.lot.x + c + f2, l.y = l.lot.y + h + r, l.lot.placed = true;
    });
  }
};
var je = Ct;
var Lt = class extends _e {
  constructor(e2, o) {
    super(e2, o);
    _(this, "graphOptions");
    _(this, "layoutOptions");
    _(this, "allNodes", []);
    _(this, "__origin_nodes", []);
    this.layoutOptions = e2, this.graphOptions = o;
  }
  refresh() {
    this.placeNodes(this.__origin_nodes, this.rootNode);
  }
  placeNodes(e2, o) {
    if (o)
      u2("layout by root:", o);
    else {
      u2("root is null:", o);
      return;
    }
    u2("allNodes:", e2.length), this.__origin_nodes = e2, this.rootNode = o, e2.forEach((s) => {
      s.lot.eached = false, s.lot.notLeafNode = false, s.lot.childs = [], s.lot.parent = void 0, s.lot.index_of_parent = 0, s.lot.strength = 0, s.lot.placed = false, s.x || (s.x = 0), s.y || (s.y = 0), Number.isNaN(s.x) && (s.x = 0), Number.isNaN(s.y) && (s.y = 0);
    }), this.allNodes = [];
    const t = {
      max_strength: 1,
      max_deep: 1,
      max_length: 1
    };
    v.analysisNodes4Didirectional(this.allNodes, [this.rootNode], 0, t, 0), u2("[layout canvasOffset]", this.graphOptions.viewSize, this.graphOptions.canvasSize);
  }
};
var Ze = Lt;
var kt = class extends _e {
  constructor(e2, o) {
    super(e2, o);
    _(this, "layoutOptions");
    _(this, "levelDistanceArr", []);
    this.layoutOptions = e2, u2("new SeeksBidirectionalTreeLayouter:", this.layoutOptions), this.layoutOptions.from || (this.layoutOptions.from = "left"), this.layoutOptions.levelDistance && (typeof this.layoutOptions.levelDistance == "string" ? this.levelDistanceArr = this.layoutOptions.levelDistance.split(",").map((t) => Number.parseInt(t)) : Array.isArray(this.layoutOptions.levelDistance) && (this.levelDistanceArr = this.layoutOptions.levelDistance)), this.requireLinks = true;
  }
  async refresh() {
    u2("SeeksBidirectionalTreeLayouter:refresh:nodes:", this.allNodes.length), await this.placeNodes(this.allNodes, this.rootNode);
  }
  analysisNodes4Didirectional(e2, o, t, s) {
    this.analysisBothWay(e2, o, t, s);
    const a2 = {};
    e2.forEach((c) => {
      const h = c.lot.level + "";
      a2[h] || (a2[h] = []), a2[h].push(c), c.lot.subling = {
        level: c.lot.level,
        all_size: 0,
        all_strength: 0
      };
    }), e2.forEach((c) => {
      const h = c.lot.level + "", f2 = a2[h], r = f2.length;
      c.lot.index_of_level = f2.indexOf(c), c.lot.subling.all_size = r, c.lot.subling.all_strength += c.lot.strength || 1, c.lot.strength_plus = c.lot.subling.all_strength;
    }), e2.forEach((c) => {
      c.lot.childs_size > 0 && (c.lot.strengthWithChilds = 0);
    }), console.log("willLayoutNodes.length:", e2.length), e2.forEach((c) => {
      c.lot.childs_size === 0 && (c.lot.strengthWithChilds = 1, v.conductStrengthToParents(c));
    });
    const d = Object.keys(a2).map((c) => Number.parseInt(c)).sort(), l = (c) => {
      const h = c + "", f2 = a2[h];
      let r = 0;
      f2.forEach((m) => {
        m.lot.parent && r < m.lot.parent.lot.strengthWithChilds_from && (r = m.lot.parent.lot.strengthWithChilds_from), c === 0 ? r += 1 : m.lot.strengthWithChilds_from = r, u2("levels:", c, r, m.text, m.lot.strengthWithChilds), r += m.lot.strengthWithChilds;
      });
    };
    [0].forEach(l), d.filter((c) => c > 0).forEach(l), d.filter((c) => c < 0).forEach(l);
  }
  analysisBothWay(e2, o, t, s) {
    u2(`level ${t} size: ${o.length}`), o.length > s.max_length && (s.max_length = o.length), t > s.max_deep && (s.max_deep = t);
    const a2 = {
      level: t,
      all_size: o.length,
      all_strength: 0
    };
    o.forEach((l) => {
      l.lot || (l.lot = { childs: [] }), l.lot.eached = true, l.lot.subling = a2, l.lot.level = t, e2.push(l);
    });
    let d = 0;
    o.forEach((l) => {
      let c = 0, h = 0, f2 = [];
      l.targetFrom.forEach((r) => {
        r.lot || (r.lot = { eached: false, childs: [] }), r.lot.eached || (r.lot.parent = l, v.isAllowShowNode(r) ? (r.lot.eached = true, r.lot.index_of_parent = h++, l.lot.childs.push(r), f2.push(r), c++) : l.lot.childs.push(r));
      }), this.analysisBothWay(e2, f2, t - 1, s), f2 = [], l.targetTo.forEach((r) => {
        r.lot || (r.lot = { eached: false, childs: [] }), r.lot.eached || (r.lot.parent = l, v.isAllowShowNode(r) ? (r.lot.eached = true, r.lot.index_of_parent = h++, l.lot.childs.push(r), f2.push(r), c++) : l.lot.childs.push(r));
      }), this.analysisBothWay(e2, f2, t + 1, s), l.lot.strength = c > 0 ? c : 1, a2.all_strength += l.lot.strength, l.lot.strength_plus = a2.all_strength, l.lot.index_of_level = d, l.lot.childs_size = c, d++;
    }), a2.all_strength > s.max_strength && (s.max_strength = a2.all_strength);
  }
  async placeNodes(e2, o) {
    if (u2("SeeksBidirectionalTreeLayouter:placeNodes"), o)
      u2("layout by root:", o);
    else {
      console.error("root is null");
      return;
    }
    this.rootNode = o, this.allNodes = e2, u2("allNodes:", e2.length), e2.forEach((l) => {
      l.lot.eached = false, l.lot.notLeafNode = false, l.lot.childs = [], l.lot.parent = void 0, l.lot.index_of_parent = 0, l.lot.strength = 0, l.lot.strengthWithChilds_from = 0, l.lot.strengthWithChilds = 0, l.lot.placed = false;
    });
    let t = [], s = {
      max_deep: 1,
      max_length: 1,
      max_strength: 1
    };
    v.analysisNodes(t, [this.rootNode], 0, s), t = [], s = {
      max_deep: 1,
      max_length: 1,
      max_strength: 1
    }, this.analysisNodes4Didirectional(t, [this.rootNode], 0, s), this.placeNodesPosition(this.rootNode, t, s), u2("allNodes:", t.length), this.graphOptions.useAnimationWhenExpanded ? (u2("Play layout animation....."), await this.animationLayout(), u2("create rootNode coordinates:3", o.x, o.y)) : (this.allNodes.forEach((l) => {
      if (l.fixed === true) {
        l.lot.placed = true;
        return;
      }
      !v.isAllowShowNode(l) || (Number.isNaN(l.lot.x) && (u2("bad lot x:", l.text, l.lot.x), l.lot.x = 0), Number.isNaN(l.lot.y) && (u2("bad lot y:", l.text, l.lot.y), l.lot.y = 0), l.x = v.getNodeXByLotX(this.graphOptions, l), l.y = v.getNodeYByLotY(this.graphOptions, l), l.lot.placed = true);
    }), u2("create rootNode coordinates:1", o.x, o.y));
    const a2 = t.filter((l) => l.lot.level === 0), d = new ye({
      layoutName: "force",
      maxLayoutTimes: 100,
      force_node_repulsion: 0.1,
      force_line_elastic: 1,
      fixedRootNode: true
    }, this.graphOptions);
    d.isMainLayouer = false, d.requireLinks = true, this.layoutOptions.from === "left" || this.layoutOptions.from === "right" ? d.lockX = true : d.lockY = true, d.visibleNodes = a2, d.setLinks(this.allLinks), d.doForceLayout(0);
  }
  placeNodesPosition(e2, o, t) {
    if (e2.fixed !== true) {
      const s = this.layoutOptions.centerOffset_x || 0, a2 = this.layoutOptions.centerOffset_y || 0;
      e2.lot.x = s, e2.lot.y = a2, this.layoutOptions.fixedRootNode ? (e2.lot.x = v.getLotXByNodeX(this.graphOptions, e2), e2.lot.y = v.getLotYByNodeY(this.graphOptions, e2)) : this.layoutOptions.from === "top" ? e2.lot.y -= this.graphOptions.viewSize.height / 2 - 100 : this.layoutOptions.from === "bottom" ? e2.lot.y += this.graphOptions.viewSize.height / 2 - 200 : this.layoutOptions.from === "right" ? e2.lot.x += this.graphOptions.viewSize.width / 2 - 100 : e2.lot.x -= this.graphOptions.viewSize.width / 2 - 100, u2("debug0910:Graph center:", e2.lot.x, e2.lot.y, { _center_offset_x: s, _center_offset_y: a2 });
    } else
      e2.origin_x === void 0 && (e2.origin_x = e2.x, e2.origin_y = e2.y), e2.lot.x = e2.origin_x, e2.lot.y = e2.origin_y, u2("固定位置的rootNode:", e2.text, e2.x, e2.y);
    e2.lot.placed = true, this.placeRelativePosition(e2, o, t);
  }
  placeRelativePosition(e2, o, t) {
    const s = this.graphOptions.viewSize;
    if (this.layoutOptions.from === "left" || this.layoutOptions.from === "right") {
      const a2 = G(this.layoutOptions.min_per_height) || 80, d = G(this.layoutOptions.max_per_height) || 400, l = G(this.layoutOptions.min_per_width) || 430, c = G(this.layoutOptions.max_per_width) || 650;
      let h = Math.round((s.width - 10) / (t.max_deep + 2));
      h < l && (h = l), h > c && (h = c);
      let f2 = Math.round(s.height / (t.max_strength + 1));
      f2 < a2 && (f2 = a2), f2 > d && (f2 = d), o.forEach((r) => {
        r.fixed !== true && r.lot.placed !== true && r !== e2 && (this.layoutOptions.from === "right" ? r.lot.x = e2.lot.x - this.getLevelDistance(r, r.lot.subling.level, h) : r.lot.x = e2.lot.x + this.getLevelDistance(r, r.lot.subling.level, h));
      }), o.forEach((r) => {
        r.fixed !== true && (r.lot.level === 0 ? r !== e2 && (r.lot.y = e2.lot.y + f2 * r.lot.index_of_level) : r.lot.y = e2.lot.y + f2 * (t.max_strength / -2 + r.lot.strengthWithChilds_from + r.lot.strengthWithChilds / 2));
      });
    } else {
      const a2 = G(this.layoutOptions.min_per_height) || 350, d = G(this.layoutOptions.max_per_height) || 400, l = G(this.layoutOptions.min_per_width) || 250, c = G(this.layoutOptions.max_per_width) || 500;
      let h = Math.round((s.width - 10) / (t.max_strength + 2));
      h < l && (h = l), h > c && (h = c);
      let f2 = Math.round((s.height - 10) / (t.max_deep + 2));
      f2 < a2 && (f2 = a2), f2 > d && (f2 = d), o.forEach((r) => {
        r.fixed !== true && r.lot.placed !== true && r !== e2 && (this.layoutOptions.from === "bottom" ? r.lot.y = e2.lot.y - this.getLevelDistance(r, r.lot.subling.level, f2) : r.lot.y = e2.lot.y + this.getLevelDistance(r, r.lot.subling.level, f2));
      }), o.forEach((r) => {
        r.fixed !== true && r.lot.level !== 0 && (r.lot.x = e2.lot.x + h * (t.max_strength / -2 + r.lot.strengthWithChilds_from + r.lot.strengthWithChilds / 2));
      });
    }
  }
  getLevelDistance(e2, o, t) {
    const s = Math.abs(o);
    if (this.levelDistanceArr && this.levelDistanceArr.length > 0) {
      let a2 = 0;
      for (let d = 0; d < s; d++) {
        const l = this.levelDistanceArr[d] || 100;
        a2 += l;
      }
      return o > 0 ? a2 : a2 * -1;
    } else
      return o * t;
  }
};
var Ce = (n, i) => {
  Le(n);
  let e2 = null;
  if (n.layoutName === "tree" ? e2 = new Ye(n, i) : n.layoutName === "center" ? e2 = new Xe(n, i) : n.layoutName === "circle" ? e2 = new je(n, i) : n.layoutName === "force" ? e2 = new ye(n, i) : n.layoutName === "fixed" ? e2 = new Ze(n, i) : n.layoutName === "smart-tree" && (e2 = new kt(n, i)), !e2)
    throw new Error("unknown layout: " + n.layoutName);
  return i.isNeedShowAutoLayoutButton = n.allowAutoLayoutIfSupport !== false && e2.autoLayout !== void 0, e2;
};
var Le = (n) => {
  if (typeof n.centerOffset_x == "string" && (n.centerOffset_x = parseInt(n.centerOffset_x)), typeof n.centerOffset_y == "string" && (n.centerOffset_y = parseInt(n.centerOffset_y)), n.layoutName === "center") {
    const i = n;
    i.layoutDirection === void 0 && (i.layoutDirection = "h"), i.centerOffset_x === void 0 && (i.centerOffset_x = 0), i.centerOffset_y === void 0 && (i.centerOffset_y = 0), i.layoutDirection = void 0;
  } else if (n.layoutName.includes("tree")) {
    const i = n;
    i.layoutDirection === void 0 && (i.layoutDirection = "h"), i.centerOffset_x === void 0 && (i.centerOffset_x = 0), i.centerOffset_y === void 0 && (i.centerOffset_y = 0), i.from === void 0 && (i.from = "top"), i.levelDistance === void 0 && (i.levelDistance = ""), (i.from === "top" || i.from === "bottom") && (i.layoutDirection = "v", u2("set layoutDirection=v"), u2("set defaultJunctionPoint=tb"), i.min_per_width === void 0 && (i.min_per_width = 100), i.max_per_width === void 0 && (i.max_per_width = 500), i.min_per_height === void 0 && (i.min_per_height = 300), i.max_per_height === void 0 && (i.max_per_height = 500)), (i.from === "left" || i.from === "right") && (i.layoutDirection = "h", u2("set defaultJunctionPoint=lr"), i.min_per_width === void 0 && (i.min_per_width = 300), i.max_per_width === void 0 && (i.max_per_width = 500), i.min_per_height === void 0 && (i.min_per_height = 100), i.max_per_height === void 0 && (i.max_per_height = 500));
  } else
    (n.layoutName === "fixed" || n.layoutName === "force") && (n.layoutDirection = void 0);
};
var bt = {
  createLayout: Ce,
  appendDefaultOptions4Layout: Le
};
var Mt = Object.freeze(Object.defineProperty({
  __proto__: null,
  createLayout: Ce,
  appendDefaultOptions4Layout: Le,
  default: bt
}, Symbol.toStringTag, { value: "Module" }));
var $e = {
  id: "rg-newNodeTemplate",
  x: 0,
  y: 0,
  text: "",
  styleClass: ""
};
var St = 0;
var Te = (n) => {
  !n.backgroundImage && (n.backgroundImage = n.backgrounImage), !n.backgroundImageNoRepeat && (n.backgroundImageNoRepeat = n.backgrounImageNoRepeat), typeof n.graphOffset_x == "string" && (n.graphOffset_x = parseInt(n.graphOffset_x)), typeof n.graphOffset_y == "string" && (n.graphOffset_y = parseInt(n.graphOffset_y));
  const i = {
    instanceId: "",
    debug: true,
    graphLoading: false,
    showMaskWhenLayouting: false,
    instanceDestroyed: false,
    useHorizontalView: false,
    oldVueVersion: false,
    ovUseNodeSlot: false,
    ovUseLineSlot: false,
    ovUseToolbarSlot: false,
    ovUseNodeExpandHolderSlot: false,
    showDebugPanel: false,
    backgroundColor: void 0,
    backgroundImage: void 0,
    backgroundImageNoRepeat: void 0,
    downloadImageFileName: "",
    disableZoom: false,
    disableDragNode: false,
    disableDragLine: true,
    moveToCenterWhenRefresh: true,
    zoomToFitWhenRefresh: true,
    useAnimationWhenRefresh: false,
    defaultFocusRootNode: true,
    disableNodeClickEffect: false,
    disableLineClickEffect: false,
    allowShowFullscreenMenu: true,
    allowShowZoomMenu: true,
    allowAutoLayoutIfSupport: true,
    allowShowRefreshButton: true,
    allowShowDownloadButton: true,
    backgrounImageNoRepeat: false,
    allowShowMiniToolBar: true,
    toolBarVersion: "v2",
    toolBarDirection: "v",
    toolBarPositionH: "right",
    toolBarPositionV: "center",
    allowSwitchLineShape: false,
    allowSwitchJunctionPoint: false,
    isMoveByParentNode: false,
    defaultExpandHolderPosition: "hide",
    defaultExpandHolderColor: void 0,
    defaultNodeBorderWidth: void 0,
    defaultNodeColor: "#409EFF",
    defaultNodeBorderColor: "#0c7ff6",
    defaultNodeFontColor: "#ffffff",
    defaultLineColor: "#cccccc",
    checkedLineColor: "#FD8B37",
    defaultLineFontColor: void 0,
    defaultLineWidth: 1,
    defaultLineShape: void 0,
    defaultLineTextOffset_x: void 0,
    defaultLineTextOffset_y: void 0,
    defaultNodeShape: void 0,
    defaultNodeWidth: void 0,
    defaultNodeHeight: void 0,
    defaultShowLineLabel: true,
    hideNodeContentByZoom: false,
    defaultJunctionPoint: void 0,
    defaultPloyLineRadius: void 0,
    disableDragCanvas: false,
    placeSingleNode: true,
    placeOtherGroup: false,
    lineUseTextPath: false,
    graphOffset_x: 0,
    graphOffset_y: 0,
    viewSize: { width: 300, height: 300 },
    viewELSize: { width: 1300, height: 800, left: 0, top: 100 },
    viewNVInfo: { width: 1300, height: 800, x: 0, y: 100 },
    canvasNVInfo: { width: 1300, height: 800, x: 0, y: 100 },
    defaultLineMarker: {
      markerWidth: 12,
      markerHeight: 12,
      refX: 10,
      refY: 6,
      color: void 0,
      data: "M2,2 L10,6 L2,10 L6,6 L2,2"
    },
    allowShowMiniView: false,
    allowShowSettingPanel: false,
    allowShowMiniNameFilter: true,
    fullscreen: false,
    checkedNodeId: "",
    checkedLineId: "",
    checkedLinkId: "",
    layouts: [],
    layoutLabel: "",
    layoutName: "tree",
    layoutClassName: "",
    layoutDirection: "h",
    useAnimationWhenExpanded: false,
    reLayoutWhenExpandedOrCollapsed: false,
    autoLayouting: false,
    layouter: void 0,
    isNeedShowAutoLayoutButton: false,
    canvasZoom: 100,
    showSingleNode: true,
    showNodeLabel: true,
    showNodeShortLabel: true,
    canvasSize: {
      width: 2e3,
      height: 2e3
    },
    canvasOffset: {
      x: 25,
      y: 27,
      zoom_buff_x: 0,
      zoom_buff_y: 0
    },
    creatingSelection: false,
    selectionView: {
      x: 25,
      y: 27,
      width: 0,
      height: 0
    },
    creatingNodePlot: false,
    showTemplateNode: true,
    newNodeTemplate: ve(JSON.parse(JSON.stringify($e))),
    creatingLinePlot: false,
    newLineTemplate: {
      from: "newRelationTemplate-from",
      to: "newRelationTemplate-to",
      color: "",
      text: "new line"
    },
    newLinkTemplate: {
      fromNode: null,
      toNodeObject: null,
      toNode: {
        nothing: true,
        x: 400,
        y: 400,
        el: {
          offsetWidth: 30,
          offsetHeight: 30
        }
      },
      relations: [{}]
    },
    data: {}
  };
  if (i.newLineTemplate = we(i.newLineTemplate), n.layout && n.layouts)
    throw new Error("Graph options cannot have both layout and layouts properties !");
  const e2 = n.debug === true;
  e2 && u2("RGOptions:user instance options:", n), window && (window.relationGraphDebug = e2);
  const o = Object.keys(i);
  n && Object.keys(n).forEach((s) => {
    if (s === "layouts" || s === "layout")
      return;
    const a2 = n[s];
    if (!o.includes(s)) {
      u2("RGOptions: unknow option key:", s);
      return;
    }
    if (typeof a2 == "object") {
      u2("RGOptions:user setting object:", s, a2);
      const d = i[s];
      if (d && !Array.isArray(d) && a2)
        Object.keys(d).forEach((l) => {
          d[l] = a2[l];
        });
      else if (Array.isArray(d)) {
        const l = [];
        a2.forEach((c) => {
          c && typeof c == "object" ? l.push(JSON.parse(JSON.stringify(c))) : l.push(c);
        }), i[s] = l;
      } else
        i[s] = a2;
    } else
      i[s] = a2;
  });
  let t = [];
  return !n.layouts || !Array.isArray(n.layouts) || n.layouts.length === 0 ? n.layout ? t = [n.layout] : t = [{
    label: "中心",
    layoutName: "center",
    layoutDirection: "v"
  }] : t = n.layouts, u2("final layouts:", t), i.layouts = t.map((s) => JSON.parse(JSON.stringify(s))), i.disableNodeClickEffect && (i.defaultFocusRootNode = false), Le(i.layouts[0]), ke(i.layouts[0], i), i;
};
var ke = (n, i) => {
  u2("applyDefaultOptionsByLayout", n.layoutName, i), n.layoutName === "SeeksCenterLayouter" || n.layoutName === "center" ? (i.defaultNodeShape === void 0 && (i.defaultNodeShape = 0), i.defaultLineShape === void 0 && (i.defaultLineShape = 1), i.defaultJunctionPoint === void 0 && (i.defaultJunctionPoint = "border")) : n.layoutName === "SeeksBidirectionalTreeLayouter" || n.layoutName.includes("tree") ? (i.defaultNodeBorderWidth === void 0 && (i.defaultNodeBorderWidth = 0), i.defaultNodeShape === void 0 && (i.defaultNodeShape = 1), i.defaultLineShape === void 0 && (i.defaultLineShape = 4), (n.from === "top" || n.from === "bottom") && (i.layoutDirection = "v", u2("set layoutDirection=v"), i.defaultLineShape === 4 && (i.defaultJunctionPoint === void 0 && (i.defaultJunctionPoint = "tb"), u2("set defaultJunctionPoint=tb"))), (n.from === "left" || n.from === "right") && (i.layoutDirection = "h", u2("set layoutDirection=h"), i.defaultLineShape === 4 && (i.defaultJunctionPoint === void 0 && (i.defaultJunctionPoint = "lr"), u2("set defaultJunctionPoint=lr")))) : (n.layoutName === "fixed" || n.layoutName === "force") && (i.moveToCenterWhenRefresh = false, i.zoomToFitWhenRefresh = false), i.defaultNodeShape === void 0 && (i.defaultNodeShape = 0), i.defaultLineShape === void 0 && (i.defaultLineShape = 1), i.defaultJunctionPoint === void 0 && (i.defaultJunctionPoint = "border");
};
var be = (n) => {
  const i = Te(n);
  return u2("RGOptions:new RGOptions:by:", n), u2("RGOptions:new RGOptions:", i), i.instanceId || (i.instanceId = `RGIns-${St++}`), i;
};
var Ot = {
  newInstanceOptions: be,
  createDefaultConfig: Te,
  applyDefaultOptionsByLayout: ke
};
var zt = Object.freeze(Object.defineProperty({
  __proto__: null,
  newNodeTemplate: $e,
  createDefaultConfig: Te,
  applyDefaultOptionsByLayout: ke,
  newInstanceOptions: be,
  default: Ot
}, Symbol.toStringTag, { value: "Module" }));
var Pt = class {
  constructor(i, e2) {
    _(this, "options");
    _(this, "listeners");
    _(this, "isReact", false);
    _(this, "updateViewHook", () => {
    });
    this.listeners = e2, this.options = be(i), u2("new RelationGraph:", this);
  }
  enableDebugLog(i) {
    this.options.debug = i, window && (window.relationGraphDebug = i);
  }
  setUpdateViewHook(i) {
    this.isReact = true, this.updateViewHook = i;
  }
  _dataUpdated() {
    this.updateViewHook();
  }
};
var Et = class extends Pt {
  constructor(e2, o) {
    super(e2, o);
    _(this, "$dom");
    _(this, "$canvasDom");
  }
  setDom(e2) {
    this.$dom = e2;
  }
  setCanvasDom(e2) {
    this.$canvasDom = e2;
  }
  getBoundingClientRect() {
    return this.$dom.getBoundingClientRect();
  }
};
var Nt = class extends Et {
  constructor(e2, o) {
    super(e2, o);
    _(this, "graphData", {
      rootNode: void 0,
      nodes: [],
      links: []
    });
    _(this, "seeksNodeIdIndex", 0);
    _(this, "allLineColors", []);
    _(this, "userLayouerClass");
    _(this, "layouter");
    _(this, "reactiveData");
    _(this, "disableNextLayoutAnimation", false);
  }
  setReactiveData(e2, o) {
    this.graphData = e2, this.allLineColors = o.allLineColors, o.options = this.options, this.reactiveData = o;
  }
  setReactiveDataVue3(e2, o) {
    this.graphData = e2, this.allLineColors = o.allLineColors, o.options = this.options, this.reactiveData = o;
  }
  _setOptions(e2) {
    const o = be(e2);
    this.reactiveData.options = o, this.options = this.reactiveData.options;
  }
  _initLayoutByLayoutOptions(e2) {
    this.options.layoutClassName = e2.layoutClassName, this.options.layoutLabel = e2.label, this.options.layoutName = e2.layoutName, this.options.layoutDirection = e2.layoutDirection, this.layouter = Ce(e2, this.options);
  }
  initLayouter() {
    if (this.userLayouerClass)
      u2("Use user layouter:", this.userLayouerClass), this.layouter = this.userLayouerClass;
    else if (this.options.layouts && this.options.layouts.length > 0) {
      const e2 = this.options.layouts[0];
      u2("[change layout]Create default layouter：", this.options.layoutName), this._initLayoutByLayoutOptions(e2);
    } else
      u2("Not set option: layout/layouts！");
    u2("Layouter instance:", this.layouter);
  }
  async _setJsonData(e2, o = false) {
    this.clearGraph(), u2("set jsonData:", e2), this.loadGraphJsonData(e2);
  }
  async clearGraph() {
    this.graphData.nodes = [], this.graphData.links = [], this.graphData.rootNode = void 0;
  }
  generateNewNodeId(e2 = 1) {
    const o = "N" + (this.graphData.nodes.length + e2);
    return this.getNodeById(o) ? this.generateNewNodeId(e2 + 1) : (u2("generateNewNodeId:", e2, o), o);
  }
  loadNodes(e2) {
    e2.forEach((o) => {
      let t = this.graphData.nodes.find((s) => s.id === o.id);
      t || (t = ve(o), t && (t.seeks_id = this.seeksNodeIdIndex++, this.graphData.nodes.push(t)));
    });
  }
  loadLines(e2) {
    e2.forEach((o) => {
      let t = false, s, a2;
      if (typeof o.from == "object" ? s = o.from : s = this.graphData.nodes.find((y) => y.id === o.from), typeof o.to == "object" ? a2 = o.to : a2 = this.graphData.nodes.find((y) => y.id === o.to), !s) {
        console.error("找不到from:", o);
        return;
      }
      if (!a2) {
        console.error("找不到to:", o);
        return;
      }
      const d = `${s.seeks_id}-${a2.seeks_id}`, l = `${a2.seeks_id}-${s.seeks_id}`, c = we(o);
      let h = this.graphData.links.find((y) => y.seeks_id === d), f2 = false;
      h || (h = this.graphData.links.find((y) => y.seeks_id === l), h ? f2 = true : (t = true, h = {
        seeks_id: d,
        fromNode: s,
        toNode: a2,
        appended: false,
        relations: []
      }));
      let r = c.arrow;
      c.isHideArrow || (r = this.getLineArrow(c.color)), s.targetNodes || (s.targetNodes = []), a2.targetNodes || (a2.targetNodes = []), s.targetNodes.includes(a2) || s.targetNodes.push(a2), a2.targetNodes.includes(s) || a2.targetNodes.push(s), s.targetTo.includes(a2) || s.targetTo.push(a2), a2.targetFrom.includes(s) || a2.targetFrom.push(s);
      let m = false;
      for (let y = 0; y < h.relations.length; y++)
        if ((h.relations[y].id || c.id) && h.relations[y].id === c.id) {
          m = true;
          break;
        }
      m === false && (c.id || (c.id = `${h.seeks_id}-${h.relations.length}`), c.isReverse = f2, c.arrow = r, h.relations.push(c)), t && (this.graphData.links.push(h), h.appended = false);
    });
  }
  flatNodeData(e2, o, t, s) {
    e2.forEach((a2) => {
      t.push(a2), o && s.push({
        from: o.id,
        to: a2.id
      });
      const d = a2.childs || a2.children;
      d && d.length > 0 && this.flatNodeData(d, a2, t, s);
    });
  }
  loadGraphJsonData(e2) {
    e2.lines || (e2.lines = e2.relations, console.warn("[relation-graph] For compatibility with older versionsm, Use jsonData.relations as jsonData.lines, It is recommended that you define your data using")), e2.lines || (e2.lines = e2.links, console.warn("[relation-graph] For compatibility with older versionsm, Use jsonData.links as jsonData.lines, It is recommended that you define your data using"));
    const o = e2.nodes, t = [], s = [];
    this.flatNodeData(o, null, t, s), e2.lines.forEach((a2) => {
      s.push(a2);
    }), this.loadNodes(t), u2("Nodes is initialized"), this.loadLines(s);
  }
  getLineArrow(e2, o = false, t = false) {
    const s = o ? "start-" : "";
    if (t)
      return `${this.options.instanceId}-${s}arrow-checked`;
    if (e2) {
      const a2 = rt(e2);
      return this.allLineColors.map((d) => d.id).includes(a2) || this.allLineColors.push({ id: a2, color: e2 }), `${this.options.instanceId}-${s}arrow-${a2}`;
    } else
      return `${this.options.instanceId}-${s}arrow-default`;
  }
  getNodes() {
    return this.graphData.nodes;
  }
  getLinks() {
    return this.graphData.links;
  }
  getGraphJsonData() {
    const e2 = [], o = [];
    return this.graphData.nodes.forEach((t) => {
      const s = Be(t);
      s && e2.push(s);
    }), this.graphData.links.forEach((t) => {
      Ae(t, o);
    }), {
      rootId: this.graphData.rootNode ? this.graphData.rootNode.id : "",
      nodes: e2,
      lines: o
    };
  }
  getGraphJsonOptions() {
    const e2 = {}, o = [
      "layouter",
      "autoLayouting",
      "canvasNVInfo",
      "canvasOffset",
      "canvasZoom",
      "fullscreen",
      "instanceId",
      "layoutClassName",
      "layoutDirection",
      "layoutLabel",
      "layoutName",
      "resetViewSize",
      "viewELSize",
      "viewNVInfo",
      "viewSize",
      "canvasSize",
      "newLinkTemplate",
      "newLineTemplate",
      "newNodeTemplate"
    ];
    return Object.keys(this.options).forEach((t) => {
      o.includes(t) || (e2[t] = this.options[t]);
    }), e2;
  }
  printGraphJsonData() {
    u2("graph options:", JSON.stringify(this.getGraphJsonOptions())), u2("graph json data:", JSON.stringify(this.getGraphJsonData()));
  }
  getNodeById(e2) {
    for (let o = 0; o < this.graphData.nodes.length; o++)
      if (this.graphData.nodes[o].id === e2)
        return this.graphData.nodes[o];
  }
  getLinkById(e2) {
    for (let o = 0; o < this.graphData.links.length; o++)
      if (this.graphData.links[o].seeks_id === e2)
        return this.graphData.links[o];
  }
  getLinkByLineId(e2) {
    for (let o = 0; o < this.graphData.links.length; o++)
      if (this.graphData.links[o].relations.findIndex((t) => t.id === e2) !== -1)
        return this.graphData.links[o];
  }
  addNodes(e2) {
    u2("addNodes:", e2), this.loadNodes(e2);
  }
  addLines(e2) {
    u2("addLines:", e2), this.loadLines(e2);
  }
  removeNodeById(e2) {
    let o = 0;
    for (let s = 0; s < this.graphData.links.length; s++) {
      const a2 = this.graphData.links[s];
      (a2.fromNode.id === e2 || a2.toNode.id === e2) && (this.removeLink(a2), s--, o++);
    }
    u2("删除对应的线个数：", e2, o);
    let t = 0;
    for (let s = 0; s < this.graphData.nodes.length; s++)
      if (this.graphData.nodes[s].id === e2) {
        this.graphData.nodes.splice(s, 1), t++;
        break;
      }
    u2("删除对应的节点个数：", e2, t);
  }
  removeNode(e2) {
    this.removeNodeById(e2.id);
  }
  removeLinkByTwoNode(e2, o) {
    for (const t of this.getLinks())
      if (t.fromNode.id === e2 && t.toNode.id === o || t.fromNode.id === e2 && t.toNode.id === o) {
        this.removeLink(t);
        break;
      }
  }
  getGroupByNode(e2, o = []) {
    o.includes(e2) || o.push(e2);
    for (const t of e2.targetNodes)
      o.includes(t) || this.getGroupByNode(t, o);
    return o;
  }
  clearItem(e2, o) {
    for (let t = 0; t < e2.length; t++)
      e2[t] === o && (e2.splice(t, 1), t--);
  }
  removeNodeRef(e2, o) {
    e2 && (e2.targetNodes && this.clearItem(e2.targetNodes, o), e2.targetFrom && this.clearItem(e2.targetFrom, o), e2.targetTo && this.clearItem(e2.targetTo, o));
  }
  removeLinkById(e2) {
    u2("removeLinkById:", e2);
    for (let o = 0; o < this.graphData.links.length; o++) {
      const t = this.graphData.links[o];
      t.seeks_id === e2 && (this.removeNodeRef(t.fromNode, t.toNode), this.removeNodeRef(t.toNode, t.fromNode), this.graphData.links.splice(o, 1), o--);
    }
  }
  removeLink(e2) {
    u2("removeLink:", e2), this.removeLinkById(e2.seeks_id);
  }
  removeLine(e2, o) {
    u2("removeLine:", e2, o);
    for (let t = 0; t < e2.relations.length; t++)
      e2.relations[t] === o && e2.relations.splice(t, 1);
    e2.relations.length === 0 && this.removeLink(e2);
  }
  setNodePosition(e2, o, t) {
    e2.x = o, e2.y = t;
  }
  getGraphOffet() {
    const e2 = this.options.graphOffset_x || 0, o = this.options.graphOffset_y || 0;
    return {
      offset_x: e2,
      offset_y: o
    };
  }
  setCanvasCenter(e2, o) {
    const t = this.options.viewSize.width / 2, s = this.options.viewSize.height / 2, a2 = this.getGraphOffet();
    this.setCanvasOffset(t - e2 + a2.offset_x, s - o + a2.offset_y);
  }
  setCanvasOffset(e2, o) {
    this.options.canvasOffset.x = e2, this.options.canvasOffset.y = o;
  }
  findGroupNodes(e2, o) {
    o.push(e2), e2.targetNodes.forEach((t) => {
      o.includes(t) || this.findGroupNodes(t, o);
    });
  }
  resetViewSize() {
    !this.options || (u2("resetViewSize"), this.options.viewSize.width = this.$dom.getBoundingClientRect().width, this.options.viewSize.height = this.$dom.getBoundingClientRect().height, this.options.canvasZoom = 100, this.setCanvasCenter(0, 0), this.refreshNVAnalysisInfo());
  }
  refreshNVAnalysisInfo() {
    if (!this.$dom) {
      console.error("cannot get view size !");
      return;
    }
    const e2 = {
      NMCanvasCenter: { x: 0, y: 0 }
    }, o = this.$dom.getBoundingClientRect();
    this.options.viewNVInfo.x = o.left, this.options.viewNVInfo.y = o.top, this.options.viewNVInfo.width = o.width, this.options.viewNVInfo.height = o.height;
    const t = this.options.canvasSize.width * (this.options.canvasZoom / 100), s = this.options.canvasSize.height * (this.options.canvasZoom / 100);
    e2.NMCanvasCenter.x = this.options.canvasOffset.x + this.options.canvasSize.width / 2, e2.NMCanvasCenter.y = this.options.canvasOffset.y + this.options.canvasSize.height / 2, this.options.canvasNVInfo.x = e2.NMCanvasCenter.x - t / 2, this.options.canvasNVInfo.y = e2.NMCanvasCenter.y - s / 2, this.options.canvasNVInfo.width = t, this.options.canvasNVInfo.height = s, this.options.viewELSize.width = o.width, this.options.viewELSize.height = o.height, this.options.viewELSize.left = o.left, this.options.viewELSize.top = o.top;
  }
  getStuffSize(e2) {
    const o = e2 || this.graphData.nodes;
    let t = 9999999, s = 9999999, a2 = 0, d = 0;
    o.forEach((f2) => {
      f2.x < t && (t = f2.x), f2.x > a2 && (a2 = f2.x + f2.el.offsetWidth), f2.y < s && (s = f2.y), f2.y > d && (d = f2.y + f2.el.offsetHeight);
    });
    const l = 100, c = a2 - t + l, h = d - s + l;
    return {
      width: c,
      height: h,
      minX: t,
      maxX: a2,
      minY: s,
      maxY: d
    };
  }
  getNodesCenter() {
    const e2 = this.getStuffSize();
    u2("getStuffSize:", e2);
    const o = e2.minX + (e2.width - 100) / 2, t = e2.minY + (e2.height - 100) / 2;
    return {
      x: o,
      y: t
    };
  }
  querySearchAsync(e2) {
    if (u2("fetch-suggestions", e2), e2 = e2.trim(), e2 === "")
      return;
    const o = [];
    return this.graphData.nodes.forEach((t) => {
      u2("fetch:", t.text), t.text.includes(e2) && o.push(t);
    }), u2("fetched:", o.length), o;
  }
  printOptions() {
    const e2 = this.getGraphJsonOptions();
    console.log("options:", e2), console.log("options-json-string:"), console.log(JSON.stringify(e2));
  }
  printData() {
    const e2 = this.getGraphJsonData();
    console.log("data:", e2), console.log("data-json-string:"), console.log(JSON.stringify(e2));
  }
  loading() {
    this.options.graphLoading = true;
  }
  clearLoading() {
    this.options.graphLoading = false;
  }
};
var Bt = class extends Nt {
  constructor(i, e2) {
    super(i, e2);
  }
  dataURLToBlob(i) {
    const e2 = i.split(","), o = e2[0], t = o && o.match(/:(.*?);/)[1], s = atob(e2[1]);
    let a2 = s.length;
    const d = new Uint8Array(a2);
    for (; a2--; )
      d[a2] = s.charCodeAt(a2);
    return new Blob([d], { type: t });
  }
  async createGraphCanvas(i = "png") {
    return new Promise((e2, o) => {
      const t = this.options.canvasZoom, s = this.$canvasDom.clientWidth, a2 = this.$canvasDom.clientHeight, d = this.options.canvasOffset.x, l = this.options.canvasOffset.y;
      this.options.checkedNodeId = "", this.options.canvasZoom = 100;
      const c = this.$canvasDom;
      let h = 999999, f2 = 999999, r = 0, m = 0;
      const y = 100;
      this.graphData.nodes.forEach((k) => {
        k.x < h && (h = k.x), k.x > r && (r = k.x + k.el.offsetWidth), k.y < f2 && (f2 = k.y), k.y > m && (m = k.y + k.el.offsetHeight);
      });
      const x = h - y, g = f2 - y;
      this.graphData.nodes.forEach((k) => {
        k.x = k.x - x, k.y = k.y - g;
      }), this.options.canvasOffset.x = y * -1, this.options.canvasOffset.y = y * -1;
      const b = r - h + 200 + y * 2, O = m - f2 + 100 + y * 2, M = window.devicePixelRatio;
      this.options.canvasSize.width = b * M, this.options.canvasSize.height = O * M, window.scrollTo(0, 0);
      const S = document.createElement("canvas");
      S.width = b * M, S.height = O * M, S.style.backgroundColor = getComputedStyle(c.parentElement, null).backgroundColor, u2("canvas.style.backgroundColor:", S.style.backgroundColor), S.style.width = `${b * M}px`, S.style.height = `${O * M}px`, S.getContext("2d").scale(1, 1);
      const Y = {
        backgroundColor: S.style.backgroundColor,
        scale: M,
        canvas: S,
        logging: true,
        width: b,
        height: O,
        useCORS: true
      };
      setTimeout(() => {
        this.createImage(c, Y, i, "", (k) => {
          this.options.canvasSize.width = s, this.options.canvasSize.height = a2, this.options.canvasOffset.x = d, this.options.canvasOffset.y = l, this.options.canvasZoom = t, this.graphData.nodes.forEach((P) => {
            P.x = P.x + x, P.y = P.y + g;
          }), e2(k);
        });
      }, 1e3);
    });
  }
  createImage(i, e2, o, t, s) {
    u2("createImage:", e2), html2canvas_esm_default(i, e2).then((a2) => {
      s && s(a2);
    });
  }
  async getImageBase64(i = "png") {
    const e2 = await this.createGraphCanvas(i), o = document.body.appendChild(e2);
    o.style.display = "none";
    const t = o.toDataURL(`image/${i}`);
    return document.body.removeChild(o), t;
  }
  async downloadAsImage(i = "png", e2) {
    if (this.listeners.onImageDownload && this.listeners.onImageDownload(this.$canvasDom, i) === false)
      return;
    if (this.graphData.nodes.length === 0)
      throw new Error("没有节点，没有内容需要导出！");
    e2 || (e2 = this.options.downloadImageFileName), e2 || (e2 = `relation-graph-${(Math.random() * 1e5).toFixed(0)}`);
    const o = await this.createGraphCanvas(i);
    u2("downloadImageAsFile:", i, e2);
    let t = true;
    this.listeners.onImageSaveAsFile && this.listeners.onImageSaveAsFile(
      o,
      i,
      e2
    ) === false && (t = false), t && await this.downloadImageAsFile(o, i, e2);
  }
  async downloadImageAsFile(i, e2, o) {
    const t = document.body.appendChild(i);
    t.style.display = "none";
    const s = this.dataURLToBlob(t.toDataURL(`image/${e2}`));
    document.body.removeChild(t);
    const a2 = document.createElement("a");
    a2.style.display = "none";
    try {
      window.navigator.msSaveOrOpenBlob ? window.navigator.msSaveOrOpenBlob(s, `${o}.${e2}`) : (a2.setAttribute("href", URL.createObjectURL(s)), a2.setAttribute("download", `${o}.${e2}`), document.body.appendChild(a2), a2.click(), u2("click ok!"), URL.revokeObjectURL(await s.text()), u2("revokeObjectURL ok!"), document.body.removeChild(a2), u2("removeChild ok!"));
    } catch (d) {
      u2("[SEEKS Graph]Create and download image error:", d);
    }
  }
};
var At = class extends Bt {
  constructor(i, e2) {
    super(i, e2);
  }
  createReturnValue(i, e2) {
    return { path: i, textPosition: e2 };
  }
  createLinePath(i, e2, o) {
    let t = i.fromNode;
    t || (t = {
      x: 0,
      y: 0,
      el: {
        offsetWidth: 10,
        offsetHeight: 10
      }
    });
    const s = i.toNode;
    o || (o = 0);
    const a2 = e2.lineShape || this.options.defaultLineShape || 1, d = e2.lineDirection || this.options.layoutDirection || "h";
    let l = t.x, c = t.y, h = s.x, f2 = s.y;
    const r = { x: 0, y: 0, rotate: 0 };
    if (Number.isNaN(l) || Number.isNaN(c))
      return u2("error start node:", t.text, t.x, t.y), r.x = 50, r.y = 50, r.rotate = 0, this.createReturnValue("M 0 0 L 100 100", r);
    if (Number.isNaN(h) || Number.isNaN(f2))
      return u2("error end point:", s.text, s.x, s.y), r.x = 50, r.y = 50, r.rotate = 0, this.createReturnValue("M 0 0 L 100 100", r);
    let m = t.el.offsetWidth || t.width || 60, y = t.el.offsetHeight || t.height || 60;
    if (Number.isNaN(m) || Number.isNaN(y))
      return r.x = 50, r.y = 50, r.rotate = 0, this.createReturnValue("M 0 0 L 100 100", r);
    let x = s.el.offsetWidth || s.width || 60, g = s.el.offsetHeight || s.height || 60;
    if (Number.isNaN(x) || Number.isNaN(g))
      return r.x = 50, r.y = 50, r.rotate = 0, this.createReturnValue("M 0 0 L 100 100", r);
    e2.isReverse && ([l, c, h, f2, m, y, x, g] = [
      h,
      f2,
      l,
      c,
      x,
      g,
      m,
      y
    ]);
    const b = [
      l,
      c,
      h,
      f2,
      m,
      y,
      x,
      g,
      this.options.defaultNodeShape,
      e2.isReverse,
      i.relations.length,
      o
    ], O = [
      h,
      f2,
      l,
      c,
      x,
      g,
      m,
      y,
      this.options.defaultNodeShape,
      !e2.isReverse,
      i.relations.length,
      o
    ];
    let M, S, Y = t.junctionPoint || this.options.defaultJunctionPoint;
    if (Y || (Y = pe.border), Y === pe.border)
      M = H.getBorderPoint4MultiLine(...b), S = H.getBorderPoint4MultiLine(...O);
    else if (Y === pe.ltrb)
      M = H.getRectJoinPoint(...b), S = H.getRectJoinPoint(...O);
    else if (Y === pe.tb)
      M = H.getRectVJoinPoint(...b), S = H.getRectVJoinPoint(...O);
    else if (Y === pe.lr)
      M = H.getRectHJoinPoint(...b), S = H.getRectHJoinPoint(...O);
    else
      return this.createReturnValue(
        "Unknown join point type:" + Y,
        r
      );
    if (!M || !S)
      return this.createReturnValue(
        "Can not create start and end!",
        r
      );
    const k = M.x, P = M.y, fe = S.x, ue = S.y;
    if (Number.isNaN(k) || Number.isNaN(P))
      return console.error("error start point:", t), r.x = 50, r.y = 50, r.rotate = 0, this.createReturnValue("M 0 0 L 100 100", r);
    if (Number.isNaN(fe) || Number.isNaN(ue))
      return console.error("error end point:", s), r.x = 50, r.y = 50, r.rotate = 0, this.createReturnValue("M 0 0 L 100 100", r);
    let E2 = S.x - M.x, z2 = S.y - M.y, $ = S.x > M.x ? 1 : -1;
    d === "v" && ($ = S.y > M.y ? 1 : -1);
    let I = "";
    if (a2 === 4) {
      const T2 = Math.floor(60 / (i.relations.length + 1) * (o + 1)) - 30;
      if (d === "v")
        z2 = z2 - ($ * 33 + T2), r.x = k + E2 + 5, r.y = P + $ * 40 + T2, r.rotate = 90, I = `M ${k} ${P} v${$ * 33 + T2} h${E2 + T2} v${z2}`;
      else if (e2.reverseText === true)
        r.x = k + $ * 10 - ($ < 0 ? 30 : 0), r.y = P - 5, E2 = E2 - $ * 120, I = `M ${k} ${P} h${$ * 120} v${z2} h${E2}`;
      else {
        r.x = k + $ * 50 - ($ < 0 ? 30 : 0), r.y = P + z2 - 5 + T2, E2 = E2 - ($ * 33 + T2), z2 = z2 + $ * T2;
        let W = this.options.defaultPloyLineRadius || 0;
        const U2 = $ * 33 + T2 - W;
        if (W > 0) {
          Math.abs(P - ue) < W * 2 && (W = Math.abs(P - ue) / 2);
          const ee = W * (k < fe ? 1 : -1), q = W * (P < ue ? 1 : -1), ae = [];
          ae.push(`M ${k - ee} ${P}`), ae.push(`h${U2}`), ae.push(`C${k + U2 + ee},${P}, ${k + U2 + ee},${P + q}, ${k + U2 + ee},${P + q}`), ae.push(`v${z2 - q - q}`);
          const Me = k + U2 + ee, Se = P + q + (z2 - q - q);
          ae.push(`C${Me},${Se + q}, ${Me + ee},${Se + q}, ${Me + ee},${Se + q}`), ae.push(`h${E2 - W}`), I = ae.join(" ");
        } else
          I = `M ${k} ${P} h${U2} v${z2 - W} h${E2 - W}`;
      }
    } else if (a2 === 2) {
      const T2 = S.y > M.y ? 1 : -1, W = Math.abs(E2) + Math.abs(z2);
      r.x = Math.round(S.x - E2 / W * 60 - 20), r.y = Math.round(
        S.y - z2 / W * 60 - 20 * T2
      );
      const U2 = 1 / (i.relations.length + 1) * (o + 1) - 0.5 + 0.5;
      d === "v" ? I = `M${k},${P} c${0},${$ * 30} ${E2 * U2},${$ * -10} ${E2},${z2}` : I = `M${k},${P} c${$ * 30},${0} ${$ * -10},${z2 * U2} ${E2},${z2}`;
    } else if (a2 === 6) {
      const T2 = S.y > M.y ? 1 : -1, W = Math.abs(E2) + Math.abs(z2);
      r.x = Math.round(S.x - E2 / W * 60 - 20), r.y = Math.round(
        S.y - z2 / W * 60 - 20 * T2
      ), d === "v" ? I = `M${k},${P} c${0},${z2 / 2} ${E2},${z2 / 2} ${E2},${z2}` : I = `M${k},${P} c${E2 / 2},${0} ${E2 / 2},${z2} ${E2},${z2}`;
    } else if (a2 === 3) {
      r.x = S.x - $ * 63, r.y = S.y + 3;
      const T2 = 1 / (i.relations.length + 1) * (o + 1) - 0.5 + 0.5;
      d === "v" ? I = `M${k},${P} c${0},${z2 * T2} ${0},${0} ${E2},${z2}` : I = `M${k},${P} c${$ * 30},${0} ${$ * -10},${z2 * T2} ${E2},${z2}`;
    } else if (a2 === 5) {
      r.x = S.x - $ * 63, r.y = S.y + 3;
      const T2 = 1 / (i.relations.length + 1) * (o + 1) - 0.5 + 0.5;
      d === "v" ? I = `M${k},${P} c${0},${0} ${0},${z2 * T2} ${E2},${z2}` : I = `M${k},${P} c${0},${0} ${E2 * T2},${0} ${E2},${z2}`;
    } else {
      const T2 = H.getAngleType(E2, z2);
      r.rotate = H.getTextAngle(k, P, fe, ue);
      const W = T2 === 2 || T2 === 4 ? -1 : 1, U2 = (z2 === 0 ? -50 : Math.sin(Math.atan(E2 / z2)) * 10 / Math.sin(90)) * W, ee = E2 === 0 ? -50 : Math.sin(Math.atan(z2 / E2)) * 10 / Math.sin(90);
      r.x = Math.round(M.x + E2 / 2 - U2), r.y = Math.round(M.y + z2 / 2 - ee), Number.isNaN(r.rotate) && (r.rotate = 0), I = `M ${k} ${P} L ${fe} ${ue}`;
    }
    return this.createReturnValue(I, r);
  }
  getTextTransform(i, e2, o, t) {
    if (Number.isNaN(e2) || Number.isNaN(o))
      return "translate(0,0)";
    const s = i.lineShape === void 0 ? this.options.defaultLineShape : i.lineShape;
    return s === 1 || s === 4 ? `translate(${e2},${o})rotate(${t || 0})` : `translate(${e2},${o})`;
  }
  getArrow(i, e2, o = false) {
    return i.isHideArrow ? "none" : `url('#${this.getLineArrow(
      i.color,
      o,
      false
    )}')`;
  }
};
var $t = class extends At {
  constructor(e2, o) {
    super(e2, o);
    _(this, "zoomCenter_of_newSize", { x: 0, y: 0 });
  }
  zoom(e2, o) {
    this.options.canvasZoom + e2 < 10 && (u2("zoom:reset zoom=10"), e2 = 10 - this.options.canvasZoom);
    const t = this.options.canvasZoom + e2, s = this.showZoomCenter(o, e2);
    this.options.canvasOffset.x += s.buff_x, this.options.canvasOffset.y += s.buff_y, this.options.canvasZoom = t, this.refreshNVAnalysisInfo();
  }
  setZoom(e2, o) {
    const t = Math.floor(e2 - this.options.canvasZoom);
    this.zoom(t, o);
  }
  getCanvasCoordinateByClientCoordinate(e2) {
    const o = this.options.canvasZoom / 100, { NMCanvasStart: t, NMZoomCenter: s } = this.analysisByZoom(o, e2), a2 = {
      x: s.x - t.x,
      y: s.y - t.y
    };
    return {
      x: a2.x / o,
      y: a2.y / o
    };
  }
  getClientCoordinateByCanvasCoordinate(e2) {
    const o = this.options.canvasZoom / 100, { NMCanvasStart: t } = this.analysisByZoom(o), s = {
      x: e2.x * o + t.x,
      y: e2.y * o + t.y
    };
    return {
      x: s.x + this.options.canvasOffset.x,
      y: s.y + this.options.canvasOffset.y
    };
  }
  analysisByZoom(e2, o) {
    const t = {
      NMViewPosition: { x: 0, y: 0 },
      NMViewCenter: { x: 0, y: 0 },
      NMCanvasCenter: { x: 0, y: 0 },
      NMCanvasStart: { x: 0, y: 0 },
      NMCanvasEnd: { x: 0, y: 0 },
      NMZoomCenter: { x: 0, y: 0 },
      NMViewBuff: { x: 0, y: 0 },
      NMCanvasOffsetBuff: { x: 0, y: 0 },
      NMCanvasSize: { width: 0, height: 0 }
    }, s = this.$dom.getBoundingClientRect();
    t.NMViewPosition.x = s.left, t.NMViewPosition.y = s.top, t.NMViewCenter.x = s.width / 2, t.NMViewCenter.y = s.height / 2;
    const a2 = this.options.canvasSize.width * e2, d = this.options.canvasSize.height * e2;
    t.NMCanvasCenter.x = this.options.canvasOffset.x + this.options.canvasSize.width / 2, t.NMCanvasCenter.y = this.options.canvasOffset.y + this.options.canvasSize.height / 2, t.NMCanvasStart.x = t.NMCanvasCenter.x - a2 / 2, t.NMCanvasStart.y = t.NMCanvasCenter.y - d / 2, t.NMCanvasEnd.x = t.NMCanvasCenter.x + a2 / 2, t.NMCanvasEnd.y = t.NMCanvasCenter.y + d / 2, t.NMZoomCenter.x = t.NMViewCenter.x, t.NMZoomCenter.y = t.NMViewCenter.y, o && (t.NMZoomCenter.x = o.x - t.NMViewPosition.x, t.NMZoomCenter.y = o.y - t.NMViewPosition.y);
    let l = t.NMViewCenter.x - t.NMCanvasCenter.x, c = t.NMViewCenter.y - t.NMCanvasCenter.y;
    return o && (l = t.NMZoomCenter.x - t.NMCanvasCenter.x, c = t.NMZoomCenter.y - t.NMCanvasCenter.y), t.NMViewBuff.x = l, t.NMViewBuff.y = c, t.NMCanvasSize.width = a2, t.NMCanvasSize.height = d, t;
  }
  showZoomCenter(e2, o) {
    if (!this.$dom)
      return { buff_x: 0, buff_y: 0 };
    const t = this.options.canvasZoom / 100, s = this.analysisByZoom(t, e2), a2 = (this.options.canvasZoom + o) / 100, d = this.analysisByZoom(a2, e2), l = a2 / t, c = 0, h = 0, f2 = a2 / t, r = 0, m = 0;
    this.zoomCenter_of_newSize.x = l * s.NMViewBuff.x + h * s.NMViewBuff.y + r, this.zoomCenter_of_newSize.y = c * s.NMViewBuff.x + f2 * s.NMViewBuff.y + m;
    const y = s.NMViewBuff.x - this.zoomCenter_of_newSize.x, x = s.NMViewBuff.y - this.zoomCenter_of_newSize.y;
    this.zoomCenter_of_newSize.x += s.NMCanvasCenter.x, this.zoomCenter_of_newSize.y += s.NMCanvasCenter.y;
    let g = s.NMCanvasStart.x - s.NMCanvasCenter.x, b = s.NMCanvasStart.y - s.NMCanvasCenter.y, O = l * g + h * b + r, M = c * g + f2 * b + m;
    return d.NMCanvasStart.x = y + s.NMCanvasCenter.x + O, d.NMCanvasStart.y = y + s.NMCanvasCenter.y + M, g = s.NMCanvasEnd.x - s.NMCanvasCenter.x, b = s.NMCanvasEnd.y - s.NMCanvasCenter.y, O = l * g + h * b + r, M = c * g + f2 * b + m, d.NMCanvasEnd.x = y + s.NMCanvasCenter.x + O, d.NMCanvasEnd.y = y + s.NMCanvasCenter.y + M, s.NMCanvasOffsetBuff.x = y, s.NMCanvasOffsetBuff.y = x, {
      buff_x: y,
      buff_y: x
    };
  }
};
var Tt = class extends $t {
  constructor(i, e2) {
    super(i, e2);
  }
  async doLayout() {
    if (!this.layouter) {
      u2("no layouter");
      return;
    }
    if (!this.graphData.rootNode) {
      u2("Cant find rootNode!");
      return;
    }
    this.options.showMaskWhenLayouting && this.loading(), await ct(200), this.options.showMaskWhenLayouting && this.clearLoading(), u2("node size：", this.graphData.nodes.length);
    const i = this.options.useAnimationWhenExpanded;
    this.disableNextLayoutAnimation && (this.options.useAnimationWhenExpanded = false), this.layouter.requireLinks && this.layouter.setLinks(this.getLinks()), await this.layouter.placeNodes(this.graphData.nodes, this.graphData.rootNode), this.options.useAnimationWhenExpanded = i, this.disableNextLayoutAnimation = false, this._dataUpdated();
  }
  async refresh(i = true) {
    this.resetViewSize(), this.disableNextLayoutAnimation = true, this._dataUpdated(), i && await this.doLayout(), u2("placeOtherNodes"), await this.placeOtherNodes(), u2("placeOtherNodes ok!"), await this.playShowEffect();
  }
  async playShowEffect() {
    if (this.graphData.nodes.length === 0) {
      u2("relation-graph:move to center: data not ready!");
      return;
    }
    if (u2("playShowEffect:", this.options.moveToCenterWhenRefresh, this.options.zoomToFitWhenRefresh), this.graphData.rootNode && Number.isNaN(this.graphData.rootNode.x)) {
      u2("rootNode.x is NaN, graph is currently hidden?");
      return;
    }
    this.options.moveToCenterWhenRefresh ? await this.moveToCenter() : (this.setCanvasCenter(0, 0), this._dataUpdated()), await this.zoomToFitWhenRefresh();
  }
  async moveToCenter() {
    if (this.options.useAnimationWhenRefresh) {
      const i = this.getNodesCenter();
      u2("center:", i.x, i.y);
      const e2 = this.getGraphOffet();
      u2("centerOffset:", e2.offset_x, e2.offset_y);
      const o = this.options.viewSize.width / 2 - i.x + e2.offset_x, t = this.options.viewSize.height / 2 - i.y + e2.offset_y;
      await this.animateGoto(o, t, 500), this._dataUpdated();
    } else {
      const i = this.getNodesCenter();
      this.setCanvasCenter(i.x, i.y), this._dataUpdated();
    }
  }
  async zoomToFitWhenRefresh() {
    this.options.zoomToFitWhenRefresh && await this.zoomToFit();
  }
  async placeOtherNodes() {
    const i = [];
    this.graphData.rootNode && this.findGroupNodes(this.graphData.rootNode, i);
    const e2 = [], o = [];
    this.graphData.nodes.forEach((t) => {
      i.includes(t) || (this.options.placeSingleNode && (!t.targetNodes || t.targetNodes.length === 0) && t.fixed !== true ? (t.x = Math.floor(Math.random() * 200) - 100, t.y = Math.floor(Math.random() * 200) - 100, t.lot || (t.lot = { childs: [] }), t.lot.placed = true, t.singleNode = true, o.push(t)) : e2.push(t));
    }), this.options.placeSingleNode && this.options.layoutName !== "fixed" && this.placeSingleNodes(o), this.options.placeOtherGroup && this.options.layoutName !== "fixed" && (await this.placeOtherGroup(e2, i), this._dataUpdated());
  }
  placeSingleNodes(i) {
    if (i.length > 0) {
      u2("sigle nodes:", i.length);
      const e2 = new ye({ layoutName: "force" }, this.options);
      e2.allNodes = this.graphData.nodes, e2.fastStart = true, e2.justLayoutSingleNode = true, e2.maxLayoutTimes = 100, e2.byLine = false, e2.autoLayout(true);
    }
  }
  async placeOtherGroup(i, e2) {
    if (i.length > 0) {
      u2("[placeOtherGroup]notPlacedNodes nodes:", i.length);
      const o = JSON.parse(JSON.stringify(this.layouter.layoutOptions)), t = Ce(o, this.options);
      t.isMainLayouer = false;
      const s = i[0], a2 = this.getStuffSize(e2);
      u2("[placeOtherGroup]placeOtherGroup:", t.layoutOptions.layoutName, "root:", s.text);
      let d = t.layoutOptions.layoutName.includes("tree") ? 300 : 600;
      if (t.layoutOptions.layoutName === "force") {
        const h = t;
        h.force_node_repulsion = 0.2, h.force_line_elastic = 1.5, d = 100;
      }
      s.x = a2.maxX + d, s.y = 0, t.layoutOptions.fixedRootNode = true;
      const l = [];
      this.findGroupNodes(s, l), u2("[placeOtherGroup]thisGroupNodes:", i.length), this.layouter.requireLinks && this.layouter.setLinks(this.getLinks()), await t.placeNodes(l, s), e2.push(...l);
      const c = [];
      i.forEach((h) => {
        e2.includes(h) || c.push(h);
      }), await this.placeOtherGroup(c, e2), this._dataUpdated();
    }
  }
  async zoomToFit(i) {
    const e2 = this.getStuffSize(), o = this.options.viewSize.width / e2.width, t = this.options.viewSize.height / e2.height, s = Math.min(o, t, 1);
    u2("zoomToFit:", { stuffSize: e2, zoomPercent: s, zoomPercentX: o, zoomPercentY: t, viewSize: this.options.viewSize }), this.options.useAnimationWhenRefresh ? (await this.animateToZoom(s * 100, 300), this._dataUpdated(), i && i()) : (this.setZoom(s * 100), this._dataUpdated(), i && i());
  }
  async animateGoto(i, e2, o) {
    return new Promise((t, s) => {
      u2("animateGoto:", i, e2);
      const a2 = i - this.options.canvasOffset.x, d = e2 - this.options.canvasOffset.y, l = o, c = 5, h = Math.round(a2 / c), f2 = Math.round(d / c), r = l / c;
      this.animateStepAction(0, r, c, () => {
        this.options.canvasOffset.x += h, this.options.canvasOffset.y += f2, this._dataUpdated();
      }, () => {
        t();
      });
    });
  }
  async animateToZoom(i, e2) {
    return new Promise((o, t) => {
      const s = i - this.options.canvasZoom, a2 = e2, d = 5, l = Math.round(s / d), c = a2 / d;
      u2("animateToZoom:", s, l), this.animateStepAction(0, c, d, () => {
        this.zoom(l), this._dataUpdated();
      }, () => {
        this.setZoom(i), this._dataUpdated(), o();
      });
    });
  }
  animateStepAction(i, e2, o, t, s) {
    i < o ? (t(i, o), setTimeout(() => {
      this.animateStepAction(i + 1, e2, o, t, s);
    }, e2)) : s();
  }
  toggleAutoLayout() {
    this.options.autoLayouting = !this.options.autoLayouting, u2("toggleAutoLayout:to:", this.options.autoLayouting), this.options.autoLayouting ? this.startAutoLayout() : this.stopAutoLayout();
  }
  startAutoLayout() {
    this.options.autoLayouting = true, this.layouter.autoLayout ? this.layouter.autoLayout(true, this.isReact && (() => {
      this._dataUpdated();
    })) : u2("Current layout not support stop()");
  }
  stopAutoLayout() {
    this.options.autoLayouting = false, this.layouter.stop ? this.layouter.stop() : u2("Current layout not support stop()");
  }
};
var le = { x: 0, y: 0 };
var re = { x: 0, y: 0 };
var ce = { x: 0, y: 0 };
var Pe;
var Ee;
var He = (n) => {
  const i = {
    clientX: 0,
    clientY: 0
  };
  if (ie(n)) {
    const e2 = n.touches || n.targetTouches;
    if (!e2)
      throw new Error("error targetTouches");
    i.clientX = e2[0].clientX, i.clientY = e2[0].clientY;
  } else
    i.clientX = n.clientX, i.clientY = n.clientY;
  return i;
};
var X = {
  startDrag(n, i, e2, o) {
    o ? Pe = (t, s, a2) => {
      const d = t - ce.x, l = s - ce.y;
      o(d, l, re, ce, a2);
    } : Pe = (t, s) => {
      le.x = re.x + (t - ce.x), le.y = re.y + (s - ce.y);
    }, Ee = e2, le = i, re.x = le.x, re.y = le.y, u2("[canvas]onDragStart...", ie(n), n);
    try {
      const t = He(n);
      ce.x = t.clientX, ce.y = t.clientY, ie(n) ? (document.body.addEventListener("touchmove", X.onNodeMove), document.body.addEventListener("touchend", X.onNodeDragend), n.preventDefault()) : (document.body.addEventListener("mousemove", X.onNodeMove), document.body.addEventListener("mouseup", X.onNodeDragend));
    } catch (t) {
      console.error(t.message);
    }
  },
  onNodeMove(n) {
    const i = He(n);
    Pe(i.clientX, i.clientY, n);
  },
  onNodeDragend(n) {
    ie(n) ? (document.body.removeEventListener("touchmove", X.onNodeMove), document.body.removeEventListener("touchend", X.onNodeDragend)) : (document.body.removeEventListener("mousemove", X.onNodeMove), document.body.removeEventListener("mouseup", X.onNodeDragend)), u2("[canvas]onDragend...", ie(n), n), Ee && Ee(
      le.x - re.x,
      le.y - re.y,
      n
    );
  }
};
var Dt = Object.freeze(Object.defineProperty({
  __proto__: null,
  default: X
}, Symbol.toStringTag, { value: "Module" }));
var Wt = class extends Tt {
  constructor(e2, o) {
    super(e2, o);
    _(this, "prevClickTime", 0);
    _(this, "movingListener");
    _(this, "step1EventTime", 0);
    _(this, "onCreateLineCallback");
  }
  setDefaultLineShape(e2) {
    this.options.defaultLineShape = e2;
  }
  setDefaultJunctionPoint(e2) {
    this.options.defaultJunctionPoint = e2;
  }
  setCheckedNode(e2) {
    this.options.checkedNodeId = e2;
  }
  setCheckedLinkAndLine(e2, o) {
    this.options.checkedLinkId = e2.seeks_id, this.options.checkedLineId = o ? o.id : "";
  }
  clearChecked() {
    this.options.checkedNodeId = "", this.options.checkedLineId = "", this.options.checkedLinkId = "";
  }
  selectNode(e2, o) {
    e2.selected = o;
  }
  flashNode(e2, o) {
    e2.flashing = o;
  }
  updateNodeOffsetSize(e2, o, t) {
    e2.el.offsetWidth = o, e2.el.offsetHeight = t;
  }
  onNodeClick(e2, o) {
    if (Date.now() - this.prevClickTime < 200) {
      u2("[node]click abort : time < 200");
      return;
    }
    u2("[node]node click", e2.text), this.prevClickTime = Date.now(), !o.shiftKey && this.options.disableNodeClickEffect !== true && e2.disableDefaultClickEffect !== true && this.setCheckedNode(e2.id), this.options.creatingLinePlot && this.onNodeClickWhenCreatingLinePlot(e2), this.listeners.onNodeClick && this.listeners.onNodeClick(e2, o);
  }
  onLineClick(e2, o, t) {
    u2("onLineClick:", "line:", e2, "link:", o), this.options.disableLineClickEffect !== true && e2.disableDefaultClickEffect !== true && this.setCheckedLinkAndLine(o, e2), this.listeners.onLineClick && this.listeners.onLineClick(e2, o, t);
  }
  async expandOrCollapseNode(e2, o) {
    e2.expanded === false ? await this.expandNode(e2, o) : await this.collapseNode(e2, o);
  }
  setChildsFromPosition(e2, o) {
    e2.lot.childs.forEach((t) => {
      t.x = o.x, t.y = o.y, this.setChildsFromPosition(t, o);
    });
  }
  async expandNode(e2, o) {
    u2("onNodeExpand:", e2), e2.expanded = true, this.options.useAnimationWhenExpanded && (await this.layouter.snapshotBeforeAnimation(), this.setChildsFromPosition(e2, e2), await this.layouter.animationLayout(false)), u2("relayout check:", this.options.reLayoutWhenExpandedOrCollapsed), this.options.reLayoutWhenExpandedOrCollapsed && (u2("relayout..."), await this.layouter.snapshotBeforeAnimation(), await this.doLayout()), this.listeners.onNodeExpand && this.listeners.onNodeExpand(e2, o);
  }
  setChildsToPosition(e2, o) {
    e2.lot.childs.forEach((t) => {
      t.lot.from_x = t.x, t.lot.from_y = t.y, t.lot.to_x = o.x, t.lot.to_y = o.y, this.setChildsToPosition(t, o);
    });
  }
  async collapseNode(e2, o) {
    u2("onNodeCollapse:", e2), this.options.useAnimationWhenExpanded && (await this.layouter.snapshotBeforeAnimation(), this.setChildsToPosition(e2, e2), await this.layouter.animationLayout(false)), e2.expanded = false, u2("relayout check:", this.options.reLayoutWhenExpandedOrCollapsed), this.options.reLayoutWhenExpandedOrCollapsed && (u2("relayout..."), await this.layouter.snapshotBeforeAnimation(), await this.doLayout()), this.listeners.onNodeCollapse && this.listeners.onNodeCollapse(e2, o);
  }
  onNodeDragEnd(e2, o) {
    this.listeners.onNodeDragEnd && this.listeners.onNodeDragEnd(e2, o);
  }
  onCanvasDragEnd(e2) {
    this.listeners.onCanvasDragEnd && this.listeners.onCanvasDragEnd(e2);
  }
  onCanvasClick(e2) {
    this.options.creatingLinePlot && this.onCanvasClickWhenCreatingLinePlot(e2), this.listeners.onCanvasClick && this.listeners.onCanvasClick(e2);
  }
  clickGraphMask(e2) {
    this.clearLoading();
  }
  onCanvasSelectionEnd(e2, o) {
    this.listeners.onCanvasSelectionEnd && this.listeners.onCanvasSelectionEnd(e2, o);
  }
  startCreatingNodePlot(e2, o) {
    this.options.newNodeTemplate = ve(JSON.parse(JSON.stringify($e))), this.options.creatingNodePlot = true;
    const t = ie(e2);
    this.options.showTemplateNode = !t, console.log("is touch event:", t);
    let s = (y, x) => {
      this.options.newNodeTemplate.x = y, this.options.newNodeTemplate.y = x;
    }, a2 = (y, x) => {
      const g = "s-" + Date.now();
      this.addNodes([{
        id: g,
        text: this.options.newNodeTemplate.text,
        x: y,
        y: x
      }]);
    };
    o && o.templateText && (this.options.newNodeTemplate.text = o.templateText), o && o.templateStyleClass && (this.options.newNodeTemplate.styleClass = o.templateStyleClass), o && o.templateNode && Object.keys(o.templateNode).forEach((y) => {
      this.options.newNodeTemplate[y] = o.templateNode[y];
    }), o && o.templateMove && (s = o.templateMove), o && o.onCreateNode && (a2 = o.onCreateNode);
    const d = this.$dom.getBoundingClientRect();
    u2("[CreatingNodePlot]startCreatingNodePlot:");
    const l = ze(e2), c = l.clientX - d.x + 10, h = l.clientY - d.y + 10;
    t || s(c, h);
    const f2 = (y) => {
      const x = this.$dom.getBoundingClientRect();
      u2("[CreatingNodePlot]objectTemplateMove");
      const g = y.clientX - x.x + 10, b = y.clientY - x.y + 10;
      s(g, b);
    }, r = (y) => {
      u2("[CreatingNodePlot]user abort!"), this.$dom.removeEventListener("mousemove", f2), this.$dom.removeEventListener("click", m), this.$dom.removeEventListener("contextmenu", r), this.options.creatingNodePlot = false;
    }, m = (y) => {
      let x = false;
      if (this.options.creatingNodePlot || (x = true), this.$dom.removeEventListener("mousemove", f2), this.$dom.removeEventListener("click", m), this.$dom.removeEventListener("contextmenu", r), this.options.creatingNodePlot = false, x) {
        u2("[CreatingNodePlot]action be abort!");
        return;
      }
      const g = ze(y), b = g.clientX - d.x + 10, O = g.clientY - d.y + 10;
      if (o && o.disableClickCreate && Math.abs(c - b) < 5 && Math.abs(h - O) < 5) {
        u2("[CreatingNodePlot]create node be abort!");
        return;
      }
      const M = this.getCanvasCoordinateByClientCoordinate({ x: g.clientX, y: g.clientY });
      u2("[CreatingNodePlot]objectBePlaced:", M), a2(M.x, M.y);
    };
    setTimeout(() => {
      this.$dom.addEventListener("click", m), this.$dom.addEventListener("contextmenu", r);
    }, 300), t || this.$dom.addEventListener("mousemove", f2);
  }
  startCreatingLinePlot(e2, o) {
    const t = ie(e2);
    o && o.onCreateLine && (this.onCreateLineCallback = o.onCreateLine), o && o.template && Object.assign(this.options.newLineTemplate, o.template), this.options.newLinkTemplate.fromNode = null, o && o.fromNode && (this.options.newLinkTemplate.toNode.x = o.fromNode.x + 50, this.options.newLinkTemplate.toNode.y = o.fromNode.y + 50, this.options.newLinkTemplate.fromNode = o.fromNode, this.step1EventTime = Date.now()), this.options.creatingLinePlot = true, this.options.newLinkTemplate.toNodeObject = null, u2("[CreatingLinePlot]startCreatingLinePlot:", t), t || (u2("[CreatingLinePlot]Listener move"), this.movingListener = this.onMovingWhenCreatingLinePlot.bind(this), this.$dom.addEventListener("mousemove", this.movingListener));
  }
  stopCreatingLinePlot() {
    u2("[CreatingLinePlot]stop CreatingLinePlot!"), this.options.creatingLinePlot = false, this.options.newLinkTemplate.fromNode = null, this.options.newLinkTemplate.toNodeObject = null, this.onCreateLineCallback = void 0, this.$dom.removeEventListener("mousemove", this.movingListener);
  }
  onMovingWhenCreatingLinePlot(e2) {
    if (u2("[CreatingLinePlot]mousemove"), this.options.newLinkTemplate.fromNode) {
      const o = this.getCanvasCoordinateByClientCoordinate({
        x: e2.clientX,
        y: e2.clientY
      });
      this.options.newLinkTemplate.toNode.x = o.x, this.options.newLinkTemplate.toNode.y = o.y;
    }
  }
  onCanvasClickWhenCreatingLinePlot(e2) {
    if (Date.now() - this.step1EventTime < 500) {
      u2("[CreatingLinePlot]step1EventTime:", this.step1EventTime);
      return;
    }
    if (!this.options.newLinkTemplate.fromNode) {
      u2("[CreatingLinePlot]CreatingLinePlot:fromNode not set!");
      return;
    }
    if (!this.options.newLinkTemplate.toNodeObject) {
      u2("[CreatingLinePlot]CreatingLinePlot:toNodeObject not set!");
      const o = ze(e2), t = this.getCanvasCoordinateByClientCoordinate({ x: o.clientX, y: o.clientY });
      this.onCreateLine(this.options.newLinkTemplate.fromNode, t);
    }
    this.stopCreatingLinePlot();
  }
  onNodeClickWhenCreatingLinePlot(e2) {
    this.options.newLinkTemplate.fromNode ? (u2("[CreatingLinePlot]step 2: set toNodeObjecct:", this.options.newLinkTemplate.fromNode, e2), this.options.newLinkTemplate.toNodeObject = e2, this.onCreateLine(this.options.newLinkTemplate.fromNode, e2), this.stopCreatingLinePlot()) : (u2("[CreatingLinePlot]step 1: set fromNode:", e2), this.options.newLinkTemplate.fromNode = e2, this.options.newLinkTemplate.toNode.x = e2.x + 50, this.options.newLinkTemplate.toNode.y = e2.y + 50, this.step1EventTime = Date.now());
  }
  onCreateLine(e2, o) {
    u2("[CreatingLinePlot][fire-event]onCreateLine:", e2, o), this.onCreateLineCallback && this.onCreateLineCallback(e2, o, this.options.newLineTemplate);
  }
  isNode(e2) {
    const o = Ne(e2, "rel-node-peel", "rel-map");
    return o ? this.getNodeById(o.dataset.id) : void 0;
  }
  isLink(e2) {
    const o = Ne(e2, "rel-link-peel", "rel-map");
    return o ? this.getLinkById(o.dataset.id) : void 0;
  }
  onContextmenu(e2) {
    let o = "canvas", t = this.isNode(e2.target);
    t ? o = "node" : (t = this.isLink(e2.target), t && (o = "link")), u2("contextmenu:objectType", o, t), this.listeners.onContextmenu && this.listeners.onContextmenu(e2, o, t);
  }
  fullscreen(e2) {
    e2 === void 0 ? (this.options.fullscreen = !this.options.fullscreen, import_screenfull.default.toggle(this.$dom).then(() => {
      setTimeout(() => {
        this.refreshNVAnalysisInfo();
      }, 1e3);
    })) : (this.options.fullscreen = e2, setTimeout(() => {
      this.refreshNVAnalysisInfo();
    }, 1e3));
  }
  async focusNodeById(e2) {
    let o;
    this.graphData.nodes.forEach((t) => {
      t.id === e2 && (o = t);
    }), o && await this.handleSelect(o);
  }
  async focusRootNode() {
    u2("relation-graph:focusRootNode"), this.graphData.rootNode && await this.handleSelect(this.graphData.rootNode);
  }
  async handleSelect(e2) {
    u2("checked:", e2), scrollTo({
      top: this.$dom.offsetTop
    }), await this.animateToZoom(100, 300);
    const o = e2.width || 50, t = e2.height || 50, s = e2.x * -1 + this.options.viewSize.width / 2 - o / 2, a2 = e2.y * -1 + this.options.viewSize.height / 2 - t / 2;
    await this.animateGoto(s, a2, 500), this.options.checkedNodeId = e2.id, this.refreshNVAnalysisInfo();
  }
  onMouseWheel(e2) {
    if (this.options.disableZoom)
      return e2.cancelBubble = false, true;
    try {
      e2.cancelBubble = true, e2.preventDefault(), e2.stopPropagation();
    } catch {
    }
    const o = {
      x: e2.clientX,
      y: e2.clientY
    };
    let t = e2.deltaY;
    t === void 0 && (t = e2.wheelDelta);
    const s = -1;
    t > 0 ? this.zoom(5 * s, o) : this.zoom(-5 * s, o);
  }
  onLineDragStart(e2, o) {
    u2("onLineDragStart...");
    const t = { x: e2.fromNode.x, y: e2.fromNode.y }, s = { x: e2.toNode.x, y: e2.toNode.y }, a2 = (d, l, c, h, f2) => {
      e2.fromNode.x = t.x + d / (this.options.canvasZoom / 100), e2.fromNode.y = t.y + l / (this.options.canvasZoom / 100), e2.toNode.x = s.x + d / (this.options.canvasZoom / 100), e2.toNode.y = s.y + l / (this.options.canvasZoom / 100), this._dataUpdated();
    };
    X.startDrag(o, { x: 0, y: 0 }, (...d) => {
      this.onLineDragEnd(...d);
    }, a2);
  }
  onLineDragEnd(e2, o, t) {
    u2("onLineDragEnd");
  }
  onCanvasDragStart(e2) {
    if (u2("[canvas]onCanvasDragStart..."), this.options.disableDragCanvas || e2.shiftKey) {
      this.startCreateSelection(e2);
      return;
    }
    if (!this.options.disableDragLine) {
      const t = this.isLink(e2.target);
      if (t) {
        this.onLineDragStart(t, e2);
        return;
      }
    }
    let o;
    if (ie(e2)) {
      let t, s = 1;
      o = (a2, d, l, c, h) => {
        const f2 = h.touches || h.targetTouches, r = f2[0];
        if (f2 && f2.length > 1) {
          h.preventDefault();
          const m = f2[1];
          t || (t = { x: m.clientX, y: m.clientY }, s = this.options.canvasZoom);
          const y = { x: r.clientX, y: r.clientY }, x = { x: m.clientX, y: m.clientY }, g = Math.hypot(t.x - c.x, t.y - c.y), O = Math.hypot(x.x - y.x, x.y - y.y) / g, M = s * O;
          this.setZoom(M), this._dataUpdated();
        } else {
          const m = r.clientX, y = r.clientY;
          let x = l.x + (m - c.x), g = l.y + (y - c.y);
          this.options.useHorizontalView ? (x = l.x + (y - c.y), g = l.y - (m - c.x), this.setCanvasOffset(x, g)) : this.setCanvasOffset(x, g), this._dataUpdated();
        }
      };
    } else
      o = (t, s, a2, d, l) => {
        const c = a2.x + t, h = a2.y + s;
        this.setCanvasOffset(c, h), this._dataUpdated();
      };
    X.startDrag(e2, this.options.canvasOffset, (...t) => {
      this.onCanvasDragStop(...t);
    }, o);
  }
  onCanvasDragStop(e2, o, t) {
    if (u2("[canvas]onCanvasDragStop..."), this.options.creatingSelection) {
      console.log("creatingSelection end"), this.options.creatingSelection = false, this._dataUpdated(), this.onCanvasSelectionEnd(this.options.selectionView, t);
      return;
    }
    if (e2 === 0 && o === 0) {
      u2("[canvas]click2"), this._dataUpdated(), this.onCanvasClick(t);
      return;
    }
    Math.abs(e2) + Math.abs(o) > 6 ? setTimeout(() => {
      u2("[canvas]onDragEnd1"), this._dataUpdated(), this.onCanvasDragEnd(t);
    }, 100) : (u2("[canvas]onDragEnd2"), this._dataUpdated(), this.onCanvasDragEnd(t));
  }
  startCreateSelection(e2) {
    let o = false;
    const t = (s, a2, d, l, c) => {
      if (!o && Math.abs(s) + Math.abs(a2) > 6 && (o = true, this.options.creatingSelection = true, this.options.selectionView.x = l.x, this.options.selectionView.y = l.y), o) {
        const h = this.getBoundingClientRect();
        s < 0 ? (this.options.selectionView.x = l.x + s - h.x, this.options.selectionView.width = Math.abs(s)) : (this.options.selectionView.x = l.x - h.x, this.options.selectionView.width = s), a2 < 0 ? (this.options.selectionView.y = l.y + a2 - h.y, this.options.selectionView.height = Math.abs(a2)) : (this.options.selectionView.y = l.y - h.y, this.options.selectionView.height = a2);
      }
      this._dataUpdated();
    };
    X.startDrag(e2, { x: 0, y: 0 }, (...s) => {
      this.onCanvasDragStop(...s);
    }, t);
  }
  onNodeDragStart(e2, o) {
    if (this.options.disableDragNode || e2.disableDrag)
      return;
    isNaN(e2.x) && (e2.x = 0), isNaN(e2.y) && (e2.y = 0);
    const t = (s, a2, d) => {
      this.onNodeDraged(e2, s, a2, d), this._dataUpdated();
    };
    X.startDrag(o, e2, t, (s, a2, d) => {
      let l = s / (this.options.canvasZoom / 100) + d.x, c = a2 / (this.options.canvasZoom / 100) + d.y;
      this.setNodePosition(e2, l, c), this.options.useHorizontalView ? (l = a2 / (this.options.canvasZoom / 100) + d.x, c = -s / (this.options.canvasZoom / 100) + d.y, this.setNodePosition(e2, l, c)) : this.setNodePosition(e2, l, c), this._dataUpdated();
    });
  }
  onNodeDraged(e2, o, t, s) {
    if (o === 0 && t === 0) {
      u2("[node]node click by drag"), this.onNodeClick(e2, s);
      return;
    }
    this.options.isMoveByParentNode && e2.lot.childs.forEach((a2) => {
      a2.x += o, a2.y += t;
    }), Math.abs(o) + Math.abs(t) > 6 ? (this.prevClickTime = Date.now(), setTimeout(() => {
      u2("[node]onDragEnd2"), this.onNodeDragEnd(e2, s);
    }, 100)) : (u2("[node]onDragEnd1"), this.onNodeDragEnd(e2, s));
  }
};
var Ft = class extends Wt {
  constructor(i, e2) {
    super(i, e2);
  }
  dataUpdated() {
    this.isReact ? this._dataUpdated() : (this.zoom(1), this.zoom(-1));
  }
  async setOptions(i, e2 = false) {
    if (this.disableNextLayoutAnimation = true, this._setOptions(i), e2 === true) {
      u2("setOptions:justUpdateOptionsValue");
      return;
    }
    this.initLayouter(), this.resetViewSize(), await this.doLayout(), this.resetViewSize();
  }
  setLayouter(i) {
    u2("setLayouterClass::", i), this.userLayouerClass = i, this.layouter = this.userLayouerClass;
  }
  async switchLayout(i, e2 = true, o = false) {
    this.listeners.beforeChangeLayout && this.listeners.beforeChangeLayout(i) === false && (e2 = false);
    const t = this.layouter ? this.layouter.allNodes : [], s = this.layouter && this.layouter.rootNode;
    u2("[change layout]switchLayout"), this.stopAutoLayout(), ke(i, this.options), this._initLayoutByLayoutOptions(i), this.layouter.allNodes = t, this.layouter.rootNode = s, e2 ? await this.refresh() : (o || (this.disableNextLayoutAnimation = true), await this.doLayout());
  }
  async setJsonData(i, e2 = false) {
    this._setJsonData(i);
    const o = i.rootId;
    if (o && (this.graphData.rootNode = this.graphData.nodes.find((t) => t.id === o)), !this.graphData.rootNode && this.graphData.nodes.length > 0 && (this.graphData.rootNode = this.graphData.nodes[0]), this.graphData.rootNode)
      this.options.defaultFocusRootNode && this.setCheckedNode(this.graphData.rootNode.id);
    else
      throw new Error("没有设置根节点[rootId]！也无法获取根节点!");
    e2 && (u2("resetViewSize:", e2), this.resetViewSize()), this.disableNextLayoutAnimation = true, await this.doLayout();
  }
  async appendJsonData(i, e2 = true) {
    u2("appendData:", i), this.loadGraphJsonData(i), e2 && (this.disableNextLayoutAnimation = true, await this.doLayout());
  }
};
var Ue = class extends Ft {
  constructor(i, e2) {
    super(i, e2);
  }
  ready() {
    this.initLayouter(), this.resetViewSize(), this.refreshNVAnalysisInfo();
  }
};
var Ht = defineComponent({
  __name: "RGNodeExpandHolder",
  props: {
    nodeProps: null,
    expandButtonClass: null,
    expandOrCollapseNode: { type: Function },
    expandHolderPosition: null,
    color: null
  },
  setup(n) {
    return (i, e2) => (openBlock(), createElementBlock("div", {
      class: normalizeClass([["c-expand-positon-" + n.expandHolderPosition], "c-btn-open-close"])
    }, [
      createBaseVNode("span", {
        class: normalizeClass(n.expandButtonClass),
        style: normalizeStyle({ "background-color": n.color }),
        onClick: e2[0] || (e2[0] = withModifiers(
          (...o) => n.expandOrCollapseNode && n.expandOrCollapseNode(...o),
          ["stop"]
        )),
        onTouchend: e2[1] || (e2[1] = withModifiers(
          (...o) => n.expandOrCollapseNode && n.expandOrCollapseNode(...o),
          ["stop"]
        ))
      }, null, 38)
    ], 2));
  }
});
var Gt = ["data-id"];
var Rt = ["innerHTML"];
var Vt = ["innerHTML"];
var It = ["innerHTML"];
var Je = defineComponent({
  __name: "RGNode",
  props: {
    nodeProps: null
  },
  setup(n) {
    const i = n, e2 = ref(), o = inject(J), t = inject(j), s = computed(() => t.options), a2 = computed(() => {
      const g = i.nodeProps.borderWidth === void 0 ? s.value.defaultNodeBorderWidth : i.nodeProps.borderWidth;
      return (i.nodeProps.borderColor || s.value.defaultNodeBorderColor) + " solid " + g + "px";
    }), d = computed(() => {
      if (i.nodeProps.width === 0)
        return;
      const g = i.nodeProps.width || s.value.defaultNodeWidth;
      if (!!g)
        return g + "px";
    }), l = computed(() => {
      if (i.nodeProps.height === 0)
        return;
      const g = i.nodeProps.height || s.value.defaultNodeHeight;
      if (!!g)
        return g + "px";
    }), c = computed(() => i.nodeProps.expandHolderPosition && i.nodeProps.expandHolderPosition !== "hide" || s.value.defaultExpandHolderPosition && s.value.defaultExpandHolderPosition !== "hide" && i.nodeProps.lot.childs && i.nodeProps.lot.childs.length > 0), h = computed(() => i.nodeProps.expanded === false ? "c-expanded" : "c-collapsed"), f2 = (g) => {
      o == null || o.value.expandOrCollapseNode(i.nodeProps, g);
    }, r = () => {
      e2.value.offsetWidth === 0 && e2.value.offsetHeight === 0 || (i.nodeProps.el.offsetWidth !== e2.value.offsetWidth || i.nodeProps.el.offsetHeight !== e2.value.offsetHeight) && (o == null || o.value.updateNodeOffsetSize(
        i.nodeProps,
        e2.value.offsetWidth,
        e2.value.offsetHeight
      ));
    }, m = (g) => {
      o == null || o.value.onNodeDragStart(i.nodeProps, g);
    }, y = (g) => {
      o == null || o.value.onNodeClick(i.nodeProps, g);
    }, x = (g) => de.isAllowShowNode(g);
    return onMounted(() => {
      r();
    }), onUpdated(() => {
      r();
    }), onBeforeUnmount(() => {
      e2.value.remove();
    }), (g, b) => withDirectives((openBlock(), createElementBlock("div", {
      ref_key: "seeksRGNode$",
      ref: e2,
      style: normalizeStyle({
        left: n.nodeProps.x + "px",
        top: n.nodeProps.y + "px",
        opacity: n.nodeProps.opacity > 1 ? n.nodeProps.opacity / 100 : n.nodeProps.opacity
      }),
      class: normalizeClass(["rel-node-peel", [n.nodeProps.selected ? "rel-node-selected" : ""]]),
      "data-id": n.nodeProps.id
    }, [
      unref(c) ? renderSlot(g.$slots, "node-expand-holder", {
        key: 0,
        nodeProps: n.nodeProps,
        expandButtonClass: unref(h),
        expandOrCollapseNode: f2,
        expandHolderPosition: n.nodeProps.expandHolderPosition || unref(s).defaultExpandHolderPosition,
        color: unref(s).defaultExpandHolderColor || n.nodeProps.color || unref(s).defaultNodeColor
      }, () => [
        createVNode(Ht, {
          nodeProps: n.nodeProps,
          expandButtonClass: unref(h),
          expandOrCollapseNode: f2,
          expandHolderPosition: n.nodeProps.expandHolderPosition || unref(s).defaultExpandHolderPosition,
          color: unref(s).defaultExpandHolderColor || n.nodeProps.color || unref(s).defaultNodeColor
        }, null, 8, ["nodeProps", "expandButtonClass", "expandHolderPosition", "color"])
      ]) : createCommentVNode("", true),
      n.nodeProps.html ? (openBlock(), createElementBlock("div", {
        key: 1,
        innerHTML: n.nodeProps.html,
        onClick: b[0] || (b[0] = (O) => y(O)),
        onMousedown: b[1] || (b[1] = withModifiers((O) => m(O), ["left", "stop"])),
        onTouchstart: b[2] || (b[2] = withModifiers((O) => m(O), ["stop"]))
      }, null, 40, Rt)) : (openBlock(), createElementBlock("div", {
        key: 2,
        class: normalizeClass([["rel-node-shape-" + (n.nodeProps.nodeShape === void 0 ? unref(s).defaultNodeShape : n.nodeProps.nodeShape), "rel-node-type-" + n.nodeProps.type, n.nodeProps.id === unref(s).checkedNodeId ? "rel-node-checked" : "", n.nodeProps.flashing ? "rel-node-flashing" : "", n.nodeProps.styleClass, n.nodeProps.innerHTML ? "rel-diy-node" : ""], "rel-node"]),
        style: normalizeStyle({ "background-color": n.nodeProps.color === void 0 ? unref(s).defaultNodeColor : n.nodeProps.color, color: n.nodeProps.fontColor === void 0 ? unref(s).defaultNodeFontColor : n.nodeProps.fontColor, border: unref(a2), width: unref(d), height: unref(l) }),
        onClick: b[3] || (b[3] = (O) => y(O)),
        onMousedown: b[4] || (b[4] = withModifiers((O) => m(O), ["left", "stop"])),
        onTouchstart: b[5] || (b[5] = withModifiers((O) => m(O), ["stop"]))
      }, [
        unref(s).hideNodeContentByZoom === true && unref(s).canvasZoom < 40 ? createCommentVNode("", true) : renderSlot(g.$slots, "node", {
          key: 0,
          node: n.nodeProps
        }, () => [
          n.nodeProps.innerHTML ? (openBlock(), createElementBlock("div", {
            key: 1,
            innerHTML: n.nodeProps.innerHTML
          }, null, 8, It)) : (openBlock(), createElementBlock("div", {
            key: 0,
            style: normalizeStyle({ color: n.nodeProps.fontColor || unref(s).defaultNodeFontColor }),
            class: "c-node-text"
          }, [
            createBaseVNode("span", {
              innerHTML: n.nodeProps.text
            }, null, 8, Vt)
          ], 4))
        ])
      ], 38))
    ], 14, Gt)), [
      [vShow, x(n.nodeProps)]
    ]);
  }
});
var Yt = ["xlink:href"];
var Xt = ["transform"];
var jt = ["xlink:href", "startOffset", "text-anchor"];
var Zt = defineComponent({
  __name: "RGLineTextByPath",
  props: {
    link: null,
    relation: null,
    relationIndex: null
  },
  setup(n) {
    const i = n, e2 = inject(J), o = inject(j), t = computed(() => o.options), s = computed(() => i.relation.id === (e2 == null ? void 0 : e2.value.options.checkedLineId)), a2 = computed(() => {
      const f2 = i.relation.textOffset_x || t.value.defaultLineTextOffset_x || 0, r = i.relation.textOffset_y || t.value.defaultLineTextOffset_y || -8;
      return `translate(${f2},${r})`;
    }), d = computed(() => "#" + t.value.instanceId + "-" + i.link.seeks_id + "-" + i.relationIndex), l = computed(() => i.relation.lineShape === 4 || t.value.defaultLineShape === 4 ? "start" : "middle"), c = computed(() => {
      if (i.relation.lineShape === 4 || t.value.defaultLineShape === 4)
        if (t.value.layoutDirection === "v") {
          const f2 = i.link.fromNode.x, r = i.link.toNode.x;
          return Math.abs(r - f2) + 43;
        } else {
          const f2 = i.link.fromNode.y, r = i.link.toNode.y;
          return Math.abs(r - f2) + 43;
        }
      return "50%";
    }), h = (f2, r) => {
      e2 == null || e2.value.onLineClick(f2, i.link, r);
    };
    return (f2, r) => (openBlock(), createElementBlock("g", null, [
      createBaseVNode("use", {
        "xlink:href": unref(d),
        class: normalizeClass(["c-rg-line", [
          n.relation.styleClass,
          n.relation.dashType ? "rg-line-dashtype-" + n.relation.dashType : void 0,
          n.relation.animation ? "rg-line-anm-" + n.relation.animation : void 0,
          unref(s) ? "c-rg-line-checked" : void 0
        ]]),
        onTouchstart: r[0] || (r[0] = (m) => h(n.relation, m)),
        onClick: r[1] || (r[1] = (m) => h(n.relation, m))
      }, null, 42, Yt),
      createBaseVNode("g", { transform: unref(a2) }, [
        createBaseVNode("text", {
          class: normalizeClass(["c-rg-line-text", { "c-rg-line-text-checked": unref(s) }]),
          style: normalizeStyle({
            opacity: n.relation.opacity,
            fill: n.relation.fontColor ? n.relation.fontColor : unref(t).defaultLineFontColor ? unref(t).defaultLineFontColor : n.relation.color ? n.relation.color : unref(t).defaultLineColor
          }),
          onTouchstart: r[2] || (r[2] = (m) => h(n.relation, m)),
          onClick: r[3] || (r[3] = (m) => h(n.relation, m))
        }, [
          createBaseVNode("textPath", {
            "xlink:href": unref(d),
            startOffset: unref(c),
            "text-anchor": unref(l),
            method: "align",
            spacing: "auto"
          }, toDisplayString(n.relation.text), 9, jt)
        ], 38)
      ], 8, Xt)
    ]));
  }
});
var Ut = ["d", "stroke", "marker-start", "marker-end"];
var Jt = ["transform"];
var qt = ["x", "y"];
var qe = defineComponent({
  __name: "RGLineSmart",
  props: {
    link: null,
    relation: null,
    relationIndex: null
  },
  setup(n) {
    const i = n, e2 = inject(J), o = inject(j), t = computed(() => o.options), s = computed(() => i.relation.id === t.value.checkedLineId), a2 = computed(() => i.relation.showStartArrow && (e2 == null ? void 0 : e2.value.getArrow(i.relation, i.link, true))), d = computed(() => i.relation.showEndArrow && (e2 == null ? void 0 : e2.value.getArrow(i.relation, i.link, false))), l = computed(() => {
      try {
        const { path: h, textPosition: f2 } = e2 == null ? void 0 : e2.value.createLinePath(
          i.link,
          i.relation,
          i.relationIndex
        );
        let r = {};
        try {
          r = e2 == null ? void 0 : e2.value.getTextTransform(
            i.relation,
            f2.x,
            f2.y,
            f2.rotate
          );
        } catch (m) {
          u2(m);
        }
        return {
          path: h,
          textTransform: r
        };
      } catch (h) {
        u2(h);
      }
      return { path: null, textTransform: null };
    }), c = (h, f2) => {
      e2 == null || e2.value.onLineClick(h, i.link, f2);
    };
    return (h, f2) => (openBlock(), createElementBlock("g", null, [
      createBaseVNode("path", {
        d: unref(l).path,
        class: normalizeClass(["c-rg-line", [
          n.relation.styleClass,
          n.relation.dashType ? "rg-line-dashtype-" + n.relation.dashType : void 0,
          n.relation.animation ? "rg-line-anm-" + n.relation.animation : void 0,
          unref(s) ? "c-rg-line-checked" : void 0
        ]]),
        stroke: n.relation.color ? n.relation.color : unref(t).defaultLineColor,
        style: normalizeStyle({
          opacity: n.relation.opacity,
          "stroke-width": (n.relation.lineWidth ? n.relation.lineWidth : unref(t).defaultLineWidth) + "px"
        }),
        "marker-start": unref(a2),
        "marker-end": unref(d),
        fill: "none",
        onTouchstart: f2[0] || (f2[0] = (r) => c(n.relation, r)),
        onClick: f2[1] || (f2[1] = (r) => c(n.relation, r))
      }, null, 46, Ut),
      unref(t).defaultShowLineLabel && unref(t).canvasZoom > 40 ? (openBlock(), createElementBlock("g", {
        key: 0,
        transform: unref(l).textTransform
      }, [
        (openBlock(), createElementBlock("text", {
          key: "t-" + n.relation.seeks_id,
          x: n.relation.textOffset_x || unref(t).defaultLineTextOffset_x || 0,
          y: n.relation.textOffset_y || unref(t).defaultLineTextOffset_y || 10,
          style: normalizeStyle({
            opacity: n.relation.opacity,
            fill: n.relation.fontColor ? n.relation.fontColor : unref(t).defaultLineFontColor ? unref(t).defaultLineFontColor : n.relation.color ? n.relation.color : unref(t).defaultLineColor
          }),
          class: normalizeClass(["c-rg-line-text", { "c-rg-line-text-checked": unref(s) }]),
          onTouchstart: f2[2] || (f2[2] = (r) => c(n.relation, r)),
          onClick: f2[3] || (f2[3] = (r) => c(n.relation, r))
        }, toDisplayString(n.relation.text), 47, qt))
      ], 8, Jt)) : createCommentVNode("", true)
    ]));
  }
});
var Kt = ["data-id"];
var Qt = defineComponent({
  __name: "RGLink",
  props: {
    linkProps: null
  },
  setup(n) {
    inject(J);
    const i = inject(j), e2 = computed(() => i.options), o = (t) => de.isAllowShowNode(t);
    return (t, s) => n.linkProps.isHide !== true && o(n.linkProps.fromNode) && o(n.linkProps.toNode) ? (openBlock(), createElementBlock("g", {
      key: 0,
      class: normalizeClass([[unref(e2).checkedLinkId == n.linkProps.seeks_id ? "c-rg-link-checked" : ""], "rel-link-peel"]),
      ref: "seeksRGLink",
      transform: "translate(0,0)",
      "data-id": n.linkProps.seeks_id
    }, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(n.linkProps.relations, (a2, d) => renderSlot(t.$slots, "line", {
        line: a2,
        relationIndex: d
      }, () => [
        (unref(e2).lineUseTextPath || a2.useTextPath) && a2.isHide === false ? (openBlock(), createBlock(Zt, {
          key: "l-" + a2.id,
          link: n.linkProps,
          relation: a2,
          "relation-index": d
        }, null, 8, ["link", "relation", "relation-index"])) : a2.isHide === false ? (openBlock(), createBlock(qe, {
          key: "l-" + a2.id,
          link: n.linkProps,
          relation: a2,
          "relation-index": d
        }, null, 8, ["link", "relation", "relation-index"])) : createCommentVNode("", true)
      ])), 256))
    ], 10, Kt)) : createCommentVNode("", true);
  }
});
var eo = ["id", "d", "stroke", "marker-start", "marker-end"];
var to = defineComponent({
  __name: "RGLinePath",
  props: {
    link: null,
    relation: null,
    relationIndex: null
  },
  setup(n) {
    const i = n, e2 = inject(J), o = inject(j), t = computed(() => o.options), s = computed(() => i.relation.id === t.value.checkedLineId), a2 = computed(() => {
      const { path: d, textPosition: l } = e2 == null ? void 0 : e2.value.createLinePath(
        i.link,
        i.relation,
        i.relationIndex
      );
      return d;
    });
    return (d, l) => (openBlock(), createElementBlock("path", {
      id: unref(t).instanceId + "-" + n.link.seeks_id + "-" + n.relationIndex,
      d: unref(a2),
      stroke: n.relation.color ? n.relation.color : unref(t).defaultLineColor,
      style: normalizeStyle({ opacity: n.relation.opacity, "stroke-width": (n.relation.lineWidth ? n.relation.lineWidth : unref(t).defaultLineWidth) + "px" }),
      "marker-start": n.relation.showStartArrow && d.relationGraph.getArrow(n.relation, n.link, true),
      "marker-end": n.relation.showEndArrow && d.relationGraph.getArrow(n.relation, n.link, false),
      class: normalizeClass(["c-rg-line-path", n.relation.styleClass, unref(s) ? "c-rg-line-checked" : ""]),
      fill: "none"
    }, null, 14, eo));
  }
});
var oo = ["d"];
var no = defineComponent({
  __name: "RGLineChecked",
  setup(n) {
    const i = inject(J), e2 = inject(j), o = computed(() => e2.options), t = computed(() => {
      const s = o.value.checkedLineId;
      if (!s)
        return null;
      try {
        const a2 = i == null ? void 0 : i.value.getLinkByLineId(s), d = a2.relations.findIndex((h) => h.id === s);
        if (d === -1)
          return null;
        const l = a2.relations[d], { path: c } = i == null ? void 0 : i.value.createLinePath(
          a2,
          l,
          d
        );
        return c;
      } catch (a2) {
        u2(a2);
      }
      return null;
    });
    return (s, a2) => (openBlock(), createElementBlock("g", null, [
      unref(t) ? (openBlock(), createElementBlock("path", {
        key: 0,
        d: unref(t),
        fill: "none",
        stroke: "red",
        "stroke-width": "20",
        class: "c-rg-line-checked-bg"
      }, null, 8, oo)) : createCommentVNode("", true)
    ]));
  }
});
var io = {
  class: "rel-single-graph",
  style: { overflow: "visible" }
};
var so = createBaseVNode("linearGradient", {
  id: "my-lineStyle",
  gradientUnits: "objectBoundingBox",
  cx: "0.5",
  cy: "0.5"
}, [
  createBaseVNode("stop", {
    offset: "0%",
    "stop-color": "#e52c5c",
    "stop-opacity": "1"
  }),
  createBaseVNode("stop", {
    offset: "100%",
    "stop-color": "#FD8B37",
    "stop-opacity": "0"
  })
], -1);
var ao = ["id", "markerWidth", "markerHeight", "refX", "refY"];
var lo = ["d"];
var ro = ["id", "markerWidth", "markerHeight", "refX", "refY"];
var co = ["d"];
var ho = ["id", "markerWidth", "markerHeight", "refX", "refY"];
var fo = ["d"];
var uo = ["id", "markerWidth", "markerHeight", "refX", "refY"];
var po = ["d"];
var yo = ["id", "markerWidth", "markerHeight", "refX", "refY"];
var mo = ["fill", "d"];
var go = ["id", "markerWidth", "markerHeight", "refX", "refY"];
var vo = ["fill", "d"];
var _o = { class: "rel-nodediv rel-nodediv-for-webkit" };
var xo = defineComponent({
  __name: "RGGraph",
  setup(n) {
    const i = ref(), e2 = inject(Ie), o = inject(j), t = computed(() => o.options), s = computed(() => o.allLineColors), a2 = () => {
      i.value.style.setProperty(
        "--stroke",
        `url('#${t.value.instanceId}-lineStyle')`
      ), i.value.style.setProperty(
        "--markerEnd",
        `url('#${t.value.instanceId}-start-arrow-default')`
      ), i.value.style.setProperty(
        "--markerStart",
        `url('#${t.value.instanceId}-arrow-default')`
      ), i.value.style.setProperty(
        "--markerEndChecked",
        `url('#${t.value.instanceId}-arrow-checked')`
      ), i.value.style.setProperty(
        "--markerStartChecked",
        `url('#${t.value.instanceId}-start-arrow-checked')`
      );
    };
    return onMounted(() => {
      u2("[RGCanvas mounted]"), a2();
    }), (d, l) => (openBlock(), createElementBlock("div", io, [
      createBaseVNode("div", {
        ref_key: "rgCanvas$",
        ref: i,
        class: "rel-linediv",
        style: { overflow: "visible" }
      }, [
        (openBlock(), createElementBlock("svg", {
          style: normalizeStyle([{ width: unref(t).canvasSize.width + "px", height: unref(t).canvasSize.height + "px" }, { overflow: "visible" }]),
          xmlns: "http://www.w3.org/2000/svg",
          version: "2.0"
        }, [
          createBaseVNode("defs", null, [
            so,
            createBaseVNode("marker", {
              id: unref(t).instanceId + "-arrow-default",
              markerWidth: unref(t).defaultLineMarker.markerWidth,
              markerHeight: unref(t).defaultLineMarker.markerHeight,
              refX: unref(t).defaultLineMarker.refX,
              refY: unref(t).defaultLineMarker.refY,
              "marker-units": "strokeWidth",
              orient: "auto",
              viewBox: "0 0 12 12"
            }, [
              createBaseVNode("path", {
                style: normalizeStyle({ fill: unref(t).defaultLineColor }),
                d: unref(t).defaultLineMarker.data
              }, null, 12, lo)
            ], 8, ao),
            createBaseVNode("marker", {
              id: unref(t).instanceId + "-start-arrow-default",
              markerWidth: unref(t).defaultLineMarker.markerWidth,
              markerHeight: unref(t).defaultLineMarker.markerHeight,
              refX: unref(t).defaultLineMarker.refX,
              refY: unref(t).defaultLineMarker.refY,
              "marker-units": "strokeWidth",
              orient: "auto",
              viewBox: "0 0 12 12"
            }, [
              createBaseVNode("path", {
                style: normalizeStyle({ fill: unref(t).defaultLineColor }),
                d: unref(t).defaultLineMarker.data,
                transform: "translate(12,12)rotate(180)"
              }, null, 12, co)
            ], 8, ro),
            createBaseVNode("marker", {
              id: unref(t).instanceId + "-arrow-checked",
              markerWidth: unref(t).defaultLineMarker.markerWidth,
              markerHeight: unref(t).defaultLineMarker.markerHeight,
              refX: unref(t).defaultLineMarker.refX,
              refY: unref(t).defaultLineMarker.refY,
              "marker-units": "strokeWidth",
              orient: "auto",
              viewBox: "0 0 12 12"
            }, [
              createBaseVNode("path", {
                style: normalizeStyle({ fill: unref(t).checkedLineColor }),
                d: unref(t).defaultLineMarker.data
              }, null, 12, fo)
            ], 8, ho),
            createBaseVNode("marker", {
              id: unref(t).instanceId + "-start-arrow-checked",
              markerWidth: unref(t).defaultLineMarker.markerWidth,
              markerHeight: unref(t).defaultLineMarker.markerHeight,
              refX: unref(t).defaultLineMarker.refX,
              refY: unref(t).defaultLineMarker.refY,
              "marker-units": "strokeWidth",
              orient: "auto",
              viewBox: "0 0 12 12"
            }, [
              createBaseVNode("path", {
                style: normalizeStyle({ fill: unref(t).checkedLineColor }),
                d: unref(t).defaultLineMarker.data,
                transform: "translate(12,12)rotate(180)"
              }, null, 12, po)
            ], 8, uo),
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(s), (c) => (openBlock(), createElementBlock("marker", {
              id: unref(t).instanceId + "-arrow-" + c.id,
              key: c.id,
              markerWidth: unref(t).defaultLineMarker.markerWidth,
              markerHeight: unref(t).defaultLineMarker.markerHeight,
              refX: unref(t).defaultLineMarker.refX,
              refY: unref(t).defaultLineMarker.refY,
              "marker-units": "strokeWidth",
              orient: "auto"
            }, [
              createBaseVNode("path", {
                fill: unref(t).defaultLineMarker.color || c.color,
                d: unref(t).defaultLineMarker.data
              }, null, 8, mo)
            ], 8, yo))), 128)),
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(s), (c) => (openBlock(), createElementBlock("marker", {
              id: unref(t).instanceId + "-start-arrow-" + c.id,
              key: "start-" + c.id,
              markerWidth: unref(t).defaultLineMarker.markerWidth,
              markerHeight: unref(t).defaultLineMarker.markerHeight,
              refX: unref(t).defaultLineMarker.refX,
              refY: unref(t).defaultLineMarker.refY,
              "marker-units": "strokeWidth",
              orient: "auto"
            }, [
              createBaseVNode("path", {
                fill: unref(t).defaultLineMarker.color || c.color,
                d: unref(t).defaultLineMarker.data,
                transform: "translate(12,12)rotate(180)"
              }, null, 8, vo)
            ], 8, go))), 128)),
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(e2).links, (c) => (openBlock(), createElementBlock(Fragment, null, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(c.relations, (h, f2) => (openBlock(), createElementBlock(Fragment, null, [
                unref(t).lineUseTextPath || h.useTextPath ? (openBlock(), createBlock(to, {
                  key: h.id,
                  link: c,
                  relation: h,
                  "relation-index": f2
                }, null, 8, ["link", "relation", "relation-index"])) : createCommentVNode("", true)
              ], 64))), 256))
            ], 64))), 256))
          ]),
          createVNode(no),
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(e2).links, (c) => (openBlock(), createBlock(Qt, {
            key: c.seeks_id,
            "link-props": c
          }, {
            line: withCtx(({ line: h }) => [
              renderSlot(d.$slots, "line", {
                line: h,
                link: c
              })
            ]),
            _: 2
          }, 1032, ["link-props"]))), 128)),
          unref(t).creatingLinePlot && unref(t).newLinkTemplate.fromNode ? (openBlock(), createBlock(qe, {
            key: "s-line-template",
            link: unref(t).newLinkTemplate,
            relation: unref(t).newLineTemplate,
            "relation-index": 0
          }, null, 8, ["link", "relation"])) : createCommentVNode("", true)
        ], 4))
      ], 512),
      createBaseVNode("div", _o, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(unref(e2).nodes, (c) => (openBlock(), createBlock(Je, {
          key: c.seeks_id,
          "node-props": c
        }, {
          node: withCtx(({ node: h }) => [
            renderSlot(d.$slots, "node", { node: h })
          ]),
          "node-expand-holder": withCtx(({ nodeProps: h, expandHolderPosition: f2, expandButtonClass: r, color: m, expandOrCollapseNode: y }) => [
            renderSlot(d.$slots, "node-expand-holder", {
              nodeProps: h,
              expandHolderPosition: f2,
              expandButtonClass: r,
              color: m,
              expandOrCollapseNode: y
            })
          ]),
          _: 2
        }, 1032, ["node-props"]))), 128))
      ])
    ]));
  }
});
var wo = ["onWheel"];
var Co = defineComponent({
  __name: "RGCanvas",
  setup(n) {
    const i = ref(), e2 = inject(J), o = inject(j), t = computed(() => o.options), s = (c) => {
      e2 == null || e2.value.onMouseWheel(c);
    }, a2 = (c) => {
      e2 == null || e2.value.onCanvasDragStart(c);
    }, d = (c) => {
      e2 == null || e2.value.onContextmenu(c);
    }, l = computed(() => ({
      width: `${t.value.canvasSize.width}px`,
      height: `${t.value.canvasSize.height}px`,
      "margin-left": `${t.value.canvasOffset.x}px`,
      "margin-top": `${t.value.canvasOffset.y}px`,
      "background-color": "transparent",
      transform: `scale(${t.value.canvasZoom / 100},${t.value.canvasZoom / 100})`
    }));
    return onMounted(() => {
      u2("[RGCanvas mounted]"), e2 == null || e2.value.setCanvasDom(i.value);
    }), (c, h) => (openBlock(), createElementBlock("div", {
      style: normalizeStyle({ width: "100%", height: "100%", "background-color": unref(t).backgroundColor || void 0, "background-image": unref(t).backgroundImage ? "url(" + unref(t).backgroundImage + ")" : void 0 }),
      class: normalizeClass([[unref(t).layoutClassName, unref(t).backgroundImageNoRepeat ? "rel-map-background-norepeat" : ""], "rel-map"]),
      onContextmenu: h[0] || (h[0] = withModifiers((f2) => d(f2), ["prevent"])),
      onMousedown: h[1] || (h[1] = withModifiers((f2) => a2(f2), ["left", "stop"])),
      onTouchstart: h[2] || (h[2] = withModifiers((f2) => a2(f2), ["stop"])),
      onWheel: withModifiers(s, ["stop"])
    }, [
      createBaseVNode("div", {
        ref_key: "seeksRGCanvas",
        ref: i,
        style: normalizeStyle(unref(l)),
        class: "rel-map-canvas"
      }, [
        renderSlot(c.$slots, "canvas-plug"),
        createVNode(xo, null, {
          node: withCtx(({ node: f2 }) => [
            renderSlot(c.$slots, "node", { node: f2 })
          ]),
          line: withCtx(({ line: f2, link: r }) => [
            renderSlot(c.$slots, "line", {
              line: f2,
              link: r
            })
          ]),
          "node-expand-holder": withCtx(({ nodeProps: f2, expandHolderPosition: r, expandButtonClass: m, color: y, expandOrCollapseNode: x }) => [
            renderSlot(c.$slots, "node-expand-holder", {
              nodeProps: f2,
              expandHolderPosition: r,
              expandButtonClass: m,
              color: y,
              expandOrCollapseNode: x
            })
          ]),
          _: 3
        })
      ], 4)
    ], 46, wo));
  }
});
var Lo = { class: "c-debug-tools-row" };
var ko = defineComponent({
  __name: "GraphDebugPanel",
  setup(n) {
    const i = inject(J), e2 = inject(j), o = computed(() => e2.options), t = ref(false), s = () => {
      t.value = !t.value;
    }, a2 = () => {
      i == null || i.value.printOptions();
    }, d = () => {
      i == null || i.value.printData();
    }, l = () => {
      i == null || i.value.enableDebugLog(!o.value.debug), u2("debugLog:", i == null ? void 0 : i.value.options.debug);
    };
    return (c, h) => (openBlock(), createElementBlock("div", null, [
      createBaseVNode("div", {
        class: normalizeClass([[], "c-setting-panel-button"]),
        onClick: s
      }, " Debug "),
      t.value ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass([[], "c-setting-panel"])
      }, [
        createBaseVNode("div", { class: "c-debug-tools-row" }, [
          createBaseVNode("button", { onClick: a2 }, "print options in console")
        ]),
        createBaseVNode("div", { class: "c-debug-tools-row" }, [
          createBaseVNode("button", { onClick: d }, "print json data in console")
        ]),
        createBaseVNode("div", Lo, [
          createTextVNode("debug log status: " + toDisplayString(unref(o).debug), 1),
          createBaseVNode("button", { onClick: l }, toDisplayString(unref(o).debug ? "disable" : "enable") + " debug log", 1)
        ])
      ])) : createCommentVNode("", true)
    ]));
  }
});
var bo = {
  ref: "miniView",
  class: "c-mini-graph"
};
var Mo = defineComponent({
  __name: "GraphMiniView",
  setup(n) {
    return ref(100), ref(0), (i, e2) => (openBlock(), createElementBlock("div", bo, null, 512));
  }
});
var So = createBaseVNode("svg", {
  class: "rg-icon",
  "aria-hidden": "true"
}, [
  createBaseVNode("use", { "xlink:href": "#icon-resize-" })
], -1);
var Oo = [
  So
];
var zo = createBaseVNode("svg", {
  class: "rg-icon",
  "aria-hidden": "true"
}, [
  createBaseVNode("use", { "xlink:href": "#icon-fangda" })
], -1);
var Po = [
  zo
];
var Eo = createBaseVNode("svg", {
  class: "rg-icon",
  "aria-hidden": "true"
}, [
  createBaseVNode("use", { "xlink:href": "#icon-suoxiao" })
], -1);
var No = [
  Eo
];
var Bo = ["title"];
var Ao = {
  key: 0,
  class: "rg-icon",
  "aria-hidden": "true"
};
var $o = createBaseVNode("use", { "xlink:href": "#icon-zidong" }, null, -1);
var To = [
  $o
];
var Do = {
  key: 1,
  class: "c-loading-icon rg-icon",
  "aria-hidden": "true"
};
var Wo = createBaseVNode("use", { "xlink:href": "#icon-lianjiezhong" }, null, -1);
var Fo = [
  Wo
];
var Ho = createBaseVNode("svg", {
  class: "rg-icon",
  "aria-hidden": "true"
}, [
  createBaseVNode("use", { "xlink:href": "#icon-ico_reset" })
], -1);
var Go = [
  Ho
];
var Ro = createBaseVNode("svg", {
  class: "rg-icon",
  "aria-hidden": "true"
}, [
  createBaseVNode("use", { "xlink:href": "#icon-tupian" })
], -1);
var Vo = [
  Ro
];
var Io = createBaseVNode("div", { style: { clear: "both" } }, null, -1);
var Yo = defineComponent({
  __name: "GraphMiniToolBar",
  setup(n) {
    const i = inject(J), e2 = inject(j), o = computed(() => e2.options);
    onMounted(() => {
    });
    const t = () => {
      i == null || i.value.refresh();
    }, s = () => {
      i == null || i.value.toggleAutoLayout();
    }, a2 = () => {
      i == null || i.value.downloadAsImage("png");
    }, d = async () => {
      const h = i == null ? void 0 : i.value;
      await h.setZoom(100), await h.moveToCenter(), await h.zoomToFit();
    }, l = (h) => {
      i == null || i.value.zoom(h);
    }, c = () => {
      i == null || i.value.fullscreen();
    };
    return (h, f2) => (openBlock(), createElementBlock("div", {
      class: normalizeClass(["rel-toolbar", ["rel-toolbar-h-" + unref(o).toolBarPositionH, "rel-toolbar-v-" + unref(o).toolBarPositionV, "rel-toolbar-" + unref(o).toolBarDirection]])
    }, [
      unref(o).allowShowFullscreenMenu ? (openBlock(), createElementBlock("div", {
        key: 0,
        title: "全屏/退出全屏",
        class: "c-mb-button",
        style: { "margin-top": "0px" },
        onClick: f2[0] || (f2[0] = (r) => c())
      }, Oo)) : createCommentVNode("", true),
      unref(o).allowShowZoomMenu ? (openBlock(), createElementBlock("div", {
        key: 1,
        title: "放大",
        class: "c-mb-button",
        onClick: f2[1] || (f2[1] = (r) => l(20))
      }, Po)) : createCommentVNode("", true),
      unref(o).allowShowZoomMenu ? (openBlock(), createElementBlock("div", {
        key: 2,
        class: "c-current-zoom",
        onDblclick: d
      }, toDisplayString(unref(o).canvasZoom) + "%", 33)) : createCommentVNode("", true),
      unref(o).allowShowZoomMenu ? (openBlock(), createElementBlock("div", {
        key: 3,
        title: "缩小",
        class: "c-mb-button",
        style: { "margin-top": "0px" },
        onClick: f2[2] || (f2[2] = (r) => l(-20))
      }, No)) : createCommentVNode("", true),
      unref(o).allowAutoLayoutIfSupport && unref(o).isNeedShowAutoLayoutButton ? (openBlock(), createElementBlock("div", {
        key: 4,
        title: unref(o).autoLayouting ? "点击停止自动布局" : "点击开始自动调整布局",
        class: normalizeClass([{ "c-mb-button-on": unref(o).autoLayouting }, "c-mb-button"]),
        onClick: s
      }, [
        unref(o).autoLayouting ? (openBlock(), createElementBlock("svg", Do, Fo)) : (openBlock(), createElementBlock("svg", Ao, To))
      ], 10, Bo)) : createCommentVNode("", true),
      unref(o).allowShowRefreshButton ? (openBlock(), createElementBlock("div", {
        key: 5,
        title: "刷新",
        class: "c-mb-button",
        onClick: t
      }, Go)) : createCommentVNode("", true),
      unref(o).allowShowDownloadButton ? (openBlock(), createElementBlock("div", {
        key: 6,
        title: "下载图片",
        class: "c-mb-button",
        onClick: a2
      }, Vo)) : createCommentVNode("", true),
      Io
    ], 2));
  }
});
var Xo = {
  key: 0,
  class: "rel-operate"
};
var jo = { style: { position: "relative" } };
var Zo = defineComponent({
  __name: "GraphOperateStuff",
  setup(n) {
    const i = inject(j), e2 = computed(() => i.options);
    return (o, t) => unref(e2) && (unref(e2).creatingNodePlot || unref(e2).creatingSelection) ? (openBlock(), createElementBlock("div", Xo, [
      createBaseVNode("div", jo, [
        unref(e2).creatingNodePlot && unref(e2).showTemplateNode ? (openBlock(), createBlock(Je, {
          key: 0,
          "node-props": unref(e2).newNodeTemplate
        }, {
          node: withCtx(() => [
            renderSlot(o.$slots, "node-template", {
              node: unref(e2).newNodeTemplate
            })
          ]),
          _: 3
        }, 8, ["node-props"])) : createCommentVNode("", true),
        unref(e2).creatingSelection ? (openBlock(), createElementBlock("div", {
          key: 1,
          class: "rel-selection",
          style: normalizeStyle({
            left: unref(e2).selectionView.x + "px",
            top: unref(e2).selectionView.y + "px",
            width: unref(e2).selectionView.width + "px",
            height: unref(e2).selectionView.height + "px"
          })
        }, null, 4)) : createCommentVNode("", true)
      ])
    ])) : createCommentVNode("", true);
  }
});
var Uo = createBaseVNode("div", { class: "rel-graph-loading-message" }, [
  createBaseVNode("svg", {
    class: "c-graph-loading-icon",
    "aria-hidden": "true"
  }, [
    createBaseVNode("use", { "xlink:href": "#icon-lianjiezhong" })
  ]),
  createTextVNode(" Loading... ")
], -1);
var Jo = [
  Uo
];
var qo = defineComponent({
  __name: "GraphLoading",
  setup(n) {
    const i = inject(J), e2 = inject(j), o = computed(() => e2.options), t = (s) => {
      i == null || i.value.clickGraphMask(s);
    };
    return (s, a2) => (openBlock(), createElementBlock("div", {
      class: normalizeClass(["rel-graph-loading", { "rel-graph-loading-hide": !unref(o).graphLoading }]),
      onClick: t
    }, Jo, 2));
  }
});
var xe = defineComponent({
  __name: "index",
  props: {
    options: null,
    relationGraphCore: null,
    onNodeClick: { type: Function },
    onNodeExpand: { type: Function },
    onNodeCollapse: { type: Function },
    onLineClick: { type: Function },
    onImageDownload: { type: Function },
    onImageSaveAsFile: { type: Function },
    beforeChangeLayout: { type: Function },
    onNodeDragEnd: { type: Function },
    onCanvasDragEnd: { type: Function },
    onContextmenu: { type: Function },
    onCanvasClick: { type: Function },
    onCanvasSelectionEnd: { type: Function }
  },
  emits: [
    "on-node-click",
    "on-node-expand",
    "on-node-collapse",
    "on-line-click",
    "on-download-excel",
    "on-image-download",
    "on-image-save-as-file"
  ],
  setup(n, { expose: i }) {
    const e2 = n;
    u2("appendIconSvg:", lt);
    const o = ref(), t = ref(), s = reactive({
      rootNode: void 0,
      nodes: [],
      links: []
    }), a2 = reactive({
      options: void 0,
      allLineColors: []
    });
    provide(J, t), provide(Ie, s), provide(j, a2), u2("---------------------------graph mounted---------------------------"), onMounted(() => {
      ht("vue3"), u2("---------------------------graph mounted---------------------------");
      const l = e2.relationGraphCore ? new e2.relationGraphCore(e2.options, We(e2)) : new Ue(e2.options, We(e2));
      l.setReactiveDataVue3(s, a2), l.setDom(o.value), l.ready(), t.value = l, import_screenfull.default && import_screenfull.default.on && import_screenfull.default.on("change", d);
    }), onBeforeUnmount(() => {
      import_screenfull.default && import_screenfull.default.off && import_screenfull.default.off("change", d);
    });
    const d = () => {
      t.value.fullscreen(import_screenfull.default.isFullscreen);
    };
    return i({
      onFullscreen() {
        d();
      },
      getInstance() {
        return t.value;
      },
      async setOptions(l, c = false) {
        await t.value.setOptions(l, c);
      },
      async setJsonData(l, c, h) {
        arguments.length === 2 && typeof c == "function" && (h = c, c = true), await t.value.setJsonData(l, true), await t.value.refresh(false), h && h(t.value);
      },
      async appendJsonData(l, c, h) {
        arguments.length === 2 && typeof c == "function" && (h = c, c = true), await t.value.appendJsonData(l, true), h && h(t.value);
      },
      setLayouter(l) {
        t.value.setLayouter(l);
      },
      onGraphResize() {
        t.value.refreshNVAnalysisInfo();
      },
      refresh() {
        t.value.refresh();
      },
      focusRootNode() {
        t.value.focusRootNode();
      },
      focusNodeById(l) {
        return t.value.focusNodeById(l);
      },
      getNodeById(l) {
        return t.value.getNodeById(l);
      },
      removeNodeById(l) {
        return t.value.removeNodeById(l);
      },
      getNodes() {
        return t.value.getNodes();
      },
      getLinks() {
        return t.value.getLinks();
      },
      getGraphJsonData() {
        return t.value.getGraphJsonData();
      },
      getGraphJsonOptions() {
        return t.value.getGraphJsonOptions();
      }
    }), (l, c) => (openBlock(), createElementBlock("div", {
      ref_key: "seeksRelationGraph$",
      ref: o,
      class: "relation-graph",
      style: normalizeStyle([{ width: "100%", height: "100%" }, { "box-sizing": "border-box", position: "relative" }])
    }, [
      t.value && a2.options ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
        a2.options.showDebugPanel ? (openBlock(), createBlock(ko, { key: 0 })) : createCommentVNode("", true),
        a2.options.allowShowMiniToolBar === true ? renderSlot(l.$slots, "tool-bar", { key: 1 }, () => [
          createVNode(Yo)
        ]) : createCommentVNode("", true),
        a2.options.allowShowMiniView === true ? renderSlot(l.$slots, "mini-view", { key: 2 }, () => [
          createVNode(Mo)
        ]) : createCommentVNode("", true),
        renderSlot(l.$slots, "graph-plug"),
        createVNode(Co, null, {
          node: withCtx(({ node: h }) => [
            renderSlot(l.$slots, "node", { node: h })
          ]),
          line: withCtx(({ line: h, link: f2 }) => [
            renderSlot(l.$slots, "line", {
              line: h,
              link: f2
            })
          ]),
          "canvas-plug": withCtx(() => [
            renderSlot(l.$slots, "canvas-plug")
          ]),
          "node-expand-holder": withCtx(({ nodeProps: h, expandHolderPosition: f2, expandButtonClass: r, color: m, expandOrCollapseNode: y }) => [
            renderSlot(l.$slots, "node-expand-holder", {
              nodeProps: h,
              expandHolderPosition: f2,
              expandButtonClass: r,
              color: m,
              expandOrCollapseNode: y
            })
          ]),
          _: 3
        }),
        createVNode(Zo, null, {
          "node-template": withCtx(({ node: h }) => [
            renderSlot(l.$slots, "node-template", { node: h })
          ]),
          _: 3
        }),
        createVNode(qo)
      ], 64)) : createCommentVNode("", true)
    ], 512));
  }
});
var on = Ue;
var nn = {
  BidirectionalTreeLayouter: Ye,
  CenterLayouter: Xe,
  CircleLayouter: je,
  FixedLayouter: Ze,
  ForceLayouter: ye
};
var sn = Mt;
var an = zt;
var ln = mt;
var rn = ut;
var cn = H;
var hn = gt;
var dn = Dt;
var fn = _e;
xe.install = (n) => {
  n.component("RelationGraph", xe), n.component("SeeksRelationGraph", xe);
};
var un = xe;
var pn = Ve;
export {
  fn as BaseLayouter,
  nn as Layout,
  dn as RGEffectUtils,
  cn as RGGraphMath,
  sn as RGLayouterUtils,
  ln as RGLinkUtils,
  rn as RGNodeUtils,
  hn as RGNodesAnalyticUtils,
  an as RGOptionsUtils,
  un as RelationGraph,
  on as RelationGraphCore,
  xe as default,
  pn as version
};
/*! Bundled license information:

screenfull/dist/screenfull.js:
  (*!
  * screenfull
  * v5.2.0 - 2021-11-03
  * (c) Sindre Sorhus; MIT License
  *)

html2canvas/dist/html2canvas.esm.js:
  (*!
   * html2canvas 1.4.1 <https://html2canvas.hertzen.com>
   * Copyright (c) 2022 Niklas von Hertzen <https://hertzen.com>
   * Released under MIT License
   *)
  (*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
  
  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
  
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** *)
*/
//# sourceMappingURL=relation-graph_vue3.js.map
