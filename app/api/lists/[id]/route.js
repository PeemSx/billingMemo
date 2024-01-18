import connectMongoDB from "../../db";
import List from "@/app/schemas/List";
import { NextResponse } from "next/server";
export async function DELETE(reqest, {params}){
    const {id} = params;

    try {
        await connectMongoDB();
        const Lists = await List.findOneAndDelete({_id:id});
        return NextResponse.json({ message: "Deleted" }, { status: 201 });
    } catch (error) {
        console.error("Error creating list:", error);
        return NextResponse.json({ message: "Error Deleting ", error }, { status: 500 });
    }
}