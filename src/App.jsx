import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Links from './pages/Links'
import Activity from './pages/Activity'
import Assignments from './pages/Assignments'
import Syllabus from './pages/Syllabus'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/links" element={<Links />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="/assignments" element={<Assignments />} />
        <Route path="/syllabus" element={<Syllabus />} />
      </Routes>
    </>
  )
}

export default App
