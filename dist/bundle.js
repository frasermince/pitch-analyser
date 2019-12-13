module.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=r(1),a=r(2);var u=void 0,c=void 0,s=void 0,l=void 0,d=void 0,f=void 0,v=void 0,h={microphone:!0,audioFile:!1,callback:null,returnNote:!0,returnCents:!1,decimals:2},g=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.args=t,this.lastFrequency=null,this.audioContext=null,this.analysePitch=this.analysePitch.bind(this),this.streamReceived=this.streamReceived.bind(this),this.initialize()}return o(e,[{key:"closeContext",value:function(e){e&&this.audioContext.close().then(function(){return e()})}},{key:"initialize",value:function(){this.audioContext=(0,i.detectAudioContext)(),u=(0,i.detectGetUserMedia)(),this instanceof e||(0,a.throwError)("constructor needs to be called with the 'new' keyword"),this.args.callback||(0,a.throwError)("A callback needs to be passed"),this.audioContext||(0,a.logError)("Your browser does not support Audio Context"),u||(0,a.logError)("Your brower does not support getUserMedia"),h=n({},h,this.args),u({audio:!0}).then(this.streamReceived).catch(a.throwError)}},{key:"analysePitch",value:function(){s.getFloatFrequencyData(d),s.getByteTimeDomainData(f);var e=(0,a.calculateFrequency)(d);if(e){var t=h,r=t.returnCents,n=t.returnNote,o=t.decimals,i=(t.callback,{frequency:(0,a.toDecimals)(e,o)});if(n){var u=(0,a.calculateNote)(e);i.note=u}if(n&&r){if(this.lastFrequency){var c=(0,a.calculateCents)(e,this.lastFrequency);i.cents=(0,a.toDecimals)(c,o)}this.lastFrequency=e}return i}return-1}},{key:"streamReceived",value:function(e){l=e,s=this.audioContext.createAnalyser(),d=new Float32Array(s.frequencyBinCount),f=new Uint8Array(s.frequencyBinCount),v=this.audioContext.createGain(),(c=this.audioContext.createMediaStreamSource(l)).connect(v),c.connect(s)}}]),e}();e.exports=g},function(e,t,r){"use strict";var n=function(e){return new Promise(function(t,r){navigator.getUserMedia(e,t,r)})};e.exports={detectAudioContext:function(){return window.AudioContext=window.AudioContext||window.webkitAudioContext,!!window.AudioContext&&new window.AudioContext},detectGetUserMedia:function(){return navigator.getUserMedia=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia,!!(navigator.mediaDevices&&navigator.mediaDevices.getUserMedia||navigator.getUserMedia)&&(navigator.mediaDevices&&navigator.mediaDevices.getUserMedia?navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices):n)}}},function(e,t,r){"use strict";var n=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],o=Math.round(440*Math.pow(2,-4.75)),i=function(e){return 12*Math.log2(e/o)};e.exports={calculateFrequency:function(e,t){var r=22050/1024;t&&t.rate&&(r=t.rate);for(var n=void 0,o=e[0],i=0;e.length>i;i++){var a=parseFloat(o),u=Math.max(o,e[i]);a!=u&&(o=u,n=i)}return n*r},calculateSemiTone:i,calculateCents:function(e,t){return 1200*Math.log2(t/e)},calculateNote:function(e){var t=i(e),r=function(e){return Math.floor(e/12)}(t),o=Math.floor(t%12);return n[o]+String(r)},toDecimals:function(e,t){return"number"!=typeof t?e:e.toFixed(t)},throwError:function(e){throw new Error("Something went wrong: "+e)},logError:function(e){console.error(e)}}}]);
//# sourceMappingURL=bundle.js.map