import React, {useState} from 'react'
import { Button, ControlLabel, Panel, Form, Row, Header,
    Breadcrumb, Content, Col, Grid, FormGroup, FormControl, Notification } from 'rsuite'

import {VALIDATOR_REQUIRED, validate} from '../../validator/Validators'
import TrackerMessage from "../utils/TrackerMessage";
import SectorService from "../../services/SectorService";

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

    const showSuccessNotification = () => {Notification.success({description:"Ο τομέας αποθηκεύτηκε",
        placement:"topStart", duration:4000})}

    const showErrorNotification = () => {Notification.error({description:"Ο τομέας δεν αποθηκεύτηκε. Προσπαθήστε ξανά",
        placement:"topStart", duration:4000})}


    const handleSubmit = () => {

        let data = {sector:sector}
        SectorService.saveSector(data).then((response) => {
            showSuccessNotification()
        }).catch((err) => {
            console.log(err)
            //console.log(err.response.statusText)
            showErrorNotification()
            }
        )
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
                <Form fluid={true} onSubmit={handleSubmit}>
                    <Grid fluid={true}>
                        <Row className="show-grid">
                            <Col xs={24} sm={12} md={8} lg={6}></Col>
                            <Col xs={24} sm={12} md={8} lg={12}>
                                <FormGroup>
                                    <ControlLabel>Τομέας</ControlLabel>
                                    <FormControl onChange={handleSectorChange} onBlur={handleBlur('hasPasswordError', VALIDATOR_REQUIRED)}/>
                                {sectorError&&<TrackerMessage
                                    type="error"
                                    description="Το πεδίο απαιτείται."
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