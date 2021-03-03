import React from 'react'
import { Row, Grid, Col, FormControl, FormGroup, ControlLabel, Icon, ButtonToolbar, Button, Form } from 'rsuite'

const EmployeeStep1 = (props) => {

    const {aa, code, name, address, section, handleChange, handleStep, errors, hasValidationError} = props
    //console.log(props)

    return (
        <Form fluid={true}>
            <Grid fluid={true}>
                <Row className="show-grid">
                    <Col xs={24} sm={12} md={8} lg={6}></Col>
                    <Col xs={24} sm={12} md={8} lg={12}>
                        <FormGroup>
                            <ControlLabel>Α/Α</ControlLabel>
                            <FormControl name="aa" type="number" value={aa}
                                         onChange={handleChange('aa')}  errorMessage={errors.aa.errorMessage}/>

                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>Κωδικός</ControlLabel>
                            <FormControl name="code" value={code}
                                         onChange={handleChange('code')} errorMessage={errors.code.errorMessage}/>

                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>Διεθυνση</ControlLabel>
                            <FormControl name="address" value={address} onChange={handleChange('address')}
                                         errorMessage={errors.address.errorMessage}/>

                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>Όνοματεπώνυμο</ControlLabel>
                            <FormControl name="name" value={name} onChange={handleChange('name')}
                            errorMessage={errors.name.errorMessage}/>
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>Τμήμα</ControlLabel>
                            <FormControl name="section" value={section} onChange={handleChange("section")}
                            errorMessage={errors.section.errorMessage}/>
                        </FormGroup>

                    </Col>
                    <Col xs={24} sm={12} md={8} lg={6}></Col>
                </Row>
                <Row>
                    <Col xs={24} sm={12} md={8} lg={6}></Col>
                    <Col xs={24} sm={12} md={8} lg={6}></Col>
                    <Col xs={24} sm={12} md={8} lg={6}>

                    </Col>
                </Row>
                <Row className="show-grid">
                    <Col md={4} mdOffset={20}>
                    <ButtonToolbar>
                            <Button appearance="primary" color="green" disabled={hasValidationError}
                                    onClick={handleStep(2)}>Επόμενο<Icon icon="page-next"/></Button>
                        </ButtonToolbar>                    </Col>
                </Row>
            </Grid>
        </Form>
    )

}

export default EmployeeStep1