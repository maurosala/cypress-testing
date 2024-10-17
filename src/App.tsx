import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='*' element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
