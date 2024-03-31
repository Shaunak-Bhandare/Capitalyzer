"use client";

import React, { useState, useEffect } from "react";
import "./page.css";
import { fetchData } from "../util/api";

function PopupForm() {
  const [showPopup, setShowPopup] = useState(false);

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    closePopup();
  };

  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetchData();
        console.log("Response:", response); // Log the response
        setData(response || []); // Ensure data is not null
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getData();
  }, []);

  return (
    <div>
      <button
        className="border-black border-solid border-2 rounded-2xl p-4"
        onClick={openPopup}
      >
        + Add Investment
      </button>

      <h1>Users</h1>
      <ul>
        {data.map((user) => (
          <li key={user.id}>
            {user.name} & Age: {user.age}
          </li>
        ))}
      </ul>

      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={closePopup}>
              &times;
            </span>
            <h2 className="text-center mb-8">Add New Investment</h2>
            <form onSubmit={handleSubmit}>
              <label htmlFor="investmentName">Investment Type:</label>
              <select name="investment_type" id="investment_type">
                <option value="Stock">Stock</option>
                <option value="Bond">Bond</option>
                <option value="Mutual Fund">Mutual Fund</option>
              </select>
              <br />

              <label htmlFor="symbol" className="mt-3">
                Select Symbol:
              </label>
              <select name="symbol" id="symbol">
                <option value="Symbol 1">Symbol 1</option>
                <option value="Symbol 2">Symbol 2</option>
                <option value="Symbol 3">Symbol 3</option>
              </select>

              <label htmlFor="price" className="mt-3">
                Buy Price:
              </label>
              <input
                type="number"
                id="price"
                name="price"
                step="0.01"
                required
              />

              <label htmlFor="quantity" className="mt-3">
                Quantity:
              </label>
              <input type="number" id="quantity" name="quantity" required />

              <label htmlFor="cmp" className="mt-3">
                CMP:
              </label>
              <input
                type="number"
                id="cmp"
                name="cmp"
                step="0.01"
                required
                readOnly
              />
              <br />
              <div className="button-container my-5">
                <button type="submit" className="mr-5">
                  Submit
                </button>
                <button onClick={closePopup}>Close</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default PopupForm;
