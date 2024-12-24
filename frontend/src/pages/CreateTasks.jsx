import React, { useState } from 'react'
import BackButton from '../components/BackButton'
import Loading from '../components/Loading';
import { db ,auth } from '../../firebase.config';
import { collection, addDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const CreateTasks = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('pending');
  const [priority, setPriority] = useState('medium');
  const navigate = useNavigate();

  const handleSaveTask = async () => {
    setLoading(true)
        try {
            await addDoc(collection(db, "Tasks"), {
              title: title,
              description: description,
              Status: status,
              Priority: priority,
              uid: auth.currentUser.uid
            });
            setLoading(false);
            navigate('/Home');
        } catch (e) {
            setLoading(false);
            alert("An error occurred");
            console.error(e);
        }
    

  }

  return (
    <div className='p-4'>
      
      <BackButton/>
      {loading ? (<Loading/>):(
        <div className='p-4'>
          <div className=' flex flex-col border-sky-300 rounded-xl w-[600px] p-4 mx-auto'>
              <h1 class="font-bold leading-snug tracking-tight text-slate-800 mx-auto my-6 w-full text-2xl lg:max-w-3xl lg:text-5xl">
                Create Task
              </h1>
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                  Title
              </label>
              <input class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"  
              type="text" 
              value={title}
              onChange={(e) => setTitle(e.target.value)}/>
              

              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                  Description
              </label>
              <textarea
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white resize-y overflow-y-auto h-40"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              />

              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                  Priority
              </label>
              <select
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              value={priority} // Bind select to priority value
              onChange={(e) => setPriority(e.target.value)}
              >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
              </select>

              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-2" for="grid-first-name">
                  Status
              </label>
              <select
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              value={status} // Bind select to priority value
              onChange={(e) => setStatus(e.target.value)}
              >
              <option value="pending">Pending</option>
              <option value="in-progress">In-Progress</option>
              <option value="completed">Completed</option>
              </select>

              <button class="rounded-md border mt-4 border-slate-300 py-3 px-4 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" 
              type="button" onClick={handleSaveTask}>
                <label class="block uppercase tracking-wide text-xs font-bold" for="grid-first-name">
                    Create Task
                </label>
              </button>


          </div>
      </div>
      )}
    </div>
  )
}

export default CreateTasks
