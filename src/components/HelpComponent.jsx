import React from 'react';
import { Tab, Row, Nav, Col, Card } from 'react-bootstrap';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import useRedirectToHTTPS from '../auth/useRedirectToHTTPS';

const HelpComponent = () => {
    return (
        <Card bg = "dark" text = "white">
            <CardHeader as = "h3" >Help</CardHeader>
            <Card.Body>
                <Tab.Container id="help-tabs" defaultActiveKey="Help">
                    <Row>
                        <Col sm={3}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link eventKey="Help">Welcome</Nav.Link>
                            </Nav.Item>
                            
                            <Nav.Item>
                                <Nav.Link eventKey="Upload-Data">Upload Data</Nav.Link>
                            </Nav.Item>
                            
                            <Nav.Item>
                                <Nav.Link eventKey="Database-and-Settings">Database and Settings</Nav.Link>
                            </Nav.Item>
                            
                            <Nav.Item>
                                <Nav.Link eventKey="Student-Search">Student Search</Nav.Link>
                            </Nav.Item>
                            
                            <Nav.Item>
                                <Nav.Link eventKey="Updating-Status">Updating Status</Nav.Link>
                            </Nav.Item>
                            
                            <Nav.Item>
                                <Nav.Link eventKey="Viewing-Tickets">Viewing Tickets and Exploring Data</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content>
                                <Tab.Pane eventKey = "Help">
                                    <h1 >Welcome</h1>
                                    <p>Welcome to the Student Event Sign Up Application! Click on the tabs to the left for help and information.</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey = "Upload-Data">
                                    <h1 >Uploading Data</h1>
                                    <p>To upload the student data file, select the "Students" option and click "Choose file" to select which file (.csv) to upload. Then, submit.</p>
                                    <p> The uploaded file MUST be in the following format: </p>
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
                                            <td>1</td>
                                            <td>123456</td>
                                            <td>Doe</td>
                                            <td>L</td>
                                            <td>John</td>
                                            <td>12</td>
                                            <td>Cash</td>
                                            <td>N</td>
                                            <td></td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </Tab.Pane>
                                <Tab.Pane eventKey = "Database-and-Settings">
                                    <h1>Database and Settings</h1>
                                    <h3>Resetting Database Collections</h3>
                                    <p >Clicking the "Reset Database" will produce a pop-up with several options of which collections (the groups of related data), to delete/reset. Select one of the buttons then press the "Reset" button to reset that collection of the database, or all collections of the database. CAUTION: The action of reseting the entire or part of the database is irreversible.</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey = "Student-Search">
                                    <h1>New/Edit Tickets by Student Search</h1>
                                    <p>To create a new or edit a previously submitted ticket entry, enter student ID, search by last name, or scan student ID. Clicking submit will lead to the ticket form with the available fields completed. Guests who are PHS students who have previously submitted their ID can also be searched, and will be led to their registered host's page.</p>

                                    <h2>Enter Student ID</h2>
                                    <p>Enter the student's ID into the corresponding field. Then click the submit button at the bottom of the page.</p>
                                    
                                    <h2>Search by First or Last Name</h2>
                                    <p>Select which name that you will be searching for using the "Last Name" or "First Name" buttons. Enter the student's corresponding name.</p>
                                    <p>The application allows for some case unsensitivity by allowing the first letter of a search to be uncapitalized. Otherwise, type it as it would appear on the student's school records (i.e. correct capitalization, symbols such as hyphens, etc.). The search will also allow for searches of the beginning parts of the student's name.</p>
                                    <p>Click the search button. If the name exists in the student data, the matching names will appear in the box below. Select the correct name and click the submit button at the bottom of the page.</p>

                                    <h2>Scan Student ID Card</h2>
                                    <p>This function uses an external barcode scanner. Ensure that the student ID field is selected/on focus. (The student ID field is selected automatically once the page loads.) Then, use the barcode scanner to scan the student's ID.</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey = "Updating-Status">
                                    <h1>Updating Status</h1>

                                    <p>Upon loading, all fields will be completed. The user will ONLY be able to change information regarding the payment method and the student's status.</p>

                                    <h1>Checking-In/Out a Student</h1>
                                    <p>When the information of a student is accessed for the first time, their status will be set to "N/A." To update the status of a student, click on the corresponding button under "Status": checked in or departed. CAUTION: If the "Departed" button is selected and changes are saved, the student will be removed from the database; this action is irreversible.</p>

                                    <h1>Saving and Canceling</h1>
                                    <p>Click the "Save" button to update student information and status.</p>
                                    <p>Clicking the "Cancel" button will return to the Search Student screen without saving changes.</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey = "Viewing-Tickets">
                                    <h1>Viewing Tickets and Exporting Data</h1>
                                    <p>The "Display Tickets" page displays all ticket data in a table sorted by ticket number.</p>

                                    <h2>Exporting Ticket Data</h2>
                                    <p>Click on the "Export Data" button to download all ticket data (as a .csv file).</p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Card.Body>
        </Card>
    );
};

export default HelpComponent;