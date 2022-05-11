// sc for this whole thing is : rfc(react functional component)
import React, { useState } from 'react'

export default function TextForm(props) {

    const [text, setText] = useState("");

    const upHandling = () => {
        let newText = text.toUpperCase();
        setText(newText);
        if (text === "") {
            props.showAlert("Please enter your text in TextArea below!", "warning", "Warning")
        } else {
            props.showAlert("Converted to Uppercase!", "success", "Successful")
        }
    }
    const lwHandling = () => {
        let newText = text.toLowerCase();
        setText(newText);
        if (text === "") {
            props.showAlert("Please enter your text in TextArea below!", "warning", "Warning")
        } else {
            props.showAlert("Converted to Lowercase!", "success", "Successful")
        }
    }
    const clHandling = () => {
        let newText = "";
        setText(newText);
        if (text === "") {
            props.showAlert("Please enter your text in TextArea below!", "warning", "Warning")
        } else {
            props.showAlert("Cleared the text!", "success", "Successful")
        }
    }
    const copyHandling = () => {
        // let newText = text;
        let newText = document.getElementById("myBox");
        /* Select the text field */
        newText.select();
        newText.setSelectionRange(0, 99999); /* For mobile devices */

        /* Copy the text inside the text field */
        navigator.clipboard.writeText(newText.value);
        if (text === "") {
            props.showAlert("You haven't entered any text in the Text Area!", "primary", "Alert")
        } else {
            props.showAlert("Copied to clipboard!", "success", "Successful")
        }
    }

    const handlingOnChange = (event) => {
        console.log("if i wouldn't add 'On Change' i wouldn't type any text in the textarea");
        setText(event.target.value)
    }

    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" style={{ backgroundColor: props.mode === 'dark' ? '#212529' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} value={text} onChange={handlingOnChange} rows="8" />
                </div>
                <button type="button" className="btn btn-success" onClick={upHandling} >UpperCase</button>
                <button type="button" className="btn btn-warning ms-3" onClick={lwHandling} >LowerCase</button>
                <button type="button" className="btn btn-secondary ms-3" onClick={copyHandling} >Copy</button>
                <button type="button" className="btn btn-primary ms-3" onClick={clHandling} >Reset</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Your text summary</h2>
                <p>{text.trim().split(/\s+/).length} characters and {text.length} words</p>
                <p>{0.08 * text.split(" ").length} minutes to read this!</p>
                <h2>Preview</h2>
                <p>{text.length < 1 ? "Enter your text in the above text Box to preview it here" : text}</p>
            </div>
        </>
    )
}
