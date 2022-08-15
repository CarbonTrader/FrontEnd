import { useEffect, useState } from "react";
import getData from "../services/InvestorService";

const useGetUser = () => {
  const [user, setUser] = useState({});
  const changeUser = async () => {
    setUser(await getData());
  };
  useEffect(() => {
    changeUser();
  }, {});

  return user;
};

export default useGetUser;