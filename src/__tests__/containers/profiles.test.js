import { fireEvent, render, screen } from "@testing-library/react";
import SelectProfileContainer from "../../containers/profiles";

jest.mock('react-router-dom')

describe('<Profiles />', () => {
  it('renders the <Profiles />', () => {
    const user = {
        displayName: 'Usama',
        photoURL: 'profile.png'
    }
    const setProfile = jest.fn()

    render(
        <SelectProfileContainer
            user={user}
            setProfile={setProfile}
        />
    )

    fireEvent.click(screen.getByTestId('user-profile'))
    expect(setProfile).toHaveBeenCalled()
  })
})
