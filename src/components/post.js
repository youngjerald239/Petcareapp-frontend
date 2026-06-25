import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Post = ({ post }) => {
  return (
    <article className="pet-card">
      <div className="pet-card-media">
        <img src={post?.image} alt={post?.name} />
        <span className={`pet-type ${post.type?.toLowerCase()}`}>{post.type}</span>
      </div>
      <div className="pet-card-body">
        <h3>{post?.name}</h3>
        <p>{post?.breed}</p>
        <div className="pet-meta">
          <span>{post?.age}</span>
          <span>{post?.gender}</span>
          <span>{post?.location}</span>
        </div>
        <Link to={`/post/${post.id}`} className="link-button">
          View details
        </Link>
      </div>
    </article>
  );
};

export default Post;