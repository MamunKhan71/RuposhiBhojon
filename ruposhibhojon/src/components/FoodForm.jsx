import { IoMdAdd } from "react-icons/io";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
const FoodForm = ({ formData, isUpdate, foodData }) => {
    const { user } = useContext(AuthContext)
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const foodPhoto = watch('foodImage')
    const handleFormData = data => {
        formData(data)
    }
    return (
        <>
            <div className="flex items-center justify-center">

                <div className={`mx-auto ${isUpdate ? 'w-full' : 'w-full lg:max-w-[750px]'}`}>
                    <form onSubmit={handleSubmit(handleFormData)}
                        className="py-6 lg:px-9 w-full"
                    >
                        <div>
                            <div className="mb-5">
                                <label
                                    htmlFor="email"
                                    className="mb-3 block text-base font-semibold"
                                >
                                    Food Name
                                </label>
                                <input
                                    {...register('foodName')}
                                    type="text"
                                    defaultValue={foodData?.food_name}
                                    placeholder="Your Food Name"
                                    className="w-full rounded-md bg-base-200 py-3 px-6 text-base font-medium outline-none focus:border-primary focus:shadow-md"
                                />
                            </div>
                            <div className="mb-6 pt-4">
                                <label className="mb-5 block text-base font-semibold ">
                                    Food Image Url
                                </label>
                                <input
                                    {...register('foodImage')}
                                    type="text"
                                    defaultValue={foodData?.food_image}
                                    placeholder="Your Food Photo Url"
                                    className="w-full rounded-md bg-base-200 py-3 px-6 text-base font-medium outline-none focus:border-primary focus:shadow-md"
                                />
                            </div>
                            <div className="mb-6 border border-dashed h-48 rounded-md p-4 bg-base-200">
                                <img className="w-full h-full object-cover rounded-md" src={foodPhoto ? foodPhoto : 'https://www.peacemakersnetwork.org/wp-content/uploads/2019/09/placeholder.jpg'} alt="" />
                            </div>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                <div className="mb-6 pt-4">
                                    <label className="mb-5 block text-base font-semibold ">
                                        Food Quantity
                                    </label>
                                    <input
                                        {...register('foodQty')}
                                        defaultValue={foodData?.food_quantity}
                                        type="number"
                                        min="0"
                                        placeholder="Your Food Quantity"
                                        className="w-full rounded-md bg-base-200 py-3 px-6 text-base font-medium outline-none focus:border-primary focus:shadow-md"
                                    />
                                </div>
                                <div className="mb-6 pt-4">
                                    <label className="mb-5 block text-base font-semibold ">
                                        Expired Date/Time
                                    </label>
                                    <input
                                        defaultValue={foodData?.expired_datetime}
                                        {...register('expiryDate')}
                                        type="datetime-local"
                                        className="w-full rounded-md bg-base-200 py-3 px-6 text-base font-medium outline-none focus:border-primary focus:shadow-md"
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                <div className="mb-6 pt-4">
                                    <label className="mb-5 block text-base font-semibold ">
                                        Pickup Location
                                    </label>
                                    <input
                                        defaultValue={foodData?.pickup_location}
                                        {...register('pickup')}
                                        type="text"
                                        placeholder="Your Food Pickup Location"
                                        className="w-full rounded-md bg-base-200 py-3 px-6 text-base font-medium outline-none focus:border-primary focus:shadow-md"
                                    />
                                </div>
                                <div className="mb-6 pt-4">
                                    <label className="mb-5 block text-base font-semibold ">
                                        Select Availability
                                    </label>
                                    <div className="grid sm:grid-cols-2 gap-2">
                                        <label
                                            htmlFor="hs-radio-in-form"
                                            className="flex p-3.5 w-full bg-base-200 rounded-lg focus:border-primary focus:ring-primary"
                                        >
                                            <input
                                                onChange={() => setAvailability(true)}
                                                {...register('available')}
                                                defaultChecked={foodData?.availability === "Available" && true || true}
                                                value="Available"
                                                type="radio"
                                                className="shrink-0 mt-0.5 rounded-full text-primary focus:ring-black"
                                                id="hs-radio-in-form"
                                            />
                                            <span className="text-sm font-medium ms-3">
                                                Available
                                            </span>
                                        </label>
                                        <label
                                            htmlFor="hs-radio-checked-in-form-1"
                                            className="flex p-3.5 w-full bg-base-200 rounded-lg focus:border-primary focus:ring-primary"
                                        >
                                            <input
                                                onChange={() => setAvailability(false)}
                                                {...register('available')}
                                                defaultChecked={foodData?.availability === "Not Available" && true}
                                                value="Not Available"
                                                type="radio"
                                                className="shrink-0 mt-0.5 rounded-full text-primary focus:ring-black"
                                                id="hs-radio-checked-in-form-2"
                                            />
                                            <span className="text-sm font-medium ms-3">
                                                Not Available
                                            </span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 gap-6">
                                <div className="mb-5">
                                    <label
                                        htmlFor="email"
                                        className="mb-3 block text-base font-semibold"
                                    >
                                        Donor Info
                                    </label>
                                    <div className="flex items-center gap-4 bg-base-200 p-4 rounded-lg">
                                        <img className="h-12 w-12 rounded-md object-cover" src={user?.photoURL} alt="" />
                                        <div>
                                            <h1 className="font-semibold">{user?.displayName}</h1>
                                            <p className="font-semibold">{user?.email}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-6 pt-4">
                                <label className="mb-5 block text-base font-semibold ">
                                    Additional Notes
                                </label>
                                <textarea defaultValue={foodData?.additional_notes} {...register('notes')} placeholder="Your Message" className="w-full rounded-md bg-base-200 py-3 px-6 text-base font-medium outline-none focus:border-primary focus:shadow-md">

                                </textarea>
                            </div>
                        </div>
                        <div>
                            <button type="submit" className="hover:shadow-form hover:bg-black inline-flex gap-2 items-center justify-center w-full rounded-md bg-primary py-3 px-8 text-center text-base font-semibold text-white outline-none">
                                {`${isUpdate ? 'Update Food' : 'Add Food'}`} <IoMdAdd />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>

    );
};

export default FoodForm;