import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Orders from "./pages/orders/Orders";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import AJE from "./pages/AJE/AJE";
import EPPE from "./pages/EPPE/EPPE";
import Pay from "./pages/Payment/Pay"

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
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
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
          <Route path="EPPE">
          <Route index element={<EPPE />} />
          </Route>
          <Route path="Payment">
          <Route index element={<Pay />} />
          </Route>
          
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
