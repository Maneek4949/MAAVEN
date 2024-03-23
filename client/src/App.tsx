import './App.css'
import Navbar from './components/layout/Navbar'
import Home from './components/pages/Home'
import ProjectCard from './components/ui/ProjectCard'

function App() {

  return (<><Navbar/>
  <div className=" mx-6 lg:mx-16 mt-8 md:mt-16">
  <Home/>
  <ProjectCard/>
  <ProjectCard/>
  </div>
  </>
  )
}

export default App
