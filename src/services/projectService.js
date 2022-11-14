import axios from "axios";
import { BASE_API_URL } from "../environment";

const getProjects = async () => {
  try {
    const res = await axios.get(`${BASE_API_URL}/projects/all`);
    return res.data;
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const getCreditProvider = async (id) => {
  try {
    const res = await axios.get(
      `${BASE_API_URL}/projects/credit_provider/${id}`
    );
    return res.data;
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const getOnSaleCredits = async (id) => {
  try {
    const res = await axios.get(`${BASE_API_URL}/projects/onSaleCredits/${id}`);
    return res;
  } catch (error) {
    console.error(error);
    alert(error.message);
  }
};

const getOnSaleProvidersCredits = async (id) => {
  try {
    const res = await axios.get(
      `${BASE_API_URL}/projects/onSaleCredits/provider/${id}`
    );
    return res;
  } catch (error) {
    console.error(error);
    alert(error.message);
  }
};

const getProviderEmail = async (serial) => {
  try {
    const res = await axios.get(
      `${BASE_API_URL}/projects/provider_email/${serial}`
    );
    return res;
  } catch (error) {
    console.error(error);
    alert(error.message);
  }
};

export {
  getProjects,
  getCreditProvider,
  getOnSaleCredits,
  getProviderEmail,
  getOnSaleProvidersCredits,
};
