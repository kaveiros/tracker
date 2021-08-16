import React, { useEffect, useState } from 'react'
import {Panel, Header, Content, Breadcrumb, ButtonGroup, IconButton, Pagination, Table} from 'rsuite'
import 'rsuite-table/dist/css/rsuite-table.css'
import SectorService from '../../services/SectorService'
import TrashIcon from '@rsuite/icons/Trash';
import EditIcon from '@rsuite/icons/Edit';
import DeleteModal from "../common/DeleteModal";
import {useHistory, useLocation} from "react-router-dom";
import {showErrorNotification, showSuccessNotification} from "../common/Notifications";


const SectorTable = () => {

    const descriptionText = "Είστε σίγουροι ότι θέλετε να διαγράψετε τον τομέα;"
    const deleteErrorString = "Σφάλμα στη διαγραφή του τομέα."
    const successString = "Ο τομέας διαγράφηκε"
    const [currentPage, setCurrentPage] = useState(1)
    const [sectors, setSectors] = useState([])
    const [records, setRecords] = useState(1)
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const [pages, setPages] = useState(1)
    const [deleteModal, setDeleteModal] = useState(false)
    const [selectedRow, setSelectedRow] = useState('')
    const location = useLocation()
    const history = useHistory()


    const handleChangePage = (e) => {
        setCurrentPage(e)
    }


    const handleChangeLength = (evt) => {
        console.log(evt)
    }

    const handleRow = (eve) => {
        location.pathname = '/sector'
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
        SectorService.delete({data: selectedRow})
            .then(res => {
                setDeleteModal(false)
                showSuccessNotification(successString)
                setSectors(sectors.filter(sector => sector._id !== selectedRow._id))
            })
            .catch(renderRect => {
                setDeleteModal(false)
                showErrorNotification(deleteErrorString)
            })

    }


    const fetchSectors = async () => {
        setLoading(true)
        SectorService.search(null, currentPage)
            .then(response => {
                const data = response.data
                console.log(data)
                setSectors(data.sectors)
                setCurrentPage(currentPage)
                setPages(data.pages)
                setRecords( data.sectors.length)
                setLoading(false)
            })
            .catch(error => {
                setError(error.message)
                setLoading(false)
            })
    }

    useEffect(() => {

        fetchSectors()
    }, [currentPage])

    return (
        <Panel bodyFill={true}>
            <Header>
                <Breadcrumb>
                    <Breadcrumb.Item href="/">Αρχική</Breadcrumb.Item>
                    <Breadcrumb.Item href="/adminPage">Διαχείριση</Breadcrumb.Item>
                    <Breadcrumb.Item href="/sectorTable" active>πίνακας τομέων</Breadcrumb.Item>
                </Breadcrumb>
            </Header>
            {error != null && <div>{error.message}</div>}
            {sectors && <Content>
                <Table autoHeight={true} data={sectors} loading={loading} onRowClick={handleRow}>
                    <Table.Column width={100} align="center" fixed>
                        <Table.HeaderCell>Τομέας</Table.HeaderCell>
                        <Table.Cell dataKey="sector" />
                    </Table.Column>
                    <Table.Column width={200} align="center" fixed>
                        <Table.HeaderCell>Δημιουργήθηκε</Table.HeaderCell>
                        <Table.Cell dataKey="createdAt" />
                    </Table.Column>
                    <Table.Column width={100}>
                        <Table.HeaderCell>''</Table.HeaderCell>
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


export default SectorTable
