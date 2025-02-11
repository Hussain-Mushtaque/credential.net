import { useState } from "react";
import "./App.css"; // Import your stylesheet
import CredentialDetails from "./CredentialDetails";

function App() {
  // State to control whether the mobile menu is open
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleHamburgerClick = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="container">
      {/* Header */}
      <header className="header">
      <div className="left-section">
  <a
    href="https://www.accredible.com/?utm_source=credential&utm_medium=referral&utm_campaign=navbar_logo_link&__hstc=36082943.dfacaf2062d48da73b863c4ea4f6db74.1739207327830.1739207327830.1739285844282.2&__hssc=36082943.1.1739285844282&__hsfp=3739399495&_gl=1*1wg87u4*_gcl_au*MTY2MjE0MTc2Ni4xNzM5MjA3MzI3*_ga*MTA2NzMwMDE2Ni4xNzM5MjA3MzI3*_ga_FSDJZHHBH0*MTczOTI4NTg0My4zLjEuMTczOTI4ODgzMy41My4wLjE3MzY4MjUxMjU."
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      src="/accredible_credential_net_logo.svg"
      alt="Accredible Logo"
      className="logo"
    />
  </a>
</div>


        <div className="center-section">
          <button className="link-button">Suggested Credentials</button>
        </div>

        <div
          // Add "mobile-menu-open" when isMenuOpen is true
          className={`right-section ${isMenuOpen ? "mobile-menu-open" : ""}`}
        >
          {/* Hamburger icon (only visible on mobile) */}
          <div className="hamburger" onClick={handleHamburgerClick}>
            ☰
          </div>

          {/* Sign-in button (visible on desktop by default, on mobile only if isMenuOpen) */}
          <div className="user-icon">👤</div>
          <a
          href="https://v2.accounts.accredible.com/login?app=recipient-portal&origin=https:%2F%2Fwww.credential.net%2Fe1265307-ba25-4772-ba68-1b49e9430706"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="sign-in-button">Sign in</button>
        </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="main">
        <div className="certificate-container">
          <img
            className="certificate-image"
            src="/image.png"
            alt="Certificate"
          />
        </div>
      </main>
      <CredentialDetails />
    </div>
  );
}

export default App;
