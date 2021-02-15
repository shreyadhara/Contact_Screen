import React,{useState} from 'react';

const AddContact=props=>{
    const initialFormState = { id: null, name: '', company: '',email:'',phone:'',address:''}
	const [ user, setUser ] = useState(initialFormState)

	const handleChange = event => {
		const { name, value } = event.target
        setUser({ ...user, [name]: value })
	}
    const handleSubmit=event=>{
        event.preventDefault()
        if(!user.name||!user.email||!user.phone) return 
        props.addContact(user)
        setUser(initialFormState);
        console.log(user)
    }

    return(
        <form onSubmit={handleSubmit}>

            <label>FullName</label>
			<input type="text" name="name" value={user.name} onChange={handleChange} /><br/>
			<label>Company</label>
			<input type="text" name="company" value={user.company} onChange={handleChange} /><br/>
            <label>Email</label>
			<input type="email" name="email" value={user.email} onChange={handleChange} /><br/>
            <label>Phone</label>
			<input type="number" name="phone" value={user.phone} onChange={handleChange} /><br/>
            <label>Address</label>
			<input type="text" name="address" value={user.address} onChange={handleChange} /><br/>
			<button>Add Contact</button>

		</form>

        
    )
}
export default AddContact;