import { fireEvent, render, screen } from '@testing-library/react'
import { Player } from '../../components'

describe('<Player />', () => {
  it('renders the <Player /> with a bunny video', () => {
    const { container, getByText, queryByTestId } = render(
      <Player>
        <Player.Button />
        <Player.Video src="/videos/bunny.mp4" />
      </Player>
    )

    expect(screen.queryByTestId('player')).toBeFalsy()
    fireEvent.click(screen.getByText('Play'))

    expect(screen.getByTestId('player')).toBeTruthy()
    fireEvent.click(screen.queryByTestId('player'))

    expect(screen.queryByTestId('player')).toBeFalsy()
    expect(container.firstChild).toMatchSnapshot()
  })
})
