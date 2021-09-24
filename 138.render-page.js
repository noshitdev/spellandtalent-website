"use strict";
exports.id = 138;
exports.ids = [138];
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

/***/ 49138:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PortisConnector": () => (/* binding */ PortisConnector)
/* harmony export */ });
/* harmony import */ var _web3_react_abstract_connector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26939);
/* harmony import */ var tiny_invariant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2177);



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

var chainIdToNetwork = {
  1: 'mainnet',
  3: 'ropsten',
  4: 'rinkeby',
  5: 'goerli',
  42: 'kovan',
  100: 'xdai',
  30: 'orchid',
  31: 'orchidTestnet',
  99: 'core',
  77: 'sokol',
  61: 'classic',
  8: 'ubiq',
  108: 'thundercore',
  18: 'thundercoreTestnet',
  163: 'lightstreams',
  122: 'fuse',
  15001: 'maticTestnet'
};
var PortisConnector = /*#__PURE__*/function (_AbstractConnector) {
  _inheritsLoose(PortisConnector, _AbstractConnector);

  function PortisConnector(_ref) {
    var _this;

    var dAppId = _ref.dAppId,
        networks = _ref.networks,
        _ref$config = _ref.config,
        config = _ref$config === void 0 ? {} : _ref$config;
    var chainIds = networks.map(function (n) {
      return typeof n === 'number' ? n : Number(n.chainId);
    });
    !chainIds.every(function (c) {
      return !!chainIdToNetwork[c];
    }) ?  false ? 0 : (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(false) : void 0;
    _this = _AbstractConnector.call(this, {
      supportedChainIds: chainIds
    }) || this;
    _this.dAppId = dAppId;
    _this.networks = networks;
    _this.config = config;
    _this.handleOnLogout = _this.handleOnLogout.bind(_assertThisInitialized(_this));
    _this.handleOnActiveWalletChanged = _this.handleOnActiveWalletChanged.bind(_assertThisInitialized(_this));
    _this.handleOnError = _this.handleOnError.bind(_assertThisInitialized(_this));
    return _this;
  }

  var _proto = PortisConnector.prototype;

  _proto.handleOnLogout = function handleOnLogout() {
    if (false) {}

    this.emitDeactivate();
  };

  _proto.handleOnActiveWalletChanged = function handleOnActiveWalletChanged(account) {
    if (false) {}

    this.emitUpdate({
      account: account
    });
  };

  _proto.handleOnError = function handleOnError(error) {
    if (false) {}

    this.emitError(error);
  };

  _proto.activate = function activate() {
    try {
      var _this3 = this;

      var _temp3 = function _temp3() {
        _this3.portis.onLogout(_this3.handleOnLogout);

        _this3.portis.onActiveWalletChanged(_this3.handleOnActiveWalletChanged);

        _this3.portis.onError(_this3.handleOnError);

        return Promise.resolve(_this3.portis.provider.enable().then(function (accounts) {
          return accounts[0];
        })).then(function (account) {
          return {
            provider: _this3.portis.provider,
            account: account
          };
        });
      };

      var _temp4 = function () {
        if (!_this3.portis) {
          return Promise.resolve(Promise.all(/* import() */[__webpack_require__.e(90), __webpack_require__.e(334), __webpack_require__.e(476), __webpack_require__.e(844)]).then(__webpack_require__.bind(__webpack_require__, 86844)).then(function (m) {
            var _m$default;

            return (_m$default = m == null ? void 0 : m["default"]) != null ? _m$default : m;
          })).then(function (Portis) {
            _this3.portis = new Portis(_this3.dAppId, typeof _this3.networks[0] === 'number' ? chainIdToNetwork[_this3.networks[0]] : _this3.networks[0], _this3.config);
          });
        }
      }();

      return Promise.resolve(_temp4 && _temp4.then ? _temp4.then(_temp3) : _temp3(_temp4));
    } catch (e) {
      return Promise.reject(e);
    }
  };

  _proto.getProvider = function getProvider() {
    try {
      var _this5 = this;

      return Promise.resolve(_this5.portis.provider);
    } catch (e) {
      return Promise.reject(e);
    }
  };

  _proto.getChainId = function getChainId() {
    try {
      var _this7 = this;

      return Promise.resolve(_this7.portis.provider.send('eth_chainId'));
    } catch (e) {
      return Promise.reject(e);
    }
  };

  _proto.getAccount = function getAccount() {
    try {
      var _this9 = this;

      return Promise.resolve(_this9.portis.provider.send('eth_accounts').then(function (accounts) {
        return accounts[0];
      }));
    } catch (e) {
      return Promise.reject(e);
    }
  };

  _proto.deactivate = function deactivate() {
    this.portis.onLogout(function () {});
    this.portis.onActiveWalletChanged(function () {});
    this.portis.onError(function () {});
  };

  _proto.changeNetwork = function changeNetwork(newNetwork, isGasRelayEnabled) {
    try {
      var _this11 = this;

      if (typeof newNetwork === 'number') {
        !!!chainIdToNetwork[newNetwork] ?  false ? 0 : (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(false) : void 0;

        _this11.portis.changeNetwork(chainIdToNetwork[newNetwork], isGasRelayEnabled);

        _this11.emitUpdate({
          chainId: newNetwork
        });
      } else {
        _this11.portis.changeNetwork(newNetwork, isGasRelayEnabled);

        _this11.emitUpdate({
          chainId: Number(newNetwork.chainId)
        });
      }

      return Promise.resolve();
    } catch (e) {
      return Promise.reject(e);
    }
  };

  _proto.close = function close() {
    try {
      var _this13 = this;

      return Promise.resolve(_this13.portis.logout()).then(function () {
        _this13.emitDeactivate();
      });
    } catch (e) {
      return Promise.reject(e);
    }
  };

  return PortisConnector;
}(_web3_react_abstract_connector__WEBPACK_IMPORTED_MODULE_0__/* .AbstractConnector */ .Q);


//# sourceMappingURL=portis-connector.esm.js.map


/***/ })

};
;
//# sourceMappingURL=138.render-page.js.map