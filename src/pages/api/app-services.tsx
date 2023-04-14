import axios from "axios";


//Importing Axios to make HTTP requests from the browser and handle the transformation of request and response data.

export const GetMethod = async (Endpoint : any) => {
    const response = await axios.get(Endpoint);
    return response.data;
  };