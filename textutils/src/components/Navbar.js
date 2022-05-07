// first react app creation, jsx, bootsrtap to react, Props and its types, Hooks(state and handling events)

import React from 'react'
import PropTypes from 'prop-types' //sc : impt 

export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/">TextUtils</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">{props.link}</a>
                        </li>
                        {/* <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="/">{props.anotherLink}</a></li>
                                <li><a className="dropdown-item" href="/">Another action</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="/">Something else here</a></li>
                            </ul>
                        </li> */}
                        {/* <li className="nav-item">
              <a className="nav-link disabled">Disabled</a>
            </li> */}
                    </ul>
                    <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable mode</label>
                    </div>
                </div>
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    link: PropTypes.string.isRequired, // default prop and the real prop aren't set then it will show an error! or undefined // sc for proptype string : imp pts
    anotherLink: PropTypes.string
}

// Specifies the default values for props: i.e if you want to set default valuse for props then you can use, for 2nd preference and redundancy
Navbar.defaultProps = {
    link: 'AboutUs'
};