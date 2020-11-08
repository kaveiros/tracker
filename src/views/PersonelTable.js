import React, { useEffect, useState } from 'react'
import { Table, Column, HeaderCell, Cell } from 'rsuite-table';
import { Panel, Header, Content, Breadcrumb } from 'rsuite'
import 'rsuite-table/dist/css/rsuite-table.css'
import axios from 'axios';
import TablePagination from 'rsuite/lib/Table/TablePagination';
import { baseUrl } from '../settings/ApiSettings'

const PersonelTable = () => {

  const height = { height: '100vh' }
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


  useEffect(() => {
    const fetchPesonel = async () => {
      axios.get(baseUrl + "/personel/all/" + currentPage)
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
    <Panel>
      <Header>
        <Breadcrumb>
          <Breadcrumb.Item href="/">Αρχική</Breadcrumb.Item>
          <Breadcrumb.Item href="/materials" active>πινακας προσωπικού</Breadcrumb.Item>
        </Breadcrumb>
      </Header>
      {error != null && <div>{error.message}</div>}
      {persons && <Content>
        {/* <div style={{ height: '70vh' }}> */}
          <Table autoHeight={true} data={persons} loading={loading} >
            <Column width={100} align="center" fixed>
              <HeaderCell>Id</HeaderCell>
              <Cell dataKey="code" />
            </Column>

            <Column width={150} fixed>
              <HeaderCell>Διεύθυνση</HeaderCell>
              <Cell dataKey="address" />
            </Column>

            <Column width={100} fixed>
              <HeaderCell>Όνομα</HeaderCell>
              <Cell dataKey="name" />
            </Column>

            <Column width={100}>
              <HeaderCell>Τμήμα</HeaderCell>
              <Cell dataKey="department" />
            </Column>

            <Column width={200}>
              <HeaderCell>City</HeaderCell>
              <Cell dataKey="section" />
            </Column>
            <Column width={200} flexGrow={1}>
              <HeaderCell>Company Name</HeaderCell>
              <Cell dataKey="attribute1" />
            </Column>
          </Table>
        {/* </div> */}
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

export default PersonelTable;