import List from "@/app/schemas/List";
import connectMongoDB from "../db";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const { lender,borrower, money, list } = await request.json();
        await connectMongoDB();
        const createdList = await List.create({ lender,borrower, money, list });
        return NextResponse.json({ message: "List Created", data: createdList }, { status: 201 });
    } catch (error) {
        console.error("Error creating list:", error);
        return NextResponse.json({ message: "Error creating list", error }, { status: 500 });
    }
}

export async function GET(){
    try {
        await connectMongoDB();
        const Lists = await List.find();
        return NextResponse.json({ message: "List Get", data: Lists }, { status: 201 });
    } catch (error) {
        console.error("Error creating list:", error);
        return NextResponse.json({ message: "Error getting  list", error }, { status: 500 });
    }
}