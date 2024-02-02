// Define the endpoint for the houses API
const HOUSES_ENDPOINT = "https://ancient-taiga-31359.herokuapp.com/api/houses";

// Define the HousesAPI class
class HousesAPI {
  // Define the get method to fetch data from the API
  get = async () => {
    try {
      // Fetch data from the API
      const resp = await fetch(HOUSES_ENDPOINT);
      // Parse the response to JSON
      const data = await resp.json();
      // Return the parsed data
      return data;
    } catch (e) {
      // Log any errors that occur during the fetch
      console.log("Oops, looks like fetchHouses had an issue.", e);
    }
  };

  // Define the put method to update a house in the API
  put = async (house) => {
    try {
      const resp = await fetch(`${HOUSES_ENDPOINT}/${house._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(house),
      });

      return await resp.json();
    } catch (e) {
      console.log("Oops, looks like updating houses had an issue.", e);
    }
  };

  // define the post method to post a new house in the API
  post = async (house) => {
    try {
      const resp = await fetch(HOUSES_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(house),
      });

      return await resp.json();
    } catch (e) {
      console.log("Oops, looks like updating houses had an issue.", e);
    }
  };

  // define the delete method to delete a house in the API
  delete = async (houseId) => {
    try {
      const resp = await fetch(`${HOUSES_ENDPOINT}/${houseId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      return await resp.json();
    } catch (e) {
      console.log("Oops, looks like deleting houses had an issue.", e);
    }
  };
}

// Export an instance of the HousesAPI class
export const houseApi = new HousesAPI();
