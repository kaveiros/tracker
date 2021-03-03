import React, {useState} from 'react'
import {
    Form, FormGroup, ControlLabel,
    FormControl, HelpBlock, ButtonToolbar, Button, Panel, Icon, Divider, Grid, Row, Col, DatePicker, SelectPicker
} from 'rsuite'

const WorkStep2 = (props) => {

    const {customer, description, startDate, endDate, handleChange, handleStep, errors, hasValidationError} = props

    return (
            <Form fluid={true}>
                <Grid fluid={true}>
                    <Row className="show-grid">
                        <Col xs={24} sm={12} md={8} lg={6}></Col>
                        <Col xs={24} sm={12} md={8} lg={12}>
                            <FormGroup>
                                <ControlLabel>Πελάτης</ControlLabel>
                                <FormControl name="customer"  value={customer} onChange={handleChange("customer")}
                                             errorMessage={errors.customer.errorMessage}/>
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>Περιγραφή</ControlLabel>
                                <FormControl name="description"  value={description} onChange={handleChange('description')}
                                             errorMessage={errors.description.errorMessage}/>
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>Χρόνος Έναρξης</ControlLabel>
                                <DatePicker className="rs-form-control-wrapper" name="date" value={startDate} onChange={handleChange('startDate')}/>
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>Χρόνος Αποπεράτωσης</ControlLabel>
                                <DatePicker className="rs-form-control-wrapper" name="date" value={endDate} onChange={handleChange('endDate')}/>
                            </FormGroup>

                        </Col>
                        <Col xs={24} sm={12} md={8} lg={6}></Col>
                    </Row>
                    <Row className="show-grid">
                        <Col md={4} mdOffset={20}>
                            <ButtonToolbar>
                                <Button color="violet" onClick={handleStep(1)}><Icon icon="page-previous"/>Πίσω</Button>
                                <Button appearance="primary" color="green" disabled={hasValidationError}
                                        onClick={handleStep(3)}>Επόμενο<Icon icon="page-next"/></Button>
                            </ButtonToolbar>                    </Col>
                    </Row>
                </Grid>
            </Form>
        )

}

export default WorkStep2
