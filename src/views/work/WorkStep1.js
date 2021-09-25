import React from 'react'
import {
    Form, Row, Col, DatePicker, Button, Grid, ButtonToolbar
} from 'rsuite'
import PageNextIcon from '@rsuite/icons/PageNext';



const WorkStep1 = (props) => {

    const {aa, code, date, kind, handleChange, handleStep, errors, hasValidationError} = props

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
                            <Form.ControlLabel>Ημερομηνία</Form.ControlLabel>
                            <DatePicker className="rs-form-control-wrapper" name="date" value={date} onChange={handleChange('date')}/>

                        </Form.Group>
                        <Form.Group>
                            <Form.ControlLabel>Είδος έργου</Form.ControlLabel>
                            <Form.Control name="kind" value={kind} onChange={handleChange('kind')}
                                         errorMessage={errors.kind.errorMessage}/>
                        </Form.Group>
                    </Col>
                    <Col xs={24} sm={12} md={8} lg={6}>''</Col>
                </Row>
                <Row className="show-grid">
                    <Col md={4} mdOffset={20}>
                        <ButtonToolbar>
                            <Button appearance="primary" color="green" disabled={hasValidationError}
                                    onClick={handleStep(2)}>Επόμενο<PageNextIcon/></Button>
                        </ButtonToolbar>                    </Col>
                </Row>
            </Grid>
        </Form>
    )

}

export default WorkStep1
