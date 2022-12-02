import Head from "next/head";
import CardsSection from "../src/components/homeNoAuth/cardsSection";
import HeaderNoAuth from "../src/components/homeNoAuth/headerNoAuth";
import { PresentationSection } from "../src/components/homeNoAuth/presentationSection";
import styles from "../styles/HomeNoAuth.module.scss";

export default function HomeNoAuth() {
  return (
    <>
      <Head>
        <title>Onbitflix</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
        <meta property="og:title" content="Onebitflix" key="title" />
        <meta
          name="description"
          content="tenha acesso aos melhores conteúdo de programação de uma forma simples e fácil!"
        />
      </Head>
      <main>
        <div className={styles.sectionBackground}>
          <HeaderNoAuth />
          <PresentationSection />
        </div>
        <CardsSection />
      </main>
    </>
  );
}
