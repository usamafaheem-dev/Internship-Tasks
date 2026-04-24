import { SettingsIcon } from "lucide-react";
import React, { useActionState } from "react";
const initialState = {};

const handleFormLogic = async (prevStat, formData) => {
  const data = Object.fromEntries(formData.entries());

  await new Promise((res) => setTimeout(res, 1000));
  return data;
};

const UseActionStateForm = () => {
  const [state, formAction, isPending] = useActionState(
    handleFormLogic,
    initialState,
  );
  return (
    <div className="flex justify-center flex-col items-center">
      <form action={formAction} className="grid grid-cols-2 gap-4 max-w-[400px] ">
        {/* 10 Fields - Kisi mein bhi useState/onChange nahi chahiye! */}
        <input
          name="firstName"
          placeholder="First Name"
          className="p-3 border rounded bg-gray-50"
        />
        <input
          name="lastName"
          placeholder="Last Name"
          className="p-3 border rounded bg-gray-50"
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          className="p-3 border rounded bg-gray-50"
        />
        <input
          name="phone"
          placeholder="Phone"
          className="p-3 border rounded bg-gray-50"
        />
        <input
          name="address"
          placeholder="Address"
          className="p-3 border rounded bg-gray-50"
        />
        <input
          name="city"
          placeholder="City"
          className="p-3 border rounded bg-gray-50"
        />
        <input
          name="zip"
          placeholder="Zip Code"
          className="p-3 border rounded bg-gray-50"
        />
        <input
          name="country"
          placeholder="Country"
          className="p-3 border rounded bg-gray-50"
        />
        <input
          name="username"
          placeholder="Username"
          className="p-3 border rounded bg-gray-50"
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          className="p-3 border rounded bg-gray-50"
        />

        <button
          disabled={isPending}
          type="submit"
          className="col-span-2 bg-black text-white p-4 rounded font-bold uppercase"
        >
          {isPending ? "Saving Data..." : "Register Now"}
        </button>
      </form>

      {state.username && (
        <div className="mt-10 p-6 bg-green-100 rounded">
          <h3 className="font-bold text-xl">
            Success! Welcome, {state.firstName}
          </h3>
          <p>Email: {state.email}</p>
          <p>
            Location: {state.city}, {state.country}
          </p>
          {/* Aap kisi bhi field ko state.fieldname se access kar sakte hain */}
        </div>
      )}
    </div>
  );
};

export default UseActionStateForm;
