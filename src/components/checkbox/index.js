import React from 'react'
import { FaCheck } from 'react-icons/fa'

import styles from './checkbox.module.less'
import colors from '../../theme/colors'

function Checkbox ({
  label,
  checked,
  onClick = () => {},
  checkmarkColor = colors.white
}) {
  return (
    <div
      className={styles.container}
      onClickCapture={() => onClick(!checked)}
    >
      <div className={styles.checkbox}>
        {checked ? (
          <FaCheck color={checkmarkColor} size={14} />
        ) : null}
      </div>

      <span>
        {label}
      </span>
    </div>
  )
}

export default Checkbox
