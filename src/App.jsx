import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Introduction from "./pages/Introduction";
import HtmlDocumentStructure from "./pages/HtmlDocumentStructure";
import HtmlTagsAndElements from "./pages/HtmlTagsAndElements";

export default function App() {
  return (
    <Routes>
      {/* Home page - bina sidebar ke */}
      <Route path="/" element={<Home />} />

      {/* Notes section - Layout ke andar sab pages */}
      <Route path="/notes" element={<Layout />}>
        <Route index element={<Introduction />} />
        <Route path="introduction" element={<Introduction />} />
        <Route path="html-basic-structure" element={<HtmlDocumentStructure />} />
        <Route path="intro-to-html-tags-and-elements" element={<HtmlTagsAndElements />} />
        {/* aage aur pages yahan add karenge:
        <Route path="installing-git" element={<InstallingGit />} /> */}
      </Route>
    </Routes>
  );
}