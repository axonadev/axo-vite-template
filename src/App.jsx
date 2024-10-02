import "./App.css";
import ProtectedRoutes from "./routes/ProtectedRoutes.jsx";
import InvisibleRoutesIfAuth from "./routes/InvisibleRoutesIfAuth.jsx";

//React router
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//Pages
import LoginPage from "./pages/auth/Login/Login.jsx";
import Homepage from "./pages/Homepage/Homepage.jsx";
import Dashboard from "./pages/protected/Dashboard/Dashboard.jsx";
/* import RegistrationIntent from "./pages/auth/RegistrationIntent.jsx";
import RegistrationConfirmation from "./pages/auth/RegistrationConfirmation.jsx"; */

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path={"/"} element={<Homepage />}></Route>
        <Route element={<InvisibleRoutesIfAuth />}>
          <Route path={"/login"} element={<LoginPage />}></Route>
        </Route>
        <Route element={<ProtectedRoutes />}>
          <Route element={<Dashboard />} path={"/dashboard"} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
