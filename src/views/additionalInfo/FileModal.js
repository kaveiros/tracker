import React from "react";
import {Button, List, Modal, Panel} from "rsuite";
import FileDownloadIcon from '@rsuite/icons/FileDownload';


const FileModal = ({showModal, hideModal, files, downloadHandler}) => {

    return(
        <Modal backdrop={"static"}  open={showModal} keyboard={true}>
            <Modal.Header closeButton={false}>
                <Modal.Title>Παρατηρήσεις</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Panel>
                    <List>
                    {files.map((item, index) =>(
                        <List.Item key={index} index={index}>
                            {item.name} <Button onClick={()=>downloadHandler(item.name)}><FileDownloadIcon />Λήψη</Button>
                        </List.Item>

                    ))}
                    </List>
                </Panel>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={hideModal} appearance="subtle">
                    Κλείσιμο
                </Button>
            </Modal.Footer>
        </Modal>

    )

}

export default FileModal
