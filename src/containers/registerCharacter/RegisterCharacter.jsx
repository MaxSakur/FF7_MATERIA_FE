import { useDispatch, useSelector } from "react-redux";
import RolePicker from "../rolePicker";
import CharacterInfo from "../characterInfoContainer";
import Screen from "../../components/screen";
import Button from "../../components/button";
import { updateCharacterAC } from "../../store/reducers/characterReduser";
// import BG from "./../../assets/video/videoBG4.mp4";

export const RegisterCharacter = () => {
  const { gender, role } = useSelector((store) => store.character);
  const dispatch = useDispatch();
  const hangleButtonClick = (gender, role) => {
    dispatch(updateCharacterAC(gender, role));
  };
  return (
    <Screen screenName="Registration">
      <CharacterInfo />
      <RolePicker />
      <Button text="register" onClick={() => hangleButtonClick(gender, role)} />
    </Screen>
  );
};
