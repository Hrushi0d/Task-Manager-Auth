import React from 'react'

const Statusfilter = ({statusfilter, setStatusFilter}) => {
  return (
    <div className='flex flex-col items-center'>
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
          Status Filter
        </label>
        
        <select
          className="block appearance-none w-96 bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 mb-4"
          value={statusfilter} // Bind select to status value
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="All">-</option>
          <option value="pending">Pending</option>
          <option value="in-progress">In-Progress</option>
          <option value="completed">Completed</option>
        </select>
    </div>
  )
}

export default Statusfilter
