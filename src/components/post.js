import React from "react";
import { Link } from "react-router-dom"
import "../App.css"
import 'materialize-css/dist/css/materialize.min.css';

// destructure the post from props
const Post = ({post}) => {
  return (
      <div className="post__div" style={{justifyContent: "center", paddingLeft: "150px",}}>
       <div className="card teal" style={{display:"flex", justifyContent: "center", padding: "0px", borderRadius: "120px"}}>
    <div class="card-image waves-effect waves-block waves-light" style={{backgroundColor: "black"}}>
      <img className="activator" src={post?.image} style={{backgroundColor: "black"}}/>
    </div>
    <div className="card-content" >
      <Link to={`/post/${post.id}`} class="card-title activator" style={{color: "rgb(0,150,136)", fontWeight: "500"}}>{post?.name}<i class="material-icons right">more_vert</i></Link>
      <p>{post?.breed}</p>
      <p><a href={`/post/${post.id}`}>Click pet for more info</a></p>
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">Age:{post?.age}<i class="material-icons right">close</i></span>
      <p>{post?.petcare}</p>
    </div>
  </div>
  
      </div>
  )
}

export default Post