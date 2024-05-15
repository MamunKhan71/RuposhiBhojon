import { IoMdAdd } from "react-icons/io";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import axios from 'axios'
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import FoodForm from "../components/FoodForm";
import Swal from "sweetalert2";
import { useMutation } from "@tanstack/react-query";
const AddProducts = () => {
    const { user } = useContext(AuthContext)
    const mutation = useMutation({
        mutationFn: (newTodo) => {
            return axios.post(`http://localhost:5000/add-food`, newTodo)
        },
    })

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
                userEmail: user?.email || null,
            },
            expired_datetime: expired_datetime,
            pickup_location: pickup_location,
            availability: availability,
            additional_notes: additional_notes,
        }

        Swal.fire({
            title: "Are you sure?",
            showClass: {
                popup: `
                        font-montserrat
                          animate__animated
                          animate__flipInX
                          rounded-xl
                          animate__faster
                        `
            },
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#F68712",
            cancelButtonColor: "#d33",
            confirmButtonText: `Add`
        }).then(() => {
            mutation.mutate(newFoodItem, {
                onSuccess: () => {
                    Swal.fire({
                        title: "Added!",
                        showClass: {
                            popup: `
                                font-montserrat
                                animate__animated
                                animate__flipInX
                                rounded-xl
                                animate__faster
                            `
                        },
                        text: "Your food has been added successfully!.",
                        icon: ""
                    });
                }
            });
        })


    }

    return (
        <div className="w-full">
            <Helmet>
                <title>RuposhiBhojon | Add Food</title>
            </Helmet>
            <div className="bg-primary blur-3xl h-96 w-full rounded-full opacity-5 absolute top-64 rotate-12 -z-10">

            </div>
            <div>
                <h1 className="font-bold text-2xl lg:text-4xl text-center">Add Food</h1>
                <p className="text-center">Add food to the community</p>

            </div>
            <FoodForm formData={handleFormData} isUpdate={false} />
        </div>

    );
};

export default AddProducts;