import { NextResponse } from "next/server"


export  const GET  = async ()=>{
const res=    await fetch("https://jsonplaceholder.typicode.com/users")
const data = await res.json()
return NextResponse.json(data)}

export const  POST  = async(req)=>{
    const data = await req.json()
    const { name,lastname}=data;
    console.log(name + lastname)
    console.log(data)
return NextResponse.json({
    message:"creando datos"
})} 
export const PUT  = ()=>{
return NextResponse.json({
    message:"actualizando datos"
})} 
export const DELETE  = ()=>{
return NextResponse.json({
    message:"Eliminando datos "
})} 
