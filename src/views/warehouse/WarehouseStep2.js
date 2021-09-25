import React, {useState} from 'react'
import {
    Row,
    Grid,
    Col,
    ButtonToolbar,
    Button,
    Form, SelectPicker,
} from 'rsuite'
import CheckIcon from '@rsuite/icons/Check';
import InfoRoundIcon from '@rsuite/icons/InfoRound';
import BlockIcon from '@rsuite/icons/Block';
import PagePreviousIcon from '@rsuite/icons/PagePrevious';
import AdditionalInfo from "../additionalInfo/AdditionalInfo";

const WarehouseStep2 = (props) => {

    const {quantity, nameOfPersonAccepted, handleChange, handleStep, sectors, sector, section, sections,
        errors, handleSubmit, uniqueVersion} = props

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
                        <Col xs={24} sm={12} md={8} lg={6}>''</Col>
                        <Col xs={24} sm={12} md={8} lg={12}>
                            <Form.Group>
                                <Form.ControlLabel>Ποσότητα</Form.ControlLabel>
                                <Form.Control name="quantity" type="number" value={quantity} onChange={handleChange('quantity')}
                                             errorMessage={errors.quantity.errorMessage}/>
                            </Form.Group>
                            <Form.Group>
                                <Form.ControlLabel>Τμήμα</Form.ControlLabel>
                                <SelectPicker className="rs-form-control-wrapper" placeholder={section} data={sections} onChange={handleChange('section')}/>
                            </Form.Group>
                            <Form.Group>
                                <Form.ControlLabel>Τομέας</Form.ControlLabel>
                                <SelectPicker className="rs-form-control-wrapper" placeholder={sector} data={sectors} onChange={handleChange('sector')}/>
                            </Form.Group>
                            <Form.Group>
                                <Form.ControlLabel>Παραλαβών</Form.ControlLabel>
                                <Form.Control name="nameOfPersonAccepted"  value={nameOfPersonAccepted} onChange={handleChange('nameOfPersonAccepted')}/>
                            </Form.Group>
                            <Form.Group>
                                <ButtonToolbar>
                                    <Button color="violet" onClick={handleStep(0)}><PagePreviousIcon/>Πίσω</Button>
                                    <Button appearance="primary" color="cyan" onClick={showModalHandler}> <InfoRoundIcon/> Παρατηρήσεις</Button>
                                    <Button appearance="primary" color="green" onClick={handleSubmit}> <CheckIcon /> Υποβολή</Button>
                                    <Button appearance="primary" color="red"  onClick={handleStep(0)}><BlockIcon /> Ακύρωση</Button>
                                </ButtonToolbar>
                            </Form.Group>
                        </Col>
                        <Col xs={24} sm={12} md={8} lg={6}>''</Col>
                    </Row>
                </Grid>
            </Form>
            {modal && <AdditionalInfo showModal={modal} hideModal={hideModal} uniqueVersion={uniqueVersion}/>}
        </React.Fragment>

    )

}

export default WarehouseStep2
