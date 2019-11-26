import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Write from './Write';
import Browse from './Browse';
const Store = window.require('electron-store');
const store = new Store();

class Body extends Component {

    render() {

        return (
            <Router> 
                <div className="body">
                    <div className="sidebar">
                        <nav className="nav">
                            <ul>
                                <li><Link to='/'>Write</Link></li>
                                <li><Link to='/browse'>Browse</Link></li>
                            </ul>
                        </nav>
                    </div>

                    <div className="main">
                        <Route path='/' exact component={Write} />
                        <Route path='/browse' component={Browse} />
                    </div>

                </div>
            </Router>
        );
    }

}

export default Body;
