"use client";
import "../globals.css";
import { Inter } from "next/font/google";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({ children }) {
   return (
      <html lang="en">
         <body className={`${inter.className}`}>
            <ToastContainer
               position="bottom-left"
               autoClose={5000}
               hideProgressBar={false}
               newestOnTop={false}
               closeOnClick
               rtl={false}
               pauseOnFocusLoss
               draggable
               pauseOnHover
               theme="light"
               style={{ fontFamily: "__Quicksand_df6bcf" }}
               
            />
            {children}
         </body>
      </html>
   );
}
