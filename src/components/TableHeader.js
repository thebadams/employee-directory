import React from 'react'
import TableRow from './TableRow'

const TableHeader = () => {
  const handleSort = () => {
    const table = document.querySelector('table')
    let switching, i, x, y, shouldSwitch
    switching = true;
    let dir = "asc";
    while(switching) {
      switching = false;
      const rows = table.rows;
      for(i = 1; i < rows.length -1; i++) {
        shouldSwitch = false
        x = rows[i].querySelectorAll('td')[0]
        y = rows[i+1].querySelectorAll('td')[0]
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
        rows[i].parentNode.insertBefore(rows[i+1], rows[i]);
        switching = true
      }
    }
  }
  return (
     <thead>
       <TableRow body={false} sort={handleSort}/>
      </thead>
  )
}

export default TableHeader;
