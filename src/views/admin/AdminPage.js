import React from 'react'
import {
    Panel, Header, Breadcrumb, Content, Col,
    FlexboxGrid
} from 'rsuite'
import AdminCard from '../card/AdminCard'
import sector from '../../img/sector.jpg'
import users from '../../img/people.jpg'

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
                <FlexboxGrid justify="space-around">
                    <FlexboxGrid.Item componentClass={Col} colspan={24} md={6}>
                        <AdminCard imgIcon={sector}
                            headerTitle={"Τομείς"}
                            description={"Παρουσίαση όλων των τομέων"}
                            buttonTitle={"Περισσότερα..."}
                            navigationLink={"/sectorTable"} />
                    </FlexboxGrid.Item>
                    <FlexboxGrid.Item componentClass={Col} colspan={24} md={6}>
                        <AdminCard
                            imgIcon={users}
                            headerTitle={"Παρατηρήσεις"}
                            description={"Επιπλέον παρατηρήσεις"}
                            buttonTitle={"Περισσότερα..."}
                            navigationLink={"/additional-info-pages"} />
                    </FlexboxGrid.Item>
                    <FlexboxGrid.Item componentClass={Col} colspan={24} md={6} smHidden>
                        <AdminCard
                            imgIcon={users}
                            headerTitle={"Χρήστες"}
                            description={"Παρουσίαση όλων των χρηστών"}
                            buttonTitle={"Περισσότερα..."}
                            navigationLink={"/sector"} />
                    </FlexboxGrid.Item>
                </FlexboxGrid>
                <FlexboxGrid justify="space-around">
                    <FlexboxGrid.Item componentClass={Col} colspan={24} md={6}>
                        <AdminCard imgIcon={sector}
                            headerTitle={"Τομείς"}
                            description={"Παρουσίαση όλων των τομέων"}
                            buttonTitle={"Περισσότερα..."}
                            navigationLink={"/sectorTable"} />
                    </FlexboxGrid.Item>
                    <FlexboxGrid.Item componentClass={Col} colspan={24} md={6}>
                        <AdminCard
                            imgIcon={users}
                            headerTitle={"Χρήστες"}
                            description={"Παρουσίαση όλων των χρηστών"}
                            buttonTitle={"Περισσότερα..."}
                            navigationLink={"/sector"} />
                    </FlexboxGrid.Item>
                    <FlexboxGrid.Item componentClass={Col} colspan={24} md={6} smHidden>
                        <AdminCard
                            imgIcon={users}
                            headerTitle={"Χρήστες"}
                            description={"Παρουσίαση όλων των χρηστών"}
                            buttonTitle={"Περισσότερα..."}
                            navigationLink={"/sector"} />
                    </FlexboxGrid.Item>
                </FlexboxGrid>


            </Content>
        </Panel>

    )
}

export default AdminPage