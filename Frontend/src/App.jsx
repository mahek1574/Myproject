import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";
import Scrolltop from "./components/Scrolltop";

import Home from "./pages/Home";
import Services from "./components/Services";
import ServiceDetail from "./pages/ServiceDetail";
import About from "./pages/About";
import Portfolio from "./components/Portfolio";
import Contact from "./pages/Contact";
import ProjectPage from "./pages/ProjectPage";
import NotFound from "./components/NotFound";

import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import UserDashboard from "./pages/UserDashboard";

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[3px] bg-[#6B8F7B] origin-left z-[9999] pointer-events-none shadow-[0_0_10px_#6B8F7B]"
    />
  );
}

function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      if (
        e.target.tagName === "BUTTON" ||
        e.target.tagName === "A" ||
        e.target.closest("button") ||
        e.target.closest("a")
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-[#6B8F7B] rounded-full pointer-events-none z-[9999] hidden sm:block"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
        }}
        transition={{ type: "spring", stiffness: 1000, damping: 50, mass: 0.1 }}
      />
      <motion.div
        className="fixed top-0 left-0 border border-[#6B8F7B]/50 rounded-full pointer-events-none z-[9998] hidden sm:block"
        animate={{
          x: mousePosition.x - (isHovered ? 24 : 16),
          y: mousePosition.y - (isHovered ? 24 : 16),
          width: isHovered ? 48 : 32,
          height: isHovered ? 48 : 32,
          backgroundColor: isHovered ? "rgba(107, 143, 123, 0.15)" : "transparent",
          borderColor: isHovered ? "#6B8F7B" : "rgba(107, 143, 123, 0.4)",
        }}
        transition={{ type: "spring", stiffness: 250, damping: 20 }}
      />
    </>
  );
}

const PageWrapper = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="min-h-[70vh]"
    >
      {children}
    </motion.div>
  );
};

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="popLayout">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
        <Route path="/services" element={<PageWrapper><Services /></PageWrapper>} />
        <Route path="/services/:id" element={<PageWrapper><ServiceDetail /></PageWrapper>} />
        <Route path="/portfolio" element={<PageWrapper><Portfolio /></PageWrapper>} />
        <Route path="/projectpage" element={<PageWrapper><ProjectPage /></PageWrapper>} />
        <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />

      
        <Route 
          path="/login" 
          element={
            <ProtectedRoute requireAuth={false}>
              <PageWrapper><Login /></PageWrapper>
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/admin/login" 
          element={
            <ProtectedRoute requireAuth={false}>
              <PageWrapper><Login /></PageWrapper>
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/admin/signup" 
          element={
            <ProtectedRoute requireAuth={false}>
              <PageWrapper><Signup /></PageWrapper>
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/admin/dashboard" 
          element={
            <ProtectedRoute requireAuth={true} allowedRoles={["admin"]}>
              <PageWrapper><Dashboard /></PageWrapper>
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/user/dashboard" 
          element={
            <ProtectedRoute requireAuth={true} allowedRoles={["user"]}>
              <PageWrapper><UserDashboard /></PageWrapper>
            </ProtectedRoute>
          } 
        />

        <Route path="*" element={<PageWrapper><NotFound /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <AuthProvider>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {!isLoading && (
        <Router>
          <div className="flex flex-col min-h-screen bg-[#F8FAF8] dark:bg-[#0b100c] text-[#17221B] dark:text-gray-100 transition-colors duration-300">
            <ScrollProgress />
            <CustomCursor />
            <Scrolltop />
            <Navbar />

            <main className="flex-grow">
              <AnimatedRoutes />
            </main>

            <Footer />
          </div>
        </Router>
      )}
    </AuthProvider>
  );
}