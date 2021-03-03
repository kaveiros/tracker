import React, { useEffect, useState } from 'react'
import { Table, Column, HeaderCell, Cell } from 'rsuite-table';
import { Panel, Header, Content, Breadcrumb } from 'rsuite'
import 'rsuite-table/dist/css/rsuite-table.css'
import TablePagination from 'rsuite/lib/Table/TablePagination';
import EmployeeService from "../../services/EmployeeService";

const PersonnelTable = () => {

  const [currentPage, setCurrentPage] = useState(1)
  const [persons, setPersons] = useState([])
  const [records, setRecords] = useState(1)
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [pages, setPages] = useState(1)

  const handleChangePage = (e) => {

    setCurrentPage(e)
    console.log(e)
  }

  const handleChangeLength = (evt) => {
    console.log(evt)
  }

  const handleRow = (eve) => {
    console.log(eve)
  } 


  useEffect(() => {
    const fetchPesonel = async () => {
        EmployeeService.searchEmployees(null, currentPage)

        //axios.get(baseUrl + "/personel/all/" + currentPage)
        .then(response => {
          const data = response.data
          setPersons(data.persons)
          setCurrentPage(data.currentPage)
          setPages(data.pages)
          setRecords(data.records)
          console.log(data)

        }).catch(error => {
          setError(error.message)
        })
    }
    fetchPesonel()
  }, [currentPage])


  return (
    <Panel bodyFill={true}>
      <Header>
        <Breadcrumb>
          <Breadcrumb.Item href="/">Αρχική</Breadcrumb.Item>
          <Breadcrumb.Item href="/materials" active>πινακας προσωπικού</Breadcrumb.Item>
        </Breadcrumb>
      </Header>
      {error != null && <div>{error.message}</div>}
      {persons && <Content>
          <Table autoHeight={true} data={persons} loading={loading} onRowClick={handleRow}>
            <Column width={100} align="center" fixed>
              <Table.HeaderCell>Id</Table.HeaderCell>
              <Table.Cell dataKey="code" />
            </Column>

            <Column width={150} fixed>
              <Table.HeaderCell>Διεύθυνση</Table.HeaderCell>
              <Table.Cell dataKey="address" />
            </Column>

            <Column width={100} fixed>
              <Table.HeaderCell>Όνομα</Table.HeaderCell>
              <Table.Cell dataKey="name" />
            </Column>

            <Column width={100}>
              <Table.HeaderCell>Τμήμα</Table.HeaderCell>
              <Table.Cell dataKey="department" />
            </Column>

            <Column width={200}>
              <Table.HeaderCell>City</Table.HeaderCell>
              <Table.Cell dataKey="section" />
            </Column>
            <Column width={200} flexGrow={1}>
              <Table.HeaderCell>Company Name</Table.HeaderCell>
              <Table.Cell dataKey="attribute1" />
            </Column>
          </Table>
        <TablePagination
          activePage={Number(currentPage)}
          first={true}
          last={true}
          next={true}
          prev={true}
          pages={pages}
          total={records}
          showInfo={false}
          boundaryLinks={true}
          showLengthMenu={false}
          onChangePage={handleChangePage}
          onChangeLength={handleChangeLength}/>
      </Content>}
    </Panel>
  )

}

export default PersonnelTable;