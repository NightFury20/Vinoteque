import React, { Component } from 'react';

class ProductDetail extends Component {
    award() {
        const { award } = this.props.product;

        if (award) {
            return (
                <div>
                    <i className='award-icon fa fa-2x fa-trophy'></i><p className='award'>{award}</p>
                </div>
            );
        }
    }

    render() {
        const { name, description, imgUrl, price, sixPackPrice, oneFive, newProduct } = this.props.product;

        return (
            <div className='product-detail col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2'>
                <div className='badges'>
                    <div className='left'>
                        <h4>{ oneFive ? <span className='size-badge badge badge-primary'>1.5L</span> : '' }</h4>
                    </div>
                    <div className='right align-self-end'>
                        <h4>{ newProduct ? <span className='new-badge badge badge-primary'>NEW</span> : '' }</h4>
                    </div>
                </div>
                <div className='icons'>
                    <div className='left'>
                    </div>
                    <div className='right align-self-end'>
                        {this.award()}
                    </div>
                </div>

                <img src={imgUrl} />
                <h4>{name}</h4>
                <p className='description'>{description}</p>
                <h4>R {price}</h4>
                <p>R {sixPackPrice} x 6 750ml</p>
                <div className='cart-div row mr-auto ml-auto'>
                    <div className='select-div col-5'>
                        <select className="form-control" defaultValue='1'>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='4'>4</option>
                            <option value='5'>5</option>
                        </select>
                    </div>

                    <button className='btn btn-default col-7'>ADD TO CART</button>
                </div>
            </div>
        );
    }
}

export default ProductDetail;