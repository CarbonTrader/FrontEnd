import axios from "axios";

const get_credit_provider_email = async (serial) => {
  try {
    const res = await axios.get(
      `http://localhost:8000/credits/provider_email/${serial}`
    );
    return res.data;
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const get_project = async (serial) => {
  try {
    const res = await axios.get(
      `http://localhost:8000/credits/project/${serial}`
    );
    return res.data;
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};


export { get_credit_provider_email,get_project };
