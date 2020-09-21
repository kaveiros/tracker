import React from 'react'
import {
    Content, Header, Form, FormGroup, ControlLabel, Breadcrumb,
    FormControl, HelpBlock, ButtonToolbar, Button, Panel, Icon, Divider,
    ButtonGroup, Steps
} from 'rsuite'
import { mandatory } from '../style/Style'

// export default class WorkTab extends Component {
//     render() {
//         return (
//             <Container>
//                 <Content>
//                     <Panel>
//                         <Breadcrumb>
//                             <Breadcrumb.Item>Home</Breadcrumb.Item>
//                             <Breadcrumb.Item>Components</Breadcrumb.Item>
//                             <Breadcrumb.Item active>Breadcrumb</Breadcrumb.Item>
//                         </Breadcrumb>
//                         <Form fluid>
//                             <Grid>
//                                 <Row className="show-grid">
//                                     <Col xs={12}>
//                                         <FormGroup>
//                                             <ControlLabel>Α/Α</ControlLabel>
//                                             <FormControl name="name" type="number" />
//                                             <HelpBlock>Υποχρεωτικό</HelpBlock>
//                                         </FormGroup>
//                                         <FormGroup>
//                                             <ControlLabel>Πελάτης</ControlLabel>
//                                             <FormControl name="code" />
//                                             <HelpBlock>Υποχρεωτικό</HelpBlock>
//                                         </FormGroup>
//                                         <FormGroup>
//                                             <ControlLabel>Περιγραφή έργου</ControlLabel>
//                                             <FormControl rows={5} name="textarea" componentClass="textarea" />
//                                             <HelpBlock>Υποχρεωτικό</HelpBlock>
//                                         </FormGroup>
//                                         <FormGroup>
//                                             <ControlLabel>Ειδικότητα</ControlLabel>
//                                             <FormControl name="expertise" />
//                                             <HelpBlock>Υποχρεωτικό</HelpBlock>
//                                         </FormGroup>
//                                     </Col>
//                                     <Col xs={12}>
//                                         <FormGroup>
//                                             <ControlLabel>Κύρια εργασία</ControlLabel>
//                                             <FormControl name="expertise" />
//                                             <HelpBlock>Υποχρεωτικό</HelpBlock>
//                                         </FormGroup>
//                                         <FormGroup>
//                                             <ButtonToolbar>
//                                                 <ControlLabel>Προσθήκη δευτερεύουσας εργασίας</ControlLabel>
//                                                 <Divider/>
//                                                 <Button primary color="green"> <Icon icon="plus" /> Προσθήκη</Button>
//                                             </ButtonToolbar>
//                                         </FormGroup>
//                                         <FormGroup>
//                                             <ControlLabel>Παρατηρήσεις</ControlLabel>
//                                             <FormControl rows={5} name="textarea" componentClass="textarea" />
//                                         </FormGroup>
//                                         <FormGroup>
//                                             <ButtonToolbar>
//                                                 <Button primary color="green"> <Icon icon="save" /> Υποβολή</Button>
//                                                 <Button primary color="red"><Icon icon="ban" /> Ακύρωση</Button>
//                                             </ButtonToolbar>
//                                         </FormGroup>
//                                     </Col>
//                                 </Row>
//                             </Grid>
//                         </Form>
//                     </Panel>
//                 </Content>
//             </Container>
//         )
//     }

// }

const WorkTab = () => {
    const [step, setStep] = React.useState(0);
    const onChange = nextStep => {
        setStep(nextStep < 0 ? 0 : nextStep > 3 ? 3 : nextStep);
    };

    const onNext = () => onChange(step + 1);
    const onPrevious = () => onChange(step - 1);

    return (
        <Panel>
            <Header>
                <Breadcrumb>
                    <Breadcrumb.Item href="/">Αρχική</Breadcrumb.Item>
                    <Breadcrumb.Item href="/worktab" active>καρτέλα έργου</Breadcrumb.Item>
                </Breadcrumb>
            </Header>
            <Content>
                <Steps current={step}>
                    <Steps.Item title="Βασικά στοιχεία" />
                    <Steps.Item title="Παρατηρήσεις" />
                </Steps>
                <hr />
                <Form layout="horizontal">
                    {step + 1 == 1 ?
                        <Panel>
                            <FormGroup>
                                <ControlLabel>Α/Α</ControlLabel>
                                <ControlLabel style={mandatory}>*</ControlLabel>
                                <FormControl name="name" type="number" />
                                <HelpBlock tooltip>Υποχρεωτικό</HelpBlock>

                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>Πελάτης</ControlLabel>
                                <ControlLabel style={mandatory}>*</ControlLabel>
                                <FormControl name="code" />
                                <HelpBlock tooltip>Υποχρεωτικό</HelpBlock>
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>Περιγραφή έργου</ControlLabel>
                                <ControlLabel style={mandatory}>*</ControlLabel>
                                <FormControl name="textarea" componentClass="textarea" />
                                <HelpBlock tooltip>Υποχρεωτικό</HelpBlock>
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>Ειδικότητα</ControlLabel>
                                <ControlLabel style={mandatory}>*</ControlLabel>
                                <FormControl name="expertise" />
                                <HelpBlock tooltip>Υποχρεωτικό</HelpBlock>
                            </FormGroup>
                        </Panel> : <Panel>
                            <FormGroup>
                                <ControlLabel>Κύρια εργασία</ControlLabel>
                                <ControlLabel style={mandatory}>*</ControlLabel>
                                <FormControl name="expertise" />
                                <HelpBlock tooltip>Υποχρεωτικό</HelpBlock>
                            </FormGroup>
                            <FormGroup>
                                <ButtonToolbar>
                                    <ControlLabel>Προσθήκη δευτερεύουσας εργασίας</ControlLabel>
                                    <Divider />
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
                            </FormGroup>                        </Panel>
                    }
                </Form>
                <hr />
                <ButtonGroup>
                    <Button onClick={onPrevious} disabled={step === 0}>
                        Πίσω
          </Button>
                    <Button onClick={onNext} disabled={step === 3}>
                        Επόμενο
          </Button>
                </ButtonGroup>
            </Content>

        </Panel>
    );
}

export default WorkTab