import { Paper } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import Lightbox from 'react-image-lightbox';

import '../../scss/Products.scss'
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app


export default function Products() {
  const [products, setProducts] = useState([])

  const [photoIndex, setPhotoIndex] = useState(0)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    let array = []
    for (let i = 1; i <= 100; i++) {
      array.push(`./assets/images/products/${i}.jpg`)
    }
    console.log(array);
    setProducts(array)
  }, []);

  const openImage = (index) => {
    setIsOpen(true);
    setPhotoIndex(index)
  }
  return (
    <div class="products">
      {
        products.length > 0 && products.map((product, index) => {
          return (
            <Paper elevation={3} className="products-images">
              <img class="product-image" src={product} alt={product} onClick={e => openImage(index)} />
            </Paper>
          )
        })
      }
      <div>
        {isOpen && (
          <Lightbox
            class="light-box"
            mainSrc={products[photoIndex]}
            nextSrc={products[(photoIndex + 1) % products.length]}
            prevSrc={products[(photoIndex + products.length - 1) % products.length]}
            onCloseRequest={() => setIsOpen(false)}
            onMovePrevRequest={() =>
              setPhotoIndex((photoIndex + products.length - 1) % products.length)
            }
            onMoveNextRequest={() =>
              setPhotoIndex((photoIndex + 1) % products.length)
            }
          />
        )}
      </div>
    </div>

  )
}
