import { useDispatch } from "react-redux";
import { LogOutButton } from "../../components/common/styled_components";
import Character from "../../containers/character";
import Screen from "../../components/screen";
import { logOutAC } from "../../store/reducers/userReducer";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
// @ts-ignore: Local storage using
// import BG from "/video/videoBG4.mp4";

export const MainScreen = () => {
  const dispatch = useDispatch();
  const onActionPress = () => {
    dispatch(logOutAC());
  };
  return (
    <Screen video="./../../assets/video/videoBG4.mp4" screenName="Main">
      <DndProvider backend={HTML5Backend}>
        <Character />
      </DndProvider>
      <Character />
      <LogOutButton onClick={() => onActionPress()}>OUT</LogOutButton>
    </Screen>
  );
};
