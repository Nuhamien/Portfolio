import { Outlet } from 'react-router'
import Navbar from '../components/layout/Navbar'


function MainLayout() {
  return (
    <div className="bg-white text-zinc-900">
      <Navbar />
      <main>
        <Outlet />
      </main>
      
    </div>
  )
}

export default MainLayout