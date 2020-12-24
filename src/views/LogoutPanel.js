import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as LoginActions from '../actions/LoginActions'
import {Redirect} from '@reach/router'



class LogoutPanel extends Component{

    componentDidMount() {
        this.props.onLogOff()
    }

    render(){
      return(
        <div>
        <Redirect from="/logout" to="/" />
        </div>
      )
    }

}

const mapDispatchToProps = dispatch => {
    return {
      onLogOff: () => dispatch(LoginActions.destroyAuthentication())
    }
  }

export default connect(null, mapDispatchToProps) (LogoutPanel)