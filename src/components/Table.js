import React from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import Table from 'react-bootstrap/Table';

const TableComponent = () => {
  return (
    <Table bordered>
     <TableHeader />
     <TableBody />
    </Table>
  )
}

export default TableComponent;
