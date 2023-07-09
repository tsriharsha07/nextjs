import { connectToDB } from "@/utils/connect";
import Task from "@/models/task";

connectToDB();

export const GET=async(req,res)=>{
    try {
        const tasks=await Task.find();
        return new Response(
            JSON.stringify(tasks)
        ,{status:200})
    } catch (error) {
        return new Response({
            succeess:false,
            error:error.message || "Tasks not found"
        },{status:500})
    }
}

export const POST=async(req,res)=>{
    try {
        const {title,description,status}=await req.json();
        const task=new Task({title:title,description:description,status:status});
        await task.save();
        return new Response(
            JSON.stringify(task)
        ,{status:201})
        

    } catch (error) {
        
        return new Response({
            succeess:false,
            error:error.message || "Cannot upload tasks"
        },{status:400});
        
    }
}






