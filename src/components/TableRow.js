import React from 'react'

const TableRow = (props) => {
  if (props.body) {
    return (
     <tr>
      <td>{props.item1}</td>
      <td>{props.item2}</td> 
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
