import React, { Component } from 'react';
import ProductDetail from './product_detail';

class ProductCategory extends Component {
    render() {
        const { title, products } = this.props.products;

        return (
            <div className='product-category'>
                <div className='site-width container'>
                    <h2>{title}</h2>
                    <hr />

                    <div className='products row'>
                        {products.map(product => <ProductDetail product={product} key={product.id} /> ) }
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductCategory;