import React from "react";
import { Link } from "react-router-dom";

// destructuring the props needed to get our post, including router prop match
const SinglePost = ({ posts, match, edit, deletePet }) => {
  const id = parseInt(match.params.id) //get the id from url param
  const post = posts.find((post) => post?.id === id)

  return (
      <div className="single_post">
          <h1>{post?.name}</h1>
          <img src={post?.image}/>
          <h2>{post?.breed}</h2>
          <h2>{post?.age}</h2>
          <h2>{post?.adopted}</h2>
          <p>{post?.petcare}</p>
          <button onClick={(event) => edit(post)}>Edit</button>
          <button onClick={(event) => deletePet(post)}>Delete</button>
          <Link to="/">
              <button>Go Back</button>
          </Link>
      </div>
  )
}

export default SinglePost