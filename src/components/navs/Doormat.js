import { NavLink } from "react-router-dom";

export default function DoormatNav() {
  return (
    <ul className="doormat">
      <li><NavLink to="/" className={(navData) => (navData.isActive ? 'active' : '')}>Home</NavLink></li>
      <li><NavLink to="/about" className={(navData) => (navData.isActive ? 'active' : '')}>About</NavLink></li>
      <li><NavLink to="/menu" className={(navData) => (navData.isActive ? 'active' : '')}>Menu</NavLink></li>
      <li><NavLink to="/reservations" className={(navData) => (navData.isActive ? 'active' : '')}>Reservations</NavLink></li>
      <li><NavLink to="/order-online" className={(navData) => (navData.isActive ? 'active' : '')}>Order Online</NavLink></li>
      <li><NavLink to="/login" className={(navData) => (navData.isActive ? 'active' : '')}>Login</NavLink></li>
    </ul>
  )
}
