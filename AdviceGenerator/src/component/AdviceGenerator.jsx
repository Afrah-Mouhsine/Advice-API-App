import { useEffect, useState } from "react";
import "./AdviceApi.css";

export default function AdviceApi() {
  const [advice, setAdvice] = useState(null);

  const fetchAdvice = async () => {
    try {
      const response = await fetch("https://api.adviceslip.com/advice");
      const data = await response.json();
      setAdvice(data.slip.advice);
    } catch (error) {
      setAdvice("Oops! Something went wrong. Try again.");
    }
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <div className="wrapper">
      <div className="container">
        <h1>Welcome, Stranger!</h1>
        <p>Here’s a little advice for you; I hope it helps:</p>
        {advice ? (
          <h3>"{advice}"</h3>
        ) : (
          <p className="loading">Loading advice...</p>
        )}
        <button onClick={fetchAdvice}>Get New Advice</button>
      </div>
    </div>
  );
}
