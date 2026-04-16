import Rating from "./components/Rating";

function App() {
  return (
    <div>
      <Rating
        heading={"How do you feel about React?"}
        color={"red"}
        feedbackMessages={["Awful", "Bad", "Okay", "Good", "Love it!"]}
      />
    </div>
  );
}

export default App;
