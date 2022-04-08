import React from 'react'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'

type Props = {}
const slideImages = [
  'images/slide_1.jpg',
  'images/slide_2.jpg',
  'images/slide_3.jpg'
];

const Banner = (props: Props) => {
  return (
    <div className="banner">
      <div>
        <Slide easing="ease">
          <div className="each-slide">
            <div style={{ 'backgroundImage': `url(${slideImages[0]})` }}>

            </div>
          </div>
          <div className="each-slide">
            <div style={{ 'backgroundImage': `url(${slideImages[1]})` }}>

            </div>
          </div>
          <div className="each-slide">
            <div style={{ 'backgroundImage': `url(${slideImages[2]})` }}>

            </div>
          </div>
        </Slide>

      </div>
      <div className="banner-info text-center">
        <i className="shipping" />
        <h3>Shopping Place For Girls</h3>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enimcidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim</p>
        <a href="/product">All Products</a>
      </div>
    </div>
  )
}

export default Banner