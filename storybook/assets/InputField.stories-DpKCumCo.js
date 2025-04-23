import{j as n}from"./jsx-runtime-DiklIkkE.js";import{I as l}from"./index-BpkDEiVP.js";import{R as p}from"./index-DRjF_FHU.js";import"./iconBase-J3hxGK-L.js";import"./index-CoPTDhL4.js";const h={title:"components/InputField",component:l,argTypes:{type:{control:"select",options:["search","newField","default"]},size:{control:"radio",options:["sm","md","lg"]},validate:{control:"boolean"}}},d=t=>{const[r,i]=p.useState(t.value||"");return n.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",padding:"20px"},children:n.jsx(l,{...t,value:r,onChange:u=>i(u)})})},e=d.bind({});e.args={type:"search",placeholder:"Default Input Field",value:"text"};var a,s,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`args => {
  const [value, setValue] = React.useState(args.value || "");
  return <div style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    padding: "20px"
  }}>\r
      <InputField {...args} value={value} onChange={newValue => setValue(newValue)} // Atualiza o estado local
    />\r
    </div>;
}`,...(o=(s=e.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};const x=["DefaultInputField"];export{e as DefaultInputField,x as __namedExportsOrder,h as default};
