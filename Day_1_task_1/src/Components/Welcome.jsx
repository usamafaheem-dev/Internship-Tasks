const Welcome = () => {
  const isLoggedIn = true;
  return (
    <>
      <h3 style={{ color: "grey" }}>
        {isLoggedIn ? "Welcome Back" : "Please log in"} .
        <span style={{ color: "black", fontSize: "16px" }}>(Task Six)</span>
      </h3>
      <h1>
        "Hello, my name is Ali."
        <span style={{ color: "grey", fontSize: "16px" }}>(Task One)</span>
      </h1>
    </>
  );
};

export default Welcome;
