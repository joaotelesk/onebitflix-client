import styles from "../styles/registerLogin.module.scss";
import Head from "next/head";
import HeaderGeneric from "../src/components/common/headerGeneric";

import Footer from "../src/components/common/footer";
import authService from "../src/services/authService";
import { useRouter } from "next/router";

import { useEffect, useState } from "react";
import HeaderAuth from "../src/components/common/headerAuth";

export default function HomeAuth() {
  return (
    <>
      <Head>
        <title>Onebitflix - home</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
      </Head>
      <main>
        <HeaderAuth />
      </main>
    </>
  );
}
