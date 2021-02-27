import React, {useState} from 'react'
import {
    Row,
    Grid,
    Col,
    FormControl,
    FormGroup,
    HelpBlock,
    ControlLabel,
    Icon,
    ButtonToolbar,
    Button,
    Form,
    Modal, Panel
} from 'rsuite'
import AdditionalInfo from "../additionalInfo/AdditionalInfo";

const EmployeeStep2 = (props) => {

    const {property, handleChange, handleStep, expertise} = props
    console.log(props)
    const [modal, setShowModal] = useState(false)

    const showModalHandler = () => {
        setShowModal(true)
    }

    const hideModal = () => {
        setShowModal(false)
    }

    return (
        <React.Fragment>
            <Form fluid={true}>
                <Grid fluid={true}>
                    <Row className="show-grid">
                        <Col xs={24} sm={12} md={8} lg={6}></Col>
                        <Col xs={24} sm={12} md={8} lg={12}>
                            <FormGroup>
                                <ControlLabel>Τομέας</ControlLabel>
                                <FormControl name="sector" onChange={handleChange("sector")} />
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>Ιδιότητα</ControlLabel>
                                <FormControl name="property"  value={property} onChange={handleChange('property')}/>
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>Ειδικότητα</ControlLabel>
                                <FormControl name="speciality"  onChange={handleChange("speciality")}/>
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>Εξειδίκευση</ControlLabel>
                                <FormControl name="expertise"  value={expertise} onChange={handleChange('expertise')}/>
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>Κόστος/Ωρα-υπερωρία</ControlLabel>
                                <FormControl name="costOvertime" type="number" />
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>Κόστος/Ωρα-ημερομίσθιο</ControlLabel>
                                <FormControl name="cost" type="number" />
                            </FormGroup>
                            <FormGroup>
                                <ButtonToolbar>
                                    <Button color="violet" onClick={handleStep(1)}><Icon icon="page-previous"/>Πίσω</Button>
                                    <Button appearance="primary" color="cyan" onClick={showModalHandler}> <Icon icon="info-circle" /> Παρατηρήσεις</Button>
                                    <Button appearance="primary" color="green"> <Icon icon="save" /> Υποβολή</Button>
                                    <Button appearance="primary" color="red"><Icon icon="ban" /> Ακύρωση</Button>
                                </ButtonToolbar>
                            </FormGroup>
                        </Col>
                        <Col xs={24} sm={12} md={8} lg={6}></Col>
                    </Row>
                </Grid>
            </Form>
            {modal && <AdditionalInfo showModal={modal} hideModal={hideModal}/>}
        </React.Fragment>

    )

}

export default EmployeeStep2