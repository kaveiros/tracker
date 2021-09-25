import {Button, ButtonToolbar, Col, Form, Grid, Row} from "rsuite";
import React, {useState} from "react";
import AdditionalInfo from "../additionalInfo/AdditionalInfo";
import PagePreviousIcon from "@rsuite/icons/PagePrevious";
import InfoRoundIcon from "@rsuite/icons/InfoRound";
import CheckIcon from "@rsuite/icons/Check";
import BlockIcon from "@rsuite/icons/Block";

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
                        <Col xs={24} sm={12} md={8} lg={6}>''</Col>
                        <Col xs={24} sm={12} md={8} lg={12}>
                            <Form.Group>
                                <Form.ControlLabel>Τομέας</Form.ControlLabel>
                                <Form.Control name="type" onChange={handleChange("type")} />
                            </Form.Group>
                            <Form.Group>
                                <Form.ControlLabel>Ονοματεπώνυμο</Form.ControlLabel>
                                <Form.Control name="model" onChange={handleChange("model")} />
                            </Form.Group>
            <Form.Group>
                <ButtonToolbar>
                    <Button color="violet" onClick={handleStep(2)}><PagePreviousIcon/>Πίσω</Button>
                    <Button appearance="primary" color="cyan" onClick={showModalHandler}> <InfoRoundIcon /> Παρατηρήσεις</Button>
                    <Button appearance="primary" color="green"> <CheckIcon /> Υποβολή</Button>
                    <Button appearance="primary" color="red"><BlockIcon /> Ακύρωση</Button>
                </ButtonToolbar>
            </Form.Group>
                        </Col>
                    </Row>
                </Grid>
            </Form>
            {modal && <AdditionalInfo showModal={modal} hideModal={hideModal}/>}
        </React.Fragment>
    )

}

export  default GearStep3
