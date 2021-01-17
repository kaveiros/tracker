import React, { useState } from 'react'
import { Button, ControlLabel, Input, Panel, Form, Row, Header, Breadcrumb, Content, Col } from 'rsuite'

const Sector = () => {

    const [sector, setSector] = useState('')

    const handleSectorChange = (event) => {
        console.log(event)
        setSector(event)
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
            <Form onSubmit={handleSubmit}>
                <Row>
                    <Col xs={24} sm={24} md={8} lg={6}>
                    </Col>

                    <Col xs={24} sm={24} md={8} lg={6}>
                        <ControlLabel>Τομέας</ControlLabel>
                        <Input onChange={handleSectorChange} name="sector" />
                        <Button type="submit">Αποθήκευση</Button>
                    </Col>
                    <Col xs={24} sm={24} md={8} lg={6}>
                    </Col>
                </Row>

            </Form>
        </Content>
    </Panel>

    )
}

export default Sector