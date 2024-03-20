import React, { useEffect, useRef, useState } from "react";
import Table from "./Table";
const TradingViewWidget = () => {
  const widgetRef = useRef(null);

  useEffect(() => {
    if (widgetRef.current) {
      // Create and configure the script element
      const script = document.createElement("script");
      script.src =
        "https://s3.tradingview.com/external-embedding/embed-widget-market-quotes.js";
      script.async = true;
      script.innerHTML = JSON.stringify({
        title: "Stocks",
        width: "100%",
        height: "100%",
        locale: "en",
        showSymbolLogo: true,
        symbolsGroups: [
          {
            symbols: [
              { name: "BSE:RELIANCE", displayName: "RELIANCE" },
              {
                name: "BSE:TCS",
                displayName: "Tata Consultancy Services Limited",
              },
              {
                name: "BSE:HDFCAMC",
                displayName: "HDFC Asset Management Company Limited",
              },
              { name: "BSE:ICICIBANK", displayName: "ICICI Bank Limited" },
              { name: "BSE:BHARTIARTL", displayName: "Bharti Airtel Limited" },
              { name: "BSE:SBIN", displayName: "State Bank of India" },
              {
                name: "BSE:HINDUNILVR",
                displayName: "Hindustan Unilever Limited",
              },
              {
                name: "BSE:INFY",
                displayName: "Infosys Limited",
              },
              {
                name: "BSE:ITC",
                displayName: "ITC Limited",
              },
              { name: "BSE:LT", displayName: "Larsen & Toubro Limited" },
            ],
          },
        ],
        colorTheme: "light",
      });

      widgetRef.current.appendChild(script);
    }
  }, []);

  useEffect(() => {
    if (widgetRef.current) {
      // Create and configure the script element
      const script = document.createElement("script");
      script.src =
        "https://s3.tradingview.com/external-embedding/embed-widget-market-quotes.js";
      script.async = true;
      script.innerHTML = JSON.stringify({
        title: "Stocks",
        width: "100%",
        height: "100%",
        locale: "en",
        showSymbolLogo: true,
        symbolsGroups: [
          {
            symbols: [
              { name: "BSE:HCLTECH", displayName: "HCL Technologies Limited" },
              { name: "BSE:BAJFINANCE", displayName: "Bajaj Finance Limited" },

              {
                name: "BSE:SUNPHARMA",
                displayName: "Sun Pharmaceutical Industries Limited",
              },
              {
                name: "BSE:TATAMOTORS",
                displayName: "Tata Motors Limited",
              },
              {
                name: "BSE:MARUTI",
                displayName: "Maruti Suzuki India Limited",
              },
              {
                name: "BSE:ADANIENT",
                displayName: "Adani Enterprises Limited",
              },
              {
                name: "BSE:KOTAKBANK",
                displayName: "Kotak Mahindra Bank Limited",
              },
              {
                name: "BSE:ONGC",
                displayName: "Oil and Natural Gas Corporation Limited",
              },
              {
                name: "BSE:AXISBANK",
                displayName: "Axis Bank Limited",
              },
              {
                name: "BSE:NTPC",
                displayName: "NTPC Limited",
              },
            ],
          },
        ],
        colorTheme: "light",
      });

      widgetRef.current.appendChild(script);
    }
  }, []);

  useEffect(() => {
    if (widgetRef.current) {
      // Create and configure the script element
      const script = document.createElement("script");
      script.src =
        "https://s3.tradingview.com/external-embedding/embed-widget-market-quotes.js";
      script.async = true;
      script.innerHTML = JSON.stringify({
        title: "Stocks",
        width: "100%",
        height: "100%",
        locale: "en",
        showSymbolLogo: true,
        symbolsGroups: [
          {
            symbols: [
              {
                name: "BSE:TITAN",
                displayName: "Titan Company Limited",
              },
              {
                name: "BSE:ADANIPORTS",
                displayName: "Adani Ports and Special Economic Zone Limited",
              },
              { name: "BSE:COALINDIA", displayName: "Coal India Limited" },
              {
                name: "BSE:ULTRACEMCO",
                displayName: "UltraTech Cement Limited",
              },
              {
                name: "BSE:ASIANPAINT",
                displayName: "Asian Paints Limited",
              },
              {
                name: "BSE:WIPRO",
                displayName: "Wipro Limited",
              },
              {
                name: "BSE:POWERGRID",
                displayName: "Power Grid Corporation of India Limited",
              },
              {
                name: "BSE:BAJAJFINSV",
                displayName: "Bajaj Finserv Limited",
              },
              {
                name: "BSE:NESTLEIND",
                displayName: "Nestle India Limited",
              },
            ],
          },
        ],
        colorTheme: "light",
      });

      widgetRef.current.appendChild(script);
    }
  }, []);

  useEffect(() => {
    if (widgetRef.current) {
      // Create and configure the script element
      const script = document.createElement("script");
      script.src =
        "https://s3.tradingview.com/external-embedding/embed-widget-market-quotes.js";
      script.async = true;
      script.innerHTML = JSON.stringify({
        title: "Stocks",
        width: "100%",
        height: "100%",
        locale: "en",
        showSymbolLogo: true,
        symbolsGroups: [
          {
            symbols: [
              {
                name: "BSE:HEROMOTOCO",
                displayName: "Hero MotoCorp Limited",
              },
              {
                name: "BSE:APOLLOHOSP",
                displayName: "Apollo Hospitals Enterprise Limited",
              },
              {
                name: "BSE:UPL",
                displayName: "UPL Limited",
              },
              { name: "BSE:COALINDIA", displayName: "Coal India Limited" },
              {
                name: "BSE:JSWSTEEL",
                displayName: "JSW Steel Limited",
              },
              {
                name: "BSE:TATASTEEL",
                displayName: "Tata Steel Limited",
              },
              {
                name: "BSE:LTIM",
                displayName: "LTIMindtree Limited",
              },
              {
                name: "BSE:SBILIFE",
                displayName: "SBI Life Insurance Company Limited",
              },
              {
                name: "BSE:GRASIM",
                displayName: "Grasim Industries Limited",
              },
              {
                name: "BSE:BPCL",
                displayName: "Bharat Petroleum Corporation Limited",
              },
            ],
          },
        ],
        colorTheme: "light",
      });

      widgetRef.current.appendChild(script);
    }
  }, []);

  useEffect(() => {
    if (widgetRef.current) {
      // Create and configure the script element
      const script = document.createElement("script");
      script.src =
        "https://s3.tradingview.com/external-embedding/embed-widget-market-quotes.js";
      script.async = true;
      script.innerHTML = JSON.stringify({
        title: "Stocks",
        width: "100%",
        height: "100%",
        locale: "en",
        showSymbolLogo: true,
        symbolsGroups: [
          {
            symbols: [
              {
                name: "BSE:HDFCLIFE",
                displayName: "HDFC Life Insurance Company Limited",
              },
              {
                name: "BSE:DRREDDY",
                displayName: "Dr. Reddy's Laboratories Limited",
              },
              { name: "BSE:TECHM", displayName: "Eicher Motors Limited" },
              {
                name: "BSE:EICHERMOT",
                displayName: "JSW Steel Limited",
              },
              {
                name: "BSE:INDUSINDBK",
                displayName: "IndusInd Bank Limited",
              },
              {
                name: "BSE:HINDALCO",
                displayName: "Hindalco Industries Limited",
              },
              {
                name: "BSE:CIPLA",
                displayName: "Cipla Limited",
              },
              {
                name: "BSE:BRITANNIA",
                displayName: "Britannia Industries Limited",
              },
              {
                name: "BSE:TATACONSUM",
                displayName: "Tata Consumer Products Limited",
              },
              {
                name: "BSE:DIVISLAB",
                displayName: "Divi's Laboratories Limited",
              },
            ],
          },
        ],
        colorTheme: "light",
      });

      widgetRef.current.appendChild(script);
    }
  }, []);

  return (
    <>
      <Table />
      <div className="tradingview-widget-container mx-20 my-10">
        <div
          ref={widgetRef}
          className="tradingview-widget-container__widget"
          style={{ height: "100vh" }}
        ></div>
      </div>
    </>
  );
};

export default TradingViewWidget;
