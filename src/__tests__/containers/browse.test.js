import BrowseContainer from "../../containers/browse";
import selectionFilter from "../../utils/selection-filter";
import { fireEvent, render, screen } from "@testing-library/react";
import { FirebaseContext } from "../../context/firebase";

jest.mock('react-router-dom')

const test_data = {
  series: [
    {
      title: "Good Will Hunting",
      slug: "good-will-hunting",
      maturity: "12",
      genre: "feel-good",
      id: "8775a770-aef4-485b-8b66-4e211b932381",
      description:
        "Will Hunting, a genius in mathematics, solves all the difficult mathematical problems. When he faces an emotional crisis, he takes help from psychiatrist Dr Sean Maguireto, who helps him recover.",
      docId: "1cmcQ45gYzIqFaEQlZxT",
    },
  ],
  films: [
    {
      title: "Fight Club",
      slug: "fight-club",
      id: "24f08808-a055-4a30-a607-fa086a1d9789",
      maturity: "15",
      description:
        "Discontented with his capitalistic lifestyle, a white-collared insomniac forms an underground fight club with Tyler, a careless soap salesman. The project soon spirals down into something sinister.",
      genre: "drama",
      docId: "0UnNpNFtBmRMiO0o7gmy",
    },
  ],
};

const firebase = {
  auth: () => ({
    currentUser: {
      displayName: "Mahmud",
      photoURL: "/images/test.png",
    },
  }),
};

const slides = selectionFilter({
  series: test_data["series"],
  films: test_data["films"],
});

describe("<BrowseContainer />", () => {
  it("renders <BrowseContainer /> with populated data", () => {
    render(
      <FirebaseContext.Provider value={{ firebase }}>
        <BrowseContainer slides={slides} />
      </FirebaseContext.Provider>
    );

    // check profile page
    expect(screen.getByText("Who's watching?")).toBeTruthy()
    fireEvent.click(screen.getByTestId('user-profile'))

    setTimeout(() => {
      //  check search
    }, 3000);
  });

  it("renders the loading screen and shows the rest by clicking on profile picture", () => {
    render(
      <FirebaseContext.Provider value={{ firebase }}>
        <BrowseContainer slides={slides} />
      </FirebaseContext.Provider>
    );

    expect(screen.getByText("Who's watching?")).toBeTruthy()
    fireEvent.click(screen.getByTestId('user-profile'))
    expect(screen.getByTestId("loading-picture")).toBeTruthy()

    expect(screen.getByTestId("search-click")).toBeTruthy()
    expect(screen.getByTestId("search-input")).toBeTruthy()
  })
});
