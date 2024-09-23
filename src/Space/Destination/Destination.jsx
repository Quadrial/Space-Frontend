import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import data from "../../data.json"; // Import the JSON data

export const Destination = () => {
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

  const destinations = data.destinations; // Use the destinations data from JSON

  return (
    <section
      className={`relative bg-cover bg-no-repeat h-screen w-screen ${
        isMobile ? "bg-Dmobile" : isTablet ? "bg-Dtablet" : "bg-Ddesktop"
      }`}
    >
      <Header />

      <main className="flex flex-col items-center lg:items-start lg:ml-[150px]">
        <section className="-mt-2 md:mt-0">
          <div className="flex gap-3 md:gap-6 lg:gap-8 text-[18px] md:text-[32px] lg:text-[32px] font-[300] md:mr-[380px] ">
            <h1 className="text-slate-500">01</h1>
            <h2 className="text-white">PICK YOUR DESTINATION</h2>
          </div>
        </section>

        <figure className="flex flex-col text-center lg:text-start items-center lg:items-start lg:flex-row mt-5 lg:mt-16 gap-5 md:gap-10 lg:gap-[500px]">
          <picture>
            <img
              src={destinations[currentHome].images.webp}
              alt={destinations[currentHome].name}
              className="ml-[100px] md:ml-[150px] w-[45%] md:w-[45%] lg:w-full"
            />
          </picture>

          <main className="flex flex-col items-center lg:items-start">
            {/* Destination Navigation */}
            <section className="flex gap-6 md:gap-16 lg:gap-16">
              {destinations.map((dest, index) => (
                <button
                  key={index} // Add a unique key when mapping
                  onClick={() => setCurrentHome(index)} // Set the active destination
                  className={`btd ${
                    index === currentHome
                      ? "underline underline-offset-[20px] decoration-4"
                      : "no-underline"
                  }`}
                >
                  {dest.name}
                </button>
              ))}
            </section>

            {/* Destination Details */}
            <section className="flex flex-col items-center lg:items-start mt-5 lg:mt-10 text-white w-[300px] md:w-[500px] lg:w-[500px]">
              <h1 className="name ">{destinations[currentHome].name}</h1>
              <h2 className="mt-2 md:mt-5 lg:mt-10 text-[18px] leading-8">
                {destinations[currentHome].description}
              </h2>
              <hr className="h-px border-0 bg-gray-300 w-[300px] md:w-[500px] lg:w-[500px] mt-5 lg:mt-10 lg:mb-10" />

              {/* Distance and Travel Time */}
              <div className="mt-4 md:mt-5 lg:mt-10 flex flex-col md:flex-row lg:flex-row gap-2 md:gap-10 lg:gap-10">
                <div>
                  <p>AVG. DISTANCE</p>
                  <h2 className="text-[25px] md:text-[30px] lg:text-[40px]">
                    {destinations[currentHome].distance}
                  </h2>
                </div>

                <div>
                  <p>EST. TIME TRAVEL</p>
                  <h2 className="text-[25px] md:text-[30px] lg:text-[40px]">
                    {destinations[currentHome].travel}
                  </h2>
                </div>
              </div>
            </section>
          </main>
        </figure>
      </main>
    </section>
  );
};

export default Destination;
