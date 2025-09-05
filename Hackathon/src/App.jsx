import Footer from "./components/Footer"
import Header from "./components/Header"
import { Outlet } from "react-router"
export default function App(){

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