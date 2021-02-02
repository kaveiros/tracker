import React, { useState, useEffect, useContext } from 'react'
import { Grid, Panel, Row, Col, Input, InputGroup, Icon, Button, Message } from 'rsuite'
import './login.css'
import { AuthContext } from '../../context/Context'
import LoginService from '../../services/LoginService'
import { VALIDATOR_REQUIRED, validate } from '../../validator/Validators'




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
        hasUsernameError: false,
        hasPasswordError: false
    })

    const [disabledLogin, setDisableLogin] = useState(false)

    const [loginError, setLoginError]=useState(null)

    const authContext = useContext(AuthContext)

    const handleChange = (prop) => (evt) => {

        console.log(prop, evt)
        setLogingForm({ ...loginForm, [prop]: evt })
    }

    const handleBlur = (name, ...types) => (ev) => {

        console.log(ev)
        let result = validate(ev.target.value, types)
        setLogingErrors({ ...loginErrors, [name]: result })

        // if(loginErrors.hasPasswordError || loginErrors.hasUsernameError) {
        //     setDisableLogin(true)
        // }
        // if(!loginErrors.hasPasswordError && !loginErrors.hasUsernameError) {
        //     setDisableLogin(false)
        // }
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
               {loginError&&<Message showIcon type="error" closable description="Αποτυχία σύνδεσης. Προσπαθήστε ξανά." />}
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
                                    <Input name="username" onChange={handleChange('username')} onBlur={handleBlur('hasUsernameError', VALIDATOR_REQUIRED)} />
                                </InputGroup>
                                {loginErrors.hasUsernameError&&<Message
                                        showIcon
                                        type="error"
                                        title="Σφάλμα"
                                        closable
                                        description="Το πεδίο απαιτείται"
                                    />}
                                <InputGroup style={styles}>
                                    <InputGroup.Addon>
                                        <Icon icon="key" />
                                    </InputGroup.Addon>
                                    <Input name="password" type="password" onChange={handleChange('password')} onBlur={handleBlur('hasPasswordError', VALIDATOR_REQUIRED)} />
                                </InputGroup>
                                {loginErrors.hasPasswordError&&<Message
                                        showIcon
                                        type="error"
                                        title="Σφάλμα"
                                        closable
                                        description="Το πεδίο απαιτείται"
                                    />}
                                <Button color="blue" type="submit" style={styles} disabled={disabledLogin} >Eίσοδος</Button>
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