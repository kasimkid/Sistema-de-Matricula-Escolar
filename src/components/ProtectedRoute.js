import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = ({
  redirectTo = "/",
  children,
}) => {
    const validateData = JSON.parse(localStorage.getItem('logstudent'))
    const validateUser = validateData.data.roll
    console.log('validateUser', validateUser)

  if (validateData?.access_token) {
    return <Navigate to={redirectTo} replace />;
  }

  return children ? children : <Outlet />;
};