import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Listing from "./Components/Listing";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header></Header>
      <Listing></Listing>
    </>
  );
}

export default App;
