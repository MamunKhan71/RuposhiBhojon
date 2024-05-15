import { FaRegEdit } from "react-icons/fa";
import { MdViewCompact } from "react-icons/md";
import { Helmet } from "react-helmet";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import { FaDeleteLeft } from "react-icons/fa6";
const MyRequestList = () => {
    const { user } = useContext(AuthContext)
    const [requests, setRequests] = useState(null)
    const { data, refetch } = useQuery({
        queryKey: ['my-requests'],
        queryFn: async () => await user?.uid ? axios.get(`http://localhost:5000/my-requests?user=${user?.uid}`) : null,
        retry: 5,
    });
    useEffect(() => {
        if (user) {
            refetch();
        }
    }, [user, refetch]);

    useEffect(() => {
        setRequests(data?.data)
    }, [data])
    const handleDelete = id => {
        axios.delete(`http://localhost:5000/delete-request?id=${id}`)
            .then(data => console.log(data.data))
    }
    return (
        <div>
            <Helmet>
                <title>RuposhiBhojon | My Food Request</title>
            </Helmet>
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
                            {requests && requests.map(req => (
                                <tr key={req._id} className="bg-base-200 font-medium">
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={req.food_image} alt={req.donator.donator_name} />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{req.donator.donator_name}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{req.pickup_location}</td>
                                    <td>{req.expired_datetime}</td>
                                    <td>{req.request_time}</td>
                                    <td>{req.donation_amount}</td>
                                    <td>
                                        <div className="flex items-center gap-6">
                                            <button className="bg-primary hover:bg-amber-700 text-white font-bold py-2 px-4 rounded inline-flex gap-2 items-center">
                                                <MdViewCompact />
                                                <span>View</span>
                                            </button>
                                            <button onClick={() => handleDelete(req._id)} className="bg-red-600 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded inline-flex gap-2 items-center">
                                                <FaDeleteLeft />
                                                <span>Delete</span>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    );
};

export default MyRequestList;