
import './App.css'
import Hero from './Components/Body/Hero'
import Navbar from './Components/Navbar/Navbar'

function App() {

  return (
    <>
      <div className='text-center py-1'>
        <span className='text-gray-500'>OEP LICENSE # 0711 / RWP Serving since over 3 Decades</span> | <a className='text-[#8b1215] font-medium' href="">info@khawajamanpower.com</a> | <a className='text-[#8b1215] font-medium' href="">+923134289999</a>
      </div>
    <Navbar></Navbar>
    <Hero></Hero>
    </>
  )
}

export default App
