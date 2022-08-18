import instance from "./instance";
import axios from "axios";

let data;

const getProjects = async () => {
  await axios.get("https://api-credit-provider.herokuapp.com/")
    .then((response) => {
      data = response.data;
    });
  return data;
};

/*const getProjects = async() => {
  await instance.get("/carbontrader.json").then((response) => {
   data = response.data.CreditProvider
  });
  return data
};*/

export default getProjects;
