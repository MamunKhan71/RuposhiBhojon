import { Helmet } from "react-helmet";
import Hero from "../components/Hero";
import { FaCircleArrowRight, FaArrowRightToBracket } from "react-icons/fa6";
import FeaturedSection from "../components/FeaturedSection";
import { Typewriter } from 'react-simple-typewriter'
import Testimonials from "../components/Testimonials";
import WhyRuposhi from "../components/WhyRuposhi";
import WorkSteps from "../components/WorkSteps";
import CompanySlider from "../components/CompanySlider";
import Subscribe from "../components/Subscribe";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>RuposhiBhojon | Home</title>
            </Helmet>
            <div className="space-y-40">
                <div className="h-[650px] relative w-full">
                    <div className="p-24 font-bold absolute flex items-start justify-center flex-col z-10 text-white  w-full h-full rounded-lg bg-opacity-30">
                        <div className="flex justify-between items-center w-full">
                            <div className="space-y-4 basis-2/3">
                                <h1 className="text-6xl font-bold">
                                    Don’t{' '}
                                    <span style={{ color: '#F68712', fontWeight: 'bold' }}>
                                        <Typewriter
                                            words={['buy it', 'bin it']}
                                            loop={5}
                                            cursor
                                            cursorStyle='_'
                                            typeSpeed={70}
                                            deleteSpeed={50}
                                            delaySpeed={1000}
                                        />
                                    </span>
                                </h1>
                                <p>The simple solution
                                    for feeding more and
                                    wasting less</p>
                                <a href="#_" className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
                                    <span className="w-full h-full bg-gradient-to-br from-primary via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
                                    <span className="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
                                        <span className="relative text-white inline-flex gap-2 items-center">Browse Available Food <FaCircleArrowRight /></span>
                                    </span>
                                </a>
                            </div>
                            <div className="flex-1 space-y-4 backdrop-blur-xl shadow-xl p-8 rounded-xl border-2 box w-full">
                                <h1 className="text-center text-lg">Get in touch</h1>
                                <hr className="border-gray-800" />
                                <form>
                                    <div className="mb-5">
                                        <label
                                            htmlFor="name"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                            placeholder="name@flowbite.com"
                                            required=""
                                        />
                                    </div>
                                    <div className="mb-5">
                                        <label
                                            htmlFor="email"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                            required=""
                                        />
                                    </div>
                                    <div className="mb-5">
                                        <label
                                            htmlFor="message"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            Message
                                        </label>
                                        <textarea
                                            type="text"
                                            id="message"
                                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                            required=""
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full text-center text-white inline-flex gap-2 items-center justify-center bg-primary transition ease-in-out hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5"
                                    >
                                        Send Message <FaArrowRightToBracket />
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <Hero />
                </div>
                <CompanySlider />
                <WhyRuposhi />
                <FeaturedSection />
                <Testimonials />
                <WorkSteps />
                <Subscribe />
            </div>
        </div>
    );
};

export default Home;