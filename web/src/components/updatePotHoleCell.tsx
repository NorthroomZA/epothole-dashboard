import { toast } from '@redwoodjs/web/toast'
import { navigate } from '@redwoodjs/router'

const UpdatePotholeCell = ({ id, employeeId }) => {
  const handleUpdatePothole = async () => {
    try {
      const response = await fetch(
        `/api/potholes/${id}/employee/${employeeId}`,
        {
          method: 'POST',
        }
      )

      if (!response.ok) {
        throw new Error('An error occurred while updating the pothole.')
      }

      const data = await response.json()
      const { firstName } = data.assignedTo

      toast.success(`Employee ${firstName} has been assigned to pothole #${id}`)
      navigate('/potholes')
    } catch (error) {
      toast.error('An error occurred')
      console.error(error)
    }
  }

  return null
}

export default UpdatePotholeCell
