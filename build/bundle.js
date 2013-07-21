;(function(e,t,n){function i(n,s){if(!t[n]){if(!e[n]){var o=typeof require=="function"&&require;if(!s&&o)return o(n,!0);if(r)return r(n,!0);throw new Error("Cannot find module '"+n+"'")}var u=t[n]={exports:{}};e[n][0].call(u.exports,function(t){var r=e[n][1][t];return i(r?r:t)},u,u.exports)}return t[n].exports}var r=typeof require=="function"&&require;for(var s=0;s<n.length;s++)i(n[s]);return i})({1:[function(require,module,exports){
var html, main_page, map;

map = require('./meta.coffee').map;

html = require('lilyturf').html;

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
            }, this.text(site.name)));
          }
          return _results1;
        }).call(this)), this.div({
          "class": 'detail'
        }, (function() {
          var _results1;
          _results1 = [];
          for (name in list) {
            site = list[name];
            _results1.push(this.div({
              "class": 'card holder',
              'data-name': name
            }, this.div({
              "class": 'name'
            }, this.text(site.name)), this.div({
              "class": 'link'
            }, this.a({
              href: site.url
            }, this.text(site.url))), site.logo != null ? this.div({
              "class": 'logo',
              style: "background-color: " + site.bg_color
            }, this.img({
              src: 'pic/' + site.logo
            })) : void 0, this.div({
              "class": 'desc'
            }, this.text(site.desc || ''))));
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


},{"./meta.coffee":2,"lilyturf":3}],2:[function(require,module,exports){
exports.map = {
  coding: {
    zhihu: {
      name: 'zhihu',
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
    }
  }
};


},{}],3:[function(require,module,exports){
// Generated by CoffeeScript 1.6.2
var css, css_tools, html_scope, html_tools, pair_elems, resolve, single_elems,
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
    return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\s/g, "&nbsp;");
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

css_tools = {
  template: function(base, selector, declaration) {
    return "" + base + " " + selector + "{\n" + declaration + "\n}\n";
  },
  utils: {
    hsl: function(h, s, l) {
      return "hsl(" + h + ", " + s + "%, " + l + "%)";
    },
    hsla: function(h, s, l, a) {
      return "hsl(" + h + ", " + s + "%, " + l + "%, " + a + ")";
    }
  },
  type: function(value) {
    var match, string;

    match = Object.prototype.toString.call(value).match(/\s\w+/);
    string = match[0].slice(1);
    return string.toLowerCase();
  },
  pretty: function(char) {
    if (char.match(/^[A-Z]$/) != null) {
      return "-" + char.toLowerCase();
    } else {
      return char;
    }
  }
};

css = function(generator) {
  var data, style, write_rule;

  style = "";
  css_tools.utils.generator = generator;
  data = css_tools.utils.generator();
  write_rule = function(base, data) {
    var attribute, declaration, nest_selector, nested, plain, rule, selector, value, values, _i, _len, _results;

    nested = {};
    for (selector in data) {
      declaration = data[selector];
      plain = [];
      for (attribute in declaration) {
        value = declaration[attribute];
        if ((css_tools.type(value)) === "object") {
          nest_selector = "" + base + " " + selector;
          if (nested[nest_selector] == null) {
            nested[nest_selector] = {};
          }
          nested[nest_selector][attribute] = value;
        } else {
          attribute = attribute.split("").map(css_tools.pretty).join("");
          if ((css_tools.type(value)) === "number") {
            value = "" + value + "px";
          }
          if ((css_tools.type(value)) === "array") {
            values = value;
            for (_i = 0, _len = values.length; _i < _len; _i++) {
              value = values[_i];
              plain.push("  " + attribute + ": " + value + ";");
            }
          } else {
            plain.push("  " + attribute + ": " + value + ";");
          }
        }
      }
      if (plain.length > 0) {
        declaration = plain.join("\n");
        rule = css_tools.template(base, selector, declaration);
        style += rule.trimLeft();
      }
    }
    if ((Object.keys(nested)).length > 0) {
      _results = [];
      for (base in nested) {
        data = nested[base];
        _results.push(write_rule(base, data));
      }
      return _results;
    }
  };
  write_rule("", data);
  return style;
};

exports.html = function(generator) {
  return generator.call(html_scope);
};

exports.css = function(data) {
  return css(data);
};

},{}]},{},[1])
//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyIvb3B0L3Mvc3RyZWV0L2NvZmZlZS9tYWluLmNvZmZlZSIsIi9vcHQvcy9zdHJlZXQvY29mZmVlL21ldGEuY29mZmVlIiwiL29wdC9zL3N0cmVldC9ub2RlX21vZHVsZXMvbGlseXR1cmYvbGlseXR1cmYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUdBLElBQUEsZ0JBQUE7O0FBQUEsQ0FBQSxFQUFBLElBQU0sUUFBQTs7QUFDTixDQURBLEVBQ08sQ0FBUCxHQUFPLEdBQUE7O0FBRVAsQ0FIQSxFQUdZLENBQUEsS0FBWjtDQUNPLEVBQUEsQ0FBTCxLQUFBO0NBQ0UsT0FBQSxrQkFBQTtDQUFDLEVBQUQsQ0FBQyxPQUFEO0NBQUssQ0FBQSxJQUFBO0NBQ0YsQ0FBRCxDQUFBLENBQUMsRUFESDtDQUNPLENBQUEsR0FBQSxDQUFBO01BQUw7O0FBQ0UsQ0FBQTtHQUFBLFNBQUEsSUFBQTtDQUNFLEVBQUEsQ0FBQztDQUFJLENBQU8sS0FBUCxHQUFBLENBQUE7Q0FBQSxDQUFxQyxNQUFyQyxFQUFvQixLQUFBO0NBQ3RCLENBQUQsRUFBQyxJQUFELEVBREY7Q0FERjs7Q0FERixDQUlBLENBQUEsQ0FBQztDQUFJLENBQUEsSUFBQTtNQUFMOztBQUNFLENBQUE7WUFBQSxJQUFBOytCQUFBO0NBQ0UsRUFBQSxDQUFDO0NBQUksQ0FBTyxLQUFQLEdBQUEsT0FBQTtDQUFBLENBQTJDLE1BQTNDLEVBQTBCLEtBQUE7Q0FDNUIsQ0FBRCxDQUFBLENBQUMsTUFESDtDQUNPLENBQU8sSUFBUCxDQUFBLEdBQUE7VUFBTDs7QUFDRSxDQUFBO1lBQUEsSUFBQTsrQkFBQTtDQUNFLEVBQUEsQ0FBQztDQUFJLENBQU8sS0FBUCxPQUFBO0NBQUEsQ0FBNkIsRUFBN0IsT0FBZ0IsR0FBQTtDQUNsQixDQUFELEVBQUMsVUFESDtDQURGOztDQURGLENBSUEsQ0FBQSxDQUFDO0NBQUksQ0FBTyxLQUFQLENBQUEsRUFBQTtVQUFMOztBQUNF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QU4sRUFBQSxVQUZBO0NBQUEsQ0FHVSxJQUFWLEVBQUEsWUFIQTtDQUFBLENBSUssQ0FBTCxHQUFBLHNCQUpBO01BM0JGO0NBQUEsQ0FpQ0UsRUFERixVQUFBO0NBQ0UsQ0FBTSxFQUFOLEVBQUEsVUFBQTtDQUFBLENBQ00sRUFBTixFQUFBLG1EQURBO0NBQUEsQ0FFTSxFQUFOLEVBQUEsY0FGQTtDQUFBLENBR0ssQ0FBTCxHQUFBLDBCQUhBO0NBQUEsQ0FJVSxJQUFWLEVBQUEsV0FKQTtNQWpDRjtDQUFBLENBdUNFLEVBREYsSUFBQTtDQUNFLENBQU0sRUFBTixFQUFBLGFBQUE7Q0FBQSxDQUNNLEVBQU4sRUFBQSx5Q0FEQTtDQUFBLENBRUssQ0FBTCxHQUFBLDRCQUZBO0NBQUEsQ0FHTSxFQUFOLEVBQUEsUUFIQTtNQXZDRjtJQWxGRjtDQURGLENBQUE7Ozs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJcbiMgbG9hZCBIVE1MXG5cbm1hcCA9IHJlcXVpcmUoJy4vbWV0YS5jb2ZmZWUnKS5tYXBcbmh0bWwgPSByZXF1aXJlKCdsaWx5dHVyZicpLmh0bWxcblxubWFpbl9wYWdlID0gKGRhdGEpIC0+XG4gIGh0bWwgLT5cbiAgICBAZGl2IGlkOiAncGFnZScsXG4gICAgICBAZGl2IGlkOiAnbmF2JyxcbiAgICAgICAgZm9yIGNhdGVnb3J5IG9mIGRhdGFcbiAgICAgICAgICBAZGl2IGNsYXNzOiAnZGlyZWN0aW9uJywgJ2RhdGEtY2F0ZWdvcnknOiBjYXRlZ29yeSxcbiAgICAgICAgICAgIEB0ZXh0IGNhdGVnb3J5XG4gICAgICBAZGl2IGlkOiAnYm9keScsXG4gICAgICAgIGZvciBjYXRlZ29yeSwgbGlzdCBvZiBkYXRhXG4gICAgICAgICAgQGRpdiBjbGFzczogJ2NhdGVnb3J5IGhvbGRlcicsICdkYXRhLWNhdGVnb3J5JzogY2F0ZWdvcnksXG4gICAgICAgICAgICBAZGl2IGNsYXNzOiAnc2hvdycsXG4gICAgICAgICAgICAgIGZvciBuYW1lLCBzaXRlIG9mIGxpc3RcbiAgICAgICAgICAgICAgICBAZGl2IGNsYXNzOiAncGxhY2UnLCAnZGF0YS1uYW1lJzogbmFtZSxcbiAgICAgICAgICAgICAgICAgIEB0ZXh0IHNpdGUubmFtZVxuICAgICAgICAgICAgQGRpdiBjbGFzczogJ2RldGFpbCcsXG4gICAgICAgICAgICAgIGZvciBuYW1lLCBzaXRlIG9mIGxpc3RcbiAgICAgICAgICAgICAgICBAZGl2IGNsYXNzOiAnY2FyZCBob2xkZXInLCAnZGF0YS1uYW1lJzogbmFtZSxcbiAgICAgICAgICAgICAgICAgIEBkaXYgY2xhc3M6ICduYW1lJywgKEB0ZXh0IHNpdGUubmFtZSlcbiAgICAgICAgICAgICAgICAgIEBkaXYgY2xhc3M6ICdsaW5rJyxcbiAgICAgICAgICAgICAgICAgICAgQGEgaHJlZjogc2l0ZS51cmwsICAoQHRleHQgc2l0ZS51cmwpXG4gICAgICAgICAgICAgICAgICBpZiBzaXRlLmxvZ28/XG4gICAgICAgICAgICAgICAgICAgIEBkaXYgY2xhc3M6ICdsb2dvJywgc3R5bGU6IFwiYmFja2dyb3VuZC1jb2xvcjogI3tzaXRlLmJnX2NvbG9yfVwiLFxuICAgICAgICAgICAgICAgICAgICAgIEBpbWcgc3JjOiAncGljLycgKyBzaXRlLmxvZ29cbiAgICAgICAgICAgICAgICAgIEBkaXYgY2xhc3M6ICdkZXNjJywgKEB0ZXh0IHNpdGUuZGVzYyBvciAnJylcblxuJCgnYm9keScpLmh0bWwgbWFpbl9wYWdlIG1hcFxuXG4kKCcjbmF2IC5kaXJlY3Rpb24nKS5jbGljayAtPlxuICB0aGVfY2F0ZWdvcnkgPSAkKEApLmF0dHIoJ2RhdGEtY2F0ZWdvcnknKVxuICBxdWVyeV9vcGVuID0gXCJbZGF0YS1jYXRlZ29yeT1cXFwiI3t0aGVfY2F0ZWdvcnl9XFxcIl1cIlxuICAkKCcjYm9keSAuY2F0ZWdvcnknKS5maWx0ZXIocXVlcnlfb3BlbikucmVtb3ZlQ2xhc3MoJ2hpZGUnKS5hZGRDbGFzcyAnb3BlbidcbiAgJCgnI2JvZHkgLmNhdGVnb3J5Jykubm90KHF1ZXJ5X29wZW4pLnJlbW92ZUNsYXNzKCdvcGVuJykuYWRkQ2xhc3MgJ2hpZGUnXG5cbiQoJyNuYXYgLmRpcmVjdGlvbicpLmZpcnN0KCkuY2xpY2soKSIsIlxuZXhwb3J0cy5tYXAgPVxuICBjb2Rpbmc6XG4gICAgemhpaHU6XG4gICAgICBuYW1lOiAnemhpaHUnXG4gICAgICBkZXNjOiAn5LiA5Liq55yf5a6e55qE572R57uc6Zeu562U56S+5Yy677yM5biu5Yqp5L2g5a+75om+562U5qGI77yM5YiG5Lqr55+l6K+G44CCJ1xuICAgICAgbG9nbzogJ3poaWh1LnBuZydcbiAgICAgIGJnX2NvbG9yOiAnIzAwNzhkOCdcbiAgICAgIHVybDogJ2h0dHA6Ly96aGlodS5jb20nXG4gICAgcnVieV9jaGluYTpcbiAgICAgIG5hbWU6ICdSdWJ5IENoaW5hJ1xuICAgICAgZGVzYzogJ+S4reWbvSBSdWJ5IOekvuWMuu+8jOeUseS8l+WkmueIseWlveiAheWFseWQjOe7tOaKpO+8jOiHtOWKm+S6juaehOW7uuWujOWWhOeahCBSdWJ5IOS4reaWh+ekvuWMuuOAgidcbiAgICAgIGxvZ286ICdydWJ5LWNoaW5hLnBuZydcbiAgICAgIGJnX2NvbG9yOiAnd2hpdGUnXG4gICAgICB1cmw6ICdodHRwOi8vcnVieS1jaGluYS5vcmcnXG4gICAgdjJleDpcbiAgICAgIG5hbWU6ICdWMkVYJ1xuICAgICAgZGVzYzogJ3dheSB0byBleHBsb3JlJ1xuICAgICAgbG9nbzogJ3YyZXgucG5nJ1xuICAgICAgYmdfY29sb3I6ICdoc2woMCwgMCUsIDgyJSknXG4gICAgICB1cmw6ICdodHRwOi8vdjJleC5jb20vJ1xuICAgIHNlZ21lbnRmYXVsdDpcbiAgICAgIG5hbWU6ICdzZWdtZW50ZmF1bHQnXG4gICAgICBkZXNjOiAn5LiA5Liq5LiT5Lia6Z2i5ZCR5byA5Y+R6ICF55qE5oqA5pyv6Zeu562U56S+5Yy6J1xuICAgICAgbG9nbzogJ3NlZ21lbnRmYXVsdC5wbmcnXG4gICAgICBiZ19jb2xvcjogJ2hzbCgwLCAwJSwgOTUlKSdcbiAgICAgIHVybDogJ2h0dHA6Ly9zZWdtZW50ZmF1bHQuY29tLydcbiAgICBmMmU6XG4gICAgICBuYW1lOiAnRjJFJ1xuICAgICAgZGVzYzogJ+WJjeerr+aKgOacr+ekvuWMuidcbiAgICAgIHVybDogJ2h0dHA6Ly9mMmUuaW0vJ1xuICAgIGFwcGxldHVhbjpcbiAgICAgIG5hbWU6ICfoi7nmnpzlm6InXG4gICAgICBkZXNjOiAn6Z2g6LCx55qE6Iu55p6c6LSt5py656S+5Yy6J1xuICAgICAgbG9nbzogJ2FwcGxldHVhbi5wbmcnXG4gICAgICBiZ19jb2xvcjogJ2hzbCgyMDUsIDYlLCAzOSUpJ1xuICAgICAgdXJsOiAnaHR0cDovL3d3dy5hcHBsZXR1YW4uY29tLydcbiAgICBsaW5ld3M6XG4gICAgICBuYW1lOiAnTGluZXdzJ1xuICAgICAgZGVzYzogJ0xpbnV4L09wZW5zb3VyY2UgbmV3cydcbiAgICAgIHVybDogJ2h0dHA6Ly9uZXdzLndvd3VidW50dS5jb20vJ1xuICAgICAgYmdfY29sb3I6ICdoc2woMCwgMCUsIDkxJSknXG4gICAgY25vZGU6XG4gICAgICBuYW1lOiAnQ05vZGUuanMnXG4gICAgICBkZXNjOiAnTm9kZS5qcyDlvIDmupDmioDmnK/npL7ljLonXG4gICAgICBsb2dvOiAnY25vZGUucG5nJ1xuICAgICAgdXJsOiAnaHR0cDovL2Nub2RlanMub3JnLydcbiAgICBweXRob25fY2hpbmE6XG4gICAgICBuYW1lOiAnUHl0aG9uIENoaW5hJ1xuICAgICAgZGVzYzogJ1B5dGhvbiBDaGluYSdcbiAgICAgIHVybDogJ2h0dHA6Ly9weXRob24tY2hpbmEub3JnLydcbiAgICBxaWFuZHVhbjpcbiAgICAgIG5hbWU6ICfliY3nq6/nlYwnXG4gICAgICBkZXNjOiAn5q+P5pel5YmN56uv5byA5Y+R5paw6Ze777yM6Lef6Liq5YmN56uv5byA5Y+R6LaL5Yq/LidcbiAgICAgIHVybDogJ2h0dHA6Ly9xaWFuZHVhbi51cy9sYXRlc3QnXG4gICAgICBiZ19jb2xvcjogJ2hzbCgwLCAwJSwgOTElKSdcbiAgICBpbmV3czpcbiAgICAgIG5hbWU6ICdNYWMvaU9TIE5ld3MnXG4gICAgICBkZXNjOiAnaU5ld3MuaW8nXG4gICAgICB1cmw6ICdodHRwOi8vaW5ld3MuaW8vJ1xuICAgICAgYmdfY29sb3I6ICdoc2woMCwgMCUsIDkxJSknXG4gICAgaGFza2VsbF9ncm91cDpcbiAgICAgIG5hbWU6ICdIYXNrZWxsIOWwj+e7hCdcbiAgICAgIGxvZ286ICdoYXNrZWxsLmpwZydcbiAgICAgIHVybDogJ2h0dHA6Ly93d3cuZG91YmFuLmNvbS9ncm91cC9IYXNrZWxsLydcbiAgICBsaXNwOlxuICAgICAgbmFtZTogJ0xJU1Ag5bCP57uEJ1xuICAgICAgbG9nbzogJ2xpc3AuanBnJ1xuICAgICAgdXJsOiAnaHR0cDovL3d3dy5kb3ViYW4uY29tL2dyb3VwL0xpc3AvJ1xuICAgIGFuZ3VsYXJqczpcbiAgICAgIG5hbWU6ICdBbmd1bGFySlMg5Lit5paH56S+5Yy6J1xuICAgICAgZGVzYzogJ+S9v+eUqOi2heWKqOaEn0hUTUwgJiBKU+W8gOWPkVdFQuW6lOeUqO+8gSdcbiAgICAgIGxvZ286ICdhbmd1bGFyY24ucG5nJ1xuICAgICAgdXJsOiAnaHR0cDovL3d3dy5hbmd1bGFyanMuY24vJ1xuICAgIGdlZWtfY3NkbjpcbiAgICAgIG5hbWU6ICfmnoHlrqLlpLTmnaEgJ1xuICAgICAgZGVzYzogJ0NTRE7mjqjlh7rnmoTnsr7lk4HlhoXlrrnlj5HmjpjlubPlj7DvvIzlnKjov5nph4zlj6/ku6Xlj5HnjrDjgIHliIbkuqvlgLzlvpfkvaDlhbPms6jnmoTmnoHlrqLmlrDpl7vjgIInXG4gICAgICB1cmw6ICdodHRwOi8vZ2Vlay5jc2RuLm5ldC8nXG4gICAgZ29sYW5nOlxuICAgICAgbmFtZTogJ1N0dWR5IEdvbGFuZydcbiAgICAgIGRlc2M6ICdHbyDor63oqIDlrabkuaDlm63lnLAnXG4gICAgICBsb2dvOiAnZ29sYW5nLnBuZydcbiAgICAgIHVybDogJ2h0dHA6Ly9zdHVkeWdvbGFuZy5jb20vJ1xuICBkZXNpZ246XG4gICAgZHJpYmJibGU6XG4gICAgICBuYW1lOiAnZHJpYmJibGUnXG4gICAgICBkZXNjOiAnRHJpYmJibGUgaXMgYSBjb21tdW5pdHkgb2YgZGVzaWduZXJzIGFuc3dlcmluZyB0aGF0IHF1ZXN0aW9uIGVhY2ggZGF5J1xuICAgICAgbG9nbzogJ2RyaWJiYmxlLmdpZidcbiAgICAgIHVybDogJ2h0dHA6Ly9kcmliYmJsZS5jb20vJ1xuICAgICAgYmdfY29sb3I6ICdoc2woMCwgMCUsIDk0JSknXG4gICAgemVycGx5OlxuICAgICAgbmFtZTogJ1plcnBseSdcbiAgICAgIGRlc2M6ICdaZXJwbHkgaXMgYSBjb21tdW5pdHkgb2YgbWFrZXJzJ1xuICAgICAgbG9nbzogJ3plcnBseS5zdmcnXG4gICAgICB1cmw6ICdodHRwOi8vemVycGx5LmNvbS8nXG4gICAgICBiZ19jb2xvcjogJ2hzbCg4NywgMzMlLCA4MiUpJ1xuICAgIGZvcnJzdDpcbiAgICAgIG5hbWU6ICdGb3Jyc3QnXG4gICAgICBkZXNjOiAnQSBjb21tdW5pdHkgd2hlcmUgZGV2ZWxvcGVycyAmIGRlc2lnbmVycyBpbXByb3ZlIHRoZWlyIGNyYWZ0IHRocm91Z2ggZGVzaWduIGZlZWRiYWNrLidcbiAgICAgIGxvZ286ICdmb3Jyc3QucG5nJ1xuICAgICAgdXJsOiAnaHR0cDovL2ZvcnJzdC5jb20vJ1xuICAgICAgYmdfY29sb3I6ICdoc2woNTIsIDI5JSwgOTAlKSdcbiAgICB0eW1wYW51czpcbiAgICAgIG5hbWU6ICd0eW1wYW51cydcbiAgICAgIHVybDogJ2h0dHA6Ly90eW1wYW51cy5uZXQvJ1xuICAgIHdkbDpcbiAgICAgIG5hbWU6ICdXREwnXG4gICAgICBkZXNjOiAnV2ViIERlc2lnbiBCbG9nLCBUdXRvcmlhbHMgYW5kIEluc3BpcmF0aW9uJ1xuICAgICAgdXJsOiAnaHR0cDovL3dlYmRlc2lnbmxlZGdlci5jb20vJ1xuICAgICAgbG9nbzogJ3dkbC5wbmcnXG4gICAgZGV2aWFudGFydDpcbiAgICAgIG5hbWU6ICdkZXZpYW50QVJUJ1xuICAgICAgZGVzYzogJ3doZXJlIEFSVCBtZWV0cyBhcHBsaWNhdGlvbiEnXG4gICAgICBsb2dvOiAnZGV2aWFudGFydC5wbmcnXG4gICAgICBiZ19jb2xvcjogJ2hzbCgxNDAsIDEwJSwgMzUlKSdcbiAgICAgIHVybDogJ2h0dHA6Ly93d3cuZGV2aWFudGFydC5jb20vJ1xuICAgIHRoZWJlc3RkZXNpZ25zOlxuICAgICAgbmFtZTogJ3RoZWJlc3RkZXNpZ25zJ1xuICAgICAgZGVzYzogJ1RoZSBCZXN0IERlc2lnbnMgLyBCZXN0IFdlYiBEZXNpZ24gQXdhcmRzICYgQ1NTIEdhbGxlcnknXG4gICAgICBsb2dvOiAndGhlYmVzdGRlc2lnbnMucG5nJ1xuICAgICAgdXJsOiAnaHR0cDovL3d3dy50aGViZXN0ZGVzaWducy5jb20vJ1xuICAgICAgYmdfY29sb3I6ICdoc2woNjAsIDI3JSwgOTQlKSdcbiAgICBzbWFzaGluZzpcbiAgICAgIG5hbWU6ICdTbWFzaGluZyBNYWdhemluZSdcbiAgICAgIGRlc2M6ICdGb3IgUHJvZmVzc2lvbmFsIFdlYiBEZXNpZ25lcnMgYW5kIERldmVsb3BlcnMnXG4gICAgICB1cmw6ICdodHRwOi8vd3d3LnNtYXNoaW5nbWFnYXppbmUuY29tLydcbiAgICAgIGxvZ286ICdzbWFzaGluZy5wbmcnXG4iLCIvLyBHZW5lcmF0ZWQgYnkgQ29mZmVlU2NyaXB0IDEuNi4yXG52YXIgY3NzLCBjc3NfdG9vbHMsIGh0bWxfc2NvcGUsIGh0bWxfdG9vbHMsIHBhaXJfZWxlbXMsIHJlc29sdmUsIHNpbmdsZV9lbGVtcyxcbiAgX19zbGljZSA9IFtdLnNsaWNlO1xuXG5odG1sX3Njb3BlID0ge307XG5cbnBhaXJfZWxlbXMgPSBcImhlYWQgdGl0bGUgYm9keSBzY3JpcHQgIGRpdiBuYXYgaGVhZGVyIGZvb3RlciBzZWN0aW9uIGFydGljbGUgIHAgc3BhbiB0ZXh0YXJlYSBiciBwcmUgY29kZSBhIGFkZHJlc3MgYiBiYWNrcXVvdGUgIGJ1dHRvbiBmb250IGZyYW1lIGZvcm0gaHIgaSAgdWwgbGkgb2wgdGFibGUgdHIgdGQgdGggdGl0bGUgIGNhbnZhcyBhdWRpbyB2aWRlbyBzZWxlY3Qgc3R5bGVcIi5zcGxpdCgvXFxzKy8pO1xuXG5zaW5nbGVfZWxlbXMgPSBcImltZyBtZXRhIGlucHV0IGxpbmsgaWZyYW1lIGF1ZGlvIHZpZGVvXCIuc3BsaXQoL1xccysvKTtcblxuaHRtbF90b29scyA9IHtcbiAgYXR0cnM6IGZ1bmN0aW9uKG9iaikge1xuICAgIHZhciBhdHRycywga2V5LCB2YWx1ZTtcblxuICAgIGF0dHJzID0gXCJcIjtcbiAgICBmb3IgKGtleSBpbiBvYmopIHtcbiAgICAgIHZhbHVlID0gb2JqW2tleV07XG4gICAgICBhdHRycyArPSBcIiBcIiArIGtleSArIFwiPSdcIiArIHZhbHVlICsgXCInXCI7XG4gICAgfVxuICAgIHJldHVybiBhdHRycztcbiAgfSxcbiAgdGV4dDogZnVuY3Rpb24odGV4dCkge1xuICAgIHJldHVybiB0ZXh0LnJlcGxhY2UoLyYvZywgXCImYW1wO1wiKS5yZXBsYWNlKC88L2csIFwiJmx0O1wiKS5yZXBsYWNlKC8+L2csIFwiJmd0O1wiKS5yZXBsYWNlKC9cXHMvZywgXCImbmJzcDtcIik7XG4gIH1cbn07XG5cbnJlc29sdmUgPSBmdW5jdGlvbihsaXN0KSB7XG4gIHZhciBlbGVtLCBvYmo7XG5cbiAgb2JqID0ge307XG4gIGVsZW0gPSBbXTtcbiAgbGlzdC5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICB2YXIga2V5LCB0aGF0LCB2YWx1ZSwgX2ksIF9sZW4sIF9yZXN1bHRzLCBfcmVzdWx0czE7XG5cbiAgICBpZiAoaXRlbSAhPSBudWxsKSB7XG4gICAgICBpZiAoaXRlbS5fX3Byb3RvX18gPT09IE9iamVjdC5wcm90b3R5cGUpIHtcbiAgICAgICAgX3Jlc3VsdHMgPSBbXTtcbiAgICAgICAgZm9yIChrZXkgaW4gaXRlbSkge1xuICAgICAgICAgIHZhbHVlID0gaXRlbVtrZXldO1xuICAgICAgICAgIF9yZXN1bHRzLnB1c2gob2JqW2tleV0gPSB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF9yZXN1bHRzO1xuICAgICAgfSBlbHNlIGlmIChpdGVtLl9fcHJvdG9fXyA9PT0gQXJyYXkucHJvdG90eXBlKSB7XG4gICAgICAgIF9yZXN1bHRzMSA9IFtdO1xuICAgICAgICBmb3IgKF9pID0gMCwgX2xlbiA9IGl0ZW0ubGVuZ3RoOyBfaSA8IF9sZW47IF9pKyspIHtcbiAgICAgICAgICB0aGF0ID0gaXRlbVtfaV07XG4gICAgICAgICAgX3Jlc3VsdHMxLnB1c2goZWxlbS5wdXNoKHRoYXQpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX3Jlc3VsdHMxO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGVsZW0ucHVzaChpdGVtKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuICByZXR1cm4gW29iaiwgZWxlbV07XG59O1xuXG5wYWlyX2VsZW1zLm1hcChmdW5jdGlvbih0YWcpIHtcbiAgcmV0dXJuIGh0bWxfc2NvcGVbdGFnXSA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBsaXN0LCBvYmosIF9yZWY7XG5cbiAgICBsaXN0ID0gMSA8PSBhcmd1bWVudHMubGVuZ3RoID8gX19zbGljZS5jYWxsKGFyZ3VtZW50cywgMCkgOiBbXTtcbiAgICBfcmVmID0gcmVzb2x2ZShsaXN0KSwgb2JqID0gX3JlZlswXSwgbGlzdCA9IF9yZWZbMV07XG4gICAgcmV0dXJuIFwiPFwiICsgdGFnICsgKGh0bWxfdG9vbHMuYXR0cnMob2JqKSkgKyBcIj5cIiArIChsaXN0LmpvaW4oXCJcIikpICsgXCI8L1wiICsgdGFnICsgXCI+XCI7XG4gIH07XG59KTtcblxuc2luZ2xlX2VsZW1zLm1hcChmdW5jdGlvbih0YWcpIHtcbiAgcmV0dXJuIGh0bWxfc2NvcGVbdGFnXSA9IGZ1bmN0aW9uKG9iaikge1xuICAgIGlmIChvYmogPT0gbnVsbCkge1xuICAgICAgb2JqID0ge307XG4gICAgfVxuICAgIHJldHVybiBcIjxcIiArIHRhZyArIChodG1sX3Rvb2xzLmF0dHJzKG9iaikpICsgXCIvPlwiO1xuICB9O1xufSk7XG5cbmh0bWxfc2NvcGUuaHRtbCA9IGZ1bmN0aW9uKHN0cmluZykge1xuICByZXR1cm4gc3RyaW5nO1xufTtcblxuaHRtbF9zY29wZS50ZXh0ID0gaHRtbF90b29scy50ZXh0O1xuXG5jc3NfdG9vbHMgPSB7XG4gIHRlbXBsYXRlOiBmdW5jdGlvbihiYXNlLCBzZWxlY3RvciwgZGVjbGFyYXRpb24pIHtcbiAgICByZXR1cm4gXCJcIiArIGJhc2UgKyBcIiBcIiArIHNlbGVjdG9yICsgXCJ7XFxuXCIgKyBkZWNsYXJhdGlvbiArIFwiXFxufVxcblwiO1xuICB9LFxuICB1dGlsczoge1xuICAgIGhzbDogZnVuY3Rpb24oaCwgcywgbCkge1xuICAgICAgcmV0dXJuIFwiaHNsKFwiICsgaCArIFwiLCBcIiArIHMgKyBcIiUsIFwiICsgbCArIFwiJSlcIjtcbiAgICB9LFxuICAgIGhzbGE6IGZ1bmN0aW9uKGgsIHMsIGwsIGEpIHtcbiAgICAgIHJldHVybiBcImhzbChcIiArIGggKyBcIiwgXCIgKyBzICsgXCIlLCBcIiArIGwgKyBcIiUsIFwiICsgYSArIFwiKVwiO1xuICAgIH1cbiAgfSxcbiAgdHlwZTogZnVuY3Rpb24odmFsdWUpIHtcbiAgICB2YXIgbWF0Y2gsIHN0cmluZztcblxuICAgIG1hdGNoID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKS5tYXRjaCgvXFxzXFx3Ky8pO1xuICAgIHN0cmluZyA9IG1hdGNoWzBdLnNsaWNlKDEpO1xuICAgIHJldHVybiBzdHJpbmcudG9Mb3dlckNhc2UoKTtcbiAgfSxcbiAgcHJldHR5OiBmdW5jdGlvbihjaGFyKSB7XG4gICAgaWYgKGNoYXIubWF0Y2goL15bQS1aXSQvKSAhPSBudWxsKSB7XG4gICAgICByZXR1cm4gXCItXCIgKyBjaGFyLnRvTG93ZXJDYXNlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBjaGFyO1xuICAgIH1cbiAgfVxufTtcblxuY3NzID0gZnVuY3Rpb24oZ2VuZXJhdG9yKSB7XG4gIHZhciBkYXRhLCBzdHlsZSwgd3JpdGVfcnVsZTtcblxuICBzdHlsZSA9IFwiXCI7XG4gIGNzc190b29scy51dGlscy5nZW5lcmF0b3IgPSBnZW5lcmF0b3I7XG4gIGRhdGEgPSBjc3NfdG9vbHMudXRpbHMuZ2VuZXJhdG9yKCk7XG4gIHdyaXRlX3J1bGUgPSBmdW5jdGlvbihiYXNlLCBkYXRhKSB7XG4gICAgdmFyIGF0dHJpYnV0ZSwgZGVjbGFyYXRpb24sIG5lc3Rfc2VsZWN0b3IsIG5lc3RlZCwgcGxhaW4sIHJ1bGUsIHNlbGVjdG9yLCB2YWx1ZSwgdmFsdWVzLCBfaSwgX2xlbiwgX3Jlc3VsdHM7XG5cbiAgICBuZXN0ZWQgPSB7fTtcbiAgICBmb3IgKHNlbGVjdG9yIGluIGRhdGEpIHtcbiAgICAgIGRlY2xhcmF0aW9uID0gZGF0YVtzZWxlY3Rvcl07XG4gICAgICBwbGFpbiA9IFtdO1xuICAgICAgZm9yIChhdHRyaWJ1dGUgaW4gZGVjbGFyYXRpb24pIHtcbiAgICAgICAgdmFsdWUgPSBkZWNsYXJhdGlvblthdHRyaWJ1dGVdO1xuICAgICAgICBpZiAoKGNzc190b29scy50eXBlKHZhbHVlKSkgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICBuZXN0X3NlbGVjdG9yID0gXCJcIiArIGJhc2UgKyBcIiBcIiArIHNlbGVjdG9yO1xuICAgICAgICAgIGlmIChuZXN0ZWRbbmVzdF9zZWxlY3Rvcl0gPT0gbnVsbCkge1xuICAgICAgICAgICAgbmVzdGVkW25lc3Rfc2VsZWN0b3JdID0ge307XG4gICAgICAgICAgfVxuICAgICAgICAgIG5lc3RlZFtuZXN0X3NlbGVjdG9yXVthdHRyaWJ1dGVdID0gdmFsdWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYXR0cmlidXRlID0gYXR0cmlidXRlLnNwbGl0KFwiXCIpLm1hcChjc3NfdG9vbHMucHJldHR5KS5qb2luKFwiXCIpO1xuICAgICAgICAgIGlmICgoY3NzX3Rvb2xzLnR5cGUodmFsdWUpKSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgdmFsdWUgPSBcIlwiICsgdmFsdWUgKyBcInB4XCI7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICgoY3NzX3Rvb2xzLnR5cGUodmFsdWUpKSA9PT0gXCJhcnJheVwiKSB7XG4gICAgICAgICAgICB2YWx1ZXMgPSB2YWx1ZTtcbiAgICAgICAgICAgIGZvciAoX2kgPSAwLCBfbGVuID0gdmFsdWVzLmxlbmd0aDsgX2kgPCBfbGVuOyBfaSsrKSB7XG4gICAgICAgICAgICAgIHZhbHVlID0gdmFsdWVzW19pXTtcbiAgICAgICAgICAgICAgcGxhaW4ucHVzaChcIiAgXCIgKyBhdHRyaWJ1dGUgKyBcIjogXCIgKyB2YWx1ZSArIFwiO1wiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGxhaW4ucHVzaChcIiAgXCIgKyBhdHRyaWJ1dGUgKyBcIjogXCIgKyB2YWx1ZSArIFwiO1wiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChwbGFpbi5sZW5ndGggPiAwKSB7XG4gICAgICAgIGRlY2xhcmF0aW9uID0gcGxhaW4uam9pbihcIlxcblwiKTtcbiAgICAgICAgcnVsZSA9IGNzc190b29scy50ZW1wbGF0ZShiYXNlLCBzZWxlY3RvciwgZGVjbGFyYXRpb24pO1xuICAgICAgICBzdHlsZSArPSBydWxlLnRyaW1MZWZ0KCk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICgoT2JqZWN0LmtleXMobmVzdGVkKSkubGVuZ3RoID4gMCkge1xuICAgICAgX3Jlc3VsdHMgPSBbXTtcbiAgICAgIGZvciAoYmFzZSBpbiBuZXN0ZWQpIHtcbiAgICAgICAgZGF0YSA9IG5lc3RlZFtiYXNlXTtcbiAgICAgICAgX3Jlc3VsdHMucHVzaCh3cml0ZV9ydWxlKGJhc2UsIGRhdGEpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBfcmVzdWx0cztcbiAgICB9XG4gIH07XG4gIHdyaXRlX3J1bGUoXCJcIiwgZGF0YSk7XG4gIHJldHVybiBzdHlsZTtcbn07XG5cbmV4cG9ydHMuaHRtbCA9IGZ1bmN0aW9uKGdlbmVyYXRvcikge1xuICByZXR1cm4gZ2VuZXJhdG9yLmNhbGwoaHRtbF9zY29wZSk7XG59O1xuXG5leHBvcnRzLmNzcyA9IGZ1bmN0aW9uKGRhdGEpIHtcbiAgcmV0dXJuIGNzcyhkYXRhKTtcbn07XG4iXX0=
;