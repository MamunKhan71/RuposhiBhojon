import { IoMdAdd } from "react-icons/io";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import axios from 'axios'
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const AddProducts = () => {
    const { user } = useContext(AuthContext)
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const handleFormData = data => {
        const food_name = data.foodName
        const food_image = data.foodImage
        const food_quantity = data.foodQty
        const expired_datetime = data.expiryDate
        const pickup_location = data.pickup
        const availability = data.available
        const additional_notes = data.notes
        const newFoodItem = {
            food_name: food_name,
            food_image: food_image,
            food_quantity: food_quantity,
            donator: {
                uid: user?.uid,
                userName: user?.displayName,
                userImage: user?.photoURL,
            },
            expired_datetime: expired_datetime,
            pickup_location: pickup_location,
            availability: availability,
            additional_notes: additional_notes,
        }
        console.log(newFoodItem);
        axios.post(`http://localhost:5000/add-food`, newFoodItem)
            .then(data => console.log(data.data))

    }
    return (
        <>
            <Helmet>
                <title>RuposhiBhojon | Add Product</title>
            </Helmet>
            <div className="bg-primary blur-3xl h-96 w-full rounded-full opacity-5 absolute top-64 rotate-12 -z-10">

            </div>
            <div>
                <h1 className="font-bold text-4xl text-center">Add Food</h1>
                <p className="text-center">Add food to the community</p>
            </div>
            <div className="flex items-center justify-center">
                <div className="mx-auto w-full max-w-[750px]">
                    <form onSubmit={handleSubmit(handleFormData)}
                        className="py-6 px-9"
                    >
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
                                placeholder="Your Food Photo Url"
                                className="w-full rounded-md bg-base-200 py-3 px-6 text-base font-medium outline-none focus:border-primary focus:shadow-md"
                            />
                        </div>
                        <div className="mb-6 border border-dashed h-48 rounded-md p-4 bg-base-200">
                            <img className="w-full h-full object-cover rounded-md" src="/src/assets/header2.jpg" alt="" />
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="mb-6 pt-4">
                                <label className="mb-5 block text-base font-semibold ">
                                    Food Quantity
                                </label>
                                <input
                                    {...register('foodQty')}
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
                                    {...register('expiryDate')}
                                    type="datetime-local"
                                    className="w-full rounded-md bg-base-200 py-3 px-6 text-base font-medium outline-none focus:border-primary focus:shadow-md"
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="mb-6 pt-4">
                                <label className="mb-5 block text-base font-semibold ">
                                    Pickup Location
                                </label>
                                <input
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
                                            {...register('available')}
                                            defaultChecked={true}
                                            value="true"
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
                                            {...register('available')}
                                            defaultChecked={false}
                                            value="false"
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

                        <div className="mb-6 pt-4">
                            <label className="mb-5 block text-base font-semibold ">
                                Additional Notes
                            </label>
                            <textarea {...register('notes')} placeholder="Your Message" className="w-full rounded-md bg-base-200 py-3 px-6 text-base font-medium outline-none focus:border-primary focus:shadow-md">

                            </textarea>
                        </div>
                        <div>
                            <button type="submit" className="hover:shadow-form hover:bg-black inline-flex gap-2 items-center justify-center w-full rounded-md bg-primary py-3 px-8 text-center text-base font-semibold text-white outline-none">
                                Add Food <IoMdAdd />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>

    );
};

export default AddProducts;