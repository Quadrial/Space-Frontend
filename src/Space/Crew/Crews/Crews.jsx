import React, { useState } from "react";

import data from "../../../data.json";

export const Crews = () => {
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
        <section className="flex gap-5">
          {data.crew.map((crews, index) => (
            <>
              <h2 className="text-white relative">
                <button
                  className="py-2 px-4"
                  key={index}
                  onClick={() => toggleContent(index)}
                >
                  {crews.name}
                </button>
              </h2>

              {expandedIndex === index && (
                <section className="mt-10 left-0 fle items-cente">
                  <picture className="mt-10">
                    {/* <source srcSet={destination.images.webp} type="image/webp" /> */}
                    <img
                      src={crews.images.png}
                      alt=""
                      className="w-1/2 md:w-[70%]"
                    />
                  </picture>
                  <p>{crews.role}</p>
                  <div>
                    <hr className="h-px border-0 bg-gray-300 w-[300px]" />
                  </div>
                  <div className="flex gap-10">
                    <p>
                      <strong>Distance:</strong> {crews.bio}
                    </p>


                    
                  </div>
                  <div>
                  <button type="button" className="w-3 h-3 rounded-full" aria-current="true"></button>
                  </div>
                </section>
              )}
            </>
          ))}
        </section>
      </section>
    </>
  );
};
export default Crews;
