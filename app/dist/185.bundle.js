"use strict";(self.webpackChunkMultibrowser=self.webpackChunkMultibrowser||[]).push([[185],{32866:(e,t,a)=>{a.d(t,{B:()=>o});var r=a(67294),l=a(87536),o=function(e){var t=e.as,a=e.errors,o=e.name,n=e.message,s=e.render,c=function(e,t){if(null==e)return{};var a,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)t.indexOf(a=o[r])>=0||(l[a]=e[a]);return l}(e,["as","errors","name","message","render"]),m=(0,l.Gc)(),i=(0,l.U2)(a||m.formState.errors,o);if(!i)return null;var p=i.message,u=i.types,d=Object.assign({},c,{children:p||n});return r.isValidElement(t)?r.cloneElement(t,d):s?s({message:p||n,messages:u}):r.createElement(t||r.Fragment,d)}},33185:(e,t,a)=>{a.r(t),a.d(t,{default:()=>w});var r=a(67294),l=a(28216),o=a(92200),n=a(26793),s=a(39967),c=a(73244),m=a(19604);function i({isShowing:e,modalName:t,data:a,hide:o},i){const[p,u]=(0,n.$)(),d=(0,l.I0)(),[f,E]=(0,r.useState)(0),v=(0,l.v9)((e=>e.browserConfig.proxy)),[g,y]=(0,r.useState)(v);(0,r.useEffect)((()=>{e||y("")}),[e]),(0,r.useEffect)((()=>{y(v)}),[v]);const b=(0,r.useRef)();return(0,r.useImperativeHandle)(i,(()=>({reloadTable(){b.current.reloadTable(!0)}}))),r.createElement(m.X,null,r.createElement("div",{className:e&&t.includes("proxyList")?"modal fade show d-block":"modal fade",tabIndex:"-1",id:"proxyModal"},r.createElement("div",{className:"modal-dialog modal-lg",role:"document"},r.createElement("div",{className:"modal-content",id:"proxyModalConten"},r.createElement("button",{className:"close btn-close-modal",onClick:o},r.createElement("em",{className:"icon ni ni-cross"})),r.createElement("div",{className:"modal-header d-block"},r.createElement("h5",{className:"modal-title"},p("Proxies")),r.createElement("div",{className:"nk-block-des text-soft"},r.createElement("p",null,p("You have total")+" "+(f>1?f+" "+p("proxies"):f+" "+p("proxy"))+"."))),r.createElement("div",{className:"modal-body overflow-auto"},r.createElement(c.Z,{getTotal:e=>{E(e)},ref:b,handleChangCheckedProxy:e=>{const t=JSON.parse(e.target.getAttribute("data-data"));y({...g,...t})}})),r.createElement("div",{className:"modal-footer bg-light"},r.createElement("button",{className:"btn btn-dim btn-outline-primary",onClick:e=>{d((0,s.P4)(g)),o()}},p("Submit")))))))}const p=(0,r.forwardRef)(i);var u=a(32544),d=a(30853),f=a(27018),E=a(87536),v=a(32866),g=a(45954),y=a(30737),b=a(24098),h=a(65436),N=a(9703);function x(){return x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},x.apply(this,arguments)}const w=function(e){const[t,a]=(0,n.$)(),c=(0,l.I0)(),m=(0,l.v9)((e=>e.browserConfig.proxy)),[i,w]=(0,r.useState)(!1),[k,S]=(0,r.useState)((0,N.w)()),[P,C]=(0,r.useState)(!1),[I,O]=(0,r.useState)(!1),R=(0,r.useRef)(!0),{isShowing:T,modalName:F,modalData:q,toggle:B}=(0,o.Z)();let H="Without proxy"!=m.type,Z=m.type,L=m.ip,M=m.port,_=m.user,j=m.pass;const{register:z,handleSubmit:J,reset:W,formState:{errors:X}}=(0,E.cI)();(0,r.useEffect)((()=>{W()}),[m]),(0,r.useEffect)((()=>()=>{R.current=!1}),[]);const U=e=>{w(e)},K=e=>{O(e),C(e)},V=(0,r.useRef)(),Y=(e,t,a)=>(t.map(((t,r)=>{e[t]=a[r]})),e);return r.createElement("div",{className:"card-inner"},r.createElement("div",{className:"preview-block"},r.createElement("form",{onSubmit:J((e=>{U(!1),c((0,s.qR)(Y({...m},["isProxy"],[!1]))),K(!0),c((0,b.mZ)(!0)),(0,u.ZP)(k,m,(e=>{R.current&&(w(e),"live"==e.status?((e=>{const t={status:e.status??"",ip:e.info.ip??"",loc:e.info.loc??"",org:e.info.org??"",city:e.info.city??"",postal:e.info.postal??"",region:e.info.region??"",country:e.info.country??"",hostname:e.info.hostname??"",timezone:e.info.timezone??""};c((0,s.tR)(!0)),c((0,s.sj)(t)),c((0,s.Xg)(t))})(e),f.ZP.simpleToast({type:"success",title:t("Valid proxy.")})):f.ZP.simpleToast({type:"error",title:t("Invalid proxy.")}),K(!1))}))}))},r.createElement("div",{className:"form-control-wrap row form-group"},r.createElement("div",{className:"form-group"},r.createElement("label",{className:"form-label",htmlFor:"proxy-type"},t("Proxy type"),r.createElement("span",{className:"text-danger"}," *")),r.createElement("div",{className:"form-control-wrap d-flex gap-1 height-inherit"},r.createElement("div",{className:"form-control-select w-50"},r.createElement("select",{className:"form-control",id:"proxy-type",value:Z,onChange:e=>{U(!1),c((0,s.qR)(Y({...m},["type","isProxy","uuid"],[e.target.value,!1,""])))}},r.createElement("option",{value:"Without proxy"},t("Without proxy")),r.createElement("option",{value:"HTTP"},t("HTTP proxy")),r.createElement("option",{value:"SOCKS4"},t("Socks 4 proxy")),r.createElement("option",{value:"SOCKS5"},t("Socks 5 proxy")),r.createElement("option",{value:"SSH"},t("SSH (Proxy Over SSH)")))),r.createElement("div",{className:"form-control-wrap d-flex proxy-group-gap"},r.createElement("button",{type:"button",className:"btn-modal btn btn-dim btn-outline-success",id:"btnProxyModal",onClick:e=>{V.current.reloadTable(),B(!0,"proxyList",null)}},r.createElement("i",{className:"fas fa-history"})),r.createElement("button",{type:"button",className:"btn btn-dim btn-outline-danger",onClick:e=>{const t={...m};for(const e in t)t[e]="";if(c((0,s.qR)({...t,type:"Without proxy",isProxy:!1,checkBeforeStart:!0})),null!==localStorage.getItem("base_ip_infor")){const e=JSON.parse(localStorage.getItem("base_ip_infor"));c((0,s.Xg)(e))}else(0,y.J)().then((e=>{e.hasOwnProperty("ip")?(localStorage.setItem("base_ip_infor",JSON.stringify(e)),c((0,s.Xg)(e))):f.ZP.simpleToast({type:"error",title:g.xJ})}))}},r.createElement("i",{className:"fas fa-trash-alt"})))))),H?r.createElement("div",{className:"proxy-group"},r.createElement("div",{className:"form-group w-50"},r.createElement("label",{className:"form-label",htmlFor:"ip-address"},t("Proxy Host and Port"),r.createElement("span",{className:"text-danger"}," *")),r.createElement("div",{className:"form-control-wrap row"},r.createElement("div",{className:"form-control-wrap col-7 flex-grow-1 pe-0"},r.createElement("input",x({type:"text",className:"form-control",id:"ip-address",placeholder:t("Proxy Host and Port"),name:"ip-address"},z("ip-address",{value:L,required:g.ro,maxLength:{value:255,message:g.In}}),{onChange:e=>{U(!1),e.target.value.split(/[:|]+/).length>1?c((0,s.P4)((0,h.C)(e.target.value))):c((0,s.qR)(Y({...m},["ip","isProxy","uuid"],[e.target.value,!1,""])))}}))),r.createElement("div",{className:"form-control-wrap col-3"},r.createElement("input",x({type:"text",className:"form-control",id:"ip-address-port",placeholder:"Port"},z("port",{value:M,pattern:{value:g.Ym,message:g.oT}}),{onChange:e=>{U(!1),c((0,s.qR)(Y({...m},["port","isProxy","uuid"],[e.target.value,!1,""])))}}))),r.createElement(v.B,{errors:X,name:"ip-address",as:"p",className:"validateFail"}),r.createElement(v.B,{errors:X,name:"port",as:"p",className:"validateFail"}))),r.createElement("div",{className:"form-group w-50"},r.createElement("label",{className:"form-label",htmlFor:"proxy-uname"},t("Username")),r.createElement("div",{className:"form-control-wrap"},r.createElement("div",{className:"form-control-wrap"},r.createElement("input",x({type:"text",className:"form-control",id:"proxy-uname",placeholder:"Username"},z("username",{value:_,maxLength:{value:255,message:g.In}}),{onChange:e=>{U(!1),c((0,s.qR)(Y({...m},["user","isProxy","uuid"],[e.target.value,!1,""])))}})))),r.createElement(v.B,{errors:X,name:"username",as:"p",className:"validateFail"})),r.createElement("div",{className:"form-group w-50"},r.createElement("label",{className:"form-label",htmlFor:"proxy-password"},t("Password")),r.createElement("div",{className:"form-control-wrap"},r.createElement("div",{className:"form-control-wrap"},r.createElement("input",x({type:"text",className:"form-control",id:"proxy-password",placeholder:"Password"},z("password",{value:j,maxLength:{value:255,message:g.In}}),{onChange:e=>{U(!1),c((0,s.qR)(Y({...m},["pass","isProxy","uuid"],[e.target.value,!1,""])))}})))),r.createElement(v.B,{errors:X,name:"password",as:"p",className:"validateFail"})),r.createElement("div",{className:"d-block"},r.createElement("div",{className:"form-group w-50"},r.createElement("label",{className:"form-label",htmlFor:"proxy-check-host"},t("Check proxy host"),r.createElement("span",{className:"text-danger"}," *")),r.createElement("div",{className:"form-control-wrap "},r.createElement("div",{className:"form-control-select"},r.createElement("select",{className:"form-control",value:k,onChange:e=>{S(e.target.value)},id:"proxy-check-host"},r.createElement("option",{value:"multibrowser.io"},"Multibrowser.io"),r.createElement("option",{value:"ipinfo.io"},"Ipinfo.io"),r.createElement("option",{value:"ipgeolocation.io"},"Ipgeolocation.io"),r.createElement("option",{value:"api.ip.sb"},"api.ip.sb"))))),r.createElement("div",{className:"form-group w-50"},r.createElement("div",{className:"custom-control custom-switch"},r.createElement("input",{type:"checkbox",className:"custom-control-input",id:"check-proxy-before-start",checked:m.checkBeforeStart,onChange:e=>{c((0,s.qR)(Y({...m},["checkBeforeStart"],[!m.checkBeforeStart])))}}),r.createElement("label",{className:"custom-control-label",htmlFor:"check-proxy-before-start"},t("Check proxy before start profile.")))),r.createElement("div",{className:"form-group w-50"},r.createElement("button",{disabled:I,type:"submit",className:"btn btn-dim btn-outline-info"},t("Check Proxy")),P&&r.createElement("img",{style:{height:"50px"},src:d,alt:""})),"live"==i.status?r.createElement("div",{className:"form-group w-50 text-success"},r.createElement("div",{className:"d-block"},r.createElement("span",null,t("ip"),": "),r.createElement("span",null,i.info.ip)),(()=>{if(""!==i.info.loc)return r.createElement("div",{className:"d-block"},r.createElement("span",null,t("loc"),": "),r.createElement("span",null,i.info.loc))})(),(()=>{if(""!==i.info.org)return r.createElement("div",{className:"d-block"},r.createElement("span",null,t("org"),": "),r.createElement("span",null,i.info.org))})(),(()=>{if(""!==i.info.city)return r.createElement("div",{className:"d-block"},r.createElement("span",null,t("city"),": "),r.createElement("span",null,i.info.city))})(),(()=>{if(""!==i.info.postal)return r.createElement("div",{className:"d-block"},r.createElement("span",null,t("postal"),": "),r.createElement("span",null,i.info.postal))})(),(()=>{if(""!==i.info.region)return r.createElement("div",{className:"d-block"},r.createElement("span",null,t("region"),": "),r.createElement("span",null,i.info.region))})(),(()=>{if(""!==i.info.country)return r.createElement("div",{className:"d-block"},r.createElement("span",null,t("country"),": "),r.createElement("span",null,i.info.country))})(),(()=>{if(""!==i.info.hostname)return r.createElement("div",{className:"d-block"},r.createElement("span",null,t("hostname"),": "),r.createElement("span",null,i.info.hostname))})(),(()=>{if(""!==i.info.timezone)return r.createElement("div",{className:"d-block"},r.createElement("span",null,t("timezone"),": "),r.createElement("span",null,i.info.timezone))})()):"","die"==i.status?r.createElement("div",{className:"form-group w-50 text-danger"},r.createElement("div",{className:"d-block"},r.createElement("span",null,t("Invalid proxy. Cannot use this proxy!")))):"")):"")),r.createElement(p,{isShowing:T,modalName:F,data:q,hide:()=>{B(!1,"proxyList")},ref:V}))}}}]);