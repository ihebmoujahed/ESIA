import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState,useEffect } from "react";
import axios from "axios"

const New = ({ inputs, title }) => {
  const [image, setFile] = useState("");
  const [taswira, settaswira] = useState("");

  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Age, setAge] = useState("");
  const [Card_ID, setCard_ID] = useState("");
  const [Etude, setEtude] = useState("");
  const [Place, setPlace] = useState("");
  const [leveleducation, setleveleducation] = useState("");
  
  const addUser = () => {
    if(Card_ID.length < 7 || Card_ID.length > 8) {
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
      leveleducation:leveleducation,
      image_user:taswira
    }).then((response) => {
      console.log(response);
    })
    window.location.assign("http://localhost:3000/users")
  }
  }
  const uploadimages = (files)=>{
    const formData = new FormData()
    formData.append("file",image)
    formData.append("upload_preset", "suwrrek3")

    axios.post("https://api.cloudinary.com/v1_1/esia/image/upload",formData).then((response)=>{
      console.log(response.data.secure_url)
      settaswira(response.data.secure_url)
    })
  }
  useEffect(() => {
    uploadimages()
  })
  console.log(taswira)
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
            <img
              src={
                image
                  ? URL.createObjectURL(image)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            <div className="formInput">
              <label htmlFor="file">
                Image: <DriveFolderUploadOutlinedIcon className="icon" />
              </label>
              <input
                type="file"
                id="file"
                onChange={(e) => setFile(e.target.files[0])}
                style={{ display: "none" }}
              />
            </div>
            <div id="sign">
              <p>FirstName</p>
              <input type="text" name="firstName" onChange={(e) => setFirstName(e.target.value)}></input>
              <p>LastName</p>
              <input type="text" name="LastName" onChange={(e) => setLastName(e.target.value)}></input>
              <p>Age</p>
              <input type="date" name="Age" onChange={(e) => setAge(e.target.value)}></input>
              <p>Card_ID</p>
              <input type="Number" name="Card_ID" onChange={(e) => setCard_ID(e.target.value)}></input>
              <p>Etude</p>
              <select onChange={(e) => setEtude(e.target.value)}>
                <option >Select ClassName</option>
                <option >TSIG 1</option>
                <option >TSIG 2</option>
                <option > AJE 1</option>
                <option > AJE 2</option>
                <option > EPPE 1</option>
                <option > EPPE 2</option>
                <option > EPPE 1 FE</option>
                <option > EPPE 2 FE</option>
              </select>
              <p>Place</p>
              <input type="text" name="Place" onChange={(e) => setPlace(e.target.value)}></input>
              <p>level education</p>
              <input type="text" name="Place" onChange={(e) => setleveleducation(e.target.value)}></input>

            </div>
            <button onClick={addUser}>Send</button>


          </div>

        </div>

      </div>
    </div>
  );
};

export default New;
