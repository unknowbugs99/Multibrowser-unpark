"use strict";(self.webpackChunkMultibrowser=self.webpackChunkMultibrowser||[]).push([[192],{38192:(e,t,a)=>{a.r(t),a.d(t,{default:()=>r});var l=a(67294),s=a(28216),c=a(39967),n=a(75386),m=a(26793);const r=function(e){const[t,a]=(0,m.$)(),r=(0,s.I0)(),o=(0,s.v9)((e=>e.browserConfig.timezone)),i=n.Dg.data;return l.createElement("div",{className:"card-inner"},l.createElement("div",{className:"preview-block"},l.createElement("span",{className:"preview-title-lg overline-title"},t("Timezone")),l.createElement("div",{className:"custom-control custom-switch"},l.createElement("input",{type:"checkbox",className:"custom-control-input",id:"timezone-input",checked:o.base==n.Dg.base.true,onChange:e=>{r((0,c.w$)({...o,base:o.base==n.Dg.base.true?n.Dg.base.false:n.Dg.base.true}))}}),l.createElement("label",{className:"custom-control-label",htmlFor:"timezone-input"},t("Fill timezone based on the IP"))),o.base==n.Dg.base.false?l.createElement("div",{className:"d-block pt-3"},l.createElement("div",{className:"row gy-4 align-center"},l.createElement("div",{className:"col-12"})),l.createElement("div",{className:"form-group w-50"},l.createElement("div",{className:"form-control-wrap "},l.createElement("div",{className:"form-control-select"},l.createElement("select",{className:"form-control",id:"timezone-screen",onChange:e=>{r((0,c.w$)({...o,value:e.target.value}))},value:o.value},i.map(((e,t)=>l.createElement("option",{key:t,value:e.timezone_name},`${e.timezone_name} (${e.timezone_time})`))))))),l.createElement("div",{className:"row gy-4 align-center"},l.createElement("div",{className:"col-12"},l.createElement("p",{className:"text-soft"},t("Ofset UTC"),": ",o.value)))):""))}}}]);