import{j as n}from"./jsx-runtime-DiklIkkE.js";import{I as a}from"./index-Dxv8RC9i.js";import"./index-DRjF_FHU.js";const s=[{filterOption:"all"},{filterOption:"to-do"},{filterOption:"done"}],u={title:"components/InputRadio",component:a,argTypes:{}},p=e=>n.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",padding:"20px"},children:n.jsx(a,{...e,name:"label",radioOptions:s,filterOption:e.filterOption,setFilterOption:()=>{}})}),t=p.bind({});t.args={};var i,o,r;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`args => {
  return <div style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    padding: "20px"
  }}>\r
      <InputRadio {...args} name="label" radioOptions={inputRadioObject} filterOption={args.filterOption} setFilterOption={() => {}} />\r
    </div>;
}`,...(r=(o=t.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};const m=["DefaultInputRadio"];export{t as DefaultInputRadio,m as __namedExportsOrder,u as default};
