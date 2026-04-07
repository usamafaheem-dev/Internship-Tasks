import React, { useState } from "react";

const ConceptUseState = () => {
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState(null);
  const [status, setStatus] = useState("typing");

  if (status === "success") {
    return <h1>Your Answer is true . you are pass</h1>;
  }
  // handle sumbit

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      await submitForm(answer);
      setStatus("success");
    } catch (error) {
      setStatus("typing");
      setError(error);
    }
  };

  const handleChange = (e) => {
    setAnswer(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col items-start gap-4">
        <h1>It is simple form</h1>
        <textarea
          value={answer}
          onChange={handleChange}
          disabled={status === "submitting"}
          className="bg-green-400 p-6"
        ></textarea>

        <button
          type="submit"
          className="bg-red-400 p-4"
          disabled={answer.length === 0 || status === "submitting"}
        >
          result check
        </button>

        {error !== null && (
          <>
            {" "}
            <p className="text-red-400">
              good guess but its is not true try again
            </p>
          </>
        )}
      </form>
    </div>
  );
};

export default ConceptUseState;

function submitForm(answer) {
  // Yeh asal mein server pe request nahi bhej raha
  // Sirf pretend kar raha hai ke network call ho rahi hai

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (answer.toLowerCase() === "lima") {
        resolve(); // Success
      } else {
        reject(new Error("Good guess but a wrong answer. Try again!"));
      }
    }, 500); // 1.5 seconds wait
  });
}
