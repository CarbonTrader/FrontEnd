import { auth } from "../firebase";
import { sendPasswordResetEmail, signOut } from "firebase/auth";
import axios from "axios";

const logInWithEmailAndPassword = async (email, password) => {
  try {
    const res = await axios.post("http://localhost:8000/auth/login", {
      email: email,
      password: password,
    });
    return res;
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const getUserKeys = async (email) => {
  try {
    console.log(email);
    const res = await axios.get(`http://localhost:8000/users/keys/${email}`);
    return res;
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const registerWithEmailAndPassword = async (name, email, password, role) => {
  try {
    const res = await axios.post("http://localhost:8000/auth/signup", {
      name: name,
      email: email,
      password: password,
      role: role,
    });
    return res;
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logout = () => {
  signOut(auth).then(() => localStorage.delete("token"));
};

const getUserCredits = async (email) => {
  try {
    const res = await axios.get(`http://localhost:8000/users/credits/${email}`);
    return res;
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const getUserTransactions = async (email) => {
  try {
    const res = await axios.get(
      `http://localhost:8000/users/transactions/${email}`
    );
    return res;
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const get_Trader_Credits = async (email) => {
  try {
    const res = await axios.get(`http://localhost:8000/users/credits/${email}`);
    return res;
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const getUser = async (email) => {
  try {
    const res = await axios.get(`http://localhost:8000/users/${email}`);
    return res;
  } catch (error) {
    console.error(error);
    alert(error.message);
  }
};

const exchange = async (transaction) => {
  try {
    const res = await axios.post("http://localhost:8000/transaction/exchange", {
      id: "tra1",
      carbon_trader_serial: transaction.serial,
      recipient_email: transaction.recipient,
      sender_email: transaction.sender_email,
      private_key_sender: transaction.private_key_sender,
      public_key_sender: transaction.public_key_sender,
    });
  } catch (error) {
    console.error(error);
    alert(error.message);
  }
};
const retire = async (transaction) => {
  try {
    const res = await axios.post("http://localhost:8000/transaction/retire", {
      carbon_trader_serial: transaction.serial,
      recipient_email: transaction.recipient,
      sender_email: transaction.sender_email,
      private_key_sender: transaction.private_key_sender,
      public_key_sender: transaction.public_key_sender,
    });
  } catch (error) {
    console.error(error);
    alert(error.message);
  }
};
const sale_credits = async (email, serial, project_id) => {
  try {
    const res = await axios.post("http://localhost:8000/users/sale_credit", {
      email: email,
      serial: serial,
      project_id: project_id,
    });
  } catch (error) {
    console.error(error);
    alert(error.message);
  }
};
const delete_user = async (email) => {
  try {
    const res = await axios.delete("http://localhost:8000/auth/delete/" + email);
  } catch (error) {
    console.error(error);
    alert(error.message);
  }
};

const many_exchange = async (
  transaction,
  private_key_sender,
  public_key_sender
) => {
  try {
    console.log(transaction);
    const res = await axios.post(
      "http://localhost:8000/transaction/many/exchange",
      {
        amount: transaction.cont,
        recipient_email: localStorage.getItem("email"),
        cp_email: localStorage.getItem("cp_email"),
        private_key_sender: private_key_sender,
        public_key_sender: public_key_sender,
      }
    );
  } catch (error) {
    console.error(error);
    alert(error.message);
  }
};

export {
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  logout,
  getUserCredits,
  getUserTransactions,
  getUser,
  getUserKeys,
  exchange,
  retire,
  many_exchange,
  sale_credits,
  get_Trader_Credits,
  delete_user,
};
