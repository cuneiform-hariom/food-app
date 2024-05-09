import { connect } from "@/dbconfig/dbConfig";
import Restaurant from "@/models/restaurantmodel";
import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

connect()

export async function POST(req) {
    try {
        const reqBody = await req.json()
        const { restaurantName, mobile, city, address, email, password } = reqBody

        const restaurant = await Restaurant.findOne({ email })

        if (restaurant) {
            return NextResponse.json({
                message: "Email already exists!",
                status: 400
            })
        }

        // Hash the password before saving it to database
        const salt = await bcryptjs.genSalt((10))
        const hashedPassword = await bcryptjs.hash(password, salt)

        const newRestaurant = new Restaurant({
            restaurantName,
            mobile,
            city,
            address,
            email,
            password: hashedPassword
        })

        const savedRestaurant = await newRestaurant.save()

        return NextResponse.json({
            message: "Restaurant regestered successfully!",
            success: true,
            savedRestaurant
        })

    } catch (error) {
        return NextResponse.json({
            status: 500,
            message: error.message
        })
    }
}