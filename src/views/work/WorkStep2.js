import React, {useState} from 'react'
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
                            <Form.Group>
                                <Form.ControlLabel>Πελάτης</Form.ControlLabel>
                                <Form.Control name="customer"  value={customer} onChange={handleChange("customer")}
                                             errorMessage={errors.customer.errorMessage}/>
                            </Form.Group>
                            <Form.Group>
                                <Form.ControlLabel>Περιγραφή</Form.ControlLabel>
                                <Form.Control name="description"  value={description} onChange={handleChange('description')}
                                             errorMessage={errors.description.errorMessage}/>
                            </Form.Group>
                            <Form.Group>
                                <Form.ControlLabel>Χρόνος Έναρξης</Form.ControlLabel>
                                <DatePicker className="rs-form-control-wrapper" name="date" value={startDate} onChange={handleChange('startDate')}/>
                            </Form.Group>
                            <Form.Group>
                                <Form.ControlLabel>Χρόνος Αποπεράτωσης</Form.ControlLabel>
                                <DatePicker className="rs-form-control-wrapper" name="date" value={endDate} onChange={handleChange('endDate')}/>
                            </Form.Group>

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
