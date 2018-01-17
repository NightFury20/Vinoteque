import React from 'react';

const BannerLG = (props) => {
    return (
        <div className='banner-lg'>
            <a href='#'><img src={props.imgUrl} /></a>
        </div>
    );
}

export default BannerLG;