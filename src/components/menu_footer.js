import React from 'react';

const MenuFooter = () => {
    return (
        <div className='menu-footer'>
            <div className='container'>
                <div className='sub-menus row'>
                    <div className='col-12 col-sm-6 col-md-3'>
                        <h4>About Vinoteque</h4>
                        <p><a href='#'>About</a></p>
                        <p><a href='#'>Winebank</a></p>
                        <p><a href='#'>Brands</a></p>
                        <p><a href='#'>News</a></p>
                        <p><a href='#'>Promotions</a></p>
                    </div>

                    <div className='col-12 col-sm-6 col-md-3'>
                        <h4>Customer Service</h4>
                        <p><a href='#'>Need help?</a></p>
                        <p><a href='#'>Terms of Use</a></p>
                        <p><a href='#'>Delivery Policy</a></p>
                        <p><a href='#'>Trade Sales</a></p>
                        <p><a href='#'>FAQ</a></p>
                    </div>

                    <div className='col-12 col-sm-6 col-md-3'>
                        <h4>My Account</h4>
                        <p><a href='#'>Sign In</a></p>
                        <p><a href='#'>Forgot Password?</a></p>
                        <p><a href='#'>Create Account</a></p>
                    </div>

                    <div className='col-12 col-sm-6 col-md-3'>
                        <h4>Newsletter</h4>
                        <input className='form-control' placeholder='Signup for our newsletter' />
                        <button className='sign-up btn btn-primary'>SIGN UP</button>
                    </div>
                </div>
            </div>

            <div className='ribbon'>
                <div className='container'>
                    <div className='row'>
                        <div className='logo col-xl-2 mr-auto ml-auto'>
                            <img src='https://itmates.co.za/wp-content/uploads/2018/01/ribbon_logo.png' />
                        </div>

                        <div className='copyright-col col-xl-8 pr-xl-0 pl-xl-0 pt-0'>
                            <p>Copyright © Vinoteque 2018. All rights reserved. Distell Terms & Conditions | Enjoy Responsibly. Not for Sale to Persons Under the Age of 18.</p>
                        </div>

                        <div className='social col-xl-2'>
                            <div className='row'>
                                <a href='#' className='col-4'><i className='fa fa-2x fa-facebook'></i></a>
                                <a href='#' className='col-4'><i className='fa fa-2x fa-twitter'></i></a>
                                <a href='#' className='col-4'><i className='fa fa-2x fa-instagram'></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='spacer'>
            </div>
        </div>
    );
}

export default MenuFooter;