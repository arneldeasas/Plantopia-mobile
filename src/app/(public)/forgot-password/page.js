"use client";
import InputField from "@/app/components/InputField";
import Button from "@/app/components/Button";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
const ForgotPasswordPage = () => {
    const router = useRouter()
   const [isPending, setIsPending] = useState(false);
   const [email, setEmail] = useState("");
   const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
   return (
      <div className="p-5 min-h-screen flex flex-col">
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
                     FORGOT PASSWORD
                  </h1>
                  <p className="text-primary/60">Please enter your email</p>
               </div>
               <div className="flex flex-col gap-6 mt-10">
                  <InputField
                     value={email}
                     onChange={(e) => {
                        setEmail(e.target.value);
                     }}
                     name={"email"}
                     label="email"
                     errorMessage={
                        email.length > 0 &&
                        !emailRegex.test(email) &&
                        "Please enter a valid email address."
                     }
                     icon={<i className="fi fi-sr-envelope"></i>}
                  />
               </div>
            </div>
            <div className="mb-10">
               <Button
                  isPending={isPending}
                  loadingName={"signing up"}
                  type="submit"
                  buttonStyle={"primary"}
                  className={"w-full py-2 "}
                  name={"Confirm"}
               />
               <a href="/login"><Button
                  type="button"
                
                  buttonStyle={"secondary"}
                  className={"w-full py-2 mt-5"}
                  name={"Go back to login"}
               /></a>
            </div>
         </form>
      </div>
   );
};

export default ForgotPasswordPage;
