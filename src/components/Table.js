import React from 'react';
import TableHeader from './TableHeader';

const Table = () => {
  return (
    <table>
     <TableHeader />
      <tbody>
        <tr>
          <td>Column 1:1</td>
          <td>Column 1:2</td>
        </tr>
        <tr>
          <td>Column 2:1</td>
          <td>Column 2:2</td>
        </tr>
      </tbody>
    </table>
  )
}

export default Table;
