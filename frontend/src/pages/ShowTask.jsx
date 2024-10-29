import React, { useEffect, useState } from 'react'
import BackButton from '../components/BackButton'
import Loading from '../components/Loading';
import Details from '../components/Details';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ShowTask = () => {
  const [task,settask] = useState({});
  const [loading,setloading] = useState(false);
  const [error, setError] = useState(null);
  const {id} = useParams();

  useEffect(() => {
    setloading(true);
    axios.get(`http://localhost:5555/api/tasks/${id}`)
      .then((response) => {
        settask(response.data);
        setloading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError("Could not fetch tasks. Please try again later.");
        setloading(false);
      });
  }, []);

  return (
    <div className='p-4'>
      <BackButton/>
      {loading ? (
        <Loading />
      ) : error ? (
        <div className="text-red-500 text-center">{error}</div>
      ) : (
        <Details task={task} id={id}/>
      )}
    </div>
  )
}

export default ShowTask
