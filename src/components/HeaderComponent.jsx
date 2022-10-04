import React, { Component } from 'react';
import AuthenticationButton from './AuthenticationButton.jsx';

class HeaderComponent extends Component {
    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark justify-content-between">
                      <div><a href='/login' className='navbar-brand'>Poolesville Event Check In Tracker</a></div>
                      <div className='navbar-nav'>
                        <div><a href='/students' className="nav-item nav-link">Students List</a></div>
                        <div><a href='/logs' className="nav-item nav-link">Logs Record</a></div>
                        <div><a href='/help' className="nav-item nav-link">Help</a></div>
                        <div className="nav-item"><AuthenticationButton /></div>
                      </div>
                    </nav>
                </header>
            </div>
        );
    }
}

export default HeaderComponent;