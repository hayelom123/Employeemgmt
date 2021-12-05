import React, { useEffect } from "react";
import routes from "./route/routes";

import { MainBody } from "./styles/body_style";

import { SignIn } from "./components/signin";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import { NavBar } from "./Utils/topNavbar";
import { GlobalStyle } from "./styles/gloablstyle";
import { useSelector, useDispatch } from "react-redux";
import { RenderRoute } from "./route/renderRoute";
import { RootState } from "./components/redux/store/store";
import cookie from "react-cookies";
import { changeLogin } from "./components/redux/action";
import Modal from "./Utils/modal";
const App: React.FC = () => {
  const { login } = useSelector((state: RootState) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    if (cookie.load("user") && cookie.load("user")["signed"]) {
      dispatch(changeLogin(true));
    }
  }, []);
  return (
    <>
      <GlobalStyle />
      <div>
        <Router>
          <NavBar />
          <Modal />
          <MainBody>
            <Routes>
              {routes.map((el) => RenderRoute(el, login))}
              {/* <Route path="*" element={<Navigate to="/" />} /> */}
            </Routes>
          </MainBody>
        </Router>
      </div>
    </>
  );
};

export default App;
{
  /* <Button bgColor="violet" >Login</Button>
      <Button bgColor="green" >SignUp</Button>
      <Button bgColor="yellow" >Register</Button> */
}
