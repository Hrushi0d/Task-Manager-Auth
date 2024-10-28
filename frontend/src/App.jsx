import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import DeleteTasks from './pages/DeleteTasks'
import CreateTasks from './pages/CreateTasks'
import EditTasks from './pages/EditTasks'
import ShowTask from './pages/ShowTask'


const App = () => {
  return (
    <Routes>
      <Route path='/Home' element={<Home/>}/>
      <Route path='/deletetask' element={<DeleteTasks/>}/>
      <Route path='/details' element={<ShowTask/>}/>
      <Route path='/createtask' element={<CreateTasks/>}/>
      <Route path='/edit' element={<EditTasks/>}/>
    </Routes>
  )
}

export default App
