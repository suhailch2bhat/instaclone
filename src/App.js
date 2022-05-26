import React from "react";
import {BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Landingpage from "./component/Landingpage";
import Postview from "./Postview";
import Form from "./component/from";

function App(){
    return (
        <div className="App" >

            
            <Router>
                <Routes>
                    <Route path="/" element={<Landingpage/>} ></Route>    
                    <Route path="/login" element={<Form/>}></Route>              
                    <Route path ="/Postview"element={<Postview></Postview>} ></Route>
                </Routes>
            </Router>
        </div>
    )
}
export default App;