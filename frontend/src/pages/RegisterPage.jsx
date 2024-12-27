import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Loading from '../components/Loading';
import { auth } from '../../firebase.config';
import { createUserWithEmailAndPassword } from 'firebase/auth';


const RegisterPage = () => {

    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    
    const handleSaveUser = async () => {
        setLoading(true)
        try {
            const ref = await createUserWithEmailAndPassword(auth, email, password).catch((error) =>{
                alert(error.message);
            })
            console.log(ref);
            navigate('/')
        } catch (error) {
            console.log(error);
            alert('an error occured')
        }
    }

  return (
    <div className='p-4 '>
        <BackButton destination='/'/>
        {loading ? (<Loading/>):(
            <div className='p-4 flex items-center justify-center h-screen'>
            <div className=' flex flex-col border-sky-300 rounded-xl w-[600px] p-4 mx-auto'>
                <h1 class="font-bold leading-snug tracking-tight text-slate-800 mx-auto my-6 w-full text-2xl lg:max-w-3xl lg:text-5xl">
                    Sign Up
                </h1>
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                    Email
                </label>
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"  
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}/>

                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                    Password
                </label>
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"  
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}/>

                <button class="rounded-md border mt-4 border-slate-300 py-3 px-4 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" 
                type="button" onClick={handleSaveUser}>
                    <label class="block uppercase tracking-wide text-xs font-bold" for="grid-first-name">
                        Register
                    </label>
                </button>
            </div>
        </div>)}
    </div>
  )
}

export default RegisterPage
