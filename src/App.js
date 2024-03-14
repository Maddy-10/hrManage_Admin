import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Userlist from "./Components/Userlist";
import Edit from "./Components/Edit";
import Header from "./Components/Header";
import Adduser from "./Components/Adduser";
import Info from "./Components/Info";
import Leave from "./Components/Leave";
import Login from "./Components/Login";
import Home from "./screen/Home";

function App() {
  return (
    // <div className="App">
      // <div className="">
      //   <div className="row">
      //     <div className="col-3 col-lg-2  min-vh-100">
      //       <Header />
      //     </div>
      //     <div className="col-9 col-lg-10">

            <BrowserRouter>

              <Routes>                                
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<Home />} />
                
                <Route path="/edit/:id" element={<Edit />} />
                <Route path="/add" element={<Adduser />} />
                <Route path="/info/:id" element={<Info />} />
                <Route path="/leave" element={<Leave />} />
              </Routes>
            </BrowserRouter>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default App;


