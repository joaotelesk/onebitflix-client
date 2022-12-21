import styles from "../../styles/coursePage.module.scss";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import HeaderAuth from "../../src/components/common/headerAuth";
import courseService, { CourseType } from "../../src/services/courseService";
import { Button, Container } from "reactstrap";

export default function CoursePage() {
  const [course, setCourse] = useState<CourseType>();
  const [liked, setLiked] = useState(false);
  const [favorited, setFavorited] = useState(false);
  const router = useRouter();
  const { id } = router.query;

  async function getCourse() {
    if (typeof id !== "string") return;

    const res = await courseService.getCourse(id);

    if (res.status === 200) {
      setCourse(res.data);
      setLiked(res.data.liked);
      setFavorited(res.data.favorited);
    }
  }

  useEffect(() => {
    getCourse();
  }, [id]);

  async function HandleLikeCourse() {
    if (typeof id !== "string") return;

    if (liked === true) {
      await courseService.removeLike(id);
      setLiked(false);
    } else {
      await courseService.addLike(id);
      setLiked(true);
    }
  }
  async function HandleFavoriteCourse() {
    if (typeof id !== "string") return;

    if (favorited === true) {
      await courseService.removeToFav(id);
      setFavorited(false);
    } else {
      await courseService.addToFav(id);
      setFavorited(true);
    }
  }
  return (
    <>
      <Head>
        <title>Onebitflix - {course?.name}</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
      </Head>
      <main>
        <div
          style={{
            backgroundImage: `linear-gradient(to bottom, #6666661a, #151515),
          url(${process.env.NEXT_PUBLIC_BASEURL}/${course?.thumbnailUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "550px",
          }}
        >
          <HeaderAuth />
        </div>
        <Container className={styles.courseInfo}>
          <p className={styles.courseTitle}>{course?.name}</p>
          <p className={styles.courseDescription}>{course?.synopsis}</p>
          <Button outline className={styles.button}>
            ASSISTIR AGORA
            <img
              src="/buttonPlay.svg"
              alt="buttonImg"
              className={styles.buttonImg}
            />
          </Button>
          <div className={styles.interactions}>
            {liked === false ? (
              <img
                src="/course/iconLike.svg"
                alt="likeImage"
                className={styles.interactionsImg}
                onClick={HandleLikeCourse}
              />
            ) : (
              <img
                src="/course/iconLiked.svg"
                alt="likeImage"
                className={styles.interactionsImg}
                onClick={HandleLikeCourse}
              />
            )}
            {favorited === false ? (
              <img
                src="/course/iconAddFav.svg"
                alt="favoritedImage"
                className={styles.interactionsImg}
                onClick={HandleFavoriteCourse}
              />
            ) : (
              <img
                src="/course/iconFavorited.svg"
                alt="favoritedImage"
                className={styles.interactionsImg}
                onClick={HandleFavoriteCourse}
              />
            )}
          </div>
        </Container>
      </main>
    </>
  );
}
