import "./App.css";
import "materialize-css";
import React, { useState, useEffect } from "react";
import { Route, Switch, Link } from "react-router-dom";
import { Widget, addResponseMessage } from "react-chat-widget";
import "react-chat-widget/lib/styles.css";

import AllPosts from "./pages/AllPosts";
import SinglePost from "./pages/SinglePost";
import FormLog from "./pages/FormLog";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || "http://localhost:5000/api/pets";

function App() {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    addResponseMessage("Welcome to Pet Adoption Support!");
    fetchPets();
  }, []);

  const fetchPets = async () => {
    try {
      setLoading(true);
      const response = await fetch(BACKEND_URL);
      if (!response.ok) {
        throw new Error("Unable to load pets");
      }
      const data = await response.json();
      setPets(data);
      setError("");
    } catch (fetchError) {
      setError("Sorry, we could not load pets right now.");
      console.error(fetchError);
    } finally {
      setLoading(false);
    }
  };

  const handleNewUserMessage = (message) => {
    console.log("New chat message:", message);
    addResponseMessage("Thanks! We will help you find the perfect pet.");
  };

  return (
    <div className="App">
      <div className="page-shell">
        <header className="site-header">
          <div className="logo-wrapper">
            <img
              src="https://i.imgur.com/P1sZd9S.png?1"
              alt="Kat & KaPoodle logo"
            />
            <div>
              <p className="eyebrow">Pet Adoption</p>
              <h1>Kat & KaPoodle Rescue</h1>
              <p className="hero-copy">
                Browse a curated selection of adoptable cats and dogs from a
                connected pet adoption backend.
              </p>
            </div>
          </div>

          <nav className="main-nav">
            <Link to="/">Home</Link>
            <Link to="/signup">Sign Up</Link>
            <a href="#pets">Browse Pets</a>
          </nav>
        </header>

        <main className="main-content">
          <Switch>
            <Route exact path="/">
              <section className="hero">
                <div className="hero-copy-block">
                  <p className="eyebrow">Adopt a Friend</p>
                  <h2>Find a loving pet that matches your lifestyle.</h2>
                  <p>
                    We connect to a pet adoption API and surface ready-to-adopt
                    cats and dogs with clear details and beautiful photos.
                  </p>
                  <Link className="cta-button" to="#pets">
                    Browse adoptable pets
                  </Link>
                </div>
                <div className="hero-visual" />
              </section>

              <section id="pets" className="pet-list">
                <div className="section-heading">
                  <div>
                    <h2>Ready for Adoption</h2>
                    <p>
                      Scroll through the latest adoptable pets and click any
                      card for more details.
                    </p>
                  </div>
                </div>

                {loading ? (
                  <div className="status-message">Loading adoptable pets...</div>
                ) : error ? (
                  <div className="status-message error">{error}</div>
                ) : (
                  <AllPosts posts={pets} />
                )}
              </section>
            </Route>

            <Route path="/signup" component={FormLog} />

            <Route
              path="/post/:id"
              render={(routerProps) => (
                <SinglePost {...routerProps} pets={pets} />
              )}
            />
          </Switch>
        </main>

        <footer className="site-footer">
          <p>Kat & KaPoodle — modern adoption browsing for rescue pets.</p>
          <span>© 2026 Kat & KaPoodle</span>
        </footer>
      </div>

      <Widget
        handleNewUserMessage={handleNewUserMessage}
        profileAvatar="https://images.unsplash.com/photo-1568572933382-74d440642117?auto=format&fit=crop&w=80&q=80"
        title="Adoption Help"
        subtitle="Ask questions about pets and adoption."
      />
    </div>
  );
}

export default App;
