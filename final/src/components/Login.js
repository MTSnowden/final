import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { TextField, Button } from '@material-ui/core'
import styled from 'styled-components'
import Signup from '../containers/Signup';
import './Login.css'

const FlexForm = styled.form`
  margin: 50px;
  display: flex;
  flex-direction: column;
`

const RedSpan = styled.span`
  font-size: 12px;
  color: red;
`

class Login extends Component {
  state = {
    userName: '',
    password: '',
    message: ''
  }

  handleTextChange = (e) => {
    const newState = { ...this.state }
    newState[e.target.id] = e.target.value
    this.setState(newState)
  }

  login = (e) => {
    e.preventDefault()
    return this.props.login({ ...this.state })
      .catch(err => this.setState({ userName: '', password: '', message: err.response.data }))
  }

  render() {
    console.log(this.state.message)
    // console.log(this.props.user)
    // changed this to !this
    if (!this.props.user) {

      return (
        <Redirect to={{
          pathname: "/dashboard",
          state: { from: this.props.location }
        }} />
      )
    } else {
      return (
        <div id="poo">
          <div id="moo">
            <FlexForm onSubmit={this.login}>
              <TextField
                onChange={this.handleTextChange}
                id="userName"
                label="Username"
                value={this.state.userName}
                variant="outlined" 
              />
              <TextField
                onChange={this.handleTextChange}
                id="password"
                label="Password"
                value={this.state.password}
                variant="outlined" 
              />
              <Button type="submit" variant="contained">Login</Button>
            </FlexForm>
          </div>
          {this.state.message && <RedSpan>{this.state.message}</RedSpan>}
          <Signup />
        </div>
      )
    }
  }
}

export default Login