import React, { useState } from 'react'

const CreateUser = (props) => {
  const [first_name, setFirst_name] = useState('')
  const [last_name, setLast_name] = useState('')
  const [email, setEmail] = useState('')
  const [avatar, setAvatar] = useState('')

  const [error, setError] = useState('')

  const handleCreate = (e) => {
    e.preventDault()

    const newUser = { first_name, last_name, email }

    fetch('https://reqres.in/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newUser),
    })
      .then(() => {
        alert('New user added successfully')
        props.history.push('/')
      })
      .catch((err) => {
        setError(err.message)
      })
  }
  return (
    <div>
      <h4>Edit Page</h4>
      {error && <div>Errror: {error}</div>}
      <form onSubmit={handleCreate}>
        <input
          type="text"
          name="first_name"
          value=""
          onChange={(e) =>
            setFirst_name({ ...first_name, [e.target.name]: e.target.value })
          }
        />
        <input
          type="text"
          name="last_name"
          value=""
          onChange={(e) =>
            setLast_name({ ...last_name, [e.target.name]: e.target.value })
          }
        />
        <input
          type="text"
          name="email"
          value=""
          onChange={(e) =>
            setEmail({ ...email, [e.target.name]: e.target.value })
          }
        />
        <input
          type="text"
          name="avatar"
          onChange={(e) =>
            setAvatar({ ...avatar, [e.target.name]: e.target.value })
          }
        />
        <button type="submit">Edit</button>
      </form>
    </div>
  )
}

export default CreateUser
