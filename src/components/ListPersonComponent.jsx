import React, { useEffect, useState } from 'react';
import PersonService from '../services/PersonService';
import '../App.css';

import { Table, Button, ButtonGroup, Modal } from "react-bootstrap";

const ListPersonComponent = () => {
    const [people, setPeople] = useState([]);
    // const [searchTerm, setTerm] = useState('');
    const [modalData, setModalData] = useState({});
    const [guestData, setGuestData] = useState({});
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    
    const handleShow = (person) => {
        setModalData(person);
        if(person.guestData === 'Y'){
            setGuestData(people.find(o => o.ticket === person.guestTicket));
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
                <Modal.Title>More info on {modalData.firstName + " " + modalData.lastName}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h1>Student: </h1>
                    <table class="table">
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
                                <td>{modalData.ticket} </td>
                                <td> {modalData.countyId} </td>
                                <td> {modalData.lastName} </td>
                                <td> {modalData.middleInitial} </td>
                                <td> {modalData.firstName} </td>
                                <td> {modalData.grade} </td>
                                <td> {modalData.tdaymentMethod} </td>
                                <td> {modalData.guest} </td>
                                <td> {modalData.guestTicket} </td>
                            </tr>
                        </tbody>
                    </table>
                   { modalData.guest === 'Y' &&
                    <>
                        <h1>Guest: </h1>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>Ticket</th>
                                    <th>ID</th>
                                    <th>LAST</th>
                                    <th>MI</th>
                                    <th>FIRST</th>
                                    <th>GR</th>
                                    <th>Payment Method</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td> { guestData.ticket } </td>
                                    <td> { guestData.countyId } </td>
                                    <td> { guestData.lastName } </td>
                                    <td> { guestData.middleInitial } </td>
                                    <td> { guestData.firstName } </td>
                                    <td> { guestData.grade } </td>
                                    <td> { guestData.paymentMethod } </td>
                                </tr>
                            </tbody>
                        </table>
                    </>
                   }
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