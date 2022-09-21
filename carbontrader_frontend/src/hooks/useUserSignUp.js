import { useEffect, useState } from "react";
import handleSignUp from "../services/logInlogUpService";

const useUserSignUp = () => {
  const [user, setUser] = useState({});
  
  const changeUser = async () => {
    setUser(await handleSignUp());
  };

  useEffect(() => {
    changeUser();
  }, []);

  return user;
};

export default useUserSignUp;
