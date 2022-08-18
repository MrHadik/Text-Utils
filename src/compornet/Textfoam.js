import React, { useState } from 'react'

export default function Textfoam() {
    const cgupcase = () => {
        let newtext = text.toUpperCase();
        seText(newtext);
    }

    const cgtitlecase = () => {
        let newtext = text.toLowerCase();
        seText(newtext);
    }

    const cl = () => {
        seText('');
    }

    const fortest = () => {
        rmespce();
        let upr = text.trim().toLowerCase().split(' ').map((word) => {
            return (word[0].trim().toUpperCase() + word.slice(1))
        }).join(' ')
        seText(upr);
    }

    const handeOnChang = (event) => {
        seText(event.target.value);
    }

    const Copytext = () => {
        var cp = document.getElementById("mybox");
        cp.select();
        navigator.clipboard.writeText(cp.value);
    }

    const rmespce = () => {
        var rmtext = text.split(/[ ]+/);
        seText(rmtext.join(' '));
    }

    const [text, seText] = useState("");
    return (
        <>
            <div className='container my-3'>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label"><h4>Enter Text</h4></label>
                    <textarea value={text} onChange={handeOnChang} className="form-control" id="mybox" rows="8"></textarea>
                    <button className='btn btn-primary mt-3 mx-3' onClick={cgupcase}>Upercase</button>
                    <button className='btn btn-primary mt-3' onClick={cgtitlecase}>Lovercase</button>
                    <button className='btn btn-primary mt-3 mx-3' onClick={fortest}>TitleCase</button>
                    <button className='btn btn-primary mt-3' onClick={Copytext}>Copy</button>
                    <button className='btn btn-primary mt-3 mx-3' onClick={rmespce}>Remove Extra spces</button>
                    <button className='btn btn-primary mt-3' onClick={cl}>Clear</button>
                </div>
            </div>
            <div className='container my-3' id='err'>
                <h5><p><b>{text.split(" ").length}</b> Word and <b>{text.length}</b> is carecter</p></h5>
            </div>
        </>
    )
}
