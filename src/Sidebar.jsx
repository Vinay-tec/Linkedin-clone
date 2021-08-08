import { Avatar } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import "./Sidebar.css";

const Sidebar = () => {
    const user = useSelector(selectUser); 

    const recentItem = (topic) => {
       return(
        <div className="sidebar_recentItem">
          <span className="sidebar_hash">#</span>
          <p>{topic}</p>
        </div>
       )
    }
    return (
        <div className="sidebar">
          
            <div className="sidebar_top">
                <img src="https://images.unsplash.com/photo-1547844149-792ce502416a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60" alt="" />
                <Avatar src={user.photoUrl} className="sidebar_avatar">{user.email[0]}</Avatar>
                <h2>{user.displayName }</h2>
                <h4>{user.email}</h4>
            </div>
            <div className="sidebar_stats">
                <div className="sidebar_stat">
                    <p>who viewd you</p>
                    <p className="sidebarNumber">2,323</p>
                </div>
                <div className="sidebar_stat">
                    <p>views on post</p>
                    <p className="sidebarNumber">2,323</p>
                </div>
                
            </div>
            <div className="sidebar_button">
                    <p>Recent</p> 
                    {recentItem("react js")}
                    {recentItem("Developer")}
                    {recentItem("Design")}
                    {recentItem("software Engineering")}
                    
            </div>
        </div>
    )
}

export default Sidebar
