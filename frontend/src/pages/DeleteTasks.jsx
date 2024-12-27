import React, { useEffect, useState } from 'react'
import BackButton from '../components/BackButton'
import Loading from '../components/Loading';
import { useNavigate, useParams } from 'react-router-dom';
import { doc, deleteDoc} from 'firebase/firestore';
import { db } from '../../firebase.config';

const DeleteTasks = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {id} = useParams();

  const HandleDeleteTask = async() => {
    try {
      setLoading(true);
      const taskDocRef = doc(db, "Tasks", id);
      await deleteDoc(taskDocRef);
      navigate("/Home");
      console.log(`Document with ID ${id} successfully deleted.`);
    } catch (error) {
      console.error("Error deleting task:" + error);
      alert("An error occurred while deleting the task. Please try again.");
    } finally {
      setLoading(false);
    }
  }
  return (
    <div className='p-4'>
      <BackButton/>
      {loading ? (<Loading/>):(
      <div class="flex flex-col items-center justify-center min-h-screen">
        <h1 class="font-bold leading-snug tracking-tight text-slate-800 text-center mx-auto my-6 w-full text-2xl lg:max-w-3xl lg:text-5xl">
          Delete Task
        </h1>
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-4 text-center" for="grid-first-name">
          Are you absolutely sure?
        </label>
        <button class="rounded-md border border-slate-300 py-2 px-6 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-red-600 hover:border-red-600 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" 
        type="button"
        onClick={HandleDeleteTask}>
          Delete
        </button>
      </div>)}
    </div>
    
  )
}

export default DeleteTasks
