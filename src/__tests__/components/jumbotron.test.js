import { getByText, render, screen } from "@testing-library/react";
import { Jumbotron } from "../../components";
import jumboData from "../../fixtures/jumbo.json";

describe("<Jumbotron />", () => {
  it("renders <Jumbotron /> with populated data", () => {
    const { container } = render(
      <Jumbotron.Container>
        {jumboData.map((item) => (
          <Jumbotron key={item.id}>
            <Jumbotron.Pane>
              <Jumbotron.Title>
                <p>{item.title}</p>
              </Jumbotron.Title>
              <Jumbotron.SubTitle>
                <p>{item.subTitle}</p>
              </Jumbotron.SubTitle>
            </Jumbotron.Pane>
            <Jumbotron.Pane>
              <Jumbotron.Image
                src={item.image}
                alt={item.alt}
                data-testid={`${item.id}-jumbo-image`}
            />
            </Jumbotron.Pane>
          </Jumbotron>
        ))}
      </Jumbotron.Container>
    );

    expect(screen.getByText("Enjoy on your TV.")).toBeTruthy()
    expect(screen.getByAltText("Tiger King on Netflix")).toBeTruthy()
    expect(screen.getByTestId("1-jumbo-image")).toBeTruthy()
    expect(screen.getByText("Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.")).toBeTruthy()
    expect(container.firstChild).toMatchSnapshot()
  });
});
