"use client"
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Page = ({ params }) => {
    const [task, setTask] = useState();
    const getData = async () => {
        const response = await axios.get(`/api/task/${params.id}`);
        setTask(response.data);
        setTitle(response.data.title)
        setDescription(response.data.description)
        setStatus(response.data.status)
    }
    useEffect(() => {
        getData();
    }, [])
    const [title, setTitle] = useState("");
    const [status, setStatus] = useState("Pending");
    const [description, setDescription] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.put(`/api/task/${params.id}`, {
            title: title,
            description: description,
            status: status,
        });
        console.log(response);
        
        
    };
    console.log(task);
    return (
        <div className='flex flex-col mt-10 items-center'>
            <h1 className='text-4xl'>Edit Task</h1>
            <form onSubmit={handleSubmit} className="grid gap-4 shadow-xl p-20 rounded-xl shadow-gray-500">

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
    );
}

export default Page;
