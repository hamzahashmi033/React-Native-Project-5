import { Alert, Text } from "react-native";
import AuthContent from "../components/Auth/AuthContent";
import { login } from "../utils/auth";
import { useState } from "react";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import { useDispatch } from "react-redux";
import { addToken } from "../store/Authication";
const LoginScreen = () => {
  const dispatch = useDispatch();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const loginHandler = async ({ email, password }) => {
    setIsAuthenticated(true);
    try {
      const response = await login(email, password);
      dispatch(addToken({ token: response }));
    } catch (error) {
      Alert.alert(
        'Authentication failed!',
        'Could not log you in. Please check your credentials or try again later!'
      );
      setIsAuthenticated(false);
    }
  };
  if (isAuthenticated) {
    return <LoadingOverlay message="Logging you in..." />;
  }
  return <AuthContent isLogin onAuthenticate={loginHandler} />;
};

export default LoginScreen;
