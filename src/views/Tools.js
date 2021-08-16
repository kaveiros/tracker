import React, { Component } from 'react'
import {
    Col, Row, Grid, Panel, Container, ButtonToolbar, Breadcrumb, InputPicker,
    Button, Content, Form,
    Steps
} from 'rsuite'
import AdditionalInfo from './additionalInfo/AdditionalInfo';
import CheckIcon from "@rsuite/icons/Check";
import BlockIcon from "@rsuite/icons/Block";

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
                <Steps current={1}>
  <Steps.Item title="first" >
      <Panel>
          <Row className="show-grid">
                                    <Col xs={12}>
                                        <Form.Group>
                                            <Form.ControlLabel>A/A</Form.ControlLabel>
                                            <Form.Control name="name" type="number" />
                                            <Form.HelpBlock>Υποχρεωτικό</Form.HelpBlock>
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.ControlLabel>Είδος</Form.ControlLabel>
                                            <Form.Control ref={this.wrapper} name="inputPicker"  accepter={InputPicker}
                                             data={data}/>
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.ControlLabel>Κωδικός</Form.ControlLabel>
                                            <Form.Control name="name"/>
                                            <Form.HelpBlock>Υποχρεωτικό</Form.HelpBlock>
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.ControlLabel>Περιγραφή εξοπλισμού</Form.ControlLabel>
                                            <Form.Control rows={2} name="name" />
                                            <Form.HelpBlock>Υποχρεωτικό</Form.HelpBlock>
                                        </Form.Group>
                                    </Col>
                                    <Col xs={12}>
                                        <Form.Group>
                                            <Form.ControlLabel>Περιγραφή προϊόντος</Form.ControlLabel>
                                            <Form.Control rows={5} name="textarea" as="textarea" />
                                            <Form.HelpBlock tooltip>Υποχρεωτικό</Form.HelpBlock>
                                        </Form.Group>
                                        <Form.Group>
                                        <AdditionalInfo/>
 
                                            {/* <Form.ControlLabel>Παρατηρήσεις</Form.ControlLabel>
                                            <Form.Control rows={5} name="textarea" as="textarea" />
                                            <HelpBlock tooltip>Υποχρεωτικό</HelpBlock> */}
                                        </Form.Group>
                                        <Form.Group>
                                            <ButtonToolbar>
                                                <Button appearance="primary"  color="green"> <CheckIcon /> Υποβολή</Button>
                                                <Button appearance="primary" color="red"><BlockIcon/> Ακύρωση</Button>
                                            </ButtonToolbar>
                                        </Form.Group>
                                    </Col>
                                </Row>
      </Panel>
  </Steps.Item>
  <Steps.Item title="second" />
  <Steps.Item title="third" />
</Steps>
                    <Panel>
                        <Breadcrumb>
                            <Breadcrumb.Item href="/">Αρχική</Breadcrumb.Item>
                            <Breadcrumb.Item href="/tools" active>εξοπλισμός</Breadcrumb.Item>
                        </Breadcrumb>
                        <Form fluid>
                            <Grid>
                                <Row className="show-grid">
                                    <Col xs={12}>
                                        <Form.Group>
                                            <Form.ControlLabel>A/A</Form.ControlLabel>
                                            <Form.Control name="name" type="number" />
                                            <Form.HelpBlock>Υποχρεωτικό</Form.HelpBlock>
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.ControlLabel>Είδος</Form.ControlLabel>
                                            <Form.Control ref={this.wrapper} name="inputPicker"  accepter={InputPicker} 
                                             data={data}/>
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.ControlLabel>Κωδικός</Form.ControlLabel>
                                            <Form.Control name="name"/>
                                            <Form.HelpBlock>Υποχρεωτικό</Form.HelpBlock>
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.ControlLabel>Περιγραφή εξοπλισμού</Form.ControlLabel>
                                            <Form.Control rows={2} name="name" />
                                            <Form.HelpBlock>Υποχρεωτικό</Form.HelpBlock>
                                        </Form.Group>
                                    </Col>
                                    <Col xs={12}>
                                        <Form.Group>
                                            <Form.ControlLabel>Περιγραφή προϊόντος</Form.ControlLabel>
                                            <Form.Control rows={5} name="textarea" as="textarea" />
                                            <Form.HelpBlock tooltip>Υποχρεωτικό</Form.HelpBlock>
                                        </Form.Group>
                                        <Form.Group>
                                        <AdditionalInfo/>
 
                                            {/* <Form.ControlLabel>Παρατηρήσεις</Form.ControlLabel>
                                            <Form.Control rows={5} name="textarea" as="textarea" />
                                            <HelpBlock tooltip>Υποχρεωτικό</HelpBlock> */}
                                        </Form.Group>
                                        <Form.Group>
                                            <ButtonToolbar>
                                                <Button appearance="primary"  color="green"> <CheckIcon /> Υποβολή</Button>
                                                <Button appearance="primary" color="red"><BlockIcon/> Ακύρωση</Button>
                                            </ButtonToolbar>
                                        </Form.Group>
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
