import React, { Component } from 'react';
import PersonService from '../services/PersonService';
import '../App.css';

import { Table, Button, ButtonGroup } from "react-bootstrap";

class ListPersonComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            people: [],
            searchTerm: ""
        }
    }
    
    componentDidMount() {
        PersonService.getPeople().then((res) => {
            this.setState({people: res.data});
        });
    }
    
    render() {
        return (
            <div>
                <h2 className = "text-center" style={{ color: "white"}}> Student List </h2>
                <input type="text" value = {searchTerm} onChange = {(e) => this.setState({searchTerm: e})}></input>
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
                                this.state.people.map(
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
                                                <Button variant = "dark">More Info</Button>
                                                <Button variant = "dark">Check in</Button>
                                            </ButtonGroup>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </Table>
            </div>
        );
    }
}

export default ListPersonComponent;