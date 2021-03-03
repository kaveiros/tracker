import React, {useState} from 'react'
import {
    Form, FormGroup, ControlLabel, Row, Col, Button, Icon,
     Grid, ButtonToolbar, SelectPicker
} from 'rsuite'
import AdditionalInfo from "../additionalInfo/AdditionalInfo";


const WorkStep3 = (props) => {

    const {  fromSector,
        fromTeamLeader, toSector, toTeamLeader,handleChange, handleStep, errors, hasValidationError, handleSubmit, uniqueVersion} = props

    const [modal, setShowModal] = useState(false)

    const showModalHandler = () => {
        setShowModal(true)
    }

    const hideModal = () => {
        setShowModal(false)
    }

    let secData = [{
        "label":  "τομέας1",
        "value": "τομέας1"
    }]

    return (
        <React.Fragment>
        <Form fluid={true}>
            <Grid fluid={true}>
                <Row className="show-grid">
                    <Col xs={24} sm={12} md={8} lg={6}></Col>
                    <Col xs={24} sm={12} md={8} lg={12}>
                        <FormGroup>
                            <ControlLabel>Από Τμήμα-Τομέα</ControlLabel>
                            <SelectPicker  className="rs-form-control-wrapper" name="fromSector"  data={secData} />
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>Από Υπεύθυνο τμήματος</ControlLabel>
                            <SelectPicker  className="rs-form-control-wrapper"  name="fromTeamleader"  data={secData} />
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>πρός τμήμα-Τομέα</ControlLabel>
                            <SelectPicker  className="rs-form-control-wrapper"  name="toSector" data={secData} />
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>Πρός Υπεύθυνο τμήματος</ControlLabel>
                            <SelectPicker  className="rs-form-control-wrapper"  name="toTeamleader"  data={secData} />
                        </FormGroup>
                        <FormGroup>
                            <ButtonToolbar>
                                <Button color="violet" onClick={handleStep(2)}><Icon icon="page-previous"/>Πίσω</Button>
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

export default WorkStep3