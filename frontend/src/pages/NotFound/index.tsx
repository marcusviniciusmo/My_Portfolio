import { NotFoundContainer, Section, Image, Texts, Link } from "./styles";

export function NotFound() {
  return (
    <NotFoundContainer>
      <Section>
        <h1>404</h1>
        <Image />

        <Texts>
          <h3>Look like you're lost</h3>

          <p>the page you are looking for not available!</p>
          <Link href="/">Go to Home</Link>
        </Texts>
      </Section>
    </NotFoundContainer>
  );
}
