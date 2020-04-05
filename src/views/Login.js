import React, { Component } from 'react'
import {Container, Header, Navbar, Content, FlexboxGrid, Panel, ButtonToolbar, Button,
Form, FormGroup, ControlLabel, FormControl, Footer} from 'rsuite'

import backgd from '../img/b.jpg'


export default class Login extends Component{

    render(){
        return(
            
            <Container style={{backgroundImage: 'url('+backgd+')', backgroundSize:'cover',
             minHeight:'100vh'}}>
              <Header>
                <Navbar>
                  <Navbar.Header>
                    <a href="#" className="navbar-brand logo">Εργολήπτης</a>
                  </Navbar.Header>
                </Navbar>
              </Header>
              <Content style={{paddingTop:'20vh'}}>
                <FlexboxGrid justify="center">
                  <FlexboxGrid.Item colspan={12}>
                    <Panel header={<h3>Login</h3>} bodyFill>
                      <Form fluid>
                        <FormGroup>
                          <ControlLabel>Username or email address</ControlLabel>
                          <FormControl name="name" />
                        </FormGroup>
                        <FormGroup>
                          <ControlLabel>Password</ControlLabel>
                          <FormControl name="password" type="password" />
                        </FormGroup>
                        <FormGroup>
                          <ButtonToolbar>
                            <Button appearance="primary">Sign in</Button>
                            <Button appearance="link">Forgot password?</Button>
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