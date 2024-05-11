import { FaRegEdit } from "react-icons/fa";
import { MdViewCompact } from "react-icons/md";
const MyRequestList = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold text-center mb-6">My Food Request</h1>
            <p className="text-center font-medium max-w-4xl mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque iusto cumque aut facere consectetur dolore quaerat, dignissimos repudiandae quisquam recusandae.</p>
            <div className="mt-24">
                <div className="overflow-x-auto p-4">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Donor Name</th>
                                <th>Pickup Location</th>
                                <th>Expire Date</th>
                                <th>Request Date</th>
                                <th>My Donation Amount</th>
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
                                            <div className="font-bold">Md. Mamun</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    20 Pc
                                </td>
                                <td>2024-05-15</td>
                                <td>
                                    20 Tk
                                </td>
                                <td>Available</td>
                                <th>
                                    <div className="flex items-center gap-6">
                                        <button className="bg-primary hover:bg-amber-700 text-white font-bold py-2 px-4 rounded inline-flex gap-2 items-center">
                                            <MdViewCompact />
                                            <span>View</span>
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

export default MyRequestList;