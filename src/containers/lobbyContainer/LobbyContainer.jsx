import React from "react";
import { useSelector } from "react-redux";
import LogOutButton from "../../components/logOutButton";
import { MainScreen } from "../../screens/main/MainScreen";
import { RegisterCharacter } from "../registerCharacter/RegisterCharacter";

export const LobbyContainer = () => {
  const isCharacterRegistered = useSelector(
    (store) => store.character.isCharacterRegistered
  );
  console.log("isCharacterRegistered", isCharacterRegistered);
  return (
    <>
      {isCharacterRegistered ? <MainScreen /> : <RegisterCharacter />}
      <LogOutButton />
    </>
  );
};
