import React, { Component } from 'react'
import {
    Col, Row, Grid, Panel, Container, ButtonToolbar, Breadcrumb,
    Button, Icon, Content, ControlLabel, FormControl, HelpBlock, FormGroup, Form
} from 'rsuite'

export default class WarehouseTab extends Component {
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
                                            <ControlLabel>A/A</ControlLabel>
                                            <FormControl name="name" type="number" />
                                            <HelpBlock>Υποχρεωτικό</HelpBlock>
                                        </FormGroup>
                                        <FormGroup>
                                            <ControlLabel>Κωδικός</ControlLabel>
                                            <FormControl name="email" type="email" />
                                            <HelpBlock tooltip>Υποχρεωτικό</HelpBlock>
                                        </FormGroup>
                                        <FormGroup>
                                            <ControlLabel>Τεμάχια</ControlLabel>
                                            <FormControl name="name" type="number" />
                                            <HelpBlock>Υποχρεωτικό</HelpBlock>
                                        </FormGroup>
                                        <FormGroup>
                                            <ControlLabel>Τιμή τεμαχίου</ControlLabel>
                                            <FormControl name="name" type="number" />
                                            <HelpBlock>Υποχρεωτικό</HelpBlock>
                                        </FormGroup>
                                    </Col>
                                    <Col xs={12}>
                                        <FormGroup>
                                            <ControlLabel>Περιγραφή προϊόντος</ControlLabel>
                                            <FormControl rows={5} name="textarea" componentClass="textarea" />
                                            <HelpBlock tooltip>Υποχρεωτικό</HelpBlock>
                                        </FormGroup>
                                        <FormGroup>
                                            <ControlLabel>Παρατηρήσεις</ControlLabel>
                                            <FormControl rows={5} name="textarea" componentClass="textarea" />
                                            <HelpBlock tooltip>Υποχρεωτικό</HelpBlock>
                                        </FormGroup>
                                        <FormGroup>
                                            <ButtonToolbar>
                                                <Button appearance="primary" color="green"> <Icon icon="save" /> Υποβολή</Button>
                                                <Button appearance="primary" color="red"><Icon icon="ban" /> Ακύρωση</Button>
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