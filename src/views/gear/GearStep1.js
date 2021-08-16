import React from "react";
import {Button, ButtonToolbar, Col, Form, Grid, Row} from "rsuite";
import PageNextIcon from "@rsuite/icons/PageNext";

const GearStep1 = (props) => {

    const {handleChange, handleStep} = props
    return(
        <Form fluid={true}>
            <Grid fluid={true}>
                <Row className="show-grid">
                    <Col xs={24} sm={12} md={8} lg={6}/>
                    <Col xs={24} sm={12} md={8} lg={12}>
                        <Form.Group>
                            <Form.ControlLabel>A/A</Form.ControlLabel>
                            <Form.Control name="aa" onChange={handleChange("aa")} />
                        </Form.Group>
                        <Form.Group>
                            <Form.ControlLabel>Κωδικός</Form.ControlLabel>
                            <Form.Control name="code" onChange={handleChange("code")} />
                        </Form.Group>
                        <Form.Group>
                            <Form.ControlLabel>Είδος</Form.ControlLabel>
                            <Form.Control name="kind" onChange={handleChange("kind")} />
                        </Form.Group>
                        <Form.Group>
                            <Form.ControlLabel>Περιγραφή</Form.ControlLabel>
                            <Form.Control name="description" onChange={handleChange("description")} />
                        </Form.Group>
                    </Col>
                        <Col md={4} mdOffset={20}>
                            <ButtonToolbar>
                                <Button appearance="primary" color="green" onClick={handleStep(2)}>Επόμενο<PageNextIcon/></Button>
                            </ButtonToolbar>
                        </Col>
                </Row>
            </Grid>
        </Form>
    )

}

export default GearStep1
