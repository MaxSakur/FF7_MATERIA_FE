import axios from "axios";
import { TOKEN } from "../constants";
import { MessageType, showMessage } from "../utils/showError";

const LOCAL = "http://localhost:5000";
// const REMOTE = "http://195.16.88.133:5000";

axios.defaults.baseURL = `${LOCAL}/api`;
axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem(
  TOKEN
)}`;

export const authorize = async () => {
  try {
    const response = await axios.get("/auth/rehydrate");
    return response;
  } catch (error) {
    showMessage(MessageType.error, error);
  }
};

export const login = async ({ email, password }) => {
  try {
    const response = await axios.post("/auth/login", {
      email,
      password,
    });

    return response;
  } catch (error) {
    showMessage(MessageType.error, error);
  }
};

export const registration = async ({ email, password }) => {
  try {
    const response = await axios.post("/auth/registration", {
      email,
      password,
    });

    return response;
  } catch (error) {
    showMessage(MessageType.error, error);
  }
};

export const characterRegistration = async ({ gender, role }) => {
  try {
    const response = await axios.post("/user/registerCharacter", {
      gender,
      role,
    });

    return response;
  } catch (error) {
    showMessage(MessageType.error, error);
  }
};
