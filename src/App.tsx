import Home from "./Pages/Home"
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'

export default function App() {

  return (
    <>
    <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='*' element={<div className='flex items-center justify-center min-h-[100dvh] bg-crt-white dark:bg-void-black overflow-hidden'>
            <img className='inline-block max-w-40 max-h-40' src="/png-icon/error.png" alt="error-png"/>
            </div>} />
        </Routes>
    </Router>
      
    </>
  )
}


