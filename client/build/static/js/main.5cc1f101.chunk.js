(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{14:function(e,t,n){e.exports={navBarContainer:"nav_navBarContainer__23AhY",link:"nav_link__1QpjF",sortContainer:"nav_sortContainer__1-RKJ",filtersContainer:"nav_filtersContainer__1OewB",selectContainer:"nav_selectContainer__C2NK9",inputActivityContainer:"nav_inputActivityContainer__10zIq",butn:"nav_butn__10mqp",link2:"nav_link2__sF-jc",butn2:"nav_butn2__3YYDP",buttonSearch:"nav_buttonSearch__2-WQR"}},16:function(e,t,n){e.exports={all:"countryId_all__KKMXq",link:"countryId_link__1cs3D",countryContainer:"countryId_countryContainer__3_sw4",imgContainer:"countryId_imgContainer__3t1NG",butn:"countryId_butn__2lCQN",activity:"countryId_activity__2B06i"}},22:function(e,t,n){e.exports={buttonSearch:"searchBar_buttonSearch___o4Oo",inputText:"searchBar_inputText__2JvJu"}},23:function(e,t,n){e.exports={link:"countryCard_link__1e1O9",countryContainer:"countryCard_countryContainer__1i24L",imgContainer:"countryCard_imgContainer__146wC",btn:"countryCard_btn__7Q_Wt"}},28:function(e,t,n){e.exports={grid:"countries_grid__3EKtZ",btn:"countries_btn__1hVw5",allcountries:"countries_allcountries__2KobK"}},31:function(e,t,n){e.exports={land:"landing_land__2ZvSf",link:"landing_link__3Q7I2",button:"landing_button__22yRU",divi:"landing_divi__1JpKs",title:"landing_title__3h7Dl"}},33:function(e,t,n){e.exports={imgContainer:"smallCountry_imgContainer__11AV2",text:"smallCountry_text__1AHyc"}},34:function(e,t,n){e.exports={link:"activityDetail_link__1-q7d",activities:"activityDetail_activities__1OkLE"}},35:function(e,t,n){e.exports={img:"notFound_img__E2-P5",msg:"notFound_msg__1Lg8t",button:"notFound_button__2nT0n"}},52:function(e,t,n){},53:function(e,t,n){},7:function(e,t,n){e.exports={navBarContainer:"activityForm_navBarContainer__3ux5f",inputName:"activityForm_inputName__1Dqyg",difficulty:"activityForm_difficulty__1f2Wp",duration:"activityForm_duration__2VB09",season:"activityForm_season__3JIq6",countries:"activityForm_countries__1sS4p",countries1:"activityForm_countries1__2qExS",link:"activityForm_link__2GF7T",btn:"activityForm_btn__3LT1s",btn1:"activityForm_btn1__11o_v",name:"activityForm_name__2mqfD",butn:"activityForm_butn__o9OIY",countryCont:"activityForm_countryCont__3aEGA",order:"activityForm_order__2DnZW"}},83:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),i=n(26),r=n.n(i),o=(n(52),n(53),n(5)),s=n(4),l=n(31),u=n.n(l),j=n(0);var b=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("h4",{className:u.a.title,children:" BIENVENIDOS \u2796 WELCOME "}),Object(j.jsx)(o.b,{to:"/home",children:Object(j.jsxs)("button",{className:u.a.button,children:[" ",Object(j.jsx)("h3",{children:" \ud83d\udee9PREPARADOS PARA VIAJAR\ud83d\udee9"})," "]})})]})},d=n(13),O=n(14),h=n.n(O),v=n(6),p=n(15),x=n.n(p),_=n(20),f=n(21),m=n.n(f);function y(){return function(){var e=Object(_.a)(x.a.mark((function e(t){var n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("http://localhost:3001/countries");case 2:return n=e.sent,e.abrupt("return",t({type:"GET_COUNTRIES",payload:n.data}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}function C(e){return function(){var t=Object(_.a)(x.a.mark((function t(n){var c;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,m.a.get("http://localhost:3001/countries?name=".concat(e));case 3:return c=t.sent,t.abrupt("return",n({type:"GET_NAME",payload:c.data}));case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}function g(e){return Object(_.a)(x.a.mark((function t(){var n;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,m.a.post("http://localhost:3001/activity/",e);case 3:n=t.sent,console.log("Aguarde, se est\xe1 creando la actividad: ",n),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log("Hubo un error, este es: ",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))}var N=n(22),E=n.n(N),A=function(){var e=Object(c.useState)(""),t=Object(d.a)(e,2),n=t[0],a=t[1],i=Object(v.c)(),r=function(){i(C(n))};return Object(j.jsxs)("div",{className:E.a.allInputs,children:[Object(j.jsx)("input",{className:E.a.inputText,type:"text",placeholder:"Buscar por nombre...",name:"input",autoComplete:"off",onChange:function(e){return function(e){a(e.target.value)}(e)}}),Object(j.jsxs)("div",{children:[Object(j.jsx)("button",{className:E.a.buttonSearch,onClick:function(){return r},children:"Buscar \ud83e\uddd0"}),Object(j.jsx)("button",{className:E.a.buttonSearch,onClick:function(){i(y())},children:"Reset \u267b"})]})]})},D=Object(v.b)((function(e){return{countries:e.countries}}),(function(e){return{ordenAZ:function(){return e({type:"ORDEN_AZ"})},ordenZA:function(){return e({type:"ORDEN_ZA"})},obtenerPaises:function(){return e(y())},ordenContinente:function(t){return e({type:"ORDEN_CONTINENTE",payload:t})},crearActividad:function(t){return e(g(t))},ordenPoblacion:function(){return e({type:"ORDEN_POBLACION"})},ordenPoblacionViceversa:function(){return e({type:"ORDEN_POBLACION_VICEVERSA"})}}}))((function(e){var t=e.obtenerPaises,n=e.ordenAZ,a=e.ordenZA,i=e.ordenContinente,r=e.ordenPoblacion,s=e.ordenPoblacionViceversa,l=(e.crearActividad,e.mostrarActividad),u=Object(c.useState)(""),b=Object(d.a)(u,2),O=b[0],p=b[1],x=Object(c.useState)(""),_=Object(d.a)(x,2),f=_[0],m=_[1],y=Object(c.useState)(""),C=Object(d.a)(y,2),g=C[0],N=C[1],E=Object(v.c)();Object(c.useEffect)((function(){f&&(t(),"all"!==f&&setTimeout((function(){E(i(f))}),300))}),[f,E]),Object(c.useEffect)((function(){"all"===O?t():"a-z"===O?n():"z-a"===O?a():"\u23eb population"===O?r():"\u23ec population"===O&&s()}),[O]);return Object(j.jsxs)("div",{className:h.a.navBartContainer,children:[Object(j.jsx)(o.b,{to:"/",children:Object(j.jsx)("button",{className:h.a.butn,children:"Inicio \u2714"})}),Object(j.jsxs)("div",{className:h.a.sortContainer,children:[Object(j.jsx)("p",{children:" Ordenar por: "}),Object(j.jsxs)("select",{onChange:function(e){return p(e.target.value)},children:[Object(j.jsx)("option",{value:"all",children:" \u2796 "}),Object(j.jsx)("option",{value:"a-z",children:" A-Z "}),Object(j.jsx)("option",{value:"z-a",children:" Z-A "}),Object(j.jsx)("option",{value:"\u23eb population",children:" \u23eb Poblaci\xf3n "}),Object(j.jsx)("option",{value:"\u23ec population",children:" \u23ec Poblaci\xf3n "})]}),Object(j.jsx)(A,{})]}),Object(j.jsxs)("div",{className:h.a.filtersContainer,children:[Object(j.jsx)("p",{children:" Filtrar por continente: "}),Object(j.jsx)("div",{className:h.a.selectContainer,children:Object(j.jsxs)("select",{onChange:function(e){console.log(e.target.value),m(e.target.value)},children:[Object(j.jsx)("option",{value:"all",children:" Todos "}),Object(j.jsx)("option",{value:"America",children:" Am\xe9rica "}),Object(j.jsx)("option",{value:"Europa",children:" Europa "}),Object(j.jsx)("option",{value:"Africa",children:" \xc1frica "}),Object(j.jsx)("option",{value:"Oceania",children:" Ocean\xeda "}),Object(j.jsx)("option",{value:"Asia",children:" Asia "})]})})]}),Object(j.jsxs)("div",{className:h.a.inputActivityContainer,children:[Object(j.jsx)("label",{children:" Actividad "}),Object(j.jsxs)("form",{children:[Object(j.jsx)("input",{className:h.a.inputText,placeholder:"Busca actividad...",type:"text",autoComplete:"off",value:g,onChange:function(e){e.preventDefault(),N(e.target.value)}}),Object(j.jsx)("button",{className:h.a.buttonSearch,onClick:function(e){e.preventDefault(),t(),setTimeout((function(){E(l(g))}),300),console.log(g),N("")},children:"Buscar \ud83e\uddd0"})]})]}),Object(j.jsx)("button",{className:h.a.butn2,children:Object(j.jsx)(o.b,{to:"/activities",className:h.a.link2,children:"CREA UNA ACTIVIDAD"})})]})})),I=(n(23),n(28)),k=n.n(I),R=function(){var e=Object(v.d)((function(e){return e.countries})),t=Object(c.useState)(0),n=Object(d.a)(t,2),a=n[0],i=n[1];Object(c.useEffect)((function(){i(0)}),[e]);var r=e.slice(a,a+9);return Object(j.jsxs)("div",{children:[Object(j.jsxs)("button",{onClick:function(){i(a<9?0:a-9)},className:k.a.btn,children:[" ","\u2796"," "]}),Object(j.jsxs)("button",{onClick:function(){e.length<=a+9?i(a):i(a+9)},className:k.a.btn,children:[" ","\u2796"," "]}),Object(j.jsx)("div",{className:k.a.grid,children:r.map((function(e){e.id,e.img,e.name,e.continent}))})]})};var S=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)(D,{}),Object(j.jsx)("div",{children:Object(j.jsx)(R,{})})]})},T=n(19),F=n(3),P=n(33),B=n.n(P),w=function(e){var t=e.name,n=e.img,c=e.id;return Object(j.jsx)("div",{children:Object(j.jsxs)("div",{children:[Object(j.jsx)("img",{className:B.a.imgContainer,src:n}),Object(j.jsxs)("p",{className:B.a.text,children:[" ",t," "]}),Object(j.jsxs)("p",{children:[" ",c," "]})]})})},V=n(7),L=n.n(V),G=function(){var e=Object(v.d)((function(e){return e.countries})),t=Object(c.useState)(""),n=Object(d.a)(t,2),a=n[0],i=n[1],r=Object(c.useState)(0),s=Object(d.a)(r,2),l=s[0],u=s[1],b=Object(v.c)();Object(c.useEffect)((function(){u(0)}),[e]);var O=e.slice(l,l+9),h=Object(c.useState)({name:"",difficulty:"",duration:"",season:"",countryID:[]}),p=Object(d.a)(h,2),x=p[0],_=p[1],f=function(e){e.preventDefault(),_(Object(F.a)(Object(F.a)({},x),{},Object(T.a)({},e.target.name,e.target.value)))},m=function(e){e.preventDefault(),_(Object(F.a)(Object(F.a)({},x),{},Object(T.a)({},e.target.name,x[e.target.name].concat(e.target.value)))),alert("Add countries successfully! \ud83d\ude01")};Object(c.useEffect)((function(){b(C(a))}),[a]);var y=function(e){e.preventDefault();var t=!0;if((x.name.length<2||!x.countryID.length>=1)&&(t=!1),!t)return alert("Some things were not filed. Please complete everything \ud83d\ude1c");b(g(x)).then((function(){return _({name:"",difficulty:"",duration:"",season:"",countryID:[]}),void i("")})).then((function(){return alert("Activity created successfully \ud83d\ude01")}))};return Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{className:L.a.navBarContainer,children:[Object(j.jsx)("button",{className:L.a.butn,children:Object(j.jsx)(o.b,{className:L.a.link,to:"/home",children:" \u23ea Volver "})}),Object(j.jsxs)("form",{className:L.a.navBarContainer,onSubmit:function(e){return y(e)},children:[Object(j.jsx)("div",{children:Object(j.jsx)("input",{className:L.a.inputName,type:"text",autoComplete:"off",placeholder:"Name of activity!",name:"name",value:x.name,onChange:f})}),Object(j.jsxs)("div",{children:[Object(j.jsx)("label",{children:"Dificultad"}),Object(j.jsxs)("select",{name:"difficulty",value:x.difficulty,id:"difficulty",onChange:f,children:[Object(j.jsx)("option",{value:""}),Object(j.jsx)("option",{value:1,children:" 1 "}),Object(j.jsx)("option",{value:2,children:" 2 "}),Object(j.jsx)("option",{value:3,children:" 3 "}),Object(j.jsx)("option",{value:4,children:" 4 "}),Object(j.jsx)("option",{value:5,children:" 5 "})]})]}),Object(j.jsxs)("div",{className:L.a.duration,children:[Object(j.jsx)("label",{children:"Duraci\xf3n"}),Object(j.jsxs)("select",{name:"duration",value:x.duration,id:"duration",onChange:f,children:[Object(j.jsx)("option",{value:""}),Object(j.jsx)("option",{value:1,children:" 1 "}),Object(j.jsx)("option",{value:2,children:" 2 "}),Object(j.jsx)("option",{value:3,children:" 3 "}),Object(j.jsx)("option",{value:4,children:" 4 "}),Object(j.jsx)("option",{value:5,children:" 5 "}),Object(j.jsx)("option",{value:6,children:" 6 "}),Object(j.jsx)("option",{value:7,children:" 7 "}),Object(j.jsx)("option",{value:8,children:" 8 "}),Object(j.jsx)("option",{value:9,children:" 9 "}),Object(j.jsx)("option",{value:10,children:" 10 "}),Object(j.jsx)("option",{value:11,children:" 11 "}),Object(j.jsx)("option",{value:12,children:" 12 "}),Object(j.jsx)("option",{value:13,children:" 13 "}),Object(j.jsx)("option",{value:14,children:" 14 "}),Object(j.jsx)("option",{value:15,children:" 15 "}),Object(j.jsx)("option",{value:16,children:" 16 "}),Object(j.jsx)("option",{value:17,children:" 17 "}),Object(j.jsx)("option",{value:18,children:" 18 "}),Object(j.jsx)("option",{value:19,children:" 19 "}),Object(j.jsx)("option",{value:20,children:" 20 "})]})]}),Object(j.jsxs)("div",{className:L.a.season,children:[Object(j.jsx)("label",{children:"En qu\xe9 estaci\xf3n se realiza?"}),Object(j.jsxs)("select",{name:"season",value:x.season,id:"season",onChange:f,children:[Object(j.jsx)("option",{value:""}),Object(j.jsx)("option",{value:"Verano",children:" Verano "}),Object(j.jsx)("option",{value:"Oto\xf1o",children:" Oto\xf1o "}),Object(j.jsx)("option",{value:"Invierno",children:" Invierno "}),Object(j.jsx)("option",{value:"Primavera",children:" Primavera "})]})]}),Object(j.jsxs)("div",{className:L.a.countries,children:[Object(j.jsx)("label",{children:" En qu\xe9 pa\xeds se agregar\xe1 la actividad? "}),Object(j.jsx)("input",{className:L.a.countries,type:"text",autoComplete:"off",placeholder:"Encuentra el pa\xeds que buscas!",onChange:function(e){e.preventDefault(),i(e.target.value)}})]}),Object(j.jsx)("div",{children:Object(j.jsx)("input",{className:L.a.btn1,type:"submit",value:"Add\ud83d\udca8"})})]})]}),Object(j.jsxs)("button",{onClick:function(){e.length<=l+9?u(l):u(l+9)},className:L.a.btn,children:[" ","\u2796"," "," "]}),Object(j.jsx)("div",{className:L.a.order,children:O.length<30?O.map((function(e){return Object(j.jsx)("div",{className:L.a.countryCont,children:Object(j.jsxs)("div",{children:[Object(j.jsx)(w,{name:e.name,img:e.img},e.id),Object(j.jsx)("button",{className:L.a.btn,onClick:m,value:e.id,name:"countrID",children:"AGREGAR"})]})})})):console.log("Tienes un error!\ud83d\ude22")})]})},Z=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)(G,{}),"\\"]})},q=n(34),K=n.n(q),J=function(e){var t=e.activities;return t&&t.length>0?Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:"\u2796\u2796\u2796\u2796\u2796\u2796\u2796\u2796\u2796\u2796\u2796\u2796\u2796"}),Object(j.jsx)("h3",{children:"Actividades de este pa\xeds: "}),Object(j.jsx)("table",{className:K.a.activities,children:t&&t.map((function(e){return Object(j.jsxs)("tr",{children:[Object(j.jsxs)("h5",{children:["Nombre: ",e.name," "]}),Object(j.jsxs)("h5",{children:["Duraci\xf3n: ",e.duration," "]}),Object(j.jsxs)("h5",{children:["Dificultad: ",e.difficulty," "]}),Object(j.jsxs)("h5",{children:["Estaci\xf3n: ",e.duration," "]}),Object(j.jsx)("h2",{children:"\u2796\u2796\u2796\u2796\u2796\u2796\u2796\u2796\u2796\u2796\u2796\u2796\u2796"})]},e.id)}))})]}):Object(j.jsxs)("h3",{children:["No se encuentran actividades en este pa\xeds! ",Object(j.jsxs)(o.b,{className:K.a.link,to:"/activities",children:[" ",Object(j.jsx)("p",{children:"\u23e9Click para agregar actividad\u23ea "})," "]})," "]})},U=n(16),W=n.n(U),Y=function(){var e=Object(v.d)((function(e){return e.countryDetail})),t=Object(v.c)(),n=Object(s.e)().id;return Object(c.useEffect)((function(){t(function(e){return function(){var t=Object(_.a)(x.a.mark((function t(n){var c;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.a.get("http://localhost:3001/countries/".concat(e));case 2:return c=t.sent,t.abrupt("return",n({type:"GET_DETAIL",payload:c.data}));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(n))}),[n]),Object(j.jsxs)("div",{className:W.a.all,children:[Object(j.jsx)("button",{className:W.a.butn,children:Object(j.jsx)(o.b,{className:W.a.link,to:"/home",children:" \u23ea Volver atr\xe1s "})}),Object(j.jsxs)("div",{className:W.a.countryContainer,children:[Object(j.jsxs)("h1",{children:[" ",e.name," "]}),Object(j.jsxs)("h3",{children:[" ",e.id," "]}),Object(j.jsx)("div",{className:W.a.imgContainer,children:Object(j.jsx)("img",{src:e.img,alt:"No img"})}),Object(j.jsxs)("h4",{children:["Continente: ",e.continent," "]}),Object(j.jsxs)("h4",{children:["Capital: ",e.capital," "]}),Object(j.jsxs)("h5",{children:["\xc1rea: ",e.area," "]}),Object(j.jsxs)("h5",{children:["Poblaci\xf3n: ",e.population," habitantes "]}),Object(j.jsx)("div",{className:W.a.activity,children:Object(j.jsx)(J,{countryName:e.name,activities:e.activities})})]})]})},z=n(35),M=n.n(z);var Q=function(){return Object(j.jsx)("div",{children:Object(j.jsxs)("div",{className:M.a.msg,children:[Object(j.jsx)("h1",{children:" YOU LOST KING \ud83e\udd74 "}),Object(j.jsx)("h3",{children:" YOUR HEAD UP, YOUR CROWN FALLS OFF, KING \ud83d\udc51 "}),Object(j.jsx)(o.b,{to:"/home",children:Object(j.jsx)("button",{className:M.a.button,children:"Volver a viajar \ud83d\udee9"})})]})})};var H=function(){var e=Object(v.c)();return Object(c.useEffect)((function(){e(y())}),[e]),Object(j.jsx)(o.a,{children:Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)(s.b,{children:[Object(j.jsx)(s.a,{exact:!0,path:"/",component:b}),Object(j.jsx)(s.a,{exact:!0,path:"/home",component:S}),Object(j.jsx)(s.a,{path:"/activities",component:Z}),Object(j.jsx)(s.a,{exact:!0,path:"/countries/:id",component:Y}),Object(j.jsx)(s.a,{path:"*",component:Q})]})})})},X=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,84)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),i(e),r(e)}))},$=n(27),ee=n(46),te=n(47),ne=function(e,t){return e.name<t.name?-1:e.name>t.name?1:0},ce=function(e,t){return e.population-t.population},ae={countries:[],countryDetail:[]},ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_COUNTRIES":case"GET_NAME":return Object(F.a)(Object(F.a)({},e),{},{countries:t.payload});case"GET_DETAIL":return Object(F.a)(Object(F.a)({},e),{},{countryDetail:t.payload});case"ORDER_ZA":return Object(F.a)(Object(F.a)({},e),{},{countries:e.countries.slice().sort(ne).reverse()});case"ORDER_POP":return Object(F.a)(Object(F.a)({},e),{},{countries:e.countries.slice().sort(ce)});case"ORDER_POP_REVERSE":return Object(F.a)(Object(F.a)({},e),{},{countries:e.countries.slice().sort(ce).reverse()});case"ORDER_CONTINENT":return Object(F.a)(Object(F.a)({},e),{},{countries:e.countries.filter((function(e){return e.continent===t.payload}))});case"SHOW_ACTIVITY":return Object(F.a)(Object(F.a)({},e),{},{countries:e.countries.filter((function(e){return e.activities.some((function(e){return e.name===t.payload}))}))});default:return e}},re=Object($.createStore)(ie,Object(ee.composeWithDevTools)(Object($.applyMiddleware)(te.a)));r.a.render(Object(j.jsx)(v.a,{store:re,children:Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(H,{})})}),document.getElementById("root")),X()}},[[83,1,2]]]);
//# sourceMappingURL=main.5cc1f101.chunk.js.map