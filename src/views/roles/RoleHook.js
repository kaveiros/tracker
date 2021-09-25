import {
    Panel,
    SelectPicker,
    Loader,
    Modal,
    Button,
    Divider
} from "rsuite";
import React, {useEffect, useState} from "react";
import RoleService from "../../services/RoleService";
import UserService from "../../services/UserService";
import BlockIcon from "@rsuite/icons/Block";
import CheckIcon from "@rsuite/icons/Check";


const RoleHook = () => {

    const [loading, setIsLoading] = useState(false)
    const [show, setShowModal] = useState(true)
    const [employees, setEmployees] = useState()
    const [roles, setRoles] = useState()
    const [employee, setSelectedEmployee] = useState()
    const [role, setSelectedRole] = useState()

    const handleShowModal = () => {
        setShowModal(false)
    }

    //load all users
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

    useEffect(()=>{
        setIsLoading(true)
        UserService.getAll().then(response=>{
            console.log(response)
            let users = []
            for (let user of response.data){
                let userData = {
                    "name" : user.username,
                    "id": user._id
                }
                users.push(userData)
            }
            setEmployees(users)
            setIsLoading(false)
        }).catch(err=>{
            console.log(err)
            setIsLoading(false)
        })
    },[])

    const handleSubmit = () => {
        console.log("Submitted!!")
        let roleObj = {
            employeeId : employee,
            roleId: role
        }
        UserService.setRole(roleObj).then(res=>{
                console.log(res)
        }

    ).catch(error=>{
        console.log(error)
        })
    }

    const handleEmployee = (emp) =>{
        console.log(emp)
        setSelectedEmployee(emp)
    }

    const handleRole = (erol) => {
        console.log(erol)
        setSelectedRole(erol)
    }

    return(

        <Modal backdrop={"static"}  show={show} keyboard={true}>
            {loading&&<Loader backdrop center vertical size="md" content="Γίνεται επεξεργασία..."/>}
            <Modal.Header closeButton={false}>
                <Modal.Title>Ρόλοι</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Panel>
                    <SelectPicker data={employees}  valueKey="id" labelKey="name" defaultValue={null} onChange={handleEmployee} />
                    <Divider/>
                    <SelectPicker data={roles} valueKey="id" labelKey="name" defaultValue={null} onChange={handleRole}/>
                </Panel>
            </Modal.Body>
            <Button appearance="primary" color="red"  onClick={handleShowModal}><BlockIcon /> Ακύρωση</Button>
            <Button appearance="primary" color="green" onClick={handleSubmit}><CheckIcon/> Υποβολή</Button>

        </Modal>

    )
}

export default RoleHook
