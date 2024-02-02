import { useEffect, useState } from "react";
import { https } from "@/api/axiosConfig";

export const useFetchData = (endpoint, params = "") => {
  const initialCardData = new Array(10).fill(null);
  const [data, setData] = useState(initialCardData);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await https.get(`${endpoint}${params}`);
        const { data } = response.data;
        setData(data || []);
      } catch (err) {
        console.error("Failed to fetch data: ", err);
      }
    };

    fetchData();
  }, [endpoint, params]);

  return { data };
};
