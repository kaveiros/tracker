import React from "react";
import {Button, Modal, Panel} from "rsuite";
import RemindRoundIcon from '@rsuite/icons/RemindRound';


const DeleteModal = ({showDeleteModal, hideDeleteModal, deleteRecordHandler, descriptionText}) => {
    return(
        <Modal backdrop={"static"}  show={showDeleteModal} keyboard={true}>
            <Modal.Header closeButton={false}>
                <Modal.Title>Διαγραφή</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <RemindRoundIcon
                    style={{
                        color: '#ffb300',
                        fontSize: 24
                    }}
                />
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
