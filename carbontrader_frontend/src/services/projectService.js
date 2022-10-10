import axios from "axios";

const getProjects = async () => {
  try {
    const res = await axios.get(`http://localhost:8000/projects/all`);
    return res.data;
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const get_credit_provider = async (id) => {
  try {
    const res = await axios.get(
      `http://localhost:8000/projects/credit_provider/${id}`
    );
    return res.data;
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const get_onSale_credits = async (id) => {
  try {
    const res = await axios.get(
      `http://localhost:8000/projects/onSaleCredits/${id}`
    );
    return res;
  } catch (error) {
    console.error(error);
    alert(error.message);
  }
};

export { getProjects, get_credit_provider, get_onSale_credits };
