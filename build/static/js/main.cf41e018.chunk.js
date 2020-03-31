(this.webpackJsonpcovid19=this.webpackJsonpcovid19||[]).push([[0],{164:function(e,t,a){e.exports=a(354)},169:function(e,t,a){},170:function(e,t,a){},172:function(e,t,a){},173:function(e,t,a){},351:function(e,t,a){},352:function(e,t,a){},353:function(e,t,a){},354:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(50),i=a.n(c),o=(a(169),a(170),a(51)),s=a(7),u=a(10),l=a.n(u),d=a(14),m="https://covid19.mathdro.id/api/";function f(e){return v.apply(this,arguments)}function v(){return(v=Object(d.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(m+t);case 2:return a=e.sent,e.next=5,a.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=Object(n.useState)(),a=Object(s.a)(t,2),r=a[0],c=a[1],i=Object(n.useState)(null),o=Object(s.a)(i,2),u=o[0],m=o[1];return Object(n.useEffect)((function(){function t(){return(t=Object(d.a)(l.a.mark((function t(){var a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,f(e);case 3:y(a=t.sent)?m(a.error.message):c(a),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),m(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}m(null),function(){t.apply(this,arguments)}()}),[e]),{stats:r,error:u}}function y(e){return void 0!==e.error}var E=a(27);function p(e){var t=Object(n.useState)({}),a=Object(s.a)(t,2),r=a[0],c=a[1];return Object(n.useEffect)((function(){function t(){return(t=Object(d.a)(l.a.mark((function t(){var a,n,r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=b(e,g()),n={},r=a.map((function(e){return e.toLocaleDateString().replace(/\//g,"-")})).map(function(){var e=Object(d.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f("daily/".concat(t));case 2:e.sent.forEach((function(e){var a=""!==e.confirmed?parseInt(e.confirmed):0,r=""!==e.recovered?parseInt(e.recovered):0,c=""!==e.deaths?parseInt(e.deaths):0;"Mainland China"===e.countryRegion&&(e.countryRegion="China"),n[e.countryRegion]?n[e.countryRegion][t]?(n[e.countryRegion][t].confirmed+=a,n[e.countryRegion][t].recovered+=r,n[e.countryRegion][t].deaths+=c):n[e.countryRegion][t]={confirmed:a,recovered:r,deaths:c}:n[e.countryRegion]=Object(E.a)({},t,{confirmed:a,recovered:r,deaths:c})}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),t.next=5,Promise.all(r);case 5:c(n);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]),r}function b(e,t){for(var a=[],n=new Date(e);n<t;)a.push(new Date(n)),n.setDate(n.getDate()+1);return a}function g(){var e=new Date;return e.setDate(e.getDate()-1),e}a(172);function j(e){return r.a.createElement("div",{className:"stats-summary"},e.title&&r.a.createElement("div",{className:"stats-title"},e.title),r.a.createElement("div",{className:"stats-group"},r.a.createElement("div",{className:"stat"},r.a.createElement("div",{className:"stat-label"},"confirmed"),r.a.createElement("div",{className:"stat-number"},e.confirmed)),r.a.createElement("div",{className:"stat recoverd"},r.a.createElement("div",{className:"stat-label"},"recovered"),r.a.createElement("div",{className:"stat-number"},e.recovered)),r.a.createElement("div",{className:"stat deaths"},r.a.createElement("div",{className:"stat-label"},"deaths"),r.a.createElement("div",{className:"stat-number"},e.deaths))))}a(173);var O=a(9),x=["#8884d8","#82ca9d","#84d892","#d8ae84","#d88484","#b184d8","#84d7d8","#cd84d8","#a384d8","#d8849a"];function k(e){return r.a.createElement("div",{className:"chart"},e.title&&r.a.createElement("div",{className:"chart-label"},e.title),r.a.createElement(O.f,{data:e.data,width:e.width?e.width:335,height:e.height?e.height:300,margin:{top:5,right:30,left:20,bottom:5}},r.a.createElement(O.c,{strokeDasharray:"3 3"}),r.a.createElement(O.h,{dataKey:e.xAxisKey}),r.a.createElement(O.i,null),r.a.createElement(O.g,null),r.a.createElement(O.d,null),e.yAxisKeys.map((function(e,t){return r.a.createElement(O.e,{type:"monotone",dot:!1,dataKey:e.key,key:e.key,stroke:e.color?e.color:x[t],fill:e.color?e.color:x[t],strokeWidth:2})}))))}a(351);function w(){return r.a.createElement("div",{className:"lds-ring"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))}function N(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)(),u=Object(s.a)(i,2),m=u[0],v=u[1],y=h().stats,b=h("daily").stats,g=function(e,t){var a=Object(n.useState)([]),r=Object(s.a)(a,2),c=r[0],i=r[1],o=Object(n.useState)({}),u=Object(s.a)(o,2),m=u[0],v=u[1],h=p(t);return Object(n.useEffect)((function(){function t(){return(t=Object(d.a)(l.a.mark((function t(){var a,n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f("confirmed");case 2:a=t.sent,n=a.reduce((function(e,t){return e[t.countryRegion]?e[t.countryRegion]+=t.confirmed:e[t.countryRegion]=t.confirmed,e}),{}),i(Object.entries(n).sort((function(e,t){return t[1]-e[1]})).slice(0,e).map((function(e){var t=Object(s.a)(e,2),a=t[0];t[1];return a})));case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e]),Object(n.useEffect)((function(){var e={};c&&Object.keys(h).length>0&&(c.map((function(e){return{stats:h[e],country:e}})).forEach((function(t){var a=t.stats,n=t.country;Object.entries(a).forEach((function(t){var a=Object(s.a)(t,2),r=a[0],c=a[1];e[r]?e[r][n]=c.confirmed:e[r]=Object(E.a)({},n,c.confirmed)}))})),console.log("dailyStats",e),v(e))}),[h]),{stats:m,names:c}}(10,new Date("3/1/2020")),O=g.stats,x=g.names;return Object(n.useEffect)((function(){c(Object.entries(O).sort((function(e,t){return new Date(e[0]).getTime()-new Date(t[0]).getTime()})).map((function(e){var t=Object(s.a)(e,2),a=t[0],n=t[1];return Object(o.a)({date:a},n)})))}),[O]),Object(n.useEffect)((function(){b&&v(b.map((function(e){return{date:e.reportDate,confirmed:e.totalConfirmed,deaths:e.deaths.total}})).sort((function(e,t){return new Date(e.date).getTime()-new Date(t.date).getTime()})))}),[b]),r.a.createElement(r.a.Fragment,null,!y&&r.a.createElement(w,null),y&&r.a.createElement("div",null,r.a.createElement(j,{confirmed:y.confirmed.value,recovered:y.recovered.value,deaths:y.deaths.value,title:"World's Stats"})),m&&r.a.createElement("div",{className:"charts-group"},r.a.createElement(k,{data:m,xAxisKey:"date",title:"Confirmed",yAxisKeys:[{key:"confirmed"}],width:450}),r.a.createElement(k,{data:m,xAxisKey:"date",title:"Deaths",yAxisKeys:[{key:"deaths",color:"red"}],width:450})),a&&x&&r.a.createElement(k,{data:a,xAxisKey:"date",title:"Top countries",yAxisKeys:x.map((function(e){return{key:e}})),width:1e3,height:450}))}a(352),a(353);function D(e){var t=h("countries").stats;return r.a.createElement("div",{className:"input-group"},r.a.createElement("div",{className:"input-label"},"Pick a country"),r.a.createElement("select",{className:"input",onChange:function(a){var n=a.currentTarget.value;e.setCountry(n),e.setCountryName(function(e){if(t){var a=t.countries.find((function(t){return e===t.iso2}));if(console.log("result",a),a)return a.name}return"cannot be found"}(n))},value:e.country},t&&t.countries.map((function(e){return r.a.createElement("option",{key:e.name,value:e.iso2},e.name)}))))}function K(e){return r.a.createElement(O.b,{width:e.width,height:e.height,data:e.data,margin:{top:5,right:30,left:20,bottom:5}},r.a.createElement(O.c,{strokeDasharray:"3 3"}),r.a.createElement(O.h,{dataKey:e.xAxisKey}),r.a.createElement(O.i,null),r.a.createElement(O.g,null),r.a.createElement(O.d,null),e.barKeys.map((function(e){return r.a.createElement(O.a,{dataKey:e.key,fill:e.color?e.color:"#8884d8"})})))}function S(){var e=Object(n.useState)("IL"),t=Object(s.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)("Israel"),u=Object(s.a)(i,2),l=u[0],d=u[1],m=Object(n.useState)(),f=Object(s.a)(m,2),v=f[0],y=f[1],E=Object(n.useState)(),b=Object(s.a)(E,2),g=b[0],O=b[1],x=h("countries/".concat(a)),N=x.stats,S=x.error,A=p(new Date("1/22/2020")),R=[{key:"confirmed"},{key:"recovered",color:"green"},{key:"deaths",color:"red"}];return Object(n.useEffect)((function(){A&&A[l]&&Object.entries(A[l]).length>0&&y(Object.entries(A[l]).map((function(e){var t=Object(s.a)(e,2),a=t[0],n=t[1];return Object(o.a)({date:a},n)})).sort((function(e,t){return new Date(e.date).getTime()-new Date(t.date).getTime()})))}),[l,A]),Object(n.useEffect)((function(){if(v){var e=[];v.reduce((function(t,a){return e.push({date:a.date,confirmedDelta:Math.abs(a.confirmed-t.confirmed),deathsDelta:Math.abs(a.deaths-t.deaths),recoveredDelta:Math.abs(a.recovered-t.recovered)}),a}),{date:"",confirmed:0,deaths:0,recovered:0}),O(e)}}),[v]),r.a.createElement(r.a.Fragment,null,!N&&r.a.createElement(w,null),N&&r.a.createElement("div",null,!S&&r.a.createElement(j,{confirmed:N.confirmed.value,deaths:N.deaths.value,recovered:N.recovered.value,title:l+"'s Stats"}),S&&r.a.createElement("div",null,"Could not find data for ",l," at the moment...")),r.a.createElement(D,{setCountry:c,setCountryName:d,country:a}),A&&v&&r.a.createElement(r.a.Fragment,null,r.a.createElement(k,{data:v,xAxisKey:"date",yAxisKeys:R,width:1e3}),r.a.createElement("div",{className:"charts-group"},R.map((function(e){return r.a.createElement("div",{key:e.key},r.a.createElement(k,{data:v,xAxisKey:"date",yAxisKeys:[e],title:e.key}))}))),r.a.createElement("div",{className:"charts-group"},[{key:"confirmedDelta"},{key:"recoveredDelta",color:"green"},{key:"deathsDelta",color:"red"}].map((function(e){return r.a.createElement("div",{key:e.key},r.a.createElement(K,{data:g,xAxisKey:"date",barKeys:[e],width:335,height:300}))})))))}function A(){return r.a.createElement("div",{className:"main"},r.a.createElement("div",{className:"title"},"Covid19 Statistics"),r.a.createElement("div",{className:"container"},r.a.createElement(N,null)),r.a.createElement("div",{className:"container"},r.a.createElement(S,null)))}i.a.render(r.a.createElement(A,null),document.getElementById("root"))}},[[164,1,2]]]);
//# sourceMappingURL=main.cf41e018.chunk.js.map