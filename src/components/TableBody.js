import React , { useEffect, useState }from 'react';
import TableRow from './TableRow'
import axios from 'axios'

const TableBody = () => {
const [users, setUsers] = useState([])

useEffect(()=>{
  const getData = async ()=> {
    const data = await axios.get('https://randomuser.me/api/')
    setUsers(data.data.results)
  }
  getData()
}, [] )
  return (
     <tbody>
       {users.map((user) => <TableRow  item1={user.gender} body={true} />)}
      
      </tbody>
  )
}

export default TableBody;
