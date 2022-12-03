import { Container } from "reactstrap";
import styles from "./footer.module.scss";

export default function Footer() {
  return (
    <>
      <Container className={styles.footer}>
        <img
          src="/logoOnebitcode.svg"
          alt="LogoFooter"
          className={styles.footerLogo}
        />
        <a
          href="http://onebitcode.com"
          target={"blank"}
          className={styles.footerLink}
        >
          ONEBITCODE.COM
        </a>
      </Container>
    </>
  );
}
