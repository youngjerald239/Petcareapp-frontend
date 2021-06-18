import React from "react";
import { Link } from "react-router-dom";
import "../App.css"

// destructuring the props needed to get our post, including router prop match
const SinglePost = ({ posts, match, edit, deletePet }) => {
  const id = parseInt(match.params.id) //get the id from url param
  const post = posts.find((post) => post?.id === id)

  return (
      <div className="single_post" style={{padding: "200px"}}>
      <div class="col s12 m7">
      <h1 class="header" style={{color: "rgb(0,150,136)", fontWeight: "600"}}>{post?.name}</h1>
      <div class="card horizontal" style={{backgroundColor: "rgb(0,150,136)"}}>
      <div class="card-image2" style={{overflow:"hidden"}}>
          <img src={post?.image}/>
          </div>
          <div class="card-stacked">
          <div class="card-content">
          <h2 style={{color: "rgb(0,150,136)", fontWeight: "300"}}>{post?.breed}</h2>
          <h3 style={{color: "rgb(0,150,136)", fontWeight: "600"}}>Age:{post?.age}</h3>
          <h2>{post?.adopted}</h2>
          <p style={{color: "white", fontWeight: "600"}}>{post?.petcare}</p>
          <div class="card-action">
          <button onClick={(event) => edit(post)}>Edit</button>
          <button onClick={(event) => deletePet(post)}>Delete</button>
          <Link to="/">
              <button>Go Back</button>
          </Link>
          </div>
          </div>
      </div>
      </div>
      </div>
      </div>
  )
}

export default SinglePost