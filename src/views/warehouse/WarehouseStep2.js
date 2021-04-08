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
    Form, SelectPicker, Panel,
} from 'rsuite'
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
                        <Col xs={24} sm={12} md={8} lg={6}></Col>
                        <Col xs={24} sm={12} md={8} lg={12}>
                            <FormGroup>
                                <ControlLabel>Ποσότητα</ControlLabel>
                                <FormControl name="quantity" type="number" value={quantity} onChange={handleChange('quantity')}
                                             errorMessage={errors.quantity.errorMessage}/>
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>Τμήμα</ControlLabel>
                                <SelectPicker className="rs-form-control-wrapper" placeholder={section} data={sections} onChange={handleChange('section')}/>
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>Τομέας</ControlLabel>
                                <SelectPicker className="rs-form-control-wrapper" placeholder={sector} data={sectors} onChange={handleChange('sector')}/>
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>Παραλαβών</ControlLabel>
                                <FormControl name="nameOfPersonAccepted"  value={nameOfPersonAccepted} onChange={handleChange('nameOfPersonAccepted')}/>
                            </FormGroup>
                            <FormGroup>
                                <ButtonToolbar>
                                    <Button color="violet" onClick={handleStep(0)}><Icon icon="page-previous"/>Πίσω</Button>
                                    <Button appearance="primary" color="cyan" onClick={showModalHandler}> <Icon icon="info-circle" /> Παρατηρήσεις</Button>
                                    <Button appearance="primary" color="green" onClick={handleSubmit}> <Icon icon="save" /> Υποβολή</Button>
                                    <Button appearance="primary" color="red"  onClick={handleStep(0)}><Icon icon="ban" /> Ακύρωση</Button>
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

export default WarehouseStep2
