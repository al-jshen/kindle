import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Write from './Write';
import Browse from './Browse';
import SideWrite from './SideWrite';
import SideBrowse from './SideBrowse';
//const Store = window.require('electron-store');
//const store = new Store();

class Body extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isWriting: true
        };
    }

    handleRouteChange = (status) => {
        this.setState({
            isWriting: status,
        })
    }
    
    RenderSide = () => {
        if (this.state.isWriting) {
            return <SideWrite />
        } else {
            return <SideBrowse />
        }
    }

    render() {
        //const isWriting = this.state.isWriting;

        return (
            <Router> 
                <div className="body">
                    <div className="sidebar">
                        <nav className="nav">
                            <ul>
                                <li onClick={() => this.handleRouteChange(true)}><Link to='/'>Write</Link></li>
                                <li onClick={() => this.handleRouteChange(false)}><Link to='/browse'>Browse</Link></li>
                            </ul>
                        </nav>
                       
                        <div className="toolbar">
                            <this.RenderSide />
                        </div>

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
