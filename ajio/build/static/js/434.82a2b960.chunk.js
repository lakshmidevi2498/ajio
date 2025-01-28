"use strict";(self.webpackChunkajio=self.webpackChunkajio||[]).push([[434],{3434:(e,t,r)=>{r.r(t),r.d(t,{default:()=>h});var i=r(2483),o=r(814),a=r(1965),s=r(5606),n=r(1248),d=r(4868),l=r(6803),c=r(2533),x=r(6723);const p=e=>{let{orders:t,product:r,handleOrderDetails:i,handleNavigateToWishlist:a,statusMessages:s}=e;return(0,x.jsx)(x.Fragment,{children:(0,x.jsx)(o.A.Grid,{item:!0,xs:12,sx:{justifyContent:"center",textAlign:"left"},children:(null===t||void 0===t?void 0:t.length)>0?(0,x.jsx)(x.Fragment,{children:null===t||void 0===t?void 0:t.map(((e,t)=>{var r,a;return(0,x.jsxs)(o.A.Grid,{item:!0,xs:12,children:[(0,x.jsx)(o.A.Grid,{item:!0,my:2,children:(0,x.jsxs)(o.A.Typography,{variant:"caption1",sx:{color:"gray",textAlign:"left"},children:["OrderId:",null===(r=e.paymentDetails)||void 0===r?void 0:r.orderId," "]})}),(0,x.jsx)(o.A.Grid,{sx:{border:"1px solid lightgray"},children:null===e||void 0===e||null===(a=e.cart)||void 0===a?void 0:a.products.map(((t,r)=>(0,x.jsx)(x.Fragment,{children:(0,x.jsxs)(o.A.Grid,{item:!0,sx:{display:"flex",justifyContent:"space-between",alignItems:"center",border:"1px solid lightgray",cursor:"pointer","&:hover":{backgroundColor:"#fafafa"}},onClick:()=>i(null===e||void 0===e?void 0:e._id),children:[(0,x.jsx)(o.A.Grid,{item:!0,sx:{dispaly:"flex",padding:1.5},children:(0,x.jsxs)(o.A.Grid,{item:!0,sx:{display:"flex",alignItems:"center"},gap:1,children:[(0,x.jsx)(o.A.Grid,{item:!0,children:(0,x.jsx)(o.A.Box,{src:t.product.image,width:"100%",height:"100%",component:"img",sx:{width:{xs:"80px",sm:"120px"},height:{xs:"100px",sm:"150px"}}})}),(0,x.jsxs)(o.A.Grid,{item:!0,sx:{alignItems:"center"},children:[(0,x.jsx)(o.A.Typography,{variant:"caption1",sx:{fontWeight:"bold",color:"Cancelled"===t.productShippingStatus?"red":"black"},children:t.productShippingStatus}),(0,x.jsx)("br",{}),(0,x.jsx)(o.A.Typography,{variant:"caption1",sx:{fontWeight:"normal",fontSize:{xs:"12px",sm:"15px"}},children:s[t.productShippingStatus]})]})]})}),(0,x.jsx)(o.A.Grid,{item:!0,children:(0,x.jsx)(o.A.KeyboardArrowRightIcon,{sx:{color:"gray",marginRight:2}})})]},r)})))})]},t)}))}):(null===r||void 0===r?void 0:r.length)>0?(0,x.jsx)(x.Fragment,{children:(0,x.jsxs)(o.A.Grid,{item:!0,xs:12,sx:{justifyContent:"center"},children:[(0,x.jsx)(o.A.Grid,{item:!0,sx:{textAlign:"center"},children:(0,x.jsx)(o.A.Typography,{variant:"caption1",sx:{fontWeight:"bold",fontSize:"18px"},children:"No orders placed"})}),(0,x.jsx)(o.A.Grid,{item:!0,sx:{textAlign:"center"},children:(0,x.jsx)(o.A.Typography,{variant:"caption1",sx:{fontWeight:"normal",color:"gray"},children:"You have items in your wishlist waiting to be yours!"})}),(0,x.jsx)(o.A.Grid,{container:!0,sx:{display:"flex",flexWrap:"wrap",gap:"16px",justifyContent:"center"},children:r.map(((e,t)=>(0,x.jsx)(o.A.Grid,{item:!0,sx:{display:"flex"},my:1,children:(0,x.jsx)(o.A.Box,{sx:{position:"relative",width:"80px",height:"100px",boxShadow:"0px 4px 6px rgba(0, 0, 0, 0.1)"},children:(0,x.jsx)(o.A.CardMedia,{component:"img",src:e.image,sx:{width:"100%",height:"100%",objectFit:"cover"}})})},t)))}),(0,x.jsx)(o.A.Grid,{item:!0,sx:{display:"block",margin:"auto",textAlign:"center",cursor:"pointer"},onClick:a,children:(0,x.jsx)(o.A.Button,{variant:"contained",children:"ADD FROM WISHLIST"})})]})}):(0,x.jsx)(x.Fragment,{children:(0,x.jsx)(o.A.Grid,{item:!0,children:(0,x.jsx)(o.A.Typography,{variant:"caption1",sx:{fontWeight:"bold"},children:"No Orders Placed"})})})})})},h=()=>{const[e,t]=(0,i.useState)(null),[r,h]=(0,i.useState)("Last  6 months"),[g,u]=(0,i.useState)([]),[y,m]=(0,i.useState)([]),[f,j]=(0,i.useState)([]),A=(0,a.wA)(),v=(0,s.F6)(),b=(0,s.gf)(),w=(0,d.Zp)(),C=(0,a.d4)((e=>e.loadOrder.data||{}));console.log("ordersData",C);const G=(0,a.d4)((e=>e.loadwishlist.data)),S=(0,a.d4)((e=>e.loadcartproducts.data||[]));(0,i.useEffect)((()=>{(async()=>{v&&A((0,l.Lh)(v))})()}),[A,v]),(0,i.useEffect)((()=>{if(G&&G.data){var e;const t=null===(e=G.data)||void 0===e?void 0:e.wishlistData;t&&t.products&&(m(t.products),console.log("product",t.products))}}),[G]),(0,i.useEffect)((()=>{(async()=>{await A((0,n.yI)(v))})()}),[v,A]),(0,i.useEffect)((()=>{if(null!==C&&void 0!==C&&C.data){var e;const t=(null===C||void 0===C||null===(e=C.data)||void 0===e?void 0:e.orderDetails)||[];u(t)}}),[C]),(0,i.useEffect)((()=>{(async()=>{v&&A((0,c.iA)(b,v))})()}),[A,b,v]),(0,i.useEffect)((()=>{if(S&&S.data){const e=S.data.cartDetails;e&&e.products&&(j(e.products),console.log("productsData",e.products))}}),[S]);const k=Boolean(e),T=()=>{t(null)};return(0,x.jsx)(x.Fragment,{children:(0,x.jsx)(o.A.Grid,{container:!0,justifyContent:"center",children:(0,x.jsxs)(o.A.Grid,{item:!0,xs:12,sx:{justifyContent:"center",backgroundColor:"white",boxShadow:"0px 4px 6px rgba(0, 0, 0, 0.1)",height:"auto"},p:2,children:[(0,x.jsx)(o.A.Grid,{item:!0,sx:{justifyContent:"center",margin:"auto",textAlign:"center"},children:(0,x.jsx)(o.A.Typography,{variant:"caption1",sx:{fontSize:"25px",color:"#323232",fontWeight:"bold"},children:"My Orders"})}),(0,x.jsxs)(o.A.Grid,{item:!0,xs:8,sm:6,md:4,lg:2,my:2,children:[(0,x.jsxs)(o.A.Grid,{item:!0,sx:{display:"flex",justifyContent:"space-between",alignItems:"center",border:"1px solid black",padding:1,fontWeight:"bold"},onClick:e=>{t(e.currentTarget)},children:[(0,x.jsx)(o.A.Typography,{variant:"caption1",sx:{padding:{xs:0,sm:.5},fontSize:{xs:"14px"},color:"#333333"},children:r}),(0,x.jsx)(o.A.ExpandMoreIcon,{sx:{color:"black",marginLeft:1,fontSize:{xs:"20px"},padding:0,fontWeight:"bold"}})]}),(0,x.jsx)(o.A.Menu,{id:"basic-menu",anchorEl:e,open:k,onClose:T,MenuListProps:{"aria-labelledby":"basic-button"},PaperProps:{sx:{width:"150px"}},sx:{marginTop:{xs:"0px"}},children:["Last 6 months","2024","2023","2022","2021"].map(((e,t)=>(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(o.A.MenuItem,{onClick:()=>(e=>{h(e),T()})(e),sx:{fontSize:"12px",fontWeight:r===e?"bold":"normal",color:r===e?"primary.main":"inherit"},children:e},t),4!==t&&(0,x.jsx)(o.A.Divider,{})]})))})]}),(0,x.jsx)(p,{orders:g,product:y,handleOrderDetails:e=>{w("/orderdetails",{state:{id:e}})},handleNavigateToWishlist:()=>{w("/wishlist")},statusMessages:{Confirmed:"Your Order was Confirmed",Packed:"Your order has been Packed.",Shipped:"Your order is on the way!","Out-for-delivery":"Your order is out for delivery.",Delivered:"Your order has been delivered.",Cancelled:"Your Order was Cancelled",Arriving:"Your order was Arriving "}})]})})})}},2533:(e,t,r)=>{r.d(t,{iA:()=>s});var i=r(1126);const o=new(r(4648).A);var a=r(3422);const s=(e,t)=>async r=>{r({type:i.Nx});try{const a=await(async(e,t)=>new Promise((async(r,i)=>{try{r(await o.get("".concat("cart","/").concat(t),{headers:{authorization:"Bearer ".concat(e)}}))}catch(s){console.error("Error in loadCartApi:",s),i(s)}})))(e,t);r((n=a,{type:i.sR,payload:n}))}catch(d){console.log("error",d),r((s=d,{type:i.vl,payload:s})),a.oR.error("getting products data failed")}var s,n}},6803:(e,t,r)=>{r.d(t,{Lh:()=>s});var i=r(1126);const o=new(r(4648).A);var a=r(3422);const s=e=>async t=>{t({type:i._y});try{const a=await(async e=>new Promise((async(t,i)=>{try{t(await o.get("".concat("wishlist","/").concat(e)))}catch(r){console.error("Error in loadCartApi:",r),i(r)}})))(e);t((s=a,{type:i.fg,payload:s}))}catch(n){console.log("error",n),t((r=n,{type:i.Uo,payload:r})),a.oR.error("getting wishlist data failed")}var r,s}}}]);
//# sourceMappingURL=434.82a2b960.chunk.js.map