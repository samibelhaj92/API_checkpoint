
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {Button} from 'react-bootstrap'
import { useParams } from 'react-router'
function Victim() {
    const [victim, setVictim] = useState({})
    const {id}=useParams()
    const [showUserName,setShowUserName]=useState(false)
    const [showEmail,setShowEmail]=useState(false)
    useEffect(  ()=> {
  const fetch= async()=>{
     try {
    const res=  await  axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    setVictim(res.data)
} catch (error) {
    console.log(error)
}
    }
    fetch()
    }
    ,[])
    return (
        <div>
        <h1>Hacker_Box</h1>
<h2>Let's hack some folks!</h2>

<span>2_Find </span>
      <Button  variant="success"   onClick={()=>setShowUserName(true)}  >user_name</Button>
   
      <ul>
      {showUserName && victim.username}
      </ul>

      <span>3_Get </span>
      <Button variant="success"onClick={()=>setShowEmail(true)}>email_adress</Button>
      <ul>
      {showEmail && victim.email}
      </ul>
      <span>4_Now, let's hack <li>{victim.name}</li></span>
<h2>Happy Hunting!</h2>
<h5>Warning</h5>
<h6>hacking is a crime! This website is a mockup, made for fun. We are not responsible for your acts. Thank you for your understanding. Please be nice to other humanoids!</h6>
</div>
      
    )
}

export default Victim
