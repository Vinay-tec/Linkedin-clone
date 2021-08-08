import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';
import { auth } from './firebase';
import './Login.css';

const Login = () => {
     const[email,setEmail] = useState("");
     const[password,setPassword] = useState("");
     const[name,setName] = useState("");
     const[profilepic,setProfilepic]=useState("");
     const dispatch = useDispatch(); 

    const loginToApp =   (e) => {
        e.preventDefault();
         auth
         .signInWithEmailAndPassword(email,password)
         .then((userAuth)=> {
             dispatch(
                 login({
                    email:userAuth.user.email,
                    uid:userAuth.user.uid,
                    displayName:userAuth.user.displayName,
                    profileUrl:userAuth.user.photoURL, 
                 })
             )
         }).catch((error) => alert(error))

    };  

    const register = () => {
        if(!name){ 
            return alert("please enter fullname")    
        }
        auth.createUserWithEmailAndPassword(email,password)
        .then((userAuth) =>{
            userAuth.user.updateProfile({
                displayName:name,
                photoURL:profilepic
            })
            .then(() => {
                dispatch(login({
                    email:userAuth.user.email,
                    uid:userAuth.user.uid,
                    displayName:name,
                    photoURL:profilepic,

                }))
            })
        }).catch(error => alert(error))
    };
    return (
        <div className="login">
           <img src="linkedin_1587065153-900x561.png" alt="" />
           <form >
               <input 
                  type="text"
                  placeholder="fullname"
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
                <input 
                  type="text" 
                 placeholder="profile photo url"
                 value={profilepic}
                 onChange={e => setProfilepic(e.target.value)}
                />
                <input 
                 type="emai"
                 placeholder="email"
                 value={email}
                 onChange={e => setEmail(e.target.value)}
                />
                <input 
                   type="password"
                   placeholder="password"
                   value={password}
                   onChange={e => setPassword(e.target.value)}
                />
                <button type="submit" onClick={loginToApp}>Sign In</button>
                {/* <p onClick={loginToApp}>LOgin</p> */}

           </form>
           <p>not a member ? 
               <span className="login_register" onClick={register} style={{color:"blue"}} >Register  </span>
           </p>
        </div>

    )
}

export default Login
