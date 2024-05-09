import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";

const Footer: React.FC = () => {
  return (
    <div className="bg-black  py-20 mt-32">
      <div className="w-[85%] bg-[url('/images/map.png')] bg-no-repeat bg-top bg-contain  mx-auto my-8 ">
        <div
          className="flex flex-col items-start justify-between md:flex-row"
          id="footer-content-row"
        >
          <div className="flex flex-col gap-2">
            <a href="/" className="link">
              <StaticImage
                src="../../../static/images/footer_logo.png"
                alt="logo"
                layout="constrained"
                placeholder="blurred"
                width={120}
              />
            </a>
            <div className=" mt-4 place">
              <p className="text-white">Washington, DC</p>
            </div>

            <div className=" mt-4 place">
              <p className="text-white">Lagos, Nigeria</p>
            </div>
            <div className=" mt-4 col-md-12 col-lg-12">
              <h4 className="text-white">Follow Us</h4>
              <div className=" flex flex-row gap-4 items-start justify-start px-0 mt-4">
                <>
                  <a
                    href="https://web.facebook.com/Premblydotmind"
                    className="link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <StaticImage
                      src={"../../../static/images/facebook.svg"}
                      alt=""
                      layout="constrained"
                      placeholder="blurred"
                      width={30}
                      quality={100}
                    />
                  </a>
                  <a
                    href="https://twitter.com/prembly"
                    className="link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <StaticImage
                      src={"../../../static/images/twitter.svg"}
                      alt=""
                      layout="constrained"
                      placeholder="blurred"
                      width={30}
                      quality={100}
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/prembly/"
                    className="link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <StaticImage
                      src={"../../../static/images/linkedin.svg"}
                      alt=""
                      layout="constrained"
                      placeholder="blurred"
                      width={30}
                      quality={100}
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/premblyhq/"
                    className="link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <StaticImage
                      src={"../../../static/images/instagramfooter.svg"}
                      alt=""
                      layout="constrained"
                      placeholder="blurred"
                      width={30}
                      quality={100}
                    />
                  </a>
                </>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6 mt-8 md:mt-0">
            <h4 className="text-white">Products</h4>

            <a href="/identityPass" className="link">
              <p className="text-white text-base">Identitypass</p>
            </a>

            <a href="/IdentityRadar" className="text-white">
              <p className="text-white text-base">Identityradar</p>
            </a>
            <a href="/backgroundCheck" className="text-white">
              <p className="text-white text-base">Background Checks</p>
            </a>
            <a href="identityForm" className="text-white">
              <p className="text-white text-base">IdentityForms</p>
            </a>
          </div>

          <div className="flex flex-col gap-6 mt-8 md:mt-0">
            <h4 className="text-white">Industries</h4>

            <a href="/sector" className="text-white">
              <p className="text-white">Financial Sector</p>
            </a>

            <a href="/crypto" className="text-white">
              <p className="text-white">Cryptocurrency</p>
            </a>

            <a href="/management" className="text-white">
              <p className="text-white">HR Management</p>
            </a>

            <a href="/insurance" className="text-white">
              <p className="text-white">Insurance</p>
            </a>

            <a href="/mobilty" className="text-white">
              <p className="text-white">Mobility</p>
            </a>

            <a href="/tobacco" className="text-white">
              <p className="text-white">Tobacco & Alcohol</p>
            </a>

            <a href="/publicSector" className="text-white">
              <p className="text-white">Public Sector</p>
            </a>
          </div>

          <div className=" flex flex-col gap-6 mt-8 md:mt-0">
            <h4 className="text-white">Resources</h4>

            <a
              href="https://blog.prembly.com/"
              className="text-white"
              target="_blank"
              rel="noreferrer"
            >
              <p>Blog</p>
            </a>

            <a
              href="/press"
              className="text-white"
              target="_blank"
              rel="noreferrer"
            >
              <p>Press & Media</p>
            </a>

            <a
              href="/faqs"
              className="text-white"
              target="_blank"
              rel="noreferrer"
            >
              <p>FAQs</p>
            </a>

            <a
              href="/event"
              className="text-white"
              target="_blank"
              rel="noreferrer"
            >
              <p>Events</p>
            </a>
          </div>

          <div className="flex flex-col gap-6 mt-8 md:mt-0">
            <h4 className="text-white">Company</h4>

            <a href="/about" className="text-white">
              <p className="text-white">About Us</p>
            </a>

            <a href="/career" className="text-white">
              <p className="text-white">Careers</p>
            </a>

            <a href="/contact" className="text-white">
              <p className="text-white">Contact Us</p>
            </a>

            <a href="/meet" className="text-white">
              <p className="text-white">Meet The Team</p>
            </a>

            <a href="/compliance" className="text-white">
              <p className="text-white">Compliance Certificates</p>
            </a>
          </div>
        </div>

        <div className="mt-20 text-center">
          <div className="scanerQRCode">
            <div className="bg-white w-[fit-content] m-auto px-4 py-3 rounded">
              <StaticImage
                src={"../../../static/images/soc.png"}
                alt="world"
                className="worldQR"
                layout="constrained"
                placeholder="blurred"
                width={50}
              />
              <a
                href="/compliance"
                style={{ textDecoration: "none", cursor: "pointer" }}
              >
                <StaticImage
                  src={"../../../static/images/complianceQR.png"}
                  alt="complianceQRCode"
                  className="QRcode"
                  layout="constrained"
                  placeholder="blurred"
                  width={50}
                />
              </a>
            </div>
            <p className="pt-3 text-white">
              We are SOC 2 and NDPR compliant. Scan QR code to visit webpage
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4 items-center justify-center border-y border-[#E3F0EF69] py-6 mt-12 md:mt-16 md:flex-row">
          <div>
            <a href="/Policy" className="">
              <p className="text-white">Privacy Policy</p>
            </a>
          </div>

          <div className="col-md-2">
            <a href="/terms" className="">
              <p className="text-white">Terms Of Service</p>
            </a>
          </div>

          <div className="col-md-2">
            <a href="/dataProtection" className="">
              <p className="text-white">Data Protection Policy</p>
            </a>
          </div>

          <div className="col-md-3">
            <a className="link">
              <p className="d-flex align-items-center text-white">
                &#9400; Prembly. Inc. All Rights Reserved. 2024
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
