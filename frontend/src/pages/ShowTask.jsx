import React, { useEffect, useState } from 'react'
import BackButton from '../components/BackButton'
import Loading from '../components/Loading';
import Details from '../components/Details';
import { doc, getDoc } from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import { db } from '../../firebase.config';
 
const ShowTask = () => {
  const [task,settask] = useState({});
  const [loading,setloading] = useState(false);
  const [error, setError] = useState(null);
  const {id} = useParams();

  useEffect(() => {
    const fetchTask = async () => {
      setloading(true);

      try {
        // Reference the Firestore document
        const taskDocRef = doc(db, "Tasks", id);
        const taskDoc = await getDoc(taskDocRef);

        if (taskDoc.exists()) {
          // Set the task data
          settask(taskDoc.data() );
          console.log(taskDoc);
        } else {
          console.error("Task not found");
          setError("Task not found.");
        }
      } catch (error) {
        console.error("Error fetching task:", error);
        setError("Could not fetch task. Please try again later.");
      } finally {
        setloading(false);
      }}
      fetchTask();
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
