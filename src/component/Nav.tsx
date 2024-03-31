import styles from './Nav.module.scss'
import React from 'react'

interface NavProps {
  onComponentSelect: (componentId: string) => void
}

const Nav: React.FC<NavProps> = ({ onComponentSelect }) => {
  const handleComponentSelect = (componentId: string) => {
    onComponentSelect(componentId)
  }
  return (
    <div className={styles.NavPage}>
      <ul>
        <li>
          <a href="#" onClick={() => handleComponentSelect('overView')}>
            概要
          </a>
        </li>
        <li>
          <a href="#" onClick={() => handleComponentSelect('px')}>
            px
          </a>
        </li>
        <li>
          <a href="#" onClick={() => handleComponentSelect('em')}>
            em
          </a>
        </li>{' '}
        <li>
          <a href="#" onClick={() => handleComponentSelect('rem')}>
            rem
          </a>
        </li>{' '}
        <li>
          <a href="#" onClick={() => handleComponentSelect('%')}>
            %
          </a>
        </li>{' '}
        <li>
          <a href="#" onClick={() => handleComponentSelect('vw')}>
            vw
          </a>
        </li>{' '}
        <li>
          <a href="#" onClick={() => handleComponentSelect('vh')}>
            vh
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Nav
