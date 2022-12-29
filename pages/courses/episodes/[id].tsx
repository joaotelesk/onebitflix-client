import styles from "../../../styles/episodePlayer.module.scss";
import Head from "next/head";
import ReactPlayer from "react-player";
import { useRouter } from "next/router";
import { Button, Container } from "reactstrap";
import { useEffect, useRef, useState } from "react";

import courseService, { CourseType } from "../../../src/services/courseService";
import HeaderGeneric from "../../../src/components/common/headerGeneric";
import PageSpinner from "../../../src/components/common/spinner";

const EpisodePlayer = function () {
  const router = useRouter();
  const episodeOrder = parseFloat(router.query.id?.toString() || "");

  const courseId = router.query.courseid?.toString() || "";
  const [course, setCourse] = useState<CourseType>();

  const playerRef = useRef<ReactPlayer>(null);

  const [loading, setLoading] = useState(true);

  const getCourse = async function () {
    if (typeof courseId !== "string") return;

    const res = await courseService.getCourse(courseId);
    if (res.status === 200) {
      setCourse(res.data);
    }
  };
  const handleLastEpisode = () => {
    router.push(`/courses/episodes/${episodeOrder - 1}?courseid${course?.id}`);
  };
  const handleNextEpisode = () => {
    router.push(`/courses/episodes/${episodeOrder + 1}?courseid${course?.id}`);
  };
  useEffect(() => {
    getCourse();
  }, [courseId]);

  useEffect(() => {
    if (!sessionStorage.getItem("onebitflix-token")) {
      router.push("/login");
    } else {
      setLoading(false);
    }
  }, []);

  if (course?.episodes == undefined) return <PageSpinner />;

  if (loading) {
    return <PageSpinner />;
  }

  return (
    <>
      <Head>
        <title>Onebitflix - {course.episodes[episodeOrder].name}</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
      </Head>
      <main>
        <HeaderGeneric
          logoUrl="/home"
          btnContent={`Voltar para o curso`}
          btnUrl={`/courses/${courseId}`}
        />
        <Container className="d-flex flex-column align-items-center gap-3 pt-3">
          <p className={styles.episodeTitle}>
            {course.episodes[episodeOrder].name}
          </p>
          {typeof window == "undefined" ? null : (
            <ReactPlayer
              className={styles.player}
              url={`${
                process.env.NEXT_PUBLIC_BASEURL
              }/episodes/stream?videoUrl=${
                course.episodes[episodeOrder].videoUrl
              }&token=${sessionStorage.getItem("onebitflix-token")}`}
              controls
              ref={playerRef}
            />
          )}
          <div className={styles.episodeButtonDiv}>
            <Button
              className={styles.episodeButton}
              disabled={episodeOrder === 0 ? true : false}
              onClick={handleLastEpisode}
            >
              <img
                src="/episode/iconArrowLeft.svg"
                alt="SetaParaEsquerda"
                className={styles.arrowImg}
              />
            </Button>
            <Button
              className={styles.episodeButton}
              disabled={
                episodeOrder + 1 === course.episodes.length ? true : false
              }
              onClick={handleNextEpisode}
            >
              <img
                src="/episode/iconArrowRight.svg"
                alt="SetaParaDireita"
                className={styles.arrowImg}
              />
            </Button>
          </div>
          <p className="text-center py-4">
            {course.episodes[episodeOrder].synopsis}
          </p>
        </Container>
      </main>
    </>
  );
};

export default EpisodePlayer;
