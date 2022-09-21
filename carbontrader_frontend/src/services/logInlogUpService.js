import { useCallback } from "react";
import app from "./firebase"

// const handleSignUp = async () => useCallback(async event => {
//   event.preventDefault();
//   const { email, password } = event.target.elements;
//   try {
//     await app
//       .auth()
//       .createUserWithEmailAndPassword(email.value, password.value);
//   } catch (error) {
//     alert(error);
//   }
// }, []);

// export default handleSignUp