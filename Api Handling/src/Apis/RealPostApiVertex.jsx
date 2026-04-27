import React, { useActionState } from "react";
import axios from "axios";

// 1. Action Function: Yeh woh function hai jo form submit hone par chalay ga
async function registerUserAction(previousState, formData) {
  // formData.get("name") se hum data nikalte hain
  const newUser = {
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
    role: formData.get("role"),
  };

  try {
    const response = await axios.post("https://register-user.free.beeceptor.com", newUser);
    return { success: true, message: "User registered successfully!", data: response.data };
  } catch (err) {
    return { success: false, message: "Registration failed!", error: err.message };
  }
}

const RealPostApiVertex = () => {
  // 2. useActionState Hook
  // state: jo function return karega
  // formAction: jo hum form ke 'action' prop mein denge
  // isPending: loading state jo React khud handle karega
  const [state, formAction, isPending] = useActionState(registerUserAction, null);

  const formFields = [
    { label: "User Name", name: "username", type: "text" },
    { label: "Email", name: "email", type: "email" },
    { label: "Password", name: "password", type: "password" },
    { label: "Role", name: "role", type: "text" },
  ];

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form action={formAction} className="bg-white p-8 rounded shadow-md flex flex-col gap-4">
        <h2 className="text-xl font-bold mb-4 text-center">Register (React 19)</h2>

        {formFields.map((field, index) => (
          <div key={index} className="flex flex-col">
            <label className="font-medium">{field.label}</label>
            <input
              name={field.name} // 👈 Yeh 'name' bohot zaroori hai formData ke liye
              type={field.type}
              required
              className="border border-blue-400 bg-blue-50 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
        ))}

        <button
          type="submit"
          disabled={isPending}
          className="bg-blue-500 p-2 rounded text-white font-bold uppercase hover:bg-blue-600 transition disabled:bg-gray-400"
        >
          {isPending ? "Registering..." : "Submit"}
        </button>

        {/* Success ya Error message dikhana */}
        {state?.success && <p className="text-green-600 text-center">{state.message}</p>}
        {state?.success === false && <p className="text-red-600 text-center">{state.message}</p>}
      </form>
    </div>
  );
};

export default RealPostApiVertex;