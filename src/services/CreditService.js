import axios from "axios";
import { BASE_API_URL } from "../environment";

const getCreditProviderEmail = async (serial) => {
  try {
    const res = await axios.get(
      `${BASE_API_URL}/credits/provider_email/${serial}`
    );
    return res.data;
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const getProject = async (serial) => {
  try {
    const res = await axios.get(`${BASE_API_URL}/credits/project/${serial}`);
    return res.data;
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

export { getCreditProviderEmail, getProject };
