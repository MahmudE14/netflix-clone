import { render, screen } from "@testing-library/react";
import { Form } from "../../components";
import { Link as ReactRouterLink } from "react-router-dom";

jest.mock('react-router-dom')

describe("<Form />", () => {
  it("render the <Form /> with populated data", () => {
    const { container } = render(
      <Form>
        <Form.Title>Sign In Now</Form.Title>
        <Form.Base>
          <Form.Input placeholder="Email address" onChange={() => {}} />
          <Form.Input
            type="password"
            autoComplete="off"
            placeholder="Password"
            onChange={() => {}}
          />
          <Form.Submit disabled data-testid="sign-in">
            Sign In
          </Form.Submit>
        </Form.Base>

        <Form.Text>
          New to Netflix? <Form.Link to="/signup">Sign up now.</Form.Link>
        </Form.Text>
        <Form.TextSmall>
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
          Learn more.
        </Form.TextSmall>
      </Form>
    );

    expect(screen.getByText("This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.")).toBeTruthy()
    expect(screen.getByText("Sign In Now")).toBeTruthy()
    expect(screen.getByText("Sign In").disabled).toBeTruthy()
    expect(screen.getByPlaceholderText("Email address")).toBeTruthy()
    expect(screen.getByPlaceholderText("Password")).toBeTruthy()
    expect(container.firstChild).toMatchSnapshot()
  });

  it("render the <Form /> with and error", () => {
    const { container } = render(
        <Form>
            <Form.Error>You email addresss is already being used</Form.Error>
            <Form.Submit type="submit">Sign In</Form.Submit>
        </Form>
    )

    expect(screen.getByText('You email addresss is already being used')).toBeTruthy()
    expect(screen.queryByText('Sign In').disabled).toBeFalsy()

    expect(container.firstChild).toMatchSnapshot()
  })
});
