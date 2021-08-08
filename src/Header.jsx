 import React from 'react';
import "./Header.css"
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import HeaderOption from './HeaderOption';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from './firebase';
import { logout, selectUser } from './features/userSlice';
import DropDown from './DropDown';
import { useState } from 'react';




const Header = () => {
    const user = useSelector(selectUser); 
    let [toggle,SetToggle]=useState(false);
   

//    const dispatch = useDispatch();

//    const logoutOfApp = () => {
//         dispatch(logout());
//         auth.signOut();
  // }
    return (
        <div className="header">
            
            <div className="header_left">
                <img src="linkedin.png" alt="" />
                <div className="header_search">
                     <SearchIcon/>
                     <input type="text" placeholder="Search" />
                </div>
            </div>
            <div className="header_right">
                     <HeaderOption Icon={HomeIcon} title="Home"/>
                     <HeaderOption Icon={SupervisorAccountIcon} title="My Network"/>
                     <HeaderOption Icon ={BusinessCenterIcon} title="Jobs"/>
                     <HeaderOption Icon={ChatIcon} title="Messaging"/>
                     <HeaderOption Icon={NotificationsIcon} title="Notifications"/>
                     <HeaderOption avatar={true} title={user.displayName}
                       onClick={() => {SetToggle(!toggle)}}/>
                      
            </div>
            <DropDown toggle={toggle}/>
            
        </div>
    )
}

export default Header
