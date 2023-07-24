import i18next from "i18next";
import { InferGetStaticPropsType } from "next";
import Head from "next/head";
import { useState, useCallback } from "react";

import RadioBtnLng from "../components/RadioBtnLng";
import { BlackCardProps } from "../components/BlackCard";
import { WhiteCardProps } from "../components/WhiteCard";
import { WhiteCardChipsProps } from "../components/WhiteCardChips";

import Main from "../sections/Main";
import WhoIAm from "../sections/WhoIAm";
import WhatCanIDo from "../sections/WhatCanIDo";
import Projects from "../sections/Projects";
import Challenges from "../sections/Challenges";
import Random from "../sections/Random";
import Inspiration from "../sections/Inspiration";
import Footer from "../sections/Footer";
import { LANGUAGES, BACKEND_URL } from "../constants";

const Home = ({ challenges, projects, random } : InferGetStaticPropsType<typeof getStaticProps>) => {
  const [currentLng, setCurrentLng] = useState(LANGUAGES.EN);

  const handleChange = useCallback((e) => {
    const { value } = e.target;
    i18next.changeLanguage(value);
    setCurrentLng(value);
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#2A3720" />
        <meta name="content" content="JS, CSS, HTML, NextJS, TypeScript, Personal page, Portfolio, Web developer" />
        <meta name="description" content="Henry Zarza: Web developer" />
        <title>Henry Zarza | Web developer</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/192.png" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <RadioBtnLng currentLng={currentLng} onChange={handleChange} />
      <main className="main-content">
        <Main />
        <WhoIAm />
        <WhatCanIDo />
        {projects && <Projects projects={projects} />}
        {challenges && <Challenges data={challenges} />}
        {random && <Random data={random} />}
        <Inspiration />
        <Footer />
      </main>
    </>
  )
}

export const getStaticProps = async () => {
  // projects
  const resProjects = await fetch(`${BACKEND_URL}projects`);
  const projects: WhiteCardProps['data'][] = await resProjects.json();
  // challenges
  const res = await fetch(`${BACKEND_URL}challenges`);
  const challenges: BlackCardProps['data'][] = await res.json();
  // random
  const resRandom = await fetch(`${BACKEND_URL}random`);
  const random: WhiteCardChipsProps['data'][] = await resRandom.json();

  return {
    props: {
      challenges,
      projects,
      random
    }
  }
}

export default Home;
