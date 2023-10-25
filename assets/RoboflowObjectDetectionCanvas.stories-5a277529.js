import{s as k,j as u}from"./styled-components.browser.esm-5c00f201.js";import{r as S}from"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";const P=k.canvas`
  position: absolute;
  top: 0;
  left: 0;
`,p=({width:o,height:g,objectDetections:y})=>{const i=S.useRef(null);S.useEffect(()=>{const r=i==null?void 0:i.current;if(!r)return;x(o,g);const e=r.getContext("2d");e&&E(y,e)},[o,g,y]);const x=(r,e)=>{const l=i==null?void 0:i.current;if(!l)return;l.width=r*window.devicePixelRatio,l.height=e*window.devicePixelRatio,l.style.width=r+"px",l.style.height=e+"px";const t=l.getContext("2d");t&&t.scale(window.devicePixelRatio,window.devicePixelRatio)},E=(r,e)=>{const l=i==null?void 0:i.current;l&&(e.clearRect(0,0,l.width,l.height),r.forEach(t=>{let f=t.bbox;if(f.class=t.class,f.color=t.color,f.confidence=t.confidence,t=f,t.confidence<0)return;let c=t.x-t.width/2,s=t.y-t.height/2,a=t.width,m=t.height;e.beginPath(),e.lineWidth=1,e.strokeStyle=t.color,e.rect(c,s,a,m),e.stroke(),e.fillStyle="black",e.globalAlpha=.2,e.fillRect(c,s,a,m),e.globalAlpha=1;let D="black",j=12;e.font=`${j}px monospace`,e.textAlign="center";let O=t.class,b=(t.confidence*100).toFixed().toString()+"%",w=O+" "+b;const n=j;let d=e.measureText(w).width;n<=m&&d<=a?(e.strokeStyle=t.color,e.fillStyle=t.color,e.fillRect(c-e.lineWidth/2,s-n-e.lineWidth,d+2,n+1),e.stroke(),e.fillStyle=D,e.fillText(w,c+d/2+1,s-1)):(d=e.measureText(b).width,e.strokeStyle=t.color,e.fillStyle=t.color,e.fillRect(c-e.lineWidth/2,s-n-e.lineWidth,d+2,n+1),e.stroke(),e.fillStyle=D,e.fillText(b,c+d/2+1,s-1))}))};return u(P,{ref:i})};try{p.displayName="RoboflowObjectDetectionCanvas",p.__docgenInfo={description:"",displayName:"RoboflowObjectDetectionCanvas",props:{width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"number"}},objectDetections:{defaultValue:null,description:"",name:"objectDetections",required:!0,type:{name:"RoboflowObjectDetection[]"}}}}}catch{}const N={component:p,title:"gle-roboflow-components/RoboflowObjectDetectionCanvas",argTypes:{}},W=k.div`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 1rem 0;
  canvas {
    position: relative;
    background-color: #1D1E20;
  }
`,A=o=>u(W,{children:u(p,{width:o.width,height:o.height,objectDetections:o.objectDetections})}),h=o=>u(A,{...o});h.args={width:640,height:480,objectDetections:[{class:"Quarter",confidence:.8812620043754578,bbox:{x:310.87411880493164,y:310.65998554229736,width:112.44983673095703,height:78.8657283782959},color:"#F4004E"},{class:"Dime",confidence:.8412563800811768,bbox:{x:229.80114936828613,y:124.92026925086975,width:34.812564849853516,height:46.48133039474487},color:"#4892EA"},{class:"Dime",confidence:.7248507142066956,bbox:{x:67.95018196105957,y:443.4764528274536,width:25.294513702392578,height:24.552812576293945},color:"#4892EA"}]};var R,T,_;h.parameters={...h.parameters,docs:{...(R=h.parameters)==null?void 0:R.docs,source:{originalSource:"(args: RoboflowObjectDetectionCanvasProps) => <StoryTemplate {...args} />",...(_=(T=h.parameters)==null?void 0:T.docs)==null?void 0:_.source}}};const z=["Default"];export{h as Default,z as __namedExportsOrder,N as default};
//# sourceMappingURL=RoboflowObjectDetectionCanvas.stories-5a277529.js.map
