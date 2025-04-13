import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Page from './components/page'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        <Page />
      </div>
      <Footer />
    </div>
    </>
  )
}

export default App
