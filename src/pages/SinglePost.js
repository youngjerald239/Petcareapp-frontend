import React from "react";
import { Link } from "react-router-dom";
import "../App.css"

// destructuring the props needed to get our post, including router prop match
const SinglePost = ({ posts, match, edit, deletePet }) => {
  const id = parseInt(match.params.id) //get the id from url param
  const post = posts.find((post) => post?.id === id)

  return (
      <div className="single_post" style={{padding: "200px"}}>
      <div class="col s12 m7" style={{marginTop:"-200px", marginBottom:"-200px"}}>
      <h1 class="header" style={{color: "#00796b", fontWeight: "600"}}>{post?.name}</h1>
      <div class="card horizontal" style={{backgroundColor: "rgb(0,150,136)", borderRadius:"99px", border:"black solid 5px"}}>
      <div class="card-image2" style={{overflow:"hidden", display:"flex", borderRadius:"99px", border:"gray solid 5px"}}>
          <img src={post?.image}/>
          </div>
          <div class="card-stacked">
          <div class="card-content"  style={{borderRadius:"99px", border:"gray solid 5px"}}>
          <h2 style={{color: "rgb(3,169,242)", fontWeight: "300"}}>{post?.breed}</h2>
          <h3 style={{color: "#64ffda", fontWeight: "600"}}>Age:{post?.age}</h3>
          <h2>{post?.adopted}</h2>
          <p style={{color: "navy", fontWeight: "600"}}>{post?.petcare}</p>
          <div class="card-action">
          <button style={{backgroundColor:"#00796b", border: "3px solid rgb(56, 56, 56)", borderRadius:"999px"}} onClick={(event) => edit(post)}>Edit</button>
          <button style={{backgroundColor:"#00796b", border: "3px solid rgb(56, 56, 56)", borderRadius:"999px"}} onClick={(event) => deletePet(post)}>Delete</button>
          <Link to="/">
              <button style={{backgroundColor:"#00796b", border: "3px solid rgb(56, 56, 56)", borderRadius:"33px"}}>Go Back</button>
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