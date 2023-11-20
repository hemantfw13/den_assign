"use strict";
exports.id = "component---src-pages-index-js";
exports.ids = ["component---src-pages-index-js"];
exports.modules = {

/***/ "./node_modules/camelcase/index.js":
/*!*****************************************!*\
  !*** ./node_modules/camelcase/index.js ***!
  \*****************************************/
/***/ ((module) => {



const UPPERCASE = /[\p{Lu}]/u;
const LOWERCASE = /[\p{Ll}]/u;
const LEADING_CAPITAL = /^[\p{Lu}](?![\p{Lu}])/gu;
const IDENTIFIER = /([\p{Alpha}\p{N}_]|$)/u;
const SEPARATORS = /[_.\- ]+/;

const LEADING_SEPARATORS = new RegExp('^' + SEPARATORS.source);
const SEPARATORS_AND_IDENTIFIER = new RegExp(SEPARATORS.source + IDENTIFIER.source, 'gu');
const NUMBERS_AND_IDENTIFIER = new RegExp('\\d+' + IDENTIFIER.source, 'gu');

const preserveCamelCase = (string, toLowerCase, toUpperCase) => {
	let isLastCharLower = false;
	let isLastCharUpper = false;
	let isLastLastCharUpper = false;

	for (let i = 0; i < string.length; i++) {
		const character = string[i];

		if (isLastCharLower && UPPERCASE.test(character)) {
			string = string.slice(0, i) + '-' + string.slice(i);
			isLastCharLower = false;
			isLastLastCharUpper = isLastCharUpper;
			isLastCharUpper = true;
			i++;
		} else if (isLastCharUpper && isLastLastCharUpper && LOWERCASE.test(character)) {
			string = string.slice(0, i - 1) + '-' + string.slice(i - 1);
			isLastLastCharUpper = isLastCharUpper;
			isLastCharUpper = false;
			isLastCharLower = true;
		} else {
			isLastCharLower = toLowerCase(character) === character && toUpperCase(character) !== character;
			isLastLastCharUpper = isLastCharUpper;
			isLastCharUpper = toUpperCase(character) === character && toLowerCase(character) !== character;
		}
	}

	return string;
};

const preserveConsecutiveUppercase = (input, toLowerCase) => {
	LEADING_CAPITAL.lastIndex = 0;

	return input.replace(LEADING_CAPITAL, m1 => toLowerCase(m1));
};

const postProcess = (input, toUpperCase) => {
	SEPARATORS_AND_IDENTIFIER.lastIndex = 0;
	NUMBERS_AND_IDENTIFIER.lastIndex = 0;

	return input.replace(SEPARATORS_AND_IDENTIFIER, (_, identifier) => toUpperCase(identifier))
		.replace(NUMBERS_AND_IDENTIFIER, m => toUpperCase(m));
};

const camelCase = (input, options) => {
	if (!(typeof input === 'string' || Array.isArray(input))) {
		throw new TypeError('Expected the input to be `string | string[]`');
	}

	options = {
		pascalCase: false,
		preserveConsecutiveUppercase: false,
		...options
	};

	if (Array.isArray(input)) {
		input = input.map(x => x.trim())
			.filter(x => x.length)
			.join('-');
	} else {
		input = input.trim();
	}

	if (input.length === 0) {
		return '';
	}

	const toLowerCase = options.locale === false ?
		string => string.toLowerCase() :
		string => string.toLocaleLowerCase(options.locale);
	const toUpperCase = options.locale === false ?
		string => string.toUpperCase() :
		string => string.toLocaleUpperCase(options.locale);

	if (input.length === 1) {
		return options.pascalCase ? toUpperCase(input) : toLowerCase(input);
	}

	const hasUpperCase = input !== toLowerCase(input);

	if (hasUpperCase) {
		input = preserveCamelCase(input, toLowerCase, toUpperCase);
	}

	input = input.replace(LEADING_SEPARATORS, '');

	if (options.preserveConsecutiveUppercase) {
		input = preserveConsecutiveUppercase(input, toLowerCase);
	} else {
		input = toLowerCase(input);
	}

	if (options.pascalCase) {
		input = toUpperCase(input.charAt(0)) + input.slice(1);
	}

	return postProcess(input, toUpperCase);
};

module.exports = camelCase;
// TODO: Remove this for the next major release
module.exports["default"] = camelCase;


/***/ }),

/***/ "./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js":
/*!**********************************************************************!*\
  !*** ./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GatsbyImage: () => (/* binding */ X),
/* harmony export */   MainImage: () => (/* binding */ D),
/* harmony export */   Placeholder: () => (/* binding */ C),
/* harmony export */   StaticImage: () => (/* binding */ Z),
/* harmony export */   generateImageData: () => (/* binding */ b),
/* harmony export */   getImage: () => (/* binding */ I),
/* harmony export */   getImageData: () => (/* binding */ R),
/* harmony export */   getLowResolutionImageURL: () => (/* binding */ y),
/* harmony export */   getSrc: () => (/* binding */ W),
/* harmony export */   getSrcSet: () => (/* binding */ j),
/* harmony export */   withArtDirection: () => (/* binding */ _)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var camelcase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! camelcase */ "./node_modules/camelcase/index.js");
/* harmony import */ var camelcase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(camelcase__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);




function n() {
  return n = Object.assign ? Object.assign.bind() : function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var a = arguments[t];
      for (var i in a) Object.prototype.hasOwnProperty.call(a, i) && (e[i] = a[i]);
    }
    return e;
  }, n.apply(this, arguments);
}
function o(e, t) {
  if (null == e) return {};
  var a,
    i,
    r = {},
    n = Object.keys(e);
  for (i = 0; i < n.length; i++) t.indexOf(a = n[i]) >= 0 || (r[a] = e[a]);
  return r;
}
var s = [.25, .5, 1, 2],
  l = [750, 1080, 1366, 1920],
  u = [320, 654, 768, 1024, 1366, 1600, 1920, 2048, 2560, 3440, 3840, 4096],
  d = 800,
  c = 800,
  h = 4 / 3,
  g = function (e) {
    return console.warn(e);
  },
  p = function (e, t) {
    return e - t;
  },
  m = function (e, t) {
    switch (t) {
      case "constrained":
        return "(min-width: " + e + "px) " + e + "px, 100vw";
      case "fixed":
        return e + "px";
      case "fullWidth":
        return "100vw";
      default:
        return;
    }
  },
  f = function (e) {
    return e.map(function (e) {
      return e.src + " " + e.width + "w";
    }).join(",\n");
  };
function v(e) {
  var t = e.lastIndexOf(".");
  if (-1 !== t) {
    var a = e.slice(t + 1);
    if ("jpeg" === a) return "jpg";
    if (3 === a.length || 4 === a.length) return a;
  }
}
function w(e) {
  var t = e.layout,
    i = void 0 === t ? "constrained" : t,
    r = e.width,
    o = e.height,
    s = e.sourceMetadata,
    l = e.breakpoints,
    u = e.aspectRatio,
    d = e.formats,
    g = void 0 === d ? ["auto", "webp"] : d;
  return g = g.map(function (e) {
    return e.toLowerCase();
  }), i = camelcase__WEBPACK_IMPORTED_MODULE_1___default()(i), r && o ? n({}, e, {
    formats: g,
    layout: i,
    aspectRatio: r / o
  }) : (s.width && s.height && !u && (u = s.width / s.height), "fullWidth" === i ? (r = r || s.width || l[l.length - 1], o = o || Math.round(r / (u || h))) : (r || (r = o && u ? o * u : s.width ? s.width : o ? Math.round(o / h) : c), u && !o ? o = Math.round(r / u) : u || (u = r / o)), n({}, e, {
    width: r,
    height: o,
    aspectRatio: u,
    layout: i,
    formats: g
  }));
}
function y(e, t) {
  var a;
  return void 0 === t && (t = 20), null == (a = (0, (e = w(e)).generateImageSource)(e.filename, t, Math.round(t / e.aspectRatio), e.sourceMetadata.format || "jpg", e.fit, e.options)) ? void 0 : a.src;
}
function b(e) {
  var t,
    a = (e = w(e)).pluginName,
    i = e.sourceMetadata,
    r = e.generateImageSource,
    o = e.layout,
    u = e.fit,
    d = e.options,
    h = e.width,
    p = e.height,
    y = e.filename,
    b = e.reporter,
    S = void 0 === b ? {
      warn: g
    } : b,
    N = e.backgroundColor,
    x = e.placeholderURL;
  if (a || S.warn('[gatsby-plugin-image] "generateImageData" was not passed a plugin name'), "function" != typeof r) throw new Error("generateImageSource must be a function");
  i && (i.width || i.height) ? i.format || (i.format = v(y)) : i = {
    width: h,
    height: p,
    format: (null == (t = i) ? void 0 : t.format) || v(y) || "auto"
  };
  var I = new Set(e.formats);
  (0 === I.size || I.has("auto") || I.has("")) && (I.delete("auto"), I.delete(""), I.add(i.format)), I.has("jpg") && I.has("png") && (S.warn("[" + a + "] Specifying both 'jpg' and 'png' formats is not supported. Using 'auto' instead"), I.delete("jpg" === i.format ? "png" : "jpg"));
  var W = function (e) {
      var t = e.filename,
        a = e.layout,
        i = void 0 === a ? "constrained" : a,
        r = e.sourceMetadata,
        o = e.reporter,
        u = void 0 === o ? {
          warn: g
        } : o,
        d = e.breakpoints,
        h = void 0 === d ? l : d,
        p = Object.entries({
          width: e.width,
          height: e.height
        }).filter(function (e) {
          var t = e[1];
          return "number" == typeof t && t < 1;
        });
      if (p.length) throw new Error("Specified dimensions for images must be positive numbers (> 0). Problem dimensions you have are " + p.map(function (e) {
        return e.join(": ");
      }).join(", "));
      return "fixed" === i ? function (e) {
        var t = e.filename,
          a = e.sourceMetadata,
          i = e.width,
          r = e.height,
          n = e.fit,
          o = void 0 === n ? "cover" : n,
          l = e.outputPixelDensities,
          u = e.reporter,
          d = void 0 === u ? {
            warn: g
          } : u,
          h = a.width / a.height,
          p = k(void 0 === l ? s : l);
        if (i && r) {
          var m = M(a, {
            width: i,
            height: r,
            fit: o
          });
          i = m.width, r = m.height, h = m.aspectRatio;
        }
        i ? r || (r = Math.round(i / h)) : i = r ? Math.round(r * h) : c;
        var f = i;
        if (a.width < i || a.height < r) {
          var v = a.width < i ? "width" : "height";
          d.warn("\nThe requested " + v + ' "' + ("width" === v ? i : r) + 'px" for the image ' + t + " was larger than the actual image " + v + " of " + a[v] + "px. If possible, replace the current image with a larger one."), "width" === v ? (i = a.width, r = Math.round(i / h)) : i = (r = a.height) * h;
        }
        return {
          sizes: p.filter(function (e) {
            return e >= 1;
          }).map(function (e) {
            return Math.round(e * i);
          }).filter(function (e) {
            return e <= a.width;
          }),
          aspectRatio: h,
          presentationWidth: f,
          presentationHeight: Math.round(f / h),
          unscaledWidth: i
        };
      }(e) : "constrained" === i ? E(e) : "fullWidth" === i ? E(n({
        breakpoints: h
      }, e)) : (u.warn("No valid layout was provided for the image at " + t + ". Valid image layouts are fixed, fullWidth, and constrained. Found " + i), {
        sizes: [r.width],
        presentationWidth: r.width,
        presentationHeight: r.height,
        aspectRatio: r.width / r.height,
        unscaledWidth: r.width
      });
    }(n({}, e, {
      sourceMetadata: i
    })),
    j = {
      sources: []
    },
    R = e.sizes;
  R || (R = m(W.presentationWidth, o)), I.forEach(function (e) {
    var t = W.sizes.map(function (t) {
      var i = r(y, t, Math.round(t / W.aspectRatio), e, u, d);
      if (null != i && i.width && i.height && i.src && i.format) return i;
      S.warn("[" + a + "] The resolver for image " + y + " returned an invalid value.");
    }).filter(Boolean);
    if ("jpg" === e || "png" === e || "auto" === e) {
      var i = t.find(function (e) {
        return e.width === W.unscaledWidth;
      }) || t[0];
      i && (j.fallback = {
        src: i.src,
        srcSet: f(t),
        sizes: R
      });
    } else {
      var n;
      null == (n = j.sources) || n.push({
        srcSet: f(t),
        sizes: R,
        type: "image/" + e
      });
    }
  });
  var _ = {
    images: j,
    layout: o,
    backgroundColor: N
  };
  switch (x && (_.placeholder = {
    fallback: x
  }), o) {
    case "fixed":
      _.width = W.presentationWidth, _.height = W.presentationHeight;
      break;
    case "fullWidth":
      _.width = 1, _.height = 1 / W.aspectRatio;
      break;
    case "constrained":
      _.width = e.width || W.presentationWidth || 1, _.height = (_.width || 1) / W.aspectRatio;
  }
  return _;
}
var k = function (e) {
  return Array.from(new Set([1].concat(e))).sort(p);
};
function E(e) {
  var t,
    a = e.sourceMetadata,
    i = e.width,
    r = e.height,
    n = e.fit,
    o = void 0 === n ? "cover" : n,
    l = e.outputPixelDensities,
    u = e.breakpoints,
    c = e.layout,
    h = a.width / a.height,
    g = k(void 0 === l ? s : l);
  if (i && r) {
    var m = M(a, {
      width: i,
      height: r,
      fit: o
    });
    i = m.width, r = m.height, h = m.aspectRatio;
  }
  i = i && Math.min(i, a.width), r = r && Math.min(r, a.height), i || r || (r = (i = Math.min(d, a.width)) / h), i || (i = r * h);
  var f = i;
  return (a.width < i || a.height < r) && (i = a.width, r = a.height), i = Math.round(i), (null == u ? void 0 : u.length) > 0 ? (t = u.filter(function (e) {
    return e <= a.width;
  })).length < u.length && !t.includes(a.width) && t.push(a.width) : t = (t = g.map(function (e) {
    return Math.round(e * i);
  })).filter(function (e) {
    return e <= a.width;
  }), "constrained" !== c || t.includes(i) || t.push(i), {
    sizes: t = t.sort(p),
    aspectRatio: h,
    presentationWidth: f,
    presentationHeight: Math.round(f / h),
    unscaledWidth: i
  };
}
function M(e, t) {
  var a = e.width / e.height,
    i = t.width,
    r = t.height;
  switch (t.fit) {
    case "fill":
      i = t.width ? t.width : e.width, r = t.height ? t.height : e.height;
      break;
    case "inside":
      var n = t.width ? t.width : Number.MAX_SAFE_INTEGER,
        o = t.height ? t.height : Number.MAX_SAFE_INTEGER;
      i = Math.min(n, Math.round(o * a)), r = Math.min(o, Math.round(n / a));
      break;
    case "outside":
      var s = t.width ? t.width : 0,
        l = t.height ? t.height : 0;
      i = Math.max(s, Math.round(l * a)), r = Math.max(l, Math.round(s / a));
      break;
    default:
      t.width && !t.height && (i = t.width, r = Math.round(t.width / a)), t.height && !t.width && (i = Math.round(t.height * a), r = t.height);
  }
  return {
    width: i,
    height: r,
    aspectRatio: i / r
  };
}
var S = ["baseUrl", "urlBuilder", "sourceWidth", "sourceHeight", "pluginName", "formats", "breakpoints", "options"],
  N = ["images", "placeholder"];
function x() {
  return "undefined" != typeof GATSBY___IMAGE && GATSBY___IMAGE;
}
var I = function (e) {
    var t;
    return function (e) {
      var t, a;
      return Boolean(null == e || null == (t = e.images) || null == (a = t.fallback) ? void 0 : a.src);
    }(e) ? e : function (e) {
      return Boolean(null == e ? void 0 : e.gatsbyImageData);
    }(e) ? e.gatsbyImageData : function (e) {
      return Boolean(null == e ? void 0 : e.gatsbyImage);
    }(e) ? e.gatsbyImage : null == e || null == (t = e.childImageSharp) ? void 0 : t.gatsbyImageData;
  },
  W = function (e) {
    var t, a, i;
    return null == (t = I(e)) || null == (a = t.images) || null == (i = a.fallback) ? void 0 : i.src;
  },
  j = function (e) {
    var t, a, i;
    return null == (t = I(e)) || null == (a = t.images) || null == (i = a.fallback) ? void 0 : i.srcSet;
  };
function R(e) {
  var t,
    a = e.baseUrl,
    i = e.urlBuilder,
    r = e.sourceWidth,
    s = e.sourceHeight,
    l = e.pluginName,
    d = void 0 === l ? "getImageData" : l,
    c = e.formats,
    h = void 0 === c ? ["auto"] : c,
    g = e.breakpoints,
    p = e.options,
    m = o(e, S);
  return null != (t = g) && t.length || "fullWidth" !== m.layout && "FULL_WIDTH" !== m.layout || (g = u), b(n({}, m, {
    pluginName: d,
    generateImageSource: function (e, t, a, r) {
      return {
        width: t,
        height: a,
        format: r,
        src: i({
          baseUrl: e,
          width: t,
          height: a,
          options: p,
          format: r
        })
      };
    },
    filename: a,
    formats: h,
    breakpoints: g,
    sourceMetadata: {
      width: r,
      height: s,
      format: "auto"
    }
  }));
}
function _(e, t) {
  var a,
    i,
    r,
    s = e.images,
    l = e.placeholder,
    u = n({}, o(e, N), {
      images: n({}, s, {
        sources: []
      }),
      placeholder: l && n({}, l, {
        sources: []
      })
    });
  return t.forEach(function (t) {
    var a,
      i = t.media,
      r = t.image;
    i ? (r.layout !== e.layout && "development" === "development" && console.warn('[gatsby-plugin-image] Mismatched image layout: expected "' + e.layout + '" but received "' + r.layout + '". All art-directed images use the same layout as the default image'), (a = u.images.sources).push.apply(a, r.images.sources.map(function (e) {
      return n({}, e, {
        media: i
      });
    }).concat([{
      media: i,
      srcSet: r.images.fallback.srcSet
    }])), u.placeholder && u.placeholder.sources.push({
      media: i,
      srcSet: r.placeholder.fallback
    })) :  true && console.warn("[gatsby-plugin-image] All art-directed images passed to must have a value set for `media`. Skipping.");
  }), (a = u.images.sources).push.apply(a, s.sources), null != l && l.sources && (null == (i = u.placeholder) || (r = i.sources).push.apply(r, l.sources)), u;
}
var A,
  O = ["src", "srcSet", "loading", "alt", "shouldLoad"],
  T = ["fallback", "sources", "shouldLoad"],
  z = function (t) {
    var a = t.src,
      i = t.srcSet,
      r = t.loading,
      s = t.alt,
      l = void 0 === s ? "" : s,
      u = t.shouldLoad,
      d = o(t, O);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", n({}, d, {
      decoding: "async",
      loading: r,
      src: u ? a : void 0,
      "data-src": u ? void 0 : a,
      srcSet: u ? i : void 0,
      "data-srcset": u ? void 0 : i,
      alt: l
    }));
  },
  L = function (t) {
    var a = t.fallback,
      i = t.sources,
      r = void 0 === i ? [] : i,
      s = t.shouldLoad,
      l = void 0 === s || s,
      u = o(t, T),
      d = u.sizes || (null == a ? void 0 : a.sizes),
      c = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(z, n({}, u, a, {
        sizes: d,
        shouldLoad: l
      }));
    return r.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("picture", null, r.map(function (t) {
      var a = t.media,
        i = t.srcSet,
        r = t.type;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("source", {
        key: a + "-" + r + "-" + i,
        type: r,
        media: a,
        srcSet: l ? i : void 0,
        "data-srcset": l ? void 0 : i,
        sizes: d
      });
    }), c) : c;
  };
z.propTypes = {
  src: prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,
  alt: prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,
  sizes: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
  srcSet: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
  shouldLoad: prop_types__WEBPACK_IMPORTED_MODULE_2__.bool
}, L.displayName = "Picture", L.propTypes = {
  alt: prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,
  shouldLoad: prop_types__WEBPACK_IMPORTED_MODULE_2__.bool,
  fallback: prop_types__WEBPACK_IMPORTED_MODULE_2__.exact({
    src: prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,
    srcSet: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
    sizes: prop_types__WEBPACK_IMPORTED_MODULE_2__.string
  }),
  sources: prop_types__WEBPACK_IMPORTED_MODULE_2__.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2__.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2__.exact({
    media: prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,
    type: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
    sizes: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
    srcSet: prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired
  }), prop_types__WEBPACK_IMPORTED_MODULE_2__.exact({
    media: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
    type: prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,
    sizes: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
    srcSet: prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired
  })]))
};
var q = ["fallback"],
  C = function (t) {
    var a = t.fallback,
      i = o(t, q);
    return a ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(L, n({}, i, {
      fallback: {
        src: a
      },
      "aria-hidden": !0,
      alt: ""
    })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", n({}, i));
  };
C.displayName = "Placeholder", C.propTypes = {
  fallback: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
  sources: null == (A = L.propTypes) ? void 0 : A.sources,
  alt: function (e, t, a) {
    return e[t] ? new Error("Invalid prop `" + t + "` supplied to `" + a + "`. Validation failed.") : null;
  }
};
var D = function (t) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(L, n({}, t)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("noscript", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(L, n({}, t, {
    shouldLoad: !0
  }))));
};
D.displayName = "MainImage", D.propTypes = L.propTypes;
var P = ["children"],
  H = function () {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("script", {
      type: "module",
      dangerouslySetInnerHTML: {
        __html: 'const t="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;if(t){const t=document.querySelectorAll("img[data-main-image]");for(let e of t){e.dataset.src&&(e.setAttribute("src",e.dataset.src),e.removeAttribute("data-src")),e.dataset.srcset&&(e.setAttribute("srcset",e.dataset.srcset),e.removeAttribute("data-srcset"));const t=e.parentNode.querySelectorAll("source[data-srcset]");for(let e of t)e.setAttribute("srcset",e.dataset.srcset),e.removeAttribute("data-srcset");e.complete&&(e.style.opacity=1,e.parentNode.parentNode.querySelector("[data-placeholder-image]").style.opacity=0)}}'
      }
    });
  },
  F = function (t) {
    var a = t.layout,
      i = t.width,
      r = t.height;
    return "fullWidth" === a ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      "aria-hidden": !0,
      style: {
        paddingTop: r / i * 100 + "%"
      }
    }) : "constrained" === a ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        maxWidth: i,
        display: "block"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
      alt: "",
      role: "presentation",
      "aria-hidden": "true",
      src: "data:image/svg+xml;charset=utf-8,%3Csvg%20height='" + r + "'%20width='" + i + "'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",
      style: {
        maxWidth: "100%",
        display: "block",
        position: "static"
      }
    })) : null;
  },
  B = function (a) {
    var i = a.children,
      r = o(a, P);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(F, n({}, r)), i, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(H, null));
  },
  G = ["as", "className", "class", "style", "image", "loading", "imgClassName", "imgStyle", "backgroundColor", "objectFit", "objectPosition"],
  V = ["style", "className"],
  U = function (e) {
    return e.replace(/\n/g, "");
  },
  X = function (t) {
    var a = t.as,
      i = void 0 === a ? "div" : a,
      r = t.className,
      s = t.class,
      l = t.style,
      u = t.image,
      d = t.loading,
      c = void 0 === d ? "lazy" : d,
      h = t.imgClassName,
      g = t.imgStyle,
      p = t.backgroundColor,
      m = t.objectFit,
      f = t.objectPosition,
      v = o(t, G);
    if (!u) return console.warn("[gatsby-plugin-image] Missing image prop"), null;
    s && (r = s), g = n({
      objectFit: m,
      objectPosition: f,
      backgroundColor: p
    }, g);
    var w = u.width,
      y = u.height,
      b = u.layout,
      k = u.images,
      E = u.placeholder,
      M = u.backgroundColor,
      S = function (e, t, a) {
        var i = {},
          r = "gatsby-image-wrapper";
        return x() || (i.position = "relative", i.overflow = "hidden"), "fixed" === a ? (i.width = e, i.height = t) : "constrained" === a && (x() || (i.display = "inline-block", i.verticalAlign = "top"), r = "gatsby-image-wrapper gatsby-image-wrapper-constrained"), {
          className: r,
          "data-gatsby-image-wrapper": "",
          style: i
        };
      }(w, y, b),
      N = S.style,
      I = S.className,
      W = o(S, V),
      j = {
        fallback: void 0,
        sources: []
      };
    return k.fallback && (j.fallback = n({}, k.fallback, {
      srcSet: k.fallback.srcSet ? U(k.fallback.srcSet) : void 0
    })), k.sources && (j.sources = k.sources.map(function (e) {
      return n({}, e, {
        srcSet: U(e.srcSet)
      });
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(i, n({}, W, {
      style: n({}, N, l, {
        backgroundColor: p
      }),
      className: I + (r ? " " + r : "")
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(B, {
      layout: b,
      width: w,
      height: y
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(C, n({}, function (e, t, a, i, r, o, s, l) {
      var u = {};
      o && (u.backgroundColor = o, "fixed" === a ? (u.width = i, u.height = r, u.backgroundColor = o, u.position = "relative") : ("constrained" === a || "fullWidth" === a) && (u.position = "absolute", u.top = 0, u.left = 0, u.bottom = 0, u.right = 0)), s && (u.objectFit = s), l && (u.objectPosition = l);
      var d = n({}, e, {
        "aria-hidden": !0,
        "data-placeholder-image": "",
        style: n({
          opacity: 1,
          transition: "opacity 500ms linear"
        }, u)
      });
      return x() || (d.style = {
        height: "100%",
        left: 0,
        position: "absolute",
        top: 0,
        width: "100%"
      }), d;
    }(E, 0, b, w, y, M, m, f))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(D, n({
      "data-gatsby-image-ssr": "",
      className: h
    }, v, function (e, t, a, i, r) {
      return void 0 === r && (r = {}), x() || (r = n({
        height: "100%",
        left: 0,
        position: "absolute",
        top: 0,
        transform: "translateZ(0)",
        transition: "opacity 250ms linear",
        width: "100%",
        willChange: "opacity"
      }, r)), n({}, a, {
        loading: i,
        shouldLoad: e,
        "data-main-image": "",
        style: n({}, r, {
          opacity: 0
        })
      });
    }("eager" === c, 0, j, c, g)))));
  },
  Y = ["src", "__imageData", "__error", "width", "height", "aspectRatio", "tracedSVGOptions", "placeholder", "formats", "quality", "transformOptions", "jpgOptions", "pngOptions", "webpOptions", "avifOptions", "blurredOptions", "breakpoints", "outputPixelDensities"],
  Z = function (t) {
    return function (a) {
      var i = a.src,
        r = a.__imageData,
        s = a.__error,
        l = o(a, Y);
      return s && console.warn(s), r ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(t, n({
        image: r
      }, l)) : (console.warn("Image not loaded", i), s || "development" !== "development" || console.warn('Please ensure that "gatsby-plugin-image" is included in the plugins array in gatsby-config.js, and that your version of gatsby is at least 2.24.78'), null);
    };
  }(X),
  J = function (e, t) {
    return "fullWidth" !== e.layout || "width" !== t && "height" !== t || !e[t] ? prop_types__WEBPACK_IMPORTED_MODULE_2___default().number.apply((prop_types__WEBPACK_IMPORTED_MODULE_2___default()), [e, t].concat([].slice.call(arguments, 2))) : new Error('"' + t + '" ' + e[t] + " may not be passed when layout is fullWidth.");
  },
  K = new Set(["fixed", "fullWidth", "constrained"]),
  Q = {
    src: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string).isRequired,
    alt: function (e, t, a) {
      return e.alt || "" === e.alt ? prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.apply((prop_types__WEBPACK_IMPORTED_MODULE_2___default()), [e, t, a].concat([].slice.call(arguments, 3))) : new Error('The "alt" prop is required in ' + a + '. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html');
    },
    width: J,
    height: J,
    sizes: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    layout: function (e) {
      if (void 0 !== e.layout && !K.has(e.layout)) return new Error("Invalid value " + e.layout + '" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".');
    }
  };
Z.displayName = "StaticImage", Z.propTypes = Q;


/***/ }),

/***/ "./src/components/AccountOpen.js":
/*!***************************************!*\
  !*** ./src/components/AccountOpen.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_HeadingSubHeadingLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/HeadingSubHeadingLayout */ "./src/styles/HeadingSubHeadingLayout.js");
/* harmony import */ var gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gatsby-plugin-image */ "./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js");
/* harmony import */ var _styles_ButtonLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/ButtonLayout */ "./src/styles/ButtonLayout.js");
/* harmony import */ var _styles_AccountopenLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/AccountopenLayout */ "./src/styles/AccountopenLayout.js");





const AccountOpen = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_HeadingSubHeadingLayout__WEBPACK_IMPORTED_MODULE_1__.HeadingLayout, {
    style: {
      width: 800,
      marginTop: 100
    }
  }, "Derivates made simple in ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "3 Easy"), " Steps"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_AccountopenLayout__WEBPACK_IMPORTED_MODULE_3__.AccountOpenWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_AccountopenLayout__WEBPACK_IMPORTED_MODULE_3__.AccountWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_4__.StaticImage, {
    src: "../assets/Images/phon1.png",
    alt: "phone",
    width: 276,
    height: 560,
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/582565269.json */ "./.cache/caches/gatsby-plugin-image/582565269.json")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_AccountopenLayout__WEBPACK_IMPORTED_MODULE_3__.StepsWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_4__.StaticImage, {
    src: "../assets/Images/user.png",
    alt: "user",
    width: 120,
    height: 120,
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/656265372.json */ "./.cache/caches/gatsby-plugin-image/656265372.json")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_AccountopenLayout__WEBPACK_IMPORTED_MODULE_3__.StepsHeader, null, "Create an Account"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_AccountopenLayout__WEBPACK_IMPORTED_MODULE_3__.StepsSubHeader, null, "Register & Complete your Verification in less than 2 minutes"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_ButtonLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    style: {
      padding: 13,
      paddingLeft: 48,
      paddingRight: 48
    }
  }, "Trade Now"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_4__.StaticImage, {
    src: "../assets/Images/accountLine.png",
    alt: "line",
    width: 1134,
    height: 2,
    className: "lineImg",
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/4083478856.json */ "./.cache/caches/gatsby-plugin-image/4083478856.json")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_AccountopenLayout__WEBPACK_IMPORTED_MODULE_3__.AccountWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_4__.StaticImage, {
    src: "../assets/Images/iPhoneBlack.png",
    alt: "phone",
    width: 250,
    height: 539,
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/204452805.json */ "./.cache/caches/gatsby-plugin-image/204452805.json")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_AccountopenLayout__WEBPACK_IMPORTED_MODULE_3__.StepsWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_4__.StaticImage, {
    src: "../assets/Images/deposit.png",
    alt: "user",
    width: 108,
    height: 100,
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/2194751856.json */ "./.cache/caches/gatsby-plugin-image/2194751856.json")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_AccountopenLayout__WEBPACK_IMPORTED_MODULE_3__.StepsHeader, null, "Deposit Funds"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_AccountopenLayout__WEBPACK_IMPORTED_MODULE_3__.StepsSubHeader, null, "Add funds quickly using a variety of payment methods"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_ButtonLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    style: {
      padding: 13,
      paddingLeft: 48,
      paddingRight: 48
    }
  }, "Trade Now"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_4__.StaticImage, {
    src: "../assets/Images/accountLine.png",
    alt: "line",
    width: 1134,
    height: 2,
    className: "lineImg",
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/4083478856.json */ "./.cache/caches/gatsby-plugin-image/4083478856.json")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_AccountopenLayout__WEBPACK_IMPORTED_MODULE_3__.AccountWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_4__.StaticImage, {
    src: "../assets/Images/phone3.png",
    alt: "phone",
    width: 276,
    height: 560,
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/3122679878.json */ "./.cache/caches/gatsby-plugin-image/3122679878.json")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_AccountopenLayout__WEBPACK_IMPORTED_MODULE_3__.StepsWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_4__.StaticImage, {
    src: "../assets/Images/deposit.png",
    alt: "user",
    width: 120,
    height: 120,
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/1525485516.json */ "./.cache/caches/gatsby-plugin-image/1525485516.json")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_AccountopenLayout__WEBPACK_IMPORTED_MODULE_3__.StepsHeader, null, "Become a Trader"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_AccountopenLayout__WEBPACK_IMPORTED_MODULE_3__.StepsSubHeader, null, "Choose Your Trading Pair & Trade Seamlessly"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_ButtonLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    style: {
      padding: 13,
      paddingLeft: 48,
      paddingRight: 48
    }
  }, "Trade Now")))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AccountOpen);

/***/ }),

/***/ "./src/components/Community.js":
/*!*************************************!*\
  !*** ./src/components/Community.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby-plugin-image */ "./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js");


const Community = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_1__.StaticImage, {
    src: "../assets/Images/community.png",
    alt: "community",
    width: 1446,
    height: 797,
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/346366339.json */ "./.cache/caches/gatsby-plugin-image/346366339.json")
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Community);

/***/ }),

/***/ "./src/components/Deposit.js":
/*!***********************************!*\
  !*** ./src/components/Deposit.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_DepositLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/DepositLayout */ "./src/styles/DepositLayout.js");
/* harmony import */ var _DepositCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DepositCard */ "./src/components/DepositCard.js");
/* harmony import */ var _styles_HeadingSubHeadingLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/HeadingSubHeadingLayout */ "./src/styles/HeadingSubHeadingLayout.js");




const Deposit = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_DepositLayout__WEBPACK_IMPORTED_MODULE_1__.DepositLayout, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_HeadingSubHeadingLayout__WEBPACK_IMPORTED_MODULE_3__.HeadingLayout, {
    style: {
      color: "#0E0E0F",
      marginTop: 117,
      position: "absolute",
      marginLeft: 400
    }
  }, "Start Small. Earn Big."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_HeadingSubHeadingLayout__WEBPACK_IMPORTED_MODULE_3__.SubHeadingLayout, {
    style: {
      width: 660,
      position: "absolute",
      color: "#32333A",
      marginLeft: 400,
      marginTop: 227
    }
  }, "Deposity a minimum of 1000 and get a Deposit bonus + dedicagted relationship manager"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_DepositCard__WEBPACK_IMPORTED_MODULE_2__["default"], null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Deposit);

/***/ }),

/***/ "./src/components/DepositCard.js":
/*!***************************************!*\
  !*** ./src/components/DepositCard.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_DepositLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/DepositLayout */ "./src/styles/DepositLayout.js");
/* harmony import */ var _styles_HeadingSubHeadingLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/HeadingSubHeadingLayout */ "./src/styles/HeadingSubHeadingLayout.js");
/* harmony import */ var gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby-plugin-image */ "./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js");




const DepositCard = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_DepositLayout__WEBPACK_IMPORTED_MODULE_1__.DepositCardWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_DepositLayout__WEBPACK_IMPORTED_MODULE_1__.DepositCardLayout, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_3__.StaticImage, {
    src: "../assets/Images/depositFrame.png",
    alt: "phone",
    width: 305,
    height: 272,
    className: "frame",
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/1451965566.json */ "./.cache/caches/gatsby-plugin-image/1451965566.json")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_DepositLayout__WEBPACK_IMPORTED_MODULE_1__.DepositCardData, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_3__.StaticImage, {
    src: "../assets/Images/percent.png",
    alt: "phone",
    width: 185,
    height: 117,
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/2482151336.json */ "./.cache/caches/gatsby-plugin-image/2482151336.json")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_DepositLayout__WEBPACK_IMPORTED_MODULE_1__.DepositCardHeader, null, "Deposit Bonus."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_DepositLayout__WEBPACK_IMPORTED_MODULE_1__.DepositCardSubHeader, null, "Our assets' liquidity is unmatched in the market, with a small bid-ask spread and a well-balanced order book."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_DepositLayout__WEBPACK_IMPORTED_MODULE_1__.DepositCardLayout, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_3__.StaticImage, {
    src: "../assets/Images/depositFrame.png",
    alt: "phone",
    width: 305,
    height: 272,
    className: "frame",
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/1451965566.json */ "./.cache/caches/gatsby-plugin-image/1451965566.json")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_DepositLayout__WEBPACK_IMPORTED_MODULE_1__.DepositCardData, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_3__.StaticImage, {
    src: "../assets/Images/Manager.png",
    alt: "phone",
    width: 141,
    height: 101,
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/2360255536.json */ "./.cache/caches/gatsby-plugin-image/2360255536.json")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_DepositLayout__WEBPACK_IMPORTED_MODULE_1__.DepositCardHeader, {
    style: {
      width: "71%",
      display: "flex",
      flexWrap: "wrap"
    }
  }, "Dedicated Relationship Manager."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_DepositLayout__WEBPACK_IMPORTED_MODULE_1__.DepositCardSubHeader, null, "Our assets' liquidity is unmatched in the market, with a small bid-ask spread and a well-balanced order book."))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DepositCard);

/***/ }),

/***/ "./src/components/FeeCard.js":
/*!***********************************!*\
  !*** ./src/components/FeeCard.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_FeeCardLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/FeeCardLayout */ "./src/styles/FeeCardLayout.js");
/* harmony import */ var gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby-plugin-image */ "./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js");



const FeeCard = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_FeeCardLayout__WEBPACK_IMPORTED_MODULE_1__.FeeCardWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_FeeCardLayout__WEBPACK_IMPORTED_MODULE_1__.FeecardsLayout, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_2__.StaticImage, {
    src: "../assets/Images/Frame.png",
    alt: "phone",
    width: 284,
    height: 239,
    className: "frame",
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/4096760769.json */ "./.cache/caches/gatsby-plugin-image/4096760769.json")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_FeeCardLayout__WEBPACK_IMPORTED_MODULE_1__.FeeCardData, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_2__.StaticImage, {
    src: "../assets/Images/coindcx.png",
    alt: "phone",
    width: 146,
    height: 30,
    className: "company",
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/877668297.json */ "./.cache/caches/gatsby-plugin-image/877668297.json")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_FeeCardLayout__WEBPACK_IMPORTED_MODULE_1__.DataWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_FeeCardLayout__WEBPACK_IMPORTED_MODULE_1__.CardNumberData, null, "0.025"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_FeeCardLayout__WEBPACK_IMPORTED_MODULE_1__.CardTextData, null, "Maker Fees")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_FeeCardLayout__WEBPACK_IMPORTED_MODULE_1__.DataWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_FeeCardLayout__WEBPACK_IMPORTED_MODULE_1__.CardNumberData, null, "0.07"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_FeeCardLayout__WEBPACK_IMPORTED_MODULE_1__.CardTextData, null, "Taker Fees")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_FeeCardLayout__WEBPACK_IMPORTED_MODULE_1__.FeemiddlecardsLayout, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_2__.StaticImage, {
    src: "../assets/Images/Frame.png",
    alt: "phone",
    width: 284,
    height: 239,
    className: "frame",
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/4096760769.json */ "./.cache/caches/gatsby-plugin-image/4096760769.json")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_FeeCardLayout__WEBPACK_IMPORTED_MODULE_1__.FeeCardData, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_2__.StaticImage, {
    src: "../assets/Images/density.png",
    alt: "phone",
    width: 146,
    height: 30,
    className: "company",
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/3278153188.json */ "./.cache/caches/gatsby-plugin-image/3278153188.json")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_FeeCardLayout__WEBPACK_IMPORTED_MODULE_1__.DataWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_FeeCardLayout__WEBPACK_IMPORTED_MODULE_1__.CardNumbersData, null, "0.002"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_FeeCardLayout__WEBPACK_IMPORTED_MODULE_1__.CardTextsData, null, "Maker Fees")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_FeeCardLayout__WEBPACK_IMPORTED_MODULE_1__.DataWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_FeeCardLayout__WEBPACK_IMPORTED_MODULE_1__.CardNumbersData, null, "0.04"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_FeeCardLayout__WEBPACK_IMPORTED_MODULE_1__.CardTextsData, null, "Taker Fees")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_FeeCardLayout__WEBPACK_IMPORTED_MODULE_1__.FeecardsLayout, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_2__.StaticImage, {
    src: "../assets/Images/Frame.png",
    alt: "phone",
    width: 284,
    height: 239,
    className: "frame",
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/4096760769.json */ "./.cache/caches/gatsby-plugin-image/4096760769.json")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_FeeCardLayout__WEBPACK_IMPORTED_MODULE_1__.FeeCardData, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_2__.StaticImage, {
    src: "../assets/Images/deltaExchange.png",
    alt: "phone",
    width: 146,
    height: 30,
    className: "company",
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/3688739600.json */ "./.cache/caches/gatsby-plugin-image/3688739600.json")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_FeeCardLayout__WEBPACK_IMPORTED_MODULE_1__.DataWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_FeeCardLayout__WEBPACK_IMPORTED_MODULE_1__.CardNumberData, null, "0.002"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_FeeCardLayout__WEBPACK_IMPORTED_MODULE_1__.CardTextData, null, "Maker Fees")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_FeeCardLayout__WEBPACK_IMPORTED_MODULE_1__.DataWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_FeeCardLayout__WEBPACK_IMPORTED_MODULE_1__.CardNumberData, null, "0.05"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_FeeCardLayout__WEBPACK_IMPORTED_MODULE_1__.CardTextData, null, "Taker Fees")))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FeeCard);

/***/ }),

/***/ "./src/components/Feedback.js":
/*!************************************!*\
  !*** ./src/components/Feedback.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_FeedbackLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/FeedbackLayout */ "./src/styles/FeedbackLayout.js");
/* harmony import */ var _styles_HeadingSubHeadingLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/HeadingSubHeadingLayout */ "./src/styles/HeadingSubHeadingLayout.js");
/* harmony import */ var _FeedbackCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FeedbackCard */ "./src/components/FeedbackCard.js");




const Feedback = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_FeedbackLayout__WEBPACK_IMPORTED_MODULE_1__.FeedbackLayout, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_HeadingSubHeadingLayout__WEBPACK_IMPORTED_MODULE_2__.HeadingLayout, {
    style: {
      color: "#0E0E0F",
      marginTop: 117,
      position: "absolute",
      marginLeft: 320
    }
  }, "Don\u2019t take our word for it."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_HeadingSubHeadingLayout__WEBPACK_IMPORTED_MODULE_2__.SubHeadingLayout, {
    style: {
      width: 660,
      position: "absolute",
      color: "#32333A",
      marginLeft: 400,
      marginTop: 227
    }
  }, "Hear it from our expert community of traders who have made insane amounts in a short amount of time"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FeedbackCard__WEBPACK_IMPORTED_MODULE_3__["default"], null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Feedback);

/***/ }),

/***/ "./src/components/FeedbackCard.js":
/*!****************************************!*\
  !*** ./src/components/FeedbackCard.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_FeedbackLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/FeedbackLayout */ "./src/styles/FeedbackLayout.js");
/* harmony import */ var _styles_HeadingSubHeadingLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/HeadingSubHeadingLayout */ "./src/styles/HeadingSubHeadingLayout.js");
/* harmony import */ var gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby-plugin-image */ "./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js");




const FeedbackCard = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_FeedbackLayout__WEBPACK_IMPORTED_MODULE_1__.FeedbackCardWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_FeedbackLayout__WEBPACK_IMPORTED_MODULE_1__.FeedbackCardLayout, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_3__.StaticImage, {
    src: "../assets/Images/depositFrame.png",
    alt: "phone",
    width: 305,
    height: 272,
    className: "frame",
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/3805666073.json */ "./.cache/caches/gatsby-plugin-image/3805666073.json")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_FeedbackLayout__WEBPACK_IMPORTED_MODULE_1__.FeedbackCardData, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_FeedbackLayout__WEBPACK_IMPORTED_MODULE_1__.FeedbackTextInfo, null, "As someone who's always looking for the next big thing, I was really excited to try out Density\u2019s crypto futures trading platform. And I have to say, it definitely lived up to my expectations."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_FeedbackLayout__WEBPACK_IMPORTED_MODULE_1__.FeedbackPersonWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_FeedbackLayout__WEBPACK_IMPORTED_MODULE_1__.PersonInfo, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_FeedbackLayout__WEBPACK_IMPORTED_MODULE_1__.Personname, null, "Prakash Jamatia."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_FeedbackLayout__WEBPACK_IMPORTED_MODULE_1__.PersonDesig, null, "Founder, Tradeshala")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_3__.StaticImage, {
    src: "../assets/Images/prakash.png",
    alt: "prakash",
    width: 126,
    height: 187,
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/2040775545.json */ "./.cache/caches/gatsby-plugin-image/2040775545.json")
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_FeedbackLayout__WEBPACK_IMPORTED_MODULE_1__.FeedbackCardLayout, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_3__.StaticImage, {
    src: "../assets/Images/depositFrame.png",
    alt: "phone",
    width: 305,
    height: 272,
    className: "frame",
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/3805666073.json */ "./.cache/caches/gatsby-plugin-image/3805666073.json")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_FeedbackLayout__WEBPACK_IMPORTED_MODULE_1__.FeedbackCardData, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_FeedbackLayout__WEBPACK_IMPORTED_MODULE_1__.FeedbackTextInfo, null, "I'm not a seasoned trader, but this website has made it easy for me to get started with crypto futures trading. Their KYC was very fast and the educational resources were really helpful."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_FeedbackLayout__WEBPACK_IMPORTED_MODULE_1__.FeedbackPersonWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_FeedbackLayout__WEBPACK_IMPORTED_MODULE_1__.PersonInfo, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_FeedbackLayout__WEBPACK_IMPORTED_MODULE_1__.Personname, null, "Shambhavi Nayak."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_FeedbackLayout__WEBPACK_IMPORTED_MODULE_1__.PersonDesig, null, "Commodity Trader")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_3__.StaticImage, {
    src: "../assets/Images/shambhavi.png",
    alt: "shambhavi",
    width: 216,
    height: 248,
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/1507102960.json */ "./.cache/caches/gatsby-plugin-image/1507102960.json")
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_FeedbackLayout__WEBPACK_IMPORTED_MODULE_1__.FeedbackCardLayout, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_3__.StaticImage, {
    src: "../assets/Images/depositFrame.png",
    alt: "phone",
    width: 305,
    height: 272,
    className: "frame",
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/3805666073.json */ "./.cache/caches/gatsby-plugin-image/3805666073.json")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_FeedbackLayout__WEBPACK_IMPORTED_MODULE_1__.FeedbackCardData, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_FeedbackLayout__WEBPACK_IMPORTED_MODULE_1__.FeedbackTextInfo, null, "I've been using this platform for a few months now and it's been a great experience. I was delighted to see all the major crypto coins listed on Density Exchange."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_FeedbackLayout__WEBPACK_IMPORTED_MODULE_1__.FeedbackPersonWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_FeedbackLayout__WEBPACK_IMPORTED_MODULE_1__.PersonInfo, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_FeedbackLayout__WEBPACK_IMPORTED_MODULE_1__.Personname, null, "Arjun Naik."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_FeedbackLayout__WEBPACK_IMPORTED_MODULE_1__.PersonDesig, null, "Equity Trader")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_3__.StaticImage, {
    src: "../assets/Images/arjunNayak.png",
    alt: "arjunNayak",
    width: 200,
    height: 239,
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/83361771.json */ "./.cache/caches/gatsby-plugin-image/83361771.json")
  })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FeedbackCard);

/***/ }),

/***/ "./src/components/Footer.js":
/*!**********************************!*\
  !*** ./src/components/Footer.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_FooterLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/FooterLayout */ "./src/styles/FooterLayout.js");
/* harmony import */ var gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby-plugin-image */ "./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js");



const Footer = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_FooterLayout__WEBPACK_IMPORTED_MODULE_1__.FooterLayout, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_2__.StaticImage, {
    src: "../assets/Images/Logo.png",
    alt: "logo",
    width: 128,
    height: 30,
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/909276331.json */ "./.cache/caches/gatsby-plugin-image/909276331.json")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_FooterLayout__WEBPACK_IMPORTED_MODULE_1__.FooterLinkWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_FooterLayout__WEBPACK_IMPORTED_MODULE_1__.FooterLink, null, "Blog"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_FooterLayout__WEBPACK_IMPORTED_MODULE_1__.FooterLink, null, "Fees"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_FooterLayout__WEBPACK_IMPORTED_MODULE_1__.FooterLink, null, "Leaderboard"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_FooterLayout__WEBPACK_IMPORTED_MODULE_1__.FooterLink, null, "Careers"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_FooterLayout__WEBPACK_IMPORTED_MODULE_1__.FooterLink, null, "Contact Us"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_FooterLayout__WEBPACK_IMPORTED_MODULE_1__.FooterLink, null, "Privacy Policy")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_FooterLayout__WEBPACK_IMPORTED_MODULE_1__.FooterText, null, "L\xF6rem ipsum od ohet dilogi. Bell trabel, samuligt, oh\xF6bel utom diska. Jinesade bel n\xE4r feras redorade i belogi. FAR paratyp i muv\xE5ning, och pesask vyfisat. Viktiga poddradio har un mad och inde."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_FooterLayout__WEBPACK_IMPORTED_MODULE_1__.SocialMediaWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_2__.StaticImage, {
    src: "../assets/Images/facebooklogo.png",
    alt: "logo",
    width: 32,
    height: 32,
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/419950840.json */ "./.cache/caches/gatsby-plugin-image/419950840.json")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_2__.StaticImage, {
    src: "../assets/Images/Twitter logo.png",
    alt: "logo",
    width: 32,
    height: 32,
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/666639734.json */ "./.cache/caches/gatsby-plugin-image/666639734.json")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_2__.StaticImage, {
    src: "../assets/Images/linkedin logo.png",
    alt: "logo",
    width: 32,
    height: 32,
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/750106072.json */ "./.cache/caches/gatsby-plugin-image/750106072.json")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_2__.StaticImage, {
    src: "../assets/Images/instagram logo.png",
    alt: "logo",
    width: 32,
    height: 32,
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/4126987473.json */ "./.cache/caches/gatsby-plugin-image/4126987473.json")
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

/***/ }),

/***/ "./src/components/Frontiers.js":
/*!*************************************!*\
  !*** ./src/components/Frontiers.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FrontiersData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FrontiersData */ "./src/components/FrontiersData.js");
/* harmony import */ var _styles_FrontiersLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/FrontiersLayout */ "./src/styles/FrontiersLayout.js");
/* harmony import */ var _styles_HeadingSubHeadingLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/HeadingSubHeadingLayout */ "./src/styles/HeadingSubHeadingLayout.js");
/* harmony import */ var gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gatsby-plugin-image */ "./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js");





const Frontiers = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_HeadingSubHeadingLayout__WEBPACK_IMPORTED_MODULE_3__.HeadingLayout, {
    style: {
      width: 846,
      marginTop: 80
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "Unlock "), "New Frontiers."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_HeadingSubHeadingLayout__WEBPACK_IMPORTED_MODULE_3__.SubHeadingLayout, {
    style: {
      width: 660,
      marginLeft: 400
    }
  }, "Are you a stock trader looking for new opportunities to make money? We got you covered!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FrontiersData__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_FrontiersLayout__WEBPACK_IMPORTED_MODULE_2__.FrontiersImageWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_4__.StaticImage, {
    src: "../assets/Images/Nifty.png",
    alt: "phone",
    width: 1130,
    height: 510,
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/2665924753.json */ "./.cache/caches/gatsby-plugin-image/2665924753.json")
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Frontiers);

/***/ }),

/***/ "./src/components/FrontiersData.js":
/*!*****************************************!*\
  !*** ./src/components/FrontiersData.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_FrontiersLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/FrontiersLayout */ "./src/styles/FrontiersLayout.js");
/* harmony import */ var gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby-plugin-image */ "./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js");



const FrontiersData = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_FrontiersLayout__WEBPACK_IMPORTED_MODULE_1__.FrontiersDataLayout, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_FrontiersLayout__WEBPACK_IMPORTED_MODULE_1__.Data, null, "Same Strategies"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_2__.StaticImage, {
    src: "../assets/Images/line.png",
    alt: "line",
    height: 172,
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/1150532864.json */ "./.cache/caches/gatsby-plugin-image/1150532864.json")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_FrontiersLayout__WEBPACK_IMPORTED_MODULE_1__.Data, null, "Same Indicators"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_2__.StaticImage, {
    src: "../assets/Images/line.png",
    alt: "line",
    height: 172,
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/1150532864.json */ "./.cache/caches/gatsby-plugin-image/1150532864.json")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_FrontiersLayout__WEBPACK_IMPORTED_MODULE_1__.Data, null, "Better Leverage"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_2__.StaticImage, {
    src: "../assets/Images/line.png",
    alt: "line",
    height: 172,
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/1150532864.json */ "./.cache/caches/gatsby-plugin-image/1150532864.json")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_FrontiersLayout__WEBPACK_IMPORTED_MODULE_1__.Data, null, "24x7 Trading"));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FrontiersData);

/***/ }),

/***/ "./src/components/HeroSection.js":
/*!***************************************!*\
  !*** ./src/components/HeroSection.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_HeroLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/HeroLayout */ "./src/styles/HeroLayout.js");
/* harmony import */ var _styles_HeadingSubHeadingLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/HeadingSubHeadingLayout */ "./src/styles/HeadingSubHeadingLayout.js");
/* harmony import */ var gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby-plugin-image */ "./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js");




const HeroSection = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_HeroLayout__WEBPACK_IMPORTED_MODULE_1__.HeroLayout, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_HeroLayout__WEBPACK_IMPORTED_MODULE_1__.HeroText, null, "It\u2019s time to trade, the ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "future.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", null, "Trade BTC, ETH Futures with 125x leverage and earn rewards."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_3__.StaticImage, {
    src: "../assets/Images/phones.png",
    alt: "phone",
    width: 779.594,
    height: 668.698,
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/4049927832.json */ "./.cache/caches/gatsby-plugin-image/4049927832.json")
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeroSection);

/***/ }),

/***/ "./src/components/Layout.js":
/*!**********************************!*\
  !*** ./src/components/Layout.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navbar */ "./src/components/Navbar.js");
/* harmony import */ var _HeroSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HeroSection */ "./src/components/HeroSection.js");
/* harmony import */ var _TradeData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TradeData */ "./src/components/TradeData.js");
/* harmony import */ var _TradeBody__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TradeBody */ "./src/components/TradeBody.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Footer */ "./src/components/Footer.js");
/* harmony import */ var _styles_GlobalStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/GlobalStyles */ "./src/styles/GlobalStyles.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");








const theme = {
  colors: {
    colorblack: "#000000",
    colorYellowGreen: "#e2ff6f",
    colorlightGray: "#fcfcfc"
  }
};
const Layout = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(styled_components__WEBPACK_IMPORTED_MODULE_7__.ThemeProvider, {
    theme: theme
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_GlobalStyles__WEBPACK_IMPORTED_MODULE_6__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Navbar__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_HeroSection__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_TradeData__WEBPACK_IMPORTED_MODULE_3__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_TradeBody__WEBPACK_IMPORTED_MODULE_4__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Footer__WEBPACK_IMPORTED_MODULE_5__["default"], null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

/***/ }),

/***/ "./src/components/Market.js":
/*!**********************************!*\
  !*** ./src/components/Market.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_HeadingSubHeadingLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/HeadingSubHeadingLayout */ "./src/styles/HeadingSubHeadingLayout.js");
/* harmony import */ var _styles_MarketLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/MarketLayout */ "./src/styles/MarketLayout.js");
/* harmony import */ var _styles_ButtonLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/ButtonLayout */ "./src/styles/ButtonLayout.js");
/* harmony import */ var gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gatsby-plugin-image */ "./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js");





const Market = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_HeadingSubHeadingLayout__WEBPACK_IMPORTED_MODULE_1__.HeadingLayout, {
    style: {
      width: 794
    }
  }, "Explore the Markets like it is your ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "Playground.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_HeadingSubHeadingLayout__WEBPACK_IMPORTED_MODULE_1__.SubHeadingLayout, null, "Search for your favorite coins and stay ahead of the market"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_MarketLayout__WEBPACK_IMPORTED_MODULE_2__.MarketImageWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_4__.StaticImage, {
    src: "../assets/Images/market.png",
    alt: "phone",
    width: 1135,
    height: 671,
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/1157489274.json */ "./.cache/caches/gatsby-plugin-image/1157489274.json")
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_ButtonLayout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    style: {
      marginLeft: 600,
      padding: 13,
      paddingLeft: 48,
      paddingRight: 48
    }
  }, "Explore Markets"));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Market);

/***/ }),

/***/ "./src/components/MoneyCard.js":
/*!*************************************!*\
  !*** ./src/components/MoneyCard.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_MoneyEarningLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/MoneyEarningLayout */ "./src/styles/MoneyEarningLayout.js");
/* harmony import */ var gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby-plugin-image */ "./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js");



const MoneyCard = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_MoneyEarningLayout__WEBPACK_IMPORTED_MODULE_1__.MoneyCardWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_MoneyEarningLayout__WEBPACK_IMPORTED_MODULE_1__.MoneyCardLayout, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_2__.StaticImage, {
    src: "../assets/Images/Frame.png",
    alt: "phone",
    width: 284,
    height: 239,
    className: "frame",
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/1785244520.json */ "./.cache/caches/gatsby-plugin-image/1785244520.json")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_MoneyEarningLayout__WEBPACK_IMPORTED_MODULE_1__.MoneyCardData, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_2__.StaticImage, {
    src: "../assets/Images/share.png",
    alt: "phone",
    width: 104,
    height: 91,
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/2435989877.json */ "./.cache/caches/gatsby-plugin-image/2435989877.json")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_MoneyEarningLayout__WEBPACK_IMPORTED_MODULE_1__.CardText, null, "Share your your referral link"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_MoneyEarningLayout__WEBPACK_IMPORTED_MODULE_1__.MoneyCardLayout, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_2__.StaticImage, {
    src: "../assets/Images/Frame.png",
    alt: "phone",
    width: 284,
    height: 239,
    className: "frame",
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/1785244520.json */ "./.cache/caches/gatsby-plugin-image/1785244520.json")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_MoneyEarningLayout__WEBPACK_IMPORTED_MODULE_1__.MoneyCardData, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_2__.StaticImage, {
    src: "../assets/Images/friend.png",
    alt: "phone",
    width: 108,
    height: 96,
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/1851269563.json */ "./.cache/caches/gatsby-plugin-image/1851269563.json")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_MoneyEarningLayout__WEBPACK_IMPORTED_MODULE_1__.CardText, null, "Invite Friends to Trade on Density"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_MoneyEarningLayout__WEBPACK_IMPORTED_MODULE_1__.MoneyCardLayout, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_2__.StaticImage, {
    src: "../assets/Images/Frame.png",
    alt: "phone",
    width: 284,
    height: 239,
    className: "frame",
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/1785244520.json */ "./.cache/caches/gatsby-plugin-image/1785244520.json")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_MoneyEarningLayout__WEBPACK_IMPORTED_MODULE_1__.MoneyCardData, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_2__.StaticImage, {
    src: "../assets/Images/trade.png",
    alt: "phone",
    width: 97,
    height: 104,
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/2979147988.json */ "./.cache/caches/gatsby-plugin-image/2979147988.json")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_MoneyEarningLayout__WEBPACK_IMPORTED_MODULE_1__.CardText, {
    style: {
      width: 140
    }
  }, "Trade and Earn"))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MoneyCard);

/***/ }),

/***/ "./src/components/MoneyEarning.js":
/*!****************************************!*\
  !*** ./src/components/MoneyEarning.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gatsby-plugin-image */ "./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js");
/* harmony import */ var _styles_MoneyEarningLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/MoneyEarningLayout */ "./src/styles/MoneyEarningLayout.js");
/* harmony import */ var _MoneyCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MoneyCard */ "./src/components/MoneyCard.js");
/* harmony import */ var _styles_ButtonLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/ButtonLayout */ "./src/styles/ButtonLayout.js");
/* harmony import */ var _styles_HeadingSubHeadingLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/HeadingSubHeadingLayout */ "./src/styles/HeadingSubHeadingLayout.js");






const MoneyEarning = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_MoneyEarningLayout__WEBPACK_IMPORTED_MODULE_1__.MoneyEarningLayout, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_5__.StaticImage, {
    src: "../assets/Images/sound.png",
    alt: "sound",
    width: 189,
    height: 189,
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/4289327926.json */ "./.cache/caches/gatsby-plugin-image/4289327926.json")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_HeadingSubHeadingLayout__WEBPACK_IMPORTED_MODULE_4__.HeadingLayout, null, "Earn Money. ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "The Easy Way.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_HeadingSubHeadingLayout__WEBPACK_IMPORTED_MODULE_4__.SubHeadingLayout, null, "No Complexity of Trading Fee, generate volume and win"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MoneyCard__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_ButtonLayout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    style: {
      padding: 14,
      paddingLeft: 48,
      paddingRight: 48
    }
  }, "start earning now"));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MoneyEarning);

/***/ }),

/***/ "./src/components/Navbar.js":
/*!**********************************!*\
  !*** ./src/components/Navbar.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_NavbarLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/NavbarLayout */ "./src/styles/NavbarLayout.js");
/* harmony import */ var gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby-plugin-image */ "./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js");
/* harmony import */ var _styles_ButtonLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/ButtonLayout */ "./src/styles/ButtonLayout.js");




const Navbar = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_NavbarLayout__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_3__.StaticImage, {
    src: "../assets/Images/Logo.png",
    alt: "logo",
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/3317414867.json */ "./.cache/caches/gatsby-plugin-image/3317414867.json")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "navWrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Career"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Blogs"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Leaderboard"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Fees")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_ButtonLayout__WEBPACK_IMPORTED_MODULE_2__["default"], null, "TRADE NOW")));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);

/***/ }),

/***/ "./src/components/Partnership.js":
/*!***************************************!*\
  !*** ./src/components/Partnership.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_HeadingSubHeadingLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/HeadingSubHeadingLayout */ "./src/styles/HeadingSubHeadingLayout.js");
/* harmony import */ var _styles_ParnershipLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/ParnershipLayout */ "./src/styles/ParnershipLayout.js");
/* harmony import */ var gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby-plugin-image */ "./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js");




const Partnership = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_ParnershipLayout__WEBPACK_IMPORTED_MODULE_2__.PartnershipLayout, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_HeadingSubHeadingLayout__WEBPACK_IMPORTED_MODULE_1__.HeadingLayout, null, "Backed by the Best."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_ParnershipLayout__WEBPACK_IMPORTED_MODULE_2__.PartnerCompany, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_3__.StaticImage, {
    src: "../assets/Images/orios.png",
    alt: "orios",
    width: 185,
    height: 40,
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/4280404961.json */ "./.cache/caches/gatsby-plugin-image/4280404961.json")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_3__.StaticImage, {
    src: "../assets/Images/inflection.png",
    alt: "inflection",
    width: 125,
    height: 100,
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/1300974778.json */ "./.cache/caches/gatsby-plugin-image/1300974778.json")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_3__.StaticImage, {
    src: "../assets/Images/iSeed.png",
    alt: "iSeed",
    width: 109,
    height: 64,
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/184363866.json */ "./.cache/caches/gatsby-plugin-image/184363866.json")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_3__.StaticImage, {
    src: "../assets/Images/perpetualValue.png",
    alt: "perpetualValue",
    width: 182,
    height: 64,
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/1891550608.json */ "./.cache/caches/gatsby-plugin-image/1891550608.json")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_3__.StaticImage, {
    src: "../assets/Images/rise.png",
    alt: "rise",
    width: 120,
    height: 121,
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/2517400013.json */ "./.cache/caches/gatsby-plugin-image/2517400013.json")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_3__.StaticImage, {
    src: "../assets/Images/tribeCapital.png",
    alt: "tribeCapital",
    width: 236,
    height: 24,
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/4134245326.json */ "./.cache/caches/gatsby-plugin-image/4134245326.json")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_3__.StaticImage, {
    src: "../assets/Images/polygon.png",
    alt: "polygon",
    width: 220,
    height: 40,
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/1676169924.json */ "./.cache/caches/gatsby-plugin-image/1676169924.json")
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_ParnershipLayout__WEBPACK_IMPORTED_MODULE_2__.CompanyPerson, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_ParnershipLayout__WEBPACK_IMPORTED_MODULE_2__.PersonInfo, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_3__.StaticImage, {
    src: "../assets/Images/UtsavSomani.png",
    alt: "utsav",
    width: 120,
    height: 138,
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/2827232726.json */ "./.cache/caches/gatsby-plugin-image/2827232726.json")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_ParnershipLayout__WEBPACK_IMPORTED_MODULE_2__.PersonName, null, "Utsav Somani")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_ParnershipLayout__WEBPACK_IMPORTED_MODULE_2__.PersonInfo, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_3__.StaticImage, {
    src: "../assets/Images/aditya.png",
    alt: "utsav",
    width: 120,
    height: 138,
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/3302983342.json */ "./.cache/caches/gatsby-plugin-image/3302983342.json")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_ParnershipLayout__WEBPACK_IMPORTED_MODULE_2__.PersonName, null, "Aditya Nagarsheth ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", null, "Perpetual Value Partners"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_ParnershipLayout__WEBPACK_IMPORTED_MODULE_2__.PersonInfo, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_3__.StaticImage, {
    src: "../assets/Images/gokul.png",
    alt: "utsav",
    width: 120,
    height: 138,
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/908151176.json */ "./.cache/caches/gatsby-plugin-image/908151176.json")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_ParnershipLayout__WEBPACK_IMPORTED_MODULE_2__.PersonName, null, "Gokul Rajaram")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_ParnershipLayout__WEBPACK_IMPORTED_MODULE_2__.PersonInfo, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_3__.StaticImage, {
    src: "../assets/Images/sajid.png",
    alt: "utsav",
    width: 120,
    height: 138,
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/1759918372.json */ "./.cache/caches/gatsby-plugin-image/1759918372.json")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_ParnershipLayout__WEBPACK_IMPORTED_MODULE_2__.PersonName, null, "Sajid Rehman ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", null, "My Asia VC"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_ParnershipLayout__WEBPACK_IMPORTED_MODULE_2__.PersonInfo, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_3__.StaticImage, {
    src: "../assets/Images/arjun.png",
    alt: "utsav",
    width: 120,
    height: 138,
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/278232383.json */ "./.cache/caches/gatsby-plugin-image/278232383.json")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_ParnershipLayout__WEBPACK_IMPORTED_MODULE_2__.PersonName, null, "Arjun Sethi ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", null, "Tribe Capital"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_ParnershipLayout__WEBPACK_IMPORTED_MODULE_2__.PersonInfo, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_3__.StaticImage, {
    src: "../assets/Images/kunal.png",
    alt: "utsav",
    width: 120,
    height: 138,
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/2143448283.json */ "./.cache/caches/gatsby-plugin-image/2143448283.json")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_ParnershipLayout__WEBPACK_IMPORTED_MODULE_2__.PersonName, null, "Kunal Shah")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_ParnershipLayout__WEBPACK_IMPORTED_MODULE_2__.PersonInfo, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_3__.StaticImage, {
    src: "../assets/Images/sandeep.png",
    alt: "utsav",
    width: 120,
    height: 138,
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/1895914926.json */ "./.cache/caches/gatsby-plugin-image/1895914926.json")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_ParnershipLayout__WEBPACK_IMPORTED_MODULE_2__.PersonName, null, "Sandeep Nailawal ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", null, "Polygon Labs"), " ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_ParnershipLayout__WEBPACK_IMPORTED_MODULE_2__.PersonInfo, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_3__.StaticImage, {
    src: "../assets/Images/karn.png",
    alt: "utsav",
    width: 120,
    height: 138,
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/18668073.json */ "./.cache/caches/gatsby-plugin-image/18668073.json")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_ParnershipLayout__WEBPACK_IMPORTED_MODULE_2__.PersonName, null, "Karn Vivek Nagpal"))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Partnership);

/***/ }),

/***/ "./src/components/TradeBody.js":
/*!*************************************!*\
  !*** ./src/components/TradeBody.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! gatsby-plugin-image */ "./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js");
/* harmony import */ var _styles_TradeBodyLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/TradeBodyLayout */ "./src/styles/TradeBodyLayout.js");
/* harmony import */ var _TradeFee__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TradeFee */ "./src/components/TradeFee.js");
/* harmony import */ var _Market__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Market */ "./src/components/Market.js");
/* harmony import */ var _Frontiers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Frontiers */ "./src/components/Frontiers.js");
/* harmony import */ var _Deposit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Deposit */ "./src/components/Deposit.js");
/* harmony import */ var _AccountOpen__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./AccountOpen */ "./src/components/AccountOpen.js");
/* harmony import */ var _Partnership__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Partnership */ "./src/components/Partnership.js");
/* harmony import */ var _Feedback__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Feedback */ "./src/components/Feedback.js");
/* harmony import */ var _MoneyEarning__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./MoneyEarning */ "./src/components/MoneyEarning.js");
/* harmony import */ var _Community__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Community */ "./src/components/Community.js");
/* harmony import */ var _Visionaries__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Visionaries */ "./src/components/Visionaries.js");













const TradeBody = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_TradeBodyLayout__WEBPACK_IMPORTED_MODULE_1__.PhoneWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_12__.StaticImage, {
    src: "../assets/Images/phoneGroup.png",
    alt: "phones",
    height: 1500,
    width: 280,
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/3474568836.json */ "./.cache/caches/gatsby-plugin-image/3474568836.json")
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_TradeFee__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Market__WEBPACK_IMPORTED_MODULE_3__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Frontiers__WEBPACK_IMPORTED_MODULE_4__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Deposit__WEBPACK_IMPORTED_MODULE_5__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_AccountOpen__WEBPACK_IMPORTED_MODULE_6__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Partnership__WEBPACK_IMPORTED_MODULE_7__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Feedback__WEBPACK_IMPORTED_MODULE_8__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MoneyEarning__WEBPACK_IMPORTED_MODULE_9__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Community__WEBPACK_IMPORTED_MODULE_10__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Visionaries__WEBPACK_IMPORTED_MODULE_11__["default"], null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TradeBody);

/***/ }),

/***/ "./src/components/TradeData.js":
/*!*************************************!*\
  !*** ./src/components/TradeData.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_TradeDataLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/TradeDataLayout */ "./src/styles/TradeDataLayout.js");
/* harmony import */ var gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby-plugin-image */ "./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js");



const TradeData = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_TradeDataLayout__WEBPACK_IMPORTED_MODULE_1__.TradeDataLayout, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_TradeDataLayout__WEBPACK_IMPORTED_MODULE_1__.DataContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "numberData"
  }, "00%"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "textData"
  }, "Conversion Fee")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_2__.StaticImage, {
    src: "../assets/Images/line.png",
    alt: "line",
    height: 172,
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/769930326.json */ "./.cache/caches/gatsby-plugin-image/769930326.json")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_TradeDataLayout__WEBPACK_IMPORTED_MODULE_1__.DataContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "numberData"
  }, "500 Mn+"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "textData"
  }, "Lifetime Volume Traded")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_2__.StaticImage, {
    src: "../assets/Images/line.png",
    alt: "line",
    height: 172,
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/769930326.json */ "./.cache/caches/gatsby-plugin-image/769930326.json")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_TradeDataLayout__WEBPACK_IMPORTED_MODULE_1__.DataContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "numberData"
  }, "250+"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "textData"
  }, "Total Tradable Pairs")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_2__.StaticImage, {
    src: "../assets/Images/line.png",
    alt: "line",
    height: 172,
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/769930326.json */ "./.cache/caches/gatsby-plugin-image/769930326.json")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_TradeDataLayout__WEBPACK_IMPORTED_MODULE_1__.DataContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "numberData"
  }, "15,000+"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "textData"
  }, "Traders")));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TradeData);

/***/ }),

/***/ "./src/components/TradeFee.js":
/*!************************************!*\
  !*** ./src/components/TradeFee.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_TradeFeeLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/TradeFeeLayout */ "./src/styles/TradeFeeLayout.js");
/* harmony import */ var _FeeCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FeeCard */ "./src/components/FeeCard.js");
/* harmony import */ var _styles_HeadingSubHeadingLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/HeadingSubHeadingLayout */ "./src/styles/HeadingSubHeadingLayout.js");




const TradeFee = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_TradeFeeLayout__WEBPACK_IMPORTED_MODULE_1__.TradeFeeLayout, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_HeadingSubHeadingLayout__WEBPACK_IMPORTED_MODULE_3__.HeadingLayout, null, "Trade More. ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "Pay Less.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_HeadingSubHeadingLayout__WEBPACK_IMPORTED_MODULE_3__.SubHeadingLayout, null, "Our low Fees Supercharge Your Profits"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FeeCard__WEBPACK_IMPORTED_MODULE_2__["default"], null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TradeFee);

/***/ }),

/***/ "./src/components/Visionaries.js":
/*!***************************************!*\
  !*** ./src/components/Visionaries.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_HeadingSubHeadingLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/HeadingSubHeadingLayout */ "./src/styles/HeadingSubHeadingLayout.js");
/* harmony import */ var _styles_VisionariesLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/VisionariesLayout */ "./src/styles/VisionariesLayout.js");
/* harmony import */ var _VisionariesCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./VisionariesCard */ "./src/components/VisionariesCard.js");




const Visionaries = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_VisionariesLayout__WEBPACK_IMPORTED_MODULE_2__.VisionariesLayout, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_HeadingSubHeadingLayout__WEBPACK_IMPORTED_MODULE_1__.HeadingLayout, {
    style: {
      width: 775
    }
  }, "Meet the ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "Visionaries"), " behind Density."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_VisionariesCard__WEBPACK_IMPORTED_MODULE_3__["default"], null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Visionaries);

/***/ }),

/***/ "./src/components/VisionariesCard.js":
/*!*******************************************!*\
  !*** ./src/components/VisionariesCard.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby-plugin-image */ "./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js");
/* harmony import */ var _styles_VisionariesLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/VisionariesLayout */ "./src/styles/VisionariesLayout.js");



const VisionariesCard = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_VisionariesLayout__WEBPACK_IMPORTED_MODULE_1__.VisionariesCardWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_VisionariesLayout__WEBPACK_IMPORTED_MODULE_1__.VisionariesCardLayout, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_2__.StaticImage, {
    src: "../assets/Images/Frame.png",
    alt: "phone",
    width: 284,
    height: 239,
    className: "frame",
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/2425347169.json */ "./.cache/caches/gatsby-plugin-image/2425347169.json")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_VisionariesLayout__WEBPACK_IMPORTED_MODULE_1__.VisionariesCardData, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_VisionariesLayout__WEBPACK_IMPORTED_MODULE_1__.VisionariesCardHeader, null, "Aakash Neeraj Mittal"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_VisionariesLayout__WEBPACK_IMPORTED_MODULE_1__.VisionariesCardSubHeader, null, "CEO, Density"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_VisionariesLayout__WEBPACK_IMPORTED_MODULE_1__.VisionariesCardImageWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_2__.StaticImage, {
    src: "../assets/Images/linkedin.png",
    alt: "linkedin",
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/720336983.json */ "./.cache/caches/gatsby-plugin-image/720336983.json")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_2__.StaticImage, {
    src: "../assets/Images/aakash.png",
    alt: "aakash",
    width: 273,
    height: 257,
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/4127843249.json */ "./.cache/caches/gatsby-plugin-image/4127843249.json")
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_VisionariesLayout__WEBPACK_IMPORTED_MODULE_1__.VisionariesCardLayout, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_2__.StaticImage, {
    src: "../assets/Images/Frame.png",
    alt: "frame",
    width: 284,
    height: 239,
    className: "frame",
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/2425347169.json */ "./.cache/caches/gatsby-plugin-image/2425347169.json")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_VisionariesLayout__WEBPACK_IMPORTED_MODULE_1__.VisionariesCardData, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_VisionariesLayout__WEBPACK_IMPORTED_MODULE_1__.VisionariesCardHeader, null, "Bhupendra Bule"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_VisionariesLayout__WEBPACK_IMPORTED_MODULE_1__.VisionariesCardSubHeader, null, "CTO, Density"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_VisionariesLayout__WEBPACK_IMPORTED_MODULE_1__.VisionariesCardImageWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_2__.StaticImage, {
    src: "../assets/Images/linkedin.png",
    alt: "linkedin",
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/720336983.json */ "./.cache/caches/gatsby-plugin-image/720336983.json")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_2__.StaticImage, {
    src: "../assets/Images/bhupendra.png",
    alt: "bhupendra",
    width: 273,
    height: 300,
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/2583940015.json */ "./.cache/caches/gatsby-plugin-image/2583940015.json")
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_VisionariesLayout__WEBPACK_IMPORTED_MODULE_1__.VisionariesCardLayout, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_2__.StaticImage, {
    src: "../assets/Images/Frame.png",
    alt: "phone",
    width: 284,
    height: 239,
    className: "frame",
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/2425347169.json */ "./.cache/caches/gatsby-plugin-image/2425347169.json")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_VisionariesLayout__WEBPACK_IMPORTED_MODULE_1__.VisionariesCardData, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_VisionariesLayout__WEBPACK_IMPORTED_MODULE_1__.VisionariesCardHeader, null, "Deepak Vasman"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_VisionariesLayout__WEBPACK_IMPORTED_MODULE_1__.VisionariesCardSubHeader, null, "CBO, Density"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_VisionariesLayout__WEBPACK_IMPORTED_MODULE_1__.VisionariesCardImageWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_2__.StaticImage, {
    src: "../assets/Images/linkedin.png",
    alt: "linkedin",
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/720336983.json */ "./.cache/caches/gatsby-plugin-image/720336983.json")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_2__.StaticImage, {
    src: "../assets/Images/deepak.png",
    alt: "deepak",
    width: 273,
    height: 300,
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/3255102896.json */ "./.cache/caches/gatsby-plugin-image/3255102896.json")
  })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VisionariesCard);

/***/ }),

/***/ "./src/pages/index.js?export=default":
/*!*******************************************!*\
  !*** ./src/pages/index.js?export=default ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./src/components/Layout.js");


function Home() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], null);
}

/***/ }),

/***/ "./src/styles/AccountopenLayout.js":
/*!*****************************************!*\
  !*** ./src/styles/AccountopenLayout.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccountOpenWrapper: () => (/* binding */ AccountOpenWrapper),
/* harmony export */   AccountWrapper: () => (/* binding */ AccountWrapper),
/* harmony export */   StepsHeader: () => (/* binding */ StepsHeader),
/* harmony export */   StepsSubHeader: () => (/* binding */ StepsSubHeader),
/* harmony export */   StepsWrapper: () => (/* binding */ StepsWrapper)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");

const AccountOpenWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "AccountopenLayout__AccountOpenWrapper"
})(["display:flex;flex-direction:column;margin-top:150px;gap:60px;margin-left:190px;.lineImg{stroke-width:1px;stroke:rgba(255,255,255,0);opacity:1;}"]);
const AccountWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "AccountopenLayout__AccountWrapper"
})(["display:flex;justify-content:space-evenly;align-items:center;"]);
const StepsWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "AccountopenLayout__StepsWrapper"
})(["display:flex;flex-direction:column;align-items:flex-start;gap:25px;"]);
const StepsHeader = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "AccountopenLayout__StepsHeader"
})(["color:var(--White,#fff);font-size:40px;font-style:normal;font-weight:500;line-height:normal;"]);
const StepsSubHeader = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "AccountopenLayout__StepsSubHeader"
})(["color:#a9a9a9;width:384px;font-size:24px;font-style:normal;font-weight:400;line-height:32px;"]);

/***/ }),

/***/ "./src/styles/ButtonLayout.js":
/*!************************************!*\
  !*** ./src/styles/ButtonLayout.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");

const ButtonLayout = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].button.withConfig({
  displayName: "ButtonLayout"
})(["color:", ";font-size:16px;font-weight:700;border-radius:8px;background:linear-gradient(86deg,#d4f938 23.09%,#32d875 108.69%);box-shadow:0px 0px 16px 0px rgba(168,239,156,0.8);backdrop-filter:blur(5px);height:48px;"], ({
  theme
}) => theme.colors.colorblack);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ButtonLayout);

/***/ }),

/***/ "./src/styles/DepositLayout.js":
/*!*************************************!*\
  !*** ./src/styles/DepositLayout.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DepositCardData: () => (/* binding */ DepositCardData),
/* harmony export */   DepositCardHeader: () => (/* binding */ DepositCardHeader),
/* harmony export */   DepositCardLayout: () => (/* binding */ DepositCardLayout),
/* harmony export */   DepositCardSubHeader: () => (/* binding */ DepositCardSubHeader),
/* harmony export */   DepositCardWrapper: () => (/* binding */ DepositCardWrapper),
/* harmony export */   DepositLayout: () => (/* binding */ DepositLayout)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");

const DepositLayout = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "DepositLayout"
})(["width:100%;height:942px;background:var(--White,#fff);position:relative;"]);
const DepositCardWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "DepositLayout__DepositCardWrapper"
})(["width:100%;height:100%;display:flex;justify-content:center;align-items:center;gap:20px;position:absolute;margin-top:120px;"]);
const DepositCardLayout = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "DepositLayout__DepositCardLayout"
})(["background:#f3f3f3;border-radius:20px;width:553px;height:450px;position:relative;.frame{opacity:0.55;mix-blend-mode:soft-light;position:absolute;margin-left:230px;}"]);
const DepositCardData = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "DepositLayout__DepositCardData"
})(["display:flex;flex-direction:column;align-items:flex-start;justify-content:space-evenly;width:100%;height:100%;margin-left:40px;"]);
const DepositCardHeader = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "DepositLayout__DepositCardHeader"
})(["width:175.5px;color:var(--White,#0e0e0f);font-size:40px;font-style:normal;font-weight:700;line-height:50.625px;letter-spacing:-1.687px;"]);
const DepositCardSubHeader = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "DepositLayout__DepositCardSubHeader"
})(["width:70%;color:var(--neutrals-grey-6,#666673);font-size:15.75px;font-style:normal;font-weight:400;line-height:23.625px;"]);

/***/ }),

/***/ "./src/styles/FeeCardLayout.js":
/*!*************************************!*\
  !*** ./src/styles/FeeCardLayout.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CardNumberData: () => (/* binding */ CardNumberData),
/* harmony export */   CardNumbersData: () => (/* binding */ CardNumbersData),
/* harmony export */   CardTextData: () => (/* binding */ CardTextData),
/* harmony export */   CardTextsData: () => (/* binding */ CardTextsData),
/* harmony export */   DataWrapper: () => (/* binding */ DataWrapper),
/* harmony export */   FeeCardData: () => (/* binding */ FeeCardData),
/* harmony export */   FeeCardWrapper: () => (/* binding */ FeeCardWrapper),
/* harmony export */   FeecardsLayout: () => (/* binding */ FeecardsLayout),
/* harmony export */   FeemiddlecardsLayout: () => (/* binding */ FeemiddlecardsLayout)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");

const FeecardsLayout = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "FeeCardLayout__FeecardsLayout"
})(["background:var(--neutrals-grey-9,#19191d);border-radius:20px;width:369px;height:438px;position:relative;.frame{opacity:0.8;position:absolute;}.company{opacity:1;}"]);
const FeemiddlecardsLayout = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "FeeCardLayout__FeemiddlecardsLayout"
})(["background:linear-gradient( 180deg,#daf760 -1.86%,rgba(50,216,117,0.96) 146.77% );box-shadow:0px 0px 40px 0px rgba(226,255,111,0.8);border-radius:20px;width:369px;height:438px;position:relative;.frame{opacity:0.8;position:absolute;}.company{opacity:1;}"]);
const FeeCardWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "FeeCardLayout__FeeCardWrapper"
})(["width:100%;height:100%;display:flex;justify-content:center;align-items:center;gap:20px;"]);
const FeeCardData = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "FeeCardLayout__FeeCardData"
})(["display:flex;flex-direction:column;align-items:center;justify-content:space-evenly;width:100%;height:100%;"]);
const DataWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "FeeCardLayout__DataWrapper"
})(["display:flex;flex-direction:column;justify-content:center;align-items:center;"]);
const CardNumbersData = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "FeeCardLayout__CardNumbersData"
})(["color:\"#000000\";font-size:32px;font-weight:700;line-height:50.625px;letter-spacing:-1.687px;"]);
const CardNumberData = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "FeeCardLayout__CardNumberData"
})(["color:var(--White,#fff);font-size:32px;font-weight:700;line-height:50.625px;letter-spacing:-1.687px;"]);
const CardTextData = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "FeeCardLayout__CardTextData"
})(["color:var(--White,#fff);font-size:20px;font-weight:400;line-height:normal;letter-spacing:-1.687px;opacity:0.5;"]);
const CardTextsData = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "FeeCardLayout__CardTextsData"
})(["color:#000;font-size:24px;font-weight:400;line-height:normal;letter-spacing:-1.687px;opacity:0.5;"]);

/***/ }),

/***/ "./src/styles/FeedbackLayout.js":
/*!**************************************!*\
  !*** ./src/styles/FeedbackLayout.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FeedbackCardData: () => (/* binding */ FeedbackCardData),
/* harmony export */   FeedbackCardLayout: () => (/* binding */ FeedbackCardLayout),
/* harmony export */   FeedbackCardWrapper: () => (/* binding */ FeedbackCardWrapper),
/* harmony export */   FeedbackLayout: () => (/* binding */ FeedbackLayout),
/* harmony export */   FeedbackPersonWrapper: () => (/* binding */ FeedbackPersonWrapper),
/* harmony export */   FeedbackTextInfo: () => (/* binding */ FeedbackTextInfo),
/* harmony export */   PersonDesig: () => (/* binding */ PersonDesig),
/* harmony export */   PersonInfo: () => (/* binding */ PersonInfo),
/* harmony export */   Personname: () => (/* binding */ Personname)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");

const FeedbackLayout = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "FeedbackLayout"
})(["width:100%;height:942px;background:var(--White,#fff);position:relative;"]);
const FeedbackCardWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "FeedbackLayout__FeedbackCardWrapper"
})(["width:100%;height:100%;display:flex;justify-content:center;align-items:center;gap:20px;position:absolute;margin-top:120px;"]);
const FeedbackCardLayout = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "FeedbackLayout__FeedbackCardLayout"
})(["background:#f3f3f3;border-radius:20px;width:362px;height:450px;position:relative;.frame{opacity:0.55;mix-blend-mode:soft-light;position:absolute;margin-left:230px;}"]);
const FeedbackCardData = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "FeedbackLayout__FeedbackCardData"
})(["display:flex;flex-direction:column;align-items:flex-start;justify-content:space-evenly;width:100%;height:100%;margin-left:20px;"]);
const FeedbackTextInfo = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "FeedbackLayout__FeedbackTextInfo"
})(["width:302px;color:var(--neutrals-grey-6,#666673);font-size:20px;font-style:normal;font-weight:400;line-height:28px;"]);
const FeedbackPersonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "FeedbackLayout__FeedbackPersonWrapper"
})(["display:flex;"]);
const PersonInfo = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "FeedbackLayout__PersonInfo"
})(["display:flex;flex-direction:column;justify-content:space-evenly;"]);
const Personname = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "FeedbackLayout__Personname"
})(["color:var(--White,#0e0e0f);font-size:28px;font-style:normal;font-weight:700;line-height:1;letter-spacing:-1px;width:60%;"]);
const PersonDesig = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "FeedbackLayout__PersonDesig"
})(["color:var(--neutrals-grey-6,#666673);font-size:16px;font-style:normal;font-weight:500;line-height:normal;"]);

/***/ }),

/***/ "./src/styles/FooterLayout.js":
/*!************************************!*\
  !*** ./src/styles/FooterLayout.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FooterLayout: () => (/* binding */ FooterLayout),
/* harmony export */   FooterLink: () => (/* binding */ FooterLink),
/* harmony export */   FooterLinkWrapper: () => (/* binding */ FooterLinkWrapper),
/* harmony export */   FooterText: () => (/* binding */ FooterText),
/* harmony export */   SocialMediaWrapper: () => (/* binding */ SocialMediaWrapper)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");

const FooterLayout = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "FooterLayout"
})(["display:flex;padding:63px 245px;flex-direction:column;justify-content:center;align-items:center;gap:40px;width:100%;background:#229851;"]);
const FooterLinkWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "FooterLayout__FooterLinkWrapper"
})(["display:flex;width:60%;justify-content:space-evenly;"]);
const FooterLink = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "FooterLayout__FooterLink"
})(["color:var(--White,#fff);font-size:13.998px;font-style:normal;font-weight:400;line-height:normal;"]);
const FooterText = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "FooterLayout__FooterText"
})(["width:786.88px;color:#ddd;text-align:center;font-size:13.998px;font-style:normal;font-weight:400;line-height:23.996px;"]);
const SocialMediaWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "FooterLayout__SocialMediaWrapper"
})(["display:flex;width:40%;justify-content:space-evenly;"]);

/***/ }),

/***/ "./src/styles/FrontiersLayout.js":
/*!***************************************!*\
  !*** ./src/styles/FrontiersLayout.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Data: () => (/* binding */ Data),
/* harmony export */   FrontiersDataLayout: () => (/* binding */ FrontiersDataLayout),
/* harmony export */   FrontiersImageWrapper: () => (/* binding */ FrontiersImageWrapper)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");

const FrontiersDataLayout = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "FrontiersLayout__FrontiersDataLayout"
})(["display:flex;width:1014px;height:171px;justify-content:space-evenly;align-items:center;border:0.5px solid rgba(50,216,117,0.96);background:rgba(0,0,0,0.05);box-shadow:0px 0px 10px 0px rgba(235,255,37,0.4);backdrop-filter:blur(26.25px);margin-left:auto;margin-right:auto;margin-top:70px;"]);
const Data = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "FrontiersLayout__Data"
})(["color:var(--White,#fff);text-align:center;font-size:32px;font-style:normal;font-weight:700;line-height:normal;width:160px;height:76px;"]);
const FrontiersImageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "FrontiersLayout__FrontiersImageWrapper"
})(["margin-top:60px;margin-left:190px;"]);

/***/ }),

/***/ "./src/styles/GlobalStyles.js":
/*!************************************!*\
  !*** ./src/styles/GlobalStyles.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");


// :root {
// --color-black: #000000;
// --color-yellow-green: #e2ff6f;
// --color-light-gray: #fcfcfc;
// }
const GlobalStyle = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.createGlobalStyle)(["@import url('https://fonts.googleapis.com/css2?family=Gabarito:wght@500&family=Poppins:wght@300&display=swap');*,::after,::before{box-sizing:border-box;}*{margin:0;padding:0;}html,body{height:100%;}body{font-family:'Poppins',sans-serif;background-color:", ";overflow-x:hidden;line-height:1.5;color:var(--color-light-gray)}"], ({
  theme
}) => theme.colors.colorblack);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GlobalStyle);

/***/ }),

/***/ "./src/styles/HeadingSubHeadingLayout.js":
/*!***********************************************!*\
  !*** ./src/styles/HeadingSubHeadingLayout.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeadingLayout: () => (/* binding */ HeadingLayout),
/* harmony export */   SubHeadingLayout: () => (/* binding */ SubHeadingLayout)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");

const HeadingLayout = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].section.withConfig({
  displayName: "HeadingSubHeadingLayout__HeadingLayout"
})(["color:var(--White,#fff);text-align:center;font-size:72px;font-style:normal;font-weight:700;line-height:76.882px;letter-spacing:-2.097px;margin-left:auto;margin-right:auto;strong{color:var(--electric-green-primary,#ebff25);font-size:72px;font-style:normal;font-weight:700;line-height:76.882px;letter-spacing:-2.097px;}"]);
const SubHeadingLayout = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].section.withConfig({
  displayName: "HeadingSubHeadingLayout__SubHeadingLayout"
})(["color:var(--neutrals-grey-4,#e7e7ea);text-align:center;font-size:24px;font-style:normal;font-weight:400;line-height:32.849px;margin-top:24px;"]);

/***/ }),

/***/ "./src/styles/HeroLayout.js":
/*!**********************************!*\
  !*** ./src/styles/HeroLayout.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeroLayout: () => (/* binding */ HeroLayout),
/* harmony export */   HeroText: () => (/* binding */ HeroText)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");

const HeroLayout = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "HeroLayout"
})(["display:flex;padding:80px 0px 120px 0px;flex-direction:column;justify-content:center;align-items:center;gap:76px;section{color:#e7e7ea;text-align:center;font-size:24px;font-weight:400;line-height:normal;}"]);
const HeroText = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].article.withConfig({
  displayName: "HeroLayout__HeroText"
})(["color:", ";text-align:center;font-size:96px;font-weight:700;line-height:100px;letter-spacing:-4.19px;height:200px;width:693px;strong{background:linear-gradient(97deg,#78e65d 47.68%,#d5fa39 70.85%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;}"], ({
  theme
}) => theme.colors.colorlightGray);

// export const HeroImageWrapper = styled.div`
//   width: 779.594px;
//   height: 668.698px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

/***/ }),

/***/ "./src/styles/MarketLayout.js":
/*!************************************!*\
  !*** ./src/styles/MarketLayout.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MarketImageWrapper: () => (/* binding */ MarketImageWrapper)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");

const MarketImageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "MarketLayout__MarketImageWrapper"
})(["margin-left:150px;margin-top:100px;"]);

/***/ }),

/***/ "./src/styles/MoneyEarningLayout.js":
/*!******************************************!*\
  !*** ./src/styles/MoneyEarningLayout.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CardText: () => (/* binding */ CardText),
/* harmony export */   MoneyCardData: () => (/* binding */ MoneyCardData),
/* harmony export */   MoneyCardLayout: () => (/* binding */ MoneyCardLayout),
/* harmony export */   MoneyCardWrapper: () => (/* binding */ MoneyCardWrapper),
/* harmony export */   MoneyEarningLayout: () => (/* binding */ MoneyEarningLayout)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");

const MoneyEarningLayout = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "MoneyEarningLayout"
})(["width:100%;height:938;display:flex;padding:140px 0px;flex-direction:column;align-items:center;gap:82px;"]);
const MoneyCardWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "MoneyEarningLayout__MoneyCardWrapper"
})(["width:100%;height:100%;display:flex;justify-content:center;align-items:center;gap:20px;"]);
const MoneyCardLayout = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "MoneyEarningLayout__MoneyCardLayout"
})(["background:var(--neutrals-grey-9,#19191d);border-radius:20px;width:369px;height:438px;position:relative;.frame{opacity:0.8;position:absolute;}"]);
const MoneyCardData = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "MoneyEarningLayout__MoneyCardData"
})(["display:flex;flex-direction:column;align-items:flex-start;justify-content:space-evenly;width:100%;height:100%;margin-left:20px;"]);
const CardText = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "MoneyEarningLayout__CardText"
})(["color:var(--White,#fff);font-size:32px;font-style:normal;font-weight:700;line-height:40px;letter-spacing:-1px;width:243px;"]);

/***/ }),

/***/ "./src/styles/NavbarLayout.js":
/*!************************************!*\
  !*** ./src/styles/NavbarLayout.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");

const NavbarLayout = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].nav.withConfig({
  displayName: "NavbarLayout"
})(["display:flex;padding:24px 216px;justify-content:center;align-items:center;gap:387px;background-color:rgba(42,93,50,0.2);border-bottom:1px solid rgba(255,255,255,0);backdrop-filter:blur(20px);div{display:flex;display:flex;align-items:center;justify-content:center;}ul{display:flex;list-style-type:none;margin:0;padding:0;gap:34px;}ul li{color:", ";font-size:14px;font-weight:400;}button{color:", ";font-size:16px;font-weight:700;border-radius:8px;background:linear-gradient(86deg,#d4f938 23.09%,#32d875 108.69%);box-shadow:0px 0px 16px 0px rgba(168,239,156,0.8);backdrop-filter:blur(5px);height:48px;padding:5px 25px;margin-left:50px;"], ({
  theme
}) => theme.colors.colorlightGray, ({
  theme
}) => theme.colors.colorblack);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavbarLayout);

/***/ }),

/***/ "./src/styles/ParnershipLayout.js":
/*!****************************************!*\
  !*** ./src/styles/ParnershipLayout.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CompanyPerson: () => (/* binding */ CompanyPerson),
/* harmony export */   PartnerCompany: () => (/* binding */ PartnerCompany),
/* harmony export */   PartnershipLayout: () => (/* binding */ PartnershipLayout),
/* harmony export */   PersonInfo: () => (/* binding */ PersonInfo),
/* harmony export */   PersonName: () => (/* binding */ PersonName)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");

const PartnershipLayout = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "ParnershipLayout__PartnershipLayout"
})(["margin-top:120px;"]);
const PartnerCompany = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "ParnershipLayout__PartnerCompany"
})(["display:flex;flex-wrap:wrap;width:954px;height:301px;margin-left:250px;gap:117px;align-items:center;margin-top:140px;"]);
const CompanyPerson = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "ParnershipLayout__CompanyPerson"
})(["display:flex;flex-wrap:wrap;width:1014px;height:446px;margin-left:250px;align-items:center;margin-top:140px;gap:40px;justify-content:space-around;"]);
const PersonInfo = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "ParnershipLayout__PersonInfo"
})(["display:flex;flex-direction:column;"]);
const PersonName = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "ParnershipLayout__PersonName"
})(["color:var(--White,#fff);font-size:20.48px;font-style:normal;font-weight:700;line-height:normal;section{color:var(--neutrals-grey-7,#808090);font-size:12.8px;font-style:normal;font-weight:500;line-height:160%;text-align:center;}"]);

/***/ }),

/***/ "./src/styles/TradeBodyLayout.js":
/*!***************************************!*\
  !*** ./src/styles/TradeBodyLayout.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PhoneWrapper: () => (/* binding */ PhoneWrapper)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");

const PhoneWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "TradeBodyLayout__PhoneWrapper"
})(["margin-left:570px;"]);

/***/ }),

/***/ "./src/styles/TradeDataLayout.js":
/*!***************************************!*\
  !*** ./src/styles/TradeDataLayout.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DataContainer: () => (/* binding */ DataContainer),
/* harmony export */   TradeDataLayout: () => (/* binding */ TradeDataLayout)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");

const TradeDataLayout = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "TradeDataLayout"
})(["display:flex;width:1014px;height:171px;justify-content:space-evenly;align-items:center;border:0.5px solid rgba(50,216,117,0.96);background:rgba(0,0,0,0.05);box-shadow:0px 0px 10px 0px rgba(235,255,37,0.9);backdrop-filter:blur(26.25px);margin-left:auto;margin-right:auto;"]);
const DataContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "TradeDataLayout__DataContainer"
})(["display:flex;flex-direction:column;align-items:center;.numberData{color:var(--electric-green-primary,#ebff25);font-size:40px;font-style:normal;font-weight:700;line-height:normal;}.textData{color:#a9a9a9;font-size:16px;font-style:normal;font-weight:500;line-height:26px;}"]);

/***/ }),

/***/ "./src/styles/TradeFeeLayout.js":
/*!**************************************!*\
  !*** ./src/styles/TradeFeeLayout.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TradeFeeLayout: () => (/* binding */ TradeFeeLayout)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");

const TradeFeeLayout = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "TradeFeeLayout"
})(["width:1446px;height:854px;display:flex;flex-direction:column;"]);

/***/ }),

/***/ "./src/styles/VisionariesLayout.js":
/*!*****************************************!*\
  !*** ./src/styles/VisionariesLayout.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VisionariesCardData: () => (/* binding */ VisionariesCardData),
/* harmony export */   VisionariesCardHeader: () => (/* binding */ VisionariesCardHeader),
/* harmony export */   VisionariesCardImageWrapper: () => (/* binding */ VisionariesCardImageWrapper),
/* harmony export */   VisionariesCardLayout: () => (/* binding */ VisionariesCardLayout),
/* harmony export */   VisionariesCardSubHeader: () => (/* binding */ VisionariesCardSubHeader),
/* harmony export */   VisionariesCardWrapper: () => (/* binding */ VisionariesCardWrapper),
/* harmony export */   VisionariesLayout: () => (/* binding */ VisionariesLayout)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");

const VisionariesLayout = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "VisionariesLayout"
})(["display:flex;padding:140px 0px;flex-direction:column;align-items:center;gap:82px;width:100%;height:596;"]);
const VisionariesCardWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "VisionariesLayout__VisionariesCardWrapper"
})(["width:100%;height:100%;display:flex;justify-content:center;align-items:center;gap:20px;"]);
const VisionariesCardLayout = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "VisionariesLayout__VisionariesCardLayout"
})(["background:var(--neutrals-grey-8,#32333a);border-radius:20px;width:323px;height:380px;position:relative;.frame{opacity:0.8;position:absolute;}"]);
const VisionariesCardData = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "VisionariesLayout__VisionariesCardData"
})(["display:flex;flex-direction:column;align-items:flex-start;justify-content:space-evenly;width:100%;height:100%;margin-left:20px;"]);
const VisionariesCardHeader = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "VisionariesLayout__VisionariesCardHeader"
})(["width:239px;color:var(--White,#fff);font-size:32px;font-style:normal;font-weight:700;line-height:40px;letter-spacing:-1px;"]);
const VisionariesCardSubHeader = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "VisionariesLayout__VisionariesCardSubHeader"
})(["color:var(--neutrals-grey-6,#bbbbc3);font-size:20px;font-style:normal;font-weight:400;line-height:40px;letter-spacing:-1px;"]);
const VisionariesCardImageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "VisionariesLayout__VisionariesCardImageWrapper"
})(["display:flex;width:100%;align-items:flex-end;"]);

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/1150532864.json":
/*!***********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/1150532864.json ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#e8f828","images":{"fallback":{"src":"/static/f5225aa56982b95554e2c440f7bfae5a/fa83a/line.png","srcSet":"/static/f5225aa56982b95554e2c440f7bfae5a/02fb6/line.png 1w,\\n/static/f5225aa56982b95554e2c440f7bfae5a/68367/line.png 2w,\\n/static/f5225aa56982b95554e2c440f7bfae5a/fa83a/line.png 3w","sizes":"(min-width: 3px) 3px, 100vw"},"sources":[{"srcSet":"/static/f5225aa56982b95554e2c440f7bfae5a/03be2/line.webp 1w,\\n/static/f5225aa56982b95554e2c440f7bfae5a/51d72/line.webp 2w,\\n/static/f5225aa56982b95554e2c440f7bfae5a/523a9/line.webp 3w","type":"image/webp","sizes":"(min-width: 3px) 3px, 100vw"}]},"width":3,"height":172}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/1157489274.json":
/*!***********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/1157489274.json ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/62f267e9aad4c6ca922ee946a642c9f3/15588/market.png","srcSet":"/static/62f267e9aad4c6ca922ee946a642c9f3/55ff6/market.png 284w,\\n/static/62f267e9aad4c6ca922ee946a642c9f3/d626f/market.png 568w,\\n/static/62f267e9aad4c6ca922ee946a642c9f3/15588/market.png 1135w","sizes":"(min-width: 1135px) 1135px, 100vw"},"sources":[{"srcSet":"/static/62f267e9aad4c6ca922ee946a642c9f3/631b7/market.webp 284w,\\n/static/62f267e9aad4c6ca922ee946a642c9f3/47cb5/market.webp 568w,\\n/static/62f267e9aad4c6ca922ee946a642c9f3/85b75/market.webp 1135w","type":"image/webp","sizes":"(min-width: 1135px) 1135px, 100vw"}]},"width":1135,"height":671}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/1300974778.json":
/*!***********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/1300974778.json ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/5eb1046ad8721f7a205969d0cffee73a/c8661/inflection.png","srcSet":"/static/5eb1046ad8721f7a205969d0cffee73a/83c03/inflection.png 31w,\\n/static/5eb1046ad8721f7a205969d0cffee73a/fa3ac/inflection.png 63w,\\n/static/5eb1046ad8721f7a205969d0cffee73a/c8661/inflection.png 125w","sizes":"(min-width: 125px) 125px, 100vw"},"sources":[{"srcSet":"/static/5eb1046ad8721f7a205969d0cffee73a/54f95/inflection.webp 31w,\\n/static/5eb1046ad8721f7a205969d0cffee73a/d7347/inflection.webp 63w,\\n/static/5eb1046ad8721f7a205969d0cffee73a/34e7d/inflection.webp 125w","type":"image/webp","sizes":"(min-width: 125px) 125px, 100vw"}]},"width":125,"height":100}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/1451965566.json":
/*!***********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/1451965566.json ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/3eb77964a90cc22f6dff29d19348ed75/9b82f/depositFrame.png","srcSet":"/static/3eb77964a90cc22f6dff29d19348ed75/530a6/depositFrame.png 76w,\\n/static/3eb77964a90cc22f6dff29d19348ed75/48e68/depositFrame.png 153w,\\n/static/3eb77964a90cc22f6dff29d19348ed75/9b82f/depositFrame.png 305w","sizes":"(min-width: 305px) 305px, 100vw"},"sources":[{"srcSet":"/static/3eb77964a90cc22f6dff29d19348ed75/a9f13/depositFrame.webp 76w,\\n/static/3eb77964a90cc22f6dff29d19348ed75/1d10d/depositFrame.webp 153w,\\n/static/3eb77964a90cc22f6dff29d19348ed75/91b76/depositFrame.webp 305w","type":"image/webp","sizes":"(min-width: 305px) 305px, 100vw"}]},"width":305,"height":272}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/1507102960.json":
/*!***********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/1507102960.json ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/a73ddb3fa4776e9fd5179bb546747e25/21f6c/shambhavi.png","srcSet":"/static/a73ddb3fa4776e9fd5179bb546747e25/059d3/shambhavi.png 48w,\\n/static/a73ddb3fa4776e9fd5179bb546747e25/14d46/shambhavi.png 97w,\\n/static/a73ddb3fa4776e9fd5179bb546747e25/21f6c/shambhavi.png 193w","sizes":"(min-width: 193px) 193px, 100vw"},"sources":[{"srcSet":"/static/a73ddb3fa4776e9fd5179bb546747e25/0b932/shambhavi.webp 48w,\\n/static/a73ddb3fa4776e9fd5179bb546747e25/47bd6/shambhavi.webp 97w,\\n/static/a73ddb3fa4776e9fd5179bb546747e25/8766c/shambhavi.webp 193w","type":"image/webp","sizes":"(min-width: 193px) 193px, 100vw"}]},"width":216,"height":248.4559585492228}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/1525485516.json":
/*!***********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/1525485516.json ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/ca907ae7a553e9196aa1cb0c42c1100d/56197/deposit.png","srcSet":"/static/ca907ae7a553e9196aa1cb0c42c1100d/f1c6c/deposit.png 27w,\\n/static/ca907ae7a553e9196aa1cb0c42c1100d/ffdd3/deposit.png 54w,\\n/static/ca907ae7a553e9196aa1cb0c42c1100d/56197/deposit.png 108w","sizes":"(min-width: 108px) 108px, 100vw"},"sources":[{"srcSet":"/static/ca907ae7a553e9196aa1cb0c42c1100d/391be/deposit.webp 27w,\\n/static/ca907ae7a553e9196aa1cb0c42c1100d/40067/deposit.webp 54w,\\n/static/ca907ae7a553e9196aa1cb0c42c1100d/e26a9/deposit.webp 108w","type":"image/webp","sizes":"(min-width: 108px) 108px, 100vw"}]},"width":120,"height":120}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/1676169924.json":
/*!***********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/1676169924.json ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/c78bb494e935122f310e0a7483dc8747/7930f/polygon.png","srcSet":"/static/c78bb494e935122f310e0a7483dc8747/50a1a/polygon.png 55w,\\n/static/c78bb494e935122f310e0a7483dc8747/2703a/polygon.png 110w,\\n/static/c78bb494e935122f310e0a7483dc8747/7930f/polygon.png 220w","sizes":"(min-width: 220px) 220px, 100vw"},"sources":[{"srcSet":"/static/c78bb494e935122f310e0a7483dc8747/4d7a0/polygon.webp 55w,\\n/static/c78bb494e935122f310e0a7483dc8747/66067/polygon.webp 110w,\\n/static/c78bb494e935122f310e0a7483dc8747/9e6a4/polygon.webp 220w","type":"image/webp","sizes":"(min-width: 220px) 220px, 100vw"}]},"width":220,"height":40}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/1759918372.json":
/*!***********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/1759918372.json ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/5b93883a346659f009066585309148b9/7c9c4/sajid.png","srcSet":"/static/5b93883a346659f009066585309148b9/3c6f7/sajid.png 30w,\\n/static/5b93883a346659f009066585309148b9/3c46a/sajid.png 60w,\\n/static/5b93883a346659f009066585309148b9/7c9c4/sajid.png 120w","sizes":"(min-width: 120px) 120px, 100vw"},"sources":[{"srcSet":"/static/5b93883a346659f009066585309148b9/7701d/sajid.webp 30w,\\n/static/5b93883a346659f009066585309148b9/28a68/sajid.webp 60w,\\n/static/5b93883a346659f009066585309148b9/9a0a4/sajid.webp 120w","type":"image/webp","sizes":"(min-width: 120px) 120px, 100vw"}]},"width":120,"height":138}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/1785244520.json":
/*!***********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/1785244520.json ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/5e65877ca2221e3706f40a0f3534e988/7e339/Frame.png","srcSet":"/static/5e65877ca2221e3706f40a0f3534e988/9cc13/Frame.png 71w,\\n/static/5e65877ca2221e3706f40a0f3534e988/c6f00/Frame.png 142w,\\n/static/5e65877ca2221e3706f40a0f3534e988/7e339/Frame.png 284w","sizes":"(min-width: 284px) 284px, 100vw"},"sources":[{"srcSet":"/static/5e65877ca2221e3706f40a0f3534e988/69201/Frame.webp 71w,\\n/static/5e65877ca2221e3706f40a0f3534e988/13287/Frame.webp 142w,\\n/static/5e65877ca2221e3706f40a0f3534e988/3de68/Frame.webp 284w","type":"image/webp","sizes":"(min-width: 284px) 284px, 100vw"}]},"width":284,"height":239}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/184363866.json":
/*!**********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/184363866.json ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/ac460f516cc46a9ad93ba1fd8b28d8a7/1bf1c/iSeed.png","srcSet":"/static/ac460f516cc46a9ad93ba1fd8b28d8a7/56285/iSeed.png 27w,\\n/static/ac460f516cc46a9ad93ba1fd8b28d8a7/875ac/iSeed.png 55w,\\n/static/ac460f516cc46a9ad93ba1fd8b28d8a7/1bf1c/iSeed.png 109w","sizes":"(min-width: 109px) 109px, 100vw"},"sources":[{"srcSet":"/static/ac460f516cc46a9ad93ba1fd8b28d8a7/095da/iSeed.webp 27w,\\n/static/ac460f516cc46a9ad93ba1fd8b28d8a7/b30bc/iSeed.webp 55w,\\n/static/ac460f516cc46a9ad93ba1fd8b28d8a7/ea41c/iSeed.webp 109w","type":"image/webp","sizes":"(min-width: 109px) 109px, 100vw"}]},"width":109,"height":64}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/1851269563.json":
/*!***********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/1851269563.json ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/f19ed826ed189804c4c0e968899d8e4b/96d5d/friend.png","srcSet":"/static/f19ed826ed189804c4c0e968899d8e4b/a81af/friend.png 27w,\\n/static/f19ed826ed189804c4c0e968899d8e4b/ebd5c/friend.png 54w,\\n/static/f19ed826ed189804c4c0e968899d8e4b/96d5d/friend.png 108w","sizes":"(min-width: 108px) 108px, 100vw"},"sources":[{"srcSet":"/static/f19ed826ed189804c4c0e968899d8e4b/f27be/friend.webp 27w,\\n/static/f19ed826ed189804c4c0e968899d8e4b/3de2e/friend.webp 54w,\\n/static/f19ed826ed189804c4c0e968899d8e4b/46d31/friend.webp 108w","type":"image/webp","sizes":"(min-width: 108px) 108px, 100vw"}]},"width":108,"height":96}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/18668073.json":
/*!*********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/18668073.json ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/2ddd45607d53042b8753ffc35f3cc6b1/7c9c4/karn.png","srcSet":"/static/2ddd45607d53042b8753ffc35f3cc6b1/3c6f7/karn.png 30w,\\n/static/2ddd45607d53042b8753ffc35f3cc6b1/3c46a/karn.png 60w,\\n/static/2ddd45607d53042b8753ffc35f3cc6b1/7c9c4/karn.png 120w","sizes":"(min-width: 120px) 120px, 100vw"},"sources":[{"srcSet":"/static/2ddd45607d53042b8753ffc35f3cc6b1/7701d/karn.webp 30w,\\n/static/2ddd45607d53042b8753ffc35f3cc6b1/28a68/karn.webp 60w,\\n/static/2ddd45607d53042b8753ffc35f3cc6b1/9a0a4/karn.webp 120w","type":"image/webp","sizes":"(min-width: 120px) 120px, 100vw"}]},"width":120,"height":138}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/1891550608.json":
/*!***********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/1891550608.json ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/81d0dd88fa0be4b7eb427b8c2c74b061/1cb8b/perpetualValue.png","srcSet":"/static/81d0dd88fa0be4b7eb427b8c2c74b061/a071d/perpetualValue.png 46w,\\n/static/81d0dd88fa0be4b7eb427b8c2c74b061/9bc0c/perpetualValue.png 91w,\\n/static/81d0dd88fa0be4b7eb427b8c2c74b061/1cb8b/perpetualValue.png 182w","sizes":"(min-width: 182px) 182px, 100vw"},"sources":[{"srcSet":"/static/81d0dd88fa0be4b7eb427b8c2c74b061/69cba/perpetualValue.webp 46w,\\n/static/81d0dd88fa0be4b7eb427b8c2c74b061/98243/perpetualValue.webp 91w,\\n/static/81d0dd88fa0be4b7eb427b8c2c74b061/328df/perpetualValue.webp 182w","type":"image/webp","sizes":"(min-width: 182px) 182px, 100vw"}]},"width":182,"height":64}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/1895914926.json":
/*!***********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/1895914926.json ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/db443ab9eb165a38aa291b73f7e55ce4/7c9c4/sandeep.png","srcSet":"/static/db443ab9eb165a38aa291b73f7e55ce4/3c6f7/sandeep.png 30w,\\n/static/db443ab9eb165a38aa291b73f7e55ce4/3c46a/sandeep.png 60w,\\n/static/db443ab9eb165a38aa291b73f7e55ce4/7c9c4/sandeep.png 120w","sizes":"(min-width: 120px) 120px, 100vw"},"sources":[{"srcSet":"/static/db443ab9eb165a38aa291b73f7e55ce4/7701d/sandeep.webp 30w,\\n/static/db443ab9eb165a38aa291b73f7e55ce4/28a68/sandeep.webp 60w,\\n/static/db443ab9eb165a38aa291b73f7e55ce4/9a0a4/sandeep.webp 120w","type":"image/webp","sizes":"(min-width: 120px) 120px, 100vw"}]},"width":120,"height":138}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/2040775545.json":
/*!***********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/2040775545.json ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/df8f04c820639e2f4aee686e30bd1cd2/f971d/prakash.png","srcSet":"/static/df8f04c820639e2f4aee686e30bd1cd2/4b442/prakash.png 32w,\\n/static/df8f04c820639e2f4aee686e30bd1cd2/5c4df/prakash.png 63w,\\n/static/df8f04c820639e2f4aee686e30bd1cd2/f971d/prakash.png 126w","sizes":"(min-width: 126px) 126px, 100vw"},"sources":[{"srcSet":"/static/df8f04c820639e2f4aee686e30bd1cd2/72394/prakash.webp 32w,\\n/static/df8f04c820639e2f4aee686e30bd1cd2/6ed13/prakash.webp 63w,\\n/static/df8f04c820639e2f4aee686e30bd1cd2/eefca/prakash.webp 126w","type":"image/webp","sizes":"(min-width: 126px) 126px, 100vw"}]},"width":126,"height":187}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/204452805.json":
/*!**********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/204452805.json ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/04191e3da028ccad292adc4aacba1e5f/2ae5a/iPhoneBlack.png","srcSet":"/static/04191e3da028ccad292adc4aacba1e5f/8d035/iPhoneBlack.png 62w,\\n/static/04191e3da028ccad292adc4aacba1e5f/a00a2/iPhoneBlack.png 125w,\\n/static/04191e3da028ccad292adc4aacba1e5f/2ae5a/iPhoneBlack.png 249w","sizes":"(min-width: 249px) 249px, 100vw"},"sources":[{"srcSet":"/static/04191e3da028ccad292adc4aacba1e5f/88f72/iPhoneBlack.webp 62w,\\n/static/04191e3da028ccad292adc4aacba1e5f/ac1b6/iPhoneBlack.webp 125w,\\n/static/04191e3da028ccad292adc4aacba1e5f/61ddf/iPhoneBlack.webp 249w","type":"image/webp","sizes":"(min-width: 249px) 249px, 100vw"}]},"width":250,"height":539.156626506024}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/2143448283.json":
/*!***********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/2143448283.json ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/84f7d9c87129806875e2a27162d0c9fe/7c9c4/kunal.png","srcSet":"/static/84f7d9c87129806875e2a27162d0c9fe/3c6f7/kunal.png 30w,\\n/static/84f7d9c87129806875e2a27162d0c9fe/3c46a/kunal.png 60w,\\n/static/84f7d9c87129806875e2a27162d0c9fe/7c9c4/kunal.png 120w","sizes":"(min-width: 120px) 120px, 100vw"},"sources":[{"srcSet":"/static/84f7d9c87129806875e2a27162d0c9fe/7701d/kunal.webp 30w,\\n/static/84f7d9c87129806875e2a27162d0c9fe/28a68/kunal.webp 60w,\\n/static/84f7d9c87129806875e2a27162d0c9fe/9a0a4/kunal.webp 120w","type":"image/webp","sizes":"(min-width: 120px) 120px, 100vw"}]},"width":120,"height":138}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/2194751856.json":
/*!***********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/2194751856.json ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/ca907ae7a553e9196aa1cb0c42c1100d/88f95/deposit.png","srcSet":"/static/ca907ae7a553e9196aa1cb0c42c1100d/b0373/deposit.png 27w,\\n/static/ca907ae7a553e9196aa1cb0c42c1100d/83a82/deposit.png 54w,\\n/static/ca907ae7a553e9196aa1cb0c42c1100d/88f95/deposit.png 108w","sizes":"(min-width: 108px) 108px, 100vw"},"sources":[{"srcSet":"/static/ca907ae7a553e9196aa1cb0c42c1100d/3f833/deposit.webp 27w,\\n/static/ca907ae7a553e9196aa1cb0c42c1100d/acfb6/deposit.webp 54w,\\n/static/ca907ae7a553e9196aa1cb0c42c1100d/739c8/deposit.webp 108w","type":"image/webp","sizes":"(min-width: 108px) 108px, 100vw"}]},"width":108,"height":100}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/2360255536.json":
/*!***********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/2360255536.json ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/40ad804dfdb947d612969dee13a1224d/0c4b5/Manager.png","srcSet":"/static/40ad804dfdb947d612969dee13a1224d/3bca3/Manager.png 35w,\\n/static/40ad804dfdb947d612969dee13a1224d/19509/Manager.png 71w,\\n/static/40ad804dfdb947d612969dee13a1224d/0c4b5/Manager.png 141w","sizes":"(min-width: 141px) 141px, 100vw"},"sources":[{"srcSet":"/static/40ad804dfdb947d612969dee13a1224d/ff501/Manager.webp 35w,\\n/static/40ad804dfdb947d612969dee13a1224d/b5ea5/Manager.webp 71w,\\n/static/40ad804dfdb947d612969dee13a1224d/f1f42/Manager.webp 141w","type":"image/webp","sizes":"(min-width: 141px) 141px, 100vw"}]},"width":141,"height":101}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/2425347169.json":
/*!***********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/2425347169.json ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/5e65877ca2221e3706f40a0f3534e988/7e339/Frame.png","srcSet":"/static/5e65877ca2221e3706f40a0f3534e988/9cc13/Frame.png 71w,\\n/static/5e65877ca2221e3706f40a0f3534e988/c6f00/Frame.png 142w,\\n/static/5e65877ca2221e3706f40a0f3534e988/7e339/Frame.png 284w","sizes":"(min-width: 284px) 284px, 100vw"},"sources":[{"srcSet":"/static/5e65877ca2221e3706f40a0f3534e988/69201/Frame.webp 71w,\\n/static/5e65877ca2221e3706f40a0f3534e988/13287/Frame.webp 142w,\\n/static/5e65877ca2221e3706f40a0f3534e988/3de68/Frame.webp 284w","type":"image/webp","sizes":"(min-width: 284px) 284px, 100vw"}]},"width":284,"height":239}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/2435989877.json":
/*!***********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/2435989877.json ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/6a92a3dbf0c307a46ea0e4f2fa829ff8/09272/share.png","srcSet":"/static/6a92a3dbf0c307a46ea0e4f2fa829ff8/ddeb4/share.png 26w,\\n/static/6a92a3dbf0c307a46ea0e4f2fa829ff8/d4bcb/share.png 52w,\\n/static/6a92a3dbf0c307a46ea0e4f2fa829ff8/09272/share.png 104w","sizes":"(min-width: 104px) 104px, 100vw"},"sources":[{"srcSet":"/static/6a92a3dbf0c307a46ea0e4f2fa829ff8/2c00b/share.webp 26w,\\n/static/6a92a3dbf0c307a46ea0e4f2fa829ff8/532f6/share.webp 52w,\\n/static/6a92a3dbf0c307a46ea0e4f2fa829ff8/3970c/share.webp 104w","type":"image/webp","sizes":"(min-width: 104px) 104px, 100vw"}]},"width":104,"height":91}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/2482151336.json":
/*!***********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/2482151336.json ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/82548c35cee5a8a95f897e8fac594648/417da/percent.png","srcSet":"/static/82548c35cee5a8a95f897e8fac594648/92c63/percent.png 46w,\\n/static/82548c35cee5a8a95f897e8fac594648/92aad/percent.png 93w,\\n/static/82548c35cee5a8a95f897e8fac594648/417da/percent.png 185w","sizes":"(min-width: 185px) 185px, 100vw"},"sources":[{"srcSet":"/static/82548c35cee5a8a95f897e8fac594648/5d44d/percent.webp 46w,\\n/static/82548c35cee5a8a95f897e8fac594648/9d244/percent.webp 93w,\\n/static/82548c35cee5a8a95f897e8fac594648/7f71e/percent.webp 185w","type":"image/webp","sizes":"(min-width: 185px) 185px, 100vw"}]},"width":185,"height":117}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/2517400013.json":
/*!***********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/2517400013.json ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/c2df98c5312efce9b8c4d148efc1f18c/1d8cc/rise.png","srcSet":"/static/c2df98c5312efce9b8c4d148efc1f18c/53973/rise.png 30w,\\n/static/c2df98c5312efce9b8c4d148efc1f18c/21281/rise.png 60w,\\n/static/c2df98c5312efce9b8c4d148efc1f18c/1d8cc/rise.png 120w","sizes":"(min-width: 120px) 120px, 100vw"},"sources":[{"srcSet":"/static/c2df98c5312efce9b8c4d148efc1f18c/bde72/rise.webp 30w,\\n/static/c2df98c5312efce9b8c4d148efc1f18c/a7a8d/rise.webp 60w,\\n/static/c2df98c5312efce9b8c4d148efc1f18c/2aa79/rise.webp 120w","type":"image/webp","sizes":"(min-width: 120px) 120px, 100vw"}]},"width":120,"height":121}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/2583940015.json":
/*!***********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/2583940015.json ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/0ce166daeb6b9835d3f10aed9aee0c3f/8c608/bhupendra.png","srcSet":"/static/0ce166daeb6b9835d3f10aed9aee0c3f/ed4f8/bhupendra.png 54w,\\n/static/0ce166daeb6b9835d3f10aed9aee0c3f/f5a90/bhupendra.png 108w,\\n/static/0ce166daeb6b9835d3f10aed9aee0c3f/8c608/bhupendra.png 216w","sizes":"(min-width: 216px) 216px, 100vw"},"sources":[{"srcSet":"/static/0ce166daeb6b9835d3f10aed9aee0c3f/dfcce/bhupendra.webp 54w,\\n/static/0ce166daeb6b9835d3f10aed9aee0c3f/2a3ab/bhupendra.webp 108w,\\n/static/0ce166daeb6b9835d3f10aed9aee0c3f/c963d/bhupendra.webp 216w","type":"image/webp","sizes":"(min-width: 216px) 216px, 100vw"}]},"width":273,"height":299.5416666666667}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/2665924753.json":
/*!***********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/2665924753.json ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/6160ed7e39adca65bd8a4e0236ae4d3c/4f0dd/Nifty.png","srcSet":"/static/6160ed7e39adca65bd8a4e0236ae4d3c/0f11a/Nifty.png 283w,\\n/static/6160ed7e39adca65bd8a4e0236ae4d3c/0d31a/Nifty.png 565w,\\n/static/6160ed7e39adca65bd8a4e0236ae4d3c/4f0dd/Nifty.png 1130w","sizes":"(min-width: 1130px) 1130px, 100vw"},"sources":[{"srcSet":"/static/6160ed7e39adca65bd8a4e0236ae4d3c/1c757/Nifty.webp 283w,\\n/static/6160ed7e39adca65bd8a4e0236ae4d3c/d7512/Nifty.webp 565w,\\n/static/6160ed7e39adca65bd8a4e0236ae4d3c/971c0/Nifty.webp 1130w","type":"image/webp","sizes":"(min-width: 1130px) 1130px, 100vw"}]},"width":1130,"height":510}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/278232383.json":
/*!**********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/278232383.json ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/6d181807f2a3723fd5973d67dde3681f/7c9c4/arjun.png","srcSet":"/static/6d181807f2a3723fd5973d67dde3681f/3c6f7/arjun.png 30w,\\n/static/6d181807f2a3723fd5973d67dde3681f/3c46a/arjun.png 60w,\\n/static/6d181807f2a3723fd5973d67dde3681f/7c9c4/arjun.png 120w","sizes":"(min-width: 120px) 120px, 100vw"},"sources":[{"srcSet":"/static/6d181807f2a3723fd5973d67dde3681f/7701d/arjun.webp 30w,\\n/static/6d181807f2a3723fd5973d67dde3681f/28a68/arjun.webp 60w,\\n/static/6d181807f2a3723fd5973d67dde3681f/9a0a4/arjun.webp 120w","type":"image/webp","sizes":"(min-width: 120px) 120px, 100vw"}]},"width":120,"height":138}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/2827232726.json":
/*!***********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/2827232726.json ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/aefac9735b0a30ef9e8863ff553dcc75/7c9c4/UtsavSomani.png","srcSet":"/static/aefac9735b0a30ef9e8863ff553dcc75/3c6f7/UtsavSomani.png 30w,\\n/static/aefac9735b0a30ef9e8863ff553dcc75/3c46a/UtsavSomani.png 60w,\\n/static/aefac9735b0a30ef9e8863ff553dcc75/7c9c4/UtsavSomani.png 120w","sizes":"(min-width: 120px) 120px, 100vw"},"sources":[{"srcSet":"/static/aefac9735b0a30ef9e8863ff553dcc75/7701d/UtsavSomani.webp 30w,\\n/static/aefac9735b0a30ef9e8863ff553dcc75/28a68/UtsavSomani.webp 60w,\\n/static/aefac9735b0a30ef9e8863ff553dcc75/9a0a4/UtsavSomani.webp 120w","type":"image/webp","sizes":"(min-width: 120px) 120px, 100vw"}]},"width":120,"height":138}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/2979147988.json":
/*!***********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/2979147988.json ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/69d538dc217762529b44f716df61d562/13100/trade.png","srcSet":"/static/69d538dc217762529b44f716df61d562/37755/trade.png 24w,\\n/static/69d538dc217762529b44f716df61d562/a8815/trade.png 49w,\\n/static/69d538dc217762529b44f716df61d562/13100/trade.png 97w","sizes":"(min-width: 97px) 97px, 100vw"},"sources":[{"srcSet":"/static/69d538dc217762529b44f716df61d562/d256c/trade.webp 24w,\\n/static/69d538dc217762529b44f716df61d562/64263/trade.webp 49w,\\n/static/69d538dc217762529b44f716df61d562/5f76a/trade.webp 97w","type":"image/webp","sizes":"(min-width: 97px) 97px, 100vw"}]},"width":97,"height":104}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/3122679878.json":
/*!***********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/3122679878.json ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/6f614ffae8314abf97cb223a713321fa/99bf9/phone3.png","srcSet":"/static/6f614ffae8314abf97cb223a713321fa/16435/phone3.png 62w,\\n/static/6f614ffae8314abf97cb223a713321fa/43b99/phone3.png 125w,\\n/static/6f614ffae8314abf97cb223a713321fa/99bf9/phone3.png 249w","sizes":"(min-width: 249px) 249px, 100vw"},"sources":[{"srcSet":"/static/6f614ffae8314abf97cb223a713321fa/bd3fb/phone3.webp 62w,\\n/static/6f614ffae8314abf97cb223a713321fa/55e72/phone3.webp 125w,\\n/static/6f614ffae8314abf97cb223a713321fa/d1b1e/phone3.webp 249w","type":"image/webp","sizes":"(min-width: 249px) 249px, 100vw"}]},"width":276,"height":559.7590361445783}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/3255102896.json":
/*!***********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/3255102896.json ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/e5fcc19e752e7b49d522ee9c7442970c/23d20/deepak.png","srcSet":"/static/e5fcc19e752e7b49d522ee9c7442970c/43ae5/deepak.png 58w,\\n/static/e5fcc19e752e7b49d522ee9c7442970c/ad77b/deepak.png 117w,\\n/static/e5fcc19e752e7b49d522ee9c7442970c/23d20/deepak.png 233w","sizes":"(min-width: 233px) 233px, 100vw"},"sources":[{"srcSet":"/static/e5fcc19e752e7b49d522ee9c7442970c/9cf62/deepak.webp 58w,\\n/static/e5fcc19e752e7b49d522ee9c7442970c/4651a/deepak.webp 117w,\\n/static/e5fcc19e752e7b49d522ee9c7442970c/da831/deepak.webp 233w","type":"image/webp","sizes":"(min-width: 233px) 233px, 100vw"}]},"width":273,"height":299.94849785407723}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/3278153188.json":
/*!***********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/3278153188.json ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/25a752259e4407bb6abb8f63933fed66/b26ea/density.png","srcSet":"/static/25a752259e4407bb6abb8f63933fed66/c6721/density.png 37w,\\n/static/25a752259e4407bb6abb8f63933fed66/63edb/density.png 73w,\\n/static/25a752259e4407bb6abb8f63933fed66/b26ea/density.png 146w","sizes":"(min-width: 146px) 146px, 100vw"},"sources":[{"srcSet":"/static/25a752259e4407bb6abb8f63933fed66/91c39/density.webp 37w,\\n/static/25a752259e4407bb6abb8f63933fed66/611dd/density.webp 73w,\\n/static/25a752259e4407bb6abb8f63933fed66/b90a0/density.webp 146w","type":"image/webp","sizes":"(min-width: 146px) 146px, 100vw"}]},"width":146,"height":30.000000000000004}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/3302983342.json":
/*!***********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/3302983342.json ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/7d64fe826282a36544c42847ffe6f4fe/7c9c4/aditya.png","srcSet":"/static/7d64fe826282a36544c42847ffe6f4fe/3c6f7/aditya.png 30w,\\n/static/7d64fe826282a36544c42847ffe6f4fe/3c46a/aditya.png 60w,\\n/static/7d64fe826282a36544c42847ffe6f4fe/7c9c4/aditya.png 120w","sizes":"(min-width: 120px) 120px, 100vw"},"sources":[{"srcSet":"/static/7d64fe826282a36544c42847ffe6f4fe/7701d/aditya.webp 30w,\\n/static/7d64fe826282a36544c42847ffe6f4fe/28a68/aditya.webp 60w,\\n/static/7d64fe826282a36544c42847ffe6f4fe/9a0a4/aditya.webp 120w","type":"image/webp","sizes":"(min-width: 120px) 120px, 100vw"}]},"width":120,"height":138}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/3317414867.json":
/*!***********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/3317414867.json ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/ab7b887f18810d3db508e397b702d729/5178e/Logo.png","srcSet":"/static/ab7b887f18810d3db508e397b702d729/c89f0/Logo.png 25w,\\n/static/ab7b887f18810d3db508e397b702d729/8da5b/Logo.png 50w,\\n/static/ab7b887f18810d3db508e397b702d729/5178e/Logo.png 100w","sizes":"(min-width: 100px) 100px, 100vw"},"sources":[{"srcSet":"/static/ab7b887f18810d3db508e397b702d729/5de30/Logo.webp 25w,\\n/static/ab7b887f18810d3db508e397b702d729/16667/Logo.webp 50w,\\n/static/ab7b887f18810d3db508e397b702d729/c5f06/Logo.webp 100w","type":"image/webp","sizes":"(min-width: 100px) 100px, 100vw"}]},"width":100,"height":24}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/346366339.json":
/*!**********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/346366339.json ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/4e951f6949470788af37de661f80853f/95655/community.png","srcSet":"/static/4e951f6949470788af37de661f80853f/04da6/community.png 362w,\\n/static/4e951f6949470788af37de661f80853f/b56b3/community.png 723w,\\n/static/4e951f6949470788af37de661f80853f/95655/community.png 1446w","sizes":"(min-width: 1446px) 1446px, 100vw"},"sources":[{"srcSet":"/static/4e951f6949470788af37de661f80853f/be637/community.webp 362w,\\n/static/4e951f6949470788af37de661f80853f/6e7d8/community.webp 723w,\\n/static/4e951f6949470788af37de661f80853f/405f2/community.webp 1446w","type":"image/webp","sizes":"(min-width: 1446px) 1446px, 100vw"}]},"width":1446,"height":797}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/3474568836.json":
/*!***********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/3474568836.json ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/2ad3d1b72a22a38ea0193561433aa92a/ccfce/phoneGroup.png","srcSet":"/static/2ad3d1b72a22a38ea0193561433aa92a/f36e4/phoneGroup.png 70w,\\n/static/2ad3d1b72a22a38ea0193561433aa92a/86f4f/phoneGroup.png 140w,\\n/static/2ad3d1b72a22a38ea0193561433aa92a/ccfce/phoneGroup.png 280w,\\n/static/2ad3d1b72a22a38ea0193561433aa92a/e9b34/phoneGroup.png 560w","sizes":"(min-width: 280px) 280px, 100vw"},"sources":[{"srcSet":"/static/2ad3d1b72a22a38ea0193561433aa92a/04e57/phoneGroup.webp 70w,\\n/static/2ad3d1b72a22a38ea0193561433aa92a/16070/phoneGroup.webp 140w,\\n/static/2ad3d1b72a22a38ea0193561433aa92a/1c348/phoneGroup.webp 280w,\\n/static/2ad3d1b72a22a38ea0193561433aa92a/6e03b/phoneGroup.webp 560w","type":"image/webp","sizes":"(min-width: 280px) 280px, 100vw"}]},"width":280,"height":1500}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/3688739600.json":
/*!***********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/3688739600.json ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/5ce69f90193d0503c702528e2b725922/b26ea/deltaExchange.png","srcSet":"/static/5ce69f90193d0503c702528e2b725922/c6721/deltaExchange.png 37w,\\n/static/5ce69f90193d0503c702528e2b725922/63edb/deltaExchange.png 73w,\\n/static/5ce69f90193d0503c702528e2b725922/b26ea/deltaExchange.png 146w","sizes":"(min-width: 146px) 146px, 100vw"},"sources":[{"srcSet":"/static/5ce69f90193d0503c702528e2b725922/91c39/deltaExchange.webp 37w,\\n/static/5ce69f90193d0503c702528e2b725922/611dd/deltaExchange.webp 73w,\\n/static/5ce69f90193d0503c702528e2b725922/b90a0/deltaExchange.webp 146w","type":"image/webp","sizes":"(min-width: 146px) 146px, 100vw"}]},"width":146,"height":30.000000000000004}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/3805666073.json":
/*!***********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/3805666073.json ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/3eb77964a90cc22f6dff29d19348ed75/9b82f/depositFrame.png","srcSet":"/static/3eb77964a90cc22f6dff29d19348ed75/530a6/depositFrame.png 76w,\\n/static/3eb77964a90cc22f6dff29d19348ed75/48e68/depositFrame.png 153w,\\n/static/3eb77964a90cc22f6dff29d19348ed75/9b82f/depositFrame.png 305w","sizes":"(min-width: 305px) 305px, 100vw"},"sources":[{"srcSet":"/static/3eb77964a90cc22f6dff29d19348ed75/a9f13/depositFrame.webp 76w,\\n/static/3eb77964a90cc22f6dff29d19348ed75/1d10d/depositFrame.webp 153w,\\n/static/3eb77964a90cc22f6dff29d19348ed75/91b76/depositFrame.webp 305w","type":"image/webp","sizes":"(min-width: 305px) 305px, 100vw"}]},"width":305,"height":272}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/4049927832.json":
/*!***********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/4049927832.json ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/3551d05071d647f27b34f4d3e46aaf2a/6430f/phones.png","srcSet":"/static/3551d05071d647f27b34f4d3e46aaf2a/3b8ea/phones.png 195w,\\n/static/3551d05071d647f27b34f4d3e46aaf2a/a262c/phones.png 390w,\\n/static/3551d05071d647f27b34f4d3e46aaf2a/6430f/phones.png 780w","sizes":"(min-width: 780px) 780px, 100vw"},"sources":[{"srcSet":"/static/3551d05071d647f27b34f4d3e46aaf2a/817b8/phones.webp 195w,\\n/static/3551d05071d647f27b34f4d3e46aaf2a/37d4b/phones.webp 390w,\\n/static/3551d05071d647f27b34f4d3e46aaf2a/58dec/phones.webp 780w","type":"image/webp","sizes":"(min-width: 780px) 780px, 100vw"}]},"width":779.594,"height":668.6517769230769}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/4083478856.json":
/*!***********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/4083478856.json ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/403ac7a062e9a82fbf322801f172bdfe/baf10/accountLine.png","srcSet":"/static/403ac7a062e9a82fbf322801f172bdfe/f2d80/accountLine.png 284w,\\n/static/403ac7a062e9a82fbf322801f172bdfe/68cdb/accountLine.png 567w,\\n/static/403ac7a062e9a82fbf322801f172bdfe/baf10/accountLine.png 1134w","sizes":"(min-width: 1134px) 1134px, 100vw"},"sources":[{"srcSet":"/static/403ac7a062e9a82fbf322801f172bdfe/95643/accountLine.webp 284w,\\n/static/403ac7a062e9a82fbf322801f172bdfe/d2d09/accountLine.webp 567w,\\n/static/403ac7a062e9a82fbf322801f172bdfe/a5c66/accountLine.webp 1134w","type":"image/webp","sizes":"(min-width: 1134px) 1134px, 100vw"}]},"width":1134,"height":2}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/4096760769.json":
/*!***********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/4096760769.json ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/5e65877ca2221e3706f40a0f3534e988/7e339/Frame.png","srcSet":"/static/5e65877ca2221e3706f40a0f3534e988/9cc13/Frame.png 71w,\\n/static/5e65877ca2221e3706f40a0f3534e988/c6f00/Frame.png 142w,\\n/static/5e65877ca2221e3706f40a0f3534e988/7e339/Frame.png 284w","sizes":"(min-width: 284px) 284px, 100vw"},"sources":[{"srcSet":"/static/5e65877ca2221e3706f40a0f3534e988/69201/Frame.webp 71w,\\n/static/5e65877ca2221e3706f40a0f3534e988/13287/Frame.webp 142w,\\n/static/5e65877ca2221e3706f40a0f3534e988/3de68/Frame.webp 284w","type":"image/webp","sizes":"(min-width: 284px) 284px, 100vw"}]},"width":284,"height":239}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/4126987473.json":
/*!***********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/4126987473.json ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/9417af02da9144fe7cd2d15fd255167e/e317b/instagram%20logo.png","srcSet":"/static/9417af02da9144fe7cd2d15fd255167e/47ee7/instagram%20logo.png 6w,\\n/static/9417af02da9144fe7cd2d15fd255167e/c27bc/instagram%20logo.png 11w,\\n/static/9417af02da9144fe7cd2d15fd255167e/e317b/instagram%20logo.png 22w","sizes":"(min-width: 22px) 22px, 100vw"},"sources":[{"srcSet":"/static/9417af02da9144fe7cd2d15fd255167e/eee53/instagram%20logo.webp 6w,\\n/static/9417af02da9144fe7cd2d15fd255167e/32806/instagram%20logo.webp 11w,\\n/static/9417af02da9144fe7cd2d15fd255167e/42570/instagram%20logo.webp 22w","type":"image/webp","sizes":"(min-width: 22px) 22px, 100vw"}]},"width":32,"height":32}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/4127843249.json":
/*!***********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/4127843249.json ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/44b6ec9dbefb393107e0c60a374514f1/fe465/aakash.png","srcSet":"/static/44b6ec9dbefb393107e0c60a374514f1/e6db5/aakash.png 66w,\\n/static/44b6ec9dbefb393107e0c60a374514f1/22017/aakash.png 132w,\\n/static/44b6ec9dbefb393107e0c60a374514f1/fe465/aakash.png 263w","sizes":"(min-width: 263px) 263px, 100vw"},"sources":[{"srcSet":"/static/44b6ec9dbefb393107e0c60a374514f1/52ffd/aakash.webp 66w,\\n/static/44b6ec9dbefb393107e0c60a374514f1/30f6d/aakash.webp 132w,\\n/static/44b6ec9dbefb393107e0c60a374514f1/3d78a/aakash.webp 263w","type":"image/webp","sizes":"(min-width: 263px) 263px, 100vw"}]},"width":273,"height":257.4296577946768}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/4134245326.json":
/*!***********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/4134245326.json ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#b8b8b8","images":{"fallback":{"src":"/static/73db32df4f04719ddde378746a1f6cca/f14e5/tribeCapital.png","srcSet":"/static/73db32df4f04719ddde378746a1f6cca/ddaa5/tribeCapital.png 59w,\\n/static/73db32df4f04719ddde378746a1f6cca/63918/tribeCapital.png 118w,\\n/static/73db32df4f04719ddde378746a1f6cca/f14e5/tribeCapital.png 236w","sizes":"(min-width: 236px) 236px, 100vw"},"sources":[{"srcSet":"/static/73db32df4f04719ddde378746a1f6cca/d36a1/tribeCapital.webp 59w,\\n/static/73db32df4f04719ddde378746a1f6cca/38683/tribeCapital.webp 118w,\\n/static/73db32df4f04719ddde378746a1f6cca/005fb/tribeCapital.webp 236w","type":"image/webp","sizes":"(min-width: 236px) 236px, 100vw"}]},"width":236,"height":24}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/419950840.json":
/*!**********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/419950840.json ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/b6ea4ce79214338eb2379a59631f99d6/c27bc/facebooklogo.png","srcSet":"/static/b6ea4ce79214338eb2379a59631f99d6/e6112/facebooklogo.png 3w,\\n/static/b6ea4ce79214338eb2379a59631f99d6/47ee7/facebooklogo.png 6w,\\n/static/b6ea4ce79214338eb2379a59631f99d6/c27bc/facebooklogo.png 11w","sizes":"(min-width: 11px) 11px, 100vw"},"sources":[{"srcSet":"/static/b6ea4ce79214338eb2379a59631f99d6/fda91/facebooklogo.webp 3w,\\n/static/b6ea4ce79214338eb2379a59631f99d6/eee53/facebooklogo.webp 6w,\\n/static/b6ea4ce79214338eb2379a59631f99d6/32806/facebooklogo.webp 11w","type":"image/webp","sizes":"(min-width: 11px) 11px, 100vw"}]},"width":32,"height":32}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/4280404961.json":
/*!***********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/4280404961.json ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/75db313f03ecff5d0e09aab62404da0e/c35a5/orios.png","srcSet":"/static/75db313f03ecff5d0e09aab62404da0e/4793b/orios.png 46w,\\n/static/75db313f03ecff5d0e09aab62404da0e/6948d/orios.png 93w,\\n/static/75db313f03ecff5d0e09aab62404da0e/c35a5/orios.png 185w","sizes":"(min-width: 185px) 185px, 100vw"},"sources":[{"srcSet":"/static/75db313f03ecff5d0e09aab62404da0e/7be38/orios.webp 46w,\\n/static/75db313f03ecff5d0e09aab62404da0e/61394/orios.webp 93w,\\n/static/75db313f03ecff5d0e09aab62404da0e/ae11e/orios.webp 185w","type":"image/webp","sizes":"(min-width: 185px) 185px, 100vw"}]},"width":185,"height":40}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/4289327926.json":
/*!***********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/4289327926.json ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/7739c3070e8053fbbd3f7fcdc504ebb4/abd9e/sound.png","srcSet":"/static/7739c3070e8053fbbd3f7fcdc504ebb4/fdadd/sound.png 47w,\\n/static/7739c3070e8053fbbd3f7fcdc504ebb4/a14e0/sound.png 95w,\\n/static/7739c3070e8053fbbd3f7fcdc504ebb4/abd9e/sound.png 189w","sizes":"(min-width: 189px) 189px, 100vw"},"sources":[{"srcSet":"/static/7739c3070e8053fbbd3f7fcdc504ebb4/ef94f/sound.webp 47w,\\n/static/7739c3070e8053fbbd3f7fcdc504ebb4/97e84/sound.webp 95w,\\n/static/7739c3070e8053fbbd3f7fcdc504ebb4/bc9ef/sound.webp 189w","type":"image/webp","sizes":"(min-width: 189px) 189px, 100vw"}]},"width":189,"height":189}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/582565269.json":
/*!**********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/582565269.json ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/bd1058c6349e0b8218eb33861bb230f2/b4330/phon1.png","srcSet":"/static/bd1058c6349e0b8218eb33861bb230f2/afc8c/phon1.png 63w,\\n/static/bd1058c6349e0b8218eb33861bb230f2/43b99/phon1.png 125w,\\n/static/bd1058c6349e0b8218eb33861bb230f2/b4330/phon1.png 250w","sizes":"(min-width: 250px) 250px, 100vw"},"sources":[{"srcSet":"/static/bd1058c6349e0b8218eb33861bb230f2/15852/phon1.webp 63w,\\n/static/bd1058c6349e0b8218eb33861bb230f2/55e72/phon1.webp 125w,\\n/static/bd1058c6349e0b8218eb33861bb230f2/4e6e2/phon1.webp 250w","type":"image/webp","sizes":"(min-width: 250px) 250px, 100vw"}]},"width":276,"height":559.728}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/656265372.json":
/*!**********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/656265372.json ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/7d06dd17afe45826a231db0b17bd1ca5/a8b52/user.png","srcSet":"/static/7d06dd17afe45826a231db0b17bd1ca5/53973/user.png 30w,\\n/static/7d06dd17afe45826a231db0b17bd1ca5/7ab40/user.png 60w,\\n/static/7d06dd17afe45826a231db0b17bd1ca5/a8b52/user.png 120w","sizes":"(min-width: 120px) 120px, 100vw"},"sources":[{"srcSet":"/static/7d06dd17afe45826a231db0b17bd1ca5/bde72/user.webp 30w,\\n/static/7d06dd17afe45826a231db0b17bd1ca5/927d1/user.webp 60w,\\n/static/7d06dd17afe45826a231db0b17bd1ca5/507b0/user.webp 120w","type":"image/webp","sizes":"(min-width: 120px) 120px, 100vw"}]},"width":120,"height":120}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/666639734.json":
/*!**********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/666639734.json ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/88fc8733dd305e54347356d51d229d8a/88208/Twitter%20logo.png","srcSet":"/static/88fc8733dd305e54347356d51d229d8a/47ee7/Twitter%20logo.png 6w,\\n/static/88fc8733dd305e54347356d51d229d8a/86ee2/Twitter%20logo.png 13w,\\n/static/88fc8733dd305e54347356d51d229d8a/88208/Twitter%20logo.png 25w","sizes":"(min-width: 25px) 25px, 100vw"},"sources":[{"srcSet":"/static/88fc8733dd305e54347356d51d229d8a/eee53/Twitter%20logo.webp 6w,\\n/static/88fc8733dd305e54347356d51d229d8a/68795/Twitter%20logo.webp 13w,\\n/static/88fc8733dd305e54347356d51d229d8a/2fa99/Twitter%20logo.webp 25w","type":"image/webp","sizes":"(min-width: 25px) 25px, 100vw"}]},"width":32,"height":32}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/720336983.json":
/*!**********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/720336983.json ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#b8b8c8","images":{"fallback":{"src":"/static/453db4b3d07f9d19a87314df4ba19ade/f9f53/linkedin.png","srcSet":"/static/453db4b3d07f9d19a87314df4ba19ade/22867/linkedin.png 8w,\\n/static/453db4b3d07f9d19a87314df4ba19ade/d139f/linkedin.png 17w,\\n/static/453db4b3d07f9d19a87314df4ba19ade/f9f53/linkedin.png 33w","sizes":"(min-width: 33px) 33px, 100vw"},"sources":[{"srcSet":"/static/453db4b3d07f9d19a87314df4ba19ade/5d252/linkedin.webp 8w,\\n/static/453db4b3d07f9d19a87314df4ba19ade/07b39/linkedin.webp 17w,\\n/static/453db4b3d07f9d19a87314df4ba19ade/0cc22/linkedin.webp 33w","type":"image/webp","sizes":"(min-width: 33px) 33px, 100vw"}]},"width":33,"height":33}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/750106072.json":
/*!**********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/750106072.json ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/ddd9225e4721f71fded857e4d4bb484a/e317b/linkedin%20logo.png","srcSet":"/static/ddd9225e4721f71fded857e4d4bb484a/47ee7/linkedin%20logo.png 6w,\\n/static/ddd9225e4721f71fded857e4d4bb484a/c27bc/linkedin%20logo.png 11w,\\n/static/ddd9225e4721f71fded857e4d4bb484a/e317b/linkedin%20logo.png 22w","sizes":"(min-width: 22px) 22px, 100vw"},"sources":[{"srcSet":"/static/ddd9225e4721f71fded857e4d4bb484a/eee53/linkedin%20logo.webp 6w,\\n/static/ddd9225e4721f71fded857e4d4bb484a/32806/linkedin%20logo.webp 11w,\\n/static/ddd9225e4721f71fded857e4d4bb484a/42570/linkedin%20logo.webp 22w","type":"image/webp","sizes":"(min-width: 22px) 22px, 100vw"}]},"width":32,"height":32}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/769930326.json":
/*!**********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/769930326.json ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#e8f828","images":{"fallback":{"src":"/static/f5225aa56982b95554e2c440f7bfae5a/fa83a/line.png","srcSet":"/static/f5225aa56982b95554e2c440f7bfae5a/02fb6/line.png 1w,\\n/static/f5225aa56982b95554e2c440f7bfae5a/68367/line.png 2w,\\n/static/f5225aa56982b95554e2c440f7bfae5a/fa83a/line.png 3w","sizes":"(min-width: 3px) 3px, 100vw"},"sources":[{"srcSet":"/static/f5225aa56982b95554e2c440f7bfae5a/03be2/line.webp 1w,\\n/static/f5225aa56982b95554e2c440f7bfae5a/51d72/line.webp 2w,\\n/static/f5225aa56982b95554e2c440f7bfae5a/523a9/line.webp 3w","type":"image/webp","sizes":"(min-width: 3px) 3px, 100vw"}]},"width":3,"height":172}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/83361771.json":
/*!*********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/83361771.json ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/c09ab4b3fd33f25073f8ac67a2d9b679/ae06d/arjunNayak.png","srcSet":"/static/c09ab4b3fd33f25073f8ac67a2d9b679/6f63a/arjunNayak.png 50w,\\n/static/c09ab4b3fd33f25073f8ac67a2d9b679/bc3ce/arjunNayak.png 100w,\\n/static/c09ab4b3fd33f25073f8ac67a2d9b679/ae06d/arjunNayak.png 199w","sizes":"(min-width: 199px) 199px, 100vw"},"sources":[{"srcSet":"/static/c09ab4b3fd33f25073f8ac67a2d9b679/124c8/arjunNayak.webp 50w,\\n/static/c09ab4b3fd33f25073f8ac67a2d9b679/f4f50/arjunNayak.webp 100w,\\n/static/c09ab4b3fd33f25073f8ac67a2d9b679/284c1/arjunNayak.webp 199w","type":"image/webp","sizes":"(min-width: 199px) 199px, 100vw"}]},"width":200,"height":239.19597989949747}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/877668297.json":
/*!**********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/877668297.json ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/a41724c66a7e0cb07beb53a694bdc453/b26ea/coindcx.png","srcSet":"/static/a41724c66a7e0cb07beb53a694bdc453/c6721/coindcx.png 37w,\\n/static/a41724c66a7e0cb07beb53a694bdc453/63edb/coindcx.png 73w,\\n/static/a41724c66a7e0cb07beb53a694bdc453/b26ea/coindcx.png 146w","sizes":"(min-width: 146px) 146px, 100vw"},"sources":[{"srcSet":"/static/a41724c66a7e0cb07beb53a694bdc453/91c39/coindcx.webp 37w,\\n/static/a41724c66a7e0cb07beb53a694bdc453/611dd/coindcx.webp 73w,\\n/static/a41724c66a7e0cb07beb53a694bdc453/b90a0/coindcx.webp 146w","type":"image/webp","sizes":"(min-width: 146px) 146px, 100vw"}]},"width":146,"height":30.000000000000004}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/908151176.json":
/*!**********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/908151176.json ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/1ec9a838efcd84c237e46774a7aca852/7c9c4/gokul.png","srcSet":"/static/1ec9a838efcd84c237e46774a7aca852/3c6f7/gokul.png 30w,\\n/static/1ec9a838efcd84c237e46774a7aca852/3c46a/gokul.png 60w,\\n/static/1ec9a838efcd84c237e46774a7aca852/7c9c4/gokul.png 120w","sizes":"(min-width: 120px) 120px, 100vw"},"sources":[{"srcSet":"/static/1ec9a838efcd84c237e46774a7aca852/7701d/gokul.webp 30w,\\n/static/1ec9a838efcd84c237e46774a7aca852/28a68/gokul.webp 60w,\\n/static/1ec9a838efcd84c237e46774a7aca852/9a0a4/gokul.webp 120w","type":"image/webp","sizes":"(min-width: 120px) 120px, 100vw"}]},"width":120,"height":138}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/909276331.json":
/*!**********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/909276331.json ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/ab7b887f18810d3db508e397b702d729/a4b15/Logo.png","srcSet":"/static/ab7b887f18810d3db508e397b702d729/c89f0/Logo.png 25w,\\n/static/ab7b887f18810d3db508e397b702d729/8da5b/Logo.png 50w,\\n/static/ab7b887f18810d3db508e397b702d729/a4b15/Logo.png 100w","sizes":"(min-width: 100px) 100px, 100vw"},"sources":[{"srcSet":"/static/ab7b887f18810d3db508e397b702d729/5de30/Logo.webp 25w,\\n/static/ab7b887f18810d3db508e397b702d729/16667/Logo.webp 50w,\\n/static/ab7b887f18810d3db508e397b702d729/0f6d3/Logo.webp 100w","type":"image/webp","sizes":"(min-width: 100px) 100px, 100vw"}]},"width":128,"height":29.44}');

/***/ })

};
;
//# sourceMappingURL=component---src-pages-index-js.js.map