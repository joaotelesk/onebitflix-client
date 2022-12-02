import Link from "next/link";
import { Button, Container } from "reactstrap";
import styles from "./headerNoAuth.module.scss";

export default function HeaderNoAuth() {
  return (
    <>
      <div className={styles.ctaSection}>
        <img
          src="/homeNoAuth/logoCta.png"
          alt="logoCta"
          className={styles.imgCta}
        />
        <p>Se Cadastre para ter aceso aos cursos</p>
        <img
          src="/homeNoAuth/logoCta.png"
          alt="logoCta"
          className={styles.imgCta}
        />
      </div>
      <Container className={styles.nav}>
        <img
          src="/LogoOnebitflix.svg"
          alt="LogoOnebitflix"
          className={styles.imgLogoNav}
        />
        <div>
          <Link href="/login">
            <Button className={styles.navBtn} outline>
              Entrar
            </Button>
          </Link>
          <Link href="/register">
            <Button className={styles.navBtn} outline>
              Quero me registrar
            </Button>
          </Link>
        </div>
      </Container>
    </>
  );
}
