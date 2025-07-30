import { useState } from 'react'
import Inscription from './composant/Inscription'
import Verification from './composant/verification'
import Invitation from './composant/invitation'
import Onboarding from './composant/onboarding'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inscription />} />
        <Route path='/verification' element={<Verification />} />
        <Route path='/invitation' element={<Invitation />} />
        <Route path='/onboarding' element={<Onboarding />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App