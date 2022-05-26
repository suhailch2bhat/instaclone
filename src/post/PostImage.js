import  "./post.css"
const PostImage = ({ config }) => {
  // const relativeImageurl=config.image
  // console.log(relativeImageurl)
return <div className="PostImage">
         {/* {console.log(config,"suhail")} */}
        <img  className="myimg" src={`https://instaclone-a2z.herokuapp.com/${config.image}`} alt=""/>  
      </div>;
};
export default PostImage
// 