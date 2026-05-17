import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import './App.css'
import Home from './pages/Home'
import ColorPalette from './pages/ColorPalette'
import Silhouette from './pages/Silhouette'
import Hair from './pages/Hair'

export default function App() {

  return (
    <>
    <div className='w-200'>
          <h1>Sophie's Styler</h1>
          <NavBar />

        </div>
    <Routes>
      <Route path="/" element={< Home />} />
      <Route path="/color-palette" element={< ColorPalette />} />
      <Route path="/silhouette" element={< Silhouette />} />
      <Route path="/hair" element={< Hair />} />
    </Routes>

    </>
  )
}
