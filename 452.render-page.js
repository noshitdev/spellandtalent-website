"use strict";
exports.id = 452;
exports.ids = [452];
exports.modules = {

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


/***/ }),

/***/ 97452:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WalletLinkConnector": () => (/* binding */ WalletLinkConnector)
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

  _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

var CHAIN_ID = 1;
var WalletLinkConnector = /*#__PURE__*/function (_AbstractConnector) {
  _inheritsLoose(WalletLinkConnector, _AbstractConnector);

  function WalletLinkConnector(_ref) {
    var _this;

    var url = _ref.url,
        appName = _ref.appName,
        appLogoUrl = _ref.appLogoUrl,
        darkMode = _ref.darkMode,
        supportedChainIds = _ref.supportedChainIds;
    _this = _AbstractConnector.call(this, {
      supportedChainIds: supportedChainIds
    }) || this;
    _this.url = url;
    _this.appName = appName;
    _this.appLogoUrl = appLogoUrl;
    _this.darkMode = darkMode || false;
    _this.handleChainChanged = _this.handleChainChanged.bind(_assertThisInitialized(_this));
    _this.handleAccountsChanged = _this.handleAccountsChanged.bind(_assertThisInitialized(_this));
    return _this;
  }

  var _proto = WalletLinkConnector.prototype;

  _proto.activate = function activate() {
    try {
      var _this3 = this;

      var _temp4 = function _temp4() {
        return Promise.resolve(_this3.provider.request({
          method: 'eth_requestAccounts'
        })).then(function (accounts) {
          var account = accounts[0];

          _this3.provider.on('chainChanged', _this3.handleChainChanged);

          _this3.provider.on('accountsChanged', _this3.handleAccountsChanged);

          return {
            provider: _this3.provider,
            account: account
          };
        });
      };

      var _temp5 = function () {
        if (window.ethereum && window.ethereum.isCoinbaseWallet === true) {
          // user is in the dapp browser on Coinbase Wallet
          _this3.provider = window.ethereum;
        } else {
          var _temp6 = function () {
            if (!_this3.walletLink) {
              return Promise.resolve(Promise.all(/* import() */[__webpack_require__.e(90), __webpack_require__.e(983)]).then(__webpack_require__.bind(__webpack_require__, 39393)).then(function (m) {
                var _m$default;

                return (_m$default = m == null ? void 0 : m["default"]) != null ? _m$default : m;
              })).then(function (WalletLink) {
                _this3.walletLink = new WalletLink(_extends({
                  appName: _this3.appName,
                  darkMode: _this3.darkMode
                }, _this3.appLogoUrl ? {
                  appLogoUrl: _this3.appLogoUrl
                } : {}));
                _this3.provider = _this3.walletLink.makeWeb3Provider(_this3.url, CHAIN_ID);
              });
            }
          }();

          if (_temp6 && _temp6.then) return _temp6.then(function () {});
        }
      }();

      // @ts-ignore
      return Promise.resolve(_temp5 && _temp5.then ? _temp5.then(_temp4) : _temp4(_temp5));
    } catch (e) {
      return Promise.reject(e);
    }
  };

  _proto.getProvider = function getProvider() {
    try {
      var _this5 = this;

      return Promise.resolve(_this5.provider);
    } catch (e) {
      return Promise.reject(e);
    }
  };

  _proto.getChainId = function getChainId() {
    try {
      var _this7 = this;

      return Promise.resolve(_this7.provider.chainId);
    } catch (e) {
      return Promise.reject(e);
    }
  };

  _proto.getAccount = function getAccount() {
    try {
      var _this9 = this;

      return Promise.resolve(_this9.provider.request({
        method: 'eth_requestAccounts'
      })).then(function (accounts) {
        return accounts[0];
      });
    } catch (e) {
      return Promise.reject(e);
    }
  };

  _proto.deactivate = function deactivate() {
    this.provider.removeListener('chainChanged', this.handleChainChanged);
    this.provider.removeListener('accountsChanged', this.handleAccountsChanged);
  };

  _proto.close = function close() {
    try {
      var _this11 = this;

      _this11.provider.close();

      _this11.emitDeactivate();

      return Promise.resolve();
    } catch (e) {
      return Promise.reject(e);
    }
  };

  _proto.handleChainChanged = function handleChainChanged(chainId) {
    if (false) {}

    this.emitUpdate({
      chainId: chainId
    });
  };

  _proto.handleAccountsChanged = function handleAccountsChanged(accounts) {
    if (false) {}

    this.emitUpdate({
      account: accounts[0]
    });
  };

  return WalletLinkConnector;
}(_web3_react_abstract_connector__WEBPACK_IMPORTED_MODULE_0__/* .AbstractConnector */ .Q);


//# sourceMappingURL=walletlink-connector.esm.js.map


/***/ })

};
;
//# sourceMappingURL=452.render-page.js.map