import Lottie from "lottie-react";
import ErrorPageFiles from "../assets/lottie/404.json"
import { IoReturnUpBackSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import 'animate.css';
import { Helmet } from "react-helmet";

const ErrorPage = () => {
    return (
        <div className="font-montserrat">
            <Helmet>
                <title>RuposhiBhojon | 404 Not Found</title>
            </Helmet>
            <>
                <div className="min-w-screen min-h-screen bg-blue-100 flex items-center p-5 lg:p-20 overflow-hidden relative">
                    <div className="flex-1 flex justify-between min-h-full min-w-full rounded-3xl bg-white shadow-xl p-10 lg:p-20 text-gray-800 relative md:flex items-center text-center md:text-left">
                        <div className="w-full md:w-1/2">
                            <div className="mb-10 lg:mb-20 flex items-center justify-center lg:justify-start">
                                <img src="/src/assets/logo2.png" alt="" />
                            </div>
                            <div className="mb-10 md:mb-20 font-light">
                                <h1 className="font-black uppercase text-3xl lg:text-5xl text-primary mb-10 w-full">
                                    You seem to be{' '} <br />
                                    <span style={{ color: 'red' }}>
                                        <Typewriter
                                            words={['lost!', 'disoriented!', 'off-tracked!']}
                                            loop={5}
                                            cursor
                                            cursorStyle='_'
                                            typeSpeed={70}
                                            deleteSpeed={50}
                                            delaySpeed={1000}
                                        />
                                    </span>
                                </h1>
                                <p className="font-medium">The page you're looking for isn't available.</p>
                                <p className="font-medium">Try searching again or use the Go Back button below.</p>
                            </div>
                            <div className="mb-20 md:mb-0">
                                <Link to={`/`} className="text-lg outline-none focus:outline-none transform transition-all hover:scale-110 bg-primary btn text-white font-medium">
                                    Go Back <IoReturnUpBackSharp />
                                </Link>
                            </div>
                        </div>
                        <div className="w-full md:w-4/12 text-center hidden lg:block">
                            <Lottie animationData={ErrorPageFiles}></Lottie>
                        </div>
                    </div>
                    <div className="w-64 md:w-96 h-96 md:h-full bg-blue-200 bg-opacity-30 absolute -top-64 md:-top-96 right-20 md:right-32 rounded-full pointer-events-none -rotate-45 transform" />
                    <div className="w-96 h-full bg-yellow-200 bg-opacity-20 absolute -bottom-96 right-64 rounded-full pointer-events-none -rotate-45 transform" />
                </div>
            </>

        </div>
    );
};

export default ErrorPage;