import axios from "axios";
import { toast } from "react-toastify";

export const apiHandle = (apiLink, apiData, method) => {
  const baseUrl = "http://localhost:8000/v1/";
  const token = localStorage.getItem("token");
  return axios({
    method: method,
    url: `${baseUrl}${apiLink}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: apiData,
  })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      toast.error(error.response.data.message);
      return false;
    });
};
