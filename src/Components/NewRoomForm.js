import React, { useState } from "react";

// NewRoomForm component for adding a new room
export const NewRoomForm = (props) => {
  let houseTitle = props.houseTitle;
  // Local state for form inputs
  const [name, setName] = useState("");
  const [area, setArea] = useState("");

  // Handle area input changes, ensuring the value is a number
  const handleAreaInput = (e) => {
    const intValue = parseInt(e.target.value, 10);
    setArea(Number.isNaN(intValue) ? 0 : intValue);
  };

  // Handle form submission
  const onSubmit = (e) => {
    e.preventDefault();

    // Validate inputs before calling the onAddRoom prop function
    if (name && area !== "") {
      props.onAddRoom({ name, area });
      setName("");
      setArea("");
    } else {
      console.log("Invalid input");
    }
  };

  // Render the form
  return (
    <div className='form-container'>
      {houseTitle ? <h2>Add a New House</h2> : <h4>Add a new room</h4> }

      <form onSubmit={onSubmit}>
        <input
          type='text'
          placeholder='name'
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        
        <input
          type='text'
          placeholder='area'
          onChange={handleAreaInput}
          value={area}
        />
        <button type='submit'>Add Room</button>
      </form>
    </div>
  );
};
