import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {
  fetchEmployees,
  fetchPotholes,
  assignPotholeToEmployee,
} from 'src/utils/api'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import "../styling.css"
import Navbar from 'src/components/navbar'

const AssignPotHolePage = () => {
  const [potholes, setPotholes] = useState([])
  const [employees, setEmployees] = useState([])
  const [employeeId, setEmployeeId] = useState('')
  const [potholeId, setPotholeId] = useState('')

  const { id } = useParams()

  const handleEmployeeIdChange = (event) => {
    setEmployeeId(event.target.value)
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    try {
      console.log('Pothole ID:', id)
      console.log('Employee ID:', employeeId)
      await assignPotholeToEmployee(potholeId, employeeId)
      const notify = () =>
      toast(`Pothole ${potholeId} has been assigned to ${employeeId}`)
    notify()
      console.log(
        `Pothole #${potholeId} assigned to Employee ID: ${employeeId}`
      )

    } catch (error) {
      console.error('Error assigning pothole to employee:', error)
    }
    setTimeout(()=> {
      window.location.reload()
    }   , 2000)

  }

  const handleAssignPothole = (potholeId) => {
    setPotholeId(potholeId)

  }

  useEffect(() => {
    fetchPotholes()
      .then((data) => setPotholes(data))
      .catch((error) => console.error(error))


    fetchEmployees()
      .then((data) => setEmployees(data))
      .catch((error) => console.error(error))
  }, [])

  return (
    <div>
      <Navbar/>
      <ToastContainer />

      <h2>Potholes:</h2>
      {potholes.length > 0 ? (
        <div className="pothole-cards">
          {potholes.map((pothole) => (
            <div key={pothole.id} className="pothole-card">
              <h3>Pothole ID: {pothole.id}</h3>
              <p>Assigned to: {pothole.assignedToId}</p>
              <button onClick={() => handleAssignPothole(pothole.id)}>
                Assign
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p>No potholes available</p>
      )}

{employees.length > 0 ? (
        <div className="employee-cards">
          {employees.map((employee) => (
            <div key={employee.id} className="employee-card">
              <h3>
                {employee.firstName} {employee.lastName}
              </h3>
              <p>Employee ID: {employee.id}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No employees available</p>
      )}

      <h2>Assign Pothole</h2>
      <form onSubmit={handleFormSubmit} className='assign-pothole-form'>
        <label>
          Employee ID:
          <input
            type="text"
            value={employeeId}
            onChange={handleEmployeeIdChange}
          />
        </label>
        <button type="submit">Assign Pothole</button>
      </form>
    </div>
  );
}

export default AssignPotHolePage
