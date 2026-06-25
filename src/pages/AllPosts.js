import React from "react";
import Post from "../components/post";

const AllPosts = ({ posts }) => {
  return (
    <div className="cards-grid">
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
};

export default AllPosts;