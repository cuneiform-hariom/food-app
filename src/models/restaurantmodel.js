import mongoose from "mongoose"

const restaurantSchema = new mongoose.Schema({
    restaurantName: {
        type: String,
        required: [true, "Restaurant name is required"],
    },
    mobile: {
        type: String,
        required: [true, "Mobile number is required"],
    },
    city: {
        type: String,
        required: [true, "City is required"],
    },
    address: {
        type: String,
        required: [true, "Address is required"],
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: [true, "Email already in use"]
    },
    password: {
        type: String,
        required: [true, "Password required"],
    },
})

const Restaurant = mongoose.models.restaurants || mongoose.model("restaurants", restaurantSchema)

export default Restaurant