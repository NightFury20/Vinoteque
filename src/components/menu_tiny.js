import React from 'react';

const MenuTiny = () => {
    return (
        <div className='menu-tiny'>
            <div className='site-width container'>
                <div className='row'>
                    <nav className="navbar navbar-toggleable-sm navbar-inverse">
                        <div className='justify-content-end'>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#menu-tiny" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                        </div>

                        <div className="collapse navbar-collapse" id="menu-tiny">
                            <ul className="navbar-nav">
                                <div>
                                    <li className="nav-item active">
                                        <a className="nav-link active" href="#">Shop</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">News</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Trade</a>
                                    </li>
                                </div>
                                <div className='right'>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Register</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Sign in</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Need help?</a>
                                    </li>
                                </div>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default MenuTiny;