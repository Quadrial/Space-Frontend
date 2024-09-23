import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const location = useLocation();

  // Check if a route is active
  const isActive = (path) => location.pathname === path;

  return (
    <div className="flex items-center justify-between py-0 md:py-0 lg:py-8 ml-5 md:ml-[50px] lg:ml-[50px]">
      <Link to="/">
        <img
          src="images/shared/logo.svg"
          alt="logo"
          className="w-1/2 md:w-[90%] lg:w-full"
        />
      </Link>
      <div className="w-1 h-20 text-slate-600"></div>

      <nav>
        <section className="MOBILE-MENU flex md:hidden lg:hidden p-4">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21">
                <g fill="#D0D6F9" fill-rule="evenodd">
                  <path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z" />
                  <path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z" />
                </g>
              </svg>
            </div>
            <main className="text-white text-[18px] flex flex-col justify-between min-h-[250px]">
              <li className="flex gap-5 my-8 uppercase">
                <p className="font-bold">00</p>
                <Link to="/" onClick={() => setIsNavOpen(false)}>
                   HOME
                </Link>
              </li>
              <li className="flex gap-5 my-8 uppercase">
              <p className="font-bold">01</p>
                <Link to="/destination" onClick={() => setIsNavOpen(false)}>
                  DESTINATION
                </Link>
              </li>
              <li className="flex gap-5 my-8 uppercase">
              <p className="font-bold">02</p>
                <Link to="/crew" onClick={() => setIsNavOpen(false)}>
                  CREW
                </Link>
              </li>
              <li className="flex gap-5 my-8 uppercase">
              <p className="font-bold">03</p>
                <Link to="/technology" onClick={() => setIsNavOpen(false)}>
                  TECHNOLOGY
                </Link>
              </li>
            </main>
          </div>
        </section>

        <figure className="flex md:mb-5">
          <hr className="hidden md:hidden lg:block z-10 ml-20 lg:w-[700px] h-1 my-[50px] bg-gray-100 border-0 rounded dark:bg-gray-700"></hr>

          <section className=" hidden md:block lg:block bg-slate-600 h-auto lg:w-[55vw] md:w-[70vw] lg:p-10 md:p-5 text-white font-[700] lg:rounded-tl-[10px] lg:rounded-bl-[10px]">
            <main className="DESKTOP-MENU hidden lg:gap-[80px] md:gap-[15px] space-x-8 lg:flex md:flex lg:ml-[90px]">
              <div
                className={`hover:underline lg:hover:underline-offset-[45px] md:underline-offset-[25px] hover:decoration-2 ${
                  isActive("/")
                    ? "underline lg:underline-offset-[45px] md:underline-offset-[25px] decoration-2"
                    : ""
                }`}
              >
                <Link to="/">00 HOME</Link>
              </div>
              <div
                className={`hover:underline lg:hover:underline-offset-[45px] md:underline-offset-[25px] hover:decoration-2 ${
                  isActive("/destination")
                    ? "underline lg:underline-offset-[45px] md:underline-offset-[25px] decoration-2"
                    : ""
                }`}
              >
                <Link to="/destination">01 DESTINATION</Link>
              </div>
              <div
                className={`hover:underline lg:hover:underline-offset-[45px] md:underline-offset-[25px] hover:decoration-2 ${
                  isActive("/crew")
                    ? "underline lg:underline-offset-[45px] md:underline-offset-[25px] decoration-2"
                    : ""
                }`}
              >
                <Link to="/crew">02 CREW</Link>
              </div>
              <div
                className={`hover:underline lg:hover:underline-offset-[45px] md:underline-offset-[25px] hover:decoration-2 ${
                  isActive("/technology")
                    ? "underline lg:underline-offset-[45px] md:underline-offset-[25px] decoration-2"
                    : ""
                }`}
              >
                <Link to="/technology">03 TECHNOLOGY</Link>
              </div>
            </main>
          </section>
        </figure>
      </nav>
      <style>{`
        .hideMenuNav {
          display: none;
        }
        .showMenuNav {
          display: block;
          position: absolute;
          width: 70%;
          height: 100vh;
          top: 0;
          right: 0;
          background: #272727;
          z-index: 10;
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          align-items: center;
        }
      `}</style>
    </div>
  );
}
