import React, {useState} from 'react'
import {Breadcrumb, Content, Header, Panel, Steps} from "rsuite";
import MaterialsStep1 from "./MaterialsStep1";
import MaterialsStep2 from "./MaterialsStep2";

const MaterialTab = () => {

   // const [modal, setShowModal] = useState(false)
    const [step, setStep] = useState(1);
    const [materialState, setMaterialState] = useState({
        numberCode: '',
        code: '',
        kind: '',
        description: '',
        quantity: '',
        name: '',
        section: '',
        restDetails: '',
        sector: ''
    })

    const handleChange = (name) => (e) => {

    }

    const handleBlur = (name) => (e) => {

    }

    const handleStep = (stepValue) => (evn) => {
        setStep(stepValue)
    }


    const showModalHandler = () => {
        //setShowModal(true)
    }

    const hideModal = () => {
        //setShowModal(false)
    }

    return(
        <Panel>
            <Header>
                <Breadcrumb>
                    <Breadcrumb.Item href="/">Αρχική</Breadcrumb.Item>
                    <Breadcrumb.Item href="/materialsTab" active>Καρτέλα εργαζομένου</Breadcrumb.Item>
                </Breadcrumb>
            </Header>
            <Content>
                <Panel shaded bordered>

                    <Steps current={step-1}>
                        <Steps.Item title="Βασικά στοιχεία" />
                        <Steps.Item title="Παρατηρήσεις" />
                    </Steps>
                </Panel>
                <hr />
                <Panel shaded bordered>
                    {step ===1 ?
                        <MaterialsStep1 {...materialState}
                                        handleChange={handleChange} handleBlur={handleBlur} handleStep={handleStep}/>
                        : <MaterialsStep2 {...materialState}
                                        handleChange={handleChange} handleBlur={handleBlur} handleStep={handleStep}/>
                    }

                </Panel>
            </Content>
        </Panel>

    )
}

export default MaterialTab
