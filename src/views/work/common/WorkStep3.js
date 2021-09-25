import React, {useState} from 'react'
import {
    Form, Row, Col, Button,
     Grid, ButtonToolbar, SelectPicker
} from 'rsuite'
import AdditionalInfo from "../../additionalInfo/AdditionalInfo";
import PagePreviousIcon from "@rsuite/icons/PagePrevious";
import InfoRoundIcon from "@rsuite/icons/InfoRound";
import CheckIcon from "@rsuite/icons/Check";
import BlockIcon from "@rsuite/icons/Block";


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
                    <Col xs={24} sm={12} md={8} lg={6}>''</Col>
                    <Col xs={24} sm={12} md={8} lg={12}>
                        <Form.Group>
                            <Form.ControlLabel>Από Τμήμα-Τομέα</Form.ControlLabel>
                            <SelectPicker  className="rs-form-control-wrapper" name="fromSector"  data={secData} />
                        </Form.Group>
                        <Form.Group>
                            <Form.ControlLabel>Από Υπεύθυνο τμήματος</Form.ControlLabel>
                            <SelectPicker  className="rs-form-control-wrapper"  name="fromTeamleader"  data={secData} />
                        </Form.Group>
                        <Form.Group>
                            <Form.ControlLabel>πρός τμήμα-Τομέα</Form.ControlLabel>
                            <SelectPicker  className="rs-form-control-wrapper"  name="toSector" data={secData} />
                        </Form.Group>
                        <Form.Group>
                            <Form.ControlLabel>Πρός Υπεύθυνο τμήματος</Form.ControlLabel>
                            <SelectPicker  className="rs-form-control-wrapper"  name="toTeamleader"  data={secData} />
                        </Form.Group>
                        <Form.Group>
                            <ButtonToolbar>
                                <Button color="violet" onClick={handleStep(2)}><PagePreviousIcon/>Πίσω</Button>
                                <Button appearance="primary" color="cyan" onClick={showModalHandler}> <InfoRoundIcon/> Παρατηρήσεις</Button>
                                <Button appearance="primary" color="green" onClick={handleSubmit}> <CheckIcon/> Υποβολή</Button>
                                <Button appearance="primary" color="red"  onClick={handleStep(1)}><BlockIcon/> Ακύρωση</Button>
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

export default WorkStep3
