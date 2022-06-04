import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Orders from "./pages/orders/Orders";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import AJE from "./pages/AJE/AJE";
import AJE2 from "./pages/AJE2/AJE2";
import EPPE from "./pages/EPPE/EPPE";
import EPPE2 from "./pages/EPPE2/EPPE2";
import TSIG1 from "./pages/TSIG1/TSIG1";
import TSIG2 from "./pages/TSIG2/TSIG2";
import TeacherM from "./pages/TeacherM/TeacherM";
import NewTeachM from "./pages/NewTeachM/NewTeachM";


import Pay from "./pages/Payment/Pay"
import Teachers from "./pages/teachers/Teachers"
import NewTeach from "./pages/NewTeach/NewTeach"
import PayTeach from "./pages/PaymentTeacher/PayTeach"
import PayTeachM from "./pages/PaymentTeacherM/PayTeachM"

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Login />} />
            <Route path="Home" element={<Home />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path="profiel" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              />
            
             
            </Route>

          
          </Route>
          <Route path="orders">
          <Route index element={<Orders />} />
          </Route>


          <Route path="AJE">
          <Route index element={<AJE />} />
          </Route>
          <Route path="AJE2">
          <Route index element={<AJE2 />} />
          </Route>
          <Route path="EPPE">
          <Route index element={<EPPE />} />
          </Route>
          <Route path="EPPE2">
          <Route index element={<EPPE2 />} />
          </Route>
          <Route path="TSIG1">
          <Route index element={<TSIG1 />} />
          </Route>
          <Route path="TSIG2">
          <Route index element={<TSIG2 />} />
          </Route>
          <Route path="Payment">
          <Route index element={<Pay />} />
          </Route>
          <Route path="PaymentTeacher">
          <Route index element={<PayTeach />} />
          </Route>
          <Route path="PaymentTeacherM">
          <Route index element={<PayTeachM />} />
          </Route>

          <Route path="Teachers">
          <Route index element={<Teachers />} />
          </Route>
          <Route path="TeachersM">
          <Route index element={<TeacherM />} />
          </Route>
          <Route path="AddTeach">
          <Route index element={<NewTeach />} />
          </Route>
          <Route path="AddTeachM">
          <Route index element={<NewTeachM />} />
          </Route>
          
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
