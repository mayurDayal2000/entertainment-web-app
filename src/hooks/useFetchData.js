import { useEffect, useState } from "react";
import { https } from "@/api/axiosConfig";

/**
 * Transforms the sign-up request data to match the backend's expected format.
 * 
 * @param {SignUpRequest} signUpData - The original sign-up request data.
 * 
 * @returns {Object} The transformed sign-up request data with the following changes:
 * - `firstName` is mapped to `first_name`
 * - `lastName` is mapped to `last_name`
 * - `email` is mapped to `username`
 * - All other properties remain unchanged.
 * 
 * @example
 * const originalData = {
 *   firstName: 'John',
 *   lastName: 'Doe',
 *   email: 'john.doe@example.com',
 *   password: 'securePassword123'
 * };
 * 
 * const transformedData = transformSignUpRequestForBackend(originalData);
 * console.log(transformedData);
 * // Outputs:
 * // {
 * //   firstName: 'John',
 * //   lastName: 'Doe',
 * //   email: 'john.doe@example.com',
 * //   password: 'securePassword123',
 * //   first_name: 'John',
 * //   last_name: 'Doe',
 * //   username: 'john.doe@example.com'
 * // }
 */
export const useFetchData = (endpoint, params = "") => {
  const initialCardData = new Array(10).fill(null);
  const [data, setData] = useState(initialCardData);

  useEffect(() => {
    /**
     * Transforms the sign-up request data to match the backend's expected format.
     * 
     * @param {SignUpRequest} signUpData - The original sign-up request data.
     * 
     * @returns {Object} The transformed sign-up request data with the following changes:
     * - `firstName` is mapped to `first_name`
     * - `lastName` is mapped to `last_name`
     * - `email` is mapped to `username`
     * - All other properties remain unchanged.
     * 
     * @example
     * const originalData = {
     *   firstName: 'John',
     *   lastName: 'Doe',
     *   email: 'john.doe@example.com',
     *   password: 'securePassword123'
     * };
     * 
     * const transformedData = transformSignUpRequestForBackend(originalData);
     * console.log(transformedData);
     * // Outputs:
     * // {
     * //   firstName: 'John',
     * //   lastName: 'Doe',
     * //   email: 'john.doe@example.com',
     * //   password: 'securePassword123',
     * //   first_name: 'John',
     * //   last_name: 'Doe',
     * //   username: 'john.doe@example.com'
     * // }
     */
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
