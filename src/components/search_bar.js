import React from 'react';

const SearchBar = () => {
    return (
        <div className='search-bar' >
            <div className='container'>
                <div className='row'>
                    <nav className="navbar navbar-toggleable-md col-12">
                        <div className="collapse navbar-collapse" id="search-collapse">
                            <form className="search-bar-form form-inline my-2 my-lg-0">

                                <div className="search-bar-input input-group col-md-3 mr-sm-2 ml-sm-2">
                                    <div className="input-group-prepend">
                                        <span className="fa fa-lg fa-search" id="basic-addon1"></span>
                                    </div>
                                    <input className="form-control" type="search" placeholder="Search" />
                                </div>

                                <select className="search-bar-input form-control col-md mr-sm-2 ml-xs-2" defaultValue='Brand'>
                                    <option disabled value='Brand'>Brand</option>
                                    <option>...</option>
                                </select>

                                <select className="search-bar-input form-control col-md mr-sm-2 ml-sm-2" defaultValue='Types/Cultivars'>
                                    <option disabled value='Types/Cultivars'>Types/Cultivars</option>
                                    <option>...</option>
                                </select>

                                <select className="search-bar-input form-control col-md mr-sm-2 ml-sm-2" defaultValue='Packsizes'>
                                    <option disabled value='Packsizes'>Packsizes</option>
                                    <option>...</option>
                                </select>

                                <select className="search-bar-input form-control col-md mr-sm-2 ml-sm-2" defaultValue='All Vintages'>
                                    <option value='All Vintages' selected>All Vintages</option>
                                    <option>...</option>
                                </select>
                                
                                <button className="btn btn-default col-sm md-sm-2" type="submit">SEARCH</button>
                            </form>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default SearchBar;