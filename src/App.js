import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home, Browse, SignIn, SignUp } from "./pages";
import * as ROUTES from "./constants/routes";
import { IsUserRedirect } from "./helpers/routes";
import { useAuthListener } from "./hooks";

export default function App() {
  const { user } = useAuthListener()

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path={ROUTES.SIGN_IN} element={
          !user?.uid ? <SignIn /> : <Navigate to={{ pathname: ROUTES.BROWSE }} />
        } />
        <Route exact path={ROUTES.SIGN_UP} element={
          !user?.uid ? <SignUp /> : <Navigate to={{ pathname: ROUTES.BROWSE }} />
        } />
        <Route exact path={ROUTES.BROWSE} element={
          user?.uid ? <Browse /> : <Navigate to={{ pathname: ROUTES.SIGN_IN, from: Browse }} />
        } />
        <Route exact path={ROUTES.HOME} element={ <Home /> } />
      </Routes>
    </BrowserRouter>
  );
}
