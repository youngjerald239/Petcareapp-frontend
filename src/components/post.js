import React from "react";
import { Link } from "react-router-dom"
import "../App.css"
import 'materialize-css/dist/css/materialize.min.css';

// destructure the post from props
const Post = ({post}) => {
  return (
      <div className="post__div" style={{justifyContent: "center", paddingLeft: "150px"}}>
      <Link to={`/post/${post.id}`} class="card-title activator" style={{color: "navy", fontWeight: "500", display:"flex", marginRight:"300px", }}>{post?.name}<i class="material-icons right">more_vert</i></Link>
       <div className="card teal" style={{display:"flex", justifyContent: "center", padding: "0px", borderRadius: "920px"}}>
    <div class="card-image waves-effect waves-block waves-light" style={{backgroundColor: "black"}}>
      <img className="activator" src={post?.image} style={{backgroundColor: "black"}}/>
    </div>
    <div className="card-content" style={{textAlign:"center", borderRight:"5px solid rgb(56, 56, 56)", borderTop:"5px solid rgb(56, 56, 56)", borderBottom:"5px solid rgb(56, 56, 56)", borderTopRightRadius:"999px", borderBottomRightRadius:"999px", boxShadow: "0px 5px 8px -9px rgba(0, 0, 0, 1.75)"}}>
      
      <p style={{color:"rgb(3,169,242)"}}>{post?.breed}</p>
      <p><a style={{color:"rgb(0,150,136)"}} href={`/post/${post.id}`}>Click name for more info</a></p>
      <p><a style={{color:"navy"}}>Tap image for Quick info</a></p>
    </div>
    <div class="card-reveal" style={{backgroundColor:"#7e57c2", paddingTop:"50px"}}>
      <span class="card-title rgb(3,167,242)-text text-darken-4">Age:{post?.age}<i class="material-icons right">close</i></span>
      <p style={{color:"navy"}}>{post?.petcare}</p>
    </div>
  </div>
  
      </div>
  )
}

export default Post