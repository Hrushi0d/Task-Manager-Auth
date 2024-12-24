import React, { useEffect, useState } from 'react';
import Loading from '../components/Loading';
import TasksTable from '../components/TasksTable';
import Priorityfilter from '../components/Priorityfilter';
import Statusfilter from '../components/Statusfilter';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(null);
  const [statusfilter, setStatusFilter] = useState("All");
  const [priorityfilter, setPriorityFilter] = useState("All");

  useEffect(() => {
    setLoading(true);
    axios.get('http://localhost:5555/api/tasks')
      .then((response) => {
        let data = response.data.data;
        data = statusfilter === "All" 
        ? data 
        : data.filter(task => task.status === statusfilter);
        data = priorityfilter === "All" 
        ? data 
        : data.filter(task => task.priority === priorityfilter);
        setTasks(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError("Could not fetch tasks. Please try again later.");
        setLoading(false);
      });
  }, [statusfilter, priorityfilter]);

  const filteredTasks = statusfilter === "All" 
    ? tasks 
    : tasks.filter(task => task.status === statusfilter);

  return (
    <div className="p-4">
      
      <div className="flex flex-col items-center justify-center mb-4">
        <h1 className="font-bold leading-snug tracking-tight text-slate-800 my-6 text-2xl lg:max-w-3xl lg:text-5xl text-center">
          Task Manager
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-2">
            By Hrushikesh Deshpande
          </label>
        </h1> 
      </div>

      
      {loading ? (
        <Loading />
      ) : error ? (
        <div className="text-red-500 text-center">{error}</div>
      ) : (
        <div>
        
        <div className="flex flex-col items-center">
        <Priorityfilter priorityfilter={priorityfilter} setPriorityFilter={setPriorityFilter}/>
        <Statusfilter statusfilter={statusfilter} setStatusFilter={setStatusFilter}/>
        <Link to={`/Home/create`}>
          <button 
            className="rounded-md border border-slate-300 py-2 px-4 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none mb-4" 
            type="button"
          >
            Create Tasks
          </button>                
        </Link>
        
      </div>

        <TasksTable tasks={tasks} />
        </div>
      )}
    </div>
  );
};

export default Home;

