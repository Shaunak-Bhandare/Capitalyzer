import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import "./style.css";

const page = () => {
  return (
    <>
      <header style={{ marginBottom: "2rem" }}>
        <div className="row">
          <div>
            <h1>
              <strong>Module 3. Fundamental Analysis (Video Series)</strong>
            </h1>
          </div>
          <div className="text-right">
            <a href="education">← Back to all video modules</a>
          </div>
        </div>
      </header>
      <Tabs
        id="tabs"
        style={{ display: "flex", gap: "5rem", marginBottom: "10rem" }}
      >
        <TabList
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Tab style={{ textAlign: "left" }}>
            1. Intro to fundamental analysis
          </Tab>
          <Tab style={{ textAlign: "left" }}>2. Investor Mindset</Tab>
          <Tab style={{ textAlign: "left" }}>3. Annual company report</Tab>
          <Tab style={{ textAlign: "left" }}>4. P&L statement</Tab>
          <Tab style={{ textAlign: "left" }}>5. Balance sheet statement</Tab>
          <Tab style={{ textAlign: "left" }}>8. Cash Flow Statement</Tab>
          <Tab style={{ textAlign: "left" }}>
            7. Connection between financials
          </Tab>
          <Tab style={{ textAlign: "left" }}>8. Financial Ratio Analysis</Tab>
          <Tab style={{ textAlign: "left" }}>9. Relative Valuation</Tab>
          <Tab style={{ textAlign: "left" }}>
            10. Fundamental Investment Checklist
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <iframe
              title="YouTube video player"
              src="https://www.youtube.com/embed/8rUc0MaMzik"
              width="700"
              height="500"
              frameborder="0"
              allowfullscreen="allowfullscreen"
            ></iframe>
          </TabPanel>
          <TabPanel>
            <iframe
              title="YouTube video player"
              src="https://www.youtube.com/embed/t-Fwh57MWDY"
              width="700"
              height="500"
              frameborder="0"
              allowfullscreen="allowfullscreen"
            ></iframe>
          </TabPanel>
          <TabPanel>
            <iframe
              title="YouTube video player"
              src="https://www.youtube.com/embed/pwF84tPRQu4"
              width="700"
              height="500"
              frameborder="0"
              allowfullscreen="allowfullscreen"
            ></iframe>
          </TabPanel>
          <TabPanel>
            <iframe
              title="YouTube video player"
              src="https://www.youtube.com/embed/ukdZxF2qWfI"
              width="700"
              height="500"
              frameborder="0"
              allowfullscreen="allowfullscreen"
            ></iframe>
          </TabPanel>
          <TabPanel>
            <iframe
              title="YouTube video player"
              src="https://www.youtube.com/embed/iH3ODZ5PYU4"
              width="700"
              height="500"
              frameborder="0"
              allowfullscreen="allowfullscreen"
            ></iframe>
          </TabPanel>
          <TabPanel>
            <iframe
              title="YouTube video player"
              src="https://www.youtube.com/embed/uJG3SVrWzlQ"
              width="700"
              height="500"
              frameborder="0"
              allowfullscreen="allowfullscreen"
            ></iframe>
          </TabPanel>
          <TabPanel>
            <iframe
              title="YouTube video player"
              src="https://www.youtube.com/embed/s7mgGbKzs2k"
              width="700"
              height="500"
              frameborder="0"
              allowfullscreen="allowfullscreen"
            ></iframe>
          </TabPanel>
          <TabPanel>
            <iframe
              title="YouTube video player"
              src="https://www.youtube.com/embed/B5HLwsehc-8"
              width="700"
              height="500"
              frameborder="0"
              allowfullscreen="allowfullscreen"
            ></iframe>
          </TabPanel>
          <TabPanel>
            <iframe
              title="YouTube video player"
              src="https://www.youtube.com/embed/ByCbte_e5PE"
              width="700"
              height="500"
              frameborder="0"
              allowfullscreen="allowfullscreen"
            ></iframe>
          </TabPanel>
          <TabPanel>
            <iframe
              title="YouTube video player"
              src="https://www.youtube.com/embed/Exbm-Bb5XCk"
              width="700"
              height="500"
              frameborder="0"
              allowfullscreen="allowfullscreen"
            ></iframe>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

export default page;
