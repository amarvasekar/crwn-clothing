import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

import './stripe-button.styles.scss'

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100
  const publishableKey =
    'pk_test_51J3E6QSCkBnuZTABaQVHxQLP9N1LUADIUJEMisFoy8SbRcZqOz6UxpqPJzRVOVjUMjenI1HGL5Hx7xf4aSwRW2EY007MtUUTbe'
  const onToken = (token) => {
    console.log(token)
    alert('payment successfully ')
  }

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://raw.githubusercontent.com/amarvasekar/crwn-clothing/79db8dd2d36005ebc345fb9d64ebabb4c31f809e/src/assets/crown.svg"
      description={`Your total is : ${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutButton
