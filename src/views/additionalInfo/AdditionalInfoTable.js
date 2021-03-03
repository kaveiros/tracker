import React, { useEffect, useState } from 'react'
import {Panel, Header, Content, Breadcrumb, Button, Notification} from 'rsuite'
import {  Table, Column, HeaderCell, Cell } from 'rsuite-table';
import 'rsuite-table/dist/css/rsuite-table.css'
import TablePagination from 'rsuite/lib/Table/TablePagination';
import AdditionalInfoService from "../../services/AdditionalInfoService";
import FileModal from "./FileModal";

const AdditionalInfoTable = () => {

    const [infoPage, setInfoPage] = useState(1)
    const [infos, setInfos] = useState([])
    const [infoRecords, setInfoRecords] = useState(1)
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const [pages, setPages] = useState(1)
    const [modal, setShowModal] = useState(false)
    const [files, setFiles] = useState()

    const downloadErrorNotification = () => {Notification.error({description:"Σφάλμα στο κατέβασμα του αρχείου.",
        placement:"topStart", duration:4000})}

    const showModalHandler = () => {
        setShowModal(true)
    }

    const hideModalHandler = () => {
        setShowModal(false)
    }

    const handleRow = (eve) => {
        if (eve.files.length > 0) {
            setFiles(eve.files)
        }
    }

    useEffect(() => {
        const fetchPesonel = async () => {
            setLoading(true)
            AdditionalInfoService.searchAdditionalInfos(null, infoPage)
                .then(response => {
                    const data = response.data
                    setInfos(data.infos)
                    setPages(data.pages)
                    setInfoRecords(data.records)
                    console.log(data)
                    setLoading(false)
                }).catch(error => {
                setError(error.message)
                setLoading(false)
            })
        }
        fetchPesonel()
    }, [infoPage])


    const employeeChangePage = (e) => {

        setInfoPage(e)
    }

    const handleChangeLength = (evt) => {
        console.log(evt)
    }

    const downloadHandler = (name) => {
        setShowModal(false)
        let requestData = {
            "filename": name
        }
        AdditionalInfoService.downloadFile(requestData)
            .then(response=>{
                console.log(response)
                let link = document.createElement('a');

                link.href = response.data;
                link.target = "_blank"

                link.setAttribute('download', 'file.zip'); //any other extension

                document.body.appendChild(link);

                link.click();

                link.remove();
            })
            .catch((err)=>{
                downloadErrorNotification()
            })
    }


    return (
        <Panel  shaded bordered>
            <Header>
                <Breadcrumb>
                    <Breadcrumb.Item href="/">Αρχική</Breadcrumb.Item>
                    <Breadcrumb.Item href="/additional-info-pages" active>Πινακας Παρατηρήσεων</Breadcrumb.Item>
                </Breadcrumb>
            </Header>
            {error != null && <div>{error.message}</div>}
            {infos && <Content>
                <Table autoHeight={true}  data={infos} loading={loading} onRowClick={handleRow} >
                    <Column align="center" fixed>
                        <HeaderCell>Από τομέα</HeaderCell>
                        <Cell dataKey="fromSector" />
                    </Column>
                    <Column  align="center" fixed>
                        <HeaderCell>Προς τομέα</HeaderCell>
                        <Cell dataKey="toSector" />
                    </Column>

                    <Column  fixed>
                        <HeaderCell>Περιγραφή</HeaderCell>
                        <Cell dataKey="description" />
                    </Column>


                   <Column width={300}>
                            <HeaderCell>Αρχεία</HeaderCell>
                            <Cell><Button onClick={showModalHandler}>Περισσότερα...</Button></Cell>
                   </Column>

                </Table>
                <TablePagination
                    activePage={Number(infoPage)}
                    first={true}
                    last={true}
                    next={true}
                    prev={true}
                    pages={pages}
                    total={infoRecords}
                    showInfo={false}
                    boundaryLinks={true}
                    showLengthMenu={false}
                    onChangePage={employeeChangePage}
                    onChangeLength={handleChangeLength}/>
            </Content>}
            {modal && <FileModal files={files} hideModal={hideModalHandler} showModal={modal} downloadHandler={downloadHandler}/>}
        </Panel>
    )

}

export default AdditionalInfoTable;