
import './App.css'
import 'animate.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './LayOut/Layout.jsx'
import HomePage from './Pages/HomePage/HomePage';
import About from './Pages/About/About.jsx';
import Resume from './Pages/Resume/Resume';
import Projects from './Pages/Projects/Projects';
import Contact from './Pages/Contact/Contact';
import NotFound from './Pages/NotFound/NotFound';


const router = createBrowserRouter([
  {path : '' , element : <Layout/> , children : [
    { index:true , element : <HomePage/>},
    {path : '/about' , element : <About/>},
    {path : '/resume' , element : <Resume/> },
    {path : '/projects' , element : <Projects/> },
    {path : '/contact' , element : <Contact/> },
  ]},
  {path : '*' , element: <NotFound/>}
])
function App() {


  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
