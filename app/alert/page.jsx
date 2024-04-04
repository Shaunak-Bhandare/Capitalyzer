"use client";
import React, { useState, useEffect } from "react";
import Papa from "papaparse";
import "./page.css";

const Page = () => {
  const [symbolData, setSymbolData] = useState([]);
  const [symbol, setSymbol] = useState("");
  const [purchasePrice, setPurchasePrice] = useState("");
  const [slPrice, setSlPrice] = useState("");
  const [trailingStopPer, setTrailingStopPer] = useState("");
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://v1.nocodeapi.com/admin12/google_sheets/QqQgewteCuTEoKzv?tabId=Sheet1",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify([
            [symbol, purchasePrice, slPrice, `${trailingStopPer}%`, lastPrice],
          ]),
        }
      );
      await response.json();
      setSymbol("");
      setPurchasePrice("");
      setSlPrice("");
      setTrailingStopPer("");
      setLastPrice("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div id="form">
      <h2 className="text-center mb-16 text-2xl font-bold">
        Stop Loss Alert System
      </h2>
      <form onSubmit={handleSubmit}>
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

        <label htmlFor="purchase-price" className="mt-3">
          Purchase Price:
        </label>
        <input
          type="number"
          id="purchase-price"
          name="purchase-price"
          onChange={(e) => setPurchasePrice(e.target.value)}
          value={purchasePrice}
          autoComplete="off"
          required
        />

        <label htmlFor="stop-loss-price" className="mt-3">
          Stop-Loss Price:
        </label>
        <input
          type="number"
          id="stop-loss-price"
          name="stop-loss-price"
          onChange={(e) => setSlPrice(e.target.value)}
          value={slPrice}
          autoComplete="off"
          required
        />

        {/* <label htmlFor="trailing-stop" className="mt-3">
          Trailing Stop:
        </label>
        <input type="checkbox" id="trailing-stop" name="trailing-stop" /> */}
        <br />

        <label htmlFor="trailing-stop-percentage" className="mt-3">
          Trailing Stop Percentage:
        </label>
        <input
          type="text"
          id="trailing-stop-percentage"
          name="trailing-stop-percentage"
          onChange={(e) => setTrailingStopPer(e.target.value)}
          value={trailingStopPer}
          autoComplete="off"
          required
        />
        <br />

        <label htmlFor="cmp" className="mt-3">
          CMP:
        </label>
        <input
          type="number"
          id="cmp"
          name="cmp"
          value={lastPrice}
          onChange={(e) => setLastPrice(e.target.value)}
          readOnly
        />
        <br />

        <button type="submit" className="mr-5 p-2 bg-green-400 text-white">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Page;
