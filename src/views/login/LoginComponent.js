import React, {useState} from 'react'
import { Grid, Panel, Row, Col, Input, InputGroup, Icon, Button } from 'rsuite'
import './login.css'
import LoginService from '../../services/LoginService'
import { VALIDATOR_REQUIRED, validate } from '../../validator/Validators'
import { REQUIRED_FIELD, LOGIN_ERROR } from '../../settings/MessageSettings'
import TrackerMessage from '../common/TrackerMessage'
import {Redirect, useHistory} from "react-router-dom";
import useAuthHook from "../../hook/useAuthHook";

const LoginComponent = () => {

    const  { user} = useAuthHook()
    const history = useHistory()

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
        validUsername: '',
        validPassword: ''
    })

    const [loginError, setLoginError] = useState(null)

    const handleChange = (prop) => (evt) => {

        console.log(prop, evt)
        setLogingForm({ ...loginForm, [prop]: evt })
    }

    const handleBlur = (name, ...types) => (ev) => {

        console.log(ev)
        let result = validate(ev.target.value, types)
        setLogingErrors({ ...loginErrors, [name]: result })
    }

    const handleSubmit = (ev) => {
        ev.preventDefault()
        setLoginError(null)
        console.log(loginForm)
        LoginService.signIn(loginForm)
            .then((response) => {
                console.log(response)
                let token = response.data.token
                localStorage.setItem('userData',
                    JSON.stringify({
                        token
                    }))
                history.replace("/")
            }).catch((err) => {
            setLoginError(err)
        })
    }

    if (user[0]) {
        return <Redirect to="/"/>
    }


    return (
        <div className="html">
            {loginError && <TrackerMessage type="error" description={LOGIN_ERROR} />}
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
                                {loginErrors.validUsername && <TrackerMessage
                                    type="error"
                                    description={REQUIRED_FIELD}
                                />}
                                <InputGroup style={styles}>
                                    <InputGroup.Addon>
                                        <Icon icon="key" />
                                    </InputGroup.Addon>
                                    <Input name="password" type="password" onChange={handleChange('password')} onBlur={handleBlur('validPassword', VALIDATOR_REQUIRED)} />
                                </InputGroup>
                                {loginErrors.validPassword && <TrackerMessage
                                    type="error"
                                    description={REQUIRED_FIELD}
                                />}
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

export default LoginComponent