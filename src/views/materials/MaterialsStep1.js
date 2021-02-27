import React from 'react'
import {
    Row,
    Grid,
    Col,
    FormControl,
    FormGroup,
    HelpBlock,
    ControlLabel,
    Icon,
    ButtonToolbar,
    Button,
    Form,
    Panel
} from 'rsuite'

const MaterialsStep1 = (props) => {

    const {handleChange, handleStep} = props

    return (
        <Form fluid={true}>
            <Grid fluid={true}>
                <Row className="show-grid">
                    <Col xs={24} sm={12} md={8} lg={6}></Col>
                    <Col xs={24} sm={12} md={8} lg={12}>
                        <FormGroup>
                            <ControlLabel>Α/Α</ControlLabel>
                            <FormControl name="aa" type="number" onBlur={'handleAABlur'} onChange={handleChange("aa")}
                                         errorMessage={"Το πεδίο ειναι υποχρεωτικό"} placement="bottomStart" />
                        </FormGroup>
                        <FormGroup >
                            <ControlLabel>Κωδικός</ControlLabel>
                            <FormControl name="code" onBlur={"handleCodeBlur"} onChange={handleChange("code")}
                                         errorMessage={"codeErrorMessage"} placement="bottomStart" />
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>Είδος</ControlLabel>
                            <FormControl name="textarea" onBlur={"handleKindBlur"} onChange={handleChange("kind")}
                                         errorMessage={"kindErrorMessage"} placement="bottomStart" />
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>Περιγραφή</ControlLabel>
                            <FormControl name="expertise" onChange={"handleDescriptionChange"} onBlur={"handleDescriptionBlur"}
                                         errorMessage={"descrErrorMessage"} placement="bottomStart" />
                        </FormGroup>
                    </Col>
                </Row>
                <Row className="show-grid">
                    <Col md={4} mdOffset={20}>
                        <ButtonToolbar>
                            <Button appearance="primary" color="green" onClick={handleStep(2)}>Επόμενο<Icon icon="page-next"/></Button>
                        </ButtonToolbar>                    </Col>
                </Row>
            </Grid>
        </Form>
    )

}

export default MaterialsStep1