import React, { useState } from 'react'
import { useNavigate, Link, Navigate } from 'react-router-dom';
import Loading from '../components/Loading';
import { auth } from '../../firebase.config';
import { signInWithEmailAndPassword , signInWithPopup , GithubAuthProvider , GoogleAuthProvider} from 'firebase/auth';


const LoginPage = () => {
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleGoogleSignIn = async () => {
        const provider = new GoogleAuthProvider();
        try{
            const result = signInWithPopup(auth, provider);
            console.log("User signed in with Google:", result.user)
            navigate('/Home');
        }catch(error){
            console.error("Error during Google sign-in:", error);
            alert("Failed to sign in with Google");
        }
        
    }
    const handleGitHubSignIn = async () => {
        const provider = new GithubAuthProvider();
        try {
            const result = signInWithPopup(auth, provider);
            console.log("User signed in with GitHub:", result.user);
            navigate('/Home');
        } catch (error) {
            console.error("Error during GitHub sign-in:", error);
            alert("Failed to sign in with GitHub");
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

                    <button
                        onClick={handleGitHubSignIn}
                        className="flex-grow flex items-center justify-center px-4 py-2 space-x-3 bg-black text-white border rounded-lg shadow-md hover:shadow-lg border-gray-600 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.111.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.612-4.042-1.612-.546-1.387-1.333-1.757-1.333-1.757-1.09-.744.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.835 2.807 1.305 3.492.997.108-.775.419-1.305.763-1.605-2.665-.303-5.467-1.332-5.467-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.29-1.552 3.296-1.23 3.296-1.23.654 1.653.243 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.806 5.624-5.479 5.921.43.37.814 1.096.814 2.21 0 1.595-.015 2.884-.015 3.276 0 .319.216.694.825.577C20.565 21.795 24 17.299 24 12c0-6.627-5.373-12-12-12z"
                            />
                        </svg>
                        <span>Sign in with GitHub</span>
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
