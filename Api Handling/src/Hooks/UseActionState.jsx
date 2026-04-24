import React, { useActionState } from "react";

const reducer = (prevState, formAction) => {
  const paisa = Number(formAction.get("amount"));
  return paisa + prevState;
};

const UseActionState = () => {
  const [state, formData, isLoading] = useActionState(reducer, 0);

  return (
    <div>
      <form action={formData}>
        <input type="text" name="amount" defaultValue="10" />
        <button disabled={isLoading} type="submit">
          submit
        </button>
      </form>
      <br />
      <h1>{state}</h1>
    </div>
  );
};

export default UseActionState;
