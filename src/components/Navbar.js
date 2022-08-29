import { Component } from "react"
import {NavLink} from "react-router-dom"

class Navbar extends Component{
    render(){
        return(
            <>
                <nav className="navbar navbar-expand-lg bg-light">
                    <div className="container-fluid d-flex justify-content-between">
                        <NavLink className="navbar-brand text-danger" to="/">WhatNews</NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse  justify-content-end" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item"><NavLink className="nav-link" aria-current="page" to="/">Home</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link" aria-current="page" to="/business">Business</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link" aria-current="page" to="/entertainment">Entertainment</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link" aria-current="page" to="/health">Health</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link" aria-current="page" to="/science">Science</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link" aria-current="page" to="/sports">Sports</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link" aria-current="page" to="/technology">Technology</NavLink></li>
                        </ul>
                        </div>
                    </div>
                </nav>
            </>
        )
    }
}
export default Navbar