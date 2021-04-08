import React, {useEffect} from 'react'
import { useState } from 'react'
import {
  Content, Breadcrumb, Header, Steps,
  Panel, Notification, Loader,
} from 'rsuite'
import EmployeeStep1 from './EmployeeStep1'
import EmployeeStep2 from './EmployeeStep2'
import { Schema } from 'rsuite';
import { v4 as uuidv4 } from 'uuid';
import EmployeeService from "../../services/EmployeeService";
import {useLocation} from "react-router-dom";
import {showErrorNotification, showSaveErrorNotification, showSuccessNotification} from "../common/Notifications";
import LoaderHook from "../common/LoaderHook";

const { StringType, NumberType } = Schema.Types;

const EmployeeTab = () => {

  const [step, setStep] = React.useState(0);
  const uniqueVersion = useState(uuidv4())
  const [loading, setIsLoading] = useState(false)
  const initialState = {
    aa: 0,
    code: '',
    address:'',
    name: '',
    section:'',
    sector:'',
    property: '',
    specialisedIn:'',
    expertise: '',
    costOvertime:0,
    costPerDay:0,
    additionalInfo:[],
    uniqueVersion:uniqueVersion[0]
  }
  const [employeeState, setEmployeeState] = useState(initialState)

  const initialErrorState = {
    aa:'',
    code:'',
    address:'',
    name: '',
    section:'',
    sector:'',
    property: '',
    specialisedIn:'',
    expertise: '',
    costOvertime:0,
    costPerDay:0
  }
  const[errors, setErrors] = useState(initialErrorState)
  const [hasValidationError, setValidationError] = useState(true)
  const location = useLocation()

  const employeeModel = Schema.Model({
    aa: NumberType("O αύξων αριθμός δεν μπορεί να είναι μηδέν ή μικρότερος").min(1),
    code:StringType().isRequired("O κωδικός δεν μπορεί να ειναι κενός").minLength(3,
        "Τουλάχιστον 3 χαρακτήρεσ"),
    address:StringType().isRequired("Η διεύθυνση δεν μπορεί να ειναι κενή").minLength(5,
        "Τουλάχιστον 5 χαρακτήρες"),
    name:StringType().isRequired("Το όνομα δεν μπορεί να ειναι κενό").minLength(5,
        "Τουλάχιστον 5 χαρακτήρες"),
    section: StringType().isRequired("Το τμήμα απαιτείται").minLength(3,
        "Τουλάχιστον 3 χαρακτήρες"),
    sector: StringType().isRequired("Ο τομέας απαιτείται").minLength(3,
        "Τουλάχιστον 3 χαρακτήρες"),
    property: StringType().isRequired("Η ιδιότητα απαιτείται").minLength(3,
        "Τουλάχιστον 3 χαρακτήρες"),
    specialisedIn:StringType().isRequired("Η ειδικότητα απαιτείται").minLength(3,
        "Τουλάχιστον 3 χαρακτήρες"),
    expertise: StringType().isRequired("Η εξιδίκευση απαιτείται").minLength(3,
        "Τουλάχιστον 3 χαρακτήρες"),
    costOvertime:NumberType("Η υπερωρία δεν μπορεί να είναι μηδέν ή μικρότερη").min(1),
    costPerDay:NumberType("Το κόστος ανά ημέρα δεν μπορεί να είναι μηδέν ή μικρότερο").min(1)
  })


  const successString = "Ο εργαζόμενος αποθηκεύτηκε"
  const saveErrorString = "Σφάλμα στην αποθήκευση εργαζομένου"

    useEffect(()=>{
      if(location.state !== undefined){
        console.log(location)
        setEmployeeState(location.state)
        setValidationError(false)
      }
  },[location])

  const handleChange = (name) => (evt) => {
    let validation = employeeModel.checkForField(name, evt)
    setValidationError(validation.hasError)
    setEmployeeState({ ...employeeState, [name]: evt })
    if (validation.hasError) {
      setErrors({ ...errors, [name]: validation })
    }
    else {
      setErrors({ ...errors, [name]: '' })
    }
  }

  const handleSubmit = ( ) => {
    let validation = employeeModel.check(employeeState)
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
      setIsLoading(true)
      EmployeeService.saveEmployee(employeeState)
          .then(resp => {
            setIsLoading(false)
            showSuccessNotification(successString)
          })
          .catch(err => {
            setIsLoading(false)
            setEmployeeState(initialState)
            setErrors(initialErrorState)
            showSaveErrorNotification(saveErrorString)
          })
    }
  }


  const handleStep = (stepValue) => (evn) => {
    setStep(stepValue)
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
            {loading&&<LoaderHook message={"Γίνεται επεξεργασία..."}/>}
            {step === 0 ? <EmployeeStep1 {...employeeState} errors={errors} hasValidationError={hasValidationError}
                                         handleChange={handleChange} handleStep={handleStep} /> :
                <EmployeeStep2 {...employeeState} errors={errors} handleChange={handleChange}
                               handleStep={handleStep} handleSubmit={handleSubmit} uniqueVersion={uniqueVersion[0]} />}
          </Panel>
        </Content>
      </Panel>
  )

}

export default EmployeeTab
