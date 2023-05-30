import { useState, useEffect } from 'react'
import { useMutation } from '@redwoodjs/web'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import "../styling.css"
import Navbar from 'src/components/navbar'

const CreateEmployeePage = () => {
  const [users, setUsers] = useState([])
  let baseUrl = "http://localhost:3003"



  // Fetch all users on page load
  useEffect(() => {
    const token = sessionStorage.getItem('token')
    const fetchUsers = async () => {
      try {
        const response = await fetch(`${baseUrl}/users/all`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        const data = await response.json()
        setUsers(data)
        if (response.status === 401) {
          alert("your session has expired, please log in again")
        }
      } catch (error) {
        console.error(error)
      }
    }

    fetchUsers()
  }, [])

  const assignEmployee = async (userId: number) => {
    console.log(userId)
    const token = sessionStorage.getItem('token')
    try {
      const response = await fetch(
        `${baseUrl}/users/create/employee`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ id: Number(userId) }),
        }
      )
      const notify = () =>
      toast(`User ${userId} has been made an employee`)
    notify()

      if (!response.ok) {
        throw new Error('Failed to create employee')
      }

      const data = await response.json()
      console.log(data)
      toast.success('User has been made an employee')
    } catch (error) {
      console.error(error)
    }
    setTimeout(()=> {
      window.location.reload()
    }   , 2000)
  }

  return (
    <>
    <Navbar/>
    <ToastContainer />
    <div>
      <h1>Create Employee</h1>
      {users.length > 0 ? (
        <table className="user-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>
                  {user.firstName} {user.lastName}
                </td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                  <button onClick={() => assignEmployee(user.id)}>
                    Assign Employee
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No users available</p>
      )}
    </div>
    </>
  )
}

export default CreateEmployeePage;