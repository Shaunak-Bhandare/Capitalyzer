"use client";

import React, { useEffect, useRef } from "react";

const TradingViewSymbolInfoWidget = () => {
  const widgetRef = useRef(null);

  useEffect(() => {
    if (widgetRef.current) {
      // Create and configure the script element
      const script = document.createElement("script");
      script.src =
        "https://s3.tradingview.com/external-embedding/embed-widget-symbol-info.js";
      script.async = true;
      script.innerHTML = JSON.stringify({
        symbol: "NSE:TATAMOTORS",
        width: 700,
        locale: "en",
        colorTheme: "light",
        isTransparent: false,
      });

      widgetRef.current.appendChild(script);
    }
  }, []);

  useEffect(() => {
    if (widgetRef.current) {
      // Create and configure the script element
      const script = document.createElement("script");
      script.src =
        "https://s3.tradingview.com/external-embedding/embed-widget-symbol-profile.js";
      script.async = true;
      script.innerHTML = JSON.stringify({
        width: 700,
        height: "550",
        isTransparent: false,
        colorTheme: "light",
        symbol: "NSE:TATAMOTORS",
        locale: "en",
      });

      widgetRef.current.appendChild(script);
    }
  }, []);

  useEffect(() => {
    if (widgetRef.current) {
      // Create and configure the script element
      const script = document.createElement("script");
      script.src =
        "https://s3.tradingview.com/external-embedding/embed-widget-financials.js";
      script.async = true;
      script.innerHTML = JSON.stringify({
        isTransparent: false,
        largeChartUrl: "",
        displayMode: "regular",
        width: 700,
        height: 800,
        colorTheme: "light",
        symbol: "NSE:TATAMOTORS",
        locale: "en",
      });

      widgetRef.current.appendChild(script);
    }
  }, []);

  useEffect(() => {
    if (widgetRef.current) {
      const script = document.createElement("script");
      script.src =
        "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
           "width": "700",
          "height": "610",
          "symbol": "BSE:TATAMOTORS",
          "interval": "D",
          "timezone": "Etc/UTC",
          "theme": "light",
          "style": "1",
          "locale": "in",
          "enable_publishing": false,
          "allow_symbol_change": true,
          "calendar": false,
          "support_host": "https://www.tradingview.com"
        }`;
      widgetRef.current.appendChild(script);
    }
  }, []);

  useEffect(() => {
    if (widgetRef.current) {
      // Create and configure the script element
      const script = document.createElement("script");
      script.src =
        "https://s3.tradingview.com/external-embedding/embed-widget-technical-analysis.js";
      script.async = true;
      script.innerHTML = JSON.stringify({
        interval: "1h",
        width: 700,
        isTransparent: false,
        height: 800,
        symbol: "NSE:TATAMOTORS",
        showIntervalTabs: true,
        displayMode: "multiple",
        locale: "en",
        colorTheme: "light",
      });

      widgetRef.current.appendChild(script);
    }
  }, []);

  return (
    <div className="tradingview-widget-container">
      <div
        ref={widgetRef}
        className="tradingview-widget-container__widget"
      ></div>
    </div>
  );
};

export default TradingViewSymbolInfoWidget;
