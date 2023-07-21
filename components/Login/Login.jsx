import React from 'react'
import { Divider } from '@chakra-ui/react';

const Login = () => {
        return (
            <>
            <div className='flex flex-col w-1/4 border border-zinc-300 rounded-md mx-auto px-2 py-4 shadow-md'>
                <span className='flex flex-row gap-2 mt-2 justify-between'>
                    <label>Name:</label>
                    <input type='text' placeholder='Full Name ' className='border border-zinc-300 rounded-sm px-2'/>
                </span>
                <span className='flex flex-row gap-2 mt-2 justify-between'>
                    <label>Email:</label>
                    <input type='email' placeholder='Enter your email' className='border border-zinc-300 rounded-sm px-2'/>
                </span>
                <span className='flex flex-row gap-2 mt-2 justify-between'>
                    <label>Password:</label>
                    <input type='password' placeholder='Enter your password' className='border border-zinc-300 rounded-sm px-2'/>
                </span>
                <button onClick={() => signIn()} type="button" className="btn btn-primary mt-4 text-white bg-blue-700 w-1/3 mx-auto rounded-md uppercase shadow-md">Login</button>
                <Divider className='mt-3'/>
                <button onClick={() => signIn()} type="button" className="btn btn-primary mt-4 text-white bg-red-700 w-1/3 mx-auto rounded-md uppercase shadow-md">Google</button>
            </div>

                
            </>
        )
    // }

}
  

export default Login