"use client";
import { useEffect, useState } from "react";

import { instance } from "../../axios/axios";
import Button from "@/app/components/Button";
import InputField from "@/app/components/InputField";

import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const LoginPage = () => {
   const router = useRouter();
   const [isPending, setIsPending] = useState(false);
   const [count, setCount] = useState(0);
   const [credential, setCredential] = useState({
      email: "",
      password: "",
   });

   useEffect(() => {
      router.prefetch("/signup");
      router.prefetch("/forgot-password");
   }, []);
   const handleSubmit = async (e) => {
      try {
         e.preventDefault();
         setIsPending(true);
         /*  const options = {
            url: 'http://localhost:3001/api/account/login',
            headers: { 'Content-Type': 'application/json' },
            data: credential,
          };
          const res = await CapacitorHttp.post(options)
          if(res.data.message==='success'){
            router.push('/')
          }
        console.log(res); */
         const res = await instance.post("/api/account/login", credential);
         console.log(res);
         if (res.data.message === "success") {
            router.push("/");
         }
         /*   const res = await fetch('http://localhost:3001/api/account/login',{
         method:'POST',
         body: JSON.stringify(credential),
         headers:{
            'Content-Type':'application/json'
         }
        })
        const message = await res.json()
        if(message.message==='success'){
         router.push('/')
        } */
         // setMessage(message?.message)
      } catch (error) {
         setIsPending(false);
         toast.error(error?.response?.data?.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
         });
      }
   };
   return (
      <div className="min-h-screen p-5 flex flex-col">
         <form
            action=""
            onSubmit={(e) => {
               handleSubmit(e);
            }}
            className="flex flex-col justify-between grow"
         >
            <div>
               <div className="text-center">
                  <h1 className="text-4xl font-semibold text-bgprimary mt-10">
                     WELCOME BACK!
                  </h1>
                  <button
                     onClick={() => {
                        setCount(count + 1);
                     }}
                  >
                     add {count}
                  </button>
                  <p className="text-primary/60">Login to your account</p>
               </div>
               <div className="flex flex-col gap-6 mt-10">
                  <InputField
                     value={credential.email}
                     onChange={(e) => {
                        setCredential({ ...credential, email: e.target.value });
                     }}
                     name={"email"}
                     label="email"
                     icon={<i className="fi fi-sr-envelope"></i>}
                  />
                  <InputField
                     value={credential.password}
                     onChange={(e) => {
                        setCredential({
                           ...credential,
                           password: e.target.value,
                        });
                     }}
                     type="password"
                     name={"password"}
                     label="Password"
                     icon={<i className="fi fi-sr-lock"></i>}
                  />
               </div>

               <a href="/forgot-password">
                  <p className="font-semibold text-primary/60 italic text-sm p-2 text-right">
                     Forgot password?
                  </p>
               </a>
            </div>
            <div className="mb-10">
               <a href="/test">
                  <Button
                     isPending={isPending}
                     loadingName={"signing up"}
                     type="button"
                     buttonStyle={"primary"}
                     className={"w-full py-2 "}
                     name={"take pic"}
                  />
               </a>
               <Button
                  isPending={isPending}
                  loadingName={"signing up"}
                  type="submit"
                  buttonStyle={"primary"}
                  className={"w-full py-2 mt-5"}
                  name={"Login"}
               />
               <div className="mt-2 font-semibold text-sm">
                  <p className="text-center">
                     <span className="italic  text-primary/60">
                        Don't have an account?{" "}
                     </span>{" "}
                     <a href="/signup">
                        <span className="text-bgprimary p-2">Sign up here</span>
                     </a>
                  </p>
               </div>
            </div>
         </form>
      </div>
   );
};

export default LoginPage;
