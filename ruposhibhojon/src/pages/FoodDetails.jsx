import { BiPurchaseTag } from "react-icons/bi";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import { IoIosTimer } from "react-icons/io";
import { MdShareLocation } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import { useContext, useEffect, useState } from "react";
import { RiCloseCircleLine } from "react-icons/ri"
import { AuthContext } from "../provider/AuthProvider";
import { useForm } from "react-hook-form";
import axios from 'axios'
import moment from 'moment';
import { toast, Toaster } from "sonner";
import { BsPencilSquare } from "react-icons/bs";
import { useQuery } from "@tanstack/react-query";

const FoodDetails = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const id = useParams()
    const { data } = useQuery({
        queryKey: ['data-details'],
        queryFn: async() => await axios.get(`https://ruposhi-bhojhon.vercel.app/food/${id.id}`).then(response => response.data)
    });
    const [qty, setQty] = useState(0)
    const { user } = useContext(AuthContext)
    const handleTimeRemaining = (time) => {
        const dateAndTime = new Date(time);
        const dateNow = new Date();
        const differenceInMilliseconds = dateAndTime.getTime() - dateNow.getTime();
        const differenceInDays = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24));
        return differenceInDays;
    }
    const [time, setTime] = useState(moment().format('MMMM Do YYYY, h:mm:ss a').toString());
    const handleChooseQtyPlus = () => {
        if (qty < data?.food_quantity) {
            setQty(qty + 1)
        }
    }
    const handleChooseQtyMinus = () => {
        if (qty > 0) {
            setQty(qty - 1)
        }
    }

    const handleFormData = (formData) => {
        const newRequest = {
            food_id: data?._id,
            food_name: data?.food_name,
            donator: {
                donator_email: data?.donator.userEmail || "N/A",
                donator_name: data?.donator.userName,
            },
            user: {
                user_id: user?.uid,
                user_name: user?.displayName,
                user_email: user?.email,
            },
            food_quantity: qty,
            food_image: data?.food_image,
            request_time: time,
            donation_amount: parseFloat(formData?.donation_amount),
            pickup_location: data?.pickup_location,
            expired_datetime: data?.expired_datetime,
            additional_notes: formData?.additional_notes,
        };
        axios.post(`https://ruposhi-bhojhon.vercel.app/food-request`, newRequest)
            .then(data => {
                const updateStatus = {
                    _id: newRequest.food_id,
                    available: "Reserved"
                }
                axios.patch(`https://ruposhi-bhojhon.vercel.app/update-food?statusUpdate=true`, updateStatus)
                    .then(() => {
                        if (data.data.acknowledged) {
                            toast.success('Food requested successfully!')
                        }
                    })
            })
            .catch(() => {
                toast.error('Something went wrong!')
            })
    };

    return (
        <div>
            <Helmet>
                <title>RuposhiBhojon | {data?.food_name ? data.food_name : "Details"}</title>
            </Helmet>
            <div className="bg-primary animated-background bg-gradient-to-r from-primary via-blue-500 to-indigo-500 opacity-10 w-1/2 h-[600px] mx-auto rounded-xl blur-3xl absolute bottom-24 -z-10 left-1/2 -translate-x-1/2">

            </div>
            <section className="lg:py-24">
                <div className="mx-auto w-full lg:max-w-7xl px-0 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="slider-box w-full h-full max-lg:mx-auto mx-0">
                            <div>
                                <div>
                                    <div>
                                        <img
                                            src={data?.food_image}
                                            alt="Summer Travel Bag image"
                                            className="cursor-pointer rounded-xl object-cover h-[650px] w-full transition-all duration-500 "
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center items-center">
                            <div className="pro-detail w-full max-lg:max-w-[608px] lg:pl-8 xl:pl-16 max-lg:mx-auto max-lg:mt-8">
                                <div className="flex items-center justify-between gap-6 mb-6">
                                    <div className="text">
                                        <h2 className="font-manrope font-bold text-3xl leading-10 mb-2">
                                            {data?.food_name}
                                        </h2>
                                    </div>
                                    <button className="group transition-all duration-500 p-0.5">
                                        <svg
                                            width={60}
                                            height={60}
                                            viewBox="0 0 60 60"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <circle
                                                className="fill-indigo-50 transition-all duration-500 group-hover:fill-indigo-100"
                                                cx={30}
                                                cy={30}
                                                r={30}
                                                fill=""
                                            />
                                            <path
                                                className="stroke-indigo-600 transition-all duration-500 group-hover:stroke-indigo-700"
                                                d="M21.4709 31.3196L30.0282 39.7501L38.96 30.9506M30.0035 22.0789C32.4787 19.6404 36.5008 19.6404 38.976 22.0789C41.4512 24.5254 41.4512 28.4799 38.9842 30.9265M29.9956 22.0789C27.5205 19.6404 23.4983 19.6404 21.0231 22.0789C18.548 24.5174 18.548 28.4799 21.0231 30.9184M21.0231 30.9184L21.0441 30.939M21.0231 30.9184L21.4628 31.3115"
                                                stroke=""
                                                strokeWidth="1.6"
                                                strokeMiterlimit={10}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </button>
                                </div>
                                <div className="lg:flex flex-col min-[400px]:flex-row min-[400px]:items-center mb-8 gap-y-3">
                                    <div className="flex items-center">
                                        <h5 className="font-manrope font-semibold text-xl lg:text-2xl leading-9  ">
                                            {data?.food_quantity}{" "} Pieces Left
                                        </h5>
                                        <span className="ml-3 font-semibold text-lg text-indigo-600">
                                            ( {data?.availability ? "In Stock" : "Out of Stock"} )
                                        </span>
                                    </div>

                                    <svg
                                        className="mx-5 max-[400px]:hidden"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={2}
                                        height={36}
                                        viewBox="0 0 2 36"
                                        fill="none"
                                    >
                                        <path d="M1 0V36" stroke="#E5E7EB" />
                                    </svg>
                                    <div className="flex items-center gap-2">
                                        <img className="w-10 h-10 rounded-xl ring-primary ring-offset-base-100" src={data?.donator?.userImage} />
                                        <p className="text-base font-bold">{data?.donator?.userName}</p>
                                    </div>
                                </div>
                                <div className="pb-4">
                                    <p className="inline-flex items-center gap-2"><BsPencilSquare />{data?.additional_notes}</p>
                                </div>
                                <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 mb-3 min-[400px]:mb-8">
                                    <button className="border inline-flex gap-2 items-center border-gray-200 whitespace-nowrap  text-sm leading-6 py-2.5 rounded-xl px-5 text-center w-full font-semibold shadow-sm shadow-transparent transition-all duration-300 hover:bg-gray-50 hover:shadow-gray-300">
                                        <IoIosTimer />{handleTimeRemaining(data?.expired_datetime)} days left
                                    </button>
                                    <button className="col-span-2 inline-flex gap-2 items-center border border-gray-200 whitespace-nowrap  text-sm leading-6 py-2.5 rounded-xl px-5 text-center w-full font-semibold shadow-sm shadow-transparent transition-all duration-300 hover:bg-gray-50 hover:shadow-gray-300">
                                        <MdShareLocation />{data?.pickup_location}
                                    </button>
                                </div>
                                <div className="flex items-center flex-col min-[400px]:flex-row gap-3 mb-3 min-[400px]:mb-8">
                                    <div className=" flex items-center justify-center border border-gray-400 rounded-xl">
                                        <button onClick={handleChooseQtyMinus} className="group py-[14px] px-3 w-full rounded-xl h-full flex items-center justify-center shadow-sm shadow-transparent transition-all duration-300 hover:bg-gray-50 hover:shadow-gray-300">
                                            <svg
                                                className="stroke-black group-hover:stroke-black"
                                                width={22}
                                                height={22}
                                                viewBox="0 0 22 22"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M16.5 11H5.5"
                                                    stroke=""
                                                    strokeWidth="1.6"
                                                    strokeLinecap="round"
                                                />
                                                <path
                                                    d="M16.5 11H5.5"
                                                    stroke=""
                                                    strokeOpacity="0.2"
                                                    strokeWidth="1.6"
                                                    strokeLinecap="round"
                                                />
                                                <path
                                                    d="M16.5 11H5.5"
                                                    stroke=""
                                                    strokeOpacity="0.2"
                                                    strokeWidth="1.6"
                                                    strokeLinecap="round"
                                                />
                                            </svg>
                                        </button>
                                        <input
                                            type="text"
                                            className="font-semibold  text-lg py-3 px-2 w-full min-[400px]:min-w-[75px] h-full bg-transparent placeholder: text-center hover:text-indigo-600 outline-0 hover:placeholder:text-indigo-600"
                                            placeholder={qty}
                                        />
                                        <button onClick={handleChooseQtyPlus} className="group py-[14px] px-3 w-full rounded-xl h-full flex items-center justify-center shadow-sm shadow-transparent transition-all duration-300 hover:bg-gray-50 hover:shadow-gray-300">
                                            <svg
                                                className="stroke-black group-hover:stroke-black"
                                                width={22}
                                                height={22}
                                                viewBox="0 0 22 22"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M11 5.5V16.5M16.5 11H5.5"
                                                    stroke="#9CA3AF"
                                                    strokeWidth="1.6"
                                                    strokeLinecap="round"
                                                />
                                                <path
                                                    d="M11 5.5V16.5M16.5 11H5.5"
                                                    stroke="black"
                                                    strokeOpacity="0.2"
                                                    strokeWidth="1.6"
                                                    strokeLinecap="round"
                                                />
                                                <path
                                                    d="M11 5.5V16.5M16.5 11H5.5"
                                                    stroke="black"
                                                    strokeOpacity="0.2"
                                                    strokeWidth="1.6"
                                                    strokeLinecap="round"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                    <button className="group py-3 px-5 rounded-xl bg-indigo-50 text-indigo-600 font-semibold text-lg w-full flex items-center justify-center gap-2 shadow-sm shadow-transparent transition-all duration-500 hover:shadow-indigo-300 hover:bg-indigo-100">
                                        <svg
                                            className="stroke-indigo-600 transition-all duration-500 group-hover:stroke-indigo-600"
                                            width={22}
                                            height={22}
                                            viewBox="0 0 22 22"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M10.7394 17.875C10.7394 18.6344 10.1062 19.25 9.32511 19.25C8.54402 19.25 7.91083 18.6344 7.91083 17.875M16.3965 17.875C16.3965 18.6344 15.7633 19.25 14.9823 19.25C14.2012 19.25 13.568 18.6344 13.568 17.875M4.1394 5.5L5.46568 12.5908C5.73339 14.0221 5.86724 14.7377 6.37649 15.1605C6.88573 15.5833 7.61377 15.5833 9.06984 15.5833H15.2379C16.6941 15.5833 17.4222 15.5833 17.9314 15.1605C18.4407 14.7376 18.5745 14.0219 18.8421 12.5906L19.3564 9.84059C19.7324 7.82973 19.9203 6.8243 19.3705 6.16215C18.8207 5.5 17.7979 5.5 15.7522 5.5H4.1394ZM4.1394 5.5L3.66797 2.75"
                                                stroke=""
                                                strokeWidth="1.6"
                                                strokeLinecap="round"
                                            />
                                        </svg>
                                        Add to cart
                                    </button>
                                </div>
                                <button className="text-center w-full px-5 py-4 rounded-xl bg-primary flex gap-2 items-center justify-center font-semibold text-lg text-white shadow-sm shadow-transparent transition-all duration-500 hover:bg-indigo-700 hover:shadow-indigo-300" onClick={() => document.getElementById('my_modal_4').showModal()}>{`${data?.availability === "Reserved" ? "Reserved" : "Make a request"}`}<BiPurchaseTag /></button>
                                <dialog id="my_modal_4" className="modal">
                                    <div className="modal-box w-full lg:w-11/12 lg:max-w-5xl">
                                        <div>
                                            <div method="dialog">
                                                <div>
                                                    <div className="space-y-4">
                                                        <h1 className="font-bold text-4xl text-center">Request Food</h1>
                                                        <p className="text-center">Request data to the community</p>
                                                        <hr />
                                                        <div className="modal-action">
                                                            <form method="dialog">
                                                                <button className="tooltip tooltip-bottom " data-tip="Close"><RiCloseCircleLine className="text-4xl" /></button>
                                                            </form>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center justify-center">
                                                        <div className="w-full">
                                                            <form onSubmit={handleSubmit(handleFormData)}
                                                                className="py-6 lg:px-9"
                                                            >
                                                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                                                    <div className="mb-5">
                                                                        <label
                                                                            htmlFor="email"
                                                                            className="mb-3 block text-base font-semibold"
                                                                        >
                                                                            Food ID
                                                                        </label>
                                                                        <input
                                                                            readOnly
                                                                            type="text"
                                                                            defaultValue={data?._id}
                                                                            className="w-full read-only:text-gray-500 rounded-md bg-base-200 py-3 px-6 text-base font-medium outline-none focus:border-primary focus:shadow-md"
                                                                        />
                                                                    </div>
                                                                    <div className="mb-5">
                                                                        <label
                                                                            htmlFor="email"
                                                                            className="mb-3 block text-base font-semibold"
                                                                        >
                                                                            Food Name
                                                                        </label>
                                                                        <input
                                                                            readOnly
                                                                            type="text"
                                                                            value={data?.food_name}
                                                                            className="w-full read-only:text-gray-500 rounded-md bg-base-200 py-3 px-6 text-base font-medium outline-none focus:border-primary focus:shadow-md"
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="grid grid-cols-2 gap-6">
                                                                    <div className="mb-5">
                                                                        <label
                                                                            htmlFor="email"
                                                                            className="mb-3 block text-base font-semibold"
                                                                        >
                                                                            Donator Email
                                                                        </label>
                                                                        <input
                                                                            readOnly
                                                                            type="text"
                                                                            value={data?.donator?.userEmail ? data?.donator?.userEmail : 'N/A'}
                                                                            className="w-full read-only:text-gray-500 rounded-md bg-base-200 py-3 px-6 text-base font-medium outline-none focus:border-primary focus:shadow-md"
                                                                        />
                                                                    </div>
                                                                    <div className="mb-5">
                                                                        <label
                                                                            htmlFor="name"
                                                                            className="mb-3 block text-base font-semibold"
                                                                        >
                                                                            Donator Name
                                                                        </label>
                                                                        <input
                                                                            readOnly
                                                                            type="text"
                                                                            value={data?.donator?.userName}
                                                                            className="w-full read-only:text-gray-500 rounded-md bg-base-200 py-3 px-6 text-base font-medium outline-none focus:border-primary focus:shadow-md"
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="grid grid-cols-2 gap-6">
                                                                    <div className="mb-5">
                                                                        <label
                                                                            htmlFor="email"
                                                                            className="mb-3 block text-base font-semibold"
                                                                        >
                                                                            User Email
                                                                        </label>
                                                                        <input
                                                                            readOnly
                                                                            type="text"
                                                                            value={user?.email ? user.email : 'N/A'}
                                                                            className="w-full read-only:text-gray-500 rounded-md bg-base-200 py-3 px-6 text-base font-medium outline-none focus:border-primary focus:shadow-md"
                                                                        />
                                                                    </div>
                                                                    <div className="mb-5">
                                                                        <label
                                                                            htmlFor="email"
                                                                            className="mb-3 block text-base font-semibold"
                                                                        >
                                                                            User Name
                                                                        </label>
                                                                        <input
                                                                            readOnly
                                                                            type="text"
                                                                            value={user?.displayName ? user.displayName : 'N/A'}
                                                                            className="w-full read-only:text-gray-500 rounded-md bg-base-200 py-3 px-6 text-base font-medium outline-none focus:border-primary focus:shadow-md"
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="mb-6 pt-4">
                                                                    <label className="mb-5 block text-base font-semibold ">
                                                                        Food Image Url
                                                                    </label>
                                                                    <input
                                                                        readOnly
                                                                        type="text"
                                                                        value={data?.food_image}
                                                                        className="w-full read-only:text-gray-500 rounded-md bg-base-200 py-3 px-6 text-base font-medium outline-none focus:border-primary focus:shadow-md"
                                                                    />
                                                                </div>
                                                                <div className="mb-6 border border-dashed h-48 rounded-md p-4 bg-base-200">
                                                                    <img className="w-full h-full object-cover rounded-md" src={data?.food_image} alt="" />
                                                                </div>
                                                                <div className="grid grid-cols-2 gap-6">
                                                                    <div className="mb-5">
                                                                        <label
                                                                            htmlFor="time"
                                                                            className="mb-3 block text-base font-semibold"
                                                                        >
                                                                            Request Time
                                                                        </label>
                                                                        <input
                                                                            readOnly
                                                                            type="text"
                                                                            value={time}
                                                                            className="w-full read-only:text-gray-500 rounded-md bg-base-200 py-3 px-6 text-base font-medium outline-none focus:border-primary focus:shadow-md"
                                                                        />
                                                                    </div>
                                                                    <div className="mb-5">
                                                                        <label
                                                                            htmlFor="text"
                                                                            className="mb-3 block text-base font-semibold"
                                                                        >
                                                                            Pickup Location
                                                                        </label>
                                                                        <input
                                                                            readOnly
                                                                            type="text"
                                                                            value={data?.pickup_location}
                                                                            className="w-full read-only:text-gray-500 rounded-md bg-base-200 py-3 px-6 text-base font-medium outline-none focus:border-primary focus:shadow-md"
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="grid grid-cols-1 gap-6">
                                                                    <div className="mb-6 pt-4">
                                                                        <label className="mb-5 block text-base font-semibold ">
                                                                            Expire Date
                                                                        </label>
                                                                        <input
                                                                            readOnly
                                                                            value={moment(data?.expired_datetime).format('MMMM Do YYYY, h:mm:ss a')}
                                                                            placeholder="Your data Quantity"
                                                                            className="w-full text-gray-500 rounded-md bg-base-200 py-3 px-6 text-base font-medium outline-none focus:border-primary focus:shadow-md"
                                                                        />
                                                                    </div>

                                                                </div>
                                                                <div className="grid grid-cols-1 gap-6">
                                                                    <div className="mb-6 pt-4">
                                                                        <label className="mb-5 block text-base font-semibold ">
                                                                            Donation Amount
                                                                        </label>
                                                                        <input
                                                                            type="number"
                                                                            {...register('donation_amount')}
                                                                            defaultValue={0}
                                                                            placeholder="Your data Quantity"
                                                                            className="w-full  rounded-md bg-base-200 py-3 px-6 text-base font-medium outline-none focus:border-primary focus:shadow-md"
                                                                        />
                                                                    </div>

                                                                </div>
                                                                <div className="mb-6 pt-4">
                                                                    <label className="mb-5 block text-base font-semibold ">
                                                                        Additional Notes
                                                                    </label>
                                                                    <textarea {...register('additional_notes')} placeholder="Your Message" className="w-full rounded-md bg-base-200 py-3 px-6 text-base font-medium outline-none focus:border-primary focus:shadow-md">

                                                                    </textarea>
                                                                </div>
                                                                <div>
                                                                    <button type="submit" className="hover:shadow-form hover:bg-black inline-flex gap-2 items-center justify-center w-full rounded-md bg-primary py-3 px-8 text-center text-base font-semibold text-white outline-none">
                                                                        Request Food <IoMdAdd />
                                                                    </button>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </dialog>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Toaster richColors position="top-right" />
        </div>
    );
};

export default FoodDetails;