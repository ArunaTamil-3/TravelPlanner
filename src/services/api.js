import axios from "axios";

const API_URL = " http://localhost:5000/";


const login = (username, password) => {
  return axios
    .get(API_URL + "login", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const create = (data) => {
  return axios
    .post(API_URL + "createtrip", {
      data
    })
    .then((response) => {
      return response;
    });
};

const edit = (data, id) => {
  return axios
    .put(API_URL + "createtrip/"+ id,{
      data
    })
    .then((response) => {
      return response;
    });
};

const getAll = () => {
  return axios
    .get(API_URL + "createtrip")
    .then((response) => {
      return response;
    });
};

const get = (id) => {
  return axios
    .get(API_URL + "createtrip/"+ id)
    .then((response) => {
      return response;
    });
};

const deleteTrip = (id) => {
  return axios
    .delete(API_URL + "createtrip/"+ id)
    .then((response) => {
      return response;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

export default {
  login,
  logout,
  create,
  getAll,
  get,
  edit,
  deleteTrip
};
