import React from "react";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  SimpleGrid,
  Heading,
  Button,
} from "@chakra-ui/react";
import "./style.css";

const page = () => {
  return (
    <>
      <h1 id="text" className="font-bold text-5xl mx-10">
        Modules
      </h1>
      <br />
      <br />
      <SimpleGrid
        spacing={4}
        templateColumns="repeat(3,1fr)"
        className="mb-20 mx-10"
        id="card-grid"
      >
        <Card
          id="card1"
          className="custom-card"
          style={{ backgroundColor: "lightcyan" }}
        >
          <CardHeader>
            <Link href="intro">
              <Heading size="md">Introduction to Stock Markets</Heading>
            </Link>
          </CardHeader>
          <CardBody>
            <Text>10 chapters</Text>
            <br />
            <Text>
              This video module on Introduction to Stock markets will
              familiarize you with the fundamentals of the stock market, how to
              get started, and the various intermediaries in the eco system.
            </Text>
          </CardBody>
          <CardFooter>
            <Link href="intro">
              <Button>View module</Button>
            </Link>
          </CardFooter>
        </Card>

        <Card
          id="card2"
          className="custom-card"
          style={{ backgroundColor: "aliceblue" }}
        >
          <CardHeader>
            <Link href="technical">
              <Heading size="md"> Technical Analysis</Heading>
            </Link>
          </CardHeader>
          <CardBody>
            <Text>12 chapters</Text>
            <br />
            <Text>
              Technical Analysis (TA) plays an important role in developing a
              point of view. Like every other research, TA also has its own
              attributes. In this module, we discover all those complex
              attributes of TA, study various patterns, indicators, and theories
              that will help you as a trader to find upright trading
              opportunities in the market.
            </Text>
          </CardBody>
          <CardFooter>
            <Link href="technical">
              <Button>View module</Button>
            </Link>
          </CardFooter>
        </Card>

        <Card
          id="card3"
          className="custom-card"
          style={{ backgroundColor: "azure" }}
        >
          <CardHeader>
            <Link href="fundamental">
              <Heading size="md">Fundamental Analysis</Heading>
            </Link>
          </CardHeader>
          <CardBody>
            <Text>10 chapters</Text>
            <br />
            <Text>
              Fundamental Analysis (FA) is a holistic approach to study a
              business. If you are an investor that is looking for long term
              investments this module will help you understand Equity research,
              help you in reading the financial statements, annual reports,
              calculation of Financial Ratio, Analysis and most importantly help
              you in evaluating the intrinsic value of a stock to find long-term
              investing opportunities.
            </Text>
          </CardBody>
          <CardFooter>
            <Link href="fundamental">
              <Button>View module</Button>
            </Link>
          </CardFooter>
        </Card>
      </SimpleGrid>
    </>
  );
};

export default page;
