import React from 'react'
import TableRow from './TableRow'

const TableHeader = () => {
  return (
     <thead>
       <TableRow item1="Heading 1" item2="Heading 2" body={false} />
      </thead>
  )
}

export default TableHeader;
