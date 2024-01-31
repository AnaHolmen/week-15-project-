// Import React and the NewRoomForm component
import React from "react";
import { NewRoomForm } from "./NewRoomForm";

// Define the House component. This is a functional component that receives props.
export const House = (props) => {
  // Destructure the house and updateHouse props. These are passed from the parent component.
  const { house, updateHouse } = props;

  // Define the deleteRoom function. This function is used to delete a room from a house.
  // It creates a new house object with the specified room removed, then calls updateHouse with the new house object.
  const deleteRoom = (roomId) => {
    const updatedHouse = {
      ...house,
      rooms: house.rooms.filter((x) => x._id !== roomId),
    };
    updateHouse(updatedHouse);
  };

  // Define the addNewRoom function. This function is used to add a new room to a house.
  // It creates a new house object with the new room added, then calls updateHouse with the new house object.
  const addNewRoom = (newRoom) => {
    const updatedHouse = {
      ...house,
      rooms: [...house.rooms, newRoom],
    };
    updateHouse(updatedHouse);
  };

  // Define the Rooms component. This is a functional component that renders a list of rooms.
  // It maps over the rooms in the house and creates a list item for each one.
  const Rooms = () => (
    <ul>
      {house.rooms.map((room, index) => (
        <li key={index}>
          <label>{`${room.name} area: ${room.area}`}</label>
          <button onClick={() => deleteRoom(room._id)}>Delete</button>
        </li>
      ))}
    </ul>
  );

  // Render the House component. This includes the house name, the Rooms component, and the NewRoomForm component.
  return (
    <div>
      <h1>{house.name}</h1>
      <Rooms />
      <NewRoomForm onAddRoom={addNewRoom} />
    </div>
  );
};