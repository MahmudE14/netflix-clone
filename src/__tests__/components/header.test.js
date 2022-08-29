import { fireEvent, render, screen } from "@testing-library/react";
import { Header } from "../../components";

jest.mock("react-router-dom");

describe("<Header />", () => {
  it("renders the <Header /> with a background", () => {
    const { container } = render(
      <Header>
        <Header.Frame>
          <Header.Logo src="/logo.svg" alt="Netflix" />
          <Header.TextLink active="true">Hello I am a link!</Header.TextLink>
        </Header.Frame>
      </Header>
    );

    expect(screen.getByText("Hello I am a link!")).toBeTruthy();
    expect(screen.getByTestId("header-bg")).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders the <Header /> without a background -", () => {
    const { container } = render(
      <Header bg={false}>
        <Header.Frame>
          <Header.Logo src="/logo.svg" alt="Netflix" />
          <Header.ButtonLink>Sign In</Header.ButtonLink>
          <Header.TextLink active="false">Hello I am a link!</Header.TextLink>
        </Header.Frame>
      </Header>
    );

    expect(screen.getByText("Hello I am a link!")).toBeTruthy();
    expect(screen.queryByTestId("header-bg")).toBeFalsy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders the full <Header /> with a background", () => {
    const { container } = render(
      <Header src="joker1" dontShowOnSmallViewPort>
        <Header.Frame>
          <Header.Group>
            <Header.Logo src='/images/logo.svg' alt="Netflix" />
            <Header.TextLink
              onClick={() => {}}
              active={false}
            >
              Films
            </Header.TextLink>
            <Header.TextLink
              onClick={() => {}}
              active={false}
            >
              Series
            </Header.TextLink>
          </Header.Group>
          <Header.Group>
            <Header.Profile>
              <Header.Search
                searchTerm="Joker"
                setSearchTerm={() => {}}
              />
              <Header.Picture src="/images/test.png" />
              <Header.Dropdown>
                <Header.Group>
                  <Header.Picture src="/images/test.png" />
                  <Header.TextLink>Usama Mahmud</Header.TextLink>
                </Header.Group>
                <Header.Group>
                  <Header.TextLink onClick={() => {}}>
                    Sign Out
                  </Header.TextLink>
                </Header.Group>
              </Header.Dropdown>
            </Header.Profile>
          </Header.Group>
        </Header.Frame>
        <Header.Feature>
          <Header.FeatureCallout>Watch Joker Now</Header.FeatureCallout>
          <Header.Text>
            Forever alone in a crowd, failed comedian Arthur Fleck seeks
            connection as he walks the streets of Gotham City. Arthur wears two
            masks -- the one he paints for his day job as a clown, and the guise
            he projects in a futile attempt to feel like he's part of the world
            around him.
          </Header.Text>
          <Header.PlayButton>Play</Header.PlayButton>
        </Header.Feature>
      </Header>
    );

    const movieDescriptionText = `Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham City. Arthur wears two masks -- the one he paints for his day job as a clown, and the guise he projects in a futile attempt to feel like he's part of the world around him.`

    expect(screen.getByTestId("search-input")).toBeTruthy();
    expect(screen.getByTestId("search-input").value).toBe('Joker')
    fireEvent.change(screen.getByTestId("search-input"), {
        target: { value: 'family guy' },
    })
    fireEvent.click(screen.getByTestId("search-click"))
    
    expect(screen.getByText("Series")).toBeTruthy();
    expect(screen.getByText("Films")).toBeTruthy();
    expect(screen.getByText("Usama Mahmud")).toBeTruthy()
    expect(screen.getByText("Watch Joker Now")).toBeTruthy()
    expect(screen.getByText("Sign Out")).toBeTruthy()
    expect(screen.getByText(movieDescriptionText)).toBeTruthy()
    expect(screen.getByText("Play")).toBeTruthy()
    expect(container.firstChild).toMatchSnapshot();
  });
});
