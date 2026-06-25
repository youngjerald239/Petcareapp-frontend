import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const SinglePost = ({ posts, match }) => {
  const id = parseInt(match.params.id, 10);
  const post = posts.find((item) => item?.id === id);

  if (!post) {
    return (
      <div className="single-post">
        <div className="status-message">Pet not found. Please return to the list.</div>
        <div className="pet-footer">
          <Link to="/" className="button-secondary">
            Back to adoptable pets
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="single-post">
      <div className="poster-card">
        <img src={post.image} alt={post.name} />

        <div className="pet-overview">
          <div>
            <p className="eyebrow">Adoptable {post.type}</p>
            <h2>{post.name}</h2>
          </div>
          <div className="pet-labels">
            <span className="badge">Breed: {post.breed}</span>
            <span className="badge">Age: {post.age}</span>
            <span className="badge">Gender: {post.gender}</span>
            <span className="badge">Location: {post.location}</span>
          </div>
          <div className="pet-details">
            <p>{post.description}</p>
            <p>
              <strong>Adoption status:</strong>{" "}
              {post.adopted ? "Already adopted" : "Available now"}
            </p>
          </div>
          <div className="pet-footer">
            <Link to="/" className="button-secondary">
              Back to the pet list
            </Link>
            <a href="mailto:adoptions@petcareapp.com" className="button-primary">
              Contact adoption team
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
