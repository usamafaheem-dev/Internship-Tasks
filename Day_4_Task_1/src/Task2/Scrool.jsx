import { useRef } from "react";

export default function CatFriends() {
  // 3 alag alag refs banaye

  const topRef = useRef(null); // ← Top pe ref lagayenge

  function handleScrollToTop() {
    topRef.current.scrollIntoView({
      behavior: "smooth", // smooth scrolling
      block: "start", //c top pe le aaye
    });
  }

  return (
    <>
      {/* Yeh ref top pe lagaya hai */}
      <div ref={topRef}>
        <h1>Welcome to My Website</h1>
        p
        <p>Yahan bohot saara content hai...</p>
        {/* Bohot lamba content yahan daal do taake scroll ho sake */}
        <div style={{ height: "1500px", background: "#f0f0f0" }}>
          <p>Scroll down karo... ↓</p>
          <p>Page ka bottom yahan tak hai</p>
        </div>
      </div>

      {/* Back to Top Button (Fixed Position) */}
      <button
        onClick={handleScrollToTop}
        style={{
          position: "fixed",
          bottom: "30px",
          right: "30px",
          padding: "12px 20px",
          background: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "50px",
          cursor: "pointer",
          boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
        }}
      >
        ↑ Back to Top
      </button>
    </>
  );
}
