import { getByText, render, screen } from "@testing-library/react";
import { Profiles } from "../../components";

describe('<Profiles />', () => {
  it('render the <Profiles /> with populated data', () => {
    const { container } = render(
        <Profiles>
            <Profiles.Title>Who's watching?</Profiles.Title>
            <Profiles.List>
                <Profiles.User
                    onClick={() => ({})}
                >
                    <Profiles.Picture src="/images/ok.png" data-testid="profile-picture" />
                    <Profiles.Name>Usama Mahmud</Profiles.Name>
                </Profiles.User>
            </Profiles.List>
        </Profiles>
    )

    expect(screen.getByText("Who's watching?")).toBeTruthy()
    expect(screen.getByTestId("profile-picture")).toBeTruthy()
    expect(screen.getByText("Usama Mahmud")).toBeTruthy()
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render the <Profiles /> with populated data but misc profile image', () => {
    const { container } = render(
        <Profiles>
            <Profiles.Title>Who's watching?</Profiles.Title>
            <Profiles.List>
                <Profiles.User
                    onClick={() => ({})}
                >
                    <Profiles.Picture data-testid="profile-picture-misc" />
                    <Profiles.Name>Usama Mahmud</Profiles.Name>
                </Profiles.User>
            </Profiles.List>
        </Profiles>
    )

    expect(screen.getByText("Who's watching?")).toBeTruthy()
    expect(screen.getByTestId("profile-picture-misc")).toBeTruthy()
    expect(screen.getByText("Usama Mahmud")).toBeTruthy()
    expect(container.firstChild).toMatchSnapshot()
  })
})
