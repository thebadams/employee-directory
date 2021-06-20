import React , { useEffect, useState }from 'react';
import TableRow from './TableRow'
import axios from 'axios'

const TableBody = () => {
const [users, setUsers] = useState([])

useEffect(()=>{
  const getData = async ()=> {
    const data = await axios.get('https://randomuser.me/api/?results=10&nat=us')
    const array = data.data.results.map((user) => {
      return {
        name: `${user.name.title} ${user.name.first} ${user.name.last}`,
        address: `${user.location.street.number} ${user.location.street.name}`,
        city: `${user.location.city}`,
        state: `${user.location.country}`,
        postcode: `${user.location.postcode}`,
        email: `${user.email}`,
        phone: `${user.phone}`,
        cell: `${user.cell}`,
        age: `${user.dob.age}`,
        gender: `${user.gender}`
      }
    })
    setUsers(array)
  }
  getData()
}, [] )
  return (
     <tbody>
       {users.map((user) => <TableRow  user ={user} body={true} />)}
      
      </tbody>
  )
}

export default TableBody;
