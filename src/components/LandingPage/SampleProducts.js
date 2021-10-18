import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@material-ui/core'


function Item({ urls }) {
  console.log(urls);
  return (
      <Paper className="paper">
        {
          urls.map((url, i) => {
            return <img class="product-carousel-imgs" key={i} alt="" src={url} />
          })
        }
      </Paper>
  )
}

export default function SampleProducts(props) {


  const products = {
    "one": ["./assets/images/products/4.jpg", "./assets/images/products/2.jpg", "./assets/images/products/3.jpg"],
    "two": ["./assets/images/products/5.jpg", "./assets/images/products/6.jpg", "./assets/images/products/7.jpg"],
    "three": ["./assets/images/products/8.jpg", "./assets/images/products/9.jpg", "./assets/images/products/10.jpg"],
  }

  return (
    <div class="productsCarousel">
      <Carousel >
        {
          Object.keys(products).map((key, i) => <Item key={i} urls={products[key]} />)
        }
      </Carousel>
      <Button className="viewAllProducts" onClick={e=>window.location.href="/products"}>
        View All Products
      </Button>
    </div>
  )
}



