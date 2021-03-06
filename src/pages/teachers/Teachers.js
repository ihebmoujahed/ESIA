import "./teachers.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

const Datatable = () => {
    const [data, setData] = useState(userRows);
    const [users, setUsers] = useState([])

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    };
    useEffect(() => {
        axios.get("http://localhost:3001/api/items/selectAllTeacher").then((response) => {
            setUsers(response.data)

        }, ["http://localhost:3001/api/items/selectAllTeacher"])
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
                    <div className="datatableTitle">
                        Add New Teacher
                        <a href="http://localhost:3000/AddTeach"><button className="link">Add New</button></a>
                    </div>
                    <div>
                    <h3>الأسم و اللقب</h3>
                    <h3 style={{ position: "relative", top: -28, left: 222 }}>الأختصاص</h3>
                    <h3 style={{ position: "relative", top: -58, left: 482 }}>بطاقتة التعريف</h3>
                    <h3 style={{ position: "relative", top: -80, left: 682 }}>تاريخ الولادة</h3>
                    </div>
                    {users.map((item) => {
                        return (
                            <div className="data">
                                <hr></hr>
                                <h3>{item.first_name} {item.last_name}</h3>
                                <h3 style={{ marginLeft: 250, position: "relative", top: -26 }}>{item.Etude}</h3>
                                <h3 style={{ marginLeft: 480, position: "relative", top: -49 }}>{item.card_id}</h3>
                                <h3 style={{ marginLeft: 680, position: "relative", top: -74 }}>{item.birthday}</h3>
                                <a href="http://localhost:3000/PaymentTeacher"><button class="button-85" onClick={(id_User) =>
                                    axios.get(`http://localhost:3001/api/items/selectidTeacher/${item.id_Teacher}`).then((response) => {
                                        console.log(response.data)
                                        var haya = response.data
                                        // console.log(usersinfo)
                                        localStorage.setItem("teach", JSON.stringify(haya))
                                    })
                                }
                                >Payement</button></a>
                                <a href="http://localhost:3000/users/profiel"><button class="button-86" onClick={(id_User) =>
                                    axios.get(`http://localhost:3001/api/items/selectidTeacher/${item.id_Teacher}`).then((response) => {
                                        console.log(response.data)
                                        var haya = response.data
                                        // console.log(usersinfo)
                                        localStorage.setItem("std", JSON.stringify(haya))
                                    })
                                }
                                >Profiel</button></a>
                            </div>
                        )
                    })}

                </div>
            </div>

        </div>

    );

};

export default Datatable;
