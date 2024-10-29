import React from 'react'
import { Link } from 'react-router-dom'

const Details = ({ task, id }) => {
  return (
    <div class="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96 p-6">
        <div className="flex items-center justify-between mb-4">
            <h5 className="ml-3 text-slate-800 text-xl font-semibold">
                {task.title}
            </h5>
            <Link to={`/Home/delete/${id}`}>
                <button
                    className="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-slate-900 transition-all hover:bg-red-500 active:bg-slate-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                    aria-label="Delete Task"
                >
                    <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </span>
                </button>                 
            </Link>
        </div>
        <p class="block text-slate-600 leading-normal font-light mb-4">
            {task.description}
        </p>
        <div className="flex space-x-2">
            <Link to={`/Home/edit/${id}`}>
                <button
                className="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-slate-900 transition-all hover:bg-slate-900/10 active:bg-slate-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
                aria-label="Edit Task"
                >
                <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    className="w-4 h-4"
                    >
                    <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z"/>
                    </svg>
                </span>
                </button>                 
            </Link>
            <div class="w-max">
                {task.status === 'pending' ? (
                    <div class="relative grid items-center px-2 py-1 font-sans text-xs font-bold text-red-900 uppercase rounded-md select-none whitespace-nowrap bg-red-500/20">
                        <span span class="">{task.status}</span>
                    </div>
                ) : task.status === 'in-progress' ? (
                    <div class="relative grid items-center px-2 py-1 font-sans text-xs font-bold uppercase rounded-md select-none whitespace-nowrap bg-amber-500/20 text-amber-900">
                    <span span class="">{task.status}</span>
                    </div>
                ) : task.status === 'completed' ? (
                    <div class="relative grid items-center px-2 py-1 font-sans text-xs font-bold text-green-900 uppercase rounded-md select-none whitespace-nowrap bg-green-500/20">
                    <span span class="">{task.status}</span>
                    </div>
                ) : (
                    <span className="text-gray-500">Unknown Status</span>
                )}
            </div>
            <div class="w-max">
                {task.priority === 'high' ? (
                    <div class="relative grid items-center px-2 py-1 font-sans text-xs font-bold text-red-900 uppercase rounded-md select-none whitespace-nowrap bg-red-500/20">
                        <span span class="">{task.priority}</span>
                    </div>
                ) : task.priority === 'medium' ? (
                    <div class="relative grid items-center px-2 py-1 font-sans text-xs font-bold uppercase rounded-md select-none whitespace-nowrap bg-amber-500/20 text-amber-900">
                    <span span class="">{task.priority}</span>
                    </div>
                ) : task.priority === 'low' ? (
                    <div class="relative grid items-center px-2 py-1 font-sans text-xs font-bold text-green-900 uppercase rounded-md select-none whitespace-nowrap bg-green-500/20">
                    <span span class="">{task.priority}</span>
                    </div>
                ) : (
                    <span className="text-gray-500">Unknown Status</span>
                )}
            </div>
        </div>
    </div>
  )
}

export default Details
