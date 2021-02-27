import React from 'react'
import { Row, Grid, Col, FormControl, FormGroup, HelpBlock, ControlLabel, Icon, ButtonToolbar, Button, Form } from 'rsuite'

const EmployeeStep1 = (props) => {

    const {aa, code, name, address, expertise, handleChange, handleStep} = props
    console.log(props)

    return (
        <Form fluid={true}>
            <Grid fluid={true}>
                <Row className="show-grid">
                    <Col xs={24} sm={12} md={8} lg={6}></Col>
                    <Col xs={24} sm={12} md={8} lg={12}>
                        <FormGroup>
                            <ControlLabel>Α/Α</ControlLabel>
                            <FormControl name="aa" type="number" value={aa} onChange={handleChange('aa')} />

                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>Κωδικός</ControlLabel>
                            <FormControl name="code" value={code} onChange={handleChange('code')}/>

                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>Διεθυνση</ControlLabel>
                            <FormControl name="address" value={address} onChange={handleChange('code')}/>

                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>Όνοματεπώνυμο</ControlLabel>
                            <FormControl name="name" value={name} onChange={handleChange('name')}/>

                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>Τμήμα</ControlLabel>
                            <FormControl name="section" onChange={handleChange("section")} />
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
                            <Button appearance="primary" color="green" onClick={handleStep(2)}>Επόμενο<Icon icon="page-next"/></Button>
                        </ButtonToolbar>                    </Col>
                </Row>
            </Grid>
        </Form>
    )

}

export default EmployeeStep1