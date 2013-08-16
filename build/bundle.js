;(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var $, html, main_page, map;

map = require('./meta.coffee').map;

html = require('lilyturf').html;

$ = require('zepto-browserify').$;

main_page = function(data) {
  return html(function() {
    var category, list, name, site;
    return this.div({
      id: 'page'
    }, this.div({
      id: 'nav'
    }, (function() {
      var _results;
      _results = [];
      for (category in data) {
        _results.push(this.div({
          "class": 'direction',
          'data-category': category
        }, this.text(category)));
      }
      return _results;
    }).call(this)), this.div({
      id: 'body'
    }, (function() {
      var _results;
      _results = [];
      for (category in data) {
        list = data[category];
        _results.push(this.div({
          "class": 'category holder',
          'data-category': category
        }, this.div({
          "class": 'show'
        }, (function() {
          var _results1;
          _results1 = [];
          for (name in list) {
            site = list[name];
            _results1.push(this.div({
              "class": 'place',
              'data-name': name
            }, this.div({
              "class": 'name'
            }, this.a({
              href: site.url,
              target: '_blank'
            }, this.text(site.name)))));
          }
          return _results1;
        }).call(this))));
      }
      return _results;
    }).call(this)));
  });
};

$('body').html(main_page(map));

$('#nav .direction').click(function() {
  var query_open, the_category;
  the_category = $(this).attr('data-category');
  query_open = "[data-category=\"" + the_category + "\"]";
  $('#body .category').filter(query_open).removeClass('hide').addClass('open');
  return $('#body .category').not(query_open).removeClass('open').addClass('hide');
});

$('#nav .direction').first().click();


},{"./meta.coffee":2,"lilyturf":3,"zepto-browserify":4}],2:[function(require,module,exports){
exports.map = {
  coding: {
    zhihu: {
      name: '知乎',
      desc: '一个真实的网络问答社区，帮助你寻找答案，分享知识。',
      logo: 'zhihu.png',
      bg_color: '#0078d8',
      url: 'http://zhihu.com'
    },
    ruby_china: {
      name: 'Ruby China',
      desc: '中国 Ruby 社区，由众多爱好者共同维护，致力于构建完善的 Ruby 中文社区。',
      logo: 'ruby-china.png',
      bg_color: 'white',
      url: 'http://ruby-china.org'
    },
    v2ex: {
      name: 'V2EX',
      desc: 'way to explore',
      logo: 'v2ex.png',
      bg_color: 'hsl(0, 0%, 82%)',
      url: 'http://v2ex.com/'
    },
    segmentfault: {
      name: 'segmentfault',
      desc: '一个专业面向开发者的技术问答社区',
      logo: 'segmentfault.png',
      bg_color: 'hsl(0, 0%, 95%)',
      url: 'http://segmentfault.com/'
    },
    f2e: {
      name: 'F2E',
      desc: '前端技术社区',
      url: 'http://f2e.im/'
    },
    appletuan: {
      name: '苹果团',
      desc: '靠谱的苹果购机社区',
      logo: 'appletuan.png',
      bg_color: 'hsl(205, 6%, 39%)',
      url: 'http://www.appletuan.com/'
    },
    linews: {
      name: 'Linews',
      desc: 'Linux/Opensource news',
      url: 'http://news.wowubuntu.com/',
      bg_color: 'hsl(0, 0%, 91%)'
    },
    cnode: {
      name: 'CNode.js',
      desc: 'Node.js 开源技术社区',
      logo: 'cnode.png',
      url: 'http://cnodejs.org/'
    },
    python_china: {
      name: 'Python China',
      desc: 'Python China',
      url: 'http://python-china.org/'
    },
    qianduan: {
      name: '前端界',
      desc: '每日前端开发新闻，跟踪前端开发趋势.',
      url: 'http://qianduan.us/latest',
      bg_color: 'hsl(0, 0%, 91%)'
    },
    inews: {
      name: 'Mac/iOS News',
      desc: 'iNews.io',
      url: 'http://inews.io/',
      bg_color: 'hsl(0, 0%, 91%)'
    },
    haskell_group: {
      name: 'Haskell 小组',
      logo: 'haskell.jpg',
      url: 'http://www.douban.com/group/Haskell/'
    },
    lisp: {
      name: 'LISP 小组',
      logo: 'lisp.jpg',
      url: 'http://www.douban.com/group/Lisp/'
    },
    angularjs: {
      name: 'AngularJS 中文社区',
      desc: '使用超动感HTML & JS开发WEB应用！',
      logo: 'angularcn.png',
      url: 'http://www.angularjs.cn/'
    },
    geek_csdn: {
      name: '极客头条 ',
      desc: 'CSDN推出的精品内容发掘平台，在这里可以发现、分享值得你关注的极客新闻。',
      url: 'http://geek.csdn.net/'
    },
    golang: {
      name: 'Study Golang',
      desc: 'Go 语言学习园地',
      logo: 'golang.png',
      url: 'http://studygolang.com/'
    }
  },
  programming: {
    codewall: {
      name: 'coderwall',
      url: 'https://coderwall.com/welcome'
    },
    github: {
      name: 'Github',
      url: 'https://github.com/'
    },
    echojs: {
      name: 'Echo JS',
      url: 'http://www.echojs.com/'
    },
    hacknews: {
      name: 'Hacker News',
      url: 'https://news.ycombinator.com/'
    },
    bitcast: {
      name: 'Bit Cast',
      url: 'https://www.bitcast.io/'
    },
    tdjs: {
      name: 'Test-Driven JavaScript',
      url: 'http://www.letscodejavascript.com/'
    },
    stackexchange: {
      name: 'StackExchange',
      url: 'http://stackexchange.com/sites'
    },
    nettuts: {
      name: 'Nettuts',
      url: 'http://net.tutsplus.com/'
    }
  },
  design: {
    dribbble: {
      name: 'dribbble',
      desc: 'Dribbble is a community of designers answering that question each day',
      logo: 'dribbble.gif',
      url: 'http://dribbble.com/',
      bg_color: 'hsl(0, 0%, 94%)'
    },
    zerply: {
      name: 'Zerply',
      desc: 'Zerply is a community of makers',
      logo: 'zerply.svg',
      url: 'http://zerply.com/',
      bg_color: 'hsl(87, 33%, 82%)'
    },
    forrst: {
      name: 'Forrst',
      desc: 'A community where developers & designers improve their craft through design feedback.',
      logo: 'forrst.png',
      url: 'http://forrst.com/',
      bg_color: 'hsl(52, 29%, 90%)'
    },
    tympanus: {
      name: 'tympanus',
      url: 'http://tympanus.net/'
    },
    wdl: {
      name: 'WDL',
      desc: 'Web Design Blog, Tutorials and Inspiration',
      url: 'http://webdesignledger.com/',
      logo: 'wdl.png'
    },
    deviantart: {
      name: 'deviantART',
      desc: 'where ART meets application!',
      logo: 'deviantart.png',
      bg_color: 'hsl(140, 10%, 35%)',
      url: 'http://www.deviantart.com/'
    },
    thebestdesigns: {
      name: 'thebestdesigns',
      desc: 'The Best Designs / Best Web Design Awards & CSS Gallery',
      logo: 'thebestdesigns.png',
      url: 'http://www.thebestdesigns.com/',
      bg_color: 'hsl(60, 27%, 94%)'
    },
    smashing: {
      name: 'Smashing Magazine',
      desc: 'For Professional Web Designers and Developers',
      url: 'http://www.smashingmagazine.com/',
      logo: 'smashing.png'
    },
    unheap: {
      name: 'Unheap',
      url: 'http://www.unheap.com/'
    },
    visually: {
      name: 'visual.ly',
      url: 'http://visual.ly/'
    },
    dn: {
      name: 'Designer News',
      url: 'https://news.layervault.com/'
    }
  }
};


},{}],3:[function(require,module,exports){
// Generated by CoffeeScript 1.6.3
var html_scope, html_tools, pair_elems, resolve, single_elems,
  __slice = [].slice;

html_scope = {};

pair_elems = "head title body script  div nav header footer section article  p span textarea br pre code a address b backquote  button font frame form hr i  ul li ol table tr td th title  canvas audio video select style".split(/\s+/);

single_elems = "img meta input link iframe audio video".split(/\s+/);

html_tools = {
  attrs: function(obj) {
    var attrs, key, value;
    attrs = "";
    for (key in obj) {
      value = obj[key];
      attrs += " " + key + "='" + value + "'";
    }
    return attrs;
  },
  text: function(text) {
    if (text != null) {
      return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\s/g, "&nbsp;");
    } else {
      return '';
    }
  }
};

resolve = function(list) {
  var elem, obj;
  obj = {};
  elem = [];
  list.forEach(function(item) {
    var key, that, value, _i, _len, _results, _results1;
    if (item != null) {
      if (item.__proto__ === Object.prototype) {
        _results = [];
        for (key in item) {
          value = item[key];
          _results.push(obj[key] = value);
        }
        return _results;
      } else if (item.__proto__ === Array.prototype) {
        _results1 = [];
        for (_i = 0, _len = item.length; _i < _len; _i++) {
          that = item[_i];
          _results1.push(elem.push(that));
        }
        return _results1;
      } else {
        return elem.push(item);
      }
    }
  });
  return [obj, elem];
};

pair_elems.map(function(tag) {
  return html_scope[tag] = function() {
    var list, obj, _ref;
    list = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    _ref = resolve(list), obj = _ref[0], list = _ref[1];
    return "<" + tag + (html_tools.attrs(obj)) + ">" + (list.join("")) + "</" + tag + ">";
  };
});

single_elems.map(function(tag) {
  return html_scope[tag] = function(obj) {
    if (obj == null) {
      obj = {};
    }
    return "<" + tag + (html_tools.attrs(obj)) + "/>";
  };
});

html_scope.html = function(string) {
  return string;
};

html_scope.text = html_tools.text;

exports.html = function(generator) {
  return generator.call(html_scope);
};

},{}],4:[function(require,module,exports){
/* Zepto v1.0 - polyfill zepto detect event ajax form fx - zeptojs.com/license */

;(function(undefined){
  if (String.prototype.trim === undefined) // fix for iOS 3.2
    String.prototype.trim = function(){ return this.replace(/^\s+|\s+$/g, '') }

  // For iOS 3.x
  // from https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/reduce
  if (Array.prototype.reduce === undefined)
    Array.prototype.reduce = function(fun){
      if(this === void 0 || this === null) throw new TypeError()
      var t = Object(this), len = t.length >>> 0, k = 0, accumulator
      if(typeof fun != 'function') throw new TypeError()
      if(len == 0 && arguments.length == 1) throw new TypeError()

      if(arguments.length >= 2)
       accumulator = arguments[1]
      else
        do{
          if(k in t){
            accumulator = t[k++]
            break
          }
          if(++k >= len) throw new TypeError()
        } while (true)

      while (k < len){
        if(k in t) accumulator = fun.call(undefined, accumulator, t[k], k, t)
        k++
      }
      return accumulator
    }

})()





var Zepto = (function() {
  var undefined, key, $, classList, emptyArray = [], slice = emptyArray.slice, filter = emptyArray.filter,
    document = window.document,
    elementDisplay = {}, classCache = {},
    getComputedStyle = document.defaultView.getComputedStyle,
    cssNumber = { 'column-count': 1, 'columns': 1, 'font-weight': 1, 'line-height': 1,'opacity': 1, 'z-index': 1, 'zoom': 1 },
    fragmentRE = /^\s*<(\w+|!)[^>]*>/,
    tagExpanderRE = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
    rootNodeRE = /^(?:body|html)$/i,

    // special attributes that should be get/set via method calls
    methodAttributes = ['val', 'css', 'html', 'text', 'data', 'width', 'height', 'offset'],

    adjacencyOperators = [ 'after', 'prepend', 'before', 'append' ],
    table = document.createElement('table'),
    tableRow = document.createElement('tr'),
    containers = {
      'tr': document.createElement('tbody'),
      'tbody': table, 'thead': table, 'tfoot': table,
      'td': tableRow, 'th': tableRow,
      '*': document.createElement('div')
    },
    readyRE = /complete|loaded|interactive/,
    classSelectorRE = /^\.([\w-]+)$/,
    idSelectorRE = /^#([\w-]*)$/,
    tagSelectorRE = /^[\w-]+$/,
    class2type = {},
    toString = class2type.toString,
    zepto = {},
    camelize, uniq,
    tempParent = document.createElement('div')

  zepto.matches = function(element, selector) {
    if (!element || element.nodeType !== 1) return false
    var matchesSelector = element.webkitMatchesSelector || element.mozMatchesSelector ||
                          element.oMatchesSelector || element.matchesSelector
    if (matchesSelector) return matchesSelector.call(element, selector)
    // fall back to performing a selector:
    var match, parent = element.parentNode, temp = !parent
    if (temp) (parent = tempParent).appendChild(element)
    match = ~zepto.qsa(parent, selector).indexOf(element)
    temp && tempParent.removeChild(element)
    return match
  }

  function type(obj) {
    return obj == null ? String(obj) :
      class2type[toString.call(obj)] || "object"
  }

  function isFunction(value) { return type(value) == "function" }
  function isWindow(obj)     { return obj != null && obj == obj.window }
  function isDocument(obj)   { return obj != null && obj.nodeType == obj.DOCUMENT_NODE }
  function isObject(obj)     { return type(obj) == "object" }
  function isPlainObject(obj) {
    return isObject(obj) && !isWindow(obj) && obj.__proto__ == Object.prototype
  }
  function isArray(value) { return value instanceof Array }
  function likeArray(obj) { return typeof obj.length == 'number' }

  function compact(array) { return filter.call(array, function(item){ return item != null }) }
  function flatten(array) { return array.length > 0 ? $.fn.concat.apply([], array) : array }
  camelize = function(str){ return str.replace(/-+(.)?/g, function(match, chr){ return chr ? chr.toUpperCase() : '' }) }
  function dasherize(str) {
    return str.replace(/::/g, '/')
           .replace(/([A-Z]+)([A-Z][a-z])/g, '$1_$2')
           .replace(/([a-z\d])([A-Z])/g, '$1_$2')
           .replace(/_/g, '-')
           .toLowerCase()
  }
  uniq = function(array){ return filter.call(array, function(item, idx){ return array.indexOf(item) == idx }) }

  function classRE(name) {
    return name in classCache ?
      classCache[name] : (classCache[name] = new RegExp('(^|\\s)' + name + '(\\s|$)'))
  }

  function maybeAddPx(name, value) {
    return (typeof value == "number" && !cssNumber[dasherize(name)]) ? value + "px" : value
  }

  function defaultDisplay(nodeName) {
    var element, display
    if (!elementDisplay[nodeName]) {
      element = document.createElement(nodeName)
      document.body.appendChild(element)
      display = getComputedStyle(element, '').getPropertyValue("display")
      element.parentNode.removeChild(element)
      display == "none" && (display = "block")
      elementDisplay[nodeName] = display
    }
    return elementDisplay[nodeName]
  }

  function children(element) {
    return 'children' in element ?
      slice.call(element.children) :
      $.map(element.childNodes, function(node){ if (node.nodeType == 1) return node })
  }

  // `$.zepto.fragment` takes a html string and an optional tag name
  // to generate DOM nodes nodes from the given html string.
  // The generated DOM nodes are returned as an array.
  // This function can be overriden in plugins for example to make
  // it compatible with browsers that don't support the DOM fully.
  zepto.fragment = function(html, name, properties) {
    if (html.replace) html = html.replace(tagExpanderRE, "<$1></$2>")
    if (name === undefined) name = fragmentRE.test(html) && RegExp.$1
    if (!(name in containers)) name = '*'

    var nodes, dom, container = containers[name]
    container.innerHTML = '' + html
    dom = $.each(slice.call(container.childNodes), function(){
      container.removeChild(this)
    })
    if (isPlainObject(properties)) {
      nodes = $(dom)
      $.each(properties, function(key, value) {
        if (methodAttributes.indexOf(key) > -1) nodes[key](value)
        else nodes.attr(key, value)
      })
    }
    return dom
  }

  // `$.zepto.Z` swaps out the prototype of the given `dom` array
  // of nodes with `$.fn` and thus supplying all the Zepto functions
  // to the array. Note that `__proto__` is not supported on Internet
  // Explorer. This method can be overriden in plugins.
  zepto.Z = function(dom, selector) {
    dom = dom || []
    dom.__proto__ = $.fn
    dom.selector = selector || ''
    return dom
  }

  // `$.zepto.isZ` should return `true` if the given object is a Zepto
  // collection. This method can be overriden in plugins.
  zepto.isZ = function(object) {
    return object instanceof zepto.Z
  }

  // `$.zepto.init` is Zepto's counterpart to jQuery's `$.fn.init` and
  // takes a CSS selector and an optional context (and handles various
  // special cases).
  // This method can be overriden in plugins.
  zepto.init = function(selector, context) {
    // If nothing given, return an empty Zepto collection
    if (!selector) return zepto.Z()
    // If a function is given, call it when the DOM is ready
    else if (isFunction(selector)) return $(document).ready(selector)
    // If a Zepto collection is given, juts return it
    else if (zepto.isZ(selector)) return selector
    else {
      var dom
      // normalize array if an array of nodes is given
      if (isArray(selector)) dom = compact(selector)
      // Wrap DOM nodes. If a plain object is given, duplicate it.
      else if (isObject(selector))
        dom = [isPlainObject(selector) ? $.extend({}, selector) : selector], selector = null
      // If it's a html fragment, create nodes from it
      else if (fragmentRE.test(selector))
        dom = zepto.fragment(selector.trim(), RegExp.$1, context), selector = null
      // If there's a context, create a collection on that context first, and select
      // nodes from there
      else if (context !== undefined) return $(context).find(selector)
      // And last but no least, if it's a CSS selector, use it to select nodes.
      else dom = zepto.qsa(document, selector)
      // create a new Zepto collection from the nodes found
      return zepto.Z(dom, selector)
    }
  }

  // `$` will be the base `Zepto` object. When calling this
  // function just call `$.zepto.init, which makes the implementation
  // details of selecting nodes and creating Zepto collections
  // patchable in plugins.
  $ = function(selector, context){
    return zepto.init(selector, context)
  }

  function extend(target, source, deep) {
    for (key in source)
      if (deep && (isPlainObject(source[key]) || isArray(source[key]))) {
        if (isPlainObject(source[key]) && !isPlainObject(target[key]))
          target[key] = {}
        if (isArray(source[key]) && !isArray(target[key]))
          target[key] = []
        extend(target[key], source[key], deep)
      }
      else if (source[key] !== undefined) target[key] = source[key]
  }

  // Copy all but undefined properties from one or more
  // objects to the `target` object.
  $.extend = function(target){
    var deep, args = slice.call(arguments, 1)
    if (typeof target == 'boolean') {
      deep = target
      target = args.shift()
    }
    args.forEach(function(arg){ extend(target, arg, deep) })
    return target
  }

  // `$.zepto.qsa` is Zepto's CSS selector implementation which
  // uses `document.querySelectorAll` and optimizes for some special cases, like `#id`.
  // This method can be overriden in plugins.
  zepto.qsa = function(element, selector){
    var found
    return (isDocument(element) && idSelectorRE.test(selector)) ?
      ( (found = element.getElementById(RegExp.$1)) ? [found] : [] ) :
      (element.nodeType !== 1 && element.nodeType !== 9) ? [] :
      slice.call(
        classSelectorRE.test(selector) ? element.getElementsByClassName(RegExp.$1) :
        tagSelectorRE.test(selector) ? element.getElementsByTagName(selector) :
        element.querySelectorAll(selector)
      )
  }

  function filtered(nodes, selector) {
    return selector === undefined ? $(nodes) : $(nodes).filter(selector)
  }

  $.contains = function(parent, node) {
    return parent !== node && parent.contains(node)
  }

  function funcArg(context, arg, idx, payload) {
    return isFunction(arg) ? arg.call(context, idx, payload) : arg
  }

  function setAttribute(node, name, value) {
    value == null ? node.removeAttribute(name) : node.setAttribute(name, value)
  }

  // access className property while respecting SVGAnimatedString
  function className(node, value){
    var klass = node.className,
        svg   = klass && klass.baseVal !== undefined

    if (value === undefined) return svg ? klass.baseVal : klass
    svg ? (klass.baseVal = value) : (node.className = value)
  }

  // "true"  => true
  // "false" => false
  // "null"  => null
  // "42"    => 42
  // "42.5"  => 42.5
  // JSON    => parse if valid
  // String  => self
  function deserializeValue(value) {
    var num
    try {
      return value ?
        value == "true" ||
        ( value == "false" ? false :
          value == "null" ? null :
          !isNaN(num = Number(value)) ? num :
          /^[\[\{]/.test(value) ? $.parseJSON(value) :
          value )
        : value
    } catch(e) {
      return value
    }
  }

  $.type = type
  $.isFunction = isFunction
  $.isWindow = isWindow
  $.isArray = isArray
  $.isPlainObject = isPlainObject

  $.isEmptyObject = function(obj) {
    var name
    for (name in obj) return false
    return true
  }

  $.inArray = function(elem, array, i){
    return emptyArray.indexOf.call(array, elem, i)
  }

  $.camelCase = camelize
  $.trim = function(str) { return str.trim() }

  // plugin compatibility
  $.uuid = 0
  $.support = { }
  $.expr = { }

  $.map = function(elements, callback){
    var value, values = [], i, key
    if (likeArray(elements))
      for (i = 0; i < elements.length; i++) {
        value = callback(elements[i], i)
        if (value != null) values.push(value)
      }
    else
      for (key in elements) {
        value = callback(elements[key], key)
        if (value != null) values.push(value)
      }
    return flatten(values)
  }

  $.each = function(elements, callback){
    var i, key
    if (likeArray(elements)) {
      for (i = 0; i < elements.length; i++)
        if (callback.call(elements[i], i, elements[i]) === false) return elements
    } else {
      for (key in elements)
        if (callback.call(elements[key], key, elements[key]) === false) return elements
    }

    return elements
  }

  $.grep = function(elements, callback){
    return filter.call(elements, callback)
  }

  if (window.JSON) $.parseJSON = JSON.parse

  // Populate the class2type map
  $.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(i, name) {
    class2type[ "[object " + name + "]" ] = name.toLowerCase()
  })

  // Define methods that will be available on all
  // Zepto collections
  $.fn = {
    // Because a collection acts like an array
    // copy over these useful array functions.
    forEach: emptyArray.forEach,
    reduce: emptyArray.reduce,
    push: emptyArray.push,
    sort: emptyArray.sort,
    indexOf: emptyArray.indexOf,
    concat: emptyArray.concat,

    // `map` and `slice` in the jQuery API work differently
    // from their array counterparts
    map: function(fn){
      return $($.map(this, function(el, i){ return fn.call(el, i, el) }))
    },
    slice: function(){
      return $(slice.apply(this, arguments))
    },

    ready: function(callback){
      if (readyRE.test(document.readyState)) callback($)
      else document.addEventListener('DOMContentLoaded', function(){ callback($) }, false)
      return this
    },
    get: function(idx){
      return idx === undefined ? slice.call(this) : this[idx >= 0 ? idx : idx + this.length]
    },
    toArray: function(){ return this.get() },
    size: function(){
      return this.length
    },
    remove: function(){
      return this.each(function(){
        if (this.parentNode != null)
          this.parentNode.removeChild(this)
      })
    },
    each: function(callback){
      emptyArray.every.call(this, function(el, idx){
        return callback.call(el, idx, el) !== false
      })
      return this
    },
    filter: function(selector){
      if (isFunction(selector)) return this.not(this.not(selector))
      return $(filter.call(this, function(element){
        return zepto.matches(element, selector)
      }))
    },
    add: function(selector,context){
      return $(uniq(this.concat($(selector,context))))
    },
    is: function(selector){
      return this.length > 0 && zepto.matches(this[0], selector)
    },
    not: function(selector){
      var nodes=[]
      if (isFunction(selector) && selector.call !== undefined)
        this.each(function(idx){
          if (!selector.call(this,idx)) nodes.push(this)
        })
      else {
        var excludes = typeof selector == 'string' ? this.filter(selector) :
          (likeArray(selector) && isFunction(selector.item)) ? slice.call(selector) : $(selector)
        this.forEach(function(el){
          if (excludes.indexOf(el) < 0) nodes.push(el)
        })
      }
      return $(nodes)
    },
    has: function(selector){
      return this.filter(function(){
        return isObject(selector) ?
          $.contains(this, selector) :
          $(this).find(selector).size()
      })
    },
    eq: function(idx){
      return idx === -1 ? this.slice(idx) : this.slice(idx, + idx + 1)
    },
    first: function(){
      var el = this[0]
      return el && !isObject(el) ? el : $(el)
    },
    last: function(){
      var el = this[this.length - 1]
      return el && !isObject(el) ? el : $(el)
    },
    find: function(selector){
      var result, $this = this
      if (typeof selector == 'object')
        result = $(selector).filter(function(){
          var node = this
          return emptyArray.some.call($this, function(parent){
            return $.contains(parent, node)
          })
        })
      else if (this.length == 1) result = $(zepto.qsa(this[0], selector))
      else result = this.map(function(){ return zepto.qsa(this, selector) })
      return result
    },
    closest: function(selector, context){
      var node = this[0], collection = false
      if (typeof selector == 'object') collection = $(selector)
      while (node && !(collection ? collection.indexOf(node) >= 0 : zepto.matches(node, selector)))
        node = node !== context && !isDocument(node) && node.parentNode
      return $(node)
    },
    parents: function(selector){
      var ancestors = [], nodes = this
      while (nodes.length > 0)
        nodes = $.map(nodes, function(node){
          if ((node = node.parentNode) && !isDocument(node) && ancestors.indexOf(node) < 0) {
            ancestors.push(node)
            return node
          }
        })
      return filtered(ancestors, selector)
    },
    parent: function(selector){
      return filtered(uniq(this.pluck('parentNode')), selector)
    },
    children: function(selector){
      return filtered(this.map(function(){ return children(this) }), selector)
    },
    contents: function() {
      return this.map(function() { return slice.call(this.childNodes) })
    },
    siblings: function(selector){
      return filtered(this.map(function(i, el){
        return filter.call(children(el.parentNode), function(child){ return child!==el })
      }), selector)
    },
    empty: function(){
      return this.each(function(){ this.innerHTML = '' })
    },
    // `pluck` is borrowed from Prototype.js
    pluck: function(property){
      return $.map(this, function(el){ return el[property] })
    },
    show: function(){
      return this.each(function(){
        this.style.display == "none" && (this.style.display = null)
        if (getComputedStyle(this, '').getPropertyValue("display") == "none")
          this.style.display = defaultDisplay(this.nodeName)
      })
    },
    replaceWith: function(newContent){
      return this.before(newContent).remove()
    },
    wrap: function(structure){
      var func = isFunction(structure)
      if (this[0] && !func)
        var dom   = $(structure).get(0),
            clone = dom.parentNode || this.length > 1

      return this.each(function(index){
        $(this).wrapAll(
          func ? structure.call(this, index) :
            clone ? dom.cloneNode(true) : dom
        )
      })
    },
    wrapAll: function(structure){
      if (this[0]) {
        $(this[0]).before(structure = $(structure))
        var children
        // drill down to the inmost element
        while ((children = structure.children()).length) structure = children.first()
        $(structure).append(this)
      }
      return this
    },
    wrapInner: function(structure){
      var func = isFunction(structure)
      return this.each(function(index){
        var self = $(this), contents = self.contents(),
            dom  = func ? structure.call(this, index) : structure
        contents.length ? contents.wrapAll(dom) : self.append(dom)
      })
    },
    unwrap: function(){
      this.parent().each(function(){
        $(this).replaceWith($(this).children())
      })
      return this
    },
    clone: function(){
      return this.map(function(){ return this.cloneNode(true) })
    },
    hide: function(){
      return this.css("display", "none")
    },
    toggle: function(setting){
      return this.each(function(){
        var el = $(this)
        ;(setting === undefined ? el.css("display") == "none" : setting) ? el.show() : el.hide()
      })
    },
    prev: function(selector){ return $(this.pluck('previousElementSibling')).filter(selector || '*') },
    next: function(selector){ return $(this.pluck('nextElementSibling')).filter(selector || '*') },
    html: function(html){
      return html === undefined ?
        (this.length > 0 ? this[0].innerHTML : null) :
        this.each(function(idx){
          var originHtml = this.innerHTML
          $(this).empty().append( funcArg(this, html, idx, originHtml) )
        })
    },
    text: function(text){
      return text === undefined ?
        (this.length > 0 ? this[0].textContent : null) :
        this.each(function(){ this.textContent = text })
    },
    attr: function(name, value){
      var result
      return (typeof name == 'string' && value === undefined) ?
        (this.length == 0 || this[0].nodeType !== 1 ? undefined :
          (name == 'value' && this[0].nodeName == 'INPUT') ? this.val() :
          (!(result = this[0].getAttribute(name)) && name in this[0]) ? this[0][name] : result
        ) :
        this.each(function(idx){
          if (this.nodeType !== 1) return
          if (isObject(name)) for (key in name) setAttribute(this, key, name[key])
          else setAttribute(this, name, funcArg(this, value, idx, this.getAttribute(name)))
        })
    },
    removeAttr: function(name){
      return this.each(function(){ this.nodeType === 1 && setAttribute(this, name) })
    },
    prop: function(name, value){
      return (value === undefined) ?
        (this[0] && this[0][name]) :
        this.each(function(idx){
          this[name] = funcArg(this, value, idx, this[name])
        })
    },
    data: function(name, value){
      var data = this.attr('data-' + dasherize(name), value)
      return data !== null ? deserializeValue(data) : undefined
    },
    val: function(value){
      return (value === undefined) ?
        (this[0] && (this[0].multiple ?
           $(this[0]).find('option').filter(function(o){ return this.selected }).pluck('value') :
           this[0].value)
        ) :
        this.each(function(idx){
          this.value = funcArg(this, value, idx, this.value)
        })
    },
    offset: function(coordinates){
      if (coordinates) return this.each(function(index){
        var $this = $(this),
            coords = funcArg(this, coordinates, index, $this.offset()),
            parentOffset = $this.offsetParent().offset(),
            props = {
              top:  coords.top  - parentOffset.top,
              left: coords.left - parentOffset.left
            }

        if ($this.css('position') == 'static') props['position'] = 'relative'
        $this.css(props)
      })
      if (this.length==0) return null
      var obj = this[0].getBoundingClientRect()
      return {
        left: obj.left + window.pageXOffset,
        top: obj.top + window.pageYOffset,
        width: Math.round(obj.width),
        height: Math.round(obj.height)
      }
    },
    css: function(property, value){
      if (arguments.length < 2 && typeof property == 'string')
        return this[0] && (this[0].style[camelize(property)] || getComputedStyle(this[0], '').getPropertyValue(property))

      var css = ''
      if (type(property) == 'string') {
        if (!value && value !== 0)
          this.each(function(){ this.style.removeProperty(dasherize(property)) })
        else
          css = dasherize(property) + ":" + maybeAddPx(property, value)
      } else {
        for (key in property)
          if (!property[key] && property[key] !== 0)
            this.each(function(){ this.style.removeProperty(dasherize(key)) })
          else
            css += dasherize(key) + ':' + maybeAddPx(key, property[key]) + ';'
      }

      return this.each(function(){ this.style.cssText += ';' + css })
    },
    index: function(element){
      return element ? this.indexOf($(element)[0]) : this.parent().children().indexOf(this[0])
    },
    hasClass: function(name){
      return emptyArray.some.call(this, function(el){
        return this.test(className(el))
      }, classRE(name))
    },
    addClass: function(name){
      return this.each(function(idx){
        classList = []
        var cls = className(this), newName = funcArg(this, name, idx, cls)
        newName.split(/\s+/g).forEach(function(klass){
          if (!$(this).hasClass(klass)) classList.push(klass)
        }, this)
        classList.length && className(this, cls + (cls ? " " : "") + classList.join(" "))
      })
    },
    removeClass: function(name){
      return this.each(function(idx){
        if (name === undefined) return className(this, '')
        classList = className(this)
        funcArg(this, name, idx, classList).split(/\s+/g).forEach(function(klass){
          classList = classList.replace(classRE(klass), " ")
        })
        className(this, classList.trim())
      })
    },
    toggleClass: function(name, when){
      return this.each(function(idx){
        var $this = $(this), names = funcArg(this, name, idx, className(this))
        names.split(/\s+/g).forEach(function(klass){
          (when === undefined ? !$this.hasClass(klass) : when) ?
            $this.addClass(klass) : $this.removeClass(klass)
        })
      })
    },
    scrollTop: function(){
      if (!this.length) return
      return ('scrollTop' in this[0]) ? this[0].scrollTop : this[0].scrollY
    },
    position: function() {
      if (!this.length) return

      var elem = this[0],
        // Get *real* offsetParent
        offsetParent = this.offsetParent(),
        // Get correct offsets
        offset       = this.offset(),
        parentOffset = rootNodeRE.test(offsetParent[0].nodeName) ? { top: 0, left: 0 } : offsetParent.offset()

      // Subtract element margins
      // note: when an element has margin: auto the offsetLeft and marginLeft
      // are the same in Safari causing offset.left to incorrectly be 0
      offset.top  -= parseFloat( $(elem).css('margin-top') ) || 0
      offset.left -= parseFloat( $(elem).css('margin-left') ) || 0

      // Add offsetParent borders
      parentOffset.top  += parseFloat( $(offsetParent[0]).css('border-top-width') ) || 0
      parentOffset.left += parseFloat( $(offsetParent[0]).css('border-left-width') ) || 0

      // Subtract the two offsets
      return {
        top:  offset.top  - parentOffset.top,
        left: offset.left - parentOffset.left
      }
    },
    offsetParent: function() {
      return this.map(function(){
        var parent = this.offsetParent || document.body
        while (parent && !rootNodeRE.test(parent.nodeName) && $(parent).css("position") == "static")
          parent = parent.offsetParent
        return parent
      })
    }
  }

  // for now
  $.fn.detach = $.fn.remove

  // Generate the `width` and `height` functions
  ;['width', 'height'].forEach(function(dimension){
    $.fn[dimension] = function(value){
      var offset, el = this[0],
        Dimension = dimension.replace(/./, function(m){ return m[0].toUpperCase() })
      if (value === undefined) return isWindow(el) ? el['inner' + Dimension] :
        isDocument(el) ? el.documentElement['offset' + Dimension] :
        (offset = this.offset()) && offset[dimension]
      else return this.each(function(idx){
        el = $(this)
        el.css(dimension, funcArg(this, value, idx, el[dimension]()))
      })
    }
  })

  function traverseNode(node, fun) {
    fun(node)
    for (var key in node.childNodes) traverseNode(node.childNodes[key], fun)
  }

  // Generate the `after`, `prepend`, `before`, `append`,
  // `insertAfter`, `insertBefore`, `appendTo`, and `prependTo` methods.
  adjacencyOperators.forEach(function(operator, operatorIndex) {
    var inside = operatorIndex % 2 //=> prepend, append

    $.fn[operator] = function(){
      // arguments can be nodes, arrays of nodes, Zepto objects and HTML strings
      var argType, nodes = $.map(arguments, function(arg) {
            argType = type(arg)
            return argType == "object" || argType == "array" || arg == null ?
              arg : zepto.fragment(arg)
          }),
          parent, copyByClone = this.length > 1
      if (nodes.length < 1) return this

      return this.each(function(_, target){
        parent = inside ? target : target.parentNode

        // convert all methods to a "before" operation
        target = operatorIndex == 0 ? target.nextSibling :
                 operatorIndex == 1 ? target.firstChild :
                 operatorIndex == 2 ? target :
                 null

        nodes.forEach(function(node){
          if (copyByClone) node = node.cloneNode(true)
          else if (!parent) return $(node).remove()

          traverseNode(parent.insertBefore(node, target), function(el){
            if (el.nodeName != null && el.nodeName.toUpperCase() === 'SCRIPT' &&
               (!el.type || el.type === 'text/javascript') && !el.src)
              window['eval'].call(window, el.innerHTML)
          })
        })
      })
    }

    // after    => insertAfter
    // prepend  => prependTo
    // before   => insertBefore
    // append   => appendTo
    $.fn[inside ? operator+'To' : 'insert'+(operatorIndex ? 'Before' : 'After')] = function(html){
      $(html)[operator](this)
      return this
    }
  })

  zepto.Z.prototype = $.fn

  // Export internal API functions in the `$.zepto` namespace
  zepto.uniq = uniq
  zepto.deserializeValue = deserializeValue
  $.zepto = zepto

  return $
})()

// @@ original loader
// window.Zepto = Zepto
// '$' in window || (window.$ = Zepto)
// @@ modified by jiyinyiyong
module.exports.$ = Zepto;
module.exports.Zepto = Zepto;
// @@ modifications end


;(function($){
  function detect(ua){
    var os = this.os = {}, browser = this.browser = {},
      webkit = ua.match(/WebKit\/([\d.]+)/),
      android = ua.match(/(Android)\s+([\d.]+)/),
      ipad = ua.match(/(iPad).*OS\s([\d_]+)/),
      iphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/),
      webos = ua.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),
      touchpad = webos && ua.match(/TouchPad/),
      kindle = ua.match(/Kindle\/([\d.]+)/),
      silk = ua.match(/Silk\/([\d._]+)/),
      blackberry = ua.match(/(BlackBerry).*Version\/([\d.]+)/),
      bb10 = ua.match(/(BB10).*Version\/([\d.]+)/),
      rimtabletos = ua.match(/(RIM\sTablet\sOS)\s([\d.]+)/),
      playbook = ua.match(/PlayBook/),
      chrome = ua.match(/Chrome\/([\d.]+)/) || ua.match(/CriOS\/([\d.]+)/),
      firefox = ua.match(/Firefox\/([\d.]+)/)

    // Todo: clean this up with a better OS/browser seperation:
    // - discern (more) between multiple browsers on android
    // - decide if kindle fire in silk mode is android or not
    // - Firefox on Android doesn't specify the Android version
    // - possibly devide in os, device and browser hashes

    if (browser.webkit = !!webkit) browser.version = webkit[1]

    if (android) os.android = true, os.version = android[2]
    if (iphone) os.ios = os.iphone = true, os.version = iphone[2].replace(/_/g, '.')
    if (ipad) os.ios = os.ipad = true, os.version = ipad[2].replace(/_/g, '.')
    if (webos) os.webos = true, os.version = webos[2]
    if (touchpad) os.touchpad = true
    if (blackberry) os.blackberry = true, os.version = blackberry[2]
    if (bb10) os.bb10 = true, os.version = bb10[2]
    if (rimtabletos) os.rimtabletos = true, os.version = rimtabletos[2]
    if (playbook) browser.playbook = true
    if (kindle) os.kindle = true, os.version = kindle[1]
    if (silk) browser.silk = true, browser.version = silk[1]
    if (!silk && os.android && ua.match(/Kindle Fire/)) browser.silk = true
    if (chrome) browser.chrome = true, browser.version = chrome[1]
    if (firefox) browser.firefox = true, browser.version = firefox[1]

    os.tablet = !!(ipad || playbook || (android && !ua.match(/Mobile/)) || (firefox && ua.match(/Tablet/)))
    os.phone  = !!(!os.tablet && (android || iphone || webos || blackberry || bb10 ||
      (chrome && ua.match(/Android/)) || (chrome && ua.match(/CriOS\/([\d.]+)/)) || (firefox && ua.match(/Mobile/))))
  }

  detect.call($, navigator.userAgent)
  // make available to unit tests
  $.__detect = detect

})(Zepto)





;(function($){
  var $$ = $.zepto.qsa, handlers = {}, _zid = 1, specialEvents={},
      hover = { mouseenter: 'mouseover', mouseleave: 'mouseout' }

  specialEvents.click = specialEvents.mousedown = specialEvents.mouseup = specialEvents.mousemove = 'MouseEvents'

  function zid(element) {
    return element._zid || (element._zid = _zid++)
  }
  function findHandlers(element, event, fn, selector) {
    event = parse(event)
    if (event.ns) var matcher = matcherFor(event.ns)
    return (handlers[zid(element)] || []).filter(function(handler) {
      return handler
        && (!event.e  || handler.e == event.e)
        && (!event.ns || matcher.test(handler.ns))
        && (!fn       || zid(handler.fn) === zid(fn))
        && (!selector || handler.sel == selector)
    })
  }
  function parse(event) {
    var parts = ('' + event).split('.')
    return {e: parts[0], ns: parts.slice(1).sort().join(' ')}
  }
  function matcherFor(ns) {
    return new RegExp('(?:^| )' + ns.replace(' ', ' .* ?') + '(?: |$)')
  }

  function eachEvent(events, fn, iterator){
    if ($.type(events) != "string") $.each(events, iterator)
    else events.split(/\s/).forEach(function(type){ iterator(type, fn) })
  }

  function eventCapture(handler, captureSetting) {
    return handler.del &&
      (handler.e == 'focus' || handler.e == 'blur') ||
      !!captureSetting
  }

  function realEvent(type) {
    return hover[type] || type
  }

  function add(element, events, fn, selector, getDelegate, capture){
    var id = zid(element), set = (handlers[id] || (handlers[id] = []))
    eachEvent(events, fn, function(event, fn){
      var handler   = parse(event)
      handler.fn    = fn
      handler.sel   = selector
      // emulate mouseenter, mouseleave
      if (handler.e in hover) fn = function(e){
        var related = e.relatedTarget
        if (!related || (related !== this && !$.contains(this, related)))
          return handler.fn.apply(this, arguments)
      }
      handler.del   = getDelegate && getDelegate(fn, event)
      var callback  = handler.del || fn
      handler.proxy = function (e) {
        var result = callback.apply(element, [e].concat(e.data))
        if (result === false) e.preventDefault(), e.stopPropagation()
        return result
      }
      handler.i = set.length
      set.push(handler)
      element.addEventListener(realEvent(handler.e), handler.proxy, eventCapture(handler, capture))
    })
  }
  function remove(element, events, fn, selector, capture){
    var id = zid(element)
    eachEvent(events || '', fn, function(event, fn){
      findHandlers(element, event, fn, selector).forEach(function(handler){
        delete handlers[id][handler.i]
        element.removeEventListener(realEvent(handler.e), handler.proxy, eventCapture(handler, capture))
      })
    })
  }

  $.event = { add: add, remove: remove }

  $.proxy = function(fn, context) {
    if ($.isFunction(fn)) {
      var proxyFn = function(){ return fn.apply(context, arguments) }
      proxyFn._zid = zid(fn)
      return proxyFn
    } else if (typeof context == 'string') {
      return $.proxy(fn[context], fn)
    } else {
      throw new TypeError("expected function")
    }
  }

  $.fn.bind = function(event, callback){
    return this.each(function(){
      add(this, event, callback)
    })
  }
  $.fn.unbind = function(event, callback){
    return this.each(function(){
      remove(this, event, callback)
    })
  }
  $.fn.one = function(event, callback){
    return this.each(function(i, element){
      add(this, event, callback, null, function(fn, type){
        return function(){
          var result = fn.apply(element, arguments)
          remove(element, type, fn)
          return result
        }
      })
    })
  }

  var returnTrue = function(){return true},
      returnFalse = function(){return false},
      ignoreProperties = /^([A-Z]|layer[XY]$)/,
      eventMethods = {
        preventDefault: 'isDefaultPrevented',
        stopImmediatePropagation: 'isImmediatePropagationStopped',
        stopPropagation: 'isPropagationStopped'
      }
  function createProxy(event) {
    var key, proxy = { originalEvent: event }
    for (key in event)
      if (!ignoreProperties.test(key) && event[key] !== undefined) proxy[key] = event[key]

    $.each(eventMethods, function(name, predicate) {
      proxy[name] = function(){
        this[predicate] = returnTrue
        return event[name].apply(event, arguments)
      }
      proxy[predicate] = returnFalse
    })
    return proxy
  }

  // emulates the 'defaultPrevented' property for browsers that have none
  function fix(event) {
    if (!('defaultPrevented' in event)) {
      event.defaultPrevented = false
      var prevent = event.preventDefault
      event.preventDefault = function() {
        this.defaultPrevented = true
        prevent.call(this)
      }
    }
  }

  $.fn.delegate = function(selector, event, callback){
    return this.each(function(i, element){
      add(element, event, callback, selector, function(fn){
        return function(e){
          var evt, match = $(e.target).closest(selector, element).get(0)
          if (match) {
            evt = $.extend(createProxy(e), {currentTarget: match, liveFired: element})
            return fn.apply(match, [evt].concat([].slice.call(arguments, 1)))
          }
        }
      })
    })
  }
  $.fn.undelegate = function(selector, event, callback){
    return this.each(function(){
      remove(this, event, callback, selector)
    })
  }

  $.fn.live = function(event, callback){
    $(document.body).delegate(this.selector, event, callback)
    return this
  }
  $.fn.die = function(event, callback){
    $(document.body).undelegate(this.selector, event, callback)
    return this
  }

  $.fn.on = function(event, selector, callback){
    return !selector || $.isFunction(selector) ?
      this.bind(event, selector || callback) : this.delegate(selector, event, callback)
  }
  $.fn.off = function(event, selector, callback){
    return !selector || $.isFunction(selector) ?
      this.unbind(event, selector || callback) : this.undelegate(selector, event, callback)
  }

  $.fn.trigger = function(event, data){
    if (typeof event == 'string' || $.isPlainObject(event)) event = $.Event(event)
    fix(event)
    event.data = data
    return this.each(function(){
      // items in the collection might not be DOM elements
      // (todo: possibly support events on plain old objects)
      if('dispatchEvent' in this) this.dispatchEvent(event)
    })
  }

  // triggers event handlers on current element just as if an event occurred,
  // doesn't trigger an actual event, doesn't bubble
  $.fn.triggerHandler = function(event, data){
    var e, result
    this.each(function(i, element){
      e = createProxy(typeof event == 'string' ? $.Event(event) : event)
      e.data = data
      e.target = element
      $.each(findHandlers(element, event.type || event), function(i, handler){
        result = handler.proxy(e)
        if (e.isImmediatePropagationStopped()) return false
      })
    })
    return result
  }

  // shortcut methods for `.bind(event, fn)` for each event type
  ;('focusin focusout load resize scroll unload click dblclick '+
  'mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave '+
  'change select keydown keypress keyup error').split(' ').forEach(function(event) {
    $.fn[event] = function(callback) {
      return callback ?
        this.bind(event, callback) :
        this.trigger(event)
    }
  })

  ;['focus', 'blur'].forEach(function(name) {
    $.fn[name] = function(callback) {
      if (callback) this.bind(name, callback)
      else this.each(function(){
        try { this[name]() }
        catch(e) {}
      })
      return this
    }
  })

  $.Event = function(type, props) {
    if (typeof type != 'string') props = type, type = props.type
    var event = document.createEvent(specialEvents[type] || 'Events'), bubbles = true
    if (props) for (var name in props) (name == 'bubbles') ? (bubbles = !!props[name]) : (event[name] = props[name])
    event.initEvent(type, bubbles, true, null, null, null, null, null, null, null, null, null, null, null, null)
    event.isDefaultPrevented = function(){ return this.defaultPrevented }
    return event
  }

})(Zepto)





;(function($){
  var jsonpID = 0,
      document = window.document,
      key,
      name,
      rscript = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
      scriptTypeRE = /^(?:text|application)\/javascript/i,
      xmlTypeRE = /^(?:text|application)\/xml/i,
      jsonType = 'application/json',
      htmlType = 'text/html',
      blankRE = /^\s*$/

  // trigger a custom event and return false if it was cancelled
  function triggerAndReturn(context, eventName, data) {
    var event = $.Event(eventName)
    $(context).trigger(event, data)
    return !event.defaultPrevented
  }

  // trigger an Ajax "global" event
  function triggerGlobal(settings, context, eventName, data) {
    if (settings.global) return triggerAndReturn(context || document, eventName, data)
  }

  // Number of active Ajax requests
  $.active = 0

  function ajaxStart(settings) {
    if (settings.global && $.active++ === 0) triggerGlobal(settings, null, 'ajaxStart')
  }
  function ajaxStop(settings) {
    if (settings.global && !(--$.active)) triggerGlobal(settings, null, 'ajaxStop')
  }

  // triggers an extra global event "ajaxBeforeSend" that's like "ajaxSend" but cancelable
  function ajaxBeforeSend(xhr, settings) {
    var context = settings.context
    if (settings.beforeSend.call(context, xhr, settings) === false ||
        triggerGlobal(settings, context, 'ajaxBeforeSend', [xhr, settings]) === false)
      return false

    triggerGlobal(settings, context, 'ajaxSend', [xhr, settings])
  }
  function ajaxSuccess(data, xhr, settings) {
    var context = settings.context, status = 'success'
    settings.success.call(context, data, status, xhr)
    triggerGlobal(settings, context, 'ajaxSuccess', [xhr, settings, data])
    ajaxComplete(status, xhr, settings)
  }
  // type: "timeout", "error", "abort", "parsererror"
  function ajaxError(error, type, xhr, settings) {
    var context = settings.context
    settings.error.call(context, xhr, type, error)
    triggerGlobal(settings, context, 'ajaxError', [xhr, settings, error])
    ajaxComplete(type, xhr, settings)
  }
  // status: "success", "notmodified", "error", "timeout", "abort", "parsererror"
  function ajaxComplete(status, xhr, settings) {
    var context = settings.context
    settings.complete.call(context, xhr, status)
    triggerGlobal(settings, context, 'ajaxComplete', [xhr, settings])
    ajaxStop(settings)
  }

  // Empty function, used as default callback
  function empty() {}

  $.ajaxJSONP = function(options){
    if (!('type' in options)) return $.ajax(options)

    var callbackName = 'jsonp' + (++jsonpID),
      script = document.createElement('script'),
      cleanup = function() {
        clearTimeout(abortTimeout)
        $(script).remove()
        delete window[callbackName]
      },
      abort = function(type){
        cleanup()
        // In case of manual abort or timeout, keep an empty function as callback
        // so that the SCRIPT tag that eventually loads won't result in an error.
        if (!type || type == 'timeout') window[callbackName] = empty
        ajaxError(null, type || 'abort', xhr, options)
      },
      xhr = { abort: abort }, abortTimeout

    if (ajaxBeforeSend(xhr, options) === false) {
      abort('abort')
      return false
    }

    window[callbackName] = function(data){
      cleanup()
      ajaxSuccess(data, xhr, options)
    }

    script.onerror = function() { abort('error') }

    script.src = options.url.replace(/=\?/, '=' + callbackName)
    $('head').append(script)

    if (options.timeout > 0) abortTimeout = setTimeout(function(){
      abort('timeout')
    }, options.timeout)

    return xhr
  }

  $.ajaxSettings = {
    // Default type of request
    type: 'GET',
    // Callback that is executed before request
    beforeSend: empty,
    // Callback that is executed if the request succeeds
    success: empty,
    // Callback that is executed the the server drops error
    error: empty,
    // Callback that is executed on request complete (both: error and success)
    complete: empty,
    // The context for the callbacks
    context: null,
    // Whether to trigger "global" Ajax events
    global: true,
    // Transport
    xhr: function () {
      return new window.XMLHttpRequest()
    },
    // MIME types mapping
    accepts: {
      script: 'text/javascript, application/javascript',
      json:   jsonType,
      xml:    'application/xml, text/xml',
      html:   htmlType,
      text:   'text/plain'
    },
    // Whether the request is to another domain
    crossDomain: false,
    // Default timeout
    timeout: 0,
    // Whether data should be serialized to string
    processData: true,
    // Whether the browser should be allowed to cache GET responses
    cache: true,
  }

  function mimeToDataType(mime) {
    if (mime) mime = mime.split(';', 2)[0]
    return mime && ( mime == htmlType ? 'html' :
      mime == jsonType ? 'json' :
      scriptTypeRE.test(mime) ? 'script' :
      xmlTypeRE.test(mime) && 'xml' ) || 'text'
  }

  function appendQuery(url, query) {
    return (url + '&' + query).replace(/[&?]{1,2}/, '?')
  }

  // serialize payload and append it to the URL for GET requests
  function serializeData(options) {
    if (options.processData && options.data && $.type(options.data) != "string")
      options.data = $.param(options.data, options.traditional)
    if (options.data && (!options.type || options.type.toUpperCase() == 'GET'))
      options.url = appendQuery(options.url, options.data)
  }

  $.ajax = function(options){
    var settings = $.extend({}, options || {})
    for (key in $.ajaxSettings) if (settings[key] === undefined) settings[key] = $.ajaxSettings[key]

    ajaxStart(settings)

    if (!settings.crossDomain) settings.crossDomain = /^([\w-]+:)?\/\/([^\/]+)/.test(settings.url) &&
      RegExp.$2 != window.location.host

    if (!settings.url) settings.url = window.location.toString()
    serializeData(settings)
    if (settings.cache === false) settings.url = appendQuery(settings.url, '_=' + Date.now())

    var dataType = settings.dataType, hasPlaceholder = /=\?/.test(settings.url)
    if (dataType == 'jsonp' || hasPlaceholder) {
      if (!hasPlaceholder) settings.url = appendQuery(settings.url, 'callback=?')
      return $.ajaxJSONP(settings)
    }

    var mime = settings.accepts[dataType],
        baseHeaders = { },
        protocol = /^([\w-]+:)\/\//.test(settings.url) ? RegExp.$1 : window.location.protocol,
        xhr = settings.xhr(), abortTimeout

    if (!settings.crossDomain) baseHeaders['X-Requested-With'] = 'XMLHttpRequest'
    if (mime) {
      baseHeaders['Accept'] = mime
      if (mime.indexOf(',') > -1) mime = mime.split(',', 2)[0]
      xhr.overrideMimeType && xhr.overrideMimeType(mime)
    }
    if (settings.contentType || (settings.contentType !== false && settings.data && settings.type.toUpperCase() != 'GET'))
      baseHeaders['Content-Type'] = (settings.contentType || 'application/x-www-form-urlencoded')
    settings.headers = $.extend(baseHeaders, settings.headers || {})

    xhr.onreadystatechange = function(){
      if (xhr.readyState == 4) {
        xhr.onreadystatechange = empty;
        clearTimeout(abortTimeout)
        var result, error = false
        if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304 || (xhr.status == 0 && protocol == 'file:')) {
          dataType = dataType || mimeToDataType(xhr.getResponseHeader('content-type'))
          result = xhr.responseText

          try {
            // http://perfectionkills.com/global-eval-what-are-the-options/
            if (dataType == 'script')    (1,eval)(result)
            else if (dataType == 'xml')  result = xhr.responseXML
            else if (dataType == 'json') result = blankRE.test(result) ? null : $.parseJSON(result)
          } catch (e) { error = e }

          if (error) ajaxError(error, 'parsererror', xhr, settings)
          else ajaxSuccess(result, xhr, settings)
        } else {
          ajaxError(null, xhr.status ? 'error' : 'abort', xhr, settings)
        }
      }
    }

    var async = 'async' in settings ? settings.async : true
    xhr.open(settings.type, settings.url, async)

    for (name in settings.headers) xhr.setRequestHeader(name, settings.headers[name])

    if (ajaxBeforeSend(xhr, settings) === false) {
      xhr.abort()
      return false
    }

    if (settings.timeout > 0) abortTimeout = setTimeout(function(){
        xhr.onreadystatechange = empty
        xhr.abort()
        ajaxError(null, 'timeout', xhr, settings)
      }, settings.timeout)

    // avoid sending empty string (#319)
    xhr.send(settings.data ? settings.data : null)
    return xhr
  }

  // handle optional data/success arguments
  function parseArguments(url, data, success, dataType) {
    var hasData = !$.isFunction(data)
    return {
      url:      url,
      data:     hasData  ? data : undefined,
      success:  !hasData ? data : $.isFunction(success) ? success : undefined,
      dataType: hasData  ? dataType || success : success
    }
  }

  $.get = function(url, data, success, dataType){
    return $.ajax(parseArguments.apply(null, arguments))
  }

  $.post = function(url, data, success, dataType){
    var options = parseArguments.apply(null, arguments)
    options.type = 'POST'
    return $.ajax(options)
  }

  $.getJSON = function(url, data, success){
    var options = parseArguments.apply(null, arguments)
    options.dataType = 'json'
    return $.ajax(options)
  }

  $.fn.load = function(url, data, success){
    if (!this.length) return this
    var self = this, parts = url.split(/\s/), selector,
        options = parseArguments(url, data, success),
        callback = options.success
    if (parts.length > 1) options.url = parts[0], selector = parts[1]
    options.success = function(response){
      self.html(selector ?
        $('<div>').html(response.replace(rscript, "")).find(selector)
        : response)
      callback && callback.apply(self, arguments)
    }
    $.ajax(options)
    return this
  }

  var escape = encodeURIComponent

  function serialize(params, obj, traditional, scope){
    var type, array = $.isArray(obj)
    $.each(obj, function(key, value) {
      type = $.type(value)
      if (scope) key = traditional ? scope : scope + '[' + (array ? '' : key) + ']'
      // handle data in serializeArray() format
      if (!scope && array) params.add(value.name, value.value)
      // recurse into nested objects
      else if (type == "array" || (!traditional && type == "object"))
        serialize(params, value, traditional, key)
      else params.add(key, value)
    })
  }

  $.param = function(obj, traditional){
    var params = []
    params.add = function(k, v){ this.push(escape(k) + '=' + escape(v)) }
    serialize(params, obj, traditional)
    return params.join('&').replace(/%20/g, '+')
  }
})(Zepto)





;(function ($) {
  $.fn.serializeArray = function () {
    var result = [], el
    $( Array.prototype.slice.call(this.get(0).elements) ).each(function () {
      el = $(this)
      var type = el.attr('type')
      if (this.nodeName.toLowerCase() != 'fieldset' &&
        !this.disabled && type != 'submit' && type != 'reset' && type != 'button' &&
        ((type != 'radio' && type != 'checkbox') || this.checked))
        result.push({
          name: el.attr('name'),
          value: el.val()
        })
    })
    return result
  }

  $.fn.serialize = function () {
    var result = []
    this.serializeArray().forEach(function (elm) {
      result.push( encodeURIComponent(elm.name) + '=' + encodeURIComponent(elm.value) )
    })
    return result.join('&')
  }

  $.fn.submit = function (callback) {
    if (callback) this.bind('submit', callback)
    else if (this.length) {
      var event = $.Event('submit')
      this.eq(0).trigger(event)
      if (!event.defaultPrevented) this.get(0).submit()
    }
    return this
  }

})(Zepto)





;(function($, undefined){
  var prefix = '', eventPrefix, endEventName, endAnimationName,
    vendors = { Webkit: 'webkit', Moz: '', O: 'o', ms: 'MS' },
    document = window.document, testEl = document.createElement('div'),
    supportedTransforms = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,
    transform,
    transitionProperty, transitionDuration, transitionTiming,
    animationName, animationDuration, animationTiming,
    cssReset = {}

  function dasherize(str) { return downcase(str.replace(/([a-z])([A-Z])/, '$1-$2')) }
  function downcase(str) { return str.toLowerCase() }
  function normalizeEvent(name) { return eventPrefix ? eventPrefix + name : downcase(name) }

  $.each(vendors, function(vendor, event){
    if (testEl.style[vendor + 'TransitionProperty'] !== undefined) {
      prefix = '-' + downcase(vendor) + '-'
      eventPrefix = event
      return false
    }
  })

  transform = prefix + 'transform'
  cssReset[transitionProperty = prefix + 'transition-property'] =
  cssReset[transitionDuration = prefix + 'transition-duration'] =
  cssReset[transitionTiming   = prefix + 'transition-timing-function'] =
  cssReset[animationName      = prefix + 'animation-name'] =
  cssReset[animationDuration  = prefix + 'animation-duration'] =
  cssReset[animationTiming    = prefix + 'animation-timing-function'] = ''

  $.fx = {
    off: (eventPrefix === undefined && testEl.style.transitionProperty === undefined),
    speeds: { _default: 400, fast: 200, slow: 600 },
    cssPrefix: prefix,
    transitionEnd: normalizeEvent('TransitionEnd'),
    animationEnd: normalizeEvent('AnimationEnd')
  }

  $.fn.animate = function(properties, duration, ease, callback){
    if ($.isPlainObject(duration))
      ease = duration.easing, callback = duration.complete, duration = duration.duration
    if (duration) duration = (typeof duration == 'number' ? duration :
                    ($.fx.speeds[duration] || $.fx.speeds._default)) / 1000
    return this.anim(properties, duration, ease, callback)
  }

  $.fn.anim = function(properties, duration, ease, callback){
    var key, cssValues = {}, cssProperties, transforms = '',
        that = this, wrappedCallback, endEvent = $.fx.transitionEnd

    if (duration === undefined) duration = 0.4
    if ($.fx.off) duration = 0

    if (typeof properties == 'string') {
      // keyframe animation
      cssValues[animationName] = properties
      cssValues[animationDuration] = duration + 's'
      cssValues[animationTiming] = (ease || 'linear')
      endEvent = $.fx.animationEnd
    } else {
      cssProperties = []
      // CSS transitions
      for (key in properties)
        if (supportedTransforms.test(key)) transforms += key + '(' + properties[key] + ') '
        else cssValues[key] = properties[key], cssProperties.push(dasherize(key))

      if (transforms) cssValues[transform] = transforms, cssProperties.push(transform)
      if (duration > 0 && typeof properties === 'object') {
        cssValues[transitionProperty] = cssProperties.join(', ')
        cssValues[transitionDuration] = duration + 's'
        cssValues[transitionTiming] = (ease || 'linear')
      }
    }

    wrappedCallback = function(event){
      if (typeof event !== 'undefined') {
        if (event.target !== event.currentTarget) return // makes sure the event didn't bubble from "below"
        $(event.target).unbind(endEvent, wrappedCallback)
      }
      $(this).css(cssReset)
      callback && callback.call(this)
    }
    if (duration > 0) this.bind(endEvent, wrappedCallback)

    // trigger page reflow so new elements can animate
    this.size() && this.get(0).clientLeft

    this.css(cssValues)

    if (duration <= 0) setTimeout(function() {
      that.each(function(){ wrappedCallback.call(this) })
    }, 0)

    return this
  }

  testEl = null
})(Zepto)

},{}]},{},[1])
//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyIvVXNlcnMvY2hlbi9Db2RlL3N0cmVldC9jb2ZmZWUvbWFpbi5jb2ZmZWUiLCIvVXNlcnMvY2hlbi9Db2RlL3N0cmVldC9jb2ZmZWUvbWV0YS5jb2ZmZWUiLCIvVXNlcnMvY2hlbi9Db2RlL3N0cmVldC9ub2RlX21vZHVsZXMvbGlseXR1cmYvbGlseXR1cmYuanMiLCIvVXNlcnMvY2hlbi9Db2RlL3N0cmVldC9ub2RlX21vZHVsZXMvemVwdG8tYnJvd3NlcmlmeS96ZXB0by5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBR0EsSUFBQSxtQkFBQTs7QUFBQyxDQUFELEVBQVEsSUFBQSxRQUFBOztBQUNQLENBREQsRUFDUyxDQURULEdBQ1MsR0FBQTs7QUFDUixDQUZELEVBRU0sSUFBQSxXQUFBOztBQUVOLENBSkEsRUFJWSxDQUFBLEtBQVo7Q0FDTyxFQUFBLENBQUwsS0FBQTtDQUNFLE9BQUEsa0JBQUE7Q0FBQyxFQUFELENBQUMsT0FBRDtDQUFLLENBQUEsSUFBQTtDQUNGLENBQUQsQ0FBQSxDQUFDLEVBREg7Q0FDTyxDQUFBLEdBQUEsQ0FBQTtNQUFMOztBQUNFLENBQUE7R0FBQSxTQUFBLElBQUE7Q0FDRSxFQUFBLENBQUM7Q0FBSSxDQUFPLEtBQVAsR0FBQSxDQUFBO0NBQUEsQ0FBcUMsTUFBckMsRUFBb0IsS0FBQTtDQUN0QixDQUFELEVBQUMsSUFBRCxFQURGO0NBREY7O0NBREYsQ0FJQSxDQUFBLENBQUM7Q0FBSSxDQUFBLElBQUE7TUFBTDs7QUFDRSxDQUFBO1lBQUEsSUFBQTsrQkFBQTtDQUNFLEVBQUEsQ0FBQztDQUFJLENBQU8sS0FBUCxHQUFBLE9BQUE7Q0FBQSxDQUEyQyxNQUEzQyxFQUEwQixLQUFBO0NBQzVCLENBQUQsQ0FBQSxDQUFDLE1BREg7Q0FDTyxDQUFPLElBQVAsQ0FBQSxHQUFBO1VBQUw7O0FBQ0UsQ0FBQTtZQUFBLElBQUE7K0JBQUE7Q0FDRSxFQUFBLENBQUM7Q0FBSSxDQUFPLEtBQVAsT0FBQTtDQUFBLENBQTZCLEVBQTdCLE9BQWdCLEdBQUE7Q0FDbEIsQ0FBRCxDQUFBLENBQUMsVUFESDtDQUNPLENBQU8sSUFBUCxDQUFBLE9BQUE7Q0FDRixDQUFELEVBQUMsVUFESDtDQUNLLENBQU0sQ0FBTixDQUFBLFVBQUE7Q0FBQSxDQUF3QixJQUFSLEVBQWhCLE1BQWdCO0NBQ2hCLENBQUQsRUFBQyxVQURIO0NBSE47O0NBREY7Q0FGSjs7Q0FERjtDQU5KLEVBQUs7Q0FESzs7QUFpQlosQ0FyQkEsRUFxQmUsQ0FBZixFQUFBLEdBQWU7O0FBRWYsQ0F2QkEsRUF1QjJCLEVBQTNCLElBQTJCLFFBQTNCO0NBQ0UsS0FBQSxrQkFBQTtDQUFBLENBQUEsQ0FBZSxDQUFBLFFBQWYsR0FBZTtDQUFmLENBQ0EsQ0FBYyxFQURkLEtBQ0EsRUFBYyxPQUFBO0NBRGQsQ0FFQSxJQUFBLEVBQUEsRUFBQSxDQUFBLE1BQUE7Q0FDQSxFQUFBLEdBQUEsRUFBQSxDQUFBLENBQUEsQ0FBQSxNQUFBO0NBSnlCOztBQU0zQixDQTdCQSxJQTZCQSxZQUFBOzs7O0FDL0JBLENBQVEsRUFBUixJQUFPO0NBQ0wsQ0FBQSxJQUFBO0NBQ0UsQ0FDRSxFQURGLENBQUE7Q0FDRSxDQUFNLEVBQU4sRUFBQTtDQUFBLENBQ00sRUFBTixFQUFBLHFCQURBO0NBQUEsQ0FFTSxFQUFOLEVBQUEsS0FGQTtDQUFBLENBR1UsSUFBVixFQUFBLENBSEE7Q0FBQSxDQUlLLENBQUwsR0FBQSxZQUpBO01BREY7Q0FBQSxDQU9FLEVBREYsTUFBQTtDQUNFLENBQU0sRUFBTixFQUFBLE1BQUE7Q0FBQSxDQUNNLEVBQU4sRUFBQSxxQ0FEQTtDQUFBLENBRU0sRUFBTixFQUFBLFVBRkE7Q0FBQSxDQUdVLElBQVYsQ0FIQSxDQUdBO0NBSEEsQ0FJSyxDQUFMLEdBQUEsaUJBSkE7TUFQRjtDQUFBLENBYUUsRUFERjtDQUNFLENBQU0sRUFBTixFQUFBO0NBQUEsQ0FDTSxFQUFOLEVBQUEsVUFEQTtDQUFBLENBRU0sRUFBTixFQUFBLElBRkE7Q0FBQSxDQUdVLElBQVYsRUFBQSxTQUhBO0NBQUEsQ0FJSyxDQUFMLEdBQUEsWUFKQTtNQWJGO0NBQUEsQ0FtQkUsRUFERixRQUFBO0NBQ0UsQ0FBTSxFQUFOLEVBQUEsUUFBQTtDQUFBLENBQ00sRUFBTixFQUFBLFlBREE7Q0FBQSxDQUVNLEVBQU4sRUFBQSxZQUZBO0NBQUEsQ0FHVSxJQUFWLEVBQUEsU0FIQTtDQUFBLENBSUssQ0FBTCxHQUFBLG9CQUpBO01BbkJGO0NBQUEsQ0F5QkUsQ0FERixDQUFBO0NBQ0UsQ0FBTSxFQUFOLENBQUEsQ0FBQTtDQUFBLENBQ00sRUFBTixFQUFBLEVBREE7Q0FBQSxDQUVLLENBQUwsR0FBQSxVQUZBO01BekJGO0NBQUEsQ0E2QkUsRUFERixLQUFBO0NBQ0UsQ0FBTSxFQUFOLENBQUEsQ0FBQTtDQUFBLENBQ00sRUFBTixFQUFBLEtBREE7Q0FBQSxDQUVNLEVBQU4sRUFBQSxTQUZBO0NBQUEsQ0FHVSxJQUFWLEVBQUEsV0FIQTtDQUFBLENBSUssQ0FBTCxHQUFBLHFCQUpBO01BN0JGO0NBQUEsQ0FtQ0UsRUFERixFQUFBO0NBQ0UsQ0FBTSxFQUFOLEVBQUEsRUFBQTtDQUFBLENBQ00sRUFBTixFQUFBLGlCQURBO0NBQUEsQ0FFSyxDQUFMLEdBQUEsc0JBRkE7Q0FBQSxDQUdVLElBQVYsRUFBQSxTQUhBO01BbkNGO0NBQUEsQ0F3Q0UsRUFERixDQUFBO0NBQ0UsQ0FBTSxFQUFOLEVBQUEsSUFBQTtDQUFBLENBQ00sRUFBTixFQUFBLFVBREE7Q0FBQSxDQUVNLEVBQU4sRUFBQSxLQUZBO0NBQUEsQ0FHSyxDQUFMLEdBQUEsZUFIQTtNQXhDRjtDQUFBLENBNkNFLEVBREYsUUFBQTtDQUNFLENBQU0sRUFBTixFQUFBLFFBQUE7Q0FBQSxDQUNNLEVBQU4sRUFBQSxRQURBO0NBQUEsQ0FFSyxDQUFMLEdBQUEsb0JBRkE7TUE3Q0Y7Q0FBQSxDQWlERSxFQURGLElBQUE7Q0FDRSxDQUFNLEVBQU4sQ0FBQSxDQUFBO0NBQUEsQ0FDTSxFQUFOLEVBQUEsY0FEQTtDQUFBLENBRUssQ0FBTCxHQUFBLHFCQUZBO0NBQUEsQ0FHVSxJQUFWLEVBQUEsU0FIQTtNQWpERjtDQUFBLENBc0RFLEVBREYsQ0FBQTtDQUNFLENBQU0sRUFBTixFQUFBLFFBQUE7Q0FBQSxDQUNNLEVBQU4sRUFBQSxJQURBO0NBQUEsQ0FFSyxDQUFMLEdBQUEsWUFGQTtDQUFBLENBR1UsSUFBVixFQUFBLFNBSEE7TUF0REY7Q0FBQSxDQTJERSxFQURGLFNBQUE7Q0FDRSxDQUFNLEVBQU4sRUFBQSxNQUFBO0NBQUEsQ0FDTSxFQUFOLEVBQUEsT0FEQTtDQUFBLENBRUssQ0FBTCxHQUFBLGdDQUZBO01BM0RGO0NBQUEsQ0ErREUsRUFERjtDQUNFLENBQU0sRUFBTixFQUFBLEdBQUE7Q0FBQSxDQUNNLEVBQU4sRUFBQSxJQURBO0NBQUEsQ0FFSyxDQUFMLEdBQUEsNkJBRkE7TUEvREY7Q0FBQSxDQW1FRSxFQURGLEtBQUE7Q0FDRSxDQUFNLEVBQU4sRUFBQSxVQUFBO0NBQUEsQ0FDTSxFQUFOLEVBQUEsa0JBREE7Q0FBQSxDQUVNLEVBQU4sRUFBQSxTQUZBO0NBQUEsQ0FHSyxDQUFMLEdBQUEsb0JBSEE7TUFuRUY7Q0FBQSxDQXdFRSxFQURGLEtBQUE7Q0FDRSxDQUFNLEVBQU4sRUFBQSxDQUFBO0NBQUEsQ0FDTSxFQUFOLEVBQUEsaUNBREE7Q0FBQSxDQUVLLENBQUwsR0FBQSxpQkFGQTtNQXhFRjtDQUFBLENBNEVFLEVBREYsRUFBQTtDQUNFLENBQU0sRUFBTixFQUFBLFFBQUE7Q0FBQSxDQUNNLEVBQU4sRUFBQSxLQURBO0NBQUEsQ0FFTSxFQUFOLEVBQUEsTUFGQTtDQUFBLENBR0ssQ0FBTCxHQUFBLG1CQUhBO01BNUVGO0lBREY7Q0FBQSxDQWlGQSxTQUFBO0NBQ0UsQ0FDRSxFQURGLElBQUE7Q0FDRSxDQUFNLEVBQU4sRUFBQSxLQUFBO0NBQUEsQ0FDSyxDQUFMLEdBQUEseUJBREE7TUFERjtDQUFBLENBSUUsRUFERixFQUFBO0NBQ0UsQ0FBTSxFQUFOLEVBQUEsRUFBQTtDQUFBLENBQ0ssQ0FBTCxHQUFBLGVBREE7TUFKRjtDQUFBLENBT0UsRUFERixFQUFBO0NBQ0UsQ0FBTSxFQUFOLEVBQUEsR0FBQTtDQUFBLENBQ0ssQ0FBTCxHQUFBLGtCQURBO01BUEY7Q0FBQSxDQVVFLEVBREYsSUFBQTtDQUNFLENBQU0sRUFBTixFQUFBLE9BQUE7Q0FBQSxDQUNLLENBQUwsR0FBQSx5QkFEQTtNQVZGO0NBQUEsQ0FhRSxFQURGLEdBQUE7Q0FDRSxDQUFNLEVBQU4sRUFBQSxJQUFBO0NBQUEsQ0FDSyxDQUFMLEdBQUEsbUJBREE7TUFiRjtDQUFBLENBZ0JFLEVBREY7Q0FDRSxDQUFNLEVBQU4sRUFBQSxrQkFBQTtDQUFBLENBQ0ssQ0FBTCxHQUFBLDhCQURBO01BaEJGO0NBQUEsQ0FtQkUsRUFERixTQUFBO0NBQ0UsQ0FBTSxFQUFOLEVBQUEsU0FBQTtDQUFBLENBQ0ssQ0FBTCxHQUFBLDBCQURBO01BbkJGO0NBQUEsQ0FzQkUsRUFERixHQUFBO0NBQ0UsQ0FBTSxFQUFOLEVBQUEsR0FBQTtDQUFBLENBQ0ssQ0FBTCxHQUFBLG9CQURBO01BdEJGO0lBbEZGO0NBQUEsQ0EwR0EsSUFBQTtDQUNFLENBQ0UsRUFERixJQUFBO0NBQ0UsQ0FBTSxFQUFOLEVBQUEsSUFBQTtDQUFBLENBQ00sRUFBTixFQUFBLGlFQURBO0NBQUEsQ0FFTSxFQUFOLEVBQUEsUUFGQTtDQUFBLENBR0ssQ0FBTCxHQUFBLGdCQUhBO0NBQUEsQ0FJVSxJQUFWLEVBQUEsU0FKQTtNQURGO0NBQUEsQ0FPRSxFQURGLEVBQUE7Q0FDRSxDQUFNLEVBQU4sRUFBQSxFQUFBO0NBQUEsQ0FDTSxFQUFOLEVBQUEsMkJBREE7Q0FBQSxDQUVNLEVBQU4sRUFBQSxNQUZBO0NBQUEsQ0FHSyxDQUFMLEdBQUEsY0FIQTtDQUFBLENBSVUsSUFBVixFQUFBLFdBSkE7TUFQRjtDQUFBLENBYUUsRUFERixFQUFBO0NBQ0UsQ0FBTSxFQUFOLEVBQUEsRUFBQTtDQUFBLENBQ00sRUFBTixFQUFBLGlGQURBO0NBQUEsQ0FFTSxFQUFOLEVBQUEsTUFGQTtDQUFBLENBR0ssQ0FBTCxHQUFBLGNBSEE7Q0FBQSxDQUlVLElBQVYsRUFBQSxXQUpBO01BYkY7Q0FBQSxDQW1CRSxFQURGLElBQUE7Q0FDRSxDQUFNLEVBQU4sRUFBQSxJQUFBO0NBQUEsQ0FDSyxDQUFMLEdBQUEsZ0JBREE7TUFuQkY7Q0FBQSxDQXNCRSxDQURGLENBQUE7Q0FDRSxDQUFNLEVBQU4sQ0FBQSxDQUFBO0NBQUEsQ0FDTSxFQUFOLEVBQUEsc0NBREE7Q0FBQSxDQUVLLENBQUwsR0FBQSx1QkFGQTtDQUFBLENBR00sRUFBTixFQUFBLEdBSEE7TUF0QkY7Q0FBQSxDQTJCRSxFQURGLE1BQUE7Q0FDRSxDQUFNLEVBQU4sRUFBQSxNQUFBO0NBQUEsQ0FDTSxFQUFOLEVBQUEsd0JBREE7Q0FBQSxDQUVNLEVBQU4sRUFBQSxVQUZBO0NBQUEsQ0FHVSxJQUFWLEVBQUEsWUFIQTtDQUFBLENBSUssQ0FBTCxHQUFBLHNCQUpBO01BM0JGO0NBQUEsQ0FpQ0UsRUFERixVQUFBO0NBQ0UsQ0FBTSxFQUFOLEVBQUEsVUFBQTtDQUFBLENBQ00sRUFBTixFQUFBLG1EQURBO0NBQUEsQ0FFTSxFQUFOLEVBQUEsY0FGQTtDQUFBLENBR0ssQ0FBTCxHQUFBLDBCQUhBO0NBQUEsQ0FJVSxJQUFWLEVBQUEsV0FKQTtNQWpDRjtDQUFBLENBdUNFLEVBREYsSUFBQTtDQUNFLENBQU0sRUFBTixFQUFBLGFBQUE7Q0FBQSxDQUNNLEVBQU4sRUFBQSx5Q0FEQTtDQUFBLENBRUssQ0FBTCxHQUFBLDRCQUZBO0NBQUEsQ0FHTSxFQUFOLEVBQUEsUUFIQTtNQXZDRjtDQUFBLENBNENFLEVBREYsRUFBQTtDQUNFLENBQU0sRUFBTixFQUFBLEVBQUE7Q0FBQSxDQUNLLENBQUwsR0FBQSxrQkFEQTtNQTVDRjtDQUFBLENBK0NFLEVBREYsSUFBQTtDQUNFLENBQU0sRUFBTixFQUFBLEtBQUE7Q0FBQSxDQUNLLENBQUwsR0FBQSxhQURBO01BL0NGO0NBQUEsQ0FpREEsRUFBQTtDQUNFLENBQU0sRUFBTixFQUFBLFNBQUE7Q0FBQSxDQUNLLENBQUwsR0FBQSx3QkFEQTtNQWxERjtJQTNHRjtDQURGLENBQUE7Ozs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbIlxuIyBsb2FkIEhUTUxcblxue21hcH0gPSByZXF1aXJlICcuL21ldGEuY29mZmVlJ1xue2h0bWx9ID0gcmVxdWlyZSAnbGlseXR1cmYnXG57JH0gPSByZXF1aXJlICd6ZXB0by1icm93c2VyaWZ5J1xuXG5tYWluX3BhZ2UgPSAoZGF0YSkgLT5cbiAgaHRtbCAtPlxuICAgIEBkaXYgaWQ6ICdwYWdlJyxcbiAgICAgIEBkaXYgaWQ6ICduYXYnLFxuICAgICAgICBmb3IgY2F0ZWdvcnkgb2YgZGF0YVxuICAgICAgICAgIEBkaXYgY2xhc3M6ICdkaXJlY3Rpb24nLCAnZGF0YS1jYXRlZ29yeSc6IGNhdGVnb3J5LFxuICAgICAgICAgICAgQHRleHQgY2F0ZWdvcnlcbiAgICAgIEBkaXYgaWQ6ICdib2R5JyxcbiAgICAgICAgZm9yIGNhdGVnb3J5LCBsaXN0IG9mIGRhdGFcbiAgICAgICAgICBAZGl2IGNsYXNzOiAnY2F0ZWdvcnkgaG9sZGVyJywgJ2RhdGEtY2F0ZWdvcnknOiBjYXRlZ29yeSxcbiAgICAgICAgICAgIEBkaXYgY2xhc3M6ICdzaG93JyxcbiAgICAgICAgICAgICAgZm9yIG5hbWUsIHNpdGUgb2YgbGlzdFxuICAgICAgICAgICAgICAgIEBkaXYgY2xhc3M6ICdwbGFjZScsICdkYXRhLW5hbWUnOiBuYW1lLFxuICAgICAgICAgICAgICAgICAgQGRpdiBjbGFzczogJ25hbWUnLFxuICAgICAgICAgICAgICAgICAgICBAYSBocmVmOiBzaXRlLnVybCwgdGFyZ2V0OiAnX2JsYW5rJyxcbiAgICAgICAgICAgICAgICAgICAgICBAdGV4dCBzaXRlLm5hbWVcblxuJCgnYm9keScpLmh0bWwgbWFpbl9wYWdlIG1hcFxuXG4kKCcjbmF2IC5kaXJlY3Rpb24nKS5jbGljayAtPlxuICB0aGVfY2F0ZWdvcnkgPSAkKEApLmF0dHIoJ2RhdGEtY2F0ZWdvcnknKVxuICBxdWVyeV9vcGVuID0gXCJbZGF0YS1jYXRlZ29yeT1cXFwiI3t0aGVfY2F0ZWdvcnl9XFxcIl1cIlxuICAkKCcjYm9keSAuY2F0ZWdvcnknKS5maWx0ZXIocXVlcnlfb3BlbikucmVtb3ZlQ2xhc3MoJ2hpZGUnKS5hZGRDbGFzcyAnb3BlbidcbiAgJCgnI2JvZHkgLmNhdGVnb3J5Jykubm90KHF1ZXJ5X29wZW4pLnJlbW92ZUNsYXNzKCdvcGVuJykuYWRkQ2xhc3MgJ2hpZGUnXG5cbiQoJyNuYXYgLmRpcmVjdGlvbicpLmZpcnN0KCkuY2xpY2soKSIsIlxuZXhwb3J0cy5tYXAgPVxuICBjb2Rpbmc6XG4gICAgemhpaHU6XG4gICAgICBuYW1lOiAn55+l5LmOJ1xuICAgICAgZGVzYzogJ+S4gOS4quecn+WunueahOe9kee7nOmXruetlOekvuWMuu+8jOW4ruWKqeS9oOWvu+aJvuetlOahiO+8jOWIhuS6q+efpeivhuOAgidcbiAgICAgIGxvZ286ICd6aGlodS5wbmcnXG4gICAgICBiZ19jb2xvcjogJyMwMDc4ZDgnXG4gICAgICB1cmw6ICdodHRwOi8vemhpaHUuY29tJ1xuICAgIHJ1YnlfY2hpbmE6XG4gICAgICBuYW1lOiAnUnVieSBDaGluYSdcbiAgICAgIGRlc2M6ICfkuK3lm70gUnVieSDnpL7ljLrvvIznlLHkvJflpJrniLHlpb3ogIXlhbHlkIznu7TmiqTvvIzoh7Tlipvkuo7mnoTlu7rlrozlloTnmoQgUnVieSDkuK3mlofnpL7ljLrjgIInXG4gICAgICBsb2dvOiAncnVieS1jaGluYS5wbmcnXG4gICAgICBiZ19jb2xvcjogJ3doaXRlJ1xuICAgICAgdXJsOiAnaHR0cDovL3J1YnktY2hpbmEub3JnJ1xuICAgIHYyZXg6XG4gICAgICBuYW1lOiAnVjJFWCdcbiAgICAgIGRlc2M6ICd3YXkgdG8gZXhwbG9yZSdcbiAgICAgIGxvZ286ICd2MmV4LnBuZydcbiAgICAgIGJnX2NvbG9yOiAnaHNsKDAsIDAlLCA4MiUpJ1xuICAgICAgdXJsOiAnaHR0cDovL3YyZXguY29tLydcbiAgICBzZWdtZW50ZmF1bHQ6XG4gICAgICBuYW1lOiAnc2VnbWVudGZhdWx0J1xuICAgICAgZGVzYzogJ+S4gOS4quS4k+S4mumdouWQkeW8gOWPkeiAheeahOaKgOacr+mXruetlOekvuWMuidcbiAgICAgIGxvZ286ICdzZWdtZW50ZmF1bHQucG5nJ1xuICAgICAgYmdfY29sb3I6ICdoc2woMCwgMCUsIDk1JSknXG4gICAgICB1cmw6ICdodHRwOi8vc2VnbWVudGZhdWx0LmNvbS8nXG4gICAgZjJlOlxuICAgICAgbmFtZTogJ0YyRSdcbiAgICAgIGRlc2M6ICfliY3nq6/mioDmnK/npL7ljLonXG4gICAgICB1cmw6ICdodHRwOi8vZjJlLmltLydcbiAgICBhcHBsZXR1YW46XG4gICAgICBuYW1lOiAn6Iu55p6c5ZuiJ1xuICAgICAgZGVzYzogJ+mdoOiwseeahOiLueaenOi0reacuuekvuWMuidcbiAgICAgIGxvZ286ICdhcHBsZXR1YW4ucG5nJ1xuICAgICAgYmdfY29sb3I6ICdoc2woMjA1LCA2JSwgMzklKSdcbiAgICAgIHVybDogJ2h0dHA6Ly93d3cuYXBwbGV0dWFuLmNvbS8nXG4gICAgbGluZXdzOlxuICAgICAgbmFtZTogJ0xpbmV3cydcbiAgICAgIGRlc2M6ICdMaW51eC9PcGVuc291cmNlIG5ld3MnXG4gICAgICB1cmw6ICdodHRwOi8vbmV3cy53b3d1YnVudHUuY29tLydcbiAgICAgIGJnX2NvbG9yOiAnaHNsKDAsIDAlLCA5MSUpJ1xuICAgIGNub2RlOlxuICAgICAgbmFtZTogJ0NOb2RlLmpzJ1xuICAgICAgZGVzYzogJ05vZGUuanMg5byA5rqQ5oqA5pyv56S+5Yy6J1xuICAgICAgbG9nbzogJ2Nub2RlLnBuZydcbiAgICAgIHVybDogJ2h0dHA6Ly9jbm9kZWpzLm9yZy8nXG4gICAgcHl0aG9uX2NoaW5hOlxuICAgICAgbmFtZTogJ1B5dGhvbiBDaGluYSdcbiAgICAgIGRlc2M6ICdQeXRob24gQ2hpbmEnXG4gICAgICB1cmw6ICdodHRwOi8vcHl0aG9uLWNoaW5hLm9yZy8nXG4gICAgcWlhbmR1YW46XG4gICAgICBuYW1lOiAn5YmN56uv55WMJ1xuICAgICAgZGVzYzogJ+avj+aXpeWJjeerr+W8gOWPkeaWsOmXu++8jOi3n+i4quWJjeerr+W8gOWPkei2i+WKvy4nXG4gICAgICB1cmw6ICdodHRwOi8vcWlhbmR1YW4udXMvbGF0ZXN0J1xuICAgICAgYmdfY29sb3I6ICdoc2woMCwgMCUsIDkxJSknXG4gICAgaW5ld3M6XG4gICAgICBuYW1lOiAnTWFjL2lPUyBOZXdzJ1xuICAgICAgZGVzYzogJ2lOZXdzLmlvJ1xuICAgICAgdXJsOiAnaHR0cDovL2luZXdzLmlvLydcbiAgICAgIGJnX2NvbG9yOiAnaHNsKDAsIDAlLCA5MSUpJ1xuICAgIGhhc2tlbGxfZ3JvdXA6XG4gICAgICBuYW1lOiAnSGFza2VsbCDlsI/nu4QnXG4gICAgICBsb2dvOiAnaGFza2VsbC5qcGcnXG4gICAgICB1cmw6ICdodHRwOi8vd3d3LmRvdWJhbi5jb20vZ3JvdXAvSGFza2VsbC8nXG4gICAgbGlzcDpcbiAgICAgIG5hbWU6ICdMSVNQIOWwj+e7hCdcbiAgICAgIGxvZ286ICdsaXNwLmpwZydcbiAgICAgIHVybDogJ2h0dHA6Ly93d3cuZG91YmFuLmNvbS9ncm91cC9MaXNwLydcbiAgICBhbmd1bGFyanM6XG4gICAgICBuYW1lOiAnQW5ndWxhckpTIOS4reaWh+ekvuWMuidcbiAgICAgIGRlc2M6ICfkvb/nlKjotoXliqjmhJ9IVE1MICYgSlPlvIDlj5FXRULlupTnlKjvvIEnXG4gICAgICBsb2dvOiAnYW5ndWxhcmNuLnBuZydcbiAgICAgIHVybDogJ2h0dHA6Ly93d3cuYW5ndWxhcmpzLmNuLydcbiAgICBnZWVrX2NzZG46XG4gICAgICBuYW1lOiAn5p6B5a6i5aS05p2hICdcbiAgICAgIGRlc2M6ICdDU0RO5o6o5Ye655qE57K+5ZOB5YaF5a655Y+R5o6Y5bmz5Y+w77yM5Zyo6L+Z6YeM5Y+v5Lul5Y+R546w44CB5YiG5Lqr5YC85b6X5L2g5YWz5rOo55qE5p6B5a6i5paw6Ze744CCJ1xuICAgICAgdXJsOiAnaHR0cDovL2dlZWsuY3Nkbi5uZXQvJ1xuICAgIGdvbGFuZzpcbiAgICAgIG5hbWU6ICdTdHVkeSBHb2xhbmcnXG4gICAgICBkZXNjOiAnR28g6K+t6KiA5a2m5Lmg5Zut5ZywJ1xuICAgICAgbG9nbzogJ2dvbGFuZy5wbmcnXG4gICAgICB1cmw6ICdodHRwOi8vc3R1ZHlnb2xhbmcuY29tLydcbiAgcHJvZ3JhbW1pbmc6XG4gICAgY29kZXdhbGw6XG4gICAgICBuYW1lOiAnY29kZXJ3YWxsJ1xuICAgICAgdXJsOiAnaHR0cHM6Ly9jb2RlcndhbGwuY29tL3dlbGNvbWUnXG4gICAgZ2l0aHViOlxuICAgICAgbmFtZTogJ0dpdGh1YidcbiAgICAgIHVybDogJ2h0dHBzOi8vZ2l0aHViLmNvbS8nXG4gICAgZWNob2pzOlxuICAgICAgbmFtZTogJ0VjaG8gSlMnXG4gICAgICB1cmw6ICdodHRwOi8vd3d3LmVjaG9qcy5jb20vJ1xuICAgIGhhY2tuZXdzOlxuICAgICAgbmFtZTogJ0hhY2tlciBOZXdzJ1xuICAgICAgdXJsOiAnaHR0cHM6Ly9uZXdzLnljb21iaW5hdG9yLmNvbS8nXG4gICAgYml0Y2FzdDpcbiAgICAgIG5hbWU6ICdCaXQgQ2FzdCdcbiAgICAgIHVybDogJ2h0dHBzOi8vd3d3LmJpdGNhc3QuaW8vJ1xuICAgIHRkanM6XG4gICAgICBuYW1lOiAnVGVzdC1Ecml2ZW4gSmF2YVNjcmlwdCdcbiAgICAgIHVybDogJ2h0dHA6Ly93d3cubGV0c2NvZGVqYXZhc2NyaXB0LmNvbS8nXG4gICAgc3RhY2tleGNoYW5nZTpcbiAgICAgIG5hbWU6ICdTdGFja0V4Y2hhbmdlJ1xuICAgICAgdXJsOiAnaHR0cDovL3N0YWNrZXhjaGFuZ2UuY29tL3NpdGVzJ1xuICAgIG5ldHR1dHM6XG4gICAgICBuYW1lOiAnTmV0dHV0cydcbiAgICAgIHVybDogJ2h0dHA6Ly9uZXQudHV0c3BsdXMuY29tLydcbiAgZGVzaWduOlxuICAgIGRyaWJiYmxlOlxuICAgICAgbmFtZTogJ2RyaWJiYmxlJ1xuICAgICAgZGVzYzogJ0RyaWJiYmxlIGlzIGEgY29tbXVuaXR5IG9mIGRlc2lnbmVycyBhbnN3ZXJpbmcgdGhhdCBxdWVzdGlvbiBlYWNoIGRheSdcbiAgICAgIGxvZ286ICdkcmliYmJsZS5naWYnXG4gICAgICB1cmw6ICdodHRwOi8vZHJpYmJibGUuY29tLydcbiAgICAgIGJnX2NvbG9yOiAnaHNsKDAsIDAlLCA5NCUpJ1xuICAgIHplcnBseTpcbiAgICAgIG5hbWU6ICdaZXJwbHknXG4gICAgICBkZXNjOiAnWmVycGx5IGlzIGEgY29tbXVuaXR5IG9mIG1ha2VycydcbiAgICAgIGxvZ286ICd6ZXJwbHkuc3ZnJ1xuICAgICAgdXJsOiAnaHR0cDovL3plcnBseS5jb20vJ1xuICAgICAgYmdfY29sb3I6ICdoc2woODcsIDMzJSwgODIlKSdcbiAgICBmb3Jyc3Q6XG4gICAgICBuYW1lOiAnRm9ycnN0J1xuICAgICAgZGVzYzogJ0EgY29tbXVuaXR5IHdoZXJlIGRldmVsb3BlcnMgJiBkZXNpZ25lcnMgaW1wcm92ZSB0aGVpciBjcmFmdCB0aHJvdWdoIGRlc2lnbiBmZWVkYmFjay4nXG4gICAgICBsb2dvOiAnZm9ycnN0LnBuZydcbiAgICAgIHVybDogJ2h0dHA6Ly9mb3Jyc3QuY29tLydcbiAgICAgIGJnX2NvbG9yOiAnaHNsKDUyLCAyOSUsIDkwJSknXG4gICAgdHltcGFudXM6XG4gICAgICBuYW1lOiAndHltcGFudXMnXG4gICAgICB1cmw6ICdodHRwOi8vdHltcGFudXMubmV0LydcbiAgICB3ZGw6XG4gICAgICBuYW1lOiAnV0RMJ1xuICAgICAgZGVzYzogJ1dlYiBEZXNpZ24gQmxvZywgVHV0b3JpYWxzIGFuZCBJbnNwaXJhdGlvbidcbiAgICAgIHVybDogJ2h0dHA6Ly93ZWJkZXNpZ25sZWRnZXIuY29tLydcbiAgICAgIGxvZ286ICd3ZGwucG5nJ1xuICAgIGRldmlhbnRhcnQ6XG4gICAgICBuYW1lOiAnZGV2aWFudEFSVCdcbiAgICAgIGRlc2M6ICd3aGVyZSBBUlQgbWVldHMgYXBwbGljYXRpb24hJ1xuICAgICAgbG9nbzogJ2RldmlhbnRhcnQucG5nJ1xuICAgICAgYmdfY29sb3I6ICdoc2woMTQwLCAxMCUsIDM1JSknXG4gICAgICB1cmw6ICdodHRwOi8vd3d3LmRldmlhbnRhcnQuY29tLydcbiAgICB0aGViZXN0ZGVzaWduczpcbiAgICAgIG5hbWU6ICd0aGViZXN0ZGVzaWducydcbiAgICAgIGRlc2M6ICdUaGUgQmVzdCBEZXNpZ25zIC8gQmVzdCBXZWIgRGVzaWduIEF3YXJkcyAmIENTUyBHYWxsZXJ5J1xuICAgICAgbG9nbzogJ3RoZWJlc3RkZXNpZ25zLnBuZydcbiAgICAgIHVybDogJ2h0dHA6Ly93d3cudGhlYmVzdGRlc2lnbnMuY29tLydcbiAgICAgIGJnX2NvbG9yOiAnaHNsKDYwLCAyNyUsIDk0JSknXG4gICAgc21hc2hpbmc6XG4gICAgICBuYW1lOiAnU21hc2hpbmcgTWFnYXppbmUnXG4gICAgICBkZXNjOiAnRm9yIFByb2Zlc3Npb25hbCBXZWIgRGVzaWduZXJzIGFuZCBEZXZlbG9wZXJzJ1xuICAgICAgdXJsOiAnaHR0cDovL3d3dy5zbWFzaGluZ21hZ2F6aW5lLmNvbS8nXG4gICAgICBsb2dvOiAnc21hc2hpbmcucG5nJ1xuICAgIHVuaGVhcDpcbiAgICAgIG5hbWU6ICdVbmhlYXAnXG4gICAgICB1cmw6ICdodHRwOi8vd3d3LnVuaGVhcC5jb20vJ1xuICAgIHZpc3VhbGx5OlxuICAgICAgbmFtZTogJ3Zpc3VhbC5seSdcbiAgICAgIHVybDogJ2h0dHA6Ly92aXN1YWwubHkvJ1xuICAgIGRuOlxuICAgICAgbmFtZTogJ0Rlc2lnbmVyIE5ld3MnXG4gICAgICB1cmw6ICdodHRwczovL25ld3MubGF5ZXJ2YXVsdC5jb20vJ1xuIiwiLy8gR2VuZXJhdGVkIGJ5IENvZmZlZVNjcmlwdCAxLjYuM1xudmFyIGh0bWxfc2NvcGUsIGh0bWxfdG9vbHMsIHBhaXJfZWxlbXMsIHJlc29sdmUsIHNpbmdsZV9lbGVtcyxcbiAgX19zbGljZSA9IFtdLnNsaWNlO1xuXG5odG1sX3Njb3BlID0ge307XG5cbnBhaXJfZWxlbXMgPSBcImhlYWQgdGl0bGUgYm9keSBzY3JpcHQgIGRpdiBuYXYgaGVhZGVyIGZvb3RlciBzZWN0aW9uIGFydGljbGUgIHAgc3BhbiB0ZXh0YXJlYSBiciBwcmUgY29kZSBhIGFkZHJlc3MgYiBiYWNrcXVvdGUgIGJ1dHRvbiBmb250IGZyYW1lIGZvcm0gaHIgaSAgdWwgbGkgb2wgdGFibGUgdHIgdGQgdGggdGl0bGUgIGNhbnZhcyBhdWRpbyB2aWRlbyBzZWxlY3Qgc3R5bGVcIi5zcGxpdCgvXFxzKy8pO1xuXG5zaW5nbGVfZWxlbXMgPSBcImltZyBtZXRhIGlucHV0IGxpbmsgaWZyYW1lIGF1ZGlvIHZpZGVvXCIuc3BsaXQoL1xccysvKTtcblxuaHRtbF90b29scyA9IHtcbiAgYXR0cnM6IGZ1bmN0aW9uKG9iaikge1xuICAgIHZhciBhdHRycywga2V5LCB2YWx1ZTtcbiAgICBhdHRycyA9IFwiXCI7XG4gICAgZm9yIChrZXkgaW4gb2JqKSB7XG4gICAgICB2YWx1ZSA9IG9ialtrZXldO1xuICAgICAgYXR0cnMgKz0gXCIgXCIgKyBrZXkgKyBcIj0nXCIgKyB2YWx1ZSArIFwiJ1wiO1xuICAgIH1cbiAgICByZXR1cm4gYXR0cnM7XG4gIH0sXG4gIHRleHQ6IGZ1bmN0aW9uKHRleHQpIHtcbiAgICBpZiAodGV4dCAhPSBudWxsKSB7XG4gICAgICByZXR1cm4gdGV4dC5yZXBsYWNlKC8mL2csIFwiJmFtcDtcIikucmVwbGFjZSgvPC9nLCBcIiZsdDtcIikucmVwbGFjZSgvPi9nLCBcIiZndDtcIikucmVwbGFjZSgvXFxzL2csIFwiJm5ic3A7XCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICB9XG59O1xuXG5yZXNvbHZlID0gZnVuY3Rpb24obGlzdCkge1xuICB2YXIgZWxlbSwgb2JqO1xuICBvYmogPSB7fTtcbiAgZWxlbSA9IFtdO1xuICBsaXN0LmZvckVhY2goZnVuY3Rpb24oaXRlbSkge1xuICAgIHZhciBrZXksIHRoYXQsIHZhbHVlLCBfaSwgX2xlbiwgX3Jlc3VsdHMsIF9yZXN1bHRzMTtcbiAgICBpZiAoaXRlbSAhPSBudWxsKSB7XG4gICAgICBpZiAoaXRlbS5fX3Byb3RvX18gPT09IE9iamVjdC5wcm90b3R5cGUpIHtcbiAgICAgICAgX3Jlc3VsdHMgPSBbXTtcbiAgICAgICAgZm9yIChrZXkgaW4gaXRlbSkge1xuICAgICAgICAgIHZhbHVlID0gaXRlbVtrZXldO1xuICAgICAgICAgIF9yZXN1bHRzLnB1c2gob2JqW2tleV0gPSB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF9yZXN1bHRzO1xuICAgICAgfSBlbHNlIGlmIChpdGVtLl9fcHJvdG9fXyA9PT0gQXJyYXkucHJvdG90eXBlKSB7XG4gICAgICAgIF9yZXN1bHRzMSA9IFtdO1xuICAgICAgICBmb3IgKF9pID0gMCwgX2xlbiA9IGl0ZW0ubGVuZ3RoOyBfaSA8IF9sZW47IF9pKyspIHtcbiAgICAgICAgICB0aGF0ID0gaXRlbVtfaV07XG4gICAgICAgICAgX3Jlc3VsdHMxLnB1c2goZWxlbS5wdXNoKHRoYXQpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX3Jlc3VsdHMxO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGVsZW0ucHVzaChpdGVtKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuICByZXR1cm4gW29iaiwgZWxlbV07XG59O1xuXG5wYWlyX2VsZW1zLm1hcChmdW5jdGlvbih0YWcpIHtcbiAgcmV0dXJuIGh0bWxfc2NvcGVbdGFnXSA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBsaXN0LCBvYmosIF9yZWY7XG4gICAgbGlzdCA9IDEgPD0gYXJndW1lbnRzLmxlbmd0aCA/IF9fc2xpY2UuY2FsbChhcmd1bWVudHMsIDApIDogW107XG4gICAgX3JlZiA9IHJlc29sdmUobGlzdCksIG9iaiA9IF9yZWZbMF0sIGxpc3QgPSBfcmVmWzFdO1xuICAgIHJldHVybiBcIjxcIiArIHRhZyArIChodG1sX3Rvb2xzLmF0dHJzKG9iaikpICsgXCI+XCIgKyAobGlzdC5qb2luKFwiXCIpKSArIFwiPC9cIiArIHRhZyArIFwiPlwiO1xuICB9O1xufSk7XG5cbnNpbmdsZV9lbGVtcy5tYXAoZnVuY3Rpb24odGFnKSB7XG4gIHJldHVybiBodG1sX3Njb3BlW3RhZ10gPSBmdW5jdGlvbihvYmopIHtcbiAgICBpZiAob2JqID09IG51bGwpIHtcbiAgICAgIG9iaiA9IHt9O1xuICAgIH1cbiAgICByZXR1cm4gXCI8XCIgKyB0YWcgKyAoaHRtbF90b29scy5hdHRycyhvYmopKSArIFwiLz5cIjtcbiAgfTtcbn0pO1xuXG5odG1sX3Njb3BlLmh0bWwgPSBmdW5jdGlvbihzdHJpbmcpIHtcbiAgcmV0dXJuIHN0cmluZztcbn07XG5cbmh0bWxfc2NvcGUudGV4dCA9IGh0bWxfdG9vbHMudGV4dDtcblxuZXhwb3J0cy5odG1sID0gZnVuY3Rpb24oZ2VuZXJhdG9yKSB7XG4gIHJldHVybiBnZW5lcmF0b3IuY2FsbChodG1sX3Njb3BlKTtcbn07XG4iLCIvKiBaZXB0byB2MS4wIC0gcG9seWZpbGwgemVwdG8gZGV0ZWN0IGV2ZW50IGFqYXggZm9ybSBmeCAtIHplcHRvanMuY29tL2xpY2Vuc2UgKi9cblxuOyhmdW5jdGlvbih1bmRlZmluZWQpe1xuICBpZiAoU3RyaW5nLnByb3RvdHlwZS50cmltID09PSB1bmRlZmluZWQpIC8vIGZpeCBmb3IgaU9TIDMuMlxuICAgIFN0cmluZy5wcm90b3R5cGUudHJpbSA9IGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzLnJlcGxhY2UoL15cXHMrfFxccyskL2csICcnKSB9XG5cbiAgLy8gRm9yIGlPUyAzLnhcbiAgLy8gZnJvbSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9BcnJheS9yZWR1Y2VcbiAgaWYgKEFycmF5LnByb3RvdHlwZS5yZWR1Y2UgPT09IHVuZGVmaW5lZClcbiAgICBBcnJheS5wcm90b3R5cGUucmVkdWNlID0gZnVuY3Rpb24oZnVuKXtcbiAgICAgIGlmKHRoaXMgPT09IHZvaWQgMCB8fCB0aGlzID09PSBudWxsKSB0aHJvdyBuZXcgVHlwZUVycm9yKClcbiAgICAgIHZhciB0ID0gT2JqZWN0KHRoaXMpLCBsZW4gPSB0Lmxlbmd0aCA+Pj4gMCwgayA9IDAsIGFjY3VtdWxhdG9yXG4gICAgICBpZih0eXBlb2YgZnVuICE9ICdmdW5jdGlvbicpIHRocm93IG5ldyBUeXBlRXJyb3IoKVxuICAgICAgaWYobGVuID09IDAgJiYgYXJndW1lbnRzLmxlbmd0aCA9PSAxKSB0aHJvdyBuZXcgVHlwZUVycm9yKClcblxuICAgICAgaWYoYXJndW1lbnRzLmxlbmd0aCA+PSAyKVxuICAgICAgIGFjY3VtdWxhdG9yID0gYXJndW1lbnRzWzFdXG4gICAgICBlbHNlXG4gICAgICAgIGRve1xuICAgICAgICAgIGlmKGsgaW4gdCl7XG4gICAgICAgICAgICBhY2N1bXVsYXRvciA9IHRbaysrXVxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYoKytrID49IGxlbikgdGhyb3cgbmV3IFR5cGVFcnJvcigpXG4gICAgICAgIH0gd2hpbGUgKHRydWUpXG5cbiAgICAgIHdoaWxlIChrIDwgbGVuKXtcbiAgICAgICAgaWYoayBpbiB0KSBhY2N1bXVsYXRvciA9IGZ1bi5jYWxsKHVuZGVmaW5lZCwgYWNjdW11bGF0b3IsIHRba10sIGssIHQpXG4gICAgICAgIGsrK1xuICAgICAgfVxuICAgICAgcmV0dXJuIGFjY3VtdWxhdG9yXG4gICAgfVxuXG59KSgpXG5cblxuXG5cblxudmFyIFplcHRvID0gKGZ1bmN0aW9uKCkge1xuICB2YXIgdW5kZWZpbmVkLCBrZXksICQsIGNsYXNzTGlzdCwgZW1wdHlBcnJheSA9IFtdLCBzbGljZSA9IGVtcHR5QXJyYXkuc2xpY2UsIGZpbHRlciA9IGVtcHR5QXJyYXkuZmlsdGVyLFxuICAgIGRvY3VtZW50ID0gd2luZG93LmRvY3VtZW50LFxuICAgIGVsZW1lbnREaXNwbGF5ID0ge30sIGNsYXNzQ2FjaGUgPSB7fSxcbiAgICBnZXRDb21wdXRlZFN0eWxlID0gZG9jdW1lbnQuZGVmYXVsdFZpZXcuZ2V0Q29tcHV0ZWRTdHlsZSxcbiAgICBjc3NOdW1iZXIgPSB7ICdjb2x1bW4tY291bnQnOiAxLCAnY29sdW1ucyc6IDEsICdmb250LXdlaWdodCc6IDEsICdsaW5lLWhlaWdodCc6IDEsJ29wYWNpdHknOiAxLCAnei1pbmRleCc6IDEsICd6b29tJzogMSB9LFxuICAgIGZyYWdtZW50UkUgPSAvXlxccyo8KFxcdyt8ISlbXj5dKj4vLFxuICAgIHRhZ0V4cGFuZGVyUkUgPSAvPCg/IWFyZWF8YnJ8Y29sfGVtYmVkfGhyfGltZ3xpbnB1dHxsaW5rfG1ldGF8cGFyYW0pKChbXFx3Ol0rKVtePl0qKVxcLz4vaWcsXG4gICAgcm9vdE5vZGVSRSA9IC9eKD86Ym9keXxodG1sKSQvaSxcblxuICAgIC8vIHNwZWNpYWwgYXR0cmlidXRlcyB0aGF0IHNob3VsZCBiZSBnZXQvc2V0IHZpYSBtZXRob2QgY2FsbHNcbiAgICBtZXRob2RBdHRyaWJ1dGVzID0gWyd2YWwnLCAnY3NzJywgJ2h0bWwnLCAndGV4dCcsICdkYXRhJywgJ3dpZHRoJywgJ2hlaWdodCcsICdvZmZzZXQnXSxcblxuICAgIGFkamFjZW5jeU9wZXJhdG9ycyA9IFsgJ2FmdGVyJywgJ3ByZXBlbmQnLCAnYmVmb3JlJywgJ2FwcGVuZCcgXSxcbiAgICB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RhYmxlJyksXG4gICAgdGFibGVSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpLFxuICAgIGNvbnRhaW5lcnMgPSB7XG4gICAgICAndHInOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0Ym9keScpLFxuICAgICAgJ3Rib2R5JzogdGFibGUsICd0aGVhZCc6IHRhYmxlLCAndGZvb3QnOiB0YWJsZSxcbiAgICAgICd0ZCc6IHRhYmxlUm93LCAndGgnOiB0YWJsZVJvdyxcbiAgICAgICcqJzogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB9LFxuICAgIHJlYWR5UkUgPSAvY29tcGxldGV8bG9hZGVkfGludGVyYWN0aXZlLyxcbiAgICBjbGFzc1NlbGVjdG9yUkUgPSAvXlxcLihbXFx3LV0rKSQvLFxuICAgIGlkU2VsZWN0b3JSRSA9IC9eIyhbXFx3LV0qKSQvLFxuICAgIHRhZ1NlbGVjdG9yUkUgPSAvXltcXHctXSskLyxcbiAgICBjbGFzczJ0eXBlID0ge30sXG4gICAgdG9TdHJpbmcgPSBjbGFzczJ0eXBlLnRvU3RyaW5nLFxuICAgIHplcHRvID0ge30sXG4gICAgY2FtZWxpemUsIHVuaXEsXG4gICAgdGVtcFBhcmVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cbiAgemVwdG8ubWF0Y2hlcyA9IGZ1bmN0aW9uKGVsZW1lbnQsIHNlbGVjdG9yKSB7XG4gICAgaWYgKCFlbGVtZW50IHx8IGVsZW1lbnQubm9kZVR5cGUgIT09IDEpIHJldHVybiBmYWxzZVxuICAgIHZhciBtYXRjaGVzU2VsZWN0b3IgPSBlbGVtZW50LndlYmtpdE1hdGNoZXNTZWxlY3RvciB8fCBlbGVtZW50Lm1vek1hdGNoZXNTZWxlY3RvciB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50Lm9NYXRjaGVzU2VsZWN0b3IgfHwgZWxlbWVudC5tYXRjaGVzU2VsZWN0b3JcbiAgICBpZiAobWF0Y2hlc1NlbGVjdG9yKSByZXR1cm4gbWF0Y2hlc1NlbGVjdG9yLmNhbGwoZWxlbWVudCwgc2VsZWN0b3IpXG4gICAgLy8gZmFsbCBiYWNrIHRvIHBlcmZvcm1pbmcgYSBzZWxlY3RvcjpcbiAgICB2YXIgbWF0Y2gsIHBhcmVudCA9IGVsZW1lbnQucGFyZW50Tm9kZSwgdGVtcCA9ICFwYXJlbnRcbiAgICBpZiAodGVtcCkgKHBhcmVudCA9IHRlbXBQYXJlbnQpLmFwcGVuZENoaWxkKGVsZW1lbnQpXG4gICAgbWF0Y2ggPSB+emVwdG8ucXNhKHBhcmVudCwgc2VsZWN0b3IpLmluZGV4T2YoZWxlbWVudClcbiAgICB0ZW1wICYmIHRlbXBQYXJlbnQucmVtb3ZlQ2hpbGQoZWxlbWVudClcbiAgICByZXR1cm4gbWF0Y2hcbiAgfVxuXG4gIGZ1bmN0aW9uIHR5cGUob2JqKSB7XG4gICAgcmV0dXJuIG9iaiA9PSBudWxsID8gU3RyaW5nKG9iaikgOlxuICAgICAgY2xhc3MydHlwZVt0b1N0cmluZy5jYWxsKG9iaildIHx8IFwib2JqZWN0XCJcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHR5cGUodmFsdWUpID09IFwiZnVuY3Rpb25cIiB9XG4gIGZ1bmN0aW9uIGlzV2luZG93KG9iaikgICAgIHsgcmV0dXJuIG9iaiAhPSBudWxsICYmIG9iaiA9PSBvYmoud2luZG93IH1cbiAgZnVuY3Rpb24gaXNEb2N1bWVudChvYmopICAgeyByZXR1cm4gb2JqICE9IG51bGwgJiYgb2JqLm5vZGVUeXBlID09IG9iai5ET0NVTUVOVF9OT0RFIH1cbiAgZnVuY3Rpb24gaXNPYmplY3Qob2JqKSAgICAgeyByZXR1cm4gdHlwZShvYmopID09IFwib2JqZWN0XCIgfVxuICBmdW5jdGlvbiBpc1BsYWluT2JqZWN0KG9iaikge1xuICAgIHJldHVybiBpc09iamVjdChvYmopICYmICFpc1dpbmRvdyhvYmopICYmIG9iai5fX3Byb3RvX18gPT0gT2JqZWN0LnByb3RvdHlwZVxuICB9XG4gIGZ1bmN0aW9uIGlzQXJyYXkodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgQXJyYXkgfVxuICBmdW5jdGlvbiBsaWtlQXJyYXkob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqLmxlbmd0aCA9PSAnbnVtYmVyJyB9XG5cbiAgZnVuY3Rpb24gY29tcGFjdChhcnJheSkgeyByZXR1cm4gZmlsdGVyLmNhbGwoYXJyYXksIGZ1bmN0aW9uKGl0ZW0peyByZXR1cm4gaXRlbSAhPSBudWxsIH0pIH1cbiAgZnVuY3Rpb24gZmxhdHRlbihhcnJheSkgeyByZXR1cm4gYXJyYXkubGVuZ3RoID4gMCA/ICQuZm4uY29uY2F0LmFwcGx5KFtdLCBhcnJheSkgOiBhcnJheSB9XG4gIGNhbWVsaXplID0gZnVuY3Rpb24oc3RyKXsgcmV0dXJuIHN0ci5yZXBsYWNlKC8tKyguKT8vZywgZnVuY3Rpb24obWF0Y2gsIGNocil7IHJldHVybiBjaHIgPyBjaHIudG9VcHBlckNhc2UoKSA6ICcnIH0pIH1cbiAgZnVuY3Rpb24gZGFzaGVyaXplKHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvOjovZywgJy8nKVxuICAgICAgICAgICAucmVwbGFjZSgvKFtBLVpdKykoW0EtWl1bYS16XSkvZywgJyQxXyQyJylcbiAgICAgICAgICAgLnJlcGxhY2UoLyhbYS16XFxkXSkoW0EtWl0pL2csICckMV8kMicpXG4gICAgICAgICAgIC5yZXBsYWNlKC9fL2csICctJylcbiAgICAgICAgICAgLnRvTG93ZXJDYXNlKClcbiAgfVxuICB1bmlxID0gZnVuY3Rpb24oYXJyYXkpeyByZXR1cm4gZmlsdGVyLmNhbGwoYXJyYXksIGZ1bmN0aW9uKGl0ZW0sIGlkeCl7IHJldHVybiBhcnJheS5pbmRleE9mKGl0ZW0pID09IGlkeCB9KSB9XG5cbiAgZnVuY3Rpb24gY2xhc3NSRShuYW1lKSB7XG4gICAgcmV0dXJuIG5hbWUgaW4gY2xhc3NDYWNoZSA/XG4gICAgICBjbGFzc0NhY2hlW25hbWVdIDogKGNsYXNzQ2FjaGVbbmFtZV0gPSBuZXcgUmVnRXhwKCcoXnxcXFxccyknICsgbmFtZSArICcoXFxcXHN8JCknKSlcbiAgfVxuXG4gIGZ1bmN0aW9uIG1heWJlQWRkUHgobmFtZSwgdmFsdWUpIHtcbiAgICByZXR1cm4gKHR5cGVvZiB2YWx1ZSA9PSBcIm51bWJlclwiICYmICFjc3NOdW1iZXJbZGFzaGVyaXplKG5hbWUpXSkgPyB2YWx1ZSArIFwicHhcIiA6IHZhbHVlXG4gIH1cblxuICBmdW5jdGlvbiBkZWZhdWx0RGlzcGxheShub2RlTmFtZSkge1xuICAgIHZhciBlbGVtZW50LCBkaXNwbGF5XG4gICAgaWYgKCFlbGVtZW50RGlzcGxheVtub2RlTmFtZV0pIHtcbiAgICAgIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KG5vZGVOYW1lKVxuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbGVtZW50KVxuICAgICAgZGlzcGxheSA9IGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCwgJycpLmdldFByb3BlcnR5VmFsdWUoXCJkaXNwbGF5XCIpXG4gICAgICBlbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWxlbWVudClcbiAgICAgIGRpc3BsYXkgPT0gXCJub25lXCIgJiYgKGRpc3BsYXkgPSBcImJsb2NrXCIpXG4gICAgICBlbGVtZW50RGlzcGxheVtub2RlTmFtZV0gPSBkaXNwbGF5XG4gICAgfVxuICAgIHJldHVybiBlbGVtZW50RGlzcGxheVtub2RlTmFtZV1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNoaWxkcmVuKGVsZW1lbnQpIHtcbiAgICByZXR1cm4gJ2NoaWxkcmVuJyBpbiBlbGVtZW50ID9cbiAgICAgIHNsaWNlLmNhbGwoZWxlbWVudC5jaGlsZHJlbikgOlxuICAgICAgJC5tYXAoZWxlbWVudC5jaGlsZE5vZGVzLCBmdW5jdGlvbihub2RlKXsgaWYgKG5vZGUubm9kZVR5cGUgPT0gMSkgcmV0dXJuIG5vZGUgfSlcbiAgfVxuXG4gIC8vIGAkLnplcHRvLmZyYWdtZW50YCB0YWtlcyBhIGh0bWwgc3RyaW5nIGFuZCBhbiBvcHRpb25hbCB0YWcgbmFtZVxuICAvLyB0byBnZW5lcmF0ZSBET00gbm9kZXMgbm9kZXMgZnJvbSB0aGUgZ2l2ZW4gaHRtbCBzdHJpbmcuXG4gIC8vIFRoZSBnZW5lcmF0ZWQgRE9NIG5vZGVzIGFyZSByZXR1cm5lZCBhcyBhbiBhcnJheS5cbiAgLy8gVGhpcyBmdW5jdGlvbiBjYW4gYmUgb3ZlcnJpZGVuIGluIHBsdWdpbnMgZm9yIGV4YW1wbGUgdG8gbWFrZVxuICAvLyBpdCBjb21wYXRpYmxlIHdpdGggYnJvd3NlcnMgdGhhdCBkb24ndCBzdXBwb3J0IHRoZSBET00gZnVsbHkuXG4gIHplcHRvLmZyYWdtZW50ID0gZnVuY3Rpb24oaHRtbCwgbmFtZSwgcHJvcGVydGllcykge1xuICAgIGlmIChodG1sLnJlcGxhY2UpIGh0bWwgPSBodG1sLnJlcGxhY2UodGFnRXhwYW5kZXJSRSwgXCI8JDE+PC8kMj5cIilcbiAgICBpZiAobmFtZSA9PT0gdW5kZWZpbmVkKSBuYW1lID0gZnJhZ21lbnRSRS50ZXN0KGh0bWwpICYmIFJlZ0V4cC4kMVxuICAgIGlmICghKG5hbWUgaW4gY29udGFpbmVycykpIG5hbWUgPSAnKidcblxuICAgIHZhciBub2RlcywgZG9tLCBjb250YWluZXIgPSBjb250YWluZXJzW25hbWVdXG4gICAgY29udGFpbmVyLmlubmVySFRNTCA9ICcnICsgaHRtbFxuICAgIGRvbSA9ICQuZWFjaChzbGljZS5jYWxsKGNvbnRhaW5lci5jaGlsZE5vZGVzKSwgZnVuY3Rpb24oKXtcbiAgICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZCh0aGlzKVxuICAgIH0pXG4gICAgaWYgKGlzUGxhaW5PYmplY3QocHJvcGVydGllcykpIHtcbiAgICAgIG5vZGVzID0gJChkb20pXG4gICAgICAkLmVhY2gocHJvcGVydGllcywgZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xuICAgICAgICBpZiAobWV0aG9kQXR0cmlidXRlcy5pbmRleE9mKGtleSkgPiAtMSkgbm9kZXNba2V5XSh2YWx1ZSlcbiAgICAgICAgZWxzZSBub2Rlcy5hdHRyKGtleSwgdmFsdWUpXG4gICAgICB9KVxuICAgIH1cbiAgICByZXR1cm4gZG9tXG4gIH1cblxuICAvLyBgJC56ZXB0by5aYCBzd2FwcyBvdXQgdGhlIHByb3RvdHlwZSBvZiB0aGUgZ2l2ZW4gYGRvbWAgYXJyYXlcbiAgLy8gb2Ygbm9kZXMgd2l0aCBgJC5mbmAgYW5kIHRodXMgc3VwcGx5aW5nIGFsbCB0aGUgWmVwdG8gZnVuY3Rpb25zXG4gIC8vIHRvIHRoZSBhcnJheS4gTm90ZSB0aGF0IGBfX3Byb3RvX19gIGlzIG5vdCBzdXBwb3J0ZWQgb24gSW50ZXJuZXRcbiAgLy8gRXhwbG9yZXIuIFRoaXMgbWV0aG9kIGNhbiBiZSBvdmVycmlkZW4gaW4gcGx1Z2lucy5cbiAgemVwdG8uWiA9IGZ1bmN0aW9uKGRvbSwgc2VsZWN0b3IpIHtcbiAgICBkb20gPSBkb20gfHwgW11cbiAgICBkb20uX19wcm90b19fID0gJC5mblxuICAgIGRvbS5zZWxlY3RvciA9IHNlbGVjdG9yIHx8ICcnXG4gICAgcmV0dXJuIGRvbVxuICB9XG5cbiAgLy8gYCQuemVwdG8uaXNaYCBzaG91bGQgcmV0dXJuIGB0cnVlYCBpZiB0aGUgZ2l2ZW4gb2JqZWN0IGlzIGEgWmVwdG9cbiAgLy8gY29sbGVjdGlvbi4gVGhpcyBtZXRob2QgY2FuIGJlIG92ZXJyaWRlbiBpbiBwbHVnaW5zLlxuICB6ZXB0by5pc1ogPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICByZXR1cm4gb2JqZWN0IGluc3RhbmNlb2YgemVwdG8uWlxuICB9XG5cbiAgLy8gYCQuemVwdG8uaW5pdGAgaXMgWmVwdG8ncyBjb3VudGVycGFydCB0byBqUXVlcnkncyBgJC5mbi5pbml0YCBhbmRcbiAgLy8gdGFrZXMgYSBDU1Mgc2VsZWN0b3IgYW5kIGFuIG9wdGlvbmFsIGNvbnRleHQgKGFuZCBoYW5kbGVzIHZhcmlvdXNcbiAgLy8gc3BlY2lhbCBjYXNlcykuXG4gIC8vIFRoaXMgbWV0aG9kIGNhbiBiZSBvdmVycmlkZW4gaW4gcGx1Z2lucy5cbiAgemVwdG8uaW5pdCA9IGZ1bmN0aW9uKHNlbGVjdG9yLCBjb250ZXh0KSB7XG4gICAgLy8gSWYgbm90aGluZyBnaXZlbiwgcmV0dXJuIGFuIGVtcHR5IFplcHRvIGNvbGxlY3Rpb25cbiAgICBpZiAoIXNlbGVjdG9yKSByZXR1cm4gemVwdG8uWigpXG4gICAgLy8gSWYgYSBmdW5jdGlvbiBpcyBnaXZlbiwgY2FsbCBpdCB3aGVuIHRoZSBET00gaXMgcmVhZHlcbiAgICBlbHNlIGlmIChpc0Z1bmN0aW9uKHNlbGVjdG9yKSkgcmV0dXJuICQoZG9jdW1lbnQpLnJlYWR5KHNlbGVjdG9yKVxuICAgIC8vIElmIGEgWmVwdG8gY29sbGVjdGlvbiBpcyBnaXZlbiwganV0cyByZXR1cm4gaXRcbiAgICBlbHNlIGlmICh6ZXB0by5pc1ooc2VsZWN0b3IpKSByZXR1cm4gc2VsZWN0b3JcbiAgICBlbHNlIHtcbiAgICAgIHZhciBkb21cbiAgICAgIC8vIG5vcm1hbGl6ZSBhcnJheSBpZiBhbiBhcnJheSBvZiBub2RlcyBpcyBnaXZlblxuICAgICAgaWYgKGlzQXJyYXkoc2VsZWN0b3IpKSBkb20gPSBjb21wYWN0KHNlbGVjdG9yKVxuICAgICAgLy8gV3JhcCBET00gbm9kZXMuIElmIGEgcGxhaW4gb2JqZWN0IGlzIGdpdmVuLCBkdXBsaWNhdGUgaXQuXG4gICAgICBlbHNlIGlmIChpc09iamVjdChzZWxlY3RvcikpXG4gICAgICAgIGRvbSA9IFtpc1BsYWluT2JqZWN0KHNlbGVjdG9yKSA/ICQuZXh0ZW5kKHt9LCBzZWxlY3RvcikgOiBzZWxlY3Rvcl0sIHNlbGVjdG9yID0gbnVsbFxuICAgICAgLy8gSWYgaXQncyBhIGh0bWwgZnJhZ21lbnQsIGNyZWF0ZSBub2RlcyBmcm9tIGl0XG4gICAgICBlbHNlIGlmIChmcmFnbWVudFJFLnRlc3Qoc2VsZWN0b3IpKVxuICAgICAgICBkb20gPSB6ZXB0by5mcmFnbWVudChzZWxlY3Rvci50cmltKCksIFJlZ0V4cC4kMSwgY29udGV4dCksIHNlbGVjdG9yID0gbnVsbFxuICAgICAgLy8gSWYgdGhlcmUncyBhIGNvbnRleHQsIGNyZWF0ZSBhIGNvbGxlY3Rpb24gb24gdGhhdCBjb250ZXh0IGZpcnN0LCBhbmQgc2VsZWN0XG4gICAgICAvLyBub2RlcyBmcm9tIHRoZXJlXG4gICAgICBlbHNlIGlmIChjb250ZXh0ICE9PSB1bmRlZmluZWQpIHJldHVybiAkKGNvbnRleHQpLmZpbmQoc2VsZWN0b3IpXG4gICAgICAvLyBBbmQgbGFzdCBidXQgbm8gbGVhc3QsIGlmIGl0J3MgYSBDU1Mgc2VsZWN0b3IsIHVzZSBpdCB0byBzZWxlY3Qgbm9kZXMuXG4gICAgICBlbHNlIGRvbSA9IHplcHRvLnFzYShkb2N1bWVudCwgc2VsZWN0b3IpXG4gICAgICAvLyBjcmVhdGUgYSBuZXcgWmVwdG8gY29sbGVjdGlvbiBmcm9tIHRoZSBub2RlcyBmb3VuZFxuICAgICAgcmV0dXJuIHplcHRvLlooZG9tLCBzZWxlY3RvcilcbiAgICB9XG4gIH1cblxuICAvLyBgJGAgd2lsbCBiZSB0aGUgYmFzZSBgWmVwdG9gIG9iamVjdC4gV2hlbiBjYWxsaW5nIHRoaXNcbiAgLy8gZnVuY3Rpb24ganVzdCBjYWxsIGAkLnplcHRvLmluaXQsIHdoaWNoIG1ha2VzIHRoZSBpbXBsZW1lbnRhdGlvblxuICAvLyBkZXRhaWxzIG9mIHNlbGVjdGluZyBub2RlcyBhbmQgY3JlYXRpbmcgWmVwdG8gY29sbGVjdGlvbnNcbiAgLy8gcGF0Y2hhYmxlIGluIHBsdWdpbnMuXG4gICQgPSBmdW5jdGlvbihzZWxlY3RvciwgY29udGV4dCl7XG4gICAgcmV0dXJuIHplcHRvLmluaXQoc2VsZWN0b3IsIGNvbnRleHQpXG4gIH1cblxuICBmdW5jdGlvbiBleHRlbmQodGFyZ2V0LCBzb3VyY2UsIGRlZXApIHtcbiAgICBmb3IgKGtleSBpbiBzb3VyY2UpXG4gICAgICBpZiAoZGVlcCAmJiAoaXNQbGFpbk9iamVjdChzb3VyY2Vba2V5XSkgfHwgaXNBcnJheShzb3VyY2Vba2V5XSkpKSB7XG4gICAgICAgIGlmIChpc1BsYWluT2JqZWN0KHNvdXJjZVtrZXldKSAmJiAhaXNQbGFpbk9iamVjdCh0YXJnZXRba2V5XSkpXG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSB7fVxuICAgICAgICBpZiAoaXNBcnJheShzb3VyY2Vba2V5XSkgJiYgIWlzQXJyYXkodGFyZ2V0W2tleV0pKVxuICAgICAgICAgIHRhcmdldFtrZXldID0gW11cbiAgICAgICAgZXh0ZW5kKHRhcmdldFtrZXldLCBzb3VyY2Vba2V5XSwgZGVlcClcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKHNvdXJjZVtrZXldICE9PSB1bmRlZmluZWQpIHRhcmdldFtrZXldID0gc291cmNlW2tleV1cbiAgfVxuXG4gIC8vIENvcHkgYWxsIGJ1dCB1bmRlZmluZWQgcHJvcGVydGllcyBmcm9tIG9uZSBvciBtb3JlXG4gIC8vIG9iamVjdHMgdG8gdGhlIGB0YXJnZXRgIG9iamVjdC5cbiAgJC5leHRlbmQgPSBmdW5jdGlvbih0YXJnZXQpe1xuICAgIHZhciBkZWVwLCBhcmdzID0gc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpXG4gICAgaWYgKHR5cGVvZiB0YXJnZXQgPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICBkZWVwID0gdGFyZ2V0XG4gICAgICB0YXJnZXQgPSBhcmdzLnNoaWZ0KClcbiAgICB9XG4gICAgYXJncy5mb3JFYWNoKGZ1bmN0aW9uKGFyZyl7IGV4dGVuZCh0YXJnZXQsIGFyZywgZGVlcCkgfSlcbiAgICByZXR1cm4gdGFyZ2V0XG4gIH1cblxuICAvLyBgJC56ZXB0by5xc2FgIGlzIFplcHRvJ3MgQ1NTIHNlbGVjdG9yIGltcGxlbWVudGF0aW9uIHdoaWNoXG4gIC8vIHVzZXMgYGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGxgIGFuZCBvcHRpbWl6ZXMgZm9yIHNvbWUgc3BlY2lhbCBjYXNlcywgbGlrZSBgI2lkYC5cbiAgLy8gVGhpcyBtZXRob2QgY2FuIGJlIG92ZXJyaWRlbiBpbiBwbHVnaW5zLlxuICB6ZXB0by5xc2EgPSBmdW5jdGlvbihlbGVtZW50LCBzZWxlY3Rvcil7XG4gICAgdmFyIGZvdW5kXG4gICAgcmV0dXJuIChpc0RvY3VtZW50KGVsZW1lbnQpICYmIGlkU2VsZWN0b3JSRS50ZXN0KHNlbGVjdG9yKSkgP1xuICAgICAgKCAoZm91bmQgPSBlbGVtZW50LmdldEVsZW1lbnRCeUlkKFJlZ0V4cC4kMSkpID8gW2ZvdW5kXSA6IFtdICkgOlxuICAgICAgKGVsZW1lbnQubm9kZVR5cGUgIT09IDEgJiYgZWxlbWVudC5ub2RlVHlwZSAhPT0gOSkgPyBbXSA6XG4gICAgICBzbGljZS5jYWxsKFxuICAgICAgICBjbGFzc1NlbGVjdG9yUkUudGVzdChzZWxlY3RvcikgPyBlbGVtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoUmVnRXhwLiQxKSA6XG4gICAgICAgIHRhZ1NlbGVjdG9yUkUudGVzdChzZWxlY3RvcikgPyBlbGVtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKHNlbGVjdG9yKSA6XG4gICAgICAgIGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcilcbiAgICAgIClcbiAgfVxuXG4gIGZ1bmN0aW9uIGZpbHRlcmVkKG5vZGVzLCBzZWxlY3Rvcikge1xuICAgIHJldHVybiBzZWxlY3RvciA9PT0gdW5kZWZpbmVkID8gJChub2RlcykgOiAkKG5vZGVzKS5maWx0ZXIoc2VsZWN0b3IpXG4gIH1cblxuICAkLmNvbnRhaW5zID0gZnVuY3Rpb24ocGFyZW50LCBub2RlKSB7XG4gICAgcmV0dXJuIHBhcmVudCAhPT0gbm9kZSAmJiBwYXJlbnQuY29udGFpbnMobm9kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGZ1bmNBcmcoY29udGV4dCwgYXJnLCBpZHgsIHBheWxvYWQpIHtcbiAgICByZXR1cm4gaXNGdW5jdGlvbihhcmcpID8gYXJnLmNhbGwoY29udGV4dCwgaWR4LCBwYXlsb2FkKSA6IGFyZ1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0QXR0cmlidXRlKG5vZGUsIG5hbWUsIHZhbHVlKSB7XG4gICAgdmFsdWUgPT0gbnVsbCA/IG5vZGUucmVtb3ZlQXR0cmlidXRlKG5hbWUpIDogbm9kZS5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpXG4gIH1cblxuICAvLyBhY2Nlc3MgY2xhc3NOYW1lIHByb3BlcnR5IHdoaWxlIHJlc3BlY3RpbmcgU1ZHQW5pbWF0ZWRTdHJpbmdcbiAgZnVuY3Rpb24gY2xhc3NOYW1lKG5vZGUsIHZhbHVlKXtcbiAgICB2YXIga2xhc3MgPSBub2RlLmNsYXNzTmFtZSxcbiAgICAgICAgc3ZnICAgPSBrbGFzcyAmJiBrbGFzcy5iYXNlVmFsICE9PSB1bmRlZmluZWRcblxuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gc3ZnID8ga2xhc3MuYmFzZVZhbCA6IGtsYXNzXG4gICAgc3ZnID8gKGtsYXNzLmJhc2VWYWwgPSB2YWx1ZSkgOiAobm9kZS5jbGFzc05hbWUgPSB2YWx1ZSlcbiAgfVxuXG4gIC8vIFwidHJ1ZVwiICA9PiB0cnVlXG4gIC8vIFwiZmFsc2VcIiA9PiBmYWxzZVxuICAvLyBcIm51bGxcIiAgPT4gbnVsbFxuICAvLyBcIjQyXCIgICAgPT4gNDJcbiAgLy8gXCI0Mi41XCIgID0+IDQyLjVcbiAgLy8gSlNPTiAgICA9PiBwYXJzZSBpZiB2YWxpZFxuICAvLyBTdHJpbmcgID0+IHNlbGZcbiAgZnVuY3Rpb24gZGVzZXJpYWxpemVWYWx1ZSh2YWx1ZSkge1xuICAgIHZhciBudW1cbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHZhbHVlID9cbiAgICAgICAgdmFsdWUgPT0gXCJ0cnVlXCIgfHxcbiAgICAgICAgKCB2YWx1ZSA9PSBcImZhbHNlXCIgPyBmYWxzZSA6XG4gICAgICAgICAgdmFsdWUgPT0gXCJudWxsXCIgPyBudWxsIDpcbiAgICAgICAgICAhaXNOYU4obnVtID0gTnVtYmVyKHZhbHVlKSkgPyBudW0gOlxuICAgICAgICAgIC9eW1xcW1xce10vLnRlc3QodmFsdWUpID8gJC5wYXJzZUpTT04odmFsdWUpIDpcbiAgICAgICAgICB2YWx1ZSApXG4gICAgICAgIDogdmFsdWVcbiAgICB9IGNhdGNoKGUpIHtcbiAgICAgIHJldHVybiB2YWx1ZVxuICAgIH1cbiAgfVxuXG4gICQudHlwZSA9IHR5cGVcbiAgJC5pc0Z1bmN0aW9uID0gaXNGdW5jdGlvblxuICAkLmlzV2luZG93ID0gaXNXaW5kb3dcbiAgJC5pc0FycmF5ID0gaXNBcnJheVxuICAkLmlzUGxhaW5PYmplY3QgPSBpc1BsYWluT2JqZWN0XG5cbiAgJC5pc0VtcHR5T2JqZWN0ID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgdmFyIG5hbWVcbiAgICBmb3IgKG5hbWUgaW4gb2JqKSByZXR1cm4gZmFsc2VcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgJC5pbkFycmF5ID0gZnVuY3Rpb24oZWxlbSwgYXJyYXksIGkpe1xuICAgIHJldHVybiBlbXB0eUFycmF5LmluZGV4T2YuY2FsbChhcnJheSwgZWxlbSwgaSlcbiAgfVxuXG4gICQuY2FtZWxDYXNlID0gY2FtZWxpemVcbiAgJC50cmltID0gZnVuY3Rpb24oc3RyKSB7IHJldHVybiBzdHIudHJpbSgpIH1cblxuICAvLyBwbHVnaW4gY29tcGF0aWJpbGl0eVxuICAkLnV1aWQgPSAwXG4gICQuc3VwcG9ydCA9IHsgfVxuICAkLmV4cHIgPSB7IH1cblxuICAkLm1hcCA9IGZ1bmN0aW9uKGVsZW1lbnRzLCBjYWxsYmFjayl7XG4gICAgdmFyIHZhbHVlLCB2YWx1ZXMgPSBbXSwgaSwga2V5XG4gICAgaWYgKGxpa2VBcnJheShlbGVtZW50cykpXG4gICAgICBmb3IgKGkgPSAwOyBpIDwgZWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFsdWUgPSBjYWxsYmFjayhlbGVtZW50c1tpXSwgaSlcbiAgICAgICAgaWYgKHZhbHVlICE9IG51bGwpIHZhbHVlcy5wdXNoKHZhbHVlKVxuICAgICAgfVxuICAgIGVsc2VcbiAgICAgIGZvciAoa2V5IGluIGVsZW1lbnRzKSB7XG4gICAgICAgIHZhbHVlID0gY2FsbGJhY2soZWxlbWVudHNba2V5XSwga2V5KVxuICAgICAgICBpZiAodmFsdWUgIT0gbnVsbCkgdmFsdWVzLnB1c2godmFsdWUpXG4gICAgICB9XG4gICAgcmV0dXJuIGZsYXR0ZW4odmFsdWVzKVxuICB9XG5cbiAgJC5lYWNoID0gZnVuY3Rpb24oZWxlbWVudHMsIGNhbGxiYWNrKXtcbiAgICB2YXIgaSwga2V5XG4gICAgaWYgKGxpa2VBcnJheShlbGVtZW50cykpIHtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBlbGVtZW50cy5sZW5ndGg7IGkrKylcbiAgICAgICAgaWYgKGNhbGxiYWNrLmNhbGwoZWxlbWVudHNbaV0sIGksIGVsZW1lbnRzW2ldKSA9PT0gZmFsc2UpIHJldHVybiBlbGVtZW50c1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGtleSBpbiBlbGVtZW50cylcbiAgICAgICAgaWYgKGNhbGxiYWNrLmNhbGwoZWxlbWVudHNba2V5XSwga2V5LCBlbGVtZW50c1trZXldKSA9PT0gZmFsc2UpIHJldHVybiBlbGVtZW50c1xuICAgIH1cblxuICAgIHJldHVybiBlbGVtZW50c1xuICB9XG5cbiAgJC5ncmVwID0gZnVuY3Rpb24oZWxlbWVudHMsIGNhbGxiYWNrKXtcbiAgICByZXR1cm4gZmlsdGVyLmNhbGwoZWxlbWVudHMsIGNhbGxiYWNrKVxuICB9XG5cbiAgaWYgKHdpbmRvdy5KU09OKSAkLnBhcnNlSlNPTiA9IEpTT04ucGFyc2VcblxuICAvLyBQb3B1bGF0ZSB0aGUgY2xhc3MydHlwZSBtYXBcbiAgJC5lYWNoKFwiQm9vbGVhbiBOdW1iZXIgU3RyaW5nIEZ1bmN0aW9uIEFycmF5IERhdGUgUmVnRXhwIE9iamVjdCBFcnJvclwiLnNwbGl0KFwiIFwiKSwgZnVuY3Rpb24oaSwgbmFtZSkge1xuICAgIGNsYXNzMnR5cGVbIFwiW29iamVjdCBcIiArIG5hbWUgKyBcIl1cIiBdID0gbmFtZS50b0xvd2VyQ2FzZSgpXG4gIH0pXG5cbiAgLy8gRGVmaW5lIG1ldGhvZHMgdGhhdCB3aWxsIGJlIGF2YWlsYWJsZSBvbiBhbGxcbiAgLy8gWmVwdG8gY29sbGVjdGlvbnNcbiAgJC5mbiA9IHtcbiAgICAvLyBCZWNhdXNlIGEgY29sbGVjdGlvbiBhY3RzIGxpa2UgYW4gYXJyYXlcbiAgICAvLyBjb3B5IG92ZXIgdGhlc2UgdXNlZnVsIGFycmF5IGZ1bmN0aW9ucy5cbiAgICBmb3JFYWNoOiBlbXB0eUFycmF5LmZvckVhY2gsXG4gICAgcmVkdWNlOiBlbXB0eUFycmF5LnJlZHVjZSxcbiAgICBwdXNoOiBlbXB0eUFycmF5LnB1c2gsXG4gICAgc29ydDogZW1wdHlBcnJheS5zb3J0LFxuICAgIGluZGV4T2Y6IGVtcHR5QXJyYXkuaW5kZXhPZixcbiAgICBjb25jYXQ6IGVtcHR5QXJyYXkuY29uY2F0LFxuXG4gICAgLy8gYG1hcGAgYW5kIGBzbGljZWAgaW4gdGhlIGpRdWVyeSBBUEkgd29yayBkaWZmZXJlbnRseVxuICAgIC8vIGZyb20gdGhlaXIgYXJyYXkgY291bnRlcnBhcnRzXG4gICAgbWFwOiBmdW5jdGlvbihmbil7XG4gICAgICByZXR1cm4gJCgkLm1hcCh0aGlzLCBmdW5jdGlvbihlbCwgaSl7IHJldHVybiBmbi5jYWxsKGVsLCBpLCBlbCkgfSkpXG4gICAgfSxcbiAgICBzbGljZTogZnVuY3Rpb24oKXtcbiAgICAgIHJldHVybiAkKHNsaWNlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpXG4gICAgfSxcblxuICAgIHJlYWR5OiBmdW5jdGlvbihjYWxsYmFjayl7XG4gICAgICBpZiAocmVhZHlSRS50ZXN0KGRvY3VtZW50LnJlYWR5U3RhdGUpKSBjYWxsYmFjaygkKVxuICAgICAgZWxzZSBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24oKXsgY2FsbGJhY2soJCkgfSwgZmFsc2UpXG4gICAgICByZXR1cm4gdGhpc1xuICAgIH0sXG4gICAgZ2V0OiBmdW5jdGlvbihpZHgpe1xuICAgICAgcmV0dXJuIGlkeCA9PT0gdW5kZWZpbmVkID8gc2xpY2UuY2FsbCh0aGlzKSA6IHRoaXNbaWR4ID49IDAgPyBpZHggOiBpZHggKyB0aGlzLmxlbmd0aF1cbiAgICB9LFxuICAgIHRvQXJyYXk6IGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzLmdldCgpIH0sXG4gICAgc2l6ZTogZnVuY3Rpb24oKXtcbiAgICAgIHJldHVybiB0aGlzLmxlbmd0aFxuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbigpe1xuICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe1xuICAgICAgICBpZiAodGhpcy5wYXJlbnROb2RlICE9IG51bGwpXG4gICAgICAgICAgdGhpcy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMpXG4gICAgICB9KVxuICAgIH0sXG4gICAgZWFjaDogZnVuY3Rpb24oY2FsbGJhY2spe1xuICAgICAgZW1wdHlBcnJheS5ldmVyeS5jYWxsKHRoaXMsIGZ1bmN0aW9uKGVsLCBpZHgpe1xuICAgICAgICByZXR1cm4gY2FsbGJhY2suY2FsbChlbCwgaWR4LCBlbCkgIT09IGZhbHNlXG4gICAgICB9KVxuICAgICAgcmV0dXJuIHRoaXNcbiAgICB9LFxuICAgIGZpbHRlcjogZnVuY3Rpb24oc2VsZWN0b3Ipe1xuICAgICAgaWYgKGlzRnVuY3Rpb24oc2VsZWN0b3IpKSByZXR1cm4gdGhpcy5ub3QodGhpcy5ub3Qoc2VsZWN0b3IpKVxuICAgICAgcmV0dXJuICQoZmlsdGVyLmNhbGwodGhpcywgZnVuY3Rpb24oZWxlbWVudCl7XG4gICAgICAgIHJldHVybiB6ZXB0by5tYXRjaGVzKGVsZW1lbnQsIHNlbGVjdG9yKVxuICAgICAgfSkpXG4gICAgfSxcbiAgICBhZGQ6IGZ1bmN0aW9uKHNlbGVjdG9yLGNvbnRleHQpe1xuICAgICAgcmV0dXJuICQodW5pcSh0aGlzLmNvbmNhdCgkKHNlbGVjdG9yLGNvbnRleHQpKSkpXG4gICAgfSxcbiAgICBpczogZnVuY3Rpb24oc2VsZWN0b3Ipe1xuICAgICAgcmV0dXJuIHRoaXMubGVuZ3RoID4gMCAmJiB6ZXB0by5tYXRjaGVzKHRoaXNbMF0sIHNlbGVjdG9yKVxuICAgIH0sXG4gICAgbm90OiBmdW5jdGlvbihzZWxlY3Rvcil7XG4gICAgICB2YXIgbm9kZXM9W11cbiAgICAgIGlmIChpc0Z1bmN0aW9uKHNlbGVjdG9yKSAmJiBzZWxlY3Rvci5jYWxsICE9PSB1bmRlZmluZWQpXG4gICAgICAgIHRoaXMuZWFjaChmdW5jdGlvbihpZHgpe1xuICAgICAgICAgIGlmICghc2VsZWN0b3IuY2FsbCh0aGlzLGlkeCkpIG5vZGVzLnB1c2godGhpcylcbiAgICAgICAgfSlcbiAgICAgIGVsc2Uge1xuICAgICAgICB2YXIgZXhjbHVkZXMgPSB0eXBlb2Ygc2VsZWN0b3IgPT0gJ3N0cmluZycgPyB0aGlzLmZpbHRlcihzZWxlY3RvcikgOlxuICAgICAgICAgIChsaWtlQXJyYXkoc2VsZWN0b3IpICYmIGlzRnVuY3Rpb24oc2VsZWN0b3IuaXRlbSkpID8gc2xpY2UuY2FsbChzZWxlY3RvcikgOiAkKHNlbGVjdG9yKVxuICAgICAgICB0aGlzLmZvckVhY2goZnVuY3Rpb24oZWwpe1xuICAgICAgICAgIGlmIChleGNsdWRlcy5pbmRleE9mKGVsKSA8IDApIG5vZGVzLnB1c2goZWwpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICByZXR1cm4gJChub2RlcylcbiAgICB9LFxuICAgIGhhczogZnVuY3Rpb24oc2VsZWN0b3Ipe1xuICAgICAgcmV0dXJuIHRoaXMuZmlsdGVyKGZ1bmN0aW9uKCl7XG4gICAgICAgIHJldHVybiBpc09iamVjdChzZWxlY3RvcikgP1xuICAgICAgICAgICQuY29udGFpbnModGhpcywgc2VsZWN0b3IpIDpcbiAgICAgICAgICAkKHRoaXMpLmZpbmQoc2VsZWN0b3IpLnNpemUoKVxuICAgICAgfSlcbiAgICB9LFxuICAgIGVxOiBmdW5jdGlvbihpZHgpe1xuICAgICAgcmV0dXJuIGlkeCA9PT0gLTEgPyB0aGlzLnNsaWNlKGlkeCkgOiB0aGlzLnNsaWNlKGlkeCwgKyBpZHggKyAxKVxuICAgIH0sXG4gICAgZmlyc3Q6IGZ1bmN0aW9uKCl7XG4gICAgICB2YXIgZWwgPSB0aGlzWzBdXG4gICAgICByZXR1cm4gZWwgJiYgIWlzT2JqZWN0KGVsKSA/IGVsIDogJChlbClcbiAgICB9LFxuICAgIGxhc3Q6IGZ1bmN0aW9uKCl7XG4gICAgICB2YXIgZWwgPSB0aGlzW3RoaXMubGVuZ3RoIC0gMV1cbiAgICAgIHJldHVybiBlbCAmJiAhaXNPYmplY3QoZWwpID8gZWwgOiAkKGVsKVxuICAgIH0sXG4gICAgZmluZDogZnVuY3Rpb24oc2VsZWN0b3Ipe1xuICAgICAgdmFyIHJlc3VsdCwgJHRoaXMgPSB0aGlzXG4gICAgICBpZiAodHlwZW9mIHNlbGVjdG9yID09ICdvYmplY3QnKVxuICAgICAgICByZXN1bHQgPSAkKHNlbGVjdG9yKS5maWx0ZXIoZnVuY3Rpb24oKXtcbiAgICAgICAgICB2YXIgbm9kZSA9IHRoaXNcbiAgICAgICAgICByZXR1cm4gZW1wdHlBcnJheS5zb21lLmNhbGwoJHRoaXMsIGZ1bmN0aW9uKHBhcmVudCl7XG4gICAgICAgICAgICByZXR1cm4gJC5jb250YWlucyhwYXJlbnQsIG5vZGUpXG4gICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgIGVsc2UgaWYgKHRoaXMubGVuZ3RoID09IDEpIHJlc3VsdCA9ICQoemVwdG8ucXNhKHRoaXNbMF0sIHNlbGVjdG9yKSlcbiAgICAgIGVsc2UgcmVzdWx0ID0gdGhpcy5tYXAoZnVuY3Rpb24oKXsgcmV0dXJuIHplcHRvLnFzYSh0aGlzLCBzZWxlY3RvcikgfSlcbiAgICAgIHJldHVybiByZXN1bHRcbiAgICB9LFxuICAgIGNsb3Nlc3Q6IGZ1bmN0aW9uKHNlbGVjdG9yLCBjb250ZXh0KXtcbiAgICAgIHZhciBub2RlID0gdGhpc1swXSwgY29sbGVjdGlvbiA9IGZhbHNlXG4gICAgICBpZiAodHlwZW9mIHNlbGVjdG9yID09ICdvYmplY3QnKSBjb2xsZWN0aW9uID0gJChzZWxlY3RvcilcbiAgICAgIHdoaWxlIChub2RlICYmICEoY29sbGVjdGlvbiA/IGNvbGxlY3Rpb24uaW5kZXhPZihub2RlKSA+PSAwIDogemVwdG8ubWF0Y2hlcyhub2RlLCBzZWxlY3RvcikpKVxuICAgICAgICBub2RlID0gbm9kZSAhPT0gY29udGV4dCAmJiAhaXNEb2N1bWVudChub2RlKSAmJiBub2RlLnBhcmVudE5vZGVcbiAgICAgIHJldHVybiAkKG5vZGUpXG4gICAgfSxcbiAgICBwYXJlbnRzOiBmdW5jdGlvbihzZWxlY3Rvcil7XG4gICAgICB2YXIgYW5jZXN0b3JzID0gW10sIG5vZGVzID0gdGhpc1xuICAgICAgd2hpbGUgKG5vZGVzLmxlbmd0aCA+IDApXG4gICAgICAgIG5vZGVzID0gJC5tYXAobm9kZXMsIGZ1bmN0aW9uKG5vZGUpe1xuICAgICAgICAgIGlmICgobm9kZSA9IG5vZGUucGFyZW50Tm9kZSkgJiYgIWlzRG9jdW1lbnQobm9kZSkgJiYgYW5jZXN0b3JzLmluZGV4T2Yobm9kZSkgPCAwKSB7XG4gICAgICAgICAgICBhbmNlc3RvcnMucHVzaChub2RlKVxuICAgICAgICAgICAgcmV0dXJuIG5vZGVcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICByZXR1cm4gZmlsdGVyZWQoYW5jZXN0b3JzLCBzZWxlY3RvcilcbiAgICB9LFxuICAgIHBhcmVudDogZnVuY3Rpb24oc2VsZWN0b3Ipe1xuICAgICAgcmV0dXJuIGZpbHRlcmVkKHVuaXEodGhpcy5wbHVjaygncGFyZW50Tm9kZScpKSwgc2VsZWN0b3IpXG4gICAgfSxcbiAgICBjaGlsZHJlbjogZnVuY3Rpb24oc2VsZWN0b3Ipe1xuICAgICAgcmV0dXJuIGZpbHRlcmVkKHRoaXMubWFwKGZ1bmN0aW9uKCl7IHJldHVybiBjaGlsZHJlbih0aGlzKSB9KSwgc2VsZWN0b3IpXG4gICAgfSxcbiAgICBjb250ZW50czogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24oKSB7IHJldHVybiBzbGljZS5jYWxsKHRoaXMuY2hpbGROb2RlcykgfSlcbiAgICB9LFxuICAgIHNpYmxpbmdzOiBmdW5jdGlvbihzZWxlY3Rvcil7XG4gICAgICByZXR1cm4gZmlsdGVyZWQodGhpcy5tYXAoZnVuY3Rpb24oaSwgZWwpe1xuICAgICAgICByZXR1cm4gZmlsdGVyLmNhbGwoY2hpbGRyZW4oZWwucGFyZW50Tm9kZSksIGZ1bmN0aW9uKGNoaWxkKXsgcmV0dXJuIGNoaWxkIT09ZWwgfSlcbiAgICAgIH0pLCBzZWxlY3RvcilcbiAgICB9LFxuICAgIGVtcHR5OiBmdW5jdGlvbigpe1xuICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpeyB0aGlzLmlubmVySFRNTCA9ICcnIH0pXG4gICAgfSxcbiAgICAvLyBgcGx1Y2tgIGlzIGJvcnJvd2VkIGZyb20gUHJvdG90eXBlLmpzXG4gICAgcGx1Y2s6IGZ1bmN0aW9uKHByb3BlcnR5KXtcbiAgICAgIHJldHVybiAkLm1hcCh0aGlzLCBmdW5jdGlvbihlbCl7IHJldHVybiBlbFtwcm9wZXJ0eV0gfSlcbiAgICB9LFxuICAgIHNob3c6IGZ1bmN0aW9uKCl7XG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICAgIHRoaXMuc3R5bGUuZGlzcGxheSA9PSBcIm5vbmVcIiAmJiAodGhpcy5zdHlsZS5kaXNwbGF5ID0gbnVsbClcbiAgICAgICAgaWYgKGdldENvbXB1dGVkU3R5bGUodGhpcywgJycpLmdldFByb3BlcnR5VmFsdWUoXCJkaXNwbGF5XCIpID09IFwibm9uZVwiKVxuICAgICAgICAgIHRoaXMuc3R5bGUuZGlzcGxheSA9IGRlZmF1bHREaXNwbGF5KHRoaXMubm9kZU5hbWUpXG4gICAgICB9KVxuICAgIH0sXG4gICAgcmVwbGFjZVdpdGg6IGZ1bmN0aW9uKG5ld0NvbnRlbnQpe1xuICAgICAgcmV0dXJuIHRoaXMuYmVmb3JlKG5ld0NvbnRlbnQpLnJlbW92ZSgpXG4gICAgfSxcbiAgICB3cmFwOiBmdW5jdGlvbihzdHJ1Y3R1cmUpe1xuICAgICAgdmFyIGZ1bmMgPSBpc0Z1bmN0aW9uKHN0cnVjdHVyZSlcbiAgICAgIGlmICh0aGlzWzBdICYmICFmdW5jKVxuICAgICAgICB2YXIgZG9tICAgPSAkKHN0cnVjdHVyZSkuZ2V0KDApLFxuICAgICAgICAgICAgY2xvbmUgPSBkb20ucGFyZW50Tm9kZSB8fCB0aGlzLmxlbmd0aCA+IDFcblxuICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbihpbmRleCl7XG4gICAgICAgICQodGhpcykud3JhcEFsbChcbiAgICAgICAgICBmdW5jID8gc3RydWN0dXJlLmNhbGwodGhpcywgaW5kZXgpIDpcbiAgICAgICAgICAgIGNsb25lID8gZG9tLmNsb25lTm9kZSh0cnVlKSA6IGRvbVxuICAgICAgICApXG4gICAgICB9KVxuICAgIH0sXG4gICAgd3JhcEFsbDogZnVuY3Rpb24oc3RydWN0dXJlKXtcbiAgICAgIGlmICh0aGlzWzBdKSB7XG4gICAgICAgICQodGhpc1swXSkuYmVmb3JlKHN0cnVjdHVyZSA9ICQoc3RydWN0dXJlKSlcbiAgICAgICAgdmFyIGNoaWxkcmVuXG4gICAgICAgIC8vIGRyaWxsIGRvd24gdG8gdGhlIGlubW9zdCBlbGVtZW50XG4gICAgICAgIHdoaWxlICgoY2hpbGRyZW4gPSBzdHJ1Y3R1cmUuY2hpbGRyZW4oKSkubGVuZ3RoKSBzdHJ1Y3R1cmUgPSBjaGlsZHJlbi5maXJzdCgpXG4gICAgICAgICQoc3RydWN0dXJlKS5hcHBlbmQodGhpcylcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzXG4gICAgfSxcbiAgICB3cmFwSW5uZXI6IGZ1bmN0aW9uKHN0cnVjdHVyZSl7XG4gICAgICB2YXIgZnVuYyA9IGlzRnVuY3Rpb24oc3RydWN0dXJlKVxuICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbihpbmRleCl7XG4gICAgICAgIHZhciBzZWxmID0gJCh0aGlzKSwgY29udGVudHMgPSBzZWxmLmNvbnRlbnRzKCksXG4gICAgICAgICAgICBkb20gID0gZnVuYyA/IHN0cnVjdHVyZS5jYWxsKHRoaXMsIGluZGV4KSA6IHN0cnVjdHVyZVxuICAgICAgICBjb250ZW50cy5sZW5ndGggPyBjb250ZW50cy53cmFwQWxsKGRvbSkgOiBzZWxmLmFwcGVuZChkb20pXG4gICAgICB9KVxuICAgIH0sXG4gICAgdW53cmFwOiBmdW5jdGlvbigpe1xuICAgICAgdGhpcy5wYXJlbnQoKS5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICAgICQodGhpcykucmVwbGFjZVdpdGgoJCh0aGlzKS5jaGlsZHJlbigpKVxuICAgICAgfSlcbiAgICAgIHJldHVybiB0aGlzXG4gICAgfSxcbiAgICBjbG9uZTogZnVuY3Rpb24oKXtcbiAgICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbigpeyByZXR1cm4gdGhpcy5jbG9uZU5vZGUodHJ1ZSkgfSlcbiAgICB9LFxuICAgIGhpZGU6IGZ1bmN0aW9uKCl7XG4gICAgICByZXR1cm4gdGhpcy5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKVxuICAgIH0sXG4gICAgdG9nZ2xlOiBmdW5jdGlvbihzZXR0aW5nKXtcbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgICAgdmFyIGVsID0gJCh0aGlzKVxuICAgICAgICA7KHNldHRpbmcgPT09IHVuZGVmaW5lZCA/IGVsLmNzcyhcImRpc3BsYXlcIikgPT0gXCJub25lXCIgOiBzZXR0aW5nKSA/IGVsLnNob3coKSA6IGVsLmhpZGUoKVxuICAgICAgfSlcbiAgICB9LFxuICAgIHByZXY6IGZ1bmN0aW9uKHNlbGVjdG9yKXsgcmV0dXJuICQodGhpcy5wbHVjaygncHJldmlvdXNFbGVtZW50U2libGluZycpKS5maWx0ZXIoc2VsZWN0b3IgfHwgJyonKSB9LFxuICAgIG5leHQ6IGZ1bmN0aW9uKHNlbGVjdG9yKXsgcmV0dXJuICQodGhpcy5wbHVjaygnbmV4dEVsZW1lbnRTaWJsaW5nJykpLmZpbHRlcihzZWxlY3RvciB8fCAnKicpIH0sXG4gICAgaHRtbDogZnVuY3Rpb24oaHRtbCl7XG4gICAgICByZXR1cm4gaHRtbCA9PT0gdW5kZWZpbmVkID9cbiAgICAgICAgKHRoaXMubGVuZ3RoID4gMCA/IHRoaXNbMF0uaW5uZXJIVE1MIDogbnVsbCkgOlxuICAgICAgICB0aGlzLmVhY2goZnVuY3Rpb24oaWR4KXtcbiAgICAgICAgICB2YXIgb3JpZ2luSHRtbCA9IHRoaXMuaW5uZXJIVE1MXG4gICAgICAgICAgJCh0aGlzKS5lbXB0eSgpLmFwcGVuZCggZnVuY0FyZyh0aGlzLCBodG1sLCBpZHgsIG9yaWdpbkh0bWwpIClcbiAgICAgICAgfSlcbiAgICB9LFxuICAgIHRleHQ6IGZ1bmN0aW9uKHRleHQpe1xuICAgICAgcmV0dXJuIHRleHQgPT09IHVuZGVmaW5lZCA/XG4gICAgICAgICh0aGlzLmxlbmd0aCA+IDAgPyB0aGlzWzBdLnRleHRDb250ZW50IDogbnVsbCkgOlxuICAgICAgICB0aGlzLmVhY2goZnVuY3Rpb24oKXsgdGhpcy50ZXh0Q29udGVudCA9IHRleHQgfSlcbiAgICB9LFxuICAgIGF0dHI6IGZ1bmN0aW9uKG5hbWUsIHZhbHVlKXtcbiAgICAgIHZhciByZXN1bHRcbiAgICAgIHJldHVybiAodHlwZW9mIG5hbWUgPT0gJ3N0cmluZycgJiYgdmFsdWUgPT09IHVuZGVmaW5lZCkgP1xuICAgICAgICAodGhpcy5sZW5ndGggPT0gMCB8fCB0aGlzWzBdLm5vZGVUeXBlICE9PSAxID8gdW5kZWZpbmVkIDpcbiAgICAgICAgICAobmFtZSA9PSAndmFsdWUnICYmIHRoaXNbMF0ubm9kZU5hbWUgPT0gJ0lOUFVUJykgPyB0aGlzLnZhbCgpIDpcbiAgICAgICAgICAoIShyZXN1bHQgPSB0aGlzWzBdLmdldEF0dHJpYnV0ZShuYW1lKSkgJiYgbmFtZSBpbiB0aGlzWzBdKSA/IHRoaXNbMF1bbmFtZV0gOiByZXN1bHRcbiAgICAgICAgKSA6XG4gICAgICAgIHRoaXMuZWFjaChmdW5jdGlvbihpZHgpe1xuICAgICAgICAgIGlmICh0aGlzLm5vZGVUeXBlICE9PSAxKSByZXR1cm5cbiAgICAgICAgICBpZiAoaXNPYmplY3QobmFtZSkpIGZvciAoa2V5IGluIG5hbWUpIHNldEF0dHJpYnV0ZSh0aGlzLCBrZXksIG5hbWVba2V5XSlcbiAgICAgICAgICBlbHNlIHNldEF0dHJpYnV0ZSh0aGlzLCBuYW1lLCBmdW5jQXJnKHRoaXMsIHZhbHVlLCBpZHgsIHRoaXMuZ2V0QXR0cmlidXRlKG5hbWUpKSlcbiAgICAgICAgfSlcbiAgICB9LFxuICAgIHJlbW92ZUF0dHI6IGZ1bmN0aW9uKG5hbWUpe1xuICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpeyB0aGlzLm5vZGVUeXBlID09PSAxICYmIHNldEF0dHJpYnV0ZSh0aGlzLCBuYW1lKSB9KVxuICAgIH0sXG4gICAgcHJvcDogZnVuY3Rpb24obmFtZSwgdmFsdWUpe1xuICAgICAgcmV0dXJuICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSA/XG4gICAgICAgICh0aGlzWzBdICYmIHRoaXNbMF1bbmFtZV0pIDpcbiAgICAgICAgdGhpcy5lYWNoKGZ1bmN0aW9uKGlkeCl7XG4gICAgICAgICAgdGhpc1tuYW1lXSA9IGZ1bmNBcmcodGhpcywgdmFsdWUsIGlkeCwgdGhpc1tuYW1lXSlcbiAgICAgICAgfSlcbiAgICB9LFxuICAgIGRhdGE6IGZ1bmN0aW9uKG5hbWUsIHZhbHVlKXtcbiAgICAgIHZhciBkYXRhID0gdGhpcy5hdHRyKCdkYXRhLScgKyBkYXNoZXJpemUobmFtZSksIHZhbHVlKVxuICAgICAgcmV0dXJuIGRhdGEgIT09IG51bGwgPyBkZXNlcmlhbGl6ZVZhbHVlKGRhdGEpIDogdW5kZWZpbmVkXG4gICAgfSxcbiAgICB2YWw6IGZ1bmN0aW9uKHZhbHVlKXtcbiAgICAgIHJldHVybiAodmFsdWUgPT09IHVuZGVmaW5lZCkgP1xuICAgICAgICAodGhpc1swXSAmJiAodGhpc1swXS5tdWx0aXBsZSA/XG4gICAgICAgICAgICQodGhpc1swXSkuZmluZCgnb3B0aW9uJykuZmlsdGVyKGZ1bmN0aW9uKG8peyByZXR1cm4gdGhpcy5zZWxlY3RlZCB9KS5wbHVjaygndmFsdWUnKSA6XG4gICAgICAgICAgIHRoaXNbMF0udmFsdWUpXG4gICAgICAgICkgOlxuICAgICAgICB0aGlzLmVhY2goZnVuY3Rpb24oaWR4KXtcbiAgICAgICAgICB0aGlzLnZhbHVlID0gZnVuY0FyZyh0aGlzLCB2YWx1ZSwgaWR4LCB0aGlzLnZhbHVlKVxuICAgICAgICB9KVxuICAgIH0sXG4gICAgb2Zmc2V0OiBmdW5jdGlvbihjb29yZGluYXRlcyl7XG4gICAgICBpZiAoY29vcmRpbmF0ZXMpIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oaW5kZXgpe1xuICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpLFxuICAgICAgICAgICAgY29vcmRzID0gZnVuY0FyZyh0aGlzLCBjb29yZGluYXRlcywgaW5kZXgsICR0aGlzLm9mZnNldCgpKSxcbiAgICAgICAgICAgIHBhcmVudE9mZnNldCA9ICR0aGlzLm9mZnNldFBhcmVudCgpLm9mZnNldCgpLFxuICAgICAgICAgICAgcHJvcHMgPSB7XG4gICAgICAgICAgICAgIHRvcDogIGNvb3Jkcy50b3AgIC0gcGFyZW50T2Zmc2V0LnRvcCxcbiAgICAgICAgICAgICAgbGVmdDogY29vcmRzLmxlZnQgLSBwYXJlbnRPZmZzZXQubGVmdFxuICAgICAgICAgICAgfVxuXG4gICAgICAgIGlmICgkdGhpcy5jc3MoJ3Bvc2l0aW9uJykgPT0gJ3N0YXRpYycpIHByb3BzWydwb3NpdGlvbiddID0gJ3JlbGF0aXZlJ1xuICAgICAgICAkdGhpcy5jc3MocHJvcHMpXG4gICAgICB9KVxuICAgICAgaWYgKHRoaXMubGVuZ3RoPT0wKSByZXR1cm4gbnVsbFxuICAgICAgdmFyIG9iaiA9IHRoaXNbMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGxlZnQ6IG9iai5sZWZ0ICsgd2luZG93LnBhZ2VYT2Zmc2V0LFxuICAgICAgICB0b3A6IG9iai50b3AgKyB3aW5kb3cucGFnZVlPZmZzZXQsXG4gICAgICAgIHdpZHRoOiBNYXRoLnJvdW5kKG9iai53aWR0aCksXG4gICAgICAgIGhlaWdodDogTWF0aC5yb3VuZChvYmouaGVpZ2h0KVxuICAgICAgfVxuICAgIH0sXG4gICAgY3NzOiBmdW5jdGlvbihwcm9wZXJ0eSwgdmFsdWUpe1xuICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPCAyICYmIHR5cGVvZiBwcm9wZXJ0eSA9PSAnc3RyaW5nJylcbiAgICAgICAgcmV0dXJuIHRoaXNbMF0gJiYgKHRoaXNbMF0uc3R5bGVbY2FtZWxpemUocHJvcGVydHkpXSB8fCBnZXRDb21wdXRlZFN0eWxlKHRoaXNbMF0sICcnKS5nZXRQcm9wZXJ0eVZhbHVlKHByb3BlcnR5KSlcblxuICAgICAgdmFyIGNzcyA9ICcnXG4gICAgICBpZiAodHlwZShwcm9wZXJ0eSkgPT0gJ3N0cmluZycpIHtcbiAgICAgICAgaWYgKCF2YWx1ZSAmJiB2YWx1ZSAhPT0gMClcbiAgICAgICAgICB0aGlzLmVhY2goZnVuY3Rpb24oKXsgdGhpcy5zdHlsZS5yZW1vdmVQcm9wZXJ0eShkYXNoZXJpemUocHJvcGVydHkpKSB9KVxuICAgICAgICBlbHNlXG4gICAgICAgICAgY3NzID0gZGFzaGVyaXplKHByb3BlcnR5KSArIFwiOlwiICsgbWF5YmVBZGRQeChwcm9wZXJ0eSwgdmFsdWUpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb3IgKGtleSBpbiBwcm9wZXJ0eSlcbiAgICAgICAgICBpZiAoIXByb3BlcnR5W2tleV0gJiYgcHJvcGVydHlba2V5XSAhPT0gMClcbiAgICAgICAgICAgIHRoaXMuZWFjaChmdW5jdGlvbigpeyB0aGlzLnN0eWxlLnJlbW92ZVByb3BlcnR5KGRhc2hlcml6ZShrZXkpKSB9KVxuICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIGNzcyArPSBkYXNoZXJpemUoa2V5KSArICc6JyArIG1heWJlQWRkUHgoa2V5LCBwcm9wZXJ0eVtrZXldKSArICc7J1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7IHRoaXMuc3R5bGUuY3NzVGV4dCArPSAnOycgKyBjc3MgfSlcbiAgICB9LFxuICAgIGluZGV4OiBmdW5jdGlvbihlbGVtZW50KXtcbiAgICAgIHJldHVybiBlbGVtZW50ID8gdGhpcy5pbmRleE9mKCQoZWxlbWVudClbMF0pIDogdGhpcy5wYXJlbnQoKS5jaGlsZHJlbigpLmluZGV4T2YodGhpc1swXSlcbiAgICB9LFxuICAgIGhhc0NsYXNzOiBmdW5jdGlvbihuYW1lKXtcbiAgICAgIHJldHVybiBlbXB0eUFycmF5LnNvbWUuY2FsbCh0aGlzLCBmdW5jdGlvbihlbCl7XG4gICAgICAgIHJldHVybiB0aGlzLnRlc3QoY2xhc3NOYW1lKGVsKSlcbiAgICAgIH0sIGNsYXNzUkUobmFtZSkpXG4gICAgfSxcbiAgICBhZGRDbGFzczogZnVuY3Rpb24obmFtZSl7XG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKGlkeCl7XG4gICAgICAgIGNsYXNzTGlzdCA9IFtdXG4gICAgICAgIHZhciBjbHMgPSBjbGFzc05hbWUodGhpcyksIG5ld05hbWUgPSBmdW5jQXJnKHRoaXMsIG5hbWUsIGlkeCwgY2xzKVxuICAgICAgICBuZXdOYW1lLnNwbGl0KC9cXHMrL2cpLmZvckVhY2goZnVuY3Rpb24oa2xhc3Mpe1xuICAgICAgICAgIGlmICghJCh0aGlzKS5oYXNDbGFzcyhrbGFzcykpIGNsYXNzTGlzdC5wdXNoKGtsYXNzKVxuICAgICAgICB9LCB0aGlzKVxuICAgICAgICBjbGFzc0xpc3QubGVuZ3RoICYmIGNsYXNzTmFtZSh0aGlzLCBjbHMgKyAoY2xzID8gXCIgXCIgOiBcIlwiKSArIGNsYXNzTGlzdC5qb2luKFwiIFwiKSlcbiAgICAgIH0pXG4gICAgfSxcbiAgICByZW1vdmVDbGFzczogZnVuY3Rpb24obmFtZSl7XG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKGlkeCl7XG4gICAgICAgIGlmIChuYW1lID09PSB1bmRlZmluZWQpIHJldHVybiBjbGFzc05hbWUodGhpcywgJycpXG4gICAgICAgIGNsYXNzTGlzdCA9IGNsYXNzTmFtZSh0aGlzKVxuICAgICAgICBmdW5jQXJnKHRoaXMsIG5hbWUsIGlkeCwgY2xhc3NMaXN0KS5zcGxpdCgvXFxzKy9nKS5mb3JFYWNoKGZ1bmN0aW9uKGtsYXNzKXtcbiAgICAgICAgICBjbGFzc0xpc3QgPSBjbGFzc0xpc3QucmVwbGFjZShjbGFzc1JFKGtsYXNzKSwgXCIgXCIpXG4gICAgICAgIH0pXG4gICAgICAgIGNsYXNzTmFtZSh0aGlzLCBjbGFzc0xpc3QudHJpbSgpKVxuICAgICAgfSlcbiAgICB9LFxuICAgIHRvZ2dsZUNsYXNzOiBmdW5jdGlvbihuYW1lLCB3aGVuKXtcbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oaWR4KXtcbiAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKSwgbmFtZXMgPSBmdW5jQXJnKHRoaXMsIG5hbWUsIGlkeCwgY2xhc3NOYW1lKHRoaXMpKVxuICAgICAgICBuYW1lcy5zcGxpdCgvXFxzKy9nKS5mb3JFYWNoKGZ1bmN0aW9uKGtsYXNzKXtcbiAgICAgICAgICAod2hlbiA9PT0gdW5kZWZpbmVkID8gISR0aGlzLmhhc0NsYXNzKGtsYXNzKSA6IHdoZW4pID9cbiAgICAgICAgICAgICR0aGlzLmFkZENsYXNzKGtsYXNzKSA6ICR0aGlzLnJlbW92ZUNsYXNzKGtsYXNzKVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9LFxuICAgIHNjcm9sbFRvcDogZnVuY3Rpb24oKXtcbiAgICAgIGlmICghdGhpcy5sZW5ndGgpIHJldHVyblxuICAgICAgcmV0dXJuICgnc2Nyb2xsVG9wJyBpbiB0aGlzWzBdKSA/IHRoaXNbMF0uc2Nyb2xsVG9wIDogdGhpc1swXS5zY3JvbGxZXG4gICAgfSxcbiAgICBwb3NpdGlvbjogZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoIXRoaXMubGVuZ3RoKSByZXR1cm5cblxuICAgICAgdmFyIGVsZW0gPSB0aGlzWzBdLFxuICAgICAgICAvLyBHZXQgKnJlYWwqIG9mZnNldFBhcmVudFxuICAgICAgICBvZmZzZXRQYXJlbnQgPSB0aGlzLm9mZnNldFBhcmVudCgpLFxuICAgICAgICAvLyBHZXQgY29ycmVjdCBvZmZzZXRzXG4gICAgICAgIG9mZnNldCAgICAgICA9IHRoaXMub2Zmc2V0KCksXG4gICAgICAgIHBhcmVudE9mZnNldCA9IHJvb3ROb2RlUkUudGVzdChvZmZzZXRQYXJlbnRbMF0ubm9kZU5hbWUpID8geyB0b3A6IDAsIGxlZnQ6IDAgfSA6IG9mZnNldFBhcmVudC5vZmZzZXQoKVxuXG4gICAgICAvLyBTdWJ0cmFjdCBlbGVtZW50IG1hcmdpbnNcbiAgICAgIC8vIG5vdGU6IHdoZW4gYW4gZWxlbWVudCBoYXMgbWFyZ2luOiBhdXRvIHRoZSBvZmZzZXRMZWZ0IGFuZCBtYXJnaW5MZWZ0XG4gICAgICAvLyBhcmUgdGhlIHNhbWUgaW4gU2FmYXJpIGNhdXNpbmcgb2Zmc2V0LmxlZnQgdG8gaW5jb3JyZWN0bHkgYmUgMFxuICAgICAgb2Zmc2V0LnRvcCAgLT0gcGFyc2VGbG9hdCggJChlbGVtKS5jc3MoJ21hcmdpbi10b3AnKSApIHx8IDBcbiAgICAgIG9mZnNldC5sZWZ0IC09IHBhcnNlRmxvYXQoICQoZWxlbSkuY3NzKCdtYXJnaW4tbGVmdCcpICkgfHwgMFxuXG4gICAgICAvLyBBZGQgb2Zmc2V0UGFyZW50IGJvcmRlcnNcbiAgICAgIHBhcmVudE9mZnNldC50b3AgICs9IHBhcnNlRmxvYXQoICQob2Zmc2V0UGFyZW50WzBdKS5jc3MoJ2JvcmRlci10b3Atd2lkdGgnKSApIHx8IDBcbiAgICAgIHBhcmVudE9mZnNldC5sZWZ0ICs9IHBhcnNlRmxvYXQoICQob2Zmc2V0UGFyZW50WzBdKS5jc3MoJ2JvcmRlci1sZWZ0LXdpZHRoJykgKSB8fCAwXG5cbiAgICAgIC8vIFN1YnRyYWN0IHRoZSB0d28gb2Zmc2V0c1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdG9wOiAgb2Zmc2V0LnRvcCAgLSBwYXJlbnRPZmZzZXQudG9wLFxuICAgICAgICBsZWZ0OiBvZmZzZXQubGVmdCAtIHBhcmVudE9mZnNldC5sZWZ0XG4gICAgICB9XG4gICAgfSxcbiAgICBvZmZzZXRQYXJlbnQ6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uKCl7XG4gICAgICAgIHZhciBwYXJlbnQgPSB0aGlzLm9mZnNldFBhcmVudCB8fCBkb2N1bWVudC5ib2R5XG4gICAgICAgIHdoaWxlIChwYXJlbnQgJiYgIXJvb3ROb2RlUkUudGVzdChwYXJlbnQubm9kZU5hbWUpICYmICQocGFyZW50KS5jc3MoXCJwb3NpdGlvblwiKSA9PSBcInN0YXRpY1wiKVxuICAgICAgICAgIHBhcmVudCA9IHBhcmVudC5vZmZzZXRQYXJlbnRcbiAgICAgICAgcmV0dXJuIHBhcmVudFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICAvLyBmb3Igbm93XG4gICQuZm4uZGV0YWNoID0gJC5mbi5yZW1vdmVcblxuICAvLyBHZW5lcmF0ZSB0aGUgYHdpZHRoYCBhbmQgYGhlaWdodGAgZnVuY3Rpb25zXG4gIDtbJ3dpZHRoJywgJ2hlaWdodCddLmZvckVhY2goZnVuY3Rpb24oZGltZW5zaW9uKXtcbiAgICAkLmZuW2RpbWVuc2lvbl0gPSBmdW5jdGlvbih2YWx1ZSl7XG4gICAgICB2YXIgb2Zmc2V0LCBlbCA9IHRoaXNbMF0sXG4gICAgICAgIERpbWVuc2lvbiA9IGRpbWVuc2lvbi5yZXBsYWNlKC8uLywgZnVuY3Rpb24obSl7IHJldHVybiBtWzBdLnRvVXBwZXJDYXNlKCkgfSlcbiAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gaXNXaW5kb3coZWwpID8gZWxbJ2lubmVyJyArIERpbWVuc2lvbl0gOlxuICAgICAgICBpc0RvY3VtZW50KGVsKSA/IGVsLmRvY3VtZW50RWxlbWVudFsnb2Zmc2V0JyArIERpbWVuc2lvbl0gOlxuICAgICAgICAob2Zmc2V0ID0gdGhpcy5vZmZzZXQoKSkgJiYgb2Zmc2V0W2RpbWVuc2lvbl1cbiAgICAgIGVsc2UgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbihpZHgpe1xuICAgICAgICBlbCA9ICQodGhpcylcbiAgICAgICAgZWwuY3NzKGRpbWVuc2lvbiwgZnVuY0FyZyh0aGlzLCB2YWx1ZSwgaWR4LCBlbFtkaW1lbnNpb25dKCkpKVxuICAgICAgfSlcbiAgICB9XG4gIH0pXG5cbiAgZnVuY3Rpb24gdHJhdmVyc2VOb2RlKG5vZGUsIGZ1bikge1xuICAgIGZ1bihub2RlKVxuICAgIGZvciAodmFyIGtleSBpbiBub2RlLmNoaWxkTm9kZXMpIHRyYXZlcnNlTm9kZShub2RlLmNoaWxkTm9kZXNba2V5XSwgZnVuKVxuICB9XG5cbiAgLy8gR2VuZXJhdGUgdGhlIGBhZnRlcmAsIGBwcmVwZW5kYCwgYGJlZm9yZWAsIGBhcHBlbmRgLFxuICAvLyBgaW5zZXJ0QWZ0ZXJgLCBgaW5zZXJ0QmVmb3JlYCwgYGFwcGVuZFRvYCwgYW5kIGBwcmVwZW5kVG9gIG1ldGhvZHMuXG4gIGFkamFjZW5jeU9wZXJhdG9ycy5mb3JFYWNoKGZ1bmN0aW9uKG9wZXJhdG9yLCBvcGVyYXRvckluZGV4KSB7XG4gICAgdmFyIGluc2lkZSA9IG9wZXJhdG9ySW5kZXggJSAyIC8vPT4gcHJlcGVuZCwgYXBwZW5kXG5cbiAgICAkLmZuW29wZXJhdG9yXSA9IGZ1bmN0aW9uKCl7XG4gICAgICAvLyBhcmd1bWVudHMgY2FuIGJlIG5vZGVzLCBhcnJheXMgb2Ygbm9kZXMsIFplcHRvIG9iamVjdHMgYW5kIEhUTUwgc3RyaW5nc1xuICAgICAgdmFyIGFyZ1R5cGUsIG5vZGVzID0gJC5tYXAoYXJndW1lbnRzLCBmdW5jdGlvbihhcmcpIHtcbiAgICAgICAgICAgIGFyZ1R5cGUgPSB0eXBlKGFyZylcbiAgICAgICAgICAgIHJldHVybiBhcmdUeXBlID09IFwib2JqZWN0XCIgfHwgYXJnVHlwZSA9PSBcImFycmF5XCIgfHwgYXJnID09IG51bGwgP1xuICAgICAgICAgICAgICBhcmcgOiB6ZXB0by5mcmFnbWVudChhcmcpXG4gICAgICAgICAgfSksXG4gICAgICAgICAgcGFyZW50LCBjb3B5QnlDbG9uZSA9IHRoaXMubGVuZ3RoID4gMVxuICAgICAgaWYgKG5vZGVzLmxlbmd0aCA8IDEpIHJldHVybiB0aGlzXG5cbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oXywgdGFyZ2V0KXtcbiAgICAgICAgcGFyZW50ID0gaW5zaWRlID8gdGFyZ2V0IDogdGFyZ2V0LnBhcmVudE5vZGVcblxuICAgICAgICAvLyBjb252ZXJ0IGFsbCBtZXRob2RzIHRvIGEgXCJiZWZvcmVcIiBvcGVyYXRpb25cbiAgICAgICAgdGFyZ2V0ID0gb3BlcmF0b3JJbmRleCA9PSAwID8gdGFyZ2V0Lm5leHRTaWJsaW5nIDpcbiAgICAgICAgICAgICAgICAgb3BlcmF0b3JJbmRleCA9PSAxID8gdGFyZ2V0LmZpcnN0Q2hpbGQgOlxuICAgICAgICAgICAgICAgICBvcGVyYXRvckluZGV4ID09IDIgPyB0YXJnZXQgOlxuICAgICAgICAgICAgICAgICBudWxsXG5cbiAgICAgICAgbm9kZXMuZm9yRWFjaChmdW5jdGlvbihub2RlKXtcbiAgICAgICAgICBpZiAoY29weUJ5Q2xvbmUpIG5vZGUgPSBub2RlLmNsb25lTm9kZSh0cnVlKVxuICAgICAgICAgIGVsc2UgaWYgKCFwYXJlbnQpIHJldHVybiAkKG5vZGUpLnJlbW92ZSgpXG5cbiAgICAgICAgICB0cmF2ZXJzZU5vZGUocGFyZW50Lmluc2VydEJlZm9yZShub2RlLCB0YXJnZXQpLCBmdW5jdGlvbihlbCl7XG4gICAgICAgICAgICBpZiAoZWwubm9kZU5hbWUgIT0gbnVsbCAmJiBlbC5ub2RlTmFtZS50b1VwcGVyQ2FzZSgpID09PSAnU0NSSVBUJyAmJlxuICAgICAgICAgICAgICAgKCFlbC50eXBlIHx8IGVsLnR5cGUgPT09ICd0ZXh0L2phdmFzY3JpcHQnKSAmJiAhZWwuc3JjKVxuICAgICAgICAgICAgICB3aW5kb3dbJ2V2YWwnXS5jYWxsKHdpbmRvdywgZWwuaW5uZXJIVE1MKVxuICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH1cblxuICAgIC8vIGFmdGVyICAgID0+IGluc2VydEFmdGVyXG4gICAgLy8gcHJlcGVuZCAgPT4gcHJlcGVuZFRvXG4gICAgLy8gYmVmb3JlICAgPT4gaW5zZXJ0QmVmb3JlXG4gICAgLy8gYXBwZW5kICAgPT4gYXBwZW5kVG9cbiAgICAkLmZuW2luc2lkZSA/IG9wZXJhdG9yKydUbycgOiAnaW5zZXJ0Jysob3BlcmF0b3JJbmRleCA/ICdCZWZvcmUnIDogJ0FmdGVyJyldID0gZnVuY3Rpb24oaHRtbCl7XG4gICAgICAkKGh0bWwpW29wZXJhdG9yXSh0aGlzKVxuICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG4gIH0pXG5cbiAgemVwdG8uWi5wcm90b3R5cGUgPSAkLmZuXG5cbiAgLy8gRXhwb3J0IGludGVybmFsIEFQSSBmdW5jdGlvbnMgaW4gdGhlIGAkLnplcHRvYCBuYW1lc3BhY2VcbiAgemVwdG8udW5pcSA9IHVuaXFcbiAgemVwdG8uZGVzZXJpYWxpemVWYWx1ZSA9IGRlc2VyaWFsaXplVmFsdWVcbiAgJC56ZXB0byA9IHplcHRvXG5cbiAgcmV0dXJuICRcbn0pKClcblxuLy8gQEAgb3JpZ2luYWwgbG9hZGVyXG4vLyB3aW5kb3cuWmVwdG8gPSBaZXB0b1xuLy8gJyQnIGluIHdpbmRvdyB8fCAod2luZG93LiQgPSBaZXB0bylcbi8vIEBAIG1vZGlmaWVkIGJ5IGppeWlueWl5b25nXG5tb2R1bGUuZXhwb3J0cy4kID0gWmVwdG87XG5tb2R1bGUuZXhwb3J0cy5aZXB0byA9IFplcHRvO1xuLy8gQEAgbW9kaWZpY2F0aW9ucyBlbmRcblxuXG47KGZ1bmN0aW9uKCQpe1xuICBmdW5jdGlvbiBkZXRlY3QodWEpe1xuICAgIHZhciBvcyA9IHRoaXMub3MgPSB7fSwgYnJvd3NlciA9IHRoaXMuYnJvd3NlciA9IHt9LFxuICAgICAgd2Via2l0ID0gdWEubWF0Y2goL1dlYktpdFxcLyhbXFxkLl0rKS8pLFxuICAgICAgYW5kcm9pZCA9IHVhLm1hdGNoKC8oQW5kcm9pZClcXHMrKFtcXGQuXSspLyksXG4gICAgICBpcGFkID0gdWEubWF0Y2goLyhpUGFkKS4qT1NcXHMoW1xcZF9dKykvKSxcbiAgICAgIGlwaG9uZSA9ICFpcGFkICYmIHVhLm1hdGNoKC8oaVBob25lXFxzT1MpXFxzKFtcXGRfXSspLyksXG4gICAgICB3ZWJvcyA9IHVhLm1hdGNoKC8od2ViT1N8aHB3T1MpW1xcc1xcL10oW1xcZC5dKykvKSxcbiAgICAgIHRvdWNocGFkID0gd2Vib3MgJiYgdWEubWF0Y2goL1RvdWNoUGFkLyksXG4gICAgICBraW5kbGUgPSB1YS5tYXRjaCgvS2luZGxlXFwvKFtcXGQuXSspLyksXG4gICAgICBzaWxrID0gdWEubWF0Y2goL1NpbGtcXC8oW1xcZC5fXSspLyksXG4gICAgICBibGFja2JlcnJ5ID0gdWEubWF0Y2goLyhCbGFja0JlcnJ5KS4qVmVyc2lvblxcLyhbXFxkLl0rKS8pLFxuICAgICAgYmIxMCA9IHVhLm1hdGNoKC8oQkIxMCkuKlZlcnNpb25cXC8oW1xcZC5dKykvKSxcbiAgICAgIHJpbXRhYmxldG9zID0gdWEubWF0Y2goLyhSSU1cXHNUYWJsZXRcXHNPUylcXHMoW1xcZC5dKykvKSxcbiAgICAgIHBsYXlib29rID0gdWEubWF0Y2goL1BsYXlCb29rLyksXG4gICAgICBjaHJvbWUgPSB1YS5tYXRjaCgvQ2hyb21lXFwvKFtcXGQuXSspLykgfHwgdWEubWF0Y2goL0NyaU9TXFwvKFtcXGQuXSspLyksXG4gICAgICBmaXJlZm94ID0gdWEubWF0Y2goL0ZpcmVmb3hcXC8oW1xcZC5dKykvKVxuXG4gICAgLy8gVG9kbzogY2xlYW4gdGhpcyB1cCB3aXRoIGEgYmV0dGVyIE9TL2Jyb3dzZXIgc2VwZXJhdGlvbjpcbiAgICAvLyAtIGRpc2Nlcm4gKG1vcmUpIGJldHdlZW4gbXVsdGlwbGUgYnJvd3NlcnMgb24gYW5kcm9pZFxuICAgIC8vIC0gZGVjaWRlIGlmIGtpbmRsZSBmaXJlIGluIHNpbGsgbW9kZSBpcyBhbmRyb2lkIG9yIG5vdFxuICAgIC8vIC0gRmlyZWZveCBvbiBBbmRyb2lkIGRvZXNuJ3Qgc3BlY2lmeSB0aGUgQW5kcm9pZCB2ZXJzaW9uXG4gICAgLy8gLSBwb3NzaWJseSBkZXZpZGUgaW4gb3MsIGRldmljZSBhbmQgYnJvd3NlciBoYXNoZXNcblxuICAgIGlmIChicm93c2VyLndlYmtpdCA9ICEhd2Via2l0KSBicm93c2VyLnZlcnNpb24gPSB3ZWJraXRbMV1cblxuICAgIGlmIChhbmRyb2lkKSBvcy5hbmRyb2lkID0gdHJ1ZSwgb3MudmVyc2lvbiA9IGFuZHJvaWRbMl1cbiAgICBpZiAoaXBob25lKSBvcy5pb3MgPSBvcy5pcGhvbmUgPSB0cnVlLCBvcy52ZXJzaW9uID0gaXBob25lWzJdLnJlcGxhY2UoL18vZywgJy4nKVxuICAgIGlmIChpcGFkKSBvcy5pb3MgPSBvcy5pcGFkID0gdHJ1ZSwgb3MudmVyc2lvbiA9IGlwYWRbMl0ucmVwbGFjZSgvXy9nLCAnLicpXG4gICAgaWYgKHdlYm9zKSBvcy53ZWJvcyA9IHRydWUsIG9zLnZlcnNpb24gPSB3ZWJvc1syXVxuICAgIGlmICh0b3VjaHBhZCkgb3MudG91Y2hwYWQgPSB0cnVlXG4gICAgaWYgKGJsYWNrYmVycnkpIG9zLmJsYWNrYmVycnkgPSB0cnVlLCBvcy52ZXJzaW9uID0gYmxhY2tiZXJyeVsyXVxuICAgIGlmIChiYjEwKSBvcy5iYjEwID0gdHJ1ZSwgb3MudmVyc2lvbiA9IGJiMTBbMl1cbiAgICBpZiAocmltdGFibGV0b3MpIG9zLnJpbXRhYmxldG9zID0gdHJ1ZSwgb3MudmVyc2lvbiA9IHJpbXRhYmxldG9zWzJdXG4gICAgaWYgKHBsYXlib29rKSBicm93c2VyLnBsYXlib29rID0gdHJ1ZVxuICAgIGlmIChraW5kbGUpIG9zLmtpbmRsZSA9IHRydWUsIG9zLnZlcnNpb24gPSBraW5kbGVbMV1cbiAgICBpZiAoc2lsaykgYnJvd3Nlci5zaWxrID0gdHJ1ZSwgYnJvd3Nlci52ZXJzaW9uID0gc2lsa1sxXVxuICAgIGlmICghc2lsayAmJiBvcy5hbmRyb2lkICYmIHVhLm1hdGNoKC9LaW5kbGUgRmlyZS8pKSBicm93c2VyLnNpbGsgPSB0cnVlXG4gICAgaWYgKGNocm9tZSkgYnJvd3Nlci5jaHJvbWUgPSB0cnVlLCBicm93c2VyLnZlcnNpb24gPSBjaHJvbWVbMV1cbiAgICBpZiAoZmlyZWZveCkgYnJvd3Nlci5maXJlZm94ID0gdHJ1ZSwgYnJvd3Nlci52ZXJzaW9uID0gZmlyZWZveFsxXVxuXG4gICAgb3MudGFibGV0ID0gISEoaXBhZCB8fCBwbGF5Ym9vayB8fCAoYW5kcm9pZCAmJiAhdWEubWF0Y2goL01vYmlsZS8pKSB8fCAoZmlyZWZveCAmJiB1YS5tYXRjaCgvVGFibGV0LykpKVxuICAgIG9zLnBob25lICA9ICEhKCFvcy50YWJsZXQgJiYgKGFuZHJvaWQgfHwgaXBob25lIHx8IHdlYm9zIHx8IGJsYWNrYmVycnkgfHwgYmIxMCB8fFxuICAgICAgKGNocm9tZSAmJiB1YS5tYXRjaCgvQW5kcm9pZC8pKSB8fCAoY2hyb21lICYmIHVhLm1hdGNoKC9DcmlPU1xcLyhbXFxkLl0rKS8pKSB8fCAoZmlyZWZveCAmJiB1YS5tYXRjaCgvTW9iaWxlLykpKSlcbiAgfVxuXG4gIGRldGVjdC5jYWxsKCQsIG5hdmlnYXRvci51c2VyQWdlbnQpXG4gIC8vIG1ha2UgYXZhaWxhYmxlIHRvIHVuaXQgdGVzdHNcbiAgJC5fX2RldGVjdCA9IGRldGVjdFxuXG59KShaZXB0bylcblxuXG5cblxuXG47KGZ1bmN0aW9uKCQpe1xuICB2YXIgJCQgPSAkLnplcHRvLnFzYSwgaGFuZGxlcnMgPSB7fSwgX3ppZCA9IDEsIHNwZWNpYWxFdmVudHM9e30sXG4gICAgICBob3ZlciA9IHsgbW91c2VlbnRlcjogJ21vdXNlb3ZlcicsIG1vdXNlbGVhdmU6ICdtb3VzZW91dCcgfVxuXG4gIHNwZWNpYWxFdmVudHMuY2xpY2sgPSBzcGVjaWFsRXZlbnRzLm1vdXNlZG93biA9IHNwZWNpYWxFdmVudHMubW91c2V1cCA9IHNwZWNpYWxFdmVudHMubW91c2Vtb3ZlID0gJ01vdXNlRXZlbnRzJ1xuXG4gIGZ1bmN0aW9uIHppZChlbGVtZW50KSB7XG4gICAgcmV0dXJuIGVsZW1lbnQuX3ppZCB8fCAoZWxlbWVudC5femlkID0gX3ppZCsrKVxuICB9XG4gIGZ1bmN0aW9uIGZpbmRIYW5kbGVycyhlbGVtZW50LCBldmVudCwgZm4sIHNlbGVjdG9yKSB7XG4gICAgZXZlbnQgPSBwYXJzZShldmVudClcbiAgICBpZiAoZXZlbnQubnMpIHZhciBtYXRjaGVyID0gbWF0Y2hlckZvcihldmVudC5ucylcbiAgICByZXR1cm4gKGhhbmRsZXJzW3ppZChlbGVtZW50KV0gfHwgW10pLmZpbHRlcihmdW5jdGlvbihoYW5kbGVyKSB7XG4gICAgICByZXR1cm4gaGFuZGxlclxuICAgICAgICAmJiAoIWV2ZW50LmUgIHx8IGhhbmRsZXIuZSA9PSBldmVudC5lKVxuICAgICAgICAmJiAoIWV2ZW50Lm5zIHx8IG1hdGNoZXIudGVzdChoYW5kbGVyLm5zKSlcbiAgICAgICAgJiYgKCFmbiAgICAgICB8fCB6aWQoaGFuZGxlci5mbikgPT09IHppZChmbikpXG4gICAgICAgICYmICghc2VsZWN0b3IgfHwgaGFuZGxlci5zZWwgPT0gc2VsZWN0b3IpXG4gICAgfSlcbiAgfVxuICBmdW5jdGlvbiBwYXJzZShldmVudCkge1xuICAgIHZhciBwYXJ0cyA9ICgnJyArIGV2ZW50KS5zcGxpdCgnLicpXG4gICAgcmV0dXJuIHtlOiBwYXJ0c1swXSwgbnM6IHBhcnRzLnNsaWNlKDEpLnNvcnQoKS5qb2luKCcgJyl9XG4gIH1cbiAgZnVuY3Rpb24gbWF0Y2hlckZvcihucykge1xuICAgIHJldHVybiBuZXcgUmVnRXhwKCcoPzpefCApJyArIG5zLnJlcGxhY2UoJyAnLCAnIC4qID8nKSArICcoPzogfCQpJylcbiAgfVxuXG4gIGZ1bmN0aW9uIGVhY2hFdmVudChldmVudHMsIGZuLCBpdGVyYXRvcil7XG4gICAgaWYgKCQudHlwZShldmVudHMpICE9IFwic3RyaW5nXCIpICQuZWFjaChldmVudHMsIGl0ZXJhdG9yKVxuICAgIGVsc2UgZXZlbnRzLnNwbGl0KC9cXHMvKS5mb3JFYWNoKGZ1bmN0aW9uKHR5cGUpeyBpdGVyYXRvcih0eXBlLCBmbikgfSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGV2ZW50Q2FwdHVyZShoYW5kbGVyLCBjYXB0dXJlU2V0dGluZykge1xuICAgIHJldHVybiBoYW5kbGVyLmRlbCAmJlxuICAgICAgKGhhbmRsZXIuZSA9PSAnZm9jdXMnIHx8IGhhbmRsZXIuZSA9PSAnYmx1cicpIHx8XG4gICAgICAhIWNhcHR1cmVTZXR0aW5nXG4gIH1cblxuICBmdW5jdGlvbiByZWFsRXZlbnQodHlwZSkge1xuICAgIHJldHVybiBob3Zlclt0eXBlXSB8fCB0eXBlXG4gIH1cblxuICBmdW5jdGlvbiBhZGQoZWxlbWVudCwgZXZlbnRzLCBmbiwgc2VsZWN0b3IsIGdldERlbGVnYXRlLCBjYXB0dXJlKXtcbiAgICB2YXIgaWQgPSB6aWQoZWxlbWVudCksIHNldCA9IChoYW5kbGVyc1tpZF0gfHwgKGhhbmRsZXJzW2lkXSA9IFtdKSlcbiAgICBlYWNoRXZlbnQoZXZlbnRzLCBmbiwgZnVuY3Rpb24oZXZlbnQsIGZuKXtcbiAgICAgIHZhciBoYW5kbGVyICAgPSBwYXJzZShldmVudClcbiAgICAgIGhhbmRsZXIuZm4gICAgPSBmblxuICAgICAgaGFuZGxlci5zZWwgICA9IHNlbGVjdG9yXG4gICAgICAvLyBlbXVsYXRlIG1vdXNlZW50ZXIsIG1vdXNlbGVhdmVcbiAgICAgIGlmIChoYW5kbGVyLmUgaW4gaG92ZXIpIGZuID0gZnVuY3Rpb24oZSl7XG4gICAgICAgIHZhciByZWxhdGVkID0gZS5yZWxhdGVkVGFyZ2V0XG4gICAgICAgIGlmICghcmVsYXRlZCB8fCAocmVsYXRlZCAhPT0gdGhpcyAmJiAhJC5jb250YWlucyh0aGlzLCByZWxhdGVkKSkpXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZXIuZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKVxuICAgICAgfVxuICAgICAgaGFuZGxlci5kZWwgICA9IGdldERlbGVnYXRlICYmIGdldERlbGVnYXRlKGZuLCBldmVudClcbiAgICAgIHZhciBjYWxsYmFjayAgPSBoYW5kbGVyLmRlbCB8fCBmblxuICAgICAgaGFuZGxlci5wcm94eSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBjYWxsYmFjay5hcHBseShlbGVtZW50LCBbZV0uY29uY2F0KGUuZGF0YSkpXG4gICAgICAgIGlmIChyZXN1bHQgPT09IGZhbHNlKSBlLnByZXZlbnREZWZhdWx0KCksIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgICAgfVxuICAgICAgaGFuZGxlci5pID0gc2V0Lmxlbmd0aFxuICAgICAgc2V0LnB1c2goaGFuZGxlcilcbiAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihyZWFsRXZlbnQoaGFuZGxlci5lKSwgaGFuZGxlci5wcm94eSwgZXZlbnRDYXB0dXJlKGhhbmRsZXIsIGNhcHR1cmUpKVxuICAgIH0pXG4gIH1cbiAgZnVuY3Rpb24gcmVtb3ZlKGVsZW1lbnQsIGV2ZW50cywgZm4sIHNlbGVjdG9yLCBjYXB0dXJlKXtcbiAgICB2YXIgaWQgPSB6aWQoZWxlbWVudClcbiAgICBlYWNoRXZlbnQoZXZlbnRzIHx8ICcnLCBmbiwgZnVuY3Rpb24oZXZlbnQsIGZuKXtcbiAgICAgIGZpbmRIYW5kbGVycyhlbGVtZW50LCBldmVudCwgZm4sIHNlbGVjdG9yKS5mb3JFYWNoKGZ1bmN0aW9uKGhhbmRsZXIpe1xuICAgICAgICBkZWxldGUgaGFuZGxlcnNbaWRdW2hhbmRsZXIuaV1cbiAgICAgICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHJlYWxFdmVudChoYW5kbGVyLmUpLCBoYW5kbGVyLnByb3h5LCBldmVudENhcHR1cmUoaGFuZGxlciwgY2FwdHVyZSkpXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICAkLmV2ZW50ID0geyBhZGQ6IGFkZCwgcmVtb3ZlOiByZW1vdmUgfVxuXG4gICQucHJveHkgPSBmdW5jdGlvbihmbiwgY29udGV4dCkge1xuICAgIGlmICgkLmlzRnVuY3Rpb24oZm4pKSB7XG4gICAgICB2YXIgcHJveHlGbiA9IGZ1bmN0aW9uKCl7IHJldHVybiBmbi5hcHBseShjb250ZXh0LCBhcmd1bWVudHMpIH1cbiAgICAgIHByb3h5Rm4uX3ppZCA9IHppZChmbilcbiAgICAgIHJldHVybiBwcm94eUZuXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgY29udGV4dCA9PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuICQucHJveHkoZm5bY29udGV4dF0sIGZuKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiZXhwZWN0ZWQgZnVuY3Rpb25cIilcbiAgICB9XG4gIH1cblxuICAkLmZuLmJpbmQgPSBmdW5jdGlvbihldmVudCwgY2FsbGJhY2spe1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgIGFkZCh0aGlzLCBldmVudCwgY2FsbGJhY2spXG4gICAgfSlcbiAgfVxuICAkLmZuLnVuYmluZCA9IGZ1bmN0aW9uKGV2ZW50LCBjYWxsYmFjayl7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe1xuICAgICAgcmVtb3ZlKHRoaXMsIGV2ZW50LCBjYWxsYmFjaylcbiAgICB9KVxuICB9XG4gICQuZm4ub25lID0gZnVuY3Rpb24oZXZlbnQsIGNhbGxiYWNrKXtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKGksIGVsZW1lbnQpe1xuICAgICAgYWRkKHRoaXMsIGV2ZW50LCBjYWxsYmFjaywgbnVsbCwgZnVuY3Rpb24oZm4sIHR5cGUpe1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24oKXtcbiAgICAgICAgICB2YXIgcmVzdWx0ID0gZm4uYXBwbHkoZWxlbWVudCwgYXJndW1lbnRzKVxuICAgICAgICAgIHJlbW92ZShlbGVtZW50LCB0eXBlLCBmbilcbiAgICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIHZhciByZXR1cm5UcnVlID0gZnVuY3Rpb24oKXtyZXR1cm4gdHJ1ZX0sXG4gICAgICByZXR1cm5GYWxzZSA9IGZ1bmN0aW9uKCl7cmV0dXJuIGZhbHNlfSxcbiAgICAgIGlnbm9yZVByb3BlcnRpZXMgPSAvXihbQS1aXXxsYXllcltYWV0kKS8sXG4gICAgICBldmVudE1ldGhvZHMgPSB7XG4gICAgICAgIHByZXZlbnREZWZhdWx0OiAnaXNEZWZhdWx0UHJldmVudGVkJyxcbiAgICAgICAgc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uOiAnaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQnLFxuICAgICAgICBzdG9wUHJvcGFnYXRpb246ICdpc1Byb3BhZ2F0aW9uU3RvcHBlZCdcbiAgICAgIH1cbiAgZnVuY3Rpb24gY3JlYXRlUHJveHkoZXZlbnQpIHtcbiAgICB2YXIga2V5LCBwcm94eSA9IHsgb3JpZ2luYWxFdmVudDogZXZlbnQgfVxuICAgIGZvciAoa2V5IGluIGV2ZW50KVxuICAgICAgaWYgKCFpZ25vcmVQcm9wZXJ0aWVzLnRlc3Qoa2V5KSAmJiBldmVudFtrZXldICE9PSB1bmRlZmluZWQpIHByb3h5W2tleV0gPSBldmVudFtrZXldXG5cbiAgICAkLmVhY2goZXZlbnRNZXRob2RzLCBmdW5jdGlvbihuYW1lLCBwcmVkaWNhdGUpIHtcbiAgICAgIHByb3h5W25hbWVdID0gZnVuY3Rpb24oKXtcbiAgICAgICAgdGhpc1twcmVkaWNhdGVdID0gcmV0dXJuVHJ1ZVxuICAgICAgICByZXR1cm4gZXZlbnRbbmFtZV0uYXBwbHkoZXZlbnQsIGFyZ3VtZW50cylcbiAgICAgIH1cbiAgICAgIHByb3h5W3ByZWRpY2F0ZV0gPSByZXR1cm5GYWxzZVxuICAgIH0pXG4gICAgcmV0dXJuIHByb3h5XG4gIH1cblxuICAvLyBlbXVsYXRlcyB0aGUgJ2RlZmF1bHRQcmV2ZW50ZWQnIHByb3BlcnR5IGZvciBicm93c2VycyB0aGF0IGhhdmUgbm9uZVxuICBmdW5jdGlvbiBmaXgoZXZlbnQpIHtcbiAgICBpZiAoISgnZGVmYXVsdFByZXZlbnRlZCcgaW4gZXZlbnQpKSB7XG4gICAgICBldmVudC5kZWZhdWx0UHJldmVudGVkID0gZmFsc2VcbiAgICAgIHZhciBwcmV2ZW50ID0gZXZlbnQucHJldmVudERlZmF1bHRcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuZGVmYXVsdFByZXZlbnRlZCA9IHRydWVcbiAgICAgICAgcHJldmVudC5jYWxsKHRoaXMpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgJC5mbi5kZWxlZ2F0ZSA9IGZ1bmN0aW9uKHNlbGVjdG9yLCBldmVudCwgY2FsbGJhY2spe1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oaSwgZWxlbWVudCl7XG4gICAgICBhZGQoZWxlbWVudCwgZXZlbnQsIGNhbGxiYWNrLCBzZWxlY3RvciwgZnVuY3Rpb24oZm4pe1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24oZSl7XG4gICAgICAgICAgdmFyIGV2dCwgbWF0Y2ggPSAkKGUudGFyZ2V0KS5jbG9zZXN0KHNlbGVjdG9yLCBlbGVtZW50KS5nZXQoMClcbiAgICAgICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgICAgIGV2dCA9ICQuZXh0ZW5kKGNyZWF0ZVByb3h5KGUpLCB7Y3VycmVudFRhcmdldDogbWF0Y2gsIGxpdmVGaXJlZDogZWxlbWVudH0pXG4gICAgICAgICAgICByZXR1cm4gZm4uYXBwbHkobWF0Y2gsIFtldnRdLmNvbmNhdChbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSkpKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuICB9XG4gICQuZm4udW5kZWxlZ2F0ZSA9IGZ1bmN0aW9uKHNlbGVjdG9yLCBldmVudCwgY2FsbGJhY2spe1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgIHJlbW92ZSh0aGlzLCBldmVudCwgY2FsbGJhY2ssIHNlbGVjdG9yKVxuICAgIH0pXG4gIH1cblxuICAkLmZuLmxpdmUgPSBmdW5jdGlvbihldmVudCwgY2FsbGJhY2spe1xuICAgICQoZG9jdW1lbnQuYm9keSkuZGVsZWdhdGUodGhpcy5zZWxlY3RvciwgZXZlbnQsIGNhbGxiYWNrKVxuICAgIHJldHVybiB0aGlzXG4gIH1cbiAgJC5mbi5kaWUgPSBmdW5jdGlvbihldmVudCwgY2FsbGJhY2spe1xuICAgICQoZG9jdW1lbnQuYm9keSkudW5kZWxlZ2F0ZSh0aGlzLnNlbGVjdG9yLCBldmVudCwgY2FsbGJhY2spXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gICQuZm4ub24gPSBmdW5jdGlvbihldmVudCwgc2VsZWN0b3IsIGNhbGxiYWNrKXtcbiAgICByZXR1cm4gIXNlbGVjdG9yIHx8ICQuaXNGdW5jdGlvbihzZWxlY3RvcikgP1xuICAgICAgdGhpcy5iaW5kKGV2ZW50LCBzZWxlY3RvciB8fCBjYWxsYmFjaykgOiB0aGlzLmRlbGVnYXRlKHNlbGVjdG9yLCBldmVudCwgY2FsbGJhY2spXG4gIH1cbiAgJC5mbi5vZmYgPSBmdW5jdGlvbihldmVudCwgc2VsZWN0b3IsIGNhbGxiYWNrKXtcbiAgICByZXR1cm4gIXNlbGVjdG9yIHx8ICQuaXNGdW5jdGlvbihzZWxlY3RvcikgP1xuICAgICAgdGhpcy51bmJpbmQoZXZlbnQsIHNlbGVjdG9yIHx8IGNhbGxiYWNrKSA6IHRoaXMudW5kZWxlZ2F0ZShzZWxlY3RvciwgZXZlbnQsIGNhbGxiYWNrKVxuICB9XG5cbiAgJC5mbi50cmlnZ2VyID0gZnVuY3Rpb24oZXZlbnQsIGRhdGEpe1xuICAgIGlmICh0eXBlb2YgZXZlbnQgPT0gJ3N0cmluZycgfHwgJC5pc1BsYWluT2JqZWN0KGV2ZW50KSkgZXZlbnQgPSAkLkV2ZW50KGV2ZW50KVxuICAgIGZpeChldmVudClcbiAgICBldmVudC5kYXRhID0gZGF0YVxuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgIC8vIGl0ZW1zIGluIHRoZSBjb2xsZWN0aW9uIG1pZ2h0IG5vdCBiZSBET00gZWxlbWVudHNcbiAgICAgIC8vICh0b2RvOiBwb3NzaWJseSBzdXBwb3J0IGV2ZW50cyBvbiBwbGFpbiBvbGQgb2JqZWN0cylcbiAgICAgIGlmKCdkaXNwYXRjaEV2ZW50JyBpbiB0aGlzKSB0aGlzLmRpc3BhdGNoRXZlbnQoZXZlbnQpXG4gICAgfSlcbiAgfVxuXG4gIC8vIHRyaWdnZXJzIGV2ZW50IGhhbmRsZXJzIG9uIGN1cnJlbnQgZWxlbWVudCBqdXN0IGFzIGlmIGFuIGV2ZW50IG9jY3VycmVkLFxuICAvLyBkb2Vzbid0IHRyaWdnZXIgYW4gYWN0dWFsIGV2ZW50LCBkb2Vzbid0IGJ1YmJsZVxuICAkLmZuLnRyaWdnZXJIYW5kbGVyID0gZnVuY3Rpb24oZXZlbnQsIGRhdGEpe1xuICAgIHZhciBlLCByZXN1bHRcbiAgICB0aGlzLmVhY2goZnVuY3Rpb24oaSwgZWxlbWVudCl7XG4gICAgICBlID0gY3JlYXRlUHJveHkodHlwZW9mIGV2ZW50ID09ICdzdHJpbmcnID8gJC5FdmVudChldmVudCkgOiBldmVudClcbiAgICAgIGUuZGF0YSA9IGRhdGFcbiAgICAgIGUudGFyZ2V0ID0gZWxlbWVudFxuICAgICAgJC5lYWNoKGZpbmRIYW5kbGVycyhlbGVtZW50LCBldmVudC50eXBlIHx8IGV2ZW50KSwgZnVuY3Rpb24oaSwgaGFuZGxlcil7XG4gICAgICAgIHJlc3VsdCA9IGhhbmRsZXIucHJveHkoZSlcbiAgICAgICAgaWYgKGUuaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQoKSkgcmV0dXJuIGZhbHNlXG4gICAgICB9KVxuICAgIH0pXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG5cbiAgLy8gc2hvcnRjdXQgbWV0aG9kcyBmb3IgYC5iaW5kKGV2ZW50LCBmbilgIGZvciBlYWNoIGV2ZW50IHR5cGVcbiAgOygnZm9jdXNpbiBmb2N1c291dCBsb2FkIHJlc2l6ZSBzY3JvbGwgdW5sb2FkIGNsaWNrIGRibGNsaWNrICcrXG4gICdtb3VzZWRvd24gbW91c2V1cCBtb3VzZW1vdmUgbW91c2VvdmVyIG1vdXNlb3V0IG1vdXNlZW50ZXIgbW91c2VsZWF2ZSAnK1xuICAnY2hhbmdlIHNlbGVjdCBrZXlkb3duIGtleXByZXNzIGtleXVwIGVycm9yJykuc3BsaXQoJyAnKS5mb3JFYWNoKGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgJC5mbltldmVudF0gPSBmdW5jdGlvbihjYWxsYmFjaykge1xuICAgICAgcmV0dXJuIGNhbGxiYWNrID9cbiAgICAgICAgdGhpcy5iaW5kKGV2ZW50LCBjYWxsYmFjaykgOlxuICAgICAgICB0aGlzLnRyaWdnZXIoZXZlbnQpXG4gICAgfVxuICB9KVxuXG4gIDtbJ2ZvY3VzJywgJ2JsdXInXS5mb3JFYWNoKGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAkLmZuW25hbWVdID0gZnVuY3Rpb24oY2FsbGJhY2spIHtcbiAgICAgIGlmIChjYWxsYmFjaykgdGhpcy5iaW5kKG5hbWUsIGNhbGxiYWNrKVxuICAgICAgZWxzZSB0aGlzLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgICAgdHJ5IHsgdGhpc1tuYW1lXSgpIH1cbiAgICAgICAgY2F0Y2goZSkge31cbiAgICAgIH0pXG4gICAgICByZXR1cm4gdGhpc1xuICAgIH1cbiAgfSlcblxuICAkLkV2ZW50ID0gZnVuY3Rpb24odHlwZSwgcHJvcHMpIHtcbiAgICBpZiAodHlwZW9mIHR5cGUgIT0gJ3N0cmluZycpIHByb3BzID0gdHlwZSwgdHlwZSA9IHByb3BzLnR5cGVcbiAgICB2YXIgZXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudChzcGVjaWFsRXZlbnRzW3R5cGVdIHx8ICdFdmVudHMnKSwgYnViYmxlcyA9IHRydWVcbiAgICBpZiAocHJvcHMpIGZvciAodmFyIG5hbWUgaW4gcHJvcHMpIChuYW1lID09ICdidWJibGVzJykgPyAoYnViYmxlcyA9ICEhcHJvcHNbbmFtZV0pIDogKGV2ZW50W25hbWVdID0gcHJvcHNbbmFtZV0pXG4gICAgZXZlbnQuaW5pdEV2ZW50KHR5cGUsIGJ1YmJsZXMsIHRydWUsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwpXG4gICAgZXZlbnQuaXNEZWZhdWx0UHJldmVudGVkID0gZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXMuZGVmYXVsdFByZXZlbnRlZCB9XG4gICAgcmV0dXJuIGV2ZW50XG4gIH1cblxufSkoWmVwdG8pXG5cblxuXG5cblxuOyhmdW5jdGlvbigkKXtcbiAgdmFyIGpzb25wSUQgPSAwLFxuICAgICAgZG9jdW1lbnQgPSB3aW5kb3cuZG9jdW1lbnQsXG4gICAgICBrZXksXG4gICAgICBuYW1lLFxuICAgICAgcnNjcmlwdCA9IC88c2NyaXB0XFxiW148XSooPzooPyE8XFwvc2NyaXB0Pik8W148XSopKjxcXC9zY3JpcHQ+L2dpLFxuICAgICAgc2NyaXB0VHlwZVJFID0gL14oPzp0ZXh0fGFwcGxpY2F0aW9uKVxcL2phdmFzY3JpcHQvaSxcbiAgICAgIHhtbFR5cGVSRSA9IC9eKD86dGV4dHxhcHBsaWNhdGlvbilcXC94bWwvaSxcbiAgICAgIGpzb25UeXBlID0gJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgaHRtbFR5cGUgPSAndGV4dC9odG1sJyxcbiAgICAgIGJsYW5rUkUgPSAvXlxccyokL1xuXG4gIC8vIHRyaWdnZXIgYSBjdXN0b20gZXZlbnQgYW5kIHJldHVybiBmYWxzZSBpZiBpdCB3YXMgY2FuY2VsbGVkXG4gIGZ1bmN0aW9uIHRyaWdnZXJBbmRSZXR1cm4oY29udGV4dCwgZXZlbnROYW1lLCBkYXRhKSB7XG4gICAgdmFyIGV2ZW50ID0gJC5FdmVudChldmVudE5hbWUpXG4gICAgJChjb250ZXh0KS50cmlnZ2VyKGV2ZW50LCBkYXRhKVxuICAgIHJldHVybiAhZXZlbnQuZGVmYXVsdFByZXZlbnRlZFxuICB9XG5cbiAgLy8gdHJpZ2dlciBhbiBBamF4IFwiZ2xvYmFsXCIgZXZlbnRcbiAgZnVuY3Rpb24gdHJpZ2dlckdsb2JhbChzZXR0aW5ncywgY29udGV4dCwgZXZlbnROYW1lLCBkYXRhKSB7XG4gICAgaWYgKHNldHRpbmdzLmdsb2JhbCkgcmV0dXJuIHRyaWdnZXJBbmRSZXR1cm4oY29udGV4dCB8fCBkb2N1bWVudCwgZXZlbnROYW1lLCBkYXRhKVxuICB9XG5cbiAgLy8gTnVtYmVyIG9mIGFjdGl2ZSBBamF4IHJlcXVlc3RzXG4gICQuYWN0aXZlID0gMFxuXG4gIGZ1bmN0aW9uIGFqYXhTdGFydChzZXR0aW5ncykge1xuICAgIGlmIChzZXR0aW5ncy5nbG9iYWwgJiYgJC5hY3RpdmUrKyA9PT0gMCkgdHJpZ2dlckdsb2JhbChzZXR0aW5ncywgbnVsbCwgJ2FqYXhTdGFydCcpXG4gIH1cbiAgZnVuY3Rpb24gYWpheFN0b3Aoc2V0dGluZ3MpIHtcbiAgICBpZiAoc2V0dGluZ3MuZ2xvYmFsICYmICEoLS0kLmFjdGl2ZSkpIHRyaWdnZXJHbG9iYWwoc2V0dGluZ3MsIG51bGwsICdhamF4U3RvcCcpXG4gIH1cblxuICAvLyB0cmlnZ2VycyBhbiBleHRyYSBnbG9iYWwgZXZlbnQgXCJhamF4QmVmb3JlU2VuZFwiIHRoYXQncyBsaWtlIFwiYWpheFNlbmRcIiBidXQgY2FuY2VsYWJsZVxuICBmdW5jdGlvbiBhamF4QmVmb3JlU2VuZCh4aHIsIHNldHRpbmdzKSB7XG4gICAgdmFyIGNvbnRleHQgPSBzZXR0aW5ncy5jb250ZXh0XG4gICAgaWYgKHNldHRpbmdzLmJlZm9yZVNlbmQuY2FsbChjb250ZXh0LCB4aHIsIHNldHRpbmdzKSA9PT0gZmFsc2UgfHxcbiAgICAgICAgdHJpZ2dlckdsb2JhbChzZXR0aW5ncywgY29udGV4dCwgJ2FqYXhCZWZvcmVTZW5kJywgW3hociwgc2V0dGluZ3NdKSA9PT0gZmFsc2UpXG4gICAgICByZXR1cm4gZmFsc2VcblxuICAgIHRyaWdnZXJHbG9iYWwoc2V0dGluZ3MsIGNvbnRleHQsICdhamF4U2VuZCcsIFt4aHIsIHNldHRpbmdzXSlcbiAgfVxuICBmdW5jdGlvbiBhamF4U3VjY2VzcyhkYXRhLCB4aHIsIHNldHRpbmdzKSB7XG4gICAgdmFyIGNvbnRleHQgPSBzZXR0aW5ncy5jb250ZXh0LCBzdGF0dXMgPSAnc3VjY2VzcydcbiAgICBzZXR0aW5ncy5zdWNjZXNzLmNhbGwoY29udGV4dCwgZGF0YSwgc3RhdHVzLCB4aHIpXG4gICAgdHJpZ2dlckdsb2JhbChzZXR0aW5ncywgY29udGV4dCwgJ2FqYXhTdWNjZXNzJywgW3hociwgc2V0dGluZ3MsIGRhdGFdKVxuICAgIGFqYXhDb21wbGV0ZShzdGF0dXMsIHhociwgc2V0dGluZ3MpXG4gIH1cbiAgLy8gdHlwZTogXCJ0aW1lb3V0XCIsIFwiZXJyb3JcIiwgXCJhYm9ydFwiLCBcInBhcnNlcmVycm9yXCJcbiAgZnVuY3Rpb24gYWpheEVycm9yKGVycm9yLCB0eXBlLCB4aHIsIHNldHRpbmdzKSB7XG4gICAgdmFyIGNvbnRleHQgPSBzZXR0aW5ncy5jb250ZXh0XG4gICAgc2V0dGluZ3MuZXJyb3IuY2FsbChjb250ZXh0LCB4aHIsIHR5cGUsIGVycm9yKVxuICAgIHRyaWdnZXJHbG9iYWwoc2V0dGluZ3MsIGNvbnRleHQsICdhamF4RXJyb3InLCBbeGhyLCBzZXR0aW5ncywgZXJyb3JdKVxuICAgIGFqYXhDb21wbGV0ZSh0eXBlLCB4aHIsIHNldHRpbmdzKVxuICB9XG4gIC8vIHN0YXR1czogXCJzdWNjZXNzXCIsIFwibm90bW9kaWZpZWRcIiwgXCJlcnJvclwiLCBcInRpbWVvdXRcIiwgXCJhYm9ydFwiLCBcInBhcnNlcmVycm9yXCJcbiAgZnVuY3Rpb24gYWpheENvbXBsZXRlKHN0YXR1cywgeGhyLCBzZXR0aW5ncykge1xuICAgIHZhciBjb250ZXh0ID0gc2V0dGluZ3MuY29udGV4dFxuICAgIHNldHRpbmdzLmNvbXBsZXRlLmNhbGwoY29udGV4dCwgeGhyLCBzdGF0dXMpXG4gICAgdHJpZ2dlckdsb2JhbChzZXR0aW5ncywgY29udGV4dCwgJ2FqYXhDb21wbGV0ZScsIFt4aHIsIHNldHRpbmdzXSlcbiAgICBhamF4U3RvcChzZXR0aW5ncylcbiAgfVxuXG4gIC8vIEVtcHR5IGZ1bmN0aW9uLCB1c2VkIGFzIGRlZmF1bHQgY2FsbGJhY2tcbiAgZnVuY3Rpb24gZW1wdHkoKSB7fVxuXG4gICQuYWpheEpTT05QID0gZnVuY3Rpb24ob3B0aW9ucyl7XG4gICAgaWYgKCEoJ3R5cGUnIGluIG9wdGlvbnMpKSByZXR1cm4gJC5hamF4KG9wdGlvbnMpXG5cbiAgICB2YXIgY2FsbGJhY2tOYW1lID0gJ2pzb25wJyArICgrK2pzb25wSUQpLFxuICAgICAgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0JyksXG4gICAgICBjbGVhbnVwID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGNsZWFyVGltZW91dChhYm9ydFRpbWVvdXQpXG4gICAgICAgICQoc2NyaXB0KS5yZW1vdmUoKVxuICAgICAgICBkZWxldGUgd2luZG93W2NhbGxiYWNrTmFtZV1cbiAgICAgIH0sXG4gICAgICBhYm9ydCA9IGZ1bmN0aW9uKHR5cGUpe1xuICAgICAgICBjbGVhbnVwKClcbiAgICAgICAgLy8gSW4gY2FzZSBvZiBtYW51YWwgYWJvcnQgb3IgdGltZW91dCwga2VlcCBhbiBlbXB0eSBmdW5jdGlvbiBhcyBjYWxsYmFja1xuICAgICAgICAvLyBzbyB0aGF0IHRoZSBTQ1JJUFQgdGFnIHRoYXQgZXZlbnR1YWxseSBsb2FkcyB3b24ndCByZXN1bHQgaW4gYW4gZXJyb3IuXG4gICAgICAgIGlmICghdHlwZSB8fCB0eXBlID09ICd0aW1lb3V0Jykgd2luZG93W2NhbGxiYWNrTmFtZV0gPSBlbXB0eVxuICAgICAgICBhamF4RXJyb3IobnVsbCwgdHlwZSB8fCAnYWJvcnQnLCB4aHIsIG9wdGlvbnMpXG4gICAgICB9LFxuICAgICAgeGhyID0geyBhYm9ydDogYWJvcnQgfSwgYWJvcnRUaW1lb3V0XG5cbiAgICBpZiAoYWpheEJlZm9yZVNlbmQoeGhyLCBvcHRpb25zKSA9PT0gZmFsc2UpIHtcbiAgICAgIGFib3J0KCdhYm9ydCcpXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICB3aW5kb3dbY2FsbGJhY2tOYW1lXSA9IGZ1bmN0aW9uKGRhdGEpe1xuICAgICAgY2xlYW51cCgpXG4gICAgICBhamF4U3VjY2VzcyhkYXRhLCB4aHIsIG9wdGlvbnMpXG4gICAgfVxuXG4gICAgc2NyaXB0Lm9uZXJyb3IgPSBmdW5jdGlvbigpIHsgYWJvcnQoJ2Vycm9yJykgfVxuXG4gICAgc2NyaXB0LnNyYyA9IG9wdGlvbnMudXJsLnJlcGxhY2UoLz1cXD8vLCAnPScgKyBjYWxsYmFja05hbWUpXG4gICAgJCgnaGVhZCcpLmFwcGVuZChzY3JpcHQpXG5cbiAgICBpZiAob3B0aW9ucy50aW1lb3V0ID4gMCkgYWJvcnRUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgYWJvcnQoJ3RpbWVvdXQnKVxuICAgIH0sIG9wdGlvbnMudGltZW91dClcblxuICAgIHJldHVybiB4aHJcbiAgfVxuXG4gICQuYWpheFNldHRpbmdzID0ge1xuICAgIC8vIERlZmF1bHQgdHlwZSBvZiByZXF1ZXN0XG4gICAgdHlwZTogJ0dFVCcsXG4gICAgLy8gQ2FsbGJhY2sgdGhhdCBpcyBleGVjdXRlZCBiZWZvcmUgcmVxdWVzdFxuICAgIGJlZm9yZVNlbmQ6IGVtcHR5LFxuICAgIC8vIENhbGxiYWNrIHRoYXQgaXMgZXhlY3V0ZWQgaWYgdGhlIHJlcXVlc3Qgc3VjY2VlZHNcbiAgICBzdWNjZXNzOiBlbXB0eSxcbiAgICAvLyBDYWxsYmFjayB0aGF0IGlzIGV4ZWN1dGVkIHRoZSB0aGUgc2VydmVyIGRyb3BzIGVycm9yXG4gICAgZXJyb3I6IGVtcHR5LFxuICAgIC8vIENhbGxiYWNrIHRoYXQgaXMgZXhlY3V0ZWQgb24gcmVxdWVzdCBjb21wbGV0ZSAoYm90aDogZXJyb3IgYW5kIHN1Y2Nlc3MpXG4gICAgY29tcGxldGU6IGVtcHR5LFxuICAgIC8vIFRoZSBjb250ZXh0IGZvciB0aGUgY2FsbGJhY2tzXG4gICAgY29udGV4dDogbnVsbCxcbiAgICAvLyBXaGV0aGVyIHRvIHRyaWdnZXIgXCJnbG9iYWxcIiBBamF4IGV2ZW50c1xuICAgIGdsb2JhbDogdHJ1ZSxcbiAgICAvLyBUcmFuc3BvcnRcbiAgICB4aHI6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBuZXcgd2luZG93LlhNTEh0dHBSZXF1ZXN0KClcbiAgICB9LFxuICAgIC8vIE1JTUUgdHlwZXMgbWFwcGluZ1xuICAgIGFjY2VwdHM6IHtcbiAgICAgIHNjcmlwdDogJ3RleHQvamF2YXNjcmlwdCwgYXBwbGljYXRpb24vamF2YXNjcmlwdCcsXG4gICAgICBqc29uOiAgIGpzb25UeXBlLFxuICAgICAgeG1sOiAgICAnYXBwbGljYXRpb24veG1sLCB0ZXh0L3htbCcsXG4gICAgICBodG1sOiAgIGh0bWxUeXBlLFxuICAgICAgdGV4dDogICAndGV4dC9wbGFpbidcbiAgICB9LFxuICAgIC8vIFdoZXRoZXIgdGhlIHJlcXVlc3QgaXMgdG8gYW5vdGhlciBkb21haW5cbiAgICBjcm9zc0RvbWFpbjogZmFsc2UsXG4gICAgLy8gRGVmYXVsdCB0aW1lb3V0XG4gICAgdGltZW91dDogMCxcbiAgICAvLyBXaGV0aGVyIGRhdGEgc2hvdWxkIGJlIHNlcmlhbGl6ZWQgdG8gc3RyaW5nXG4gICAgcHJvY2Vzc0RhdGE6IHRydWUsXG4gICAgLy8gV2hldGhlciB0aGUgYnJvd3NlciBzaG91bGQgYmUgYWxsb3dlZCB0byBjYWNoZSBHRVQgcmVzcG9uc2VzXG4gICAgY2FjaGU6IHRydWUsXG4gIH1cblxuICBmdW5jdGlvbiBtaW1lVG9EYXRhVHlwZShtaW1lKSB7XG4gICAgaWYgKG1pbWUpIG1pbWUgPSBtaW1lLnNwbGl0KCc7JywgMilbMF1cbiAgICByZXR1cm4gbWltZSAmJiAoIG1pbWUgPT0gaHRtbFR5cGUgPyAnaHRtbCcgOlxuICAgICAgbWltZSA9PSBqc29uVHlwZSA/ICdqc29uJyA6XG4gICAgICBzY3JpcHRUeXBlUkUudGVzdChtaW1lKSA/ICdzY3JpcHQnIDpcbiAgICAgIHhtbFR5cGVSRS50ZXN0KG1pbWUpICYmICd4bWwnICkgfHwgJ3RleHQnXG4gIH1cblxuICBmdW5jdGlvbiBhcHBlbmRRdWVyeSh1cmwsIHF1ZXJ5KSB7XG4gICAgcmV0dXJuICh1cmwgKyAnJicgKyBxdWVyeSkucmVwbGFjZSgvWyY/XXsxLDJ9LywgJz8nKVxuICB9XG5cbiAgLy8gc2VyaWFsaXplIHBheWxvYWQgYW5kIGFwcGVuZCBpdCB0byB0aGUgVVJMIGZvciBHRVQgcmVxdWVzdHNcbiAgZnVuY3Rpb24gc2VyaWFsaXplRGF0YShvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMucHJvY2Vzc0RhdGEgJiYgb3B0aW9ucy5kYXRhICYmICQudHlwZShvcHRpb25zLmRhdGEpICE9IFwic3RyaW5nXCIpXG4gICAgICBvcHRpb25zLmRhdGEgPSAkLnBhcmFtKG9wdGlvbnMuZGF0YSwgb3B0aW9ucy50cmFkaXRpb25hbClcbiAgICBpZiAob3B0aW9ucy5kYXRhICYmICghb3B0aW9ucy50eXBlIHx8IG9wdGlvbnMudHlwZS50b1VwcGVyQ2FzZSgpID09ICdHRVQnKSlcbiAgICAgIG9wdGlvbnMudXJsID0gYXBwZW5kUXVlcnkob3B0aW9ucy51cmwsIG9wdGlvbnMuZGF0YSlcbiAgfVxuXG4gICQuYWpheCA9IGZ1bmN0aW9uKG9wdGlvbnMpe1xuICAgIHZhciBzZXR0aW5ncyA9ICQuZXh0ZW5kKHt9LCBvcHRpb25zIHx8IHt9KVxuICAgIGZvciAoa2V5IGluICQuYWpheFNldHRpbmdzKSBpZiAoc2V0dGluZ3Nba2V5XSA9PT0gdW5kZWZpbmVkKSBzZXR0aW5nc1trZXldID0gJC5hamF4U2V0dGluZ3Nba2V5XVxuXG4gICAgYWpheFN0YXJ0KHNldHRpbmdzKVxuXG4gICAgaWYgKCFzZXR0aW5ncy5jcm9zc0RvbWFpbikgc2V0dGluZ3MuY3Jvc3NEb21haW4gPSAvXihbXFx3LV0rOik/XFwvXFwvKFteXFwvXSspLy50ZXN0KHNldHRpbmdzLnVybCkgJiZcbiAgICAgIFJlZ0V4cC4kMiAhPSB3aW5kb3cubG9jYXRpb24uaG9zdFxuXG4gICAgaWYgKCFzZXR0aW5ncy51cmwpIHNldHRpbmdzLnVybCA9IHdpbmRvdy5sb2NhdGlvbi50b1N0cmluZygpXG4gICAgc2VyaWFsaXplRGF0YShzZXR0aW5ncylcbiAgICBpZiAoc2V0dGluZ3MuY2FjaGUgPT09IGZhbHNlKSBzZXR0aW5ncy51cmwgPSBhcHBlbmRRdWVyeShzZXR0aW5ncy51cmwsICdfPScgKyBEYXRlLm5vdygpKVxuXG4gICAgdmFyIGRhdGFUeXBlID0gc2V0dGluZ3MuZGF0YVR5cGUsIGhhc1BsYWNlaG9sZGVyID0gLz1cXD8vLnRlc3Qoc2V0dGluZ3MudXJsKVxuICAgIGlmIChkYXRhVHlwZSA9PSAnanNvbnAnIHx8IGhhc1BsYWNlaG9sZGVyKSB7XG4gICAgICBpZiAoIWhhc1BsYWNlaG9sZGVyKSBzZXR0aW5ncy51cmwgPSBhcHBlbmRRdWVyeShzZXR0aW5ncy51cmwsICdjYWxsYmFjaz0/JylcbiAgICAgIHJldHVybiAkLmFqYXhKU09OUChzZXR0aW5ncylcbiAgICB9XG5cbiAgICB2YXIgbWltZSA9IHNldHRpbmdzLmFjY2VwdHNbZGF0YVR5cGVdLFxuICAgICAgICBiYXNlSGVhZGVycyA9IHsgfSxcbiAgICAgICAgcHJvdG9jb2wgPSAvXihbXFx3LV0rOilcXC9cXC8vLnRlc3Qoc2V0dGluZ3MudXJsKSA/IFJlZ0V4cC4kMSA6IHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbCxcbiAgICAgICAgeGhyID0gc2V0dGluZ3MueGhyKCksIGFib3J0VGltZW91dFxuXG4gICAgaWYgKCFzZXR0aW5ncy5jcm9zc0RvbWFpbikgYmFzZUhlYWRlcnNbJ1gtUmVxdWVzdGVkLVdpdGgnXSA9ICdYTUxIdHRwUmVxdWVzdCdcbiAgICBpZiAobWltZSkge1xuICAgICAgYmFzZUhlYWRlcnNbJ0FjY2VwdCddID0gbWltZVxuICAgICAgaWYgKG1pbWUuaW5kZXhPZignLCcpID4gLTEpIG1pbWUgPSBtaW1lLnNwbGl0KCcsJywgMilbMF1cbiAgICAgIHhoci5vdmVycmlkZU1pbWVUeXBlICYmIHhoci5vdmVycmlkZU1pbWVUeXBlKG1pbWUpXG4gICAgfVxuICAgIGlmIChzZXR0aW5ncy5jb250ZW50VHlwZSB8fCAoc2V0dGluZ3MuY29udGVudFR5cGUgIT09IGZhbHNlICYmIHNldHRpbmdzLmRhdGEgJiYgc2V0dGluZ3MudHlwZS50b1VwcGVyQ2FzZSgpICE9ICdHRVQnKSlcbiAgICAgIGJhc2VIZWFkZXJzWydDb250ZW50LVR5cGUnXSA9IChzZXR0aW5ncy5jb250ZW50VHlwZSB8fCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJylcbiAgICBzZXR0aW5ncy5oZWFkZXJzID0gJC5leHRlbmQoYmFzZUhlYWRlcnMsIHNldHRpbmdzLmhlYWRlcnMgfHwge30pXG5cbiAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKXtcbiAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PSA0KSB7XG4gICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBlbXB0eTtcbiAgICAgICAgY2xlYXJUaW1lb3V0KGFib3J0VGltZW91dClcbiAgICAgICAgdmFyIHJlc3VsdCwgZXJyb3IgPSBmYWxzZVxuICAgICAgICBpZiAoKHhoci5zdGF0dXMgPj0gMjAwICYmIHhoci5zdGF0dXMgPCAzMDApIHx8IHhoci5zdGF0dXMgPT0gMzA0IHx8ICh4aHIuc3RhdHVzID09IDAgJiYgcHJvdG9jb2wgPT0gJ2ZpbGU6JykpIHtcbiAgICAgICAgICBkYXRhVHlwZSA9IGRhdGFUeXBlIHx8IG1pbWVUb0RhdGFUeXBlKHhoci5nZXRSZXNwb25zZUhlYWRlcignY29udGVudC10eXBlJykpXG4gICAgICAgICAgcmVzdWx0ID0geGhyLnJlc3BvbnNlVGV4dFxuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIGh0dHA6Ly9wZXJmZWN0aW9ua2lsbHMuY29tL2dsb2JhbC1ldmFsLXdoYXQtYXJlLXRoZS1vcHRpb25zL1xuICAgICAgICAgICAgaWYgKGRhdGFUeXBlID09ICdzY3JpcHQnKSAgICAoMSxldmFsKShyZXN1bHQpXG4gICAgICAgICAgICBlbHNlIGlmIChkYXRhVHlwZSA9PSAneG1sJykgIHJlc3VsdCA9IHhoci5yZXNwb25zZVhNTFxuICAgICAgICAgICAgZWxzZSBpZiAoZGF0YVR5cGUgPT0gJ2pzb24nKSByZXN1bHQgPSBibGFua1JFLnRlc3QocmVzdWx0KSA/IG51bGwgOiAkLnBhcnNlSlNPTihyZXN1bHQpXG4gICAgICAgICAgfSBjYXRjaCAoZSkgeyBlcnJvciA9IGUgfVxuXG4gICAgICAgICAgaWYgKGVycm9yKSBhamF4RXJyb3IoZXJyb3IsICdwYXJzZXJlcnJvcicsIHhociwgc2V0dGluZ3MpXG4gICAgICAgICAgZWxzZSBhamF4U3VjY2VzcyhyZXN1bHQsIHhociwgc2V0dGluZ3MpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYWpheEVycm9yKG51bGwsIHhoci5zdGF0dXMgPyAnZXJyb3InIDogJ2Fib3J0JywgeGhyLCBzZXR0aW5ncylcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBhc3luYyA9ICdhc3luYycgaW4gc2V0dGluZ3MgPyBzZXR0aW5ncy5hc3luYyA6IHRydWVcbiAgICB4aHIub3BlbihzZXR0aW5ncy50eXBlLCBzZXR0aW5ncy51cmwsIGFzeW5jKVxuXG4gICAgZm9yIChuYW1lIGluIHNldHRpbmdzLmhlYWRlcnMpIHhoci5zZXRSZXF1ZXN0SGVhZGVyKG5hbWUsIHNldHRpbmdzLmhlYWRlcnNbbmFtZV0pXG5cbiAgICBpZiAoYWpheEJlZm9yZVNlbmQoeGhyLCBzZXR0aW5ncykgPT09IGZhbHNlKSB7XG4gICAgICB4aHIuYWJvcnQoKVxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgaWYgKHNldHRpbmdzLnRpbWVvdXQgPiAwKSBhYm9ydFRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBlbXB0eVxuICAgICAgICB4aHIuYWJvcnQoKVxuICAgICAgICBhamF4RXJyb3IobnVsbCwgJ3RpbWVvdXQnLCB4aHIsIHNldHRpbmdzKVxuICAgICAgfSwgc2V0dGluZ3MudGltZW91dClcblxuICAgIC8vIGF2b2lkIHNlbmRpbmcgZW1wdHkgc3RyaW5nICgjMzE5KVxuICAgIHhoci5zZW5kKHNldHRpbmdzLmRhdGEgPyBzZXR0aW5ncy5kYXRhIDogbnVsbClcbiAgICByZXR1cm4geGhyXG4gIH1cblxuICAvLyBoYW5kbGUgb3B0aW9uYWwgZGF0YS9zdWNjZXNzIGFyZ3VtZW50c1xuICBmdW5jdGlvbiBwYXJzZUFyZ3VtZW50cyh1cmwsIGRhdGEsIHN1Y2Nlc3MsIGRhdGFUeXBlKSB7XG4gICAgdmFyIGhhc0RhdGEgPSAhJC5pc0Z1bmN0aW9uKGRhdGEpXG4gICAgcmV0dXJuIHtcbiAgICAgIHVybDogICAgICB1cmwsXG4gICAgICBkYXRhOiAgICAgaGFzRGF0YSAgPyBkYXRhIDogdW5kZWZpbmVkLFxuICAgICAgc3VjY2VzczogICFoYXNEYXRhID8gZGF0YSA6ICQuaXNGdW5jdGlvbihzdWNjZXNzKSA/IHN1Y2Nlc3MgOiB1bmRlZmluZWQsXG4gICAgICBkYXRhVHlwZTogaGFzRGF0YSAgPyBkYXRhVHlwZSB8fCBzdWNjZXNzIDogc3VjY2Vzc1xuICAgIH1cbiAgfVxuXG4gICQuZ2V0ID0gZnVuY3Rpb24odXJsLCBkYXRhLCBzdWNjZXNzLCBkYXRhVHlwZSl7XG4gICAgcmV0dXJuICQuYWpheChwYXJzZUFyZ3VtZW50cy5hcHBseShudWxsLCBhcmd1bWVudHMpKVxuICB9XG5cbiAgJC5wb3N0ID0gZnVuY3Rpb24odXJsLCBkYXRhLCBzdWNjZXNzLCBkYXRhVHlwZSl7XG4gICAgdmFyIG9wdGlvbnMgPSBwYXJzZUFyZ3VtZW50cy5hcHBseShudWxsLCBhcmd1bWVudHMpXG4gICAgb3B0aW9ucy50eXBlID0gJ1BPU1QnXG4gICAgcmV0dXJuICQuYWpheChvcHRpb25zKVxuICB9XG5cbiAgJC5nZXRKU09OID0gZnVuY3Rpb24odXJsLCBkYXRhLCBzdWNjZXNzKXtcbiAgICB2YXIgb3B0aW9ucyA9IHBhcnNlQXJndW1lbnRzLmFwcGx5KG51bGwsIGFyZ3VtZW50cylcbiAgICBvcHRpb25zLmRhdGFUeXBlID0gJ2pzb24nXG4gICAgcmV0dXJuICQuYWpheChvcHRpb25zKVxuICB9XG5cbiAgJC5mbi5sb2FkID0gZnVuY3Rpb24odXJsLCBkYXRhLCBzdWNjZXNzKXtcbiAgICBpZiAoIXRoaXMubGVuZ3RoKSByZXR1cm4gdGhpc1xuICAgIHZhciBzZWxmID0gdGhpcywgcGFydHMgPSB1cmwuc3BsaXQoL1xccy8pLCBzZWxlY3RvcixcbiAgICAgICAgb3B0aW9ucyA9IHBhcnNlQXJndW1lbnRzKHVybCwgZGF0YSwgc3VjY2VzcyksXG4gICAgICAgIGNhbGxiYWNrID0gb3B0aW9ucy5zdWNjZXNzXG4gICAgaWYgKHBhcnRzLmxlbmd0aCA+IDEpIG9wdGlvbnMudXJsID0gcGFydHNbMF0sIHNlbGVjdG9yID0gcGFydHNbMV1cbiAgICBvcHRpb25zLnN1Y2Nlc3MgPSBmdW5jdGlvbihyZXNwb25zZSl7XG4gICAgICBzZWxmLmh0bWwoc2VsZWN0b3IgP1xuICAgICAgICAkKCc8ZGl2PicpLmh0bWwocmVzcG9uc2UucmVwbGFjZShyc2NyaXB0LCBcIlwiKSkuZmluZChzZWxlY3RvcilcbiAgICAgICAgOiByZXNwb25zZSlcbiAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrLmFwcGx5KHNlbGYsIGFyZ3VtZW50cylcbiAgICB9XG4gICAgJC5hamF4KG9wdGlvbnMpXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIHZhciBlc2NhcGUgPSBlbmNvZGVVUklDb21wb25lbnRcblxuICBmdW5jdGlvbiBzZXJpYWxpemUocGFyYW1zLCBvYmosIHRyYWRpdGlvbmFsLCBzY29wZSl7XG4gICAgdmFyIHR5cGUsIGFycmF5ID0gJC5pc0FycmF5KG9iailcbiAgICAkLmVhY2gob2JqLCBmdW5jdGlvbihrZXksIHZhbHVlKSB7XG4gICAgICB0eXBlID0gJC50eXBlKHZhbHVlKVxuICAgICAgaWYgKHNjb3BlKSBrZXkgPSB0cmFkaXRpb25hbCA/IHNjb3BlIDogc2NvcGUgKyAnWycgKyAoYXJyYXkgPyAnJyA6IGtleSkgKyAnXSdcbiAgICAgIC8vIGhhbmRsZSBkYXRhIGluIHNlcmlhbGl6ZUFycmF5KCkgZm9ybWF0XG4gICAgICBpZiAoIXNjb3BlICYmIGFycmF5KSBwYXJhbXMuYWRkKHZhbHVlLm5hbWUsIHZhbHVlLnZhbHVlKVxuICAgICAgLy8gcmVjdXJzZSBpbnRvIG5lc3RlZCBvYmplY3RzXG4gICAgICBlbHNlIGlmICh0eXBlID09IFwiYXJyYXlcIiB8fCAoIXRyYWRpdGlvbmFsICYmIHR5cGUgPT0gXCJvYmplY3RcIikpXG4gICAgICAgIHNlcmlhbGl6ZShwYXJhbXMsIHZhbHVlLCB0cmFkaXRpb25hbCwga2V5KVxuICAgICAgZWxzZSBwYXJhbXMuYWRkKGtleSwgdmFsdWUpXG4gICAgfSlcbiAgfVxuXG4gICQucGFyYW0gPSBmdW5jdGlvbihvYmosIHRyYWRpdGlvbmFsKXtcbiAgICB2YXIgcGFyYW1zID0gW11cbiAgICBwYXJhbXMuYWRkID0gZnVuY3Rpb24oaywgdil7IHRoaXMucHVzaChlc2NhcGUoaykgKyAnPScgKyBlc2NhcGUodikpIH1cbiAgICBzZXJpYWxpemUocGFyYW1zLCBvYmosIHRyYWRpdGlvbmFsKVxuICAgIHJldHVybiBwYXJhbXMuam9pbignJicpLnJlcGxhY2UoLyUyMC9nLCAnKycpXG4gIH1cbn0pKFplcHRvKVxuXG5cblxuXG5cbjsoZnVuY3Rpb24gKCQpIHtcbiAgJC5mbi5zZXJpYWxpemVBcnJheSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcmVzdWx0ID0gW10sIGVsXG4gICAgJCggQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwodGhpcy5nZXQoMCkuZWxlbWVudHMpICkuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBlbCA9ICQodGhpcylcbiAgICAgIHZhciB0eXBlID0gZWwuYXR0cigndHlwZScpXG4gICAgICBpZiAodGhpcy5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpICE9ICdmaWVsZHNldCcgJiZcbiAgICAgICAgIXRoaXMuZGlzYWJsZWQgJiYgdHlwZSAhPSAnc3VibWl0JyAmJiB0eXBlICE9ICdyZXNldCcgJiYgdHlwZSAhPSAnYnV0dG9uJyAmJlxuICAgICAgICAoKHR5cGUgIT0gJ3JhZGlvJyAmJiB0eXBlICE9ICdjaGVja2JveCcpIHx8IHRoaXMuY2hlY2tlZCkpXG4gICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICBuYW1lOiBlbC5hdHRyKCduYW1lJyksXG4gICAgICAgICAgdmFsdWU6IGVsLnZhbCgpXG4gICAgICAgIH0pXG4gICAgfSlcbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cblxuICAkLmZuLnNlcmlhbGl6ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcmVzdWx0ID0gW11cbiAgICB0aGlzLnNlcmlhbGl6ZUFycmF5KCkuZm9yRWFjaChmdW5jdGlvbiAoZWxtKSB7XG4gICAgICByZXN1bHQucHVzaCggZW5jb2RlVVJJQ29tcG9uZW50KGVsbS5uYW1lKSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudChlbG0udmFsdWUpIClcbiAgICB9KVxuICAgIHJldHVybiByZXN1bHQuam9pbignJicpXG4gIH1cblxuICAkLmZuLnN1Ym1pdCA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgIGlmIChjYWxsYmFjaykgdGhpcy5iaW5kKCdzdWJtaXQnLCBjYWxsYmFjaylcbiAgICBlbHNlIGlmICh0aGlzLmxlbmd0aCkge1xuICAgICAgdmFyIGV2ZW50ID0gJC5FdmVudCgnc3VibWl0JylcbiAgICAgIHRoaXMuZXEoMCkudHJpZ2dlcihldmVudClcbiAgICAgIGlmICghZXZlbnQuZGVmYXVsdFByZXZlbnRlZCkgdGhpcy5nZXQoMCkuc3VibWl0KClcbiAgICB9XG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG59KShaZXB0bylcblxuXG5cblxuXG47KGZ1bmN0aW9uKCQsIHVuZGVmaW5lZCl7XG4gIHZhciBwcmVmaXggPSAnJywgZXZlbnRQcmVmaXgsIGVuZEV2ZW50TmFtZSwgZW5kQW5pbWF0aW9uTmFtZSxcbiAgICB2ZW5kb3JzID0geyBXZWJraXQ6ICd3ZWJraXQnLCBNb3o6ICcnLCBPOiAnbycsIG1zOiAnTVMnIH0sXG4gICAgZG9jdW1lbnQgPSB3aW5kb3cuZG9jdW1lbnQsIHRlc3RFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxuICAgIHN1cHBvcnRlZFRyYW5zZm9ybXMgPSAvXigodHJhbnNsYXRlfHJvdGF0ZXxzY2FsZSkoWHxZfFp8M2QpP3xtYXRyaXgoM2QpP3xwZXJzcGVjdGl2ZXxza2V3KFh8WSk/KSQvaSxcbiAgICB0cmFuc2Zvcm0sXG4gICAgdHJhbnNpdGlvblByb3BlcnR5LCB0cmFuc2l0aW9uRHVyYXRpb24sIHRyYW5zaXRpb25UaW1pbmcsXG4gICAgYW5pbWF0aW9uTmFtZSwgYW5pbWF0aW9uRHVyYXRpb24sIGFuaW1hdGlvblRpbWluZyxcbiAgICBjc3NSZXNldCA9IHt9XG5cbiAgZnVuY3Rpb24gZGFzaGVyaXplKHN0cikgeyByZXR1cm4gZG93bmNhc2Uoc3RyLnJlcGxhY2UoLyhbYS16XSkoW0EtWl0pLywgJyQxLSQyJykpIH1cbiAgZnVuY3Rpb24gZG93bmNhc2Uoc3RyKSB7IHJldHVybiBzdHIudG9Mb3dlckNhc2UoKSB9XG4gIGZ1bmN0aW9uIG5vcm1hbGl6ZUV2ZW50KG5hbWUpIHsgcmV0dXJuIGV2ZW50UHJlZml4ID8gZXZlbnRQcmVmaXggKyBuYW1lIDogZG93bmNhc2UobmFtZSkgfVxuXG4gICQuZWFjaCh2ZW5kb3JzLCBmdW5jdGlvbih2ZW5kb3IsIGV2ZW50KXtcbiAgICBpZiAodGVzdEVsLnN0eWxlW3ZlbmRvciArICdUcmFuc2l0aW9uUHJvcGVydHknXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBwcmVmaXggPSAnLScgKyBkb3duY2FzZSh2ZW5kb3IpICsgJy0nXG4gICAgICBldmVudFByZWZpeCA9IGV2ZW50XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gIH0pXG5cbiAgdHJhbnNmb3JtID0gcHJlZml4ICsgJ3RyYW5zZm9ybSdcbiAgY3NzUmVzZXRbdHJhbnNpdGlvblByb3BlcnR5ID0gcHJlZml4ICsgJ3RyYW5zaXRpb24tcHJvcGVydHknXSA9XG4gIGNzc1Jlc2V0W3RyYW5zaXRpb25EdXJhdGlvbiA9IHByZWZpeCArICd0cmFuc2l0aW9uLWR1cmF0aW9uJ10gPVxuICBjc3NSZXNldFt0cmFuc2l0aW9uVGltaW5nICAgPSBwcmVmaXggKyAndHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb24nXSA9XG4gIGNzc1Jlc2V0W2FuaW1hdGlvbk5hbWUgICAgICA9IHByZWZpeCArICdhbmltYXRpb24tbmFtZSddID1cbiAgY3NzUmVzZXRbYW5pbWF0aW9uRHVyYXRpb24gID0gcHJlZml4ICsgJ2FuaW1hdGlvbi1kdXJhdGlvbiddID1cbiAgY3NzUmVzZXRbYW5pbWF0aW9uVGltaW5nICAgID0gcHJlZml4ICsgJ2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb24nXSA9ICcnXG5cbiAgJC5meCA9IHtcbiAgICBvZmY6IChldmVudFByZWZpeCA9PT0gdW5kZWZpbmVkICYmIHRlc3RFbC5zdHlsZS50cmFuc2l0aW9uUHJvcGVydHkgPT09IHVuZGVmaW5lZCksXG4gICAgc3BlZWRzOiB7IF9kZWZhdWx0OiA0MDAsIGZhc3Q6IDIwMCwgc2xvdzogNjAwIH0sXG4gICAgY3NzUHJlZml4OiBwcmVmaXgsXG4gICAgdHJhbnNpdGlvbkVuZDogbm9ybWFsaXplRXZlbnQoJ1RyYW5zaXRpb25FbmQnKSxcbiAgICBhbmltYXRpb25FbmQ6IG5vcm1hbGl6ZUV2ZW50KCdBbmltYXRpb25FbmQnKVxuICB9XG5cbiAgJC5mbi5hbmltYXRlID0gZnVuY3Rpb24ocHJvcGVydGllcywgZHVyYXRpb24sIGVhc2UsIGNhbGxiYWNrKXtcbiAgICBpZiAoJC5pc1BsYWluT2JqZWN0KGR1cmF0aW9uKSlcbiAgICAgIGVhc2UgPSBkdXJhdGlvbi5lYXNpbmcsIGNhbGxiYWNrID0gZHVyYXRpb24uY29tcGxldGUsIGR1cmF0aW9uID0gZHVyYXRpb24uZHVyYXRpb25cbiAgICBpZiAoZHVyYXRpb24pIGR1cmF0aW9uID0gKHR5cGVvZiBkdXJhdGlvbiA9PSAnbnVtYmVyJyA/IGR1cmF0aW9uIDpcbiAgICAgICAgICAgICAgICAgICAgKCQuZnguc3BlZWRzW2R1cmF0aW9uXSB8fCAkLmZ4LnNwZWVkcy5fZGVmYXVsdCkpIC8gMTAwMFxuICAgIHJldHVybiB0aGlzLmFuaW0ocHJvcGVydGllcywgZHVyYXRpb24sIGVhc2UsIGNhbGxiYWNrKVxuICB9XG5cbiAgJC5mbi5hbmltID0gZnVuY3Rpb24ocHJvcGVydGllcywgZHVyYXRpb24sIGVhc2UsIGNhbGxiYWNrKXtcbiAgICB2YXIga2V5LCBjc3NWYWx1ZXMgPSB7fSwgY3NzUHJvcGVydGllcywgdHJhbnNmb3JtcyA9ICcnLFxuICAgICAgICB0aGF0ID0gdGhpcywgd3JhcHBlZENhbGxiYWNrLCBlbmRFdmVudCA9ICQuZngudHJhbnNpdGlvbkVuZFxuXG4gICAgaWYgKGR1cmF0aW9uID09PSB1bmRlZmluZWQpIGR1cmF0aW9uID0gMC40XG4gICAgaWYgKCQuZngub2ZmKSBkdXJhdGlvbiA9IDBcblxuICAgIGlmICh0eXBlb2YgcHJvcGVydGllcyA9PSAnc3RyaW5nJykge1xuICAgICAgLy8ga2V5ZnJhbWUgYW5pbWF0aW9uXG4gICAgICBjc3NWYWx1ZXNbYW5pbWF0aW9uTmFtZV0gPSBwcm9wZXJ0aWVzXG4gICAgICBjc3NWYWx1ZXNbYW5pbWF0aW9uRHVyYXRpb25dID0gZHVyYXRpb24gKyAncydcbiAgICAgIGNzc1ZhbHVlc1thbmltYXRpb25UaW1pbmddID0gKGVhc2UgfHwgJ2xpbmVhcicpXG4gICAgICBlbmRFdmVudCA9ICQuZnguYW5pbWF0aW9uRW5kXG4gICAgfSBlbHNlIHtcbiAgICAgIGNzc1Byb3BlcnRpZXMgPSBbXVxuICAgICAgLy8gQ1NTIHRyYW5zaXRpb25zXG4gICAgICBmb3IgKGtleSBpbiBwcm9wZXJ0aWVzKVxuICAgICAgICBpZiAoc3VwcG9ydGVkVHJhbnNmb3Jtcy50ZXN0KGtleSkpIHRyYW5zZm9ybXMgKz0ga2V5ICsgJygnICsgcHJvcGVydGllc1trZXldICsgJykgJ1xuICAgICAgICBlbHNlIGNzc1ZhbHVlc1trZXldID0gcHJvcGVydGllc1trZXldLCBjc3NQcm9wZXJ0aWVzLnB1c2goZGFzaGVyaXplKGtleSkpXG5cbiAgICAgIGlmICh0cmFuc2Zvcm1zKSBjc3NWYWx1ZXNbdHJhbnNmb3JtXSA9IHRyYW5zZm9ybXMsIGNzc1Byb3BlcnRpZXMucHVzaCh0cmFuc2Zvcm0pXG4gICAgICBpZiAoZHVyYXRpb24gPiAwICYmIHR5cGVvZiBwcm9wZXJ0aWVzID09PSAnb2JqZWN0Jykge1xuICAgICAgICBjc3NWYWx1ZXNbdHJhbnNpdGlvblByb3BlcnR5XSA9IGNzc1Byb3BlcnRpZXMuam9pbignLCAnKVxuICAgICAgICBjc3NWYWx1ZXNbdHJhbnNpdGlvbkR1cmF0aW9uXSA9IGR1cmF0aW9uICsgJ3MnXG4gICAgICAgIGNzc1ZhbHVlc1t0cmFuc2l0aW9uVGltaW5nXSA9IChlYXNlIHx8ICdsaW5lYXInKVxuICAgICAgfVxuICAgIH1cblxuICAgIHdyYXBwZWRDYWxsYmFjayA9IGZ1bmN0aW9uKGV2ZW50KXtcbiAgICAgIGlmICh0eXBlb2YgZXZlbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGlmIChldmVudC50YXJnZXQgIT09IGV2ZW50LmN1cnJlbnRUYXJnZXQpIHJldHVybiAvLyBtYWtlcyBzdXJlIHRoZSBldmVudCBkaWRuJ3QgYnViYmxlIGZyb20gXCJiZWxvd1wiXG4gICAgICAgICQoZXZlbnQudGFyZ2V0KS51bmJpbmQoZW5kRXZlbnQsIHdyYXBwZWRDYWxsYmFjaylcbiAgICAgIH1cbiAgICAgICQodGhpcykuY3NzKGNzc1Jlc2V0KVxuICAgICAgY2FsbGJhY2sgJiYgY2FsbGJhY2suY2FsbCh0aGlzKVxuICAgIH1cbiAgICBpZiAoZHVyYXRpb24gPiAwKSB0aGlzLmJpbmQoZW5kRXZlbnQsIHdyYXBwZWRDYWxsYmFjaylcblxuICAgIC8vIHRyaWdnZXIgcGFnZSByZWZsb3cgc28gbmV3IGVsZW1lbnRzIGNhbiBhbmltYXRlXG4gICAgdGhpcy5zaXplKCkgJiYgdGhpcy5nZXQoMCkuY2xpZW50TGVmdFxuXG4gICAgdGhpcy5jc3MoY3NzVmFsdWVzKVxuXG4gICAgaWYgKGR1cmF0aW9uIDw9IDApIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICB0aGF0LmVhY2goZnVuY3Rpb24oKXsgd3JhcHBlZENhbGxiYWNrLmNhbGwodGhpcykgfSlcbiAgICB9LCAwKVxuXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIHRlc3RFbCA9IG51bGxcbn0pKFplcHRvKVxuIl19
;