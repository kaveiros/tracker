import React, { useState } from 'react'
import {
    Content, Header, Form, FormGroup, ControlLabel, Breadcrumb,
    FormControl, ButtonToolbar, Button, Panel, Icon, Steps, FlexboxGrid,  Row, Col
} from 'rsuite'
import { mandatory } from '../style/Style'

const MaterialTab = () => {

    /**
     * Hanlde steps
     */
    const [step, setStep] = React.useState(0);
    const onChange = nextStep => {
        setStep(nextStep < 0 ? 0 : nextStep > 3 ? 3 : nextStep);
    };
    const onNext = () => onChange(step + 1);
    const onPrevious = () => onChange(step - 1);

    /**
     * Define mandatory fields
     */
    const [isAAMandatory, setAAMandatory] = useState(0)
    const [isCodeMandatory, setMandatory] = useState(0)
    const [isKindMandatory, setIsKindMandatory] = useState(false)
    const [isDescriptionMandatory, setDescriptionMandatory] = useState(false)
    const [isQuantityMandatory, setQuantityMandatory] = useState(false)


    const [aa, setAA] = useState(0)
    const [code, setCode] = useState('')
    const [kind, setKind] = useState('')
    const [description, setDescription] = useState('')
    

    

    /**
     *  Handle events
     */
    const handleAABlur = (e1) => {
        console.log("blur"+ e1.target.value)
        if (aa == null || aa == 0 ) {
            setAAMandatory(1)
        }
        else {
            setAAMandatory(0)
        }
        console.log(isAAMandatory)
    }

    const handleAAChange = (e2) => {
        console.log(e2)
        setAA(e2)
    }

    const handleCodeBlur = (e3) => {
        if (e3.target.value.length === 0 || e3.target.value === null) {
            setMandatory(1)
        }
        else {
              setMandatory(0)
        }
        console.log(e3)
        console.log(isCodeMandatory)
    }

    const handleCodeChange = (codeEvent) => {
        console.log(codeEvent)
        setCode(codeEvent)
    }

    const handleSubmit = () => {
        console.log({
            aa: aa,
            code: code
        })
    }

    /**
     * Error messages
     */
    const aaErrorMessage = isAAMandatory==1 ? 'Πρέπει μεγαλύτερο απο 0' : null
    const codeErrorMessage = isCodeMandatory==1 ? 'Υποχρεωτικό πεδίο ' : null;

    return (


        <Panel>
            <Header>
                <Breadcrumb>
                    <Breadcrumb.Item href="/">Αρχική</Breadcrumb.Item>
                    <Breadcrumb.Item href="/materials" active>υλικά</Breadcrumb.Item>
                </Breadcrumb>
            </Header>
            <Content>
                <Steps current={step}>
                    <Steps.Item />
                    <Steps.Item />
                </Steps>
                <hr />
                <FlexboxGrid justify="center">
                    <FlexboxGrid.Item colspan={12}>

                        <Form layout="horizontal" onSubmit={handleSubmit}>
                            {step + 1 == 1 ?
                                <Panel>
                                    <FormGroup>
                                        <ControlLabel>Α/Α</ControlLabel>
                                        <ControlLabel style={mandatory}>*</ControlLabel>
                                        <FormControl name="namea" type="number" onBlur={handleAABlur} onChange={handleAAChange} errorMessage={aaErrorMessage} placement="bottomStart"/>
                                    </FormGroup>
                                    <FormGroup >
                                        <ControlLabel>Κωδικός</ControlLabel>
                                        <ControlLabel style={mandatory}>*</ControlLabel>
                                        <FormControl name="code" onBlur={handleCodeBlur} onChange={handleCodeChange} errorMessage={codeErrorMessage} placement="bottomStart" />
                                    </FormGroup>
                                    <FormGroup>
                                        <ControlLabel>Είδος</ControlLabel>
                                        <ControlLabel style={mandatory}>*</ControlLabel>
                                        <FormControl name="textarea" componentClass="textarea" />
                                    </FormGroup>
                                    <FormGroup>
                                        <ControlLabel>Περιγραφή</ControlLabel>
                                        <ControlLabel style={mandatory}>*</ControlLabel>
                                        <FormControl name="expertise" />
                                    </FormGroup>
                                    <FormGroup>
                                        <ControlLabel>Ποσότητα</ControlLabel>
                                        <ControlLabel style={mandatory}>*</ControlLabel>
                                        <FormControl name="expertise" />
                                    </FormGroup>
                                    <Row className="show-grid">
                                        <Col xs={6} xsPush={18}>
                                        <Button onClick={onNext}>Επόμενο <Icon icon="page-next" /></Button>      </Col>
                                        <Col xs={6} xsPull={6}></Col>
                                    </Row>

                                </Panel> : <Panel>
                                    <FormGroup>
                                        <ControlLabel>Τμήμα</ControlLabel>
                                        <FormControl name="textarea" />
                                    </FormGroup>
                                    <FormGroup>
                                        <ControlLabel>Ονοματεπώνυμο</ControlLabel>
                                        <FormControl name="textarea" />
                                    </FormGroup>
                                    <FormGroup>
                                        <ControlLabel>Υπόλοιπα</ControlLabel>
                                        <FormControl name="textarea" />
                                    </FormGroup>
                                    <FormGroup>
                                        <ControlLabel>Τομέας</ControlLabel>
                                        <FormControl name="textarea" />
                                    </FormGroup>
                                    <FormGroup>
                                        <ButtonToolbar>
                                            <Button color="green" type="submit"> <Icon icon="save" /> Υποβολή</Button>
                                            <Button color="red" onClick={onPrevious}><Icon icon="ban" /> Ακύρωση</Button>
                                        </ButtonToolbar>
                                    </FormGroup>
                                </Panel>
                            }
                        </Form>
                    </FlexboxGrid.Item>
                </FlexboxGrid>

            </Content>

        </Panel>
    );
}

export default MaterialTab