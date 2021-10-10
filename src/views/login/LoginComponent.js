import React, {useEffect, useState} from 'react'
import {Grid, Panel, Row, Col, Input, InputGroup, Button, toaster} from 'rsuite'
import './login.css'
import LoginService from '../../services/LoginService'
import { VALIDATOR_REQUIRED, validate } from '../../validator/Validators'
import { REQUIRED_FIELD} from '../../settings/MessageSettings'
import TrackerMessage from '../common/TrackerMessage'
import {useHistory} from "react-router-dom";
import OthersIcon from '@rsuite/icons/Others';
import MemberIcon from '@rsuite/icons/Member';
import {showErrorNotification} from "../common/Notifications";
import TokenService from "../../services/TokenService";


const LoginComponent = () => {

    const history = useHistory()

    useEffect(()=>{
        const token = TokenService.getCurrentUser()
        if (token) {
            history.replace("/")
        }
    },[history])

    const styles = {
        position: 'relative',
        width: '60%',
        marginBottom: 10,
        marginLeft: '25%'
    };

    const [loginForm, setLoggingForm] = useState({
        username: '',
        password: ''
    })

    const [loginErrors, setLoggingErrors] = useState({
        validUsername: '',
        validPassword: ''
    })

    const handleChange = (prop) => (evt) => {

        setLoggingForm({ ...loginForm, [prop]: evt })
    }

    const handleBlur = (name, ...types) => (ev) => {

        let result = validate(ev.target.value, types)
        setLoggingErrors({ ...loginErrors, [name]: result })
    }

    const handleSubmit = (ev) => {
        ev.preventDefault()
        LoginService.signIn(loginForm)
            .then((response) => {
                //console.log(response)
                let token = response.data.token
                localStorage.setItem('userData',
                    JSON.stringify({
                        token
                    }))
                history.replace("/")
            }).catch(err => {
            //let errorResponse = err.response.data
            //console.log(errorResponse)
            toaster.push(showErrorNotification(err), {placement:"topStart"})
        })
    }


    return (
        <div className="html">
            <Grid fluid>
                <Row className="show-grid">
                    <Col xs={8} xsOffset={16}/>
                    <Col xs={8} xsOffset={16}>
                        <Panel bordered shaded header="Tracker" className="backgroundStyle">
                            <form onSubmit={handleSubmit}>
                                <InputGroup style={styles}>
                                    <InputGroup.Addon>
                                        <MemberIcon/>
                                    </InputGroup.Addon>
                                    <Input name="username" onChange={handleChange('username')} onBlur={handleBlur('validUsername', VALIDATOR_REQUIRED)} />
                                </InputGroup>
                                {loginErrors.validUsername && <TrackerMessage
                                    type="error"
                                    description={REQUIRED_FIELD}
                                />}
                                <InputGroup style={styles}>
                                    <InputGroup.Addon>
                                        <OthersIcon />
                                    </InputGroup.Addon>
                                    <Input name="password" type="password" onChange={handleChange('password')} onBlur={handleBlur('validPassword', VALIDATOR_REQUIRED)} />
                                </InputGroup>
                                {loginErrors.validPassword && <TrackerMessage
                                    type="error"
                                    description={REQUIRED_FIELD}
                                />}
                                <Button appearance="primary" color="blue" type="submit" style={styles} >Eίσοδος</Button>
                            </form>
                        </Panel>
                    </Col>
                </Row>
            </Grid>
        </div>
    )

}

export default LoginComponent
