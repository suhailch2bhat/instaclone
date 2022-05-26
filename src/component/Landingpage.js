import React from "react";
import {Link} from "react-router-dom";
import "../post/post.css"
function Landingpage(){
    return(
        <div className="Landingpage">
            {/* <div className="imgland"> */}
            <img style={{height: "97vh",width:"50%",display: "flex",margin:"3%"}} src="https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg" alt="my"/>
            {/* </div> */}
            <div style={{margin:"300px",color:"green",width:"50%" ,float:"left"}}>
               <span> <h1 style={{width:"700px"}}>10x Team 04</h1></span>
                <Link to="/postview">
                <button style={{height: "70px",width:"25%",color:"green"}}>enter</button>
                </Link>
            </div>
        </div>
    )
}
export default Landingpage;