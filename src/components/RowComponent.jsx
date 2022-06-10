import { React, useState } from 'react';
import { Button, ButtonGroup, Modal } from "react-bootstrap";
import PersonService from '../services/PersonService';

const RowComponent = props => {
    // more info for students
    const [modalData, setModalData] = useState({});
    const [counterpartData, setCounterpartData] = useState({});
    const [isGuest, setIsGuest] = useState(false);    
    const [show, setShow] = useState(false);
    const [color, setColor] = useState(props.person.checked);
    
    const handleClose = () => setShow(false);
    
    const handleShow = (person) => {
        setModalData(person);
        
        setIsGuest(props.people.find(o => o.guestTicket === person.ticket) != null ? true : false);
        
        if(person.guest === 'Y'){
            setCounterpartData(props.people.find(o => o.ticket === person.guestTicket));
        } else if (isGuest) {
            setCounterpartData(props.people.find(o => o.guestTicket === person.ticket));
        }

        setShow(true);        
    };
    
    return (
        <>
        <tr key = {props.person.id} style = {{backgroundColor: color === null ?  null : (color ? 'green': 'red')}}
        >
            <td> {props.person.ticket} </td>
            <td> {props.person.countyId} </td>
            <td> {props.person.lastName} </td>
            <td> {props.person.middleInitial} </td>
            <td> {props.person.firstName} </td>
            <td> {props.person.grade} </td>
            <td> {props.person.paymentMethod} </td>
            <td> {props.person.guest} </td>
            <td> {props.person.guestTicket} </td>
            <td> 
                <ButtonGroup role = "group" size = 'sm' >
                    <Button variant = "dark" onClick = {() => handleShow(props.person) }>More Info</Button>
                    <Button variant = "dark" onClick = {() => {
                        if(color === null || !color){
                            setColor(true);
                        } else if (color) {
                            setColor(false);
                        }
                        console.log(props.person.checked);
                        PersonService.checkInPerson(props.person);
                    }}
                    >{props.person.checked ? "Check out" : "Check in"}</Button>
                </ButtonGroup>
            </td>
        </tr>
        <Modal
            size="lg"
            show={show} 
            onHide={handleClose}
        >
        <Modal.Header>
            <Modal.Title>More Info on {modalData.firstName + " " + modalData.lastName}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h3>{ !isGuest ? "Student: " : "Guest: " }</h3>
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
            { (modalData.guest === 'Y' || isGuest) &&
                <>
                    <h3>{ isGuest ? "Student: " : "Guest: " } </h3>
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
                <h3><a href=''>Logs</a></h3>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    </>
    );
};

export default RowComponent;