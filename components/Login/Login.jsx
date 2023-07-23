import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react";

const Login = () => {
    const { data: session } = useSession();
    console.log(session,"session");
    if(session) {
        return (
            <>
                <button onClick={() => signOut()} type="button" className="btn btn-primary">Sign Out of Google</button>
              
             
            </>
        )
    } else {
        return (
            <>
                <button onClick={() => signIn()} type="button" className="btn btn-primary">Sign In with Google</button>
            </>
        )
    }

    
}
  

export default Login