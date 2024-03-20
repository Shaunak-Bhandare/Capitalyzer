"use client";
import image from "../images/invest-commission.png";
import manual from "../images/no-manual.png";
import level from "../images/next-level.png";
import tabs from "../images/keep-tabs.png";
import pic from "../images/cash-mgmt-coming.png";
import trusted from "../images/trusted.png";
import Image from "next/image";

import "./GetStarted.css";

const GetStarted = () => (
  <div>
    <section className="max-container padding-container flex flex-col gap-4 w-auto  xl:flex-row">
      <div className="relative z-20 flexq flex-co pl-32 my-auto xl:w-1/2 text-black">
        <h1 className="text-5xl font-semibold mb-8">
          Invest <br /> Commission-Free
        </h1>
        <h3 className="text-base font-light">
          Invest in stocks, ETFs, options, and <br /> cryptocurrencies, all
          commission-free, <br /> right from your phone or desktop.
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
      <h2>
        Cash management, <br /> coming soon.
      </h2>
      <Image src={pic} className="cat-pic" alt="flying cat." />
    </section>

    <section className="third">
      <Image
        src={manual}
        className="no-manual-pic"
        alt="iPhone with analyst ratings from Merry Money app."
      />
      <div className="no-manual-blurb">
        <h1 className="text-5xl font-semibold mb-8">No Manual Needed</h1>
        <h3 className="text-base font-light">
          Intuitively designed for newcomers and experts alike,
          <br /> Capitalyzer gives you a clear picture of your portfolio’s
          <br /> performance over time, so you can adjust your positions
          <br /> and learn by doing.
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
          <h1>Next Level Investing</h1>
          <h3>
            Access professional research reports, trade on margin, and <br />
            make bigger instant deposits with Capitalyzer Gold—all starting{" "}
            <br />
            at $5 a month.
          </h3>
        </div>
      </section>

      <section className="fifth">
        <div className="keep-tabs-blurb">
          <h1>
            Keep Tabs on the <br /> Market
          </h1>
          <h3>
            Access tools and features such as price movement <br />
            notifications and customized investment news so you <br />
            can find the right moment to invest.
          </h3>
        </div>

        <div className="keep-tabs-div">
          <Image src={tabs} className="keep-tabs-pic" />
        </div>
      </section>

      <section className="sixth">
        <div className="trusted-div">
          <div className="eagle-div">
            <Image
              src={trusted}
              className="trusted-pic"
              alt="Sprite of patriotic American eagle holding baseball bat and under three stars."
            />
          </div>

          <div className="trusted-blurb mt-5">
            <h1>
              Trusted by Millions <br /> in India
            </h1>
            <h3>
              Capitalyzer is a member of SIPC, which protects securities
              customers of its <br />
              members up to $500,000 (including $250,000 for claims for cash).{" "}
              <br />
              Explanatory brochure available upon request or at{" "}
              <a href="https://www.sipc.org/">www.sipc.org.</a>
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

          <div className="get-started-button">
            <button className="signup-redirect-button">Sign Up</button>
          </div>
        </div>
      </section>
    </div>
  </div>
);

export default GetStarted;
