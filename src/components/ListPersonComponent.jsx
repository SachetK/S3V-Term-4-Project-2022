import React, { useEffect, useState } from 'react';
import PersonService from '../services/PersonService';
import '../App.css';

import { Table } from "react-bootstrap";
import RowComponent from './RowComponent';
import LogService from '../services/LogService';
import ToolbarComponent from './ToolbarComponent';

const ListPersonComponent = () => {     
    //Database structure
    const [logs, setLogs] = useState([]);
    const [people, setPeople] = useState([]);   
    const [searchTerm, setTerm] = useState('');


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
    return (
        <div>
            <h2 className = "text-center" style={{ color: "white" }}> Student List </h2>
                <ToolbarComponent logs = {logs} setTerm = {setTerm}/>
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