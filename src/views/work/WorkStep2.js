import React from 'react'
import {
    Form, FormGroup, ControlLabel,
    FormControl, HelpBlock, ButtonToolbar, Button, Panel, Icon, Divider
} from 'rsuite'
import { mandatory } from '../../style/Style'


const WorkStep2 = ({ currentStep, onPrevious }) => {

    if (currentStep !== 2) {
        return null
    }


    return (
        <Panel>
            <Form>
                <FormGroup>
                    <ControlLabel>Κύρια εργασία</ControlLabel>
                    <ControlLabel style={mandatory}>*</ControlLabel>
                    <FormControl name="expertise" />
                    <HelpBlock tooltip>Υποχρεωτικό</HelpBlock>
                </FormGroup>
                <FormGroup>
                    <ButtonToolbar>
                        <ControlLabel>Προσθήκη δευτερεύουσας εργασίας</ControlLabel>
                        <Divider />
                        <Button primary color="green"> <Icon icon="plus" /> Προσθήκη</Button>
                    </ButtonToolbar>
                </FormGroup>
                <FormGroup>
                    <ControlLabel>Παρατηρήσεις</ControlLabel>
                    <FormControl rows={5} name="textarea" componentClass="textarea" />
                </FormGroup>
                <FormGroup>
                    <ButtonToolbar>
                        <Button primary color="green"> <Icon icon="save" /> Υποβολή</Button>
                        <Button primary color="red" onClick={onPrevious}><Icon icon="ban" /> Ακύρωση</Button>
                    </ButtonToolbar>
                </FormGroup>
            </Form>
        </Panel>
    )

}

export default WorkStep2
