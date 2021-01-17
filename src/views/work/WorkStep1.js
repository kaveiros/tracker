import React from 'react'
import {
    Form, FormGroup, ControlLabel, Row, Col,
    FormControl, HelpBlock, Button, Icon,
    ButtonGroup
} from 'rsuite'
import { mandatory } from '../../style/Style'


const WorkStep1 = ({ currentStep, setStep, onNext, onPrevious }) => {

    if (currentStep !== 1) {
        return null
    }
    return (
        <Form layout="horizontal">

            <Row>
                <Col xs={24} sm={24} md={8} lg={6}>
                </Col>
                <Col xs={24} sm={12} md={8} lg={12}>
                    <FormGroup>
                        <ControlLabel>Α/Α</ControlLabel>
                        <ControlLabel style={mandatory}>*</ControlLabel>
                        <FormControl name="name" type="number" />
                        <HelpBlock tooltip>Υποχρεωτικό</HelpBlock>
                    </FormGroup>
                </Col>
                <Col xs={24} sm={12} md={8} lg={6}></Col>

            </Row>
            <Row>
                <Col xs={24} sm={24} md={8} lg={6}>
                </Col>
                <Col xs={24} sm={12} md={8} lg={12}>
                    <FormGroup>
                        <ControlLabel>Πελάτης</ControlLabel>
                        <ControlLabel style={mandatory}>*</ControlLabel>
                        <FormControl name="code" />
                        <HelpBlock tooltip>Υποχρεωτικό</HelpBlock>
                    </FormGroup>
                </Col>
                <Col xs={24} sm={12} md={8} lg={6}></Col>

            </Row>
            <Row>
                <Col xs={24} sm={24} md={8} lg={6}>
                </Col>
                <Col xs={24} sm={12} md={8} lg={12}>
                    <FormGroup>
                        <ControlLabel>Περιγραφή έργου</ControlLabel>
                        <ControlLabel style={mandatory}>*</ControlLabel>
                        <FormControl name="textarea" componentClass="textarea" />
                        <HelpBlock tooltip>Υποχρεωτικό</HelpBlock>
                    </FormGroup>
                </Col>
                <Col xs={24} sm={12} md={8} lg={6}></Col>

            </Row>
            <Row>
                <Col xs={24} sm={24} md={8} lg={6}>
                </Col>
                <Col xs={24} sm={12} md={8} lg={12}>
                    <FormGroup>
                        <ControlLabel>Ειδικότητα</ControlLabel>
                        <ControlLabel style={mandatory}>*</ControlLabel>
                        <FormControl name="expertise" />
                        <HelpBlock tooltip>Υποχρεωτικό</HelpBlock>
                    </FormGroup>
                </Col>
                <Col xs={24} sm={12} md={8} lg={6}></Col>

            </Row>






            <Row className="show-grid">
                <Col xs={24} sm={24} md={8} lg={6}>
                </Col>
                <Col xs={24} sm={12} md={8} lg={12}>
                </Col>
                <Col xs={24} sm={12} md={8} lg={6}>
                    <ButtonGroup>
                        <Button onClick={onPrevious} disabled={currentStep === 0}>
                            <Icon icon='page-previous' />Πίσω
                    </Button>
                        <Button onClick={onNext} disabled={currentStep === 3}>
                            Επόμενο<Icon icon='page-next' />
                        </Button>
                    </ButtonGroup>
                </Col>
            </Row>
        </Form>
    )
}

export default WorkStep1