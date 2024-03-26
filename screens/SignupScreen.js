import { View, Text } from "react-native";
import AuthContent from "../components/Auth/AuthContent";
import { useState } from "react";
import { createUser } from "../utils/auth";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import { useDispatch, useSelector } from "react-redux";
import { addToken } from "../store/Authication";
const SignupScreen = () => {
  const dispatch = useDispatch();
 
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const signupHandler = async ({ email, password }) => {
    setIsAuthenticated(true);
    const response = await createUser(email, password);
    dispatch(addToken({ token: response }));
    setIsAuthenticated(false);
  };
  if (isAuthenticated) {
    return <LoadingOverlay message="Creating user..." />;
  }
  return <AuthContent onAuthenticate={signupHandler} />;
};

export default SignupScreen;
