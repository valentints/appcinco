import React from 'react'
import s from'./main.module.css'
import MyPosts from './MyPosts/MyPosts';


const Main = () =>{
    return (
        <main className={s.Main}>
          <div>
          <img className= {s.van} src = "https://print4you.com.ua/upload/iblock/030/03043f5375e71b7cd896870b5f9b3c2c.jpg" ></img>
                    
          </div>
          <div>Ava</div>
          <div>Fotos</div>
         
          <MyPosts />
          
        </main>

    );
}

export default Main