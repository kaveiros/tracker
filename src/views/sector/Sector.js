import React, { useState } from 'react'
import { Button, ControlLabel, Message, Panel, Form, Row, Header, 
    Breadcrumb, Content, Col, Grid, FormGroup, FormControl } from 'rsuite'

import {VALIDATOR_REQUIRED, validate} from '../../validator/Validators'

const Sector = () => {

    const [sector, setSector] = useState('')
    const [sectorError, setSectorError] = useState(false)

    const handleSectorChange = (event) => {
        setSectorError(false)
        console.log(event)
        setSector(event)
    }

    const handleBlur = (name,...types) => (ev) =>{
        let result = validate(ev.target.value, types)
        setSectorError(result)
    }

    const handleSubmit = (submitEvent) => {
        console.log(submitEvent)
        console.log("Submited")
        console.log(sector)

    }

    return (<Panel>
        <Header>
            <Breadcrumb>
                <Breadcrumb.Item href="/">Αρχική</Breadcrumb.Item>
                <Breadcrumb.Item href="/sector" active>Τομέας</Breadcrumb.Item>
            </Breadcrumb>
        </Header>
        <Content>
            <Panel shaded bordered>
                <Form fluid={true}>
                    <Grid fluid={true}>
                        <Row className="show-grid">
                            <Col xs={24} sm={12} md={8} lg={6}></Col>
                            <Col xs={24} sm={12} md={8} lg={12}>
                                <FormGroup>
                                    <ControlLabel>Τομέας</ControlLabel>
                                    <FormControl onChange={handleSectorChange} onBlur={handleBlur('hasPasswordError', VALIDATOR_REQUIRED)}/> 
                                {sectorError&&<Message
                                        showIcon
                                        type="error"
                                        title="Σφάλμα"
                                        closable
                                        description="Το πεδίο απαιτείται"
                                    />}
                                    <Button type="submit" color="green">Αποθήκευση</Button>
                                </FormGroup>
                            </Col>
                            <Col xs={24} sm={12} md={8} lg={6}></Col>
                        </Row>
                    </Grid>
                </Form>
            </Panel>
        </Content>
    </Panel>

    )
}

export default Sector