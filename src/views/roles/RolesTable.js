import {Breadcrumb, ButtonGroup, Content, Header, IconButton, Pagination, Panel, Table} from "rsuite";
import React, {useEffect, useState} from "react";
import RoleService from "../../services/RoleService";
import {useHistory, useLocation} from "react-router-dom";
import SectionService from "../../services/SectionService";
import {showErrorNotification, showSuccessNotification} from "../common/Notifications";
import DeleteModal from "../common/DeleteModal";
import EditIcon from "@rsuite/icons/Edit";
import TrashIcon from "@rsuite/icons/Trash";

const SectionsTable = () => {


    const descriptionText = "Είστε σίγουροι ότι θέλετε να διαγράψετε το ρόλο;"
    const deleteErrorString = "Σφάλμα στη διαγραφή του ρόλου."
    const successString = "Ο ρόλος διαγράφηκε"
    const [currentPage, setCurrentPage] = useState(1)
    const [roles, setRoles] = useState([])
    const [records, setRecords] = useState(1)
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const [pages, setPages] = useState(1)
    const [deleteModal, setDeleteModal] = useState(false)
    const [selectedRow, setSelectedRow] = useState('')
    const location = useLocation()
    const history = useHistory()


    const handleChangePage = (pageEvent) => {
        setCurrentPage(pageEvent)
    }


    const handleChangeLength = (evt) => {
        console.log(evt)
    }

    const handleRow = (eve) => {
        location.pathname = '/role'
        location.state = eve
        setSelectedRow(eve)
    }

    /**
     * As handle row and updateRecordHandler
     * happen simultaneously we introduce
     * timeout.
     */
    const updateRecordHandler = () => {
        setTimeout(() => {
            history.push(location)
        }, 700)

    }

    const showDeleteModal = () => {
        setDeleteModal(true)
    }

    const hideDeleteModal = () => {
        setDeleteModal(false)
    }

    const deleteRecordHandler = () => {
        SectionService.delete({data: selectedRow})
            .then(res => {
                setDeleteModal(false)
                showSuccessNotification(successString)
                setRoles(roles.filter(section => section._id !== selectedRow._id))
            })
            .catch(renderRect => {
                setDeleteModal(false)
                showErrorNotification(deleteErrorString)
            })

    }


    useEffect(()=>{
        fetchRoles();
    },[currentPage])

    const fetchRoles = async () =>{
        setLoading(true)
        RoleService.search(null, currentPage).then(response=>{
            const data = response.data
            console.log("Role service -> ")
            console.log(response)
            setRoles(data.roles)
            setPages(data.pages)
            setRecords(data.roles.length)
            setLoading(false)

        }).catch(exp=> {

            setError(error.message)
            setLoading(false)
            console.log("exc ->", exp)
        })
    }

    return(
        <Panel>
            <Header>
                <Breadcrumb>
                    <Breadcrumb.Item href="/">Αρχική</Breadcrumb.Item>
                    <Breadcrumb.Item href="/adminPage">Διαχείριση</Breadcrumb.Item>
                    <Breadcrumb.Item href="/roles-table" active>πίνακας ρόλων</Breadcrumb.Item>
                </Breadcrumb>
            </Header>
            {error != null && <div>{error.message}</div>}
            {roles && <Content>
                <Table autoHeight={true} data={roles} loading={loading} onRowClick={handleRow}>
                    <Table.Column width={200} align="center" fixed>
                        <Table.HeaderCell>Ρόλος</Table.HeaderCell>
                        <Table.Cell dataKey="name" />
                    </Table.Column>
                    <Table.Column width={200} align="center" fixed>
                        <Table.HeaderCell>ID</Table.HeaderCell>
                        <Table.Cell dataKey="_id" />
                    </Table.Column>
                    <Table.Column width={100}>
                        <Table.HeaderCell/>
                        <Table.Cell>
                            <ButtonGroup>
                                <IconButton icon={<EditIcon/>} appearance="primary" color="cyan" onClick={updateRecordHandler}/>
                                <IconButton icon={<TrashIcon/>} appearance="primary" color="red" onClick={showDeleteModal}/>
                            </ButtonGroup>
                        </Table.Cell>
                    </Table.Column>
                </Table>
                <Pagination
                    activePage={Number(currentPage)}
                    first={true}
                    last={true}
                    next={true}
                    prev={true}
                    pages={pages}
                    total={records}
                    boundaryLinks={true}
                    onChangePage={handleChangePage}
                    onChangeLimit={handleChangeLength} />
            </Content>}
            {deleteModal && <DeleteModal showDeleteModal={deleteModal} hideDeleteModal = {hideDeleteModal} deleteRecordHandler = {deleteRecordHandler}
                                         descriptionText = {descriptionText}/>}

        </Panel>
    )

}

export default SectionsTable
