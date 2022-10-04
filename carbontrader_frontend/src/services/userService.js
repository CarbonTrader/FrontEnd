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

export {
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  logout,
};
