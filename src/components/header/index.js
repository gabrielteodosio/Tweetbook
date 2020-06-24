import React from 'react'

import styles from './header.module.less'

function Header (props) {
  return (
    <div className={styles.container}>
      <h2>{props.abobora}</h2>
    </div>
  )
}

export default Header
