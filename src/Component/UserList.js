import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ButtonGroup, Dropdown, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Victim from './victim';


function UserList() {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/users')
        setUsers(res.data)
      } catch (error) {
        console.log(error)
      }

    }
    fetchData()
  }, [])
  return (
    <div>
     <span>1_Choose</span> <Dropdown as={ButtonGroup}>
  <Button variant="success">your victim</Button>

  <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

  <Dropdown.Menu>
    
  {users.map(user =>  <Dropdown.Item > <Link  to={`/victim/${user.id}`} > {user.name}  </Link></Dropdown.Item>)}
  </Dropdown.Menu>
</Dropdown>


     
    </div>
  )
}

export default UserList
