import { Outlet } from 'react-router-dom'

const Layout = () => (
  <div className='App'>
    <header className='App-header'>
      <Outlet />
    </header>
  </div>
)

export default Layout
