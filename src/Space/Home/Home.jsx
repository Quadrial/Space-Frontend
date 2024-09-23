import React, { useState, useEffect } from "react";
import Header from "../Header/Header";

export const Home = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isTablet, setIsTablet] = useState(
    window.innerWidth >= 768 && window.innerWidth < 1024
  );
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
      setIsDesktop(window.innerWidth >= 1024);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      className={`relative bg-cover bg-no-repeat h-screen w-screen ${
        isMobile ? "bg-Hmobile" : isTablet ? "bg-Htablet" : "bg-Hdesktop"
      }`}
    >
      <Header /> {/* Header at the top */}
      <figure className="text-white flex flex-col md:flex-col lg:flex-row text-center lg:text-start items-center lg:items-start gap-[100px] md:gap-[150px] lg:gap-0 lg:p-[150px] lg:space-y-[60px] lg:mr-[60px] lg:justify-between">
        <section className="mt-10 md:mt-10 lg:mt-0 w-[330px] md:w-[400px] lg:w-[500px]">
          <h2 className="text-[18px] md:text-[20px] lg:text-[25px]">
            SO, YOU WANT TO TRAVEL TO
          </h2>
          <h1 className="mt-5 md:mt-10 lg:mt-0 text-[70px] lg:text-[150px] font-[400]">
            SPACE
          </h1>
          <div className="mt-10 leading-7">
            <p className="lg:text-[22px] text-[20px] ">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
        </section>

        <section className="flex justify-center items-center cursor-pointer">
          <div className="circle-container">
            <div className="circle-border"></div>
            <div className="circle">
              <p className="circle-text">EXPLORE</p>
            </div>
          </div>
        </section>
      </figure>
    </section>
  );
};
export default Home;
