import React from 'react'
import { Row, Grid, Col, FormControl, FormGroup, HelpBlock, ControlLabel, Icon, ButtonToolbar, Button, Form } from 'rsuite'

const EmployeeStep2 = () => {

    return (
        <Form fluid={true}>
            <Grid fluid={true}>
                <Row className="show-grid">
                <Col xs={24} sm={12} md={8} lg={6}></Col>
                    <Col xs={24} sm={12} md={8} lg={12}>
                        <FormGroup>
                            <ControlLabel>Ιδιότητα</ControlLabel>
                            <FormControl name="property" />
                            <HelpBlock>Υποχρεωτικό</HelpBlock>
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>Κόστος/Ωρα-υπερωρία</ControlLabel>
                            <FormControl name="cost" type="number" />
                            <HelpBlock>Υποχρεωτικό</HelpBlock>
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>Κόστος/Ωρα-ημερομίσθιο</ControlLabel>
                            <FormControl name="cost" type="number" />
                            <HelpBlock>Υποχρεωτικό</HelpBlock>
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>Παρατηρήσεις</ControlLabel>
                            <FormControl rows={5} name="textarea" componentClass="textarea" />
                        </FormGroup>
                        <FormGroup>
                            <ButtonToolbar>
                                <Button appearance="primary" color="green"> <Icon icon="save" /> Υποβολή</Button>
                                <Button appearance="primary" color="red"><Icon icon="ban" /> Ακύρωση</Button>
                            </ButtonToolbar>
                        </FormGroup>
                    </Col>
                    <Col xs={24} sm={12} md={8} lg={6}></Col>
                </Row>
            </Grid>
        </Form>
    )

}

export default EmployeeStep2