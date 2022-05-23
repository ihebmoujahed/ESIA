import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
// import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";
import { useState, useEffect } from "react";
import axios from "axios"

const Single = () => {
  const [student, setstudent] = useState([]);


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
})
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src={student.image_user}
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">{student.first_name + student.last_name}</h1>
                <div className="detailItem">
                  <span className="itemKey">birthday:</span>
                  <span className="itemValue">{student.birthday}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">card_id:</span>
                  <span className="itemValue">
                   {student.card_id}
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">{student.place}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
          </div>
        </div>
        <div className="bottom">
        <h1 className="title">Last Transactions</h1>
          <List/>
        </div>
      </div>
    </div>
  );
};

export default Single;
