import React, { useEffect, useState } from 'react';
import Loading from '../components/Loading';
import TasksTable from '../components/TasksTable';
import axios from 'axios';

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios.get('http://localhost:5555/api/tasks')
      .then((response) => {
        setTasks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError("Could not fetch tasks. Please try again later.");
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-4">
      <div className="flex items-center justify-center">
        <h1 className="text-3xl my-8">Task List</h1>
      </div>
      {loading ? (
        <Loading />
      ) : error ? (
        <div className="text-red-500 text-center">{error}</div>
      ) : (
        <TasksTable tasks={tasks} />
      )}
    </div>
  );
};

export default Home;

