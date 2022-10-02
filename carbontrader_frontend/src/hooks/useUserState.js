import { useEffect, useState } from "react";

const useUser = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    token: "",
    role: "",
    uid: "",
  });
  const changeUid = (newUid) =>
    setUser({
      ...user,
      uid: newUid,
    });
  const changeRole = (newRole) =>
    setUser({
      ...user,
      role: newRole,
    });
  const changeName = (newName) =>
    setUser({
      ...user,
      name: newName,
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
    changeRole,
    changeName,
    changeUid,
  };
};

export default useUser;
