import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { autorizeAC, UserReducerState } from "./store/reducers/userReducer";
import LoginScreenContainer from "./containers/LoginScreenContainer";
import Lobby from "./containers/lobbyContainer";
import { TOKEN } from "./constants";
import "./styles.css";

function App() {
  const dispatch = useDispatch();
  const token = localStorage.getItem(TOKEN) || "";
  const isLogged = useSelector(
    (store: UserReducerState) => store.user.isLogged
  );

  useEffect(() => {
    token && dispatch(autorizeAC());
    // We dont need to add dispatch as deps
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  console.log("isLogged", isLogged);

  return (
    <>
      {isLogged ? (
        <Routes>
          {/* TODO: Update route logic */}
          <Route index path="*" element={<Lobby />} />
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
