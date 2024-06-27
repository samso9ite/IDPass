import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { InlineWidget } from "react-calendly";

import Herosection from "../components/Herosection";
import Partner from "../components/Partner";
import Solutions from "../components/Solutions";
import RadarRules from "../components/IntegrationProcess";
import CustomerSatisfaction from "../components/Certification";
import FraudSimplification from "../components/FraudSimplication";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import IntegrationProcess from "../components/IntegrationProcess";
import Certification from "../components/Certification";
import Testimonials from "../components/Testimonials";
import LevelUp from "../components/LevelUp";

const IndexPage: React.FC<PageProps> = () => {
  const [isOpenRequestDemo, setIsOpenRequestDemo] = React.useState(false);
  const [isOpenSidenav, setIsOpenSidenav] = React.useState<boolean>(false);

  const handleToggleRequest = () => {
    setIsOpenRequestDemo(!isOpenRequestDemo);
    setIsOpenSidenav(false);
  };

  const handleToggleMenu = () => {
    setIsOpenSidenav(!isOpenSidenav);
  };

  const welcomeMsg = () => {
    let msg = "%c 💚 Welcome to IdentityPass By Prembly. 💚 ";
    let styles = [
      "font-size: 12px",
      "color: #fffce1",
      "font-family: monospace",
      "background: #0e100f",
      "display: inline-block",
      "padding: 1rem 3rem",
      "border: 1px solid #fffce1",
      "border-radius: 4px;",
    ].join(";");
  };

  welcomeMsg();
  return (
    <>
      <header>
        <Herosection
          handleToggleRequest={handleToggleRequest}
          isOpenSidenav={isOpenSidenav}
          handleToggleMenu={handleToggleMenu}
        />
      </header>
      <main>
        <Partner />
        <Solutions handleToggleRequest={handleToggleRequest} />
        <IntegrationProcess />
        <Certification />
        <Testimonials />
        <LevelUp />
        {/* <FraudSimplification /> */}
        <FAQ handleToggleRequest={handleToggleRequest} />
      </main>
      <footer>
        <Footer />
      </footer>
      {isOpenRequestDemo && (
        <>
          <button
            className=" border border-black text-black text-sm px-[14px] py-2"
            style={{
              zIndex: 9999999,
              position: "fixed",
              top: 20,
              right: 10,
              borderRadius: "50px",
            }}
            onClick={handleToggleRequest}
          >
            X
          </button>
          <InlineWidget
            url="https://calendly.com/teamradar-gox4"
            pageSettings={{
              backgroundColor: "red",
              hideEventTypeDetails: false,
              hideLandingPageDetails: false,
            }}
          />
        </>
      )}
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <>
    <title>IdentityPass</title>
  </>
);
