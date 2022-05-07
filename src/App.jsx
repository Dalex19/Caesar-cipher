import { Home } from "./components/Home";
import { Application } from "./components/Application";

import {BrowserRouter, Routes, Route } from 'react-router-dom'
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="app" element={<Application />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App
