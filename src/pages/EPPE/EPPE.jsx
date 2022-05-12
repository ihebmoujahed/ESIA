import "./EPPE.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { userColumns, userRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "axios";

const AJE = ({ inputs, title }) => {
  const [data, setData] = useState(userRows);
  const [users, setUsers] = useState([])

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  useEffect( ()=>{
    axios.get("http://localhost:3001/api/items/selectEPPE").then((response)=>{
      setUsers(response.data)

  },["http://localhost:3001/api/items/selectEPPE"])
  })
  const pay = (id)=>{
    window.location.assign(`http://localhost:3000/Payment`)
    console.log(id)
  }
  const ff= (id_User)=>{
    axios.get("http://localhost:3001/api/items/selectuserpay").then((response)=>{
      console.log(response)
    })
  }
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
        <h3 style={{position:"relative",top:-24,left:222}}>specialization</h3>
        <h3 style={{position:"relative",top:-46,left:482}}>Card_id</h3>
        <h3 style={{position:"relative",top:-67,left:682}}>Birthday</h3>
        </div>
        {users.map((item)=>{
          return (
            <div className="data">
            <hr></hr>
            <h3>{item.first_name} {item.last_name}</h3>
            <h3 style={{marginLeft:250,position: "relative",top:-24}}>{item.etude_level}</h3>
            <h3 style={{marginLeft:480,position: "relative",top:-46}}>{item.card_id}</h3>
            <h3 style={{marginLeft:680,position: "relative",top:-70}}>{item.birthday}</h3>
            <a href="http://localhost:3000/Payment"><button style={{position: "relative",left:900,top:-123, background:"white",borderradius:22}} onClick={(index)=>localStorage.setItem("std",JSON.stringify(users))}>Payement</button></a>
            <button>get</button>
            </div>
          )
        })}
        
        </div>
        

      </div>
    </div>
  );
};

export default AJE;
