import { useForm, SubmitHandler } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import { signin } from '../api/auth';
import { authenticate } from '../utils/localStorage';

type FormValues = {
    name: string,
    email: string,
    password: string
}
const Signin = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();
    const navigate = useNavigate();
    const onSubmit: SubmitHandler<FormValues> = async (data) => {
        const { data: user } = await signin(data);
        authenticate(user, () => navigate('/'));
    }
    return (
        <div className="signinform">
            {/* <form onSubmit={handleSubmit(onSubmit)}>
            <input type="email" {...register('email', { required: true})}/>
            <input type="password" {...register('password')}/>
            <button>Dang nhap</button>
        </form> */}
            <div className="container">

                <div className="w3l-form-info">
                    <div className="w3_info rounded-2xl">
                        <h2>Login</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <div className="input-group">
                                <span><i className="fas fa-user" aria-hidden="true" /></span>
                                <input type="email" placeholder="Username or Email" required  {...register('email', { required: true })} />
                            </div>
                            <div className="input-group">
                                <span><i className="fas fa-key" aria-hidden="true" /></span>
                                <input type="Password" placeholder="Password" required {...register('password')} />
                            </div>
                            <div className="form-row bottom">
                                <div className="form-check">
                                    <input type="checkbox" id="remenber" name="remenber" defaultValue="remenber" />
                                    <label htmlFor="remenber"> Remember me?</label>
                                </div>
                                <a href="#url" className="forgot">Forgot password?</a>
                            </div>
                            <button className="btn btn-primary btn-block" type="submit">Login</button>
                        </form>
                        <p className="continue"><span>or Login with</span></p>

                        <p className="account">Don't have an account? <a href="signup">Sign up</a></p>
                    </div>
                </div>

            </div>

        </div>

    )
}
export default Signin