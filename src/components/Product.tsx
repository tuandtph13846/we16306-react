import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { list } from '../api/product';
import { ProductType } from '../types/product';
type Props = {
  data: ProductType[],
}



const Product = (props: Props) => {
  const [ products,setProduct ] = useState<ProductType>();
  useEffect(() => {
    const getProduct = async () => {
        const data = await list();       
        setProduct( data );
        console.log(data);
        
    }
    getProduct();
  },[])
  
  return (
    <div>
       <main className="mt-[10px]">
        <div className="max-w-[1440px] mx-auto ">
          <div className="my-[20px] ">
            <h2 className="font-semibold text-2xl uppercase my-[30px] text-center text-slate-50">Tất cả Sản phẩm</h2>
            <div className="grid grid-cols-5 gap-8 ">
              {props.data && props.data.map((item, index) => {
                return <div key={index} className="border p-3 bg-sky-100 rounded-2xl">
                  <Link to={`/product/${item._id}`}>
                    <img src={item.img} className="w-[250px] h-[250px] rounded-2xl ml-1" />
                  </Link>
                  <h3 className="my-3"><Link to={`/product/${item._id}`} className="font-semibold text-[18px] ">{item.name}</Link></h3>
                  <p className="text-[red] font-semibold text-[17px]">{item.price.toLocaleString("vi-VN", { style: "currency", currency: "VND" })}</p>
                </div>
              })}
            </div>
          </div>
        </div>
      </main>
    </div>
    
  )
}

export default Product