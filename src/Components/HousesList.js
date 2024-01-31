import React from "react";
import { House } from "./House";
import { houseApi } from "../rest/HouseApi.js";
import { NewRoomForm } from "./NewRoomForm";

export class HousesList extends React.Component {
  state = {
    houses: [],
  };

  componentDidMount() {
    this.fetchHouses();
  }

  fetchHouses = async () => {
    try {
      const houses = await houseApi.get();
      this.setState({ houses });
    } catch (error) {
      console.error("Error fetching houses:", error);
    }
  };

  addNewHouse = async (newHouse) => {
    try {
      await houseApi.post(newHouse);
      this.fetchHouses();
    } catch (error) {
      console.error("Error adding new house:", error);
    }
  };

  deleteHouse = async (houseId) => {
    try {
      await houseApi.delete(houseId);
      this.fetchHouses();
    } catch (error) {
      console.error("Error deleting house:", error);
    }
  };

  updateHouse = async (updatedHouse) => {
    try {
      await houseApi.put(updatedHouse);
      this.fetchHouses();
    } catch (error) {
      console.error("Error updating house:", error);
    }
  };

  render() {
    return (
      <div className="house-list">
        {this.state.houses.map((house) => (
          <div key={house._id}>
            <House house={house} updateHouse={this.updateHouse} />
            <button onClick={() => this.deleteHouse(house._id)}>
              Delete House
            </button>
          </div>
        ))}
        <div>
          <h2>Add New House</h2>
          <NewRoomForm onAddRoom={this.addNewHouse} />
        </div>
      </div>
    );
  }
}
