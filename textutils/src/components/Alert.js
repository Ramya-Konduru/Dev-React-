import React from 'react' // React functional base component, we call it as!

function Alert(props) {

    const capitalise = (word) => {
        let capt = word.toLowerCase();
        return capt.charAt(0).toUpperCase() + capt.slice(1);
    }
    return (
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{capitalise(props.alert.action)}</strong>! {props.alert.msg}
            {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close">
            </button> */}
        </div>
    )
}

export default Alert