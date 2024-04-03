"use client";
import image from "../images/invest-commission.png";
import manual from "../images/no-manual.png";
import level from "../images/next-level.png";
import tabs from "../images/keep-tabs.png";
import Image from "next/image";

import "./GetStarted.css";

const GetStarted = () => (
  <div>
    <section className="max-container padding-container flex flex-col gap-4 w-auto  xl:flex-row">
      <div className="relative z-20 flexq flex-co pl-32 my-auto xl:w-1/2 text-black">
        <h1 className="text-5xl font-semibold mb-8">
          Unlock Insights, <br /> Seize Opportunities
        </h1>
        <h3 className="text-base font-light">
          Gain a competitive edge with our intuitive portfolio creation tools,{" "}
          <br />
          allowing you to track market trends and manage your investments
          efficiently. <br /> Stay ahead of the curve with real-time stock
          market insights, <br /> personalized to your preferences.
        </h3>
        <br />
        <button className="px-6 py-2 outline-0 bg-emerald-300 border-0 rounded-3xl text-white">
          Sign Up
        </button>
      </div>

      <div className="relative flex flex-1 pl-8 items-start">
        <Image src={image} width={1000} height={1000} alt="" />
      </div>
    </section>

    <section className="second">
      <div className="trusted-div">
        <div className="trusted-blurb mt-5">
          <h1 className="text-5xl">
            Stay Informed, <br /> Stay Ahead
          </h1>
          <h3>
            Never miss a beat with our comprehensive news alert system. Receive
            timely updates through dictation or excel integration, <br />{" "}
            keeping you informed of market developments and potential
            opportunities.
          </h3>
        </div>
      </div>
    </section>

    <section className="third">
      <Image
        src={manual}
        className="no-manual-pic"
        alt="iPhone with analyst ratings from Merry Money app."
      />
      <div className="no-manual-blurb">
        <h1 className="text-5xl font-semibold mb-8">
          Harnessing AI for Precision
        </h1>
        <h3 className="text-base font-light">
          Experience the future of financial analysis with seamless integration
          of ChatGPT. <br /> Streamline your processes and enhance
          decision-making capabilities with <br />
          AI-driven insights and analysis.
        </h3>
      </div>
    </section>

    <div className="bottom-splash-scroll">
      <section className="fourth">
        <div className="next-level-div">
          <Image
            src={level}
            className="next-level-pic"
            alt="iPhones with stock performance charts from Merry Money app."
          />
        </div>

        <div className="next-level-blurb">
          <h1>
            Personalized Insights, <br /> Tailored to You
          </h1>
          <h3>
            Explore curated stock news tailored to your interests and
            preferences. <br /> Our news aggregator ensures you're always
            up-to-date with the latest <br /> trends and events impacting your
            investments.
          </h3>
        </div>
      </section>

      <section className="fifth">
        <div className="keep-tabs-blurb">
          <h1>Tools for Technical Mastery</h1>
          <h3>
            Empower your analysis with advanced charting tools for technical{" "}
            <br />
            analysis and in-depth company reports. From trend analysis to
            performance metrics, <br /> we provide the tools you need for
            confident decision-making.
          </h3>
        </div>

        <div className="keep-tabs-div">
          <Image src={tabs} className="keep-tabs-pic" />
        </div>
      </section>

      <section className="sixth">
        <div className="trusted-div">
          <div className="trusted-blurb mt-5">
            <h1>
              Empowering Decision-Makers <br /> in India
            </h1>
            <h3>
              Gain a competitive edge with our intuitive portfolio creation
              tools, <br /> allowing you to track market trends and manage your
              investments efficiently. <br /> Stay ahead of the curve with
              real-time stock market insights, personalized to your preferences.
            </h3>
          </div>
        </div>
      </section>

      <section className="seventh">
        <div className="get-started-div">
          <div className="get-started-blurb">
            <h1>Get Started</h1>
            <h3>
              It only takes a few minutes to take control of your financial
              future. Sign up now to <br />
              start investing with Capitalyzer.
            </h3>
          </div>
        </div>
      </section>
    </div>
  </div>
);

export default GetStarted;
