(this.webpackJsonppersonal_web=this.webpackJsonppersonal_web||[]).push([[0],{45:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},87:function(e,t,n){},88:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n(0),s=n.n(i),c=n(24),o=n.n(c),l=(n(57),n(8)),r=n(9),d=n(37),p=n(11),m=n(10),j=(n(58),n(59),n(60),n(7)),u=n(92),h=function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).onPageChange=function(){e.props.history.push(e.props.to)},e}return Object(r.a)(n,[{key:"render",value:function(){var e=this.props,t=e.isSmallScreen,n=e.active;return Object(a.jsxs)("div",{className:t?"menuitem_small":"menuitem",children:[Object(a.jsx)("div",{className:"".concat(t?"icon_button_small":"icon_button"," ").concat(n?"menuitem_active":null),onClick:this.onPageChange,children:Object(a.jsx)("span",{className:"iconfont menu_icon",children:this.props.icon})}),Object(a.jsx)("div",{className:t?"itemname_small":"itemname",children:Object(a.jsx)(u.a,{id:this.props.itemName})})]})}}]),n}(s.a.Component),b=Object(j.g)(h),O=(n(45),n(2)),g=n(14),x=function(e){return function(t){t({type:"TOGGLE_LANGUAGE",language:e})}},_=function(e){return{type:"TOGGLE_LANGUAGE",language:e}},v=function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).handleClick=function(){e.props.handleMenubarDisplay()},e}return Object(r.a)(n,[{key:"render",value:function(){var e=this.props,t=e.isSmallScreen,n=e.showMenuBar;return Object(a.jsx)("div",{className:t?"menu_container_small":"menu_container",children:Object(a.jsxs)("div",{className:t?"menu_small":"menu",children:[Object(a.jsxs)("div",{className:t?"logo_small":"logo",children:["Z",Object(a.jsx)("p",{style:{display:"inline",color:"#cf000f"},children:"."})]}),Object(a.jsxs)(O.b.div,{initial:"hide",animate:n?"show":"hide",variants:{hide:{opacity:0},show:{opacity:1}},transition:{duration:.3},className:"".concat(t?"itemlist_small":"itemlist"," ").concat(n?"show_bar":"hide_bar"),children:[Object(a.jsx)(b,{itemName:"home",icon:"\ue702",to:"home",active:"/home"===this.props.isOn,isSmallScreen:t}),Object(a.jsx)(b,{itemName:"about",icon:"\ue715",to:"about",active:"/about"===this.props.isOn,isSmallScreen:t}),Object(a.jsx)(b,{itemName:"resume",icon:"\ue6e6",to:"resume",active:"/resume"===this.props.isOn,isSmallScreen:t}),Object(a.jsx)(b,{itemName:"skill",icon:"\ue6f4",to:"skill",active:"/skill"===this.props.isOn,isSmallScreen:t}),Object(a.jsx)(b,{itemName:"contact",icon:"\ue70a",to:"contact",active:"/contact"===this.props.isOn,isSmallScreen:t})]}),Object(a.jsx)("div",{onClick:this.handleClick,className:t?"menubar_icon_small":"menubar_icon",children:Object(a.jsx)("span",{className:"middle_line ".concat(n?"opened":null)})})]})})}}]),n}(s.a.Component),f=Object(g.b)((function(e){return{isSmallScreen:e.isSmallScreen,showMenuBar:e.showMenuBar}}),{handleMenubarDisplay:function(){return function(e){e({type:"SWITCH_MENU_BAR"})}}})(v),N=(n(66),{pageInitial:{opacity:0,x:"-100%"},pageAnimate:{opacity:1,x:0},pageOut:{opacity:0,x:"100%"}}),S={rest:{opacity:1},hover:{opacity:0,transition:{duration:.4,type:"tween",ease:"easeIn"}}},y={rest:{opacity:0},hover:{opacity:1,transition:{duration:.4,type:"tween",ease:"easeInOut"}}},w={rest:{width:0,position:"absolute",transition:{duration:.3}},hover:{width:"100%",position:"absolute",transition:{duration:.3}}},k={rest:{height:0,position:"absolute",transition:{duration:.3}},hover:{height:"100%",position:"absolute",transition:{duration:.3,delay:.3}}},C={rest:{width:0,position:"absolute",transition:{duration:.3}},hover:{width:"100%",position:"absolute",transition:{duration:.3,delay:.6}}},I={rest:{height:0,position:"absolute",transition:{duration:.3}},hover:{height:"100%",position:"absolute",transition:{duration:1,delay:.9}}},M={position:"relative",scale:1.2,zIndex:100,transition:{duration:.3}},A={rest:{opacity:1},hover:{scale:1.05,transition:{duration:.4,type:"tween",ease:"easeIn"}}},E={rest:{opacity:0},hover:{opacity:1,transition:{duration:.4,type:"tween",ease:"easeInOut"}}},F=n(48),R=n.n(F),U=n(38),T={en:["<strong>an university student.</strong>^1000","<strong>an information engineer.</strong>^1000","<strong>a web developer.</strong>^1000"],fr:["<strong>un \xe9tudiant de l'UTC.</strong>^1000","<strong>un ing\xe9nieur informatique.</strong>^1000","<strong>un d\xe9veloppeur web.</strong>^1000"]},P=function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var e=this,t={typeSpeed:50,backSpeed:40,startDelay:500,backDelay:700,loop:!0,loopCount:1/0,onStringTyped:function(t,n){n.strings=T[e.props.intl.locale]},onBegin:function(t){t.strings=T[e.props.intl.locale]}};this.typed=new R.a(this.identity,t)}},{key:"componentWillUnmount",value:function(){this.typed.destroy()}},{key:"render",value:function(){var e=this;return Object(a.jsxs)(O.b.div,{className:"home_page",initial:"pageInitial",animate:"pageAnimate",exit:"pageOut",variants:N,transition:{duration:.6,type:"tween",ease:"anticipate"},children:[Object(a.jsx)(O.b.div,{initial:"authorIn",animate:"authorOut",variants:{authorIn:{scale:.7,opacity:0},authorOut:{scale:1,opacity:1}},transition:{delay:.5},className:"author",children:"Xianhua ZHOU"}),Object(a.jsxs)("div",{style:{color:"#a9a9a9",fontSize:"1.5rem",fontWeight:200},children:[Object(a.jsx)(u.a,{id:"present"}),"\xa0",Object(a.jsx)("span",{className:"identity",ref:function(t){e.identity=t}})]})]})}}]),n}(s.a.Component),H=Object(U.c)(P),D=(n(67),n.p+"static/media/utc.ef8ad4d7.jpg"),W=n.p+"static/media/cfm.c0118b16.png",L=n.p+"static/media/scorf.678cdcf5.png",z={en:[{pseudo:"UTC",title:"University of Technology of Compi\xe8gne",period:"2019 - 2022",desc:"Degree in computer engineering"},{pseudo:"SHU",title:"Shanghai University",period:"2016 - 2019",desc:"Bachelor's Degree in Computer Engineering"}],fr:[{pseudo:"UTC",title:"Universit\xe9 de Technologie de Compi\xe8gne",period:"2019 - 2022",desc:"Dipl\xf4me d'ing\xe9nieur en informatique"},{pseudo:"SHU",title:"Universit\xe9 de Shanghai",period:"2016 - 2019",desc:"Licence en G\xe9nie Informatique"}]},B={en:[{pseudo:"ScorfCDD",title:"Web developer in Scorf.io",period:"February 2022 - ",place:"Scorf.io, Paris",desc:"Maintenance of application, implementation of administration system."},{pseudo:"ScorfStage",title:"Internship developement of web in Scorf.io",period:"August 2021 - February 2022",place:"Scorf.io, Paris",desc:"Implementation of new features of the app, performance improvement, writing E2E test code, implementation of REST APIs with NodeJs."},{pseudo:"ProjetsUV",title:"School projects related to web application with security",period:"February 2021 - June 2021",place:"UTC, Compi\xe8gne",desc:"Realization of online chat rooms using JAVAEE and the WebSocket protocol, implementation of a security application allowing the simulation of bank transfers."},{pseudo:"MEMORAE",title:"Developement of the MEMORAe web platform",period:"August 2020 - March 2021",place:"UTC, Compi\xe8gne",desc:"Analysis, correction and addition of functionalities of the MEMORAe web platform, implement administration system, code clean."},{pseudo:"CFM",title:"Full-Stack intership in Capital Fund Management",period:"February 2020 - August 2020",place:"CFM, Paris - team IT Front Execution",desc:"Design and realization of UI of an application according to the user's request with Angular, implement REST APIs with Flask, manage Oracle database."},{pseudo:"HIKVISION",title:"Computer science internship in HIKVISION",period:"June 2019 - August 2019",place:"HIKVISION, Shanghai - team Fonctions-Support",desc:"Maintenance of a Webcam platform. After-sales service offer."},{pseudo:"PERSON",title:"Personal works concerning web development techniques",period:"2018 - 2019",place:"Shanghai / Compi\xe8gne",desc:"Practice HTML, JS, JQuery by creating some simple web pages."}],fr:[{pseudo:"ScorfCDD",title:"D\xe9veloppeur de l'application Business Intelligence",period:"F\xe9vrier 2022 - ",place:"Scorf.io, Paris",desc:"Maintenance de l'application, impl\xe9mentation de syst\xe8me d'administration."},{pseudo:"ScorfStage",title:"Stage D\xe9veloppement web chez Scorf.io",period:"Ao\xfbt 2021 - F\xe9vrier 2022",place:"Scorf.io, Paris",desc:"Impl\xe9mentaion des nouvelles fonctionnalit\xe9s de l'app, am\xe9lioration de la performance, r\xe9daction du code de test E2E, impl\xe9mentation des APIs REST avec NodeJs."},{pseudo:"ProjetsUV",title:"Projets UV li\xe9s \xe0 l'application web en s\xe9curit\xe9",period:"F\xe9vrier 2021 - Juin 2021",place:"UTC, Compi\xe8gne",desc:"R\xe9alisation des salles de discussion en ligne \xe0 l'aide de JAVAEE et le protocole WebSocket, impl\xe9mentation d'une application en s\xe9curit\xe9 permettant de faire de la simulation du virement bancaire."},{pseudo:"MEMORAE",title:"D\xe9veloppement web de la plateforme MEMORAe",period:"Ao\xfbt 2020 - Mars 2021",place:"UTC, Compi\xe8gne",desc:"Analyse, correction et am\xe9lioration des fonctionnalit\xe9s de la plateforme MEMORAe, impl\xe9mentation du syst\xe8me d'administration, nettoyage du code."},{pseudo:"CFM",title:"Stage Full-Stack chez Capital Fund Management",period:"F\xe9vrier 2020 - Ao\xfbt 2020",place:"CFM, Paris - \xe9quipe IT-Front Execution",desc:"Conception et r\xe9alisation de l'UI d'une application selon la demande de l'utilisateur (avec Angular), impl\xe9mentation des APIs REST avec Flask, gestion de la base de donn\xe9es Oracle."},{pseudo:"HIKVISION",title:"Stage assistant ing\xe9nieur informatique chez HIKVISION",period:"Juin 2019 - Ao\xfbt 2019",place:"HIKVISION, Shanghai - team Fonctions-Support",desc:"Maintenance de plateforme de webcam, offre service apr\xe8s vente."},{pseudo:"PERSON",title:"Projets personnels concernant techniques du d\xe9veloppement web",period:"2018 - 2019",place:"Shanghai / Compi\xe8gne",desc:"Apprentissage de HTML, JS, JQuery en cr\xe9ant des pages web simples."}]},J=function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){var e=this.props.intl.locale,t=z[e].length,n=z[e].map((function(e,n){return Object(a.jsxs)("article",{className:"timeline_item",style:n+1===t?{borderStyle:"hidden"}:null,children:[Object(a.jsx)("h5",{className:"timeline_title",children:e.title}),Object(a.jsx)("span",{className:"timeline_period",children:e.period}),Object(a.jsx)("p",{className:"timeline_description",children:e.desc})]},e.pseudo)})),i=B[e].length,s=B[e].map((function(e,t){return Object(a.jsxs)("article",{className:"timeline_item",style:t+1===i?{borderStyle:"hidden"}:null,children:[Object(a.jsx)("h5",{className:"timeline_title",children:e.title}),Object(a.jsx)("span",{className:"timeline_period",children:e.period}),Object(a.jsx)("p",{className:"timeline_description",children:e.desc})]},e.pseudo)}));return Object(a.jsxs)(O.b.div,{className:"resume_page ".concat(this.props.isSmallScreen?"smallscreen_page":null),initial:"pageInitial",animate:"pageAnimate",exit:"pageOut",variants:N,transition:{duration:.6,type:"tween",ease:"anticipate"},children:[Object(a.jsxs)("section",{className:"info_panel",children:[Object(a.jsx)("div",{className:"education_photo",children:Object(a.jsx)(O.b.img,{whileHover:M,src:D,alt:"",width:"100%"})}),Object(a.jsxs)("div",{className:"education_description",children:[Object(a.jsxs)("h3",{className:"resume_panel_title",children:[Object(a.jsx)("span",{className:"iconfont panel_title_icon",children:"\ue645"}),Object(a.jsx)(u.a,{id:"education"})]}),Object(a.jsx)("div",{className:"timeline",children:n})]})]}),Object(a.jsxs)("section",{className:"info_panel",children:[Object(a.jsxs)("div",{className:"experience_description",children:[Object(a.jsxs)("h3",{className:"resume_panel_title",children:[Object(a.jsx)("span",{className:"iconfont panel_title_icon",children:"\ue627"}),Object(a.jsx)(u.a,{id:"experience"})]}),Object(a.jsx)("div",{className:"timeline",children:s})]}),Object(a.jsxs)("div",{className:"experience_photos",children:[Object(a.jsx)("div",{className:"experience_photo",children:Object(a.jsx)(O.b.img,{whileHover:M,src:L,alt:"",width:"100%"})}),Object(a.jsx)("div",{className:"experience_photo",children:Object(a.jsx)(O.b.img,{whileHover:M,src:W,alt:"",width:"100%"})})]})]})]})}}]),n}(s.a.Component),V=Object(U.c)(Object(g.b)((function(e){return{isSmallScreen:e.isSmallScreen}}))(J)),G=(n(68),n(69),function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={progress:"0%"},a}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=0,n=setInterval((function(){t++,e.setState({progress:t+"%"}),t===e.props.percentage&&clearInterval(n)}),10)}},{key:"render",value:function(){return Object(a.jsxs)("div",{className:"ability",children:[Object(a.jsx)("div",{className:"ability_bar_title",children:Object(a.jsxs)("h5",{className:"barname",children:[this.props.title,Object(a.jsx)("span",{className:"bar_percentage",children:this.state.progress})]})}),Object(a.jsx)("div",{className:"bar_container",children:Object(a.jsx)(O.b.div,{className:"bar_content",initial:"begin",animate:"end",variants:{begin:{width:0},end:{width:this.props.percentage+"%"}},s:!0,transition:{duration:1,type:"spring",stiffness:30,damping:5}})})]})}}]),n}(s.a.Component)),q=n.p+"static/media/me.5d7b6c40.png",K=function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(a.jsx)(O.b.div,{className:"skill_page ".concat(this.props.isSmallScreen?"smallscreen_page":null),initial:"pageInitial",animate:"pageAnimate",exit:"pageOut",variants:N,transition:{duration:.6,type:"tween",ease:"anticipate"},children:Object(a.jsxs)("section",{className:"skill_panel",children:[Object(a.jsxs)(O.b.div,{className:"skill_photo_container",initial:"rest",whileHover:"hover",animate:"rest",children:[Object(a.jsxs)("div",{className:"borders",children:[Object(a.jsx)(O.b.span,{className:"top",variants:w}),Object(a.jsx)(O.b.span,{className:"right",variants:k}),Object(a.jsx)(O.b.span,{className:"bottom",variants:C}),Object(a.jsx)(O.b.span,{className:"left",variants:I})]}),Object(a.jsx)(O.b.img,{className:"photo_front",src:q,alt:"",width:"100%",variants:S}),Object(a.jsxs)(O.b.div,{className:"photo_back",variants:y,children:[Object(a.jsx)("h5",{className:"photo_back_begin",children:"Studying"}),Object(a.jsx)("h1",{className:"photo_back_middle",children:"NEVER"}),Object(a.jsx)("h5",{className:"photo_back_end",children:"Stop"})]})]}),Object(a.jsxs)("div",{className:"skill_content",children:[Object(a.jsx)("h2",{className:"skill_title",children:Object(a.jsx)(u.a,{id:"capacity"})}),Object(a.jsx)("p",{className:"skill_description",children:Object(a.jsx)(u.a,{id:"capacity_description"})}),Object(a.jsx)(G,{percentage:70,title:"Linux"}),Object(a.jsx)(G,{percentage:80,title:"Git"}),Object(a.jsx)(G,{percentage:60,title:"Devops"}),Object(a.jsx)(G,{percentage:75,title:"Cypress"}),Object(a.jsx)(G,{percentage:90,title:"React"}),Object(a.jsx)(G,{percentage:85,title:"SQL"}),Object(a.jsx)(G,{percentage:70,title:"Python"}),Object(a.jsx)(G,{percentage:30,title:"Angular"}),Object(a.jsx)(G,{percentage:25,title:"J2EE"})]})]})})}}]),n}(s.a.Component),Z=Object(g.b)((function(e){return{isSmallScreen:e.isSmallScreen}}))(K),Q=(n(70),n.p+"static/media/traveller.dfc567e9.png"),X=n.p+"static/media/developer.6713c8f9.png",Y=n.p+"static/media/student.c70265c9.png",$=function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(a.jsxs)(O.b.div,{className:"about_page ".concat(this.props.isSmallScreen?"smallscreen_page":null),initial:"pageInitial",animate:"pageAnimate",exit:"pageOut",variants:N,transition:{duration:.6,type:"tween",ease:"anticipate"},children:[Object(a.jsx)("h1",{className:"about_texts_title",children:Object(a.jsx)(u.a,{id:"about_title"})}),Object(a.jsx)("section",{className:"about_panel",children:Object(a.jsxs)("div",{className:"about_texts",children:[Object(a.jsx)("div",{className:"descriptions_container",children:Object(a.jsx)("p",{className:"descriptions",children:Object(a.jsx)(u.a,{id:"about_description"})})}),Object(a.jsxs)("div",{className:"info_list",children:[Object(a.jsxs)("section",{className:"info_item_column",children:[Object(a.jsxs)("div",{className:"info_item",children:[Object(a.jsxs)("h3",{className:"info_item_title",children:[Object(a.jsx)(u.a,{id:"first_name"}),":"]}),Object(a.jsx)("p",{className:"info_item_content",children:"Xianhua"})]}),Object(a.jsxs)("div",{className:"info_item",children:[Object(a.jsxs)("h3",{className:"info_item_title",children:[Object(a.jsx)(u.a,{id:"last_name"}),":"]}),Object(a.jsx)("p",{className:"info_item_content",children:"ZHOU"})]})]}),Object(a.jsxs)("section",{className:"info_item_column",children:[Object(a.jsxs)("div",{className:"info_item",children:[Object(a.jsxs)("h3",{className:"info_item_title",children:[Object(a.jsx)(u.a,{id:"age"}),":"]}),Object(a.jsx)("p",{className:"info_item_content",children:"25"})]}),Object(a.jsxs)("div",{className:"info_item",children:[Object(a.jsxs)("h3",{className:"info_item_title",children:[Object(a.jsx)(u.a,{id:"residence"}),":"]}),Object(a.jsx)("p",{className:"info_item_content",children:"France"})]})]})]})]})}),Object(a.jsx)(O.b.div,{className:"separator",initial:{width:0},animate:{width:"80%"},transition:{duration:.3,delay:.4}}),Object(a.jsxs)("section",{className:"about_panel",children:[Object(a.jsx)("h2",{className:"about_photo_title",children:Object(a.jsx)(u.a,{id:"who_i_am"})}),Object(a.jsx)("div",{className:"about_photos",children:Object(a.jsxs)("section",{className:"about_photo_content",children:[Object(a.jsxs)(O.b.div,{className:"photo_container",initial:"rest",whileHover:"hover",animate:"rest",children:[Object(a.jsx)(O.b.img,{className:"blur_photo",src:X,alt:"",width:"100%",height:"300px",variants:A}),Object(a.jsxs)(O.b.div,{className:"blur_photo_back",variants:E,children:[Object(a.jsx)("h5",{className:"blur_photo_back_title",children:Object(a.jsx)(u.a,{id:"developer"})}),Object(a.jsx)(u.a,{id:"fullstack"})]})]}),Object(a.jsxs)(O.b.div,{className:"photo_container",initial:"rest",whileHover:"hover",animate:"rest",children:[Object(a.jsx)(O.b.img,{className:"blur_photo",src:Y,alt:"",width:"100%",height:"300px",variants:A}),Object(a.jsxs)(O.b.div,{className:"blur_photo_back",variants:E,children:[Object(a.jsx)("h5",{className:"blur_photo_back_title",children:Object(a.jsx)(u.a,{id:"student"})}),Object(a.jsx)(u.a,{id:"in_utc"})]})]}),Object(a.jsxs)(O.b.div,{className:"photo_container",initial:"rest",whileHover:"hover",animate:"rest",children:[Object(a.jsx)(O.b.img,{className:"blur_photo",src:Q,alt:"",width:"100%",height:"300px",variants:A}),Object(a.jsxs)(O.b.div,{className:"blur_photo_back",variants:E,children:[Object(a.jsx)("h5",{className:"blur_photo_back_title",children:Object(a.jsx)(u.a,{id:"traveller"})}),Object(a.jsx)(u.a,{id:"follow_heart"})]})]})]})})]})]})}}]),n}(s.a.Component),ee=Object(g.b)((function(e){return{isSmallScreen:e.isSmallScreen}}))($),te=(n(71),n(32)),ne={position:"relative"},ae=function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).onMarkerClick=function(e,t,n){return a.setState({selectedPlace:e,activeMarker:t,showingInfoWindow:!0})},a.onClose=function(e){a.state.showingInfoWindow&&a.setState({showingInfoWindow:!1,activeMarker:null})},a.state={selectedPlace:{},activeMarker:{},showingInfoWindow:!1},a}return Object(r.a)(n,[{key:"render",value:function(){return Object(a.jsx)(O.b.div,{className:"contact_page ".concat(this.props.isSmallScreen?"smallscreen_page":null),initial:"pageInitial",animate:"pageAnimate",exit:"pageOut",variants:N,transition:{duration:.6,type:"tween",ease:"anticipate"},children:Object(a.jsxs)("section",{className:"contact_panel",children:[Object(a.jsxs)("section",{className:"map",children:[Object(a.jsx)("div",{className:"map_title",children:Object(a.jsx)(u.a,{id:"location"})}),Object(a.jsxs)(te.Map,{google:this.props.google,zoom:14,containerStyle:ne,initialCenter:{lat:49.41235203166623,lng:2.8122966426523854},children:[Object(a.jsx)(te.Marker,{onClick:this.onMarkerClick,name:"My position",title:"My position",position:{lat:49.41235203166623,lng:2.8122966426523854}}),Object(a.jsx)(te.InfoWindow,{marker:this.state.activeMarker,visible:this.state.showingInfoWindow,onClose:this.onClose,children:Object(a.jsx)("div",{children:Object(a.jsx)("h4",{children:this.state.selectedPlace.name})})})]})]}),Object(a.jsxs)("div",{className:"contact_list",children:[Object(a.jsxs)("div",{className:"contact_item",children:[Object(a.jsx)("span",{className:"iconfont contact_item_icon",children:"\ue72f"}),Object(a.jsxs)("div",{className:"contact_item_description",children:[Object(a.jsx)("h2",{className:"contact_item_title",children:Object(a.jsx)(u.a,{id:"address"})}),Object(a.jsx)("p",{className:"contact_item_content",children:Object(a.jsx)(u.a,{id:"address_content"})})]})]}),Object(a.jsxs)("div",{className:"contact_item",children:[Object(a.jsx)("span",{className:"iconfont contact_item_icon",children:"\ue612"}),Object(a.jsxs)("div",{className:"contact_item_description",children:[Object(a.jsx)("h2",{className:"contact_item_title",children:Object(a.jsx)(u.a,{id:"mail"})}),Object(a.jsx)("p",{className:"contact_item_content",children:Object(a.jsx)(u.a,{id:"mail_content"})})]})]}),Object(a.jsxs)("div",{className:"contact_item",children:[Object(a.jsx)("span",{className:"iconfont contact_item_icon",children:"\ue622"}),Object(a.jsxs)("div",{className:"contact_item_description",children:[Object(a.jsx)("h2",{className:"contact_item_title",children:Object(a.jsx)(u.a,{id:"phone"})}),Object(a.jsx)("p",{className:"contact_item_content",children:Object(a.jsx)(u.a,{id:"phone_number"})})]})]}),Object(a.jsxs)("div",{className:"contact_item",children:[Object(a.jsx)("span",{className:"iconfont contact_item_icon",children:"\ue666"}),Object(a.jsxs)("div",{className:"contact_item_description",children:[Object(a.jsx)("h2",{className:"contact_item_title",children:Object(a.jsx)(u.a,{id:"others"})}),Object(a.jsx)("p",{className:"contact_item_content",children:Object(a.jsx)(u.a,{id:"others_content"})})]})]})]})]})})}}]),n}(s.a.Component),ie=Object(g.b)((function(e){return{isSmallScreen:e.isSmallScreen}}))(Object(te.GoogleApiWrapper)({apiKey:"AIzaSyD5nHI6LnQF2qinXK9R8S6s2oMmyJDTBac"})(ae)),se=(n(87),function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).toggleLang=function(t){t.target.dataset.lang!==e.props.language&&("EN"===e.props.language?e.props.toggleAppLanguage("FR"):e.props.toggleAppLanguage("EN"))},e}return Object(r.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"switch_container ".concat(this.props.isSmallScreen?"small_switch":null),"data-lang":this.props.language,onClick:this.toggleLang,children:[Object(a.jsx)(O.b.div,{layout:!0,transition:{type:"spring",damping:30,stiffness:700},className:"selected"}),Object(a.jsx)("div",{className:"lang_option","data-lang":"EN",children:"EN"}),Object(a.jsx)("div",{className:"lang_option","data-lang":"FR",children:"FR"})]})}}]),n}(s.a.Component)),ce=Object(g.b)((function(e){return{isSmallScreen:e.isSmallScreen,showMenuBar:e.showMenuBar,language:e.languageValue}}),{toggleAppLanguage:x})(se),oe=n(93),le=n(25),re=n(49),de=n(31),pe=window.localStorage;var me=Object(de.c)((function(e,t){var n=t.isSmallScreen,a=t.language;switch(t.type){case"WINDOW_RESIZE":return Object(le.a)(Object(le.a)({},e),{},{isSmallScreen:n,showMenuBar:!n});case"SWITCH_MENU_BAR":return Object(le.a)(Object(le.a)({},e),{},{showMenuBar:!e.showMenuBar});case"TOGGLE_LANGUAGE":return pe.setItem("language",a),Object(le.a)(Object(le.a)({},e),{},{languageValue:a});default:return e}}),{isSmallScreen:!1,showMenuBar:!0,languageValue:""},Object(de.a)(re.a)),je={en:{present:"I am",about_description:"Hello! My name is Xianhua ZHOU, a university student in UTC (University of Technology of Compi\xe8gne). I'm interested in web development, guitar and fitness.",first_name:"First Name",last_name:"Last name",age:"Age",residence:"Residence",who_i_am:"Who I Am",about_title:"About Me",developer:"Developer",fullstack:"of Full-Stack",student:"Student",in_utc:"in UTC",traveller:"Traveller",follow_heart:"follow heart",experience:"Experience",capacity:"My Capacity",capacity_description:"Passionate about web development!",location:"My Location",address:"Address",mail:"Mail",phone:"Phone",others:"Others",address_content:"Compi\xe8gne, France",mail_content:"zhouxianhua0@gmail.com",phone_number:"+33 0636109977",others_content:"None",home:"Home",resume:"Resume",skill:"Skill",contact:"Contact",about:"About",education:"Education"},fr:{present:"Je suis",about_description:"Bonjour! Je m'appelle Xianhua ZHOU, \xe9tudiant de l'UTC (Universit\xe9 de Technologie de Compi\xe8gne). J'adore le d\xe9veloppement web, la guitare et la gymnastique.",first_name:"Pr\xe9nom",last_name:"Nom",age:"Age",residence:"R\xe9sidence",who_i_am:"Qu'est-ce que je fais",about_title:"Pr\xe9sentation",developer:"D\xe9veloppeur",fullstack:"du Full-Stack",student:"Edudiant",in_utc:"de l'UTC",traveller:"Voyageur",follow_heart:"suivant mon coeur",experience:"Exp\xe9rience",capacity:"Mes Comp\xe9tences",capacity_description:"Passionn\xe9 par le d\xe9veloppement web!",location:"Ma position",address:"Adresse",mail:"Mail",phone:"T\xe9l\xe9phone",others:"Autres",address_content:"Compi\xe8gne, France",mail_content:"zhouxianhua0@gmail.com",phone_number:"+33 0636109977",others_content:"Non",home:"Home",resume:"R\xe9sum\xe9",skill:"Comp\xe9tence",contact:"Contact",about:"Pr\xe9sentation",education:"Education"}},ue=window.localStorage;ue&&("FR"===ue.language||"EN"===ue.language?me.dispatch(_(ue.language)):me.dispatch(_("EN")));var he=function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).handleResize=a.handleResize.bind(Object(d.a)(a)),a}return Object(r.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.handleResize);var e=window.innerWidth<900||window.innerHeight<520;this.props.handleWindowResize(e)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleResize)}},{key:"handleResize",value:function(e){var t=e.target.innerWidth<900||e.target.innerHeight<520;this.props.handleWindowResize(t)}},{key:"render",value:function(){var e=this.props,t=e.location,n=e.isSmallScreen,i="FR"===e.language?"fr":"en";return Object(a.jsx)(oe.a,{locale:i,messages:je[i],children:Object(a.jsxs)("div",{className:"App ".concat(n?"smallmode":null),children:[Object(a.jsx)(f,{isOn:t.pathname}),Object(a.jsx)(ce,{}),Object(a.jsx)(O.a,{children:Object(a.jsxs)(j.d,{location:t,children:[Object(a.jsx)(j.b,{path:"/resume",component:V,exact:!0}),Object(a.jsx)(j.b,{path:"/about",component:ee,exact:!0}),Object(a.jsx)(j.b,{path:"/skill",component:Z,exact:!0}),Object(a.jsx)(j.b,{path:"/contact",component:ie,exact:!0}),Object(a.jsx)(j.b,{path:"/home",component:H,exact:!0}),Object(a.jsx)(j.b,{path:"/",render:function(){return Object(a.jsx)(j.a,{to:"/home"})}})]},t.pathname)})]})})}}]),n}(s.a.Component),be=Object(g.b)((function(e){return{isSmallScreen:e.isSmallScreen,showMenuBar:e.showMenuBar,language:e.languageValue}}),{handleWindowResize:function(e){return function(t){t({type:"WINDOW_RESIZE",isSmallScreen:e})}},toggleAppLanguage:x})(Object(j.g)(he)),Oe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,94)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),a(e),i(e),s(e),c(e)}))},ge=n(35);o.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(g.a,{store:me,children:Object(a.jsx)(ge.a,{children:Object(a.jsx)(be,{})})})}),document.getElementById("root")),Oe()}},[[88,1,2]]]);
//# sourceMappingURL=main.cec02d78.chunk.js.map