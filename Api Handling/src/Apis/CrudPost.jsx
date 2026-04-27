import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

// get api

const API_ROOT_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api";
const CRUD_BASE_URL = `${API_ROOT_URL}/items`;

const refreshPage = () => {
  window.location.reload();
};

const sectionCardClass =
  "mx-auto my-4 w-full max-w-4xl rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-5 shadow-sm";
const headingClass = "mb-4 text-xl font-bold text-slate-800";
const formRowClass = "flex flex-wrap items-center gap-3";
const inputClass =
  "min-w-[170px] flex-1 rounded-xl border border-slate-300 bg-white px-3 py-2 text-slate-800 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200";
const buttonClass =
  "rounded-xl bg-emerald-600 px-4 py-2 font-medium text-white transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:bg-emerald-300";
const noteClass = "mt-3 text-sm text-slate-600";

export const CrudGet = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        setError("");
        const response = await axios.get(CRUD_BASE_URL);
        // const items = Array.isArray(response.data?.data) ? response.data.data : [];
        setData(response.data.data);
        console.log("data mil gia");
      } catch (error) {
        setError(error.message);
        console.log("error aa rha ha " + error.message);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  if (loading)
    return (
      <section className={sectionCardClass}>
        <h2 className={headingClass}>All Items</h2>
        <p className="text-slate-600">Loading data...</p>
      </section>
    );
  if (error)
    return (
      <section className={sectionCardClass}>
        <h2 className={headingClass}>All Items</h2>
        <p className="rounded-lg bg-red-50 p-3 text-red-700">Error: {error}</p>
      </section>
    );
  if (data.length === 0)
    return (
      <section className={sectionCardClass}>
        <h2 className={headingClass}>All Items</h2>
        <p className="text-slate-600">No items found. Pehle item add karo.</p>
      </section>
    );

  return (
    <section className={sectionCardClass}>
      <h2 className={headingClass}>All Items</h2>
      <ul className="space-y-2">
        {data.map((item, index) => (
          <li
            key={`${item.id ?? item._id ?? item.name}-${index}`}
            className="rounded-xl border border-slate-200 bg-white p-3"
          >
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-md bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-700">
                ID: {item.id ?? item._id ?? "N/A"}
              </span>
              <span className="font-semibold text-slate-800">{item.name}</span>
              <span className="text-slate-600">Rs {item.price}</span>
              <span className="rounded-md bg-emerald-50 px-2 py-1 text-xs font-medium text-emerald-700">
                {item.category}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
// single product
export const CrudGetSinglePro = () => {
  const [input, setInput] = useState("");
  const [data, setData] = useState(null);
  const [loading, setIsloadin] = useState(false);
  const [error, setError] = useState("");

  const handleGetSingleProduct = async (e) => {
    e.preventDefault();
    setIsloadin(true);
    setError("");

    try {
      const response = await axios.get(`${CRUD_BASE_URL}/${input}`);
      setData(response.data.data);
      console.log("data mil gia single proucts", response.data.data);
    } catch (error) {
      setData(null);
      setError("ID not found ya server issue. Dobara check karo.");
      console.log("error aa rha ", error.message);
    } finally {
      setIsloadin(false);
    }
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <section className={sectionCardClass}>
      <h2 className={headingClass}>Find Single Item</h2>
      <form onSubmit={handleGetSingleProduct} className={formRowClass}>
        <input
          type="number"
          name="id"
          placeholder="Enter your id"
          value={input}
          onChange={handleChange}
          className={inputClass}
          required
        />
        <button
          type="submit"
          disabled={loading}
          className={buttonClass}
        >
          {loading ? "single Data..." : "single Data"}
        </button>
      </form>
      {error && <p className="mt-3 rounded-lg bg-red-50 p-3 text-red-700">{error}</p>}
      {data ? (
        <div className="mt-3 rounded-xl border border-emerald-200 bg-emerald-50 p-3 text-slate-800">
          <p>
            <span className="font-semibold">ID:</span> {data.id ?? data._id ?? "N/A"}
          </p>
          <p>
            <span className="font-semibold">Name:</span> {data.name}
          </p>
          <p>
            <span className="font-semibold">Price:</span> {data.price}
          </p>
          <p>
            <span className="font-semibold">Category:</span> {data.category}
          </p>
        </div>
      ) : (
        <p className={noteClass}>No result found.</p>
      )}
    </section>
  );
};

// post api

export const CrudPost = () => {
  const [input, setInput] = useState({
    name: "",
    price: "",
    category: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      setLoading(true);
      const response = await axios.post(CRUD_BASE_URL, {
        ...input,
        price: Number(input.price),
      });

      console.log("data chala gaya", response.data.data);

      setInput({
        name: "",
        price: "",
        category: "",
      });
      setMessage("Item successfully saved.");
      refreshPage();
    } catch (error) {
      setMessage("Item save nahi hua. Console check karo.");
      console.log("error aa raha hai " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={sectionCardClass}>
      <h2 className={headingClass}>Create Item</h2>
      <form onSubmit={handleSubmit} className={formRowClass}>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={input.name}
          onChange={handleChange}
          className={inputClass}
        />
        <input
          type="text"
          name="price"
          placeholder="Enter your price"
          value={input.price}
          onChange={handleChange}
          className={inputClass}
        />
        <input
          type="text"
          name="category"
          placeholder="Enter your category"
          value={input.category}
          onChange={handleChange}
          className={inputClass}
        />
        <button type="submit" disabled={loading} className={buttonClass}>
          {loading ? "Saving..." : "Save Item"}
        </button>
      </form>
      {message && <p className={noteClass}>{message}</p>}
    </section>
  );
};

// del
export const CruDel = () => {
  const [input, setInput] = useState("");
  const [loading, setIsloading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsloading(true);
    setMessage("");

    try {
      const response = await axios.delete(
        `${CRUD_BASE_URL}/${Number(input)}`,
      );
      console.log("item delete ho gya", response.data.data);
      setInput("");
      setMessage("Item delete ho gaya.");
      refreshPage();
    } catch (error) {
      setMessage("ID nahi mili ya delete fail ho gaya.");
      console.log("error aa raha hai " + error.message);
    } finally {
      setIsloading(false);
    }
  };

  return (
    <section className={sectionCardClass}>
      <h2 className={headingClass}>Delete Item</h2>
      <form onSubmit={handleSubmit} className={formRowClass}>
        <input
          type="number"
          //   name="category"
          placeholder="Enter your id"
          value={input}
          onChange={handleChange}
          className={inputClass}
        />
        <button
          type="submit"
          disabled={loading}
          className={buttonClass}
        >
          {loading ? "Deleting..." : "Del Item"}
        </button>
      </form>
      {message && <p className={noteClass}>{message}</p>}
    </section>
  );
};

// updata through put
export const CrudUpdata = () => {
  const [input, setInput] = useState({
    id: "",
    name: "",
    price: "",
    category: "",
  });

  const [loading, setIsloading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsloading(true);
    setMessage("");

    try {
      const response = await axios.put(`${CRUD_BASE_URL}/${input.id}`, {
        ...input,
        price: Number(input.price),
      });
      console.log("data upate ho gia", response.data.data);
      setMessage("Item update ho gaya.");
      refreshPage();
    } catch (error) {
      setMessage("Update nahi hua. ID check karo.");
      console.log("error aa rha ha ", error.message);
    } finally {
      setIsloading(false);
    }
  };

  return (
    <section className={sectionCardClass}>
      <h2 className={headingClass}>Update Item</h2>
      <form onSubmit={handleSubmit} className={formRowClass}>
        <input
          type="number"
          name="id"
          placeholder="Enter your Id"
          value={input.id}
          onChange={handleChange}
          className={inputClass}
        />
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={input.name}
          onChange={handleChange}
          className={inputClass}
        />
        <input
          type="text"
          name="price"
          placeholder="Enter your price"
          value={input.price}
          onChange={handleChange}
          className={inputClass}
        />
        <input
          type="text"
          name="category"
          placeholder="Enter your category"
          value={input.category}
          onChange={handleChange}
          className={inputClass}
        />
        <button
          type="submit"
          disabled={loading}
          className={buttonClass}
        >
          {loading ? "Saving..." : "Save Item"}
        </button>
      </form>
      {message && <p className={noteClass}>{message}</p>}
    </section>
  );
};
