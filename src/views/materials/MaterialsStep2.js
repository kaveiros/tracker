import React, {useState} from 'react'
import {
    Row,
    Grid,
    Col,
    FormControl,
    FormGroup,
    ControlLabel,
    Icon,
    ButtonToolbar,
    Button,
    Form,
} from 'rsuite'
import AdditionalInfo from "../additionalInfo/AdditionalInfo";

const MaterialsStep2 = (props) => {

    const {handleChange, handleStep} = props
    const [modal, setShowModal] = useState(false)

    const showModalHandler = () => {
        setShowModal(true)
    }

    const hideModal = () => {
        setShowModal(false)
    }


    return (
        <React.Fragment>
            <Form fluid={true}>
                <Grid fluid={true}>
                    <Row className="show-grid">
                        <Col xs={24} sm={12} md={8} lg={6}></Col>
                        <Col xs={24} sm={12} md={8} lg={12}>
                            <FormGroup>
                                <ControlLabel>Ποσότητα</ControlLabel>
                                <FormControl name="quantity" onChange={"handleQuantityChange"} onBlur={"handleQuantityBlur"}
                                             errorMessage={"quantityErrorMessage"} placement="bottomStart" />
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>Τμήμα</ControlLabel>
                                <FormControl name="section" onChange={handleChange("section")} />
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>Τομέας</ControlLabel>
                                <FormControl name="sector" onChange={handleChange("sector")} />
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>Ονοματεπώνυμο</ControlLabel>
                                <FormControl name="name" onChange={handleChange("name")} />
                            </FormGroup>
                            <FormGroup>
                                <ButtonToolbar>
                                    <Button color="violet" onClick={handleStep(1)}><Icon icon="page-previous"/>Πίσω</Button>
                                    <Button appearance="primary" color="cyan" onClick={showModalHandler}> <Icon icon="info-circle" /> Παρατηρήσεις</Button>
                                    <Button color="green" type="submit"> <Icon icon="save" /> Υποβολή</Button>
                                    <Button color="red" onClick={handleStep(1)}><Icon icon="ban" /> Ακύρωση</Button>
                                </ButtonToolbar>
                            </FormGroup>
                        </Col>
                    </Row>
                </Grid>
            </Form>
            {modal && <AdditionalInfo showModal={modal} hideModal={hideModal}/>}
        </React.Fragment>

    )

}

export default MaterialsStep2