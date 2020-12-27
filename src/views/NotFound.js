import React from 'react'
import { Container, Panel, Row, Col } from 'rsuite'
import '../style/NotFound.css'


const NotFound = () => {

    return (
        <Container className="page_404">
            <Panel>
                <Row>
                    <Col xs={24} sm={24} md={8} lg={6}>
                    </Col>
                    <Col xs={24} sm={12} md={8} lg={12}>
                        <div className="four_zero_four_bg">
                            <h1 className="text-center ">404</h1>
                        </div>

                        <div className="contant_box_404">
                            <h3 className="h2">
                                Φαίνεται ότι έχεις χαθεί
		                        </h3>

                            <p>Η σελίδα που αναζητάς δε βρέθηκε!</p>

                            <a href="/" className="link_404">Πήγαινε στην αρχική</a>
                        </div>
                    </Col>
                    <Col xs={24} sm={12} md={8} lg={6}>
                    </Col>

                </Row>
            </Panel>
        </Container>

    )

}

export default NotFound