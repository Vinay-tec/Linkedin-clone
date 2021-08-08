import  CreateIcon  from '@material-ui/icons/Create';
import React from 'react';
import './Feed.css';
import InputOption from './InputOption';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import Post from './Post';
import { useState } from 'react';
import { useEffect } from 'react';
import { db } from './firebase';
import firebase  from 'firebase';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import FlipMove  from 'react-flip-move';
import { Avatar } from '@material-ui/core';


const Feed = () => {
    const user = useSelector(selectUser);
    const[input,setInput]=useState('');
    const[posts,setPosts] = useState([]);

   useEffect(() => {
       db.collection("posts").orderBy('timestamp','desc').onSnapshot(snapshot =>{
           setPosts(snapshot.docs.map(doc => (
               {
                   id:doc.id,
                   data:doc.data(),
               }
           )))
       })
   },[])

    const sendPost = (e) => {
        e.preventDefault();
        db.collection('posts').add({
            name:user.displayName,
            description:user.email,
            message:input,
            photoUrl:user.photoUrl || "",
            timestamp:firebase.firestore.FieldValue.serverTimestamp(),
        });
       setInput('');
    }; 
    return (
        <div className="feed">
           <div className="feed_inputContainer">
         
               <div className="feed_input">
                  
                   <CreateIcon/>
                   <form >
                       <input 
                       type="text"
                       value={input} 
                       onChange={
                           e => setInput(e.target.value)
                       }
                       />
                       <button type="submit" onClick={sendPost}>Send</button>
                   </form>
               </div>
               <div className="feed_inputoption">
                   <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9"/>
                   <InputOption Icon={SubscriptionsIcon} title="Video" color="orange"/>
                   <InputOption Icon={EventNoteIcon} title="Event" color="gray"/>
                   <InputOption Icon={CalendarViewDayIcon} title="Write Article" color="green"/>

               </div>
           </div>
           <FlipMove>
           {posts.map(({id,data:{name,description,message,photoUrl}}) => {
            return(
                <Post
                key={id}
                name={name}
                description={description}
                message={message}
                photoUrl={photoUrl}
                />
            )
              
           })}
           </FlipMove>
           {/* <Post 
           name="vinay" 
           description="this is a test"
           message="hi"
           /> */}
        </div>
    )
}

export default Feed
