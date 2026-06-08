import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import './App.css'
import Home from './pages/Home'
import ColorPalette from './pages/ColorPalette'
import Silhouette from './pages/Silhouette'
import Hair from './pages/Hair'

import './index.css'
import Register from './pages/users/Register'
import Login from './pages/users/Login'

export default function App() {

  return (
    <>
      <div className='flex min-h-screen'>
        <NavBar />

        <div className="flex-1">
          <h1 className='sticky font-heading text-4xl font-extrabold mt-5 ml-10'>Sophie's Styler</h1>

          <main className="p-10">
            <Routes>
              <Route path="/" element={< Home />} />
              <Route path="/color-palette" element={< ColorPalette />} />
              <Route path="/silhouette" element={< Silhouette />} />
              <Route path="/hair" element={< Hair />} />
              <Route path="/users/register" element={<Register />} />
              <Route path="/users/login" element={<Login />} />
              <Route path="/users/dashboard" element={<Register />} />
            </Routes>
          </main>
        </div>
      </div>
    </>
  )
}
