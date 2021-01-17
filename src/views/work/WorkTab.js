import React, { useState } from 'react'
import {
    Content, Header, Breadcrumb,
    Panel, Steps
} from 'rsuite'
import WorkStep1 from './WorkStep1'
import WorkStep2 from './WorkStep2'

const WorkTab = () => {
    const [step, setStep] = React.useState(1);
    const [aaCode, setAACode] = useState('')
    const [customer, setCustomer] = useState('')
    const [workDescription, setWorkDescription] = useState('')
    const [expertise, setExpertise] = useState('')


    const onNext = () => {
        if (step === 1 || step < 2 ) {
            setStep(step + 1)
        }

    }

    const onPrevious = () =>  {
        if (step === 2 || step > 1 ) {
            setStep(step - 1)
        }
    }

    return (
        <Panel>
            <Header>
                <Breadcrumb>
                    <Breadcrumb.Item href="/">Αρχική</Breadcrumb.Item>
                    <Breadcrumb.Item href="/worktab" active>καρτέλα έργου</Breadcrumb.Item>
                </Breadcrumb>
            </Header>
            <Content>
                <Steps current={step}>
                    <Steps.Item title="Βασικά στοιχεία" />
                    <Steps.Item title="Παρατηρήσεις" />
                </Steps>
                <hr />
                    <WorkStep1 currentStep={step} onPrevious={onPrevious} setStep={setStep} onNext={onNext}/>
                    <WorkStep2 currentStep={step} onPrevious={onPrevious} onNext={onNext}/>
            </Content>

        </Panel>
    );
}

export default WorkTab