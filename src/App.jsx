import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Introduction from "./pages/Introduction";
import HtmlDocumentStructure from "./pages/HtmlDocumentStructure";
import HtmlTagsAndElements from "./pages/HtmlTagsAndElements";
import CreateFirstPage from "./pages/CreateFirstPage";
import HtmlHeadings from "./pages/HtmlHeadings";
import HtmlParagraphsAndFormatting from "./pages/HtmlParagraphsAndFormatting";
import HtmlBlockVsInline from "./pages/HtmlBlockVsInline";
import HtmlLists from "./pages/HtmlLists";
import HtmlLinks from "./pages/HtmlLinks";
import HtmlImages from "./pages/HtmlImages";

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
        <Route path="create-first-page" element={<CreateFirstPage />} />
        <Route path="headings-in-html" element={<HtmlHeadings />} />
        <Route path="paragraph-and-other-formattings" element={<HtmlParagraphsAndFormatting />} />
        <Route path="block-vs-inline" element={<HtmlBlockVsInline />} />
        <Route path="html-lists" element={<HtmlLists />} />
        <Route path="hyperlinks-and-anchor-tag" element={<HtmlLinks />} />
        <Route path="images-in-html" element={<HtmlImages />} />
        {/* aage aur pages yahan add karenge:
        <Route path="installing-git" element={<InstallingGit />} /> */}
      </Route>
    </Routes>
  );
}