import React from "react";

const SideBar = () => {
  return (
    <div className="md:w-[25%] w-full h-screen bg-gray-200 p-5  flex flex-col items-center justify-center gap-3 md:gap-2 md:border-r-2 md:border-gray-300">
      <h1 className="text-3xl md:text-5xl font-bold">
        Share Your <i className="text-blue-500">Article</i> to the World
      </h1>

      <p className="">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
        molestiae libero fuga sit, incidunt maxime suscipit aliquid nulla ullam
        velit sequi reiciendis sed illum atque. Maxime reprehenderit aperiam ex
        dignissimos?
      </p>

      <div className="flex flex-col items-center justify-center">
        <input
          type="email"
          className="border border-white focus:outline-none w-62 md:w-87.5 p-2 m-3 placeholder:font-black"
          placeholder="Enter Your Email "
        />
        <button className="w-62 md:w-87.5 bg-black text-white py-2 font-bold  hover:bg-blue-500  cursor-pointer">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default SideBar;
