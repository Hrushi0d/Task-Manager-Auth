import React from 'react'

const Priorityfilter = ({priorityfilter, setPriorityFilter}) => {
  return (
    <div className='flex flex-col items-center'>
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-2">
          Priority Filter
        </label>
        <select
          className="block appearance-none w-96 bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 mb-4"
          value={priorityfilter} // Bind select to priority value
          onChange={(e) => setPriorityFilter(e.target.value)}
        >
          <option value="All">-</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
    </div>
  )
}

export default Priorityfilter
