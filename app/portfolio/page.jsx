"use client";

import React, { useState, useEffect } from "react";
import "./page.css";
import Papa from "papaparse";
// import { fetchData } from "../util/api";

function PopupForm() {
  const [showPopup, setShowPopup] = useState(false);
  const [symbolData, setSymbolData] = useState([]);
  const [symbol, setSymbol] = useState("");
  const [type, setType] = useState("");
  const [purchasePrice, setPurchasePrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [lastPrice, setLastPrice] = useState("");

  useEffect(() => {
    // Read CSV file and update symbolData state
    Papa.parse("./api_data_1.csv", {
      download: true,
      header: true,
      complete: (results) => {
        setSymbolData(results.data);
      },
    });
  }, []);

  useEffect(() => {
    // Update last price when symbol changes
    const selectedSymbol = symbolData.find((s) => s.symbol === symbol);
    if (selectedSymbol) {
      setLastPrice(selectedSymbol.lastPrice);
    }
  }, [symbol, symbolData]);

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSymbol("");
    setPurchasePrice("");
    setType("");
    setQuantity("");
    setLastPrice("");
    closePopup();
  };

  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   const getData = async () => {
  //     try {
  //       const response = await fetchData();
  //       console.log("Response:", response); // Log the response
  //       setData(response || []); // Ensure data is not null
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };
  //   getData();
  // }, []);

  return (
    <div>
      <button
        className="bg-black border-none font-semibold text-white rounded-2xl p-4 mt-10"
        onClick={openPopup}
      >
        + Add Investment
      </button>

      {/* <h1>Users</h1> */}
      {/* <ul>
        {data.map((user) => (
          <li key={user.id}>
            {user.name} & Age: {user.age}
          </li>
        ))}
      </ul> */}

      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={closePopup}>
              &times;
            </span>
            <h2 className="text-center text-2xl font-bold mb-12">
              Add New Investment
            </h2>
            <form onSubmit={handleSubmit}>
              <label htmlFor="investment_type">Investment Type:</label>
              <select
                name="investment_type"
                id="investment_type"
                onChange={(e) => setType(e.target.value)}
                value={type}
              >
                <option value="Stock">Stock</option>
                <option value="Bond">Bond</option>
                <option value="Mutual Fund">Mutual Fund</option>
              </select>
              <br />

              <label htmlFor="symbol" className="mt-3">
                Select Symbol:
              </label>
              <select
                name="symbol"
                id="symbol"
                onChange={(e) => setSymbol(e.target.value)}
                value={symbol}
              >
                <option value="">Select a symbol</option>
                {symbolData.map((s) => (
                  <option key={s.symbol} value={s.symbol}>
                    {s.symbol}
                  </option>
                ))}
              </select>

              <label htmlFor="price" className="mt-3">
                Buy Price:
              </label>
              <input
                type="number"
                id="price"
                name="price"
                step="0.01"
                autoComplete="off"
                onChange={(e) => setPurchasePrice(e.target.value)}
                value={purchasePrice}
                required
              />

              <label htmlFor="quantity" className="mt-3">
                Quantity:
              </label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                autoComplete="off"
                onChange={(e) => setQuantity(e.target.value)}
                value={quantity}
                required
              />

              <label htmlFor="cmp" className="mt-3">
                CMP:
              </label>
              <input
                type="number"
                id="cmp"
                name="cmp"
                value={lastPrice}
                required
                readOnly
              />
              <br />
              <div className="button-container my-5">
                <button type="submit">Submit</button>
                {/* <button onClick={closePopup}>Close</button> */}
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default PopupForm;
