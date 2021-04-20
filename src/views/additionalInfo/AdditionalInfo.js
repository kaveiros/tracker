import React, {useEffect, useRef, useState} from 'react'
import {Button, Input, Panel, Modal, SelectPicker, ControlLabel, Divider, List, Loader, Notification} from 'rsuite'
import AdditionalInfoService from "../../services/AdditionalInfoService";
import SectorService from "../../services/SectorService";
import {sectorErrorNotification} from "../common/Notifications";


const AdditionalInfo = ({showModal, hideModal, uniqueVersion}) => {

    const [fromSectorInitialData, setFromSectorInitialData] = useState()
    const [toSectorInitialData, setToSectorInitialData] = useState()
    const [isFromSectorCleaned, setFromSectorCleaned] = useState(false)
    const [fromSector, setFromSector] = useState()
    const [toSector, setToSector] = useState()
    const [filesInfo, setFilesInfo] = useState([])
    const [selectedFiles, setSelectedFiles] = useState([])
    const [comments,setComments] = useState()
    const [loading, setIsLoading] = useState(false)

    useEffect(()=>{

        setIsLoading(true)
        SectorService.getAll().then((resp)=>{
            let sectors = []
            for (let sec of resp.data){
                let secData = {
                    "label": sec.sector,
                    "value": sec.sector
                }
                sectors.push(secData)
            }
            setFromSectorInitialData(sectors)
            setToSectorInitialData(sectors)
            setIsLoading(false)
        }).catch((err)=>{
            setIsLoading(false)
            sectorErrorNotification()
            console.log(err)

        })

    },[isFromSectorCleaned])



    let _fileInfos = []
    const inputFile = useRef(null)

    const handleFormSector = (e) => {
        setFromSector(e)
        let filteredResults = fromSectorInitialData.filter(function (sector){
           return sector.label !== e

        })
        setToSectorInitialData(filteredResults)
    }

    const handleToSector = (e) => {
        setToSector(e)
    }

    const handleComments = (e) => {
        setComments(e)
    }

    const handleChange = (evt) => {
        let files = Array.from(evt.target.files)
        setSelectedFiles(files)
        for (let f of files) {
            _fileInfos.push({"name":f.name})
        }
        setFilesInfo(_fileInfos)
    }

    const handleFromSectorClean = () => {
        // eslint-disable-next-line no-self-compare
        setFromSectorCleaned(isFromSectorCleaned !== isFromSectorCleaned)
    }

    const handleInput = () => {
        inputFile.current.click()
    }

    const showSuccessNotification = () => {Notification.success({description:"Οι παρατηρήσεις αποθηκεύτηκαν",
        placement:"topStart", duration:4000})}

    const showErrorNotification = () => {Notification.error({description:"Οι παρατηρήσεις δεν αποθηκεύτηκαν. Προσπαθήστε ξανά",
        placement:"topStart", duration:4000})}

    const handleUpload = () => {
        setIsLoading(true)
        let submittingForm = new FormData()
        submittingForm.append("fromSector", fromSector)
        submittingForm.append("toSector", toSector)
        submittingForm.append("description", comments)
        for (let i= 0; i < selectedFiles.length; i++) {
            submittingForm.append('documents', selectedFiles[i])
            //files.push(filesList[i])
        }
        submittingForm.append('uniqueVersion', uniqueVersion)
        AdditionalInfoService.saveAdditionalInfo(submittingForm).then((response) => {
            setIsLoading(false)
            showSuccessNotification()
            hideModal()

        }).catch((err)=>{
            setIsLoading(false)
            showErrorNotification()
            hideModal()

        })

    }

    return(
        <Modal backdrop={"static"}  show={showModal} keyboard={true}>
            {loading&&<Loader backdrop center vertical size="md" content="Γίνεται επεξεργασία..."/>}
            <Modal.Header closeButton={false}>
                <Modal.Title>Παρατηρήσεις</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Panel>
                    <ControlLabel>Από Τομέα: </ControlLabel>
                    <SelectPicker data={fromSectorInitialData} onChange={handleFormSector} onClean={handleFromSectorClean}/>
                    <Divider/>
                    <ControlLabel>Προς Τομέα: </ControlLabel>
                    <SelectPicker data={toSectorInitialData} onChange={handleToSector}/>
                    <Divider/>
                    <Input componentClass="textarea" value={comments} onChange={handleComments} rows={3} placeholder="Σχόλια" />
                    <Divider/>
                    <div className="rs-uploader rs-uploader-text">
                        <input type="file" ref={inputFile} multiple={true} name="documents" style={{display:'none'}}
                               onChange={handleChange} accept={'.doc,.pdf,.xlsx, .xls, .docx, .txt'}/>
                        <Button className="rs-uploader-trigger-btn" onClick={handleInput} >Αρχεία...</Button>
                    </div>
                    <Divider/>
                    <List>
                        {filesInfo.map((item, index) => (
                            <List.Item key={index} index={index}>
                                {item.name}
                            </List.Item>
                        ))}
                    </List>
                </Panel>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={handleUpload} appearance="primary">
                    Ok
                </Button>
                <Button onClick={hideModal} appearance="subtle">
                    Ακύρωση
                </Button>
            </Modal.Footer>

        </Modal>
    )

}

export default AdditionalInfo
