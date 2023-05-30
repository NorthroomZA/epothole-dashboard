import { Router, Route } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
      <Route path="/assign-pothole" page={AssignPotholePage} name="assignPothole" />
      <Route path="/create-employee" page={CreateEmployeePage} name="createEmployee" />
      <Route path="/" page={LoginPage} name="login" />
      <Route path="/admin-dashboard" page={AdminDashboardPage} name="adminDashboard" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
