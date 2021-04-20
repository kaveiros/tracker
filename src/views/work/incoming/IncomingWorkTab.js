import React, {useEffect, useState} from 'react'
import {
    Content, Header, Breadcrumb,
    Panel, Steps, Notification, Loader, Schema
} from 'rsuite'
import WorkStep1 from '../common/WorkStep1'
import WorkStep2 from './WorkStep2'
import WorkStep3 from '../common/WorkStep3'
import {v4 as uuidv4} from "uuid"
import {useLocation} from "react-router-dom"
import IncomingWorkService from "../../../services/IncomingWorkService"
import SectorService from "../../../services/SectorService";
import {sectorErrorNotification, showErrorNotification} from "../../common/Notifications";
const { StringType, NumberType, DateType } = Schema.Types;


const IncomingWorkTab = () => {

    const url = 'incoming-work'
    const incomingWorkService = new IncomingWorkService(url)
    const [fromSectorInitialData, setFromSectorInitialData] = useState()
    const [toSectorInitialData, setToSectorInitialData] = useState()
    const [isFromSectorCleaned, setFromSectorCleaned] = useState(false)
    const [step, setStep] = useState(1);
    const uniqueVersion = useState(uuidv4())
    const [sectorLoading, setSectorIsLoading] = useState(false)
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

    //load data from database for sectors
    useEffect(()=>{

        setSectorIsLoading(true)
        SectorService.getAll().then((resp)=>{
            let sectors = []
            for (let sec of resp.data){
                let secData = {
                    "label": sec.sector,
                    "value": sec.sector
                }
                sectors.push(secData)
            }
            setFromSectorInitialData(sectors)
            setToSectorInitialData(sectors)
            setSectorIsLoading(false)
        }).catch((err)=>{
            setSectorIsLoading(false)
            sectorErrorNotification()
            console.log(err)

        })

    },[isFromSectorCleaned])


    const incomingWorkModel = Schema.Model({
        aa: NumberType("O αύξων αριθμός δεν μπορεί να είναι μηδέν ή μικρότερος").min(1),
        code:StringType("Το πεδίο πρέπει να ειναι αλφαριθμητικό"),
        date: DateType(),
        kind:StringType("Το πεδίο πρέπει να ειναι αλφαριθμητικό"),
        customer:StringType("Το πεδίο πρέπει να ειναι αλφαριθμητικό"),
        description:StringType("Το πεδίο πρέπει να ειναι αλφαριθμητικό"),
        startDate: DateType(),
        endDate:new DateType(),
        fromSector: StringType("Το πεδίο πρέπει να ειναι αλφαριθμητικό"),
        fromTeamLeader: StringType("Το πεδίο πρέπει να ειναι αλφαριθμητικό"),
        toSector:StringType("Το πεδίο πρέπει να ειναι αλφαριθμητικό"),
        toTeamLeader:StringType("Το πεδίο πρέπει να ειναι αλφαριθμητικό"),
    })

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

        let data = {}
         incomingWorkService.save(data).then(response => {
             console.log(response)
         }).catch(err=>{
             console.log(err)
             showErrorNotification("Σφάλμα στην αποθήκευση του εισερχόμενου έργου.")
         })

    }

    return (
        <Panel>
            <Header>
                <Breadcrumb>
                    <Breadcrumb.Item href="/">Αρχική</Breadcrumb.Item>
                    <Breadcrumb.Item href="/incomingWorktab" active>καρτέλα εισερχόμενου έργου</Breadcrumb.Item>
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

export default IncomingWorkTab
