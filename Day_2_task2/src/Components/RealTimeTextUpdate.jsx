    import React, { useState } from "react";

    const RealTimeTextUpdate = () => {
    const [text, setText] = useState("");
    return (
        <div className="md:w-80 md:h-80  py-4 md:py-0  inset-ring inset-1  inset-ring-white rounded-lg  flex justify-center items-center">
        <section className="flex flex-col gap-3 max-w-50">
            <h1 className="font-medium text-2xl text-white text-center ">Text Update</h1>
            <input
            type="text"
            className="bg-white rounded p-2 outline-green-400 border-none placeholder:text-red-400 placeholder:font-bold"
            placeholder="Enter any text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            />

            <p className="font-bold text-white max-w-50 h-12  overflow-y-auto break-normal custom-scroll">{text}</p>
        </section>
        </div>
    );
    };

    export default RealTimeTextUpdate;
