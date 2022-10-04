import axios from "axios";

let data;

const getProjects = async () => {
  await axios
    .get("https://api-credit-provider.herokuapp.com/")
    .then((response) => {
      data = response.data;
    });
  return data;
};
export default getProjects;
