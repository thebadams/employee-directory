import React from 'react'

const TableRow = (props) => {
  if (props.body) {
    return (
     <tr>
       <td>{props.user.name.title}</td>
        <td>{props.user.name.first}</td>
        <td>{props.user.name.last}</td>
        <td> {props.user.gender}</td>
        <td>{props.user.location.street.number}</td>
        <td>{props.user.location.street.name}</td>
        <td>{props.user.location.city}</td>
        <td>{props.user.location.state}</td>
        <td>{props.user.location.country}</td>
        <td>{props.user.location.postcode}</td>
        <td>{props.user.email}</td>
        <td>{props.user.phone}</td>
        <td>{props.user.cell}</td>
        <td>{props.user.dob.age}</td>
     </tr>
    )
} else {
  return (
    <tr>
      <th>{props.item1}</th>
      <th>{props.item2}</th> 
     </tr>
  )
}
        
}

export default TableRow;
