import React, { useEffect, useState } from 'react'
import {Panel, Header, Content, Breadcrumb, Button, ButtonGroup, Notification, Icon, IconButton} from 'rsuite'
import {Table, Column, HeaderCell, Cell} from 'rsuite-table';
import 'rsuite-table/dist/css/rsuite-table.css'
import TablePagination from 'rsuite/lib/Table/TablePagination';
import DeleteModal from "../common/DeleteModal";
import {useHistory, useLocation} from "react-router-dom";
import {showErrorNotification, showSuccessNotification} from "../common/Notifications";
import WarehouseService from '../../services/WarehouseService'

const WareHouseTable = () => {

    const descriptionText = "Είστε σίγουροι ότι θέλετε να διαγράψετε το υλικό;"
    const deleteErrorString = "Σφάλμα στη διαγραφή του υλικού."
    const successString = "To υλικό διαγράφηκε"
    const [warehousePage, setWarehousePage] = useState(1)
    const [materials, setMaterials] = useState()
    const [materialRecords, setMaterialRecords] = useState(1)
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


    const deleteRecordHandler = () => {
        console.log(rowData)
        WarehouseService.delete({data:rowData})
            .then(response=>{
                console.log(response)
                setDeleteModal(false)
                showSuccessNotification(successString)
                setMaterials(materials.filter(material => material._id !== rowData._id))
            })
            .catch(err => {
                console.log(err)
                setDeleteModal(false)
                showErrorNotification(deleteErrorString)
            })
    }

    const updateRecordHandler = () => {

        setTimeout(() => {
            history.push(location)
        }, 700)

    }

    const dataChange = () => {
        console.log("Data changed....")
    }

    const handleRow = (eve) => {
        location.pathname = "/warehouse"
        location.state = eve
        setRowData(eve)
    }


    useEffect(() => {
        const fetchMaterial = async () => {
            setLoading(true)
            WarehouseService.search(null, warehousePage)
                .then(response => {
                    console.log(response)
                    const data = response.data
                    setMaterials(data.materials)
                    setPages(data.pages)
                    setMaterialRecords(data.records)
                    console.log(data)
                    setLoading(false)
                }).catch(error => {
                setError(error.message)
                setLoading(false)
            })
        }
        fetchMaterial()
    }, [warehousePage])


    const employeeChangePage = (e) => {

        setWarehousePage(e)
        console.log(e)
    }

    const handleChangeLength = (evt) => {
        console.log(evt)
    }

    return (
        <Panel bodyFill={true} shaded bordered>
            <Header>
                <Breadcrumb>
                    <Breadcrumb.Item href="/">Αρχική</Breadcrumb.Item>
                    <Breadcrumb.Item href="/materialsTab" active>Πίνακας Υλικών</Breadcrumb.Item>
                </Breadcrumb>
            </Header>
            {error != null && <div>{error.message}</div>}
            {materials && <Content>
                <Table autoHeight={true} data={materials} loading={loading} onRowClick={handleRow} onDataUpdated={dataChange}>
                    <Column width={120} align="center" fixed>
                        <HeaderCell>Αύξων αριθμός</HeaderCell>
                        <Cell  dataKey="aa"/>
                    </Column>
                    <Column width={100} align="center" fixed>
                        <HeaderCell>Κωδικός</HeaderCell>
                        <Cell dataKey="code" />
                    </Column>

                    <Column width={150} fixed>
                        <HeaderCell>Περιγραφή</HeaderCell>
                        <Cell dataKey="description" />
                    </Column>

                    <Column width={200} fixed>
                        <HeaderCell>Ποσότητα</HeaderCell>
                        <Cell dataKey="quantity" />
                    </Column>

                    <Column width={100}>
                        <HeaderCell>Τμήμα</HeaderCell>
                        <Cell dataKey="section" />
                    </Column>

                    <Column width={200}>
                        <HeaderCell>Τομέας</HeaderCell>
                        <Cell dataKey="sector" />
                    </Column>
                    <Column width={100}>
                        <HeaderCell>Παραλαβών</HeaderCell>
                        <Cell dataKey="nameOfPersonAccepted" />
                    </Column>

                    <Column width={300}>
                        <HeaderCell>Περισσότερα</HeaderCell>
                        <Cell>
                            <ButtonGroup>
                                <IconButton color="cyan" icon={<Icon icon="edit"/>} onClick={updateRecordHandler}/>
                                <IconButton color="red" icon={<Icon icon="trash" />} onClick={showDeleteModal}/>
                            </ButtonGroup>
                        </Cell>
                    </Column>
                </Table>
                <TablePagination
                    activePage={Number(warehousePage)}
                    first={true}
                    last={true}
                    next={true}
                    prev={true}
                    pages={pages}
                    total={materialRecords}
                    showInfo={false}
                    boundaryLinks={true}
                    showLengthMenu={false}
                    onChangePage={employeeChangePage}
                    onChangeLength={handleChangeLength}/>
            </Content>}
            {deleteModal && <DeleteModal showDeleteModal={deleteModal} hideDeleteModal = {hideDeleteModal} deleteRecordHandler = {deleteRecordHandler}
                descriptionText = {descriptionText}/>}
        </Panel>
    )

}

export default WareHouseTable;

