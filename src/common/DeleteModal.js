import React from "react";
import {Button, Modal, Panel} from "rsuite";
import RemindOutlineIcon from '@rsuite/icons/RemindOutline';


const DeleteModal = ({showDeleteModal, hideDeleteModal, deleteRecordHandler, descriptionText}) => {
    return(
        <Modal backdrop={"static"}  show={showDeleteModal} keyboard={true}>
            <Modal.Header closeButton={false}>
                <Modal.Title>Διαγραφή</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <RemindOutlineIcon/>
                <Panel>
                    {descriptionText}
                </Panel>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={deleteRecordHandler} appearance="primary">
                    Ok
                </Button>
                <Button onClick={hideDeleteModal} appearance="subtle">
                    Cancel
                </Button>
            </Modal.Footer>
        </Modal>

    )

}
export default DeleteModal
