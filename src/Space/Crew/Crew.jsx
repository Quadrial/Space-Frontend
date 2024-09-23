import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import data from "../../data.json"; // Import the JSON data

export const Crew = () => {
  const [currentHome, setCurrentHome] = useState(0);

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

  const crews = data.crew; // Use the crew data from JSON

  return (
    <section
      className={`bg-cover bg-no-repeat h-screen w-screen ${
        isMobile ? "bg-Cmobile" : isTablet ? "bg-Ctablet" : "bg-Cdesktop"
      }`}
    >
      <Header />

      <section className="flex flex-col lg:flex-row gap-10 items-center text-center lg:items-start">
        <main className="lg:ml-[300px] flex flex-col lg:space-y-[200px] items-center md:items-start lg:items-start">
          <div className="md:-ml-[150px] md:mt-10 lg:mt-0 lg:ml-0 flex gap-3 md:gap-6 lg:gap-8 text-[18px] md:text-[32px] lg:text-[40px] font-[300] leading-5">
            <h1 className="text-slate-500">02</h1>
            <h2 className="text-white">MEET YOUR CREW</h2>
          </div>

          {/* Mobile and Tablet View */}
          <section className="md:hidden lg:hidden mt-5 flex flex-col items-center">
            <picture className="md:hidden lg:hidden flex justify-center">
              <img
                src={crews[currentHome].images.webp}
                alt={crews[currentHome].name}
                className="w-[45%]"
              />
            </picture>
            <hr className="md:hidden lg:hidden flex h-px border-0 bg-gray-500 w-[300px] mb-5" />

            <section className="md:hidden lg:hidden flex gap-5">
              {crews.map((crew, index) => (
                <div key={index}>
                  <button
                    onClick={() => setCurrentHome(index)}
                    className={`btc ${
                      index === currentHome ? "bg-white text-black" : ""
                    }`}
                  >
                    {crew.figure}
                  </button>
                </div>
              ))}
            </section>
          </section>

          {/* Content Section */}
          <section className="gap-[50px] lg:gap-0 w-[300px] md:w-[600px] lg:w-0 mt-2 md:mt-10 lg:mt-10 flex flex-col items-center justify-center lg:text-start lg:items-start">
            <div className="flex flex-col lg:w-[600px] gap-[10px]">
              <h1 className="text-slate-400 lg:text-[32px] md:text-[25px] text-[22px]">
                {crews[currentHome].role}
              </h1>
              <h2 className="name text-white lg:w-[800px] mt-2 lg:-mt-5">
                {crews[currentHome].name}
              </h2>
              <h3 className="lg:-[450px] text-slate-400 lg:text-[22px] md:text-[20px] text-[16px] leading-8 mt-2">
                {crews[currentHome].bio}
              </h3>
            </div>

            {/* Buttons for non-mobile views */}
            <section className="hidden md:flex lg:flex md:-mt-4 lg:mt-40 gap-5">
              {crews.map((crew, index) => (
                <div key={index}>
                  <button
                    onClick={() => setCurrentHome(index)}
                    className={`btc ${
                      index === currentHome ? "bg-white text-black" : ""
                    }`}
                  >
                    {crew.figure}
                  </button>
                </div>
              ))}
            </section>
          </section>
        </main>

        {/* Crew Image for Desktop and Tablet */}
        <picture className="hidden md:block lg:block absolute bottom-0 lg:absolute lg:bottom-0 ml-[150px] lg:ml-[50vw]">
          <img
            src={crews[currentHome].images.webp}
            alt={crews[currentHome].name}
            className="w-[65%] md:w-[60%] lg:w-full"
          />
        </picture>
      </section>
    </section>
  );
};

export default Crew;
