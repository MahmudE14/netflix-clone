import { render, screen } from "@testing-library/react";
import { Home } from "../../pages";

jest.mock('react-router-dom')

describe('Homepage', () => {
  test('renders the homepage', () => {
    const { container } = render(<Home />)

    expect(screen.getByText('Unlimited films, TV programmes and more.')).toBeTruthy()
    expect(screen.getByText('Watch anywhere. cancel at any time.')).toBeTruthy()
    expect(screen.getAllByText('Ready to watch? Enter your email to create or restart your membership')).toBeTruthy()
    expect(screen.getAllByPlaceholderText('Email Address')).toBeTruthy()
    expect(screen.getAllByText('Try it now')).toBeTruthy()

    // expect(container.firstChild).toMatchSnapshot()
  })
})
