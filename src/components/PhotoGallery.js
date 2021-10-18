import React from 'react';


function PhotoGallery() {
    const imageUrl = ["./assets/images/5.jpg", "./assets/images/2.jpg", "./assets/images/3.jpg", "./assets/images/4.jpg", "./assets/images/6.jpg", "./assets/images/7.jpg", "./assets/images/8.jpg", "./assets/images/9.jpg"];


    return (
        <div className="photo-gallery">
            {  imageUrl.map(Image => {
                return (<div className="grid-image"><img alt="" src={Image} ></img>
                    <div className="overlay">
                        <button onClick={()=>{alert('hi')}}>Check</button>
                    </div></div>)

            })
            }

        </div>
    )
}

export default PhotoGallery
