import { https } from "./axiosConfig";

export const getTrendingData = async () => {
  try {
    const response = await https.get("/anime?status=airing&order_by=popularity&limit=10");
    const { data } = response.data;
    return data;
  } catch (err) {
    console.error("Failed to fetch data: ", err);
  }
};
