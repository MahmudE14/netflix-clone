import { getByText, render, screen } from "@testing-library/react";
import { OptForm } from "../../components";

describe('<OptForm />', () => {
  it('renders <OptForm /> with populated data', () => {
    const { container } = render(
        <OptForm>
            <OptForm.Input placeholder="Email address" />
            <OptForm.Button>Try it now</OptForm.Button>
            <OptForm.Break />
            <OptForm.Text>
                Ready to watch? Enter your email to create or restart your membership.
            </OptForm.Text>
        </OptForm>
    )

    expect(screen.getByText("Try it now")).toBeTruthy()
    expect(screen.getByText("Ready to watch? Enter your email to create or restart your membership.")).toBeTruthy()
    expect(screen.getByPlaceholderText('Email address')).toBeTruthy()
    expect(container.firstChild).toMatchSnapshot()
  })
})
