import React from 'react'
import {
    Form, FormGroup, ControlLabel, Row, Col,
    FormControl, DatePicker, HelpBlock, Button, Icon, Grid, ButtonToolbar
} from 'rsuite'


const WorkStep1 = (props) => {

    const {aa, code, date, kind, handleChange, handleStep, errors, hasValidationError} = props

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
                            <ControlLabel>Ημερομηνία</ControlLabel>
                            <DatePicker className="rs-form-control-wrapper" name="date" value={date} onChange={handleChange('date')}/>

                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>Είδος έργου</ControlLabel>
                            <FormControl name="kind" value={kind} onChange={handleChange('kind')}
                                         errorMessage={errors.kind.errorMessage}/>
                        </FormGroup>
                    </Col>
                    <Col xs={24} sm={12} md={8} lg={6}></Col>
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

export default WorkStep1
