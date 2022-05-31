import React, { Component } from 'react';
import AuthenticationButton from './AuthenticationButton';

class HeaderComponent extends Component {
    constructor(props) {
        super(props);
        
        this.state = {

        }
    }
    
    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                      <div><a href='http://localhost:3000' className='navbar-brand'>Poolesville Event Check In Tracker</a></div>
                      <AuthenticationButton /> 
                    </nav>
                </header>
            </div>
        );
    }
}

export default HeaderComponent;