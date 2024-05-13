import { FaRegEdit } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";
import { Helmet } from "react-helmet";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import FoodForm from "../components/FoodForm";
import { RiCloseCircleLine } from "react-icons/ri"
const MyFoodList = () => {
    const { user } = useContext(AuthContext)
    const [foodId, setFoodId] = useState(null)
    const { data } = useQuery({
        queryKey: 'my-food',
        queryFn: () => axios.get(`http://localhost:5000/my-food?user=${user?.uid}`),
        retry: 5,
    })
    const handleFormData = foodData => {
        const updateForm = { ...foodData, _id: foodId };
        axios.patch(`http://localhost:5000/update-food`, updateForm)
            .then(data => console.log(data))
    }

    return (
        <div>
            <Helmet>
                <title>RuposhiBhojon | My Food List</title>
            </Helmet>
            <h1 className="text-3xl font-bold text-center mb-6">My Foods</h1>
            <p className="text-center font-medium max-w-4xl mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque iusto cumque aut facere consectetur dolore quaerat, dignissimos repudiandae quisquam recusandae.</p>
            <div className="mt-24">
                <div className="overflow-x-auto p-4">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Food Name</th>
                                <th>Food Quantity</th>
                                <th>Expiry Date</th>
                                <th>Additional Notes</th>
                                <th>Stock</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data?.data?.map(food => <>

                                    <tr className="font-medium">
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={food.food_image} alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">{food.food_name}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            {food.food_quantity}
                                        </td>
                                        <td>{food.expired_datetime}</td>
                                        <td>
                                            {food.additional_notes}
                                        </td>
                                        <td>{food.availability ? "Available" : "Not Available"}</td>
                                        <th>
                                            <div className="flex items-center gap-6">
                                                <button onClick={() => {
                                                    setFoodId(food._id)
                                                    document.getElementById(`my_modal_${food._id}`).showModal()
                                                }} className="bg-primary hover:bg-amber-700 text-white font-bold py-2 px-4 rounded inline-flex gap-2 items-center">
                                                    <FaRegEdit />
                                                    <span>Update</span>
                                                </button>
                                                <dialog id={`my_modal_${food._id}`} className="modal">
                                                    <div className="modal-box w-11/12 max-w-5xl">
                                                        <div className="space-y-4">
                                                            <h1 className="text-3xl font-bold text-center">Update Food</h1>
                                                            <hr className="border border-dashed border-gray-700" />
                                                            <div className="modal-action">
                                                                <form method="dialog">
                                                                    {/* if there is a button in form, it will close the modal */}
                                                                    <button className="btn btn-circle"><RiCloseCircleLine className="text-4xl" /></button>
                                                                </form>
                                                            </div>
                                                            <FoodForm formData={handleFormData} isUpdate={true} foodData={food} />
                                                        </div>

                                                    </div>
                                                </dialog>
                                                <button className="bg-red-500 text-white hover:bg-red-700 font-bold py-2 px-4 rounded inline-flex gap-2 items-center">
                                                    <FaDeleteLeft />
                                                    <span>Download</span>
                                                </button>
                                            </div>
                                        </th>
                                    </tr>
                                </>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyFoodList;