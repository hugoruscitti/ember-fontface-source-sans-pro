"use strict";define("dummy/acceptance-tests/main",["exports","ember-cli-sri/acceptance-tests/main"],function(e,t){e["default"]=t["default"]}),define("dummy/app",["exports","ember","ember/resolver","ember/load-initializers","dummy/config/environment"],function(e,t,n,a,r){var d;t["default"].MODEL_FACTORY_INJECTIONS=!0,d=t["default"].Application.extend({modulePrefix:r["default"].modulePrefix,podModulePrefix:r["default"].podModulePrefix,Resolver:n["default"]}),a["default"](d,r["default"].modulePrefix),e["default"]=d}),define("dummy/controllers/array",["exports","ember"],function(e,t){e["default"]=t["default"].Controller}),define("dummy/controllers/object",["exports","ember"],function(e,t){e["default"]=t["default"].Controller}),define("dummy/initializers/export-application-global",["exports","ember","dummy/config/environment"],function(e,t,n){function a(e,a){if(n["default"].exportApplicationGlobal!==!1){var r,d=n["default"].exportApplicationGlobal;r="string"==typeof d?d:t["default"].String.classify(n["default"].modulePrefix),window[r]||(window[r]=a,a.reopen({willDestroy:function(){this._super.apply(this,arguments),delete window[r]}}))}}e.initialize=a,e["default"]={name:"export-application-global",initialize:a}}),define("dummy/instance-initializers/app-version",["exports","dummy/config/environment","ember"],function(e,t,n){var a=n["default"].String.classify,r=!1;e["default"]={name:"App Version",initialize:function(e){if(!r){var d=a(e.toString());n["default"].libraries.register(d,t["default"].APP.version),r=!0}}}}),define("dummy/router",["exports","ember","dummy/config/environment"],function(e,t,n){var a=t["default"].Router.extend({location:n["default"].locationType});a.map(function(){}),e["default"]=a}),define("dummy/templates/application",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@1.13.5",loc:{source:null,start:{line:1,column:0},end:{line:31,column:0}},moduleName:"dummy/templates/application.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("div");e.setAttribute(n,"class","header");var a=e.createTextNode("\n    ");e.appendChild(n,a);var a=e.createElement("h1"),r=e.createTextNode("ember-fontface-source-sans-pro");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n\n    ");e.appendChild(n,a);var a=e.createElement("h2"),r=e.createTextNode("Inject a nice looking font easily");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n\n\n");e.appendChild(t,n);var n=e.createElement("div");e.setAttribute(n,"class","content");var a=e.createTextNode("\n  ");e.appendChild(n,a);var a=e.createElement("h2"),r=e.createTextNode("How to install it?");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n\n  ");e.appendChild(n,a);var a=e.createElement("p"),r=e.createTextNode("\n    ");e.appendChild(a,r);var r=e.createElement("pre"),d=e.createTextNode("ember install ember-fontface-source-sans-pro");e.appendChild(r,d),e.appendChild(a,r);var r=e.createTextNode("\n  ");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n\n  ");e.appendChild(n,a);var a=e.createElement("p"),r=e.createTextNode("\n  and then, set the font-family attribute in your stylesheet file (ie app/styles/app.css):\n  ");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n\n  ");e.appendChild(n,a);var a=e.createElement("p"),r=e.createTextNode("\n    ");e.appendChild(a,r);var r=e.createElement("pre"),d=e.createTextNode("body {\n    font-family: 'Source Sans Pro', sans-serif;\n}\n");e.appendChild(r,d),e.appendChild(a,r);var r=e.createTextNode("\n  ");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n\n");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createElement("div");e.setAttribute(n,"class","footer");var a=e.createTextNode("\nsee the ");e.appendChild(n,a);var a=e.createElement("a");e.setAttribute(a,"href","https://github.com/hugoruscitti/ember-fontface-source-sans-pro"),e.setAttribute(a,"target","_blank");var r=e.createTextNode("github repository");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode(".\n");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}())}),define("dummy/config/environment",["ember"],function(e){var t="dummy";try{var n=t+"/config/environment",a=e["default"].$('meta[name="'+n+'"]').attr("content"),r=JSON.parse(unescape(a));return{"default":r}}catch(d){throw new Error('Could not read config from meta tag with name "'+n+'".')}}),runningTests?require("dummy/tests/test-helper"):require("dummy/app")["default"].create({name:"ember-fontface-source-sans-pro",version:"0.0.3+538ce5eb"});