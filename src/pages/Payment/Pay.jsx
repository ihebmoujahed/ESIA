import "./Pay.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState, useEffect } from "react";
import axios from "axios"

const New = ({ inputs, title }) => {
  const [FirstName, setFirstName] = useState("");
  const [Age, setAge] = useState("");
  const [Card_ID, setCard_ID] = useState("");
  const [price, setPrice] = useState("");
  const [leveleducation, setleveleducation] = useState("");
  const [student, setstudent] = useState([]);
  const [id_user, setid_user] = useState("")
  const [userpay, setuserpay] = useState([])
  const addpay = () => {
    axios.post("http://localhost:3001/api/items/Payment", {
      student: student.first_name,
      dbt: Age,
      price: price,
      // image_user:file.name
      id_User: student.id_User

    }).then((response) => {
      console.log(response);
    }).catch((err) => {
      console.log(err);
    })

  }

  const get = () => {
    const items = JSON.parse(localStorage.getItem("std"))
    if (items) {
      var s = items[0]
      // console.log(s)
      setstudent(s)
    }
  }
  useEffect(() => {
    get()
    // ff()
  })
  const ff = (id_User) => {
    axios.get(`http://localhost:3001/api/items/selectuserpay/${student.id_User}`).then((response) => {
      setuserpay(response.data)
      // console.log(userpay)
    })
  }
  // console.log(student)
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">

          </div>
          <div className="right">
            <div className="formInput">
            </div>
            <div id="sign">
              <p>تلميذ</p>
              <input type="text" name="firstName" placeholder={student.first_name + student.last_name} onChange={(e) => setFirstName(e.target.value)}></input>
              <p>id_user</p>
              <input type="number" placeholder={student.id_User} name="id_user" onChange={(e) => setid_user(e.target.value)}></input>
              <p>Date</p>
              <input type="date" name="Age" onChange={(e) => setAge(e.target.value)}></input>
              <p>Price</p>
              <input type="number" name="price" onChange={(e) => setPrice(e.target.value)}></input>

            </div>
            <button onClick={addpay}>Send</button>


          </div>
        </div>
        <div>
          <h3>Student Name</h3>
          <h3 style={{position:"relative",top:-28,left:222}}>price</h3>
          <h3 style={{position:"relative",top:-58,left:482}}>date of payments</h3>
  
        </div>
        {userpay.map((item)=>{
          return (
            <div className="data">
            <hr></hr>
            <h3>{item.first_name}</h3>
            <h3 style={{marginLeft:220,position: "relative",top:-22}}>{item.price}dt</h3>
            <h3 style={{marginLeft:480,position: "relative",top:-47}}>{item.dbt}</h3>
            </div>
          )
        })}
        
        </div>

      
    </div>
  );
};

export default New;
