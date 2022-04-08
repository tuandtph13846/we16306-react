import { useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form'
import { signup } from '../api/auth';

type FormValues = {
    name: string,
    email: string,
    password: string
}
const Signup = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();
    const navigate = useNavigate();
    const onSubmit: SubmitHandler<FormValues> = async (data) => {
        await signup(data);
        navigate("/signin")
    }
    return (
        <div className="signupform">
            {/* <form onSubmit={handleSubmit(onSubmit)} action="">
                 name:<input type="text" {...register('name',{required:true, minLength: 5})} />
                {errors.name && errors.name.type === "required" && <span>Required</span>}
                {errors.name && errors.name.type === "minLength" && <span>Min length</span>} 
                email:<input type="email" {...register('email',{ required:true})} />
                password:<input type="password" {...register('password')} /> 
                <button>Add</button>
            </form> */}


            <div className="container">

                <div className="w3l-form-info">
                    <div className="w3_info rounded-2xl">
                        <h2>SignUp</h2>
                        <form onSubmit={handleSubmit(onSubmit)} action="">
                            <div className="input-group">
                                <span><i className="fas fa-user" aria-hidden="true" /></span>
                                <input type="text" placeholder="Username or Name" required  {...register('name', { required: true, minLength: 5 })} />
                            </div>

                            {errors.name && errors.name.type === "required" && <span>Required</span>}
                            {errors.name && errors.name.type === "minLength" && <span>Min length</span>}

                            <div className="input-group">
                                <span><i className="fas fa-user" aria-hidden="true" /></span>
                                <input type="email" placeholder="Username or Email" required  {...register('email', { required: true })} />
                            </div>

                            <div className="input-group">
                                <span><i className="fas fa-key" aria-hidden="true" /></span>
                                <input type="Password" placeholder="Password" required {...register('password')} />
                            </div>

                            <button className="btn btn-primary btn-block" type="submit">SignUp</button>
                        </form>

                    </div>
                </div>

            </div>

        </div>


    )
}
export default Signup