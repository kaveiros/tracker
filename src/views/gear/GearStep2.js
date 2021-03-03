import {Button, ButtonToolbar, Col, ControlLabel, Form, FormControl, FormGroup, Grid, Icon, Row} from "rsuite";
import React from "react";

const GearStep2 = (props) => {

    const {handleChange, handleStep} = props

    return(
            <Form fluid={true}>
                <Grid fluid={true}>
                    <Row className="show-grid">
                        <Col xs={24} sm={12} md={8} lg={6}></Col>
                        <Col xs={24} sm={12} md={8} lg={12}>
                            <FormGroup>
                                <ControlLabel>Τύπος</ControlLabel>
                                <FormControl name="type" onChange={handleChange("type")} />
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>Μοντέλο</ControlLabel>
                                <FormControl name="model" onChange={handleChange("model")} />
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>Παραγωγή ανά ώρα</ControlLabel>
                                <FormControl name="type" onChange={handleChange("type")} />
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>Τμήμα</ControlLabel>
                                <FormControl name="type" onChange={handleChange("type")} />
                            </FormGroup>
                        </Col>
                        <Col xs={24} sm={12} md={8} lg={6}></Col>
                    </Row>
                    <Row>


                                <Col md={4} mdOffset={20}>
                            <ButtonToolbar>
                                <Button appearance="primary" color="violet" onClick={handleStep(1)}><Icon icon="page-previous"/>Πίσω</Button>
                                <Button appearance="primary" color="green" onClick={handleStep(3)}>Επόμενο<Icon icon="page-next"/></Button>
                            </ButtonToolbar>
                        </Col>
                    </Row>
                </Grid>
            </Form>
    )

}

export default GearStep2