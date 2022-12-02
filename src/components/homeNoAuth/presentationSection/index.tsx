import styles from "./presentationSection.module.scss";
import { Container, Row, Col, Button } from "reactstrap";
import Link from "next/link";

export function PresentationSection() {
  return (
    <>
      <Container className="py-4 container">
        <Row>
          <Col
            md
            className="d-flex flex-column justify-content-center align-items-start"
          >
            <p className={styles.subTitle}>ACESSO ILIMITADO</p>
            <p className={styles.title}>
              Tenha acesso aos melhores
              <br /> tutoriais de programação.
            </p>
            <p className={styles.description}>
              Estude de onde estiver, a qualquer momento, e continue <br />
              evoluindo como programador.
            </p>
            <Link href="/register" className={styles.link}>
              <Button className={styles.btnCta} outline>
                ACESSE AGORA
                <img
                  src="/buttonPlay.svg"
                  alt="buttonImg"
                  className={styles.btnImg}
                />
              </Button>
            </Link>
          </Col>
          <Col md>
            <img
              src="/homeNoAuth/imgPresentation.png"
              alt="imgIndex"
              className={styles.imgPresentation}
            />
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center pt-4">
            <img
              src="/homeNoAuth/iconArrowDown.svg"
              alt="arrowDown"
              className={styles.arrowDown}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}
