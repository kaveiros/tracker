import React, { useEffect, useState } from 'react'
import {Panel, Header, Content, Breadcrumb, Button, ButtonGroup, Divider, Notification} from 'rsuite'
import {  Table, Column, HeaderCell, Cell } from 'rsuite-table';
import 'rsuite-table/dist/css/rsuite-table.css'
import TablePagination from 'rsuite/lib/Table/TablePagination';
import EmployeeService from "../../services/EmployeeService";
import DeleteModal from "../../common/DeleteModal";
import {useHistory, useLocation} from "react-router-dom";

const EmployeeTable = () => {

    const [employeePage, setEmployeePage] = useState(1)
    const [employees, setEmployees] = useState([])
    const [employeeRecords, setEmployeeRecords] = useState(1)
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

    const descriptionText = "Είστε σίγουροι ότι θέλετε να διαγράψετε τον εργαζόμενο;"

    const employeeErrorNotification = () => {Notification.error({description:"Σφάλμα στη διαγραφή του εργαζομένου.",
        placement:"topStart", duration:4000})}

    const employeeSuccessNotification = () => {Notification.success({description:"Ο εργαζόμενος διαγράφηκε.",
        placement:"topStart", duration:4000})}

    const deleteRecordHandler = () => {
        console.log(rowData)
        EmployeeService.deleteEmployee({data:rowData})
            .then(response=>{
                console.log(response)
                setDeleteModal(false)
                employeeSuccessNotification()
            })
            .catch(err => {
                console.log(err)
                setDeleteModal(false)
                employeeErrorNotification()
            })
    }

    const updateRecordHandler = () => {

        setTimeout(() => {
            history.push(location)
        }, 700)

    }

    const handleRow = (eve) => {
        console.log(eve)
        location.pathname = "/employeetab"
        location.state = eve
        setRowData(eve)
    }


    useEffect(() => {
        const fetchPesonel = async () => {
            setLoading(true)
            EmployeeService.searchEmployees(null, employeePage)
                .then(response => {
                    const data = response.data
                    setEmployees(data.employees)
                    setPages(data.pages)
                    setEmployeeRecords(data.records)
                    console.log(data)
                    setLoading(false)
                }).catch(error => {
                setError(error.message)
                setLoading(false)
            })
        }
        fetchPesonel()
    }, [employeePage])


    const employeeChangePage = (e) => {

        setEmployeePage(e)
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
                    <Breadcrumb.Item href="/materials" active>πινακας Εργαζομένων</Breadcrumb.Item>
                </Breadcrumb>
            </Header>
            {error != null && <div>{error.message}</div>}
            {employees && <Content>
                <Table autoHeight={true} data={employees} loading={loading} onRowClick={handleRow}>
                    <Column width={120} align="center" fixed>
                        <HeaderCell>Αύξων αριθμός</HeaderCell>
                        <Cell dataKey="aa" />
                    </Column>
                    <Column width={100} align="center" fixed>
                        <HeaderCell>Κωδικός</HeaderCell>
                        <Cell dataKey="code" />
                    </Column>

                    <Column width={150} fixed>
                        <HeaderCell>Διεύθυνση</HeaderCell>
                        <Cell dataKey="address" />
                    </Column>

                    <Column width={200} fixed>
                        <HeaderCell>Όνομα</HeaderCell>
                        <Cell dataKey="name" />
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
                        <HeaderCell>Ειδικότητα</HeaderCell>
                        <Cell dataKey="expertise" />
                    </Column>
                    <Column width={100}>
                        <HeaderCell>Ιδιότητα</HeaderCell>
                        <Cell dataKey="property" />
                    </Column>
                    <Column width={100}>
                        <HeaderCell>Εξειδίκευση</HeaderCell>
                        <Cell dataKey="specialisedIn" />
                    </Column>
                    <Column width={100}>
                        <HeaderCell>Υπερωρία</HeaderCell>
                        <Cell dataKey="costOvertime" />
                    </Column>
                    <Column width={100}>
                        <HeaderCell>Κόστος/μέρα</HeaderCell>
                        <Cell dataKey="costPerDay" />
                    </Column>

                    <Column width={200}>
                        <HeaderCell>Περισσότερα</HeaderCell>
                        <Cell>
                            <ButtonGroup>
                                <Button color="cyan" onClick={updateRecordHandler}>Ενημέρωση</Button>
                                <Button color="red" onClick={showDeleteModal}>Διαγραφή</Button>
                            </ButtonGroup>
                        </Cell>
                    </Column>
                </Table>
                <TablePagination
                    activePage={Number(employeePage)}
                    first={true}
                    last={true}
                    next={true}
                    prev={true}
                    pages={pages}
                    total={employeeRecords}
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

export default EmployeeTable;