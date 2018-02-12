import React  from 'react';
import {Link} from 'react-router';


const App = (props) => {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Scotch Books</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
                        {/*<li className="nav-item"><Link className="nav-link" to="/books">Book</Link></li>*/}
                        {/*<li className="nav-item"><Link className="nav-link" to="/cart">Cart</Link></li>*/}
                        <li className="nav-item"><Link className="nav-link" to="/company">Company</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/clients">Client</Link></li>
                    </ul>
                </div>
            </nav>
            {/* Each smaller components */}
            {props.children}
        </div>
    );
};

export default App