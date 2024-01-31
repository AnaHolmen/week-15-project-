import React, { useState } from "react";

export const NewRoomForm = (props) => {
  const [name, setName] = useState("");
  const [area, setArea] = useState("");

  const handleAreaInput = (e) => {
    const intValue = parseInt(e.target.value, 10);
    setArea(Number.isNaN(intValue) ? 0 : intValue);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (name && area !== "") {
      props.onAddRoom({ name, area });
      setName("");
      setArea("");
    } else {
      console.log("Invalid input");
    }
  };

  return (
    <div className="form-container">
      <h4>Add a new room</h4>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <input
          type="text"
          placeholder="area"
          onChange={handleAreaInput}
          value={area}
        />
        <button type="submit">Add Room</button>
      </form>
    </div>
  );
};
