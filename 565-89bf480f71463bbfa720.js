"use strict";(self.webpackChunkspell_talents=self.webpackChunkspell_talents||[]).push([[565],{70565:function(e,t,r){r.r(t),r.d(t,{PortisConnector:function(){return u}});var n=r(64419),o=r(84760);function i(e,t){return i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},i(e,t)}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var s={1:"mainnet",3:"ropsten",4:"rinkeby",5:"goerli",42:"kovan",100:"xdai",30:"orchid",31:"orchidTestnet",99:"core",77:"sokol",61:"classic",8:"ubiq",108:"thundercore",18:"thundercoreTestnet",163:"lightstreams",122:"fuse",15001:"maticTestnet"},u=function(e){var t,n;function u(t){var r,n=t.dAppId,i=t.networks,u=t.config,a=void 0===u?{}:u,h=i.map((function(e){return"number"==typeof e?e:Number(e.chainId)}));return h.every((function(e){return!!s[e]}))||(0,o.Z)(!1),(r=e.call(this,{supportedChainIds:h})||this).dAppId=n,r.networks=i,r.config=a,r.handleOnLogout=r.handleOnLogout.bind(c(r)),r.handleOnActiveWalletChanged=r.handleOnActiveWalletChanged.bind(c(r)),r.handleOnError=r.handleOnError.bind(c(r)),r}n=e,(t=u).prototype=Object.create(n.prototype),t.prototype.constructor=t,i(t,n);var a=u.prototype;return a.handleOnLogout=function(){this.emitDeactivate()},a.handleOnActiveWalletChanged=function(e){this.emitUpdate({account:e})},a.handleOnError=function(e){this.emitError(e)},a.activate=function(){try{var e=this,t=function(){return e.portis.onLogout(e.handleOnLogout),e.portis.onActiveWalletChanged(e.handleOnActiveWalletChanged),e.portis.onError(e.handleOnError),Promise.resolve(e.portis.provider.enable().then((function(e){return e[0]}))).then((function(t){return{provider:e.portis.provider,account:t}}))},n=function(){if(!e.portis)return Promise.resolve(Promise.all([r.e(872),r.e(351),r.e(327)]).then(r.t.bind(r,29866,23)).then((function(e){var t;return null!=(t=null==e?void 0:e.default)?t:e}))).then((function(t){e.portis=new t(e.dAppId,"number"==typeof e.networks[0]?s[e.networks[0]]:e.networks[0],e.config)}))}();return Promise.resolve(n&&n.then?n.then(t):t())}catch(o){return Promise.reject(o)}},a.getProvider=function(){try{return Promise.resolve(this.portis.provider)}catch(e){return Promise.reject(e)}},a.getChainId=function(){try{return Promise.resolve(this.portis.provider.send("eth_chainId"))}catch(e){return Promise.reject(e)}},a.getAccount=function(){try{return Promise.resolve(this.portis.provider.send("eth_accounts").then((function(e){return e[0]})))}catch(e){return Promise.reject(e)}},a.deactivate=function(){this.portis.onLogout((function(){})),this.portis.onActiveWalletChanged((function(){})),this.portis.onError((function(){}))},a.changeNetwork=function(e,t){try{var r=this;return"number"==typeof e?(s[e]||(0,o.Z)(!1),r.portis.changeNetwork(s[e],t),r.emitUpdate({chainId:e})):(r.portis.changeNetwork(e,t),r.emitUpdate({chainId:Number(e.chainId)})),Promise.resolve()}catch(n){return Promise.reject(n)}},a.close=function(){try{var e=this;return Promise.resolve(e.portis.logout()).then((function(){e.emitDeactivate()}))}catch(t){return Promise.reject(t)}},u}(n.Q)}}]);
//# sourceMappingURL=565-89bf480f71463bbfa720.js.map