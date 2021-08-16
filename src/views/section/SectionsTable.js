import {Breadcrumb, ButtonGroup, Content, Header, IconButton, Pagination, Panel, Table} from "rsuite";
import DeleteModal from "../common/DeleteModal";
import React, {useEffect, useState} from "react";
import {useHistory, useLocation} from "react-router-dom";
import SectionService from "../../services/SectionService";
import {showErrorNotification, showSuccessNotification} from "../common/Notifications";
import EditIcon from "@rsuite/icons/Edit";
import TrashIcon from "@rsuite/icons/Trash";

const SectionsTable = () => {


    const descriptionText = "Είστε σίγουροι ότι θέλετε να διαγράψετε το τμήμα;"
    const deleteErrorString = "Σφάλμα στη διαγραφή του τμήματος."
    const successString = "Το τμήμα διαγράφηκε"
    const [currentPage, setCurrentPage] = useState(1)
    const [sections, setSections] = useState([])
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
        location.pathname = '/section'
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
                setSections(sections.filter(section => section._id !== selectedRow._id))
            })
            .catch(renderRect => {
                setDeleteModal(false)
                showErrorNotification(deleteErrorString)
            })

    }


    const fetchSections = async () => {
        setLoading(true)
        SectionService.search(null, currentPage)
            .then(response => {
                const data = response.data
                console.log(data)
                setSections(data.sections)
                setCurrentPage(currentPage)
                setPages(data.pages)
                setRecords( data.sections.length)
                setLoading(false)
            })
            .catch(error => {
                setError(error.message)
                setLoading(false)
            })
    }

    useEffect(() => {

        fetchSections()
    }, [currentPage])


    return(
        <Panel>
            <Header>
                <Breadcrumb>
                    <Breadcrumb.Item href="/">Αρχική</Breadcrumb.Item>
                    <Breadcrumb.Item href="/adminPage">Διαχείριση</Breadcrumb.Item>
                    <Breadcrumb.Item href="/section-table" active>πίνακας τμημάτων</Breadcrumb.Item>
                </Breadcrumb>
            </Header>
            {error != null && <div>{error.message}</div>}
            {sections && <Content>
                <Table autoHeight={true} data={sections} loading={loading} onRowClick={handleRow}>
                    <Table.Column width={100} align="center" fixed>
                        <Table.HeaderCell>Τομέας</Table.HeaderCell>
                        <Table.Cell dataKey="section" />
                    </Table.Column>
                    <Table.Column width={200} align="center" fixed>
                        <Table.HeaderCell>Δημιουργήθηκε</Table.HeaderCell>
                        <Table.Cell dataKey="createdAt" />
                    </Table.Column>
                    <Table.Column width={100}>
                        <Table.HeaderCell>''</Table.HeaderCell>
                        <Table.Cell>
                            <ButtonGroup>
                                <IconButton appearance="primary" color="cyan" icon={<EditIcon/>}  onClick={updateRecordHandler}/>
                                <IconButton appearance="primary" color="red" icon={<TrashIcon/>}  onClick={showDeleteModal}/>
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
