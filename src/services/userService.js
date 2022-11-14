import { auth } from "../firebase";
import { sendPasswordResetEmail, signOut } from "firebase/auth";
import axios from "axios";
import { BASE_API_URL } from "../environment";

const logInWithEmailAndPassword = async (email, password) => {
  try {
    return await axios.post(`${BASE_API_URL}/auth/login`, {
      email: email,
      password: password,
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const getUserKeys = async (email) => {
  try {
    return await axios.get(`${BASE_API_URL}/users/keys/${email}`);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const registerWithEmailAndPassword = async (name, email, password, role) => {
  try {
    return await axios.post(`${BASE_API_URL}/auth/signup`, {
      name: name,
      email: email,
      password: password,
      role: role,
    });
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
    return await axios.get(`${BASE_API_URL}/users/credits/${email}`);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const getUserTransactions = async (email) => {
  try {
    return await axios.get(`${BASE_API_URL}/users/transactions/${email}`);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const getTraderCredits = async (email) => {
  try {
    return await axios.get(`${BASE_API_URL}/users/credits/${email}`);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const getUser = async (email) => {
  try {
    return await axios.get(`${BASE_API_URL}/users/${email}`);
  } catch (error) {
    console.error(error);
    alert(error.message);
  }
};

const exchange = async (transaction) => {
  try {
    await axios.post(`${BASE_API_URL}/transaction/exchange`, {
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
    await axios.post(`${BASE_API_URL}/transaction/retire`, {
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

const saleCredits = async (email, serial, projectId) => {
  try {
    await axios.post(`${BASE_API_URL}/users/sale_credit`, {
      email: email,
      serial: serial,
      project_id: projectId,
    });
  } catch (error) {
    console.error(error);
    alert(error.message);
  }
};

const deleteUser = async (email) => {
  try {
    await axios.delete(`${BASE_API_URL}/auth/delete/${email}`);
  } catch (error) {
    console.error(error);
    alert(error.message);
  }
};

const manyExchange = async (transaction, privateKeySender, publicKeySender) => {
  try {
    await axios.post(`${BASE_API_URL}/transaction/many/exchange`, {
      amount: transaction.cont,
      recipient_email: localStorage.getItem("email"),
      cp_email: localStorage.getItem("cp_email"),
      private_key_sender: privateKeySender,
      public_key_sender: publicKeySender,
    });
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
  manyExchange,
  saleCredits,
  getTraderCredits,
  deleteUser,
};
