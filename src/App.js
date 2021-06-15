import "./App.css"
import "materialize-css"
// Import All Our Components
import AllPosts from "./pages/AllPosts";
import SinglePost from "./pages/SinglePost";
import Form from "./pages/Form";

// Import React and hooks
import React, { useState, useEffect } from "react";

// Import components from React Router
import { Route, Switch, Link } from "react-router-dom";

function App(props) {
  ////////////////////
  // Style Objects
  ////////////////////

  const h1 = {
    textAlign: "center",
    margin: "10px",
  };

  const button = {
    backgroundColor: "navy",
    display: "block",
    margin: "auto",
  };

  ///////////////
  // State & Other Variables
  ///////////////

  // Our Api Url
  const url = "https://petcareapp-backend.herokuapp.com/";
  
  // State to Hold The List of Posts
  const [posts, setPosts] = useState([]);

  // an object that represents a null pet
const nullPet = {
  name: "",
  image: "",
  breed: "",
  age: "Number",
  adopted: "Boolean"
};

  //////////////
  // Functions
  //////////////

  // Function to get list of Pets from API

  const getPets = async () => {
    const response = await fetch(url+"cats");
    const data = await response.json();
    setPosts(data);
  };

// const state to hold pet to edit
const [targetPet, setTargetPet] = useState(nullPet)
  // Function to add pet from form data
  const addPets = async (newPet) => {
    const response = await fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPet),
    });
  
    // get updated list of pets
    getPets();
  };

  // Function to select pet to edit
const getTargetPet = (pet) => {
  setTargetPet(pet);
  props.history.push("/edit");
};

// Function to edit pet on form submission
const updatePet = async (pet) => {
  const response = await fetch(url + pet.id + "/", {
    method: "put",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(pet),
  });

  // get updated list of pets
  getPets();
};

// Function to delete pet on form submission
const deletePet = async (pet) => {
  const response = await fetch(url + pet.id + "/", {
    method: "delete",
  });

  // get updated list of songs
  getPets();
  props.history.push("/");
};


  //////////////
  // useEffects
  //////////////

  // useEffects to get list of pets when page loads
  useEffect(() => {getPets()}, [])

  /////////////////////
  // returned JSX
  /////////////////////
  return (
    <div className="App" style={{backgroundColor:"gray"}}>
    <nav>
    <div class="nav-wrapper">
      <a href="#" class="brand-logo center">Logo</a>
      <ul id="nav-mobile" class="left hide-on-med-and-down">
        <li><a href="sass.html">Sass</a></li>
        <li><a href="badges.html">Components</a></li>
        <li><a href="collapsible.html">JavaScript</a></li>
      </ul>
    </div>
  </nav>
      
      <Link to="/new"><button style={button}>Create New Pet</button></Link>
      <div className="routes">
      <Switch>
        <Route
          exact
          path="/"
          render={(routerProps) => <AllPosts {...routerProps} posts={posts} />}
        />
        
        <Route
          path="/post/:id"
          render={(routerProps) => (
            <SinglePost {...routerProps} posts={posts} edit={getTargetPet} deletePet={deletePet} />
          )}
        />
        <Route
          path="/new"
          render={(routerProps) => (<Form {...routerProps} initialPet={nullPet} handleSubmit={addPets} buttonLabel="create pet"/>)}
        />
        <Route
          path="/edit"
          render={(routerProps) => <Form {...routerProps} initialPet={targetPet}
        handleSubmit={updatePet}
        buttonLabel="update pet"/>}
        />
      </Switch>
      </div>
    </div>
  );
}

export default App;
