import {Button, Icon, Modal, Panel} from "rsuite";
import React from "react";
import {useHistory} from "react-router-dom";


const PermissionsModal = () => {

    const history = useHistory();
    const goBackFunction = () => {
        history.goBack()
    }

    return(
        <Modal backdrop={"static"}  keyboard={true} show={true}>
            <Modal.Header closeButton={false}>
                <Modal.Title>Σφάλμα</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Icon
                    icon="remind"
                    style={{
                        color: '#ffb300',
                        fontSize: 24
                    }}
                />
                <Panel>
                    <div>Δεν έχετε τα δικαιώματα για πρόσβαση σε αυτή τη σελίδα.</div>
                </Panel>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={goBackFunction} appearance="primary">
                    Ok
                </Button>
            </Modal.Footer>
        </Modal>
    )

}

export default PermissionsModal