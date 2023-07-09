"use client"
import TaskCard from "@/components/TaskCard";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const[tasks,setTasks]=useState([])
  const getData=async()=>{
    const response=await axios.get('/api/task');
    setTasks(response.data);
  }
  console.log(tasks);
  useEffect(()=>{
    getData();
  },[]);
  return (
      <div className="h-[100vh] flex items-center flex-col m-4">
        <h1 className="text-4xl m-4">Welcome to Task Flow</h1>
        <div className="flex items-center mx-40">
        <p>Welcome to our intuitive and powerful task manager! With our Nextjs-based application, you can effortlessly organize and  edit your tasks. Create new tasks. Our user-friendly interface allows you to seamlessly edit, mark tasks as complete.  Boost your efficiency and conquer your tasks with our reliable Nextjs task manager.</p>
        </div>
        <div className="flex flex-col items-center mx-40 mt-20 w-[100vh] shadow-lg  p-8 shadow-gray-400 rounded-xl ">
          <h1 className="text-3xl text-center">List of Tasks</h1>
          <div>
            
            {tasks.map((task)=>(
              <>
              <TaskCard key={task.title} description={task.description} title={task.title} status={task.status}/>
              </>
            ))}
            
          </div>
        </div>
      </div>
  )
}
