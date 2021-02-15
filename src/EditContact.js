import React, { useState, useEffect } from 'react'

const EditContact = props => {
  const [ user, setUser ] = useState(props.currentUser)

  useEffect(() => {
      setUser(props.currentUser)
    },[ props ] )
  

  const handleChange = event => {
    const { name, value } = event.target
    setUser({ ...user, [name]: value })
  }
  const handleSubmit=event=>{
    event.preventDefault()
     props.updateContact(user.id, user)
  }

  return (
    <form onSubmit={handleSubmit} >
      <label>FullName</label>
      <input type="text" name="name" value={user.name} onChange={handleChange} />
      <label>Company</label>
	  <input type="text" name="company" value={user.company} onChange={handleChange} /><br/>
     <label>Email</label>
	<input type="email" name="email" value={user.email} onChange={handleChange} /><br/>
    <label>Phone</label>
	<input type="number" name="phone" value={user.phone} onChange={handleChange} /><br/>
    <label>Address</label>
	<input type="text" name="address" value={user.address} onChange={handleChange} /><br/>
      <button>Update user</button>
      <button onClick={() => props.setEditing(false)} className="button muted-button">
        Cancel
      </button>
    </form>
  )
}

export default EditContact