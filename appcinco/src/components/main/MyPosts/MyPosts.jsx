import React from 'react'
import Post from './Posts/Post'
import s from './MyPosts.module.css'

const MyPosts = () =>{
    return (
          <div>
          <div>
          <textarea className = {s.txt} >Send message</textarea>
          <button className = {s.btn}>add post</button>
            <button className = {s.btn}>remove post</button>
            </div>
            <div className = {s.posts}>
            <Post message="Hey everybody here!" likescount ="22"/>    
            <Post message="Hey you!" likescount ="0"/>    
            <Post message="This is my firs message"/>    
            
 </div>
        
            

    </div>
    );
}

export default MyPosts