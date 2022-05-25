import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios"
import { useState, useEffect } from "react";

const List = () => {

  const [Age, setAge] = useState([]);
  const [student, setstudent] = useState([]);
  const [userpay, setuserpay] = useState([])

  const [Month, setMonth] = useState("");
  const datetoday=()=>{
    const d = new Date();
    console.log(d)
    const t =d.toString()
    setAge(t)
  }

  const get = () => {
    const items = JSON.parse(localStorage.getItem("std"))
    if (items) {
      var s = items[0]
      // console.log(s)
      setstudent(s)
    }
  }
  useEffect((id_User) => {

    axios.get(`http://localhost:3001/api/items/selectuserpay/${student.id_User}`).then((response) => {
      console.log(response.data);
      setuserpay(response.data)
      // console.log(userpay)
    })

    get()
    datetoday()
  }, [`http://localhost:3001/api/items/selectuserpay/${student.id_User}`])


  const rows = [
    {
      id: 1143155,
      product: "Acer Nitro 5",
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "John Smith",
      date: "1 March",
      amount: 785,
      method: "Cash on Delivery",
      status: "Approved",
    },
    {
      id: 2235235,
      product: "Playstation 5",
      img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Michael Doe",
      date: "1 March",
      amount: 900,
      method: "Online Payment",
      status: "Pending",
    },
    {
      id: 2342353,
      product: "Redragon S101",
      img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "John Smith",
      date: "1 March",
      amount: 35,
      method: "Cash on Delivery",
      status: "Pending",
    },
    {
      id: 2357741,
      product: "Razer Blade 15",
      img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Jane Smith",
      date: "1 March",
      amount: 920,
      method: "Online",
      status: "Approved",
    },
    {
      id: 2342355,
      product: "ASUS ROG Strix",
      img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Harold Carol",
      date: "1 March",
      amount: 2000,
      method: "Online",
      status: "Pending",
    },
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Product</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {userpay.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">1</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  {row.month}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.first_name}</TableCell>
              <TableCell className="tableCell">{row.dbt}</TableCell>
              <TableCell className="tableCell">{row.price}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
