import React from 'react';
import TableRow from './TableRow'

const TableBody = () => {
  return (
     <tbody>
       <TableRow item1="Item Column 1, 1" item2="Item Column 1,2"/>
       <TableRow item1="Item Column 2,2" item2 = "Item Column 2,2" />
      </tbody>
  )
}

export default TableBody;
