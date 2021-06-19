import React from 'react'

const TableRow = (props) => {
  if (props.body) {
    return (
     <tr>
      <td onClick={()=> console.log(props.users)}>{props.item1}</td>
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
