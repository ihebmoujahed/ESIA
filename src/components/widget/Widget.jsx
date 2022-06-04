import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import { useState,useEffect } from "react";
import axios from "axios";
import { Sync } from "@mui/icons-material";


const Widget = ({ type }) => {
  let data;
  const [users, setUsers] = useState([])
  const [tlamtha, settlamtha] = useState([])
  const [profet, setprofet] = useState([])
  const [total, setTotal] = useState(0)


var tlamdha=()=>{
   axios.get("http://localhost:3001/api/items/selectAll").then((response)=>{
    // console.log(response.data);
    var res = response.data
    settlamtha(res)
  
  },["http://localhost:3001/api/items/selectAll"])
}

var teachers=()=>{
  axios.get("http://localhost:3001/api/items/selectAllTeacher").then((response) => {
    setprofet(response.data)

        }, ["http://localhost:3001/api/items/selectAllTeacher"])
}
// console.log(profet)
const pay = ()=>{
  axios.get("http://localhost:3001/api/items/userpay").then((response)=>{
    var s = response.data
    setUsers(s)

},["http://localhost:3001/api/items/userpay"])
}
useEffect(()=> {
  // axios.get("http://localhost:3001/api/items/selectAll").then((response)=>{
  //   // console.log(response.data);
  //   var res = response.data
  //   settlamtha(res)
  
  // },["http://localhost:3001/api/items/selectAll"])
  pay()
  // teachers()
  result()
})
useEffect(()=>{
  teachers()
  tlamdha()
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
// console.log(tlamtha.length)
  //temporary
  const amount = total;
  const numbertlamtha = tlamtha.length
  const profetnumber = profet.length
  const diff = 20;

  switch (type) {
    case "user":
      data = {
        title: "التلامذ",
        link: "See all users",
        nember:`${numbertlamtha}`,

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
        title: "الاساتذ",
        link: "See all users",
        nember:`${profetnumber}`,
         
        
      };
      break;
    case "earning":
      data = {
        title: "المداخيل",
        isMoney: true,
        link: "View net earnings",
        nember:`${amount}`,
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
          </span>
          <span>{data.nember}</span>
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
