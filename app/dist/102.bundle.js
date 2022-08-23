"use strict";(self.webpackChunkMultibrowser=self.webpackChunkMultibrowser||[]).push([[102],{84968:(e,t,a)=>{a.r(t),a.d(t,{default:()=>p});var l=a(67294),o=a(28216),c=a(39967),n=a(75386),r=a(26793),s=a(79672),m=a(9669),i=a.n(m);function u(e,t,a){return t.map(((t,l)=>{e[t]=a[l]})),e}const p=function(e){const[t,a]=(0,r.$)(),m=(0,o.I0)(),[p,d]=(0,l.useState)({isShow:!1}),b=(0,o.v9)((e=>e.browserConfig.geolocation));let g=b.behavior,h=b.lat,v=b.long,E=b.base,N=b.accuracy;(0,l.useEffect)((()=>{f(h,v)}),[b.lat,b.long]);const w=e=>{m((0,c.ug)(u({...b},["behavior"],[e.target.value])))},f=(e,t)=>{let a=s._n+s.o4+"?lat="+e+"&lng="+t;i()({method:"get",url:a}).then((e=>{d({...p,isShow:!0,data:e.data.content})})).catch((e=>{}))};return l.createElement("div",{className:"card-inner",id:"geolocation"},l.createElement("div",{className:"preview-block"},l.createElement("span",{className:"preview-title-lg overline-title"},t("Geolocation")),l.createElement("div",{className:"btn-group d-block pb-2 behavior"},l.createElement("div",{className:"custom-control custom-radio webrtc-group-input-type"},l.createElement("input",{type:"radio",name:"geolocationType",className:"custom-control-input",id:"geolocation-prompt",value:n.DP.behavior.prompt,defaultChecked:g==n.DP.behavior.prompt,onChange:w}),l.createElement("label",{className:"input-type btn",htmlFor:"geolocation-prompt"},t("Prompt"))),l.createElement("div",{className:"custom-control custom-radio webrtc-group-input-type"},l.createElement("input",{type:"radio",name:"geolocationType",className:"custom-control-input",id:"geolocation-allow",value:n.DP.behavior.allow,defaultChecked:g==n.DP.behavior.allow,onChange:w}),l.createElement("label",{className:"input-type btn",htmlFor:"geolocation-allow"},t("Allow"))),l.createElement("div",{className:"custom-control custom-radio webrtc-group-input-type"},l.createElement("input",{type:"radio",name:"geolocationType",className:"custom-control-input",id:"geolocation-block",value:n.DP.behavior.block,defaultChecked:g==n.DP.behavior.block,onChange:w}),l.createElement("label",{className:"input-type btn",htmlFor:"geolocation-block"},t("Block")))),g==n.DP.behavior.prompt?l.createElement("div",{className:"group-sub-text mb-2 prompt"},l.createElement("span",{className:"sub-text-icon"},l.createElement("i",{className:"fas fa-check"})),l.createElement("p",{className:"sub-text"},t("Geolocation text prompt"))):"",g==n.DP.behavior.allow?l.createElement("div",{className:"group-sub-text mb-2 allow"},l.createElement("span",{className:"sub-text-icon"},l.createElement("i",{className:"fas fa-exclamation-triangle"})),l.createElement("p",{className:"sub-text"},t("Geolocation text allow"))):"",g==n.DP.behavior.block?l.createElement("div",{className:"group-sub-text mb-2 allow"},l.createElement("span",{className:"sub-text-icon"},l.createElement("i",{className:"fas fa-exclamation-triangle"})),l.createElement("p",{className:"sub-text"},t("Geolocation text block"))):"",g==n.DP.behavior.prompt||g==n.DP.behavior.allow?l.createElement("div",{className:"custom-control custom-switch"},l.createElement("input",{type:"checkbox",className:"custom-control-input",id:"geolocation-input-base",checked:b.base==n.DP.base.true,onChange:e=>{m((0,c.ug)(u({...b},["base"],[e.target.checked?n.DP.base.true:n.DP.base.false])))}}),l.createElement("label",{className:"custom-control-label",htmlFor:"geolocation-input-base"},t("Fill WebRTC Public IP based on the IP."))):"",g!=n.DP.behavior.prompt&&g!=n.DP.behavior.allow||E!=n.DP.base.false?"":l.createElement("div",{className:"d-block pt-3"},l.createElement("div",{className:"row gy-4 align-center"},l.createElement("div",{className:"col-12"},l.createElement("p",{className:"nk-block-des"},t("Fill geolocation coordinates on browser profile start based on the external IP.")))),l.createElement("div",{className:"form-group w-50"},l.createElement("label",{className:"form-label",htmlFor:"geolocation_latitude"},t("Latitude"),":"),l.createElement("div",{className:"form-control-wrap"},l.createElement("input",{type:"text",className:"form-control",id:"geolocation_latitude",placeholder:"Latitude",value:h,onChange:e=>{m((0,c.ug)(u({...b},["lat"],[e.target.value]))),d({...p,isShow:!1}),f(b.lat,b.long)}}))),l.createElement("div",{className:"form-group w-50"},l.createElement("label",{className:"form-label",htmlFor:"geolocation_longtitude"},t("Longtitude"),":"),l.createElement("div",{className:"form-control-wrap"},l.createElement("input",{type:"text",className:"form-control",id:"geolocation_longtitude",placeholder:"Longtitude",value:v,onChange:e=>{m((0,c.ug)(u({...b},["long"],[e.target.value]))),d({...p,isShow:!1}),f(b.lat,b.long)}}))),l.createElement("div",{className:"form-group w-50"},l.createElement("label",{className:"form-label"},t("Accuracy"),": ",l.createElement("span",{className:"text-success"},N," ",t("meters"))),l.createElement("div",{className:"form-control-wrap"},l.createElement("div",{className:"form-control-slider noUi-target noUi-ltr noUi-horizontal noUi-txt-dir-ltr","data-start":"30",id:"Default-Range"},l.createElement("div",{className:"noUi-base"},l.createElement("input",{onChange:e=>{m((0,c.ug)(u({...b},["accuracy"],[e.target.value])))},type:"range",className:"form-range",min:"0",max:"100",value:N,step:"10",id:"customRange3"}))))),p.isShow&&p.data?l.createElement("div",{className:"custom-control custom-control-sm custom-radio custom-control-pro checked"},l.createElement("input",{type:"radio",className:"custom-control-input",name:"address_client",id:"address_client"}),l.createElement("label",{className:"custom-control-label",htmlFor:"address_client",onClick:e=>{m((0,c.ug)(u({...b},["lat","long"],[p.data.geometry.lat,p.data.geometry.lng])))}},`${p.data.address} (${p.data.geometry.lat} - ${p.data.geometry.lng})`)):"")))}}}]);