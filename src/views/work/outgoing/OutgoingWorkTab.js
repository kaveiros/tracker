import React, { useState } from 'react'
import {
    Content, Header, Breadcrumb,
    Panel, Steps, Notification, Loader
} from 'rsuite'
import WorkStep1 from '../common/WorkStep1'
import WorkStep2 from '../outgoing/WorkStep2'
import WorkStep3 from '../common/WorkStep3'
import {v4 as uuidv4} from "uuid";
import {useLocation} from "react-router-dom";

const OutgoingWorkTab = () => {
    const [step, setStep] = useState(1);
    const uniqueVersion = useState(uuidv4())
    const [loading, setIsLoading] = useState(false)
    const initialState = {
        aa: 0,
        code: '',
        date: new Date(),
        kind:'',
        customer:'',
        description:'',
        startDate:new Date(),
        endDate:new Date(),
        fromSector:'',
        fromTeamLeader:'',
        toSector:'',
        toTeamLeader:'',
        additionalInfo:[],
        uniqueVersion:uniqueVersion[0]
    }

    const [workState, setInitialState] = useState(initialState)

    const initialErrorState = {
        aa: 0,
        code: '',
        date: new Date(),
        kind:'',
        customer:'',
        description:'',
        startDate:new Date(),
        endDate:new Date(),
        fromSector:'',
        fromTeamLeader:'',
        toSector:'',
        toTeamLeader:''
    }

    const[errors, setErrors] = useState(initialErrorState)
    //TO DO -> RESET TO TRUE
    const [hasValidationError, setValidationError] = useState(false)
    const location = useLocation()

    //TO DO -> ADD SCHEMA MODEL

    const showErrorNotification = (errorString) => {Notification.error({description: errorString
            .split('\n').map((str, i) => <p key={i}>{str}</p>),
        placement:"topStart", duration:7000})}

    const showSaveErrorNotification = (errorString) => {Notification.error({description: errorString
            .split('\n').map((str, i) => <p key={i}>{str}</p>),
        placement:"topStart", duration:4000})}

    const showSuccessNotification = (successString) => {Notification.success({description: successString,
        placement:"topStart", duration:4000})}


    const handleChange = (name) => (evt) => {}


    const handleStep = (stepValue) => (evn) => {
        setStep(stepValue)
    }

    const handleSubmit = () => {

    }

    return (
        <Panel>
            <Header>
                <Breadcrumb>
                    <Breadcrumb.Item href="/">Αρχική</Breadcrumb.Item>
                    <Breadcrumb.Item href="/outgoing-work-tab" active>καρτέλα εξερχόμενου έργου</Breadcrumb.Item>
                </Breadcrumb>
            </Header>
            <Content>
                <Panel shaded bordered>
                    <Steps current={step-1}>
                        <Steps.Item title="Βασικά στοιχεία" />
                        <Steps.Item title="Επιπλέον στοιχεία" />
                        <Steps.Item title="Παρατηρήσεις" />
                    </Steps>
                </Panel>
                <hr />
                <Panel shaded bordered>
                    {loading&&<Loader backdrop center vertical size="md" content="Γίνεται επεξεργασία..."/>}
                    {step === 1 && <WorkStep1 {...workState} errors={errors} hasValidationError={hasValidationError}
                                              handleChange={handleChange} handleStep={handleStep}/>}
                    {step === 2 &&
                    <WorkStep2 {...workState} errors={errors} handleChange={handleChange}
                               handleStep={handleStep} handleSubmit={handleSubmit}
                               uniqueVersion={uniqueVersion[0]}/>}

                    {step === 3 &&  <WorkStep3 {...workState} errors={errors} handleChange={handleChange}
                                               handleStep={handleStep} handleSubmit={handleSubmit}
                                               uniqueVersion={uniqueVersion[0]}/> }

                </Panel>
            </Content>
        </Panel>
    );
}

export default OutgoingWorkTab
