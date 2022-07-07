import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

export default function AdminPage({children}) {
    const {data,status} = useSession()
    const router = useRouter()
    useEffect(()=>{
        if(status==="unauthenticated" || status==="authenticated" && data.user.role !== "ADMIN"){
            router.replace("/not_allowed")
        }
    },[status,data])
    

    return (
        <>
            {data?.user?.role!=="ADMIN" ?
                <p>Loading...</p>:
                <>
                    <p>AdminPage</p>
                    {console.log(data)}
                    {children}
                </>
            }
        </>
    )
    
}
