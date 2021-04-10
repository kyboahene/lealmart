import React from 'react'
import { Link } from 'react-router-dom'
import Customer from '../components/Customer'
import useFectch from '../Hooks/useFectch'

const Dashboard = () => {
  const { customer, loading, errors } = useFectch('https://reqres.in/api/users')

  return (
    <div className="dashboard-container">
      <div className="dashboard-row">
        <h4>My Customers</h4>
        <form>
          <div className="form-outline">
            <input type="search" className="form-control" />
          </div>
        </form>
        <Link to="/create">
          <button>New User</button>
        </Link>
        <table className="table">
          <thead>
            <th>id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Avatar</th>
            <th>Actions</th>
          </thead>
          <tbody>
            {errors && <div>Errror: {errors}</div>}
            {loading && <div>Loading...</div>}
            {customer && <Customer customer={customer} key={customer.id} />}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Dashboard
