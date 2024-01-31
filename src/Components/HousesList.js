import React from "react";
import { House } from "./House";
import { houseApi } from "../rest/HouseApi.js";
import { NewRoomForm } from "./NewRoomForm";




// HousesList component manages the state and methods for house data
export class HousesList extends React.Component {
  state = {
    houses: [],
  };

  componentDidMount() {
    this.fetchHouses(); // Initial data fetch on component mount
  }

  // Fetches house data from API and updates state
  fetchHouses = async () => {
    try {
      const houses = await houseApi.get();
      this.setState({ houses });
    } catch (error) {
      console.error("Error fetching houses:", error);
    }
  };

  // Adds a new house to the API and updates state
  addNewHouse = async (newHouse) => {
    try {
      await houseApi.post(newHouse);
      this.fetchHouses();
    } catch (error) {
      console.error("Error adding new house:", error);
    }
  };

  // Deletes a house from the API and updates state
  deleteHouse = async (houseId) => {
    try {
      await houseApi.delete(houseId);
      this.fetchHouses();
    } catch (error) {
      console.error("Error deleting house:", error);
    }
  };

  // Updates a house in the API and updates state
  updateHouse = async (updatedHouse) => {
    try {
      await houseApi.put(updatedHouse);
      this.fetchHouses();
    } catch (error) {
      console.error("Error updating house:", error);
    }
  };
 
  // Renders the list of houses and the form to add a new house
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
          
          <NewRoomForm onAddRoom={this.addNewHouse} houseTitle={true} />

        </div>
      </div>
    );
  }
}