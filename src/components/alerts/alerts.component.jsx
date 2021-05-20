import React from 'react'

import './alerts.styles.scss'

const Alerts = ({ alertType, errorMessage }) => (
  <div className={`${alertType === 'error' ? 'alert-danger' : ''}  alert`}>
    {errorMessage ? <span>{errorMessage}</span> : null}
  </div>
)

export default Alerts
