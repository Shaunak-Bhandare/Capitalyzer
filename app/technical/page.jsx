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
              <strong>Module 2. Technical Analysis (Video Series)</strong>
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
            1. Technical Analysis vs Fundamental Analysis
          </Tab>
          <Tab style={{ textAlign: "left" }}>2. Setting expectations</Tab>
          <Tab style={{ textAlign: "left" }}>3. Chart Types</Tab>
          <Tab style={{ textAlign: "left" }}>4. Timeframes</Tab>
          <Tab style={{ textAlign: "left" }}>
            5. Key assumption of technical analysis
          </Tab>
          <Tab style={{ textAlign: "left" }}>
            6. Understanding candlestick patterns
          </Tab>
          <Tab style={{ textAlign: "left" }}>
            7. Single candlestick patterns
          </Tab>
          <Tab style={{ textAlign: "left" }}>
            8. Multiple candlestick patterns
          </Tab>
          <Tab style={{ textAlign: "left" }}>9. Support and Resistance</Tab>
          <Tab style={{ textAlign: "left" }}>10. Technical indicators</Tab>
          <Tab style={{ textAlign: "left" }}>11. Moving averages</Tab>
          <Tab style={{ textAlign: "left" }}>12. Your trading checklist</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <iframe
              title="YouTube video player"
              src="https://www.youtube.com/embed/yzRP-mA2eiE"
              width="700"
              height="500"
              frameborder="0"
              allowfullscreen="allowfullscreen"
            ></iframe>
          </TabPanel>
          <TabPanel>
            <iframe
              title="YouTube video player"
              src="https://www.youtube.com/embed/0uA1UJzTI4Q"
              width="700"
              height="500"
              frameborder="0"
              allowfullscreen="allowfullscreen"
            ></iframe>
          </TabPanel>
          <TabPanel>
            <iframe
              title="YouTube video player"
              src="https://www.youtube.com/embed/RNu14To1gdM"
              width="700"
              height="500"
              frameborder="0"
              allowfullscreen="allowfullscreen"
            ></iframe>
          </TabPanel>
          <TabPanel>
            <iframe
              title="YouTube video player"
              src="https://www.youtube.com/embed/pYC5RfXAm-4"
              width="700"
              height="500"
              frameborder="0"
              allowfullscreen="allowfullscreen"
            ></iframe>
          </TabPanel>
          <TabPanel>
            <iframe
              title="YouTube video player"
              src="https://www.youtube.com/embed/37wji6rGKo4"
              width="700"
              height="500"
              frameborder="0"
              allowfullscreen="allowfullscreen"
            ></iframe>
          </TabPanel>
          <TabPanel>
            <iframe
              title="YouTube video player"
              src="https://www.youtube.com/embed/AYG2g3O7jKc"
              width="700"
              height="500"
              frameborder="0"
              allowfullscreen="allowfullscreen"
            ></iframe>
          </TabPanel>
          <TabPanel>
            <iframe
              title="YouTube video player"
              src="https://www.youtube.com/embed/mKfl8A1VOEM"
              width="700"
              height="500"
              frameborder="0"
              allowfullscreen="allowfullscreen"
            ></iframe>
          </TabPanel>
          <TabPanel>
            <iframe
              title="YouTube video player"
              src="https://www.youtube.com/embed/yP83rD7DjTg"
              width="700"
              height="500"
              frameborder="0"
              allowfullscreen="allowfullscreen"
            ></iframe>
          </TabPanel>
          <TabPanel>
            <iframe
              title="YouTube video player"
              src="https://www.youtube.com/embed/UBkCkBme2Hg"
              width="700"
              height="500"
              frameborder="0"
              allowfullscreen="allowfullscreen"
            ></iframe>
          </TabPanel>
          <TabPanel>
            <iframe
              title="YouTube video player"
              src="https://www.youtube.com/embed/veWVgyucBqU"
              width="700"
              height="500"
              frameborder="0"
              allowfullscreen="allowfullscreen"
            ></iframe>
          </TabPanel>
          <TabPanel>
            <iframe
              title="YouTube video player"
              src="https://www.youtube.com/embed/810jmf7drFw"
              width="700"
              height="500"
              frameborder="0"
              allowfullscreen="allowfullscreen"
            ></iframe>
          </TabPanel>
          <TabPanel>
            <iframe
              title="YouTube video player"
              src="https://www.youtube.com/embed/4W0mOUNMWpc"
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
