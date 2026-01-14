import React , {useState} from 'react'
import Navbar from '../Components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import DarkMode from './../Components/Dark/DarkMode';
import FabComponent from '../Components/FabComponent/FabComponent';
import CustomCursor from '../Components/CustomCursor/CustomCursor';

export default function Layout() {
  const [darkMode, setDarkMode] = useState(localStorage.getItem('darkMode') == 'true' || false)
  return (
    <>
    <div className={darkMode ? "dark" : ''}>
      <div className="flex h-screen ">
    <Navbar/>
    <FabComponent/>
    <CustomCursor/>
    <DarkMode darkMode={darkMode} setDarkMode={setDarkMode}/>
     <div className="flex-1 ml-0 md:ml-80 flex flex-col hero ">
    <main className="flex-1 overflow-y-auto w-full ">
      <Outlet />
    </main>
  </div>
    </div>
    </div>
    </>
  )
}
