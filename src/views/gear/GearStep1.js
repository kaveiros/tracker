import React from "react";
import {Button, ButtonToolbar, Col, ControlLabel, Form, FormControl, FormGroup, Grid, Icon, Row} from "rsuite";

const GearStep1 = (props) => {

    const {handleChange, handleStep} = props
    return(
        <Form fluid={true}>
            <Grid fluid={true}>
                <Row className="show-grid">
                    <Col xs={24} sm={12} md={8} lg={6}></Col>
                    <Col xs={24} sm={12} md={8} lg={12}>
                        <FormGroup>
                            <ControlLabel>A/A</ControlLabel>
                            <FormControl name="aa" onChange={handleChange("aa")} />
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>Κωδικός</ControlLabel>
                            <FormControl name="code" onChange={handleChange("code")} />
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>Είδος</ControlLabel>
                            <FormControl name="kind" onChange={handleChange("kind")} />
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>Περιγραφή</ControlLabel>
                            <FormControl name="description" onChange={handleChange("description")} />
                        </FormGroup>
                    </Col>
                        <Col md={4} mdOffset={20}>
                            <ButtonToolbar>
                                <Button appearance="primary" color="green" onClick={handleStep(2)}>Επόμενο<Icon icon="page-next"/></Button>
                            </ButtonToolbar>
                        </Col>
                </Row>
            </Grid>
        </Form>
    )

}

export default GearStep1