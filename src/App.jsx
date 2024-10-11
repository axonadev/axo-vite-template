import { useEffect } from "react";
import "./App.css";

import ProtectedRoutes from "./routes/ProtectedRoutes.jsx";
import InvisibleRoutesIfAuth from "./routes/InvisibleRoutesIfAuth.jsx";

//React router
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//Pages
import LoginPage from "./pages/auth/Login/Login.jsx";
import Homepage from "./pages/Homepage/Homepage.jsx";
import Dashboard from "./pages/protected/Dashboard/Dashboard.jsx";

const VAPID_PUBLIC_KEY =
  "BPc714ElxdcFcn1JI_hSg2uwbkNk1CYn0UwTmwfmOmHYR8vK2ppwxPK2-nqTxk_sxt8KgIdVyYlXytvGyq1DvUo";

const urlBase64ToUint8Array = (base64String) => {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, "+").replace(/_/g, "/");
  const rawData = window.atob(base64);
  return new Uint8Array([...rawData].map((char) => char.charCodeAt(0)));
};

function App() {
  /* const { registraDispositivo } = PostRegistration();

  const messaggio = () => {
    const endpoint = localStorage.getItem("axo_endpoint");
    const P256DH = localStorage.getItem("axo_P256DH");
    const Auth = localStorage.getItem("axo_Auth");
    const Token =
      "YSbfWMuh9vsg91_s_t5vVAAx2kNmBYjc55Cy13wngUIPJLVOOm_p_daMGrmMFOVwo_s_swxWAHfwSDV_p_A9neujHbZ2WNeZCWjY6531Yo9O_s_CLRFesUQCmBt9LDcotCOAFy5cYA";
    const idSoggetto = 1;
    const Azienda = "06087680960";
    registraDispositivo(endpoint, P256DH, Auth, Token, idSoggetto, Azienda);
  }; */
  useEffect(() => {
    if ("serviceWorker" in navigator && "PushManager" in window) {
      navigator.serviceWorker
        .register("/service-worker.js", {
          scope: "/",
          type: "classic",
        })
        .then(function (registration) {
          console.log("Service Worker registrato con successo:", registration);

          return registration.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey: urlBase64ToUint8Array(VAPID_PUBLIC_KEY),
          });
        })
        .then(function (subscription) {
          // Invia la sottoscrizione al backend

          localStorage.setItem(
            "axo_P256DH",
            JSON.parse(JSON.stringify(subscription))?.keys?.p256dh
          );
          localStorage.setItem(
            "axo_Auth",
            JSON.parse(JSON.stringify(subscription))?.keys?.auth
          );
          localStorage.setItem(
            "axo_endpoint",
            JSON.parse(JSON.stringify(subscription))?.endpoint
          );
        });
    }
  }, []);

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
}

export default App;
