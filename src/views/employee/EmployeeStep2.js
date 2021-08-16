import React, {useState} from 'react'
import AdditionalInfo from "../additionalInfo/AdditionalInfo";
import {Button} from "rsuite";
import Form from "rsuite/Form";
import Grid from "rsuite/Grid"
import Row from "rsuite/Row"
import Col from "rsuite/Col"
import ButtonToolbar from "rsuite/ButtonToolbar";
import PagePreviousIcon from '@rsuite/icons/PagePrevious';
import CheckIcon from '@rsuite/icons/Check'
import BlockIcon from '@rsuite/icons/Block';





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
                        <Col xs={24} sm={12} md={8} lg={6}/>
                        <Col xs={24} sm={12} md={8} lg={12}>
                            <Form.Group>
                                <Form.ControlLabel>Τομέας</Form.ControlLabel>
                                <Form.Control name="sector"  value={sector} onChange={handleChange("sector")}
                                    errorMessage={errors.sector.errorMessage}/>
                            </Form.Group>
                            <Form.Group>
                                <Form.ControlLabel>Ιδιότητα</Form.ControlLabel>
                                <Form.Control name="property"  value={property} onChange={handleChange('property')}
                                errorMessage={errors.property.errorMessage}/>
                            </Form.Group>
                            <Form.Group>
                                <Form.ControlLabel>Ειδικότητα</Form.ControlLabel>
                                <Form.Control name="specialisedIn"  value={specialisedIn} onChange={handleChange("specialisedIn")}
                                errorMessage={errors.specialisedIn.errorMessage}/>
                            </Form.Group>
                            <Form.Group>
                                <Form.ControlLabel>Εξειδίκευση</Form.ControlLabel>
                                <Form.Control name="expertise"  value={expertise} onChange={handleChange('expertise')}
                                errorMessage={errors.expertise.errorMessage}/>
                            </Form.Group>
                            <Form.Group>
                                <Form.ControlLabel>Κόστος/Ωρα-υπερωρία</Form.ControlLabel>
                                <Form.Control name="costOvertime" value={costOvertime} type="number"
                                             onChange={handleChange('costOvertime')} errorMessage={errors.costOvertime.errorMessage}/>
                            </Form.Group>
                            <Form.Group>
                                <Form.ControlLabel>Κόστος/Ωρα-ημερομίσθιο</Form.ControlLabel>
                                <Form.Control name="costPerDay" value={costPerDay} type="number"
                                             onChange={handleChange('costPerDay')} errorMessage={errors.costPerDay.errorMessage}/>
                            </Form.Group>
                            <Form.Group>
                                <ButtonToolbar>
                                    <Button appearance="primary" color="violet" onClick={handleStep(0)}><PagePreviousIcon icon="page-previous"/>Πίσω</Button>
                                    <Button appearance="primary" color="cyan" onClick={showModalHandler}> <PagePreviousIcon /> Παρατηρήσεις</Button>
                                    <Button appearance="primary" color="green" onClick={handleSubmit}> <CheckIcon /> Υποβολή</Button>
                                    <Button appearance="primary" color="red"  onClick={handleStep(1)}><BlockIcon /> Ακύρωση</Button>
                                </ButtonToolbar>
                            </Form.Group>
                        </Col>
                        <Col xs={24} sm={12} md={8} lg={6}/>
                    </Row>
                </Grid>
            </Form>
            {modal && <AdditionalInfo showModal={modal} hideModal={hideModal} uniqueVersion={uniqueVersion}/>}
        </React.Fragment>

    )

}

export default EmployeeStep2
