import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import "./style.css";
import Link from "next/link";

const page = () => {
  return (
    <>
      <header style={{ marginBottom: "2rem" }}>
        <div className="row">
          <div>
            <h1>
              <strong>
                Module 1. Introduction to Stock Market (video series)
              </strong>
            </h1>
          </div>
          <div className="text-right">
            <Link href="education">← Back to all video modules</Link>
          </div>
        </div>
      </header>
      <Tabs id="tabs" style={{ display: "flex", gap: "9rem" }}>
        <TabList
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Tab>1. Why should you Invest?</Tab>
          <Tab>2. Market Intermediaries</Tab>
          <Tab>3. Initial Public Offer (IPO)</Tab>
          <Tab>4. Stock prices fluctuation</Tab>
          <Tab>5. Trading platform working</Tab>
          <Tab>6. Stock Market Index</Tab>
          <Tab>7. Clearing & Settlement</Tab>
          <Tab style={{ textAlign: "left" }}>
            8. Corporate actions (Dividends, bonuses, and buybacks)
          </Tab>
          <Tab>9. Order Types</Tab>
          <Tab>10. Getting started</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <iframe
              title="YouTube video player"
              src="https://www.youtube.com/embed/GcZW24SkbHM"
              width="600"
              height="400"
              frameborder="0"
              allowfullscreen="allowfullscreen"
            ></iframe>
          </TabPanel>
          <TabPanel>
            <iframe
              title="YouTube video player"
              src="https://www.youtube.com/embed/C7_JHlsqFlM"
              width="600"
              height="400"
              frameborder="0"
              allowfullscreen="allowfullscreen"
            ></iframe>
          </TabPanel>
          <TabPanel>
            <iframe
              title="YouTube video player"
              src="https://www.youtube.com/embed/SV7v5WRDtLE"
              width="600"
              height="400"
              frameborder="0"
              allowfullscreen="allowfullscreen"
            ></iframe>
          </TabPanel>
          <TabPanel>
            <iframe
              title="YouTube video player"
              src="https://www.youtube.com/embed/HaiM8jPDEhk"
              width="600"
              height="400"
              frameborder="0"
              allowfullscreen="allowfullscreen"
            ></iframe>
          </TabPanel>
          <TabPanel>
            <iframe
              title="YouTube video player"
              src="https://www.youtube.com/embed/-h1R5oIL0PI"
              width="600"
              height="400"
              frameborder="0"
              allowfullscreen="allowfullscreen"
            ></iframe>
          </TabPanel>
          <TabPanel>
            <iframe
              title="YouTube video player"
              src="https://www.youtube.com/embed/z21PrHuEkKg"
              width="600"
              height="400"
              frameborder="0"
              allowfullscreen="allowfullscreen"
            ></iframe>
          </TabPanel>
          <TabPanel>
            <iframe
              title="YouTube video player"
              src="https://www.youtube.com/embed/1ZrF6GCLDL4"
              width="600"
              height="400"
              frameborder="0"
              allowfullscreen="allowfullscreen"
            ></iframe>
          </TabPanel>
          <TabPanel>
            <iframe
              title="YouTube video player"
              src="https://www.youtube.com/embed/Mv93KfHcWaQ"
              width="600"
              height="400"
              frameborder="0"
              allowfullscreen="allowfullscreen"
            ></iframe>
          </TabPanel>
          <TabPanel>
            <iframe
              title="YouTube video player"
              src="https://www.youtube.com/embed/5t5O0MnNJNE"
              width="600"
              height="400"
              frameborder="0"
              allowfullscreen="allowfullscreen"
            ></iframe>
          </TabPanel>
          <TabPanel>
            <iframe
              title="YouTube video player"
              src="https://www.youtube.com/embed/wt6YBnJzbm0"
              width="600"
              height="400"
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
