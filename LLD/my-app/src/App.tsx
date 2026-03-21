import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import MemePosts from "./Pages/MemePosts";
import AboutUs from "./Pages/AboutUs";
import Profile from "./Pages/Profile";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import Protected from "./components/Protected";
import { useState } from "react";
import type { Languages } from "./utils/DataConfig";
import Accordion from "./Pages/Accordion";

function App() {

    const [language, setLanguage] = useState<keyof Languages>("en")
  


  return (
    <BrowserRouter>
      <div className="">
        <Header  setLanguage={setLanguage} language={language}/>
        <Routes>
          <Route path="/" element={<MemePosts />} />
          <Route path="/about" element={<AboutUs language={language}/>} />
          <Route element={<Protected />}>
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/accordion" element={<Accordion />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
