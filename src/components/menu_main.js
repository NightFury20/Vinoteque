import React from 'react';

const MenuMain = () => {
    return (
        <div className='menu-main'>
            <div className='container'>
                <div className='row'>
                    <nav className="navbar navbar-toggleable-md navbar-inverse col-12">
                        <a className="navbar-brand menu-main-logo" href="#"><img src='https://itmates.co.za/wp-content/uploads/2018/01/logo.png' /></a>

                        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" href="#">WINE</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">SPIRITS</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">BRANDS</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">PROMOTIONS</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">CONTACT</a>
                                </li>
                            </ul>
                        </div>

                    
                        <nav className='cart-nav nav justify-content-end'>
                            <div className="cart-nav-link dropdown nav-link">
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#search-collapse" aria-controls="search-collapse" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="fa fa-lg fa-search"></span>
                                </button>
                            </div>
                            <div className="cart-nav-link dropdown nav-link">
                                <button className="cart-btn btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="fa fa-lg fa-shopping-cart"></i>
                                    <span className="badge badge-primary">0</span>
                                </button>
                            </div>
                            <div className='cart-nav-link nav-link'>
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                            </div>
                        </nav>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default MenuMain;