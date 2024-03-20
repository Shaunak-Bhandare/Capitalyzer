import React, { useState } from "react";
import financials from "./financials.json";
import DataTable from "react-data-table-component";
import Link from "next/link";

const Table = () => {
  const [loading, setLoading] = useState(false);

  const columns = [
    {
      name: "ID",
      selector: (row) => row.id,
    },
    {
      name: "Name",
      cell: (row) => {
        let companyPage;
        switch (row.name) {
          case "Reliance":
            companyPage = "reliance";
            break;
          case "Wipro":
            companyPage = "wipro";
            break;
          case "ITC":
            companyPage = "itc";
            break;
          case "HDFC Bank":
            companyPage = "hdfc-bank";
            break;
          case "Tata Motors":
            companyPage = "tata-motors";
            break;
          default:
            companyPage = "#";
        }
        return <Link href={`/${companyPage}`}>{row.name}</Link>;
      },
    },
    {
      name: "Sector",
      selector: (row) => row.sector,
    },
    {
      name: "Industry",
      selector: (row) => row.industry,
    },
    {
      name: "Market cap",
      selector: (row) => row.mcap,
    },
    {
      name: "PE Ratio",
      selector: (row) => row.peratio,
    },
    {
      name: "52 Week High",
      selector: (row) => row.high,
    },
    {
      name: "52 Week Low",
      selector: (row) => row.low,
    },
  ];

  return (
    <DataTable
      className="px-20 my-20"
      columns={columns}
      data={financials}
      progressPending={loading}
    />
  );
};

export default Table;
