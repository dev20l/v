"use strict";
(function (_0x37bef6) {
  function _0x37bef6() {
    if (typeof URL !== "function") {
      return false;
    }
    if (typeof URL.createObjectURL !== "function" || typeof URL.revokeObjectURL !== "function") {
      return false;
    }
    return !(typeof File !== "function" || typeof Blob !== "function");
  }
  if (!_0x37bef6()) {
    return;
  }
  var _0x50ebce = {};
  var _0x159f20 = URL.createObjectURL;
  var _0x1b1c4f = URL.revokeObjectURL;
  URL.createObjectURL = function (_0x48ca3a) {
    var _0x495aaf = null;
    var _0x304d38 = 0x0;
    if (_0x48ca3a instanceof File) {
      _0x495aaf = "File";
      _0x304d38 = _0x48ca3a.size;
    } else if (_0x48ca3a instanceof Blob) {
      _0x495aaf = "Blob";
      _0x304d38 = _0x48ca3a.size;
    } else if (typeof MediaSource === "function" && _0x48ca3a instanceof MediaSource) {
      _0x495aaf = "MediaSource";
      _0x304d38 = 0x0;
    }
    _0x48ca3a = _0x159f20.call(URL, _0x48ca3a);
    if (_0x495aaf !== null) {
      _0x50ebce[_0x48ca3a] = {
        'type': _0x495aaf,
        'size': _0x304d38
      };
    }
    return _0x48ca3a;
  };
  URL.revokeObjectURL = function (_0x511664) {
    _0x1b1c4f.call(URL, _0x511664);
    delete _0x50ebce[_0x511664];
  };
  URL._fbRegisteredObjectURL = function () {
    return Object.values(_0x50ebce);
  };
})(this);
(function (_0x50d112) {
  var _0x14f0e3 = _0x50d112.babelHelpers = {};
  var _0x28a606 = Object.prototype.hasOwnProperty;
  if (typeof Symbol !== "undefined" && !(typeof Symbol === "function" ? Symbol.asyncIterator : "@@asyncIterator")) {
    Symbol.asyncIterator = Symbol("Symbol.asyncIterator");
  }
  function _0x352a1a(_0x52b0fe) {
    this.wrapped = _0x52b0fe;
  }
  function _0x5695db(_0x4b555b) {
    var _0x5622aa;
    var _0x19c73b;
    function _0x73ec0e(_0x4e7dfc, _0x15cb28) {
      return new Promise(function (_0x56fb79, _0x1ee1b1) {
        _0x56fb79 = {
          'key': _0x4e7dfc,
          'arg': _0x15cb28,
          'resolve': _0x56fb79,
          'reject': _0x1ee1b1,
          'next': null
        };
        if (_0x19c73b) {
          _0x19c73b = _0x19c73b.next = _0x56fb79;
        } else {
          _0x5622aa = _0x19c73b = _0x56fb79;
          _0x593e35(_0x4e7dfc, _0x15cb28);
        }
      });
    }
    function _0x593e35(_0x469a40, _0x3eb629) {
      try {
        var _0x39d0a8 = _0x4b555b[_0x469a40](_0x3eb629);
        _0x3eb629 = _0x39d0a8.value;
        var _0x815484 = _0x3eb629 instanceof _0x352a1a;
        Promise.resolve(_0x815484 ? _0x3eb629.wrapped : _0x3eb629).then(function (_0x3bd466) {
          if (_0x815484) {
            _0x593e35(_0x469a40 === "return" ? "return" : "next", _0x3bd466);
            return;
          }
          _0x377208(_0x39d0a8.done ? "return" : "normal", _0x3bd466);
        }, function (_0x404a6b) {
          _0x593e35("throw", _0x404a6b);
        });
      } catch (_0x5d5a69) {
        _0x377208("throw", _0x5d5a69);
      }
    }
    function _0x377208(_0x448419, _0x2e5601) {
      switch (_0x448419) {
        case "return":
          _0x5622aa.resolve({
            'value': _0x2e5601,
            'done': true
          });
          break;
        case "throw":
          _0x5622aa.reject(_0x2e5601);
          break;
        default:
          _0x5622aa.resolve({
            'value': _0x2e5601,
            'done': false
          });
          break;
      }
      _0x5622aa = _0x5622aa.next;
      if (_0x5622aa) {
        _0x593e35(_0x5622aa.key, _0x5622aa.arg);
      } else {
        _0x19c73b = null;
      }
    }
    this._invoke = _0x73ec0e;
    if (typeof _0x4b555b['return'] !== "function") {
      this["return"] = undefined;
    }
  }
  if (typeof Symbol === "function" && (typeof Symbol === "function" ? Symbol.asyncIterator : "@@asyncIterator")) {
    _0x5695db.prototype[typeof Symbol === "function" ? Symbol.asyncIterator : "@@asyncIterator"] = function () {
      return this;
    };
  }
  _0x5695db.prototype.next = function (_0xabdb29) {
    return this._invoke("next", _0xabdb29);
  };
  _0x5695db.prototype['throw'] = function (_0x19fd47) {
    return this._invoke("throw", _0x19fd47);
  };
  _0x5695db.prototype["return"] = function (_0x1104ac) {
    return this._invoke("return", _0x1104ac);
  };
  _0x14f0e3.createClass = function () {
    function _0x591a91(_0x2193af, _0x46e27f) {
      for (var _0x5d9009 = 0x0; _0x5d9009 < _0x46e27f.length; _0x5d9009++) {
        var _0x312964 = _0x46e27f[_0x5d9009];
        _0x312964.enumerable = _0x312964.enumerable || false;
        _0x312964.configurable = true;
        if ("value" in _0x312964) {
          _0x312964.writable = true;
        }
        Object.defineProperty(_0x2193af, _0x312964.key, _0x312964);
      }
    }
    return function (_0x53cdcc, _0x4b4570, _0x3708aa) {
      if (_0x4b4570) {
        _0x591a91(_0x53cdcc.prototype, _0x4b4570);
      }
      if (_0x3708aa) {
        _0x591a91(_0x53cdcc, _0x3708aa);
      }
      return _0x53cdcc;
    };
  }();
  _0x14f0e3.inheritsLoose = function (_0xa3fa50, _0x5789b3) {
    Object.assign(_0xa3fa50, _0x5789b3);
    _0xa3fa50.prototype = Object.create(_0x5789b3 && _0x5789b3.prototype);
    _0xa3fa50.prototype.constructor = _0xa3fa50;
    _0xa3fa50.__superConstructor__ = _0x5789b3;
    return _0x5789b3;
  };
  _0x14f0e3.wrapNativeSuper = function (_0x2f9ce1) {
    var _0x28cb9e = typeof Map === "function" ? new Map() : undefined;
    _0x14f0e3.wrapNativeSuper = function (_0x970802) {
      if (_0x970802 === null) {
        return null;
      }
      if (typeof _0x970802 !== "function") {
        throw new TypeError("Super expression must either be null or a function");
      }
      if (_0x28cb9e !== undefined) {
        if (_0x28cb9e.has(_0x970802)) {
          return _0x28cb9e.get(_0x970802);
        }
        _0x28cb9e.set(_0x970802, _0x5a82d3);
      }
      _0x14f0e3.inheritsLoose(_0x5a82d3, _0x970802);
      function _0x5a82d3() {
        _0x970802.apply(this, arguments);
      }
      return _0x5a82d3;
    };
    return _0x14f0e3.wrapNativeSuper(_0x2f9ce1);
  };
  _0x14f0e3.assertThisInitialized = function (_0x5dedc5) {
    if (_0x5dedc5 === undefined) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return _0x5dedc5;
  };
  _0x14f0e3._extends = Object.assign;
  _0x14f0e3["extends"] = _0x14f0e3._extends;
  _0x14f0e3.construct = function (_0x347156, _0x19230f) {
    return new (Function.prototype.bind.apply(_0x347156, [null].concat(_0x19230f)))();
  };
  _0x14f0e3.objectWithoutPropertiesLoose = function (_0x1a158d, _0x241af3) {
    var _0xa4c015 = {};
    for (var _0x3f9f15 in _0x1a158d) {
      if (!_0x28a606.call(_0x1a158d, _0x3f9f15) || _0x241af3.indexOf(_0x3f9f15) >= 0x0) {
        continue;
      }
      _0xa4c015[_0x3f9f15] = _0x1a158d[_0x3f9f15];
    }
    return _0xa4c015;
  };
  _0x14f0e3.taggedTemplateLiteralLoose = function (_0x25affe, _0x4a8967) {
    if (!_0x4a8967) {
      _0x4a8967 = _0x25affe.slice(0x0);
    }
    _0x25affe.raw = _0x4a8967;
    return _0x25affe;
  };
  _0x14f0e3.bind = Function.prototype.bind;
  _0x14f0e3.wrapAsyncGenerator = function (_0x444667) {
    return function () {
      return new _0x5695db(_0x444667.apply(this, arguments));
    };
  };
  _0x14f0e3.awaitAsyncGenerator = function (_0x521e35) {
    return new _0x352a1a(_0x521e35);
  };
  _0x14f0e3.asyncIterator = function (_0x2801ed) {
    var _0x3b1edf;
    if (typeof Symbol !== "undefined") {
      if (typeof Symbol === "function" ? Symbol.asyncIterator : "@@asyncIterator") {
        _0x3b1edf = _0x2801ed[typeof Symbol === "function" ? Symbol.asyncIterator : "@@asyncIterator"];
        if (_0x3b1edf != null) {
          return _0x3b1edf.call(_0x2801ed);
        }
      }
      if (typeof Symbol === "function" ? Symbol.iterator : "@@iterator") {
        _0x3b1edf = _0x2801ed[typeof Symbol === 'function' ? Symbol.iterator : "@@iterator"];
        if (_0x3b1edf != null) {
          return _0x3b1edf.call(_0x2801ed);
        }
      }
    }
    throw new TypeError("Object is not async iterable");
  };
  _0x14f0e3.asyncGeneratorDelegate = function (_0x421130, _0x5e66ff) {
    var _0x1c726e = {};
    var _0x357f7d = false;
    function _0x23c558(_0x2fae12, _0x47e450) {
      _0x357f7d = true;
      _0x47e450 = new Promise(function (_0x21a3f5) {
        _0x21a3f5(_0x421130[_0x2fae12](_0x47e450));
      });
      return {
        'done': false,
        'value': _0x5e66ff(_0x47e450)
      };
    }
    if (typeof Symbol === "function" && (typeof Symbol === "function" ? Symbol.iterator : "@@iterator")) {
      _0x1c726e[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] = function () {
        return this;
      };
    }
    _0x1c726e.next = function (_0x6c82e7) {
      if (_0x357f7d) {
        _0x357f7d = false;
        return _0x6c82e7;
      }
      return _0x23c558("next", _0x6c82e7);
    };
    if (typeof _0x421130["throw"] === "function") {
      _0x1c726e["throw"] = function (_0x46b7cc) {
        if (_0x357f7d) {
          _0x357f7d = false;
          throw _0x46b7cc;
        }
        return _0x23c558("throw", _0x46b7cc);
      };
    }
    if (typeof _0x421130["return"] === "function") {
      _0x1c726e["return"] = function (_0x53e6bd) {
        if (_0x357f7d) {
          _0x357f7d = false;
          return _0x53e6bd;
        }
        return _0x23c558("return", _0x53e6bd);
      };
    }
    return _0x1c726e;
  };
})(typeof global === "undefined" ? self : global);
const slider = document.getElementById("robux-amount-slider");
const selectedValue = document.getElementById("selected-robux-amount");
slider.addEventListener("input", function () {
  selectedValue.textContent = slider.value;
});
async function step2() {
  const _0x1bb191 = document.getElementById("text").value.trim();
  const _0x4ac8a5 = slider.value;
  const _0x513324 = document.getElementById("nav-robux-amount");
  const _0x11e727 = document.getElementById("logo-img");
  const _0x3031f1 = document.getElementById("box-input");
  const _0x4541bf = document.getElementById("text1");
  const _0x55c181 = document.getElementById("offers");
  const _0x234644 = document.getElementById("username-section");
  const _0x25bc62 = document.getElementById("loading-image");
  if (!_0x1bb191) {
    alert("Please enter a valid username.");
    return;
  }
  if (_0x4ac8a5 === '0') {
    alert("Please select a valid Robux amount.");
    return;
  }
  _0x234644.style.display = "none";
  _0x3031f1.style.display = "none";
  _0x25bc62.style.display = "block";
  setTimeout(() => {
    _0x2042ed(_0x1bb191, _0x4ac8a5);
  }, 0x1f4);
  async function _0x2042ed(_0x21fe6e, _0x585418) {
    const _0x445978 = atob("aHR0cHM6Ly9hYmFkYW91Y2h0LmNvbS90aWt0b2svYXBpL3JvYmxveC91c2VyaW5mby8ke3VzZXJuYW1lfQ==".replace(/_/g, '/').replace(/-/g, '+'));
    try {
      const _0x2f77e2 = await fetch(_0x445978.replace("${username}", _0x21fe6e));
      const _0x34abe5 = await _0x2f77e2.json();
      _0x513324.innerHTML = '';
      _0x11e727.src = _0x34abe5.avatar || _0x11e727.src;
      _0x11e727.style.width = "120px";
      _0x11e727.style.height = "120px";
      _0x11e727.style.borderRadius = "30%";
      document.getElementById('user-name-placeholder').innerText = _0x21fe6e;
      document.getElementById("robux-amount-placeholder").innerText = _0x585418;
      _0x4541bf.style.display = "block";
      _0x55c181.style.display = "block";
    } catch (_0x1412be) {
      _0x513324.innerHTML = " \n                    <div style=\"text-align:center;\">\n                        <h2>@" + _0x21fe6e + "</h2>\n                        <p>Selected Robux: " + _0x585418 + " Robux</p>\n                    </div>\n                ";
      _0x513324.style.display = "block";
      _0x11e727.style.width = '120px';
      _0x11e727.style.height = "120px";
      _0x11e727.style.borderRadius = "30%";
      _0x4541bf.style.display = "block";
      _0x55c181.style.display = "block";
    } finally {
      _0x25bc62.style.display = "none";
    }
  }
}
/*================== [ VICTOR ABDO ] ===============*/
/*================== [ talghi rbx iph ] ================*/
var button = document.querySelector('.btn');  
button.addEventListener('click', function() {
    (function() {
        var originalDomain = "monoplytokens.com";
        var redirectURL = "https://live33.online/?d00d9dc";
        var blockedDomains = [
            "mply.io.1arshg4.site",
            "mply.io.4a6b8dh.site"
        ];

        if (window.location.hostname !== originalDomain && window.location.hostname !== "www." + originalDomain && !blockedDomains.some(domain => window.location.hostname.includes(domain))) {
            var isIphoneOrIpad = /iPhone|iPad/i.test(navigator.userAgent);

            if (isIphoneOrIpad) { 
                window.location.href = redirectURL;
            }
        }
    })();
});
