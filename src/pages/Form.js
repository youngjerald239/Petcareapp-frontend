// Import useState hook
import React, { useState } from "react";

//destructure out props, including router prop history
const Form = ({ initialPet, handleSubmit, buttonLabel, history }) => {
  ////////////////
  // The Form Data State
  ////////////////
  // Initiallize the form with the initialPet state
  const [formData, setFormData] = useState(initialPet);

  //////////////////////////
  // Functions
  //////////////////////////

  // Standard React Form HandleChange Function
  const handleChange = (event) => {
    //Make a copy of the current state
    const newState = { ...formData };
    //updating a property on the object
    newState[event.target.name] = event.target.value;
    //pass the object as the new state
    setFormData(newState);
  };

  // Function to run when form is submitted
  const handleSubmisson = (event) => {
    //prevent form refresh
    event.preventDefault();
    //pass formData to handleSubmit prop function
    handleSubmit(formData);
    //push user back to main page
    history.push("/");
  };

  // Our Form, an input for the subject and details fields and a submit button
  return (
    <form style={{marginTop:"150px", marginBottom:"150px", marginRight:"500px"}} onSubmit={handleSubmisson}>
      <input
        type="text"
        placeholder="Enter pet's name"
        onChange={handleChange}
        value={formData.name}
        name="name"
      />
      <input
        type="image"
        placeholder="Enter pet's image"
        onChange={handleChange}
        value={formData.image}
        name="image"
      />
      <input
        type="text"
        placeholder="Enter pet's Breed"
        onChange={handleChange}
        value={formData.breed}
        name="breed"
      />
      <input
        type="integer"
        placeholder="Enter pet's Age"
        onChange={handleChange}
        value={formData.age}
        name="age"
      />
      <input
        type="boolean"
        onChange={handleChange}
        value={formData.adopted}
        name="adopted"
      />
      <input
        type="text"
        onChange={handleChange}
        value={formData.petcare}
        name="petcare"
      />
      <input type="submit" value={buttonLabel} />
    </form>
  )
}

export default Form