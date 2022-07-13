import React ,{useState , useEffect} from 'react';
import Post from './post';
import axios from 'axios';
import { Link } from 'react-router-dom';
const Postview=()=> {
  
  const [posts,setPosts]=useState([]);
  const setPostsAsync = async () =>{
   axios.get('https://instaclone-a2z.herokuapp.com/api/v1/post')
  .then(response=>{console.log("server",response.data)
  
        setPosts(response.data)

})}
  
  useEffect(() => {
   setPostsAsync()
   
  }, []);

  return (
    <div className="Postview">
      
      <div className="Posttop">
       <span> <div className="imagetop"><h1>@insta clone</h1></div>
       <Link to="/login">
       <img  style={{float:"right", width:'100px',height:'100px',broder:"solid black 2px"}}  src="https://thumbs.dreamstime.com/b/speed-fast-camera-icon-logo-design-element-can-be-used-as-as-complement-to-95291428.jpg" alt="my camera"/>
      click me
    </Link>
    </span>
    </div>
      {posts.map((post,index)=>(
        <Post key={index} config={post}/>
      ))}
    </div>
  );
}

export default Postview;

