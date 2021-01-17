import React from 'react'
import { Row, Grid, Col, FormControl, FormGroup, HelpBlock, ControlLabel, Icon, ButtonToolbar, Button, Form } from 'rsuite'

const EmployeeStep1 = () => {

    return (
        <Form fluid={true}>
            <Grid fluid={true}>
                <Row className="show-grid">
                    <Col xs={24} sm={12} md={8} lg={6}></Col>
                    <Col xs={24} sm={12} md={8} lg={12}>
                        <FormGroup>
                            <ControlLabel>Α/Α</ControlLabel>
                            <FormControl name="name" type="number" />
                            <HelpBlock>Υποχρεωτικό</HelpBlock>
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>Κωδικός</ControlLabel>
                            <FormControl name="code" />
                            <HelpBlock>Υποχρεωτικό</HelpBlock>
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>Όνοματεπώνυμο</ControlLabel>
                            <FormControl name="name" />
                            <HelpBlock>Υποχρεωτικό</HelpBlock>
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>Ειδικότητα</ControlLabel>
                            <FormControl name="expertise" />
                            <HelpBlock>Υποχρεωτικό</HelpBlock>
                        </FormGroup>
                    </Col>
                    <Col xs={24} sm={12} md={8} lg={6}></Col>
                </Row>
            </Grid>
        </Form>
    )

}

export default EmployeeStep1