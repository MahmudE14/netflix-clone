import { getByText, render, screen } from "@testing-library/react";
import { Loading } from "../../components";

describe("<Loading />", () => {
    it("render the <Loading /> component", () => {
      const { container } = render(
        <Loading src="/images/misc/loading.gif" data-testid="loading" />
      )

      expect(screen.getByTestId("loading")).toBeTruthy()
      expect(screen.getByTestId("loading-picture")).toBeTruthy()
      expect(container.firstChild).toMatchSnapshot()
    })

    it('renders the <Loading.ReleaseBody />', () => {
        const { container } = render(<Loading.ReleaseBody />)
        expect(container.firstChild).toMatchSnapshot()
    })
})
