// =============================================================
// frontend/src/App.jsx
// Edu-Platform — Main Application Router
//
// Routes:
//   /                    -> Home page (public)
//   /login               -> Login page (public)
//   /register            -> Register page (public)
//   /test                -> Aptitude test (protected - student)
//   /test/result         -> Test result (protected - student)
//   /dashboard           -> Student dashboard (protected - student)
//   /learn               -> Learning page (protected - student)
//   /learn/:contentId    -> Single content detail (protected)
//   /progress            -> Progress page (protected - student)
//   *                    -> 404 Not Found
// =============================================================

import { useEffect, useState, Component } from "react";
import { BrowserRouter, Routes, Route, Navigate, Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

// ── Pages ──────────────────────────────────────────────────────
import Home          from "./pages/Home";
import Login         from "./pages/Login";
import Register      from "./pages/Register";
import TestPage      from "./pages/TestPage";
import TestResult    from "./pages/TestResult";
import LearnPage     from "./pages/LearnPage";
import Dashboard     from "./pages/Dashboard";
import Progress      from "./pages/Progress";
import NotFound      from "./pages/NotFound";

// ── Components ─────────────────────────────────────────────────
import Navbar        from "./components/Navbar";
import LoadingSpinner from "./components/LoadingSpinner";

// ── Store ──────────────────────────────────────────────────────
import useAuthStore  from "./store/authStore";


// =============================================================
// Protected Route — Login nahi kiya toh /login pe redirect
// =============================================================

function ProtectedRoute({ allowedRoles = [] }) {
  const { user, isLoading } = useAuthStore();

  if (isLoading) {
    return <LoadingSpinner fullScreen message="Loading..." />;
  }

  // Login nahi hai toh login page pe bhejo
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Role check — agar allowedRoles specify ki hain
  if (allowedRoles.length > 0 && !allowedRoles.includes(user.role)) {
    return <Navigate to="/dashboard" replace />;
  }

  return <Outlet />;
}


// =============================================================
// Public Route — Already logged in toh dashboard pe bhejo
// =============================================================

function PublicRoute() {
  const { user, isLoading } = useAuthStore();

  if (isLoading) {
    return <LoadingSpinner fullScreen message="Loading..." />;
  }

  if (user) {
    return <Navigate to="/dashboard" replace />;
  }

  return <Outlet />;
}


// =============================================================
// Layout — Navbar ke saath
// =============================================================

function WithNavbar() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 pt-16">
        <Outlet />
      </main>
    </>
  );
}


// =============================================================
// Error Boundary Component
// =============================================================

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("App Crash:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-slate-900 flex items-center justify-center p-6 text-center">
          <div className="max-w-md w-full bg-slate-800 border border-red-500/30 rounded-3xl p-8 shadow-2xl">
            <h2 className="text-2xl font-bold text-white mb-4">Something went wrong</h2>
            <p className="text-slate-300 mb-6">
              The application crashed. This usually happens due to a missing environment variable or a network error.
            </p>
            <div className="bg-slate-950 rounded-xl p-4 mb-6 text-left overflow-auto max-h-40">
              <code className="text-red-400 text-xs">{this.state.error?.toString()}</code>
            </div>
            <button 
              onClick={() => window.location.reload()}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-xl transition"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}


// =============================================================
// App Root
// =============================================================

export default function App() {
  const { initAuth, isLoading } = useAuthStore();

  useEffect(() => {
    try {
      initAuth();
    } catch (err) {
      console.error("Auth init failed:", err);
    }
  }, [initAuth]);

  if (isLoading) {
    return <LoadingSpinner fullScreen message="Edu-Platform load ho raha hai..." />;
  }

  return (
    <ErrorBoundary>
      <BrowserRouter>
        {/* Toast Notifications */}
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 3000,
            style: {
              background: "#1f2937",
              color:      "#f9fafb",
              fontSize:   "14px",
            },
            success: { iconTheme: { primary: "#10b981", secondary: "#f9fafb" } },
            error:   { iconTheme: { primary: "#ef4444", secondary: "#f9fafb" } },
          }}
        />

        <Routes>
          {/* Public Routes */}
          <Route element={<PublicRoute />}>
            <Route path="/login"    element={<Login    />} />
            <Route path="/register" element={<Register />} />
          </Route>

          {/* Routes with Navbar */}
          <Route element={<WithNavbar />}>
            <Route path="/" element={<Home />} />

            {/* Protected — Students only */}
            <Route element={<ProtectedRoute allowedRoles={["student"]} />}>
              <Route path="/test"        element={<TestPage   />} />
              <Route path="/test/result" element={<TestResult />} />
              <Route path="/dashboard"   element={<Dashboard  />} />
              <Route path="/learn"       element={<LearnPage  />} />
              <Route path="/learn/:contentId" element={<LearnPage />} />
              <Route path="/progress"    element={<Progress   />} />
            </Route>
          </Route>

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}