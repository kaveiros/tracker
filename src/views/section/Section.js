import {
    Breadcrumb,
    Button,
    Col,
    Content,
    Form,
    Grid,
    Header,
    Panel,
    Row
} from "rsuite";
import React, {useState} from "react";
import {showErrorNotification, showSuccessNotification} from "../common/Notifications";
import SectionService from "../../services/SectionService";

const Section = () => {

    const [section, setSection] = useState('')

    const validationErrorString = "Το τμήμα δεν μπορεί να είναι κενό."
    const submitSuccessString =  "Το τμήμα αποθηκεύτικε."
    const saveErrorString = "Σφάλμα κατά την αποθήκευση του τμήματος."

    const handleSectionChange = (event) => {
        setSection(event)
    }

    const handleSubmit = () => {
        if (section === '') {
            showErrorNotification(validationErrorString)
        }
        else {
            const sectionService = new SectionService();
            sectionService.save({section:section}).then(r=> {
                console.log(r)
                showSuccessNotification(submitSuccessString)
            }).catch(e=>{
                console.log(e)
                showErrorNotification(saveErrorString)
            })
        }
    }

    return(
        <Panel>
            <Header>
                <Breadcrumb>
                    <Breadcrumb.Item href="/">Αρχική</Breadcrumb.Item>
                    <Breadcrumb.Item href="/adminPage">Διαχείριση</Breadcrumb.Item>
                    <Breadcrumb.Item href="/section" active>Τμήμα</Breadcrumb.Item>
                </Breadcrumb>
            </Header>
            <Content>
                <Panel shaded bordered>
                    <Form fluid={true} onSubmit={handleSubmit}>
                        <Grid fluid={true}>
                            <Row className="show-grid">
                                <Col xs={24} sm={12} md={8} lg={6}/>
                                <Col xs={24} sm={12} md={8} lg={12}>
                                    <Form.Group>
                                        <Form.ControlLabel>Τμήμα</Form.ControlLabel>
                                        <Form.Control name="sectionName" onChange={handleSectionChange} />
                                        <Button type="submit" color="green" appearance="primary">Αποθήκευση</Button>
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Grid>
                    </Form>
                </Panel>
            </Content>
        </Panel>
    )

}

export default Section
