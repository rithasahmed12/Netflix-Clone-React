import React,{useRef, useState} from 'react'
import { Link , useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'
import { CheckValidData } from '../Validation/validation'


const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const {user, logIn} = UserAuth()
    const navigate = useNavigate()
    const emailRef = useRef(null)
    const passwordRef = useRef(null)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        const message = CheckValidData(emailRef.current.value,passwordRef.current.value)
        try {
            if(message === null){
                await logIn(email, password)
                navigate('/')
            }else{
                setError(message);
            }
            
           
        } catch (error) {
            console.log(error);
            setError(error.message)
        }
    }
  return (
    <>
    <div className='w-full h-screen'>
    <img className='hidden sm:block absolute w-full h-full object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="lalal" />
        <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
        <div className='fixed w-full px-4 py-24 z-50'>
            <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
                <div className='max-w-[320px] mx-auto py-16'>
                    <h1 className='text-3l font-bold'>Sign In</h1>
                    {error ? <p className='p-3 bg-red-400'>{error}</p> : null}
                    <form onSubmit={handleSubmit} className='w-full flex flex-col py-4'>
                        <input ref={emailRef} onChange={(e)=> setEmail(e.target.value)} className='p-3 my-2 bg-gray-700 rounded' type="email" placeholder='Email' autoComplete=''email />
                        <input ref={passwordRef} onChange={(e)=> setPassword(e.target.value)} className='p-3 my-2 bg-gray-700 rounded' type="password" placeholder='Password' autoComplete='current-password' />
                        <button className='bg-red-600 py-3 my-6 rounded font-bold'>Sign in</button>
                        <div className='flex justify-between items-center text-sm text-gray-600'>
                            <p><input className='mr-2' type="checkbox" />Remember me</p>
                            <p>Need Help?</p>
                        </div>
                        <p className='py-8'>
                            <span className='text-gray-600'>New to Netflix?</span>{' '}
                            <Link to='/signup'>Sign Up</Link> 
                            </p>
                    </form>

                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Login