import React, { useEffect, useState } from 'react';
import PersonService from '../services/PersonService';
import '../App.css';

import { Table, Button, ButtonGroup, Modal } from "react-bootstrap";

const ListPersonComponentCopy = () => {
    const [people, setPeople] = useState([]);
    const [searchTerm, setTerm] = useState('');
    const [modalData, setModalData] = useState({});
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = (person) => {
        console.log(person);
        setModalData(person);
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
                                            <Button variant = "dark" onClick = { handleShow(person) }>More Info</Button>
                                            <Button variant = "dark">Check in</Button>
                                        </ButtonGroup>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </Table>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p> {modalData.ticket} </p>
                    <p> {modalData.countyId} </p>
                    <p> {modalData.lastName} </p>
                    <p> {modalData.middleInitial} </p>
                    <p> {modalData.firstName} </p>
                    <p> {modalData.grade} </p>
                    <p> {modalData.paymentMethod} </p>
                    <p> {modalData.guest} </p>
                    <p> {modalData.guestTicket} </p>
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

export default ListPersonComponentCopy;