import React, { useEffect, useRef } from "react";

const TradingViewWidget = () => {
  const widgetRef = useRef(null); // Create a reference for the div where the script will be injected

  useEffect(() => {
    if (widgetRef.current) {
      // Create the script element
      const script = document.createElement("script");
      script.src =
        "https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js";
      script.async = true;
      // Set the innerHTML to the widget configuration
      script.innerHTML = JSON.stringify({
        symbol: "BSE:SENSEX",
        width: 350,
        height: 220,
        locale: "en",
        dateRange: "12M",
        colorTheme: "light",
        isTransparent: false,
        autosize: false,
        largeChartUrl: "",
      });

      widgetRef.current.appendChild(script);
    }
  }, []);
  useEffect(() => {
    if (widgetRef.current) {
      // Create the script element
      const script = document.createElement("script");
      script.src =
        "https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js";
      script.async = true;
      // Set the innerHTML to the widget configuration
      script.innerHTML = JSON.stringify({
        symbol: "BSE:MIDCAP",
        width: 350,
        height: 220,
        locale: "en",
        dateRange: "12M",
        colorTheme: "light",
        isTransparent: false,
        autosize: false,
        largeChartUrl: "",
      });

      widgetRef.current.appendChild(script);
    }
  }, []);
  useEffect(() => {
    if (widgetRef.current) {
      // Create the script element
      const script = document.createElement("script");
      script.src =
        "https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js";
      script.async = true;
      // Set the innerHTML to the widget configuration
      script.innerHTML = JSON.stringify({
        symbol: "BSE:SMLCAP",
        width: 350,
        height: 220,
        locale: "en",
        dateRange: "12M",
        colorTheme: "light",
        isTransparent: false,
        autosize: false,
        largeChartUrl: "",
      });

      widgetRef.current.appendChild(script);
    }
  }, []);

  return (
    <>
      <div className="tradingview-widget-container mt-10 mb-20">
        <div
          ref={widgetRef}
          className="tradingview-widget-container__widget"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem",
          }}
        ></div>
        <div className="tradingview-widget-container__widget"></div>
        {/* <div className="tradingview-widget-copyright">
          <a
            href="https://www.tradingview.com/"
            rel="noopener nofollow"
            target="_blank"
          >
            <span className="blue-text">Track all markets on TradingView</span>
          </a>
        </div> */}
      </div>
    </>
  );
};

export default TradingViewWidget;
