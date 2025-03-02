import { PrismaClient } from "@prisma/client"
import experss from "express"

const app =experss()
const prismaClient=new PrismaClient();

app.get("/",async(req,res)=>{
    const data=await prismaClient.user.findMany();
    res.json({
        "message":"get endpoint"
    })
})

app.post("/",async(req,res)=>{
    await prismaClient.user.create({
        data:{
            username:Math.random().toString(),
            password:Math.random().toString()
        }
    })
    res.json({
        "message":"post endpoint"
    })
})

app.listen(3000)