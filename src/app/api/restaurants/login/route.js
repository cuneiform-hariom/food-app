import { connect } from "@/dbconfig/dbConfig";
import Restaurant from "@/models/restaurantmodel";
import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken"

connect()

export async function POST(req) {
    try {
        const reqBody = await req.json()
        const { email, password } = reqBody
        const restaurant = await Restaurant.findOne({ email })
        if (!restaurant) {
            return NextResponse.json({
                message: "restaurant not found",
                status: 400
            })
        }
        const validPassword = await bcryptjs.compare(password, restaurant.password)

        if (!validPassword) {
            return NextResponse.json({
                message: "Invalid credentials",
                status: 400
            })
        }

        const tokenData = {
            id: restaurant._id,
            email: restaurant.email
        }

        const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET, { expiresIn: "1d" })

        const jsonResponse = NextResponse.json({
            message: "Logged in successfully",
            success: true,
            restaurant,
            token
        })

        jsonResponse.cookies.set("token", token, {
            httpOnly: true,
        })

        return jsonResponse

    } catch (error) {
        console.log('error: ', error);

    }
}