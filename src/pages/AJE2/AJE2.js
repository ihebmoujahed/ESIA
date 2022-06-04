import "./AJE2.scss";
import "./AJE2.css";

import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { userColumns, userRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";


const AJE = ({ inputs, title }) => {
  const [data, setData] = useState(userRows);
  const [users, setUsers] = useState([])
  const [usersinfo, setuserinfo] = useState([])

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  useEffect(() => {
    axios.get("http://localhost:3001/api/items/selectAJE2").then((response) => {
      setUsers(response.data)

    }, ["http://localhost:3001/api/items/selectAJE2"])
  })
  //   const pasely = (id_User)=>{
  //     axios.get(`http://localhost:3001/api/items/selectid/${item.id_User}`).then((response)=>{
  //       setuserinfo(response.data)
  //       console.log(usersinfo)
  //   })
  // }
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Update
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <TableContainer component={Paper} className="table">
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
              <TableCell className="tableCell"><h2>الأسم و اللقب</h2></TableCell>
              <TableCell className="tableCell"><h2>الأختصاص</h2></TableCell>
              <TableCell className="tableCell"><h2>بطاقتة التعريف</h2></TableCell>
              <TableCell className="tableCell"><h2>تاريخ الولادة</h2></TableCell>
              <TableCell className="tableCell"><h2>الدفع</h2></TableCell>
              <TableCell className="tableCell"><h2>معلومات التلميذ</h2></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="tableCell" class="tt">{item.first_name} {item.last_name}</TableCell>
                  <TableCell className="tableCell">
                    <div className="cellWrapper" class="tt">
                      {item.etude_level}
                    </div>
                  </TableCell>
                  <TableCell className="tableCell" class="tt">{item.card_id}</TableCell>
                  <TableCell className="tableCell" class="tt">{item.birthday}</TableCell>
                  <TableCell className="tableCell"><a href="http://localhost:3000/Payment"><button class="button button2" onClick={(id_User) => 
                  axios.get(`http://localhost:3001/api/items/selectid/${item.id_User}`).then((response) => {
                    console.log(response.data)
                    var haya = response.data
                    // console.log(usersinfo)
                    localStorage.setItem("std",JSON.stringify(haya))
                  })
                  }
                  >Payement</button></a></TableCell>
                  <TableCell className="tableCell"><a href="http://localhost:3000/users/profiel"><button class="button button2" onClick={(id_User) => 
                  axios.get(`http://localhost:3001/api/items/selectid/${item.id_User}`).then((response) => {
                    console.log(response.data)
                    var haya = response.data
                    // console.log(usersinfo)
                    localStorage.setItem("std",JSON.stringify(haya))
                  })
                  }
                  >Profiel</button></a></TableCell>
                  <TableCell className="tableCell">
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>



      </div>
    </div>
  );
};

export default AJE;
