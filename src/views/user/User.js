import {
    Breadcrumb,
    Col,
    Content,
    Row,
    Form,
    Header,
    Panel,
    Grid,
    SelectPicker, ButtonToolbar, Schema, IconButton
} from "rsuite";
import React, {useEffect, useState} from "react";
import RoleService from "../../services/RoleService";
import UserService from "../../services/UserService";
import {showErrorNotification} from "../common/Notifications";
import BlockIcon from "@rsuite/icons/Block";
import CheckIcon from "@rsuite/icons/Check";

//To do-> put validation on blur

function SaveIcon() {
    return null;
}

/**
 *
 * @returns {JSX.Element}
 * @constructor
 */
const User = () => {

    const initialState = {
        username:'',
        role: '',
        password:'',
        retypedPassword:''
    }

    /**
     *
     * @type {{retypedPassword: string, password: string, role: string, username: string}}
     */
    const userErrorState = {
        username:'',
        role: '',
        password:'',
        retypedPassword:''
    }


    const[userErrors, setUserErrors] = useState(userErrorState)
    const [role, setSelectedRole] = useState()
    const [roles, setRoles] = useState()
    const [loading, setIsLoading] = useState(false)
    const [userState, setUserState] = useState(initialState)
    const [hasValidationError, setValidationError] = useState(true)

    const { StringType, NumberType } = Schema.Types;

    const userModel = Schema.Model({
        password: StringType().isRequired('Το πεδίο απαιτείται'),
        retypedPassword: StringType().addRule((value, data) => {
            return value === data.password;

        }, 'Οι κωδικοί δεν ταιριάζουν')
    });



    const  handleSave = (saveEvent) => {
        let validation = userModel.check(userState)
        let errorString = ''
        for (let key in validation) {
            if (validation[key].errorMessage!== undefined ) {

                errorString = errorString + '\n' + validation[key].errorMessage + '\n'
                setValidationError(validation[key].hasError)
            }
        }
        if(hasValidationError) {
            showErrorNotification(errorString)
        }
        else {
            UserService.search({username: userState.username}).then(resp=>{
                console.log(resp)
            }).catch(Exc=> {
                console.log(Exc)
            })
        }
        console.log(userState)
    }

    const handleCancel = (cancelEvent) => {
        console.log("canceled")
    }

    const handleChange = (name) =>(changeEvent) => {
        let validation = userModel.checkForField(name, changeEvent)
        setValidationError(validation.hasError)
        setUserState( { ...userState, [name]: changeEvent })
        console.log(userState)
        if (validation.hasError) {
            setUserErrors({ ...userErrors, [name]: validation })
        }
        else {
            setUserErrors({ ...userErrors, [name]: '' })
        }

    }

    //load all roles
    useEffect(()=>{

        setIsLoading(true)
        RoleService.getAll().then(res=> {
            let roles = []
            for (let role of res.data){
                let roleData = {
                    "name" : role.name,
                    "id": role._id
                }
                roles.push(roleData)
            }
            setRoles(roles)
            console.log(res)
            setIsLoading(false)
        }).catch(error => {
            console.log(error)
            setIsLoading(false)
        })

    },[])

    //check if username exists
    useEffect(()=>{
        setTimeout(()=>{
            console.log('username changed...')
        },700)
    },[userState.username, userState.password])





    return(
        <Panel>
            <Header>
                <Breadcrumb>
                    <Breadcrumb.Item href="/">Αρχική</Breadcrumb.Item>
                    <Breadcrumb.Item href="/adminPage">Διαχείριση</Breadcrumb.Item>
                    <Breadcrumb.Item href="/user" active>Προσθήκη χρήστη</Breadcrumb.Item>
                </Breadcrumb>
            </Header>

            <Content>
                <Panel shaded bordered>
                    <Form fluid={true}>
                        <Grid fluid={true}>
                            <Row className="show-grid">
                                <Col xs={24} sm={12} md={8} lg={6}/>
                                <Col xs={24} sm={12} md={8} lg={12}>
                                    <Form.Group>
                                        <Form.ControlLabel>Όνομα χρήστη</Form.ControlLabel>
                                        <Form.Control name="username" type="string" value={userState.username} onChange={handleChange('username')}
                                                     errorMessage={userErrorState.username.errorMessage} />

                                    </Form.Group>
                                    <Form.Group>
                                        <Form.ControlLabel>Κωδικός</Form.ControlLabel>
                                        <Form.Control name="password" value={userState.password} onChange={handleChange('password')}
                                                     errorMessage={userErrorState.password.errorMessage}/>
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.ControlLabel>Επαλήθευση Κωδικού</Form.ControlLabel>
                                        <Form.Control name="retypedPassword" value={userState.retypedPassword} onChange={handleChange('retypedPassword')}
                                                     errorMessage={userErrorState.retypedPassword.errorMessage} />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.ControlLabel>Ρόλος</Form.ControlLabel>
                                        <SelectPicker name="select" className="rs-form-control-wrapper" data={roles} valueKey="id" labelKey="name" defaultValue={null}
                                                      onChange={handleChange('role')}/>
                                    </Form.Group>
                                </Col>
                                <Col xs={24} sm={12} md={8} lg={6}/>
                            </Row>
                            <Row className="show-grid">
                                <Col md={4} mdOffset={20}>

                                    <Form.Group>
                                        <ButtonToolbar>
                                            <IconButton appearance="primary" color="green" disabled={false}
                                                    onClick={handleSave} icon={<CheckIcon/>}/>
                                            <IconButton appearance="primary" color="red"  onClick={handleCancel} icon={<BlockIcon />}/>
                                        </ButtonToolbar>
                                    </Form.Group>
                                </Col>
                            </Row>

                        </Grid>
                    </Form>
                </Panel>
            </Content>
        </Panel>
    )
}

export default User
