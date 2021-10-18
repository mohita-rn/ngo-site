import React from 'react'
import Carousel from './Carousel';
import SampleProducts from './SampleProducts.js';
// import PhotoGallery from '../PhotoGallery.js';
import EmbedLink from './EmbedLink';
import Description from './Description';
import '../../scss/LandingPage.scss'
export default function LandingPage() {
    return (
        <>
            <Carousel />
            <Description/>
            <SampleProducts />

            {/* <PhotoGallery /> */}
            <EmbedLink />
        </>

    )
}
