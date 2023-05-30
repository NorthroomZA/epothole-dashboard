import { Link, routes } from '@redwoodjs/router'
import "./dashboard.css"
import Navbar from 'src/components/navbar'

const AdminDashboardPage = () => {

  return (
    <>
    <Navbar/>
    <div className="dashboard">
      <button className="dashboard__button">
        <Link to={routes.createEmployee()} className="dashboard__link">
          Create Employees
        </Link>
      </button>
      <button className="dashboard__button">
        <Link to={routes.assignPothole()} className="dashboard__link">
          Assign Potholes
        </Link>
      </button>
    </div>
    </>
  );
}

export default AdminDashboardPage
