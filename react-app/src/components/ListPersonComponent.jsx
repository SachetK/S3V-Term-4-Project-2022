import React, { Component } from 'react';

class ListPersonComponent extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            people: []
        }
    }
    
    
    render() {
        
        return (
            <div>
                <h2 className = 'text-center'> People List </h2>
                
                <div className = 'rows'>
                    <table className='table table-striped table-bordered'>

                        <thead>
                            <tr>
                                <th> Person Name </th>
                                <th> Person MCPS ID </th>
                                <th> Person Ticket </th>
                                <th> Actions </th>
                            </tr>

                        </thead>

                        <tbody>
                            {
                                this.state.person.map(
                                    person => 
                                    <tr key = {person.id}>
                                        <td> {person.name}</td>
                                        <td> {person.countyId}</td>
                                        <td> {person.ticket}</td>
                                    </tr>
                                )
                            }
                       </tbody>

                   </table>

                </div> 
            </div>
        );
    }
}

export default ListPersonComponent;