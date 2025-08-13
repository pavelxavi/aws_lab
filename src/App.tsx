import Inscription from './composant/Inscription'
import Verification from './composant/verification'
import Invitation from './composant/invitation'
import Onboarding from './composant/onboarding'
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Progress from './composant/progress';
import './App.css'

function App() {

  return (
    // <Progress/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inscription />} />
        <Route path='/verification' element={<Verification />} />
        <Route path='/invitation' element={<Invitation />} />
        <Route path='/onboarding' element={<Onboarding />} />
      </Routes>
    </BrowserRouter>
    // /*<BrowserRouter>
    //   <Routes>
    //     {/* Route parent */}
    //     <Route path="/dashboard" element={<Dashboard />}>
    //       {/* Routes imbriquées */}
    //       <Route path="profile" element={<Profile />} />
    //       <Route path="settings" element={<Settings />} />
    //       <Route index element={<DefaultDashboard />} /> {/* Route par défaut */}
    //     </Route>
    //   </Routes>
    // </BrowserRouter>

    //    {/* Routes imbriquées */}
    //       <Route path='process.inscription' element={<Pro_inscription />} />
    //       <Route path='process.verification' element={<Pro_verification />} />
    //       <Route path='process.invitation' element={<Pro_invitation />} />
    //       <Route path='process.onboarding' element={<Pro_onboarding />} />
    //     <Route/>
  )
}

export default App