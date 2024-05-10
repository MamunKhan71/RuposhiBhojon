import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { IoIosArrowRoundForward } from "react-icons/io";
import { MdOutlineArrowOutward } from "react-icons/md";
const FeaturedSection = () => {
    const { isLoading, data } = useQuery({
        queryKey: "foods",
        queryFn: () => axios.get('local.json'),
        refetchOnWindowFocus: false,
        retry: 5,
    }
    )
    return (
        <div>
            <h1 className="text-3xl font-bold text-center mb-6">Featured Products</h1>
            <p className="text-center font-medium max-w-4xl mx-auto text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque iusto cumque aut facere consectetur dolore quaerat, dignissimos repudiandae quisquam recusandae.</p>
            <div className="mt-24">
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
                {
                        data && <div className="flex items-center justify-center w-full mt-24 ">
                            <button className="text-center btn bg-primary btn-wide text-white">Show All <MdOutlineArrowOutward/></button>
                        </div>
                    }
            </div>
        </div>
    );
};

export default FeaturedSection;