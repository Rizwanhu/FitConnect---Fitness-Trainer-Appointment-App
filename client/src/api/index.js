import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080/api",
});

export const UserSignUp = async (data) => API.post("/user/signup", data);
export const UserSignIn = async (data) => API.post("/user/signin", data);

export const getDashboardDetails = async (token) =>
  API.get("/user/dashboard", {
    headers: { Authorization: `Bearer ${token}` },
  });

export const getWorkouts = async (token, date) =>
  await API.get(`/user/workout${date}`, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const addWorkout = async (token, data) =>
  await API.post(`/user/workout`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });


//  ------------------------


// getUsers function
export const getUsers = async () => {
  try {
    // Send the GET request using the API instance
    const res = await API.get("/v1/admin/getAllUsers", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`, // Get the token from localStorage
      },
    });

    // Check if the request was successful
    if (res.data.success) {
      // Assuming you are using state to set the users
      setUsers(res.data.data); // Update the state with the users data
    }
  } catch (error) {
    console.error("Error fetching users:", error); // Log the error for debugging
  }
};


