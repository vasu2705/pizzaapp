import React, { useEffect, useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Routes, Route } from "react-router-dom";
import Customisation from "./components/Customisation";
import Checkout from "./components/Checkout";
import Header from "./components/Header";

function App() {
  // state

  const [ingredients, setIngredients] = useState({
    basil: false,
    chesse: false,
    massroom: false,
    olive: false,
    pineapple: false,
    tomato: false,
  });
  useEffect(() => {
    const data = localStorage.getItem("ingredients");
    if (data) {
      setIngredients(JSON.parse(data));
    }
    console.log(data);
  }, []);
  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Customisation
              ingredients={ingredients}
              setIngredients={setIngredients}
            />
          }
        />
        <Route
          exact
          path="/checkout"
          element={<Checkout ingredients={ingredients} />}
        />
      </Routes>
    </React.Fragment>
  );
}

export default App;
