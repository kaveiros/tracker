import React, { useState, useEffect, useContext } from 'react'
import { Grid, Panel, Row, Col, Input, InputGroup, Icon, Button, Message } from 'rsuite'
import './login.css'
import { AuthContext } from '../../context/Context'
import LoginService from '../../services/LoginService'
import { VALIDATOR_REQUIRED, validate, hasErrors } from '../../validator/Validators'
import {REQUIRED_FIELD, LOGIN_ERROR} from '../../settings/MessageSettings'
import TrackerMessage from '../utils/TrackerMessage'




const Login = () => {

    const styles = {
        position: 'relative',
        width: '60%',
        marginBottom: 10,
        marginLeft: '25%'
    };

    const [loginForm, setLogingForm] = useState({
        username: '',
        password: ''
    })

    const [loginErrors, setLogingErrors] = useState({
        validUsername:'unknown',
        validPassword:'unknown'
    })

    const [loginError, setLoginError]=useState(null)

    const authContext = useContext(AuthContext)

    const handleChange = (prop) => (evt) => {

        console.log(prop, evt)
        setLogingForm({ ...loginForm, [prop]: evt })
    }

    const handleBlur = (name, ...types) => (ev) => {

        console.log(ev)
        let result = validate(ev.target.value, types)
        setLogingErrors({...loginErrors, [name]: result})
    }

    const handleSubmit = (ev) => {
        ev.preventDefault()
        setLoginError(null)
        console.log(loginForm)
        LoginService.signIn(loginForm).then((response) => {
            console.log(response)
            authContext.login(response.data.user, response.data.token)
        }).catch((err) => {
            setLoginError(err)
            console.log(err)
        })
    }


    return (
        <div className="html">
               {loginError&&<TrackerMessage type="error" description={LOGIN_ERROR}/>}
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
                                    <Input name="username" onChange={handleChange('username')} onBlur={handleBlur('validUsername', VALIDATOR_REQUIRED)} />
                                </InputGroup>
                                {!loginErrors.validUsername&&<TrackerMessage
                                        type="error"
                                        description={REQUIRED_FIELD}
                                    />}
                                <InputGroup style={styles}>
                                    <InputGroup.Addon>
                                        <Icon icon="key" />
                                    </InputGroup.Addon>
                                    <Input name="password" type="password" onChange={handleChange('password')} onBlur={handleBlur('validPassword', VALIDATOR_REQUIRED)} />
                                </InputGroup>
                                {!loginErrors.validPassword &&<TrackerMessage
                                        type="error"
                                        description={REQUIRED_FIELD}
                                    />}
                                <Button color="blue" type="submit" style={styles} disabled={!hasErrors(loginErrors)} >Eίσοδος</Button>
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