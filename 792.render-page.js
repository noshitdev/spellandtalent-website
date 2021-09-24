"use strict";
exports.id = 792;
exports.ids = [792];
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

/***/ 89792:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FortmaticConnector": () => (/* binding */ FortmaticConnector)
/* harmony export */ });
/* harmony import */ var _web3_react_abstract_connector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26939);
/* harmony import */ var tiny_invariant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2177);



function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

var chainIdToNetwork = {
  1: 'mainnet',
  3: 'ropsten',
  4: 'rinkeby',
  42: 'kovan'
};
var FortmaticConnector = /*#__PURE__*/function (_AbstractConnector) {
  _inheritsLoose(FortmaticConnector, _AbstractConnector);

  function FortmaticConnector(_ref) {
    var _this;

    var apiKey = _ref.apiKey,
        chainId = _ref.chainId;
    !Object.keys(chainIdToNetwork).includes(chainId.toString()) ?  false ? 0 : (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(false) : void 0;
    _this = _AbstractConnector.call(this, {
      supportedChainIds: [chainId]
    }) || this;
    _this.apiKey = apiKey;
    _this.chainId = chainId;
    return _this;
  }

  var _proto = FortmaticConnector.prototype;

  _proto.activate = function activate() {
    try {
      var _temp3 = function _temp3() {
        return Promise.resolve(_this3.fortmatic.getProvider().enable().then(function (accounts) {
          return accounts[0];
        })).then(function (account) {
          return {
            provider: _this3.fortmatic.getProvider(),
            chainId: _this3.chainId,
            account: account
          };
        });
      };

      var _this3 = this;

      var _temp4 = function () {
        if (!_this3.fortmatic) {
          return Promise.resolve(__webpack_require__.e(/* import() */ 878).then(__webpack_require__.t.bind(__webpack_require__, 49878, 23)).then(function (m) {
            var _m$default;

            return (_m$default = m == null ? void 0 : m["default"]) != null ? _m$default : m;
          })).then(function (Fortmatic) {
            _this3.fortmatic = new Fortmatic(_this3.apiKey, _this3.chainId === 1 || _this3.chainId === 4 ? undefined : chainIdToNetwork[_this3.chainId]);
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

      return Promise.resolve(_this5.fortmatic.getProvider());
    } catch (e) {
      return Promise.reject(e);
    }
  };

  _proto.getChainId = function getChainId() {
    try {
      var _this7 = this;

      return Promise.resolve(_this7.chainId);
    } catch (e) {
      return Promise.reject(e);
    }
  };

  _proto.getAccount = function getAccount() {
    try {
      var _this9 = this;

      return Promise.resolve(_this9.fortmatic.getProvider().send('eth_accounts').then(function (accounts) {
        return accounts[0];
      }));
    } catch (e) {
      return Promise.reject(e);
    }
  };

  _proto.deactivate = function deactivate() {};

  _proto.close = function close() {
    try {
      var _this11 = this;

      return Promise.resolve(_this11.fortmatic.user.logout()).then(function () {
        _this11.emitDeactivate();
      });
    } catch (e) {
      return Promise.reject(e);
    }
  };

  return FortmaticConnector;
}(_web3_react_abstract_connector__WEBPACK_IMPORTED_MODULE_0__/* .AbstractConnector */ .Q);


//# sourceMappingURL=fortmatic-connector.esm.js.map


/***/ })

};
;
//# sourceMappingURL=792.render-page.js.map