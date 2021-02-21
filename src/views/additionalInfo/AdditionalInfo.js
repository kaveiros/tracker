import React, {useRef, useState} from 'react'
import {Button, Input, Panel, Modal, SelectPicker, ControlLabel, Divider, List, Notification} from 'rsuite'
import AdditionalInfoService from "../../services/AdditionalInfoService";

const AdditionalInfo = ({showModal, hideModal}) => {

    const data = [
        {"label":"foo",
            "value":"foo"},
        {"label":"bar",
            "value":"bar"}
    ]
    //TO DO USE_EFFECT

    const [fromSector, setFromSector] = useState()
    const [toSector, setToSector] = useState()
    const [filesInfo, setFilesInfo] = useState([])
    const [selectedFiles, setSelectedFiles] = useState()
    const [comments,setComments] = useState()

    let _fileInfos = []
    const inputFile = useRef(null)

    const handleFormSector = (e) => {
        setFromSector(e)
    }

    const handleToSector = (e) => {
        setToSector(e)
    }

    const handleComments = (e) => {
        setComments(e)
    }

    const handleChange = (e) => {
        console.log(e.target.files)
        for (let f of e.target.files) {
            _fileInfos.push({"name":f.name})
        }
        setFilesInfo(_fileInfos)
        setSelectedFiles(e.target.files)
    }

    const handleInput = () => {
        inputFile.current.click()
    }

    const showSuccessNotification = () => {Notification.success({description:"Οι παρατηρήσεις αποθηκεύτηκαν",
        placement:"topStart", duration:4000})}

    const showErrorNotification = () => {Notification.error({description:"Οι παρατηρήσεις δεν αποθηκεύτηκαν. Προσπαθήστε ξανά",
        placement:"topStart", duration:4000})}
    const handleUpload = () => {
        let submittingForm = new FormData()
        submittingForm.append("fromSector", fromSector)
        submittingForm.append("toSector", toSector)
        submittingForm.append("comments", comments)
        submittingForm.append('files', selectedFiles)
        console.log(submittingForm.getAll('fromSector'))
        AdditionalInfoService.saveAdditionalInfo(submittingForm).then((response) => {
        hideModal()

        }).catch((err)=>{
            showErrorNotification()
        })

    }

    return(
        <Modal backdrop={"static"}  show={showModal} keyboard={true}>
            <Modal.Header closeButton={false}>
                <Modal.Title>Παρατηρήσεις</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Panel>
                    <ControlLabel>Από Τομέα: </ControlLabel>
                    <SelectPicker data={data} onChange={handleFormSector}/>
                    <Divider/>
                    <ControlLabel>Προς Τομέα: </ControlLabel>
                    <SelectPicker data={data} onChange={handleToSector}/>
                    <Divider/>
                    <Input componentClass="textarea" value={comments} onChange={handleComments} rows={3} placeholder="Σχόλια" />
                    <Divider/>
                    <div className="rs-uploader rs-uploader-text">
                        <input type="file" ref={inputFile} multiple={true} name="file" style={{display:'none'}}
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