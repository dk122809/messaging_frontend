import axios from "axios";

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
      return response;
    })
    .catch((error) => {
      return error.response;
    });
};
