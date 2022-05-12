import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import { useState,useEffect } from "react";
import axios from "axios";


const Widget = ({ type }) => {
  let data;
  const [users, setUsers] = useState([])
  const [tlamtha, settlamtha] = useState([])
  const [total, setTotal] = useState([])

const all = ()=>{
  axios.get("http://localhost:3001/api/items/selectAll").then((response)=>{
    settlamtha(response.data)

  },["http://localhost:3001/api/items/selectAll"])
}
const pay = ()=>{
  axios.get("http://localhost:3001/api/items/userpay").then((response)=>{
    var s = response.data
    setUsers(s)

},["http://localhost:3001/api/items/userpay"])
}
useEffect( ()=>{
  pay()
  result()
})

const result = ()=>{
  var res= 0
  var a = []
  users.map((item)=>{
  var b = res+= item.price
  // console.log(b)
  setTotal(b)
  }
)
return res
}
// console.log(total)
  //temporary
  const amount = total;
  const numbertlamtha = tlamtha.length
  const diff = 20;

  switch (type) {
    case "user":
      data = {
        title: "USERS",
        isM: true,
        link: "See all users",
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "order":
      data = {
        title: "ORDERS",
        isMoney: false,
        link: "View all orders",
        
         
        
      };
      break;
    case "earning":
      data = {
        title: "EARNINGS",
        isMoney: true,
        link: "View net earnings",
        icon: (
          <MonetizationOnOutlinedIcon
            className="icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
      };
      break;
    case "balance":
      data = {
        title: "BALANCE",
        isMoney: false,
        link: "See details",
        icon: (
          <AccountBalanceWalletOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && "$"} {amount}
          </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
