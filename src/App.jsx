
import { Outlet } from 'react-router-dom'
import Navber from './Components/Navber/Navber'
import Footer from './Components/Footer/Footer'

function App() {

  return (
    <div className='mx-auto max-w-7xl'>
      <Navber></Navber>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default App
