

import React, { useState } from "react";
import Link from "next/link";


import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import DashboardTwoToneIcon from '@mui/icons-material/DashboardTwoTone';
import CallIcon from '@mui/icons-material/Call';
import { useRouter } from "next/navigation";



const Icon = ({ name }) => {
  switch (name) {
    case "HOME_logo":
      return <HomeTwoToneIcon fontSize="large"></HomeTwoToneIcon>; 
    case "DASHBOARD":
      return <DashboardTwoToneIcon fontSize="large"></DashboardTwoToneIcon>;
    case "sales":
      return <img src={'/sale.png'} alt="Sales" style={{width: '24px', height: '24px', backgroundColor:"black"}} />;
    case "Call": 
      return <CallIcon fontSize="large"></CallIcon>;
    default:
      return null;
  }
};


const SidebarMenu = ({component}) => {

  const navigate=useRouter();
  
 
  const [active, setActive] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownOpenSale, setDropdownOpenSale] = useState(false);

  const handleClick = (name) => {
    setActive(name);
    // console.log(`You clicked on ${name}`);
    if (name === "Call" ) {
      setDropdownOpen(!dropdownOpen);
     
      
    }
    else if (name === "sales" ) {
      setDropdownOpenSale(!dropdownOpenSale);
     
      
    }
    else {
      navigate.push("/");
     
      
    }
  };


//  console.log(component);
//  console.log(component.items);

 
  return (
    <div className={` mainsidebar`}>
      
      <ul>
        {component.items.map((item) => (
          <li key={item.name} onClick={() => handleClick(item.name)}>
           
              <Icon name={item.icon} key={item.name}/>
              {item.name === "Call"?(dropdownOpen && (
                <div className="dropdownMenu">
                  {item.subItems.map((subItem) => (
                    <Link key={subItem.name} to={`/${subItem.Route}`}>
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              )):null}
              {item.name === "sales"?(dropdownOpenSale && (
                <div className="dropdownMenu">
                  {item.subItems.map((subItem) => (
                    <Link key={subItem.name} to={`/${subItem.Route}`}>
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              )):null}
            
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SidebarMenu;
