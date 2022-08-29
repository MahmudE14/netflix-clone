import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { act } from "react-dom/test-utils";
import { FirebaseContext } from "../../context/firebase";
import { SignIn } from "../../pages";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: () => ({}),
}));

// const firebase = {
//   auth: jest.fn(() => ({
//     signInWithEmailAndPassword: jest.fn(() =>
//       Promise.resolve("I am signed in!")
//     ),
//   })),
// };

const firebase = {
//   auth: () => ({
//     signInWithEmailAndPassword() {
//       return Promise.resolve("I am signed in!");
//     },
//   }),
    auth: () => ({
        signInWithEmailAndPassword: () => Promise.resolve("I am signed in!")
    }),
};

// console.log(JSON.stringify(firebase.auth()));

describe("<SignIn />", () => {
  it("renders the sign in page with a form submission", async () => {
    render(
      <Router>
        <FirebaseContext.Provider value={{ firebase }}>
          <SignIn testFirebase={firebase} />
        </FirebaseContext.Provider>
      </Router>
    );

    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => {
      await fireEvent.change(screen.getByPlaceholderText("Email address"), {
        target: { value: "mahmud@mail.com" },
      });

      await fireEvent.change(screen.getByPlaceholderText("Password"), {
        target: { value: "12345678" },
      });
    });

    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => {
      await fireEvent.change(screen.getByPlaceholderText("Email address"), {
        target: { value: "mahmud@mail.com" },
      });

      await fireEvent.change(screen.getByPlaceholderText("Password"), {
        target: { value: "12345678" },
      });
    });

    fireEvent.click(screen.getByTestId("sign-in"));

    expect(screen.getByPlaceholderText("Email address").value).toBe(
      "mahmud@mail.com"
    );
    expect(screen.getByPlaceholderText("Password").value).toBe("12345678");
    expect(screen.queryByTestId("error")).toBeFalsy();
  });
});
