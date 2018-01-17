import React from 'react';

const BannerSM = props => {
    const { imgUrl, title, link } = props;

    return (
        <div className='banner-sm'>
            <div className='pt-xl-5 pt-lg-4 pt-md-2' style={{backgroundImage: `url(${imgUrl})`}}  >
                <h4 className='pl-3 pr-3'>{title}</h4>
                <button className='btn btn-default col-auto'>CLICK HERE</button>
            </div>
        </div>
    );
}

export default BannerSM;