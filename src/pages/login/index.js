import React, { useState } from 'react'
import { MdLockOpen, FaUserCircle } from 'react-icons/all'

import styles from './login.module.less'
import colors from '../../theme/colors'
import Checkbox from '../../components/checkbox'

function LoginPage () {
  const [rememberMe, setRememberMe] = useState(false)

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.left}>
          <h1>Tweetbook</h1>

          <div className={styles.iconsContainer}>
            <button>
              <MdLockOpen size={36} color={colors.white} />
              No protection
            </button>
            <button>
              <FaUserCircle size={36} color={colors.white} />
              No on to chat
            </button>
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.pageTitle}>
            <h1>
              Login
            </h1>
            <h4>
              Don’t have any account yet? <a>You better make one</a>
            </h4>
          </div>

          <form>
            <input id='email-field' type='email' placeholder='Email' />
            <input id='password-field' type='password' placeholder='Password' />

            <div className={styles.secondary}>
              <Checkbox
                label='Remember me'
                checked={rememberMe}
                onClick={() => setRememberMe(!rememberMe)}
              />
              <a>
                Forgot your password?
              </a>
            </div>

            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
