import packageInfo  from "../../package.json";

const Footer = () => {
  return (
    <footer className="relative bg-blueGray-200 pt-8 pb-6">
      <div
        className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
        style={{ transform: "translateZ(0)" }}
      >
        <svg
          className="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon
            className="text-blueGray-200 fill-current"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-center lg:text-left">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl font-semibold">Follow me!</h4>
            <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
              Website version <b>{packageInfo.version}</b>
            </h5>
            <div className="mt-6 lg:mb-0 mb-6">
              <a href="https://www.youtube.com/c/petun" target="_blank">
                <button
                  className="bg-white text-red-500 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <i className="fab fa-youtube"></i>
                </button>
              </a>
              <a href="https://www.facebook.com/petun.2502" target="_blank">
                <button
                  className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <i className="fab fa-facebook-square"></i>
                </button>
              </a>
              <a href="https://www.github.com/ntuan2502" target="_blank">
                <button
                  className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <i className="fab fa-github"></i>
                </button>
              </a>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                  Useful Links
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="https://www.youtube.com/c/petun"
                      target="_blank"
                    >
                      Youtube
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="https://www.facebook.com/petun.2502"
                      target="_blank"
                    >
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="https://www.github.com/ntuan2502"
                      target="_blank"
                    >
                      Github
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                  Other Resources
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="#"
                    >
                      MIT License
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="#"
                    >
                      Terms & Conditions
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="#"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="#"
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-blueGray-300" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-blueGray-500 font-semibold py-1">
              Copyright © {new Date().getFullYear()} by Pé Tún.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
