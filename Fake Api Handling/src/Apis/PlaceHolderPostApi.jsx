import axios from "axios";
import React, { useState } from "react";
import Loader from "../components/Loader";

const PlaceHolderPostApi = () => {
  const [input, setInput] = useState({
    title: "",
    body: "",
    userId: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const fetchData = async (e) => {
    e.preventDefault();

    setError(null);
    setSuccess(false);
    setLoading(true);
    try {
      const res = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        input,
      );

      console.log("data cla gia", res.data);
      setSuccess(true);
      setInput({ title: "", body: "", userId: "" });
      alert("Form submit ho gaya. Data chala gaya.");
    } catch (error) {
      setError(error.message);
      console.log("error aa rha ha " + error.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading)
    return (
      <div className="h-screen flex justify-center items-center">
        <Loader />
      </div>
    );
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-emerald-50 p-6">
      <div className="mx-auto max-w-2xl">
        <div className="mb-8 text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-emerald-700">
            JsonPlaceHolder Post
          </p>
          <h1 className="mt-2 text-3xl font-bold text-slate-900">
            Create a New Post
          </h1>
          <p className="mt-2 text-slate-600">
            Quick demo form with a clean UI and validation.
          </p>
        </div>

        <form
          className="space-y-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-xl"
          onSubmit={fetchData}
        >
          <div>
            <label className="text-sm font-semibold text-slate-700">
              Title
            </label>
            <input
              type="text"
              placeholder="Enter title here"
              value={input.title}
              onChange={(e) => setInput({ ...input, title: e.target.value })}
              required
              className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-emerald-400 focus:bg-white focus:ring-2 focus:ring-emerald-200"
            />
          </div>

          <div>
            <label className="text-sm font-semibold text-slate-700">
              Detail
            </label>
            <textarea
              placeholder="Enter detail here"
              value={input.body}
              onChange={(e) => setInput({ ...input, body: e.target.value })}
              required
              rows={4}
              className="mt-2 w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-emerald-400 focus:bg-white focus:ring-2 focus:ring-emerald-200"
            />
          </div>

          <div>
            <label className="text-sm font-semibold text-slate-700">
              User ID
            </label>
            <input
              type="number"
              placeholder="Enter user ID here"
              value={input.userId}
              onChange={(e) => setInput({ ...input, userId: e.target.value })}
              required
              min={1}
              className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-emerald-400 focus:bg-white focus:ring-2 focus:ring-emerald-200"
            />
          </div>

          {success && (
            <div className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
              Form submit ho gaya. Data chala gaya.
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-200 transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PlaceHolderPostApi;
