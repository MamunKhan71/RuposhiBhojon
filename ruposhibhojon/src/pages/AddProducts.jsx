import { IoMdAdd } from "react-icons/io";
const AddProducts = () => {
    return (
        <>
            <div className="bg-primary blur-3xl h-96 w-full rounded-full opacity-5 absolute top-64 rotate-12 -z-10">

            </div>
            <div>
                <h1 className="font-bold text-4xl text-center">Add Food</h1>
                <p className="text-center">Add food to the community</p>
            </div>
            <div className="flex items-center justify-center">
                <div className="mx-auto w-full max-w-[650px]">
                    <form
                        className="py-6 px-9"
                        action="https://formbold.com/s/FORM_ID"
                        method="POST"
                    >
                        <div className="mb-5">
                            <label
                                htmlFor="email"
                                className="mb-3 block text-base font-semibold "
                            >
                                Food Name
                            </label>
                            <input
                                type="text"
                                placeholder="Your Food Name"
                                className="w-full rounded-md bg-base-200 py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-primary focus:shadow-md"
                            />
                        </div>
                        <div className="mb-6 pt-4">
                            <label className="mb-5 block text-base font-semibold ">
                                Food Image Url
                            </label>
                            <input
                                type="text"
                                placeholder="Your Food Photo Url"
                                className="w-full rounded-md bg-base-200 py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-primary focus:shadow-md"
                            />
                        </div>
                        <div className="mb-6 border border-dashed h-48 rounded-md p-4">
                            <img className="w-full h-full object-cover rounded-md" src="/src/assets/header2.jpg" alt="" />
                        </div>
                        <div className="mb-6 pt-4">
                            <label className="mb-5 block text-base font-semibold ">
                                Food Quantity
                            </label>
                            <input
                                type="number"
                                placeholder="Your Food Quantity"
                                className="w-full rounded-md bg-base-200 py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-primary focus:shadow-md"
                            />
                        </div>
                        <div className="mb-6 pt-4">
                            <label className="mb-5 block text-base font-semibold ">
                                Pickup Location
                            </label>
                            <input
                                type="text"
                                placeholder="Your Food Pickup Location"
                                className="w-full rounded-md bg-base-200 py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-primary focus:shadow-md"
                            />
                        </div>
                        <div className="mb-6 pt-4">
                            <label className="mb-5 block text-base font-semibold ">
                                Expired Date/Time
                            </label>
                            <input
                                type="date"
                                className="w-full rounded-md bg-base-200 py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-primary focus:shadow-md"
                            />
                        </div>
                        <div className="mb-6 pt-4">
                            <label className="mb-5 block text-base font-semibold ">
                                Additional Notes
                            </label>
                            <textarea placeholder="Your Message" className="w-full rounded-md bg-base-200 py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-primary focus:shadow-md">

                            </textarea>
                        </div>
                        <div>
                            <button className="hover:shadow-form hover:bg-black inline-flex gap-2 items-center justify-center w-full rounded-md bg-primary py-3 px-8 text-center text-base font-semibold text-white outline-none">
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