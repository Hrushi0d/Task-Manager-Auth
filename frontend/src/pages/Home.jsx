import React from 'react'
import Loading from '../components/Loading'

const Home = () => {
  return (
    <div className='p-4'>
      <div className='flex items-center justify-center'>
        <h1 className='text-3xl my-8'>Task List</h1>
      </div>
      <Loading/>
    </div>
    
  )
}

export default Home
