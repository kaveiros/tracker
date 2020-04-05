import React, { Component } from 'react'
import {
    Col, Row, Grid, Panel, Container, ButtonToolbar, Breadcrumb, InputPicker,
    Button, Icon, Content, ControlLabel, FormControl, HelpBlock, FormGroup, Form
} from 'rsuite'

const data = [{
    "label": "Σταθερός",
    "value": "Σταθερός"
  },
  {
    "label": "Κινητός",
    "value": "Κινητός"
  },]
export default class WarehouseTab extends Component {

    constructor(props) {
        super(props);
        this.wrapper = React.createRef();
      }

    render() {
        return (
            <Container>
                <Content>
                    <Panel>
                        <Breadcrumb>
                            <Breadcrumb.Item href="/">Αρχική</Breadcrumb.Item>
                            <Breadcrumb.Item href="/tools" active>εξοπλισμός</Breadcrumb.Item>
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
                                            <ControlLabel>Είδος</ControlLabel>
                                            <FormControl ref={this.wrapper} name="inputPicker"  accepter={InputPicker} 
                                             data={data}/>
                                        </FormGroup>
                                        <FormGroup>
                                            <ControlLabel>Κωδικός</ControlLabel>
                                            <FormControl name="name"/>
                                            <HelpBlock>Υποχρεωτικό</HelpBlock>
                                        </FormGroup>
                                        <FormGroup>
                                            <ControlLabel>Περιγραφή εξοπλισμού</ControlLabel>
                                            <FormControl rows={2} name="name" />
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
                                                <Button appearance="primary"  color="green"> <Icon icon="save" /> Υποβολή</Button>
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