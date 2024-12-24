import React from 'react'
import { Link } from 'react-router-dom'


const TasksTable = ({ tasks }) => {
  return (
    <div className="relative flex flex-col w-full overflow-scroll text-gray-700 bg-white shadow-md rounded-lg bg-clip-border">
        <table class="w-full text-left table-auto min-w-max">
        <thead>
            <tr>
            <th className='p-4 transition-colors cursor-pointer border-y border-slate-200 bg-slate-500 text-white'>
                <p className='"block text-sm font-normal leading-none text-slate-500"'>Title</p>
                </th>
            <th className='p-4 transition-colors cursor-pointer border-y border-slate-200 bg-slate-500 text-white'>
                <p className='"block text-sm font-normal leading-none text-slate-500"'>Description</p>
                </th>
            <th className='p-4 transition-colors cursor-pointer border-y border-slate-200 bg-slate-500 text-white'>
                <p className='"block text-sm font-normal leading-none text-slate-500"'>Status</p>
                </th>
            <th className='p-4 transition-colors cursor-pointer border-y border-slate-200 bg-slate-500 text-white'>
                <p className='"block text-sm font-normal leading-none text-slate-500"'>Priority</p>
                </th>
            <th className='p-4 transition-colors cursor-pointer border-y border-slate-200 bg-slate-500 text-white'>
                <p className='"block text-sm font-normal leading-none text-slate-500"'></p>
                </th>
            </tr>
        </thead>
        {tasks.map((t) => (
            <tr className="hover:bg-slate-50">
              <td className="p-4 border-b border-slate-200">
                <p className="block text-sm text-slate-800">{t.title}</p>
              </td>
              <td className="p-4 border-b border-slate-200 max-w-xs truncate">
                <p className="block text-sm text-slate-800 truncate">{t.description}</p>
              </td>
              <td className="p-4 border-b border-slate-200 ">
                <div class="w-max">
                  {t.Status === 'pending' ? (
                        <div class="relative grid items-center px-2 py-1 font-sans text-xs font-bold text-red-900 uppercase rounded-md select-none whitespace-nowrap bg-red-500/20">
                          <span span class="">{t.Status}</span>
                        </div>
                    ) : t.Status === 'in-progress' ? (
                      <div class="relative grid items-center px-2 py-1 font-sans text-xs font-bold uppercase rounded-md select-none whitespace-nowrap bg-amber-500/20 text-amber-900">
                        <span span class="">{t.Status}</span>
                      </div>
                    ) : t.Status === 'completed' ? (
                      <div class="relative grid items-center px-2 py-1 font-sans text-xs font-bold text-green-900 uppercase rounded-md select-none whitespace-nowrap bg-green-500/20">
                        <span span class="">{t.Status}</span>
                      </div>
                    ) : (
                        <span className="text-gray-500">Unknown Status</span>
                    )}
                </div>
              </td>
              <td className="p-4 border-b border-slate-200">
                <div class="w-max">
                  {t.Priority === 'high' ? (
                        <div class="relative grid items-center px-2 py-1 font-sans text-xs font-bold text-red-900 uppercase rounded-md select-none whitespace-nowrap bg-red-500/20">
                          <span span class="">{t.Priority}</span>
                        </div>
                    ) : t.Priority === 'medium' ? (
                      <div class="relative grid items-center px-2 py-1 font-sans text-xs font-bold uppercase rounded-md select-none whitespace-nowrap bg-amber-500/20 text-amber-900">
                        <span span class="">{t.Priority}</span>
                      </div>
                    ) : t.Priority === 'low' ? (
                      <div class="relative grid items-center px-2 py-1 font-sans text-xs font-bold text-green-900 uppercase rounded-md select-none whitespace-nowrap bg-green-500/20">
                        <span span class="">{t.Priority}</span>
                      </div>
                    ) : (
                        <span className="text-gray-500">Unknown Priority</span>
                    )}
                </div>
              </td>
              <td className="p-4 border-b border-slate-200">
                <div className="flex justify-between items-center">
                  <Link to={`/Home/details/${t.id}`} className="text-sm text-slate-800">
                  <button class="rounded-md border border-slate-300 py-2 px-4 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
                    Show Details
                  </button>
                  </Link>
                  <div className="flex space-x-2">
                    <Link to={`/Home/edit/${t.id}`}>
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

                    <Link to={`/Home/delete/${t.id}`}>
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
                </div>
              </td>

            </tr>
          ))}
            
        <tbody>
        </tbody>
        </table>
    </div>
  )
}

export default TasksTable
