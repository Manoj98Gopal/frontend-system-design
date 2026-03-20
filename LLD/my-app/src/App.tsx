import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import MemePosts from "./Pages/MemePosts";
import AboutUs from "./Pages/AboutUs";
import Profile from "./Pages/Profile";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import Protected from "./components/Protected";

function App() {
  return (
    <BrowserRouter>
      <div className="">
        <Header />
        <Routes>
          <Route path="/" element={<MemePosts />} />
          <Route path="/about" element={<AboutUs />} />
          <Route element={<Protected />}>
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
