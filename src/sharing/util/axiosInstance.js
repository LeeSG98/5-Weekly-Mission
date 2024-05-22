// import axios from "axios";

// export const axiosInstance = axios.create({
//   baseURL: "https://bootcamp-api.codeit.kr/api/",
// });

const baseURL = "https://bootcamp-api.codeit.kr/api/";

const fetchData = async (endpoint, options = {}) => {
  try {
    const response = await fetch(baseURL + endpoint, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
