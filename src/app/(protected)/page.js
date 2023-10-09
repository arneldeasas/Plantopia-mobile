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
            <button className="block" onClick={()=>{router.push('/login')}}>go to login</button>

            <a href="/login"><div className="p-2 bg-blue-400 text-white">GO LOGIN</div></a>
        </div>
     );
}
 
export default HomePage;