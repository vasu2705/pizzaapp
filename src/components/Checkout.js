import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Checkout = ({ ingredients }) => {
  const [success, setSuccess] = useState(false);
  let Navigate = useNavigate();
  return (
    <div style={{ display: "flex" }}>
      {/* me check out hu
      {JSON.stringify(ingredients)} */}
      <div
        style={{
          marginLeft: 300,
          marginTop: 100,
          flex: 1,
          marginRight: "100px",
        }}
      >
        <div>
          <h1 className="mt-2 p-1 font fs-1">My Ingredients</h1>
          {Object.keys(ingredients).map((ingredient, ind) => {
            return (
              ingredients[ingredient] && (
                <p className="font m-2 px-1">
                  {ingredient[0].toUpperCase()}
                  {ingredient.substr(1)}
                </p>
              )
            );
          })}
          <button
            className="button"
            style={{ marginLeft: 10 }}
            onClick={() => setSuccess(true)}
          >
            confirm
          </button>
          <button className="button" onClick={() => Navigate("/")}>
            Go back
          </button>
        </div>
      </div>
      <div
        style={{
          marginLeft: 100,
          marginTop: 100,
          flex: 1,
          marginRight: "300px",
        }}
      >
        {success && (
          <div className="body-success">
            <div class="card1">
              <div
                style={{
                  borderRadius: "200px",
                  height: "200px",
                  width: "200px",
                  background: "#F8FAF5",
                  margin: "0 auto",
                }}
              >
                <i class="checkmark">✓</i>
              </div>
              <h1>Success</h1>
              <p>Order id #{Math.round(Math.random() * 100000)}</p>
              <p>Your Order, Will be ready in 20-30 min.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkout;
