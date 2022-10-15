import axios from "axios";

const get_global_transactions = async () => {
  try {
    const res = await axios.get(`http://localhost:8000/transaction/all`);
    return res.data;
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

export{
    get_global_transactions
}
