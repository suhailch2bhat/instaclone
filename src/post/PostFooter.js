// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import SendIcon from '@mui/icons-material/Send';
// const PostFooter = ({ config }) => {
//     const postedOnDate=new Date(config.date),
//     postedOn=`${postedOnDate.getDate()} ${MonthNames[postedOnDate.getMonth()]} ${postedOnDate.getFullYear()}`;
//     return (<div className="PostFooter">
//          <div className="PostDetails">
//             <div className="LikeShareWrapper">
//                 <div className="LikeShareContainer">
//                 <button className="LikeBtn">
//                 <FavoriteBorderIcon/>
//                 </button>
//                 <button className="ShareBtn">
//                 <SendIcon/>
//                 </button>
//                 </div>
//                 <div className="Likes">likes</div>
//             </div>
//             <div className="PostedOn">{postedOn}</div>
//         </div>
// <div className="PostCaption">description</div> 
//     </div>
//     );
// };
// const MonthNames=["Jan","Feb","Mar","June","July","Aug","Sep","Oct","Nov","Dec"]
// export default PostFooter;
import  "./post.css"
 const PostFooter = ({ config }) => {
    const MonthNames=["Jan","Feb","Mar","apr","may","June","July","Aug","Sep","Oct","Nov","Dec"]
    // const relativeImageur=`../assets/${config.Likeimage}`
    // const relativeImageu=`../assets/${config.Send}`
    const postedOnDate=new Date(config.date),
        postedOn=`${postedOnDate.getDate()} ${MonthNames[postedOnDate.getMonth()]} ${postedOnDate.getFullYear()}`;
    return <div className="PostFooter">
        <img className="PostFooter1" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIMAAACDCAMAAACZQ1hUAAAAbFBMVEX///8AAADu7u739/dLS0ulpaXl5eXx8fGioqKoqKj8/PycnJxRUVGfn58fHx/i4uJCQkJmZmavr6/S0tKJiYmBgYFwcHAVFRVbW1u3t7crKytra2smJibZ2dnJycmVlZXAwMA2NjYMDAx4eHhV8flHAAAEn0lEQVR4nO1a2YKqMAwdKW64sAiiozMD8v//eDVtlEpb2tLifeC8DUs9JuckbZyvrwkTJkyYMGHCBKeIgt9VcUzT9Nj8VTHRfo/E1V8D7xWr3yAaQKAq6lkb+2MWaLwXZJc9915SVHY0DsVtJsCpZ7moOoleuxUHcwapaCXA9ixnEZ230vdSMxYkl64EsVhI3lsIY/BEri+or9/We3Wab9ZZtsubsHX1T/jeX+uJsMl3Wbbe5GnduvprHoQ0i19xj4KquSpC8QrCtalaXogW2SuxuZY4CS61z+Pu58zxW+3fb8bohXre5RfnePekkQ+CIc/FNiRrdr/kJXYo2fW1+EMCjG7SSyJI6JPbbgyeLAq2WtW6WLFrhfwTYmaZZKmmgIlQK/jcURiq+KxcvNBKR0OfmquZPj/ywP9d9sl+R59rVM+wL5j1LHWP63c7HSwR3/L8IbLecMVUV+vepe4GoSRuVYuCrHJ1SZRythd4QFx/OiT2qAmWiL0OBaxjF9lt+n1CraWe9aDc0NbWqRcyhB1PtQFFsNTpzgCWDoNEAAJI+FV8kwpypbvWncSzcusmArBSyBJKSH8VayFGEtqJeIBAGdyKbv1o2pIjQdNxNaGA3vgR3AHB1iZhuGNRG2mBgtQS+xFIRW62GljUKBEAaF/b7teNb7IAqfGTWLwD5a1LHVxRGi9nh1LsDIjPcSQOF3HeT4bFYRCgRJw6l2tVBXUN6Ar1+9UlON38HGKHA5T39/1U8Ch5pbnE7fDzEOX1vTNBKzZ3uiWg53Z6zP/A4X/IBfmAJjvFupY3dfc4C71Ja9RuJA6SGgW1Oh2JQyqu1VC6biNxuImL8qIcT5QgybK786EnTeM9jBUg76JT5wZ2hoZ7OSsQ2ApvBHcWsNPUOecNBZ1gCDehINZa+4hjjaCWW5Ae9fwrgg5kKvFN4Dfz3bfimbhIUtADdD1guqyBiH5T6bSETmEKrxzoPEg+iWEzBb0BhB3oNEh1RGYTFZF13WAzUwmSgg0RffVPNhNTey+i46DewZwd5nTxvpMU2fojQYcfosPuO4nQlyaYFkKdgbWnSMx1o/DAkpFw276QgmY/WrJ0uDwBM0eEPfPyFyLnJJgWEoM+QBynAx2hHYUHMB1uSDAthIZ7E4yEC4samJJH5CwSK1sK93Sc3NQJ1ILVJhE1MYwEo9D3I5YU2+FdlP3sGlpvzoZbFB1hG4WvV9m2TQfKcdCBgQxKh7UpeUQDhIlyHHx+RIuaa8KwUypJWEaCdcrEyeER02GmCYtOqYKNRR2YkkdgTMKyU6pADDc1mAhnUXjAzKIoR8dDHZONrodEMBLa+wksTR4mOrob3Y2fRFDoWdS5KXkEGulY+9ICot+iXkzJI0rUkXDWKVVQW9SbKXmgJkT/o7D2Z0oecot6NSUPIokEOsKjHF8Qd1HvpuQhKttDjzLG6FqUOcLVrkkHaFHUBEuEi+2rPniLjmZKHqS1qcFEjPE7FE8iwUhkn6LwsmjzCS0gliwSI5uSR/QiMaYpeWCxGqlAi8EsOlaBFgPc8QlHcCTCwSOO4QiOH03EhAkTJkyYMGF8/AP8Ty4+zRBMygAAAABJRU5ErkJggg==" alt="not found"/>  
        <img className="PostFooter1" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAeFBMVEX///8AAADp6enPz88RERHd3d0EBATa2tr19fVMTExsbGy8vLynp6f4+PgYGBjj4+M+Pj4bGxsjIyMSEhJ4eHhfX1/Gxsazs7OYmJhVVVXv7+/U1NR/f3+hoaGGhoZSUlKPj48sLCw0NDTBwcG2trZmZmZHR0c5OTnMfx9iAAAEwUlEQVR4nO2dbXeiMBBGs6j1laJYpILaou36///hnl17JEAgmIwMZJ/7uY1zDyETQjIIAQAAAAAAAAAAAAAAAAAAAAAAAADQW5LE4yRJninn7U7RevOLl806Ou28p/jFH8xuMvOYWm/2zu1U4X1GKbjacvsoGK/I/JI9t0wNc6JhZ8Qt0sCIQjDmtmiEYMT54nbQ8GUr2OcuesOyo3rc8et5sRtuomJr4+g4SqcTPqbp6BiNi0FFNoLFm3ATP3VS2JpklRXisrkVCw29k4VoT2GK9WLezkpqZpvSxUdAKs+yzCc3V6mV50znzZHHwLVpI1OpEZLJAylyHpsatiF19k/C0Kj4tB8i8gn3K+mTChGz13t8e8MWwnsLB9rYiDjc48vMroB0L++IY6NhZzsOBv0dSG94tgHmQ+nYJ46NBj+fvpkNpvlwPCYOjYrc0CyZwZAfGOqAIT8dGx6jOQHRsbeGpfUOc757arhTBWtG+2g7NTzSGbbvp50aLukMl/00FKEqWBOy9pPgbg2pXlDtH1ix7Dwfzgh4KEJkfB0w5AeGOmDIDwx1wJAfGOqAIT8w1AFDflgN09PCkoM+ak5DeZ+KMdolKUZDou1wugUNRkOiHY26VTdGw5TGULd9gPM+XFMIvup+hdMwmdsLzrXbD3jzYWC7lTTQ/wYyvg4Y8gNDHTDkB4Y6YMgPDHXAkB8Y6oAhPx0bBisbYpPN8t0aWq8fGmy379QwUAX9EOHjEXZqSLAE3GLZokSnhgSn9h8/99Kpof0qt8ExyW5Hmoul4NXg6FLH2cLfLS0wOmWMjK8DhvzAUAcM+YGhDvcN0wEZmpUlGdJp9cefS0oN9K/ux19GtpdAqhpxIo6NhtM9vtCwbkd+kinsY8kBP78ChpU/5PIoj5xd7QqC4jLyvp8JYWg0yPWBjCs8nfM2tv0o85WTSDXNzsatyEdfs35dxSCTYrO4h37J0JULtae4tGfRUHEF7Xzpx5DqX7JCXFb1L0vb08K3eBKQ1nZuGcf974NJ/FYq1jy3EVQvZb/Q0bIClb/5+VFVOGYztju2i4RasjbvK/yGOsbtD7fXQLJju5EWxdb819r/Jhj/CKsl1PCh7Wf1hiSTLcJyCXXoRsNaQ+sauzeCc037dHw3PxzUGGZ0z62fyh+gZNu4a11tSFpQ1TuofoKUpryhMjxQLzwkx+zJiuf6mW/FMDw+5UkgiBdrshImKmq7nWwYXhexZZJvxPeCKRVp5XsSHzU9TzLsydy4LdVvSqjzhmRoWm6Wi0ml10eqazRgQ7nM6g9jRd4YtKG4VGbV1bXLYRuKWaXUW1YeKwduqNqMU8obgzcU3u+yYjFvDN9QlTfkxwYXDMW0kje+87zhhKEQb5XLeH/l5YhhQ95wxVAklbxxvuUNZwxV617/FmIcMhRB5Yj03nPLUJ033DIUaeUTiwvphbsLhoq8sd06ZiiW9av4jhgq8oZrhvXvS9wxFEHlecM1Q1XecM1QjBSf5nXLUPW84ZqhWJZfbDtnWMkb7hmW84aLhsJbu25YeEPrqKEYbV03FP7CdcN73nDY8Of7Ei4b3vKG24bCu7puKMShXx/tBQAAAAAAAAAAAAAAAAAAAAAAAAD4z/gDxD9RIeJX0H0AAAAASUVORK5CYII=" alt="not found"/> 
        
        <div className="PostedOn">{postedOn}</div>
        likes        comment
        <div className="likesc">0</div>
        <div className="PostCaption"><h1>{config.description}</h1></div>
    </div>
    
};

export default PostFooter;