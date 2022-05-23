import "./PayTeach.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState, useEffect } from "react";
import axios from "axios"

const New = ({ inputs, title }) => {
  const [FirstName, setFirstName] = useState("");
  const [Age, setAge] = useState("");
  const [id_Teacher, setid_Teacher] = useState("");
  const [price, setPrice] = useState("");
  const [leveleducation, setleveleducation] = useState("");
  const [student, setstudent] = useState([]);
  const [Month, setMonth] = useState("");
  const [userpay, setuserpay] = useState([])
  const addpay = () => {
    axios.post("http://localhost:3001/api/items/PaymentTeacher", {
      student: student.first_name,
      dbt: Age,
      price: student.Payment*price,
      // image_user:file.name
      id_Teacher: student.id_Teacher,
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
    const items = JSON.parse(localStorage.getItem("teach"))
    if (items) {
      var s = items[0]
      // console.log(s)
      setstudent(s)
    }
  }
  useEffect((id_Teacher) => {

    axios.get(`http://localhost:3001/api/items/selectteacherpay/${student.id_Teacher}`).then((response) => {
    //   console.log(response.data);
      setuserpay(response.data)
    })

    get()
    datetoday()
  }, [`http://localhost:3001/api/items/selectteacherpay/${student.id_Teacher}`])

//   console.log(Month)
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
              <p>الاستاذ(ة)</p>
              <input type="text" name="firstName" placeholder={student.first_name + student.last_name} onChange={(e) => setFirstName(e.target.value)}></input>
              <p>Months</p>
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
              <p>Date</p>
              <p>{Age}</p>

              <p>ساعات العمل</p>
              <input type="number" name="price" onChange={(e) => setPrice(e.target.value)}></input>
              

            </div>
            <a href="http://localhost:3000/PaymentTeacher"><button onClick={addpay}>Send</button></a>


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
              <h3 style={{ marginLeft: 480, position: "relative", top: -47 }}>{item.dbt}</h3>
              <h3 style={{ marginLeft: 1300, position: "relative", top: -77 }}>{item.month}</h3>

            </div>
          )
        })}

      </div>


    </div>
  );
};

export default New;
