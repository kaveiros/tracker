import React, { Component } from 'react'
import {
    Content, Container, Col, Form, FormGroup, ControlLabel, Breadcrumb,
    FormControl, HelpBlock, ButtonToolbar, Button, Panel, Icon, Grid, Row, Divider
} from 'rsuite'

export default class WorkTab extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <Panel>
                        <Breadcrumb>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>Components</Breadcrumb.Item>
                            <Breadcrumb.Item active>Breadcrumb</Breadcrumb.Item>
                        </Breadcrumb>
                        <Form fluid>
                            <Grid>
                                <Row className="show-grid">
                                    <Col xs={12}>
                                        <FormGroup>
                                            <ControlLabel>Α/Α</ControlLabel>
                                            <FormControl name="name" type="number" />
                                            <HelpBlock>Υποχρεωτικό</HelpBlock>
                                        </FormGroup>
                                        <FormGroup>
                                            <ControlLabel>Πελάτης</ControlLabel>
                                            <FormControl name="code" />
                                            <HelpBlock>Υποχρεωτικό</HelpBlock>
                                        </FormGroup>
                                        <FormGroup>
                                            <ControlLabel>Περιγραφή έργου</ControlLabel>
                                            <FormControl rows={5} name="textarea" componentClass="textarea" />
                                            <HelpBlock>Υποχρεωτικό</HelpBlock>
                                        </FormGroup>
                                        <FormGroup>
                                            <ControlLabel>Ειδικότητα</ControlLabel>
                                            <FormControl name="expertise" />
                                            <HelpBlock>Υποχρεωτικό</HelpBlock>
                                        </FormGroup>
                                    </Col>
                                    <Col xs={12}>
                                        <FormGroup>
                                            <ControlLabel>Κύρια εργασία</ControlLabel>
                                            <FormControl name="expertise" />
                                            <HelpBlock>Υποχρεωτικό</HelpBlock>
                                        </FormGroup>
                                        <FormGroup>
                                            <ButtonToolbar>
                                                <ControlLabel>Προσθήκη δευτερεύουσας εργασίας</ControlLabel>
                                                <Divider/>
                                                <Button primary color="green"> <Icon icon="plus" /> Προσθήκη</Button>
                                            </ButtonToolbar>
                                        </FormGroup>
                                        <FormGroup>
                                            <ControlLabel>Παρατηρήσεις</ControlLabel>
                                            <FormControl rows={5} name="textarea" componentClass="textarea" />
                                        </FormGroup>
                                        <FormGroup>
                                            <ButtonToolbar>
                                                <Button primary color="green"> <Icon icon="save" /> Υποβολή</Button>
                                                <Button primary color="red"><Icon icon="ban" /> Ακύρωση</Button>
                                            </ButtonToolbar>
                                        </FormGroup>
                                    </Col>
                                </Row>
                            </Grid>
                        </Form>
                    </Panel>
                </Content>
            </Container>
        )
    }

}