import React, { useState } from 'react'
import {
    Message, Content, Header, Form, FormGroup, ControlLabel, Breadcrumb,
    FormControl, ButtonToolbar, Button, Panel, Icon, Steps, FlexboxGrid, Row, Col
} from 'rsuite'
import { mandatory } from '../style/Style'

const MaterialTab = () => {

    /**
     * Define mandatory fields
     */
    const [isAAMandatory, setAAMandatory] = useState(0)
    const [isCodeMandatory, setMandatory] = useState(0)
    const [isKindMandatory, setIsKindMandatory] = useState(0)
    const [isDescriptionMandatory, setDescriptionMandatory] = useState(0)
    const [isQuantityMandatory, setQuantityMandatory] = useState(0)
    const [isNextDisabled, setNextButtonDisabled] = useState(true)
    const [hasAllMandatoryFields, setAllMandatoryFields] = useState(true)


    const [aa, setAA] = useState(0)
    const [code, setCode] = useState('')
    const [kind, setKind] = useState('')
    const [description, setDescription] = useState('')
    const [quantity, setQuantity] = useState('')
    const [section, setSection] = useState('')
    const [name, setName] = useState('')
    const [restDetails, setRestDetails] = useState('')
    const [sector, setSector] = useState('')

/**
 * Hanlde steps
 */
    const [step, setStep] = React.useState(0);

    const onChange = nextStep => {
        setStep(nextStep < 0 ? 0 : nextStep > 3 ? 3 : nextStep);
    };
    const onNext = () => {
        if (aa === 0 || code === "" || kind === "" || description === "" || quantity === "") {
            setAllMandatoryFields(false)
        }
        else {
            onChange(step + 1);
        }
    }

    const onPrevious = () => onChange(step - 1);
    const resetError = () => {
        setAllMandatoryFields(true)
    }



    /**
     *  Handle events
     */
    const handleAABlur = (e1) => {
        console.log("blur" + e1.target.value)
        if (aa == null || aa === 0) {
            setAAMandatory(1)
            setNextButtonDisabled(true)
        }
        else {
            setAAMandatory(0)
            setNextButtonDisabled(false)
        }
        console.log(isAAMandatory)
    }

    const handleAAChange = (e2) => {
        setAA(e2)
    }

    const handleCodeBlur = (e3) => {
        if (e3.target.value.length === 0 || e3.target.value === null) {
            setMandatory(1)
            setNextButtonDisabled(true)
        }
        else {
            setMandatory(0)
            setNextButtonDisabled(false)
        }
    }

    const handleCodeChange = (codeEvent) => {
        setCode(codeEvent)
    }

    const handleKindBlur = (kindBlurEvent) => {
        if (kindBlurEvent.target.value.length === 0 || kindBlurEvent.target.value === null) {
            setIsKindMandatory(1)
            setNextButtonDisabled(true)
        }
        else {
            setIsKindMandatory(0)
            setNextButtonDisabled(false)
        }
    }

    const handleKindChange = (kindEvent) => {
        setKind(kindEvent)
    }

    const handleDescriptionBlur = (descblurEvent) => {
        if (descblurEvent.target.value.length === 0 || descblurEvent.target.value === null) {
            setDescriptionMandatory(1)
            setNextButtonDisabled(true)
        }
        else {
            setDescriptionMandatory(0)
            setNextButtonDisabled(false)
        }
    }

    const handleDescriptionChange = (descrChangeEvent) => {
        setDescription(descrChangeEvent)
    }

    const handleQuantityBlur = (qblurEvent) => {
        if (qblurEvent.target.value.length === 0 || qblurEvent.target.value === null) {
            setQuantityMandatory(1)
            setNextButtonDisabled(true)
        }
        else {
            setQuantityMandatory(0)
            setNextButtonDisabled(false)
        }
    }

    const handleQuantityChange = (qChangeEvent) => {
        setQuantity(qChangeEvent)
    }

    const handleSectionChange = (sectionChangeEvent) => {
        setSection(sectionChangeEvent)
    }

    const handleNameChange = (nameEvent) => {
        setName(nameEvent)
    }

    const handleRestDetailsChange = (detailsEvent) => {
        setRestDetails(detailsEvent)
    }

    const handleSectorChange = (sectorEvent) => {
        setSector(sectorEvent)
    }

    const handleSubmit = (submitEvent) => {

        console.log(submitEvent)
        console.log({
            aa: aa,
            code: code,
            kind: kind,
            description: description,
            quantity: quantity,
            name: name,
            section: section,
            restDetails: restDetails,
            sector: sector
        })
    }

    /**
     * Error messages
     */
    const errorString = 'Υποχρεωτικό πεδίο '
    const aaErrorMessage = isAAMandatory === 1 ? 'Πρέπει μεγαλύτερο απο 0' : null
    const codeErrorMessage = isCodeMandatory === 1 ? errorString : null;
    const kindErrorMessage = isKindMandatory === 1 ? errorString : null
    const descrErrorMessage = isDescriptionMandatory === 1 ? errorString : null
    const quantityErrorMessage = isQuantityMandatory === 1 ? errorString : null


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
                        {!hasAllMandatoryFields && <Message
                            showIcon
                            type="error"
                            title="Σφάλμα"
                            closable={true}
                            description="Συπληρώστε όλα τα απαραίτητα πεδία"
                            onClose={resetError}                           
                        />}

                        <Form layout="horizontal" onSubmit={handleSubmit}>
                            {step + 1 == 1 ?
                                <Panel>
                                    <FormGroup>
                                        <ControlLabel>Α/Α</ControlLabel>
                                        <ControlLabel style={mandatory}>*</ControlLabel>
                                        <FormControl name="namea" type="number" onBlur={handleAABlur} onChange={handleAAChange} errorMessage={aaErrorMessage} placement="bottomStart" />
                                    </FormGroup>
                                    <FormGroup >
                                        <ControlLabel>Κωδικός</ControlLabel>
                                        <ControlLabel style={mandatory}>*</ControlLabel>
                                        <FormControl name="code" onBlur={handleCodeBlur} onChange={handleCodeChange} errorMessage={codeErrorMessage} placement="bottomStart" />
                                    </FormGroup>
                                    <FormGroup>
                                        <ControlLabel>Είδος</ControlLabel>
                                        <ControlLabel style={mandatory}>*</ControlLabel>
                                        <FormControl name="textarea" componentClass="textarea" onBlur={handleKindBlur} onChange={handleKindChange} errorMessage={kindErrorMessage} placement="bottomStart" />
                                    </FormGroup>
                                    <FormGroup>
                                        <ControlLabel>Περιγραφή</ControlLabel>
                                        <ControlLabel style={mandatory}>*</ControlLabel>
                                        <FormControl name="expertise" onChange={handleDescriptionChange} onBlur={handleDescriptionBlur} errorMessage={descrErrorMessage} placement="bottomStart" />
                                    </FormGroup>
                                    <FormGroup>
                                        <ControlLabel>Ποσότητα</ControlLabel>
                                        <ControlLabel style={mandatory}>*</ControlLabel>
                                        <FormControl name="quantity" onChange={handleQuantityChange} onBlur={handleQuantityBlur} errorMessage={quantityErrorMessage} placement="bottomStart" />
                                    </FormGroup>
                                    <Row className="show-grid">
                                        <Col xs={6} xsPush={18}>
                                            <Button onClick={onNext} disabled={isNextDisabled}>Επόμενο <Icon icon="page-next" /></Button>      </Col>
                                        <Col xs={6} xsPull={6}></Col>
                                    </Row>

                                </Panel> : <Panel>
                                    <FormGroup>
                                        <ControlLabel>Τμήμα</ControlLabel>
                                        <FormControl name="textarea" onChange={handleSectionChange} />
                                    </FormGroup>
                                    <FormGroup>
                                        <ControlLabel>Ονοματεπώνυμο</ControlLabel>
                                        <FormControl name="textarea" onChange={handleNameChange} />
                                    </FormGroup>
                                    <FormGroup>
                                        <ControlLabel>Υπόλοιπα</ControlLabel>
                                        <FormControl name="textarea" onChange={handleRestDetailsChange} />
                                    </FormGroup>
                                    <FormGroup>
                                        <ControlLabel>Τομέας</ControlLabel>
                                        <FormControl name="textarea" onChange={handleSectorChange} />
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