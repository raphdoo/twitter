import React from "react";
import "./SidebarOption.css";

const SidebarOptions = (props) => {
    const { text, Icon, active} = props
  return (
    <div className= {`sidebar-option ${active && 'sidebar-option_active'}`} >            
      <Icon/>
      <h2>{text}</h2>
    </div>
  );
};

export default SidebarOptions