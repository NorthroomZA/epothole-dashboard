import { Link, routes } from '@redwoodjs/router'
import "./navbar.css"

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <li className="navbar__item">
          <Link to={routes.assignPothole()} className="navbar__link">
            Assign Pothole
          </Link>
        </li>
        <li className="navbar__item">
          <Link to={routes.createEmployee()} className="navbar__link">
            Create Employee
          </Link>
        </li>
        <li className="navbar__item">
          <Link to={routes.login()} className="navbar__link">
            Login
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;

