import React,{useState,Fragment} from 'react';
import AddContact from './AddContact';
import ContactList from './ContactList';
import EditContact from './EditContact';
import Modal from 'react-modal';


const App=()=>{
  const userData=[
    { id: 1, name: 'Mike Huston', company: 'Estra Boutique Ltd' ,email:'mikehuston@live.com',phone:'9062357845',address:'Bangalore'},
    { id: 2, name: 'Amazonia', company: 'Amazonia Online' ,email:'amazonia@yahoo.com',phone:'9462357845',address:'Delhi'},
  ]
  const initialFormState={id:null,name:'',company:'',email:'',phone:'',address:''}

  const [ users, setUsers ] = useState(userData)
	const [ currentUser, setCurrentUser ] = useState(initialFormState)
	const [ editing, setEditing ] = useState(false)
  const [modalIsOpen,setIsOpen]=useState(false)

  const styles={
    content:{
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  }

  const openModal=()=>{
    setIsOpen(true)
  }

  const closeModal=()=>{
    setIsOpen(false)
  }
  const addContact=user=>{
    user.id=users.length + 1
    setUsers([...users,user])
  }
  const updateContact = (id, updatedUser) => {
		setEditing(false)
    setUsers(users.map(user => (user.id === id ? updatedUser : user)))
	}

	const editRow = user => {
		setEditing(true)  
  	setCurrentUser({ id: user.id, name: user.name, company:user.company,email:user.email,phone:user.phone,address:user.address })
	}
  return(
    <div>
      <h1>Contacts</h1>
      <div>
      {editing ? (
						<Fragment>
							<h2>Edit user</h2>
							<EditContact
								editing={editing}
								setEditing={setEditing}
								currentUser={currentUser}
								updateContact={updateContact}
							/>
						</Fragment>
					) : (
						<Fragment>
							
                <input type='text' placeholder='Search'/>
              <button onClick={openModal}>Add Contact</button>
              <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={styles}>
							<AddContact addContact={addContact} />
              </Modal>
						</Fragment>
					)}
      </div>
      <div>
        <ContactList users={users} editRow={editRow} />
      </div>
    </div>
  )
}
export default App;