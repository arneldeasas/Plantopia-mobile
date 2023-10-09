"use client";
import { useState } from "react";
import InputField from "../../components/InputField";
import { instance } from "../../axios/axios";
import Button from "../../components/Button";
import Link from "next/link";
import { toast } from "react-toastify";
const SignupPage = () => {
   const [isPending, setIsPending] = useState(false);
   const [credential, setCredential] = useState({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
   });
   const nameRegex = /^[A-Za-z. ]+$/
   const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
   const passwordRegex = /^.{8,}$/;

   const handleSignup = async (e) => {
      try {
         e.preventDefault();
         setIsPending(true);
         const res = await instance.post("/api/account/signup", {
            ...credential,
            name: credential.name.trim(),
            email: credential.email.trim(),
         });
         if (res.status === 200) {
            setIsPending(false);
         }
         console.log(res);
      } catch (error) {
         console.log(error);
         setIsPending(false);
               toast.error(error.response.data.message, {
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
               handleSignup(e);
            }}
            className="flex flex-col justify-between grow"
         >
            <div>
               <div className="text-center">
                  <h1 className="text-4xl font-semibold text-bgprimary mt-10">
                     Sign Ups
                  </h1>
                  <p className="text-primary/60">Create new account</p>
               </div>
               <div className="flex flex-col gap-6 mt-10">
                  <InputField
                     value={credential.name}
                     onChange={(e) => {
                        setCredential({ ...credential, name: e.target.value });
                     }}
                     name={"name"}
                     label="Name"
                     errorMessage={
                        credential.name.length > 0 &&
                        !nameRegex.test(credential.name) &&
                        "Name should not include any numbers and symbols except (.)."
                     }
                     icon={<i className="fi fi-sr-user"></i>}
                  />
                  <InputField
                     value={credential.email}
                     onChange={(e) => {
                        setCredential({ ...credential, email: e.target.value });
                     }}
                     name={"email"}
                     label="email"
                     errorMessage={
                        credential.email.length > 0 &&
                        !emailRegex.test(credential.email) &&
                        "Please enter a valid email address."
                     }
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
                     name={"password"}
                     label="Password"
                     type="password"
                     errorMessage={
                        credential.password.length > 0 &&
                        !passwordRegex.test(credential.password) &&
                        "Password must be atleast 8 characters long."
                     }
                     icon={<i className="fi fi-sr-lock"></i>}
                  />
                  <InputField
                     value={credential.confirmPassword}
                     onChange={(e) => {
                        setCredential({
                           ...credential,
                           confirmPassword: e.target.value,
                        });
                     }}
                     name={"confirmPassword"}
                     label="Confirm password"
                     type="password"
                     errorMessage={
                        credential.password !== credential.confirmPassword &&
                        credential.confirmPassword.length > 0 &&
                        "Password does not match."
                     }
                     icon={<i className="fi fi-sr-lock"></i>}
                  />
               </div>
            </div>
            <div className="my-10">
               <Button
                  isPending={isPending}
                  loadingname={"signing up"}
                  disabled={
                     !emailRegex.test(credential.email) ||
                     !passwordRegex.test(credential.password) ||
                     credential.password !== credential.confirmPassword
                  }
                  type="submit"
                  buttonStyle={"primary"}
                  className={"w-full py-2 "}
                  name={"Sign up"}
               />
               <div className="mt-2 font-semibold text-sm">
                  <p className="text-center">
                     <span className="italic  text-primary/60">
                        Already have an account?{" "}
                     </span>{" "}
                     <Link href={"/login"}>
                        <span className="text-bgprimary p-2">Login here</span>
                     </Link>
                  </p>
               </div>
            </div>
         </form>
      </div>
   );
};

export default SignupPage;
