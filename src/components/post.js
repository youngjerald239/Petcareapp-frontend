import React from "react";
import { Link } from "react-router-dom"
import "../App.css"
import 'materialize-css/dist/css/materialize.min.css';

// destructure the post from props
const Post = ({post}) => {
  return (
      <div className="post__div" style={{justifyContent: "center", paddingLeft: "150px"}}>
       <div className="card teal" style={{display:"flex", justifyContent: "center", padding: "0px", borderRadius: "920px"}}>
    <div class="card-image waves-effect waves-block waves-light" style={{backgroundColor: "black"}}>
      <img className="activator" src={post?.image} style={{backgroundColor: "black"}}/>
    </div>
    <div className="card-content" >
      <Link to={`/post/${post.id}`} class="card-title activator" style={{color: "rgb(0,150,136)", fontWeight: "500"}}>{post?.name}<i class="material-icons right">more_vert</i></Link>
      <p style={{color:"rgb(3,169,242)"}}>{post?.breed}</p>
      <p><a style={{color:"rgb(0,150,136)"}} href={`/post/${post.id}`}>Click name for more info</a></p>
      <p><a style={{color:"rgb(3,169,242)"}}>Tap image for Quick info</a></p>
    </div>
    <div class="card-reveal" style={{backgroundColor:"#7e57c2", paddingTop:"50px"}}>
      <span class="card-title rgb(3,167,242)-text text-darken-4">Age:{post?.age}<i class="material-icons right">close</i></span>
      <p>{post?.petcare}</p>
    </div>
  </div>
  
      </div>
  )
}

export default Post