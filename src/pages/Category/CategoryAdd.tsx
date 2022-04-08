import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { CateType } from '../../types/category'
type CategoryAddProps = {
    onAdd : (category: CateType) => void
}
type FormValues = {
    name : string,
}
const CategoryAdd = (props: CategoryAddProps) => {
    const { register, handleSubmit, formState: { errors}} = useForm<FormValues>();
    const navigate = useNavigate();
    const onSubmit: SubmitHandler<FormValues> = (data) => {
        props.onAdd(data);
        navigate('/admin/category');
    }
  return (
    <form onSubmit={handleSubmit(onSubmit)} id="formAddPost">
            <label className="block">
                <span className="block text-sm font-medium text-slate-700">Name</span>
                <input type="text"  className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 w-96" {...register('name', { required: true, minLength: 2})} />
                {errors.name && errors.name.type === "required" && <span>Required</span>}
                {errors.name && errors.name.type === "minLength" && <span>Min length</span>}
      
                <button className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-16 mt-5  ">Add</button>
            </label>   
        </form>
  )
}

export default CategoryAdd