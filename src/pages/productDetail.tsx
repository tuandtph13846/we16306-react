import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { ProductType } from '../types/product';




type ListProductDetail  = [
    data: ProductType[],
    onListDetail: (id: number) =>void,
]

const ProductDetail = (props: ListProductDetail) => {
    const { id } = useParams();
    useEffect(() => {
      const getProduct = async () => {
        await props.onListDetail(id)
      }
      getProduct();
    },[id])
    // const [product, setProduct] = useState<ProductType>();
    // useEffect(() => {
    //     const getProduct = async() => {
    //         const { data } = await read(id);
    //         setProduct(data)
    //     }    //     getProduct();
    // }, [id])
    
  return (
    <div className="container">
  <div className="row single">
    <div className="col-md-9 span-single">
      <div className="single_left">
        <div className="grid images_3_of_2">
          <ul id="etalage">
            <li className="flex flex-wrap justify-center">
                <div className="image w-96  px-4 m-16">
                  <img  src={props.data.img} />
                </div>
                
                
              
            </li>

          </ul>
          <div className="clearfix" />		
        </div>
        <div className="desc1 span_3_of_2">
          
          
          <div className="det_nav text-5xl">
            <h4>
              {props.data.name}
            </h4>
          </div>
          <button className="left text-3xl">{props.data.price} VNĐ</button> <br />
          
          <div className="filter-by-color">
            <h3>Filter by Color</h3>
            <ul className="w_nav2">
              <li><a className="color1" href="#" /></li>
              <li><a className="color2" href="#" /></li>
              <li><a className="color3" href="#" /></li>

            </ul>
          </div>
          <div className="btn_form">
            <a href="single.html">buy now</a>
          </div>
          <a href="#"><span>login to save in wishlist </span></a>
        </div>
        <div className="clearfix" />
      </div>

      		
    </div>
  </div>
  </div>

  )
}

export default ProductDetail