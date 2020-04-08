import React, { Component } from 'react'
import {Container, Header, Navbar, Content, FlexboxGrid, Panel, ButtonToolbar, Button,
Form, FormGroup, ControlLabel, FormControl, Footer} from 'rsuite'
import {backgroundStyle} from '../style/Style'
import * as LoginActions from '../actions/LoginActions'
import {connect} from 'react-redux'


class Login extends Component{

  state = {
    username : "",
    password : ""
  }
// var username = ""
// var pass = ""

//   constructor(props) {
//     super(props);
//     this.wrapper = React.createRef();

//   }
  
//   componentDidMount() {
//     this.props.onLoadAuthState()
//   }

  handleCode = (e) => {
  
    //console.log(e)
    
    this.setState({username : e})
  
  }

  handlePassword = (e) => {
    console.log(e.name)
    this.setState({password : e})
    //pass += e 
    
  }

  submitForm = (e) => {
    //e.preventDefault
    // if (this.state.pass == "admin" && this.state.username === "admin") {
    //   this.props.onLogin()
    // }
    // else {
    //   username= "",
    //   pass= ""

    // }
    // console.log(e)
    // console.log("submit")
    // console.log(this.state)
    this.props.onLogin(this.state)
 }
    render(){

        return(
            
            <Container ref={this.wrapper} style={backgroundStyle}>
              <Header>
                <Navbar>
                  <Navbar.Header>
                    <a href="#" className="navbar-brand logo">Εργολήπτης</a>
                  </Navbar.Header>
                </Navbar>
              </Header>
              <Content style={{paddingTop:'20vh'}}>
                <FlexboxGrid justify="center">
                  <FlexboxGrid.Item colspan={4}>
                    <Panel header={<h3>Σύνδεση</h3>} bodyFill>
                      <Form fluid onSubmit={(e) => this.submitForm(e)}>
                        <FormGroup>
                          <ControlLabel>Όνομα χρήστη ή email</ControlLabel>
                          <FormControl name="name" onChange={(e)=>{this.handlePassword(e)}} />
                        </FormGroup>
                        <FormGroup>
                          <ControlLabel>κωδικός</ControlLabel>
                          <FormControl name="password" type="password" onChange={(e)=>{this.handleCode(e)}} />
                        </FormGroup>
                        <FormGroup>
                          <ButtonToolbar>
                            <Button id="submit" appearance="primary" type="submit" >Συνδεθείτε</Button>
                            <Button id="forgot" appearance="link">Ξεχασατε τον κωδικό σας;</Button>
                          </ButtonToolbar>
                        </FormGroup>
                      </Form>
                    </Panel>
                  </FlexboxGrid.Item>
                </FlexboxGrid>
              </Content>
              <Footer style={{fontSize:'24px', fontStyle:'bold'}}>Copyright Drivas S.A 2020</Footer>
            </Container>
        )
    }
}

const mapLoginStateToProps = state => {
  return{
    isLogedIn : state.isLogedIn
  }
}

const mapDispatchStateToProps = dispatch => {
  return{
    onLogin: (user) => dispatch(LoginActions.isLoggedIn(user)),
    onLoadAuthState: () => dispatch(LoginActions.fetchAthState())
  }
}

export default connect(null, mapDispatchStateToProps) (Login)