import styles from "../../styles/coursePage.module.scss";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import HeaderAuth from "../../src/components/common/headerAuth";
import courseService, { CourseType } from "../../src/services/courseService";

export default function CoursePage() {
  const [course, setCourse] = useState<CourseType>();
  const router = useRouter();
  const { id } = router.query;

  async function getCourse() {
    if (typeof id !== "string") return;

    const res = await courseService.getCourse(id);

    if (res.status === 200) {
      setCourse(res.data);
    }
  }

  useEffect(() => {
    getCourse();
  }, [id]);
  return (
    <>
      <Head>
        <title>Onebitflix - {course?.name}</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
      </Head>
      <main>
        <HeaderAuth />
        <p>{course?.name}</p>
      </main>
    </>
  );
}
