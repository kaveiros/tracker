import React, { useEffect, useState } from 'react'
import { Table, Column, HeaderCell, Cell } from 'rsuite-table';
import { Panel, Header, Content, Breadcrumb, Button } from 'rsuite'
import 'rsuite-table/dist/css/rsuite-table.css'
import axios from 'axios';
import TablePagination from 'rsuite/lib/Table/TablePagination';
import sectorService from '../../services/SectorService'

const SectorTable = () => {

    const [currentPage, setCurrentPage] = useState(1)
    const [sectors, setSectors] = useState([])
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


    const fetchSector = async () => {
        sectorService.getAllSectors(currentPage)
            .then(response => {
                const data = response.data
                console.log(data)
                setSectors(data.sectors)
                setCurrentPage(data.currentPage)
                setPages(data.pages)
                setRecords(data.records)

            })
            .catch(error => {
                setError(error.message)
            })
    }

    useEffect(() => {



        fetchSector()
    }, [currentPage])

    return (
        <Panel bodyFill={true}>
            <Header>
                <Breadcrumb>
                    <Breadcrumb.Item href="/">Αρχική</Breadcrumb.Item>
                    <Breadcrumb.Item href="/sectorTable" active>πίνακας τομέων</Breadcrumb.Item>
                </Breadcrumb>
            </Header>
            {error != null && <div>{error.message}</div>}
            {sectors && <Content>
                <Table autoHeight={true} data={sectors} loading={loading}>
                    <Column width={100} align="center" fixed>
                        <HeaderCell>Τομέας</HeaderCell>
                        <Cell dataKey="sector" />
                    </Column>
                    <Column width={100} align="center" fixed>
                        <HeaderCell></HeaderCell>
                        <Cell dataKey="sector" />
                    </Column>
                    <Column width={100} align="center" fixed>
                        <HeaderCell></HeaderCell>
                        <Cell  dataKey="id"><Button onClick={handleRow}>edit</Button></Cell>
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
                    onChangeLength={handleChangeLength} />
            </Content>}
        </Panel>
    )

}

export default SectorTable