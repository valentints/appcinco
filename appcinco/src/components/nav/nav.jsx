import React from 'react'
import s from './nav.module.css'
import {NavLink} from "react-router-dom";


const Nav = () => {
    return (
        <nav className={s.Nav}>
        <div className = {s.item}>
        <NavLink to="/Main"activeClassName = {s.activelink}>Main</NavLink>
        </div>
        <div className = {s.item}>
          <NavLink to="/Dialogs" activeClassName = {s.activelink}>Dialogos</NavLink>
          </div>
        <div className = {s.item}>
        <NavLink to="/fotos" activeClassName = {s.activelink}>fotos</NavLink>
        </div>
        <div className = {s.item}>
        <NavLink to="/setting" activeClassName = {s.activelink}>setting</NavLink>
        </div>
      </nav>
    )
}

export default Nav
