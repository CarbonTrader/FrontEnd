import { useEffect, useState } from "react";

const useUser = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    token: "",
  });

  const changeEmail = (newEmail) =>
    setUser({
      ...user,
      email: newEmail,
    });

  const changePassword = (newPassword) =>
    setUser({
      ...user,
      password: newPassword,
    });

  const changeToken = () => {
    const token = !!window.localStorage.getItem("token")
      ? window.localStorage.getItem("token")
      : "";
    setUser({
      ...user,
      token: token,
    });
  };

  return {
    user,
    changeEmail,
    changePassword,
    changeToken,
  };
};

export default useUser;
