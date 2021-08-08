import { Avatar } from '@material-ui/core';
import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import "./DropDown.css"
import { logout, selectUser } from './features/userSlice';
import { auth } from './firebase';

const DropDown = (props) => {
  const user = useSelector(selectUser); 
 
  let toggleRef = useRef();
    useEffect(() => {
        if(props.toggle == true){
            toggleRef.current.style.display =" block";
        }else{
            toggleRef.current.style.display ="none";
        // document.body.onclick = () => {
        //     toggleRef.current.style.display ="none"
        // }
            
        }
    },[props])
    const dispatch = useDispatch()
   const logoutOfApp = () => {
        dispatch(logout());
        auth.signOut();
   }

    return (
        <div className="dropdown" ref={toggleRef}>
           <div className="mainblock">
             <div className="avatar">
                <Avatar>{user.email[0]}</Avatar>
              </div>
              <div className="content">
                <h4>{user.displayName}</h4>
                <p>{user.email}</p>
              </div>
           </div>
                
               <button type="submit" onClick={logoutOfApp} className="button">Sign Out</button>
           
        </div>
    )
}

export default DropDown;
