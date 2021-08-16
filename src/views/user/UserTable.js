import {
    Breadcrumb, Button, ButtonGroup, Content, Header, Panel, TagGroup, Tag,
    Pagination, Table, Col, toaster, IconButton, ButtonToolbar
} from "rsuite";
import DeleteModal from "../common/DeleteModal";
import React, {useEffect, useState} from "react";
import {useHistory, useLocation} from "react-router-dom";
import UserService from "../../services/UserService";
import Row from "rsuite-table/es/Row";
import {showErrorNotification, showSuccessNotification} from "../common/Notifications";
import EditIcon from "@rsuite/icons/Edit";
import TrashIcon from "@rsuite/icons/Trash";

const UserTable = () => {

    const [userPage, setUserPage] = useState(1)
    const [users, setUsers] = useState([])
    const [userRecords, setUserRecords] = useState(1)
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const [pages, setPages] = useState(1)
    const [deleteModal, setDeleteModal] = useState(false)
    const [rowData, setRowData] = useState()
    const location = useLocation()
    const history = useHistory()

    const showDeleteModal = () => {
        setDeleteModal(true)
    }

    const hideDeleteModal = () => {
        setDeleteModal(false)
    }

    const descriptionText = "Είστε σίγουροι ότι θέλετε να διαγράψετε το χρήστη;"


    const deleteUserRecordHandler = () => {
        console.log(rowData)
        UserService.delete({data:rowData})
            .then(response=>{
                console.log(response)
                setDeleteModal(false)
                toaster.push(showSuccessNotification("Ο χρήστης διαγράφηκε."), {placement:"topStart"})
            })
            .catch(err => {
                console.log(err)
                setDeleteModal(false)
                toaster.push(showErrorNotification("Σφάλμα στη διαγραφή του χρήστη."), {placement:"topStart"})
            })
    }

    const updateRecordHandler = () => {

        setTimeout(() => {
            history.push(location)
        }, 700)

    }

    const handleUserRow = (eve) => {
        console.log(eve)
        location.pathname = "/tab"
        location.state = eve
        setRowData(eve)
    }


    useEffect(() => {
        const fetchUsers = async () => {
            setLoading(true)
            UserService.getAll()
                .then(response => {
                    const data = response.data
                    setUsers(data)
                    setPages(data.pages)
                    setUserRecords(data.length)
                    console.log(data)
                    setLoading(false)
                }).catch(error => {
                setError(error.message)
                setLoading(false)
            })
        }
        fetchUsers()
    }, [userPage])


    const employeeChangePage = (e) => {

        setUserPage(e)
        console.log(e)
    }

    const handleChangeLength = (evt) => {
        console.log(evt)
    }

    /**
     * Custom Table.Cell for roles
     */
    const  RoleCell = ({rowData, dataKey, ...props}) => {
        return (<Table.Cell {...props} >
            <TagGroup>
            {rowData['roles'].map((role, i)=> <Tag  key={i}>{role.name}</Tag>)}
            </TagGroup>
        </Table.Cell>)
    }


    return(
        <Panel bodyFill={true} shaded bordered>
            <Header>
                <Breadcrumb>
                    <Breadcrumb.Item href="/">Αρχική</Breadcrumb.Item>
                    <Breadcrumb.Item href="/adminPage">Διαχείριση</Breadcrumb.Item>
                    <Breadcrumb.Item href="/users-table" active>πίνακας χρηστών</Breadcrumb.Item>
                </Breadcrumb>
            </Header>
            {error != null && <div>{error.message}</div>}
            {users && <Content>
                <Row>
                    <Col xs={12} md={12} lg={12} xsPush={12} mdPush={12} lgPush={12}>
                        <Button href="/user" appearance="link">Νέος χρήστης</Button>
                    </Col>
                </Row>
                <Table autoHeight={true} data={users} loading={loading} onRowClick={handleUserRow} rowHeight={90}>
                    <Table.Column width={120} align="center" fixed>
                        <Table.HeaderCell>id</Table.HeaderCell>
                        <Table.Cell dataKey="_id" />
                    </Table.Column>
                    <Table.Column width={100} align="center" fixed>
                        <Table.HeaderCell>χρήστης</Table.HeaderCell>
                        <Table.Cell dataKey="username" />
                    </Table.Column>

                    <Table.Column width={150} fixed>
                        <Table.HeaderCell>email</Table.HeaderCell>
                        <Table.Cell dataKey="email" />
                    </Table.Column>
                    <Table.Column width={150} fixed>
                        <Table.HeaderCell>ρόλοι</Table.HeaderCell>
                        <RoleCell dataKey="roles" />
                    </Table.Column>
                    <Table.Column width={300}>
                        <Table.HeaderCell>Περισσότερα</Table.HeaderCell>
                        <Table.Cell>
                            <ButtonToolbar>
                                <IconButton appearance="primary" color="cyan" onClick={updateRecordHandler} icon={<EditIcon/>}/>
                                <IconButton appearance="primary" color="red" onClick={showDeleteModal} icon={<TrashIcon/>}/>
                            </ButtonToolbar>
                        </Table.Cell>
                    </Table.Column>
                </Table>
                <Pagination
                    activePage={Number(userPage)}
                    first={true}
                    last={true}
                    next={true}
                    prev={true}
                    pages={pages}
                    total={userRecords}
                    boundaryLinks={true}
                    onChangePage={employeeChangePage}
                    onChangeLimit={handleChangeLength}/>
            </Content>}
            {deleteModal && <DeleteModal showDeleteModal={deleteModal} hideDeleteModal = {hideDeleteModal} deleteRecordHandler = {deleteUserRecordHandler}
                                         descriptionText = {descriptionText}/>}
        </Panel>
    )
}

export default UserTable
