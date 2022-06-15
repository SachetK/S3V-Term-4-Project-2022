import React, { useEffect } from 'react';
import { Container, Row, Col, Button} from 'react-bootstrap';
import PersonService from '../services/PersonService';

const HomeComponent = () => {    
    useEffect(() => {
        PersonService.getPeople();
    }, []);

    return (
        <div className="container  animated fadeIn">
            <Container fluid>
                <Row style={{ paddingBottom: '15px', paddingLeft: '300px'}}>
                    <Col md={11}><h1 className="brand"><a href="/index" style={{ color: "white"}}>Poolesville Event Check-In</a></h1></Col>
                </Row>
                <Row>
                    <Col>
                        <div className="wrapper">
                            <div className="company-info">
                                <div id="logo-wrapper">
                                    <img src="/images/PHSLogo.png" width="200" height="200" alt="Logo" id="logo" />
                                </div> 
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <Button href = "/students" variant="dark" style={{ height: '200px' , width: '15rem'}}>
                            <h3 style={{ paddingTop: '70px'}}>Student List</h3>
                        </Button>
                    </Col>
                    <Col>
                        <Button href = "/logs" variant="dark" style={{ height: '200px' , width: '15rem'}}>
                            <h3 style={{ paddingTop: '70px'}}>Log Records</h3>
                        </Button>
                    </Col>
                    <Col>
                        <Button href = "/help" variant="dark" style={{ height: '200px' , width: '15rem', backgroundColor: '#be965c'}}>
                            <h3 style={{ paddingTop: '70px'}}>Help</h3>
                        </Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default HomeComponent;