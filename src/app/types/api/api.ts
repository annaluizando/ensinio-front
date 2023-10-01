export const getCard = async (): Promise<ResourceData[]> => {
  try {
    const response = await fetch("https://ensinio-fakeapi.vercel.app/items", {
      method: 'GET',
    });

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }
    const data = await response.json();

    if (data.length > 0) {
      return data;
    } else if (data.error) {
      throw new Error("Response data is empty");
    }
  } catch (err) {
    throw err;
  }

  return Promise.resolve([]);
};