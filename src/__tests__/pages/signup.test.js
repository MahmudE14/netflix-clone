import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { act } from "react-dom/test-utils";
import { FirebaseContext } from "../../context/firebase";
import { SignUp } from "../../pages";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: () => ({}),
}));

// const firebase = {
//   auth: jest.fn(() => ({
//     createUserWithEmailAndPassword: jest.fn(() =>
//       Promise.resolve({
//         user: {
//             updateProfile: jest.fn(() => Promise.resolve('I ma signed up!'))
//         }
//       })
//     ),
//   })),
// };

const firebase = {
  auth: () => ({
    createUserWithEmailAndPassword: () => Promise.resolve({
      user: {
        updateProfile: jest.fn(() => Promise.resolve("I'm signed up!")),
      },
    }),
  }),
};

describe("<SignUp />", () => {
  it("renders the sign up page with a form submission", async () => {
    render(
      <Router>
        <FirebaseContext.Provider value={{ firebase }}>
          <SignUp />
        </FirebaseContext.Provider>
      </Router>
    );

    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => {
      await fireEvent.change(screen.getByPlaceholderText("First name"), {
        target: { value: "Mahmud" },
      });

      await fireEvent.change(screen.getByPlaceholderText("Email address"), {
        target: { value: "mahmud1@mail.com" },
      });

      await fireEvent.change(screen.getByPlaceholderText("Password"), {
        target: { value: "12345678" },
      });
    });

    fireEvent.click(screen.getByTestId("sign-up"));

    expect(screen.getByPlaceholderText("First name").value).toBe("Mahmud");
    expect(screen.getByPlaceholderText("Email address").value).toBe(
      "mahmud1@mail.com"
    );
    expect(screen.getByPlaceholderText("Password").value).toBe("12345678");
    expect(screen.queryByTestId("error")).toBeFalsy();
  });
});
