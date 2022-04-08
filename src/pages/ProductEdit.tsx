import { useEffect, useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { read } from '../api/product';
import { ProductType } from '../types/product';

type ProductEditProps = {
    onUpdate: (product: ProductType) => void
}
type FormInputs = {
    _id: number;
    name: string,
    price: number,
    img:string
}

const ProductEdit = (props: ProductEditProps) => {
    const { id } = useParams();
    
    const {register, handleSubmit, formState: {errors}, reset} = useForm<FormInputs>();
    const navigate = useNavigate();

    useEffect(() => {
        const getProduct = async () => {
            const { data } = await read(id);
            reset(data);
        }
        getProduct();
    }, []);

    const onSubmit: SubmitHandler<FormInputs> = data => {
        props.onUpdate(data);
        navigate('/admin/product');
    } 
    
  return (
    <form action="" onSubmit={handleSubmit(onSubmit)} id="formEditPost">
        <span className="block text-sm font-medium text-slate-700">Name</span>
        <input type="text" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 w-96"  placeholder='Tên sản phẩm' {...register('name')}/>
        <span className="block text-sm font-medium text-slate-700 mt-5">Price</span>
        <input type="number" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 w-96" placeholder='Giá sản phẩm' {...register('price')}/>
        <button  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-16 mt-5 ">Update</button>
    </form>
  )
}

export default ProductEdit