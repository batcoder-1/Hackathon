import Footer from "./components/Footer"
import Header from "./components/Header"
import { Outlet } from "react-router"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import authservice from "./appwrite/auth"
import { login } from "./components/Store/Authslice"
export default function App(){
const dispatch = useDispatch();

useEffect(() => {
  async function checkSession() {
    try {
      const user = await authservice.getuser(); 
      if (user) {
        dispatch(login(user));  
      } else {
      
      }
    } catch (error) {
      console.error("Session check failed:", error);

    }
  }
  checkSession();
}, []);
    return(
        <>
    <div className="min-h-screen flex flex-col justify-between bg-gray-50">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
        </>
    )
}