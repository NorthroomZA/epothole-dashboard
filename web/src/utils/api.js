let baseUrl = "https://epothole.northroom.dev/"
export const fetchEmployees = async () => {
  const token = sessionStorage.getItem('token')
  try {
    const response = await fetch(`${baseUrl}/users/all`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    if (response.status === 401) {
      alert("your session has expired, please log in again")
    }
    if (!response.ok) {
      throw new Error('An error occurred while fetching employees.')
    }

    const data = await response.json()
    console.log(data)
    return data
  } catch (error) {
    console.error("error", error)
    return []
  }
}

export const fetchPotholes = async () => {
  const token = sessionStorage.getItem('token')
  try {
    const response = await fetch(`${baseUrl}/potholes/all`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    if (response.status === 401) {
      alert("your session has expired, please log in again")
    }
    if (!response.ok) {
      throw new Error('An error occurred while fetching potholes.')
    }
    const data = await response.json()
    return data
  } catch (error) {
    if (response.status === 401) {
      alert("your session has expired, please log in again")
    }
    console.error(error)
    return []
  }
}

export const assignPotholeToEmployee = async (id, employeeId) => {
  const token = sessionStorage.getItem('token')
  console.log('ID:', id)
  const response = await fetch(
    `${baseUrl}/potholes/employee/${id}`,
    {
      method: 'POST',
      body: JSON.stringify({ employeeId }),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }
  )
  if (response.status === 401) {
    alert("your session has expired, please log in again")
  }
  if (!response.ok) {
    throw new Error('Failed to assign pothole to employee')
  }

  const data = await response.json()
  return data
}
