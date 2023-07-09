"use client"
import { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';

const Page = () => {
  const [tasks, setTasks] = useState([])
  const getData = async () => {
    const response = await axios.get('/api/task');
    setTasks(response.data);
  }
  console.log(tasks);
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className='flex justify-center items-center flex-col'>
      <h1 className='text-3xl'>List of Tasks</h1>
      {
        tasks.map((task) => {
          let statusColor = 'bg-gray-500';
          let statusText = '';

          if (task.status === 'Pending') {
            statusColor = 'bg-yellow-500';
            statusText = 'Pending';
          } else if (task.status === 'In Progress') {
            statusColor = 'bg-blue-500';
            statusText = 'In Progress';
          } else if (task.status === 'Completed') {
            statusColor = 'bg-green-500';
            statusText = 'Completed';
          }
          const handleDelete=async(id)=>{
            const response = await axios.delete(`/api/task/${id}`);
            console.log(response);
            getData();
          }
          return (
            <div key={task.title} className="mt-4 mx-48 border-2 border-slate-400 p-2 rounded-lg w-[50rem]">
              <div className='flex justify-between'>
                <h1 className="text-left text-2xl">{task.title}</h1>
                <Link href={`/tasks/${task._id}`}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 cursor-pointer">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                </svg></Link>
              </div>
              <p>{task.description}.</p>
              <div className='flex justify-between'>
                <div className="flex items-center">
                  <span className="text-black mr-2">Status:</span>
                  <span className={`px-2 py-1 text-black text-sm rounded-full ${statusColor}`}>{task.status}</span>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 cursor-pointer" onClick={()=>{handleDelete(task._id)}}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                </svg>
              </div>

            </div>
          )
        })
      }
    </div>
  );
}

export default Page;
