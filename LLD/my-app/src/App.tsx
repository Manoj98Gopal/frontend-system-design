import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import MemePosts from "./Pages/MemePosts";
import AboutUs from "./Pages/AboutUs";
import Profile from "./Pages/Profile";
import Login from "./Pages/Login";
import Protected from "./components/Protected";
import { useState } from "react";
import type { Languages } from "./utils/DataConfig";
import Accordion from "./Pages/Accordion";
import NestedComment from "./Pages/NestedComment";
import ImageSlider from "./Pages/ImageSlider";
import Pagination from "./Pages/Pagination";
import YoutubeLiveStream from "./Pages/YoutubeLiveStream";
import SearchUi from "./Pages/SearchUi";

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
          <Route path="/login" element={<Login />} />
          <Route path="/accordion" element={<Accordion />} />
          <Route path="/nestedComment" element={<NestedComment />} />
          <Route path="/imageSlider" element={<ImageSlider />} />
          <Route path="/pagination" element={<Pagination />} />
          <Route path="/liveStream" element={<YoutubeLiveStream />} />
          <Route path="/search" element={<SearchUi />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
