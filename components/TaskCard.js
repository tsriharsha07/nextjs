import React from 'react';

const TaskCard = ({ title, description, status }) => {
    let statusColor = 'bg-gray-500';
    let statusText = '';

    if (status === 'Pending') {
        statusColor = 'bg-yellow-500';
        statusText = 'Pending';
    } else if (status === 'In Progress') {
        statusColor = 'bg-blue-500';
        statusText = 'In Progress';
    } else if (status === 'Completed') {
        statusColor = 'bg-green-500';
        statusText = 'Completed';
    }
    return (
        <div key={title} className="mt-4 mx-3 border-2 border-slate-400 p-2 rounded-lg w-[30rem]">
            <h1 className="text-left text-2xl">{title}</h1>
            <p>{description}</p>
            <div className="flex items-center">
                <span className="text-black mr-2">Status:</span>
                <span className={`px-2 py-1 text-black text-sm rounded-full ${statusColor}`}>{status}</span>
            </div>
        </div>
    );
}

export default TaskCard;
