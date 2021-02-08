import React, { useState } from 'react';
import './SlideShow.scss';
import { SliderData } from './SliderData';

function SlideShow() {

    const [data, setData] = useState(SliderData)

    // moveHandler = () => {}

    const arrowLeft = process.env.PUBLIC_URL + '/assets/arrow-blue-left.png';

    return (
        <div className='slideshow'>
            <div className='top-row'>
                {
                    data.top_row.map((item, index) => {
                        const {id, image, dim} = item;
                        return(
                            <img key={id} className='image' src={image} style={{height: `${dim}px`}} alt='slide'/>
                        )
                    })
                }
            </div>
            <div className='bottom-row'>
                {
                    data.bottom_row.map((item, index) => {
                        const {id, image, dim} = item;
                        return(
                            <img key={id} className='image' src={image} style={{height: `${dim}px`}} alt='slide'/>
                        )
                    })
                }
                <div className='navigation'>
                    <button className='button' style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/arrow-blue-left.png'})` }} />
                    <button className='button' style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/arrow-blue-right.png'})` }} />
                </div>
            </div>
        </div>
    );
}

export default SlideShow;