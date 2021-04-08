import React from 'react'
import { Row, Grid, Col, FormControl, FormGroup, ControlLabel, Icon, ButtonToolbar, Button, Form } from 'rsuite'

const WarehouseStep1 = (props) => {

    const {aa, code, description, kind, handleChange, handleStep, errors, hasValidationError} = props

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
                            <ControlLabel>Είδος</ControlLabel>
                            <FormControl name="kind" value={kind} onChange={handleChange('kind')}
                                         errorMessage={errors.kind.errorMessage}/>

                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>Περιγραφή</ControlLabel>
                            <FormControl name="description" value={description} onChange={handleChange('description')}
                            errorMessage={errors.description.errorMessage}/>
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
                            <Button appearance="primary" color="green"
                                    // disabled={hasValidationError}
                                    onClick={handleStep(1)}>Επόμενο<Icon icon="page-next"/></Button>
                        </ButtonToolbar>                    </Col>
                </Row>
            </Grid>
        </Form>
    )

}

export default WarehouseStep1
