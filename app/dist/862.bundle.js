"use strict";(self.webpackChunkMultibrowser=self.webpackChunkMultibrowser||[]).push([[862],{56862:(e,a,t)=>{t.r(a),t.d(a,{default:()=>d});var r=t(67294),l=t(28216),n=t(75386),c=t(28289),o=t(27018),s=t(65436),m=t(39967),i=t(26793);const d=function(e){const[a,t]=(0,i.$)(),d=(0,l.I0)(),u=(0,l.v9)((e=>e.browserConfig)),p=e=>{d((0,m.W1)(e.target.value))},b=e=>{d((0,m.j2)(e.target.value))},w=e=>{d((0,m.p7)(e.target.value))},v=e=>{d((0,m.Po)(e.target.value))},f=async e=>{let a={platform:s.ZP.flatformToOSFull[u.platform]};"webgl-renderer"==e.currentTarget.getAttribute("data-type")&&(a.webgl=u.webGLVendor),await c.Z.getWebGL(a).then((e=>{d((0,m.cf)(e.data.content.vendor)),d((0,m.U5)(e.data.content.render))})).catch((e=>{o.ZP.defaultToast(e)}))};return r.createElement("div",{className:"card-inner",id:"canvas"},r.createElement("div",{className:"preview-block"},r.createElement("span",{className:"preview-title-lg overline-title"},a("Canvas")),r.createElement("div",{className:"btn-group d-block pb-2 behavior"},r.createElement("div",{className:"custom-control custom-radio webrtc-group-input-type"},r.createElement("input",{type:"radio",name:"hardware-canvar",className:"custom-control-input",id:"hardware-prompt",defaultChecked:u.canvas==n.I9.canvas.noise,value:n.I9.canvas.noise,onChange:p}),r.createElement("label",{className:"input-type btn",htmlFor:"hardware-prompt"},a("Noise"))),r.createElement("div",{className:"custom-control custom-radio webrtc-group-input-type"},r.createElement("input",{type:"radio",name:"hardware-canvar",className:"custom-control-input",id:"hardware-allow",defaultChecked:u.canvas==n.I9.canvas.off,value:n.I9.canvas.off,onChange:p}),r.createElement("label",{className:"input-type btn",htmlFor:"hardware-allow"},a("Off"))),r.createElement("div",{className:"custom-control custom-radio webrtc-group-input-type"},r.createElement("input",{type:"radio",name:"hardware-canvar",className:"custom-control-input",id:"hardware-block",defaultChecked:u.canvas==n.I9.canvas.block,value:n.I9.canvas.block,onChange:p}),r.createElement("label",{className:"input-type btn",htmlFor:"hardware-block"},a("Block")))),u.canvas==n.I9.canvas.noise?r.createElement("div",{className:"group-sub-text mb-2 prompt"},r.createElement("span",{className:"sub-text-icon"},r.createElement("i",{className:"fas fa-check"})),r.createElement("p",{className:"sub-text"},a("Hardware canvas noise"))):"",u.canvas==n.I9.canvas.off?r.createElement("div",{className:"group-sub-text mb-2 allow"},r.createElement("span",{className:"sub-text-icon"},r.createElement("i",{className:"fas fa-exclamation-triangle"})),r.createElement("p",{className:"sub-text"},a("Hardware canvas off"))):"",u.canvas==n.I9.canvas.block?r.createElement("div",{className:"group-sub-text mb-2 allow"},r.createElement("span",{className:"sub-text-icon"},r.createElement("i",{className:"fas fa-exclamation-triangle"})),r.createElement("p",{className:"sub-text"},a("Hardware canvas block"))):""),r.createElement("div",{className:"preview-block"},r.createElement("span",{className:"preview-title-lg overline-title"},a("Audio Context")),r.createElement("div",{className:"btn-group d-block pb-2 behavior"},r.createElement("div",{className:"custom-control custom-radio webrtc-group-input-type"},r.createElement("input",{type:"radio",name:"audio-context",className:"custom-control-input",id:"hardware-prompt-audio-context",defaultChecked:u.audioContext==n.I9.audioContext.noise,value:n.I9.audioContext.noise,onChange:b}),r.createElement("label",{className:"input-type btn",htmlFor:"hardware-prompt-audio-context"},a("Noise"))),r.createElement("div",{className:"custom-control custom-radio webrtc-group-input-type"},r.createElement("input",{type:"radio",name:"audio-context",className:"custom-control-input",id:"hardware-allow-audio-context",defaultChecked:u.audioContext==n.I9.audioContext.off,value:n.I9.audioContext.off,onChange:b}),r.createElement("label",{className:"input-type btn",htmlFor:"hardware-allow-audio-context"},a("Off")))),u.audioContext==n.I9.audioContext.noise?r.createElement("div",{className:"group-sub-text mb-2 prompt"},r.createElement("span",{className:"sub-text-icon"},r.createElement("i",{className:"fas fa-check"})),r.createElement("p",{className:"sub-text"},a("Hardware audioContext noise"))):"",u.audioContext==n.I9.audioContext.off?r.createElement("div",{className:"group-sub-text mb-2 allow"},r.createElement("span",{className:"sub-text-icon"},r.createElement("i",{className:"fas fa-exclamation-triangle"})),r.createElement("p",{className:"sub-text"},a("Hardware audioContext off"))):""),r.createElement("div",{className:"preview-block"},r.createElement("span",{className:"preview-title-lg overline-title"},a("WebGL image")),r.createElement("div",{className:"btn-group d-block pb-2 behavior"},r.createElement("div",{className:"custom-control custom-radio webrtc-group-input-type"},r.createElement("input",{type:"radio",name:"hardware-webgl-image",className:"custom-control-input",id:"hardware-prompt-webGL-image",defaultChecked:u.webGLImage==n.I9.webGLImage.noise,value:n.I9.webGLImage.noise,onChange:w}),r.createElement("label",{className:"input-type btn",htmlFor:"hardware-prompt-webGL-image"},a("Noise"))),r.createElement("div",{className:"custom-control custom-radio webrtc-group-input-type"},r.createElement("input",{type:"radio",name:"hardware-webgl-image",className:"custom-control-input",id:"hardware-allow-webGL-image",defaultChecked:u.webGLImage==n.I9.webGLImage.off,value:n.I9.webGLImage.off,onChange:w}),r.createElement("label",{className:"input-type btn",htmlFor:"hardware-allow-webGL-image"},a("Off")))),u.webGLImage==n.I9.webGLImage.noise?r.createElement("div",{className:"group-sub-text mb-2 prompt"},r.createElement("span",{className:"sub-text-icon"},r.createElement("i",{className:"fas fa-check"})),r.createElement("p",{className:"sub-text"},a("Hardware webGLImage noise"),"                     ")):"",u.webGLImage==n.I9.webGLImage.off?r.createElement("div",{className:"group-sub-text mb-2 allow"},r.createElement("span",{className:"sub-text-icon"},r.createElement("i",{className:"fas fa-exclamation-triangle"})),r.createElement("p",{className:"sub-text"},a("Hardware webGLImage off"),"                    ")):""),r.createElement("div",{className:"preview-block"},r.createElement("span",{className:"preview-title-lg overline-title"},a("WebGL metadata")),r.createElement("div",{className:"btn-group d-block pb-2 behavior"},r.createElement("div",{className:"custom-control custom-radio webrtc-group-input-type"},r.createElement("input",{type:"radio",name:"hardware-webgl-metadata-vendor",className:"custom-control-input",id:"hardware-prompt-webGL-metadata-vender",defaultChecked:u.webGLMetadata==n.I9.webGLMetadata.noise,value:n.I9.webGLMetadata.noise,onChange:v}),r.createElement("label",{className:"input-type btn",htmlFor:"hardware-prompt-webGL-metadata-vender"},a("Noise"))),r.createElement("div",{className:"custom-control custom-radio webrtc-group-input-type"},r.createElement("input",{type:"radio",name:"hardware-webgl-metadata-vendor",className:"custom-control-input",id:"hardware-allow-webGL-metadata-vender",defaultChecked:u.webGLMetadata==n.I9.webGLMetadata.off,value:n.I9.webGLMetadata.off,onChange:v}),r.createElement("label",{className:"input-type btn",htmlFor:"hardware-allow-webGL-metadata-vender"},a("Off")))),u.webGLMetadata==n.I9.webGLMetadata.noise?r.createElement("div",{className:"group-sub-text mb-2 prompt"},r.createElement("span",{className:"sub-text-icon"},r.createElement("i",{className:"fas fa-check"})),r.createElement("p",{className:"sub-text"},a("Hardware webGLMetadataVendor noise"),"                    ")):"",u.webGLMetadata==n.I9.webGLMetadata.off?r.createElement("div",{className:"group-sub-text mb-2 allow"},r.createElement("span",{className:"sub-text-icon"},r.createElement("i",{className:"fas fa-exclamation-triangle"})),r.createElement("p",{className:"sub-text"},a("Hardware webGLMetadataVendor off"),"                    ")):"",u.webGLMetadata==n.I9.webGLMetadata.noise?r.createElement(r.Fragment,null,r.createElement("div",{className:"form-group"},r.createElement("label",{className:"form-label",htmlFor:"webGL-vendor"},a("WebGL vendor")),r.createElement("div",{className:"form-control-wrap row w-50"},r.createElement("div",{className:"form-control-wrap col-10"},r.createElement("input",{type:"text",className:"form-control",id:"webGL-vendor",placeholder:"WebGL vendor",value:u.webGLVendor,disabled:!0})),r.createElement("div",{className:"form-control-wrap col-2 d-flex proxy-group-gap"},r.createElement("button",{className:"btn-modal btn btn-dim btn-outline-secondary",id:"btn-reload-webgl-vendor","data-type":"webgl-vendor",onClick:f},r.createElement("i",{className:"fas fa-history"}))))),r.createElement("div",{className:"form-group"},r.createElement("label",{className:"form-label",htmlFor:"webGL-renderer"},a("WebGL renderer")),r.createElement("div",{className:"form-control-wrap row w-50"},r.createElement("div",{className:"form-control-wrap col-10"},r.createElement("input",{type:"text",className:"form-control",id:"webGL-renderer",placeholder:"WebGL rederer",value:u.webGLMetadataRenderer,disabled:!0})),r.createElement("div",{className:"form-control-wrap col-2 d-flex proxy-group-gap"},r.createElement("button",{className:"btn-modal btn btn-dim btn-outline-secondary",id:"btn-reload-webgl-renderer","data-type":"webgl-renderer",onClick:f},r.createElement("i",{className:"fas fa-history"})))))):""))}}}]);