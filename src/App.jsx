// App.jsx
import { Suspense, lazy } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import PageWrapper from "./components/Animation/PageWrapper";

import Home from "./pages/Home";
import Careers from "./pages/Careers";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Security from "./pages/Security";
import About from "./pages/About";
const Dashboard = lazy(() => import("./components/Dashboard/Dashboard"));

import NavBar from "./components/navBar/NavBar";
import Footer from "./components/Footer/Footer";
import "./App.css";

export default function App() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className={`app ${isHome ? "home-bg" : ""}`}>
      <NavBar />

      <AnimatePresence mode="wait" initial={false} onExitComplete={() => window.scrollTo(0, 0)}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageWrapper variant="slide"><Home /></PageWrapper>} />
          <Route path="/about" element={<PageWrapper variant="fade"><About /></PageWrapper>} />
          <Route path="/careers" element={<PageWrapper variant="slide"><Careers /></PageWrapper>} />
          <Route path="/security" element={<PageWrapper variant="slide"><Security /></PageWrapper>} />
          <Route path="/login" element={<PageWrapper variant="zoom"><Login /></PageWrapper>} />
          <Route path="/signup" element={<PageWrapper variant="zoom"><SignUp /></PageWrapper>} />
          <Route
            path="/dashboard"
            element={
              <PageWrapper variant="slide">
                <Suspense fallback={null}>
                  <Dashboard />
                </Suspense>
              </PageWrapper>
            }
          />
        </Routes>
      </AnimatePresence>

      <Footer />
    </div>
  );
}
