import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const Taks2 = () => {
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("typing");
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("message sending");
    await toast.promise(sendMessage(message), {
      loading: "sending...",
    });
    await sendMessage(message);

    setStatus("message send");
    toast.success("message send");
  };

  const handleChange = (e) => {
    setMessage(e.target.value);
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="m-4 border border-black flex flex-col items-center w-100  gap-4 h-100 justify-center"
      >
        <input
          type="text"
          placeholder="Enter any message"
          onChange={handleChange}
          value={message}
          className="bg-black placeholder:text-white p-4 text-white font-medium rounded"
        />

        <button
          disabled={message.length === 0 || status === "message sending"}
          className="outline-2 outline-black text-black transition duration-200 hover:bg-black hover:text-white px-3 py-3 hover:scale-110 hover:transition  rounded font-medium cursor-pointer"
        >
          Send Message
        </button>

        <span className="text-indigo-500 font-bold text-2xl">{status}</span>
        <Toaster position="top-right" reverseOrder={false} />
      </form>
    </div>
  );
};

export default Taks2;

function sendMessage(message) {
  return new Promise((resolve) => {
    setTimeout(resolve, 1000); // 2 seconds wait
  });
}
