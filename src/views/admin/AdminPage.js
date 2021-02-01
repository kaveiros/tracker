import React, { useState } from 'react'
import {
    Panel, Header, Breadcrumb, Content, Row, Col,
    Icon
} from 'rsuite'
import AdminCard from '../../views/Card/AdminCard'
import sector from '../../img/share-2.svg'
import users from '../../img/users.svg'

const AdminPage = () => {



    return (
        <Panel>
            <Header>
                <Breadcrumb>
                    <Breadcrumb.Item href="/">Αρχική</Breadcrumb.Item>
                    <Breadcrumb.Item href="/admin" active>Διαχείριση</Breadcrumb.Item>
                </Breadcrumb>
            </Header>
            <Content>
                <Row>
                    <Col md={6} sm={12}>
                        <AdminCard imgIcon={sector}
                            headerTitle={"Τομείς"}
                            description={"Παρουσίαση όλων των τομέων"}
                            buttonTitle={"Περισσότερα..."}
                            navigationLink={"/sector"} />
                    </Col>
                    <Col md={6} sm={12}>
                        <AdminCard
                        imgIcon={users}
                        headerTitle={"Χρήστες"}
                        description={"Παρουσίαση όλων των χρηστών"}
                        buttonTitle={"Περισσότερα..."}
                        navigationLink={"/sector"}  />
                    </Col>
                    {/* <Col md={6} sm={12}>
                        <AdminCard />
                    </Col>
                    <Col md={6} sm={12}>
                        <AdminCard />
                    </Col> */}
                </Row>

            </Content>
        </Panel>

    )
}

export default AdminPage