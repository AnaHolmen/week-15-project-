import React from "react";
import { NewRoomForm } from "./NewRoomForm";

export const House = (props) => {
  const { house, updateHouse } = props;

  const deleteRoom = (roomId) => {
    const updatedHouse = {
      ...house,
      rooms: house.rooms.filter((x) => x._id !== roomId),
    };
    updateHouse(updatedHouse);
  };

  const addNewRoom = (newRoom) => {
    const updatedHouse = {
      ...house,
      rooms: [...house.rooms, newRoom],
    };
    updateHouse(updatedHouse);
  };

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

  return (
    <div>
      <h1>{house.name}</h1>
      <Rooms />
      <NewRoomForm onAddRoom={addNewRoom} />
    </div>
  );
};
