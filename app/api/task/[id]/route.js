import { connectToDB } from "@/utils/connect";
import Task from "@/models/task";

export const GET=async(req,{params})=>{
    try {
        connectToDB();
        const task=await Task.findById(params.id);
        if(!task){
            return new Response(
                "Task not found with given ID"
            ,{status:200})
        }
        return new Response(
            JSON.stringify(task)
        ,{status:200})

    } catch (error) {
        return new Response(
            error.message
        ,{status:200})
    }
}


export const PUT=async(req,{params})=>{
    try {
        const {title,description,status}=await req.json();
        const existingTask=await Task.findById(params.id);
        existingTask.title=title;
        existingTask.description=description;
        existingTask.status=status;
        await existingTask.save();
        console.log(existingTask);
        return new Response(
            JSON.stringify(existingTask)
        ,{status:201})

    } catch (error) {
        return new Response({
            succeess:false,
            error:error.message || "Update task failed"
        },{status:400})
    }
}

export const DELETE=async(req,{params})=>{
    try {
        await Task.findByIdAndRemove(params.id);
        return new Response("Successfully Deleted",{status:500})
    } catch (error) {
        return new Response({
            succeess:false,
            error:error.message || "Tasks not found"
        },{status:500})
    }
}