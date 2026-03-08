import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Sidebar.module.css'
import { useState } from 'react';

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
        
    </aside>
  )
}

export default Sidebar