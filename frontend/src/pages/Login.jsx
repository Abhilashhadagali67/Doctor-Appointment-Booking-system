import React, { useState } from 'react'

const Login = () => {
  const [state, setstate] = useState('sign up')
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [name, setname] = useState('')

  const onSubmitHandler = async (event)=>{
    event.preventDefault()
  }

  return (
    <div>
      <form className='min-h-[80vh] flex items-center'>
        <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-[96] border rounded-xl text-zinc-600 text-sm shadow-lg'>
          <p className='text-2xl font-semibold'>{state ==='sign up' ? "Create Account ": " Login"}</p>
          <p>Please {state ==='sign up' ? "sign up ": " Login"} to book appointment</p>
          {
            state==='sign up' && <div className='w-full'>
            <p>Full name</p>
            <input className='border border-zinc-300 rounded w-full mt-1 p-2' type="text" onChange={(e)=>setname(e.target.value)} value={name}  required/>
          </div> 
          }
          <div className='w-full'>
            <p>Email</p>
            <input className='border border-zinc-300 rounded w-full mt-1 p-2' type="email" onChange={(e)=>setemail(e.target.value)} value={email}  required/>
          </div>
          <div className='w-full'>
            <p>Password</p>
            <input className='border border-zinc-300 rounded w-full mt-1 p-2' type="password" onChange={(e)=>setpassword(e.target.value)} value={password} required />
          </div>
          <button className='bg-primary w-full text-white py-2 rounded-md text-base'>{state==='sign up' ? "Create Account ": " Login"}</button>
          {
            state === 'sign up' ? <p>Already have an account? <span onClick={()=>setstate('login')} className='text-primary underline cursor-pointer'>Login here </span></p> : <p>Create new Acoount? <span onClick={()=>setstate('sign up')} className='text-primary underline cursor-pointer'> click here </span></p>
          }
        </div>
      </form>
    </div>
  )
}

export default Login
