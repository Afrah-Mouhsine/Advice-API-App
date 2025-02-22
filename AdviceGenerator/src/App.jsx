import AdviceApi from "./component/AdviceGenerator";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f3f4f6",
        width: "100vw",
      }}
    >
      <AdviceApi />
    </div>
  );
}

export default App;
