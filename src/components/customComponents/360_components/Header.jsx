import React, { useState } from 'react';

import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import DownloadIcon from '@mui/icons-material/Download';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import SearchIcon from '@mui/icons-material/Search';





function Header_360() {
   const [value,setValue]=useState();


    function hanldeinput(e){
     setValue(e.target.value);
    }

     const handleSubmit =()=>{
  }
 
  return (
    <div className="dashboard">
      <div className="header">
        <h1>DASHBOARD<ArrowForwardIosIcon /> Sales Performance</h1>
        
      <input type='text'  placeholder='seacrh..'  value={value}  onChange={hanldeinput}/>
      <button onClick={handleSubmit}>
       <SearchIcon ></SearchIcon>
      </button>

        <NotificationsNoneIcon />
        <AccountCircleIcon />
       
      
       
      </div>
       
    </div>
  );
}

// Export the Dashboard component
export default Header_360;


