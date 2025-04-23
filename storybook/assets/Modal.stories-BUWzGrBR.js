import{j as e}from"./jsx-runtime-DiklIkkE.js";import{M as i}from"./index-BpswPAAr.js";import{B as d}from"./iconBase-J3hxGK-L.js";import{R as p}from"./index-DRjF_FHU.js";import"./index-CoPTDhL4.js";const g={title:"components/Modal",component:i,argTypes:{}},c=t=>{const[o,a]=p.useState(t.openModal||!1);return e.jsxs("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",padding:"20px"},children:[e.jsx(d,{variant:"confirm",onClick:()=>a(!o),children:"Open Modal"}),e.jsx(i,{isOpen:o,onClose:()=>a(!1),...t,children:e.jsx("div",{style:{color:"white",display:"flex",justifyContent:"center",alignItems:"center",margin:"0 20px"},children:"Opened Modal"})})]})},n=c.bind({});var s,r,l;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`args => {
  const [openModal, setOpenModal] = React.useState(args.openModal || false);
  return <div style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    padding: "20px"
  }}>\r
      <Button variant="confirm" onClick={() => setOpenModal(!openModal)}>\r
        Open Modal\r
      </Button>\r
      <Modal isOpen={openModal} onClose={() => setOpenModal(false)} {...args}>\r
        <div style={{
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "0 20px"
      }}>\r
          Opened Modal\r
        </div>\r
      </Modal>\r
    </div>;
}`,...(l=(r=n.parameters)==null?void 0:r.docs)==null?void 0:l.source}}};const y=["DefaultModal"];export{n as DefaultModal,y as __namedExportsOrder,g as default};
