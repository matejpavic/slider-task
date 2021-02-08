import React from 'react';
import './Slider.scss';
import SlideShow from '../slideshow/SlideShow';
import Description from '../description/Description';


function Slider() {
    return (
        <div className='slider'>
            <SlideShow />
            <Description />
        </div>
    );
}

export default Slider;