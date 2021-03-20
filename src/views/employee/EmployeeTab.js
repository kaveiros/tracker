import React from 'react'
import { useState } from 'react'
import {
  Content, Breadcrumb, Header, Steps,
  Panel, Modal, FormControl, Input, Button, Icon, ButtonToolbar
} from 'rsuite'
import EmployeeStep1 from './EmployeeStep1'
import EmployeeStep2 from './EmployeeStep2'
//import useAuth from '../../hook/useAuth'
import {Redirect} from 'react-router-dom'
import AdditionalInfo from "../additionalInfo/AdditionalInfo";

const EmployeeTab = () => {

  const [modal, setShowModal] = useState(false)
  const [step, setStep] = React.useState(1);
  const [employeeState, setEmployeeState] = useState({
    aa: 0,
    code: '',
    name: 'foo',
    address:'',
    expertise: '',
    property: ''
  })


  //const isAuth = useAuth()


  // if (!isAuth) {
  //     return <Redirect to="/login" />
  // }




  //will be later used for update purposes
  // useEffect(()=>{
  //   setEmployeeState({
  //     aa:10,
  //     code:'lwn',
  //     name:'foo',
  //     expertise:'none',
  //     property:'property'
  //   })
  // },[])

  const handleChange = (prop) => (evt) => {
    console.log(evt)
    console.log(prop)
    setEmployeeState({ ...employeeState, [prop]: evt })
  }

  const handleStep = (stepValue) => (evn) => {
    setStep(stepValue)
  }


  const showModalHandler = () => {
    setShowModal(true)
  }

  const hideModal = () => {
    setShowModal(false)
  }



  return (
    <Panel>
      <Header>
        <Breadcrumb>
          <Breadcrumb.Item href="/">Αρχική</Breadcrumb.Item>
          <Breadcrumb.Item href="/employeetab" active>Καρτέλα εργαζομένου</Breadcrumb.Item>
        </Breadcrumb>
      </Header>
      <Content>
        <Panel shaded bordered>

          <Steps current={step}>
            <Steps.Item title="Βασικά στοιχεία" />
            <Steps.Item title="Παρατηρήσεις" />
          </Steps>
        </Panel>
        <hr />
        <Panel shaded bordered>
          <Button appearance="primary" color="green" onClick={showModalHandler}> <Icon icon="info-circle" /> Παρατηρήσεις</Button>
          {step === 1 ? <EmployeeStep1 {...employeeState}
            handleChange={handleChange} handleStep={handleStep} /> :
            <EmployeeStep2 {...employeeState} handleChange={handleChange} handleStep={handleStep} />}
          {modal && <AdditionalInfo showModal={modal} hideModal={hideModal}/>}

        </Panel>
      </Content>
    </Panel>
  )

}

export default EmployeeTab