import axios from "axios";
const storedToken = localStorage.getItem('authToken');
 

const api = axios.create({
  

  baseURL: process.env.REACT_APP_API_URL || "http://localhost:5005",
  headers:  { Authorization: `Bearer ${storedToken}` } 
  
});
 
const errorHandler = (err) => {
  throw err;
};
 
 
const exportedObject = {
    errorHandler
};

export default exportedObject;