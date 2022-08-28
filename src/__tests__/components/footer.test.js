import { render, screen } from "@testing-library/react";
import { Footer } from "../../components";

describe("<Footer />", () => {
  it("renders the <Footer /> with populated data", () => {
    const { container, getByText } = render(
      <Footer>
        <Footer.Title>Question? Contact Us.</Footer.Title>
        <Footer.Break />
        <Footer.Row>
          <Footer.Column>
            <Footer.Link href="#0">FAQ</Footer.Link>
            <Footer.Link href="#0">Investor Relations</Footer.Link>
            <Footer.Link href="#0">Ways to Watch</Footer.Link>
            <Footer.Link href="#0">Corporate Information</Footer.Link>
            <Footer.Link href="#0">Netflix Originals</Footer.Link>
          </Footer.Column>
        </Footer.Row>
        <Footer.Break />
        <Footer.Text>Netflix United Kingdom</Footer.Text>
      </Footer>
    );

    expect(screen.getByText('Question? Contact Us.')).toBeTruthy()
    expect(screen.getByText('FAQ')).toBeTruthy()
    expect(screen.getByText('Investor Relations')).toBeTruthy()
    expect(screen.getByText('Ways to Watch')).toBeTruthy()
    expect(screen.getByText('Corporate Information')).toBeTruthy()
    expect(screen.getByText('Netflix Originals')).toBeTruthy()
    expect(container.firstChild).toMatchSnapshot()
  });
});
