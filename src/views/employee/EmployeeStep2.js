import React, {useState} from 'react'
import {
    Row,
    Grid,
    Col,
    FormControl,
    FormGroup,
    ControlLabel,
    Icon,
    ButtonToolbar,
    Button,
    Form,
} from 'rsuite'
import AdditionalInfo from "../additionalInfo/AdditionalInfo";

const EmployeeStep2 = (props) => {

    const {sector, property, specialisedIn, handleChange, handleStep, expertise,
        costOvertime, costPerDay, errors, handleSubmit, uniqueVersion} = props

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
                                <FormControl name="sector"  value={sector} onChange={handleChange("sector")}
                                    errorMessage={errors.sector.errorMessage}/>
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>Ιδιότητα</ControlLabel>
                                <FormControl name="property"  value={property} onChange={handleChange('property')}
                                errorMessage={errors.property.errorMessage}/>
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>Ειδικότητα</ControlLabel>
                                <FormControl name="specialisedIn"  value={specialisedIn} onChange={handleChange("specialisedIn")}
                                errorMessage={errors.specialisedIn.errorMessage}/>
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>Εξειδίκευση</ControlLabel>
                                <FormControl name="expertise"  value={expertise} onChange={handleChange('expertise')}
                                errorMessage={errors.expertise.errorMessage}/>
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>Κόστος/Ωρα-υπερωρία</ControlLabel>
                                <FormControl name="costOvertime" value={costOvertime} type="number"
                                             onChange={handleChange('costOvertime')} errorMessage={errors.costOvertime.errorMessage}/>
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>Κόστος/Ωρα-ημερομίσθιο</ControlLabel>
                                <FormControl name="costPerDay" value={costPerDay} type="number"
                                             onChange={handleChange('costPerDay')} errorMessage={errors.costPerDay.errorMessage}/>
                            </FormGroup>
                            <FormGroup>
                                <ButtonToolbar>
                                    <Button color="violet" onClick={handleStep(0)}><Icon icon="page-previous"/>Πίσω</Button>
                                    <Button appearance="primary" color="cyan" onClick={showModalHandler}> <Icon icon="info-circle" /> Παρατηρήσεις</Button>
                                    <Button appearance="primary" color="green" onClick={handleSubmit}> <Icon icon="save" /> Υποβολή</Button>
                                    <Button appearance="primary" color="red"  onClick={handleStep(1)}><Icon icon="ban" /> Ακύρωση</Button>
                                </ButtonToolbar>
                            </FormGroup>
                        </Col>
                        <Col xs={24} sm={12} md={8} lg={6}></Col>
                    </Row>
                </Grid>
            </Form>
            {modal && <AdditionalInfo showModal={modal} hideModal={hideModal} uniqueVersion={uniqueVersion}/>}
        </React.Fragment>

    )

}

export default EmployeeStep2
