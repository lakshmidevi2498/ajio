"use strict";(self.webpackChunkajio=self.webpackChunkajio||[]).push([[27],{1027:(e,t,o)=>{o.r(t),o.d(t,{default:()=>m});var n=o(2483),r=o(7110),a=o(7513),s=o(4208),i=o(1711),l=o(5982),c=o(1965),p=o(1126);const d=new(o(4648).A),h=(e,t,o)=>async n=>{n({type:p.MU});try{const s=await(async(e,t,o)=>new Promise((async(n,a)=>{try{n(await d.post("".concat("sent-otp"),{phoneNumber:e,providerId:t,uId:o}))}catch(r){console.error("Error in mobileLoginApi:",r),a(r)}})))(e,t,o);console.log("mobileLogindata",s),n((a=s,{type:p.jt,payload:a}))}catch(s){console.log("error",s),n((r=s,{type:p.aS,payload:r}))}var r,a};var u=o(5606),y=o(3422),g=o(6723);const x={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"100%",maxWidth:{md:"800px",lg:"380px",xxl:"1200px"},height:"auto",maxHeight:"90vh",bgcolor:"background.paper",border:"2px solid lightgray",boxShadow:24,p:4,overflowY:"auto"},m=e=>{let{setModalOpen:t,modalOpen:o,phoneNumber:p,setOpen:d}=e;const[m,f]=(0,n.useState)(Array(6).fill("")),w=(0,c.wA)(),b=(0,u.gf)(),v=async e=>{try{const t=window.confirmationResult,o=(await t.confirm(e)).user;console.log("User signed in successfully:",o);const n=o.phoneNumber,r=o.providerId,a=o.providerData[0].uid;return console.log("uId",a),b||await w(h(n,r,a)),o}catch(t){throw console.error("Error verifying OTP:",t),t}};return(0,g.jsx)(r.A,{open:o,onClose:()=>{t(!1)},sx:{display:"flex",alignItems:"center",justifyContent:"center"},children:(0,g.jsxs)(a.Ay,{container:!0,sx:x,children:[(0,g.jsx)(a.Ay,{item:!0,xs:12,children:(0,g.jsxs)(s.A,{variant:"body1",gutterBottom:!0,children:["Enter the OTP sent to  ",p]})}),(0,g.jsx)(a.Ay,{item:!0,xs:12,style:{display:"flex",justifyContent:"center",gap:"10px"},my:5,children:m.map(((e,t)=>(0,g.jsx)(i.A,{id:"otp-".concat(t),variant:"outlined",value:e,onChange:e=>((e,t)=>{const o=[...m];if(o[t]=e.slice(0,1),f(o),e&&t<m.length-1){const e=document.getElementById("otp-".concat(t+1));e&&e.focus()}})(e.target.value,t),inputProps:{maxLength:1,style:{textAlign:"center",fontSize:"18px"}},style:{width:"40px"}},t)))}),(0,g.jsx)(a.Ay,{item:!0,xs:12,children:(0,g.jsx)(l.A,{variant:"contained",fullWidth:!0,onClick:async()=>{const e=m.join("");if(!e||e.length<m.length)alert("Please enter the complete OTP");else try{const o=await v(e);y.oR.success("Phone number verified! Welcome ".concat(o.phoneNumber)),t(!1),d(!1)}catch(o){console.error("Error verifying OTP:",o),alert("An error occurred. Please try again later.")}},sx:{backgroundColor:"#866528",color:"white"},children:"Start Shopping"})})]})})}}}]);
//# sourceMappingURL=27.c12bf8a7.chunk.js.map