(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{128:function(e,t,a){e.exports=a(265)},193:function(e,t,a){},195:function(e,t,a){},197:function(e,t,a){},263:function(e,t,a){},265:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(9),c=a.n(o),i=a(269),l=a(274),s=a(266),m=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function u(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}var d=a(29),f=a(30),h=a(33),p=a(31),g=a(32),E=a(272),v=a(50),b=a(273),y=a(268),w=a(14),k=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(h.a)(this,Object(p.a)(t).call(this,e))).state={current:"mail"},a.handleClick=function(e){a.props.history.push(e.key)},a.handleClick=a.handleClick.bind(Object(v.a)(Object(v.a)(a))),a}return Object(g.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return r.a.createElement(E.a.Header,null,r.a.createElement(y.a,{onClick:this.handleClick,selectedKeys:[this.state.current],mode:"horizontal",theme:"dark",defaultSelectedKeys:["home"],style:{lineHeight:"64px"}},r.a.createElement(y.a.Item,{key:"home"},r.a.createElement(w.a,{type:"home"}),"\u9996\u9875"),r.a.createElement(y.a.Item,{key:"explor"},r.a.createElement(w.a,{type:"star"}),"\u63a2\u7d22"),r.a.createElement(y.a.Item,{key:"ranking"},r.a.createElement(w.a,{type:"line-chart"}),"\u6392\u884c\u699c"),r.a.createElement(y.a.Item,{key:"signin",style:{float:"right"}},"\u767b\u5f55"),r.a.createElement(y.a.Item,{key:"signup",style:{float:"right"}},"\u6ce8\u518c")))}}]),t}(r.a.Component),C=Object(b.a)(k),j=(a(193),function(e){function t(){return Object(d.a)(this,t),Object(h.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"UserInfoCard"},r.a.createElement("div",{className:"UserInfoCard-bg"}),r.a.createElement("img",{alt:"face",src:"./img/face.png",className:"UserInfoCard-face-img"}),r.a.createElement("div",{className:"UserInfoCard-username"},"Tosone"),r.a.createElement("div",{className:"UserInfoCard-info"},r.a.createElement("div",{className:"UserInfoCard-info-left"},r.a.createElement("div",{className:"UserInfoCard-info-number"},"217"),r.a.createElement("div",{className:"UserInfoCard-info-intro"},"Snippets")),r.a.createElement("div",{className:"UserInfoCard-info-mid"},r.a.createElement("div",{className:"UserInfoCard-info-number"},"323"),r.a.createElement("div",{className:"UserInfoCard-info-intro"},"Following")),r.a.createElement("div",{className:"UserInfoCard-info-right"},r.a.createElement("div",{className:"UserInfoCard-info-number"},"479"),r.a.createElement("div",{className:"UserInfoCard-info-intro"},"Followers"))))}}]),t}(r.a.Component)),N=(a(195),function(e){function t(){return Object(d.a)(this,t),Object(h.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return r.a.createElement(E.a,null,r.a.createElement(C,null),r.a.createElement("div",{className:"main"},r.a.createElement("div",{className:"content"},"content"),r.a.createElement("div",{className:"content-sider"},r.a.createElement(j,null))),r.a.createElement(E.a.Footer,{style:{textAlign:"center"}},"Code Share \xa92018 Created by",r.a.createElement("a",{href:"https://github.com/tosone",target:"_blank",rel:"noopener noreferrer"},"Tosone")))}}]),t}(r.a.Component)),O=a(267),I=a(270),U=a(271),S=a(93),x=(a(197),O.a.Item),F=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).componentDidMount=function(){a.setState({current:"signin"})},a.handleSubmit=function(e){e.preventDefault(),a.props.form.validateFields(function(e,t){e||console.log("Received values of form: ",t)})},a}return Object(g.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this.props.form.getFieldDecorator;return r.a.createElement(E.a,null,r.a.createElement(C,null),r.a.createElement("div",{className:"login-form-wrap"},r.a.createElement(O.a,{onSubmit:this.handleSubmit,className:"login-form"},r.a.createElement(x,null,e("userName",{rules:[{required:!0,message:"Please input your username!"}]})(r.a.createElement(I.a,{prefix:r.a.createElement(w.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Username"}))),r.a.createElement(x,null,e("password",{rules:[{required:!0,message:"Please input your Password!"}]})(r.a.createElement(I.a,{prefix:r.a.createElement(w.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),type:"password",placeholder:"Password"}))),r.a.createElement(x,null,e("remember",{valuePropName:"checked",initialValue:!0})(r.a.createElement(U.a,null,"Remember me")),r.a.createElement("a",{className:"login-form-forgot",href:"script:;"},"Forgot password"),r.a.createElement(S.a,{type:"primary",htmlType:"submit",className:"login-form-button"},"Log in"),"Or ",r.a.createElement("a",{href:"script:;"},"register now!")))))}}]),t}(r.a.Component),P=O.a.create()(F);a(261),a(263);c.a.render(r.a.createElement(i.a,{basename:"/CodeShare"},r.a.createElement(l.a,null,r.a.createElement(s.a,{path:"/",exact:!0,component:N}),r.a.createElement(s.a,{path:"/home",exact:!0,component:N}),r.a.createElement(s.a,{path:"/signin",component:P}))),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/CodeShare",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/CodeShare","/service-worker.js");m?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):u(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):u(e)})}}()}},[[128,2,1]]]);
//# sourceMappingURL=main.e8531e0b.chunk.js.map