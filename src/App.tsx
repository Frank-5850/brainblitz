import { useEffect } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/home");
  }, []);

  return (
    <div className="appContainer">
      <Outlet />
    </div>
  );
}

export default App;
