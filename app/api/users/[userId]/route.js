import { NextResponse } from "next/server";

export  async function GET(req, {params}){
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`)
    const data = await res.json()
    const searchParams = new URL(req.url)
    console.log(searchParams.searchParams)
    console.log(searchParams.searchParams.get("name"))
    return NextResponse.json(data)
}