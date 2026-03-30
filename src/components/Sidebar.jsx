import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Sidebar.module.css'

const navItems = [
  { path: '/YearView', label: 'Yearly Consistency' },
  { path: '/DayView', label: 'Daily Goals' },
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
        
    </aside>
  )
}

export default Sidebar