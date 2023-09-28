import { ResourceData } from "../elements/ResourcesCard";

export const getCard = async (): Promise<ResourceData[]> => {
  try {
    const response = await fetch("http://localhost:3001/items", {
      method: 'GET',
    });

    const data = await response.json();

    if (data.length > 0) {
      return data;
    } else if (data.error) {
      console.log("Error");
    }
  } catch (err) {
    console.error("An error occurred:", err);
    throw err;
  }

  return Promise.resolve([]);
};