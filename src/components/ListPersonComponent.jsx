import React, { useEffect, useState } from 'react';
import PersonService from '../services/PersonService';
import '../App.css';

import { Table, Button, ButtonGroup, ButtonToolbar, Modal, Form, InputGroup, Alert } from "react-bootstrap";

const ListPersonComponent = () => {  
    //Database structure
    const [people, setPeople] = useState([]);

    //Clear Database
    const [clearDatabase, setClearDatabase] = useState(false);
    const [importModal, setImportModal] = useState(false);

    // searching
    const [searchTerm, setTerm] = useState('');
    
    //import
    const [file, setFile] = useState(null);

    // more info for students
    const [modalData, setModalData] = useState({});
    const [counterpartData, setCounterpartData] = useState({});
    const [isGuest, setIsGuest] = useState(false);
    const [show, setShow] = useState(false);
    
    const closeDelete = () => setClearDatabase(false);

    const handleClose = () => setShow(false);
    
    const handleShow = (person) => {
        setModalData(person);
        
        setIsGuest(people.find(o => o.guestTicket === person.ticket) != null ? true : false);
        
        if(person.guest === 'Y'){
            setCounterpartData(people.find(o => o.ticket === person.guestTicket));
        } else if (isGuest) {
            setCounterpartData(people.find(o => o.guestTicket === person.ticket));
        }

        setShow(true);        
    };
    
    //redirect input to search bar
    function inputFocus(){
        document.getElementById("Search Bar").focus();
    }
    window.onkeydown = inputFocus;
    
    //update people whenever changes
    useEffect(() => {
        PersonService.getPeople().then(
            (res) => {
                setPeople(res.data);
            }
        )
    }, [people]);
    
    return (
        <div>
            <h2 className = "text-center" style={{ color: "white" }}> Student List </h2>
            {/* <p style={{ color: "white" }}>{people.length + " Total Students"}</p> */}
            <ButtonToolbar
                    className="justify-content-between"
                    aria-label="Toolbar with Button groups"
                    style = {{marginTop: 50, marginBottom: 20}}
                >
                    <InputGroup>
                        <Form.Control 
                            id = "Search Bar"
                            type = "text" 
                            placeholder = "Search..."
                            onChange = { text => {
                                setTerm(text.target.value)
                            }}
                        />
                        <Button variant="outline-light" onClick={() => setImportModal(true)}>Upload</Button>{' '}
                        <Button variant="outline-light">Export</Button>    
                    </InputGroup>
                    
                    <ButtonGroup aria-label="First group">
                        <Button variant='outline-primary'> Toggle Log Messages </Button>
                        
                        <Button 
                            variant="danger"
                            onClick = { () => setClearDatabase(true) }
                        >Clear DB</Button>
                    </ButtonGroup>
                    
                    <Modal
                        size="lg"
                        show = {clearDatabase}
                        onHide = {closeDelete}
                        centered
                    >
                        <Modal.Header>
                            <Modal.Title id="contained-modal-title-vcenter">
                                Clear Database
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <p>
                                Are you sure you want to clear the database? This is a <b>NON-REVERSIBLE</b> action.
                            </p>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={() => closeDelete()}>Close</Button>
                            <Button variant = "danger"
                                onClick = {
                                    () => PersonService.deletePeople()
                                    .then(() => closeDelete())
                                }
                            > Clear Database </Button>
                            
                        </Modal.Footer>
                    </Modal>

                    <Modal
                        size="lg"
                        show = {importModal}
                        onHide = {() => setImportModal(false)}
                        centered
                    >
                        <Modal.Header>
                            <Modal.Title id="contained-modal-title-vcenter">
                                Upload Data
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <p>
                                Please note that importing another dataset will delete the current contents of this website. Download before you import if you wish to save the content!
                            </p>
                            <Form.Group controlId="formFile" className="mb-3">
                                <Form.Control type="file" onChange={(value) => setFile(value.target.files[0])} />
                            </Form.Group>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={() => setImportModal(false)}>Close</Button>
                            <Button variant = "success"
                                onClick = {
                                    () => {
                                        const formData = new FormData();
                                        formData.append('file' , file);
                                        PersonService.deletePeople().then(
                                            PersonService.uploadPeople(formData).then((res) => {
                                                setImportModal(false);
                                                alert(res.data.message);
                                            }).catch((err) => {
                                                setImportModal(false);
                                                alert("Failed to upload!");
                                            })
                                        )
                                    }
                                }
                            > Upload </Button>
                            
                        </Modal.Footer>
                    </Modal>
                </ButtonToolbar>
                <Table striped bordered hover variant = "dark" style = {{marginTop: 5}}>
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
                            people.filter((val) => {
                                if (searchTerm == ""){
                                    return val;
                                } else if (val.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                            val.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                            val.ticket.toString().includes(searchTerm.toLowerCase()) || 
                                            (val.countyId != null ? val.countyId.toString().includes(searchTerm.toLowerCase()) : false)) {
                                    return val;
                                }
                            }).map(
                                person =>
                                <tr key = {person.id} style = {{backgroundColor: person.checkedIn == null ? null : "red"}}>
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
                                            <Button variant = "dark" onClick = {() => {
                                                console.log(person.checkedIn);
                                                if(person.checkedIn === null) {
                                                    person.checkedIn = true;
                                                } else{
                                                    person.checkedIn ? person.checkedIn = false : person.checkedIn = true;
                                                    console.log(person.checkedIn);
                                                }
                                                }}
                                            >Check In</Button>
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
        </div>
    );
};

export default ListPersonComponent;