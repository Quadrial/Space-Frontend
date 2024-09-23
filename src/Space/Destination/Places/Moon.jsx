import React, { useState } from "react";

import data from "../../../data.json";

export const Moon = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleContent = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null); // Collapse if already expanded
    } else {
      setExpandedIndex(index); // Expand the selected destination
    }
  };

  return (
    <>
      <section className="container">
        <section className="flex gap-5 justify-center items-center lg:justify-end">
          {data.destinations.map((destination, index) => (
            <>
              <h2 className="text-white relative">
                <button
                  className="py-2 px-4"
                  key={index}
                  onClick={() => toggleContent(index)}
                >
                  {destination.name}
                </button>
              </h2>

              <div className="containe">
              {expandedIndex === index && (
                <section className="mt-10 left-0 fle items-cente">
                  <picture className="mt-10 order-1">
                    <source srcSet={destination.images.webp} type="image/webp" />
                    <img
                      src={destination.images.png}
                      alt=""
                      className="w-1/2 md:w-[30%] lg:w-[35%]"
                    />
                  </picture>
                  <p>{destination.description}</p>
                  <div>
                    <hr className="h-px border-0 bg-gray-300 w-[300px]" />
                  </div>
                  <div className="flex gap-10">
                    <p>
                      <strong>Distance:</strong> {destination.distance}
                    </p>
                    <p>
                      <strong>Travel Time:</strong> {destination.travel}
                    </p>
                  </div>
                </section>
              )}
              </div>
            </>
          ))}
        </section>
      </section>
    </>
  );
};
export default Moon;
