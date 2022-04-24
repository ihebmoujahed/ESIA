import "./Orders.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { userColumns, userRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "axios";

const Orders = ({ inputs, title }) => {
  const [data, setData] = useState(userRows);
  const [users, setUsers] = useState([])

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  useEffect( ()=>{
    axios.get("http://localhost:3001/api/items/selectAll").then((response)=>{
      setUsers(response.data)

  },["http://localhost:3001/api/items/selectAll"])
  })
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
        <div className="datatable">
        
        <div>
        <h3>Student</h3>
        <h3 style={{position:"relative",top:-28,left:222}}>specialization</h3>
        <h3 style={{position:"relative",top:-58,left:482}}>Card_id</h3>
        <h3 style={{position:"relative",top:-78,left:682}}>Birthday</h3>
        </div>
        {users.map((item)=>{
          return (
            <div className="data">
            <hr></hr>
            <h3>{item.first_name} {item.last_name}</h3>
            <h3 style={{marginLeft:250,position: "relative",top:-26}}>{item.etude_level}</h3>
            <h3 style={{marginLeft:480,position: "relative",top:-49}}>{item.card_id}</h3>
            <h3 style={{marginLeft:680,position: "relative",top:-74}}>{item.birthday}</h3>
            </div>
          )
        })}
        
        </div>

      </div>
    </div>
  );
};

export default Orders;
