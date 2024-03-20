import React, { useEffect, useRef } from "react";
const Index = () => {
  const widgetRef = useRef(null);

  useEffect(() => {
    if (widgetRef.current) {
      const script = document.createElement("script");
      script.src =
        "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
      script.async = true;
      script.innerHTML = JSON.stringify({
        symbols: [
          { description: "", proName: "BSE:TATAMOTORS" },
          {
            description: "",
            proName: "BSE:TCS",
          },
          {
            description: "",
            proName: "BSE:INFY",
          },
          {
            description: "",
            proName: "BSE:ITC",
          },
          {
            description: "",
            proName: "BSE:ICICIBANK",
          },
          {
            description: "",
            proName: "BSE:HDFCBANK",
          },
          {
            description: "",
            proName: "BSE:WIPRO",
          },
          {
            description: "",
            proName: "BSE:TITAN",
          },
          {
            description: "",
            proName: "BSE:SUNPHARMA",
          },
          {
            description: "",
            proName: "BSE:LT",
          },
          {
            description: "",
            proName: "BSE:SBIN",
          },
          {
            description: "",
            proName: "BSE:RELIANCE",
          },
          // Add the rest of your symbols here
        ],
        showSymbolLogo: true,
        colorTheme: "light",
        width: "100vw",
        isTransparent: false,
        displayMode: "adaptive",
        locale: "en",
      });

      widgetRef.current.appendChild(script);

      return () => {
        widgetRef.current.removeChild(script);
      };
    }
  }, []);

  return (
    <nav
      id="ticker-tape"
      className="mt-0"
      style={{ marginTop: "-6rem", width: "100vw" }}
    >
      <div className="tradingview-widget-container" style={{ width: "100%" }}>
        <div
          ref={widgetRef}
          className="tradingview-widget-container__widget"
          style={{ width: "100%" }}
        ></div>
      </div>
    </nav>
  );
};

export default Index;
