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

    const {property, handleChange} = props
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
                                <ControlLabel>Ιδιότητα</ControlLabel>
                                <FormControl name="property" value={property} onChange={handleChange('property')} />
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
                                    <Button appearance="primary" color="green" onClick={showModalHandler}> <Icon icon="info-circle" /> Παρατηρήσεις</Button>
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