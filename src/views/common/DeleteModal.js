import React from "react";
import {Button, Modal, Panel} from "rsuite";
import RemindRoundIcon from '@rsuite/icons/RemindRound';

/**
 * Modal displayed when user click on delete button
 * @param showDeleteModal boolean
 * @param hideDeleteModal boolean
 * @param deleteRecordHandler the function which handles record deletion.
 * @param descriptionText text displayed on modal.
 * @returns {JSX.Element}
 * @constructor
 */
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
