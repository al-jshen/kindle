import React, { Component } from 'react';

class Write extends Component {

    render() {
        return (
            <div className="writeContainer">
                <input type="text" className="titleInputBox" />
                <textarea className="bodyInputBox" />
            </div>
        );
    }

}

export default Write;
