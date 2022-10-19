import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { autorizeAC } from "./store/reducers/userReducer";
import LoginScreenContainer from "./containers/LoginScreenContainer";
import Lobby from "./containers/lobbyContainer";
import "./styles.css";

function App() {
  const dispatch = useDispatch();
  const token = localStorage.getItem("user_token") || "";
  const isLogged = useSelector((store) => store.user.isLogged);

  useEffect(() => {
    token && dispatch(autorizeAC());
    // We dont need to add dispatch as deps
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  return (
    <>
      {isLogged ? (
        <Routes>
          <Route path="*" index element={<Lobby />} />
        </Routes>
      ) : (
        <Routes>
          <Route index path="*" element={<LoginScreenContainer />} />
        </Routes>
      )}
    </>
  );
}

export default App;
