import { NavHome } from './components/navhome'
import { NavLogin } from './components/navlogin'

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-0 w-full bg-opacity-0">
      <div className="container mx-auto flex items-center justify-between">
        <NavHome />
        <ul className="flex items-center space-x-32">
            <NavLogin />    
        </ul>
      </div>
    </nav>
  )
}
