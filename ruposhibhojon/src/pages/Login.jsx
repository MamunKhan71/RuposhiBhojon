import { FaGithub } from "react-icons/fa";
import { FaArrowRightToBracket } from "react-icons/fa6"
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import loginAnimation from '../assets/lottie/loginLottie.json'
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useForm } from "react-hook-form"
import { Helmet } from "react-helmet";

const Login = () => {
    const { userGoogleAuth, userGithubAuth, userEmailSignIn } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    if (location?.state) {
        navigate(location.state.from)
    }
    const [info, setInfo] = useState(null)
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const handleLogin = data => {
        const email = data.email
        const password = data.password
        console.log(email, password);
        userEmailSignIn(email, password)
            .then(user => {
                localStorage.setItem('isAuth', 'authenticated')
            })
            .catch(error => {
                setInfo(error.code);
            })
    }
    const handleGoogleSignUp = () => {
        userGoogleAuth()
            .then(user => {
                localStorage.setItem('isAuth', 'authenticated')
            })
            .catch(error => {
                setInfo(error.code);
            })
    }
    const handleGithubSignUp = () => {
        userGithubAuth()
            .then(user => {
                localStorage.setItem('isAuth', 'authenticated')
            })
            .catch(error => {
                setInfo(error.code);
            })
    }
    return (
        <div className="lg:flex justify-between items-center lg:gap-10 lg:my-12 w-full">
            <Helmet>
                <title>RuposhiBhojon | Login</title>
            </Helmet>
            <div className="flex-1 flex items-center justify-center rounded-xl">
                <Lottie className="h-40 lg:h-auto" animationData={loginAnimation} loop={true} />
            </div>
            <div className="flex-1 w-full lg:w-1/2">
                <div
                    className="w-full lg:px-16 xl:px-12
  flex items-center justify-center lg:py-12"
                >
                    <div className="w-full h-100 space-y-4">
                        <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12 text-center">
                            <span className="text-primary font- text-2xl">Log in</span>
                            <p className="text-base text-center font-normal text-gray-400">Please Login to your account</p>
                            {
                                info && <p className="text-gray-400 text-sm font-medium text-center">{info}</p>
                            }
                        </h1>
                        <hr />
                        <form onSubmit={handleSubmit(handleLogin)} className="mt-6" action="#" method="POST">
                            <div>
                                <label className="font-medium">Email Address</label>
                                <input {...register('email')}
                                    type="email"
                                    placeholder="Enter Email Address"
                                    className="w-full px-4 py-3 rounded-lg mt-2 bg-base-200"
                                />
                            </div>
                            <div className="mt-4">
                                <label className="font-medium">Password</label>
                                <input
                                    {...register('password')}
                                    type="password"
                                    placeholder="Enter Password"
                                    minLength={6}
                                    className="w-full px-4 py-3 rounded-lg mt-2 bg-base-200"
                                    required=""
                                />
                            </div>
                            <div className="text-right mt-2">
                                <a
                                    href="#"
                                    className="text-sm font-semibold hover:text-primary focus:text-primary"
                                >
                                    Forgot Password?
                                </a>
                            </div>
                            <button type="submit" className="relative inline-flex items-center justify-center px-5 py-3 bg-black overflow-hidden font-bold rounded-md group w-full">
                                <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-black opacity-[3%]"></span>
                                <span className="absolute top-0 left-0 w-1/2 h-64 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-primary opacity-100 group-hover:-translate-x-8"></span>
                                <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white inline-flex gap-2 items-center justify-center">Login<FaArrowRightToBracket /></span>
                                <span className="absolute inset-0 rounded-md"></span>
                            </button>
                        </form>
                        <hr className="my-6 border-gray-300 w-full" />
                        <div className="flex gap-4">
                            <button onClick={handleGoogleSignUp}
                                type="button"
                                className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300"
                            >
                                <div className="flex items-center justify-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        className="w-6 h-6"
                                        viewBox="0 0 48 48"
                                    >
                                        <defs>
                                            <path
                                                id="a"
                                                d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
                                            />
                                        </defs>
                                        <clipPath id="b">
                                            <use xlinkHref="#a" overflow="visible" />
                                        </clipPath>
                                        <path clipPath="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z" />
                                        <path
                                            clipPath="url(#b)"
                                            fill="#EA4335"
                                            d="M0 11l17 13 7-6.1L48 14V0H0z"
                                        />
                                        <path
                                            clipPath="url(#b)"
                                            fill="#34A853"
                                            d="M0 37l30-23 7.9 1L48 0v48H0z"
                                        />
                                        <path
                                            clipPath="url(#b)"
                                            fill="#4285F4"
                                            d="M48 48L17 24l-4-3 35-10z"
                                        />
                                    </svg>
                                    <span className="ml-4">Google</span>
                                </div>
                            </button>
                            <button onClick={handleGithubSignUp}
                                type="button"
                                className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300"
                            >
                                <div className="flex items-center justify-center">
                                    <FaGithub className="text-2xl" />
                                    <span className="ml-4">GitHub</span>
                                </div>
                            </button>
                        </div>
                        <p className="mt-8 font-medium">
                            Need an account?{" "}
                            <Link to={`/register`} className="text-black hover:text-primary font-semibold">
                                Create an account
                            </Link>
                        </p>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Login;