import { FaSquareGithub } from "react-icons/fa6";
import { AiFillGoogleSquare } from "react-icons/ai";
import RootLayout from "@/components/layout/RootLayout";
import { useSession, signIn, signOut } from "next-auth/react"





const login = () => {
  return (
    <div className="border rounded w-full md:w-2/6 h-72 my-24 mx-auto ">
       <h1 className="text-center my-6 text-2xl" >LOGIN PAGE </h1>

       <div className="flex items-center justify-center">
          <FaSquareGithub onClick={() => signIn("github", { callbackUrl: "https://shuvotechfrontend-mouzho82t-milonahmedshuvo.vercel.app" }) } className="text-6xl"></FaSquareGithub>
          <AiFillGoogleSquare onClick={() => signIn("google", { callbackUrl: "http://localhost:3000" }) } className="text-6xl"></AiFillGoogleSquare>
       </div>
    </div>
  )
}

export default login;

login.getLayout = function getLayout ( page ) {
    return <RootLayout> {page} </RootLayout>
}
