import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer'

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default App
