import React, { Component, Fragment } from 'react'
// import { Redirect } from 'react-router-dom'
import NewProject from './NewProject'
import ListProjects from './ListProjects'

import styled from 'styled-components'
import { Card, CardHeader, CardContent, Button} from '@material-ui/core'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`

class Dashboard extends Component {
  state = {
    expanded: false,
    userName: '',
    password: ''
  };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  }

  handleUserChange = (e) => {
    this.setState({ userName: e.target.value })
  }

  handlePassChange = (e) => {
    this.setState({ password: e.target.value })
  }

  updateUser = (e) => {
    e.preventDefault()
    this.props.updateUser(this.state.userName)
      .then(() => this.setState({ userName: '' }))
  }

  updatePass = (e) => {
    e.preventDefault()
    this.props.updatePassword(this.state.password)
      .then(() => this.setState({ password: '' }))
  }

  logout = (e) => {
    e.preventDefault()
    document.cookie = 'id_token= ;expires=Thu, 01 Jan 1970 00:00:01 GMT'
    window.location.reload();
  }

  render() {
    return (
      <Fragment>
        <Button variant="secondary" 
                onClick={this.logout}>Logout</Button>
        <Wrapper>
          <Card  style={left}>
            <CardHeader
              // title={`Welcome ${this.props.user.userName}!`}
              title={`Hey Sparky!`}
              subheader="Here's your list of active projects:"
            />
            <CardContent>
              <div>
                <ListProjects />
              </div>
            </CardContent>
          </Card>
            <div style={right}>
              <NewProject />
            </div>
        </Wrapper>
        {/* <Button variant="contained" onClick={this.logout}>Logout</Button> */}
      </Fragment>
    )
  }
}

const right = {
  backgroundColor: 'lightGrey',
  height: '450px',
  width: '280px',
  padding: '50px',
}

const left = {
  backgroundColor: 'tan',
  height: '450px',
  width: '280px',
  // padding: '35px',
}
export default Dashboard;