'use client'

import { useRouter } from "next/navigation";
import { useEffect } from "react";

const HomePage = () => {
    const router= useRouter()
    useEffect(()=>{
        router.prefetch('/login')
    },[])
    return ( 
        <div>
            Welcome to Homeee23!
            <button className="block" onClick={()=>{router.push('/signup')}}>go to login</button>

        
        </div>
     );
}
 
export default HomePage;