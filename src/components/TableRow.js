import React from 'react'

const TableRow = (props) => {
  if (props.body) {
    return (
     <tr>
      {Object.entries(props.user).map( entry=> {
        const [key, value] = entry;
        return <td>{value}</td>
      })}
       {/* <td>{props.user.name}</td>
        <td>{props.user.address}</td>
        <td>{props.user.city}</td>
        <td>{props.user.state}</td>
        <td>{props.user.country}</td>
        <td>{props.user.postcode}</td>
        <td>{props.user.email}</td>
        <td>{props.user.phone}</td>
        <td>{props.user.cell}</td>
        <td>{props.user.age}</td>
         <td> {props.user.gender}</td> */}
     </tr>
    )
} else {
  return (
    <tr>
      {/* {Object.entries(props.user).map( entry => {
        const [key, value] = entry;
        return <th>{key}</th>
      })} */}
      <th>Name</th>
      <th>Address</th> 
      <th>City</th>
      <th>State</th>
      <th> Country</th>
      <th>Post Code</th>
      <th>E-Mail</th>
      <th>Phone #</th>
      <th>Cell #</th>
      <th>Age</th>
      <th>Gender</th>
     </tr>
  )
}
        
}

export default TableRow;
