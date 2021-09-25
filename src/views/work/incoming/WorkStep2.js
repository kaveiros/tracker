import React from 'react'
import {
    Form, ButtonToolbar, Button, Grid, Row, Col, DatePicker
} from 'rsuite'
import PagePreviousIcon from "@rsuite/icons/PagePrevious";
import PageNextIcon from "@rsuite/icons/PageNext";

const WorkStep2 = (props) => {

    const {customer, description, startDate, endDate, handleChange, handleStep, errors, hasValidationError} = props

    return (
            <Form fluid={true}>
                <Grid fluid={true}>
                    <Row className="show-grid">
                        <Col xs={24} sm={12} md={8} lg={6}>''</Col>
                        <Col xs={24} sm={12} md={8} lg={12}>
                            <Form.FormGroup>
                                <Form.ControlLabel>Πελάτης</Form.ControlLabel>
                                <Form.Control name="customer"  value={customer} onChange={handleChange("customer")}
                                             errorMessage={errors.customer.errorMessage}/>
                            </Form.FormGroup>
                            <Form.FormGroup>
                                <Form.ControlLabel>Περιγραφή</Form.ControlLabel>
                                <Form.Control name="description" componentClass="textarea" rows={3} value={description} onChange={handleChange('description')}
                                             errorMessage={errors.description.errorMessage}/>
                            </Form.FormGroup>
                            <Form.FormGroup>
                                <Form.ControlLabel>Χρόνος Έναρξης</Form.ControlLabel>
                                <DatePicker className="rs-form-control-wrapper" name="date" value={startDate} onChange={handleChange('startDate')}/>
                            </Form.FormGroup>
                            <Form.FormGroup>
                                <Form.ControlLabel>Χρόνος Αποπεράτωσης</Form.ControlLabel>
                                <DatePicker className="rs-form-control-wrapper" name="date" value={endDate} onChange={handleChange('endDate')}/>
                            </Form.FormGroup>

                        </Col>
                        <Col xs={24} sm={12} md={8} lg={6}>''</Col>
                    </Row>
                    <Row className="show-grid">
                        <Col md={4} mdOffset={20}>
                            <ButtonToolbar>
                                <Button color="violet" onClick={handleStep(1)}><PagePreviousIcon/>Πίσω</Button>
                                <Button appearance="primary" color="green" disabled={hasValidationError}
                                        onClick={handleStep(3)}>Επόμενο<PageNextIcon/></Button>
                            </ButtonToolbar>                    </Col>
                    </Row>
                </Grid>
            </Form>
        )

}

export default WorkStep2
