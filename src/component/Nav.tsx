import styles from './Nav.module.scss'
import React from "react";

interface NavProps {
  onComponentSelect: (componentId:string) => void
}


const Nav:React.FC<NavProps> =({onComponentSelect}) => {
  const handleComponentSelect = (componentId: string) => {
    onComponentSelect(componentId)
  }
  return (
    <div className={styles.NavPage}>
      <ul>
        <li><a href='#' onClick={() => handleComponentSelect('001')}>概要</a></li>
        <li><a href='#' onClick={() => handleComponentSelect('002')}>単位</a></li>
      </ul>
    </div>
  )
}

export default Nav