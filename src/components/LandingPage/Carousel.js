import React, { useEffect } from 'react';
import ImageSlider from './ImageSlider';
function Carousel() {
    const url = "./assets/images/three.jpg";
    const imageUrl = ["./assets/images/one.jpg", "./assets/images/two.jpg", "./assets/images/three.jpg"]
    useEffect(() => {
        var carouselImage = document.getElementById("imageSlide");
        var i = 0;
        var index = 0;
        setInterval(() => {
            if (++i % 2) {
                carouselImage.style.opacity = 0.1;
            } else {
                carouselImage.src = imageUrl[index = (index + 1) % imageUrl.length];
                carouselImage.style.opacity = 1;
            }
        }, 10000);
    })
    return (
        <ImageSlider url={url} index={0} />
    );
}

export default Carousel;