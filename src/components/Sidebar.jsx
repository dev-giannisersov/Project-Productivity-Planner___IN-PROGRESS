import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Sidebar.module.css'

const navItems = [
  { path: '/Year', label: 'Yearly Consistency' },
  { path: '/Day', label: 'Daily Goals' },
];

function Sidebar() {


  const [isOpen, setIsOpen] = useState(true);

  return (
    <aside 
    className={
    isOpen ? 
    `${styles.sidebarContainer}` 
    : 
    `${styles.sidebarContainer} ${styles.closed}`
    }
    onClick={() => {setIsOpen(!isOpen)}}>
        
    {navItems.map((item) => (
    <NavLink key={item.path} to={item.path}
    onClick={(e) => e.stopPropagation()}>
       {item.label}
    </NavLink>
    ))}


    </aside>
  )
}

export default Sidebar