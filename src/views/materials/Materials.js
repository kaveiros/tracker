import React, { useState } from 'react'
import {
    Message, Content, Header, Form, FormGroup, ControlLabel, Breadcrumb,
    FormControl, ButtonToolbar, Button, Panel, Icon, Steps, FlexboxGrid, Row, Col
} from 'rsuite'
import { mandatory } from '../../style/Style'
//import {useDispatch, useSelector} from 'react-redux'
//import {saveMaterial} from '../actions/MaterialActions'

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


    const [numberCode, setAA] = useState(0)
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
        if (numberCode === 0 || code === "" || kind === "" || description === "" || quantity === "") {
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

    //const dispatch = useDispatch();

    /**
     *  Handle events
     */
    const handleAABlur = (e1) => {
        console.log("blur" + e1.target.value)
        if (numberCode == null || numberCode === 0) {
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

        let material = {
            numberCode: numberCode,
            code: code,
            kind: kind,
            description: description,
            quantity: quantity,
            name: name,
            section: section,
            restDetails: restDetails,
            sector: sector
        }

        console.log(material)
        //dispatch(saveMaterial(material))
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
                            {step + 1 === 1 ?
                                <Panel>


                                </Panel> : <Panel>

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