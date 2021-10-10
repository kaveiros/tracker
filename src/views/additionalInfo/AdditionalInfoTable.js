import React, { useEffect, useState } from 'react'
import {Panel, Header, Content, Breadcrumb, Button, Pagination, Table, IconButton} from 'rsuite'
import 'rsuite-table/dist/css/rsuite-table.css'
import AdditionalInfoService from "../../services/AdditionalInfoService";
import FileModal from "./FileModal";
import {showErrorNotification} from "../common/Notifications";
import MoreIcon from '@rsuite/icons/More';


const AdditionalInfoTable = () => {

    const [infoPage, setInfoPage] = useState(1)
    const [infos, setInfos] = useState([])
    const [infoRecords, setInfoRecords] = useState(1)
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const [pages, setPages] = useState(1)
    const [modal, setShowModal] = useState(false)
    const [files, setFiles] = useState()

    const DOWNLOAD_ERROR = "Σφάλμα στο κατέβασμα του αρχείου."

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
                showErrorNotification(DOWNLOAD_ERROR)
            })
    }


    return (
        <Panel  shaded bordered>
            <Header>
                <Breadcrumb>
                    <Breadcrumb.Item href="/">Αρχική</Breadcrumb.Item>
                    <Breadcrumb.Item href="/adminPage">Διαχείριση</Breadcrumb.Item>
                    <Breadcrumb.Item href="/additional-info-pages" active>Πινακας Παρατηρήσεων</Breadcrumb.Item>
                </Breadcrumb>
            </Header>
            {error != null && <div>{error.message}</div>}
            {infos && <Content>
                <Table autoHeight={true}  data={infos} loading={loading} onRowClick={handleRow} >
                    <Table.Column align="center" fixed>
                        <Table.HeaderCell>Από τομέα</Table.HeaderCell>
                        <Table.Cell dataKey="fromSector" />
                    </Table.Column>
                    <Table.Column  align="center" fixed>
                        <Table.HeaderCell>Προς τομέα</Table.HeaderCell>
                        <Table.Cell dataKey="toSector" />
                    </Table.Column>

                    <Table.Column  fixed>
                        <Table.HeaderCell>Περιγραφή</Table.HeaderCell>
                        <Table.Cell dataKey="description" />
                    </Table.Column>
                   <Table.Column width={300}>
                            <Table.HeaderCell>Αρχεία</Table.HeaderCell>
                            <Table.Cell><IconButton icon={<MoreIcon/>} appearance="primary" color="green" disabled={true} onClick={showModalHandler}/></Table.Cell>
                   </Table.Column>

                </Table>
                <Pagination
                    activePage={Number(infoPage)}
                    first={true}
                    last={true}
                    next={true}
                    prev={true}
                    pages={pages}
                    total={infoRecords}
                    boundaryLinks={true}
                    onChangePage={employeeChangePage}
                    onChangeLimit={handleChangeLength}/>
            </Content>}
            {modal && <FileModal files={files} hideModal={hideModalHandler} showModal={modal} downloadHandler={downloadHandler}/>}
        </Panel>
    )

}

export default AdditionalInfoTable;
