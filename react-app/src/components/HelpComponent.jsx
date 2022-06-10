import React from 'react';
import { Tab, Row, Nav, Col, Card } from 'react-bootstrap';
import CardHeader from 'react-bootstrap/esm/CardHeader';

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
                                    <p>To upload the student data file, navigate to the "Students List" page and click on "Import". Then, click on "Choose file" to select which file (.csv) to upload, and submit.</p>
                                    //<p>To upload the student data file, select the "Students" option and click "Choose file" to select which file (.csv) to upload. Then, submit.</p>
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
                                    <h2>Resetting Database Collections</h2>
                                    <p>To clear the database, first navigate to the "Students List" page. Clicking the "Clear DB" will produce a pop-up that will ask you to confirm the action. CAUTION: The action of reseting the entire or part of the database is irreversible.</p> 
                                    //<p>Clicking the "Reset Database" will produce a pop-up with several options of which collections (the groups of related data), to delete/reset. Select one of the buttons then press the "Reset" button to reset that collection of the database, or all collections of the database. CAUTION: The action of reseting the entire or part of the database is irreversible.</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey = "Student-Search">
                                    <h1>Searching a Student</h1>
                                    //<h1>New/Edit Tickets by Student Search</h1>
                                    <p>To search a student, first navigate to the "Students List" page. Then, enter the student's ID, first/last name, or scan the barcode on their ID card. The same search bar will be used for all types of entires. Matching results will replace the original student list. Under the "Actions" column, there is a button labeled "More Info". Clicking on this button will create a popup that will isolate the student's information and also display the information of any students that are associated with them. Clicking on "Logs" at the bottom of the popup will enable you to see the actions that have been taken and their timestamps. To exit out of the popup and return to the live display, click "Cancel".</p>
                                    //<p>To create a new or edit a previously submitted ticket entry, enter student ID, search by last name, or scan student ID. Clicking submit will lead to the ticket form with the available fields completed. Guests who are PHS students who have previously submitted their ID can also be searched, and will be led to their registered host's page.</p>
                                    <h2>Enter Student ID</h2>
                                    <p>Enter the student's ID into the search bar and hit enter on your keyboard.</p>
                                    
                                    <h2>Search by First or Last Name</h2>
                                    <p>Enter the first/last name in the search bar and hit enter on your keyboard. The application allows for some case unsensitivitiy by allowing the first letter of a search to be uncapitalized. Otherwise, type it as it would appear on the student's school records (i.e. correct capitalization, symbols such as hyphens, etc.). The search will also allow for searches of the beginning parts of the student's name.</p>
                                    //<p>Select which name that you will be searching for using the "Last Name" or "First Name" buttons. Enter the student's corresponding name.</p>
                                    //<p>The application allows for some case unsensitivity by allowing the first letter of a search to be uncapitalized. Otherwise, type it as it would appear on the student's school records (i.e. correct capitalization, symbols such as hyphens, etc.). The search will also allow for searches of the beginning parts of the student's name.</p>
                                    //<p>Click enter on your keyboard. If the name exists in the student data, the matching names will appear below.</p>

                                    <h2>Search by Ticket Number</h2>
                                    <p>Enter the ticket number in the search bar and hit enter on your keyboard.</p>

                                    <h2>Scan Student ID Card</h2>
                                    <p>This function uses an external barcode scanner. Scanning a barcode will auto-fill in the search bar with the corresponding Student ID.</p>
                                    //<p>This function uses an external barcode scanner. Ensure that the student ID field is selected/on focus. (The student ID field is selected automatically once the page loads.) Then, use the barcode scanner to scan the student's ID.</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey = "Updating-Status">
                                    <h1>Updating Status</h1>
                                    <p>To update the status of a student, first navigate to the "Students List" page. All student information will be completed and visible by row. You will ONLY be able to change the status of a student, nothing else.</p>
                                    //p>Upon loading, all fields will be completed. The user will ONLY be able to change information regarding the payment method and the student's status.</p>

                                    <h2>Checking-In/Out a Student</h2>
                                    <p>When the "Students List" is first accessed, all students (rows) will appear grey (not yet arrived/checked-in). Throughout the event, as students come and go, you will be able to check them in (row will turn green) or check them out (row will turn red), by clicking on the "Check In" or "Check Out" button under the "Actions" column.</p>
                                    //<p>When the information of a student is accessed for the first time, their status will be set to "N/A." To update the status of a student, click on the corresponding button under "Status": checked in or departed. CAUTION: If the "Departed" button is selected and changes are saved, the student will be removed from the database; this action is irreversible.</p>

                                    <h2>Saving and Canceling</h2>
                                    <p>The status will be automatically saved once an action is taken and will appear, with a timestamp, in the "Logs" (can be accessed in "More Info").</p>
                                    //<p>Click the "Save" button to update student information and status.</p>
                                    //<p>Clicking the "Cancel" button will return to the Search Student screen without saving changes.</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey = "Viewing-Students">
                                    <h1>Viewing Students and Exporting Data</h1>
                                    <p>The "Students List" page displays all of the student data in a table sorted by ticket number.</p>
                                    //<p>The "Display Tickets" page displays all ticket data in a table sorted by ticket number.</p>

                                    <h2>Exporting Ticket Data</h2>
                                    <p>To export data, you will first need to navigate to the "Students List" page. Then, click on the "Export" button to download all the data (as a .csv file).<p>
                                    //<p>Click on the "Export Data" button to download all ticket data (as a .csv file).</p>
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
