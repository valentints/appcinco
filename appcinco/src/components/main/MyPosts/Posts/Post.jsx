import React from 'react'
import s from './Post.module.css';


const Post = (props) => {
   
    return (

        <div className={s.item}>post 1
          <img src="https://definicion.de/wp-content/uploads/2016/02/avatar.jpg" alt="avatar" />
          {props.message}
            <div>
            <span>like</span> { props.likescount }
            </div>
        </div>


    );
}

export default Post 