import React from 'react';
import ReactDOM from 'react-dom';

import MenuMain from './components/menu_main';
import MenuTiny from './components/menu_tiny';
import SearchBar from './components/search_bar';
import BannerLG from './components/banner_lg';
import BannerSM from './components/banner_sm';
import ProductCategory from './components/product_category';
import BannerFooter from './components/banner_footer';
import MenuFooter from './components/menu_footer';

import awardWinners from '../data/award-winners';
import bestSellers from '../data/best-sellers';

const App = () => {
    return (
        <div className='app'>
            <MenuTiny />
            <MenuMain />
            <SearchBar />

            <div className='site-width container'>
                <div className='index-row row'>
                    <div className='banner-lg-div col-lg-8 col-12'>
                        <BannerLG imgUrl='https://itmates.co.za/wp-content/uploads/2018/01/Banner_RareGems-e1515821950949.jpg' />
                    </div>
                    <div className='col-lg-4 col-12 d-none d-lg-inline-block'>
                        <BannerSM
                            imgUrl='https://itmates.co.za/wp-content/uploads/2018/01/block-1-e1515833806207.jpg'
                            title='SIGN UP TO OUR MONTHLY NEWSLETTER'
                            link='#' />
                        <BannerSM
                            imgUrl='https://itmates.co.za/wp-content/uploads/2018/01/block-2-e1515833814543.jpg'
                            title='MATURE YOUR WINE WITH US'
                            link='#' />
                    </div>
                </div>                
            </div>

            <ProductCategory products={awardWinners} />
            <ProductCategory products={bestSellers} />

            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-md-4'>
                        <BannerFooter imgUrl='https://itmates.co.za/wp-content/uploads/2018/01/block-2-e1515833814543.jpg' text1='Latest' text2='NEWS' link='#' />
                    </div>

                    <div className='col-12 col-md-4'>
                        <BannerFooter imgUrl='https://itmates.co.za/wp-content/uploads/2018/01/block-2-e1515833814543.jpg' text1='Latest' text2='NEWS' link='#' />
                    </div>

                    <div className='col-12 col-md-4'>
                        <BannerFooter imgUrl='https://itmates.co.za/wp-content/uploads/2018/01/block-2-e1515833814543.jpg' text1='Latest' text2='NEWS' link='#' />
                    </div>
                </div>
            </div>

            <MenuFooter />
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector('.render-target'));