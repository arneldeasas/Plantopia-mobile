"use client";
import { useState } from "react";
import InputField from "../components/InputField";
import { instance } from "../axios/axios";
const SignupPage = () => {
   const [credential, setCredential] = useState({
      email: "",
      password: "",
      confirmPassword: "",
   });

   const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
   const passwordRegex = /^.{8,}$/;

   const handleSignup = async (e) => {
      try {
         e.preventDefault();
         const res = await instance.post("/api/account/signup", credential);
         console.log(res);
      } catch (error) {
         console.log(error);
      }
   };
   return (
      <div>
         <form
            action=""
            onSubmit={(e) => {
               handleSignup(e);
            }}
         >
            <div>
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
               />
               <InputField
                  value={credential.password}
                  onChange={(e) => {
                     setCredential({ ...credential, password: e.target.value });
                  }}
                  name={"password"}
                  label="Password"
                  errorMessage={
                     credential.password.length > 0 &&
                     !passwordRegex.test(credential.password) &&
                     "Password must be atleast 8 characters long."
                  }
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
                  errorMessage={
                     credential.password !== credential.confirmPassword &&
                     credential.confirmPassword.length > 0 &&
                     "Password does not match."
                  }
               />
               <button
                  disabled={
                     !emailRegex.test(credential.email) ||
                     !passwordRegex.test(credential.password) ||
                     credential.password !== credential.confirmPassword
                  }
                  type="submit"
                  className="bg-blue-500 text-white p-4 uppercase rounded-xl disabled:bg-blue-200"
               >
                  confirm
               </button>
            </div>
         </form>
      </div>
   );
};

export default SignupPage;
