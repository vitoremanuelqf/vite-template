import { Outlet } from 'react-router-dom'

export function News() {
  return (
    <div>
      <h1>News</h1>

      <Outlet />
    </div>
  )
}
