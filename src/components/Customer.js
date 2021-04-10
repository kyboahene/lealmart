import React from 'react'
import { Link } from 'react-router-dom'

const Customer = ({ customer }) => {
  const handleDelete = () => {
    fetch('https://reqres.in/api/users/' + customer.id, {
      method: 'DELETE',
    })
      .then(() => {
        alert('User deleted successfully')
      })
      .catch((err) => {
        alert(err.message)
      })
  }
  return (
    <div>
      {customer.map((value) => {
        return (
          <tr key={value.id}>
            <td>{value.id}</td>
            <td>{value.first_name}</td>
            <td>{value.last_name}</td>
            <td>{value.email}</td>
            <td>
              <img src={value.avatar} alt="an avatar" />
            </td>
            <td>
              <Link to={`/edit/${value.id}`}>Edit</Link>{' '}
              <span onClick={handleDelete}>Delete</span>{' '}
            </td>
          </tr>
        )
      })}
    </div>
  )
}

export default Customer
