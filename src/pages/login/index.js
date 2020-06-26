import React from 'react'
import { MdLockOpen, FaUserCircle } from 'react-icons/all'

import styles from './login.module.less'
import colors from '../../theme/colors'

function LoginPage () {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.left}>
          <h1>Tweetbook</h1>

          <div className={styles.iconsContainer}>
            <div className={styles.lockContainer}>
              <button>
                <MdLockOpen size={36} color={colors.white} />
                No protection
              </button>
            </div>

            <div className={styles.profileContainer}>
              <button>
                <FaUserCircle size={36} color={colors.white} />
                No on to chat
              </button>
            </div>
          </div>
        </div>

        <div className={styles.right} />
      </div>
    </div>
  )
}

export default LoginPage
