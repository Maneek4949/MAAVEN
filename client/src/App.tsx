import './App.css'
import Navbar from './components/layout/Navbar'
import Home from './components/pages/Home'


function App() {

  return (<><Navbar/>
  <div className=" mx-6 lg:mx-16 mt-8 md:mt-16">
  <Home/>
  </div>
  </>
  )
}

export default App
