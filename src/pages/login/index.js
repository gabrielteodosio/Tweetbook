import React, { useState } from 'react'

import styles from './login.module.less'
import Header from '../../components/header'

function LoginPage () {
  const [textValue, setTextValue] = useState('Gabriel')

  function onChangeText (evt) {
    setTextValue(evt.target.value)
  }

  return (
    <div className={styles.container}>
      <Header abobora={textValue} />
      <input
        type='text'
        value={textValue}
        onChange={onChangeText}
        placeholder='Digite aqui um nome'
      />
      <h1>
        Will
      </h1>
    </div>
  )
}

export default LoginPage
