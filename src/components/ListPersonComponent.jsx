import React, { useEffect, useState } from 'react';
import PersonService from '../services/PersonService';
import '../App.css';

import { Table, Button, ButtonGroup, ButtonToolbar, Modal, Form, InputGroup } from "react-bootstrap";
import RowComponent from './RowComponent';
import LogService from '../services/LogService';

const ListPersonComponent = () => {     
    //Database structure
    const [logs, setLogs] = useState([]);
    const [people, setPeople] = useState([]);
 
    //Clear Database
    const [clearDatabase, setClearDatabase] = useState(false);
    const [importModal, setImportModal] = useState(false);
    const [showExport, setShowExport] = useState(false);

    // searching
    const [searchTerm, setTerm] = useState('');
    
    //import
    const [file, setFile] = useState(null);
    
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

    useEffect(() => {
        LogService.getLogs().then(
            (res) => {
                setLogs(res.data);
            }
        )
    }, [logs]);

    const closeDelete = () => {
        setClearDatabase(false);
    }

    return (
        <div>
            <h2 className = "text-center" style={{ color: "white" }}> Student List </h2>
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
                        <Button variant="outline-light" onClick={() => setShowExport(true)}>Export</Button>    
                    </InputGroup>
                    
                    <ButtonGroup aria-label="First group">                       
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
                                    .then(() => LogService.deleteLogs()
                                        .then(() => closeDelete()))
                                }
                            > Clear Database </Button>
                            
                        </Modal.Footer>
                    </Modal>
                    
                    <Modal
                        size="lg"
                        show = {showExport}
                        onHide = {() => setShowExport(false)}
                        centered
                    >
                        <Modal.Header>
                            <Modal.Title id="contained-modal-title-vcenter">
                                Export Logs
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            {
                                logs.map(log =>
                                    <p> <b>{log.logger}</b>: {log.message} </p>    
                                )
                            }
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={
                                () => LogService.downloadLogs()
                                .then((res) => {
                                    const url = window.URL.createObjectURL(new Blob([res.data]));
                                    const link = document.createElement('a');
                                    link.href = url;
                                    link.setAttribute('download', 'logs.csv'); //or any other extension
                                    document.body.appendChild(link);
                                    link.click();
                            })} variant = 'success'>Download</Button>
                            <Button onClick={() => setShowExport(false)}>Close</Button>                           
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
                                        LogService.downloadLogs()
                                        .then((res) => {
                                            const url = window.URL.createObjectURL(new Blob([res.data]));
                                            const link = document.createElement('a');
                                            link.href = url;
                                            link.setAttribute('download', 'logs.csv'); //or any other extension
                                            document.body.appendChild(link);
                                            link.click();
                                            PersonService.deletePeople().then(
                                                PersonService.uploadPeople(formData).then((res) => {
                                                    setImportModal(false);
                                                    alert(res.data.message);
                                                }).catch(() => {
                                                    setImportModal(false);
                                                    alert("Failed to upload!");
                                                })
                                            )
                                        })  
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
                                    <RowComponent key = {person.id} person = {person} people = {people} />
                            )
                        }
                    </tbody>
                </Table>
        </div>
    );
};

export default ListPersonComponent;