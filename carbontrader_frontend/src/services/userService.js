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
const getPublicKey = async (email) => {
  try {
    const res = await axios.get(
      `http://localhost:8000/users/public_key/${email}`
    );
    return res;
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const getPrivateKey = async (email) => {
  try {
    const res = await axios.get(
      `http://localhost:8000/users/private_key/${email}`
    );
    return res;
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const getUserKeys = async (email) => {
  try {
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

const getUser = async (email) => {
  try {
    const res = await axios.get(`http://localhost:8000/users/uss/${email}`);
    return res;
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
  getPublicKey,
  getPrivateKey,
  getUserKeys,
};
