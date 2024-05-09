import { connect } from "@/dbconfig/dbConfig";
import Restaurant from "@/models/restaurantmodel";
import { NextResponse } from "next/server";

connect()

export async function GET() {

    const data = await Restaurant.find()

    return NextResponse.json(data)
}