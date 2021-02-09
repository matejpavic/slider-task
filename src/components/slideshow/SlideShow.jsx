import React, { useState } from 'react';
import './SlideShow.scss';
import { SliderData } from './SliderData';

function SlideShow() {

    const [arr1, setArr1] = useState(SliderData.top_row) // ----- arr1 represents first row of images
    const [arr2, setArr2] = useState(SliderData.bottom_row) // ----- arr1 represents first row of images

    const moveToLeftHandler = () => {

        //first row of images
        const a = [...arr1];
        const b = a.shift();
        a.push(b);
        setArr1(a)

        //second row of images
        const c = [...arr2];
        const d = c.shift();
        c.push(d);
        setArr2(c)
    }

    const moveToRightHandler = () => {

        //first row of images
        const a = [...arr1];
        const b = a.pop();
        a.unshift(b);
        setArr1(a)

        //second row of images
        const c = [...arr2];
        const d = c.pop();
        c.unshift(d);
        setArr2(c)
    }

    return (
        <div className='slideshow'>
            <div className='top-row'>
                {
                    arr1.map((item, index) => {
                        const {id, image } = item;
                        return(
                            <img key={id} className='image' src={image} alt='slide'/>
                        )
                    })
                }
            </div>
            <div className='bottom-row'>
                {
                    arr2.map((item, index) => {
                        const {id, image } = item;
                        return(
                            <img key={id} className='image' src={image} alt='slide'/>
                        )
                    })
                }
                <div className='navigation'>
                    <button 
                        className='button' 
                        style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/arrow-blue-left.png'})` }}
                        onClick={moveToLeftHandler} 
                    />
                    <button 
                        className='button' 
                        style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/arrow-blue-right.png'})` }}
                        onClick={moveToRightHandler}
                    />
                </div>
            </div>
        </div>
    );
}

export default SlideShow;