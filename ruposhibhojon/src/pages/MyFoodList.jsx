import { FaRegEdit } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";
import { Helmet } from "react-helmet";

const MyFoodList = () => {
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
                            <tr className="bg-base-200 font-medium">
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">Cheese Pasta</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    20 Pc
                                </td>
                                <td>2024-05-15</td>
                                <td>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, quia?
                                </td>
                                <td>Available</td>
                                <th>
                                    <div className="flex items-center gap-6">
                                        <button className="bg-primary hover:bg-amber-700 text-white font-bold py-2 px-4 rounded inline-flex gap-2 items-center">
                                            <FaRegEdit />
                                            <span>Update</span>
                                        </button>
                                        <button className="bg-red-500 text-white hover:bg-red-700 font-bold py-2 px-4 rounded inline-flex gap-2 items-center">
                                            <FaDeleteLeft />
                                            <span>Download</span>
                                        </button>
                                    </div>
                                </th>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyFoodList;