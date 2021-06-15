import React from "react";
import { Link } from "react-router-dom"
import "../App.css"
import 'materialize-css/dist/css/materialize.min.css';

// destructure the post from props
const Post = ({post}) => {
  return (
      <div className="post__div">
      <div className="row">
      <div className="col s12 m7">
      <div className="card medium">
          <Link to={`/post/${post?.id}`}>
              <h1>{post?.name}</h1>
          </Link>
          <div className="card-image">
          <img src={post?.image}/>
          </div>
          <div className="card-content">
          <h2>{post?.breed}</h2>
          <h3>Age:{post?.age}</h3>
          <h2>{post?.adopted}</h2>
          
          </div>
          </div>
          </div>
          </div>
      </div>
  )
}

export default Post