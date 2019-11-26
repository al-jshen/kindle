import React, { Component } from 'react';

class Write extends Component {

    render() {
        return (
            <div className="writeContainer">
                <input type="text" placeholder="Title" className="titleInputBox" />
                <textarea placeholder="Start writing here..." className="bodyInputBox" />
            </div>
        );
    }

}

export default Write;
