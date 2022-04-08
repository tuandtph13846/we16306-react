import { useForm, SubmitHandler } from "react-hook-form";
import { ProductType } from "../types/product";
import { useNavigate } from 'react-router-dom';
import {useState} from 'react'
import axios from 'axios'
type ProductAddProps = {
    onAdd: (product: ProductType) => void
}
type FormValues = {
    name: string,
    price: number,
    img:string,
};

const ProductAdd = (props: ProductAddProps) => {
    const [ img , setImage ] = useState("")
    const { register, handleSubmit, formState: { errors}} = useForm<FormValues>();
    const navigate = useNavigate();
    const onSubmit: SubmitHandler<FormValues> = async (data) => {
        const CLOUDINARY_PRESET = "mndm9ncl";
        const CLOUDINARY_API_URL = "https://api.cloudinary.com/v1_1/caodangfpt/image/upload";
        const formData = new FormData();
            formData.append("file", img);
            formData.append("upload_preset", CLOUDINARY_PRESET);

            const images  = await axios.post(CLOUDINARY_API_URL, formData, {
                headers: {
                    "Content-Type": "application/form-data",
                },
                
            });
            data.img = images.data.url
        props.onAdd(data);
        navigate('/admin/product');
    }

  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)} id="formAddPost">
            <label className="block">
                <span className="block text-sm font-medium text-slate-700">Name</span>
                <input type="text"  className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 w-96" {...register('name', { required: true, minLength: 5})} />
                {errors.name && errors.name.type === "required" && <span>Required</span>}
                {errors.name && errors.name.type === "minLength" && <span>Min length</span>}
                <span className="block text-sm font-medium text-slate-700 mt-5">Price</span>
                <input type="number" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 w-96" {...register('price')}/>
                <span className="block text-sm font-medium text-slate-700 mt-5">Image</span>
                <input type="file" id="" {...register('img')} onChange={(e)=>{setImage(e.target.files[0])}} />
                <button className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-16 mt-5  ">Add</button>
            </label>   
        </form>
        
    </div>
  )
}

export default ProductAdd