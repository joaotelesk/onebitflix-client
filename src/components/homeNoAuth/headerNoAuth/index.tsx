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
      <Container>
        <img src="/LogoOnebitflix.svg" alt="LogoOnebitflix" />
        <div></div>
        <Button outline color="primary">
          Entrar
        </Button>
      </Container>
    </>
  );
}
