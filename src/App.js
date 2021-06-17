import "./App.css"
import "materialize-css"
// Import All Our Components
import AllPosts from "./pages/AllPosts";
import SinglePost from "./pages/SinglePost";
import Form from "./pages/Form";
import { Widget, addResponseMessage, addLinkSnippet, addUserMessage  } from 'react-chat-widget';
 
import 'react-chat-widget/lib/styles.css';

// Import React and hooks
import React, { useState, useEffect } from "react";

// Import components from React Router
import { Route, Switch, Link } from "react-router-dom";




function App(props) {
  useEffect(() => {
    addResponseMessage('Welcome to The Kat & KaPoodle chat section!');
  }, []);

  const handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);
    // Now send the message throught the backend API
    
  };
  ////////////////////
  // Style Objects
  ////////////////////

  const h1 = {
    textAlign: "center",
    margin: "10px",
  };

  const button = {
    backgroundColor: "rgb(0,150,136)",
    display: "flex",
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
    <div className="App" style={{backgroundColor:"#ea80fc "}}>
   <nav>
    <div class="nav-wrapper" style={{backgroundColor:"#880e4f"}}>
      <a href="/" class="brand-logo center" style={{color:"rgb(0,150,136)", fontWeight: "600", fontSize: "50px"}}>The Kat & KaPoodle</a>
      <ul id="nav-mobile" class="left hide-on-med-and-down">
        <li><a href="/mypets">My Pets</a></li>
        <li><a href="/profile">Profile</a></li>
        <li><a href="/">Login</a></li>
      </ul>
    </div>
  </nav>
  <Widget handleNewUserMessage={handleNewUserMessage}
          profileAvatar={"https://images.unsplash.com/photo-1568572933382-74d440642117?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80"}
          title="Welcome to our chat section"
          subtitle="See what others have to say"/>
      
      <div className="routes">
      <Link to="/new"><button style={button}>Create New Pet</button></Link>
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
      <Link to="/new"><button style={button}>Create New Pet</button></Link>
      </div>
      <footer class="page-footer" style={{backgroundColor:"#880e4f"}}>
          <div class="container">
            <div class="row">
            </div>
          </div>
          <div class="footer-copyright">
            <div class="container">
            © 2021 Copyright Jerald Young
            <a class="grey-text text-lighten-4 right" href="/">Home</a>
            </div>
          </div>
        </footer>
    </div>
  );
}


export default App;
