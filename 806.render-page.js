"use strict";
exports.id = 806;
exports.ids = [806];
exports.modules = {

/***/ 6806:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoEthereumProviderError": () => (/* binding */ NoEthereumProviderError),
/* harmony export */   "ProvidedConnector": () => (/* binding */ ProvidedConnector),
/* harmony export */   "UserRejectedRequestError": () => (/* binding */ UserRejectedRequestError)
/* harmony export */ });
/* harmony import */ var _web3_react_abstract_connector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26939);



function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

// A type of promise-like that resolves synchronously and supports only one observer
var _iteratorSymbol = /*#__PURE__*/typeof Symbol !== "undefined" ? Symbol.iterator || (Symbol.iterator = /*#__PURE__*/Symbol("Symbol.iterator")) : "@@iterator"; // Asynchronously iterate through an object's values
var _asyncIteratorSymbol = /*#__PURE__*/typeof Symbol !== "undefined" ? Symbol.asyncIterator || (Symbol.asyncIterator = /*#__PURE__*/Symbol("Symbol.asyncIterator")) : "@@asyncIterator"; // Asynchronously iterate on a value using it's async iterator if present, or its synchronous iterator if missing

function _catch(body, recover) {
  try {
    var result = body();
  } catch (e) {
    return recover(e);
  }

  if (result && result.then) {
    return result.then(void 0, recover);
  }

  return result;
} // Asynchronously await a promise and pass the result to a finally continuation

function parseSendReturn(sendReturn) {
  return sendReturn.hasOwnProperty('result') ? sendReturn.result : sendReturn;
}

var NoEthereumProviderError = /*#__PURE__*/function (_Error) {
  _inheritsLoose(NoEthereumProviderError, _Error);

  function NoEthereumProviderError() {
    var _this;

    _this = _Error.call(this) || this;
    _this.name = _this.constructor.name;
    _this.message = 'No Ethereum provider was passed to the constructor or found on window.ethereum.';
    return _this;
  }

  return NoEthereumProviderError;
}( /*#__PURE__*/_wrapNativeSuper(Error));
var UserRejectedRequestError = /*#__PURE__*/function (_Error2) {
  _inheritsLoose(UserRejectedRequestError, _Error2);

  function UserRejectedRequestError() {
    var _this2;

    _this2 = _Error2.call(this) || this;
    _this2.name = _this2.constructor.name;
    _this2.message = 'The user rejected the request.';
    return _this2;
  }

  return UserRejectedRequestError;
}( /*#__PURE__*/_wrapNativeSuper(Error));
var ProvidedConnector = /*#__PURE__*/function (_AbstractConnector) {
  _inheritsLoose(ProvidedConnector, _AbstractConnector);

  function ProvidedConnector(_ref) {
    var _this3;

    var _ref$provider = _ref.provider,
        provider = _ref$provider === void 0 ? window.ethereum : _ref$provider,
        supportedChainIds = _ref.supportedChainIds;
    _this3 = _AbstractConnector.call(this, {
      supportedChainIds: supportedChainIds
    }) || this;
    _this3.provider = provider;
    _this3.handleNetworkChanged = _this3.handleNetworkChanged.bind(_assertThisInitialized(_this3));
    _this3.handleChainChanged = _this3.handleChainChanged.bind(_assertThisInitialized(_this3));
    _this3.handleAccountsChanged = _this3.handleAccountsChanged.bind(_assertThisInitialized(_this3));
    _this3.handleClose = _this3.handleClose.bind(_assertThisInitialized(_this3));
    return _this3;
  }

  var _proto = ProvidedConnector.prototype;

  _proto.handleChainChanged = function handleChainChanged(chainId) {
    if (false) {}

    this.emitUpdate({
      chainId: chainId,
      provider: this.provider
    });
  };

  _proto.handleAccountsChanged = function handleAccountsChanged(accounts) {
    if (false) {}

    if (accounts.length === 0) {
      this.emitDeactivate();
    } else {
      this.emitUpdate({
        account: accounts[0]
      });
    }
  };

  _proto.handleClose = function handleClose(code, reason) {
    if (false) {}

    this.emitDeactivate();
  };

  _proto.handleNetworkChanged = function handleNetworkChanged(networkId) {
    if (false) {}

    this.emitUpdate({
      chainId: networkId,
      provider: this.provider
    });
  };

  _proto.activate = function activate() {
    try {
      var _temp5 = function _temp5(_result) {
        if (_exit2) return _result;

        function _temp2() {
          return _extends({
            provider: _this5.provider
          }, account ? {
            account: account
          } : {});
        }

        var _temp = function () {
          if (!account) {
            // if enable is successful but doesn't return accounts, fall back to getAccount (not happy i have to do this...)
            return Promise.resolve(_this5.provider.enable().then(function (sendReturn) {
              return sendReturn && parseSendReturn(sendReturn)[0];
            })).then(function (_this4$provider$enabl) {
              account = _this4$provider$enabl;
            });
          }
        }();

        // if unsuccessful, try enable
        return _temp && _temp.then ? _temp.then(_temp2) : _temp2(_temp);
      };

      var _exit2 = false;

      var _this5 = this;

      if (!_this5.provider) {
        throw new NoEthereumProviderError();
      }

      if (_this5.provider.on) {
        _this5.provider.on('chainChanged', _this5.handleChainChanged);

        _this5.provider.on('accountsChanged', _this5.handleAccountsChanged);

        _this5.provider.on('close', _this5.handleClose);

        _this5.provider.on('networkChanged', _this5.handleNetworkChanged);
      }

      if (_this5.provider.isMetaMask) {
        ;
        _this5.provider.autoRefreshOnNetworkChange = false;
      } // try to activate + get account via eth_requestAccounts


      var account;

      var _temp6 = _catch(function () {
        return Promise.resolve(_this5.provider.send('eth_requestAccounts').then(function (sendReturn) {
          return parseSendReturn(sendReturn)[0];
        })).then(function (_this4$provider$send$) {
          account = _this4$provider$send$;
        });
      }, function (error) {
        if (error.code === 4001) {
          throw new UserRejectedRequestError();
        }

         false ? 0 : void 0;
      });

      return Promise.resolve(_temp6 && _temp6.then ? _temp6.then(_temp5) : _temp5(_temp6));
    } catch (e) {
      return Promise.reject(e);
    }
  };

  _proto.getProvider = function getProvider() {
    try {
      var _this7 = this;

      return Promise.resolve(_this7.provider);
    } catch (e) {
      return Promise.reject(e);
    }
  };

  _proto.getChainId = function getChainId() {
    try {
      var _temp12 = function _temp12() {
        function _temp9() {
          if (!chainId) {
            try {
              chainId = parseSendReturn(_this9.provider.send({
                method: 'net_version'
              }));
            } catch (_unused) {
               false ? 0 : void 0;
            }
          }

          if (!chainId) {
            if (_this9.provider.isDapper) {
              chainId = parseSendReturn(_this9.provider.cachedResults.net_version);
            } else {
              chainId = _this9.provider.chainId || _this9.provider.networkVersion || _this9.provider._chainId;
            }
          }

          return chainId;
        }

        var _temp8 = function () {
          if (!chainId) {
            var _temp14 = _catch(function () {
              return Promise.resolve(_this9.provider.send('net_version').then(parseSendReturn)).then(function (_this8$provider$send$2) {
                chainId = _this8$provider$send$2;
              });
            }, function () {
               false ? 0 : void 0;
            });

            if (_temp14 && _temp14.then) return _temp14.then(function () {});
          }
        }();

        return _temp8 && _temp8.then ? _temp8.then(_temp9) : _temp9(_temp8);
      };

      var _this9 = this;

      if (!_this9.provider) {
        throw new NoEthereumProviderError();
      }

      var chainId;

      var _temp13 = _catch(function () {
        return Promise.resolve(_this9.provider.send('eth_chainId').then(parseSendReturn)).then(function (_this8$provider$send$) {
          chainId = _this8$provider$send$;
        });
      }, function () {
         false ? 0 : void 0;
      });

      return Promise.resolve(_temp13 && _temp13.then ? _temp13.then(_temp12) : _temp12(_temp13));
    } catch (e) {
      return Promise.reject(e);
    }
  };

  _proto.getAccount = function getAccount() {
    try {
      var _temp20 = function _temp20() {
        function _temp17() {
          if (!account) {
            account = parseSendReturn(_this11.provider.send({
              method: 'eth_accounts'
            }))[0];
          }

          return account;
        }

        var _temp16 = function () {
          if (!account) {
            var _temp22 = _catch(function () {
              return Promise.resolve(_this11.provider.enable().then(function (sendReturn) {
                return parseSendReturn(sendReturn)[0];
              })).then(function (_this10$provider$enab) {
                account = _this10$provider$enab;
              });
            }, function () {
               false ? 0 : void 0;
            });

            if (_temp22 && _temp22.then) return _temp22.then(function () {});
          }
        }();

        return _temp16 && _temp16.then ? _temp16.then(_temp17) : _temp17(_temp16);
      };

      var _this11 = this;

      if (!_this11.provider) {
        throw new NoEthereumProviderError();
      }

      var account;

      var _temp21 = _catch(function () {
        return Promise.resolve(_this11.provider.send('eth_accounts').then(function (sendReturn) {
          return parseSendReturn(sendReturn)[0];
        })).then(function (_this10$provider$send) {
          account = _this10$provider$send;
        });
      }, function () {
         false ? 0 : void 0;
      });

      return Promise.resolve(_temp21 && _temp21.then ? _temp21.then(_temp20) : _temp20(_temp21));
    } catch (e) {
      return Promise.reject(e);
    }
  };

  _proto.deactivate = function deactivate() {
    if (this.provider && this.provider.removeListener) {
      this.provider.removeListener('chainChanged', this.handleChainChanged);
      this.provider.removeListener('accountsChanged', this.handleAccountsChanged);
      this.provider.removeListener('close', this.handleClose);
      this.provider.removeListener('networkChanged', this.handleNetworkChanged);
    }
  };

  _proto.isAuthorized = function isAuthorized() {
    try {
      var _this13 = this;

      if (!_this13.provider) {
        return Promise.resolve(false);
      }

      return Promise.resolve(_catch(function () {
        return Promise.resolve(_this13.provider.send('eth_accounts').then(function (sendReturn) {
          if (parseSendReturn(sendReturn).length > 0) {
            return true;
          } else {
            return false;
          }
        }));
      }, function () {
        return false;
      }));
    } catch (e) {
      return Promise.reject(e);
    }
  };

  return ProvidedConnector;
}(_web3_react_abstract_connector__WEBPACK_IMPORTED_MODULE_0__/* .AbstractConnector */ .Q);


//# sourceMappingURL=provided-connector.esm.js.map


/***/ }),

/***/ 26939:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* binding */ AbstractConnector)
/* harmony export */ });
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71239);
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _web3_react_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(53653);



function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

var AbstractConnector =
/*#__PURE__*/
function (_EventEmitter) {
  _inheritsLoose(AbstractConnector, _EventEmitter);

  function AbstractConnector(_temp) {
    var _this;

    var _ref = _temp === void 0 ? {} : _temp,
        supportedChainIds = _ref.supportedChainIds;

    _this = _EventEmitter.call(this) || this;
    _this.supportedChainIds = supportedChainIds;
    return _this;
  }

  var _proto = AbstractConnector.prototype;

  _proto.emitUpdate = function emitUpdate(update) {
    if (false) {}

    this.emit(_web3_react_types__WEBPACK_IMPORTED_MODULE_1__/* .ConnectorEvent.Update */ ._.Update, update);
  };

  _proto.emitError = function emitError(error) {
    if (false) {}

    this.emit(_web3_react_types__WEBPACK_IMPORTED_MODULE_1__/* .ConnectorEvent.Error */ ._.Error, error);
  };

  _proto.emitDeactivate = function emitDeactivate() {
    if (false) {}

    this.emit(_web3_react_types__WEBPACK_IMPORTED_MODULE_1__/* .ConnectorEvent.Deactivate */ ._.Deactivate);
  };

  return AbstractConnector;
}(events__WEBPACK_IMPORTED_MODULE_0__.EventEmitter);


//# sourceMappingURL=abstract-connector.esm.js.map


/***/ })

};
;
//# sourceMappingURL=806.render-page.js.map