import{s as A,j as f}from"./styled-components.browser.esm-5c00f201.js";import{r as R}from"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";const M=A.canvas`
  position: absolute;
  top: 0;
  left: 0;
`,u=({width:i,height:y,objectDetections:D,mirrored:W=!1})=>{const o=R.useRef(null);R.useEffect(()=>{const l=o==null?void 0:o.current;if(!l)return;q(i,y);const e=l.getContext("2d");e&&V(D,e)},[i,y,D]);const q=(l,e)=>{const r=o==null?void 0:o.current;if(!r)return;r.width=l*window.devicePixelRatio,r.height=e*window.devicePixelRatio,r.style.width=l+"px",r.style.height=e+"px";const t=r.getContext("2d");t&&t.scale(window.devicePixelRatio,window.devicePixelRatio)},V=(l,e)=>{const r=o==null?void 0:o.current;r&&(e.clearRect(0,0,r.width,r.height),l.forEach(t=>{let b=t.bbox;if(b.class=t.class,b.color=t.color,b.confidence=t.confidence,t=b,t.confidence<0)return;W&&(t.x=i-t.x);let c=t.x-t.width/2,n=t.y-t.height/2,m=t.width,g=t.height;e.beginPath(),e.lineWidth=1,e.strokeStyle=t.color,e.rect(c,n,m,g),e.stroke(),e.fillStyle="black",e.globalAlpha=.2,e.fillRect(c,n,m,g),e.globalAlpha=1;let j="black",w=12;e.font=`${w}px monospace`,e.textAlign="center";let F=t.class,p=(t.confidence*100).toFixed().toString()+"%",x=F+" "+p;const d=w;let s=e.measureText(x).width;d<=g&&s<=m?(e.strokeStyle=t.color,e.fillStyle=t.color,e.fillRect(c-e.lineWidth/2,n-d-e.lineWidth,s+2,d+1),e.stroke(),e.fillStyle=j,e.fillText(x,c+s/2+1,n-1)):(s=e.measureText(p).width,e.strokeStyle=t.color,e.fillStyle=t.color,e.fillRect(c-e.lineWidth/2,n-d-e.lineWidth,s+2,d+1),e.stroke(),e.fillStyle=j,e.fillText(p,c+s/2+1,n-1))}))};return f(M,{ref:o})};try{u.displayName="RoboflowObjectDetectionCanvas",u.__docgenInfo={description:"",displayName:"RoboflowObjectDetectionCanvas",props:{width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"number"}},objectDetections:{defaultValue:null,description:"",name:"objectDetections",required:!0,type:{name:"RoboflowObjectDetection[]"}},mirrored:{defaultValue:{value:"false"},description:"",name:"mirrored",required:!1,type:{name:"boolean"}}}}}catch{}const B={component:u,title:"gle-roboflow-components/RoboflowObjectDetectionCanvas",argTypes:{}},P=A.div`
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
`,a=i=>f(P,{children:f(u,{width:i.width,height:i.height,objectDetections:i.objectDetections})});a.args={width:640,height:480,objectDetections:[{class:"Quarter",confidence:.8812620043754578,bbox:{x:310.87411880493164,y:310.65998554229736,width:112.44983673095703,height:78.8657283782959},color:"#F4004E"},{class:"Dime",confidence:.8412563800811768,bbox:{x:229.80114936828613,y:124.92026925086975,width:34.812564849853516,height:46.48133039474487},color:"#4892EA"},{class:"Dime",confidence:.7248507142066956,bbox:{x:67.95018196105957,y:443.4764528274536,width:25.294513702392578,height:24.552812576293945},color:"#4892EA"}]};const h=i=>f(P,{children:f(u,{mirrored:i.mirrored,width:i.width,height:i.height,objectDetections:i.objectDetections})});h.args={mirrored:!0,width:640,height:480,objectDetections:[{class:"Quarter",confidence:.8812620043754578,bbox:{x:310.87411880493164,y:310.65998554229736,width:112.44983673095703,height:78.8657283782959},color:"#F4004E"},{class:"Dime",confidence:.8412563800811768,bbox:{x:229.80114936828613,y:124.92026925086975,width:34.812564849853516,height:46.48133039474487},color:"#4892EA"},{class:"Dime",confidence:.7248507142066956,bbox:{x:67.95018196105957,y:443.4764528274536,width:25.294513702392578,height:24.552812576293945},color:"#4892EA"}]};var S,E,O;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`(args: RoboflowObjectDetectionCanvasProps) => {
  return <CanvasContainer>
            <RoboflowObjectDetectionCanvas width={args.width} height={args.height} objectDetections={args.objectDetections} />
        </CanvasContainer>;
}`,...(O=(E=a.parameters)==null?void 0:E.docs)==null?void 0:O.source}}};var _,k,T;h.parameters={...h.parameters,docs:{...(_=h.parameters)==null?void 0:_.docs,source:{originalSource:`(args: RoboflowObjectDetectionCanvasProps) => {
  return <CanvasContainer>
            <RoboflowObjectDetectionCanvas mirrored={args.mirrored} width={args.width} height={args.height} objectDetections={args.objectDetections} />
        </CanvasContainer>;
}`,...(T=(k=h.parameters)==null?void 0:k.docs)==null?void 0:T.source}}};const H=["Default","Mirrored"];export{a as Default,h as Mirrored,H as __namedExportsOrder,B as default};
//# sourceMappingURL=RoboflowObjectDetectionCanvas.stories-bd405cdf.js.map
