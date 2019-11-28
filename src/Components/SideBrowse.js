import React, { Component } from 'react';
const { dialog } = window.require('electron').remote;
const fs = window.require('fs');

function strip(str) {
    return str.replace(/^\s+|\s+$/g, '');
}

class SideBrowse extends Component {

    handleProcess = (e) => {
        e.preventDefault();
        // dialog.showOpenDialog((filename) => {
        //     if (filename === undefined) {
        //         alert('No file selected.');
        //         return;
        //     } 

        //     fs.readFile(filename[0], 'utf8', (err, data) => {
        //         if (err) {
        //             alert('Error!');
        //         }
        //         const readDat = data;
        //     })
        // })
        dialog.showOpenDialog({
            filters: [
                { name: "Text", extensions: ['txt'] }
            ]
        }).then((result) => {
            const fp = result.filePaths[0];
            fs.readFile(fp, 'utf8', (err, data) => {
                if (err) {
                    alert('Error!');
                }
                alert(data);
            })
        })
    }

    processClippings = (txt) => {
        // takes in clippings and formats it, saves in localstorage
        const clips = txt.toString().split(/\n==========/).slice(0, -1);
        let processed = {};
        clips.forEach((item) => {
            let [head, body] = strip(item).split(/\n-\s/);
            let [metadata, quote] = body.split(/\n\s\n/);
            let [mtdPage, mtdLoc, mtdDate] = metadata.split(/\s\|\s/);
            let [locStart, locEnd] = mtdLoc.split('-')
            let [title, author] = head.replace(')', '').split(' (');

            let entry = {
                'page': parseInt(mtdPage.replace('Your Highlight on page ', '')),
                // 'start': parseInt(locStart.replace('Location ', '')),
                // 'end': parseInt(locEnd),
                'date': new Date(mtdDate.replace('Added on ', '')),
                'text': quote
            }
            
            if (!(processed.hasOwnProperty(title))) {
                processed[title] = {
                    'title': title,
                    'author': author,
                    'highlights': [entry]
                }
            } else {
               processed[title]['highlights'].push(entry); 
            }
         })
        return Object.values(processed);
    }

    render() {
        return (
            <div>
                <button type="text"
                    name="process"
                    onClick={this.handleProcess} />
            </div>
        ); 
    }
}

export default SideBrowse;
