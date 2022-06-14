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

    function inputFocus(){
        document.getElementById("Search Bar").focus();
    }
    window.onkeydown = inputFocus;
   
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
                                } else if (val.logger.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                            val.message.toLowerCase().includes(searchTerm.toLowerCase())) {
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