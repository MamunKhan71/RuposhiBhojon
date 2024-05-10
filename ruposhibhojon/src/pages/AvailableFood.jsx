import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { IoIosArrowRoundForward } from "react-icons/io";
import { MdOutlineArrowOutward } from "react-icons/md";
import { BsFilterRight } from "react-icons/bs";
const AvailableFood = () => {
    const { isLoading, data } = useQuery({
        queryKey: "foods",
        queryFn: () => axios.get('local.json'),
        refetchOnWindowFocus: false,
        retry: 5,
    }
    )
    return (
        <div>
            <h1 className="text-3xl font-bold text-center mb-6">Available Foods</h1>
            <p className="text-center font-medium max-w-4xl mx-auto text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque iusto cumque aut facere consectetur dolore quaerat, dignissimos repudiandae quisquam recusandae.</p>
            <div className="mt-24 space-y-8">
                <div className="flex justify-end items-center">
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn m-1"><BsFilterRight /> Filter by</div>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Date</a></li>
                            <li><a>Time</a></li>
                        </ul>
                    </div>
                    <hr />
                </div>
                <div className="grid grid-cols-3 gap-6">
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
                                    data?.data?.map(food => (
                                        <>
                                            <div className="transform rounded-xl shadow-xl transition duration-300 hover:scale-105 ">
                                                <div className="card bg-base-100 shadow-xl h-[500px]">
                                                    <figure><img src={food.food_image} alt="Shoes" /></figure>
                                                    <div className="card-body">
                                                        <h2 className="card-title">
                                                            {food.food_name}
                                                            <div className="badge bg-primary text-white">{food.food_quantity}</div>
                                                        </h2>
                                                        <p>{food.additional_notes}</p>
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
                <div className="flex items-center justify-center w-full pt-12">
                    <nav aria-label="Pagination" className="inline-flex -space-x-px rounded-md shadow-sm">
                        <button type="button" className="inline-flex items-center px-2 py-2 text-sm font-semibold rounded-l-md">
                            <span className="sr-only">Previous</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="w-5 h-5">
                                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd"></path>
                            </svg>
                        </button>
                        <button type="button" aria-current="page" className="inline-flex items-center px-4 py-2 text-sm font-semibold ">1</button>
                        <button type="button" className="inline-flex items-center px-4 py-2 text-sm font-semibold">2</button>
                        <button type="button" className="inline-flex items-center px-4 py-2 text-sm font-semibold">3</button>
                        <button type="button" className="inline-flex items-center px-4 py-2 text-sm font-semibold">...</button>
                        <button type="button" className="inline-flex items-center px-4 py-2 text-sm font-semibold">7</button>
                        <button type="button" className="inline-flex items-center px-4 py-2 text-sm font-semibold">8</button>
                        <button type="button" className="inline-flex items-center px-4 py-2 text-sm font-semibold">9</button>
                        <button type="button" className="inline-flex items-center px-2 py-2 text-sm font-semibold  rounded-r-md">
                            <span className="sr-only">Next</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="w-5 h-5">
                                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                            </svg>
                        </button>
                    </nav>
                </div>

            </div>
        </div>
    );
};

export default AvailableFood;