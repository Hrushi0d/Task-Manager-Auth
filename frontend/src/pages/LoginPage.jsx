import React, { useState } from 'react'
import { useNavigate, Link, Navigate } from 'react-router-dom';
import Loading from '../components/Loading';
import { auth } from '../../firebase.config';
import { signInWithEmailAndPassword , signInWithPopup , GoogleAuthProvider} from 'firebase/auth';


const LoginPage = () => {
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleGoogleSignIn = async () => {
        const provider = new GoogleAuthProvider();
        try{
            const result = await signInWithPopup(auth, provider);
            console.log("User signed in with Google:", result.user)
            navigate('/Home');
        }catch(error){
            console.error("Error during Google sign-in:", error);
            alert("Failed to sign in with Google");
        }
        
    }
    const handleSignin = async () => {
        try {
            setLoading(true); // Start loading
            const firebase_email = email;
            const firebase_password = password;
    
            const userCredentials = await signInWithEmailAndPassword(auth, firebase_email, firebase_password);
            console.log('User signed in:', userCredentials);
            navigate('/Home');
        } catch (error) {
            console.error('Login error:', error);
            // Display user-friendly error message
            alert(`Login failed: ${error.message}`);
        } finally {
            setLoading(false); // Stop loading in all cases
        }
    };
    
    

    return (
        <div className='p-4 flex items-center justify-center h-screen'>
        {loading ? (<Loading/>):(
            <div className='p-4'>
            <div className=' flex flex-col border-sky-300 rounded-xl w-[600px] p-4 mx-auto'>
                <h1 class="font-bold leading-snug tracking-tight text-slate-800 mx-auto my-6 w-full text-2xl lg:max-w-3xl lg:text-5xl">
                    Login
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
                type="button" onClick={handleSignin}>
                    <label class="block uppercase tracking-wide text-xs font-bold" for="grid-first-name">
                        Login
                    </label>
                </button>
                
                <div className="flex justify-center space-x-4 mt-4">
                    <button
                        onClick={handleGoogleSignIn}
                        className="flex-grow flex items-center justify-center px-4 py-2 space-x-3 bg-white border rounded-lg shadow-md hover:shadow-lg border-gray-300 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                    >
                        <img
                            src="https://www.google.com/favicon.ico"
                            alt="Google Logo"
                            className="w-5 h-5"
                        />
                        <span>Sign in with Google</span>
                    </button>
                </div>

                <p class="text-sm font-light text-gray-500 dark:text-gray-400 my-4">
                    Don’t have an account yet?   
                    <Link to={`/register`}>
                        <a class="font-medium text-blue-500 hover:underline dark:text-primary-500">   Sign up</a>
                    </Link>
                </p>
            </div>
        </div>)}
    </div>
    )
}

export default LoginPage
