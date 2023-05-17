import React, { useState } from "react";
import Navigation from "./Navigation";
import About from "../pages/About";
import Portfolio from "../pages/Portfolio";
import Contact from "../pages/Contact";
import Resume from "../pages/Resume";

export default function Header() {
  const [currentPage, setCurrentPage] = useState("About");

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    return <Resume />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div id="body">
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <p className="navbar-brand" id="myName">
            Luba Mintsys
          </p>

          <Navigation
            currentPage={currentPage}
            handlePageChange={handlePageChange}
          />
        </div>
      </nav>
      {renderPage()}
    </div>
  );
}
