import axios from "axios";
import { useDispatch,useSelector } from "react-redux";
let API_KEY = "AIzaSyCNvkXegMSJvm_z4GNcOIM1hV5DJ-n6SPE";
export const authenticate = async (mode,email, password) => {
 
  let url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`
  const response = await axios.post(
    url,
    {
      email: email,
      password: password,
      returnSecureToken: true,
    }
  );
  const token = response.data.idToken
  return token
};
export const createUser= async(email,password)=>{
   const token = await authenticate("signUp",email,password)
   return token
}
export const login= async(email,password)=>{
   const token = await authenticate('signInWithPassword',email,password)
   return token;
 }