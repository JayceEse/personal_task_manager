import {Outlet, Link} from 'react-router-dom'

export default function App() {
  return(
    <div className='p-4'>
      <nav className='space-x-4 mb-6'>
        <Link to="/">Home</Link>
        <Link to="tasks">Tasks</Link>
        <Link to="about">About</Link>
      </nav>
      <Outlet/>
    </div>
  )
}
