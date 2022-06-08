import React, { useEffect, useState } from 'react';
import PersonService from '../services/PersonService';
import '../App.css';

import { Table, Button, ButtonGroup, Modal } from "react-bootstrap";

const ListPersonComponent = () => {
    const [people, setPeople] = useState([]);
    // const [searchTerm, setTerm] = useState('');
    const [modalData, setModalData] = useState({});
    const [counterpartData, setCounterpartData] = useState({});
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    
    const handleShow = (person) => {
        setModalData(person);
        if(person.guest === 'Y'){
            setCounterpartData(people.find(o => o.ticket === person.guestTicket));
        } else if (person.countyId == null) {
            setCounterpartData(people.find(o => o.guestTicket === person.ticket));
        }

        setShow(true);        
    };
    
    useEffect(() => {
        PersonService.getPeople().then(
            (res) => {
                setPeople(res.data);
            }
        )
    }, []);
    
    return (
        <div>
            <h2 className = "text-center" style={{ color: "white"}}> Student List </h2>
                <Table striped bordered hover variant = "dark">
                    <thead>
                        <tr>
                            <th> Student Ticket Number</th>
                            <th> MCPS ID</th>
                            <th> Student Last Name</th>
                            <th> Student Middle Initial</th>
                            <th> Student First Name</th>
                            <th> Grade</th>
                            <th> Payment Method</th>
                            <th> Guest Y/N</th>
                            <th> Guest Ticket Number</th>
                            <th> Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            people.map(
                                person =>
                                <tr key = {person.id}>
                                    <td> {person.ticket} </td>
                                    <td> {person.countyId} </td>
                                    <td> {person.lastName} </td>
                                    <td> {person.middleInitial} </td>
                                    <td> {person.firstName} </td>
                                    <td> {person.grade} </td>
                                    <td> {person.paymentMethod} </td>
                                    <td> {person.guest} </td>
                                    <td> {person.guestTicket} </td>
                                    <td> 
                                        <ButtonGroup role = "group" size = 'sm' >
                                            <Button variant = "dark" onClick = {() => handleShow(person) }>More Info</Button>
                                            <Button variant = "dark">Check in</Button>
                                        </ButtonGroup>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </Table>

            <Modal
                size="lg"
                show={show} 
                onHide={handleClose}
            >
            <Modal.Header>
                <Modal.Title>More Info on {modalData.firstName + " " + modalData.lastName}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h3>{ modalData.countyId != null ? "Student: " : "Guest: " }</h3>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Ticket</th>
                                <th>ID</th>
                                <th>LAST</th>
                                <th>MI</th>
                                <th>FIRST</th>
                                <th>GR</th>
                                <th>Payment Method</th>
                                <th>Guest YN</th>
                                <th>Guest Ticket Number</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td> {modalData.ticket} </td>
                                <td> {modalData.countyId} </td>
                                <td> {modalData.lastName} </td>
                                <td> {modalData.middleInitial} </td>
                                <td> {modalData.firstName} </td>
                                <td> {modalData.grade} </td>
                                <td> {modalData.paymentMethod} </td>
                                <td> {modalData.guest} </td>
                                <td> {modalData.guestTicket} </td>
                            </tr>
                        </tbody>
                    </table>
                   { (modalData.guest === 'Y' || modalData.countyId == null) &&
                    <>
                        <h3>{ modalData.countyId != null ? "Guest: " : "Student: " } </h3>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Ticket</th>
                                    <th>ID</th>
                                    <th>LAST</th>
                                    <th>MI</th>
                                    <th>FIRST</th>
                                    <th>GR</th>
                                    <th>Payment Method</th>
                                    <th>Guest YN</th>
                                    <th>Guest Ticket Number</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td> {counterpartData.ticket} </td>
                                <td> {counterpartData.countyId} </td>
                                <td> {counterpartData.lastName} </td>
                                <td> {counterpartData.middleInitial} </td>
                                <td> {counterpartData.firstName} </td>
                                <td> {counterpartData.grade} </td>
                                <td> {counterpartData.paymentMethod} </td>
                                <td> {counterpartData.guest} </td>
                                <td> {counterpartData.guestTicket} </td>
                                </tr>
                            </tbody>
                        </table>
                    </>
                   }
                    <h3><a href='\help'>Logs</a></h3>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default ListPersonComponent;