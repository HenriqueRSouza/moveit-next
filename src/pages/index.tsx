import { ExperienceBar } from "../components/ExperienceBar";
import Head from 'next/head';
import { Profile } from "../components/Profile";

import styles from '../styles/pages/Home.module.css';
import { CompletedChallengers } from "../components/CompletedChallengers";
import { Countdown } from "../components/Countdown";
import { ChallangeBox } from "../components/ChallangeBox";
import { CountdownProvider } from "../contexts/CountdownContext";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>MOVEIT</title>
      </Head>
      
      <ExperienceBar />
      
      <CountdownProvider>
        <section>
          <div>
            <Profile />
            <CompletedChallengers />
            <Countdown /> 
          </div>
          <div>
            <ChallangeBox />
          </div>
        </section>
      </CountdownProvider>
    </div>
  )
}
