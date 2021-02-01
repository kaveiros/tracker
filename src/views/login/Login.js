import React, { useState, useEffect, useContext} from 'react'
import { Grid, Panel, Row, Col, Input, InputGroup, Icon, Form, FormGroup, Button, ButtonToolbar, FormControl, HelpBlock, ControlLabel } from 'rsuite'
import './login.css'
import { useNavigate } from "@reach/router"
import {AuthContext} from '../../context/Context'




const Login = () => {

    const navigate = useNavigate();

    const styles = {
        position:'relative',
        width: '60%',
        marginBottom: 10,
        marginLeft:'25%'
    };



    const [loginForm, setLogingForm] = useState({
        username: '',
        password: ''
    })

    const authContext = useContext(AuthContext)

    const loginHandler = () => {
        //API call to server...
        //response from server
        const userResponse = {
            token: "abjd2323jb443jbbb"
        };
        authContext.login(userResponse.token);//setAuthContext       
    };



    // useEffect(()=>{
    //     const cookieItem = localStorage.getItem("Tracker")
    //     if(cookieItem === "authenticated"){
    //         setIsAuthenticated(true)
    //     }

    // },[isAuthenticated])


    const handleChange = (prop) => (evt) => {

        console.log(prop, evt)
        setLogingForm({ ...loginForm, [prop]: evt })
    }

    const handleBlur = (prop) => (ev) => {
//        console.log(`ONBLUR ${prop}, ${ev}`)
        console.log("BLUR" + ev.target.value)


    }

    const handleSubmit = (ev) => {
        ev.preventDefault()
        console.log(loginForm)
        loginHandler()
        // if (loginForm.username == loginForm.password) {
        //     localStorage.setItem("Tracker", "authenticated")
        //     setIsAuthenticated(true)
        //     navigate('/', { replace: false })

        // }
    }


    return (
        <div className="html">
            <Grid fluid>
                <Row className="show-grid">
                    <Col xs={8} xsOffset={16}></Col>

                    <Col xs={8} xsOffset={16}>
                        <Panel bordered shaded header="Tracker" className="backgroundStyle">
                            <form onSubmit={handleSubmit}>
                                <InputGroup style={styles}>
                                    <InputGroup.Addon>
                                        <Icon icon="avatar" />
                                    </InputGroup.Addon>
                                    <Input name="username" onChange={handleChange('username')} onBlur={handleBlur('username')}/>
                                </InputGroup>
                                <InputGroup style={styles}>
                                    <InputGroup.Addon>
                                        <Icon icon="key" />
                                    </InputGroup.Addon>
                                    <Input name="password" type="password" onChange={handleChange('password')} onBlur={handleBlur('password')}/>
                                </InputGroup>
                                <Button color="blue" type="submit" style={styles} >Eίσοδος</Button>
                            </form>
                        </Panel>
                    </Col>
                    <Col xs={8} xsOffset={16}></Col>
                </Row>
            </Grid>
        </div>

    )

}

export default Login