import React, {useEffect, useState} from 'react'
import { Button, ControlLabel, Panel, Form, Row, Header,
    Breadcrumb, Content, Col, Grid, FormGroup, FormControl} from 'rsuite'

import {VALIDATOR_REQUIRED, validate} from '../../validator/Validators'
import TrackerMessage from "../common/TrackerMessage";
import SectorService from "../../services/SectorService";
import {showErrorNotification, showSuccessNotification} from "../common/Notifications";
import {useLocation} from "react-router-dom";
import LoaderHook from "../common/LoaderHook";

const Sector = () => {

    const initSectorState = {
        _id:'',
        sector:''
    }
    const [sectorState, setSectorState] = useState(initSectorState)
    const [sectorError, setSectorError] = useState(false)
    const [isUpdating, setIsUpdating] = useState(false)
    const [loading, setIsloading] = useState(false)
    const location = useLocation()

    const handleSectorChange = (name) => (event) => {
        setSectorError(false)
        setSectorState({...sectorState, [name]:event})
    }

    // const handleBlur = (name,...types) => (ev) =>{
    //     let result = validate(ev.target.value, types)
    //     setSectorError(result)
    // }

    const successString = "Ο τομέας αποθηκεύτηκε"
    const errorString = "Ο τομέας δεν αποθηκεύτηκε. Προσπαθήστε ξανά"
    const updateSuccessString = "Ο τομέας ενημερώθηκε."

    const handleSubmit = () => {
        setIsloading(true)
        if(isUpdating) {
         SectorService.update(sectorState).then(r => {
             setIsloading(false)
             setSectorState(initSectorState)
             showSuccessNotification(updateSuccessString)
         }).catch( err => {
             setIsloading(false)
             showErrorNotification(errorString)
         })
        }
        else {

            SectorService.save(sectorState).then((response) => {
                showSuccessNotification(successString)
            }).catch((err) => {
                    showErrorNotification(errorString)
                }
            )
        }
    }

    useEffect(() => {
        if (location.state !== undefined ) {
            initSectorState._id = location.state._id
            initSectorState.sector = location.state.sector
            setSectorState(initSectorState)
            setIsUpdating(true)
        }
    },[location])


    return (
        <Panel>
            <Header>
                <Breadcrumb>
                    <Breadcrumb.Item href="/">Αρχική</Breadcrumb.Item>
                    <Breadcrumb.Item href="/sector" active>Τομέας</Breadcrumb.Item>
                </Breadcrumb>
            </Header>
            <Content>
                <Panel shaded bordered>
                    {loading&&<LoaderHook message={"Φορτώνει..."}/>}
                    <Form fluid={true} onSubmit={handleSubmit}>
                        <Grid fluid={true}>
                            <Row className="show-grid">
                                <Col xs={24} sm={12} md={8} lg={6}></Col>
                                <Col xs={24} sm={12} md={8} lg={12}>
                                    <FormGroup>
                                        <ControlLabel>Τομέας</ControlLabel>
                                        <FormControl onChange={handleSectorChange('sector')} value={sectorState.sector}/>
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
