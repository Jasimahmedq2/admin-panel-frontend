/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";


import { useSelector } from "react-redux";

const RequireAuth = ({ children }) => {
  const location = useLocation();

  const { isLogin, loginUser } = useSelector((state) => state.auth);
  console.log({ isLogin, loginUser })

  if (!isLogin || !loginUser.isVerified) {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
  return children;
};
export default RequireAuth;
