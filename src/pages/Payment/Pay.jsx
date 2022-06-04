import "./Pay.scss";
import "./Pay.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState, useEffect } from "react";
import axios from "axios"

const New = ({ inputs, title }) => {
  const [FirstName, setFirstName] = useState("");
  const [Age, setAge] = useState([]);
  const [Card_ID, setCard_ID] = useState("");
  const [price, setPrice] = useState("");
  const [leveleducation, setleveleducation] = useState("");
  const [student, setstudent] = useState([]);
  const [Month, setMonth] = useState("");
  const [userpay, setuserpay] = useState([])
  const addpay = () => {
    axios.post("http://localhost:3001/api/items/Payment", {
      student: student.first_name,
      dbt: Age,
      price: price,
      // image_user:file.name
      id_User: student.id_User,
      month: Month

    }).then((response) => {
      console.log(response);
    }).catch((err) => {
      console.log(err);
    })

  }
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

  console.log(Month)
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
            <div className="sign">
              <h4 className="label">تلميذ</h4>
              <input type="text" name="firstName" id="name" placeholder={student.first_name + student.last_name} onChange={(e) => setFirstName(e.target.value)}></input>
              <h4 className="label">Months</h4>
              <select onChange={(e) => setMonth(e.target.value)}>
                <option>Select Month</option>
                <option>جانفي</option>
                <option>فيفري</option>
                <option>مارس</option>
                <option>افريل</option>
                <option>ماي</option>
                <option>جوان</option>
                <option>جويليا</option>
                <option>اوت</option>
                <option>سبتومبر</option>
                <option>اكتوبر</option>
                <option>نوفمبر</option>
                <option>ديسمبر</option>
              </select>
              <h4>Date</h4>
              <input type="date" name="price" onChange={(e) => setAge(e.target.value)}></input>
              <h4>Price</h4>
              <input type="number" id="name" name="price" onChange={(e) => setPrice(e.target.value)}></input>

            </div>
            <a href="http://localhost:3000/Payment"><button class="btn" onClick={addpay}>Send</button></a>


          </div>
        </div>
        <div>
          <h3>Student Name</h3>
          <h3 style={{ position: "relative", top: -28, left: 222 }}>price</h3>
          <h3 style={{ position: "relative", top: -58, left: 482 }}>date of payments</h3>
          <h3 style={{ position: "relative", top: -78, left: 1300 }}>Months</h3>


        </div>
        {userpay.map((item) => {
          return (
            <div className="data">
              <hr></hr>
              <h3>{item.first_name}</h3>
              <h3 style={{ marginLeft: 220, position: "relative", top: -22 }}>{item.price}dt</h3>
              <h4 style={{ marginLeft: 480, position: "relative", top: -47 }}>{item.dbt}</h4>
              <h3 style={{ marginLeft: 1300, position: "relative", top: -77 }}>{item.month}</h3>

            </div>
          )
        })}

      </div>


    </div>
  );
};

export default New;
