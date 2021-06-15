import React from 'react'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import Alerts from '../alerts/alerts.component'
import { auth, signInWithGoogle } from '../../firebase/firebase.utils'
// import { ReactComponent as GoogleIcon } from '../../assets/google-icon.svg'

import './sign-in.style.scss'

class SignIn extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      errorMessage: '',
      alertType: '',
    }
  }

  handleSubmit = async (event) => {
    event.preventDefault()

    const { email, password } = this.state

    try {
      await auth.signInWithEmailAndPassword(email, password)
      this.setState({
        email: '',
        password: '',
      })
    } catch (error) {
      this.setState({ errorMessage: error.message, alertType: 'error' })
      // console.log('error=>', error.message)
    }

    this.setState({ email: '', password: '' })
  }

  handleChange = (event) => {
    const { name, value } = event.target

    this.setState({ [name]: value })
  }
  render() {
    return (
      <div className="sign-in">
        <h2>I already have a account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="Password"
            required
          />

          <div className="buttons">
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign in with Google
            </CustomButton>
          </div>
        </form>
        {this.state.errorMessage ? (
          <Alerts
            alertType={this.state.alertType}
            errorMessage={this.state.errorMessage}
          />
        ) : null}
      </div>
    )
  }
}

export default SignIn
