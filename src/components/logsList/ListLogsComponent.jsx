import React, { useEffect, useState } from 'react';
import { Form, InputGroup, Table } from 'react-bootstrap';
import LogService from '../../services/LogService';

const ListLogsComponent = () => {
    const [logs, setLogs] = useState([]);
    const [searchTerm, setTerm] = useState('');

    useEffect(() => {
        LogService.getLogs().then(
            (res) => {
                setLogs(res.data);
            }
        )
    }, [logs]);

    return (
        <div>
            <h2 className = "text-center" style={{ color: "white" }}> Logs List </h2>
                <InputGroup>
                    <Form.Control 
                        id = "Search Bar"
                        type = "text" 
                        placeholder = "Search..."
                        onChange = { text => {
                            setTerm(text.target.value)
                        }}
                    />
                </InputGroup>
                <Table striped bordered hover variant = "dark" style = {{marginTop: 5}}>
                    <thead>
                        <tr>
                            <th> Logger</th>
                            <th> Log Message</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            logs.filter((val) => {
                                if (searchTerm == ""){
                                    return val;
                                } else if (val.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                            val.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                            val.ticket.toString().includes(searchTerm.toLowerCase()) || 
                                            (val.countyId != null ? val.countyId.toString().includes(searchTerm.toLowerCase()) : false)) {
                                    return val;
                                }
                            }).map(
                                log =>
                                <tr>
                                    <td> {log.logger} </td>
                                    <td> {log.message} </td>
                                </tr>
                            )
                        }
                    </tbody>
                </Table>
        </div>
    );
};

export default ListLogsComponent;