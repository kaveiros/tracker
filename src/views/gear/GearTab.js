import React, {useState} from "react";
import {
    Content, Breadcrumb, Header, Steps,
    Panel
} from 'rsuite'
import GearStep1 from "./GearStep1";
import GearStep2 from "./GearStep2";
import GearStep3 from "./GearStep3";

const GearTab = () => {

    //const [modal, setShowModal] = useState(false)
    const [step, setStep] = useState(1);

    const handleChange = (prop) => (evt) => {
        console.log(evt)
        console.log(prop)
        //setEmployeeState({ ...employeeState, [prop]: evt })
    }

    const handleStep = (stepValue) => (evn) => {
        setStep(stepValue)
    }

    return(
    <Panel>
        <Header>
            <Breadcrumb>
                <Breadcrumb.Item href="/">Αρχική</Breadcrumb.Item>
                <Breadcrumb.Item href="/employeetab" active>Καρτέλα εργαζομένου</Breadcrumb.Item>
            </Breadcrumb>
        </Header>
        <Content>
            <Panel shaded bordered>

                <Steps current={step -1 }>
                    <Steps.Item title="Βασικά στοιχεία" />
                    <Steps.Item title="Επιπλέον στοιχεία"/>
                    <Steps.Item title="Παρατηρήσεις" />
                </Steps>
            </Panel>
            <hr />
            <Panel shaded bordered>
                {step === 1 ? <GearStep1 handleChange={handleChange} handleStep={handleStep}/> :
                  step === 2?  <GearStep2 handleChange={handleChange} handleStep={handleStep}/>:
                      <GearStep3 handleChange={handleChange} handleStep={handleStep}/>
                }

            </Panel>
        </Content>
    </Panel>
    )

}

export default GearTab
