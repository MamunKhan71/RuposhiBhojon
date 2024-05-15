import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { IoIosArrowRoundForward } from "react-icons/io";
import { MdOutlineArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";
import { TbClock12 } from "react-icons/tb";
import { MdShareLocation } from "react-icons/md";
const FeaturedSection = () => {
    const { isLoading, data } = useQuery({
        queryKey: "foods",
        queryFn: () => axios.get(`http://localhost:5000/featured`),
        refetchOnWindowFocus: false,
        retry: 5,
    }
    )
    const handleTimeRemaining = (time) => {
        const dateAndTime = new Date(time);
        const dateNow = new Date();
        const differenceInMilliseconds = dateAndTime.getTime() - dateNow.getTime();
        const differenceInDays = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24));
        return differenceInDays;
    }
    return (
        <div>
            <h1 className="text-3xl font-bold text-center mb-6">Featured Products</h1>
            <p className="text-center font-medium max-w-4xl mx-auto text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque iusto cumque aut facere consectetur dolore quaerat, dignissimos repudiandae quisquam recusandae.</p>
            <div className="mt-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                                                    <figure className="relative"><img src={food.food_image} alt="Shoes" />
                                                        <h1 className="absolute top-5 right-5 px-2 py-1 inline-flex gap-2 items-center rounded-lg backdrop-blur-2xl text-white font-bold"><TbClock12 />{handleTimeRemaining(food.expired_datetime)} days remaining</h1></figure>
                                                    <div className="card-body space-y-2">
                                                        <div className="flex gap-2 items-center font-medium">
                                                            <MdShareLocation />
                                                            <p>Mirpur #01, Dhaka , Bangladesh</p>
                                                        </div>
                                                        <h2 className="card-title">
                                                            {food.food_name}
                                                            <div className="badge bg-primary text-white p-3">{food.food_quantity} servings</div>
                                                        </h2>
                                                        <p>{food.additional_notes}</p>

                                                        <div>
                                                            <div className="flex gap-3 items-center">
                                                                <div>
                                                                    <img className="w-10 h-10 rounded-full object-cover" src="/src/assets/footerlogo.png" alt="" />
                                                                </div>
                                                                <p className="font-semibold">{food.donator.userName}</p>
                                                            </div>
                                                        </div>

                                                        <div className="card-actions">
                                                            <Link to={`/food/${food._id}`} className="btn bg-black hover:bg-primary text-white w-full inline-flex gap-2 items-center">View Details<IoIosArrowRoundForward className="text-xl" /></Link>
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
                        <Link to={`/available-food`} className="text-center btn bg-primary btn-wide text-white">Show All <MdOutlineArrowOutward /></Link>
                    </div>
                }
            </div>
        </div>
    );
};

export default FeaturedSection;