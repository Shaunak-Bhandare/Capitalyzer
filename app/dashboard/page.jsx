"use client";
import React from "react";
import Index from "./Index";
import Indices from "./Indices";
import StockList from "./StockList";

const Dashboard = () => {
  return (
    <>
      <Index />
      <Indices />
      <StockList />
    </>
  );
};

export default Dashboard;
