import React from "react";
import { NewRoomForm } from "./NewRoomForm";

// Define the House component.
export const House = (props) => {
  // Destructure the house and updateHouse props. These are passed from the parent component.
  const { house, updateHouse } = props;

  // Define the deleteRoom function.
  const deleteRoom = (roomId) => {
    const updatedHouse = {
      ...house,
      rooms: house.rooms.filter((x) => x._id !== roomId),
    };
    updateHouse(updatedHouse);
  };

  // Define the addNewRoom function.
  const addNewRoom = (newRoom) => {
    const updatedHouse = {
      ...house,
      rooms: [...house.rooms, newRoom],
    };
    updateHouse(updatedHouse);
  };

  // Define the Rooms component.
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
