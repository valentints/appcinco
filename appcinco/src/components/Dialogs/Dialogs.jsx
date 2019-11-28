import React from 'react'
import s from  './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const Dialogs = (props) =>{
    return (
        <div className ={s.dialogs}> 
            <div className ={s.dialogsItems}>
               
                <div className ={s.dialog + " " + s.active}>
                    <NavLink to="/Dialogs/1">Juan</NavLink>
                </div>
                <div className ={s.dialog}>
                <NavLink to="/Dialogs/2">Juana</NavLink>
                </div>
                <div className ={s.dialog}>
                <NavLink to="/Dialogs/3"> Pedro </NavLink>
                </div>
                <div className ={s.dialog}>
                <NavLink to="/Dialogs/4">Jose</NavLink>
                </div>
                <div className ={s.dialog}>
                <NavLink to="/Dialogs/5">Maria</NavLink>
                </div>
                <div className ={s.dialog}>
                <NavLink to="/Dialogs/6">Ana</NavLink>
                </div>
                
            </div>
        
        <div className ={s.messages}>
            <div className={s.message}>Hola</div>
            <div className={s.message}>Como estas?</div>
            <div className={s.message}>Todo bien?</div>
        </div>
        </div>
    
    )
}

export default Dialogs
