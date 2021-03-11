import Container from "./container";
import Cta from "./cta";

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <section className="section">
          <Cta />
        </section>
        <p className="center space--bottom-3">
          Copyright AiMug 2021 •{" "}
          <a href="mailto:lyket.dev@gmail.com">Write to us</a>
        </p>
      </Container>
    </footer>
  );
}
