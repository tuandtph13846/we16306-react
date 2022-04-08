import React from 'react'
import { list } from '../api/product'
import { Link, useParams } from 'react-router-dom';
type Props = {}

const Product =  async (props: Props) => {
  const response = await list();
  return (
    <div>
      ${'{'}response.data.map((pro) =&gt;
      <div className="">
        <div className="col_1_of_5 span_1_of_5 m-14 pl-8">
          <div className="border p-3">
            <a href="/product/${pro.id}">
              <img className="grid-img" src="${pro.img}" alt="" />
            </a>
            <h3 className="my-3"><a href="" className="font-semibold text-lg text-orange-500 ">${'{'}pro.title{'}'}</a></h3>
            <button className="left">${'{'}pro.price{'}'} VNĐ</button> <br />
            {/* <p>${'{'}pro.desc{'}'}</p> */}
            
            
          </div>
        </div>
      </div>
      `).join(""){'}'}
    </div>




  )
}
export default Product

