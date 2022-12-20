import styles from "../styles/search.module.scss";
import Head from "next/head";
import HeaderAuth from "../src/components/common/headerAuth";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import courseService, { CourseType } from "../src/services/courseService";

export default function Search() {
  const router = useRouter();
  const { name } = router.query;
  const [searchResult, setSearchResult] = useState<CourseType[]>([]);

  async function searchCourse() {
    if (typeof name === "string") {
      const res = await courseService.getSearch(name);

      setSearchResult(res.data.courses);
    }
  }

  useEffect(() => {
    searchCourse();
  }, [name]);
  return (
    <>
      <Head>
        <title>Onebitflix - {name}</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
        <script src="http://jsuites.net/v4/jsuites.js"></script>
      </Head>
      <main>
        <HeaderAuth />
        {searchResult?.map((course) => (
          <div key={course.id}>
            <p>{course.name}</p>
          </div>
        ))}
      </main>
    </>
  );
}
