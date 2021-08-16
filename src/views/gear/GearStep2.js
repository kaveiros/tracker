import {Button, ButtonToolbar, Col, Form, Grid, Row} from "rsuite";
import React from "react";
import PagePreviousIcon from "@rsuite/icons/PagePrevious";
import PageNextIcon from "@rsuite/icons/PageNext";

const GearStep2 = (props) => {

    const {handleChange, handleStep} = props

    return(
            <Form fluid={true}>
                <Grid fluid={true}>
                    <Row className="show-grid">
                        <Col xs={24} sm={12} md={8} lg={6}>''</Col>
                        <Col xs={24} sm={12} md={8} lg={12}>
                            <Form.Group>
                                <Form.ControlLabel>Τύπος</Form.ControlLabel>
                                <Form.Control name="type" onChange={handleChange("type")} />
                            </Form.Group>
                            <Form.Group>
                                <Form.ControlLabel>Μοντέλο</Form.ControlLabel>
                                <Form.Control name="model" onChange={handleChange("model")} />
                            </Form.Group>
                            <Form.Group>
                                <Form.ControlLabel>Τμήμα</Form.ControlLabel>
                                <Form.Control name="type" onChange={handleChange("type")} />
                            </Form.Group>
                        </Col>
                        <Col xs={24} sm={12} md={8} lg={6}/>
                    </Row>
                    <Row>


                                <Col md={4} mdOffset={20}>
                            <ButtonToolbar>
                                <Button appearance="primary" color="violet" onClick={handleStep(1)}><PagePreviousIcon/>Πίσω</Button>
                                <Button appearance="primary" color="green" onClick={handleStep(3)}>Επόμενο<PageNextIcon/></Button>
                            </ButtonToolbar>
                        </Col>
                    </Row>
                </Grid>
            </Form>
    )

}

export default GearStep2
