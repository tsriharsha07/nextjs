"use client"
import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState('Pending');
  const [description, setDescription] = useState('');

  const handleSubmit = async(e) => {
    e.preventDefault();
    const response=await axios.patch('/api/task',{
      title: title,
      description: description,
      status: status,
    });
    console.log(response);
  };
  return (
    <>
      
      <div className="flex h-[100vh] flex-col items-center justify-center">
        <form onSubmit={handleSubmit} className="grid gap-4 shadow-xl p-20 rounded-xl shadow-gray-500">
          <h1 className="text-3xl text-center mb-4">Create Task</h1>
          <div className="flex items-center">
            <label htmlFor="title" className="mr-2">
              Title:
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="p-2 rounded-xl w-60"
            />
          </div>
          <div className="flex items-center">
            <label htmlFor="status" className="mr-2">
              Status:
            </label>
            <select
              id="status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="p-2 rounded-xl w-60"
            >
              <option value="Pending">Pending</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
          <div className="flex items-center">
            <label htmlFor="description" className="mr-2">
              Description:
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="p-2 rounded-xl w-80 h-20"
            />
          </div>
          <div className="flex justify-center">
            <button type="submit" className="p-2 rounded-xl bg-blue-500 text-white">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  )
}
