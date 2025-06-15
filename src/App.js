import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { Suspense } from "react";
import HomePage from "./components/HomePage/index";
import GlobalHeader from "./components//GlobalHeader/index";
import LoginPage from "./components/LoginPage/index";
import RegisterPage from "./components/Register/index";
const LazyComponent = React.lazy(() =>
  import("./components/DeveloperProfile/index")
);

const ComponentLoad = (CurrentPage) => {
  return (
    <>
      <GlobalHeader />
      <CurrentPage />
    </>
  );
};

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={ComponentLoad(HomePage)} />
          <Route path="/login" element={ComponentLoad(LoginPage)} />
          <Route path="/register" element={ComponentLoad(RegisterPage)} />
          <Route
            path="/developer/:id"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                {ComponentLoad(LazyComponent)}
              </Suspense>
            }
          />
          {/* Add more routes as needed */}
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
