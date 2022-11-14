import axios from "axios";
import { BASE_API_URL } from "../environment";

const getGlobalTransactions = async () => {
  try {
    const res = await axios.get(`${BASE_API_URL}/transaction/all`);
    return res.data;
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

export { getGlobalTransactions };
