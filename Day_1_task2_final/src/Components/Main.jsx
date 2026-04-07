import React from "react";
import logo from "../assets/logo.webp";

const Main = () => {
  return (
    <div className="md:w-[75%] w-full bg-gray-200 flex justify-center flex-col md:flex-row items-center p-5 ">
      {/* for image */}
      <div className="md:w-[40%]">
        <img src={logo} className="w-96" alt="" />
      </div>
      {/* for other detail */}
      <div className="md:w-[60%] flex  flex-col items-center gap-5">
        <h1 className="text-3xl md:text-5xl font-bold">
          Provide <i className="text-blue-500">Rectangle</i> Services
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
          recusandae asperiores ex maxime? Fugiat dolorum magni hic reiciendis
          ea sint totam officiis ipsum qui laudantium illo ducimus vero ex
          recusandae sed ipsam unde, et non minima soluta ut, laboriosam
          consequatur. Necessitatibus ut quas rerum cum. Provident temporibus
          incidunt mollitia ducimus.
        </p>
        {/* buttons */}
        <div className="flex  gap-2">
          <button className="w-32  md:w-40  bg-black text-white py-3 font-bold rounded-lg hover:bg-blue-500 cursor-pointer">
            Contact Us
          </button>
          <button className="w-32  md:w-40 bg-black text-white py-3 font-bold rounded-lg hover:bg-blue-500 cursor-pointer">
            Any Query
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
