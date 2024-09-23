import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import data from "../../data.json"; // Import the JSON data

export const Technology = () => {
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

  return (
    <section
      className={`relative bg-cover bg-no-repeat h-screen w-screen ${
        isMobile ? "bg-Tmobile" : isTablet ? "bg-Ttablet" : "bg-Tdesktop"
      }`}
    >
      <Header />
      <div className="flex justify-center md:justify-start gap-3 md:gap-6 lg:ml-[250px] md:ml-[55px] md:mt-5 mb-10 text-[18px] md:text-[32px] lg:text-[40px] font-light leading-5">
        <h1 className="text-slate-500">03</h1>
        <h1 className="text-white">SPACE LAUNCH 101</h1>
      </div>

      <section className="flex flex-col md:flex-col lg:flex-row">
        {(isMobile || isTablet) && (
          <img
            src={data.technology[currentHome].images.landscape}
            alt={data.technology[currentHome].name}
            className="w-full md:h-[350px] mb-5"
          />
        )}

        <section className="flex md:flex-row lg:flex-col gap-10 justify-center lg:ml-[250px] lg:mt-[100px]">
          {data.technology.map((tech, index) => (
            <button
              key={index}
              onClick={() => setCurrentHome(index)}
              className={`btn ${
                index === currentHome ? "bg-white text-black" : ""
              }`}
            >
              {tech.figure}
            </button>
          ))}
        </section>

        <section className="text-white flex flex-col lg:flex-row lg:gap-[270px] items-center">
          <div className="text-center lg:text-start mt-10 lg:mt-[100px] lg:ml-[150px]">
            <p className="text-slate-400">THE TERMINOLOGY ...</p>
            <h2 className="name w-[300px] md:w-[550px] lg:w-[550px]">
              {data.technology[currentHome].name}
            </h2>
            <p className="w-[300px] md:w-[550px] lg:w-[550px] md:text-[20px] lg:text-[20px] lg:leading-10">
              {data.technology[currentHome].description}
            </p>
          </div>

          {!isMobile && (
            <picture>
              <img
                src={data.technology[currentHome].images.portrait}
                alt={data.technology[currentHome].name}
                className="h-[600px] w-[1300px] hidden lg:block"
              />
            </picture>
          )}
        </section>
      </section>
    </section>
  );
};

export default Technology;
