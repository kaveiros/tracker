import {Button, ButtonToolbar, Col, ControlLabel, Form, FormControl, FormGroup, Grid, Icon, Row} from "rsuite";
import React, {useState} from "react";
import AdditionalInfo from "../additionalInfo/AdditionalInfo";

const GearStep3 = (props) => {

    const {handleStep, handleChange} = props
    const [modal, setShowModal] = useState(false)

    const showModalHandler = () => {
        setShowModal(true)
    }

    const hideModal = () => {
        setShowModal(false)
    }


    return(
        <React.Fragment>
            <Form fluid={true}>
                <Grid fluid={true}>
                    <Row className="show-grid">
                        <Col xs={24} sm={12} md={8} lg={6}></Col>
                        <Col xs={24} sm={12} md={8} lg={12}>
                            <FormGroup>
                                <ControlLabel>Τομέας</ControlLabel>
                                <FormControl name="type" onChange={handleChange("type")} />
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>Ονοματεπώνυμο</ControlLabel>
                                <FormControl name="model" onChange={handleChange("model")} />
                            </FormGroup>
            <FormGroup>
                <ButtonToolbar>
                    <Button color="violet" onClick={handleStep(2)}><Icon icon="page-previous"/>Πίσω</Button>
                    <Button appearance="primary" color="cyan" onClick={showModalHandler}> <Icon icon="info-circle" /> Παρατηρήσεις</Button>
                    <Button appearance="primary" color="green"> <Icon icon="save" /> Υποβολή</Button>
                    <Button appearance="primary" color="red"><Icon icon="ban" /> Ακύρωση</Button>
                </ButtonToolbar>
            </FormGroup>
                        </Col>
                    </Row>
                </Grid>
            </Form>
            {modal && <AdditionalInfo showModal={modal} hideModal={hideModal}/>}
        </React.Fragment>
    )

}

export  default GearStep3