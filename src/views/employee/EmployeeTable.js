import React, { useEffect, useState } from 'react'
import {Panel, Header, Content, Breadcrumb, Button, ButtonGroup, Notification, Pagination} from 'rsuite'
import {Table, HeaderCell, Cell} from 'rsuite-table';
import 'rsuite-table/dist/css/rsuite-table.css'
import EmployeeService from "../../services/EmployeeService";
import DeleteModal from "../common/DeleteModal";
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
        const fetchPesonnel = async () => {
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
        fetchPesonnel()
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
                    <Table.Column width={120} align="center" fixed>
                        <HeaderCell>Αύξων αριθμός</HeaderCell>
                        <Cell dataKey="aa" />
                    </Table.Column>
                    <Table.Column width={100} align="center" fixed>
                        <HeaderCell>Κωδικός</HeaderCell>
                        <Cell dataKey="code" />
                    </Table.Column>

                    <Table.Column width={150} fixed>
                        <HeaderCell>Διεύθυνση</HeaderCell>
                        <Cell dataKey="address" />
                    </Table.Column>

                    <Table.Column width={200} fixed>
                        <HeaderCell>Όνομα</HeaderCell>
                        <Cell dataKey="name" />
                    </Table.Column>

                    <Table.Column width={100}>
                        <HeaderCell>Τμήμα</HeaderCell>
                        <Cell dataKey="section" />
                    </Table.Column>

                    <Table.Column width={200}>
                        <HeaderCell>Τομέας</HeaderCell>
                        <Cell dataKey="sector" />
                    </Table.Column>
                    <Table.Column width={100}>
                        <HeaderCell>Ειδικότητα</HeaderCell>
                        <Cell dataKey="expertise" />
                    </Table.Column>
                    <Table.Column width={100}>
                        <HeaderCell>Ιδιότητα</HeaderCell>
                        <Cell dataKey="property" />
                    </Table.Column>
                    <Table.Column width={100}>
                        <HeaderCell>Εξειδίκευση</HeaderCell>
                        <Cell dataKey="specialisedIn" />
                    </Table.Column>
                    <Table.Column width={100}>
                        <HeaderCell>Υπερωρία</HeaderCell>
                        <Cell dataKey="costOvertime" />
                    </Table.Column>
                    <Table.Column width={100}>
                        <HeaderCell>Κόστος/μέρα</HeaderCell>
                        <Cell dataKey="costPerDay" />
                    </Table.Column>

                    <Table.Column width={300}>
                        <HeaderCell>Περισσότερα</HeaderCell>
                        <Cell>
                            <ButtonGroup>
                                <Button color="cyan" onClick={updateRecordHandler}>Τροποποίηση</Button>
                                <Button color="red" onClick={showDeleteModal}>Διαγραφή</Button>
                            </ButtonGroup>
                        </Cell>
                    </Table.Column>
                </Table>
                <Pagination
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

