import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import React, { useContext } from 'react';
import app from '../firebase/firebase.config';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProviders/AuthProviders';
import google from '../../assets/logo/google.png';
import Lottie from "lottie-react";
import lottie from '../../assets/logo/animation2.json';

const Login = () => {

    const auth = getAuth(app);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'

    //sign in by google
    const googleProvider = new GoogleAuthProvider();
    const handleLoginWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
                navigate(from, { replace: true })
                //toast.success('Successfully login by Google!')
            })
            .catch(error => {
                const errorMessage = error.message;
            })
    }

    const { logIn } = useContext(AuthContext);
    const handleLogin = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        logIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                navigate(from, { replace: true })
                form.reset()
                // toast.success('Successfully login!')

            })
            .catch(error => {
                console.log(error.message)
            })
    }



    return (
        <div>
            <h1 className="text-3xl text-center font-bold pt-8">Please Login now!</h1>
            <div className="hero pt-2">
                <div className="hero-content">

                    <div className='mr-10'>
                        <Lottie className='w-64 h-64' animationData={lottie} loop={true} />
                    </div>


                    <div className="card w-full  shadow-xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="Password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                                <label className="label">
                                    <a href="#" className="label-text-alt ">Don't have account? <Link className='link link-hover text-red-600 ml-2'
                                        to='/signUp'>Registration</Link></a>
                                </label>
                            </div>
                            <div className="form-control mt-4">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <div className='text-center'>
                            <p>Or</p>
                            <div className=" mt-2 mb-2">
                                <button onClick={handleLoginWithGoogle} className="btn btn-sm btn-active hover:bg-blue-600 hover:text-white btn-ghost">
                                    <img className='w-8 h-8 mr-2' src={google} /> Login by Google</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;