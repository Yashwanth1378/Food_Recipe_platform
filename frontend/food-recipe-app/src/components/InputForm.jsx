import React, {useState} from 'react'

export default function InputForm({setIsOpen}) {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("") 
    const [isSignUp,setIsSignUp]=useState(false)
    const [error,setError]=useState("")

    const handleOnSubmit=(e)=>{
        e.preventDefault()
        setIsOpen()
    }
  return (
    <>
    <form className= 'form' onSubmit={handleOnSubmit}>
        <div className='form-control'>
            <label>Email</label>
            <input type="email" className='input' onChange={(e)=>setEmail(e.target.value)}required></input>
        </div>
        <div className='form-control'>
            <label>Password</label>
            <input type="password" className='input' onChange={(e)=>setPassword(e.target.value)} required></input>
        </div>
        <button type='submit'>{(isSignUp) ? "Sign Up": "Login"}</button>
        {(error!="")&&<h6 className='error'>{error}</h6>}
        <p onClick={()=>setIsSignUp(pre=>!pre)}>{(isSignUp) ? "Already have an account":"Create new account"}</p>
    </form>
    </>
  )
}
