"use client";
import React from "react";
import Index from "./Index";
// import Chart from "./Chart";
// import { Stocks } from "./Stocks";
import Indices from "./Indices";
import StockList from "./StockList";

const Dashboard = () => {
  return (
    <>
      <Index />
      <Indices />
      {/* <Chart /> */}
      <StockList />
      {/* <Stocks /> */}
    </>
  );
};

export default Dashboard;
