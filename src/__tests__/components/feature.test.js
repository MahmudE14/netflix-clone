import { render, screen } from "@testing-library/react";
import { Feature } from "../../components";

describe("<Feature />", () => {
  it("renders the <Footer /> with populated data", () => {
    const { container } = render(
      <Feature>
        <Feature.Title>Unlimited films, TV programmes and more.</Feature.Title>
        <Feature.SubTitle>Watch anywhere. cancel at any time.</Feature.SubTitle>
      </Feature>
    );

    expect(screen.getByText('Unlimited films, TV programmes and more.')).toBeTruthy()
    expect(screen.getByText('Watch anywhere. cancel at any time.')).toBeTruthy()
    expect(container.firstChild).toMatchSnapshot()
  });

  it("renders the <Footer /> with just a title", () => {
    const { container } = render(
      <Feature>
        <Feature.Title>Unlimited films, TV programmes and more.</Feature.Title>
      </Feature>
    );

    expect(screen.getByText('Unlimited films, TV programmes and more.')).toBeTruthy()
    expect(screen.queryByText('Watch anywhere. cancel at any time.')).toBeFalsy()
    expect(container.firstChild).toMatchSnapshot()
  });

  it("renders the <Footer /> with just a subtitle", () => {
    const { container } = render(
      <Feature>
        <Feature.SubTitle>Watch anywhere. cancel at any time.</Feature.SubTitle>
      </Feature>
    );

    expect(screen.queryByText('Unlimited films, TV programmes and more.')).toBeFalsy()
    expect(screen.getByText('Watch anywhere. cancel at any time.')).toBeTruthy()
    expect(container.firstChild).toMatchSnapshot()
  });
});
