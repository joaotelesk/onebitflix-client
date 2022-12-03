import Link from "next/link";
import { Container, Button } from "reactstrap";
import { CourseType } from "../../../services/courseService";
import SlideComponent from "../../common/slideComponent";
import styles from "./slideSection.module.scss";

interface props {
  newestCourses: CourseType[];
}

export default function ({ newestCourses }: props) {
  return (
    <>
      <Container className="d-flex flex-column align-items-center py-5">
        <p className={styles.sectionTitles}>AULAS JÁ DISPONÍVEIS</p>
        <SlideComponent course={newestCourses} />
        <Link href="/register">
          <Button outline color="light" className={styles.slideSectionBtn}>
            Se cadastre para acessar!
          </Button>
        </Link>
      </Container>
    </>
  );
}
