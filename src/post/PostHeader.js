import  "./post.css"
 const PostHeader = ({ config }) => {
    return <div className="PostHeader">
        <div className="PostTilteWrapper">
            <div className="PostTilte"><h1>{config.author||""}</h1> </div>
            <div className="Postlocation">{config.location || ""}</div>
        </div>
        <div className="PostAction" >...</div>
    </div>
    
};
export default PostHeader