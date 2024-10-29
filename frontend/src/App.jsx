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
      <Route path='/Home/delete/:id' element={<DeleteTasks/>}/>
      <Route path='/Home/details/:id' element={<ShowTask/>}/>
      <Route path='/Home/create' element={<CreateTasks/>}/>
      <Route path='/Home/edit/:id' element={<EditTasks/>}/>
    </Routes>
  )
}

export default App
