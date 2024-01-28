import { https } from "./axiosConfig";

export const getTrendingData = async () => {
  try {
    const response = await https.get("/anime?status=airing&order_by=popularity&limit=10");
    const { data } = response.data;
    return data || [];
  } catch (err) {
    console.error("Failed to fetch data: ", err);
    return [];
  }
};

export const getRecommendedData = async () => {
  try {
    const response = await https.get("/top/anime?filter=bypopularity");
    const { data } = response.data;
    return data || [];
  } catch (err) {
    console.error("Failed to fetch data: ", err);
    return [];
  }
};

export const getMoviesData = async () => {
  try {
    const response = await https.get("/anime?type=movie&order_by=popularity&status=complete&limit=20");
    const { data } = response.data;
    return data || [];
  } catch (err) {
    console.error("Failed to fetch data: ", err);
    return [];
  }
};

export const getSeriesData = async () => {
  try {
    const response = await https.get("/anime?type=tv&order_by=popularity&status=complete&limit=20");
    const { data } = response.data;
    return data || [];
  } catch (err) {
    console.error("Failed to fetch data: ", err);
    return [];
  }
};
