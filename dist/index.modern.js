import{SVG as t}from"@svgdotjs/svg.js";import{Vec2 as i}from"wtc-math";var e=0;function s(t){return"__private_"+e+++"_"+t}function r(t,i){if(!Object.prototype.hasOwnProperty.call(t,i))throw new TypeError("attempted to use private field on non-instance");return t}var h=s("drawing"),o=s("ctx"),a=s("mode"),n=s("instructions"),l=s("dimensions"),c=s("pxratio"),d=s("stroke"),g=s("fill"),m=s("saving");class p{constructor(i=p.DT_CANVAS,e){Object.defineProperty(this,h,{writable:!0,value:void 0}),Object.defineProperty(this,o,{writable:!0,value:void 0}),Object.defineProperty(this,a,{writable:!0,value:void 0}),Object.defineProperty(this,n,{writable:!0,value:[]}),Object.defineProperty(this,l,{writable:!0,value:void 0}),Object.defineProperty(this,c,{writable:!0,value:1}),Object.defineProperty(this,d,{writable:!0,value:void 0}),Object.defineProperty(this,g,{writable:!0,value:null}),Object.defineProperty(this,m,{writable:!0,value:!1}),e=Object.assign({},p.defaults,e),this.mode=i,this.mode&p.DT_CANVAS?r(this,h)[h]=document.createElement("canvas"):this.mode&p.DT_SVG&&(r(this,h)[h]=t()),this.stroke=e.stroke,this.pxratio=e.pxratio}clear(){this.mode&p.DT_CANVAS?this.c.clearRect(0,0,...this.dimensions.scaleNew(this.pxratio).array):this.mode&p.DT_SVG&&this.drawing.clear()}rect(t,i){this.saving&&r(this,n)[n].push({f:"rect",args:[t,i]}),t=t.scaleNew(this.pxratio),i=i.scaleNew(this.pxratio),this.mode&p.DT_CANVAS?(this.c.beginPath(),this.c.rect(...t.array,...i.array),this.c.stroke()):this.mode&p.DT_SVG&&this.drawing.rect(i.width,i.height).move(...t.array).fill(this.svgFill).stroke("#f06")}circle(t,i){this.saving&&r(this,n)[n].push({f:"circle",args:[t,i]}),t=t.scaleNew(this.pxratio),i*=this.pxratio,this.mode&p.DT_CANVAS?(this.fill&&(this.c.fillStyle=this.fill),this.c.beginPath(),this.c.arc(t.x,t.y,i,0,2*Math.PI),this.stroke&&this.c.stroke(),this.fill&&this.c.fill()):this.mode&p.DT_SVG&&this.drawing.circle(2*i).fill(this.svgFill).stroke(this.svgStroke).move(...t.subtractScalarNew(i).array)}line(t,i){this.saving&&r(this,n)[n].push({f:"line",args:[t,i]}),t=t.scaleNew(this.pxratio),i=i.scaleNew(this.pxratio),this.mode&p.DT_CANVAS?(this.c.beginPath(),this.c.moveTo(t.x,t.y),this.c.lineTo(i.x,i.y),this.stroke&&this.c.stroke()):this.mode&p.DT_SVG&&this.drawing.line(...t.array,...i.array).stroke(this.svgStroke)}polyline(t){this.saving&&r(this,n)[n].push({f:"polyline",args:t}),this.mode&p.DT_CANVAS?(this.c.beginPath(),t.forEach((t,i)=>{t=t.scaleNew(this.pxratio),0===i?this.c.moveTo(t.x,t.y):this.c.lineTo(t.x,t.y)}),this.stroke&&this.c.stroke()):this.mode&p.DT_SVG&&this.drawing.polyline(t.map(t=>t.array)).fill(this.svgFill).stroke(this.svgStroke)}path(t){if(this.mode&p.DT_CANVAS){this.c.beginPath();const i=new Path2D(t),e=document.createElementNS("http://www.w3.org/2000/svg","svg").createSVGMatrix(),s=new Path2D,r=e.scale(this.pxratio);s.addPath(i,r),this.stroke&&this.c.stroke(s)}else this.mode&p.DT_SVG&&this.drawing.path(t).fill(this.svgFill).stroke(this.svgStroke)}polygon(t){this.saving&&r(this,n)[n].push({f:"polygon",args:[t]}),this.mode&p.DT_CANVAS?(this.c.beginPath(),t.forEach((t,i)=>{t=t.scaleNew(this.pxratio),0===i?this.c.moveTo(t.x,t.y):this.c.lineTo(t.x,t.y)}),this.stroke&&this.c.stroke(),this.fill&&this.c.fill()):this.mode&p.DT_SVG&&this.drawing.polygon(t.map(t=>t.array)).fill(this.svgFill).stroke(this.svgStroke)}download(){let t;this.mode&p.DT_CANVAS?(t=new p(p.DT_SVG,{}).size(this.dimensions),r(this,n)[n].forEach(i=>{t[i.f](...i.args)})):this.mode&p.DT_SVG&&(t=this);const i="data:image/svg+xml;utf8,"+encodeURIComponent(t.drawing.svg()),e=document.createElement("a");e.download="untitled.svg",e.href=i,e.click()}addTo(t){return"string"==typeof t&&(this.mode&p.DT_CANVAS?document.body.querySelector(t).appendChild(this.drawing):this.mode&p.DT_SVG&&this.drawing.addTo("#container")),this}size(t){return this.mode&p.DT_CANVAS?(this.drawing.width=t.width*r(this,c)[c],this.drawing.height=t.height*r(this,c)[c]):this.mode&p.DT_SVG&&(this.drawing.size(...t.scaleNew(r(this,c)[c]).array),r(this,h)[h].viewbox(`0 0 ${t.x*r(this,c)[c]} ${t.y*r(this,c)[c]}`)),r(this,l)[l]=t,this}set dimensions(t){t instanceof i&&(r(this,l)[l]=t,this.size(t))}get dimensions(){return r(this,l)[l]}set pxratio(t){t>0&&(r(this,c)[c]=t)}get pxratio(){return r(this,c)[c]||1}get drawing(){return r(this,h)[h]}get c(){if(this.mode&p.DT_CANVAS)return r(this,o)[o]||(r(this,o)[o]=this.drawing.getContext("2d")),r(this,o)[o]}set stroke(t){r(this,d)[d]=t,this.mode&p.DT_CANVAS&&(this.c.strokeStyle=t)}get stroke(){return r(this,d)[d]}get svgStroke(){return r(this,d)[d]?r(this,d)[d]:{}}set fill(t){r(this,g)[g]=t,this.mode&p.DT_CANVAS&&(this.c.fillStyle=t)}get fill(){return r(this,g)[g]}get svgFill(){return r(this,g)[g]?r(this,g)[g]:"none"}set mode(t){t&(p.DT_CANVAS|p.DT_SVG)&&(r(this,a)[a]=t)}get mode(){return r(this,a)[a]||p.DT_CANVAS}set saving(t){r(this,m)[m]=!0===t}get saving(){return r(this,m)[m]}}p.defaults={stroke:"#333",pxratio:1},p.DT_CANVAS=1,p.DT_SVG=2;export{p as default};
//# sourceMappingURL=index.modern.js.map