import React from 'react'
import { Row, Grid, Col, ButtonToolbar, Button, Form } from 'rsuite'
import PageNextIcon from "@rsuite/icons/PageNext";

const EmployeeStep1 = (props) => {

    const {aa, code, name, address, section, handleChange, handleStep, errors, hasValidationError} = props
    //console.log(props)

    return (
        <Form fluid={true}>
            <Grid fluid={true}>
                <Row className="show-grid">
                    <Col xs={24} sm={12} md={8} lg={6}>''</Col>
                    <Col xs={24} sm={12} md={8} lg={12}>
                        <Form.Group>
                            <Form.ControlLabel>Α/Α</Form.ControlLabel>
                            <Form.Control name="aa" type="number" value={aa}
                                         onChange={handleChange('aa')}  errorMessage={errors.aa.errorMessage}/>

                        </Form.Group>
                        <Form.Group>
                            <Form.ControlLabel>Κωδικός</Form.ControlLabel>
                            <Form.Control name="code" value={code}
                                         onChange={handleChange('code')} errorMessage={errors.code.errorMessage}/>

                        </Form.Group>
                        <Form.Group>
                            <Form.ControlLabel>Διεθυνση</Form.ControlLabel>
                            <Form.Control name="address" value={address} onChange={handleChange('address')}
                                         errorMessage={errors.address.errorMessage}/>

                        </Form.Group>
                        <Form.Group>
                            <Form.ControlLabel>Όνοματεπώνυμο</Form.ControlLabel>
                            <Form.Control name="name" value={name} onChange={handleChange('name')}
                            errorMessage={errors.name.errorMessage}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.ControlLabel>Τμήμα</Form.ControlLabel>
                            <Form.Control name="section" value={section} onChange={handleChange("section")}
                            errorMessage={errors.section.errorMessage}/>
                        </Form.Group>

                    </Col>
                    <Col xs={24} sm={12} md={8} lg={6}>''</Col>
                </Row>
                <Row>
                    <Col xs={24} sm={12} md={8} lg={6}>''</Col>
                    <Col xs={24} sm={12} md={8} lg={6}>''</Col>
                    <Col xs={24} sm={12} md={8} lg={6}>''</Col>
                </Row>
                <Row className="show-grid">
                    <Col md={4} mdOffset={20}>
                    <ButtonToolbar>
                            <Button appearance="primary" color="green" disabled={hasValidationError}
                                    onClick={handleStep(1)}>Επόμενο<PageNextIcon/></Button>
                        </ButtonToolbar>                    </Col>
                </Row>
            </Grid>
        </Form>
    )

}

export default EmployeeStep1
