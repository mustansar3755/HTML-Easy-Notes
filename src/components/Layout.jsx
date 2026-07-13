// src/components/Layout.jsx
import { Outlet } from "react-router-dom";
import { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import TableOfContents from "./TableOfContents";

export default function Layout() {
  const [toc, setToc] = useState([]);

  return (
    <div className="min-h-screen bg-bg">
      <Navbar />
      <div className="grid grid-cols-1 lg:grid-cols-[20%_60%_20%]">
        <Sidebar />
        <main className="px-6 py-8 lg:px-12 min-w-0">
          <Outlet context={{ setToc }} />
        </main>
        <TableOfContents items={toc} />
      </div>
    </div>
  );
}