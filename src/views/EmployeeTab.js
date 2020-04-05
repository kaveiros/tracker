import React, { Component } from 'react'
import {
  Content, Col, Form, FormGroup, ControlLabel, Breadcrumb,
  FormControl, HelpBlock, ButtonToolbar, Button, Container, Panel, Icon, Grid, Row
} from 'rsuite'

export default class EmployeeTab extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Panel>
            <Breadcrumb>
              <Breadcrumb.Item href="/">Αρχική</Breadcrumb.Item>
              <Breadcrumb.Item href="/employeetab" active>Καρτέλα εργαζομένου</Breadcrumb.Item>
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
                  <Col xs={12}>
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
                </Row>
              </Grid>
            </Form>
          </Panel>
        </Content>
      </Container>
    )
  }

}