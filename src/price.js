import React from "react";
import "./home";
import Navbar from "./navbar";
import Button from "./button";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function createData(name, hd, screen, options, cancel) {
  return { name, hd, screen, options, cancel };
}

const rows = [
  createData('Monthly price after free month ends 3/34/9876', "$8.99", "12.99","$15.99"),
  createData('Hd available',<i class="fa-solid fa-circle-xmark"></i>, <i class="fa-solid fa-check"></i>, <i class="fa-solid fa-check"></i>),
  createData('Screens you can watch at the same time ', 1, 2, 4),
  createData('Unlimited movies and Tv shows', <i class="fa-solid fa-check"></i>, <i class="fa-solid fa-check"></i>, <i class="fa-solid fa-check"></i>),
  createData('Cancel Anytime', <i class="fa-solid fa-check"></i>, <i class="fa-solid fa-check"></i>, <i class="fa-solid fa-check"></i>),
  createData('', <Button className='btn btn-success grow mt-3' t="choose plan"/>, <Button className='btn btn-success grow mt-3' t="choose plan"/>, <Button className='btn btn-success grow mt-3' t="choose plan"/>),
];

function BasicTable() {
  return (
    <div>
    <div><Navbar navbrand='Netflix' /></div>
    <div className="home">
    <TableContainer component={Paper}  style={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
            <TableRow>
              <TableCell style={{ color: 'white' }}></TableCell>
              <TableCell align="right" style={{ color: 'white' }}>BASIC</TableCell>
              <TableCell align="right" style={{ color: 'white' }}>STANDARD</TableCell>
              <TableCell align="right" style={{ color: 'white' }}>PREMIUM</TableCell>
            </TableRow>
          </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" style={{ color: 'white' }}>
                {row.name}
              </TableCell>
              <TableCell align="right"  style={{ color: 'white' }}>{row.hd}</TableCell>
              <TableCell align="right"  style={{ color: 'white' }}>{row.screen}</TableCell>
              <TableCell align="right"  style={{ color: 'white' }}>{row.options}</TableCell>
              <TableCell align="right"  style={{ color: 'white' }}>{row.cancel}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div> 
    </div>    
  );
}
export default BasicTable