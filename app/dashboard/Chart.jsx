import React, { useEffect, useRef } from "react";

const TradingViewWidget = () => {
  const widgetRef = useRef(null); // Reference for the div where the script will be injected

  useEffect(() => {
    if (widgetRef.current) {
      // Create and configure the script element
      const script = document.createElement("script");
      script.src =
        "https://s3.tradingview.com/external-embedding/embed-widget-hotlists.js";
      script.async = true;
      script.innerHTML = JSON.stringify({
        colorTheme: "light",
        dateRange: "12M",
        exchange: "BSE",
        showChart: true,
        locale: "en",
        largeChartUrl: "",
        isTransparent: false,
        showSymbolLogo: true,
        showFloatingTooltip: false,
        width: "400",
        height: "550",
        plotLineColorGrowing: "rgba(41, 98, 255, 1)",
        plotLineColorFalling: "rgba(41, 98, 255, 1)",
        gridLineColor: "rgba(42, 46, 57, 0)",
        scaleFontColor: "rgba(106, 109, 120, 1)",
        belowLineFillColorGrowing: "rgba(41, 98, 255, 0.12)",
        belowLineFillColorFalling: "rgba(41, 98, 255, 0.12)",
        belowLineFillColorGrowingBottom: "rgba(41, 98, 255, 0)",
        belowLineFillColorFallingBottom: "rgba(41, 98, 255, 0)",
        symbolActiveColor: "rgba(41, 98, 255, 0.12)",
      });

      widgetRef.current.appendChild(script);
    }
  }, []);

  useEffect(() => {
    if (widgetRef.current) {
      const script = document.createElement("script");
      script.src =
        "https://s3.tradingview.com/external-embedding/embed-widget-screener.js";
      script.async = true;
      script.innerHTML = JSON.stringify({
        width: "100%",
        height: "100%",
        defaultColumn: "overview",
        defaultScreen: "most_capitalized",
        market: "india",
        showToolbar: true,
        locale: "en",
        colorTheme: "light",
      });
      widgetRef.current.appendChild(script);
    }
  }, []);

  return (
    <>
      <div className="tradingview-widget-container">
        <div
          ref={widgetRef}
          className="tradingview-widget-container__widget"
        ></div>
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
      <div className="tradingview-widget-container">
        <div
          ref={widgetRef}
          className="tradingview-widget-container__widget"
        ></div>
      </div>
    </>
  );
};

export default TradingViewWidget;
