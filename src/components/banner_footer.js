import React from 'react';

const BannerFooter = props => {
    const { imgUrl, text1, text2, link } = props;

    return (
        <div className='banner-footer'>
            <button className='btn' style={{backgroundImage: `url(${imgUrl})`}}>
                <h4>{text1}</h4>
                <h3>{text2}</h3>
            </button>
        </div>
    );
}

export default BannerFooter;