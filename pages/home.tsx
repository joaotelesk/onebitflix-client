import styles from "../styles/registerLogin.module.scss";
import Head from "next/head";
import HeaderGeneric from "../src/components/common/headerGeneric";

import Footer from "../src/components/common/footer";
import authService from "../src/services/authService";
import { useRouter } from "next/router";

import { useEffect, useState } from "react";
import HeaderAuth from "../src/components/common/headerAuth";
import FeaturedSection from "../src/components/homeAuth/featuredSection";
import NewestCategory from "../src/components/homeAuth/newestCategory";
import FavoriteCategory from "../src/components/homeAuth/favoriteCategory";
import FeaturedCategory from "../src/components/homeAuth/featuredCategory";
import ListCategories from "../src/components/homeAuth/listCategories";

export default function HomeAuth() {
  return (
    <>
      <Head>
        <title>Onebitflix - home</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
      </Head>
      <main>
        <FeaturedSection />
        <NewestCategory />
        <FavoriteCategory />
        <FeaturedCategory />
        <ListCategories />
        <Footer />
      </main>
    </>
  );
}
