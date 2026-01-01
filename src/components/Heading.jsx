import React from "react";

const Heading = ({ title }) => {
  return (
    <section className="w-full h-24 my-15">
      <div className="bg-dark1 flex justify-center items-center h-24 md:h-32 lg:h-40">
        <h2 className="text-light1 text-2xl md:text-3xl lg:text-4xl">
          {title}
        </h2>
      </div>
    </section>
  );
};

export default Heading;
