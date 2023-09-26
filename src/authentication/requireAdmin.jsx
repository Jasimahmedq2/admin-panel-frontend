/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";

import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const RequireAdmin = ({ children }) => {
  const location = useLocation();

  const { isLogin, loginUser } = useSelector((state) => state.auth);

  if (!isLogin || !loginUser.isVerified || loginUser.role !== "admin") {
    toast("this route only for admin, you can't access the route")
    return <Navigate to="/" state={{ from: location }} replace></Navigate>;
  }
  return children;
};
export default RequireAdmin;
