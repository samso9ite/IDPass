import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { InlineWidget } from "react-calendly";

import Herosection from "../components/Herosection";
import Partner from "../components/Partner";
import Solutions from "../components/Solutions";
import RadarRules from "../components/RadarRules";
import CustomerSatisfaction from "../components/CustomerSatisfaction";
import FraudSimplification from "../components/FraudSimplication";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

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
    let msg =
      "%c 💚 We always want to improve the IdentityRadar App. Let us know if you find any issues 💚 ";
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
    console.log(msg, styles);
  };

  welcomeMsg();
  return (
    <>
      <header>
        <Herosection
          isOpen={isOpenRequestDemo}
          handleToggleRequest={handleToggleRequest}
          isOpenSidenav={isOpenSidenav}
          handleToggleMenu={handleToggleMenu}
        />
      </header>
      <main>
        <Partner />
        <Solutions handleToggleRequest={handleToggleRequest} />
        <RadarRules />
        <CustomerSatisfaction />
        <FraudSimplification />
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
    <title>IdentityRadar</title>
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="../../static/apple-touch-icon.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="../../static/favicon-32x32.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="../../static/favicon-16x16.png"
    />
  </>
);
