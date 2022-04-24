import "./Pay.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import axios from "axios"

const New = ({ inputs, title }) => {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Age, setAge] = useState("");
  const [Card_ID, setCard_ID] = useState("");
  const [Etude, setEtude] = useState("");
  const [Place, setPlace] = useState("");
  const [leveleducation, setleveleducation] = useState("");
  
  const addUser = () => {
    if(Card_ID.length < 7 ){
       alert("thabbet fil card id")
  } else  if(FirstName[0] == FirstName[0].toLowerCase()){
    console.log("nayki")
    alert("thabbet fil first name")
  }
  else{
    axios.post("http://localhost:3001/api/items/AddUser", {
      first_name: FirstName,
      last_name: LastName,
      birthday: Age,
      card_id: Card_ID,
      etude_level: Etude,
      place: Place,
      leveleducation:leveleducation
      // image_user:file.name
    }).then((response) => {
      console.log(response);
    })
    window.location.assign("http://localhost:3000/users")
  }
  }
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
              <p>FirstName</p>
              <input type="text" name="firstName" onChange={(e) => setFirstName(e.target.value)}></input>
              <p>LastName</p>
              <input type="text" name="LastName" onChange={(e) => setLastName(e.target.value)}></input>
              <p>Date</p>
              <input type="date" name="Age" onChange={(e) => setAge(e.target.value)}></input>
              <p>Etude</p>
              <select onChange={(e) => setEtude(e.target.value)}>
                <option >TSIG 1</option>
                <option >TSIG 2</option>
                <option > AJE 1</option>
                <option > AJE 2</option>
                <option > EPPE 1</option>
                <option > EPPE 2</option>
                <option > EPPE 1 FE</option>
                <option > EPPE 2 FE</option>
              </select>
            </div>
            <button onClick={addUser}>Send</button>


          </div>

        </div>

      </div>
    </div>
  );
};

export default New;
