import React from 'react'
import {
    Panel, Header, Breadcrumb, Content, Col,
    FlexboxGrid
} from 'rsuite'
import sector from '../../img/sector1.png'
import users from '../../img/users.png'
import roles from '../../img/roles.png'
import notes from '../../img/notes.png'
import building from '../../img/building.png'
import cog from '../../img/cog.png'
import AdminCard from "../card/AdminCard";


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
                    <FlexboxGrid.Item as={Col} colspan={24} md={6}>
                        <AdminCard imgIcon={building}
                            headerTitle={"Τμήματα"}
                            description={"Παρουσίαση όλων των τμημάτων"}
                            buttonTitle={"Περισσότερα..."}
                            navigationLink={"/section-table"} />
                    </FlexboxGrid.Item>
                    <FlexboxGrid.Item as={Col} colspan={24} md={6}>
                        <AdminCard
                            imgIcon={notes}
                            headerTitle={"Παρατηρήσεις"}
                            description={"Επιπλέον παρατηρήσεις"}
                            buttonTitle={"Περισσότερα..."}
                            navigationLink={"/additional-info-pages"} />
                    </FlexboxGrid.Item>
                    <FlexboxGrid.Item as={Col} colspan={24} md={6} >
                        <AdminCard
                            imgIcon={users}
                            headerTitle={"Χρήστες"}
                            description={"Παρουσίαση όλων των χρηστών"}
                            buttonTitle={"Περισσότερα..."}
                            navigationLink={"/user-table"} />
                    </FlexboxGrid.Item>
                </FlexboxGrid>
                <FlexboxGrid justify="space-around">
                    <FlexboxGrid.Item as={Col} colspan={24} md={6}>
                        <AdminCard imgIcon={sector}
                            headerTitle={"Τομείς"}
                            description={"Παρουσίαση όλων των τομέων"}
                            buttonTitle={"Περισσότερα..."}
                            navigationLink={"/sector-table"} />
                    </FlexboxGrid.Item>
                    <FlexboxGrid.Item as={Col} colspan={24} md={6}>
                        <AdminCard
                            imgIcon={roles}
                            headerTitle={"Ρόλοι"}
                            description={"Παρουσίαση όλων των ρόλων"}
                            buttonTitle={"Περισσότερα..."}

                            navigationLink={"/roles-table"} />
                    </FlexboxGrid.Item>
                    <FlexboxGrid.Item as={Col} colspan={24} md={6} >
                        <AdminCard
                            imgIcon={cog}
                            headerTitle={"Τομείς"}
                            description={"Παρουσίαση όλων των τομέων"}
                            buttonTitle={"Περισσότερα..."}
                            navigationLink={"/sector-table"} />
                    </FlexboxGrid.Item>
                </FlexboxGrid>


            </Content>
        </Panel>

    )
}

export default AdminPage
