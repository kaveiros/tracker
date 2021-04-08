import React, { useEffect, useState} from 'react'
import {
    Panel, Breadcrumb, Content, Header, Steps
} from 'rsuite'
import LoaderHook from "../common/LoaderHook";
import {v4 as uuidv4} from "uuid";
import WarehouseStep1 from "./WarehouseStep1";
import WarehouseStep2 from "./WarehouseStep2";
import {useLocation} from "react-router-dom";
import WarehouseService from "../../services/WarehouseService";
import {showSaveErrorNotification, showSuccessNotification} from "../common/Notifications";
import SectorService from "../../services/SectorService";

const WarehouseTab = () =>  {

    const successString = 'Το υλικό αποθηκεύτικε'
    const errorString = 'Σφάλμα στην αποθήκευση του υλικού'
    const [step, setStep] = React.useState(0);
    const uniqueVersion = useState(uuidv4())
    const [loading, setIsLoading] = useState(false)
    const initState = {
        aa: 0,
        code:'',
        kind:'',
        description:'',
        quantity:'',
        section:'',
        sector:'',
        nameOfPersonAccepted:'',
        uniqueVersion: uniqueVersion[0],
        additionalInfo:[]
    }

    const initErrorState = {
        aa: 0,
        code:'',
        kind:'',
        description:'',
        quantity:'',
        section:'',
        sector:'',
        nameOfPersonAccepted:''
    }

    const [errors, setErrors] = useState(initErrorState)
    const [hasValidationError, setValidationError] = useState(true)
    const location = useLocation()
    const [warehouseState, setWarehouseState] = useState(initState)
    const [sectors, setSectors] = useState()
    const [sections, setSections] = useState()
    const [isUpdating, setIsUpdating] = useState(false)

    //If loaded from edit button, then populate fields
    useEffect(() => {
        //TO DO POPULATE SELECT PICKERS FROM LOCATION STATE
        if(location.state !== undefined) {

            //if (!ignore) {

            console.log(location.state)
            setWarehouseState(location.state)
            setIsUpdating(true)
            console.log("STATE LOCATION -> ")
            console.log(warehouseState)
        }
    },[location])

    //fetch sectors
    useEffect(() => {

        //let ignore = false

        SectorService.getAllSectors().then(response => {
            setIsLoading(true)
            let sectors = []
            for (let sec of response.data){
                let secData = {
                    "label": sec.sector,
                    "value": sec.sector
                }
                sectors.push(secData)
            }
            //if (!ignore) {
            setSectors(sectors)
            setIsLoading(false)
            // }
        })
            .then(err => {
                setIsLoading(false)
            })

        // return () => {
        //     ignore = true
        // }

    },[])

    //fetch sections
    useEffect(()=> {
        let sections = []
        let secData = {
            "label": "sector1",
            "value": "sector1"
        }
        sections.push(secData)
        setSections(sections)

    },[])


    const handleChange = (name) => (event) => {
        //TO DO check for validation errors later
        console.log(warehouseState)
        console.log(name, "-----", event)
        setWarehouseState({...warehouseState, [name]: event})
    }

    const handleSubmit = () => {
        //TO DO check for errors later
        console.log("submitted->")
        console.log(warehouseState)
        setIsLoading(true)
        const wareHouseService = new WarehouseService()
        if (isUpdating) {
            console.log("Updating.....")
            wareHouseService.update(warehouseState).then(r => {
                console.log(r)
                setIsLoading(false)
            }).catch(e=>{console.log(e)})
        }
        else {

            wareHouseService.save(warehouseState).
            then(response => {
                setIsLoading(false)
                showSuccessNotification(successString)
                setStep(0)
                setWarehouseState(initState)
            }).catch( err => {
                setIsLoading(false)
                setWarehouseState(initState)
                setErrors(initErrorState)
                showSaveErrorNotification(errorString)
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
                    <Breadcrumb.Item href="/warehouse" active>Αποθήκη</Breadcrumb.Item>
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
                    {step === 0 ? <WarehouseStep1 {...warehouseState} errors={errors} hasValidationError={hasValidationError}
                                                  handleChange={handleChange} handleStep={handleStep} /> :
                        <WarehouseStep2 {...warehouseState} sectors={sectors} sections={sections} errors={errors} handleChange={handleChange}
                                        handleStep={handleStep} handleSubmit={handleSubmit} uniqueVersion={uniqueVersion[0]} />}
                </Panel>
            </Content>
        </Panel>
    )
}

export default WarehouseTab
