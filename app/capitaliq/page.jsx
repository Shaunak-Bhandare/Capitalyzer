"use client";
import React, { useState } from "react";
import axios from "axios";
import "./App.css"; // Import the CSS file

function App() {
  const [file, setFile] = useState(null);
  const [summary, setSummary] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSummarize = async () => {
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post(
        "http://localhost:5000/summarize",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response && response.data && response.data.summary) {
        setSummary(response.data.summary);
      } else {
        console.error("Invalid response:", response);
        setSummary("Failed to summarize document. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error.message);
      setSummary("Failed to summarize document. Please try again.");
    }
  };

  return (
    <div className="container" id="cover">
      <h1 className="text-3xl font-bold">Financial Document Summarizer</h1>
      <input type="file" onChange={handleFileChange} />
      <button id="button" onClick={handleSummarize}>
        Summarize
      </button>
      {summary && (
        <div className="summary">
          <h2>Summary:</h2>
          <p>{summary}</p>
        </div>
      )}
    </div>
  );
}

export default App;
