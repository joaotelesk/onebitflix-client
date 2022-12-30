import styles from "../styles/search.module.scss";
import Head from "next/head";
import HeaderAuth from "../src/components/common/headerAuth";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import courseService, { CourseType } from "../src/services/courseService";
import SearchCard from "../src/components/searchCard";
import { Container } from "reactstrap";
import Footer from "../src/components/common/footer";
import PageSpinner from "../src/components/common/spinner";

export default function Search() {
  const router = useRouter();
  const { name } = router.query;
  const [searchResult, setSearchResult] = useState<CourseType[]>([]);
  const [loading, setLoading] = useState(true);

  async function searchCourse() {
    if (typeof name === "string") {
      const res = await courseService.getSearch(name);

      setSearchResult(res.data.courses);
    }
  }

  useEffect(() => {
    searchCourse();
  }, [name]);

  useEffect(() => {
    if (!sessionStorage.getItem("onebitflix-token")) {
      router.push("/login");
    } else {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <PageSpinner />;
  }
  return (
    <>
      <Head>
        <title>Onebitflix - {name}</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
        <script src="http://jsuites.net/v4/jsuites.js"></script>
      </Head>
      <main className={styles.main}>
        <div className={styles.headFooterBg}>
          <HeaderAuth />
        </div>
        {searchResult.length >= 1 ? (
          <div className={styles.searchContainer}>
            <Container className="d-flex flex-wrap justify-content-center gap-5 py-5">
              {searchResult?.map((course) => (
                <SearchCard key={course.id} course={course} />
              ))}
            </Container>
          </div>
        ) : (
          <div className={styles.searchContainer}>
            <p className={styles.noSearchResult}>Resultado não encontrado</p>
          </div>
        )}
        <div className={styles.headFooterBg}>
          <Footer />
        </div>
      </main>
    </>
  );
}
