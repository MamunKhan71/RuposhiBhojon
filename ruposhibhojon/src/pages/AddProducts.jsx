import { IoMdAdd } from "react-icons/io";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import axios from 'axios'
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import FoodForm from "../components/FoodForm";

const AddProducts = () => {
    const { user } = useContext(AuthContext)
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
            <FoodForm formData={handleFormData} isUpdate={false} />
        </>

    );
};

export default AddProducts;