import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { IoIosArrowRoundForward } from "react-icons/io";
import { TbClock12 } from "react-icons/tb";
import { BsFilterRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { TbListNumbers } from "react-icons/tb";
import { MdShareLocation } from "react-icons/md";
import { useEffect, useState, useRef } from "react";
import { useForm } from "react-hook-form"
import notFound from '../assets/lottie/notFound.json'
import Lottie from "lottie-react";
import { Helmet } from "react-helmet";

const AvailableFood = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const [food, setFood] = useState([])
    const [count, setCount] = useState(0)
    const [itemsPerPage, setItemsPerPage] = useState(6)
    const numberOfPages = Math.ceil(count / itemsPerPage)
    const pages = [...Array(numberOfPages).keys()]
    const [currentPage, setCurrentPage] = useState(0)
    useEffect(() => {
        axios.get('http://localhost:5000/foodCount')
            .then(data => setCount(data.data.count))
    }, [])

    const { isLoading, refetch } = useQuery({
        queryKey: "foods",
        queryFn: () => axios.get(`http://localhost:5000/foods?page=${currentPage}&size=${itemsPerPage}`).then(data => setFood(data.data)),
        refetchOnWindowFocus: false,
        retry: 5,
    })

    const handleSearch = (data) => {
        const searchText = data.searchText
        axios.get(`http://localhost:5000/search?search=${searchText}`)
            .then(data => setFood(data.data))
    }

    useEffect(() => {
        refetch();
    }, [currentPage, itemsPerPage, refetch]);

    const handlePrevious = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1)
        }
    }
    const handleNext = () => {
        if (currentPage < pages.length - 1) {
            setCurrentPage(currentPage + 1)
        }
    }
    const handleItemsPerPage = e => {
        setItemsPerPage(e.target.value)
    }
    const handleTimeRemaining = (time) => {
        const dateAndTime = new Date(time);
        const dateNow = new Date();
        const differenceInMilliseconds = dateAndTime.getTime() - dateNow.getTime();
        const differenceInDays = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24));
        return differenceInDays;
    }

    return (
        <div>
            <Helmet>
                <title>RuposhiBhojon | Available Food</title>
            </Helmet>
            <h1 className="text-3xl font-bold text-center mb-6">Available Foods</h1>
            <p className="text-center font-medium max-w-4xl mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque iusto cumque aut facere consectetur dolore quaerat, dignissimos repudiandae quisquam recusandae.</p>
            <div className="mt-24 space-y-8">
                <form onSubmit={handleSubmit(handleSearch)} className="max-w-lg mx-auto">
                    <label
                        htmlFor="default-search"
                        className="mb-2 text-sm font-medium sr-only dark:text-white"
                    >
                        Search
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg
                                className="w-4 h-4 dark:text-gray-400"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                />
                            </svg>
                        </div>
                        <input
                            {...register('searchText')}
                            type="search"
                            id="default-search"
                            className="block w-full p-4 ps-10 text-sm border rounded-lg"
                            placeholder="Search available foods"
                            required=""
                        />
                        <button
                            type="submit"
                            className="text-white absolute end-2.5 bottom-2.5 bg-primary hover:bg-black font-medium rounded-lg text-sm px-4 py-2"
                        >
                            Search
                        </button>
                    </div>
                </form>
                <div className="flex justify-end items-center">
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn m-1"><BsFilterRight /> Filter by</div>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                            <li><button onClick={() => handleFilter('time')} className="inline-flex gap-2 items-center font-semibold"><TbClock12 />Expiration Date</button></li>
                            <li><button className="inline-flex gap-2 items-center font-semibold"><TbListNumbers />Quantity</button></li>

                        </ul>
                    </div>
                    <hr />
                </div>

                <div className="grid grid-cols-3 gap-6 w-full">
                    {
                        isLoading ? <>
                            <div className="flex flex-col gap-6">
                                <div className="skeleton h-32 w-full"></div>
                                <div className="skeleton h-4 w-28"></div>
                                <div className="skeleton h-4 w-full"></div>
                                <div className="skeleton h-4 w-full"></div>
                            </div>
                            <div className="flex flex-col gap-6">
                                <div className="skeleton h-32 w-full"></div>
                                <div className="skeleton h-4 w-28"></div>
                                <div className="skeleton h-4 w-full"></div>
                                <div className="skeleton h-4 w-full"></div>
                            </div>
                            <div className="flex flex-col gap-6">
                                <div className="skeleton h-32 w-full"></div>
                                <div className="skeleton h-4 w-28"></div>
                                <div className="skeleton h-4 w-full"></div>
                                <div className="skeleton h-4 w-full"></div>
                            </div>
                            <div className="flex flex-col gap-6">
                                <div className="skeleton h-32 w-full"></div>
                                <div className="skeleton h-4 w-28"></div>
                                <div className="skeleton h-4 w-full"></div>
                                <div className="skeleton h-4 w-full"></div>
                            </div>
                            <div className="flex flex-col gap-6">
                                <div className="skeleton h-32 w-full"></div>
                                <div className="skeleton h-4 w-28"></div>
                                <div className="skeleton h-4 w-full"></div>
                                <div className="skeleton h-4 w-full"></div>
                            </div>
                            <div className="flex flex-col gap-6">
                                <div className="skeleton h-32 w-full"></div>
                                <div className="skeleton h-4 w-28"></div>
                                <div className="skeleton h-4 w-full"></div>
                                <div className="skeleton h-4 w-full"></div>
                            </div>
                        </> :
                            <>
                                {
                                    food.length === 0 ?
                                        <div className="col-span-3 flex items-center justify-center w-full">
                                            <div className="relative flex items-center justify-center">
                                                <h1 className="text-4xl font-bold text- absolute top-10 text-center">Food Not Found</h1>
                                                <Lottie animationData={notFound}></Lottie>
                                            </div>
                                        </div> :
                                        food?.map(food => (
                                            <>
                                                <div className="transform rounded-xl shadow-xl transition duration-300 hover:scale-105 ">
                                                    <div className="card bg-base-100 shadow-xl h-[500px]">
                                                        <figure className="relative"><img src={food.food_image} alt="Shoes" />
                                                            <h1 className="absolute top-5 right-5 px-2 py-1 inline-flex gap-2 items-center rounded-lg backdrop-blur-2xl text-white font-bold"><TbClock12 />{handleTimeRemaining(food.expired_datetime)} days remaining</h1></figure>
                                                        <div className="card-body space-y-2">
                                                            <div className="flex gap-2 items-center font-medium">
                                                                <MdShareLocation />
                                                                <p>Mirpur #01, Dhaka , Bangladesh</p>
                                                            </div>
                                                            <h2 className="card-title">
                                                                {food.food_name}
                                                                <div className="badge bg-primary text-white">{food.food_quantity}</div>
                                                            </h2>
                                                            <p>{food.additional_notes}</p>

                                                            <div>
                                                                <div className="flex gap-3 items-center">
                                                                    <div>
                                                                        <img className="w-10 h-10 rounded-full object-cover" src="/src/assets/footerlogo.png" alt="" />
                                                                    </div>
                                                                    <p className="font-semibold">Md. Mamun</p>
                                                                </div>
                                                            </div>

                                                            <div className="card-actions">
                                                                <button className="btn bg-black hover:bg-primary text-white w-full inline-flex gap-2 items-center">View Details<IoIosArrowRoundForward className="text-xl" /></button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        ))
                                }

                            </>
                    }
                </div>

                <div className="flex gap-4 items-center justify-center w-full pt-12">
                    <nav aria-label="Pagination" className="inline-flex gap-4 rounded-md shadow-sm">
                        <button onClick={handlePrevious} type="button" className="inline-flex items-center transition-all duration-300 bg-base-200 hover:bg-black text-white px-2 py-2 text-sm font-semibold rounded-l-md">
                            <span className="sr-only">Previous</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="w-5 h-5">
                                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd"></path>
                            </svg>
                        </button>

                        <div className="flex gap-2 items-center">
                            {
                                pages.map(page => <button type="button" onClick={() => setCurrentPage(page)} key={page} className={`${currentPage === page ? 'bg-primary text-white animate-pulse transition-all duration-300' : ''} inline-flex items-center px-4 py-2 text-sm font-semibold`}>{page + 1}</button>)
                            }
                        </div>
                        <button onClick={handleNext} type="button" className="inline-flex items-center transition-all duration-300 bg-base-200 hover:bg-black text-white px-2 py-2 text-sm font-semibold  rounded-r-md">
                            <span className="sr-only">Next</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="w-5 h-5">
                                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                            </svg>
                        </button>
                    </nav>
                    <div>
                        <select
                            onChange={handleItemsPerPage}
                            className="text-sm rounded-lg block w-full p-2.5 bg-base-200"
                        >
                            <option selected={true} disabled>Items per page</option>
                            <option value={3}>3</option>
                            <option value={5}>5</option>
                            <option value={10}>10</option>
                            <option value={50}>50</option>
                        </select>
                    </div>



                </div>

                <div className="bg-primary opacity-5 w-1/2 h-[600px] mx-auto rounded-full blur-3xl absolute bottom-24 -z-10 left-1/2 -translate-x-1/2">

                </div>

            </div>
        </div>
    );
};

export default AvailableFood;