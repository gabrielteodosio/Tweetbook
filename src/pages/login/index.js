import React from 'react'

import styles from './login.module.less'

function LoginPage () {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.left}>
          <h1>Tweetbook</h1>
        </div>
        <div className={styles.right} />
      </div>
    </div>
  )
}

export default LoginPage
