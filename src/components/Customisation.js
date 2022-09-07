import React from "react";
import ImgData from "../api/ImgData";
import IngredientsData from "../api/Ingredients";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
const Customisation = ({ ingredients, setIngredients }) => {
  let Navigate = useNavigate();
  const onChange = (event, name) => {
    let newIngredients = JSON.parse(JSON.stringify(ingredients));
    // toggle
    newIngredients[name] = event;
    setIngredients(newIngredients);
    localStorage.setItem("ingredients", JSON.stringify(newIngredients));
  };
  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          marginLeft: 100,
          marginTop: 50,
          flex: 1,
          marginRight: "100px",
        }}
      >
        <div style={{ maxHeight: 500, maxWidth: 500, position: "relative" }}>
          {ImgData.map((val, ind) => {
            if (val.Ingredients === "chesse") {
              return (
                <motion.div
                  initial={{ scale: val.scale }}
                  animate={{
                    scale: ingredients[val.Ingredients] ? 1 : 0,
                  }}
                  transition={{ duration: val.duration }}
                  className={val.className}
                >
                  <img
                    key={ind}
                    src={val.imgsrc}
                    alt={val.title}
                    height="100%"
                    width="100%"
                  />
                </motion.div>
              );
            } else if (val.title === "PizzaBase") {
              return (
                <motion.div
                  transition={{ duration: val.duration }}
                  className={val.className}
                >
                  <img
                    key={ind}
                    src={val.imgsrc}
                    alt={val.title}
                    height="100%"
                    width="100%"
                  />
                </motion.div>
              );
            } else {
              return (
                <motion.div
                  initial={{ opacity: val.opacity }}
                  animate={{
                    y: ingredients[val.Ingredients] ? 100 : -100,
                    opacity: ingredients[val.Ingredients] ? 1 : 0,
                  }}
                  transition={{ duration: val.duration }}
                  className={val.className}
                >
                  <img
                    key={ind}
                    src={val.imgsrc}
                    alt={val.title}
                    height="100%"
                    width="100%"
                  />
                </motion.div>
              );
            }
          })}
        </div>
      </div>
      <div style={{ marginTop: 100, flex: 1 }}>
        {IngredientsData.map((val, ind) => {
          return (
            <div className="form-check form-switch m-3 py-2">
              <input
                key={ind}
                className="form-check-input"
                role="switch"
                type="checkbox"
                checked={ingredients[val.Ingredients]}
                onChange={(event) =>
                  onChange(event.currentTarget.checked, val.Ingredients)
                }
              />
              <label for={val.ingredients} key={ind} className="font">
                {val.ingredients}
              </label>
              <br />
            </div>
          );
        })}
        <button className="button" onClick={() => Navigate("/checkout")}>
          Proceed To Click
        </button>
      </div>
    </div>
  );
};

export default Customisation;
