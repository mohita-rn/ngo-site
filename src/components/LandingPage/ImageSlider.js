import React from 'react';
const ImageSlider = ({ url, index }) => {
    return (
        <div className="carousel">
            <img index={index} id="imageSlide" alt="" className="imageSlide" src={url} />
        </div>
    )
}
export default ImageSlider;