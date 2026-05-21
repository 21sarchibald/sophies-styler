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
      <div className='flex min-h-screen'>
        <NavBar />

        <div className="flex-1">
          <h1 className='sticky font-heading text-4xl mt-5 ml-10'>Sophie's Styler</h1>

          <main>
            <Routes>
              <Route path="/" element={< Home />} />
              <Route path="/color-palette" element={< ColorPalette />} />
              <Route path="/silhouette" element={< Silhouette />} />
              <Route path="/hair" element={< Hair />} />
            </Routes>
          </main>
        </div>
      </div>
    </>
  )
}
